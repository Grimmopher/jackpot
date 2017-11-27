import React from 'react';
import Drawing from './Drawing'

export default (props) => {
    return (
            <div className='drawing-history'>
                <div className='table-headings'>
                    <div className="table-header drawing-date-header">Date</div>
                <div className="table-header drawing-number-header">Numbers</div>
                <div className="table-header drawing-powerball-header">PB</div>
                <div className="table-header drawing-winnings-header">$</div>
                </div>
                {props.drawings.map((n) => {
                    return (
                        <Drawing drawing={n} />
                    );
                })}
            </div>
    )
}