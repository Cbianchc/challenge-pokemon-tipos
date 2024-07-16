# Backend - Challenge Pokemon

## Descripción
El backend conectado a base de datos SQLite y TypeOrm.
Contiene endpoints para:
1. Listar los Pokemon de la base de datos.
2. Simular batallas en base al tipo de pokemon, velocidad, fuerza. 

.json de pokemon disponible en este mismo entorno. 

## Instalación

### Requisitos Previos
- Node.js y npm instalados

### Pasos para Instalar
1. Navegar a la carpeta del backend
    ```bash
    cd backend-pokemon
    ```
2. Instalar las dependencias
    ```bash
    npm install
    ```
3. Iniciar el servidor
    ```bash
    npm run start:dev
    ```

## Endpoints Principales
- `GET /pokemon`: Lista todos los Pokemon.
- `GET /pokemon/battle/:pokemon1Id/:pokemon2Id`: Simula una batalla entre dos Pokemon.

- La decisión de los pokemon a enfrentarse la hace el frontend.

## Estructura del Proyecto
- `src/pokemon`: Controladores, servicios y entidades relacionadas con los Pokemon.
- `src/batallas`: Lógica y almacenamiento de los resultados de las batallas.

