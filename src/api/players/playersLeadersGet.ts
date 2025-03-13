import {FastifyInstance} from "fastify";
import {goalieStatsLeadersCurrentGet} from "../../modules/requests/apiWebNhle/goalieStatsLeadersCurrentGet";
import {skaterStatsLeadersCurrentGet} from "../../modules/requests/apiWebNhle/skaterStatsLeadersCurrentGet";
import {isNhlApiError} from "../../errors/NhlApiError";
import {makePlayersLeaders} from "../../dtos/makePlayersLeaders";


export const playersLeadersGet = (f: FastifyInstance) => {
    f.get('/leaders', async (req, resp) => {
        try {
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