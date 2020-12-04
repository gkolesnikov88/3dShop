import axios from "axios";
import * as types from "../constants/actionsTypes";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: types.cart.CART_ADD_ITEM,
    payload: {
      productId: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity
    }
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: types.cart.CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}
