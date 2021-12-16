import React from 'react';
import { Contact } from './MakeContact';

interface DisplayContactProps {
    contacts: Contact[]
    removeLine: (contact: Contact) => void;
}

export class DisplayContacts extends React.Component<DisplayContactProps, any>{
    render() {
        return (
            <ul>
                {this.props.contacts.map((contact: Contact) => {
                    return (<li>{contact.firstName
                        + " " + contact.lastName
                        + " " + contact.email}
                        <button style={{ marginLeft: "15px" }} onClick={() => this.props.removeLine(contact)}>Remove</button>
                    </li>)
                })}
            </ul>
        )
    }

}