import project_data from "../data";

export default function Sidebar({openProject}) {
  function handleClick() {

  }

  function handleAddProject() {
    
  }

  return (
    <aside id="sidebar">
      <div className="side_project">
        <h3>YOUR PROJECTS</h3>
        <button onClick={handleAddProject}> + Add Project</button>
      </div>
      <main className="projects">
        <ol id="project_list">
          {project_data.map((project,index) => (
            <li className="project">
              <button key={project.title} name={index} onClick={handleClick}>{project.title}</button>
            </li>
          ))}
        </ol>
      </main>
    </aside>
  );
}
