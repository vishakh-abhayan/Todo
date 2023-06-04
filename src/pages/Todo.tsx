import "./Todo.css";

interface todo {
  // index: number;
  value: string;
}

const userTodo: todo[] = [
  {
    value: "morning exrices",
  },
  {
    // index: 1,
    value: "morning exrices",
  },
  {
    // index: 2,
    value: "morning exrices",
  },
  {
    // index: 3,
    value: "morning exrices",
  },
  {
    // index: 4,
    value: "morning exrices",
  },
  {
    // index: 5,
    value: "morning exrices",
  },
  {
    // index: 6,
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
          {}
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
          <div className="todo_card">
            <h1>hello</h1>
          </div>
        </div>
        <div className="todo_nav">
          <p className="nav_act">Active</p>
          <p className="nav_cop">Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
