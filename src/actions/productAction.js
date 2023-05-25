import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS"

export const getProducts = () => {
  return (dispatch) => {
    axios.get("http:/localhost:8080/api/v1/products")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          data: res.data.data
        }
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          data: []
        }
      })
    })
  }
}