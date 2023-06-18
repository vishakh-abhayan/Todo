import "./Todo.css";
import { useNavigate } from "react-router-dom";

function Todo() {
  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <input className="do_input" type="text" />
        <button className="todo_check"></button>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          <div className="todo_card">
            <h1></h1>
          </div>
        </div>
        <div className="todo_nav">
          <p className="nav_act">Active</p>
          <p className="nav_cop">Completed</p>
          <p className="nav_cop">Edit</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
