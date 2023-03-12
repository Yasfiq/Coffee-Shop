import { ORDER, GET_ORDER } from "../../actions/orderAction";


const initialState = {
    addOrderResult: false,
    addOrderLoading: false,
    addOrderError: false,

    getOrderResult: false,
    getOrderLoading: false,
    getOrderError: false
}


const order = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                getOrderResult: action.payload.data,
                getOrderLoading: action.payload.loading,
                getOrderError: action.payload.errorMessage
            }

        case ORDER:
            return {
                ...state,
                addOrderResult: action.payload.data,
                addOrderLoading: action.payload.loading,
                addOrderError: action.payload.errorMessage
            }

        default:
            return state;
    }
}


export default order