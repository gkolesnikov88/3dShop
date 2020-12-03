import * as types from "../constants/actionsTypes";

export const productListReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case types.products.PRODUCT_LIST_REQUEST :
      return { loading: true, products: []}
    case types.products.PRODUCT_LIST_SUCCESS :
      return { loading: false, products: action.payload}
    case types.products.PRODUCT_LIST_FAIL :
      return { loading: false, error: action.payload}
    default:
        return state;
  }
}

export const productDetailsReducer = (state = {product: { reviews: [] }}, action) => {
  switch (action.type) {
    case types.details.PRODUCT_DETAILS_REQUEST :
      return { loading: true, ...state }
    case types.details.PRODUCT_DETAILS_SUCCESS :
      return { loading: false, product: action.payload}
    case types.details.PRODUCT_DETAILS_FAIL :
      return { loading: false, error: action.payload}
    default:
      return state;
  }
}