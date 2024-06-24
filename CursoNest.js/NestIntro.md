# Introducción a Nest

## Preparación del Proyecto
 
Para comenzar, vamos a crear descargar el NestCLI:

```
$ npm i -g @nestjs/cli
```

Para las configuraciones iniciales vamos a elegir la siguiente opción:
- **Instalador de Paquetes**: npm

Después, se debe crear el proyecto como tal:

```
$ nest new project-name
```

Por último, vamos a correr el programa en modo desarrollador:

```
$ npm run start:dev
```

Por defecto utiliza el puerto 3000.

## Controladores

Antes de empezar, aquí hay una lista de comandos útiles de Nest:

 - **Generar una Clase**: `nest g cl <path/nombre>`
 - **Generar un Controlador**: `nest g co <path/nombre>`
 - **Generar un Decorador**: `nest g d <path/nombre>`
 - **Generar un Guard**: `nest g gu <path/nombre>`
 - **Generar un Interceptor**: `nest g in <path/nombre>`
 - **Generar un Módulo**: `nest g mo <path/nombre>`
 - **Generar un Pipe**: `nest g pi <path/nombre>`
 - **Generar un Servicio**: `nest g s <path/nombre>`
 - **Generar un Recurso**: `nest g resource <path/nombre>`

Los controladores en Nest.js son fundamentales para manejar las solicitudes entrantes y devolver respuestas al cliente. Actúan como el puente entre el cliente y la aplicación. Su estructura básica es la siguiente:

- **Manejo de Solicitudes**: Los controladores escuchan las solicitudes entrantes a una ruta específica y luego ejecutan el código necesario para procesar esas solicitudes.

- **Rutas**: Cada controlador puede tener una o más rutas. Las rutas especifican los endpoints a los que el controlador responde y pueden ser configuradas para escuchar diferentes métodos HTTP (GET, POST, PUT, DELETE, etc.).

- **Decoradores**: Nest.js utiliza decoradores para asociar los controladores y sus métodos con rutas específicas. Por ejemplo, `@Controller('users')` define un controlador que maneja las solicitudes dirigidas a la ruta `/users`, y `@Get()`, `@Post()`, etc., se utilizan para manejar los diferentes métodos HTTP.

- **Inyección de Dependencias**: Los controladores pueden inyectar servicios u otros proveedores para manejar la lógica de negocio, interactuar con bases de datos, etc. Esto se hace a través del sistema de inyección de dependencias de Nest.js, lo que facilita la organización del código y promueve la reutilización.

- **Respuestas**: Los controladores procesan la solicitud y devuelven una respuesta. Esta respuesta puede ser un simple valor primitivo, un objeto o un array, que Nest.js automáticamente serializa en JSON. También se pueden manipular las respuestas de manera más detallada, por ejemplo, estableciendo códigos de estado HTTP específicos o encabezados.

- **Excepciones**: Los controladores pueden lanzar excepciones para manejar situaciones de error. Nest.js proporciona varias clases de excepciones integradas, como `NotFoundException` o `BadRequestException`, que se pueden utilizar para enviar respuestas de error adecuadas al cliente.

## Pipes

Las Pipes en Nest.js son operadores que se utilizan para transformar, validar o manipular datos antes de que lleguen a los controladores. Actúan en el flujo de datos de las solicitudes entrantes, permitiendo una gestión eficiente y centralizada de la lógica de validación y transformación. A continuación sus características y usos principales:

- **Transformación de Datos**: Las Pipes pueden transformar los datos de entrada de una solicitud, por ejemplo, convirtiendo un string a un número, antes de que estos datos sean manejados por el controlador.

- **Validación**: Uno de los usos más comunes de las Pipes es validar los datos de entrada contra un conjunto de reglas o esquemas. Si los datos no cumplen con las reglas de validación, la Pipe puede lanzar una excepción automáticamente, evitando que el controlador maneje datos inválidos.

- **Operación Sincrónica y Asincrónica**: Las Pipes pueden ser tanto sincrónicas como asíncronas, lo que significa que pueden manejar operaciones que requieren esperar por la resolución de una promesa, como una validación de datos que requiere una consulta a la base de datos.

- **Decoradores**: Para aplicar una Pipe a un método de controlador o a un parámetro específico, Nest.js utiliza decoradores. Por ejemplo, `@UsePipes()` se puede aplicar a nivel de clase o método para especificar que una Pipe debe ser utilizada.

