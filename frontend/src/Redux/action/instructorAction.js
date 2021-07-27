import { instructorActType } from "../actionType/instructorActType";
import mcqType from "../actionType/mcqType";

export const createSessionAction =
  (sessionLink) => async (dispatch, getState) => {
    try {
      dispatch({
        type: instructorActType.CREATE_SESSION_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ sessionLink }),
      };

      const result = await fetch("/api/v1/instructor/createSession", options);
      const data = await result.json();
      dispatch({
        type: instructorActType.CREATE_SESSION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: instructorActType.CREATE_SESSION_FAILURE,
        payload: error,
      });
    }
  };

//  post MCQ
export const postMcqAction =
  ({ ...inputMCQ }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: mcqType.POST_MCQ_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ ...inputMCQ }),
      };

      const result = await fetch("/api/v1/instructor/createMcq", options);
      const data = await result.json();
      dispatch({
        type: mcqType.POST_MCQ_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: mcqType.POST_MCQ_FAIL,
        payload: error,
      });
    }
  };



  export const getMcqAction = () => async (dispatch, getState) => {
    try{
      dispatch({
        type:mcqType.GET_MCQ_REQUEST
      })
      const {
        userLogin: { userInfo },
      } = getState();

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      
      const mcq = await fetch("/api/v1/users/getMcq", options)
      const mcqData = await mcq.json()
      console.log("mcqData", mcqData)
      dispatch({
        type:mcqType.GET_MCQ_SUCCESS,
        payload:mcqData
      })
      localStorage.setItem("MCQ", JSON.stringify(mcqData));
    }catch(error){
      dispatch({
        type:mcqType.GET_MCQ_FAIL,
        payload:error
      })
    }
  }