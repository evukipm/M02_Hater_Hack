# Hater Hack

## Description

Blog para la comunidad Iron Hack donde profesar y fomentar el "haterismo".

## User Stories

- **4004** - Como hater deseo obtener una página de error 4004 que me informe que la página solicitada no existe, lo que significa que estoy haciendo algo que "no hace sentido".
- **505** - Como hater deseo obtener una página de error 505 que me informe que la página solicitada no esta disponible, lo que significa que alguien está "hateandome".
- **sign up** - Como hater deseo repartir mi odio, por lo que podré acceder a un formulario de registro que me solicite la información necesaria para empezar.
- **login** - Como hater deseo poder acceder a la aplicación a partir de una vista de login, por lo que veré una vista solicitandome un usuario y un una constraseña.
- **log out** - Como hater no quiero permanecer logeado, por eso necesito un botón que 
- **post list** - Como hater deseo poder visualizar todas las acciones disponibles, por lo que dispondré de una burguer menu que me mostrará dichas opciones.
- **navigate** - Como hater quiero navegar por la página, por lo que necesito un menú cómodo por el que acceder a las diferentes zonas. 
- **post create** - Como hater deseo poder crear mi propio contenido para ser "hateado" por los demás, por lo que dispondré en el menú desplegable un link de acceso al creador de contenido.
- **post edit** - Como hater puedo equivocarme a la hora de crear mi contenido y quiero poder editarlo.
- **post delete** - Como hater puedo querer borrar mis lloriqueos, por lo que necesito un botón de borrar para mis posts.
- **post find** - Como hater deseo poder filtrar el contenido generado por los demás haters, por lo que dispondré de una barra de búsqueda que me muestre el contenido en base a los criterios de búsqueda que yo defina.
- **profile view** - Como hater deseo poder disponer de una vista de perfil donde poder visualizar y editar toda la información referente a mí, por lo que dispondré en el menú desplegable un enlace a la vista de mi perfil, con un botón de editar.
- **profile edit** - Como hater quier poder completar mi perfil o modificarlo, por lo que necesito una página de edición de perfil.

##Haterism

- **haterism buttons** - Como hater lo que realmente quiero es hatear, para lo que tendré unos botones de opinión debajo de las entradas completamente anónimos, con los que podré expresar mi odio libremente.

- **Haterism resume** - Como hater quiero saber a cuánta gente hateo y cuánta gente me hatea a mí. También el total de hate que he repartido y me han lanzado.

- **Hater level** - Como hater quiero saber cual es mi nivel de hater y, por supuesto, llegar al 100%.

- **Profile with permissions** -Como hater me gustaría tener un perfil personalizado con información que solo yo pueda ver.

## Backlog p 

 Lista de tareas reservadas al  Backlog

- **Iconos de odio:** Incluirlos, contabilizarlos y relacionarlos con el creador del odio y el de la entrada.
- **Odiometro:** Contabilizar el total de odio entregado y el total de odio recibido.
- **Odiometro detallado:** contabilizar el odio recibido y entregado por icono
- **Odio general:** Ranking de usuarios con más odio entregado y recibido y iconos de odio más usados.
- **Test de nivel de hater:** cuestionario para la autoevalución del odio contenido.
- **perfil por permisos** - Permisos para información oculta según si es tu perfil o no.
- **read more** - que los temas de el main sean más pequeños y poder acceder a una página única por post.

## ROUTES:

- GET / 
  - renderiza la post list
  - tiene filtro de búsqueda
  - si no está logeado, redirect a login
- GET /auth/signup
  - renderiza formulario de registro
  - el submit redirecciona a auth/signup
- POST /auth/signup
  - form (body):
    - username
    - password
  - Creamos usuario y redireccionamos a /
  - Creamos sesión de usuario
- GET /auth/login
  - renderiza la vista de login con el formulario de acceso.
  - el submit redirecciona a auth/login.
- POST /auth/login
  -form (body):
   - username
   - password
  - verificamos usuario.
  - si no tiene cuenta redirigimos a auth/signup
  - si tiene cuenta redirecciona a /
  - Creamos sesion de usaurio
- POST /auth/logout
  - redirige a una vista de despedida
  - eliminamos sesion. 
- GET /posts/create
  - renderiza la vista de creación de contenido.
- POST /posts/create
  - form (body)
    - Titulo
    - Autor
    - Radio button para eleccion del tipo de contenido
    - Contenido a publicar.
  - Crear post
  - redirecciona a la vista del /
- GET /profile/
  - renderiza la vista de perfil del usuario
- GET /profile/edit
  - renderiza la vista de edición de perfil
- POST /profile/edit
  - form (body)
    - redirecciona a la vista del formulario de edición de contendido del perfil del usuario.

## Models

User model
 
```
username: String
password: String
description: String
campus: String
cohort: String
listOfContents: [ObjectId<posts>]
```

Posts model

```
author: ObjectId<User>
title: String
text: String
date: Date
hateButtons: Array
``` 

## Links

### Trello

[Link to your trello board](https://trello.com/b/pn3Ukwof/haterhack)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/ibandasca/M02_Hater_Hack/blob/master/README.md)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
