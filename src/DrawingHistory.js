import React from 'react';
import Drawing from './Drawing'

export default (props) => {
    return (
        <div className='drawing-history'>
            {props.drawings.map((n) => {
                return (
                    <Drawing drawing={n} />
                );
            })}


        <footer>
        <div className="footer">
        An app to check your powerball numbers.
        </div>
        </footer>
        </div>
    )
}