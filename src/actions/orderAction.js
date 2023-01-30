import axios from "axios";
// const { API_URL } = process.env

export const ORDER = "ORDER";


export const addOrder = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ORDER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });


        // post
        axios.post(`http://localhost:3000/api/v1/orders`, data).then(res => {
            dispatch({
                type: ORDER,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        }).catch(error => {
            console.log(error.response.data);
            dispatch({
            type: ORDER,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.response.data.Message,
            },
        });
        })
    }
}