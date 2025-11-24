# NodeJS API HTTP playground

My goal in this playground is to test different frameworks for implementing HTTP APIs in Javascript.

Constraints:

- Follow [KISS](https://en.wikipedia.org/wiki/KISS_principle) and [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) principles.  
  I want to keep code simple and pragmatic, adding complexity only when it's actually needed, not when it might be needed.  
  This means that I'm not looking to follow paradigms like [Clean Code](https://en.wikipedia.org/wiki/Robert_C._Martin#Clean_Code) or [SOLID](https://en.wikipedia.org/wiki/SOLID), for example, I don't want to use the following patterns:
    - [Inversion of Control (IoC)](https://en.wikipedia.org/wiki/Inversion_of_control)
    - [Dependency Injection (DI)](https://en.wikipedia.org/wiki/Dependency_injection)
    - ...
- TypeScript support
- Native JSON Schema validation
- Integrated Swagger/OpenAPI documentation

Frameworks I want to compare:

- [NestJS](https://nestjs.com/) which seems to be the most popular but also overkill in my opinion. I want to test it with an open mind—maybe I'm wrong.
- [Fastify](https://fastify.dev/), with the implementation of:
    - [TypeScript](https://fastify.dev/docs/latest/Reference/TypeScript/)
    - [Validation-and-Serialization](https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/)
    - [`@fastify/swagger-ui`](https://github.com/fastify/fastify-swagger-ui)
    - and maybe [`@fastify/type-provider-typebox`](https://github.com/fastify/fastify-type-provider-typebox)

I'm testing each framework in a subdirectory:

- [`./nestjs/`](./nestjs/) (this playground has not started yet)
- [`./fastify/`](./fastify/) (this playground has not started yet)
