import React, { useState } from "react";
import "./App.css";
//import React, { useState } from "react";

function App() {
  const [desc, setDesc] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todos, setTodos] = useState([]);
  const style = { border: "1px solid black" };

  const descChanged = e => {
    setDesc(e.target.value);
  };

  const dateChanged = e => {
    setTodoDate(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, { desc, todoDate }]);
  };
  return (
    <div>
      <div className="App" style={style}>
        <h2 align="left">Add todos</h2>
        <form onSubmit={addTodo}>
          <label for="desc">Description: </label>
          <input id="desc" type="text" onChange={descChanged} value={desc} />
          <label for="date">Date:</label>
          <input
            id="date"
            type="date"
            onChange={dateChanged}
            value={todoDate}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <div>
        <table align="center">
          <tbody>
            <tr>
              <th>Description</th>
              <th>Date</th>
            </tr>
            {todos.map(todo => (
              <tr>
                <td>{todo.desc}</td>
                <td>{todo.todoDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
