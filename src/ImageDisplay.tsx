import React from 'react';

export interface Props {
    imgPath: string
    onClick: () => void
}

export class ImageDisplay extends React.Component<Props, any>{
    render(): React.ReactNode {
        return (
            <>
                <img src={this.props.imgPath} style={{ height: "200px" }} onClick={this.props.onClick}></img>
            </>
        )
    }
}

interface LotrCharacterDisplayState {
    counter: number
}

let images = ['./lotr/Aragorn.webp', './lotr/Arwen.webp', './lotr/Gandalf.jpg', './lotr/Frodo.jpg']

export class LotrCharacterDisplay extends React.Component<any, LotrCharacterDisplayState>{
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render(): React.ReactNode {
        return (
            <>
                <ImageDisplay imgPath={images[this.state.counter]}
                    onClick={() => this.setState({ counter: (this.state.counter + 1) % 4 })} />
                <p><button onClick={() => this.setState({ counter: 0 })}>Aragorn</button></p>
                <p><button onClick={() => this.setState({ counter: 1 })}>Arwen</button></p>
                <p><button onClick={() => this.setState({ counter: 2 })}>Gandalf</button></p>
                <p><button onClick={() => this.setState({ counter: 3 })}>Frodo</button></p>
            </>
        )
    }
}
