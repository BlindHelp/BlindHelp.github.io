---
title: Expressions régulières dans les Dictionnaires de Prononciation
permalink: "/utilisez-des-expressions-regulieres-dans-les-dictionnaires-de-prononciation/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 15 août 2021</footer>

Coucou mes amis du blog de BlindHelp!    
Dans cet article nous allons aborder les expressions régulières utilisées  dans les dictionnaires de prononciation du lecteur d'écran NVDA.    

Il y aura deux parties, la première expliquée par Chris Leo (Adapté puis traduit en français par mes soins), qui contiendra des exemples pratiques et la deuxième partie expliquée  par @ abdel792, qui nous donnera d'autres exemples d'utilisation.    

Je vous souhaite une bonne lecture.    

# Expressions régulières utilisées  dans les dictionnaires de prononciation par Chris #

Comme expliqué dans la section "Dictionnaires de Prononciation" dans le Guide de l'utilisateur de NVDA, grâce à la création ou à la modification des dictionnaires NVDA, il vous permet de personnaliser la manière dont le synthétiseur lit les symboles, les chiffres ou les mots.    

Note: L'utilisation du Dictionnaires de Prononciation ne sera pas expliquée dans cet article.    

Veuillez consulter ceci dans le Guide de l'utilisateur de NVDA <A HREF="../userGuide.html#SpeechDictionaries">12.2.1. Dictionnaires de Prononciation</A>    

Cependant, dans cet article, nous verrons comment utiliser des expressions régulières dans les dictionnaires de prononciation du lecteur d'écran NVDA.    

Vous trouverez ci-dessous une brève introduction à des expressions régulières, suivies d'une liste de caractères spéciaux et de séquences spéciales.    
N'essayez pas de mémoriser ces listes, vous devez maintenant garder à l'esprit que chaque caractère spécial et chaque séquence spéciale a sa propre signification et sa propre fonction.    

Avec l'aide de plusieurs exemples supplémentaires, vous apprendrez à comprendre  le fonctionnement et à créer votre propre dictionnaire avec des expressions régulières.    

Tu est prêt? Allons-y!    

### Expressions régulières: concepts de base ###

Cette section présente des concepts d'expressions régulières et explique comment ils sont créés et utilisés dans les dictionnaires de parole de NVDA.    

Une expression régulière, aussi appelée regex, est une séquence de caractères  qui forme un modèle de recherche, principalement utilisé pour la recherche de modèles de chaînes de caractères et les opérations de remplacements.    
 
Plus précisément, NVDA exploitera des expressions régulières pour remplacer des modèles chaque fois que dans la lecture il y a  une correspondance.    

Nous pouvons dire qu'il s'agit d'une opération de remplacement, le texte écrit est remplacé avant d'être traité par le synthétiseur vocal.    

Les expressions régulières peuvent contenir des caractères ordinaires et des caractères spéciaux.    

Les caractères ordinaires sont les lettres de a à z, les chiffres, le signe souligné et d'autres signes de ponctuation qui ne sont pas inclus dans des caractères spéciaux.    

La plupart des caractères ordinaires, tels que "a A b 9 0", sont les expressions régulières les plus simples, coïncident simplement avec eux-mêmes.    

Par exemple, des caractères ordinaires peuvent être concaténés comme suit:    

L'expression "Odyssée2001" coïncide avec "Odyssée2001".    

### Caractères spéciaux ###

Liste complète des caractères spéciaux et de leur comportement dans le contexte d'expressions régulières:    

