import React from 'react';
import './DressUpGame.css'
import { ShapeButtons, Shape } from './DressUpGameButton';

let hatImgs = ['./Hats/hat1.png', './Hats/hat2.png', './Hats/hat1.png', './Hats/hat2.png',
    './Hats/hat1.png', './Hats/hat2.png', './Hats/hat1.png', './Hats/hat2.png']
let shirtImgs = ['./Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png',
    './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png',
    './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png', './Hats/shirt1.png', './Hats/shirt2.png']


class SelectedShape extends React.Component<{ shape: Shape }, {}> {

    render(): React.ReactNode {
        return (
            <div>
                {/*<span style={{ border: "1px solid black" }}>{this.state.colorStyle}</span>
                <span>{this.state.fillUrl}</span>*/}

                <img src={this.props.shape.fillUrl} className={this.props.shape.color + " smallImg star"} />
                <img src={this.props.shape.outlineUrl} className="smallImg star" />
            </div>
        )
    }
}


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

    selectedShape: Shape | undefined
}
export class DressUpGameTryingStuff extends React.Component<any, DU1State> {
    constructor(props: any) {
        super(props);
        var storedState = window.localStorage.getItem("state");
        if (storedState) {
            this.state = JSON.parse(storedState);
        } else {
            this.state = {
                favoriteInput: "",
                favorites: [],
                hatUrl: "",
                shirtUrl: "",

                selectedShape: undefined
            }
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
                        <ClothingButtons itemName='Hats 5' imgUrls={hatImgs} onClick={(url) => this.setState({ hatUrl: url })} />
                        <ClothingButtons itemName='Shirts' imgUrls={shirtImgs} onClick={(url) => this.setState({ shirtUrl: url })} />

                        <ShapeButtons
                            itemName='Shape'
                            onShapeSelect={(shape: Shape) => {
                                console.log(shape);
                                this.setState({ selectedShape: shape })
                            }}
                        />

                    </div>

                    <div style={{ width: "70%" }}>
                        <div>
                            <img src={this.state.hatUrl} className="smallImg" />
                        </div>
                        <div>
                            <img src={this.state.shirtUrl} style={{ height: "120px" }} />
                        </div>

                        {this.state.selectedShape && <SelectedShape shape={this.state.selectedShape} />}

                        <input type="text"
                            value={this.state.favoriteInput}
                            onChange={(e) => this.setState({ favoriteInput: e.target.value })} />
                        <button onClick={() => this.saveFavorite()} >Save</button>
                        <ul>{this.state.favorites.map(x => this.renderFavoriteListItem(x))}</ul>

                        <button onClick={() => this.setState({ hatUrl: "", shirtUrl: "", selectedShape: undefined })}>Reset</button>
                        <button onClick={() => window.localStorage.setItem("state", JSON.stringify(this.state))}>Save to LocalStorage</button>
                        <button onClick={() => window.localStorage.clear()}>Clear LocalStorage</button>
                    </div>
                </div>

            </>
        )
    }
}