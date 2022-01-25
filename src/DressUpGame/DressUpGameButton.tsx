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
    color: string[]

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
                        {this.props.itemUrls.map((shapeUrl: ShapeUrl) => {
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
                    <ColorButtons color={this.props.color} onClick={(color) => {
                        this.setState({ selectedShapeColor: color });
                        this.props.onShapeSelect({ ...this.state.selectedShapeUrl, color: color })
                    }} />
                </ItemTray>
            </>
        );
    }
}


interface ShapeButtonPropsNC {
    itemName: string,
    itemUrls: ShapeUrl[],
    onShapeSelect: (shape: Shape) => void,
}
interface ShapeButtonStateNC {
    selectedShape: ShapeUrl | undefined
}
export class ShapeButtonsWithoutColor extends React.Component<ShapeButtonPropsNC, ShapeButtonStateNC>{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedShape: undefined,
        }
    }
    render(): React.ReactNode {
        return (
            <>
                <ItemTray trayHeaderTitle={this.props.itemName}>
                    <>
                        {this.props.itemUrls.map((shapeUrl: ShapeUrl) => {
                            return (
                                <img
                                    src={shapeUrl.outlineUrl}
                                    className="clothesTrayImg"
                                    onClick={() => {
                                        this.setState({ selectedShape: shapeUrl });
                                        this.props.onShapeSelect({ ...shapeUrl, })
                                    }} />
                            )
                        })}
                    </>
                </ItemTray>
            </>
        );
    }
}

//hat and shirt button setup
interface ButtonProps {
    itemName: string,
    imgUrls: string[],
    onClick: (imgUrl: string) => void
}
interface ButtonState {
    isTrayOpen: boolean
}
export class ClothingButtons extends React.Component<ButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false
        }
    }
    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        // boolean ? "if true" : "if false"
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}</h1>
                {this.state.isTrayOpen && this.props.imgUrls.map((imgUrl: string) => {
                    return (

                        <img
                            src={imgUrl}
                            className="clothesTrayImg"
                            onClick={() => this.props.onClick(imgUrl)} />

                    )
                })}
            </>
        );
    }
}

//what the call looks like
//<ClothingButtons itemName='Hats 5' imgUrls={hatImgs} onClick={(url) => this.setState({ hatUrl: url })} />
