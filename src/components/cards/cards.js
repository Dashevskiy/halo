import React from 'react';
import Card from "../card/card";

import './cards.css';

const Cards = ({cards, onClickBuy}) => {

    return (
        <div className='cards'>
            {cards.map((card) => <Card key={card.name} card={card} onClickBuy={onClickBuy}/>)}
        </div>)
}
export default Cards;