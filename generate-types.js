const {generateApi} = require("swagger-typescript-api");
const path = require("node:path");

const PATH = path.resolve(process.cwd(), "./src/types/domain");
const INPUT = path.resolve(process.cwd(), './openapi.yaml');

void generateApi({
    name: 'nhl-stats',
    input: INPUT,
    output: PATH,
    generateClient: false,
    generateUnionEnums: true,
    primitiveTypeConstructs: (struct) => ({
        string: {
            "date": "Date",
            "date-time": "Date",
        }
    })
})