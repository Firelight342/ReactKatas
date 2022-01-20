import React from 'react';
import './DressUpGame.css'
import { ItemTray } from './ItemTray';


interface ColorButtonProps {
    onClick: (color: string) => void,
}

const colorList: string[] = [
    "purple",
    "blue",
    "green",
    "yellow",
    "red",
    "white"
]

export class ColorButtons extends React.Component<ColorButtonProps, {}>{

    render(): React.ReactNode {
        return (
            <>
                <ItemTray trayHeaderTitle={"Color"} useSmallerHeader={true}>
                    {colorList.map((color: string) => {
                        return (
                            <>
                                <img
                                    src={"./imgTesting/colorWhite.png"}
                                    onClick={() => {
                                        this.props.onClick(color)
                                    }}
                                    className={` ${color} clothesTrayImg`}
                                />
                            </>
                        )
                    })}
                </ItemTray>
            </>
        );
    }
}