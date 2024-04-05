import { useState } from "react"

export default function Player({name, symbol, isActive, onNameChange}) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        setIsEditing((editing) => !editing); 

        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span id="player">
              {!isEditing?<span className="player-name">{playerName}</span> : <input type="text" value={playerName} required onChange={handleNameChange}/>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}