import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { ItemTray } from './ItemTray';

interface SideBarProps {
    labels: string[]
}

interface SideBarState {
    currentlyOpenTray?: number
}

export class SideBar extends React.Component<SideBarProps, SideBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentlyOpenTray: undefined
        }
    }

    render() {
        return (<>
            {
                this.props.children && React.Children.map(this.props.children, (c, index) => {
                    return (

                        <ItemTray
                            isTrayOpen={index === this.state.currentlyOpenTray}
                            trayHeaderTitle={this.props.labels[index]}
                            onClick={() => {
                                let openTray = index === this.state.currentlyOpenTray ? undefined : index;
                                this.setState({ currentlyOpenTray: openTray });
                            }}
                        >
                            {c}
                        </ItemTray>
                    )
                })
            }
        </>);
    }
}
