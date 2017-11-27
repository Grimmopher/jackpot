import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default (props) => {
    return (
        <div className="number-input-container">
            <div className="instructions">
                Enter your Powerball numbers.
            </div>
            <div className="player-nums">
                {props.playerNumbers.map((n, i) => (i<5)
                     ?  (
                            <input key={i} className="num" type="text" value={n} onChange={(event) => { props.onPlayerNumberChange(event, i) }} />
                        )
                     :  (
                            <input key={i} className="num pb" type="text" value={n} onChange={(event) => { props.onPlayerNumberChange(event, i) }} />
                        )  
                )}
            </div>
                <div className="instructions">
                    Show drawings after this date.
                </div>
            <DayPickerInput onDayChange={props.onDayChange} />
            <div>
                <button className="btn" onClick={props.onClick}>Submit</button>
            </div>
        </div>
    )
}