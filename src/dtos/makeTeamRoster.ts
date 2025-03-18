import {RosterTeamSeasonGet} from "../types/domain/nhl-api/rosterTeamSeason";
import {PlayersRoster} from "../types/domain/nhl-stats";
import {makeRosterPlayer} from "./makeRosterPlayer";

export const makeTeamRoster = (r: RosterTeamSeasonGet): PlayersRoster => ({
    forwards: r.forwards.map(makeRosterPlayer),
    defensemen: r.defensemen.map(makeRosterPlayer),
    goalies: r.goalies.map(makeRosterPlayer),
});