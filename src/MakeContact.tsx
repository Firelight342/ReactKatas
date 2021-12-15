import React from 'react';
import './App.css'

interface State {
    firstName: string
    lastName: string
    email: string
}

export class MakeContact extends React.Component<any, State>{
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    makeInput(key: keyof State, lableText: string) {
        return (
            <div>
                <label htmlFor={key} style={{ fontWeight: "bold" }} >{lableText + ":  "}</label>
                <input
                    id={key}
                    onChange={(e) => this.setState({ [key]: e.target.value } as Pick<State, keyof State>)}
                    value={this.state[key]}
                    type="text"/>
            </div>)
    }
    render() {
        return (
            <>
                {this.makeInput('firstName', "First Name")}
                {this.makeInput('lastName', "Last Name")}
                {this.makeInput('email', "Email")}
            </>
        )
    }
}
