
# Proyecto de Papachos

El proyecto de Papachos se basa en el desarrollo desde 0 de una página web que esta hecha para un restaurante ficticio que tiene las mejores hamburguesas de Valencia. El objetivo principal fue desarrollar un proyecto web desde cero con ciertos requerimientos. El diseño está inspirado en dos restaurantes uno Peruano y uno de Nueva York, combinando estilos de ambas para crear una apariencia única. La página web es responsive, adaptándose a diferentes tamaños de pantalla, y cuenta con un menú dinámico que utiliza JavaScript para mostrar y ocultar sus opciones.


<img src='https://github.com/francescabentin/burguer-website/blob/main/src/images/imagen-readme.png'>

## Requerimientos y calidad básica:
- Encabezado con el logotipo y menú de navegación
- Sección de presentación con imagen y texto
- Sección de menú con una lista de hamburguesas y sus precios (mínimo 4, máximo 6)
- Pie de página con enlaces a redes sociales
- La página web debe ser completamente responsive y adaptarse a diferentes tamaños de pantalla
- Utilizar Flexbox o CSS Grid para el diseño
- Utilizar al menos una animación o transición con CSS
- El css debe escribirse en BEM
- El menú de navegación debe ser funcional (apertura y cierre)

## El proceso de desarrollo del proyecto se llevó a cabo de la siguiente manera:

- Estructura del proyecto: Se creó una estructura básica del proyecto que incluía los archivos HTML, scss y JavaScript necesarios como las herramientas elegidas para arrancar el proyecto.
- Desarrollo de los elementos básicos: Se comenzó a desarrollar el proyecto de manera gradual, enfocándose en una sección a la vez. Primero implemente las funcionalidades y elementos de cada seccion como el menu o estructura de sección.
- Detalles de diseño: Una vez que que la pagina ya estaba operativa funcionaba el menu y tenia lo basico de informacion pero sin mucho estilo comence con los detalles, imagenes, buscar colores y rellenar alguna seccion que faltase.
- Detalles responsive: teniendo todos los elementos que conformarian la pagina me dedique a alienar el grid y hacer las media queries de tablet y desktop ya que primordialmente elegi el mobile first.
- Detalles finales y eleccion de animaciones: pulir detalles que faltan y elegir la animación correcta, por ejemplo elegi descartar un slider por que no hace la pagina tan eficiente y penaliza descarga, por lo que elegi ot5ra anmjiacion y darle preferencia a la accesibilidad y rendimiento que a la animacion en si. 
- Pruebas finales: finalmente comparti la pagina a diferentes dispositivos para ver como funcionaba en diferentes dispositivos y navegadores para garantizar un correcto funcionamiento y una buena experiencia de usuario. 


# Herramientas utilizadas:
- HTML y CSS
- SASS como preprocesador de CSS
- NPM como gestor de paquetes y dependencias
- Gulp, herramienta de automatización de tareas (WSK)

# Explicación del starter kit:
Es una plantilla de proyecto con funcionalidades preinstaladas y preconfiguradas, incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local que automatiza tareas.

En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... (no se modifican)
- La carpeta src/: son los ficheros de nuestra página web, como HTML, CSS, JS...(en caso se quiere editar)
- Las carpetas public/ y docs/, que son generadas automáticamente cuando se arranca el proyecto (usando npm run docs). El Kit lee los ficheros que hay dentro de src/, los procesa y los genera dentro de public/ y docs/.

# Pasos para arrancar el proyecto:
1. Se instalan las dependencias ejecutando el comando -> **npm install** (hay que tener **node JS** previamente instalado)
2. Ejecutas el comando -> **npm start**





