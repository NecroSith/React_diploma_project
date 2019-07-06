const bestLoaded = (bestGoods) => {
    return {
        type: 'BEST_LOADED',
        payload: bestGoods
    }
}

const shopLoaded = (shopItems) => {
    return {
        type: 'SHOP_LOADED',
        payload: shopItems
    }
}

const goodsLoaded = (goods) => {
    return {
        type: 'GOODS_LOADED',
        payload: goods
    }
}

const headerChanged = (pageNumber) => {
    return {
        type: 'HEADER_CHANGED',
        payload: pageNumber
    }
}

const countryChanged = (country, shopItems) => {
    return {
        type: 'FILTER_PRESSED',
        country: country,
        payload: shopItems
    }
}

export {
    bestLoaded,
    shopLoaded,
    goodsLoaded,
    headerChanged,
    countryChanged
}