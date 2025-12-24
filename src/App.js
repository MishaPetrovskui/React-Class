import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    priority: "Moderate",
    description: "",
    image: "",
    status: "Not Started"
  });

  function handleAddTask() {
    if (newTask.title.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      image: newTask.image || "https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg",
      priority: newTask.priority,
      status: newTask.status,
      completed: false
    };

    if (newTask.status === "Completed") {
      setCompletedTasks([...completedTasks, { ...task, completedDate: "today" }]);
    } else {
      setTasks([...tasks, task]);
    }

    setNewTask({
      title: "",
      date: "",
      priority: "Moderate",
      description: "",
      image: "",
      status: "Not Started"
    });
    setShowModal(false);
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTask({ ...newTask, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  function calculateStats() {
    const total = tasks.length + completedTasks.length;
    if (total === 0) return { completed: 0, inProgress: 0, notStarted: 0 };

    const completed = Math.round((completedTasks.length / total) * 100);
    const inProgress = Math.round(
      (tasks.filter(t => t.status === "In Progress").length / total) * 100
    );
    const notStarted = Math.round(
      (tasks.filter(t => t.status === "Not Started").length / total) * 100
    );

    return { completed, inProgress, notStarted };
  }

  const stats = calculateStats();

  return (
    <div className="app">
      <main className="main">
        <div className="welcome">
          <h2>Welcome back, Sundar</h2>
          <button className="add-button" onClick={() => setShowModal(true)}>
            + Add New Task
          </button>
        </div>

        <div className="content">
          <section className="todo">
            <h3>To-Do</h3>
            {tasks.map(task => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <img src={task.image} />
                <div className="task-meta">
                  <span>Priority: {task.priority}</span>
                  <span className={task.status === "Not Started" ? "status-not-started" : "status-progress"}>
                    Status: {task.status}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="status">
            <h3>Task Status</h3>
            <div className="stats">
              <div className="stat">
                <div className="circle green">{stats.completed}%</div>
                <p>Completed</p>
              </div>
              <div className="stat">
                <div className="circle blue">{stats.inProgress}%</div>
                <p>In Progress</p>
              </div>
              <div className="stat">
                <div className="circle red">{stats.notStarted}%</div>
                <p>Not Started</p>
              </div>
            </div>

            <h3>Completed Task</h3>
            {completedTasks.map(task => (
              <div key={task.id} className="completed-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <img src={task.image} />
                <span className="status-completed">Completed {task.completedDate}</span>
              </div>
            ))}
          </section>
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Task</h2>
              <button className="close-button" onClick={() => setShowModal(false)}>
                Go Back
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="Enter task title"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newTask.date}
                  onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Priority</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="Extreme"
                      checked={newTask.priority === "Extreme"}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    />
                    <span>Extreme</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="Moderate"
                      checked={newTask.priority === "Moderate"}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    />
                    <span>Moderate</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="priority"
                      value="Low"
                      checked={newTask.priority === "Low"}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    />
                    <span>Low</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Status</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Not Started"
                      checked={newTask.status === "Not Started"}
                      onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    />
                    <span>Not Started</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="In Progress"
                      checked={newTask.status === "In Progress"}
                      onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    />
                    <span>In Progress</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="status"
                      value="Completed"
                      checked={newTask.status === "Completed"}
                      onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    />
                    <span>Completed</span>
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-half">
                  <label>Task Description</label>
                  <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Start writing here..."
                  />
                </div>

                <div className="form-group-half">
                  <label>Upload Image</label>
                  <div className="upload-box">
                    <label className="browse-button">
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <button className="done-button" onClick={handleAddTask}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}