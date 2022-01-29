import './DressUpGame.css'
import './DressUpGameColors.css'

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

export let backgrounds: Shape[] = [
    { outlineUrl: './DUG/backgrounds/bg1.png' },
    { outlineUrl: './DUG/backgrounds/bg2.png' },
    { outlineUrl: './DUG/backgrounds/bg3.png' },
    { outlineUrl: './DUG/backgrounds/bg4.png' },
    { outlineUrl: './DUG/backgrounds/bg5.png' },
    { outlineUrl: './DUG/backgrounds/bg6.png' },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: './DUG/backgrounds/bg7.png', secondFillUrl: './DUG/backgrounds/bgC7.png', color: "grey" },
]

export let middlegrounds: Shape[] = [
    { outlineUrl: './DUG/middlegrounds/mg1.png' },
    { outlineUrl: './DUG/middlegrounds/mg2.png' },
    { outlineUrl: './DUG/middlegrounds/mg3.png' },
    { outlineUrl: './DUG/middlegrounds/mg5.png' },
    { outlineUrl: './DUG/middlegrounds/mg6.png' },
    { outlineUrl: './DUG/middlegrounds/mg7.png' },
    { outlineUrl: './DUG/middlegrounds/mg8.png' },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', },
]

export let foregrounds: Shape[] = [
    {
        outlineUrl: './DUG/foreground/at1.png',
    },
    {
        outlineUrl: './DUG/foreground/at2.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', },
]

