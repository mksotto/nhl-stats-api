import {FastifyInstance} from "fastify";
import {goalieStatsLeadersCurrentGet} from "../../modules/requests/apiWebNhle/goalieStatsLeadersCurrentGet";
import {skaterStatsLeadersCurrentGet} from "../../modules/requests/apiWebNhle/skaterStatsLeadersCurrentGet";
import {isNhlApiError, NhlApiError} from "../../errors/NhlApiError";
import {makePlayersLeaders} from "../../dtos/makePlayersLeaders";
import {
    goalieStatsLeadersSeasonGameTypeGet
} from "../../modules/requests/apiWebNhle/goalieStatsLeadersSeasonGameTypeGet";
import {
    skaterStatsLeadersSeasonsGameTypeGet
} from "../../modules/requests/apiWebNhle/skaterStatsLeadersSeasonGameTypeGet";


export const playersLeadersGet = (f: FastifyInstance) => {
    f.get<{ Querystring: {season?: number, gameType?: 2 | 3} }>('/leaders', async (req, resp) => {
        try {
            if (req.query.season && req.query.gameType) {
                const leadersGoalies = await goalieStatsLeadersSeasonGameTypeGet(req.query.season, req.query.gameType);
                const leaderSkaters = await skaterStatsLeadersSeasonsGameTypeGet(req.query.season, req.query.gameType);
                return resp.code(200).send(makePlayersLeaders({goalies: leadersGoalies, skaters: leaderSkaters}));
            }
            if (req.query.season && !req.query.gameType || !req.query.season && req.query.gameType) {
                throw new NhlApiError(400, 'Bad request!');
            }
            const leadersGoalies = await goalieStatsLeadersCurrentGet();
            const leaderSkaters = await skaterStatsLeadersCurrentGet();
            return resp.code(200).send(makePlayersLeaders({goalies: leadersGoalies, skaters: leaderSkaters}));
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    })
};