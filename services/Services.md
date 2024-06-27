# Servicios Importantes

## NGINX

NGINX es un servidor web open source de alta rendimiento que ofrece el contenido estático de un sitio web de forma
rápida y fácil de configurar. Ofrece recursos de equilibrio de carga, proxy inverso y streaming, además de gestionar miles de conexiones simultáneas. El resultado de sus aportes es una mayor velocidad y escalabilidad.

NGINX funciona con base en eventos. Entonces, en lugar de hacer una solicitud directa al servidor, él ejecuta un proceso maestro, llamado worker, y varios procesos de trabajo, llamados conexiones worker. Todo este proceso funciona de forma continua y asíncrona.

De esa manera, cuando hay una solicitud de procesamiento, se realizan las conexiones worker, que realizan la solicitud al proceso maestro, que a su vez procesa y devuelve el resultado.

Esta funcionalidad permite el manejo de numerosas conexiones simultáneas, ya que cada conexión worker es capaz de procesar 1024 solicitudes.

Cuando el servidor está funcionando, cada worker carga una cadena de módulos, dependiendo de cómo se realice la configuración durante la instalación. De esa forma, cada solicitud se realiza con todos los recursos configurados en operación.

## WebSockets

Los WebSockets son una tecnología avanzada que permite abrir una comunicación interactiva bidireccional entre el navegador del usuario y un servidor. A diferencia del modelo tradicional de solicitud y respuesta HTTP, donde cada interacción requiere una nueva conexión, los WebSockets permiten que tanto el cliente como el servidor intercambien datos libremente a través de una única conexión persistente. Esto facilita la construcción de aplicaciones web en tiempo real, como juegos en línea, chat en vivo, y actualizaciones en tiempo real de contenido, ya que el servidor puede enviar mensajes al cliente sin que este último tenga que solicitarlos explícitamente, mejorando la eficiencia y la experiencia del usuario.

## Proxy Inverso

Un proxy inverso es un tipo de servidor que se sitúa entre los usuarios de internet y los servidores de aplicaciones. Actúa como intermediario para las solicitudes de los usuarios, redirigiéndolas a los servidores internos apropiados y luego devolviendo las respuestas de esos servidores al usuario. A diferencia de un proxy tradicional, que actúa en nombre de los usuarios, un proxy inverso actúa en nombre del servidor o servidores a los que redirige las solicitudes.

Las funciones principales de un proxy inverso incluyen:

- **Balanceo de Carga**: Distribuye las solicitudes entrantes entre varios servidores para optimizar el uso de recursos, mejorar la velocidad de respuesta y asegurar la disponibilidad del servicio.

- **Seguridad**: Oculta la existencia y las características de los servidores reales, proporcionando una capa adicional de defensa contra ataques.

- **Caché de Contenido**: Almacena copias de contenido estático, reduciendo la carga en los servidores de aplicaciones y acelerando la entrega de contenido a los usuarios.

- **Terminación SSL**: Maneja los certificados SSL/TLS y la encriptación, permitiendo que los servidores de aplicaciones se centren en procesar las solicitudes sin el sobre coste de encriptar y desencriptar los datos.

## API Gateway

Una API Gateway es un componente de gestión de APIs que actúa como punto de entrada único para las solicitudes dirigidas a tu conjunto de microservicios o APIs backend. Su propósito es simplificar y optimizar las interacciones entre los clientes (como aplicaciones web y móviles) y los servicios que componen una aplicación. Algunas de las funciones clave de una API Gateway incluyen:

- **Enrutamiento de Solicitudes**: Dirige las solicitudes entrantes al servicio backend correcto.

- **Autenticación y Autorización**: Verifica las credenciales de los usuarios y asegura que tengan permiso para acceder a los recursos solicitados.

- **Limitación de Tasa y Cuotas**: Controla el número de solicitudes que un usuario puede hacer en un período determinado para prevenir el abuso de la API.

- **Caché de Respuestas**: Almacena respuestas comunes para mejorar el tiempo de respuesta y reducir la carga en los servicios backend.

