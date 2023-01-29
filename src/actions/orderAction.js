import axios from "axios";

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
        axios.post(``)
    }
}