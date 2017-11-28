import React from 'react';
import Drawing from './Drawing'

export default (props) => {
    return (
        <div className='drawing-history'>
            {props.drawings.map((n,i) => {
                return (
                    <Drawing key={i} drawing={n} />
                );
            })}
        </div>
    )
}