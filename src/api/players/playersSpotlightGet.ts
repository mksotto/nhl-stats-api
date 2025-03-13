import {FastifyInstance} from "fastify";
import {playerSpotlightGet} from "../../modules/requests/apiWebNhle/playerSpotlightGet";
import {isNhlApiError} from "../../errors/NhlApiError";
import {makePlayersSpotlightPlayer} from "../../dtos/makePlayersSpotlight";


export const playersSpotlightGet = (f: FastifyInstance) => {
    f.get('/spotlight', async (_req, resp) => {
        try {
            const playersSpotlight = await playerSpotlightGet();
            return resp.code(200).send(makePlayersSpotlightPlayer(playersSpotlight)); // todo
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    });
};