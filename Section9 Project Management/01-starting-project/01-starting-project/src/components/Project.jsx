import project_data from "../data";
import TaskManager from "./TaskManager";

export default function Project({ projectIndex, setDisplayPage }) {
  function handleDelete() {
    project_data.splice(projectIndex, 1);
    setDisplayPage(-2);
  }

  console.log(projectIndex);
  console.log(project_data[projectIndex].tasks);

  return (
    <section className="manage_project">
      <section id="project_brief">
        <div id="handle_project">
          <h1 className="project_title">{project_data[projectIndex].title}</h1>
          <button onClick={handleDelete}>Delete</button>
        </div>
        {console.log(project_data[projectIndex].deadline)}
        {console.log(typeof project_data[projectIndex].deadline)}
        <p id="end_date">{project_data[projectIndex].deadline}</p>
        <p className="description">{project_data[projectIndex].description}</p>
      </section>
      <hr />
      <TaskManager projectIndex={projectIndex} />
    </section>
  );
}
