import { useEffect, useState } from "react";
import { createTask, getTaskById, updateTask } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../util/formatDate";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Form = ({ formTitle }) => {
  const { id } = useParams();
  const [input, setInput] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  useEffect(() => {
    if (id) {
      getPreviousData();
    }
  }, []);

  const getPreviousData = async () => {
    const res = await getTaskById(id);
    setInput({
      title: res[0].title,
      description: res[0].description,
      dueDate: res[0].dueDate,
    }); 
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formTitle === "Update Task") {
      const res = updateTask(id, input);
      toast.promise(res, {
        loading: 'Loading',
        success: 'Data updated',
        error: 'Error while updating',
      });
      navigate("/");
    } else {
      const res= createTask(input);
      toast.promise(res, {
        loading: "Loading",
        success: "Task Created Successfully",
        error:"Error while creating task"
      })
      navigate("/");
    }
    
  };
  return (
    <div className="min-h-full flex items-center justify-center bg-white md:mt-24 px-4 mt-16">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          {formTitle}
        </h2>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="title">
            Task Title
          </label>
          <input
            className="w-full p-2 border border-black rounded outline-none focus:ring-2 focus:ring-black"
            type="text"
            id="title"
            name="title"
            value={input.title}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full p-2 border border-black rounded outline-none focus:ring-2 focus:ring-black"
            id="description"
            name="description"
            value={input.description}
            required
            minLength={10}
            maxLength={500}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-black mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input
            className="w-full p-2 border border-black rounded outline-none focus:ring-2 focus:ring-black"
            type="date"
            id="dueDate"
            value={formatDate(input.dueDate)}
            name="dueDate"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
          type="submit"
        >
          {formTitle==="Update Task"?"Update Task":"Add Task"}
        </button>
      </form>
    </div>
  );
};

export default Form;
