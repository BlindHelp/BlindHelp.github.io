---
title: Expresiones regulares en los diccionarios del Habla
layout: post
author: Chris
---

<footer>Domingo, 29 de noviembre de 2015</footer>


Como se explica  en la sección 9.1.13 del Diccionarios del Habla en la Guía del Usuario, gracias a la creación o modificación de los diccionarios NVDA permite personalizar la forma en que el sintetizador lee   particulares palabras, más palabras, simbolos o dígitos.

En esta pequeña guía vamos a ver como utilizar Expresiones regulares en los diccionarios del habla del lector de pantalla NVDA.

A continuación se muestra una breve introducción a las expresiones regulares, Sigue una lista de caracteres especiales y secuencias especiales.
No trates de memorizar estas listas, por ahora solo debes tener  en cuenta que cada caracteres especial y cada secuencia especial tiene su propio significado y función.

Aprenderás con  los ejemplos  a entender el funcionamiento y a crear tu propio diccionario con expresiones regulares.

¿Estás listo? ¡Vamos!

### Expresiones regulares: conceptos básicos ###

En esta sección se presenta conceptos de expresiones regulares, como también, se explica cómo se crean y se utilizan en los diccionarios de voz de NVDA.

Una expresión regular, llamada también regex, es una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres y operaciones de sustituciones.
 
Específicamente,  NVDA va a explotar Expresiones regulares para reemplazar patrones cada vez que en la lectura se encuentra una coincidencia.

Podemos decir que es una operación de sustitución, donde el texto escrito se remplaza antes de  ser procesado por el sintetizador de voz.

Las expresiones regulares pueden contener caracteres ordinarios  y caracteres especiales.

Los caracteres ordinarios son las letras de la a a la z, los números, el signo subrayado y otros signos de puntuación que no están incluidos en los caracteres especiales.

La mayoría de los caracteres ordinarios, como "a A b 9 0", son las expresiones regulares más simples, simplemente  coinciden a sí mismos.

Por ejemplo se pueden concatenar caracteres ordinarios así:

la expresión "Odissea2001" coincide con "Odissea2001".

### Caracteres Especiales ###

Lista completa de caracteres especiales y su comportamiento en el contexto de las expresiones regulares:

