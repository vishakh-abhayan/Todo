import "./Todo.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
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

    setTodo("");
    parsedData.map((value: User) => {
      if (value.username === username) {
        value.todos.push(userTodo);
      }
      return value;
    });
    localStorage.setItem("users", JSON.stringify(parsedData));
  };

  const handleTodoClick = (clickedTodo: Todo) => {
    const updatedData = parsedData.map((value: User) => {
      if (value.username === username) {
        return {
          ...value,
          todos: value.todos.map((todo: Todo) =>
            todo.id === clickedTodo.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      }
      return value;
    });
    setParsedData(updatedData);
  };

  const currentUser = parsedData.find(
    (value: User) => value.username === username
  );
  const userTodos = currentUser ? currentUser.todos : [];

  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <form onSubmit={handleTodo}>
          <input
            className="do_input"
            type="text"
            value={todo}
            onChange={handleInput}
          />
          <button type="submit" className="todo_check"></button>
        </form>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          {userTodos.map((todo: Todo) => (
            <div key={todo.id} className="todo_card">
              <h1
                onClick={() => handleTodoClick(todo)}
                className={todo.completed ? "todo_true" : "todo_fales"}
              >
                {todo.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="todo_nav">
          <p className="nav_cop">
            <BsPersonCircle />
            {username}
          </p>
          <p onClick={handleLogout} className="nav_act">
            logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
