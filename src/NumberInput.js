import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default (props) => {
    return (
        <div>
            <DayPickerInput onDayChange={day => props.onDayChange(day)} />
        </div>
    )
}