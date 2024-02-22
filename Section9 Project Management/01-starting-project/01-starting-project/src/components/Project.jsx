import project_data from "../data";

export default function Project() {
  return (
    <section className="manage_project">
      <section id="project_brief">
        <div id="handle_project">
          <h1 className="project_title">Project Title</h1>
          <button>Delete</button>
        </div>
        <p id="end_date">Date: 12.2.2024</p>
        <p className="description">Description</p>
      </section>
      <hr />
      <section id="tasks">
        <h3>Tasks</h3>
        <div className="input_task">
          <input type="text" />
          <button id="addTask">Add Task</button>
        </div>
        <ol className="task_list">
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
        </ol>
      </section>
    </section>
  );
}
