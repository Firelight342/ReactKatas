import React from 'react';
import './DressUpGame.css'

interface ColorButtonProps {
    onClick: (color: string) => void,
}
interface ButtonState {
    isTrayOpen: boolean
}
const colorList: string[] = [
    "blue",
    "purple",
    "grey"
]

//let colorUrls = ['./imgTesting/color.png', './imgTesting/color.png', './imgTesting/color.png']
export class ColorButtons extends React.Component<ColorButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false,
        }
    }

    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        return (
            <>
                <h3 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"} Color
                </h3>

                {this.state.isTrayOpen && colorList.map((color: string) => {
                    return (
                        <>
                            <img
                                src={"./imgTesting/color.png"}
                                onClick={() => {
                                    this.props.onClick(color)
                                }}
                                className={` ${color} clothesTrayImg`}
                            />
                        </>
                    )
                })}
            </>
        );
    }
}

export interface ShapeUrl {
    outlineUrl: string
    fillUrl: string
}

export interface Shape extends ShapeUrl {
    color: string
}

let shapeUrls: ShapeUrl[] = [
    { outlineUrl: './imgTesting/starLines.png', fillUrl: "./imgTesting/starColor.png" },
    { outlineUrl: './imgTesting/polygonLines.png', fillUrl: "./imgTesting/polygonColor.png" },
];

interface ShapeButtonProps {
    itemName: string,
    onShapeSelect: (shape: Shape) => void
}
interface ShapeButtonState {
    isTrayOpen: boolean
    selectedShape: ShapeUrl | undefined
    selectedColor: string
}
export class ShapeButtons extends React.Component<ShapeButtonProps, ShapeButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false,
            selectedShape: undefined,
            selectedColor: "grey"
        }
    }
    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}</h1>
                {this.state.isTrayOpen &&
                    <>
                        {shapeUrls.map((shapeUrl: ShapeUrl) => {
                            return (
                                <img
                                    src={shapeUrl.outlineUrl}
                                    className="clothesTrayImg"
                                    onClick={() => {
                                        this.setState({ selectedShape: shapeUrl });
                                        this.props.onShapeSelect({ ...shapeUrl, color: this.state.selectedColor })
                                    }} />

                            )
                        })}
                        <ColorButtons onClick={(color) => {
                            this.setState({ selectedColor: color });
                            if (this.state.selectedShape) {
                                this.props.onShapeSelect({ ...this.state.selectedShape, color: color })
                            }
                        }} />

                    </>
                }
            </>
        );
    }
}
