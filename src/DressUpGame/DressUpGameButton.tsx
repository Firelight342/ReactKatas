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
    selectableColors: string[]

    defaultShape?: Shape
}
interface ShapeButtonState {
    selectedShapeUrl: ShapeUrl | undefined
    selectedShapeColor: string
}
export class ShapeButtonsWithColor extends React.Component<ShapeButtonProps, ShapeButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedShapeUrl: this.props.defaultShape || undefined,
            selectedShapeColor: this.props.defaultShape?.color || ""
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
                                        this.props.onShapeSelect({ ...shapeUrl, color: this.state.selectedShapeColor })
                                    }} />
                            )
                        })}
                        <div></div>

                    </>
                    {
                        this.props.selectableColors.length > 0 &&
                        <ColorButtons color={this.props.selectableColors} onClick={(color) => {
                            this.setState({ selectedShapeColor: color });
                            this.props.onShapeSelect({ ...this.state.selectedShapeUrl, color: color })
                        }} />
                    }
                </ItemTray>
            </>
        );
    }
}
