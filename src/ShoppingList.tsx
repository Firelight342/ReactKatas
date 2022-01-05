import React from "react";
import { InputAndLabel } from "./InputAndLabel";

export interface ListItem {
    item: string
    amount: string
    price: string
}
export interface ListState {
    item: string
    amount: string
    price: string
    items: ListItem[]
}
export class ShoppingList extends React.Component<any, ListState>{
    constructor(props: any) {
        super(props);
        this.state = {
            item: "",
            amount: "",
            price: "",
            items: []
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

                <button onClick={() => {
                    this.setState({
                        item: "", amount: "", price: "",
                        items: [...this.state.items,
                        {
                            item: this.state.item,
                            amount: this.state.amount,
                            price: this.state.price
                        }]
                    })
                }}>Add to Table</button>

                <table>
                    <tr>
                        <th>Ingredients</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>

                    {this.state.items.map(item => {
                        return (<tr key={item.item}>
                            <td>{item.item}</td>
                            <td>{item.amount}</td>
                            <td>{item.price}</td>

                        </tr>)
                    }

                    )}

                </table>
            </>
        )
    }
}
