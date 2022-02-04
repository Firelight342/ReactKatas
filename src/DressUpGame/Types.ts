

export interface ShapeUrl {
    outlineUrl?: string
    extraLineUrl?: string
    fillUrl?: string
    secondFillUrl?: string
    backFillUrl?: string
    bgPermColorUrl?: string
    iconUrl?: string
}

export interface Shape extends ShapeUrl {
    color?: string
    color2?: string
}

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

export type CharacterKey = keyof Character
export interface TrayRendering {
    label: string, key: CharacterKey, itemUrls: Shape[], colors: string[], colors2?: string[], bgKey?: CharacterKey
}
