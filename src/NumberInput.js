import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default (props) => {
    return (
        <div className="number-input-container">
            <div className="instructions">
                Type in your Powerball lottery numbers below. <br/><span className="pb-instr">(Powerball number = orange)</span>
            </div>
            <div className="player-nums">
                {props.playerNumbers.map((n, i) => (i<5)
                     ?  (
                            <input className="num" type="text" value={n} onChange={(event) => { props.onPlayerNumberChange(event, i) }} />
                        )
                     :  (
                               <input className="num pb" type="text" value={n} onChange={(event) => { props.onPlayerNumberChange(event, i) }} />
                        )  
                )}
            </div>
                <div className="instructions">
                    Pick the date that you would like to see drawings from.
                </div>
            <DayPickerInput onDayChange={props.onDayChange} />
            <div>
                <button className="btn" onClick={props.onClick}>Submit</button>
            </div>
        </div>
    )
}