import { userTypes } from "../actionType/userActionType";
import { adminActionType } from "./../actionType/adminActionType";


export const deleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: adminActionType.FETCH_USER_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await fetch(`/api/v1/admin/deleteUser/${id}`, options);
    dispatch({
        type: adminActionType.FETCH_USER_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: adminActionType.FETCH_USER_DELETE_FAILURE,
      payload: error,
    });
  }
};

export const updateUserAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: adminActionType.USER_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify(user)
    };

    const res = await fetch(`/api/v1/admin/updateProfile/${user._id}`, options);
    const data = await res.json();
    console.log("DATA", data)
    dispatch({
      type: adminActionType.USER_UPDATE_SUCCESS,
    });
    dispatch({ type: userTypes.FETCH_USERDETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: adminActionType.USER_UPDATE_FAILURE,
      payload: error,
    });
  }
};
