import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";


const initialState = {
    tasks: [],
    task: {
        name: null,
        completed: false,
    },
};

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    return (
        <TaskContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </TaskContext.Provider>
    );
};
