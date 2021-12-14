import React from 'react';
import { ColorSwitcher } from './ColorSwitcher';
import './App.css'

interface CWGState {
  counter: number
}


export class ColorSwitcherGroup extends React.Component<any, CWGState>{
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 }
  }

  // setState(a: any) => void

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="AppRoot">
        <div>
          <div>Total Clicks: {this.state.counter} </div>
          <ColorSwitcher incrementCounter={() => this.incrementCounter()} bgColor={1} fgColor={2} />
          <ColorSwitcher incrementCounter={() => this.incrementCounter()} bgColor={3} />

        </div>
      </div>
    );

  }
}

export default ColorSwitcherGroup;