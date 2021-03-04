import React from 'react';
import './card.css';

const Card = ({card, onClickBuy}) => {
    return (
        <div className='card'>
            <span className='card__category'>{card.category}</span>
            <span className='card__name'>{card.name}</span>
            <span className='card__price'>
                <div className='card-price__block'>
                    <span className='card__currency'>$</span>
                    <span className='card__amount'>{card.price}</span>
                </div>
              <span>
                  <button type='button' className='card__btn' onClick={() => onClickBuy(card)}>buy</button>
              </span>
          </span>
        </div>
    )
}

export default Card;