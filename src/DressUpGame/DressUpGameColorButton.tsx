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

