import {SearchPlayerGet} from "../types/domain/nhl-api/searchPlayerGet";
import {SearchPlayer} from "../types/domain/nhl-stats";

export const makeSearchedPlayer = (p: SearchPlayerGet): SearchPlayer => ({
    id: Number(p.playerId),
    name: p.name,
    sweaterNumber: p.sweaterNumber,
    position: p.positionCode,
    headshot: `https://assets.nhle.com/mugs/nhl/latest/${p.playerId}.png`,
    currentTeam: p.teamId ? {
        id: Number(p.teamId),
        abbrev: p.teamAbbrev,
        logo: p.teamAbbrev && `https://assets.nhle.com/logos/nhl/svg/${p.teamAbbrev}_light.svg`,
    } : null,
    lastTeam: p.lastTeamId ? {
        id: Number(p.lastTeamId),
        abbrev: p.lastTeamAbbrev,
        logo: p.lastTeamAbbrev && `https://assets.nhle.com/logos/nhl/svg/${p.lastTeamAbbrev}_light.svg`
    } : null,
})