import "./Login.css";

function Login() {
  return (
    <div className="main_div">
      <div className="log_board">
        <h1>Login</h1>
        <div className="input_field">
          <input placeholder="Username" type="email" name="email" id="email" />
          {/* <input placeholder="@email" type="email" name="email" id="email" /> */}
          <input placeholder="password" type="email" name="email" id="email" />
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
