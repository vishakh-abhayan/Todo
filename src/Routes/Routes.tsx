import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import TodoPage from "../pages/Todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  username: string;
  password: string;
  isLoggedIn: boolean;
  todos: Todo[];
}

function Routes() {
  const [parsedData, setParsedData] = useState<User[]>([]);
  const { username } = useParams();

  useEffect(() => {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      const parsedStoredData: User[] = JSON.parse(storedData);
      setParsedData(parsedStoredData);
    }
  }, []);

  parsedData.map((value: User) => {
    if (value.username === username) {
      if (value.isLoggedIn === false) {
        return <Login />;
      }
    }
  });

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
