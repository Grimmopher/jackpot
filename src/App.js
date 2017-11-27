import React, { Component } from 'react';
import logo from './money_pig.svg';
import DrawingHistory from './DrawingHistory';
import NumberInput from './NumberInput';
import lottoDrawing from './rules/lottoDrawing';
import { fetchDrawings, drawingsFromDate } from './rules/powerballNumbers';
import queryString from 'query-string';
import strf from 'strftime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyStartDate: new Date(1990),
      playerNumbers: new Array(6).fill(''),
      rawDrawings: [],
      drawings: [],
      showHistory: false
    }
  }

  componentDidMount = () => {
    // reset page if backbutton is pressed after choosing a number
    window.onpopstate = () => {this.setState({showHistory: false})};
    // download powerball history
    this.drawings();
  }

  drawings = async () => {
    let drawings = await fetchDrawings();
    this.setState({ rawDrawings: drawings });
    this.checkQueryString();
  }

  onPlayerNumberChange = (event, index) => {
    let nums = this.state.playerNumbers.slice();
    nums[index] = event.target.value;
    this.setState({ playerNumbers: nums });
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
      this.setState({ playerNumbers: parsed.play.map(n => parseInt(n, 10)) })
      playSet = true;
    }
    if (parsed.date) {
      this.setState({ historyStartDate: new Date(parseInt(parsed.date, 10)) });
      dateSet = true;
    }
    if (playSet && dateSet) {
      this.setState({ showHistory: true })
      this.setDrawingHistory();
    }
  }

  setUrl = () => {
    let query = '?';
    this.state.playerNumbers.forEach( (n) => {
      query += `play=${n}&`
    })
    query += `date=${this.state.historyStartDate.getTime()}`
    var newurl = window.location.origin + window.location.pathname + query;
    window.history.pushState({path:newurl},'',newurl);
  }

  handleClick = () => {
    if (this.state.playerNumbers.includes('')) return;

    let playerNums = this.state.playerNumbers.slice().map(n => parseInt(n, 10));
    this.setState({
      showHistory: true,
      playerNumbers: playerNums,
      drawings: drawingsFromDate(this.state.rawDrawings, this.state.historyStartDate).map(d => new lottoDrawing(d, playerNums))
    });

    this.setUrl();
  }

  render = () => {
    let display = this.state.showHistory
      ? <DrawingHistory drawings={this.state.drawings} />
      : <NumberInput playerNumbers={this.state.playerNumbers.slice()}
                     onPlayerNumberChange={this.onPlayerNumberChange}
                     onDayChange={(day) => { this.setState({ historyStartDate: day }); }}
                     onClick={this.handleClick} />;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jackpot</h1>
          <div className="current-player-numbers">
                <div className='current-numbers'>
                    {this.state.playerNumbers.map((n,i)=>(i<5)
                    ? (
                        <span>
                          {n}&ensp;
                        </span>
                      )
                    : (
                          <span className="pb">{n}</span>
                      )
                    )}
                </div>
            </div>
        </header>
        {display}
        <footer>
          &copy; Grimm {strf("%Y",new Date())}
        </footer>
      </div>
    );
  }
}

export default App;