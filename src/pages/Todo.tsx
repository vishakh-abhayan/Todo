import "./Todo.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsPersonFillCheck, BsDashSquare } from "react-icons/bs";
import { useEffect, useState } from "react";

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

function Todo() {
  const navigate = useNavigate();
  const { username } = useParams();
  const [todo, setTodo] = useState("");
  const [parsedData, setParsedData] = useState<User[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      const parsedStoredData: User[] = JSON.parse(storedData);
      setParsedData(parsedStoredData);
    }
  }, []);

  const handleLogout = () => {
    parsedData.map((value: User) => {
      if (value.isLoggedIn == true) {
        value.isLoggedIn = false;
        localStorage.setItem("users", JSON.stringify(parsedData));
        navigate("/");
      } else {
        navigate("/");
      }
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") {
      return;
    }

    const userTodo: Todo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };

    parsedData.map((value: User) => {
      value.todos.push(userTodo);
      localStorage.setItem("users", JSON.stringify(parsedData));
    });
    setTodo("");
  };

  // if (user) {
  //   let parsedUser = JSON.parse(user);
  //   parsedUser.map((value: User) => {
  //     if (value.isLoggedIn == false || username !== value.username) {
  //       navigate("/");
  //       return null;
  //     }
  //   });
  // } else {
  //   navigate("/");
  //   return null;
  // }

  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <form onSubmit={handleTodo}>
          <input className="do_input" type="text" onChange={handleInput} />
          <button type="submit" className="todo_check"></button>
        </form>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          {parsedData.map((value: User) => {
            return value.todos.map((todo: Todo) => (
              <div key={todo.id} className="todo_card">
                <h1>{todo.title}</h1>
              </div>
            ));
          })}
        </div>
        <div className="todo_nav">
          <p className="nav_act">
            <BsPersonFillCheck />
            {username}
          </p>
          <p onClick={handleLogout} className="nav_cop">
            logout
          </p>
          {/* <p className="nav_cop">Edit</p> */}
        </div>
      </div>
    </div>
  );
}

export default Todo;
