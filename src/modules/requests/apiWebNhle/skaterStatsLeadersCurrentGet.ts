import {apiWebNhleRequestService} from "./base";
import {PlayerStatsLeadersGet} from "../../../types/domain/nhl-api/playerStatsLeadresGet";

export const skaterStatsLeadersCurrentGet = () => apiWebNhleRequestService<PlayerStatsLeadersGet>({
    url: '/skater-stats-leaders/current',
    method: 'GET',
    params: {
        limit: 10,
    },
});