import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const getProduct = (category, order, search, limit) => {
  //   console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get product
    let categoryUse = "";
    if (category) {
      categoryUse += category;
    }
    axios
      .get(
        `https://hilarious-ox-shawl.cyclic.app/api/v1/products${`?${
          `category=${categoryUse}` || ""
        }${`&sort=price&order=${order}`}${`&search=${search}`}${`&limit=${limit}`}`}`
      )
      .then((res) => {
        // console.log(`3. Berhasil, Data:`, res.data);
        // success get
        dispatch({
          type: GET_PRODUCT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get
        console.log(error.response.data.Message);
        dispatch({
          type: GET_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};

export const addProduct = (data) => {
  // console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get product
    axios
      .post(`https://hilarious-ox-shawl.cyclic.app/api/v1/products`, data)
      .then((res) => {
        // console.log(`3. Berhasil, Data:`, res.data);
        // success get
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: res.data.Message,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get
        console.log(error.response.data.Message);
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};

export const editProduct = (id, data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get product
    axios
      .patch(
        `https://hilarious-ox-shawl.cyclic.app/api/v1/products/${id}`,
        data
      )
      .then((res) => {
        console.log(`3. Berhasil, Data:`, res.data);
        // success get
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: res.data.Message,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get
        console.log(error.response.data.Message);
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};

export const deleteProduct = (id) => {
  //   console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // delete product
    axios
      .delete(`https://hilarious-ox-shawl.cyclic.app/api/v1/products/${id}`)
      .then((res) => {
        // console.log(`3. Berhasil, Data:`, res.data);
        // success get
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get
        console.log(error.response.data.Message);
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Message,
          },
        });
      });
  };
};
