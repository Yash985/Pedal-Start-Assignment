import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteTask, getTaskById } from "../service/api";
import { formatDate } from "../util/formatDate.js";

const DetailsPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const data = await getTaskById(id);
    setDetail(data[0]);
  };
  const handleClick = async () => { 
    await deleteTask(id);
    window.location.href = "/";
  }
  return (
    <div className="w-full h-[500px] flex flex-col  items-center justify-center px-16">
      <div className="flex items-center">
        <p className="text-3xl font-semibold uppercase text-slate-800 mr-2">
          Title:
        </p>
        <p className="text-4xl font-semibold uppercase ">{detail?.title}</p>
      </div>
      <div className="flex items-center mt-4">
        <p className="uppercase font-bold text-base text-slate-800 mr-2">Id:</p>
        <p className="uppercase font-semibold text-base">{detail?._id}</p>
      </div>
      <div className="flex mt-6 ">
        <p className="uppercase text-slate-800 font-bold text-xl mr-2">
          Description:
        </p>
        <p className="uppercase text-wrap text-base">
          {detail?.description}
        </p>
      </div>
      <div className="flex items-center mt-4">
        <p className="uppercase font-bold text-xl text-slate-800 mr-2">
          Due Date:
        </p>
        <p className="text-xl">{formatDate(detail.dueDate)}</p>
          </div>
          <div className="flex items-center mt-4">
              <Link to={`/updateTask/${id}`} className="px-4 py-2 bg-yellow-300 rounded-xl mr-4">Update</Link>
        <button onClick={handleClick} className="px-4 py-2 bg-red-500 rounded-xl">Delete</button>
            </div>
    </div>
  );
};

export default DetailsPage;
