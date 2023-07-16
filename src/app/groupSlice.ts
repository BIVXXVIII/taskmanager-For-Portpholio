import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Group } from "./typesGlobal";
import { KeyOfGroupColor, groupColor } from "../assets/groupColor";

export interface GroupState {
    groups: Array<Group>;
}

const initialState: GroupState = {
    groups: [],
};

export const gropsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<Group>) => {
            state.groups.push(action.payload);
        },
        removeGroup: (state, action: PayloadAction<string>) => {
            state.groups = state.groups.filter(
                (group: Group) => group.id !== action.payload
            );
        },
        setGroupColor: (
            state,
            action: PayloadAction<{
                groupId: string;
                color: KeyOfGroupColor;
            }>
        ) => {
            const targetGroup = state.groups.find(
                (group: Group) => group.id === action.payload.groupId
            );
            if (targetGroup !== undefined) {
                targetGroup.color = action.payload.color;
            }
        },
    },
});

export const { addGroup, removeGroup, setGroupColor } = gropsSlice.actions;

export default gropsSlice.reducer;
