const bestLoaded = (bestGoods) => {
    return {
        type: 'BEST_LOADED',
        payload: bestGoods
    }
}

const bestError = () => {
    return {
        type: 'BEST_ERROR',
    }
}

const shopLoaded = (shopItems) => {
    return {
        type: 'SHOP_LOADED',
        payload: shopItems
    }
}

const shopError = () => {
    return {
        type: 'SHOP_ERROR',
    }
}

const goodsLoaded = (goods) => {
    return {
        type: 'GOODS_LOADED',
        payload: goods
    }
}

const goodsError = () => {
    return {
        type: 'GOODS_ERROR',
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

const formLoaded = () => {
    return {
        type: 'FORM_LOADED',
    }
}

const formSent = () => {
    return {
        type: 'FORM_SENT',
    }
}


const formError = () => {
    return {
        type: 'FORM_ERROR',
    }
}

export {
    bestLoaded,
    bestError,
    shopLoaded,
    shopError,
    goodsLoaded,
    goodsError,
    headerChanged,
    countryChanged,
    itemSelected,
    expandDescription,
    formSent,
    formLoaded,
    formError
}