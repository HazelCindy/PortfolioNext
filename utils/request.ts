import { Method } from "axios";
import axiosInstance from "./axios";

export const get = (url: string, headers = {}) => {
  return axiosInstance
    .get(url, { headers })
    .then((data) => data)
    .catch(({ message }) => {
      throw message;
    });
};

export const authGet = (url: string, headers = {}) => {
  return get(url, {
    ...headers,
  });
};

export const set = (method: Method, url: string, body: any, headers = {}) => {
  return axiosInstance({
    url,
    data: body,
    method,
    headers,
  })
    .then(({ data }) => data)
    .catch((error) => {
      throw error;
    });
};
