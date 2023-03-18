# Backend Prueba Talenta

Este es el proyecto de Backend de la Prueba Técnica para el proceso de selección en Talenta. Está construido con [Node.js](https://nodejs.org/) y [TypeScript](https://www.typescriptlang.org/), utilizando diferentes herramientas para la ejecución de scripts.

## Requisitos previos

Antes de comenzar a trabajar con este proyecto, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- NPM (versión 7 o superior)

## Instrucciones de instalación

1. Clona este repositorio en tu máquina local:

  ```bash
  git clone https://github.com/Takeshi31/backend-prueba-talenta.git

2. Entra en la carpeta del proyecto:

  ```bash
  cd backend-prueba-talenta

3. Instala las dependencias del proyecto:

  ```bash
  npm install

## Instrucciones de instalación

### Scripts disponibles

* `tsc`: Compila el código TypeScript a JavaScript.
* `start`: Compila el código TypeScript a JavaScript y ejecuta el servidor.
* `dev`: Ejecuta el servidor en modo desarrollo.
* `lint`: Ejecuta el linter `ts-standard`.
* `test`: Ejecuta las pruebas unitarias utilizando `jest`.

### Ejecutar el servidor

Para ejecutar el servidor, debes utilizar uno de los siguientes comandos:

* `npm run start`: Compila el código TypeScript a JavaScript y ejecuta el servidor, una alternativa a tsc y nodemon.
* `npm run dev`: Ejecuta el servidor en modo desarrollo.

El servidor se ejecutará en `http://localhost:3000`.

### Ejecutar las pruebas unitarias

Para ejecutar las pruebas unitarias, debes utilizar el siguiente comando:
  
  npm run test


### Ejecutar el linter
Para ejecutar el linter `ts-standard`, debes utilizar el siguiente comando:

```bash
npm run lint
