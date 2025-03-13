import {apiWebNhleRequestService} from "./base";


export const rosterSeasonTeamGet = (team: string) => apiWebNhleRequestService<number[]>({
    url: `/roster-season/${team}`,
    method: 'GET',
});