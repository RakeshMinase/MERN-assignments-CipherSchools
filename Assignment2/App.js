import React, { Component } from 'react';
import { VscDebugRestart } from "react-icons/vsc";
import './counter.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  reload = () => {
    this.setState({ clicks: 0});
  }
  

  render() {
    return (
      <div className="Box">
        <div className="grid-container">
          <h2 id="item1">{ this.state.clicks }</h2>
          <button id="item3" onClick={this.DecreaseItem}>-</button>
          <button id="item4" onClick={this.reload}>< VscDebugRestart /></button>
          <button id="item2" onClick={this.IncrementItem}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
