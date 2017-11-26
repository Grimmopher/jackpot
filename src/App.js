import React, { Component } from 'react';
import logo from './money_pig.svg';
import DrawingHistory from './DrawingHistory';
import lottoDrawing from './rules/lottoDrawing';
import powerballNumbers from './rules/powerballNumbers';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerNumbers: props.playerNumbers,
      drawings: []
    }
  }

  componentDidMount = () => {
    this.drawings();
  }

  drawings = async() => {
    let drawings = await powerballNumbers(Date.parse('2017-10-18T00:00:00.000'));
    this.setState({drawings: drawings.map( d => new lottoDrawing(d, this.state.playerNumbers))});
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jackpot</h1>
        </header>
        <DrawingHistory drawings={this.state.drawings}/>
      </div>
    );
  }
}

export default App;