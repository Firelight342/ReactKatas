import React from 'react';
import './ItemTray.css'

interface ItemTrayProps {
    trayHeaderTitle: string
    useSmallerHeader?: boolean
}
interface ItemTrayState {
    isTrayOpen: boolean
}
export class ItemTray extends React.Component<ItemTrayProps, ItemTrayState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isTrayOpen: false,
        }
    }
    render(): React.ReactNode {
        var inverse = !this.state.isTrayOpen;

        var headerClass = "";
        if (this.props.useSmallerHeader) {
            headerClass = "smallerHeader"

        }
        return (
            <>
                <h1 className={headerClass} onClick={() => this.setState({ isTrayOpen: inverse })}>
                    {this.state.isTrayOpen ? "-" : "+"}{this.props.trayHeaderTitle}
                </h1>
                {this.state.isTrayOpen &&
                    <>
                        {this.props.children}
                    </>
                }
            </>
        );
    }
}
