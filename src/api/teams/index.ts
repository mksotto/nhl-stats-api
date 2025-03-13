import {FastifyPluginCallback} from "fastify";
import {teamsAbbrevRosterGet} from "./teamsAbbrevRosterGet";
import {teamsAbbrevSeasonsGet} from "./teamsAbbrevSeasonsGet";


export const teamsHandler: FastifyPluginCallback = (
    fastify,
    _,
    done,
) => {
    // GET /teams/:abbrev/roster/:season
    teamsAbbrevRosterGet(fastify);

    // GET /teams/:abbrev/seasons
    teamsAbbrevSeasonsGet(fastify)

    done();
};