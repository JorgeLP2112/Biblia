# Introducción a Docker

## Configurar Variables de Entorno

Para comenzar vamos a crear el archivo .env en la ruta principal del proyecto y la descarga de los paquetes de configuración de Nest:

```
$ npm i @nestjs/config
```

Ahora, en el archivo app.module.ts hay que importar el modulo de configuración:

```typescript
import { ConfigModule } from "@nestjs/config";

@Module({
  // Hay que colocarlo al inicio de los imports porque si importa el orden
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

### Archivo de Configuración

El configModule lo estamos tratando como un servicio, por lo que debemos configurar como queremos que se comporten las variables de entorno. Para esto es necesario crear un archivo, de preferencia `/src/config/app.config.ts` o `/src/config/env.config.ts`. La forma de la configurar es la siguiente:

```typescript
// Estamos especificando que la variable de enviroment va a ser mapeada de la siguiente forma
// Es la validación de las variables de entorno
export const EnvConfig = () => ({
  enviroment: process.env.NODE.ENV || "dev",
});

//////////////////////////////////////////////////////////////////////////////////////////////

// Se puede hacer inyección de dependencias del ConfigModule
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
    }),
  ],
})
export class AppModule {}
```

Se puede agregar la librería `joi` para agregar un `Validation Schema` que añada una capa extra de validación del objeto para las variables de entorno.

## Dockerizar

### Docker Compose

```docker
version: '3'

services:
  pokedexapp:
    depends_on:
      - db
    build:
      context: .
      dockerfile: Dockerfile
    image: pokedex-docker
    container_name: pokedexapp
    restart: always # reiniciar el contenedor si se detiene
    ports:
      - "${PORT}:${PORT}"
    # working_dir: /var/www/pokedex
    environment:
      MONGODB: ${MONGODB}
      PORT: ${PORT}
      DEFAULT_LIMIT: ${DEFAULT_LIMIT}
    # volumes:
    #   - ./:/var/www/pokedex

  db:
    image: mongo:5
    container_name: mongo-poke
    restart: always
    ports:
      - 27017:27017
    environment:
      MONGODB_DATABASE: nest-pokemon
    # volumes:
    #   - ./mongo:/data/db
```

### Docker File

```docker
# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner

# Set working directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --prod

COPY --from=builder /app/dist ./dist

# # Copiar el directorio y su contenido
# RUN mkdir -p ./pokedex

# COPY --from=builder ./app/dist/ ./app
# COPY ./.env ./app/.env

# # Dar permiso para ejecutar la applicación
# RUN adduser --disabled-password pokeuser
# RUN chown -R pokeuser:pokeuser ./pokedex
# USER pokeuser

# EXPOSE 3000

CMD [ "node","dist/main" ]
```

### Docker File Simple

```docker
FROM node:18-alpine3.15

# Set working directory
RUN mkdir -p /var/www/pokedex
WORKDIR /var/www/pokedex

# Copiar el directorio y su contenido
COPY . ./var/www/pokedex
COPY package.json tsconfig.json tsconfig.build.json /var/www/pokedex/
RUN yarn install --prod
RUN yarn build


# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password pokeuser
RUN chown -R pokeuser:pokeuser /var/www/pokedex
USER pokeuser

# Limpiar el caché
RUN yarn cache clean --force

EXPOSE 3000

CMD [ "yarn","start" ]
```

Para futura referencia:

```
https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490
```
