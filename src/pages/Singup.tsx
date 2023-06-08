import { BsArrowLeft, BsPersonFillAdd } from "react-icons/bs";
import { useState } from "react";
// import React, { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  username: string;
  password: string;
  todos: Todo[];
}

function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: User = {
      username: username,
      password: password,
      todos: [],
    };

    // Save the new user to local storage
    localStorage.setItem(username, JSON.stringify(newUser));

    // Reset the form inputs
    setUsername("");
    setEmail("");
    setPassword("");

    // Display a success message or navigate to the login page
    // You can implement this according to your specific requirements
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
            autoComplete="off"
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
          />
          <div className="log_buttons">
            <button className="button_log">
              <BsArrowLeft /> back to login
            </button>
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
