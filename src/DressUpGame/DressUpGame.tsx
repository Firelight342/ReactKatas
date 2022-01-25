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


export interface Favorite {
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
    hairEx: Shape | undefined
    hairUp: Shape | undefined
    hairDown: Shape | undefined
    hairBraids: Shape | undefined

    tops: Shape | undefined

    bodice: Shape | undefined

    pants: Shape | undefined
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

    renderFavoriteListItem(favorite: Favorite): React.ReactNode {
        return (
            <li onClick={() => this.setState({
                character: favorite.character,
                lips: favorite.lips,
                nose: favorite.nose,
                brow: favorite.brow,
                eye: favorite.eye,
                eyeColor: favorite.eyeColor,
                bangs: favorite.bangs,
                headHair: favorite.headHair,
                hairEx: favorite.hairEx,
                hairUp: favorite.hairUp,
                hairDown: favorite.hairDown,
                hairBraids: favorite.hairBraids,
                tops: favorite.tops,

                bodice: favorite.bodice,
                pants: favorite.pants,

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
                eyeColor: this.state.eyeColor,
                bangs: this.state.bangs,
                headHair: this.state.headHair,
                hairEx: this.state.hairEx,
                hairUp: this.state.hairUp,
                hairDown: this.state.hairDown,
                hairBraids: this.state.hairBraids,
                tops: this.state.tops,

                bodice: this.state.bodice,
                pants: this.state.pants,
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
                        {this.state.hairDown && <SelectedShape shape={this.state.hairDown} />}
                        {this.state.hairUp && <SelectedShape shape={this.state.hairUp} />}

                        {this.state.character && <SelectedShape shape={this.state.character} />}
                        {this.state.lips && <SelectedShape shape={this.state.lips} />}
                        {this.state.nose && <SelectedShape shape={this.state.nose} />}
                        {this.state.brow && <SelectedShape shape={this.state.brow} />}
                        {this.state.eyeColor && <SelectedShape shape={this.state.eyeColor} />}
                        {this.state.eye && <SelectedShape shape={this.state.eye} />}

                        {this.state.headHair && <SelectedShape shape={this.state.headHair} />}
                        {this.state.hairBraids && <SelectedShape shape={this.state.hairBraids} />}
                        {this.state.bangs && <SelectedShape shape={this.state.bangs} />}

                        {this.state.pants && <SelectedShape shape={this.state.pants} />}
                        {this.state.bodice && <SelectedShape shape={this.state.bodice} />}
                        {this.state.tops && <SelectedShape shape={this.state.tops} />}

                        {this.state.hairEx && <SelectedShape shape={this.state.hairEx} />}



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
                                currentShape={this.state.brow}
                                currentColor={this.state.brow?.color}
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
                                currentShape={this.state.lips}
                                currentColor={this.state.lips?.color}
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
                                currentColor={this.state.headHair?.color}
                                currentShape={this.state.headHair}
                            />
                            <ShapeButtonsWithColor
                                itemName='Bangs'
                                itemUrls={bangs}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ bangs: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.bangs?.color}
                                currentShape={this.state.bangs}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Braids'
                                itemUrls={hairBraids}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ hairBraids: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.hairBraids?.color}
                                currentShape={this.state.hairBraids}
                            />
                            <ShapeButtonsWithColor
                                itemName='Front Hair'
                                itemUrls={hairEx}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ hairEx: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.hairEx?.color}
                                currentShape={this.state.hairEx}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Tied'
                                itemUrls={hairUp}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ hairUp: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.hairUp?.color}
                                currentShape={this.state.hairUp}
                            />
                            <ShapeButtonsWithColor
                                itemName='Hair Down'
                                itemUrls={hairDown}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ hairDown: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.hairDown?.color}
                                currentShape={this.state.hairDown}
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
                                    this.setState({ tops: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.tops?.color}
                                currentShape={this.state.tops}
                            />
                            <ShapeButtonsWithColor
                                itemName='Bodice'
                                itemUrls={bodice}
                                onShapeSelect={(shape: Shape) => {
                                    console.log(shape);
                                    this.setState({ bodice: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.bodice?.color}
                                currentShape={this.state.bodice}
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
                                    this.setState({ pants: shape })
                                }}
                                color={bigColorOption}
                                currentColor={this.state.pants?.color}
                                currentShape={this.state.pants}
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
                            pants: pants[0],

                            openedTray: 0

                        })}>Reset</button>

                        <button onClick={() => window.localStorage.setItem("state", JSON.stringify(this.state))}>Save to LocalStorage</button>
                        <button onClick={() => window.localStorage.clear()}>Clear LocalStorage</button>
                    </span>
                </div>

            </>
        )
    }
}