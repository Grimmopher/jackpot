import React from 'react';

export default (props) => {
    return (
        <p className="App-intro">
            {props.value.map(n => n.number.toString()).join(' ')}
        </p>
    );
  }