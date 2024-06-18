# Guía Rápida de Comandos Básicos de Git

---

## Añadir Cambios

- **Añadir Todo**: `git add -A`
    - Añade todos los archivos (nuevos, modificados, eliminados) del directorio actual y superiores del repositorio.
- **Añadir Directorio Actual**: `git add .`
    - Añade todos los archivos en el directorio actual de manera recursiva, incluyendo archivos que comiencen con un punto.
- **Añadir Modificados/Eliminados**: `git add -u`
    - Solo añade archivos modificados y eliminados, excluyendo los nuevos.
- **Añadir Forzadamente**: `git add -f`
    - Añade archivos incluso si están en .gitignore.

## Estado del Repositorio

- **Ver Estado**: `git status`
    - Muestra el estado actual del repositorio.

## Confirmar Cambios

- **Hacer Commit**: `git commit -m "[Mensaje]"`
    - Guarda los cambios en el repositorio con un mensaje descriptivo.

## Manejo de Ramas

- **Crear Rama**: `git branch [Nombre]`
- **Listar Ramas**: `git branch -l`
- **Eliminar Rama**: `git branch -d [Nombre]`
    - Para forzar: `git branch -D [Nombre]`

## Cambiar de Rama

- **Cambiar a Rama**: `git checkout [Nombre]`
- **Crear y Cambiar**: `git checkout -b [Nombre]`
    - Para forzar: `git checkout -B [Nombre]`
- **Cambiar con Merge**: `git checkout -m [Nombre]`
    - Fusiona cambios actuales con la rama a la que se cambia.

## Sincronización con Remoto

- **Descargar Cambios**: `git fetch`
    - Trae cambios del remoto sin fusionar.
- **Actualizar y Fusionar**: `git pull`
    - Descarga (`fetch`) y luego fusiona (`merge`) cambios del remoto.
- **Publicar Cambios**:
    - **Rama Actual**: `git push`
    - **Rama Específica**: `git push [Remoto] [NombreRama]`
    - **Establecer Seguimiento**: `git push -u [Remoto] [NombreRama]`

## Fusionar Ramas

- **Fusionar**: `git merge [NombreRama]`
    - Combina cambios de `[NombreRama]` en la rama actual.

## Reorganización de Commits con Rebase

- **Reorganizar Commits**: `git rebase [base]`
    - Aplica los cambios de la rama actual sobre `[base]`. Útil para mantener una historia lineal.
    - **Uso Básico**: `git rebase master`
        - Aplica los cambios de la rama actual sobre `master`.
    - **Interactivo**: `git rebase -i [base]`
        - Permite editar, combinar, o eliminar commits en la reorganización.
    - **Continuar después de resolver conflictos**: `git rebase --continue`
        - Continúa el proceso de rebase después de resolver conflictos manualmente.
    - **Abortar Rebase**: `git rebase --abort`
        - Cancela el proceso de rebase y vuelve al estado anterior.
    - **Saltar Commit**: `git rebase --skip`
        - Se utiliza para omitir un commit durante el proceso de rebase.