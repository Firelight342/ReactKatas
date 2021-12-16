import React from 'react';
import { Contact, MakeContact } from './MakeContact';
import { DisplayContacts } from './DisplayContacts';


interface AppState {
    contacts: Contact[]
}

export class ContactList extends React.Component<any, AppState>{
    constructor(props: any) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    addToList(contact: Contact) {
        this.setState({ contacts: [...this.state.contacts, contact] })
    }

    removeFromList(contact: Contact) {
        this.setState({
            contacts: this.state.contacts.filter(c => c.firstName !== contact.firstName
                && c.lastName !== contact.lastName
                && c.email !== contact.email)
        })
    }

    render() {
        return (
            <div className="AppRoot">
                <div>
                    <MakeContact makeContact={(contact) => this.addToList(contact)} />
                    <DisplayContacts contacts={this.state.contacts}
                        removeLine={(contact) => this.removeFromList(contact)} />
                </div>
            </div>
        );

    }
}

export default ContactList;