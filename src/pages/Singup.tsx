import { BsArrowLeft, BsPersonFillAdd } from "react-icons/bs";

function Singup() {
  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillAdd size={50} />
          SingUp
        </h1>
        <div className="input_field">
          <input
            placeholder="username"
            type="username"
            name="username"
            id="username"
            autoComplete="off"
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            id="password"
          />
          <div className="log_buttons">
            <button className="button_log">
              <BsArrowLeft /> back to login
            </button>
            <button className="button_sing"> Sing up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
