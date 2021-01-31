---
title: cursorLocator extension disponible en téléchargement pour NVDA
permalink: "/cursorLocator/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 24 Janvier 2021 - Dernière mise à jour le Dimanche 31 Janvier 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici une nouvelle mouture de l'extension cursorLocator pour NVDA fait  par une amie hispanophone.    

Vous trouverez ci-dessous sa description traduite en français par mes soins.      

À savoir que c'est une version de développement, donc, elle n'est pas recommandée pour les environnements de travail puisqu'elle s'agit d'une version dev, Cependant, plus aucune erreur n'a été détectée par les testeurs, par conséquent, , elle est considéré qu'elle est déjà assez stable, mais je demande prudence.    

# Informations sur l'extension  cursorLocator #

* Auteur: <span lang="es">Noelia Ruiz Martínez</span>
* Version actuelle: 1.4.3-dev
* Langues: Anglais,Arabe, espagnol et Français.
* Compatibilité NVDA: 2020.4
* Télécharger [version de développement sur le dépôt de l'auteur sur GitHub [lien externe]](https://github.com/nvdaes/cursorLocator/releases/download/1.4.3-dev/cursorLocator-1.4.3-dev.nvda-addon)
* [Voir code source sur le dépôt de l'auteur sur GitHub](https://github.com/nvdaes/cursorLocator)

# Premier Message passé sur la liste d'extensions NVDA en Anglais par l'auteur: #

À savoir que le lien pointe vers la dernière version en date, car entre temps les langues arabes, espagnol et français ont été ajoutés à l'extension via des Pull Request accepté par l'auteur.

# cursorLocator 1.4-dev `#`AddonTesting #

<span lang="en">Hello:</span>

<span lang="en">This add-on was reviewed by Alberto Zanella long time ago, and I didn't post it on the website since user experience results was pass with comments, but I couldn't clarify what was the origin of the problem.</span>

<span lang="en">For reference, please see this topic:</span>

<span lang="en">
<https://nvda-addons.groups.io/g/nvda-addons/topic/6214846>
</span>

<span lang="en">It makes possible to hear a low and a higher tone to announce when the cursor has reached the start or the end of a line, useful to avoid, for example, lines too long. This was requested years ago in the spanish community.</span>

<span lang="en">Rèmy Ruiz has requested to make it compatible for recent versions of NVDA, and another person, privately,  asked me to maintain the add-on as well.</span>

<span lang="en">I'll try to send it to the add-on store when it's ready, if possible.</span>

<span lang="en">Here's version 1.4-dev:</span>

<span lang="en">Changes for 1.4-dev (PR #1)</span>

* <span lang="en">Compatible with NVDA 2020.4, requested by @BlindHelp.</span>
* <span lang="en">Fix a bug in Wordpad, requested by Sergio Gómez.</span>
* <span lang="en">Add ability to configure sounds, requested by Sergio Gómez.</span>

<span lang="en">Download:</span>

<span lang="en">
<https://github.com/nvdaes/cursorLocator/releases/download/1.4.3-dev/cursorLocator-1.4.3-dev.nvda-addon>
</span>

<span lang="en">Repo:</span>

<span lang="en">
<https://github.com/nvdaes/cursorLocator>
</span>

<span lang="en">Cheers</span>

----

# Cursor Locator #

Cette extension permet de connaître la position du curseur du système par rapport au début de la ligne en cours lors de la saisie pour ajouter du texte dans des contrôles multilignes.

## Paramètres Cursor Locator ##

Ce panneau est disponible dans le menu NVDA, sous-menu Préférences, boîte de dialogue Paramètres.

Fournit les options suivantes:

* Annoncer le début de ligne: Lorsque ce contrôle est coché, une tonalité grave annoncera si le curseur est au début de la ligne actuelle tout en tapant du texte (coché par défaut).
* Annoncer longueur de ligne: Vous pouvez taper ou choisir une longueur de ligne (nombre de caractères entre 0 et 600), qui sera annoncé par une tonalité aigu lorsqu'il  est atteint. (La valeur par défaut est de 80 caractères).
* Hauteur du son pour le début de ligne: Vous pouvez taper ou sélectionner une valeur comprise entre 20 et 20000. (La valeur par défaut est de 400 hertzs).
* Durée du son pour le début de ligne: Vous pouvez taper ou sélectionner une valeur comprise entre 20 et 2000. (La valeur par défaut est de 50 millisecondes).
* Test du son pour le début de ligne: Appuyer sur ce bouton pour tester le son configuré pour le début de ligne.
* Hauteur du son pour  la fin de ligne: Vous pouvez taper ou sélectionner une valeur comprise entre 20 et 20000. (La valeur par défaut est de 1000 hertzs).
* Durée du son pour la fin de ligne: Vous pouvez taper ou sélectionner une valeur comprise entre 20 et 2000. (La valeur par défaut est de 50 millisecondes).
* Test du son pour la fin de ligne: Appuyer sur ce bouton pour tester le son configuré pour la fin de ligne.

## Commandes ##

Vous pouvez modifier les gestes associés aux commandes suivantes via le menu NVDA, sous-menu Préférences, boîte de dialogue Gestes de commandes.

* NVDA+control+shift+l: Si possible, annonce la longueur de la ligne actuelle (catégorie Curseur système).
* Non assigné: Affiche la boîte de dialogue Paramètres Cursor Locator ((catégorie Configuration).

## Changements pour la version 1.0 ##
* Première version.

---

Cette extension cursorLocator a été traduite en français par: Rémy Ruiz @BlindHelp     
Merci beaucoup à mon amie <span lang="es">Noelia Ruiz Martínez</span> pour l'avoir adapté à la dernière version de NVDA 2020.4 et avoir apporté ces nouvelles améliorations. 🤗    

Je vous souhaite une bonne utilisation de l'extension cursorLocator!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---