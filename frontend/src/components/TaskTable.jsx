import { useEffect, useState } from "react";
import { getAllTask } from "../service/api";
import RowContent from "./RowContent";

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const data = await getAllTask();
    setTasks(data.tasks);
  };
  return (
    <>
      <div className="mt-12 px-16 py-4 text-3xl font-bold text-center">
        All Tasks
      </div>
      <div className="px-16 py-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-black text-center">
                Task ID
              </th>
              <th className="py-2 px-4 border-b border-black text-center ">
                Task Title
              </th>
              <th className="py-2 px-4 border-b border-black text-center ">
                Description
              </th>
              <th className="py-2 px-4 border-b border-black text-center">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <RowContent key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskTable;
