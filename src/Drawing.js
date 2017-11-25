import React from 'react';
import strf from 'strftime';

export default (props) => {
    return (
        <tr className={'drawing' + (props.drawing.winnings === 'jackpot' ? ' jackpot' : '')}>
            <td className='drawing-date'>
                {strf('%D', new Date(props.drawing.drawDate))}
            </td>

            {props.drawing.winningNumbers.map((n) => {
                let classes = 'drawing-number';
                classes += n.match ? ' match' : '';
                return (<td className={classes}> {n.number} </td>)
            })}

            <td className={'drawing-powerball' + (props.drawing.powerball.match ? ' match' : '')}>
                {props.drawing.powerball.number}
            </td>

            <td className='drawing-winnings'>
                {(props.drawing.winnings === 'jackpot' ? '' : '$') + props.drawing.winnings}
            </td>
        </tr>
    );
}