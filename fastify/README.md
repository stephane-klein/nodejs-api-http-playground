# Fastify API HTTP playground

```console
$ mise install
$ pnpm install
$ pnpm start
{"level":30,"time":1764007033876,"pid":570551,"hostname":"t14s","msg":"Server listening at http://[::1]:3000"}
{"level":30,"time":1764007033877,"pid":570551,"hostname":"t14s","msg":"Server listening at http://127.0.0.1:3000"}
```

In another terminal, execute:

```console
$ curl http://localhost:3000
{"hello":"world"}
```

## Build application server for production

```console
$ pnpm run build
$ pnpm run serve
{"level":30,"time":1764009397660,"pid":642759,"hostname":"t14s","msg":"Server listening at http://[::1]:3000"}
{"level":30,"time":1764009397662,"pid":642759,"hostname":"t14s","msg":"Server listening at http://127.0.0.1:3000"}
```

