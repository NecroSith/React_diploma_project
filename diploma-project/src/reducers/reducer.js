const initialState = {
    bestGoods: [],
    loading: false,
    error: false,
    pageNumber: 1
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEST_LOADED':    
            return {
                ...state,
                bestGoods: action.payload
            };
        default:
            return {
                ...state
            }
    }
}


export default reducer;