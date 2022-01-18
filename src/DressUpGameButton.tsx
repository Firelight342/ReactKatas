import { count } from 'console';
import React from 'react';
import './DressUpGame.css'

interface ButtonProps {
    itemName: string,
    buttonUrls: string[],
    colorUrls: string[],
    onClick: (imgUrl: string) => void,
}
interface ButtonState {
    isTrayOpen: boolean

}
const colorList: any = {
    0: "blue",
    1: "purple",
    2: "grey"


}
export class ColorButtons extends React.Component<ButtonProps, ButtonState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false,
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

                {this.state.isTrayOpen && this.props.buttonUrls.map((imgUrl: string, index) => {
                    return (
                        <>
                            <img
                                src={imgUrl}
                                //className="clothesTrayImg "
                                onClick={() => {
                                    this.props.onClick(this.props.colorUrls[index])
                                }}
                                /*
                                onClick={() => {
                                    this.props.onClick(this.props.colorUrls[index], colorList[index])
                                }}
                                */
                                className={`clothesTrayImg ${colorList[index]} `}
                            />

                        </>

                    )
                })}


            </>
        );
    }
}
