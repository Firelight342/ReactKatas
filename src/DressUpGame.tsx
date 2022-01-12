import React from 'react';
import './DressUpGame.css'

let hatImgs = ['./Hats/hat1.png', './Hats/hat2.png', './Hats/hat1.png', './Hats/hat2.png', './Hats/hat1.png', './Hats/hat2.png', './Hats/hat1.png', './Hats/hat2.png']
let shirtImgs = ['./Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png'
    , './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png']

interface ButtonProps {
    itemName: string,
    imgUrls: string[],
    onClick: (imgUrl: string) => void
}
interface ButtonState {
    isTrayOpen: boolean
}
class ClothingButtons extends React.Component<ButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false
        }
    }

    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        // boolean ? "if true" : "if false"
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}</h1>
                {this.state.isTrayOpen && this.props.imgUrls.map((imgUrl: string) => {
                    return (

                        <img
                            src={imgUrl}
                            className="clothesTrayImg"
                            onClick={() => this.props.onClick(imgUrl)} />

                    )
                })}
            </>
        );
    }
}
interface Favorite {
    hatUrl: string
    shirtUrl: string
    name: string
}

interface DU1State {
    hatUrl: string
    shirtUrl: string
    favoriteInput: string
    favorites: Favorite[]
}
export class DressUpGameTryingStuff extends React.Component<any, DU1State> {
    constructor(props: any) {
        super(props);
        this.state = {
            favoriteInput: "",
            favorites: [],
            hatUrl: "",
            shirtUrl: ""
        }
    }

    renderFavoriteListItem(favorite: Favorite): React.ReactNode {
        return (
            <li onClick={() => this.setState({ hatUrl: favorite.hatUrl, shirtUrl: favorite.shirtUrl })}>
                {favorite.name}
            </li>);
    }

    saveFavorite(): void {
        this.setState({
            favoriteInput: "",
            favorites: [...this.state.favorites,
            {
                name: this.state.favoriteInput,
                hatUrl: this.state.hatUrl,
                shirtUrl: this.state.shirtUrl
            }]
        })
    }

    render(): React.ReactNode {
        console.log(this.state)
        return (
            <>
                <div className='stage'>
                    <div className="clothesTray">
                        <ClothingButtons itemName='Hats' imgUrls={hatImgs} onClick={(url) => this.setState({ hatUrl: url })} />
                        <ClothingButtons itemName='Shirts' imgUrls={shirtImgs} onClick={(url) => this.setState({ shirtUrl: url })} />
                    </div>
                    <div style={{ width: "70%" }}>
                        <div>
                            <img src={this.state.hatUrl} className="smallImg" />
                        </div>
                        <div>
                            <img src={this.state.shirtUrl} style={{ height: "120px" }} />
                        </div>
                        <input type="text"
                            value={this.state.favoriteInput}
                            onChange={(e) => this.setState({ favoriteInput: e.target.value })} />
                        <button onClick={() => this.saveFavorite()} >Save</button>
                        <ul>{this.state.favorites.map(this.renderFavoriteListItem)}</ul>
                    </div>
                </div>

            </>
        )
    }
}