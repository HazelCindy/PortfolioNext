import {
  SET_LOADING,
  SET_PROJECTS,
  SET_USER_DATA,
  CLEAR_PROJECTS_STORE,
} from "./types";

export const initialState = {
  loading: false,
  projects: [],
  userData: {},
};

export default function notes(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case CLEAR_PROJECTS_STORE:
      return initialState;
    default:
      return state;
  }
}
