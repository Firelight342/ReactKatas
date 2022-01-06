import React from 'react';


interface LabelProps {
    labelText: string
    id: string
}

class LabelWrapper extends React.Component<LabelProps, any> {
    render(): React.ReactNode {
        return (
            <div>
                <label htmlFor={this.props.id} style={{ fontWeight: "bold" }} >
                    {this.props.labelText + ":  "}</label>
                {this.props.children}
            </div>)
    }
}

export interface InputAndLabelProps<T> extends LabelProps {
    value: T
    onChange: (text: T) => void
}

// decoupling components  -> loose coupling, high cohesion

// more reuse, doesn't call this.state or this.setState
// "stateless"
export class InputAndLabelWithNumbers extends React.Component<InputAndLabelProps<number>, any> {
    render(): React.ReactNode {
        return (
            <LabelWrapper id={this.props.id} labelText={this.props.labelText} >
                <input
                    id={this.props.id}
                    onChange={(e) => this.props.onChange(parseInt(e.target.value))}
                    value={this.props.value}
                    type="number" />
            </LabelWrapper>
        )
    }
}

export class InputAndLabel extends React.Component<InputAndLabelProps<string>, any> {
    render(): React.ReactNode {
        return (
            <LabelWrapper id={this.props.id} labelText={this.props.labelText} >
                <input
                    id={this.props.id}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    value={this.props.value}
                    type="text" />
            </LabelWrapper>
        )
    }
}