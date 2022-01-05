import React from 'react';
import './App.css'
import ContactList from './ContactList';
import { LotrCharacterDisplay } from './ImageDisplay';
import { LotrWiki } from './LotrWiki';
<<<<<<< HEAD
import { PokerComponent } from './CardLibrary/PokerComponent';
=======
>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81
import { ShoppingList } from './ShoppingList';


export class App extends React.Component<any, any>{

  render() {
    return (
      <div className="AppRoot">
        <div>
<<<<<<< HEAD
          
          <ShoppingList/>
=======
          <ShoppingList />
        
>>>>>>> 92bd7513b9525f0116fef9b11171b121d5beda81

        </div>
      </div>
    );

  }
}

export default App;

//<LotrCharacterDisplay />
//<LotrWiki />

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