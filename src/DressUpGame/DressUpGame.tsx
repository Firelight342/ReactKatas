import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ShapeButtonsWithColor, ShapeButtonsWithoutColor } from './DressUpGameButton';
import { bangs, bigColorOption, browUrls, characterUrls, eyeLashUrls, eyeUrls, fleshColor, headHair, lipColor, lipsUrls, noseUrls, Shape } from './DUGColorAndImgLists';
import { SelectedShape } from './ImgDisplay';
import { ColorButtonsForPermObj } from './DressUpGameColorButton';


export interface Favorite {
    name: string
    character?: Shape
    lips?: Shape
    nose?: Shape
    brow?: Shape
    eye?: Shape
    eyeColor?: Shape
}

export interface DU1State {
    favoriteInput: string
    favorites: Favorite[]

    openedTray: number

    character: Shape | undefined
    lips: Shape | undefined
    nose: Shape | undefined
    brow: Shape | undefined
    eyeColor: Shape | undefined
    eye: Shape | undefined

    headHair: Shape | undefined
    bangs: Shape | undefined
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

                openedTray: 0,

                character: characterUrls,
                lips: lipsUrls[0],
                nose: noseUrls[0],
                brow: browUrls[0],
                eyeColor: undefined,
                eye: eyeLashUrls[8],

                headHair: undefined,
                bangs: undefined,
            }
        }
    }

    renderFavoriteListItem(favorite: Favorite): React.ReactNode {
        return (
            <li onClick={() => this.setState({
                character: favorite.character,
                lips: favorite.lips,
                nose: favorite.nose,
                brow: favorite.brow,
                eye: favorite.eye,
                eyeColor: favorite.eyeColor
            })}>
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
                eye: this.state.eye,
                eyeColor: this.state.eyeColor
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
                        {this.state.eyeColor && <SelectedShape shape={this.state.eyeColor} />}
                        {this.state.eye && <SelectedShape shape={this.state.eye} />}

                        {this.state.headHair && <SelectedShape shape={this.state.headHair} />}
                        {this.state.bangs && <SelectedShape shape={this.state.bangs} />}


                    </div>
                    {/* Tray 1*/}
                    {this.state.openedTray === 0 &&
                        <div className="tray">
                            <ColorButtonsForPermObj
                                itemName='Character'
                                imgUrl={characterUrls}
                                onClick={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ character: shape })
                                }}
                                color={fleshColor}
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
                            <ShapeButtonsWithoutColor
                                itemName='Eye'
                                itemUrls={eyeLashUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ eye: shape })
                                }}
                            />
                            <ColorButtonsForPermObj
                                itemName='Eyes Color'
                                imgUrl={eyeUrls}
                                onClick={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ eyeColor: shape })
                                }}
                                color={bigColorOption}
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
                                itemName='Lips'
                                itemUrls={lipsUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ lips: shape })
                                }}
                                color={lipColor}
                            />


                        </div>}

                    {/* Tray 2*/}
                    {this.state.openedTray === 1 &&
                        <div className="tray">
                            <ShapeButtonsWithColor
                                itemName='Head Hair'
                                itemUrls={headHair}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ headHair: shape })
                                }}
                                color={bigColorOption}
                            />
                            <ShapeButtonsWithColor
                                itemName='Bangs'
                                itemUrls={bangs}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ bangs: shape })
                                }}
                                color={bigColorOption}
                            />




                        </div>}
                    {/*go to Panel*/}
                    <span className='traySelector'>
                        <button onClick={() => this.setState({ openedTray: 0 })}>Body</button>
                        <button onClick={() => this.setState({ openedTray: 1 })}>Hair</button>
                    </span>
                    {/* Input and Save */}
                    <span className="input">
                        <input type="text"
                            value={this.state.favoriteInput}
                            onChange={(e) => this.setState({ favoriteInput: e.target.value })} />
                        <button onClick={() => this.saveFavorite()} >Save</button>
                        <ul>{this.state.favorites.map(x => this.renderFavoriteListItem(x))}</ul>

                        <button onClick={() => this.setState({
                            character: characterUrls,
                            lips: lipsUrls[0],
                            nose: noseUrls[0],
                            brow: browUrls[0],
                            eyeColor: { color: "grey" },
                            eye: eyeLashUrls[8],
                        })}>Reset</button>

                        <button onClick={() => window.localStorage.setItem("state", JSON.stringify(this.state))}>Save to LocalStorage</button>
                        <button onClick={() => window.localStorage.clear()}>Clear LocalStorage</button>
                    </span>
                </div>

            </>
        )
    }
}