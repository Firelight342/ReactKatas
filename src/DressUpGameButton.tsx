import { count } from 'console';
import React from 'react';
import './DressUpGame.css'

interface ColorButtonProps {
    itemName: string,
    colorUrls: string[],

    onClick: (imgUrl: string, color: string) => void,
}
interface ButtonState {
    isTrayOpen: boolean

}
const colorList: any = {
    0: "blue",
    1: "purple",
    2: "grey"


}
export class ColorButtons extends React.Component<ColorButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: true,
        }
    }

    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        // boolean ? "if true" : "if false"
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}
                </h1>

                {this.state.isTrayOpen && this.props.colorUrls.map((imgUrl: string, index) => {
                    return (
                        <>
                            <img
                                src={imgUrl}
                                onClick={() => {
                                    this.props.onClick(imgUrl, colorList[index])
                                }}
                                className={` ${colorList[index]} clothesTrayImg`}
                            />
                        </>
                    )
                })}
            </>
        );
    }
}


interface ButtonProps {
    itemName: string,
    outlineUrls: string[],
    fillUrls: string[],
    onClick: (outlineUrl: string, fillUrl: string) => void
}
interface ButtonState {
    isTrayOpen: boolean
}
export class ShapeButtons extends React.Component<ButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: true
        }
    }
    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        // boolean ? "if true" : "if false"
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}</h1>
                {this.state.isTrayOpen && this.props.outlineUrls.map((outlineUrl: string, index) => {
                    return (

                        <img
                            src={outlineUrl}
                            className="clothesTrayImg"
                            onClick={() => this.props.onClick(outlineUrl, this.props.fillUrls[index])} />

                    )
                })}
            </>
        );
    }
}