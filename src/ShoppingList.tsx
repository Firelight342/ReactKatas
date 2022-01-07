import React from "react";
import { isTemplateSpan } from "typescript";
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
        var isIngredientValid = this.state.item !== "";
        var isAmountValid = this.state.amount !== 0;
        var isPriceValid = this.state.price !== 0;
        var allowItem = (isIngredientValid && isAmountValid && isPriceValid);

        let finalPrice = this.state.items.reduce((acc, next) => acc + (next.amount * next.price), 0);
        return (
            <>
                <h1>Shopping List</h1>
                <InputAndLabel
                    labelText='Ingredients'
                    id='ingredients'
                    errorMessage={!isIngredientValid && "cannot be left blank"}
                    value={this.state.item}
                    onChange={(text) => this.setState({ item: text })} />

                <InputAndLabelWithNumbers
                    labelText='Amount'
                    id='amount'
                    errorMessage={!isAmountValid && "must be greater than 0"}
                    value={this.state.amount}
                    onChange={(text) => this.setState({ amount: text })} />
                <InputAndLabelWithNumbers
                    labelText='Price'
                    id='price'
                    errorMessage={!isPriceValid && "must be greater than 0"}
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
                                <td>$ <input type={"number"}
                                    value={item.price}
                                    onChange={(e) => {
                                        let value = parseInt(e.target.value);
                                        this.state.items[index].price = value;
                                        this.setState({ items: this.state.items });
                                    }}>
                                </input>
                                </td>
                                <tr>
                                    <button onClick={() => {
                                        // remove from the state array using index
                                        // setState
                                        this.state.items.splice(index, 1)
                                        this.setState({ items: this.state.items })
                                    }}>Delete</button>
                                </tr>
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