- **Pipes Integradas**: Nest.js viene con varias Pipes integradas, como `ValidationPipe` para validar datos de entrada con clases DTO (Data Transfer Object) y `ParseIntPipe`, que asegura que un parámetro sea un número entero.

- **Pipes Personalizadas**: Además de las Pipes integradas, Nest.js permite la creación de Pipes personalizadas. Esto es útil para lógicas de transformación o validación específicas que no están cubiertas por las Pipes integradas.

- **Aplicación Global**: Aunque las Pipes pueden ser aplicadas a controladores o métodos específicos, también es posible configurar una Pipe a nivel global, de modo que se aplique a todas las rutas de la aplicación.

## DTO

Los DTO (Data Transfer Object) en Nest.js son objetos que se utilizan para encapsular y estructurar los datos que se envían a través de la red. Sirven para definir cómo se espera que sean los datos de entrada en las operaciones de la API, lo que ayuda a mejorar la seguridad, la validación de datos y la documentación de la API. A continuación, se detalla cómo funcionan y se utilizan los DTO en Nest.js:

- **Definición de Estructura**: Los DTO se definen generalmente usando clases o interfaces en TypeScript. Esto permite aprovechar las características de tipado fuerte de TypeScript para definir la forma y el tipo de datos que se espera recibir en una solicitud.

- **Validación**: Al utilizar clases DTO junto con decoradores de validación (por ejemplo, los proporcionados por el paquete `class-validator`), Nest.js puede validar automáticamente los datos de entrada contra el esquema definido en el DTO. Esto significa que si los datos de entrada no cumplen con los criterios especificados en el DTO, Nest.js puede rechazar la solicitud antes de que llegue al controlador.

- **Transformación**: Los DTO también pueden ser utilizados para transformar los datos de entrada, como convertir cadenas a números, fechas, etc., antes de que lleguen al controlador. Esto se hace a menudo en combinación con Pipes.

- **Documentación**: Al definir los datos de entrada y salida de las operaciones de la API mediante DTOs, se facilita la generación automática de documentación para la API, por ejemplo, usando herramientas como Swagger. Esto proporciona una referencia clara para los desarrolladores que consumen la API sobre qué datos enviar y qué esperar como respuesta.

- **Mejora de la Seguridad**: Al validar y estructurar estrictamente los datos de entrada con DTOs, se reduce el riesgo de inyecciones maliciosas y otros vectores de ataque, ya que solo se aceptan los datos que cumplen con el esquema definido.

## SEED de Carga de Datos

Las SEED se refieren probablemente a un mecanismo o proceso utilizado para poblar la base de datos con datos iniciales o de prueba. Características: 

- **Propósito de las Seed**: Las "seed" o semillas de datos se utilizan para inicializar bases de datos con datos necesarios para que la aplicación funcione correctamente desde el inicio. Esto puede incluir la creación de cuentas de usuario predeterminadas, configuraciones iniciales, o datos de prueba para desarrollo y pruebas.

- **Desarrollo y Pruebas**: Durante el desarrollo y las fases de prueba, las "seed" permiten a los desarrolladores y testers trabajar con un conjunto de datos consistente. Esto es especialmente útil para garantizar que las pruebas sean reproducibles y para facilitar el desarrollo de características que dependen de ciertos datos preexistentes.

- **Despliegue**: En el momento del despliegue, especialmente en entornos de producción, las "seed" pueden ser utilizadas para configurar la aplicación con los datos necesarios para su funcionamiento, como roles de usuario, configuraciones de sistema, etc.

- **Implementación en Nest.js**: En Nest.js, las "seed" pueden ser implementadas de varias maneras, pero comúnmente se crean scripts o módulos específicos que se pueden ejecutar manualmente o automáticamente durante el proceso de despliegue o desarrollo. Estos scripts utilizan las APIs del framework y del ORM (Object-Relational Mapping) utilizado (como TypeORM, Sequelize, etc.) para insertar datos en la base de datos.

- **Buenas Prácticas**: Es importante manejar las "seed" con cuidado, especialmente en entornos de producción, para evitar la sobreescritura de datos existentes o la exposición de datos sensibles. También es común tener diferentes sets de "seed" para desarrollo, pruebas, y producción, cada uno adaptado a las necesidades específicas de esos entornos.