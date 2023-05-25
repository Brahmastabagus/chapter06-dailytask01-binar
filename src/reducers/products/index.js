import { GET_PRODUCTS } from "../../actions/productAction";

const initialState = {
  products: []
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data
      }
      break;
  
    default:
      return state
      break;
  }
}

export default products