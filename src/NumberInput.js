import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class NumberInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numbers: new Array(6).fill(0)
        };
    }

    render = () => {
        return (
            <div>
                <div>
                    {this.state.numbers.map((n, i) => {
                        return <input type="text" value={n} onChange={(event) => {
                            let nums = this.state.numbers.slice();
                            nums[i] = event.target.value;
                            this.setState({ numbers: nums });
                        }} />
                    })}
                </div>
                <DayPickerInput onDayChange={day => this.props.onDayChange(day)} />
                <div>
                    <button onClick={() => { this.props.onClick(this.state.numbers) }} />
                </div>
            </div>
        )
    }

}