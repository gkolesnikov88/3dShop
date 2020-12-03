import axios from "axios";
import * as types from "../constants/actionsTypes";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: types.products.PRODUCT_LIST_REQUEST});

    const {data} = await axios.get("/api/products");

    dispatch({
      type: types.products.PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: types.products.PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}

export const listProductDetails = (productId) => async (dispatch) => {
  try {
    dispatch({type: types.details.PRODUCT_DETAILS_REQUEST});

    const {data} = await axios.get(`/api/products/${productId}`);

    dispatch({
      type: types.details.PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: types.details.PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
