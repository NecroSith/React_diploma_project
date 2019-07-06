import React from 'react';

const ShopItem = ({shopItem, index}) => {
    return (
        <div className="shop__item">
            <img src={shopItem.url} alt={shopItem.name} />
            <div className="shop__item-title">
                {shopItem.name}
            </div>
            <div className="shop__item-country">{shopItem.country}</div>
            <div className="shop__item-price">{shopItem.price}$</div>
        </div>
    )
}

export default ShopItem;