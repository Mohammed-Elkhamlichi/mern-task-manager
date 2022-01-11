import React, { useContext } from "react";
import CreateNewTask from "../Components/CreateNewTask";
import TaskList from "../Components/TaskList";
import { TaskContext } from "../Context/context";

const Home = ({ value }) => {
    const [state, dispatch] = useContext(TaskContext);

    return (
        <main className='container flex flex-col  item-center m-auto my-4'>
            <article className='shadow-slate-400 bg-pink-200 m-auto  font-bold h-auto w-4/4 p-4 rounded-lg mx-2 shadow'>
                <CreateNewTask />
            </article>
            <article className='shadow-slate-400 bg-pink-200 m-auto  font-bold h-auto w-4/4 p-4 rounded-lg mx-2 my-3 shadow'>
                <TaskList />
            </article>
        </main>
    );
};

export default Home;
