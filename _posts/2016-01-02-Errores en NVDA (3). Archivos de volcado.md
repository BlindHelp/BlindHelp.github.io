---
title: Errores en NVDA (3). Archivos de volcado
layout: post
author: Noelia
permalink: "/errores3/"
series: "Errores"
---
<footer>Sábado, 2 de enero de 2016</footer>

A continuación traducimos parte de un [artículo sobre archivos de registro y de volcado](https://github.com/nvaccess/nvda/wiki/LogFilesAndCrashDumps) (en inglés), publicado en el [Wiki de NV Access](https://github.com/nvaccess/nvda/wiki).
No consideramos necesaria su traducción completa, ya que en artículos anteriores sobre errores se ofrece información sobre los archivos de registro.

### Archivos de volcado ###

Esto se aplica a NVDA 2014.1 y posterior. Versiones anteriores no generan archivos de volcado.
Si NVDA se bloquea, generará un fichero llamado archivo de minivolcado ("minidump"), que ayudará a los desarrolladores a determinar la causa del bloqueo. Adicionalmente, los archivos de minivolcado también pueden ser generados bajo demanda para otras aplicaciones que se bloqueen, si se sospecha que NVDA es la causa del bloqueo.

#### Archivos de minivolcado para el propio NVDA ####

Cuando NVDA se bloquee, habitualmente se reiniciará por sí mismo. En algunas circunstancias excepcionales, esto podría no funcionar.
Si NVDA se bloquea, se generará un archivo de minivolcado en un fichero llamado nvda_crash.dmp. Para la mayoría de usuarios, este fichero puede encontrarse en la "carpeta temporal del usuario" (%temp%). Para usuarios que ejecuten NVDA desde el código fuente, nvda_crash.dmp se ubicará en el directorio source.

#### Archivos de minivolcado para otras aplicaciones ####

Si una aplicación que usas se está bloqueando y sospechas que NVDA es la causa, puedes solicitar que se genere un archivo de minivolcado cuando esa aplicación se bloquee. En general, solo deberías hacer esto cuando un desarrollador lo solicite o si eres un usuario avanzado. Esto no está habilitado por defecto, y es necesario habilitarlo para cada aplicación después de que haya sido ejecutada.
Para habilitarlo para una aplicación determinada:

1. Ve a la aplicación.
2. Pulsa NVDA+control+z para abrir la consola Python de NVDA.
3. Teclea la siguiente instrucción exactamente como aparece (probablemente querrás copiar y pegarla):
<q>focus.appModule.dumpOnCrash()</q>
4. Pulsa Enter
5. Se mostrará la ruta del archivo que será generado. Si deseas copiarla, puedes pulsar f6 para desplazarte al "texto de salida" de la consola.

Estos archivos de volcado siempre se ubicarán en la "carpeta temporal del usuario" (%temp%). El nombre de estos archivos tiene la forma nvda_crash_appName_processId.dmp, donde appName es el nombre del fichero ejecutable de la aplicación.

### Referencias ###

- [Cómo leer un minidump](https://norfipc.com/recuperar/como-leer-minidump-saber-provoca-error-pantalla-azul.php).
- [Usar archivos de volcado de memoria para depurar bloqueos de la aplicación en Visual Studio](https://msdn.microsoft.com/es-es/library/d5zhxt22.aspx).

Esperamos que esta información sea útil, y deseamos un feliz 2016 a los miembros presentes o futuros de nuestra comunidad, con una [cita compartida en la lista de correo de NVDA](https://es.groups.yahoo.com/neo/groups/nvdaespanol/conversations/messages/24189):

> Cuando el poder del amor sobrepase el amor al poder, el mundo conocerá la paz.

Jimi Hendrix

{% include series.html %}
