import React from 'react';
import Drawing from './Drawing'
import './DrawingHistory.css';

export default (props) => {
    return (
        <table className='drawing-history'>
            {props.drawings.map((n) => {
                console.log(n);
                return (
                    <Drawing drawing={n}/>
                );
            })}
        </table>
    )
}