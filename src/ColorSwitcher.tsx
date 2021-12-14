import React from 'react';

function numToString(input: number): string {
  if (input % 4 === 0) {
    return "red"
  }
  if (input % 4 === 1) {
    return "orange"
  }
  if (input % 4 === 2) {
    return "yellow"
  }
  if (input % 4 === 3) {
    return "green"
  }
  return ""
}

interface ColorSwitcherState {
  bgCounter: number,
  tCounter: number
}

export class ColorSwitcher extends React.Component<any, ColorSwitcherState>{
  constructor(props: any) {
    super(props);
    this.state = {
      bgCounter: 0,
      tCounter: 1
    }
  }
  render() {
    let style = { backgroundColor: numToString(this.state.bgCounter), color: numToString(this.state.tCounter) }
    console.log(this.state)

    return (
      <div style={style}>
        <h1>Color Switcher</h1>
        <div style={{ border: "1px solid black", backgroundColor: "grey", width: "100px" }} onClick={() => this.setState({ bgCounter: this.state.bgCounter + 1 })}>Switch Background Color</div>
        <button onClick={() => this.setState({ tCounter: this.state.tCounter + 1 })}>Switch Text Color</button>
      </div>
    )
  }
}
