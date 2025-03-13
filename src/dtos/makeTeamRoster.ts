import {RosterTeamSeasonGet} from "../types/domain/nhl-api/rosterTeamSeason";
import {PlayersRoster} from "../types/domain/nhl-stats";
import {makeRosterPlayer} from "./makeRosterPlayer";

export const makeTeamRoster = (r: RosterTeamSeasonGet): PlayersRoster => ({
    forward: r.forwards.map(makeRosterPlayer),
    defensemen: r.forwards.map(makeRosterPlayer),
    goalies: r.goalies.map(makeRosterPlayer),
});