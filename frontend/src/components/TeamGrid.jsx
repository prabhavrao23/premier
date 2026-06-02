import './TeamGrid.css'

const TEAMS = [
  { name: 'Arsenal', logo: 'Arsenal.png' },
  { name: 'Aston-Villa', logo: 'AstonVilla.png' },
  { name: 'Bournemouth', logo: 'Bournemouth.png' },
  { name: 'Brentford', logo: 'Brentford.png' },
  { name: 'Brighton-and-Hove-Albion', logo: 'Brighton.png' },
  { name: 'Chelsea', logo: 'Chelsea.png' },
  { name: 'Crystal-Palace', logo: 'CrystalPalace.png' },
  { name: 'Everton', logo: 'Everton.png' },
  { name: 'Fulham', logo: 'Fulham.png' },
  { name: 'Leeds-United', logo: 'LeedsUnited.png' },
  { name: 'Leicester-City', logo: 'LeicesterCity.png' },
  { name: 'Liverpool', logo: 'Liverpool.png' },
  { name: 'Manchester-City', logo: 'ManchesterCity.png' },
  { name: 'Manchester-United', logo: 'ManchesterUnited.png' },
  { name: 'Newcastle-United', logo: 'Newcastle.png' },
  { name: 'Nottingham-Forest', logo: 'NottinghamForest.png' },
  { name: 'Southampton', logo: 'Southampton.png' },
  { name: 'Tottenham-Hotspur', logo: 'Tottenham.png' },
  { name: 'West-Ham-United', logo: 'WestHam.png' },
  { name: 'Wolverhampton-Wanderers', logo: 'Wolves.png' },
]

// Displays a clickable grid of all 20 Premier League clubs
export default function TeamGrid({ onSelect }) {
  return (
    <div className="team-grid">
      {TEAMS.map(t => (
        <button key={t.name} className="team-card" onClick={() => onSelect(t.name)}>
          <img src={`/team_images/${t.logo}`} alt={t.name} className="team-logo" />
          <span className="team-name">{t.name.replace(/-/g, ' ')}</span>
        </button>
      ))}
    </div>
  )
}
