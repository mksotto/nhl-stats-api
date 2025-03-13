import {LeaderPlayer} from "../types/domain/nhl-api/base";
import {isFunction} from "./utils/isFunction";

export const makeLeaderPlayer = (player: LeaderPlayer, fn?: ((value: number) => string) | unknown) => ({
    id: player.id,
    name: player.firstName.default + ' ' + player.lastName.default,
    sweaterNumber: player.sweaterNumber,
    position: player.position,
    headshot: player.headshot,
    currentTeam: {
        abbrev: player.teamAbbrev,
        logo: player.teamLogo,
        name: player.teamName.default
    },
    value: (isFunction(fn) ? fn : String)(player.value),
});