*	"\\" Marque le caractère suivant comme un caractère spécial, un littéral, une référence inverse. Par exemple, "r" coïncide avec le caractère "r", tandis que  "\r" coïncide avec un caractère de retour chariot. Lorsque précède de caractères qui sont normalement traités d'une manière spéciale, il indique que le caractère suivant n'est pas spécial et doit être interprété littéralement. Par exemple, la séquence "\\\\" coïncide avec "\\" et "\\(" coïncide  avec le signe de parenthèse gauche.
*	"." Cela coïncide avec n'importe quel caractère sauf avec "\n".
*	"^" Coïncide avec la position au début de la chaîne d'entrée. La propriété multiligne est établie pour correspondre aussi avec la position suivante   à "\n" ou "\r". C'est-à-dire, ce caractère correspond également à la position immédiatement après une nouvelle ligne ou un retour chariot.
*	"$" Coïncide avec la position au finale de la chaîne d'entrée. La propriété multiligne est établie pour que $ aussi coïncide avec la position précédente  à "\n" ou "\r".
*	"?" Lorsque ce caractère va immédiatement après tout autre quantificateurs (ils sont mentionnés ci-dessous), le modèle coïncident est non-expansive. Un modèle non expansive coïncide le moins possible avec la chaîne recherchée, tandis que le modèle expansif par défaut coïncide autant que possible avec la chaîne recherchée.
*	"?" Un quantificateur, coïncide une fois ou aucune avec le caractère ou la sous-expression précédente. Équivaut à {0,1}
*	"*" Un quantificateur, coïncide zéro  ou plusieurs fois avec le caractère ou la sous-expression précédente. Équivaut à {0,}.
*	"+" Un quantificateur, coïncide une ou plusieurs fois avec le caractère ou la sous-expression précédente. Équivaut à {1,}.
*	"{n}" Un quantificateur: coïncide exactement n fois, où n est un entier non négatif. Par exemple, "o{2}" ne coïncide  pas à le 'o' de "copine", Mais cela coïncide avec les deux oes de "Cooper".
*	"{n,}" Un quantificateur: coïncide au minimum   n fois, où n est un entier non négatif. Par exemple, "o{2,}" coïncide avec tous les  oes de "ooooohhhhhh" ou "nooooon", mais ne coïncide  pas   avec le "o" de "soleil".
*	"{n,m}" Un quantificateur. M et n ce sont des entiers non négatifs où n est inférieur ou égal à  m. Cela coïncide n fois au minimum    et m fois au maximum. Gardez à l'esprit que vous ne pouvez pas inclure d'espace entre la virgule et les chiffres.
*	"[xy]" Un jeu de caractères coïncide, avec l'un des caractères inclus entre crochets. Par exemple, "[aeu]" coïncide avec "a" dans "Madrid".
*	"[^xy]" Un jeu de caractères négatifs. Coïncide avec n'importe quel caractère non inclus entre crochets. Par exemple, "[^aeu]" coïncide avec  la "M", la "d", la "r", la "d" de "Madrid", mais ne coïncide pas avec  le "a".
*	"[a-z]" Un intervalle de caractères, coïncide avec n'importe quel caractère de l'intervalle spécifié. Par exemple, "[a-z]" coïncide  avec n'importe quel caractère alphabétique en minuscule dans l'intervalle  de à 'a' à 'z'.
*	"[^a-z]" Un intervalle de caractères, c'est-àdire, coïncide avec n'importe quel caractère  qui ne figure pas dans l'intervalle spécifié. Par exemple, "[^a-z]" coïncide avec n'importe quel caractère qui n'est pas inclus dans l'intervalle  de 'a' à 'z'.
*	"\|" C'est un caractère disjonctive: x\|y, coïncide avec x ou avec y. Par exemple, l'expression "Juli(a\|o)" coïncide avec "Julia" ou avec "Julio" (prénom espagnol).
*	"(...)" Une sous-expression qui coïncide avec le modèle entre parenthèses et capture la coïncidence. La coïncidence capturée peut être récupérée dans le remplacement via les séquences spéciales  "\1" "\2" etc. Pour qui coïncide les parenthèses ( ), utiliser "\\(" ou "\\)".
*	"(?:...)" Une sous-expression qui coïncide avec le modèle entre parenthèses, mais ne capture pas la coïncidence, c'est-à-dire, que la coïncidence n'est pas stockée pour une utilisation ultérieure. L'expression "(?:\d+)(Quitter)" coïncide avec le mot "Quitter" après un ensemble de chiffres dans une chaîne comme par exemple "123456Quitter Lien Graphique". Remarquer, les chiffres ne sont pas stockés et d'autres ne seront pas traités par le synthétiseur. Le synthétiseur ignore simplement le contenu de cette Affirmation. Cette sous-expression est considérée comme un groupe de chaînes irrégulières, elle n'est pas utilisée beaucoup dans les dictionnaires.
*	"(?=...)" Une sous-expression qui effectue une recherche anticipée positif, qui coïncide avec la chaîne dans n'importe quelle point   ^où commence  une chaîne qui coïncidera  avec le modèle entre parenthèses. Par exemple, "Juli(?=a\|o)" coïncide avec "Juli" dans "Julia" mais pas avec "Juli" dans "Juliu". C'est une coïncidence sans capture, c'est-à-dire que la coïncidence n'est pas capturée pour une utilisation ultérieure. Les recherches anticipées ne consomment pas de caractères, c'est-à-dire après une coïncidence, la recherche suivante  commence immédiatement après la dernière  coïncidence, et non après les caractères qui composent la chaîne de recherche anticipée.
*	"(?!...)" Une sous-expression qui effectue une recherche anticipée négatif, qui coïncide avec la chaîne dans n'importe quelle point   ^où commence une chaîne qui ne coïncide pas au modèle. Par exemple, "Juli(?!e\|u)" coïncide avec "Juli" dans "Julia" mais ne coïncide pas avec "Juli" dans "Julie". C'est une coïncidence sans capture, c'est-à-dire que la coïncidence n'est pas capturée pour une utilisation ultérieure. Les recherches anticipées ne consomment pas de caractères, c'est-à-dire après qui s'effectue  une coïncidence, la recherche   suivante commence immédiatement après la dernière  coïncidence, et non après les caractères qui composent la chaîne de recherche anticipée.
*	"(?<=...)" Afirmation look-behind positif, c'est-à-dire que l'expression suivante n'est valable que si l'état du modèle entre parenthèses est vérifié. Par exemple, "(?<=0)\d" coïncide avec un nombre quelconque précédé de zéro. Les affirmations sont sans capture, c'est-à-dire qu'elle n'est pas capturée pour une éventuelle utilisation ultérieure.
*	"(?<!...) Afirmation look-behind non positif, c'est-à-dire que l'expression suivante n'est valable que si l'état du modèle entre parenthèses n'est pas vérifié. Par exemple, "(?<![1-9])\d" coïncide avec n'importe quel nombre qui n'est pas précédé d'un nombre compris entre 1 et 9.

