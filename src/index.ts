import fastify from "fastify";
import {playersHandler} from "./api/players";
import {teamsHandler} from "./api/teams";

const f = fastify({logger: true});

f.register(playersHandler, {prefix: 'players'});
f.register(teamsHandler, {prefix: 'teams'});

void f.listen({
    port: 8080
});

process.once('SIGINT', () => { void f.close() });
process.once('SIGTERM', () => { void f.close() });