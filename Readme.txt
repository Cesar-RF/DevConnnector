Pasos:
1. Configurar la base de datos en Mongo Atlas
2. Generar el -gitignore
3. Inicializar npm init
4. Instalar las dependencias:
	npm i --save express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
5. Instalar dependencias de desarrollador
	 npm i -D nodemon concurrently
6. Crear el servidor server.js
7. Cambiar los scripts de test a start y server
8. Probar que el servidor corre 
9. Conectar la base de datos
10. Crear default json para el url de conexión con la BD
11. Crear db.js para la conexión con la BD
12. Crea folder de routes y archivos users.js & auth.js & profile.js & posts.js
13. Integrar las rutas a server.js

Empieza a crear los modelos

1. Crea el modelo de user
2. Creación de usuario y atuenticación de usuario...para hacer login con google o FB checar passport.js
3. Crear middleware para el token
4- Generar ingreso a usuarios existentes

1. Crea el modelo de profile
2. Crea todas las routes
3. Crea todo para crear o modificar el user profile
4. Crea Get all profiles
5. Crea delete profile
6. Crea Experience
7. Crea borrar Experience
8. Crea generar y borrar Education
