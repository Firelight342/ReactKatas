<<<<<<< HEAD
import React from "react";
import { InputAndLabel } from "./InputAndLabel";
=======
import React from 'react';
import { InputAndLabel } from './InputAndLabel';

>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81

export interface ListState {
    item: string
    amount: string
    price: string
<<<<<<< HEAD
 }
 export class ShoppingList extends React.Component<any, ListState>{
=======
}
export class ShoppingList extends React.Component<any, ListState>{
>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81
    constructor(props: any) {
        super(props);
        this.state = {
            item: "",
            amount: "",
            price: ""
        }
    }
<<<<<<< HEAD
  
=======

>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81
    render(): React.ReactNode {
        return (
            <>
                <h1>Shopping List</h1>
                <InputAndLabel
                    labelText='Ingredients'
                    id='ingredients'
                    value={this.state.item}
                    onChange={(text) => this.setState({ item: text })} />
                <InputAndLabel
                    labelText='Amount'
                    id='amount'
                    value={this.state.amount}
                    onChange={(text) => this.setState({ amount: text })} />
                <InputAndLabel
                    labelText='Price'
                    id='price'
                    value={this.state.price}
                    onChange={(text) => this.setState({ price: text })} />
            </>
        )
    }
<<<<<<< HEAD
 }
=======
}
>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81
