import {searchD3Nhle} from "./base";
import {SearchPlayerGet} from "../../../types/domain/nhl-api/searchPlayerGet";

export const searchPlayerGet = (name: string, active: boolean) => searchD3Nhle<SearchPlayerGet[]>({
    url: '/search/player',
    method: 'GET',
    params: {
        culture: 'en-us',
        limit: 1000,
        q: name,
        ...(active ? { active } : {}),
    }
})