import './PlayerCard.css'

// Displays a single player's stats as a card
export default function PlayerCard({ player }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="pos-badge">{player.pos}</span>
        <span className="nation">{player.nation}</span>
      </div>
      <h3 className="name">{player.name}</h3>
      <p className="team">{player.team}</p>
      <div className="stats">
        <Stat label="Goals" value={player.gls ?? 0} />
        <Stat label="Assists" value={player.ast ?? 0} />
        <Stat label="xG" value={player.xg ?? 0} />
        <Stat label="xAG" value={player.xag ?? 0} />
        <Stat label="Apps" value={player.mp ?? 0} />
        <Stat label="Mins" value={player.min ?? 0} />
      </div>
    </div>
  )
}

// Renders a single stat label/value pair
function Stat({ label, value }) {
  return (
    <div className="stat">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