### Séquences spéciales ###

Les séquences spéciales sont constituées d'une barre oblique inversée "\\" et d'un caractère ordinaire comme dans la liste ci-dessous.  Si le caractère ordinaire ne figure pas sur la liste, l'expression résultante coïncide avec le deuxième caractère.    

*	"\A" Coïncide qu'au début de la chaîne.
*	"\Z" Coïncide uniquement avec la fin de la chaîne.
*	"\b" Coïncide avec la limite d'un mot. C'est-à-dire la position entre un mot et un espace. Par exemple, "ir\b" coincide con 'ir' dans "mentir" (mot en espagnol), mais ça ne coïncide pas avec 'ir' dans "mentira" ( mot en espagnol) (en français traduit par mensonge).
*	"\B" Coïncide avec une position qui n'est pas une limite de mot. L'expression "ir\B" coïncide  avec "ir" dans "mentiras", mais ça ne coïncide pas avec "ir" dans "mentir".
*	"\d" Coïncide avec un chiffre. Équivaut à "[0-9]".
*	"\D" Coïncide avec un caractère qui n'est pas un chiffre. Équivaut à "[^0-9]".
*	"\s" Coincide avec n'importe quel caractère d'espace vide incluant l'espace, la tabulation, le saut de page. Équivaut à "[\f\n\r\t\v]".
*	"\S" Coïncide avec n'importe quel caractère qui n'est pas un espace vide. Équivaut à "[^\f\n\r\t\v]".
*	"\w" Coïncide avec n'importe quel caractère alphanumérique, y compris le souligné. Équivaut à "[A-Za-z0-9_]".
*	"\W" Coïncide avec n'importe quel caractère qui n'appartient pas à des caractères alphanumériques. Équivaut à "[^A-Za-z0-9_]".

### Exemples: ###

Enfin, nous arrivons à la partie pratique avec les exemples.    

Par commodité, nous allons utiliser un dictionnaire temporaire dans les exemples. Pour cela, nous devons configurer l'option pour les expressions régulières à partir de  la boîte de dialogue correspondante.    

#### Exemple 1 ####

Parfois, il peut être utile de lire le nom des unités de mesure lorsque le texte apparaît comme abréviation.    

Par exemple, 1ml 12 ml.    
Peut-être que ce ne serait pas fantastique que le synthétiseur lise comme ça?    

Un millilitre et douze millilitres.    

