
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 270
};

const updateCartItems = (cartItems, item, idx) => {
    
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [ 
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const deleteCartItem = (cartItems, idx) => {
    return [ 
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
    ];
}

const updateCartItem = (book, item = {}, quantity=1) => {
    
    const { 
        id = book.id, 
        title = book.title, 
        count = 0, 
        total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + book.price*quantity
    }
}

const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state;

    const book = books.find( (book) => book.id === bookId );
    const itemIndex = cartItems.findIndex( (item) => item.id === bookId );
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    if(newItem.count <= 0){
        return{
            ...state,
            cartItems: deleteCartItem(cartItems, itemIndex)}
    }
    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
    }
}


const reducer = (state = initialState, action) => {
    
    console.log(action.type);

    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [], 
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return{
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const toDelId = action.payload;
            const toDelIndex = state.cartItems.findIndex( ({id}) => id === toDelId);

            return{
                ...state,
                cartItems: deleteCartItem(state.cartItems, toDelIndex)
            }
        default:
            return state;  
    } 
};



export default reducer;
