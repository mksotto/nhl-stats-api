import {FastifyInstance} from "fastify";
import {isNhlApiError, NhlApiError} from "../../errors/NhlApiError";
import {playerIdGameLogNowGet} from "../../modules/requests/apiWebNhle/playerIdGameLogNowGet";
import {playerIdGameLogSeasonGameTypeGet} from "../../modules/requests/apiWebNhle/playerIdGameLogSeasonGameTypeGet";
import {makePlayerIdGameLog} from "../../dtos/makePlayerIdGamesLog";

export const playersIdGamesLogGet = (f: FastifyInstance) => {
    f.get<{ Params: {id: number}, Querystring: {season?: number, gameType?: 2 | 3} }>('/:id/games_log', async (req, resp) => {
        try {
            if (req.query.season && req.query.gameType) {
                const playerGameLog = await playerIdGameLogSeasonGameTypeGet(req.params.id, req.query.season, req.query.gameType);
                return resp.code(200).send(makePlayerIdGameLog(playerGameLog));
            }
            if (req.query.season && !req.query.gameType || !req.query.season && req.query.gameType) {
                throw new NhlApiError(400, 'Bad request!');
            }
            const playerGameLog = await playerIdGameLogNowGet(req.params.id);
            return resp.code(200).send(makePlayerIdGameLog(playerGameLog));
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message)
            }
            return resp.code(500).send('Something went wrong!')
        }
    });
};