import React from "react";
import { InputAndLabel } from "./InputAndLabel";

export interface ListState {
    item: string
    amount: string
    price: string
 }
 export class ShoppingList extends React.Component<any, ListState>{
    constructor(props: any) {
        super(props);
        this.state = {
            item: "",
            amount: "",
            price: ""
        }
    }
  
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
 }