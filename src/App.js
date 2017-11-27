import React, { Component } from 'react';
import logo from './money_pig.svg';
import DrawingHistory from './DrawingHistory';
import NumberInput from './NumberInput';
import lottoDrawing from './rules/lottoDrawing';
import { fetchDrawings, drawingsFromDate } from './rules/powerballNumbers';
import queryString from 'query-string';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyStartDate: new Date(),
      playerNumbers: [],
      rawDrawings: [],
      drawings: [],
      showHistory: false
    }
  }

  componentDidMount = () => {
    this.drawings();
  }

  drawings = async () => {
    let drawings = await fetchDrawings();
    this.setState({ rawDrawings: drawings });
    this.checkQueryString();
  }

  setDrawingHistory = () => {
    let draws = drawingsFromDate(this.state.rawDrawings, this.state.historyStartDate);
    this.setState({ drawings: draws.map(d => new lottoDrawing(d, this.state.playerNumbers)) });
  }

  checkQueryString = () => {
    let parsed = queryString.parse(window.location.search);
    let playSet = false;
    let dateSet = false;
    if (parsed.play && parsed.play.length === 6) {
      this.setState({ playerNumbers: parsed.play.map(n => parseInt(n)) })
      playSet = true;
    }
    if (parsed.date) {
      this.setState({ historyStartDate: new Date(parseInt(parsed.date)) });
      dateSet = true;
    }
    if (playSet && dateSet) {
      this.setState({showHistory: true})
      this.setDrawingHistory();
    }
  }

  setPlayerNumbers = (nums) => {
    let newNums = this.state.playerNumbers.slice();
    let hasNewNums = false;
    let newShowHistory = this.state.showHistory;
    let newDraws = this.state.drawings;

    if (!nums.includes(0)) {
      newNums = nums.slice().map(n => parseInt(n));
      hasNewNums = true;
    }

    if (this.state.historyStartDate != new Date() && hasNewNums) {
      newShowHistory = true;
      newDraws = drawingsFromDate(this.state.rawDrawings, this.state.historyStartDate).map(d => new lottoDrawing(d, newNums));
    }
    this.setState({ 
      showHistory: newShowHistory,
      playerNumbers: newNums,
      drawings: newDraws });
  }

  render = () => {
    console.log(this.state);

    let display = this.state.showHistory
      ? <DrawingHistory drawings={this.state.drawings} />
      : <NumberInput onDayChange={(day) => { this.setState({ historyStartDate: day }); }} onClick={(nums) => { this.setPlayerNumbers(nums) }} />;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jackpot</h1>
        </header>
        {display}
      </div>
    );
  }
}

export default App;