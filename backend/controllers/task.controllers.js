import Task from "../model/task.model.js";

export const allTasks = async (req, res) => {
  try {
    const Tasks = await Task.find({});
    res
      .status(200)
      .json({
        message: "All data fetched successfully",
        success: true,
        tasks: Tasks,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error while Fetching all data",
        success: false,
        Error: err.message,
      });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.find({ _id: id });
    res.status(200).json(task);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error while fetching task",
        success: false,
        Error: err.message,
      });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({ title, description, dueDate });
    await newTask.save();
    res
      .status(201)
      .json({
        message: "Task created successfully",
        success: true,
        task: newTask,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error while creating task",
        success: false,
        Error: err.message,
      });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate },
      { new: true }
    );
    res
      .status(200)
      .json({
        message: "Task updated successfully",
        success: true,
        task: updatedTask,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error while updating task",
        success: false,
        Error: err.message,
      });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    res
      .status(200)
      .json({
        message: "Task deleted successfully",
        success: true,
        task: deletedTask,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Error while deleting task",
        success: false,
        Error: err.message,
      });
  }
};
