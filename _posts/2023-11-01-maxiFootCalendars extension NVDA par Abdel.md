---
title: maxiFootCalendars, une extension pour NVDA pour visualiser le calendrier des saisons ligue-1 et 2 depuis le site maxifoot.fr, par Abdel
permalink: "/maxiFootCalendars-extension-pour-NVDA-par-Abdel/"
layout: post
author: BlindHelp
---

<footer>Publié le Mercredi Ier Novembre 2023</footer>


Salut les amis,

J'espère que vous allez tous bien, et que vous êtes en pleine forme.

Un ami m'a demandé s'il y n'y aurait pas un moyen de visualiser les matchs de football de toute une saison, pour la ligue-1 ou 2, dans une même page.

Il se plaignait de ne pas pouvoir le faire avec le Localisateur, car ce dernier permet d'afficher chacune des dates distinctement les unes des autres.

Je me suis alors dit qu'il y avait peut-être un moyen d'obtenir cela en se basant sur le modèle d'extensions NVDA dont je vous ai parlé récemment.

Finalement, c'est possible.

Pour ceux qui seraient intéressés, vous voici la documentation d'une extension que je viens de créer pour cela, son nom est "maxiFootCalendars".


# Calendriers MaxiFoot #

* Auteurs : Abdel.
* Télécharger [version stable][1]
* Télécharger [version de développement][2]

Cette extension vous permet d'afficher les calendriers de saisons de football pour les ligues 1 et 2 en utilisant le site «https://www.maxifoot.fr».

Elle ajoute un item	 dans le menu Outils de NVDA nommé «Calendriers maxifoot».

Si vous validez sur cet item, une liste composée de 2 éléments devrait s'afficher :

* Calendriers ligue-1, qui permet d'afficher la liste des saisons de la ligue-1.
* Calendrier ligue-2, qui permet d'afficher la liste des saisons de la ligue-2.

La liste des saisons commence de la saison "2010-2011", jusqu'à la saison actuelle, qui devrait être sélectionnée par défaut.

Il ne vous restera alors qu'à valider sur l'intitulé de la saison dont vous souhaitez afficher les rencontres planifiées.

Si vous choisissez la saison actuelle, vous pourrez visualiser les matchs joués, ainsi que ceux qui ne l'ont pas encore été.

## Paramètres de l'extension ## {: #maxiFootCalendarsSettings }

Dans le panneau des paramètres de l'extension, vous devriez trouver ce qui suit :

* Mode d'affichage des calendriers de maxifoot.fr, qui permet de définir le mode d'affichage de vos calendriers;
* Vous devriez alors trouver 3 modes d'affichages :
    * Afficher dans un message HTML, qui permet d'afficher le résultat dans un message HTML navigable (c'est le choix par défaut);
    * Afficher dans un message simple, qui permet d'afficher le résultat dans un message simple navigable, sans formatage HTML;
    * Afficher dans le navigateur par défaut, pour afficher le résultat dans votre navigateur par défaut.
* Un bouton «OK» pour sauvegarder votre configuration ;
* Un bouton «Annuler» pour annuler et fermer la boîte de dialogue.
* Un bouton «Appliquer» pour appliquer votre configuration ;

## Remarques ##

* Par défaut, le geste «contrôle + Shift + F8» est affecté au script qui permet d'afficher les calendriers de «maxifoot.fr»;
* Un script sans geste attribué vous permet d'ouvrir le panneau des paramètres de l'extension;
* Vous pouvez attribuer de nouveaux gestes pour exécuter ces scripts dans le menu «Gestes de commandes» et plus précisément, dans la catégorie «Calendriers MaxiFoot»;
* Si vous utilisez nvda-2021.1 ou version ultérieure, vous pourrez accéder au paragraphe décrivant le panneau des paramètres de l'extension en pressant simplement sur la touche «F1» dès que le focus sera positionné sur ce contrôle.

## Compatibilité ##

* Cette extension est compatible avec NVDA 2019.3 et au-delà.

## Changements pour la version 23.11.01 ##

* Version initiale.

[1]: https://github.com/abdel792/maxiFootCalendars/releases/download/v23.11.01/maxiFootCalendars-23.11.01.nvda-addon

[2]: http://cyber25.free.fr/nvda-addons/maxiFootCalendars-23.11.01-dev.nvda-addon


Cordialement,    
Abdel.    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---