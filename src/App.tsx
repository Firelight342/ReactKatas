import React from 'react';
import logo from './logo.svg';
import './App.css';

function upperCase(word: string) {
  let upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperCaseWord;
}

function App() {
  let name = "steve";
  let shoppingList = ["milk", "eggs", "cheese"];
  let favorites = ["cats", "dogs", "pangolins"];
  return (
    <div className="App">
      Hello
      <div>Test <span style={{ color: "red", paddingRight: "144px" }}>World</span> {name.length} jim</div>
      <div>
        <h1>Ingredient </h1>
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