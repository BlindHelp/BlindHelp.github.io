
---
title: mesFables, une extension NVDA permettant de consulter les fables de La Fontaine depuis le site mesfables.com par Abdel
permalink: "/mesFables-extension-pour-NVDA-par-Abdel/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 16 Novembre 2023</footer>


Bonjour les amis,

C'est votre ami Abdel.

J'espère que vous allez tous bien, et que vous êtes en pleine forme.

Je connais une personne  qui adore lire les fables de La Fontaine.

Cette personne m'a formulé une demande un peu originale.

Elle m'a demandé s'il n'y aurait pas un moyen de pouvoir consulter, via une extension NVDA, toute la liste des 241 fables de La Fontaine présente sur le site "mesfables.com".

Je me suis penché sur la question et ai conclu que c'était possible, en se basant sur le modèle d'extensions dont je vous ai parlé récemment.

Je suis bien sûr conscient que ce type d'extension n'intéressera que très peu d'utilisateurs, mais j'ai quand-même décidé de la créer, à toutes fins utiles.

Voici sans plus tarder, la documentation de cette extension.

Je vous en souhaite bonne lecture !


# Mes fables #

* Auteurs : Abdel.
* Télécharger [version stable][1]
* Télécharger [version de développement][2]

Cette extension vous permet d'afficher les fables de La Fontaine en utilisant le site «https://www.mesfables.com».

Elle ajoute un item	 dans le menu Outils de NVDA nommé «Mes fables».

Si vous validez sur cet item, vous serez invité à saisir des termes de recherche, afin de trouver une ou plusieurs fables parmi les 241 disponibles sur le site.

Après avoir saisi ces termes, il vous suffira de tabuler une seule fois, ou d'effectuer le geste «Alt + L», pour afficher la liste des résultats trouvés.

Si vous laissez le champ de recherche vide, la liste des fables devrait afficher toutes les fables, 241 au total.

Sur la liste des résultats, ou sur la liste complète des fables, selon le contexte, vous n'aurez qu'à valider sur le titre de la fable que vous souhaitez consulter, pour qu'elle s'affiche selon le mode que vous aurez choisi dans le panneau des paramètres de l'extension.

La touche d'échappement doit permettre de revenir à la liste des fables, si vous souhaitez en consulter une autre.

Dans le cas d'une recherche seulement, si vous tabulez à nouveau, après votre liste de résultats, vous devriez trouver un bouton intitulé «Afficher toutes les fables», qui devrait vous permettre d'afficher à nouveau la liste des 241 fables disponibles.

Si vous appuyez sur la touche d'échappement depuis la liste des résultats de recherche, ou depuis la liste complète des fables, vous devriez fermer complètement la boîte de dialogue permettant de consulter les fables.

## Paramètres de l'extension ##

Dans le panneau des paramètres de l'extension, vous devriez trouver ce qui suit :

* Mode d'affichage des fables de mesfables.com, qui permet de définir le mode d'affichage de vos fables;
* Vous devriez alors trouver 3 modes d'affichages :
    * Afficher dans un message HTML, qui permet d'afficher les fables dans un message HTML navigable (c'est le choix par défaut);
    * Afficher dans un message simple, qui permet d'afficher les fables dans un message simple navigable, sans formatage HTML;
    * Afficher dans le navigateur par défaut, pour afficher les fables dans votre navigateur par défaut.
* Un bouton «OK» pour sauvegarder votre configuration ;
* Un bouton «Annuler» pour annuler et fermer la boîte de dialogue.
* Un bouton «Appliquer» pour appliquer votre configuration ;

## Remarques ##

* Par défaut, le geste «contrôle + Shift + F7» est affecté au script qui permet d'afficher la voîte de dialogue permettant d'intéragir avec les fables disponibles sur «mesfables.com»;
* Un script sans geste attribué vous permet d'ouvrir le panneau des paramètres de l'extension;
* Vous pouvez attribuer de nouveaux gestes pour exécuter ces scripts dans le menu «Gestes de commandes» et plus précisément, dans la catégorie «Mes fables»;
* Si vous utilisez nvda-2021.1 ou version ultérieure, vous pourrez accéder au paragraphe décrivant le panneau des paramètres de l'extension en pressant simplement sur la touche «F1» dès que le focus sera positionné sur ce contrôle.

## Compatibilité ##

* Cette extension est compatible avec NVDA 2019.3 et au-delà.

## Changements pour la version 23.11.15 ##

* Ajout d'un champ permettant de rechercher une ou plusieurs fables parmi les 241 disponibles.

## Changements pour la version 23.11.12 ##

* Version initiale.

[1]: http://cyber25.free.fr/nvda-addons/mesFables-23.11.15.nvda-addon

[2]: http://cyber25.free.fr/nvda-addons/mesFables-23.11.15-dev.nvda-addon


Cordialement,    
Abdel.    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---