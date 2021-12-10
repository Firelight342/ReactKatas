import React from 'react';
import logo from './logo.svg';
import './App.css';

function upperCase(word: string) {
  let upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperCaseWord;
}

function TodoListFunction() {

  let items= ["milk", "cheese"]
    return (
      <>
        <h1>Ingredients</h1>
        <ul>
          {
            items.map((item:string) => {
              return (<li>{item}</li>)
            })
          }
        </ul>
      </>
    );
}

// class -> noun with verbs and state inside
// functions -> verbs
class TodoListClass extends React.Component<any,any> {

  constructor(props:any) {
    super(props);
    this.state = {
      items: ["milk", "cheese"]
    };  
  }

  // setState -> calls render with the new state aka "triggers a re-render"

  render() {
    let style = { color: "black", listStyleType: "circle" }
    if (this.state.items.length > 3){
      style.color = "red"
    }

    return (
      <>
        <h1>Ingredients</h1>
        <button onClick={() => this.setState({items: [ ...this.state.items, "eggs"]})}>Add Eggs</button>
        <ul style={style}>
          {
            this.state.items.map((item:string) => {
              return (<li>{item}</li>)
            })
          }
        </ul>
      </>
    );
  }
}

class ButtonComponet extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      timesClicked: 0
    };  
  }
 
  render(){
 
  let style = { color: "black" }
  let stop = ""
  if (this.state.timesClicked >= 10){
    style.color = "red"
    stop = "Stop clicking me!"
  }

    return(
    <>
      <h1>Counter</h1>
      <button onClick = {() => this.setState({timesClicked: this.state.timesClicked+1})}>Add</button>
      <button onClick = {() => this.setState({timesClicked: this.state.timesClicked-1})}>Sub</button>
      <button onClick = {() => this.setState({timesClicked: 0})}>Reset</button>

      <div style={style}>{"Clicked: " + this.state.timesClicked}</div>
      <div>{stop}</div>
    </>
    )
    
  }
}

function App() {
  let name = "steve";
  let shoppingList = ["milk", "eggs", "cheese"];
  let favorites = ["cats", "dogs", "pangolins"];
  return (
    <div className="App">
      <div>
        <ButtonComponet />
        <ButtonComponet />
        <TodoListClass />
        <TodoListClass />

      </div>
      {
/*
      Hello
      <div>Test <span style={{ color: "red", paddingRight: "144px" }}>World</span> {name.length} jim</div>
      <div>
        <h1>Ingredient</h1>
        <ul>
          {
            shoppingList.map(item => {
              let style = { color: "black" }
              if (item.length > 4) {
                style.color = "red"
              }
              return (<li style={style}>{upperCase(item)}</li>)
            })
          }
        </ul>
        <h1>Favorites</h1>
        <ul>
          {
            favorites.map(item => {
              let animal = item
              if (item.length < 5) {
                animal = animal.toUpperCase()
              }
              return (<li>{animal}</li>)
            })
          }
        </ul>
      </div>

 */

      }
    </div>
  );
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