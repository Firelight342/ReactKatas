import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
//import { Shape } from './DUGColorAndImgLists';

export interface Frame {
    outlineUrl?: string
    extraLineUrl?: string
    fillUrl?: string
    secondFillUrl?: string
    color?: string
    color2?: string
}

export class SelectedShape extends React.Component<{ frame: Frame }, {}> {

    render(): React.ReactNode {
        return (

            <div>
                <img alt="" src={this.props.frame.fillUrl} className={this.props.frame.color + " body"} />
                <img alt="" src={this.props.frame.secondFillUrl} className={this.props.frame.color2 + " body"} />
                <img alt="" src={this.props.frame.extraLineUrl} className="body " />
                <img alt="" src={this.props.frame.outlineUrl} className="body " />
            </div>
        )
    }
}
