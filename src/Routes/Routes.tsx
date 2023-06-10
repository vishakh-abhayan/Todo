import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Todo from "../pages/Todo";

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

function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default Routes;
