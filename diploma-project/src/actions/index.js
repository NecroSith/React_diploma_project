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

const itemSelected = (item, id) => {
    return {
        type: 'ITEM_SELECTED',
        id: id,
        payload: item
    }
}

const expandDescription = (item) => {
    return {
        type: 'EXPAND_DESCRIPTION',
        payload: item
    }
}

export {
    bestLoaded,
    shopLoaded,
    goodsLoaded,
    headerChanged,
    countryChanged,
    itemSelected,
    expandDescription
}