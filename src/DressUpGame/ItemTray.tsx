import React from 'react';
import './ItemTray.css'

interface ItemTrayProps {
    trayHeaderTitle: string
    isTrayOpen: boolean
    onClick: () => void
}

export class ItemTray extends React.Component<ItemTrayProps, {}>{

    render(): React.ReactNode {
        return (
            <>
                <h1 onClick={() => this.props.onClick()}>
                    {this.props.isTrayOpen ? "-" : "+"}{this.props.trayHeaderTitle}
                </h1>
                {this.props.isTrayOpen &&
                    <>
                        {this.props.children}
                    </>
                }
            </>
        );
    }
}
