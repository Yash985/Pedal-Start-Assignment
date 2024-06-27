import axios from "axios";

export const getAllTask = async () => { 
    try {
        const res = await axios.get("http://localhost:3000/api/v1/tasks/all");
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