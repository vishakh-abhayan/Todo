import { BsArrowLeft, BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

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

function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!username || !email || !password) {
      setFormError(true);
      return;
    }

    const newUser: User = {
      username: username,
      password: password,
      isLoggedIn: false,
      todos: [],
    };

    // Retrieve existing array from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    // console.log(existingUsers);

    // Push newUser to the existing array
    existingUsers.push(newUser);

    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setUsername("");
    setEmail("");
    setPassword("");
    setFormError(false);
  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillAdd size={50} />
          Signup
        </h1>
        <form className="input_field" onSubmit={handleSignup}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            autoComplete="newUser"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="new-password"
          />
          {formError && (
            <p className="error-message">Please fill in all fields.</p>
          )}
          <div className="log_buttons">
            <Link to="/" className="button_log">
              <BsArrowLeft /> back to login
            </Link>
            <button type="submit" className="button_sing">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
