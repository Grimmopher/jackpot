import React, { Component } from 'react';
import logo from './money_pig.svg';
import DrawingHistory from './DrawingHistory';
import lottoDrawing from './rules/lottoDrawing';

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
    let powerballDrawings = await fetch('https://data.ny.gov/resource/8vkr-v8vh.json');
    let json = await powerballDrawings.json();
    let drawings = json.slice();
    for (let i = 0; i < json.length; i++){
        if (json[i].draw_date === '2017-10-18T00:00:00.000'){
            drawings = json.slice(0, i);
            break;
        }
    }
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