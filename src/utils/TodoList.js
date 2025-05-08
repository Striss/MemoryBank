import React, { useState } from "react";
import "./TodoList.css"; // Import your CSS file for styling

const ToDoChecklist = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h2>To-Do</h2>
      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(index)}
              />
              {task.text}
            </label>
            <button onClick={() => deleteTask(index)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoChecklist;
