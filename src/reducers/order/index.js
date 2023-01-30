import { ORDER } from "../../actions/orderAction";


const initialState = {
    addOrderResult: false,
    addOrderLoading: false,
    addOrderError: false
}


const order = (state = initialState, action) => {
    switch (action.type) {
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