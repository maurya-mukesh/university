import { adminActionType, USER_RESET_SUCCESS } from "./../actionType/adminActionType";

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case adminActionType.FETCH_USER_DELETE_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case adminActionType.FETCH_USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      };
      case adminActionType.FETCH_USER_DELETE_FAILURE:
          return {
            loading: false,
            payload: action.payload,
          }
          default:
              return state
  }
};

export const updateUserReducer = (state = {user : {}}, action) => {
  switch (action.type) {
    case adminActionType.USER_UPDATE_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case adminActionType.USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
      case USER_RESET_SUCCESS:
        return {
          user: {}
        }
    case adminActionType.USER_UPDATE_FAILURE:
      return {
        loading: false,
        payload: action.payload,
      };
    default:
      return state;
  }
};
