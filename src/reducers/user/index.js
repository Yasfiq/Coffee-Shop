import { GET_USERBYID } from "../../actions/userAction";

const initialState = {
  getUserResult: false,
  getUserLoading: false,
  getUserError: false,

  editStatus: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERBYID:
      return {
        getUserResult: action.payload.data,
        getUserLoading: action.payload.loading,
        getUserError: action.payload.errorMessage,
      };
    case "EDIT_STATE":
      return {
        ...state,
        editStatus: action.status,
        name: action.name,
        email: action.email,
      };

    default:
      return state;
  }
};

export default user;
