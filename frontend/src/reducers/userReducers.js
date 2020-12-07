import * as types from "../constants/actionsTypes";

export const userLoginReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case types.user.USER_LOGIN_REQUEST :
      return { loading: true,}
    case types.user.USER_LOGIN_SUCCESS :
      return { loading: false, userInfo: action.payload, error: null}
    case types.user.USER_LOGIN_FAIL :
      return { loading: false, error: action.payload}
    case types.user.USER_LOGOUT :
      return {}
    default:
      return state;
  }
}

export const userRegisterReducer = (state = {products: []}, action) => {
  switch (action.type) {
    case types.userRegister.USER_REGISTER_REQUEST :
      return { loading: true,}
    case types.userRegister.USER_REGISTER_SUCCESS :
      return { loading: false, userInfo: action.payload, error: null}
    case types.userRegister.USER_REGISTER_FAIL :
      return { loading: false, error: action.payload}
    default:
      return state;
  }
}

export const userDetailsReducer = (state = { user: {}}, action) => {
  switch (action.type) {
    case types.userDetails.USER_DETAILS_REQUEST :
      return { ...state, loading: true,}
    case types.userDetails.USER_DETAILS_SUCCESS :
      return { loading: false, user: action.payload, error: null}
    case types.userDetails.USER_DETAILS_FAIL :
      return { loading: false, error: action.payload}
    default:
      return state;
  }
}

export const userUpdateProfileReducer = (state = { }, action) => {
  switch (action.type) {
    case types.userUpdate.USER_UPDATE_PROFILE_REQUEST :
      return { loading: true,}
    case types.userUpdate.USER_UPDATE_PROFILE_SUCCESS :
      return { loading: false, userInfo: action.payload, success: true}
    case types.userUpdate.USER_UPDATE_PROFILE_FAIL :
      return { loading: false, error: action.payload}
    default:
      return state;
  }
}
