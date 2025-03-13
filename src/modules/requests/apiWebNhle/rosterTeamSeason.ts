import {RosterTeamSeasonGet} from "../../../types/domain/nhl-api/rosterTeamSeason";
import {apiWebNhleRequestService} from "./base";

export const rosterTeamSeason = (team: string, season: number) => apiWebNhleRequestService<RosterTeamSeasonGet>({
    url: `/roster/${team}/${season}`,
    method: 'GET',
});