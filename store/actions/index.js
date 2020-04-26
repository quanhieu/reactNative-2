import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';

let DEFAULT_TASKID = 0;

//Action: "add new Task"
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: DEFAULT_TASKID++,
        taskName: inputTaskName
    }
}

//Action: "toggle 1 task to completed / incompleted"
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}
