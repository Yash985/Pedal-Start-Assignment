import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTask, getTaskById } from "../service/api";
import { formatDate } from "../util/formatDate.js";
import toast from "react-hot-toast";

const DetailsPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const data = await getTaskById(id);
    setDetail(data[0]);
  };
  const handleClick = async () => {
    const res = await deleteTask(id);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    navigate("/");
  };
  return (
    <div className="w-full h-[500px] flex flex-col  items-center justify-center px-16 mt-6">
      <div className="flex items-center">
        <p className="md:text-3xl font-semibold uppercase text-slate-800 mr-2">
          Title:
        </p>
        <p className="md:text-4xl font-semibold uppercase text-xl">
          {detail?.title}
        </p>
      </div>
      <div className="flex items-center mt-4">
        <p className="uppercase font-bold md:text-base text-slate-800 mr-2 text-sm">
          Id:
        </p>
        <p className="uppercase font-semibold md:text-base text-sm">
          {detail?._id}
        </p>
      </div>
      <div className="flex mt-6  overflow-y-auto">
        <p className="uppercase text-slate-800 font-semibold md:text-xl mr-2 ">
          Description:
        </p>
        <div className="">
          <p className="uppercase md:text-base text-sm text-wrap">
            {detail?.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Amet et eum corrupti laborum dolor ad ipsum
            maiores a nemo nihil quidem, reprehenderit deserunt asperiores!
            Laudantium molestias optio iure mollitia exercitationem, at earum.
            Iste quae quis eaque aperiam pariatur laudantium, modi tempora earum
            consequatur fugit nihil nulla aliquam ratione ipsum provident
            inventore officiis qui dolor sunt, ea quibusdam quaerat sed animi
            temporibus! Mollitia vitae commodi quasi eveniet minus tenetur saepe
            dolorum possimus? Tenetur, eaque odit? Aspernatur cupiditate
            sapiente iste nemo commodi repellat illum architecto quae saepe
            omnis, porro dolore impedit nihil ullam ad magnam ex consequatur
            earum debitis cumque placeat? Quo!
          </p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <p className="uppercase font-semibold md:text-xl text-slate-800 mr-2">
          Due Date:
        </p>
        <p className="md:text-xl">{formatDate(detail.dueDate)}</p>
      </div>
      <div className="flex items-center mt-4">
        <Link
          to={`/updateTask/${id}`}
          className="px-4 py-2 bg-yellow-300 rounded-xl mr-4"
        >
          Update
        </Link>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-red-500 rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
