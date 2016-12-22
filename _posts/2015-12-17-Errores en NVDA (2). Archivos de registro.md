---
title: Errores en NVDA (2). Archivos de registro
layout: post
author: Noelia
permalink: "/errores2/"
series: "Errores"
---
<footer>Jueves, 17 de diciembre de 2015</footer>

En este artículo se explica cómo encontrar los archivos de registro de NVDA, que, como mencionamos en la entrada Errores en NVDA, pueden ayudar a comprender, comunicar y solucionar problemas y, por ello, a mejorar la experiencia con el lector de pantalla.
NVDA guarda información sobre su actividad en los siguientes archivos:

- nvda.log: contiene un registro de procesos correspondientes a la última vez que NVDA fue ejecutado, hasta el momento actual o hasta el final de la ejecución.
- nvda-old.log: en este caso, el registro corresponde a la anterior (penúltima) ejecución de NVDA.

Podemos señalar los siguientes aspectos, comunes a ambos archivos de registro:

- Si NVDA no se ha ejecutado desde su código fuente, por defecto nvda.log y nvda-old.log se guardan en la "carpeta temporal del usuario", que puede abrirse indicando %temp% en elementos de Windows que admitan nombres de carpetas; por ejemplo, en el diálogo ejecutar (Windows+r) o en la barra de direcciones del Explorador de Windows.
- Como archivos de registro con extensión .log, pueden abrirse con editores de texto como el Bloc de notas.
- La cantidad de información guardada depende del nivel del registro establecido en el diálogo Opciones generales (Para más información, consultar la "Guía del usuario", disponible en el submenú Ayuda de NVDA).

En cuanto a diferencias entre nvda.log y nvda-old.log:

- Cuando NVDA se esté ejecutando, solo nvda.log podrá mostrarse en el "Visualizador de registro de NVDA", accesible en el submenú Herramientas. El Visualizador de registro dispone de un menú para elegir dónde guardar la información mostrada en un momento determinado y para actualizar esta información, como se explica en la guía de NVDA.

Nota: Por favor, ten en cuenta que estos archivos, en función del nivel del registro, podrían guardar información personal, por ejemplo sobre teclas pulsadas o lo que NVDA ha leído o mostrado en braille.

En una próxima entrada nos centraremos en los archivos de volcado.

Felices fiestas.

{% include series.html %}