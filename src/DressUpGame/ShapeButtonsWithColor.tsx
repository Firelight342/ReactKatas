import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ColorButtons } from './DressUpGameColorButton';
import { ShapeUrl, Shape } from './Types';

interface ShapeButtonProps {
    itemUrls: ShapeUrl[],
    onShapeSelect: (shape: Shape) => void,
    selectableColors: string[],
    secondSelectableColors?: string[],

    selectedShape?: Shape
}

export class ShapeButtonsWithColor extends React.Component<ShapeButtonProps, any>{

    render(): React.ReactNode {
        return (
            <>
                <>
                    {this.props.itemUrls.length > 1 && this.props.itemUrls.map((shapeUrl: ShapeUrl) => {
                        return (
                            <img
                                alt=""
                                src={shapeUrl.iconUrl || shapeUrl.outlineUrl}
                                className="clothesTrayImg"
                                onClick={() => {
                                    this.props.onShapeSelect({
                                        ...this.props.selectedShape,
                                        ...shapeUrl,
                                    })
                                }} />
                        )
                    })}
                    <div></div>
                </>
                {
                    this.props.selectableColors.length > 0 &&
                    <ColorButtons color={this.props.selectableColors} onClick={(color) => {
                        this.props.onShapeSelect({ ...this.props.selectedShape, color: color })
                    }} />
                }
                <div></div>
                {
                    this.props.secondSelectableColors &&
                    <ColorButtons color={this.props.secondSelectableColors} onClick={(color) => {
                        this.props.onShapeSelect({ ...this.props.selectedShape, color2: color })
                    }} />
                }
            </>
        );
    }
}
