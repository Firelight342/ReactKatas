import React from 'react';
import './App.css'

export interface Contact {
    firstName: string
    lastName: string
    email: string
}

interface Props {
    makeContact: (contact: Contact) => void;
}

export class MakeContact extends React.Component<Props, Contact>{
    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    makeInput(key: keyof Contact, lableText: string) {
        return (
            <div>
                <label htmlFor={key} style={{ fontWeight: "bold" }} >{lableText + ":  "}</label>
                <input
                    id={key}
                    onChange={(e) => this.setState({ [key]: e.target.value } as Pick<Contact, keyof Contact>)}
                    value={this.state[key]}
                    type="text" />

            </div>)
    }

    render() {
        var allowMakeContact = (this.state.firstName != ""
            && this.state.lastName != ""
            && this.state.email != "");

        return (
            <>
                {this.makeInput('firstName', "First Name")}
                {this.makeInput('lastName', "Last Name")}
                {this.makeInput('email', "Email")}
                <button disabled={!allowMakeContact} onClick={() => {
                    this.props.makeContact(this.state);
                    this.setState({ firstName: "", lastName: "", email: "" })
                }
                }>Add</button>
            </>
        )
    }
}
