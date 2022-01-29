import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ShapeButtonsWithColor } from './ShapeButtonsWithColor';
import {
    armArmor,
    arms,
    armTies,
    bangs as bangUrls, belts, beltSkirts, bigColorOption, bodice, bodyArmor, browUrls, cloaks, characterUrls,
    corset,
    corsetTies,
    eyeUrls, fleshColor, hairBraids as hairBraidUrls, hairDown as hairDownUrls, hairEx as hairExUrls, hairUp as hairUpUrls,
    headHair as headHairUrls, lipColor, lipsUrls, noseUrls, pants, Shape, shawls, shoes, shoulderArmor, skirts, sleeves,
    socks, topArmor, topCorset, topCorsetTies, tops, cloakTops, overShirts, hood, crowns, necklaces, earings, handHeld, foregrounds, backgrounds, middlegrounds
} from './DUGColorAndImgLists';
import { Frame, SelectedShape } from './ImgDisplay';

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
    socks?: Shape
    skirts?: Shape
    belts?: Shape
    beltSkirts?: Shape
    arms?: Shape
    armTies?: Shape
    sleeves?: Shape
    bgSkirt?: Shape
    eyeWhites?: Shape
    topArmor?: Shape
    bodyArmor?: Shape
    armArmor?: Shape
    shoulderArmor?: Shape
    shoes?: Shape
    cloaks?: Shape
    shawls?: Shape
    cloakTops?: Shape
    overShirts?: Shape
    hood?: Shape
    bgHood?: Shape
    crowns?: Shape
    necklaces?: Shape
    earings?: Shape
    handHeld?: Shape
    foregrounds?: Shape
    middlegrounds?: Shape
    backgrounds?: Shape

}

type CharacterKey = keyof Character
interface TrayRendering {
    label: string, key: CharacterKey, itemUrls: Shape[], colors: string[], colors2?: string[], bgKey?: CharacterKey
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
                    socks: undefined,
                    skirts: undefined,
                    belts: undefined,
                    beltSkirts: undefined,

                    arms: undefined,
                    armTies: undefined,
                    sleeves: undefined,

                    topArmor: undefined,
                    bodyArmor: undefined,
                    armArmor: undefined,
                    shoulderArmor: undefined,

                    shoes: undefined,
                    cloaks: undefined,
                    cloakTops: undefined,
                    shawls: undefined,
                    overShirts: undefined,
                    hood: undefined,

                    crowns: undefined,
                    necklaces: undefined,
                    earings: undefined,

