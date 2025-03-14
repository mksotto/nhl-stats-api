import {apiWebNhleRequestService} from "./base";
import {PlayerIdGameLogGet} from "../../../types/domain/nhl-api/playerIdGameLogGet";

export const playerIdGameLogSeasonGameTypeGet = (
    id: number,
    season: number,
    gameType: number
) => apiWebNhleRequestService<PlayerIdGameLogGet>({
    url: `/player/${id}/game-log/${season}/${gameType}`,
    method: 'GET',
});