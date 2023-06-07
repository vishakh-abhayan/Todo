import "./Todo.css";

interface todo {
  value: string;
}

const userTodo: todo[] = [
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
  {
    value: "morning exrices",
  },
];

function Todo() {
  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <input className="do_input" type="text" />
        <div className="todo_check"></div>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          {userTodo.map((value, index) => (
            <div key={index} className="todo_card">
              <h1>{value.value}</h1>
            </div>
          ))}
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
