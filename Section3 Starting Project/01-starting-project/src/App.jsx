import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  console.log("App Rendered...");

  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(SelectionName) {
    setSelectedTopic(SelectionName);
  }

  let tabContent = <div id="tab-content">Please Select a Topic...</div>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelected={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelected={() => handleClick("jsx")}>
              jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelected={() => handleClick("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelected={() => handleClick("state")}
            >
              state
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
