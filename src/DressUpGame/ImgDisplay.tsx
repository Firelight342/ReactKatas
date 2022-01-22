import React from 'react';
import './DressUpGame.css'
import './DressUpGameColors.css'
import { Shape } from './DUGColorAndImgLists';

export class SelectedShape extends React.Component<{ shape: Shape }, {}> {

    render(): React.ReactNode {
        return (

            <div>
                <img src={this.props.shape.fillUrl} className={this.props.shape.color + " body"} />
                <img src={this.props.shape.outlineUrl} className="body " />
            </div>
        )
    }
}
