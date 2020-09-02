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
9. Crear y borrar post
11. Crear y borrar comments

// Front end
1. Instalar ( npx create-react-app client ) 
2. Crear scripts en package.json para correr concurrently:     "client": "npm start --prefix client",
    "dev": "concurrently \" npm run server\" \"npm run client\"" y se revisa con npm start dev
3. Instalar dependencias en client <npm i axios uuid react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment>
4. Se borran los archivos de github del client
5. Adiciona un proxy
6. Se borran css, service-worker, logo y otra
7. Se crean los compomentes
8. Se crea componente de navbar
9. Se crea componente de landing
10. Se crea componente de Login
11. Se crea componente de Register
12. Se crea el router
13. Se crea la página de Register
14. Se instala redux
15. Se genera la Store de Redux
16. Se desarrollan los Reducers
17. Se generan los archivos del folder actions para Register
18. Para cada action: se genera la Action, las const en Types, se modifican las Actions, se modifican los Reducers




