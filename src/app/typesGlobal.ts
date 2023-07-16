import { KeyOfGroupColor } from "../assets/groupColor";

export interface Group {
    id: string;
    name: string;
    color: KeyOfGroupColor;
}

export interface TaskInterface {
    name: string;
    status: boolean;
    description?: string;
    id: string;
    group: Group[];
    date: Date
}

export interface TaskInitialState {
    tasks: Array<TaskInterface>;
    selectedTasks: Array<TaskInterface>;
}
