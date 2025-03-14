import {apiWebNhleRequestService} from "./base";
import {PlayerStatsLeadersGet} from "../../../types/domain/nhl-api/playerStatsLeadresGet";

export const goalieStatsLeadersSeasonGameTypeGet = (season: number, gameType: number) => apiWebNhleRequestService<PlayerStatsLeadersGet>({
    url: `/goalie-stats-leaders/${season}/${gameType}`,
    method: 'GET',
    params: {
        limit: 10,
    },
});