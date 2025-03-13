export const makeRoundValue = (value: number | undefined, afterDecimal: number) =>
    (typeof (value) === "number" ? (Math.round(value! * 100) / 100).toFixed(afterDecimal) : undefined);

export const makeSavePctg = (value: number | undefined) =>
    (typeof (value) === "number" ? value.toFixed(3).replace(/^0\./, '.') : undefined);

export const makePlusMinus = (value: number | undefined) => {
    if (typeof (value) === "number") {
        if (value > 0) {
            return `+${value}`;
        } else {
            return String(value);
        }
    }
    return undefined;
};

export const makeSeasonString = (value: number) =>
    (`${String(value).substring(0, 4)}-${String(value).substring(6)}`);