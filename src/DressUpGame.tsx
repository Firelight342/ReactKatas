import React from 'react';
import './DressUpGame.css'

let hatImgs = ['./Hats/hat1.png', './Hats/hat2.png']
let shirtImgs = ['./Hats/shirt1.png', './Hats/shirt2.png']

interface ButtonProps {
    itemName: string,
    imgUrls: string[],
    onClick: (imgUrl: string) => void
}
class ClothingButtons extends React.Component<ButtonProps, any>{
    render(): React.ReactNode {
        return (
            <>
                <h1>{this.props.itemName}</h1>
                {this.props.imgUrls.map((imgUrl: string) => {
                    return (

                        <img
                            src={imgUrl}
                            className="clothesTrayImg"
                            onClick={() => this.props.onClick(imgUrl)} />

                    )
                })}
            </>
        );
    }
}

interface DU1State {
    hatUrl: string
    shirtUrl: string
}
export class DressUpGameTryingStuff extends React.Component<any, DU1State> {
    constructor(props: any) {
        super(props);
        this.state = {
            hatUrl: "",
            shirtUrl: ""
        }
    }
    render(): React.ReactNode {
        return (
            <>
                <div className="clothesTray">
                    <ClothingButtons itemName='Hats' imgUrls={hatImgs} onClick={(url) => this.setState({ hatUrl: url })} />
                    <ClothingButtons itemName='Shirts' imgUrls={shirtImgs} onClick={(url) => this.setState({ shirtUrl: url })} />
                </div>
                <div style={{ width: "70%" }}>
                    <div>
                        <img src={this.state.hatUrl} className="smallImg" />
                    </div>
                    <div>
                        <img src={this.state.shirtUrl} style={{ height: "120px" }} />
                    </div>
                </div>


            </>
        )
    }
}