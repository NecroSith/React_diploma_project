const initialState = {
    bestGoods: [],
    shopItems: [],
    goods: [],
    loading: true,
    error: false,
    pageNumber: 1
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_LOADED':    
            return {
                ...state,
                loading: false,
                bestGoods: action.payload
            };
        case 'SHOP_LOADED':    
            return {
                ...state,
                loading: false,
                shopItems: action.payload
            };
        case 'GOODS_LOADED':    
            return {
                ...state,
                loading: false,
                goods: action.payload
            };
        default:
            return {
                ...state
            }
    }
}


export default reducer;