// actions Type
export const ACTIONS_TYPE = {
    CREATE_TASK: "CREATE_TASK",
    GET_ALL_TASKS: "GET_ALL_TASKS",
    UPDATE_TASK: "UPDATE_TASK",
    DELETE_TASK: "DELETE_TASK",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS_TYPE.CREATE_TASK:
            console.log("CREATE_TASK", state, action);
            return {
                ...state.task,
                name: action.name,
            };
        case ACTIONS_TYPE.GET_ALL_TASKS:
            return console.log("GET_ALL_TASKS");
        case ACTIONS_TYPE.UPDATE_TASK:
            return console.log("UPDATE_TASK");
        case ACTIONS_TYPE.DELETE_TASK:
            return console.log("DELETE_TASK");
        default:
            return console.log("default reducer");
    }
};
