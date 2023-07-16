import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import viewReducer from "./viewSlice";
import groupReducer from "./groupSlice";
export const store = configureStore({
    reducer: {
        task: taskReducer,
        view: viewReducer,
        group: groupReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
