

const TaskTable = () => {
    return (
        <>
            <div className="mt-12 px-16 py-4 text-3xl font-bold text-center">All Tasks</div>
            <div className="px-16 py-4">
          <table className="w-full">
              <thead >
                  <tr>
                        <th className="py-2 px-4 border-b border-black text-center">Task ID</th>
                        <th className="py-2 px-4 border-b border-black text-center ">Task Title</th>
                        <th className="py-2 px-4 border-b border-black text-center ">Description</th>
                        <th className="py-2 px-4 border-b border-black text-center">Due Date</th>
                    </tr>
              </thead>
              <tbody>
                    <tr>
                        <td className="py-4 px-2 border-b border-black text-center">1</td>
                        <td className="py-4 px-2 border-b border-black text-center">Task 1</td>
                        <td className="py-4 px-2 border-b border-black text-center">Task 1 Description</td>
                        <td className="py-4 px-2 border-b border-black text-center">01-01-2022</td>
                    </tr>
                    <tr>
                        <td className="py-4 px-2 border-b border-black text-center">2</td>
                        <td className="py-4 px-2 border-b border-black text-center">Task 2</td>
                        <td className="py-4 px-2 border-b border-black text-center">Task 2 Description</td>
                        <td className="py-4 px-2 border-b border-black text-center">01-01-2022</td>
                    </tr>
              </tbody>
          </table>
        </div>
      </>
        
  )
}

export default TaskTable