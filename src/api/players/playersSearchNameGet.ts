import {FastifyInstance} from "fastify";
import {searchPlayerGet} from "../../modules/requests/searchD3Nhle/searchPlayerGet";
import {makeSearchedPlayer} from "../../dtos/makeSearchedPlayer";
import {isNhlApiError} from "../../errors/NhlApiError";

export const playersSearchNameGet = (f: FastifyInstance) => {
    f.get<{
        Params: {name: string},
        Querystring: {active?: string}
    }>('/search/:name', async (req, resp) => {
        try {
            const foundedPlayers = await searchPlayerGet(req.params.name, req.query.active === 'true');
            return resp.code(200).send(foundedPlayers.map(makeSearchedPlayer));
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    })
};