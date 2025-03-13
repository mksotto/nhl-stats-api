import {ContentEnUsPlayersGet} from "../../../types/domain/nhl-api/contentEnUsPlayersGet";
import {forgeDapiD3NhleRequestService} from "./base";

export const contentEnUsPlayersGet = (id: string) => forgeDapiD3NhleRequestService<ContentEnUsPlayersGet>({
    url: `/content/en-us/players`,
    method: 'GET',
    params: {
        'tags.slug': `playerid-${id}`,
    }
})