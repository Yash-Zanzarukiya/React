import { useState } from "react";
import CreateProject from "./CreateProject";
import Project from "./Project";
import Home from "./Home";
import Sidebar from "./Sidebar";

export default function Display({}) {
  const [component, setComponent] = useState(-2);

  function setDisplayPage(component) {
    setComponent(component);
  }

  return (
    <>
      <Sidebar setDisplayPage={setDisplayPage} projectIndex={component}/>
      <main id="display">
        {component === -2 && <Home setDisplayPage={setDisplayPage} />}
        {component === -1 && <CreateProject setDisplayPage={setDisplayPage} />}
        {component >= 0 && <Project setDisplayPage={setDisplayPage} projectIndex={component} />}
      </main>
    </>
  );
}
