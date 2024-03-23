export default function Player({name, symbol}) {
    return (
        <li>
            <span id="player">
              <span className="player-name">{name}</span>
              <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}