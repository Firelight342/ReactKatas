import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { Shape } from './DUGColorAndImgLists';
import { ItemTray } from './ItemTray';


interface ColorButtonProps {
    onClick: (color: string) => void,
    color: string[]
}

export class ColorButtons extends React.Component<ColorButtonProps, {}>{

    render(): React.ReactNode {
        return (
            <>

                {this.props.color.map((color: string) => {
                    return (
                        <>
                            <img
                                src={"./imgTesting/color.png"}
                                onClick={() => {
                                    this.props.onClick(color)
                                }}
                                className={` ${color} clothesTrayImgColor`}
                            />
                        </>
                    )
                })}

            </>
        );
    }
}



interface ColorButtonPropsO {
    itemName: string
    imgUrl: Shape
    onClick: (shape: Shape) => void,
    color: string[]

}

export class ColorButtonsForPermObj extends React.Component<ColorButtonPropsO, {}>{

    render(): React.ReactNode {
        return (
            <>
                <ItemTray trayHeaderTitle={this.props.itemName}>
                    {this.props.color.map((color: string) => {
                        return (
                            <>
                                <img
                                    src={"./imgTesting/color.png"}
                                    onClick={() => {
                                        this.props.onClick({
                                            fillUrl: this.props.imgUrl.fillUrl,
                                            outlineUrl: this.props.imgUrl.outlineUrl,
                                            secondFillUrl: this.props.imgUrl.secondFillUrl,
                                            bgColorUrl: this.props.imgUrl.bgColorUrl,
                                            color: color
                                        })
                                    }}
                                    className={` ${color} clothesTrayImgColor`}
                                />
                            </>
                        )
                    })}
                </ItemTray>
            </>
        );
    }
}