---
title: Empaqueteuse d'extensions pour NVDA
permalink: "/addonPackager/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 18 Août 2020 - Dernière mise à jour le Lundi Ier Mars 2021</footer>

Coucou mes amis du blog de BlindHelp!    
Voici l'empaqueteuse d'extensions pour NVDA, une extension non officielle créée par le même auteur du programme[Simple FM TV](https://blindhelp.github.io/SimpleFM-TVPortable/)    
Je viens de le traduire en français et l'auteur m'a dit que je pouvais le partager avec vous tous, au-dessous je vous laisse le lien de téléchargement et sa description faite par le même auteur.    

Cette partie n'est pas inclus dans le journal des changements:     

# Version 0.7.1 #

* Dans la version 0.7 un dossier appelé __pycache__ été inclus lors de l'empaquetage. Maintenant, cela n'est plus inclus lorsque la version 0.7.1 est utilisée donc, nous aurons donc exactement la taille originale de l'extension, puis l'étiquette GEN sera toujours présente pour savoir que cela a été bien généré.    

Cette version apporte également les améliorations de la version0.7:    

# Version 0.7 #

* Maintenant la liste des extensions ce sera beaucoup plus clair comme une liste que nous pouvons sélectionner et désélectionner des cases en interne laquelle est une CheckListBox et cela rend beaucoup plus compréhensible que la liste qui était avant pour sélectionner.    
* Un geste de commande a été ajouté le quelle nous devrons le configurer car il n'est pas défini pour lancer la fenêtre de l'extension packer.    
* Le code à un niveau interne est optimisé de manière à ce que l'empaquetage des extensions soit plus rapide lors de la séparation des processus du fil général de NVDA. Dans de grandes extensions dans les versions précédentes, je pourrais faire taire NVDA à un moment donné jusqu'à ce que je termine l'empaquetage de l'extension. Maintenant cela ne se produira pas.    
*  L'aspect visuel de l'extension est amélioré, maintenant lorsque la génération de l'empaquetage des extensions la fenêtre principale ne sera pas à l'arrière-plan, seule la fenêtre ayant la barre de progression et le message d'attente sera présente.    
* Le code à un niveau interne est optimisé beaucoup plus.    
* Cela n'a toujours pas besoin de bibliothèques externes pour remplir ça mission.    
* la compatibilité dans le manifeste  avec NVDA2020.4 est augmentée.    
* Ajouté la traduction arabe.    

Je vous laisse le lien direct vers la version 0.7.1 plus bas.    

# journal des changements #

# Version 0.6 #

Eh bien dans cette version 0.6 le seul changement est que l'auteur a optimisé le code pour ne pas avoir besoin de bibliothèque externe pubsub.    
Cela signifie plusieurs choses, d'abord que la taille de l'extension est réduite considérablement c'est-à-dire elle va de 100K à juste 35k.    
En plus l'extension n'a plus besoin d'une bibliothèque externe à NVDA elle est donc maintenant plus efficace et robuste.    
Maintenant oui l'auteur peut  dire que l'extension  est 100% NVDA.    
Eh bien au niveau de l'utilisateur ce changement ne peut pas être perceptible, mais l'auteur nous a dit que en tant que programmeur pour lui c'est très important d'avoir obtenu que l'extension utilise uniquement les bibliothèques de NVDA.    

# Version 0.4 #

* Ajouté diverses traductions Français et Portugais du Portugal & Brésil.    
* Version initiale.    

---

* Auteur: <span lang="es">Héctor J. Benítez Corredera</span>    
* Version actuelle: 0.7.1    
* Compatibilité avec NVDA: de 2019.3 à 2020.4    
Langues: Anglais, Arabe, Espagnol, Français et Portugais du Portugal & Brésil    
* [Télécharger](https://nvda.es/files/get.php?file=addonpackager)    

---

# Empaqueteuse d'extensions

Cette extension provient de la nécessité d'avoir une sauvegarde des extensions installées.

NVDA a une grande collection d'extensions officielles, facile d'obtenir à partir de les dépôts officiels  ou à partir de différents comptes de  Github des auteurs.

Mais en même temps y a également un certain nombre d'extensions non officielles est parfois difficile de savoir où ont été obtenus.

L'idée est venue lorsque un ami   ma demander une extension non officielle et de ne pas avoir à la main l'extension elle fallait l'empaqueter.

Alors que le processus de l'empaquetage d'une extension est facile, mais pas connu par tout le monde il me est apparu que cette fonction serait fantastique que NVDA la puisse avoir.

Eh bien, c'est ce qui rend cette extension,  l'empaquetage automatique de ces extensions que l'utilisateur veut avoir pour pouvoir installer sur une autre copie de NVDA, sur une installation propre de NVDA ou simplement pour le partager.

## Utilisation de l'extension

L'extension est divisée en quatre zones:

* La première contenant une liste de tous nos extensions installées soit activées ou désactivées. Dans cette liste, nous sélectionnons tous les   extensions que nous souhaiterons.
* La deuxième une rangée de boutons pour sélectionner rapidement toutes les extensions ou pour supprimer rapidement tous les sélection que nous avions fait.
* La troisième une zone de texte en lecture seule contenant le répertoire de sortie et un bouton pour sélectionner ce répertoire de sortie.

J'ai mis la zone de texte en lecture seule pour pouvoir examiner facilement à tout moment le répertoire de sortie. J'ai décidé de ne pas mettre l'écriture normale pour éviter certaine pulsation par erreur et que le répertoire puisse être affecté.

* La quatrième une rangée de boutons avec le bouton pour Générer les extensions déjà empaquetées et et un autre pour sortir de l'extension.

### Commandes clavier rapides dans l'extension

* Alt + L: Nous allons placer le focus sur la liste des extensions.
* Alt + S: Nous sélectionnons toutes les  extensions indifféremment si auparavant y avait déjà une de cochée.
* Alt + E: Nous décochons toutes les extensions que nous avions cochées.
* Alt + R: Nous allons ouvrir une fenêtre de sélection du répertoire pour sélectionner le répertoire de sortie.
* Alt + G: Nous démarrons  la génération des extensions que nous avions sélectionnées dans le répertoire de sortie.
* Alt + F o Alt + F4: Nous fermons l'extension.

## Autres informations d'intérêts

* L'extension  nous avertira à tout moment avec un dialogues  d'information sur l'état du déroulement de la manipulation accompli.
* Nous avertira si nous essayons de générer une  extension sans avoir  sélectionnée aucune.
* Nous avertira si nous essayons de générer une  extension sans avoir un répertoire de sortie défini.
* Nous avertira lorsque le processus    est un succès de même  lorsque une erreur se produit.
* Le répertoire de sortie  sera sauvegardé afin qu'il soit spécifié à la prochaine fois que nous utilisons l'extension, ce paramètre est effacé si le répertoire de sortie est supprimé et nous allons sélectionner un autre répertoire existant.
* Pendant la génération des extensions nous serons  averti  par une barre de progression indiquant le pourcentage d'avancement accompli à tout moment.
* Les fichiers résultants ont sur le nom  en plus un repère pour identifier qui ont été générés et ne sont pas d'origine. Ce repère est (gen).

# Note très importante

Mentionnant que les fichiers résultants sont tels que nous les avons dans notre répertoire Addon sans ajouter ni supprimer quoi que ce soit de la part de cette extension.

Cela signifie  que elle inclus toutes les informations de l'extension que nous sélectionnons.

Bien qu'il est pas normal qu'un développeur d'extensions eut inclus des informations sensibles dans le propre répertoire de l'extension.

En fait, ceci est considéré comme une mauvaise pratique il est peu probable au moins que dans les extensions officielles se produisent.

Mais à l'existence des centaines d'extensions non officielles et de diverse nature soyez prévenus que si une extension comprend des informations sensibles dans le propre répertoire de votre extension, ces informations sensibles seront inclus dans le fichier généré.


Nous devons donc considérer cet aspect de la confidentialité et de la sécurité pour savoir si nous devions partager une extension générée si apporte des informations sensibles que nous ne voulons pas partager.

Comme je le mentionne ce qui est presque improbable, mais soyez prévenus et ceci  avec l'utilisation de cette extension Vous accepter  savoir que vous avez été informé et déchargeant  de toute responsabilité à l'auteur de cette extension.

---

Mille merci à notre ami <span lang="es">Héctor J. Benítez Corredera</span> pour l'avoir partagé avec nous tous! :)    
Profitez de l'extension Empaqueteuse d'extensions pour NVDA!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
