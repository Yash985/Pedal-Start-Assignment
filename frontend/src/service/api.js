import axios from "axios";
import toast from "react-hot-toast";

export const getAllTask = async () => {
  try {
    const res = await axios.get(
      "https://pedal-start-assignment.onrender.com/api/v1/tasks/all"
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
export const getTaskById = async (id) => {
  try {
    const res = await axios.get(
      `https://pedal-start-assignment.onrender.com/api/v1/tasks/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
export const createTask = async (task) => {
  try {
    const res = await axios.post(
      "https://pedal-start-assignment.onrender.com/api/v1/tasks/create",
      task
    );
    
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const updateTask = async (id, task) => {
  try {
    const res = await axios.put(
      `https://pedal-start-assignment.onrender.com/api/v1/tasks/update/${id}`,
      task
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(
      `https://pedal-start-assignment.onrender.com/api/v1/tasks/delete/${id}`
    );
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};
