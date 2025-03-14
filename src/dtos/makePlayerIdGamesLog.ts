import {PlayerIdGameLogGet} from "../types/domain/nhl-api/playerIdGameLogGet";
import {PlayerGamesLog} from "../types/domain/nhl-stats";
import {makePlayerGameLog} from "./makePlayerGameLog";

export const makePlayerIdGameLog = (p: PlayerIdGameLogGet): PlayerGamesLog => ({
    seasonId: p.seasonId,
    gameTypeId: p.gameTypeId as 2 | 3,
    playerStatsSeason: p.playerStatsSeasons.map(({season, gameTypes}) => ({
        season: season as 2 | 3,
        gameTypes: gameTypes.map((gameType) => gameType as 2 | 3),
    })),
    gamesLog: p.gameLog?.map(makePlayerGameLog),
});