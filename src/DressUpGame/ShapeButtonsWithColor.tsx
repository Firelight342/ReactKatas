import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ColorButtons } from './DressUpGameColorButton';
import { ItemTray } from './ItemTray';
import { ShapeUrl, Shape } from './DUGColorAndImgLists';

interface ShapeButtonProps {
    itemName: string,
    itemUrls: ShapeUrl[],
    onShapeSelect: (shape: Shape) => void,
    selectableColors: string[],
    secondSelectableColors?: string[],

    defaultShape?: Shape
}
interface ShapeButtonState {
    selectedShapeUrl: ShapeUrl | undefined
    selectedShapeColor: string
    selectedSecondShapeColor: string
}
export class ShapeButtonsWithColor extends React.Component<ShapeButtonProps, ShapeButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedShapeUrl: this.props.defaultShape || undefined,
            selectedShapeColor: this.props.defaultShape?.color || "",
            selectedSecondShapeColor: this.props.defaultShape?.color2 || ""
        }
    }
    render(): React.ReactNode {
        return (
            <>
                <ItemTray trayHeaderTitle={this.props.itemName}>
                    <>
                        {this.props.itemUrls.length > 1 && this.props.itemUrls.map((shapeUrl: ShapeUrl) => {
                            return (
                                <img
                                    src={shapeUrl.outlineUrl}
                                    className="clothesTrayImg"
                                    onClick={() => {
                                        this.setState({ selectedShapeUrl: shapeUrl });
                                        this.props.onShapeSelect({
                                            ...shapeUrl,
                                            color: this.state.selectedShapeColor,
                                            color2: this.state.selectedSecondShapeColor
                                        })
                                    }} />
                            )
                        })}
                        <div></div>

                    </>
                    {
                        this.props.selectableColors.length > 0 &&
                        <ColorButtons color={this.props.selectableColors} onClick={(color) => {
                            this.setState({ selectedShapeColor: color });
                            this.props.onShapeSelect({ ...this.state.selectedShapeUrl, color: color, color2: this.state.selectedSecondShapeColor })
                        }} />
                    }
                    <div></div>
                    {
                        this.props.secondSelectableColors &&
                        <ColorButtons color={this.props.secondSelectableColors} onClick={(color) => {
                            this.setState({ selectedSecondShapeColor: color });
                            this.props.onShapeSelect({ ...this.state.selectedShapeUrl, color: this.state.selectedShapeColor, color2: color })
                        }} />
                    }
                </ItemTray>
            </>
        );
    }
}
