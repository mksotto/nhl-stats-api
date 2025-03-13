export class NhlApiError extends Error {
    type = "NhlApiError";
    code = 0;
    message = '';

    constructor(code: number, message: string) {
        super();
        this.code = code;
        this.message = message;
    };
}

export const isNhlApiError = (e: unknown): e is NhlApiError => (e as NhlApiError).type === 'NhlApiError';