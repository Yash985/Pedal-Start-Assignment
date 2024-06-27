import axios from "axios";

export const getAllTask = async () => { 
    try {
        const res = await axios.get("http://localhost:3000/api/v1/tasks/all");
        return res.data;
    } catch (err) {
        console.error(err.message);
    }
}