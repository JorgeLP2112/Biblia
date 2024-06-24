# Introducción a Docker

## Configurar Variables de Entorno

Para comenzar vamos a crear el archivo .env en la ruta principal del proyecto y la descarga de los paquetes de configuración de Nest:

```
$ npm i @nestjs/config
```

Ahora, en el archivo app.module.ts hay que importar el modulo de configuración:

```typescript
import { ConfigModule } from '@nestjs/config';

@Module({
    // Hay que colocarlo al inicio de los imports porque si importa el orden
    imports: [ConfigModule.forRoot()]
})

export class AppModule {}
```

### Archivo de Configuración

El configModule lo estamos tratando como un servicio, por lo que debemos configurar como queremos que se comporten las variables de entorno. Para esto es necesario crear un archivo, de preferencia `/src/config/app.config.ts` o `/src/config/env.config.ts`. La forma de la configurar es la siguiente:

```typescript
// Estamos especificando que la variable de enviroment va a ser mapeada de la siguiente forma
// Es la validación de las variables de entorno
export const EnvConfig = () => ({
    enviroment: process.env.NODE.ENV || 'dev'
})

//////////////////////////////////////////////////////////////////////////////////////////////

// Se puede hacer inyección de dependencias del ConfigModule
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot({
        load: [EnvConfig],
    })]
})

export class AppModule {}
```

Se puede agregar la librería `joi` para agregar un `Validation Schema` que añada una capa extra de validación del objeto para las variables de entorno.

## Dockerizar

Para futura referencia:

```
https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490
```