import React from 'react';

// class -> noun with verbs and state inside
// functions -> verbs
export class TodoListClass extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: ["milk", "cheese"]
        };
    }

    // setState -> calls render with the new state aka "triggers a re-render"

    render() {
        let style = { color: "black", listStyleType: "circle" }
        if (this.state.items.length > 3) {
            style.color = "red"
        }

        return (
            <>
                <h1>Ingredients</h1>
                <button onClick={() => this.setState({ items: [...this.state.items, "eggs"] })}>Add Eggs</button>
                <ul style={style}>
                    {
                        this.state.items.map((item: string) => {
                            return (<li>{item}</li>)
                        })
                    }
                </ul>
            </>
        );
    }
}


