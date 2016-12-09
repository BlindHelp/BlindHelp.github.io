---
title: NVDA ha cambiado al sintetizador de voz eSpeak NG
layout: post
author: Chris
---


<footer>S�bado, 18 de junio de 2016</footer>

Desde que el desarrollo de eSpeak pareci� haberse detenido por un motivo desconocido, un proyecto  separado de eSpeak fue creado por la comunidad.

El proyecto [eSpeak-ng](http://www.github.com/espeak-ng/espeak-ng)
tiene un desarrollo activo, por esta raz�n la comunidad de NVDA ha decidido cambiar al sintetizador eSpeak-ng.

### �Qu� hay de nuevo en espeak New Generation?###

El trabajo inicial contiene mejoras para la reestructuraci�n y la  compilaci�n del programa.
Hay una lista larga de cambios, los mayores son:

*	Soporte  de las opciones `--compile-phonemes` y `--compile-intonations` como l�nea de comandos.
*	Se han solucionado muchos problemas de l�gica y de seguridad reportados    por  clang scan-build.
*	Soporte para Windows and BSD platforms.
*	A�adido el soporte para `maintainer` y `status`  en los archivos  de voz para el seguimiento y el mantenimiento de los idiomas.
*	El c�digo fuente es construido en C99, en vez de  C++.
*	Se usa  -fPIC para el soporte  a la arquitecturas sparc/sparc64.
*	Ahora se usa el sistema  s Sonic-library.
*	Cuando los fonemas, los diccionarios y la entonaci�n contienen errores se genera una falta al compilar los archivos.
*	Para la compilaci�n de eSpeak-ng en Windows se proporciona el uso del Visual Studio m�s recente, con  un proyecto  WiX-based para crear un instalador   MSI.
*	Quitado el programa  `espeakedit` y sus   dependencias relacionadas a wxWidgets.
*	Reemplazadas las API de audio con PCAudioLib para mejorar la portabilidad de audio y compartir a trav�s de diferentes proyectos.

Se incluyen en los cambios  actualizaciones para algunos idiomas y la inclusi�n de nuevos idiomas.
Entre los idiomas a�adidos est�n el Lituano, el Guaran�, el Malt�s, el Myanmar, el Setswana y Tatar.

En cambio, acerca de las actualizaciones de idiomas hay mejoras para el Ingl�s, el Franc�s,  el italiano, el Persa y el Ga�lico y a�adido el apoyo para la    pronunciaci�n polit�nica en griego.

Acerca del Espa�ol hay un reciente trabajo en particular sobre la entonaci�n.

En eSpeak no exist�a una entonaci�n espa�ola, se usaba la entonaci�n por defecto en ingl�s.

uno de los problemas m�s grandes era distinguir las preguntas  con frases que terminan con coma.
La entonaci�n en ingl�s de las preguntas no necesita  una curva mel�dica muy expresiva, solo al final resulta mas ascendente respecto a frases con coma.

Por eso la necesidad de crear una entonaci�n basada en las reglas globales de la entonaci�n en espa�ol. 

La entonaci�n espa�ola ya est� incluida en eSpeak-ng, pero a�n no se encuentra en NVDA 2016.2.

En los comentarios dejaremos una versi�n de prueba para escuchar esta entonaci�n con probables mejoras d�a a d�a.

Dejaremos otras versiones de prueba para escuchar un trabajo experimental sobre las vocales y otros fonemas.

Hay un repositorio a parte del repositorio principal eSpeak-ng donde se puede seguir el trabajo experimental, a�adir mejoras, sugerencias o enviar incidencias: [spanishOnEspeak-ng](https://github.com/Christianlm/SpanishOnEspeak-ng.git).

###eSpeak-ng suena rob�tico...###

El sintetizador eSpeak-ng usa spectral formant syntesis por defecto, por eso tiene un sonido rob�tico, pero puede ser configurado para usar klatt syntesis, y tambi�n  MBROLA, para darle un sonido m�s natural.

Acerca de esto, hay una solicitud para a�adir en espeak-ng el klatt de Speech Player, desarrollado por Michael Curran de NVDA. Todav�a No hay ninguna decisi�n concreta sobre el   klatt a utilizar.

Para concluir, esperamos comentarios sobre los problemas conocidos y desconocidos de eSpeak-ng y consejos para aportar mejoras al idioma Espa�ol.
 