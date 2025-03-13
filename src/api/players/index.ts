import {FastifyPluginCallback} from "fastify";
import {playersIdGet} from "./playersIdGet";
import {playersSpotlightGet} from "./playersSpotlightGet";
import {playersLeadersGet} from "./playersLeadersGet";
import {playersSearchNameGet} from "./playersSearchNameGet";


export const playersHandler: FastifyPluginCallback = (
    fastify,
    _,
    done
) => {
    // GET /players/:id
    playersIdGet(fastify);

    // GET /players/spotlight
    playersSpotlightGet(fastify);

    // GET /players/leaders
    playersLeadersGet(fastify);

    // GET /players/search/:name
    playersSearchNameGet(fastify);

    done();
};