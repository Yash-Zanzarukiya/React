import project_data from "../data";

export default function Sidebar({ setDisplayPage, projectIndex }) {
  return (
    <aside id="sidebar">
      <div className="side_project">
        <h3>YOUR PROJECTS</h3>
        <button onClick={(eventObj) => setDisplayPage(-1)}> + Add Project</button>
      </div>
      <main className="projects">
        <ol id="project_list">
          {project_data.map((project, index) => (
            <li className={`project`}>
              <button
                className={projectIndex === index ? "active" : ""}
                key={project.title + index}
                onClick={(eventObj) => {
                  setDisplayPage(index);
                }}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ol>
      </main>
    </aside>
  );
}