Nous avons besoin de deux expressions régulières pour distinguer le pluriel et le singulier.    

Première expression régulière:

Modèle: "(^\|\s)1[ ]?ml\b"

Remplacement: "\1un millilitre"

Deuxième expression:

Modèle: "(?<=\d)[ ]?ml\b".

Remplacement: " millilitres".

Explication: La première sous-expression "(^\|\s)" prend en compte lorsque la position est au début ou s'il y a un espace avant le chiffre 1.    

Cette sous-expression peut être récupérée dans le remplacement par la séquence spéciale \1.    

N'oubliez pas que les sous-expressions régulières entre parenthèses, également appelées  groupes de chaînes, peuvent être récupérées dans le remplacement de la séquence spéciale correspondante. C'est-à-dire, le premier groupe de la chaîne   de gauche à droite est récupéré avec \1, le deuxième avec \2, etcetera.    
Après le groupe il y a le nombre 1, puisque nous recherchons dans le texte 1ml ou 1 ml, il peut avoir ou non  un espace entre le nombre et l'abréviation.    

Entre crochets, j'ai mis un espace, , différents caractères d'espace peuvent être ajoutés. Ensuite, il y a un quantificateur, point dinterrogation, indique que cet espace peut apparaître une fois ou aucune.    

En fin, notre abréviation ml et une séquence spéciale "\b" pour fermer l'expression régulière.    

La séquence à la fin indique une limite du mot, c'est-à-dire que "ml\b" ne peut pas coïncider par exemple avec "mls" ou "mla".    

La deuxième expression régulière s'ouvre avec une affirmation "(?<=\d), signifie que notre expression n'est valable que s'il y a un chiffre avant.    

L'assertion utilise une séquence spéciale "\d" qui coïncide avec n'importe quel nombre.    

Alors, pourquoi ne fonctionne-t-il pas si ce n'est que le nombre 1 avant?    

Je vous laisse la réponse à vous...    

Maintenant, grâce aux deux expressions régulières, lorsque "ml" est précédé de 1 et aucun caractère alphanumérique  avant, le synthétiseur lit "millilitre".    
Dans les autres cas, le synthétiseur lit "millilitres".    
  
L'ordre est important, les expressions régulières ci-dessus ont la priorité et peuvent annuler des expressions ultérieures.    
C'est pourquoi la deuxième expression est insérée après la première.    

Qu'attends-tu? Essayez maintenant de créer des règles pour lire d'autres unités telles que  Kg, MB, m² ou cm³.    

#### Exemple 2 ####

Il est toujours courant de séparer des milliers, des millions, etc, par un espace pour faciliter la lecture des nombres lorsqu'il s'agit de plus de quatre chiffres.    

> 12 354 ou 1 303 404.    

Certains synthétiseurs ne lisent pas cette façon d'écrire les nombres entiers, plus tard, il sera expliqué comment configurer une expression régulière pour les lire correctement.    

Nous allons ouvrir un dialogue pour créer notre dictionnaire de prononciation dans le menu Préférences.    

Nous devons configurer le modèle pour comparer comme "expression régulière  à partir du bouton radio correspondant, et remplir le champ "Modèle" et le champ de "Remplacement".    

Modèle: "(?<=\d)([   ]?)(\d{3})"

Remplacement: "\2"

Nous allons expliquer.    

La première affirmation indique que la recherche est vraie s'il y a un chiffre avant la chaîne.    
Suit une sous-expression entre parenthèses avec un ensemble d'espaces à l'intérieur, il existe trois signes différents d'espace pouvant être trouvés.    

N'oubliez pas qu'un seul des caractères entre crochets coïncide avec la recherche, il y a un quantificateur "?" pour indiquer que peut être trouvé zéro ou une seule fois.    
Suit à la droite une autre sous-expression entre parenthèses qui indique un nombre à trois chiffres. Le quantificateur "{3}" signifie que le chiffre "\d" doit être répété trois fois, ni moins ni plus.    

Voyons ce que nous devons insérer dans le champ "Remplacement".    

La première sous-expression "(?<=\d)" dans le modèle est une affirmation, elle n'est pas stockée pour une utilisation éventuelle de remplacement.    
Cela ne signifie pas que les caractères de cette affirmation ne seront pas pris en compte, le synthétiseur lira ce chiffre à côté des autres sans récupérer la sous-expression dans le champ "Remplacement".    

