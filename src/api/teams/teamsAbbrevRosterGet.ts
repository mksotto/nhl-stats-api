import {FastifyInstance} from "fastify";
import {rosterTeamSeason} from "../../modules/requests/apiWebNhle/rosterTeamSeason";
import {isNhlApiError} from "../../errors/NhlApiError";
import {makeTeamRoster} from "../../dtos/makeTeamRoster";

export const teamsAbbrevRosterGet = (f: FastifyInstance) => {
    f.get<{ Params: {abbrev: string, season: number} }>('/:abbrev/roster/:season', async (req, resp) => {
        try {
            const roster= await rosterTeamSeason(req.params.abbrev, req.params.season);
            return resp.code(200).send(makeTeamRoster(roster));
        } catch (e) {
            if (isNhlApiError(e)) {
                return resp.code(e.code).send(e.message);
            }
            return resp.code(500).send('Something went wrong!');
        }
    })
}