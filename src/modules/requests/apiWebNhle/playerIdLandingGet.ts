import {apiWebNhleRequestService} from "./base";
import {PlayerPlayerIdLandingGet} from "../../../types/domain/nhl-api/playerIdLandingGet";

export const playerIdLandingGet = (id: string) => apiWebNhleRequestService<PlayerPlayerIdLandingGet>({
    url: `/player/${id}/landing`,
    method: 'GET',
});