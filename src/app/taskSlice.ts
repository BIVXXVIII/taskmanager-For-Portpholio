import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Group, TaskInitialState, TaskInterface } from "./typesGlobal";

const initialState: TaskInitialState = {
    tasks: [],
    selectedTasks: [],
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskInterface>) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(
                (task: TaskInterface) => task.id !== action.payload
            );
            state.selectedTasks = state.selectedTasks.filter(
                (task: TaskInterface) => task.id !== action.payload
            );
        },
        editTask: (state, action: PayloadAction<TaskInterface>) => {
            const editedTask = state.tasks.find(
                (task: TaskInterface) => task.id === action.payload.id
            );
            if (editedTask) {
                editedTask.name = action.payload.name;
                editedTask.description = action.payload.description;
            }
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const toggledTask = state.tasks.find(
                (task: TaskInterface) => task.id === action.payload
            );
            if (toggledTask) toggledTask.status = !toggledTask.status;
        },
        addToSelected: (state, action: PayloadAction<string>) => {
            const addedTask = state.tasks.find(
                (task: TaskInterface) => task.id === action.payload
            );
            if (addedTask === undefined) return;
            state.selectedTasks.push(addedTask);
        },
        removeFromSelected: (state, action: PayloadAction<string>) => {
            state.selectedTasks = state.selectedTasks.filter(
                (task: TaskInterface) => task.id !== action.payload
            );
        },
        deleteSelectedTask: (state) => {
            let newTaskArray = [...state.tasks];
            state.selectedTasks.forEach((selectedTask: TaskInterface) => {
                newTaskArray = newTaskArray.filter(
                    (task: TaskInterface) => task.id !== selectedTask.id
                );
            });
            state.tasks = [...newTaskArray];
            state.selectedTasks = [];
        },
        toggleSelectedTask: (state) => {
            state.selectedTasks.forEach((selectedTask: TaskInterface) => {
                const toggledTask = state.tasks.find(
                    (task: TaskInterface) => task.id === selectedTask.id
                );
                if (toggledTask) {
                    toggledTask.status = !toggledTask.status;
                }
            });
            state.selectedTasks = [];
        },
        clearSelected: (state) => {
            state.selectedTasks = [];
        },
        addGroupToTask: (
            state,
            action: PayloadAction<{ group: Group; taskId: string }>
        ) => {
            const targetTask = state.tasks.find(
                (task: TaskInterface) => task.id === action.payload.taskId
            );
            if (targetTask !== undefined) {
                targetTask.group.push(action.payload.group);
            }
        },
        removeGroupFromTask: (
            state,
            action: PayloadAction<{ groupId: string; taskId: string }>
        ) => {
            const targetTask = state.tasks.find(
                (task: TaskInterface) => task.id === action.payload.taskId
            );
            if (targetTask === undefined) return;
            targetTask.group = targetTask.group.filter(
                (group: Group) => group.id !== action.payload.groupId
            );
        },
    },
});

export const {
    addTask,
    deleteTask,
    editTask,
    toggleTask,
    addToSelected,
    removeFromSelected,
    deleteSelectedTask,
    toggleSelectedTask,
    clearSelected,
    addGroupToTask,
    removeGroupFromTask,
} = taskSlice.actions;

export default taskSlice.reducer;
