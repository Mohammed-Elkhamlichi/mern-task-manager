import React, { useEffect, useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { TaskContext } from "../Context/context";

const baseURL = "http://localhost:4000/api/v1/tasks";

const TaskList = () => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [state, dispatch] = useContext(TaskContext);

    let [tasks, setTasks] = useState([]);

    const getAllTasks = () => {
        axios
            .get(baseURL)
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => console.log(error))
            .finally(() => console.log("tasks has been fetched"));
    };

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <>
            <h1 className='text-center text-xl'>Task List</h1>
            {tasks ? (
                tasks.map((task) => {
                    const { name, completed, _id: id } = task;
                    return (
                        <div
                            key={id}
                            className='flex items-center flex-row my-3 flex-nowrap bg-slate-100 p-3 rounded-lg shadow-stone-400 shadow'
                        >
                            <div className='flex-1'>{name}</div>
                            <div className='flex flex-row items-center '>
                                <input
                                    type='checkbox'
                                    name=''
                                    id=''
                                    checked={completed || false}
                                    Onchecked={(e) =>
                                        setIsCompleted(!isCompleted)
                                    }
                                    style={{ margin: "5px" }}
                                />
                                <EditIcon
                                    style={{
                                        color: "gray",
                                        cursor: "pointer",
                                        margin: "5px",
                                    }}
                                    className='animate-bounce'
                                />
                                <DeleteIcon
                                    style={{
                                        color: "brown",
                                        cursor: "pointer",
                                        margin: "5px",
                                    }}
                                />
                            </div>
                        </div>
                    );
                })
            ) : (
                <h2>No Task Exist</h2>
            )}
        </>
    );
};

export default TaskList;
