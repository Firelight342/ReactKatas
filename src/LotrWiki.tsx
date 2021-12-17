import React from 'react';
import { InputAndLabel } from './InputAndLabel';

export interface LotrCharacter {
    Name: string
    Desc: string
    ImageLink: string
}
export interface LotrWikiState {
    NameField: string
    DescField: string
    ImageField: string
    CharList: LotrCharacter[]
}


export class LotrWiki extends React.Component<any, LotrWikiState>{
    constructor(props: any) {
        super(props);
        this.state = {
            NameField: "",
            DescField: "",
            ImageField: "",
            CharList: []
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                <InputAndLabel
                    id="NameField"
                    labelText="Name"
                    value={this.state.NameField}
                    onChange={(text) => this.setState({ NameField: text })} />
                <InputAndLabel
                    id="DescField"
                    labelText="Character Description"
                    value={this.state.DescField}
                    onChange={(text) => this.setState({ DescField: text })} />
                <InputAndLabel
                    id="ImageField"
                    labelText="Image Link"
                    value={this.state.ImageField}
                    onChange={(text) => this.setState({ ImageField: text })} />
                <button onClick={() => {
                    this.setState({
                        NameField: "", DescField: "",ImageField:"",
                        CharList: [...this.state.CharList,
                        {
                            Name: this.state.NameField,
                            Desc: this.state.DescField,
                            ImageLink: this.state.ImageField
                        }]
                    })
                }}>Add</button>
                <ul>
                    {this.state.CharList.map(character => {
                        return (<li key={character.Name}>
                            <img src={character.ImageLink } style={{width: "50px", height: "50px"}} />
                            <span style={{fontWeight:"bold"}}> {character.Name} </span>
                            {" " + character.Desc}
                         </li>)
                    })}
                </ul>
            </>
        )
    }
}
