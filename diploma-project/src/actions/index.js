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

export {
    bestLoaded,
    shopLoaded,
    goodsLoaded,
    headerChanged
}