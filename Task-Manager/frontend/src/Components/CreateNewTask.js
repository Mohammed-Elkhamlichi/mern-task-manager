import React, { useRef, useContext } from "react";
import axios from "axios";
import { ACTIONS_TYPE } from "../Context/reducer";
import { TaskContext } from "../Context/context";

const CreateNewTask = () => {
    const [state, dispatch] = useContext(TaskContext);
    console.log("state", state);
    console.log("dispatch", dispatch);
    const taskName = useRef();

    // api url to  post task
    const baseURL = "http://localhost:4000/api/v1/tasks";

    // handle form submition
    const handleSubmitForm = (e) => {
        const name = taskName.current.value;
        e.preventDefault();

        const createTask = () => {
            axios.post(baseURL, {
                name,
            });
            dispatch({
                type: ACTIONS_TYPE.CREATE_TASK,
                name,
            });
        };

        if (name) {
            createTask();
        } else {
            console.log("name must be required");
        }
    };

    return (
        <>
            <h1 className='text-center my-5 font-bold text-xl'>Task Manager</h1>
            <form
                className='flex flex-row items-center'
                onSubmit={handleSubmitForm}
            >
                <div className='flex-1 mx-2 rounded-lg bg-white shadow-gray-400 shadow'>
                    <input
                        ref={taskName}
                        type='text'
                        className='py-2 px-3  w-full bg-transparent focus:outline-none focus:font-bold'
                    />
                </div>
                <div className=''>
                    <button
                        type='submit'
                        className='bg-pink-600 text-white py-2  px-6 rounded-lg hover:text-white hover:font-bold'
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateNewTask;
