import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Todo from "../pages/Todo";

const router = createBrowserRouter([
  {
    path: "/log",
    element: <Login />,
  },
  {
    path: "/sing",
    element: <Singup />,
  },
  {
    path: "/",
    element: <Todo />,
  },
]);

function Routes(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default Routes;
