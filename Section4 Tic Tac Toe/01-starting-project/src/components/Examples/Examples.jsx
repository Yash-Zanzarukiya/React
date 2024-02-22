import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Tabs from "../Tabs/Tabs";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(SelectionName) {
    setSelectedTopic(SelectionName);
  }

  let tabContent = selectedTopic ? <>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </> : <>Please Select a Topic...</>;

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs Wrapper='menu' ButtonContent={<><TabButton isSelected={selectedTopic === 'components'} onSelected={() => handleClick('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelected={() => handleClick('jsx')}>jsx</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelected={() => handleClick('props')}>props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelected={() => handleClick('state')}>state</TabButton>
      </>}>
        <div id="tab-content">{tabContent}</div>
      </Tabs>

    </section>
  );
}