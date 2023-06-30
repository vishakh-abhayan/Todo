import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";

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

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = localStorage.getItem("users");
    console.log(user);
    if (user) {
      let parsedUser = JSON.parse(user);
      console.log(parsedUser);
      parsedUser.map((value: User) => {
        console.log(value);
        if (value.username === username) {
          console.log(value.password, "***");
          if (value.password === password) {
            value.isLoggedIn = true;
            localStorage.setItem("users", JSON.stringify(parsedUser));
            navigate("/todo");
          } else {
            setErrorMessage("Incorrect password");
          }
        } else {
          setErrorMessage("User does not exist");
        }
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillCheck size={50} />
          Login
        </h1>
        <form className="input_field" onSubmit={handleLogin}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="log_buttons">
            <button type="submit" className="button_log">
              Login
            </button>
            <Link to="/auth" className="button_sing">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
