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
      <div className="md:mt-12 px-16 py-4 text-2xl md:text-3xl font-bold text-center">
        All Tasks
      </div>
      <div className="md:px-16 py-4 px-3">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 text-sm px-4 border-b border-black text-center hidden md:block">
                Task ID
              </th>
              <th className="py-2 px-4 border-b border-black text-center text-sm md:text-base">
                Task Title
              </th>
              <th className="py-2 px-4 border-b border-black text-center text-sm md:text-base hidden md:block">
                Description
              </th>
              <th className="py-2 px-4 border-b border-black text-center text-sm md:text-bas">
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
