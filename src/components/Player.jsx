import { useState } from "react"

export default function Player({name, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span id="player">
              {!isEditing?<span className="player-name">{playerName}</span> : <input type="text" value={playerName} required onChange={handleNameChange}/>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((editing) => !editing )}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}