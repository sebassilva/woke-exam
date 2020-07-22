# Woke
El proyecto se divide en dos grandes secciones. La primera es el proyecto de frontend construido en Angular 9. se encuentra en el directorio dashboard/woke.

El Backend se hizo con dJango, utilizando Django 3.0 rest framework y utilizando Sqlite. Dicho proyecto se encuentra en la carpeta /api.

Decidí manejar ambos proyectos en un mismo repositorio por simplicidad y para enviar sólo este repositorio.


## Woke frontend


### Servidor desarrollo
Para correr el proyecto de angular primero se tiene que instalar las dependencias con 
```shell
cd dashboard/woke
npm install
```

Para servir el proyecto, corremos el comando
```shell
ng serve
```
y podremos acceder a 
`http://localhost:4200/`.



## Getting started
Primero, hay que asegurarnos de tener una versión de python > 3.6.

```shell
python --version
```

Crea un entorno virtual 
```shell
py -m venv apienv

```
Activa tu entorno virtual. Si ves del lado izquierdo de tu terminal algo como (apienv) Tu nombre: lo hiciste correctamente.
```shell
./apienv\Scripts\activate.bat
```

o si utilizas linux 
```shell
source apienv/bin/activate
```

Instala las bibliotecas necesarias:
```shell
pip install -r requirements.txt
```

Si tien

Es necesario que corras las migraciones, es decir, que crees toda la estructura necesaria en la base de datos.
```shell
python manage.py makemigrations
```
Ahora estás listo para correr el servidor en tu máquina local, utilizando. El siguiente comando crea una instancia de 
django y la hace disponible en el puerto 8000 de tu computadora.

```shell
python manage.py runserver
```


Es necesario que tengas también un super usuario para realizar super actividades ;) 

```shell
python manage.py createsuperuser
```

Llena todos los datos que te pide y pon una contraseña segura. Solo los super usuarios tienen acceso a crear, editar y eliminar usuarios. Todos los demás usuarios solo pueden ver el resto de los usuarios.

## Consideraciones adicionales

Algunas cosas por mejorar serían: 
- Cambiar las credenciales a variables de ambiente o utilizar algún servicio para proveerlas en el backend
- Cambiar la base de datos a una más robusta (Postgresql o MySQL)
- Mejorar el manejo de excepciones en backend y frontend
- Cambiar los errores de django a español
- Mejorar el diseño del sitio

Tiempo estimado de desarrollo: 4 horas.
