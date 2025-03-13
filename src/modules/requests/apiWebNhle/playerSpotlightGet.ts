import {apiWebNhleRequestService} from "./base";
import {PlayerSpotlightGet} from "../../../types/domain/nhl-api/playerSpotlightGet";

export const playerSpotlightGet = () => apiWebNhleRequestService<PlayerSpotlightGet[]>({
    url: '/player-spotlight',
    method: 'GET',
});