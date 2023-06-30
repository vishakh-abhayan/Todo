import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Todo from "../pages/Todo";

function Routes(): JSX.Element {
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
      path: "/todo",
      element: <Todo />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
