import "./App.css";
import Layout from "./Layout";

import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTask from "./pages/NewTask";
import ErrorCode from "./components/ErrorCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "newTask",
        element: <NewTask />,
      },
      {
        path: "updateTask/:id",
        element: <NewTask />,
      },
      {
        path: "*",
        element: <ErrorCode />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
