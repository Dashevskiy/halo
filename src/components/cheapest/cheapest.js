import React from 'react';
import './cheapest.css';

const Cheapest = ({onClickCheapest}) => {

    return (
        <button className='cheapest-btn' type='button' onClick={() => onClickCheapest()}>Buy cheapest</button>
    )
}

export default Cheapest;