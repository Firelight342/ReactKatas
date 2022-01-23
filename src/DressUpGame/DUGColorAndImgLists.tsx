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


export let bangs: ShapeUrl[] = [
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
export let headHair: ShapeUrl[] = [
    { outlineUrl: './DUG/headHair/headHairOL1.png', fillUrl: "./DUG/headHair/headHairC1.png" },
    { outlineUrl: './DUG/headHair/headHairOL2.png', fillUrl: "./DUG/headHair/headHairC2.png" },
    { outlineUrl: './DUG/headHair/headHairOL3.png', fillUrl: "./DUG/headHair/headHairC3.png" },
    { outlineUrl: './DUG/headHair/headHairOL4.png', fillUrl: "./DUG/headHair/headHairC4.png" },
    { outlineUrl: "./DUG/blank.png", fillUrl: "" },
];

export let characterUrls: Shape =
    { outlineUrl: './DUG/girl/girlOutline.png', fillUrl: "./DUG/girl/girlColor.png", color: "grey" };

export let lipsUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/lips/lipsOL1.png', fillUrl: "./DUG/lips/lipsC1.png" },
    { outlineUrl: './DUG/lips/lipsOL2.png', fillUrl: "./DUG/lips/lipsC2.png" },
    { outlineUrl: './DUG/lips/lipsOL3.png', fillUrl: "./DUG/lips/lipsC3.png" },
    { outlineUrl: './DUG/lips/lipsOL4.png', fillUrl: "./DUG/lips/lipsC4.png" },
    { outlineUrl: './DUG/lips/lipsOL5.png', fillUrl: "./DUG/lips/lipsC5.png" },
    { outlineUrl: './DUG/lips/lipsOL6.png', fillUrl: "./DUG/lips/lipsC6.png" },
];

export let noseUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/noses/nose1.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose2.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose3.png', fillUrl: "" },
    { outlineUrl: './DUG/noses/nose4.png', fillUrl: "" },
];

export let browUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/brows/browOL1.png', fillUrl: "./DUG/brows/browC1.png" },
    { outlineUrl: './DUG/brows/browOL2.png', fillUrl: "./DUG/brows/browC2.png" },
    { outlineUrl: './DUG/brows/browOL3.png', fillUrl: "./DUG/brows/browC3.png" },
    { outlineUrl: './DUG/brows/browOL4.png', fillUrl: "./DUG/brows/browC4.png" },
    { outlineUrl: './DUG/brows/browOL5.png', fillUrl: "./DUG/brows/browC5.png" },
];

export let eyeUrls: Shape =
{
    outlineUrl: './DUG/eyes/eye.png',
    fillUrl: './DUG/eyes/eyeIris1.png',
    secondFillUrl: './DUG/eyes/eyeIris2.png',
    bgColorUrl: "./DUG/eyes/eyeWhites.png"
};

export let eyeLashUrls: ShapeUrl[] = [
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

