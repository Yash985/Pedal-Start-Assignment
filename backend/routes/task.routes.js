import express from "express";
import {
  allTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";
const router = express.Router();

router.get("/all", allTasks);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
