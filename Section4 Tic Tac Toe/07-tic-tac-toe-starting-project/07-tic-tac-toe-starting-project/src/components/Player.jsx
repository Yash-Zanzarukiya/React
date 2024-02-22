import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeNames }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let showContent = <span className="player-name">{playerName}</span>

  if (isEditing) {
    showContent = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  function handleEditClick() {
    setIsEditing((editValue) => !editValue);
    if (isEditing)
      onChangeNames(symbol, playerName)
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value.toUpperCase());
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {showContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}