# Proyecto de Nest con TypeORM - Postgres

## Type ORM

TypeORM es un ORM (Object-Relational Mapping) para TypeScript y JavaScript (ES7, ES6, ES5). Facilita la interacción con bases de datos usando el paradigma de programación orientada a objetos. Al trabajar con TypeORM, los desarrolladores pueden definir modelos de datos como clases y luego realizar operaciones de base de datos como inserciones, consultas, actualizaciones y borrados a través de métodos de alto nivel, sin necesidad de escribir consultas SQL complejas manualmente. Esto ayuda a hacer el código más legible, mantenible y reduce el riesgo de errores en las consultas SQL.

TypeORM soporta muchas bases de datos SQL como PostgreSQL, MySQL, MariaDB, SQLite, y Microsoft SQL Server, entre otras. También ofrece características avanzadas como relaciones entre entidades, migraciones de base de datos, y soporte para decoradores, lo que lo hace una opción popular en proyectos que utilizan TypeScript, especialmente en combinación con frameworks como NestJS.

## Primeros Pasos

Para comenzar hay que levantar la base de datos con el siguiente comando:

```
$ docker-compose up -d
```

- `docker-composer.yaml`: Es el archivo necesario para levantar la imagen. (Contiene la información de lo que se va a hacer)

- `DBeaver`: Es el gestor de BD que se está utilizando para probar la conexión.

Después, es necesario instalar ciertas librerías:

```
$ npm install --save @nestjs/typeorm typeorm pg
```

- `@nestjs/typeorm`: Decoradores de Nest para TypeORM

- `typeorm`: Librería de TypeORM

- `pg`: Paquete de Postgres

Por último, hay que realizar la configuración en el modulo:

```typescript
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

## Swagger

Swagger es una suite de herramientas de software de código abierto utilizada para diseñar, construir, documentar y consumir servicios web RESTful. Proporciona especificaciones y un ecosistema de herramientas que permiten a los desarrolladores y organizaciones estandarizar y facilitar el trabajo con APIs REST.

- **Swagger Editor**: Un editor basado en la web para escribir la especificación OpenAPI (anteriormente conocida como Swagger) que define la API, permitiendo diseñar y documentar la API de manera interactiva.

- **Swagger UI**: Una herramienta que genera una página web con documentación interactiva de la API a partir de una especificación OpenAPI, permitiendo a los usuarios probar las llamadas a la API directamente desde el navegador.

- **Swagger Codegen**: Permite generar código cliente y servidor en varios lenguajes de programación y frameworks a partir de una especificación OpenAPI, facilitando la implementación de clientes y servidores que consumen o proveen la API.

- **Swagger Inspector**: Una herramienta para probar APIs RESTful y generar su documentación OpenAPI.

La utilización de Swagger y la especificación OpenAPI ayuda a asegurar que la documentación de la API esté siempre actualizada con el código, mejora la comunicación entre equipos de desarrollo y facilita la creación de clientes de API al proporcionar generación automática de código.

### Instalación y Configuración

```
$ npm install @nestjs/swagger
```

```typescript
// Main.ts
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Cats example")
    .setDescription("The cats API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
```

- Para más información, consultar: `https://docs.nestjs.com/openapi/introduction`.
