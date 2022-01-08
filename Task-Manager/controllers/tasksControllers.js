// import task Model (mongoose.Schema)
const TaskModel = require("../models/taskModels");

// get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.status(201).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// get task
const getTask = async (req, res) => {
    try {
        // get task id
        const id = req.params.id;
        // find task have the same id
        const task = await TaskModel.findOne({ _id: id });
        if (!task) {
            return res
                .status(404)
                .json({ msg: `No Task Exist with this id : ${id}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// create a new task
const createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// update task
const updateTask = async (req, res) => {
    try {
        // get task name
        const name = req.body.name;
        // get task is completed
        const completed = req.body.completed;
        // get task id
        const id = req.params.id;
        // update task info
        const taskUpdate = await TaskModel.updateOne({
            _id: id,
            name,
            completed,
        });
        // find the task was updated recently
        const task = await TaskModel.findOne({ _id: id });
        // send response to the user
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// delete task
const deleteTask = (req, res) => {
    res.json({ taskId: req.params.id });
};

// export the module
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
