import { createWrapper } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
