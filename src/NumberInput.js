import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default (props) => {
    return (
        <div>
            <div>
                {props.playerNumbers.map((n, i) => {
                    return <input type="text" value={n} onChange={(event) => { props.onPlayerNumberChange(event, i) }} />
                })}
            </div>
            <DayPickerInput onDayChange={props.onDayChange} />
            <div>
                <button onClick={props.onClick} />
            </div>
        </div>
    )
}