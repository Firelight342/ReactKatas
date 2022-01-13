import React from 'react';
import './DressUpGame.css'

interface ButtonProps {
    itemName: string,
    buttonUrls: string[],
    colorUrls: string[],
    onClick: (imgUrl: string) => void
}
interface ButtonState {
    isTrayOpen: boolean
    colorTray: boolean

}
export class ColorButtons extends React.Component<ButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false,
            colorTray: false
        }
    }
    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;
        var inverseColor = !this.state.colorTray;
        // boolean ? "if true" : "if false"
        return (
            <>
                <h1 onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.itemName}
                </h1>

                {this.state.isTrayOpen && this.props.buttonUrls.map((imgUrl: string, index) => {
                    return (
                        <>
                            <img
                                src={imgUrl}
                                className="clothesTrayImg"
                                onClick={() => this.props.onClick(this.props.colorUrls[index])} />
                        </>
                    )
                })}
            </>
        );
    }
}


export class displayImgPair extends React.Component<any, any>{

    render(): React.ReactNode {
        return (
            <>
                <img src={this.state.fillUrl} className="smallImg star blue" />
                <img src={this.state.outlineUrl} className="smallImg star " />
            </>
        )
    }

}