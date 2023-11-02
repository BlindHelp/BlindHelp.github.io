---
title: closerMag, une extension pour NVDA qui permet d'afficher les 37 articles les plus récents du site closermag.fr en un clin d'œil ! par Abdel
permalink: "/closerMag-extension-pour-NVDA-par-Abdel/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 30 Octobre 2023</footer>


Salut les amis,

J'espère que vous allez tous bien, et que vous êtes en pleine forme.

Dans ce présent post, je souhaitais vous présenter une nouvelle extension que je viens de finaliser.

Il s'agit de l'extension "closerMag".

Quelle est son utilité?

Vous connaissez certainement le site closermag.fr, qui présente quotidiennement les dernières actualités des personnes célèbres, ainsi que certains faits divers.

Dans la page d'accueil du site closermag.fr, nous disposons de 37 articles, disponibles sous la forme de liens cliquables.

Chaque lien ouvre une page distincte de la page d'accueil, avec le contenu de l'article sur lequel nous avons cliqué.

Le contenu des articles n'est pas bien long, une dizaine de paragraphes au maximum.

Avec l'extension "closerMag" pour NVDA, un utilisateur déficient visuel pourra afficher l'intégralité du contenu de ces 37 articles, tous disposés dans des titres hiérarchiques de niveau 1, facilitant ainsi la navigation parmi chacun d'entre eux, sans devoir les lire séparément un par un comme c'est le cas sur le site.

Grâce au langage Python et au concept du threading, le chargement de la page affichant ces 37 articles est très rapide.

Le modèle utilisé dans cette extension ressemble à peu près à celui de l'extension "Verbs", que je vous avais présentée il n'y a pas très longtemps.

Sans plus tarder, je vous colle plus bas, la documentation complète de cette extension, pour ceux qui seraient intéressés :


# CloserMag #

* Auteurs : Abdel.
* Télécharger [version stable][1]
* Télécharger [version de développement][2]

Cette extension vous permet d'afficher les 37 articles les plus récents apparus sur le site : «https://www.closermag.fr».

Elle ajoute un item	 dans le menu Outils de NVDA nommé «CloserMag».

Lorsque vous validez sur cet item, ces articles devraient s'afficher selon le mode d'affichage que vous aurait choisi dans les paramètres de l'extension.

## Paramètres de l'extension ## {: #closerMagSettings }

Dans le panneau des paramètres de l'extension, vous devriez trouver ce qui suit :

* Mode d'affichage des articles de closermag.fr qui permet de définir le mode d'affichage de vos articles;
* Vous devriez alors trouver 3 modes d'affichages :
    * Afficher dans un message HTML, qui permet d'afficher le résultat dans un message HTML navigable (c'est le choix par défaut);
    * Afficher dans un message simple, qui permet d'afficher le résultat dans un message simple navigable, sans formatage HTML;
    * Afficher dans le navigateur par défaut, pour afficher le résultat dans votre navigateur par défaut.
* Un bouton «OK» pour sauvegarder votre configuration ;
* Un bouton «Annuler» pour annuler et fermer la boîte de dialogue.
* Un bouton «Appliquer» pour appliquer votre configuration ;

## Remarques ##

* Par défaut, le geste «contrôle + Shift + F9» est affecté au script qui permet d'afficher les articles de «closermag.fr»;
* Un script sans geste attribué vous permet d'ouvrir le panneau des paramètres de l'extension;
* Vous pouvez attribuer de nouveaux gestes pour exécuter ces scripts dans le menu «Gestes de commandes» et plus précisément, dans la catégorie «CloserMag»;
* Si vous utilisez nvda-2021.1 ou version ultérieure, vous pourrez accéder au paragraphe décrivant le panneau des paramètres de l'extension en pressant simplement sur la touche «F1» dès que le focus sera positionné sur ce contrôle.

## Compatibilité ##

* Cette extension est compatible avec NVDA 2019.3 et au-delà.

## Changements pour la version 23.10.30 ##

* Version initiale.

[1]: https://github.com/abdel792/closerMag/releases/download/v23.10.30/closerMag-23.10.30.nvda-addon

[2]: http://cyber25.free.fr/nvda-addons/closerMag-23.10.30-dev.nvda-addon


Cordialement,    
Abdel.    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---