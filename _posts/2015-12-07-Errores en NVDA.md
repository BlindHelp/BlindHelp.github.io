---
title: Errores en NVDA
layout: post
author: Noelia
permalink: "/errores1/"
series: "Errores"
---
<footer>Lunes, 7 de diciembre de 2015</footer>

En esta ocasión propondremos algunas sugerencias para comprender los errores que a veces observamos en NVDA, intentando mejorar nuestra experiencia con el lector de pantalla.
Lo haremos en compañía del investigador David C. Krakauer... O, por lo menos, con algunas de sus interesantes reflexionhes:

### 1. ¿Hay algún problema? ###

> La estupidez es un tipo de fenómeno muy interesante y tiene que ver con sistemas de normas que han hecho que nos cueste más conocer la verdad, y hablar sobre ella.

A partir de esta reflexión podemos preguntarnos:
¿De verdad hay algún error que deba ser resuelto? ¿Cómo hablar sobre él?
Si lo más propio de los errores es la expectativa de mejora:

- Observa las cosas como son y descubre cómo te gustaría que sean.
- Cuando hables sobre un error, indica cómo son las cosas (por ejemplo, versión del sistema operativo, idiomas de la interfaz, con qué frecuencia se produce el error, si es posible reproducirlo y cómo, etc); si es necesario, explica en detalle tus objetivos. Es decir: comenta lo que observas y lo que esperas.

### 2. ¿Dónde está el problema? ###

> Estar equivocado tiene en común con la ignorancia el hecho de que es más fácil acertar cuando tienes más información.

Para obtener y transmitir más información sobre La actividad de NVDA, en este caso en relación con posibles errores, suelen ser útiles los siguientes archivos:

- Archivos de registro: Se trata de archivos con extensión .log, donde se va almacenando información relacionada con la actividad de NVDA.
- Archivos de volcado: Tienen extensión .dmp, y se crean cuando se produce un error crítico en NVDA. También es posible activar la creación de archivos de volcado para aplicaciones en las que se observen fallos críticos, si se sospecha que NVDA puede estar causando esos errores.

Los archivos de registro y de volcado se almacenan en la carpeta temporal (%temp%), a menos que NVDA se ejecute desde su código fuente. (En ese caso se guardan en la carpeta "source").

### 3. Evitar el problema ###

> Si la inteligencia es resolver problemas difíciles de forma sencilla, la genialidad es hacer que los problemas desaparezcan.

En ese sentido, NVDA dispone de una opción genial: la posibilidad de reiniciarlo con los complementos desactivados, que en ocasiones puede hacer que desaparezca algún problema.
Para conocer y hablar sobre los errores observados en NVDA, puede ser útil reiniciarlo sin la interferencia de complementos. Así podrá ser más fácil determinar si un error debe ser corregido en el propio NVDA o en alguno de sus complementos.

### Referencias ###

- [Guía de NVDA](https://nvdaes.github.io/nvda/userGuide.html), disponible en el submenú Ayuda.
- [Archivos de registro y de volcado de NVDA](https://github.com/nvaccess/nvda/wiki/LogFilesAndCrashDumps) (en inglés).
- [Artículo sobre David C. Krakauwer](http://www.elconfidencial.com/alma-corazon-vida/2015-05-15/david-c-krakauer-explica-lo-que-significa-ser-inteligente_792358/).

En próximas entradas compartiremos más información sobre los archivos de registro y de volcado de NVDA.
Deseamos que disfrutes del blog y esperamos tu colaboración.

 {% include series.html %}
