import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SortType = "all" | "completed" | "inprogress";

export interface ViewState {
    dashboardView: "grid" | "list";
    search: string;
    sorted: SortType;
    selectMode: boolean;
}

const initialState: ViewState = {
    dashboardView: "grid",
    search: "",
    sorted: "all",
    selectMode: false,
};

export const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        search: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        changeViewMode: (state, action: PayloadAction<"grid" | "list">) => {
            state.dashboardView = action.payload;
        },
        changeSortMode: (state, action: PayloadAction<SortType>) => {
            state.sorted = action.payload;
        },
        toggleSelectMode: (state) => {
            state.selectMode = !state.selectMode;
        },
    },
});

export const { search, changeViewMode, changeSortMode, toggleSelectMode } =
    viewSlice.actions;

export default viewSlice.reducer;
