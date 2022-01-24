import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'

export interface ShapeUrl {
    outlineUrl?: string
    fillUrl?: string
    secondFillUrl?: string
    bgColorUrl?: string
}
export interface Shape extends ShapeUrl {
    color?: string
}


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

export let characterUrls: Shape =
    { outlineUrl: './DUG/girl/girlOutline.png', fillUrl: "./DUG/girl/girlColor.png", color: "grey" };

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

export let eyeUrls: Shape =
{
    fillUrl: './DUG/eyes/eyeIris1.png',
    secondFillUrl: './DUG/eyes/eyeIris2.png',
    bgColorUrl: "./DUG/eyes/eyeWhites.png"
};

export let eyeLashUrls: Shape[] = [
    { outlineUrl: './DUG/eyes/eyeLash1.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash2.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash3.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash4.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash5.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash6.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash7.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eyeLash8.png', bgColorUrl: './DUG/eyes/eye.png', fillUrl: "" },
    { outlineUrl: './DUG/eyes/eye.png', fillUrl: "" },

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

