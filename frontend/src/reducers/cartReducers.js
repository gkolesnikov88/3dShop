import * as types from "../constants/actionsTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case types.cart.CART_ADD_ITEM :
      const item = action.payload;

      const existItem = state.cartItems.find(x => x.productId === item.productId);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.productId === item.productId ?
            item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case types.cart.CART_REMOVE_ITEM :
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload)
      }
    default:
      return state;
  }
}
