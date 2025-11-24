import Fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";

const UserSchema = Type.Object({
    id: Type.Integer(),
    firstname: Type.String(),
    lastname: Type.String()
});

const UserParamsSchema = Type.Object({
    userId: Type.String()
});

const UserBodySchema = Type.Object({
    id: Type.Optional(Type.Integer()),
    firstname: Type.String(),
    lastname: Type.String()
});

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
}).withTypeProvider<TypeBoxTypeProvider>();

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

// GET /users/ - Liste tous les utilisateurs
fastify.get(
    "/users/", 
    {
        schema: {
            response: {
                200: Type.Array(UserSchema)
            }
        }
    },
    async (request, _reply) => {
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

// GET /users/:userId/ - Récupère un utilisateur par ID
fastify.get(
    "/users/:userId/",
    {
        schema: {
            params: UserParamsSchema,
            response: {
                200: UserSchema
            }
        }
    },
    async (request, _reply) => {
        request.log.info({ params: request.params }, "GET /users/:userId");
        return { 
            id: 1,
            firstname: "John",
            lastname: "Doe"
        };
    }
);

fastify.post(
    "/users/",
    {
        schema: {
            body: UserBodySchema,
            response: {
                200: UserSchema
            }
        }
    },
    async (request, _reply) => {
        request.log.info({ body: request.body }, "POST /users/");
        return {
            id: 1,
            firstname: request.body.firstname,
            lastname: request.body.lastname
        };
    }
);

fastify.put(
    "/users/:userId/",
    {
        schema: {
            params: UserParamsSchema,
            body: UserBodySchema,
            response: {
                200: UserSchema
            }
        }
    },
    async (request, _reply) => {
        request.log.info(
            {
                params: request.params,
                body: request.body
            },
            "PUT /users/"
        );
        return {
            id: 1,
            firstname: request.body.firstname,
            lastname: request.body.lastname
        };
    }
);

try {
    await fastify.listen({ port: 3000 });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
