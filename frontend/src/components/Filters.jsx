import { useState } from 'react'
import './Filters.css'

// Search and filter bar for name, team, position, and nation
export default function Filters({ filters, onChange, hideTeam }) {
  const [local, setLocal] = useState(filters)

  function handleChange(e) {
    const updated = { ...local, [e.target.name]: e.target.value }
    setLocal(updated)
    onChange(updated)
  }

  function handleReset() {
    const cleared = { name: '', team: '', position: '', nation: '' }
    setLocal(cleared)
    onChange(cleared)
  }

  return (
    <div className="filters">
      <input
        className="filter-input"
        type="text"
        name="name"
        placeholder="Search player..."
        value={local.name}
        onChange={handleChange}
      />
      {!hideTeam && (
        <input
          className="filter-input"
          type="text"
          name="team"
          placeholder="Team (e.g. Arsenal)"
          value={local.team}
          onChange={handleChange}
        />
      )}
      <select className="filter-input" name="position" value={local.position} onChange={handleChange}>
        <option value="">All positions</option>
        <option value="GK">GK</option>
        <option value="DF">DF</option>
        <option value="MF">MF</option>
        <option value="FW">FW</option>
      </select>
      <input
        className="filter-input"
        type="text"
        name="nation"
        placeholder="Nation (e.g. ENG)"
        value={local.nation}
        onChange={handleChange}
      />
      <button className="reset-btn" onClick={handleReset}>Reset</button>
    </div>
  )
}
