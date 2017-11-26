import React, { Component } from 'react';
import logo from './money_pig.svg';
import DrawingHistory from './DrawingHistory';
import lottoDrawing from './rules/lottoDrawing';
import powerballNumbers from './rules/powerballNumbers';
import queryString from 'query-string';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumbers: [1,2,3,4,5,6],
      rawDrawings: [],
      drawings: []
    }
  }

  componentDidMount = () => {
    this.drawings();
  }

  drawings = async () => {
    let drawings = await powerballNumbers(Date.parse('2017-10-18T00:00:00.000'));
    this.setState({ rawDrawings: drawings });
    this.checkQueryString();
    this.setDrawingHistory();
  }

  checkQueryString = () => {
    let parsed = queryString.parse(window.location.search);
    if (parsed.play && parsed.play.length === 6) {
      this.setState({ playerNumbers: parsed.play.map(n => parseInt(n)) })
    }
  }

  setDrawingHistory = () => {
    this.setState({ drawings: this.state.rawDrawings.map(d => new lottoDrawing(d, this.state.playerNumbers)) });
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jackpot</h1>
        </header>
        <DrawingHistory drawings={this.state.drawings} />
      </div>
    );
  }
}

export default App;