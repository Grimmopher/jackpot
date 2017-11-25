import React from 'react';
import Drawing from './Drawing'

export default (props) => {
    return (
        <ul>
            {props.drawings.map((n) => {
                console.log(n);
                return (
                    <li>
                    <Drawing value={n.winningNumbers}/>
                    </li> 
                );
            })}
        </ul>
    )
}