import "./styles.css";
import { useState } from "react";

function ToggleButton({ isCompleted, onClick }) {
  return (
    <button
      onClick={onClick}
      className={isCompleted ? "toggle-btn completed" : "toggle-btn active"}
    >
      <div
        className={isCompleted ? "toggle-circle right" : "toggle-circle left"}
      >
        {isCompleted ? (
          <span className="icon-check">✓</span>
        ) : (
          <span className="icon-cross">✕</span>
        )}
      </div>
    </button>
  );
}

function TaskItem({ title, description, color, completed, onToggle }) {
  return (
    <div className="task-item">
      <div className={`color-bar ${color}`} />

      <div className="task-content">
        <h3 className={completed ? "task-title completed" : "task-title"}>
          {title}
        </h3>
        <p className="task-description">{description}</p>
      </div>

      <ToggleButton isCompleted={completed} onClick={onToggle} />
    </div>
  );
}

export default function App() {
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  const [task3, setTask3] = useState(true);

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="main-title">To Do</h1>
        </div>
        <div className="tasks-container">
          <div className="tasks-header">
            <div className="check-box">✓</div>
            <h2 className="tasks-title">Today Tasks:</h2>
          </div>

          <div className="task-list">
            <TaskItem
              title="Visit David"
              description="Lorem Ipsum Dolor Sit met..."
              color="red"
              completed={task1}
              onToggle={() => setTask1(!task1)}
            />
            <TaskItem
              title="Groceries For Dinner"
              description="Lorem Ipsum Dolor Sit met..."
              color="blue"
              completed={task2}
              onToggle={() => setTask2(!task2)}
            />
            <TaskItem
              title="Fix Dad's iPad"
              description="Lorem Ipsum Dolor Sit met..."
              color="yellow"
              completed={task3}
              onToggle={() => setTask3(!task3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
