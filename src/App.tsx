import React from 'react';
import './App.css'
import { DressUpGameTryingStuff } from './DressUpGame/DressUpGame';


export class App extends React.Component<any, any>{

  render() {
    return (
      <div className="AppRoot">
        <div>
          <DressUpGameTryingStuff />

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

// { /* COMMENT */ } 
/* 
{
  // COMMENT
} 
{ false && <CommentedOutComponent /> }
*/