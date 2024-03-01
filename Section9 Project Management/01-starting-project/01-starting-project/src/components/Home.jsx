import photo from "../assets/no-projects.png";

export default function Home({ setDisplayPage }) {
  return (
    <section id="home">
      <img src={photo} alt="project-image" />
      <h3>No Project Selected</h3>
      <p>Select a Project or get started with new one</p>
      <button onClick={() => setDisplayPage(-1)}>Create new project</button>
    </section>
  );
}