Le deuxième groupe ou sous-expression "([  ]?)" c'est une sous-expression régulière   et peut être récupéré dans le remplacement au moyen de la séquence spéciale \1.    
Mais nous voulons exclure cet espace alors nous ne le récupérons pas.    

Au contraire, nous allons récupérer la troisième sous-expression "(\d{3})" au moyen de la séquence spéciale \2.    

De cette façon, nous envoyons au synthétiseur un nombre sans espaces entre les chiffres.    

#### Exemple 3 ####

Lorsque nous consulterions une liste de numéros de téléphone, ou quelque chose de similaire, il peut être utile de lire les numéros comme chiffre unique.    

Par exemple, le numéro 3332211444 pourrait être remplacé comme s'il était écrit “3 3 3 2 2 1 1 4 4 4”.    

Nous avons besoin d'une séquence spéciale dans le modèle de recherche qui trouvera ou coïncidera avec n'importe quel nombre, puis ajoutez un espace après chaque chiffre uniquement lorsqu'il est suivi d'un autre chiffre.    

Modèle: "(\d)(?=\d)"

Remplacement: "\1 ".

Dans le remplacement, nous récupérons le premier groupe "(\d)" avec "\1" et immédiatement après il y a un espace.    
Le modèle de recherche ne trouve aucun chiffre uniquement s'il est suivi d'un autre chiffre.    
 
Ceci est un exemple d'une expression régulière qui peut être utilisé dans certains cas, mais la plupart du temps donnent une lecture fastidieuse. C'est bien de lire les numéros de téléphone, ce ne serait pas agréable de lire par exemple "Il est 13:26".    

#### Exemple 4 ####

Certains synthétiseurs vocaux lisent les chiffres séparés par un point comme s'il s'agissait d'une date. Par exemple:    

    > Versión 14.7.89

 ceci devient::    

> version qatorze juillet mille neuf cent quatre-vingt neuf.    

Eh bien, une version qui rappelle l'anniversaire de La prise de la Bastille. 🇫🇷    

Si vous préférez que  votre synthétiseur prononce  que les chiffres telles   que avec Le point inclus, nous pouvons utiliser l'entrée suivante dans le Dictionnaire  de prononciation:    

Modèle: "(\\.)(?=\d)"

Remplacement: " point ".

Le modèle de recherche trouve le signe point uniquement s'il est suivi d'un chiffre: Dans le remplacement, nous récupérons le signe point et nous l'envoyons au synthétiseur littéralement et entre deux espaces.    
La barre oblique inversée avant du point dans le modèle indique que le point n'est pas un caractère spécial.    

---

Comme nous l'avons vu, les expressions régulières vous permettent de trouver un texte spécifique et de remplacer à notre goût avant de l'envoyer au synthétiseur.    

La plupart du temps, il suffit d'utiliser des expressions régulières simples, au fait, nous devons garder à l'esprit que plus simple sera l'expression régulière,  moins spécifique sera la recherche.    

Une suggestion que je veux laisser avant de terminer ne crée pas de très longs dictionnaires de prononciation.    
J'en ai vu avec plus de 1500 expressions régulières, trop grand et peut ralentir le lecteur d'écran.    

De plus, il n'est pas nécessaire de corriger les erreurs d'orthographe ou d'essayer de simuler la prononciation étrangère lorsque le synthétiseur n'a pas les phonèmes nécessaires.    

Pour un autre tutoriel d'introduction concernant les expressions régulières, veuillez consulter [<A HREF="https://docs.python.org/3.7/howto/regex.html">https://docs.python.org/3.7/howto/regex.html</A>].    

---

# Expressions régulières utilisées  dans les dictionnaires de prononciation par @ abdel792 #

# Astuce pour les Expressions régulières #

Dans les types de remplacements du dictionnaire de prononciation, il existe aussi le type intitulé "Expressions régulières".

Pour ceux qui méconnaissent les expressions régulières, voici un modèle ainsi que son remplacement, qui vont permettre de corriger la prononciation "1 francs", "2 francs", "3 francs", lorsque vous circulez dans la colonne F avec Excel ou dans les autres situations ou la lettre F est directement suivie d'un nombre sans espacement.

Dans le champ Modèle, saisissez ce qui suit :

`f([0-9]+)`

