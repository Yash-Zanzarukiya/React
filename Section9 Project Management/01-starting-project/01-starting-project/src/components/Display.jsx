import { useState } from "react";
import CreateProject from "./CreateProject";
import Project from "./Project";
import Home from "./home";
import Sidebar from "./Sidebar";

export default function Display({}) {
  const [component, setComponent] = useState(-2);

  function setDisplayPage(component) {
    setComponent(component);
  }

  return (
    <>
      <Sidebar />
      <main id="display">
        {component === -2 && <Home setDisplayPage={setDisplayPage} />}
        {component === -1 && <CreateProject setDisplayPage={setDisplayPage} />}
        {component >= 0 && <Project displayProject={component} />}
      </main>
    </>
  );
}
