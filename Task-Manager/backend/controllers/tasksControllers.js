// import task Model (mongoose.Schema)
const TaskModel = require("../models/taskModels");

// get all tasks
const getAllTasks = async (req, res) => {
   try {
      const tasks = await TaskModel.find({});
      res.status(201).json(tasks);
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
         return res.status(404).json({ msg: `Task Not Found with id : ${id}` });
      }
      res.status(200).json(task);
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
      // get task id
      const id = req.params.id;
      // update task info
      const taskUpdate = await TaskModel.findOneAndUpdate(
         { _id: id },
         req.body,
         { new: true, runValidators: true }
      );
      // send response to the user
      res.status(201).json({ taskUpdate });
   } catch (error) {
      res.status(500).json({ error });
   }
};

// delete task
const deleteTask = async (req, res) => {
   try {
      // get the task id
      const id = req.params.id;
      // find the task
      const task = await TaskModel.findOne({ _id: id });
      // if the task not found
      if (!task) {
         return res.status(404).json({ msg: `Task Not Found with id : ${id}` });
      }

      // delete the task
      const taskDelete = await TaskModel.deleteOne(task);
      // get all exist tasks without the recently task it's was deleted
      const tasks = await TaskModel.find({});
      // send response to the user
      res.status(201).json({
         msg: { delete: "Task Has Been Successfully Deleted" },
         tasks,
      });
   } catch (error) {
      // send response to the user
      res.status(500).json({ error });
   }
};

// export the module
module.exports = {
   getAllTasks,
   getTask,
   createTask,
   updateTask,
   deleteTask,
};
