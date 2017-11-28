import React from 'react';
import strf from 'strftime';

export default (props) => {
    return (
        <div className={'drawing' + (props.drawing.winnings === 'jackpot' ? ' jackpot' : '')}>
            <div className='drawing-data drawing-date'>
                <div className="color-box">
                    {strf('%D', new Date(props.drawing.drawDate))}
                </div>
            </div>

            {props.drawing.winningNumbers.map((n,i) => {
                let classes = 'drawing-data drawing-number';
                classes += n.match ? ' match' : '';
                return (
                    <div key={i} className={classes}>
                        <div className="color-box">
                            {n.number} 
                        </div>
                    </div>
                    )
            })}

            <div className={'drawing-data drawing-powerball' + (props.drawing.powerball.match ? ' match' : '')}>
                <div className="color-box">
                    {props.drawing.powerball.number}
                </div>
            </div>

            <div className={'drawing-data drawing-winnings' + (props.drawing.winnings>0?' won':'')}>
                <div className="color-box">
                    {(props.drawing.winnings === 'jackpot' ? '' : '$') + props.drawing.winnings}
                </div>
            </div>
        </div>
    );
}