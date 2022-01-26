import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ShapeButtonsWithColor } from './ShapeButtonsWithColor';
import {
    bangs as bangUrls, bigColorOption, bodice, browUrls, characterUrls,
    corset,
    corsetTies,
    eyeUrls, fleshColor, hairBraids as hairBraidUrls, hairDown as hairDownUrls, hairEx as hairExUrls, hairUp as hairUpUrls,
    headHair as headHairUrls, lipColor, lipsUrls, noseUrls, pants, Shape, topCorset, topCorsetTies, tops
} from './DUGColorAndImgLists';
import { SelectedShape } from './ImgDisplay';

//type Character = { [key: string]: Shape }

export interface Character {
    name: string
    character?: Shape
    lips?: Shape
    nose?: Shape
    brow?: Shape
    eye?: Shape
    bangs?: Shape
    headHair?: Shape
    hairEx?: Shape
    hairUp?: Shape
    hairDown?: Shape
    hairBraids?: Shape
    tops?: Shape
    topCorset?: Shape
    topCorsetTies?: Shape
    bodice?: Shape
    corset?: Shape
    corsetTies?: Shape
    pants?: Shape

}

type CharacterKey = keyof Character
interface TrayRendering {
    label: string, key: CharacterKey, itemUrls: Shape[], colors: string[], colors2?: string[]
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

                    character: characterUrls[0],
                    lips: lipsUrls[0],
                    nose: noseUrls[0],
                    brow: browUrls[0],
                    eye: eyeUrls[0],

                    headHair: undefined,
                    bangs: undefined,
                    hairEx: undefined,
                    hairUp: undefined,
                    hairDown: undefined,
                    hairBraids: undefined,

                    tops: tops[0],
                    topCorset: undefined,
                    topCorsetTies: undefined,
                    bodice: bodice[0],
                    corset: undefined,
                    corsetTies: undefined,

                    pants: pants[0],

                }
            }
        }
    }

    renderSideBar(trayOptions: TrayRendering[]) {
        return trayOptions.map(({ label, key, itemUrls, colors, colors2 }) =>
            <ShapeButtonsWithColor
                itemName={label}
                itemUrls={itemUrls}
                onShapeSelect={(shape: Shape) => {
                    console.log(shape);
                    this.setState({ currentCharacter: { ...this.state.currentCharacter, [key]: shape } })
                }}
                selectableColors={colors}
                secondSelectableColors={colors2}
                defaultShape={this.state.currentCharacter[key] as Shape}
            />
        )
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
                ...this.state.currentCharacter,
                name: this.state.favoriteInput,
            }]
        })
    }

    trayData = {

        "Body":
            [
                { label: "Character", key: "character", itemUrls: characterUrls, colors: fleshColor } as TrayRendering,
                { label: "Brows", key: "brow", itemUrls: browUrls, colors: bigColorOption } as TrayRendering,
                { label: "Eyes", key: "eye", itemUrls: eyeUrls, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
                { label: "Nose", key: "nose", itemUrls: noseUrls, colors: [] } as TrayRendering,
                { label: "Lips", key: "lips", itemUrls: lipsUrls, colors: lipColor } as TrayRendering,
            ],
        "Hair": [

            { label: "Head Hair", key: "headHair", itemUrls: headHairUrls, colors: bigColorOption } as TrayRendering,
            { label: "Bangs", key: "bangs", itemUrls: bangUrls, colors: bigColorOption } as TrayRendering,
            { label: "Hair Braids", key: "hairBraids", itemUrls: hairBraidUrls, colors: bigColorOption } as TrayRendering,
            { label: "Front Hair", key: "hairEx", itemUrls: hairExUrls, colors: bigColorOption } as TrayRendering,
            { label: "Hair Tied", key: "hairUp", itemUrls: hairUpUrls, colors: bigColorOption } as TrayRendering,
            { label: "Hair Down", key: "hairDown", itemUrls: hairDownUrls, colors: bigColorOption } as TrayRendering,
        ],
        "Tops": [
            { label: "Tops", key: "tops", itemUrls: tops, colors: bigColorOption } as TrayRendering,
            { label: "Upper Corset", key: "topCorset", itemUrls: topCorset, colors: bigColorOption } as TrayRendering,
            { label: "Upper Corset Ties", key: "topCorsetTies", itemUrls: topCorsetTies, colors: bigColorOption } as TrayRendering,
            { label: "Bodice", key: "bodice", itemUrls: bodice, colors: bigColorOption } as TrayRendering,
            { label: "Corset", key: "corset", itemUrls: corset, colors: bigColorOption } as TrayRendering,
            { label: "Corset Ties", key: "corsetTies", itemUrls: corsetTies, colors: bigColorOption } as TrayRendering,

        ],
        "Pants": [
            { label: "Pants", key: "pants", itemUrls: pants, colors: bigColorOption } as TrayRendering,
        ]
    };

    previewPaneDisplayOrder: CharacterKey[] = [
        "hairDown",
        "hairUp",
        "character",
        "lips",
        "nose",
        "brow",
        "eye",
        "headHair",
        "hairBraids",
        "bangs",
        "pants",
        "bodice",
        "corset",
        "corsetTies",
        "tops",
        "topCorset",
        "topCorsetTies",
        "hairEx",

    ]

    render(): React.ReactNode {
        console.log(this.state.currentCharacter)
        return (
            <>
                <div>
                    {/* ART */}
                    <div >
                        {this.previewPaneDisplayOrder
                            .map((key) =>
                                this.state.currentCharacter[key] && <SelectedShape shape={this.state.currentCharacter[key] as Shape} />
                            )}

                    </div>

                    {/*Buttons*/}
                    {Object.values(this.trayData).map((trayOptions, index) => {
                        return this.state.openedTray === index &&
                            <div className="tray">
                                {
                                    this.renderSideBar(trayOptions)
                                }
                            </div>
                    })}


                    {/*go to Panel*/}
                    <span className='traySelector'>
                        {Object.keys(this.trayData).map((buttonName, index) =>
                            <button onClick={() => this.setState({ openedTray: index })}>{buttonName}</button>)
                        }
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
                                character: characterUrls[0],
                                lips: lipsUrls[0],
                                nose: noseUrls[0],
                                brow: browUrls[0],
                                eye: eyeUrls[0],
                                bangs: undefined,
                                headHair: undefined,
                                hairEx: undefined,
                                hairDown: undefined,
                                hairBraids: undefined,
                                hairUp: undefined,
                                tops: tops[0],
                                topCorset: undefined,
                                topCorsetTies: undefined,
                                bodice: bodice[0],
                                corset: undefined,
                                corsetTies: undefined,
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