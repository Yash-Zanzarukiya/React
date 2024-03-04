import { useRef } from "react";
import project_data from "../data";

export default function CreateProject({ setDisplayPage }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  function handleDetails(event) {
    event.preventDefault();
    const newProjectData = {
      title: title.current.value,
      description: description.current.value,
      deadline: new Date(deadline.current.value).toLocaleDateString("en-GB"),
      tasks: [],
    };
    project_data.push(newProjectData);
    setDisplayPage(-2);
  }

  function handleCancel() {
    setDisplayPage(-2);
  }

  return (
    <section className="create_project">
      <form className="form" onSubmit={handleDetails}>
        <div className="formbuttons">
          <input type="button" value="Cancel" name="Cancel" onClick={handleCancel} />
          <input type="submit" value="Save" name="Save" />
        </div>

        <label htmlFor="">Title</label>
        <input ref={title} type="text" required />

        <label htmlFor="">Description</label>
        <textarea ref={description} id="des" cols="10" rows="10" required></textarea>

        <label htmlFor="">Due Date</label>
        <input ref={deadline} type="date" required />
      </form>
    </section>
  );
}
