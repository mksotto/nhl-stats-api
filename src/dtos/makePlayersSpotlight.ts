import {PlayerSpotlightGet} from "../types/domain/nhl-api/playerSpotlightGet";
import {makeSpotlightPlayer} from "./makeSpotlightPlayer";

export const makePlayersSpotlightPlayer = (players: PlayerSpotlightGet[]) => players
    .sort((a, b) => {
        if (a.sortId < b.sortId) {
            return -1;
        }
        if (a.sortId > b.sortId) {
            return 1;
        }
        return 0;
    })
    .map(makeSpotlightPlayer);