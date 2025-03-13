import {Player} from "../types/domain/nhl-api/rosterTeamSeason";
import {PlayerRoster} from "../types/domain/nhl-stats";

export const makeRosterPlayer = (p: Player): PlayerRoster => ({
    id: p.id,
    name: p.firstName.default + ' ' + p.lastName.default,
    sweaterNumber: p.sweaterNumber,
    position: p.positionCode,
    headshot: p.headshot,
    height: p.heightInCentimeters,
    weight: p.weightInKilograms,
    shootsCatches: p.shootsCatches,
    birth: {
        date: p.birthDate,
        city: p.birthCity.default,
        province: p.birthStateProvince?.default || null,
        country: p.birthCountry,
    },
});