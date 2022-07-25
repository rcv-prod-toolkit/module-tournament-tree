import type { Team } from './Team'

export interface Match {
  matchId: number
  teams: {
    blueTeam: Team
    redTeam: Team
  }
  bestOf: number
  current_match: boolean
}
