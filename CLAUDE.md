# Rules to Follow: 
After adding a function write a simple one senetnce comment above it explaining what it does.

# prem-zone

Spring Boot REST API for Premier League player statistics.

## Stack
- Java 25, Spring Boot 4, Spring Data JPA, Hibernate
- PostgreSQL (local dev) / Supabase (production)
- Maven

## Running locally

Set environment variables (see `.env.example`), then:
```bash
./mvnw spring-boot:run
```

App starts on `http://localhost:8080`.

## API endpoints

Base path: `api/v1/player`

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/player` | List all players |
| GET | `/api/v1/player?team=Arsenal` | Filter by team |
| GET | `/api/v1/player?name=Saka` | Search by name (partial match) |
| GET | `/api/v1/player?position=FW` | Filter by position |
| GET | `/api/v1/player?nation=ENG` | Filter by nation |
| GET | `/api/v1/player?team=Arsenal&position=FW` | Filter by team + position |
| POST | `/api/v1/player` | Add a player (JSON body) |
| PUT | `/api/v1/player` | Update a player (JSON body, match by name) |
| DELETE | `/api/v1/player/{playerName}` | Delete a player by name |

## Project structure

```
src/main/java/com/pl/prem_zone/
  PremZoneApplication.java       # Entry point
  player/
    Player.java                  # JPA entity → player_stats table
    PlayerRepo.java              # Spring Data JPA repository
    PlayerService.java           # Business logic / filtering
    PlayerController.java        # REST controller
src/main/resources/
  application.properties         # Config (DB url/credentials from env vars)
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Full JDBC URL, e.g. `jdbc:postgresql://localhost:5432/pl_data` |
| `DB_USER` | Postgres username |
| `DB_PASSWORD` | Postgres password |
| `PORT` | Server port (default 8080, set automatically by Railway) |

## Deployment targets
- **DB:** Supabase (managed Postgres)
- **Backend:** Railway (auto-detects Maven, inject env vars in dashboard)
- **Frontend:** Vercel (React/Vite, to be added)

## Phase 0 checklist (pre-deploy)
- [x] Credentials moved to env vars
- [x] CORS configured for frontend origin
- [ ] Pushed to dedicated GitHub repo
- [ ] Local run verified against Supabase DB
