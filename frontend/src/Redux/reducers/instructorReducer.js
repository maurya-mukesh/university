import { instructorActType } from "../actionType/instructorActType";
import mcqType from "../actionType/mcqType";

export const postMcqReducer = (state = {}, action) => {
  switch (action.type) {
    case mcqType.POST_MCQ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case mcqType.POST_MCQ_SUCCESS:
      return {
        ...state,
        loading: false,
        postMCQ: action.payload,
      };
    case mcqType.POST_MCQ_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMcqReducer = (state={}, action)=>{
  switch(action.type){
    case mcqType.GET_MCQ_REQUEST:
      return {
        ...state,
        loading:true,
      }
    case mcqType.GET_MCQ_SUCCESS:
      return {
        ...state,
        loading:false,
        getMCQ:action.payload
      }
    case mcqType.GET_MCQ_FAIL:
      return {
        ...state,
        loading:false,
        error: action.payload
      }
    default:
      return state
  }
} 

const createSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case instructorActType.CREATE_SESSION_REQUEST:
      return {
        loading: true,
      };
    case instructorActType.CREATE_SESSION_SUCCESS:
      return {
        loading: false,
        createSessionLink: action.payload,
      };
    case instructorActType.CREATE_SESSION_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createSessionReducer;
