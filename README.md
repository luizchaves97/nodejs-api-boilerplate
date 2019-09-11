<h1  align="center">Node API Boilerplate</h1>

<div  align="center">

A Node API boilerplate made by [me](https://linkedin.com/in/luizchaves97/) using docker, express, typescript, jest, eslint and prettier.

</div>

## Prerequisite

- [Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/overview/)

## Development

1. Clone project:

```bash
https://github.com/luizchaves97/nodejs-api-boilerplate.git
cd nodejs-api-boilerplate
```

2. Copy `.env.example` to `.env`

3. Build container

```bash

make build-dev

```

2. Up application

```bash

make up

```

or

```bash

make up-silent

```

4. After the startup is complete, open a browser and visit [http://localhost:3333](http://localhost:3333), If you need to change the startup port, you can configure it in the `.env` file.

## Run Lint

```bash

make lint

```

## Run Test

```bash

make test

```

## Enter in container

```bash

make shell

```
