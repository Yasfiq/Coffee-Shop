import axios from "axios";

export const GET_USERBYID = "GET_USERBYID";

export const getUserById = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_USERBYID,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${id}`)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: GET_USERBYID,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_USERBYID,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};
