import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ShapeButtonsWithColor, ShapeButtonsWithoutColor } from './DressUpGameButton';
import {
    bangs, bigColorOption, bodice, browUrls, characterUrls,
    eyeLashUrls, eyeUrls, fleshColor, hairBraids, hairDown, hairEx, hairUp,
    headHair, lipColor, lipsUrls, noseUrls, pants, Shape, tops
} from './DUGColorAndImgLists';
import { SelectedShape } from './ImgDisplay';
import { ColorButtonsForPermObj } from './DressUpGameColorButton';

//type Character = { [key: string]: Shape }

export interface Character {
    name: string
    character?: Shape
    lips?: Shape
    nose?: Shape
    brow?: Shape
    eye?: Shape
    eyeColor?: Shape
    bangs?: Shape
    headHair?: Shape
    hairEx?: Shape
    hairUp?: Shape
    hairDown?: Shape
    hairBraids?: Shape
    tops?: Shape
    bodice?: Shape
    pants?: Shape
}

export interface DU1State {
    favoriteInput: string
    favorites: Character[]
    currentCharacter: Character
    openedTray: number
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
                currentCharacter: {
                    name: "",

                    character: characterUrls,
                    lips: lipsUrls[0],
                    nose: noseUrls[0],
                    brow: browUrls[0],
                    eyeColor: undefined,
                    eye: eyeLashUrls[8],

                    headHair: undefined,
                    bangs: undefined,
                    hairEx: undefined,
                    hairUp: undefined,
                    hairDown: undefined,
                    hairBraids: undefined,

                    tops: tops[0],
                    bodice: bodice[0],
                    pants: pants[0],

                }
            }
        }
    }

    renderFavoriteListItem(favorite: Character): React.ReactNode {
        return (
            <li onClick={() => this.setState({ currentCharacter: favorite })}>
                {favorite.name}
            </li>);
    }

    saveFavorite(): void {
        this.setState({
            favoriteInput: "",
            favorites: [...this.state.favorites,
            {
                ... this.state.currentCharacter,
                name: this.state.favoriteInput,
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
                        {this.state.currentCharacter.hairDown && <SelectedShape shape={this.state.currentCharacter.hairDown} />}
                        {this.state.currentCharacter.hairUp && <SelectedShape shape={this.state.currentCharacter.hairUp} />}
                        {this.state.currentCharacter.character && <SelectedShape shape={this.state.currentCharacter.character} />}
                        {this.state.currentCharacter.lips && <SelectedShape shape={this.state.currentCharacter.lips} />}
                        {this.state.currentCharacter.nose && <SelectedShape shape={this.state.currentCharacter.nose} />}
                        {this.state.currentCharacter.brow && <SelectedShape shape={this.state.currentCharacter.brow} />}
                        {this.state.currentCharacter.eyeColor && <SelectedShape shape={this.state.currentCharacter.eyeColor} />}
                        {this.state.currentCharacter.eye && <SelectedShape shape={this.state.currentCharacter.eye} />}
                        {this.state.currentCharacter.headHair && <SelectedShape shape={this.state.currentCharacter.headHair} />}
                        {this.state.currentCharacter.hairBraids && <SelectedShape shape={this.state.currentCharacter.hairBraids} />}
                        {this.state.currentCharacter.bangs && <SelectedShape shape={this.state.currentCharacter.bangs} />}
                        {this.state.currentCharacter.pants && <SelectedShape shape={this.state.currentCharacter.pants} />}
                        {this.state.currentCharacter.bodice && <SelectedShape shape={this.state.currentCharacter.bodice} />}
                        {this.state.currentCharacter.tops && <SelectedShape shape={this.state.currentCharacter.tops} />}
                        {this.state.currentCharacter.hairEx && <SelectedShape shape={this.state.currentCharacter.hairEx} />}



                    </div>
                    {/* Tray 1*/}
                    {this.state.openedTray === 0 &&
                        <div className="tray">
                            <ColorButtonsForPermObj
                                itemName='Character'
                                imgUrl={characterUrls}
                                onClick={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, character: shape } })
                                }}
                                color={fleshColor}
                            />
                            <ShapeButtonsWithColor
                                itemName='Brows'
                                itemUrls={browUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, brow: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.brow}
                            />
                            <ShapeButtonsWithoutColor
                                itemName='Eye'
                                itemUrls={eyeLashUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, eye: shape } })
                                }}
                            />
                            <ColorButtonsForPermObj
                                itemName='Eyes Color'
                                imgUrl={eyeUrls}
                                onClick={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, eyeColor: shape } })
                                }}
                                color={bigColorOption}
                            />
                            <ShapeButtonsWithoutColor
                                itemName='Nose'
                                itemUrls={noseUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, nose: shape } })
                                }}
                            />
                            <ShapeButtonsWithColor
                                itemName='Lips'
                                itemUrls={lipsUrls}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, lips: shape } })
                                }}
                                color={lipColor}
                                defaultShape={this.state.currentCharacter.lips}
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
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, headHair: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.headHair}
                            />
                            <ShapeButtonsWithColor
                                itemName='Bangs'
                                itemUrls={bangs}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, bangs: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.bangs}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Braids'
                                itemUrls={hairBraids}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, hairBraids: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.hairBraids}
                            />
                            <ShapeButtonsWithColor
                                itemName='Front Hair'
                                itemUrls={hairEx}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, hairEx: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.hairEx}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Tied'
                                itemUrls={hairUp}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, hairUp: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.hairUp}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Down'
                                itemUrls={hairDown}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, hairDown: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.hairDown}
                            />
                        </div>}

                    {/* Tray 3*/}
                    {this.state.openedTray === 2 &&
                        <div className="tray">
                            <ShapeButtonsWithColor
                                itemName='Tops'
                                itemUrls={tops}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, tops: shape } })
                                }}
                                color={bigColorOption}

                                defaultShape={this.state.currentCharacter.tops}
                            />
                            <ShapeButtonsWithColor
                                itemName='Bodice'
                                itemUrls={bodice}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, bodice: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.bodice}
                            />
                        </div>}

                    {/* Tray 4*/}
                    {this.state.openedTray === 3 &&
                        <div className="tray">
                            <ShapeButtonsWithColor
                                itemName='Pants'
                                itemUrls={pants}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ currentCharacter: { ...this.state.currentCharacter, pants: shape } })
                                }}
                                color={bigColorOption}
                                defaultShape={this.state.currentCharacter.pants}
                            />
                        </div>}

                    {/*go to Panel*/}
                    <span className='traySelector'>
                        <button onClick={() => this.setState({ openedTray: 0 })}>Body</button>
                        <button onClick={() => this.setState({ openedTray: 1 })}>Hair</button>
                        <button onClick={() => this.setState({ openedTray: 2 })}>Tops</button>
                        <button onClick={() => this.setState({ openedTray: 3 })}>Pants</button>
                    </span>
                    {/* Input and Save */}
                    <span className="input">
                        <input type="text"
                            value={this.state.favoriteInput}
                            onChange={(e) => this.setState({ favoriteInput: e.target.value })} />
                        <button onClick={() => this.saveFavorite()} >Save</button>
                        <ul>{this.state.favorites.map(x => this.renderFavoriteListItem(x))}</ul>

                        <button onClick={() => this.setState({
                            openedTray: 0,
                            currentCharacter: {
                                name: "",
                                character: characterUrls,
                                lips: lipsUrls[0],
                                nose: noseUrls[0],
                                brow: browUrls[0],
                                eyeColor: { color: "grey" },
                                eye: eyeLashUrls[8],
                                bangs: undefined,
                                headHair: undefined,
                                hairEx: undefined,
                                hairDown: undefined,
                                hairBraids: undefined,
                                hairUp: undefined,
                                tops: tops[0],
                                bodice: bodice[0],
                                pants: pants[0]
                            }
                        })}>Reset</button>

                        <button onClick={() => window.localStorage.setItem("state", JSON.stringify(this.state))}>Save to LocalStorage</button>
                        <button onClick={() => window.localStorage.clear()}>Clear LocalStorage</button>
                    </span>
                </div>

            </>
        )
    }
}