Dans le champ de remplacement, entrez ce qui suit :

`f \1`

Ensuite, choisissez "Expressions régulières" dans la liste des types puis validez tous les boutons OK.

La prononciation pour ce contexte en particulier sera alors corrigée.

Voici un autre problème décrit   par un colistier de nvda-fr


> Avec le logiciel Acapela que j'utilise, le "M." correspond bien au mot "monsieur" mais dans certains cas la synthèse ajoute une pause après le mot "monsieur" à cause du point je suppose.  
J'ai essayé par tous les moyens de corriger ce bug mais rien n'y fait.  
La chose bizarre est que l'arrêt ne se produit qu'en lecture continue et pas en lecture par ligne.  
On doit pouvoir corriger cela dans le dictionnaire mais je n'y suis pas arrivé.  


Solution:

Dans la zone modèle, écris ceci :

`\bm\.[^\w]*$`

Dans la zone remplacer par :

`monsieur`


P.S.

Ne coche pas la case de respect des majuscules.

Si tu coches "respecter la casse" cela signifie que sera prise en compte uniquement la chaîne exacte, majuscules comprises. Tout dépend donc de ce que tu veux obtenir !

En principe, ça devrait couvrir pratiquement toutes les situations décrites dans ton problème.

Note très importante!


Je viens de me rendre compte que la dernière expression ne couvrait pas encore toutes les situations.

Voici une situation non prise en charge par cette expression :

`M. le maire.`

Là, le point est bien suivi par un caractère ne correspondant ni à une lettre alphabétique, ni à un chiffre.

Cependant, il y a des lettres alphabétiques juste après, chose qui n'est pas pris en charge par le modèle.



Voici un aute modèle qui prend en charge le cas de figure précité :

`\bm\.[^\w]*(?:\b|$)`

Il faudra le remplacer par :

`monsieur `

N'oubliez pas l'espace après monsieur dans la chaine de remplacement.

Donc, voici ci-dessous l'explication concernant les expressions citées.

# Attention Technique pour les Expressions régulières #

On va commencer par la première :    

`\bm\.?\b`

`\b` : C'est ce que l'on appelle une assertion qui symbolise le début ou la fin d'un mot.

Une assertion ne consomme pas de caractère et permet juste de vérifier si ce qui suit est le commencement d'un mot, en anglais, ils appellent ça le word boundary.

m : C'est le m, en majuscule ou en minuscule, il faut bien décocher la case de respect de la casse.

`/.?` : Le point est un caractère spécial dans les expressions régulières, c'est pourquoi on l'échappe en le faisant précéder par une barre oblique inversée.

le `\.` signifie donc que la lettre m citée précédemment doit être suivie par un point.

Le point d'interrogation qui suit le point est un quantificateur, il vérifie si ce dit point est présent une ou zéro fois.

`/b` : Est l'assertion citée plus haut, elle vérifie maintenant la fin du mot.

Passons à l'expression suivante :

`\bm\.[^\w]*$`

`\b` : Assertion de début ou de fin d'un mot.

Je ne vais pas décrire le m est le `\.` car déjà fait, sauf que là, comme tu peux le constater, le point n'est pas suivi d'un point d'interrogation, c'est parce qu'on veut impérativement qu'il soit présent une seule fois.

`[^\w]` : Ce que l'on met entre crochet est un ou une suite de caractères que l'on veut vérifier à tour de rôle.

L'accent circonflexe signifie que le caractère qui va suivre le point ne doit absolument pas être ce que l'on va mettre après cet accent circonflexe.

Le \w qui suit l'accent circonflexe signifie que ce dit caractère ne doit pas être une lettre alphabétique ou un chiffre.

L'astérisque qui suit la fermeture du crochet est un quantificateur, il signifie 0 ou plus de caractères, pas forcément qu'un seul comme vu avec le point d'interrogation.

Le $ vérifie si après ce caractère il y a bien une fin de ligne.

Comme le quantificateur astérisque inclut le cas de figure où il n'y aurait aucun caractère après le point, cela couvrira la situation où le m suivi d'un point seraient directement suivis par une fin de ligne.

Et maintenant, voici la documentation concernant les expressions régulières sur OpenClassrooms :

<https://openclassrooms.com/fr/courses/4425111-perfectionnez-vous-en-python/4464009-utilisez-des-expressions-regulieres>

---

@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---