# Fastify API HTTP playground

```console
$ mise install
$ pnpm install
$ pnpm start
[22:15:11] INFO: Server listening at http://[::1]:3000
[22:15:11] INFO: Server listening at http://127.0.0.1:3000
```

In another terminal, execute:

```console
$ curl http://localhost:3000
{"hello":"world"}
```

Open <http://localhost:3000/docs> Swagger documentation in your browser.

## Build application server for production

```console
$ pnpm run build
$ pnpm run serve
[22:15:11] INFO: Server listening at http://[::1]:3000
[22:15:11] INFO: Server listening at http://127.0.0.1:3000
```

