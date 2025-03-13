import {FastifyInstance} from "fastify";
import {rosterSeasonTeamGet} from "../../modules/requests/apiWebNhle/rosterSeasonTeamGet";
import {isNhlApiError} from "../../errors/NhlApiError";
import {TeamSeasons} from "../../types/domain/nhl-stats";

export const teamsAbbrevSeasonsGet = (f: FastifyInstance) => {
    f.get<{ Params: {abbrev: string} }>('/:abbrev/seasons', async (req, resp) => {
        const {abbrev} = req.params
        try {
            const seasons = await rosterSeasonTeamGet(abbrev.toLowerCase());
            return resp.code(200).send(seasons satisfies TeamSeasons);
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    });
};