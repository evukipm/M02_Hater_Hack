# Hater Hack

## Description

Blog para la comunidad Iron Hack donde profesar y fomentar el "haterismo".

## User Stories

- **404** - Como hater deseo obtener una página de error 404 que me informe que la página solicitada no existe, lo que significa que estoy haciendo algo que "no hace sentido".
- **500** - Como hater deseo obtener una página de error 505 que me informe que la página solicitada no esta disponible, lo que significa que alguien está "hateandome".
- **sign up** - Como hater deseo repartir mi odio, por lo que podré acceder a un formulario de registro que me solicite la información necesaria para empezar.
- **login** - Como hater deseo poder acceder a la aplicación a partir de una vista de login, por lo que veré una vista solicitandome un usuario y un una constraseña.
- **post list** - Como hater deseo poder visualizar todas las acciones disponibles, por lo que dispondré de una burguer menu que me mostrará dichas opciones.
- **post create** - Como hater deseo poder crear mi propio contenido para ser "hateado" por los demás, por lo que dispondré en el menú desplegable un link de acceso al creador de contenido.
- **post edit and delete** - Como hater puedo equivocarme a la hora de crear mi contenido y quiero poder editar o borrar mis lloriqueos.
- **post find** - Como hater deseo poder filtrar el contenido generado por los demás haters, por lo que dispondré de una barra de búsqueda que me muestre el contenido en base a los criterios de búsqueda que yo defina.
- **profile view** - Como hater deseo poder disponer de una vista de perfil donde poder visualizar y editar toda la información referente a mí, por lo que dispondré en el menú desplegable un enlace a la vista de mi perfil, con un botón de editar.
- **haterism** - Como hater lo que realmente quiero es hatear, para lo que tendré unos botones de opinión debajo de las entradas completamente anónimos, con los que podré expresar mi odio libremente.

## Backlog

 Lista de tareas reservadas al  Backlog

- Iconos de odio: Incluirlos, contabilizarlos y relacionarlos con el creador del odio y el de la entrada.
- Odiometro: Contabilizar el total de odio entregado y el total de odio recibido.
- Odiometro detallado: contabilizar el odio recibido y entregado por icono
- Odio general: Ranking de usuarios con más odio entregado y recibido y iconos de odio más usados.
- Test de nivel de hater: cuestionario para la autoevalución del odio contenido.


## ROUTES:

## ROUTES:

- GET / 
  - renderiza la vista de la hommepage
- GET /auth/signup
  - redirecciona a la vista de login o sign up, según se encuentre o no registrado el usuario.
- POST /auth/signup
  - redirecciona a la vista del formulario para poder darse de alta completando la siguiente información
    - username
    - password
- GET /auth/login
  - redirecciona a la vista de login.
  - renderiza la vista de login con el formulario de acceso.
- POST /auth/login
  - redirecciona a la vista de login, mostrando los campos a rellenar:
    - username
    - password
- POST /auth/logout
  - redirige a una vista de despedida 
- GET /posts
  - renderiza la vista donde se mostrarán los contenidos publicados por los ususairos.
- GET /posts/create
  - renderiza la vista de creación de contenido
- POST /posts/create
  - redirecciona a la vista de creación de contenido mostrando el formulario para la creación del mismso
  - formulario: 
    - Titulo
    - Autor
    - Radio button para eleccion del tipo de contenido
    - Contenido a publicar
- GET /events/:id
  - renderiza la vista de busqueda de contenido en base a criterios de selección.
- POST /events/:id/attend 
  - redirecciona hacia el la vista con el campo de búsqueda de contenido.
- GET /profile/
  - renderiza la vista de perfil del usuario
- GET /profile/edit
  - renderiza la vista de edición de perfil
- POST /profile/edit
  - redirecciona a la vista del formulario de edición de contendido del perfil del usuario.

## Models

User model
 
```
username: String
password: String
```

Event model

```
owner: ObjectId<User>
name: String
description: String
date: Date
location: String
attendees: [ObjectId<User>]
``` 

## Links

### Trello

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
