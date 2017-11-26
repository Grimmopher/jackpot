import React from 'react';
import strf from 'strftime';

export default (props) => {
    return (
        <div className={'drawing' + (props.drawing.winnings === 'jackpot' ? ' jackpot' : '')}>
            <div className='drawing-data drawing-date'>
                {strf('%D', new Date(props.drawing.drawDate))}
            </div>

            {props.drawing.winningNumbers.map((n) => {
                let classes = 'drawing-data drawing-number';
                classes += n.match ? ' match' : '';
                return (<div className={classes}> {n.number} </div>)
            })}

            <div className={'drawing-data drawing-powerball' + (props.drawing.powerball.match ? ' match' : '')}>
                {props.drawing.powerball.number}
            </div>

            <div className='drawing-data drawing-winnings'>
                {(props.drawing.winnings === 'jackpot' ? '' : '$') + props.drawing.winnings}
            </div>
        </div>
    );
}