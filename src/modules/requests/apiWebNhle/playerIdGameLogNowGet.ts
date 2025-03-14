import {apiWebNhleRequestService} from "./base";
import {PlayerIdGameLogGet} from "../../../types/domain/nhl-api/playerIdGameLogGet";

export const playerIdGameLogNowGet = (id: number) => apiWebNhleRequestService<PlayerIdGameLogGet>({
    url: `/player/${id}/game-log/now`,
    method: 'GET',
});