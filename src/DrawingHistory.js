import React from 'react';
import Drawing from './Drawing'

export default (props) => {
    return (
        <div className="table-container">
            <table className='drawing-history'>
                <thead>
                    <th className="drawing-date-header">Date</th>
                    <th className="drawing-number-header" colspan="5">Numbers</th>
                    <th className="drawing-powerball-header">Powerball</th>
                    <th className="drawing-winnings-header">Winnings</th>
                </thead>
                {props.drawings.map((n) => {
                    console.log(n);
                    return (
                        <Drawing drawing={n}/>
                    );
                })}
            </table>
        </div>
    )
}