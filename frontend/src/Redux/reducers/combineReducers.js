import { combineReducers } from "redux";
import { deleteUserReducer, updateUserReducer } from "./adminReducer";
import userReducer, {
  postAdminAnnouncement,
  postVideoLibrary,
  userDetailsReducer,
  userLoginReducer,
} from "./userReducer";
import createSessionReducer, { postMcqReducer, getMcqReducer } from "./instructorReducer";

const CombineReducers = combineReducers({
  userRegisterList: userReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
  postAnnouncement: postAdminAnnouncement,
  videoLibrary: postVideoLibrary,
  createSession: createSessionReducer,
  postMcqData: postMcqReducer,
  getMcqData: getMcqReducer,
});

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const postAnnouncementFromStorage = localStorage.getItem("announcements")
  ? JSON.parse(localStorage.getItem("announcements"))
  : [];

export const initialState = {
  userLogin: { userInfo: userLoginFromStorage },
  postAnnouncement: { announcements: postAnnouncementFromStorage },
  videoLibrary: { videoData: [] },
  createSession: { createSessionLink: [] },
  usesDetails: { user: {} },
  postMcqData: { postMCQ: {} },
};

export default CombineReducers;
