import {FastifyInstance} from "fastify";
import {playerIdLandingGet} from "../../modules/requests/apiWebNhle/playerIdLandingGet";
import {contentEnUsPlayersGet} from "../../modules/requests/forgeDapiD3Nhle/contentEnUsPlayersGet";
import {makePlayersId} from "../../dtos/makePlayersId";
import {isNhlApiError} from "../../errors/NhlApiError";

export const playersIdGet = (f: FastifyInstance) => {
    f.get<{ Params: {id: string} }>('/:id', async (req, resp) => {
        const {id} = req.params;
        try {
            const player = await playerIdLandingGet(id);
            const description = await contentEnUsPlayersGet(id);
            return resp.code(200).send(makePlayersId(player, description));
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    });
};