*	"\\" Marca el siguiente caracter como un caracter especial, un literal, una referencia inversa. Por ejemplo, "r" coincide con el caracter "r", mientras  "\r" coincide con un caracter de retorno de carro. Cuando precede  caracteres que normalmente se tratan de forma especial, indica que el siguiente caracter no es especial y debe ser interpretado literalmente. Por ejemplo, la secuencia "\\" coincide con "\" y "\(" coincide con "(".
*	"." Coincide con cualquier caracter excepto con "\n".
*	"^" Coincide con la posición al principio de la cadena de entrada.  La propiedad Multiline está establecida para coincidir también con la siguiente posición a "\n" o "\r". Es decir, este caracter corresponde también a la posición inmediatamente después de una nueva línea o un retorno de carro.
*	"$" Coincide con la posición al final de la cadena de entrada. La propiedad Multiline  está establecida para que $ coincida también con la posición anterior a "\n" o "\r".
*	"?" Cuando este caracter va inmediatamente después de cualquier otro cuantificador (se mencionan a continuación), el modelo coincidente es no expansivo. Un modelo no expansivo coincide lo menos posible con la cadena buscada, mientras que el modelo expansivo predeterminado coincide tanto como sea posible con la cadena buscada.
*	"?" Un cuantificador,coincide una vez o ninguna con el caracter o subexpresión anterior. Equivale a {0,1}
*	"*" Un cuantificador, coincide cero o más veces con el caracter o subexpresión anterior. Equivale a {0,}.
*	"+" Un cuantificador, coincide una o más veces con el caracter o subexpresión anterior. Equivale a {1,}.
*	"{n}" Un cuantificador: coincide exactamente n veces, donde n es un entero no negativo. Por ejemplo, "o{2}" no coincide con la 'o' de "soy", pero coincide con las dos oes de "Cooper".
*	"{n,}" Un cuantificador: coincide como mínimo n veces, donde n es un entero no negativo. Por ejemplo, "o{2,}" coincide con todas las oes de "nooooo", pero no coincide con la "o" de "sol".
*	"{n,m}" Un cuantificador. M y n son enteros no negativos donde n es menor o igual de m. Coincide n veces como mínimo y m veces como máximo. Tener en cuenta que no se puede incluir un espacio entre la coma y los números.
*	"[xy]" Un juego de caracteres, coincide con cualquiera de los caracteres incluidos entre corchetes. Por ejemplo, "[aeu]" coincide con "a" en "Madrid". 
*	"[^xy]" Un juego de caracteres negativo. Coincide con cualquier caracter no incluido entre corchetes. Por ejemplo, "[^aeu]" coincide con la "M", la"d", la "r", la "d" de "Madrid", pero no coincide con la "a". 
*	"[a-z]" Un intervalo de caracteres, coincide con cualquier caracter del intervalo especificado. Por ejemplo, "[a-z]" coincide con cualquier caracter alfabético en minúsculas dentro del intervalo de la 'a' a la 'z'. 
*	"[^a-z]" Caracteres de un intervalo negativo. Es decir, coincide con cualquier caracter que no esté incluido en el intervalo especificado. Por ejemplo, "[^a-z]" coincide con cualquier caracter que no esté incluido en el intervalo de la 'a' a la 'z'.
*	"\|" Es un carácter disyuntivo: x|y, coincide con x o con y. Por ejemplo, la expresión "Juli(a|o)" coincide con "Julia" o con "Julio".
*	"(...)" Una subexpresión que coincide con el modelo entre paréntesis y captura la coincidencia. La coincidencia capturada se puede recuperar en el remplazo  mediante las secuencias especiales "\1" "\2" etc. Para que coincidan los paréntesis ( ), utilice "\(" o "\)".
*	"(?:...)" Una subexpresión que coincide con el modelo entre los paréntesis, pero que no captura la coincidencia, es decir, la coincidencia no se almacena para un posible uso posterior. La expresión "(?:\d+)(Salir)" coincide con la palabra "Salir" despues un conjunto de números en una cadena como por ejemplo "123456Salir Grafico Enlace". Notar, los números no se almacenan y a demás no serán   procesado por el sintetizador. El sintetizador simplemente ignora el contenido de esta Afirmación. Esta subexpresión se considera como  grupo de cadena irregular, No se utiliza mucho en los diccionarios.
*	"(?=...)" Una subexpresión que realiza una búsqueda anticipada positiva, la cual coincide con la cadena en cualquier punto donde empiece una cadena que coincida con el modelo entre los paréntesis. Por ejemplo, "Juli(?=a|o)" coincide con "Juli" en "Julia" pero no con "Juli" en "Juliu". Ésta es una coincidencia sin captura, es decir, la coincidencia no se captura para un posible uso posterior. Las búsquedas anticipadas no consumen caracteres, es decir, después de que se produce una coincidencia, la búsqueda de la siguiente comienza inmediatamente después de la última coincidencia, no después de los caracteres que componen la cadena de búsqueda anticipada.
*	"(?!...)" Una subexpresión que realiza una búsqueda anticipada negativa, la cual coincide con la cadena de búsqueda en cualquier punto donde empiece una cadena que no coincida con el modelo. Por ejemplo, "Juli(?!e|u)" coincide con "Juli" en "Julia" pero no coincide con "Juli" en "Julie".  Ésta es una coincidencia sin captura, es decir, la coincidencia no se captura para un posible uso posterior. Las búsquedas anticipadas no consumen caracteres, es decir, después de que se produce una coincidencia, la búsqueda de la siguiente comienza inmediatamente después de la última coincidencia, no después de los caracteres que componen la cadena de búsqueda anticipada.
*	"(?<=...)" Afirmación look-behind positiva, es decir, es válida la siguiente expresión sólo si la condición del modelo entre paréntesis se verifica. Por ejemplo, "(?<=0)\d" coincide con cualquier número precedido por cero. Las afirmaciones son sin captura, es decir, no se captura para un posible uso posterior.
*	"(?<!...) Afirmación look-behind no positiva, es decir, es válida la siguiente expresión sólo si la condición del modelo entre paréntesis  no se verifica. Por ejemplo, "(?<![1-9])\d" coincide con cualquier número que no está precedido por un número comprendido entre 1 y 9.

### Secuencias Especiales ###

Las secuencias especiales  consisten en "\\" y un caracter ordinario como en  la lista de abajo.  Si el caracter ordinario no está en la lista, entonces la resultante  expresione coincidirá con el segundo caracter.

*	"\A" Coincide sólo en el inicio de la cadena.
*	"\Z" Coincide sólo con el final de la cadena.
*	"\b" Coincide con el límite de una palabra. Es decir, la posición entre una palabra y un espacio. Por ejemplo, "ir\b" coincide con 'ir' en "mentir", pero no coincide con 'ir' en "mentira". 
*	"\B" Coincide con una posición que no es un límite de palabra. La expresión "ir\B" coincide con "ir" en "mentiras", pero no coincide con "ir" en "mentir". 
*	"\d" Coincide con un dígito. Equivale a "[0-9]".
*	"\D" Coincide con un caracter que no sea un dígito. Equivale a "[^0-9]". 
*	"\s" Coincide con cualquier caracter de espacio en blanco incluidos espacio, tabulación, avance de página, etc. Equivale a "[\f\n\r\t\v]".
*	"\S" Coincide con cualquier caracter que no sea un espacio en blanco. Equivale a "[^\f\n\r\t\v]". 
*	"\w" Coincide con cualquier caracter alfanumérico incluido el subrayado. Equivale a "[A-Za-z0-9_]".
*	"\W" Coincide con cualquier caracter que no pertenezca a los caracteres alfanuméricos. Equivale a "[^A-Za-z0-9_]".

### Ejemplos: ###

Finalmente llegamos a la parte práctica  con los ejemplos.

Por conveniencia usaremos un diccionario temporál en los ejemplos. Para ello, necesitamos ajustar la opción para las expresiones regulares desde el diálogo correspondiente.

#### Ejemplo 1 ####

El sintetizador eSpeak en español pronuncia con C suave palabras extranjeras que comienzan con "ch", como Christ, christmass, Christofer o Christopher, Christian etcetera.
Si deseamos escuchar una pronunciación mejor, podemos usar la siguiente y sencilla expresión regular.

Patrón: "\bChri\B"

Reemplazar: "Cri"

Explicación: la secuencia especial "\b" marca el inicio de la palabra, mientras la secuencia "\B" (la B mayúscula) dice que en esta posición no hay limite de  palabra.

Cada vez que se encuentra el prefijo "Chri" en el texto, el sintetizador lee el texto indicado en el Reemplazo "Cri".

Tener en cuenta que las secuencias especiales \b y \B son marcadores de posición, no necesitan una recuperación en el reemplazo.

La mayoría de las secuencias especiales, como por ejemplo \s, \w, \d, necesitan ser recuperadas en el reemplazo, si no vamos a recuperarlas no se envierán al sintetizador.

#### Ejemplo 2 ####

A veces puede ser útil leer el nombre de unidades de medida  cuándo en el texto aparece como  abreviatura.

Por ejemplo, 1ml 12 ml.
Tal vez ¿no sería  fantástico  que el sintetizador lea así?

Un mililitro y doce mililitros.

Necesitamos dos expresiones regulares para distinguir el plural y el  singular.

Primera expresión regular.

Patrón: "(^|\s)1[ ]?ml\b"

Reemplazar: "\1un mililitro"

Segunda expresión:

Patrón: "(?<=\d)[ ]?ml\b".

Reemplazar: " Mililitros".

Explicación: la primera subexpresión "(^|\s)" tiene en cuenta cuándo la posición es al principio o si hay un espacio antes del número 1.

Esta subexpresión se puede recuperar en el remplazo mediante la secuencia especial \1.

Recuerde que las subexpresiones regulares entre paréntesis, llamadas también grupos de cadena, se pueden recuperar en el remplazo con la secuencia especial correspondiente. Es decir, el primero grupo de cadena de izquierda a derecha se recupera con \1, el segundo con \2, etcétera.
Despues el grupo hay el número 1, ya que estamos buscando en el texto 1ml o 1 ml, puede ser que hay o no un espacio entre el número y la abreviadura.

Entre corchetes he puesto un espacio, se pueden añadir distintos caracteres de espacio. Luego hay un cuantificador, cerrar interogación, indica que esto espacio puede aparecer una vez o ninguna.

En fin, la nuestra abreviadura ml y una secuencia especial "\b" para cerrar la expresión regular.

La secuencia al fin indica un limite de palabra, es decir que "ml\b" no puede coincidir  por ejemplo con "mls" o "mla".

La segunda expresión regular se abre con una aserción "(?<=\d), significa que nuestra expresión Es válida solo si hay un digito antes.

La aserción usa una secuencia especial "\d" que coincide con cualquier número.

Entonces, ¿por qué no funciona si antes hay solo el número 1?

Dejo a vos otros la respuesta...

Ahora, gracias a las dos expresiones regulares, cuándo "ml" es antecedido por 1 y ningun caracter alfanumerico antes, el sintetizador  lee "mililitro".
En los demás casos el sintetizador lee "mililitros".
  
El orden es importante, las expresiones regulares más arriba Tienen prioridad y puede cancelar las expresiones posteriores.
Por eso la segunda expresiónSe inserta a continuación de la primera.

¿Qué estás esperando? Ahora trata de crear  reglas para leer otras unidades  como  Kg, MB, m² o cm³.

#### Ejemplo 3 ####

Todavía es práctica común  separar los millares, millones, etc., mediante un espacio Para facilitar la lectura de  números cuando constan de más de cuatro cifras:

> 12 354 o 1 303 404.

Algunos sintetizadores no leen correctamente esta forma de escribir los números enteros, más adelante se explica cómo configurar una expresión regular para leer correctamente.

Abrimos un  diálogo para crear nuestro  diccionario del habla desde el menu  Preferencias.

Necesitamos ajustar el patrón para comparar como  expresión regular desde el botón de opción correspondiente, y rellenar el campo Patrón y el campo de reemplazar.

Patrón: "(?<=\d)([   ]?)(\d{3})"

reemplazar: "\2"

Vamos a explicar.

La primera afirmación indica que la buscueta es vera si hay un digito antes la cadena.
Sigue una subexpresión entre parentesis con adentro un juego de espacios, son tres   signos distintos de espacio que se pueden encontrar.

Recuerda que solo uno de los caracteres entre corchetes coincide con la búsqueda, luego hay un cuantificador "?" para indicar que se puede encontrar cero o  una sola vez.
Sigue a la derecha otra subexpresión entre parentesis que  indica un número de tres dígitos. El cuantificador "{3}" significa que  el digito "\d" debe repetirse tres veces, ni menos ni más.

Vamos a ver lo que tenemos que insertar en el campo reemplazar.

La primera subexpresión "(?<=\d)" en el patrón es una afirmación, no se almacena para un posible uso en el remplazo.
esto no significa que no se tendrán en cuenta los caracteres de esa afirmación, el sintetizador va a leer esto digito junto a los otros sin recuperar la subexpresión en el campo reemplazar.

El segundo grupo o subexpresión "([  ]?)" es una subexpresión regular y se puede recuperar en el remplazo mediante la secuencia especial \1.
Pero nosotros queremos excluir a este espacio entonces No lo recuperamos.

Por lo contrario, vamos a recuperar la tercera subexpresión "(\d{3})" mediante la secuencia especial \2.

De esta manera enviamos al sintetizador   un  número sin espacios entre los dígitos.

#### Ejemplo 4 ####

Cuándo consultamos a una lista de números de teléfono, o algo así, puede ser útil leer los números como  singulares  dígito.

Por ejemplo, cuándo se encontra 3332211444 Se podría sustituir como si estuviera escrito “3 3 3 2 2 1 1 4 4 4”.

Necesitamos una secuencia especial en el patrón de búsqueda que encontra o coincida con cualquier numero, luego añadir un espacio despues cada digito sólo cuando es seguido por otro digito.

Patrón: "(\d)(?=\d)"

Reemplazar: "\1 ".

En el remplazo recuperamos el primero grupo "(\d)" con "\1" y inmediatamente después hay un espacio.
El patrón de búsqueta encuentra cualquier digito solo si es seguido por otro digito.
 
Este es un ejemplo de una expresión regular que se puede utilizar en determinados casos, pero la mayoría de las veces dá una lectura tediosa. Está bien para leer números de telefono, no sería agradable leer por ejemplo "Son las 13:26".

Como hemos visto, las expresiones regulares permiten encontrar especifico texto y remplazar a nuestro gusto antes de enviarlo al sintetizador.

La mayoría de las veces es suficiente  utilizar expresiones regulares simples, 
aunque si debemos tener en cuenta que más la expresión regular es  simple,  entonces la búsqueda será menos específica.

Una sugerencia que  quiero dejar  antes de concluir es no crear diccionarios del habla muy largos.
He visto algunos con más de 1500 espresiones regulares, demasiado grande y  puede ralentizar mucho el lector de pantalla.

Además, no hay necesidad de corregir los errores de ortografía, o tratar de simular la pronunciación extranjera cuando el sintetizador no tiene los fonemas necesarios.
