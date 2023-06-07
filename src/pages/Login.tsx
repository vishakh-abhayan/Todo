import "./Auth.css";
import { BsPersonFillCheck } from "react-icons/bs";

function Login() {
  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillCheck size={50} />
          Login
        </h1>
        <div className="input_field">
          <input
            placeholder="username"
            type="username"
            name="username"
            id="username"
            autoComplete="off"
          />
          {/* <input placeholder="@email" type="email" name="email" id="email" /> */}
          <input
            placeholder="password"
            type="password"
            name="password"
            id="password"
          />
          <div className="log_buttons">
            <button className="button_log">Get Start</button>
            <button className="button_sing">create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
