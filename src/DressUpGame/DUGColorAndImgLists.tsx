import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'

export interface ShapeUrl {
    outlineUrl: string
    fillUrl?: string
}
export interface Shape extends ShapeUrl {
    color?: string
}

export let characterUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/girlOutline.png', fillUrl: "./DUG/girlColor.png" },
];

export let lipsUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/lipsOL1.png', fillUrl: "./DUG/lipsC1.png" },
    { outlineUrl: './DUG/lipsOL2.png', fillUrl: "./DUG/lipsC2.png" },
    { outlineUrl: './DUG/lipsOL3.png', fillUrl: "./DUG/lipsC3.png" },
    { outlineUrl: './DUG/lipsOL4.png', fillUrl: "./DUG/lipsC4.png" },
    { outlineUrl: './DUG/lipsOL5.png', fillUrl: "./DUG/lipsC5.png" },
    { outlineUrl: './DUG/lipsOL6.png', fillUrl: "./DUG/lipsC6.png" },
];

export let noseUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/nose1.png', fillUrl: "" },
    { outlineUrl: './DUG/nose2.png', fillUrl: "" },
    { outlineUrl: './DUG/nose3.png', fillUrl: "" },
    { outlineUrl: './DUG/nose4.png', fillUrl: "" },
];

export let browUrls: ShapeUrl[] = [
    { outlineUrl: './DUG/browOL1.png', fillUrl: "./DUG/browC1.png" },
    { outlineUrl: './DUG/browOL2.png', fillUrl: "./DUG/browC2.png" },
    { outlineUrl: './DUG/browOL3.png', fillUrl: "./DUG/browC3.png" },
    { outlineUrl: './DUG/browOL4.png', fillUrl: "./DUG/browC4.png" },
    { outlineUrl: './DUG/browOL5.png', fillUrl: "./DUG/browC5.png" },
];




export const fleshColor: string[] = [
    "skin1",
    "skin2",
    "skin3",
    "skin4",
    "skin5",
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

