import {NhlApiError} from "../errors/NhlApiError";

type BaseRequestParams = {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    params?: Record<string, string | number | boolean>;
};

const isEmpty = (value?: Record<any, any>) => !value || Object.keys(value).length === 0;

export const makeRequestService = (baseUrl: string) => {
    return <T>({
       url,
       method,
       params
    }: BaseRequestParams): Promise<T> => {
        return fetch(`${baseUrl}${url}${!isEmpty(params) ? `?${new URLSearchParams(params as any)}` : ''}`, {
            method
        }).then(r => {
            if (!r.ok) throw new NhlApiError(r.status, r.statusText);
            return r.json();
        })
    };
};