import React from 'react';

const ShopItem = ({goods}) => {
    return (
        <div className="shop__item">
            <img src={goods.url} alt={goods.name} />
            <div className="shop__item-title">
                {goods.name}
            </div>
            <div className="shop__item-price">{goods.price}$</div>
        </div>
    )
}

export default ShopItem;