export let powers: Shape[] = [
    {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC1.png',
        secondFillUrl: './DUG/powers/powersSC1.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC2.png',
        secondFillUrl: './DUG/powers/powersSC2.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC3.png',
        secondFillUrl: './DUG/powers/powersSC3.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC4.png',
        secondFillUrl: './DUG/powers/powersSC4.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC5.png',
        secondFillUrl: './DUG/powers/powersSC5.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let handHeld: Shape[] = [
    {
        outlineUrl: './DUG/weapons/weaponsOL1.png',
        fillUrl: './DUG/weapons/weaponsC1.png',
        secondFillUrl: './DUG/weapons/weaponsSC1.png',
    }, {
        outlineUrl: './DUG/weapons/weaponsOL2.png',
        fillUrl: './DUG/weapons/weaponsC2.png',
        secondFillUrl: './DUG/weapons/weaponsSC2.png',
    },
    {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC1.png',
        secondFillUrl: './DUG/powers/powersSC1.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC2.png',
        secondFillUrl: './DUG/powers/powersSC2.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC3.png',
        secondFillUrl: './DUG/powers/powersSC3.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC4.png',
        secondFillUrl: './DUG/powers/powersSC4.png',
    }, {
        outlineUrl: './DUG/blank.png',
        fillUrl: './DUG/powers/powersC5.png',
        secondFillUrl: './DUG/powers/powersSC5.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let earings: Shape[] = [
    {
        outlineUrl: './DUG/earings/earingsOL1.png',
        fillUrl: './DUG/earings/earingsC1.png',
    }, {
        outlineUrl: './DUG/earings/earingsOL2.png',
        fillUrl: './DUG/earings/earingsC2.png',
    }, {
        outlineUrl: './DUG/earings/earingsOL3.png',
        fillUrl: './DUG/earings/earingsC3.png',
    }, {
        outlineUrl: './DUG/earings/earingsOL4.png',
        fillUrl: './DUG/earings/earingsC4.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let necklaces: Shape[] = [
    {
        outlineUrl: './DUG/necklace/necklaceOL1.png',
        fillUrl: './DUG/necklace/necklaceC1.png', secondFillUrl: './DUG/necklace/necklaceSC1.png',
    }, {
        outlineUrl: './DUG/necklace/necklaceOL2.png',
        fillUrl: './DUG/necklace/necklaceC2.png', secondFillUrl: './DUG/necklace/necklaceSC2.png',
    }, {
        outlineUrl: './DUG/necklace/necklaceOL3.png',
        fillUrl: './DUG/necklace/necklaceC3.png', secondFillUrl: './DUG/necklace/necklaceSC3.png',
    }, {
        outlineUrl: './DUG/necklace/necklaceOL4.png',
        fillUrl: './DUG/necklace/necklaceC4.png', secondFillUrl: './DUG/necklace/necklaceSC4.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let crowns: Shape[] = [
    {
        outlineUrl: './DUG/crown/crownOL1.png',
        fillUrl: './DUG/crown/crownC1.png', secondFillUrl: './DUG/crown/crownSC1.png',
    }, {
        outlineUrl: './DUG/crown/crownOL2.png',
        fillUrl: './DUG/crown/crownC2.png', secondFillUrl: './DUG/crown/crownSC2.png',
    }, {
        outlineUrl: './DUG/crown/crownOL3.png',
        fillUrl: './DUG/crown/crownC3.png', secondFillUrl: './DUG/crown/crownSC3.png',
    }, {
        outlineUrl: './DUG/crown/crownOL4.png',
        fillUrl: './DUG/crown/crownC4.png', secondFillUrl: './DUG/crown/crownSC4.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let overShirts: Shape[] = [
    {
        outlineUrl: './DUG/baggyShirt/baggyShirtOL1.png',
        fillUrl: './DUG/baggyShirt/baggyShirtC1.png',
    }, {
        outlineUrl: './DUG/baggyShirt/baggyShirtOL2.png',
        fillUrl: './DUG/baggyShirt/baggyShirtC2.png',
    }, {
        outlineUrl: './DUG/baggyShirt/baggyShirtOL3.png',
        fillUrl: './DUG/baggyShirt/baggyShirtC3.png',
    }, {
        outlineUrl: './DUG/baggyShirt/baggyShirtOL4.png',
        fillUrl: './DUG/baggyShirt/baggyShirtC4.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]


export let shawls: Shape[] = [
    {
        outlineUrl: './DUG/shawls/shawlsOL1.png',
        fillUrl: './DUG/shawls/shawlsC1.png',
    }, {
        outlineUrl: './DUG/shawls/shawlsOL2.png',
        fillUrl: './DUG/shawls/shawlsC2.png',
    }, {
        outlineUrl: './DUG/shawls/shawlsOL3.png',
        fillUrl: './DUG/shawls/shawlsC3.png',
    }, {
        outlineUrl: './DUG/shawls/shawlsOL4.png',
        fillUrl: './DUG/shawls/shawlsC4.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]


export let hood: Shape[] = [
    {
        outlineUrl: './DUG/hood/hoodOL.png', bgPermColorUrl: './DUG/hood/hoodBackOL.png',
        fillUrl: './DUG/hood/hoodC.png',
        backFillUrl: './DUG/hood/hoodBackC.png'
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", bgPermColorUrl: '', backFillUrl: './DUG/blank.png' },
]

export let cloakTops: Shape[] = [
    {
        outlineUrl: './DUG/capes/shoulderWrapOL1.png',
        fillUrl: './DUG/capes/shoulderWrapC1.png',
    }, {
        outlineUrl: './DUG/capes/shoulderWrapOL2.png',
        fillUrl: './DUG/capes/shoulderWrapC2.png',
    }, {
        outlineUrl: './DUG/capes/shoulderWrapOL3.png',
        fillUrl: './DUG/capes/shoulderWrapC3.png',
    },
    { iconUrl: './DUG/panel/blankButton.png', outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]
//START HERE
export let cloaks: Shape[] = [
    {
        outlineUrl: './DUG/capes/capeOL1.png',
        fillUrl: './DUG/capes/capeC1.png',
    }, {
        outlineUrl: './DUG/capes/capeOL2.png',
        fillUrl: './DUG/capes/capeC2.png',
    }, {
        outlineUrl: './DUG/capes/capeOL3.png',
        fillUrl: './DUG/capes/capeC3.png',
    }, {
        outlineUrl: './DUG/capes/capeOL4.png',
        fillUrl: './DUG/capes/capeC4.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let shoes: Shape[] = [
    {
        outlineUrl: './DUG/shoes/shoeOL1.png',
        fillUrl: './DUG/shoes/shoeC1.png', secondFillUrl: './DUG/shoes/shoeSC1.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL2.png',
        fillUrl: './DUG/shoes/shoeC2.png', secondFillUrl: './DUG/shoes/shoeSC2.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL3.png',
        fillUrl: './DUG/shoes/shoeC3.png', secondFillUrl: './DUG/shoes/shoeSC3.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL4.png',
        fillUrl: './DUG/shoes/shoeC4.png', secondFillUrl: './DUG/shoes/shoeSC4.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL5.png',
        fillUrl: './DUG/shoes/shoeC5.png', secondFillUrl: './DUG/shoes/shoeSC5.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL6.png',
        fillUrl: './DUG/shoes/shoeC6.png', secondFillUrl: './DUG/shoes/shoeSC6.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL7.png',
        fillUrl: './DUG/shoes/shoeC7.png', secondFillUrl: './DUG/shoes/shoeSC7.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL8.png',
        fillUrl: './DUG/shoes/shoeC8.png', secondFillUrl: './DUG/shoes/shoeSC8.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL9.png',
        fillUrl: './DUG/shoes/shoeC9.png', secondFillUrl: './DUG/shoes/shoeSC9.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL10.png',
        fillUrl: './DUG/shoes/shoeC10.png', secondFillUrl: './DUG/shoes/shoeSC10.png',
    }, {
        outlineUrl: './DUG/shoes/shoeOL11.png',
        fillUrl: './DUG/shoes/shoeC11.png', secondFillUrl: './DUG/shoes/shoeSC11.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]


export let shoulderArmor: Shape[] = [
    {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL1.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC1.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC1.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL2.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC2.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC2.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL3.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC3.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC3.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL4.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC4.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC4.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL5.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC5.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC5.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL6.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC6.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC6.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL7.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC7.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC7.png',
    }, {
        outlineUrl: './DUG/shoulderArmor/shoulderArmorOL8.png',
        fillUrl: './DUG/shoulderArmor/shoulderArmorC8.png', secondFillUrl: './DUG/shoulderArmor/shoulderArmorSC8.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]
export let armArmor: Shape[] = [
    {
        outlineUrl: './DUG/armArmor/armArmorOL1.png',
        fillUrl: './DUG/armArmor/armArmorC1.png', secondFillUrl: './DUG/armArmor/armArmorSC1.png',
    }, {
        outlineUrl: './DUG/armArmor/armArmorOL2.png',
        fillUrl: './DUG/armArmor/armArmorC2.png', secondFillUrl: './DUG/armArmor/armArmorSC2.png',
    }, {
        outlineUrl: './DUG/armArmor/armArmorOL3.png',
        fillUrl: './DUG/armArmor/armArmorC3.png', secondFillUrl: './DUG/armArmor/armArmorSC3.png',
    }, {
        outlineUrl: './DUG/armArmor/armArmorOL4.png',
        fillUrl: './DUG/armArmor/armArmorC4.png', secondFillUrl: './DUG/armArmor/armArmorSC4.png',
    }, {
        outlineUrl: './DUG/armArmor/armArmorOL5.png',
        fillUrl: './DUG/armArmor/armArmorC5.png', secondFillUrl: './DUG/armArmor/armArmorSC5.png',
    }, {
        outlineUrl: './DUG/armArmor/armArmorOL6.png',
        fillUrl: './DUG/armArmor/armArmorC6.png', secondFillUrl: './DUG/armArmor/armArmorSC6.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let topArmor: Shape[] = [
    {
        outlineUrl: './DUG/topArmor/topArmorOL1.png',
        fillUrl: './DUG/topArmor/topArmorC1.png', secondFillUrl: './DUG/topArmor/topArmorSC1.png',
    },
    {
        outlineUrl: './DUG/topArmor/topArmorOL2.png',
        fillUrl: './DUG/topArmor/topArmorC2.png', secondFillUrl: './DUG/topArmor/topArmorSC2.png',
    },
    {
        outlineUrl: './DUG/topArmor/topArmorOL3.png',
        fillUrl: './DUG/topArmor/topArmorC3.png', secondFillUrl: './DUG/topArmor/topArmorSC3.png',
    },
    {
        outlineUrl: './DUG/topArmor/topArmorOL4.png',
        fillUrl: './DUG/topArmor/topArmorC4.png', secondFillUrl: './DUG/topArmor/topArmorSC4.png',
    },
    {
        outlineUrl: './DUG/topArmor/topArmorOL5.png',
        fillUrl: './DUG/topArmor/topArmorC5.png', secondFillUrl: './DUG/topArmor/topArmorSC5.png',
    },
    {
        outlineUrl: './DUG/topArmor/topArmorOL6.png',
        fillUrl: './DUG/topArmor/topArmorC6.png', secondFillUrl: './DUG/topArmor/topArmorSC6.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },

]

export let bodyArmor: Shape[] = [
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL1.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC1.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC1.png',
    },
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL2.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC2.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC2.png',
    },
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL3.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC3.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC3.png',
    },
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL4.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC4.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC4.png',
    },
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL5.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC5.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC5.png',
    },
    {
        outlineUrl: './DUG/bodyArmor/bodyArmorOL6.png',
        fillUrl: './DUG/bodyArmor/bodyArmorC6.png', secondFillUrl: './DUG/bodyArmor/bodyArmorSC6.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },

]

export let sleeves: Shape[] = [
    {
        outlineUrl: './DUG/sleeves/sleevesOL1.png',
        fillUrl: './DUG/sleeves/sleevesC1.png',
    }, {
        outlineUrl: './DUG/sleeves/sleevesOL2.png',
        fillUrl: './DUG/sleeves/sleevesC2.png',
    }, {
        outlineUrl: './DUG/sleeves/sleevesOL3.png',
        fillUrl: './DUG/sleeves/sleevesC3.png',
    }, {
        outlineUrl: './DUG/sleeves/sleevesOL4.png',
        fillUrl: './DUG/sleeves/sleevesC4.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "" },
]

export let armTies: Shape[] = [
    {
        outlineUrl: './DUG/arms/armTOL1.png',
        fillUrl: './DUG/arms/armTC1.png',
    }, {
        outlineUrl: './DUG/arms/armTOL2.png',
        fillUrl: './DUG/arms/armTC2.png',
    }, {
        outlineUrl: './DUG/arms/armTOL3.png',
        fillUrl: './DUG/arms/armTC3.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "" },
]

export let arms: Shape[] = [
    {
        outlineUrl: './DUG/arms/armOL1.png',
        fillUrl: './DUG/arms/armC1.png', secondFillUrl: './DUG/arms/armSC1.png',
    }, {
        outlineUrl: './DUG/arms/armOL2.png',
        fillUrl: './DUG/arms/armC2.png', secondFillUrl: './DUG/arms/armSC2.png',
    }, {
        outlineUrl: './DUG/arms/armOL3.png',
        fillUrl: './DUG/arms/armC3.png', secondFillUrl: './DUG/arms/armSC3.png',
    }, {
        outlineUrl: './DUG/arms/armOL4.png',
        fillUrl: './DUG/arms/armC4.png', secondFillUrl: './DUG/arms/armSC4.png',
    }, {
        outlineUrl: './DUG/arms/armOL5.png',
        fillUrl: './DUG/arms/armC5.png', secondFillUrl: './DUG/arms/armSC5.png',
    }, {
        outlineUrl: './DUG/arms/armOL6.png',
        fillUrl: './DUG/arms/armC6.png', secondFillUrl: './DUG/arms/armSC6.png',
    }, {
        outlineUrl: './DUG/arms/armOL7.png',
        fillUrl: './DUG/arms/armC7.png', secondFillUrl: './DUG/arms/armSC7.png',
    }, {
        outlineUrl: './DUG/arms/armOL8.png',
        fillUrl: './DUG/arms/armC8.png', secondFillUrl: './DUG/arms/armSC8.png',
    }, {
        outlineUrl: './DUG/arms/armOL9.png',
        fillUrl: './DUG/arms/armC9.png', secondFillUrl: './DUG/arms/armSC9.png',
    }, {
        outlineUrl: './DUG/arms/armOL10.png',
        fillUrl: './DUG/arms/armC10.png', secondFillUrl: './DUG/arms/armSC10.png',
    }, { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let beltSkirts: Shape[] = [
    {
        outlineUrl: './DUG/belt/beltSkirtOL1.png',
        fillUrl: './DUG/belt/beltSC1.png', secondFillUrl: './DUG/belt/beltSSC1.png',
    },
    {
        outlineUrl: './DUG/belt/beltSkirtOL2.png',
        fillUrl: './DUG/belt/beltSC2.png', secondFillUrl: './DUG/belt/beltSSC2.png',
    },
    {
        outlineUrl: './DUG/belt/beltSkirtOL3.png',
        fillUrl: './DUG/belt/beltSC3.png', secondFillUrl: './DUG/belt/beltSSC3.png',
    },
    {
        outlineUrl: './DUG/belt/beltSkirtOL4.png',
        fillUrl: './DUG/belt/beltSC4.png', secondFillUrl: './DUG/belt/beltSSC4.png',
    },
    {
        outlineUrl: './DUG/belt/beltSkirtOL5.png',
        fillUrl: './DUG/belt/beltSC5.png', secondFillUrl: './DUG/belt/beltSSC5.png',
    },
    {
        outlineUrl: './DUG/belt/beltSkirtOL6.png',
        fillUrl: './DUG/belt/beltSC6.png', secondFillUrl: './DUG/belt/beltSSC6.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let belts: Shape[] = [
    {
        outlineUrl: './DUG/belt/beltOL1.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: '',
    },
    {
        outlineUrl: './DUG/belt/beltOL2.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: './DUG/belt/beltC2.png',
    },
    {
        outlineUrl: './DUG/belt/beltOL3.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: './DUG/belt/beltC3.png',
    },
    {
        outlineUrl: './DUG/belt/beltOL4.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: './DUG/belt/beltC4.png',
    },
    {
        outlineUrl: './DUG/belt/beltOL5.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: './DUG/belt/beltC5.png',
    },
    {
        outlineUrl: './DUG/belt/beltOL6.png',
        fillUrl: './DUG/belt/beltC.png', secondFillUrl: './DUG/belt/beltC6.png',
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", secondFillUrl: "" },
]

export let skirts: Shape[] = [
    {
        outlineUrl: './DUG/skirt/skirtOL1.png', bgPermColorUrl: './DUG/skirt/skirtBOL1.png',
        fillUrl: './DUG/skirt/skirtC1.png', secondFillUrl: './DUG/skirt/skirtSC1.png',
        backFillUrl: './DUG/skirt/skirtBC1.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL2.png', bgPermColorUrl: './DUG/skirt/skirtBOL2.png',
        fillUrl: './DUG/skirt/skirtC2.png', secondFillUrl: './DUG/skirt/skirtSC2.png',
        backFillUrl: './DUG/skirt/skirtBC2.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL3.png',
        fillUrl: './DUG/skirt/skirtC3.png', secondFillUrl: './DUG/skirt/skirtSC3.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL4.png',
        fillUrl: './DUG/skirt/skirtC4.png', secondFillUrl: './DUG/skirt/skirtSC4.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL5.png',
        fillUrl: './DUG/skirt/skirtC5.png', secondFillUrl: './DUG/skirt/skirtSC5.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL6.png',
        fillUrl: './DUG/skirt/skirtC6.png', secondFillUrl: './DUG/skirt/skirtSC6.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL7.png',
        fillUrl: './DUG/skirt/skirtC7.png', secondFillUrl: './DUG/skirt/skirtSC7.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL8.png',
        fillUrl: './DUG/skirt/skirtC8.png', secondFillUrl: './DUG/skirt/skirtSC8.png',
        bgPermColorUrl: '', backFillUrl: './DUG/blank.png'
    },
    {
        outlineUrl: './DUG/skirt/skirtOL9.png', bgPermColorUrl: './DUG/skirt/skirtBOL9.png',
        fillUrl: './DUG/skirt/skirtC9.png', secondFillUrl: './DUG/skirt/skirtSC9.png',
        backFillUrl: './DUG/skirt/skirtBC9.png'
    },
    { outlineUrl: './DUG/blank.png', fillUrl: "", bgPermColorUrl: '', backFillUrl: './DUG/blank.png', secondFillUrl: "" },
]

export let socks: Shape[] = [
    { outlineUrl: './DUG/legs/socksOL1.png', fillUrl: "./DUG/legs/socksC1.png" },
    { outlineUrl: './DUG/legs/socksOL2.png', fillUrl: "./DUG/legs/socksC2.png" },
    { outlineUrl: './DUG/legs/socksOL3.png', fillUrl: "./DUG/legs/socksC3.png" },
    { outlineUrl: './DUG/legs/socksOL4.png', fillUrl: "./DUG/legs/socksC4.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]


export let pants: Shape[] = [
    { outlineUrl: './DUG/legs/pantsOL1.png', fillUrl: "./DUG/legs/pantsC1.png" },
    { outlineUrl: './DUG/legs/pantsOL2.png', fillUrl: "./DUG/legs/pantsC2.png" },
    { outlineUrl: './DUG/legs/pantsOL3.png', fillUrl: "./DUG/legs/pantsC3.png" },
    { outlineUrl: './DUG/legs/pantsOL4.png', fillUrl: "./DUG/legs/pantsC4.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]


export let corset: Shape[] = [
    { outlineUrl: './DUG/bodice/shirtBOL1.png', fillUrl: "./DUG/bodice/shirtBC1.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]
export let corsetTies: Shape[] = [
    { outlineUrl: './DUG/bodice/shirtTOL1.png', fillUrl: "./DUG/bodice/shirtTC1.png" },
    { outlineUrl: './DUG/bodice/shirtTOL2.png', fillUrl: "./DUG/bodice/shirtTC2.png" },
    { outlineUrl: './DUG/bodice/shirtTOL3.png', fillUrl: "./DUG/bodice/shirtTC3.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]

export let bodice: Shape[] = [
    { outlineUrl: './DUG/bodice/shirtOL1.png', fillUrl: "./DUG/bodice/shirtC1.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]

export let topCorset: Shape[] = [
    { outlineUrl: './DUG/tops/topsCOL1.png', fillUrl: "./DUG/tops/topsCC1.png" },
    { outlineUrl: './DUG/tops/topsCOL2.png', fillUrl: "./DUG/tops/topsCC2.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },

];

export let topCorsetTies: Shape[] = [
    { outlineUrl: './DUG/tops/topsTOL1.png', fillUrl: "./DUG/tops/topsTC1.png" },
    { outlineUrl: './DUG/tops/topsTOL2.png', fillUrl: "./DUG/tops/topsTC2.png" },
    { outlineUrl: './DUG/tops/topsTOL3.png', fillUrl: "./DUG/tops/topsTC3.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },

];

export let tops: Shape[] = [
    { outlineUrl: './DUG/tops/topsOL1.png', fillUrl: "./DUG/tops/topsC1.png" },
    { outlineUrl: './DUG/tops/topsOL2.png', fillUrl: "./DUG/tops/topsC2.png" },
    { outlineUrl: './DUG/tops/topsOL3.png', fillUrl: "./DUG/tops/topsC3.png" },
    { outlineUrl: './DUG/tops/topsOL4.png', fillUrl: "./DUG/tops/topsC4.png" },
    { outlineUrl: './DUG/tops/topsOL5.png', fillUrl: "./DUG/tops/topsC5.png" },
    { outlineUrl: './DUG/tops/topsOL6.png', fillUrl: "./DUG/tops/topsC6.png" },
    { outlineUrl: './DUG/tops/topsOL7.png', fillUrl: "./DUG/tops/topsC7.png" },
    { outlineUrl: './DUG/tops/topsOL8.png', fillUrl: "./DUG/tops/topsC8.png" },
    { outlineUrl: './DUG/tops/topsOL9.png', fillUrl: "./DUG/tops/topsC9.png" },
    { outlineUrl: './DUG/tops/topsOL10.png', fillUrl: "./DUG/tops/topsC10.png" },
    { outlineUrl: './DUG/tops/topsOL11.png', fillUrl: "./DUG/tops/topsC11.png" },
    { outlineUrl: './DUG/tops/topsOL12.png', fillUrl: "./DUG/tops/topsC12.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];

export let hairBraids: Shape[] = [
    { outlineUrl: './DUG/hairBraids/hairBraidsOL1.png', fillUrl: "./DUG/hairBraids/hairBraidsC1.png" },
    { outlineUrl: './DUG/hairBraids/hairBraidsOL2.png', fillUrl: "./DUG/hairBraids/hairBraidsC2.png" },
    { outlineUrl: './DUG/hairBraids/hairBraidsOL3.png', fillUrl: "./DUG/hairBraids/hairBraidsC3.png" },
    { outlineUrl: './DUG/hairBraids/hairBraidsOL4.png', fillUrl: "./DUG/hairBraids/hairBraidsC4.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];

export let hairDown: Shape[] = [
    { outlineUrl: './DUG/hairDown/hairDownOL1.png', fillUrl: "./DUG/hairDown/hairDownC1.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL2.png', fillUrl: "./DUG/hairDown/hairDownC2.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL3.png', fillUrl: "./DUG/hairDown/hairDownC3.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL4.png', fillUrl: "./DUG/hairDown/hairDownC4.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL5.png', fillUrl: "./DUG/hairDown/hairDownC5.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL6.png', fillUrl: "./DUG/hairDown/hairDownC6.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL7.png', fillUrl: "./DUG/hairDown/hairDownC7.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL8.png', fillUrl: "./DUG/hairDown/hairDownC8.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL9.png', fillUrl: "./DUG/hairDown/hairDownC9.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL10.png', fillUrl: "./DUG/hairDown/hairDownC10.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL11.png', fillUrl: "./DUG/hairDown/hairDownC11.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL12.png', fillUrl: "./DUG/hairDown/hairDownC12.png" },
    { outlineUrl: './DUG/hairDown/hairDownOL13.png', fillUrl: "./DUG/hairDown/hairDownC13.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];



export let hairUp: Shape[] = [
    { outlineUrl: './DUG/hairUp/hairUpOL1.png', fillUrl: "./DUG/hairUp/hairUpC1.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL2.png', fillUrl: "./DUG/hairUp/hairUpC2.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL3.png', fillUrl: "./DUG/hairUp/hairUpC3.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL4.png', fillUrl: "./DUG/hairUp/hairUpC4.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL5.png', fillUrl: "./DUG/hairUp/hairUpC5.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL6.png', fillUrl: "./DUG/hairUp/hairUpC6.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL7.png', fillUrl: "./DUG/hairUp/hairUpC7.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL8.png', fillUrl: "./DUG/hairUp/hairUpC8.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL9.png', fillUrl: "./DUG/hairUp/hairUpC9.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL10.png', fillUrl: "./DUG/hairUp/hairUpC10.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL11.png', fillUrl: "./DUG/hairUp/hairUpC11.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL12.png', fillUrl: "./DUG/hairUp/hairUpC12.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL13.png', fillUrl: "./DUG/hairUp/hairUpC13.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL14.png', fillUrl: "./DUG/hairUp/hairUpC14.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL15.png', fillUrl: "./DUG/hairUp/hairUpC15.png" },
    { outlineUrl: './DUG/hairUp/hairUpOL16.png', fillUrl: "./DUG/hairUp/hairUpC16.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];


export let hairEx: Shape[] = [
    { outlineUrl: './DUG/hairEx/hairEx1.png', fillUrl: "./DUG/hairEx/hairExC1.png" },
    { outlineUrl: './DUG/hairEx/hairEx2.png', fillUrl: "./DUG/hairEx/hairExC2.png" },
    { outlineUrl: './DUG/hairEx/hairEx3.png', fillUrl: "./DUG/hairEx/hairExC3.png" },
    { outlineUrl: './DUG/hairEx/hairEx4.png', fillUrl: "./DUG/hairEx/hairExC4.png" },
    { outlineUrl: './DUG/hairEx/hairEx5.png', fillUrl: "./DUG/hairEx/hairExC5.png" },
    { outlineUrl: './DUG/hairEx/hairEx6.png', fillUrl: "./DUG/hairEx/hairExC6.png" },
    { outlineUrl: './DUG/hairEx/hairEx7.png', fillUrl: "./DUG/hairEx/hairExC7.png" },
    { outlineUrl: './DUG/hairEx/hairEx8.png', fillUrl: "./DUG/hairEx/hairExC8.png" },
    { outlineUrl: './DUG/hairEx/hairEx9.png', fillUrl: "./DUG/hairEx/hairExC9.png" },
    { outlineUrl: './DUG/hairEx/hairEx10.png', fillUrl: "./DUG/hairEx/hairExC10.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
]

export let bangs: Shape[] = [
    { outlineUrl: './DUG/bangs/bangOL1.png', fillUrl: "./DUG/bangs/bangC1.png" },
    { outlineUrl: './DUG/bangs/bangOL2.png', fillUrl: "./DUG/bangs/bangC2.png" },
    { outlineUrl: './DUG/bangs/bangOL3.png', fillUrl: "./DUG/bangs/bangC3.png" },
    { outlineUrl: './DUG/bangs/bangOL4.png', fillUrl: "./DUG/bangs/bangC4.png" },
    { outlineUrl: './DUG/bangs/bangOL5.png', fillUrl: "./DUG/bangs/bangC5.png" },
    { outlineUrl: './DUG/bangs/bangOL6.png', fillUrl: "./DUG/bangs/bangC6.png" },
    { outlineUrl: './DUG/bangs/bangOL7.png', fillUrl: "./DUG/bangs/bangC7.png" },
    { outlineUrl: './DUG/bangs/bangOL8.png', fillUrl: "./DUG/bangs/bangC8.png" },
    { outlineUrl: './DUG/bangs/bangOL9.png', fillUrl: "./DUG/bangs/bangC9.png" },
    { outlineUrl: './DUG/bangs/bangOL10.png', fillUrl: "./DUG/bangs/bangC10.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];
export let headHair: Shape[] = [
    { outlineUrl: './DUG/headHair/headHairOL1.png', fillUrl: "./DUG/headHair/headHairC1.png" },
    { outlineUrl: './DUG/headHair/headHairOL2.png', fillUrl: "./DUG/headHair/headHairC2.png" },
    { outlineUrl: './DUG/headHair/headHairOL3.png', fillUrl: "./DUG/headHair/headHairC3.png" },
    { outlineUrl: './DUG/headHair/headHairOL4.png', fillUrl: "./DUG/headHair/headHairC4.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];

export let characterUrls: Shape[] = [
    { outlineUrl: './DUG/girl/girlOutline.png', fillUrl: "./DUG/girl/girlColor.png", color: "grey" }
]

export let lipsUrls: Shape[] = [
    { outlineUrl: './DUG/lips/lipsOL1.png', fillUrl: "./DUG/lips/lipsC1.png", color: "grey" },
    { outlineUrl: './DUG/lips/lipsOL2.png', fillUrl: "./DUG/lips/lipsC2.png", color: "grey" },
    { outlineUrl: './DUG/lips/lipsOL3.png', fillUrl: "./DUG/lips/lipsC3.png", color: "grey" },
    { outlineUrl: './DUG/lips/lipsOL4.png', fillUrl: "./DUG/lips/lipsC4.png", color: "grey" },
    { outlineUrl: './DUG/lips/lipsOL5.png', fillUrl: "./DUG/lips/lipsC5.png", color: "grey" },
    { outlineUrl: './DUG/lips/lipsOL6.png', fillUrl: "./DUG/lips/lipsC6.png", color: "grey" },
];

export let noseUrls: Shape[] = [
    { outlineUrl: './DUG/noses/nose1.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose2.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose3.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose4.png', fillUrl: "" },
];

export let browUrls: Shape[] = [
    { outlineUrl: './DUG/brows/browOL1.png', fillUrl: "./DUG/brows/browC1.png", color: "grey" },
    { outlineUrl: './DUG/brows/browOL2.png', fillUrl: "./DUG/brows/browC2.png" },
    { outlineUrl: './DUG/brows/browOL3.png', fillUrl: "./DUG/brows/browC3.png" },
    { outlineUrl: './DUG/brows/browOL4.png', fillUrl: "./DUG/brows/browC4.png" },
    { outlineUrl: './DUG/brows/browOL5.png', fillUrl: "./DUG/brows/browC5.png" },
];

export let eyeUrls: Shape[] = [
    {
        outlineUrl: './DUG/eyes/eye.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash1.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash2.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash3.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash4.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash5.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash6.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash7.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
    {
        outlineUrl: './DUG/eyes/eye.png', extraLineUrl: './DUG/eyes/eyeLash8.png',
        fillUrl: './DUG/eyes/eyeIris1.png', secondFillUrl: './DUG/eyes/eyeIris2.png',
        bgPermColorUrl: "./DUG/eyes/eyeWhites.png"
    },
];

export const fleshColor: string[] = [
    "skin1",
    "skin2",
    "skin3",
    "skin5",
    "skin4",
    "skin6",
    "skin7",
    "skin8",
    "skin9",
    "skin10"
]

export const lipColor: string[] = [
    "lip1",
    "lip2",
    "lip3",
    "lip4",
    "lip5",
    "lip6",
    "lip7",
    "lip8"
]

export const bigColorOption: string[] = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
    "color11",
    "color12",
    "color13",
    "color14",
    "color15",
    "color16",
    "color17",
    "color18",
    "color19",
    "color20",
    "color21",
    "color22",
    "color23",
    "color24",
    "color25",
    "color26",
    "color27",
    "color28",
    "color29",
    "color30",
    "color31",
    "color32",
    "color33",
    "color34",
    "color35",
    "color36",
    "color37",
    "color38",
    "color39",
    "color40",
    "color41",
    "color42",
    "color43",
    "color44",
    "color45",
    "color46",
    "color47",
    "color48",
    "color49",
    "color50",
    "color51",
    "color52",
    "color53",
    "color54",
]

