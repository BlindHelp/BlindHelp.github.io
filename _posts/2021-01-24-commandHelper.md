---
title: commandHelper extension disponible en téléchargement pour NVDA
permalink: "/commandHelper/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 24 Janvier 2021 - Dernière mise à jour le Dimanche 30 Mai 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle mouture de l'extension appelée commandHelper pour NVDA fait  par un ami hispanophone.    

Vous trouverez ci-dessous sa description traduite en français par mes soins.    

# Informations sur l'extension commandHelper #

* Auteur: <span lang="es">Javi Dominguez</span>
* Version actuelle: dev20210530
* Langues: Arabe, Anglais, Chinois, traditionnel et simplifié, Espagnol, Français et Portugais-Brésil,  et Portugais-Portugal
* Compatibilité NVDA:  2018.1 à 2021.1
* Télécharger [version de développement sur le dépôt de l'auteur sur GitHub [lien externe]](https://nvda.es/files/get.php?file=cmdHelper-dev)
* [Voir code source sur le dépôt de l'auteur sur GitHub](https://github.com/javidominguez/commandHelper/)

--- 

# commandHelper

Fournit une autre méthode d'exécution de scripts pour les personnes qui ont des difficultés à appuyer sur des combinaisons de clavier compliquées. 

### Mode d'utilisation 

En appuyant sur NVDA+h une couche de commandes clavier est activée avec les options suivantes: 

* Flèches gauche et droite pour choisir une catégorie. 
* Toute lettre de A à Z pour sauter à la catégorie avec cette initiale. 
* Flèches haut et bas pour sélectionner une commande de la catégorie choisie. 
* Entrée pour exécuter la commande. 
* Majuscule+entrée pour exécuter la commande comme si sa combinaison de touches avait été appuyée deux fois rapidement. 
* Contrôle+entrée pour exécuter la commande comme si sa combinaison de touches avait été appuyée trois fois. 
* F1 pour informer du geste correspondant à la commande sélectionnée. 
* Échap abandonne la couche de commandes et restaure la fonctionnalité normale du clavier. 

### Configuration 

La combinaison de touches permettant d'activer l'assistant de commandes peut être modifiée dans le menu Préférences de NVDA > Gestes de Commandes. 

Certaines autres touches peuvent être personnalisées dans le menu Préférences de NVDA > Paramètres > Assistant de commandes. 

* Activer/désactiver l'utilisation de la touche contrôle pour invoquer l'assistant. 
* Sélectionner avec quelle touche l'assistant est abandonné. 
* Sélectionner avec quelle touche le geste associé à une commande est annoncé.
* Activer/désactiver la gestion de l'assistant via le pavé numérique. 

#### Utilisation de la  touche contrôle pour invoquer l'assistant 

Avec cette option activée, l'assistant est invoqué en appuyant cinq fois rapidement  la touche contrôle. Ceci est utile pour les personnes qui ont du mal à appuyer sur des combinaisons de plusieurs touches à la fois. Cependant, il peut parfois causer l'activation involontaire de l'assistant en appuyant sur la touche contrôle pour d'autres utilisations, par exemple contrôle+C et contrôle+V pour copier et coller. Pour l'éviter, vous devez réduire la fréquence de répétition  du clavier. Ceci est fait dans le Panneau de configuration de Windows. Dans le dialogue Préférences de l'extension vous trouverez un bouton qui en appuyant  sur lui vous amènera directement à ce dialogue. Il peut également être ouvert en appuyant sur la touche Windows+R et en tapant control.exe keyboard dans le dialogue "Exécuter" de Windows. Dans le potentiomètre "Fréquence de répétition" vous devez mettre une valeur aussi bas que possible. Le mettre à zéro, nous nous assurons que nous n'aurons pas de problèmes, mais  cela cessera de fonctionner l'activation de l'assistant en maintenant enfoncée la touche contrôle, ce qui pourrait être un inconvénient pour certains utilisateurs avec une mobilité réduite à ceux qui ont du mal à faire des appuis rapides répétées et préfèrent l'activer de cette façon. Il n'y a pas de configuration universelle, chaque utilisateur doit trouver le plus approprié pour ses besoins ou leurs préférences. 

#### Pavé numérique 

Avec cette option activée, vous pouvez utiliser l'assistant avec les touches du pavé numérique. 

* 4 et 6 pour choisir une catégorie. 
* 2 et 8 pour sélectionner une commande de la catégorie choisie. 
* 5 pour informer du geste correspondant à la commande sélectionnée. 
* Entrée pour exécuter la commande. 
* Signe plus pour exécuter la commande comme si sa combinaison de touches avait été appuyée deux fois rapidement. 
* signe moins pour exécuter la commande comme si sa combinaison de touches avait été appuyée trois fois. 
* Effacement abandonne la couche de commandes et restaure la fonctionnalité normale du clavier. 

Remarque sur la compatibilité: L'extension est prête à fonctionner avec les versions précédentes de NVDA. La plus ancienne avec laquelle il a été testée est la 2018.1 mais cela devrait fonctionner avec d'autres même plus anciennes. Cependant ne sera pas fourni le support futur pour des problèmes spécifiques pouvant survenir dans ces versions. 

---

Pour mieux illustrer l'utilisation de cette extension, je vous donnerai un exemple très simple ci-dessous, en utilisant mon extension préférée appelée [zRadio une extension pour NVDA](https://blindhelp.github.io/zRadio-pour-NVDA/).

# Exemple d'utilisation de commandHelper #

1. Aller n'importe où sur le bureau.
2. Appuyer sur NVDA+h.
3. Flèches gauche et droite pour choisir une catégorie, par exemple  je vais choisir l'extension zRadio ou je peux également appuyer sur la lettre z pour aller au nom de ladite extension.
4. Flèches haut et bas pour sélectionner une commande de la catégorie choisie, par exemple si je souhaite lancer cette extension zRadio je vais choisir"Affiche la fenêtre principale de zRadio".
5. Entrée pour exécuter la commande.
6. Appuyer sur la touche Échap pour sortir de l'assistant de commande.

---

Cette extension commandHelper a été traduite en français par: Rémy Ruiz @BlindHelp     
Merci beaucoup à mon ami <span lang="es">Javi Dominguez</span> pour l'avoir Partagé avec nous! 😼    
Je vous souhaite une bonne utilisation de l'extension commandHelper!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---