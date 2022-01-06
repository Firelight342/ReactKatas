import React from 'react';

export interface InputAndLabelProps {
    labelText: string
    id: string
    value: string
    onChange: (text: string) => void
}


// decoupling components  -> loose coupling, high cohesion

// more reuse, doesn't call this.state or this.setState
// "stateless"
export class InputAndLabel extends React.Component<InputAndLabelProps, any> {
    render(): React.ReactNode {
        return (
            <div>
                <label htmlFor={this.props.id} style={{ fontWeight: "bold" }} >
                    {this.props.labelText + ":  "}</label>
                <input
                    id={this.props.id}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    value={this.props.value}
                    type="text" />

            </div>)
    }
}

export interface InputAndLabelPropsWithNumbers {
    labelText: string
    id: string
    value: number
    onChange: (text: number) => void
}

export class InputAndLabelWithNumbers extends React.Component<InputAndLabelPropsWithNumbers, any> {
    render(): React.ReactNode {
        return (
            <div>
                <label htmlFor={this.props.id} style={{ fontWeight: "bold" }} >
                    {this.props.labelText + ":  "}</label>
                <input
                    id={this.props.id}
                    onChange={(e) => this.props.onChange(parseInt(e.target.value))}
                    value={this.props.value}
                    type="number" />

            </div>)
    }
}