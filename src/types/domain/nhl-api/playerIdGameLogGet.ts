import { Name } from "./base";

export interface PlayerIdGameLogGet {
    seasonId:           number;
    gameTypeId:         number;
    playerStatsSeasons: PlayerStatsSeason[];
    gameLog?:            GameLog[];
}

export interface PlayerStatsSeason {
    season:    number;
    gameTypes: number[];
}

export interface GameLog {
    gameId:             number;
    teamAbbrev:         string;
    homeRoadFlag:       string;
    gameDate:           string;
    goals:              number;
    assists:            number;
    commonName:         Name;
    opponentCommonName: Name;
    points:             number;
    plusMinus:          number;
    powerPlayGoals:     number;
    powerPlayPoints:    number;
    gameWinningGoals:   number;
    otGoals:            number;
    shots:              number;
    shifts:             number;
    shorthandedGoals:   number;
    shorthandedPoints:  number;
    pim:                number;
    toi:                string;
    opponentAbbrev:     string;
    gamesStarted:       number;
    decision:           string;
    shotsAgainst:       number;
    goalsAgainst:       number;
    savePctg:           number;
}