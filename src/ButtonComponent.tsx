import React from 'react';

function upperCase(word: string) {
  let upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperCaseWord;
}

export class ButtonComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  render() {

    let style = { color: "black" }
    let stop = ""
    if (this.state.timesClicked >= 10) {
      style.color = "red"
      stop = "Stop clicking me!"
    }

    return (
      <>
        <h1>Counter</h1>
        <button onClick={() => this.setState({ timesClicked: this.state.timesClicked + 1 })}>Add</button>
        <button onClick={() => this.setState({ timesClicked: this.state.timesClicked - 1 })}>Sub</button>
        <button onClick={() => this.setState({ timesClicked: 0 })}>Reset</button>

        <div style={style}>{"Clicked: " + this.state.timesClicked}</div>
        <div>{stop}</div>
      </>
    )

  }
}
