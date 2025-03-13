import {PlayerSpotlightGet} from "../types/domain/nhl-api/playerSpotlightGet";
import {Player} from "../types/domain/nhl-stats";

export const makeSpotlightPlayer = (p: PlayerSpotlightGet): Player  => ({
    id: p.playerId,
    name: p.name.default,
    sweaterNumber: p.sweaterNumber,
    position: p.position,
    headshot: p.headshot,
    currentTeam: {
        id: p.teamId,
        abbrev: p.teamTriCode,
        logo: p.teamLogo,
    },
});