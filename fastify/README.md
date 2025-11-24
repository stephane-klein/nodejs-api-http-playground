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
$ xh -b http://localhost:3000/users/
[
    {
        "id": 1,
        "firstname": "John",
        "lastname": "Doe"
    },
    {
        "id": 2,
        "firstname": "Alice",
        "lastname": "Doe"
    }
]

$ xh -b http://localhost:3000/users/12/
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe"
}
```

```console
$ xh -b POST http://localhost:3000/users/ firstname=John lastname=Doe
{
    "firstname": "John",
    "lastname": "Doe"
}

$ xh -b PUT http://localhost:3000/users/12/ firstname=John lastname=Doe
{
    "firstname": "John",
    "lastname": "Doe"
}
```

Open <http://localhost:3000/docs> Swagger documentation in your browser.

## Build application server for production

```console
$ pnpm run build
$ pnpm run serve
[22:15:11] INFO: Server listening at http://[::1]:3000
[22:15:11] INFO: Server listening at http://127.0.0.1:3000
```

