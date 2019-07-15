const initialState ={
    bestGoods: [],
    shopItems: [],
    filterResults: [],
    goods: [],
    selectedItem: [],
    itemId: 0,
    description: '',
    countryChosen: null,
    loading: true,
    error: false,
    pageNumber: 0,
    formSent: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_LOADED':    
            return {
                ...state,
                loading: false,
                bestGoods: action.payload
            };
        case 'BEST_ERROR':   
        case 'SHOP_ERROR':    
        case 'GOODS_ERROR':    
        case 'FORM_ERROR': 
            return {
                ...state,
                error: true
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
        case 'FORM_LOADED':    
            return {
                ...state,
                loading: false,
                formSent: false
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
        case 'ITEM_SELECTED':  
            let descShort = '';
            if (action.payload.description.length > 199) {
                descShort = action.payload.description.slice(0, 199).trim() + '...';
            }
            else {
                descShort = action.payload.description;
            }
            const newSelected = {
                country: action.payload.country,
                description: descShort,
                url: action.payload.url,
                price: action.payload.price
            }
            return {
                ...state,
                description: action.payload.description,
                selectedItem: newSelected,
                itemId: action.id
            };
        case 'EXPAND_DESCRIPTION': 
            const itemExpanded = {
                country: action.payload.country,
                description: state.description,
                url: action.payload.url,
                price: action.payload.price
            }
            return {
                ...state,
                selectedItem: itemExpanded
            };
        case 'FORM_SENT': 
            return {
                ...state,
                loading: false,
                formSent: true
                
            };
        case 'FIND_ITEMS': 
            const searchValue = action.search;
            console.log(state.shopItems);
            const items = action.payload.filter(item => item.name.toLowerCase().includes(searchValue));
            return {
                ...state,
                filterResults: items
            };
        default:
            return {
                ...state
            }
    }
}


export default reducer;