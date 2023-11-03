import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Todo.css";
import { ToastContainer } from "react-toastify";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    // Load todos from local storage when the component mounts
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: todo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
      toast.success("Todo created successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    toast.error("Todo deleted successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  // const handleDeleteAll = () => {
  //   // localStorage.clear();
  //   setTodos([]);
  // };

  const characterLimit = window.innerWidth <= 550 ? 20 : undefined;

  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDo</h1>
      </div>
      <div className="input_contain">
        <input
          placeholder="type here ...."
          className="do_input"
          type="text"
          value={todo}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          maxLength={characterLimit}
        />
        <button
          type="submit"
          className="todo_check"
          onClick={() => {
            handleAddTodo();
          }}
        >
          <FaPen size={25} />
        </button>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          {todos.map((todo) => (
            <div className="todo_card" key={todo.id}>
              <h1
                onClick={() => handleToggleComplete(todo.id)}
                className={todo.completed ? "todo_true" : "todo_false"}
              >
                {todo.text}
              </h1>
              <IoTrashBin
                className="todo_bin"
                onClick={() => handleDelete(todo.id)}
                size={20}
              />
            </div>
          ))}
        </div>
        <div className="todo_nav">
          <p className="nav_cop">(Mark it's done by clicking on it)</p>
          {/* <p onClick={() => handleDeleteAll()} className="nav_act">
            Delete All
          </p> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Todo;
