import {Leaders} from "../types/domain/nhl-stats";
import {PlayerStatsLeadersGet} from "../types/domain/nhl-api/playerStatsLeadresGet";
import {makeLeaderPlayer} from "./makeLeaderPlayer";
import {makeRoundValue, makeSavePctg} from "./utils/utils";

type Props = {
    skaters: PlayerStatsLeadersGet,
    goalies: PlayerStatsLeadersGet,
};

export const makePlayersLeaders = ({skaters, goalies}: Props): Leaders => ({
        points: skaters.points.map(makeLeaderPlayer),
        goals: skaters.goals.map(makeLeaderPlayer),
        assists: skaters.assists.map(makeLeaderPlayer),
        shutouts: goalies.shutouts.map(makeLeaderPlayer),
        goalsAgainstAverage: goalies.goalsAgainstAverage.map(goalie => makeLeaderPlayer(goalie, (v: number) => makeRoundValue(v, 2))),
        savePctg: goalies.savePctg.map(goalie => makeLeaderPlayer(goalie, makeSavePctg)),
    })