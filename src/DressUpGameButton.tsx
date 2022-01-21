import React from 'react';
import './DressUpGame.css'
import { ColorButtons } from './DressUpGameColorButton';
import { ItemTray } from './ItemTray';

export interface ShapeUrl {
    outlineUrl: string
    fillUrl: string
}

export interface Shape extends ShapeUrl {
    color: string
}

let shapeUrls: ShapeUrl[] = [
    { outlineUrl: './imgTesting/starLines.png', fillUrl: "./imgTesting/starColorFadeTest.png" },
    { outlineUrl: './imgTesting/polygonLines.png', fillUrl: "./imgTesting/polygonColor.png" },
];

interface ShapeButtonProps {
    itemName: string,
    onShapeSelect: (shape: Shape) => void
}
interface ShapeButtonState {
    selectedShape: ShapeUrl | undefined
    selectedColor: string
}
export class ShapeButtons extends React.Component<ShapeButtonProps, ShapeButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedShape: undefined,
            selectedColor: "white"
        }
    }
    render(): React.ReactNode {
        return (
            <>
                <ItemTray trayHeaderTitle={"Shapes"}>
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
                </ItemTray>
            </>
        );
    }
}
