# Flujo de Trabajo en Git: Ramas de Funcionalidades y Pull Requests

El flujo de trabajo en Git utilizando ramas de funcionalidades (Feature Branches) y Pull Requests es una metodología clave para equipos de desarrollo. Permite la colaboración eficiente y el mantenimiento de un código base limpio y funcional.

## Ramas de Funcionalidades (Feature Branches)

1. **Crear una Rama de Funcionalidad**: Para cada nueva funcionalidad o corrección, se crea una rama a partir de `main` (o `master`).
    - `git checkout -b feature/nueva-funcionalidad`
2. **Desarrollo**: Realiza todos los cambios necesarios en esta rama. Esto mantiene el desarrollo aislado del código principal.
3. **Actualización Regular de la Rama**: Es recomendable actualizar la rama de funcionalidad regularmente con los cambios que se hayan integrado a `main`.
    - `git fetch origin`
    - `git rebase origin/main`
4. **Pruebas**: Antes de solicitar la integración de la rama, asegúrate de realizar todas las pruebas necesarias para confirmar que la nueva funcionalidad funciona como se espera.

## Pull Requests

Una vez que la funcionalidad está lista y probada, se procede a integrarla al código principal a través de un Pull Request (PR).

1. **Publicar la Rama**: Si la rama solo existe localmente, necesitas publicarla en el repositorio remoto.
    - `git push -u origin feature/nueva-funcionalidad`
2. **Crear el Pull Request**: Utiliza la interfaz de GitHub, GitLab, Bitbucket, o la plataforma de tu elección para crear un nuevo PR. Deberás seleccionar la rama de funcionalidad como la fuente y `main` (o la rama que corresponda) como destino.
3. **Revisión de Código**: Otros miembros del equipo revisan el código, pueden hacer comentarios o solicitar cambios. Es una oportunidad para mejorar la calidad y la coherencia del código.
4. **Resolución de Comentarios**: Realiza los cambios necesarios según los comentarios recibidos y actualiza el PR.
5. **Fusión del PR**: Una vez que el PR es aprobado, se puede fusionar a la rama principal. Esto suele hacerse a través de la interfaz de la plataforma que estés utilizando.

## Buenas Prácticas

- Mantén las ramas de funcionalidades lo más cortas y específicas posible.
- Actualiza regularmente tus ramas de funcionalidades con los cambios de la rama principal para evitar conflictos complejos.
- Asegúrate de que tus Pull Requests sean claros y descriptivos, incluyendo toda la información necesaria para entender los cambios propuestos.

Este flujo de trabajo fomenta la revisión de código, mejora la calidad del software y facilita la gestión de proyectos complejos.