import { useRef, useState } from "react";
import project_data from "../data";

export default function TaskManager({ projectIndex }) {
  const [tasks, setTasks] = useState(false);
  const addTask = useRef();

  function handleAddTask() {
    const newTask = addTask.current.value;
    project_data[projectIndex].tasks.push(newTask);
    setTasks((pre) => !pre);
    addTask.current.value = "";
  }
  function handleClearTask(eventObj) {
    let Index = eventObj.target.value;
    project_data[projectIndex].tasks.splice(Index, 1);
    setTasks((pre) => !pre);
    addTask.current.value = "";
  }

  return (
    <section id="tasks">
      <h3>Tasks</h3>
      <div className="input_task">
        <input type="text" ref={addTask} />
        <button id="addTask" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ol className="task_list">
        {project_data[projectIndex].tasks.length > 0 ? (
          project_data[projectIndex].tasks.map((task, index) => (
            <li key={task + index}>
              <span>{task}</span>
              <button name={index} onClick={handleClearTask}>
                Clear
              </button>
            </li>
          ))
        ) : (
          <h1>No Tasks Yet...</h1>
        )}
      </ol>
    </section>
  );
}
