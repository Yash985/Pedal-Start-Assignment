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
        <Link to={`${task._id}`}>{task.title}</Link>
      </td>
      <td className="py-4 px-2 border-b border-black text-center">
        {task.description}
      </td>
      <td className="py-4 px-2 border-b border-black text-center">
        {formatDate(task.dueDate)}
      </td>
    </tr>
  );
};

export default RowContent;
