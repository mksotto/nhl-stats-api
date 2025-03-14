import {apiWebNhleRequestService} from "./base";
import {PlayerStatsLeadersGet} from "../../../types/domain/nhl-api/playerStatsLeadresGet";

export const skaterStatsLeadersSeasonsGameTypeGet = (season: number, gameType: number) => apiWebNhleRequestService<PlayerStatsLeadersGet>({
    url: `/skater-stats-leaders/${season}/${gameType}`,
    method: 'GET',
    params: {
        limit: 10,
    },
});