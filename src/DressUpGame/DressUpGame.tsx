import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ShapeButtonsWithColor, ShapeButtonsWithoutColor } from './DressUpGameButton';
import { bigColorOption, browUrls, characterUrls, fleshColor, lipColor, lipsUrls, noseUrls, Shape } from './DUGColorAndImgLists';
import { SelectedShape } from './ImgDisplay';


export interface Favorite {
    name: string
    character?: Shape
    lips?: Shape
    nose?: Shape
    brow?: Shape
}

export interface DU1State {
    favoriteInput: string
    favorites: Favorite[]

    character: Shape | undefined
    lips: Shape | undefined
    nose: Shape | undefined
    brow: Shape | undefined
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

                character: undefined,
                lips: undefined,
                nose: undefined,
                brow: undefined
            }
        }
    }

    renderFavoriteListItem(favorite: Favorite): React.ReactNode {
        return (
            <li onClick={() => this.setState({ character: favorite.character, lips: favorite.lips, nose: favorite.nose, brow: favorite.brow })}>
                {favorite.name}
            </li>);
    }

    saveFavorite(): void {
        this.setState({
            favoriteInput: "",
            favorites: [...this.state.favorites,
            {
                name: this.state.favoriteInput,
                character: this.state.character,
                lips: this.state.lips,
                nose: this.state.nose,
                brow: this.state.brow,
            }]
        })
    }


    render(): React.ReactNode {
        console.log(this.state)
        return (
            <>
                <div>


                    {/* ART */}
                    <div >
                        {this.state.character && <SelectedShape shape={this.state.character} />}
                        {this.state.lips && <SelectedShape shape={this.state.lips} />}
                        {this.state.nose && <SelectedShape shape={this.state.nose} />}
                        {this.state.brow && <SelectedShape shape={this.state.brow} />}



                    </div>
                    {/* Tray */}
                    <div className="clothesTray">

                        <ShapeButtonsWithColor
                            itemName='Character'
                            itemUrls={characterUrls}
                            onShapeSelect={(shape: Shape) => {
                                console.log(shape);
                                this.setState({ character: shape })
                            }}
                            color={fleshColor}
                        />
                        <ShapeButtonsWithColor
                            itemName='Lips'
                            itemUrls={lipsUrls}
                            onShapeSelect={(shape: Shape) => {
                                console.log(shape);
                                this.setState({ lips: shape })
                            }}
                            color={lipColor}
                        />
                        <ShapeButtonsWithoutColor
                            itemName='Nose'
                            itemUrls={noseUrls}
                            onShapeSelect={(shape: Shape) => {
                                console.log(shape);
                                this.setState({ nose: shape })
                            }}
                        />
                        <ShapeButtonsWithColor
                            itemName='Brows'
                            itemUrls={browUrls}
                            onShapeSelect={(shape: Shape) => {
                                console.log(shape);
                                this.setState({ brow: shape })
                            }}
                            color={bigColorOption}
                        />


                    </div>
                    {/* Input and Save */}
                    <span className="input">
                        <input type="text"
                            value={this.state.favoriteInput}
                            onChange={(e) => this.setState({ favoriteInput: e.target.value })} />
                        <button onClick={() => this.saveFavorite()} >Save</button>
                        <ul>{this.state.favorites.map(x => this.renderFavoriteListItem(x))}</ul>

                        <button onClick={() => this.setState({ nose: undefined, lips: undefined, character: undefined, brow: undefined })}>Reset</button>
                        <button onClick={() => window.localStorage.setItem("state", JSON.stringify(this.state))}>Save to LocalStorage</button>
                        <button onClick={() => window.localStorage.clear()}>Clear LocalStorage</button>
                    </span>
                </div>

            </>
        )
    }
}