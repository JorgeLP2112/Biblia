# Comandos Básicos de Git
> ## git add
> - git add -A  (Añade todos los archivos, nuevos, modificados, eliminados, incluyendo los del directorio actual y los de más arriba que pertenezcan al mismo repositorio de git)
> - git add .   (Añade en directorio entero de manera recursiva, incluyendo archivos que comiencen con un punto)
> - git add -u  (Añade archivos modificados y eliminados únicamente, no los nuevos)
> - git add -f  (Fuerza la adición de archivos, incluso si están en la lista del .gitignore)

> ## git status
> - Muestra el estado del repositorio

> ## git commit
> - git commit -m "[Mensaje]"  (Guarda lo añadido al stage con un mensaje)

> ## git branch
> - git branch [Nombre]     (Crea una nueva rama)
> - git branch -l           (Lista todas las ramas existentes)
> - git branch -d [Nombre]  (Elimina una rama, para forzarlo se utiliza -D)

> ## git checkout 
> - git checkout [Nombre]     (Cambiamos de rama)
> - git checkout -b [Nombre]  (Crea una nueva rama y se cambia a ella, si queremos forzar la acción es con -B)
> - git checkout -m [Nombre]  (Cambia de rama haciendo merge para no perder cambios hechos en la rama anterior, si hay conflictos dse deben resolver)

> ## git fetch
> - Descarga confirmaciones, archivos y referencias de un repositorio remoto a tu repositorio local.

> ## git pull
> - Ejecuta en primer lugar `git fetch`, que descarga el contenido del repositorio remoto especificado. Después, se ejecuta `git merge` para fusionar las referencias y los encabezados del contenido remoto en una nueva confirmación de fusión local. 

> ## git push
> - git push                           (Empuja los cambios de la rama actual)
> - git push [Remoto] [NombreRama]     (Empuja los cambios a la rama remota especificada)
> - git push -u [Remoto] [NombreRama]  (Empuja los cambios a la rama remota especificada y establece una relación de seguimiento, lo que permite futuros `git push` y `git pull` sin especificar remoto o rama)

> ## git merge
> - En estos casos, `git merge` toma dos punteros de confirmación, normalmente los extremos de la rama, y encuentra una confirmación base común entre ellos. Una vez que Git encuentra una confirmación base en común, crea una "confirmación de fusión" nueva que combina los cambios de cada secuencia de confirmación de fusión puesta en cola.