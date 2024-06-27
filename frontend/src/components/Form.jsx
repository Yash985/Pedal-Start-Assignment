// eslint-disable-next-line react/prop-types
const Form = ({ formTitle }) => {
  return (
    <div className="min-h-full flex items-center justify-center bg-white mt-24">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-lg border border-black">
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
            required
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
            required
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
            name="dueDate"
            required
          />
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
