import { SET_LOADING, SET_PROJECTS, SET_USER_DATA } from "./types";

import { METHOD_GET } from "../../utils/constants/api";
import endpoints from "../../utils/configs/endpoints";
import { set as apiCall } from "../../utils/request";

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});
export const setUserData = (payload: string[]) => ({
  type: SET_USER_DATA,
  payload,
});

export const setProjects = (payload: string[]) => ({
  type: SET_PROJECTS,
  payload,
});

export const getUserData = () => {
  return (dispatch: any) => {
    dispatch(setLoading(true));
    apiCall(METHOD_GET, endpoints.user, {})
      .then((result) => {
        dispatch(setUserData(result));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };
};
export const getProjects = () => {
  return (dispatch: any) => {
    dispatch(setLoading(true));
    apiCall(METHOD_GET, endpoints.repos, {})
      .then((result) => {
        dispatch(setProjects(result));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };
};
