import React from "react";
import { InputAndLabel, InputAndLabelWithNumbers } from "./InputAndLabel";

export interface ListItem {
    item: string
    amount: number
    price: number
}
export interface ListState extends ListItem {
    items: ListItem[]
}

export class ShoppingList extends React.Component<any, ListState>{
    constructor(props: any) {
        super(props);
        this.state = {
            item: "Eggs",
            amount: 5,
            price: 10,
            items: [],
        }
    }
    render(): React.ReactNode {
        var allowItem = (this.state.item !== ""
            && this.state.amount !== 0
            && this.state.price !== 0);

        let finalPrice = this.state.items.reduce((acc, next) => acc + (next.amount * next.price), 0);
        return (
            <>
                <h1>Shopping List</h1>
                <InputAndLabel
                    labelText='Ingredients'
                    id='ingredients'
                    value={this.state.item}
                    onChange={(text) => this.setState({ item: text })} />
                <InputAndLabelWithNumbers
                    labelText='Amount'
                    id='amount'
                    value={this.state.amount}
                    onChange={(text) => this.setState({ amount: text })} />
                <InputAndLabelWithNumbers
                    labelText='Price'
                    id='price'
                    value={this.state.price}
                    onChange={(text) => this.setState({ price: text })} />

                <button disabled={!allowItem} onClick={() => {
                    this.setState({
                        item: "", amount: 0, price: 0,
                        items: [...this.state.items,
                        {
                            item: this.state.item,
                            amount: this.state.amount,
                            price: this.state.price
                        }]
                    });
                }}>Add to Table</button>

                <table>
                    <tr>
                        <th>Ingredients</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>

                    {this.state.items.map((item, index) => {
                        return (
                            <tr key={item.item}>
                                <td>{item.item}</td>
                                <td>
                                    <input type={"number"}
                                        value={item.amount}
                                        onChange={(e) => {
                                            let value = parseInt(e.target.value);
                                            this.state.items[index].amount = value;
                                            this.setState({ items: this.state.items });
                                        }}>
                                    </input>
                                </td>
                                <td>${item.price}</td>
                            </tr>)
                    }
                    )}
                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{ fontWeight: "bold" }}> ${finalPrice}</td>
                    </tr>
                </table>
            </>
        )
    }
}
