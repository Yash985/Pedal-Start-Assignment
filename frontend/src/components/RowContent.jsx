import { formatDate } from "../util/formatDate";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RowContent = ({ task }) => {
  return (
      <tr>
        <td className="py-4 px-2 border-b border-black text-center">
          {task._id}
        </td>
        <td className="py-4 px-2 border-b border-black text-center">
          <Link to={`${task._id}`} className="hover:underline">{task.title}</Link>
        </td>
        <td className="py-4 px-2 border-b border-black text-center">
          {task.description>40 ? task.description.slice(0, 40) + "..." : task.description}
        </td>
        <td className="py-4 px-2 border-b border-black text-center">
          {formatDate(task.dueDate)}
        </td>
      </tr>
  );
};

export default RowContent;
