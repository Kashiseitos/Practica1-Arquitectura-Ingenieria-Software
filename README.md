# Practica1-Arquitectura-Ingenieria-Software
Practica de la materia Arquitectura y Diseño de Software relacionada al uso de APIs REST y GraphQL para un sistema de gestión escolar.

### Integrantes:
Guillermo Delgado<br>
Hugo Herrera<br>
Alberto Lozano<br>
Eneas Villegas<br>

## Instalación
### 1. Clonar el repositorio
```bash
git clone https://github.com/Kashiseitos/Practica1-Arquitectura-Ingenieria-Software.git
cd Practica1-Arquitectura-Ingenieria-Software
```
### 2. Descargar los paquetes necesarios
El proyecto requiere los siguientes paquetes instalados como dependencias de producción:<br>

| Paquete | Versión | Propósito |
| :--- | :--- | :--- |
| **`express`** | `^5.2.1` | Framework principal para el servidor web y manejo de rutas HTTP (REST). |
| **`mongoose`** | `^9.9.4` | ODM para modelar los esquemas y gestionar la conexión con MongoDB Atlas. |
| **`@apollo/server`** | `^5.5.1` | Motor central para procesar operaciones GraphQL y servir Apollo Sandbox. |
| **`graphql`** | `^16.14.2` | Biblioteca base para la definición del esquema y ejecución de consultas. |
| **`@as-integrations/express5`** | `latest` | Middleware oficial para integrar Apollo Server v5 con Express v5. |
| **`dotenv`** | `^17.4.2` | Carga variables de entorno desde el archivo `.env` a `process.env`. |
| **`cors`** | `^2.8.6` | Habilita el intercambio de recursos de origen cruzado para clientes web externos. |

Node leerá el package.json para descargar exactamente estos 7 paquetes<br>

```bash
npm install
```
O por el contrario <br>
```bash
npm install express@^5.2.1 mongoose@^9.9.4 @apollo/server@^5.5.1 graphql@^16.14.2 @as-integrations/express5 dotenv@^17.4.2 cors@^2.8.6
```
### 3. Configurar el .env
En el archivo [.env.example](./.env.example) se encuentra un ejemplo de las variables del entorno, especificamente una URI hacia una BD de Mongo.<br/>Reemplazar con una personal o la usada en este proyecto.<br>
```text
PORT=4000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.x8dmr9h.mongodb.net/academia?retryWrites=true&w=majority
```
Posteriormente renombrar el nombre de `.env.example` a `.env` <rb>
### 4. Correr el proyecto
Corremos el proyecto con
```bash
node ./src/index.js
```
o tambien con
```bash
npm start
```
### 5. Usar GraphQL y REST
Para hacer consultas con GraphQL, `ctrl+click_izq` en el segundo link que aparece en la terminal: `🚀 GraphQL listo en: http://localhost:4000/graphql`<br>
Para agregar datos usando REST, abrir el archivo [RestPost.html](./RestPost.html) como preview.
