import { createSlice, } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addTocart: (state, action)=> {
            const itemPresent = state.cart.find((item)=> item.id === action.payload.id)
            if(itemPresent){
itemPresent.quantity++
            }else{
                state.cart.push({...action.payload, quantity: 1})
            }
        },
removeCart : (state, action)=> {
    const removeitem = state.cart.filter((item)=> item.id !== action.payload.id)
    state.cart = removeitem
},
increament : (state,action)=> {
    const itemPresent = state.cart.find((item)=> item.id === action.payload.id)
    itemPresent.quantity++
},
decreament: (state, action)=> {
    const itemPresent = state.cart.find((item)=> item.id === action.payload.id)
    if(itemPresent.quantity == 1){
        itemPresent.quantity = 0
        const removeitem = state.cart.filter((item)=> item.id !== action.payload.id)
        state.cart = removeitem
    }else{
itemPresent.quantity--
    }
},
clearCart:  (state)=> {
    state.cart = []
}
    }
})


export const {removeCart,decreament, increament, clearCart,addTocart } = CartSlice.actions

export default CartSlice.reducer