                    handHeld: undefined,
                    foregrounds: foregrounds[2],
                    middlegrounds: undefined,
                    backgrounds: backgrounds[6],



                }
            }
        }
    }

    renderSideBar(trayOptions: TrayRendering[]) {
        return trayOptions.map(({ label, key, itemUrls, colors, colors2, bgKey }) =>
            <ShapeButtonsWithColor
                itemName={label}
                itemUrls={itemUrls}
                onShapeSelect={(shape: Shape) => {
                    //console.log(shape);
                    let extraBgInfo = {}
                    if ((shape.backFillUrl || shape.bgPermColorUrl) && bgKey) {
                        extraBgInfo = {
                            [bgKey]:
                                {
                                    color: shape.color,
                                    outlineUrl: shape.bgPermColorUrl,
                                    fillUrl: shape.backFillUrl,
                                } as Shape
                        }
                    }
                    this.setState({ currentCharacter: { ...this.state.currentCharacter, [key]: shape, ...extraBgInfo } })
                }}
                selectableColors={colors}
                secondSelectableColors={colors2}
                selectedShape={this.state.currentCharacter[key] as Shape}
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
                { label: "Eyes", key: "eye", bgKey: "eyeWhites", itemUrls: eyeUrls, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
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
        "Arms": [
            { label: "Arms", key: "arms", itemUrls: arms, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Arm Ties", key: "armTies", itemUrls: armTies, colors: bigColorOption } as TrayRendering,
            { label: "Sleeves", key: "sleeves", itemUrls: sleeves, colors: bigColorOption } as TrayRendering,
        ],
        "Bottoms": [
            { label: "Pants", key: "pants", itemUrls: pants, colors: bigColorOption } as TrayRendering,
            { label: "Socks", key: "socks", itemUrls: socks, colors: bigColorOption } as TrayRendering,
            { label: "Belts", key: "belts", itemUrls: belts, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Belt Skirts", key: "beltSkirts", itemUrls: beltSkirts, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Skirts", key: "skirts", bgKey: "bgSkirt", itemUrls: skirts, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
        ],
        "Armor": [
            { label: "Top Armor", key: "topArmor", itemUrls: topArmor, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Body Armor", key: "bodyArmor", itemUrls: bodyArmor, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Shoulder Armor", key: "shoulderArmor", itemUrls: shoulderArmor, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Arm Armor", key: "armArmor", itemUrls: armArmor, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
        ],
        "Outerware": [
            { label: "Shoes", key: "shoes", itemUrls: shoes, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Over Shirt", key: "overShirts", itemUrls: overShirts, colors: bigColorOption } as TrayRendering,
            { label: "Cloak Tops", key: "cloakTops", itemUrls: cloakTops, colors: bigColorOption } as TrayRendering,
            { label: "Cloaks", key: "cloaks", itemUrls: cloaks, colors: bigColorOption } as TrayRendering,
            { label: "Shawls", key: "shawls", itemUrls: shawls, colors: bigColorOption } as TrayRendering,
            { label: "Hood", key: "hood", bgKey: "bgHood", itemUrls: hood, colors: bigColorOption } as TrayRendering,
        ],
        "Jewelry": [
            { label: "Crowns", key: "crowns", itemUrls: crowns, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Earings", key: "earings", itemUrls: earings, colors: bigColorOption } as TrayRendering,
            { label: "Necklace", key: "necklaces", itemUrls: necklaces, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
        ],
        "Effects-Backgrounds": [
            { label: "Hand Effects", key: "handHeld", itemUrls: handHeld, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,
            { label: "Fore-grounds", key: "foregrounds", itemUrls: foregrounds, colors: [] } as TrayRendering,
            { label: "Middle-grounds", key: "middlegrounds", itemUrls: middlegrounds, colors: [] } as TrayRendering,
            { label: "Back-grounds", key: "backgrounds", itemUrls: backgrounds, colors: bigColorOption, colors2: bigColorOption } as TrayRendering,

        ],
    };

    previewPaneDisplayOrder: CharacterKey[] = [
        "backgrounds",
        "middlegrounds",
        "bgHood",
        "hairDown",
        "hairUp",
        "cloaks",
        "bgSkirt",
        "character",
        "lips",
        "nose",
        "brow",
        "eyeWhites",
        "eye",
        "headHair",
        "hairBraids",
        "socks",
        "pants",
        "shoes",
        "skirts",
        "bodice",
        "beltSkirts",
        "belts",
        "corset",
        "corsetTies",
        "tops",
        "topCorset",
        "topCorsetTies",
        "bodyArmor",
        "topArmor",
        "arms",
        "armTies",
        "overShirts",
        'armArmor',
        "shoulderArmor",
        "sleeves",
        "necklaces",
        "shawls",
        "cloakTops",
        "earings",
        "hairEx",
        "crowns",
        "bangs",
        "hood",
        "handHeld",
        "foregrounds"
    ]

    render(): React.ReactNode {
        console.log(this.state.currentCharacter)
        return (
            <>
                <div>
                    {/* ART */}
                    <div >
                        {this.previewPaneDisplayOrder
                            .map((key) => {
                                if (this.state.currentCharacter[key]) {
                                    console.log("rendering: ", key, this.state.currentCharacter[key]);
                                    return (<SelectedShape frame={this.state.currentCharacter[key] as Frame} />)
                                }
                            }
                            )}

                    </div>

                    {/*Buttons*/}
                    {Object.values(this.trayData).map((trayOptions, index) => {
                        return this.state.openedTray === index &&
                            <div className="tray" style={{ backgroundImage: `url(${'./DUG/panel/panelBackground.png'})` }}>
                                {
                                    this.renderSideBar(trayOptions)
                                }
                            </div>
                    })}


                    {/*go to Panel*/}
                    <span className='traySelector' style={{ backgroundImage: `url(${'./DUG/panel/panelBackground.png'})` }}>
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
                    </span>

                    <span className="reset">
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
                                pants: pants[0],
                                socks: undefined,
                                skirts: undefined,
                                beltSkirts: undefined,
                                belts: undefined,
                                armTies: undefined,
                                arms: undefined,
                                sleeves: undefined,
                                topArmor: undefined,
                                bodyArmor: undefined,
                                armArmor: undefined,
                                shoulderArmor: undefined,
                                cloaks: undefined,
                                shoes: undefined,
                                shawls: undefined,
                                cloakTops: undefined,
                                overShirts: undefined,
                                crowns: undefined,
                                necklaces: undefined,
                                earings: undefined,
                                foregrounds: undefined,
                                middlegrounds: undefined,
                                backgrounds: backgrounds[6]

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