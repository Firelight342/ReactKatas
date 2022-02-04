import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'

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
                                alt="test"
                                src={"./DUG/panel/colorButtonOL.png"}
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

