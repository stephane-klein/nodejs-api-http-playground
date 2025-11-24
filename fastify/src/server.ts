import Fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

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

interface User {
    id: number;
    firstname: string;
    lastname: string;
}

interface UserParams {
    userId: string;
}

interface UserBody {
    id?: number;
    firstname: string;
    lastname: string;
}

fastify.addHook("onRequest", async (request: FastifyRequest, reply: FastifyReply) => {
    const path = request.url;

    if (!path.endsWith("/") && !path.startsWith("/docs/")) {
        reply.redirect(path + "/", 301);
    }
});

fastify.addHook("onResponse", async (request: FastifyRequest, reply: FastifyReply) => {
    fastify.log.info(`${request.method} ${request.url} - ${Math.round(reply.elapsedTime)}ms`);
});

await fastify.register(fastifySwagger, {
    openapi: {
        openapi: "3.0.0",
        info: {
            title: "API Fastify playground",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        tags: [
            { name: "users" }
        ]
    }
});

await fastify.register(
    fastifySwaggerUi,
    {
        routePrefix: "/docs/",
        uiConfig: {
            docExpansion: "list",
            deepLinking: false
        },
        staticCSP: true
    }
);

fastify.get<{
    Reply: User[]
}>(
    "/users/", 
    {
        schema: {
            response: {
                200: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "integer" },
                            firstname: { type: "string" },
                            lastname: { type: "string" }
                        }
                    }
                }
            }
        }
    },
    async (request: FastifyRequest, _reply: FastifyReply): Promise<User[]> => {
        request.log.info("GET /users/");
        return [
            {
                id: 1,
                firstname: "John",
                lastname: "Doe"
            },
            {
                id: 2,
                firstname: "Alice",
                lastname: "Doe"
            }
        ];
    }
);

fastify.get<{
    Params: UserParams;
    Reply: User;
}>(
    "/users/:userId/",
    {
        schema: {
            response: {
                200: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        firstname: { type: "string" },
                        lastname: { type: "string" }
                    }
                }
            }
        }
    },
    async (request: FastifyRequest<{ Params: UserParams }>, _reply: FastifyReply): Promise<User> => {
        request.log.info({ params: request.params }, "GET /users/:userId");
        return { 
            id: 1,
            firstname: "John",
            lastname: "Doe"
        };
    }
);

fastify.post<{
    Body: UserBody;
    Reply: User;
}>(
    "/users/",
    {
        schema: {
            body: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    firstname: { type: "string" },
                    lastname: { type: "string" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        firstname: { type: "string" },
                        lastname: { type: "string" }
                    }
                }
            }
        }
    },
    async (request: FastifyRequest<{ Body: UserBody }>, _reply: FastifyReply): Promise<User> => {
        request.log.info({ body: request.body }, "POST /users/");
        return {
            id: 2,
            ...request.body
        } as User;
    }
);

fastify.put<{
    Params: UserParams;
    Body: UserBody;
    Reply: User;
}>(
    "/users/:userId/",
    {
        schema: {
            body: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    firstname: { type: "string" },
                    lastname: { type: "string" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        id: { type: "integer" },
                        firstname: { type: "string" },
                        lastname: { type: "string" }
                    }
                }
            }
        }
    },
    async (request: FastifyRequest<{ Params: UserParams; Body: UserBody }>, _reply: FastifyReply): Promise<User> => {
        request.log.info(
            {
                params: request.params,
                body: request.body
            },
            "PUT /users/"
        );
        return {
            id: 2,
            ...request.body
        } as User;
    }
);

try {
    await fastify.listen({ port: 3000 });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
