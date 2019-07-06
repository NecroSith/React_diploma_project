const initialState = {
    bestGoods: [],
    shopItems: [],
    filterResults: [],
    goods: [],
    itemId: 0,
    countryChosen: null,
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
        case 'HEADER_CHANGED':    
            return {
                ...state,
                pageNumber: action.payload
            };
        case 'FILTER_PRESSED':  
            const newItems = action.payload;
            return {
                ...state,
                filterResults: newItems.filter(newItem => {
                    return newItem.country === action.country;
                }),
                pageNumber: action.payload
            };
        default:
            return {
                ...state
            }
    }
}


export default reducer;