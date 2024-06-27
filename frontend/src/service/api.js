import axios from "axios";

export const getAllTask = async () => { 
    try {
        const res = await axios.get("http://localhost:3000/api/v1/tasks/all");
        return res.data;
    } catch (err) {
        console.error(err.message);
    }
}
export const getTaskById = async (id) => { 
    try {
        const res = await axios.get(`http://localhost:3000/api/v1/tasks/${id}`);
        return res.data;
    } catch (err) {
        console.error(err.message);
    }

}
export const createTask = async (task) => { 
    try {
        const res = await axios.post("http://localhost:3000/api/v1/tasks/create", task);
        return res.data;
    } catch (err) {
        console.error(err.message);
    }
}

export const updateTask = async (id, task) => { 
    try {
        const res = await axios.put(`http://localhost:3000/api/v1/tasks/update/${id}`, task);
        return res.data;
    } catch (err) {
        console.error(err.message);
    }
}

export const deleteTask = async (id) => { 
    try {
        const res = await axios.delete(`http://localhost:3000/api/v1/tasks/delete/${id}`);
        return res.data;
    } catch (err) {
        console.error(err.message);
    }
}       