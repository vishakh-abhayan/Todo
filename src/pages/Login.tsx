import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, "((((");

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the entered username exists in local storage
    const user = localStorage.getItem("users");
    console.log(user, "&&&");

    if (user) {
      let parsedUser = JSON.parse(user);
      console.log(parsedUser);

      parsedUser.map((value: []) => {
        console.log(value, "***");
      });
      // Check if the entered password matches the stored password
      if (parsedUser.password === password) {
        // Update the isLoggedIn value in sessionStorage
        parsedUser.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(parsedUser));
        navigate("/todo");
      } else {
        // Incorrect password
        setErrorMessage("Incorrect password");
      }
    } else {
      // User does not exist
      setErrorMessage("User does not exist");
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
