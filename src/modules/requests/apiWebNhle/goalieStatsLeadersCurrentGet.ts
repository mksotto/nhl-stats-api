import {apiWebNhleRequestService} from "./base";
import {PlayerStatsLeadersGet} from "../../../types/domain/nhl-api/playerStatsLeadresGet";

export const goalieStatsLeadersCurrentGet = () => apiWebNhleRequestService<PlayerStatsLeadersGet>({
    url: '/goalie-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    },
});