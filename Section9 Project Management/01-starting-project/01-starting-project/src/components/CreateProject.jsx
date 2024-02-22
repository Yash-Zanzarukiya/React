import { useRef } from "react";
import project_data from "../data";

export default function CreateProject() {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  function handleDetails(event) {
    event.preventDefault();
    const newProjectData = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
    };
    project_data.push(newProjectData);
  }

  return (
    <section className="create_project">
      <form className="form" onSubmit={handleDetails}>
        <div className="formbuttons">
          <input type="button" value="Cancel" name="Cancel" />
          <input type="submit" value="Save" name="Save"/>
        </div>

        <label htmlFor="">Title</label>
        <input ref={title} type="text" />

        <label htmlFor="">Description</label>
        <textarea ref={description} id="des" cols="10" rows="10"></textarea>

        <label htmlFor="">Due Date</label>
        <input ref={deadline} type="date" />
      </form>
    </section>
  );
}
