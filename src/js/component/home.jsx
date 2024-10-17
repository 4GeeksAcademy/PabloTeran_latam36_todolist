import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = (event) => {
        if (event.key === "Enter" && newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="todo-app">
            <h1 className="title">todos</h1>
            <div className="task-container">
                <input
                    type="text"
                    placeholder="Añadir una tarea..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={addTask}
                />
                <ul>
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <li key={index} onMouseEnter={(e) => e.target.classList.add('hover')} onMouseLeave={(e) => e.target.classList.remove('hover')}>
                                {task}
                                <span className="remove-btn" onClick={() => removeTask(index)}>✖</span>
                            </li>
                        ))
                    ) : (
                        <li>No hay tareas, añadir tareas</li>
                    )}
                </ul>
                <div className="footer">
                    <p>{tasks.length} item{tasks.length !== 1 ? "s" : ""} left</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
