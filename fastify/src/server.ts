import Fastify from "fastify";

const fastify = Fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname,reqId",
                messageFormat: "{msg}",
                singleLine: true,
                colorize: true
            }
        }
    },
    disableRequestLogging: true
});

fastify.addHook("onResponse", (request, reply) => {
    fastify.log.info(`${request.method} ${request.url} - ${Math.round(reply.elapsedTime)}ms`);
});

fastify.get("/users/", async (request, _reply) => {
    request.log.info("GET /users/");
    return { hello: "world" };
});

fastify.get("/users/:userId", async (request, _reply) => {
    request.log.info({ params: request.params }, "GET /users/:userId");
    return { hello: "world" };
});

fastify.post("/users/", async (request, _reply) => {
    request.log.info("POST /users/");
    return { hello: "world" };
});

fastify.put("/users/:userId", async (request, _reply) => {
    request.log.info("PUT /users/:userId");
    return { hello: "world" };
});

try {
    await fastify.listen({ port: 3000 });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
