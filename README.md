
# Frontend Cliente (Prueba ADO)

Esta aplicación web, desarrollada con React, TypeScript y Vite, presenta un sistema de autenticación robusto que permite a los usuarios iniciar sesión de manera segura. Una vez autenticados, los usuarios tienen acceso a un sistema CRUD para gestionar información de usuarios.


## Installation

  Para llevar a la ejecución de este proyecto necesitamos seguir  algunas instrucciones.

  ### Instalación de todo lo necesario.
1. #### Instalación NODE.
  asumiendo que tenemos el proyecto descargado en nuestro equipo, también necesitaremos NODE instalado en su versión 20.9. Para verificar esto, podemos correr en la terminal lo siguiente:

  ```bash
  node -v
  npm -v
  ```
2. #### Instalación Manejador de paquetes.
  Sabiendo lo anteriores, necesitaremos un manejado de paquetes,    puede ser NPM o PNPM.

  Para la instalación de PNPM necesitarás ejecutar lo siguiente:
  ```bash
  npm install -g pnpm
  pnpm -v
  ```
  Para NPM no necesitaremos hacer nada, ya que viene por defecto con NODE

3. #### Instalación paquetes
  Con un manejador de paquetes podremos instalar todos lo necesario para ejecutar el proyecto.
  
  * Posiccionar nos en la ruta del proyecto 
    ```bash
    cd ClienteFront.ADO
    ```
  * Ejecutar la instalación de paquetes
    
    ```bash
    npm install
    ```
    ó
    ```bash
    pnpm install
    ```
## Ejecutar el proyecto
 Con los paquetes intalados solo queda ejecutar y probar la aplicaccion con los siguientes comandos:
  
  ```bash
    npm run dev
  ```
  ó
  ```bash
    pnpm dev
  ```

  ## Environment Variables

En este proyecto, la configuración de la URL de la API se gestiona a través de una variable de entorno llamada `VITE_URL_BASE`. Esta variable se utiliza para definir la base de la URL de la API que la aplicación consume.

Actualmente, en el archivo `.env`, la variable `VITE_URL_BASE` está configurada con la URL de la API desplegada en Azure para facilitar las pruebas directas. Si deseas probar la aplicación en tu entorno local y utilizar una API local en lugar de la de Azure, sigue estos pasos:

Abre el Archivo `.env`:

Ubica y abre el archivo llamado `.env` en la raíz del proyecto.
Encuentra la Variable `VITE_URL_BASE`:

Busca la línea que comienza con `VITE_URL_BASE`= en el archivo `.env`.
Cambia la URL:

Reemplaza el valor actual después del signo de igual (=) con la URL de la API local que deseas utilizar. Por ejemplo:

 ```env
    VITE_URL_BASE=http://localhost:3000/api
  ```


Guarda los Cambios:

Guarda los cambios en el archivo `.env`.
Reinicia la Aplicación:

Si la aplicación ya está en ejecución, detén el servidor (si es necesario) y reinicia la aplicación para que los cambios en la variable de entorno surtan efecto.
Con estos pasos, has configurado la URL de la API según tu entorno de desarrollo. Ahora, la aplicación debería consumir la API local en lugar de la API desplegada en Azure.
