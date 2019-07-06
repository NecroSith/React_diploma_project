import React from 'react';

const BestSellerItem = ({bestItem}) => {
    return (
        <div className="best__item">
            <img src={bestItem.url} alt={bestItem.name} />
            <div className="best__item-title">
                {bestItem.name}
            </div>
            <div className="best__item-price">{bestItem.price}$</div>
        </div>
    )
}

export default BestSellerItem;