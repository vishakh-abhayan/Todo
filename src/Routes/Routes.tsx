import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import Singup from "../pages/Singup";
import TodoPage from "../pages/Todo";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/auth",
      element: <Singup />,
    },
    {
      path: "/todo/:username",
      element: <TodoPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
