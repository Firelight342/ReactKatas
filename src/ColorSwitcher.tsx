import React from 'react';

function numToString(input: number): string {
  if (input % 4 === 0) {
    return "red"
  }
  if (input % 4 === 1) {
    return "purple"
  }
  if (input % 4 === 2) {
    return "cyan"
  }
  if (input % 4 === 3) {
    return "green"
  }
  return ""
}

interface CSState {
  bgCounter: number,
  tCounter: number
}

interface CSProps {
  bgColor: number,
  fgColor?: number
  incrementCounter: () => void;
}

export class ColorSwitcher extends React.Component<CSProps, CSState>{
  constructor(props: CSProps) {
    super(props);
    this.state = {
      bgCounter: props.bgColor,
      tCounter: props.fgColor || 1
    }
  }
  render() {
    let style = { backgroundColor: numToString(this.state.bgCounter), color: numToString(this.state.tCounter) }
    console.log(this.state)

    return (
      <div style={style}>
        <h1>Color Switcher</h1>
        <div style={{ border: "1px solid black", backgroundColor: "grey", width: "100px" }} 
             onClick={() => {
                this.props.incrementCounter();
                this.setState({ bgCounter: this.state.bgCounter + 1 })
            }}
        >Switch Background Color</div>
        <button onClick={() => {
            this.props.incrementCounter();
            this.setState({ tCounter: this.state.tCounter + 1 })
        }}>Switch Text Color</button>
      </div>
    )
  }
}
