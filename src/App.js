import { createPortal } from "react-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

function ModalWindow({ onClose, onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
      onClose();
    }
  };

  return (
    <>
      {createPortal(
        <div className="modal-wrapper" onClick={onClose}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3>Додати нову задачу</h3>
            <div>
              <input
                className="input"
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Введіть текст задачі"
              />
              <div className="modal-buttons">
                <button type="button" onClick={onClose} className="cancel">
                  Скасувати
                </button>
                <button type="button" onClick={handleSubmit} className="add">
                  Додати
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Вивчити React",
    },
    {
      id: 2,
      text: "Зробити домашнє завдання",
    },
    {
      id: 3,
      text: "Прочитати книгу",
    },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h2>Мої задачі</h2>
      <button
        onClick={() => {
          navigate("/modal");
        }}
        className="add-task"
      >
        Додати задачу
      </button>

      <ul className="list">
        {tasks.map((task) => (
          <li key={task.id} className="item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Видалити
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-message">Немає задач. Додайте нову задачу!</p>
      )}

      <Routes>
        <Route
          path="/modal"
          element={
            <ModalWindow
              onClose={() => {
                navigate("/");
              }}
              onAddTask={addTask}
            />
          }
        />
      </Routes>
    </div>
  );
}
