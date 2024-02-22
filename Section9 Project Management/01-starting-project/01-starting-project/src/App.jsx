import Sidebar from "./components/Sidebar";

import Display from "./components/Display"
import { useState } from "react";

function App() {
  const [project, setProject] = useState(null);
  return (
    <>
      <Sidebar />
      <Display />
    </>
  );
}

export default App;
