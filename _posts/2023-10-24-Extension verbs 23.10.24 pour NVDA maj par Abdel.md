---
title: Extension verbs-23.10.24 pour NVDA, maj par Abdel
permalink: "/Extension-verbs-23.10.24-pour-NVDA-maj-par-Abdel/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 24 Octobre 2023</footer>


Salut les amis,    

C'est votre ami Abdel.

J'espère que vous allez tous bien, et que vous êtes en pleine forme.

Dans ce présent post, je souhaitais vous présenter une mise à jour de l'extension "Conjugaison" que je vous avais envoyée il y a quelques temps.

Désormais, j'ai choisi de l'appeler "Verbs", car elle inclus à présent la possibilité d'afficher, en plus de la conjugaison des verbes français, la liste de tous les verbes irréguliers anglais.

Sans plus tarder, vous voici sa présentation :

# Verbs #

* Auteurs : Abdel.
* Télécharger [version stable][1]
* Télécharger [version de développement][2]

Cette extension vous permet d'afficher la conjugaison d'un verbe français, ainsi que la liste des verbes irréguliers anglais en utilisant le site : "https://www.capeutservir.com".

Elle ajoute un menu dans le menu Outils de NVDA nommé "Verbes".

La validation sur cet élément affichera Les sous-menus suivants :


* Un item intitulé "Conjugaison", qui permet d'ouvrir une boîte de dialogue invitant l'utilisateur à saisir un verbe à conjuguer;
* Un item intitulé "Verbes irréguliers anglais", qui permet d'afficher la liste complète des verbes irréguliers anglais.

## Le sous-menu "Conjugaison" ##

Lorsque vous validez sur l'item "Conjugaison", vous obtenez une boîte de dialogue composée des éléments suivants :

* Un champ de saisie pour saisir votre verbe à conjuguer;
* Un bouton "OK" pour afficher un message répondant au mode choisi dans les paramètres, contenant votre conjugaison;
* Un bouton "Annuler" pour fermer la boîte de dialogue.

## Le sous-menu "Verbes irréguliers anglais" ##

Lorsque vous validez sur l'item "Verbes irréguliers anglais", la liste complète des verbes irréguliers anglais devrait s'afficher, avec les indications suivantes pour chaque verbe :

* Infinitif, pour connaître l'infinitif du verbe;
* Prétérit, pour connaître son prétérit;
* Participe passé, pour connaître son participe passé;
* Traduction en français, pour connaître sa traduction en français.

## Paramètres de l'extension ##

Dans le panneau des paramètres de l'extension, vous devriez trouver ce qui suit :

* Mode d'affichage de la conjugaison qui permet de définir le mode d'affichage de la conjugaison;
* Mode d'affichage de la liste des verbes irréguliers qui permet de définir le mode d'affichage des verbes irréguliers;
* Chacun de ces 2 modes d'affichage propose les 3 choix suivants :
    * Afficher dans un message HTML, qui permet d'afficher le résultat dans un message HTML navigable (c'est le choix par défaut);
    * Afficher dans un message simple, qui permet d'afficher le résultat dans un message simple navigable, sans formatage HTML;
    * Afficher dans le navigateur par défaut, pour afficher le résultat dans votre navigateur par défaut.
* Un bouton « OK » pour sauvegarder votre configuration ;
* Un bouton "Annuler" pour annuler et fermer la boîte de dialogue.
* Un bouton « Appliquer » pour appliquer votre configuration ;

## Remarques ##

* Par défaut, le geste « contrôle + F5 » est affecté au script qui affiche la boîte de dialogue invitant l'utilisateur à saisir un verbe à conjuguer;
* Par défaut, le geste « contrôle + Maj + F5 » est affecté au script qui affiche la liste des verbes irréguliers anglais;
* Un script sans geste attribué vous permet d'ouvrir le panneau des paramètres de l'extension;
* Vous pouvez attribuer de nouveaux gestes pour exécuter ces scripts dans le menu «Gestes de commandes» et plus précisément, dans la catégorie «Verbes»;
* Si vous utilisez nvda-2021.1 ou version ultérieure, vous pourrez accéder à l'aide du champ de saisie du verbe à conjuguer, ainsi qu'à celui du panneau des paramètres de l'add-on en pressant simplement sur la touche "F1" dès que le focus sera sur l'un de ces 2 contrôles;

## Compatibilité ##

* Cette extension est compatible avec NVDA 2019.3 et au-delà.

## Changements pour la version 23.10.24 ##

* Changement du nom de  l'extension de «conjugaison» à «verbs» ;
* Ajout de la fonctionnalité d'affichage des verbes irréguliers anglais.

## Changements pour la version 21.10.20 ##

* Suppression de l'utilisation de la bibliothèque "requests_html" et utilisation du module intégré "urllib" à la place;
* Prise en charge des caractères latins lors de la saisie du verbe à conjuguer.

## Changements pour la version 21.08.1 ##

* Réduction de la taille de l'extension et inclusion du téléchargement et installation des bibliothèques externes depuis le module "installTasks.py".


## Changements pour la version 21.08 ##

* Version initiale.
  
[1]: https://github.com/abdel792/verbs/releases/download/v23.10.24/verbs-23.10.24.nvda-addon

[2]: http://cyber25.free.fr/nvda-addons/verbs-23.10.24-dev.nvda-addon


Cordialement,    
Abdel.    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---