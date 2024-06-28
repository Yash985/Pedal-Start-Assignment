import { useEffect, useState } from "react";
import { getTaskById } from "../service/api";
import { Link } from "react-router-dom";
import { formatDate } from "../util/formatDate";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search) {
        const res = await getTaskById(search);
        setResult(res);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex items-center border border-black mx-16 px-2 mt-16 focus-within:border-blue-500 focus-within:border-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="h-10 w-full outline-none"
          type="text"
          placeholder="Search By ID"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="px-16 py-4">
        {result ? (
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
              <tr>
                <td className="py-4 px-2 border-b border-black text-center">
                  {result[0]._id}
                </td>
                <td className="py-4 px-2 border-b border-black text-center">
                  <Link to={`${result._id}`}>{result[0].title}</Link>
                </td>
                <td className="py-4 px-2 border-b border-black text-center">
                  {result[0].description}
                </td>
                <td className="py-4 px-2 border-b border-black text-center">
                  {formatDate(result[0].dueDate)}
                </td>
              </tr>{" "}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchBar;
