import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TodoPage from "../pages/todo/Todo";
import ErrorPage from "../pages/404/ErrorPage";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoPage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
