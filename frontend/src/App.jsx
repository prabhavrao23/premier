import { useState, useEffect } from 'react'
import PlayerCard from './components/PlayerCard'
import Filters from './components/Filters'
import TeamGrid from './components/TeamGrid'
import { resolveNation } from './utils/nationMap'
import './App.css'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export default function App() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [filters, setFilters] = useState({ name: '', position: '', nation: '' })

  useEffect(() => {
    if (!selectedTeam) return
    fetchPlayers(selectedTeam, filters)
  }, [selectedTeam, filters])

  async function fetchPlayers(team, f) {
    setLoading(true)
    const params = new URLSearchParams()
    params.set('team', team)
    if (f.name) params.set('name', f.name)
    if (f.position) params.set('position', f.position)
    if (f.nation) params.set('nation', resolveNation(f.nation))

    const res = await fetch(`${API_BASE}/api/v1/player?${params}`)
    const data = await res.json()
    setPlayers(data)
    setLoading(false)
  }

  function handleTeamSelect(team) {
    setFilters({ name: '', position: '', nation: '' })
    setSelectedTeam(team)
  }

  function handleBack() {
    setSelectedTeam(null)
    setPlayers([])
    setFilters({ name: '', position: '', nation: '' })
  }

  if (!selectedTeam) {
    return (
      <div className="app">
        <header className="header">
          <h1>⚽ Premier League Stats</h1>
          <p className="subtitle">Select a team to view players</p>
        </header>
        <TeamGrid onSelect={handleTeamSelect} />
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <button className="back-btn" onClick={handleBack}>← All Teams</button>
        <h1>{selectedTeam.replace(/-/g, ' ')}</h1>
        <p className="subtitle">{players.length} players</p>
      </header>
      <Filters filters={filters} onChange={setFilters} hideTeam />
      {loading ? (
        <div className="status">Loading...</div>
      ) : players.length === 0 ? (
        <div className="status">No players found.</div>
      ) : (
        <div className="grid">
          {players.map(p => <PlayerCard key={p.name} player={p} />)}
        </div>
      )}
    </div>
  )
}
