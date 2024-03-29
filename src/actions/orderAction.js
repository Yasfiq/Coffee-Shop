import axios from "axios";
// const { API_URL } = process.env

export const GET_ORDER = "GET_ORDER";
export const ORDER = "ORDER";

export const getOrder = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ORDER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get order
    axios
      .get(`https://hilarious-ox-shawl.cyclic.app/api/v1/orders/${id}`)
      .then((res) => {
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({
          type: GET_ORDER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};

export const addOrder = (data, id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ORDER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // post
    axios
      .post(`https://hilarious-ox-shawl.cyclic.app/api/v1/orders/${id}`, data)
      .then((res) => {
        dispatch({
          type: ORDER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({
          type: ORDER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};
