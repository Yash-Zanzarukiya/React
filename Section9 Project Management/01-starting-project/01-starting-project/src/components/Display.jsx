import { useState } from "react";
import CreateProject from "./CreateProject";
import Project from "./Project";
import Home from "./home";

export default function Display({}) {
  const [component, setComponent] = useState();
  
  return (
    <main id="display">
      <Home />
      <CreateProject />
      <Project />
    </main>
  );
}
