import { GET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT } from "../../actions/productAction";

const initialState = {
    result : false,
    loading: false,
    error : false,

    deleteResult : false,
    deleteLoading: false,
    deleteError : false,

    addResult : false,
    addLoading: false,
    addError: false,

    editResult : false,
    editLoading : false,
    editError: false
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                result: action.payload.data,
                laoding: action.payload.loading,
                error: action.payload.errorMessage
            };
            
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteResult: action.payload.data,
                deleteLoading: action.payload.loading,
                deleteError: action.payload.errorMessage
            };

        case ADD_PRODUCT:
            return {
                ...state,
                addResult: action.payload.data,
                addLoading: action.payload.loading,
                addError: action.payload.errorMessage
            };

        case EDIT_PRODUCT:
            return {
                ...state,
                editResult: action.payload.data,
                editLoading: action.payload.loading,
                editError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default product