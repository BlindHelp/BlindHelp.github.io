---
title: NVDA ha cambiado al sintetizador de voz eSpeak NG
layout: post
author: Chris
---

<footer>Sábado, 18 de junio de 2016</footer>

Desde que el desarrollo de eSpeak pareció haberse detenido por un motivo desconocido, un proyecto  separado de eSpeak fue creado por la comunidad.

El proyecto [eSpeak-ng](http://www.github.com/espeak-ng/espeak-ng)
tiene un desarrollo activo, por esta razón la comunidad de NVDA ha decidido cambiar al sintetizador eSpeak-ng.

### ¿Qué hay de nuevo en espeak New Generation?###

El trabajo inicial contiene mejoras para la reestructuración y la  compilación del programa.
Hay una lista larga de cambios, los mayores son:

*	Soporte  de las opciones `--compile-phonemes` y `--compile-intonations` como línea de comandos.
*	Se han solucionado muchos problemas de lógica y de seguridad reportados    por  clang scan-build.
*	Soporte para Windows and BSD platforms.
*	Añadido el soporte para `maintainer` y `status`  en los archivos  de voz para el seguimiento y el mantenimiento de los idiomas.
*	El código fuente es construido en C99, en vez de  C++.
*	Se usa  -fPIC para el soporte  a la arquitecturas sparc/sparc64.
*	Ahora se usa el sistema  s Sonic-library.
*	Cuando los fonemas, los diccionarios y la entonación contienen errores se genera una falta al compilar los archivos.
*	Para la compilación de eSpeak-ng en Windows se proporciona el uso del Visual Studio más reciente, con  un proyecto  WiX-based para crear un instalador   MSI.
*	Quitado el programa  `espeakedit` y sus   dependencias relacionadas a wxWidgets.
*	Reemplazadas las API de audio con PCAudioLib para mejorar la portabilidad de audio y compartir a través de diferentes proyectos.

Se incluyen en los cambios  actualizaciones para algunos idiomas y la inclusión de nuevos idiomas.
Entre los idiomas añadidos están el Lituano, el Guaraní, el Maltés, el Myanmar, el Setswana y Tatar.

En cambio, acerca de las actualizaciones de idiomas hay mejoras para el Inglés, el Francés,  el italiano, el Persa y el Gaélico y añadido el apoyo para la    pronunciación politónica en griego.

Acerca del Español hay un reciente trabajo en particular sobre la entonación.

En eSpeak no existía una entonación española, se usaba la entonación por defecto en inglés.

uno de los problemas más grandes era distinguir las preguntas  con frases que terminan con coma.
La entonación en inglés de las preguntas no necesita  una curva melódica muy expresiva, solo al final resulta mas ascendente respecto a frases con coma.

Por eso la necesidad de crear una entonación basada en las reglas globales de la entonación en español. 

La entonación española ya está incluida en eSpeak-ng, pero aún no se encuentra en NVDA 2016.2.

En los comentarios dejaremos una versión de prueba para escuchar esta entonación con probables mejoras día a día.

Dejaremos otras versiones de prueba para escuchar un trabajo experimental sobre las vocales y otros fonemas.

Hay un repositorio a parte del repositorio principal eSpeak-ng donde se puede seguir el trabajo experimental, añadir mejoras, sugerencias o enviar incidencias: [spanishOnEspeak-ng](https://github.com/Christianlm/SpanishOnEspeak-ng.git).

### eSpeak-ng suena robótico... ###

El sintetizador eSpeak-ng usa spectral formant syntesis por defecto, por eso tiene un sonido robótico, pero puede ser configurado para usar klatt syntesis, y también  MBROLA, para darle un sonido más natural.

Acerca de esto, hay una solicitud para añadir en espeak-ng el klatt de Speech Player, desarrollado por Michael Curran de NVDA. Todavía No hay ninguna decisión concreta sobre el   klatt a utilizar.

Para concluir, esperamos comentarios sobre los problemas conocidos y desconocidos de eSpeak-ng y consejos para aportar mejoras al idioma Español.