- **Transformación de Solicitudes y Respuestas**: Modifica las solicitudes entrantes y las respuestas salientes según sea necesario para asegurar la compatibilidad entre diferentes versiones de servicios o para enriquecer las respuestas.

- **Consolidación de Servicios**: Permite a los clientes consumir funcionalidades de múltiples servicios a través de una única solicitud a la API Gateway, simplificando la interacción del cliente con los microservicios.

- **Monitoreo y Registro**: Proporciona herramientas para monitorear el uso de las APIs, registrar las solicitudes y las respuestas, y detectar posibles problemas.

Las API Gateways son esenciales en arquitecturas de microservicios, ya que proporcionan una capa de abstracción que facilita la gestión de múltiples servicios y mejora la seguridad, el rendimiento y la usabilidad de las aplicaciones.

## Auth_request

Una "authorization request" (solicitud de autorización) se refiere al proceso de solicitar y verificar permisos para realizar una acción o acceder a un recurso específico en un sistema o aplicación. En el contexto de sistemas web y APIs, una solicitud de autorización comúnmente implica:

- **Identificación del Usuario**: El usuario o el sistema que realiza la solicitud debe ser identificado, típicamente a través de un proceso de autenticación previo.

- **Verificación de Permisos**: Una vez identificado, el sistema verifica si el usuario tiene los permisos necesarios para realizar la acción solicitada o acceder al recurso deseado. Esto se hace consultando las políticas de seguridad o las reglas de acceso definidas para el usuario o su rol.

- **Concesión o Denegación de Acceso**: Basándose en la verificación de permisos, el sistema decide si concede o deniega el acceso a la acción o recurso solicitado.

Este proceso es fundamental en sistemas que implementan control de acceso basado en roles (RBAC) o control de acceso basado en atributos (ABAC), asegurando que solo los usuarios autorizados puedan realizar acciones específicas o acceder a información sensible.

## RBAC

RBAC significa "Role-Based Access Control" (Control de Acceso Basado en Roles). Es un método para restringir el acceso a sistemas, aplicaciones y datos basándose en los roles de los usuarios dentro de una organización. RBAC asigna permisos a roles específicos en lugar de a usuarios individuales, simplificando la administración de permisos y la asignación de derechos de acceso.

Cómo funciona RBAC:

- **Definición de Roles**: Se definen roles dentro de la organización según las responsabilidades y tareas de los usuarios. Por ejemplo, roles como "Administrador", "Usuario Final", "Gerente", etc.

- **Asignación de Permisos a Roles**: A cada rol se le asignan permisos específicos que determinan las acciones que los usuarios pueden realizar y los recursos a los que pueden acceder. Por ejemplo, un rol de "Administrador" podría tener permisos para crear y eliminar cuentas de usuario, mientras que un rol de "Usuario Final" podría tener permisos solo para leer información específica.

- **Asignación de Usuarios a Roles**: Los usuarios son asignados a uno o más roles, y a través de estos roles, obtienen los permisos asociados. Esto elimina la necesidad de asignar permisos a cada usuario individualmente.

- **Verificación de Acceso**: Cuando un usuario intenta acceder a un recurso o realizar una acción, el sistema verifica los permisos de su rol para determinar si la solicitud está autorizada.

Beneficios de RBAC:

- **Simplificación de la Gestión de Permisos**: Al agrupar permisos por roles, RBAC facilita la administración de permisos, especialmente en organizaciones grandes.

- **Principio de Menor Privilegio**: RBAC promueve el principio de menor privilegio, asegurando que los usuarios tengan solo los permisos necesarios para realizar sus tareas.

- **Seguridad Mejorada**: Al limitar el acceso basado en roles, RBAC ayuda a prevenir el acceso no autorizado y reduce el riesgo de ataques internos.

- **Cumplimiento**: RBAC puede ayudar a cumplir con regulaciones y políticas de seguridad al proporcionar un control claro y auditable sobre quién tiene acceso a qué información y recursos.
