import React from 'react';
import { ColorSwitcherGroup } from './ColorSwitcherGroup';
import { ButtonComponent } from './ButtonComponent';
import { TodoListClass } from './TodoListClass';
import './App.css'

// call List with props of an array of strings, that will be rendered inside a <ul>

interface ListState {
  items : string[]
  inputForm: string
}

interface ListProps {
  list : string[]
}

export class List extends React.Component<ListProps, ListState>{
  constructor(props: ListProps) {
    super(props);
    this.state = {
      items: props.list,
      inputForm: ""
    }
  }

  render(){
    console.log(this.state)
    return (
      <>
        <input onChange={(e)=>this.setState({inputForm: e.target.value})} value={this.state.inputForm} type="text"></input>
        <button onClick={()=>this.setState({items: [...this.state.items, this.state.inputForm], inputForm:""})}>Add</button>

        <ul>
          { this.state.items.map((item: string) => {
            return (<li>{item}</li>)
          })}
        </ul>
      </>
    )
  }
}

interface AppState {
}

export class App extends React.Component<any, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="AppRoot">
        <div>
          <List list={["a","b"]}/>
          <ColorSwitcherGroup />
          <ButtonComponent />
          <TodoListClass />

        </div>
      </div>
    );

  }
}

export default App;

// JSX
// state
// props 

// <h1></h1> header 1
// <h2></h2> header 2
// <h3></h3> header 3
// <div></div> horizontal divider 
// <span></span> style text
// <button></button> button
// <ul><li>test</li></ul> unorderd list with list item inside called "test"
// <></>  empty fragment