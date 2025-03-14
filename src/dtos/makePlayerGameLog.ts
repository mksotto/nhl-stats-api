import {GameLog} from "../types/domain/nhl-api/playerIdGameLogGet";
import {PlayerGameLog} from "../types/domain/nhl-stats";
import {makePlusMinus, makeSavePctg} from "./utils/utils";
import {isNumber} from './utils/isNumber';

export const makePlayerGameLog = (p: GameLog): PlayerGameLog => ({
    gameDate: p.gameDate,
    teamAbbrev: p.teamAbbrev,
    opponentAbbrev: p.opponentAbbrev,
    goals: p.goals,
    assists: p.assists,
    points: isNumber(p.points) ? p.points : null,
    plusMinus: makePlusMinus(p.plusMinus) || null,
    pim: p.pim,
    powerPlayGoals: isNumber(p.powerPlayGoals) ? p.powerPlayGoals : null,
    powerPlayPoints: isNumber(p.powerPlayPoints) ? p.powerPlayPoints : null,
    shorthandedGoals: isNumber(p.shorthandedGoals) ? p.shorthandedGoals : null,
    shorthandedPoints: isNumber(p.shorthandedPoints) ? p.shorthandedPoints : null,
    gameWinningGoals: isNumber(p.gameWinningGoals) ? p.gameWinningGoals : null,
    otGoals: isNumber(p.otGoals) ? p.otGoals : null,
    shots: isNumber(p.shots) ? p.shots : null,
    shifts: isNumber(p.shifts) ? p.shifts : null,
    toi: p.toi,
    gamesStarted: isNumber(p.gamesStarted) ? p.gamesStarted : null,
    decision: (p.decision as "W" || "L") || null,
    shotsAgainst: isNumber(p.shotsAgainst) ? p.shotsAgainst : null,
    goalsAgainst: isNumber(p.goalsAgainst) ? p.goalsAgainst : null,
    savePctg: makeSavePctg(p.savePctg) || null,
})