# NestJS API HTTP playground

What has been implemented:

- [ ] TypeScript support
- [ ] Input / Output schema validation based en TypeScript types
- [ ] Swagger support

## Getting started

```console
$ mise install
$ pnpm install
$ pnpm start
[Nest] 101454  - 25/11/2025 11:12:38     LOG [NestFactory] Starting Nest application...
[Nest] 101454  - 25/11/2025 11:12:38     LOG [InstanceLoader] AppModule dependencies initialized +7ms
[Nest] 101454  - 25/11/2025 11:12:38     LOG [RoutesResolver] AppController {/}: +3ms
[Nest] 101454  - 25/11/2025 11:12:38     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 101454  - 25/11/2025 11:12:38     LOG [NestApplication] Nest application successfully started +1ms
```

## How I have created the project?

```
$ pnpm dlx @nestjs/cli new .
✔ Which package manager would you ❤️  to use? pnpm
(node:77886) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
CREATE .prettierrc (52 bytes)
CREATE README.md (5036 bytes)
CREATE eslint.config.mjs (899 bytes)
CREATE nest-cli.json (171 bytes)
CREATE package.json (1977 bytes)
CREATE tsconfig.build.json (97 bytes)
CREATE tsconfig.json (677 bytes)
CREATE src/app.controller.ts (274 bytes)
CREATE src/app.module.ts (249 bytes)
CREATE src/app.service.ts (142 bytes)
CREATE src/main.ts (228 bytes)
CREATE src/app.controller.spec.ts (617 bytes)
CREATE test/jest-e2e.json (183 bytes)
CREATE test/app.e2e-spec.ts (669 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project foobar
👉  Get started with the following commands:

$ cd foobar
$ pnpm run start
```
