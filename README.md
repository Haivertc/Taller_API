# API RESTful - Gestión de Usuarios y Tareas

## 📌 Descripción
Esta API permite gestionar usuarios y sus tareas asociadas. Implementa autenticación con **JWT**, almacenamiento en **MongoDB Atlas**, y está desplegada en **Render**.

## 👥 Integrantes
- **Haiver Jahir Trujillo Cruz**
- **Codigo: 202011549**

## 🌐 URL del Servicio
🔗 [API en Producción](https://taller-api-1uop.onrender.com)

## 🚀 Tecnologías Utilizadas
- **Node.js** + **Express.js**
- **MongoDB Atlas** + **Mongoose**
- **JSON Web Tokens (JWT)** para autenticación
- **Swagger** para documentación
- **Render** para despliegue en la nube

## 🛠 Instalación Local
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Haivertc/Taller_API
   cd Taller_API
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno (`.env`):
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://haivertc10:Haivertc@mycluster.zhyj3b9.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=MyCluster
   TOKEN_SECRET=token
   ```
4. Iniciar el servidor:
   ```sh
   node server.js
   ```

## 📖 Documentación Swagger
Puedes acceder a la documentación de la API en:
🔗 [Swagger UI](https://taller-api-1uop.onrender.com/api-docs/)

## 📌 Endpoints Principales
### 🔹 **Usuarios**
- `POST /api/users/register` → Registra un usuario
- `POST /api/users/login` → Inicia sesión (devuelve un token JWT)

### 🔹 **Tareas** *(Requiere Token JWT)*
- `GET /api/tasks` → Obtiene todas las tareas
- `POST /api/tasks` → Crea una nueva tarea
- `DELETE /api/tasks/:id` → Elimina una tarea

## 🔐 Autenticación
Todos los endpoints de tareas requieren autenticación mediante un **token JWT** en el encabezado `Authorization`:
```sh
Authorization: Bearer token
```
## 🏗 Arquitectura del Proyecto
📂 Taller_API/
├── 📂 middleware/      # Middleware de autenticación
│   ├── auth.js        # Middleware para verificar JWT
├── 📂 models/          # Modelos de datos
│   ├── User.js         # Modelo de usuario
│   ├── Task.js         # Modelo de tarea
├── 📂 routes/          # Rutas de la API
│   ├── userRoutes.js   # Endpoints de usuarios
│   ├── taskRoutes.js   # Endpoints de tareas
├── .env               # Variables de entorno (No subir a Git)
├── .gitignore         # Archivos y carpetas ignoradas en Git
├── package.json       # Dependencias y configuración del proyecto
├── package-lock.json  # Versiones exactas de los paquetes
├── README.md          # Documentación de la API
├── server.js          # Servidor principal
├── swagger.js         # Configuración de Swagger

MIT - Puedes usar y modificar libremente este código.

