---
title: Nao, Nouvelle extension pour lire PDF et images inaccessibles ✌
permalink: "/Nao-NVDA-Advanced-OCR/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 14 Décembre 2021 - Dernière mise à jour le Jeudi 30 Décembre 2021</footer>


# Documentation en français mise à jour  pour l'extension Nao pour NVDA, par Cyrille de la liste nvda-fr le Jeudi 30 Décembre 2021

Hello    
Voilà ci-dessous la documentation en français mise à jour que je n’ai pas eu le temps de faire inclure dans la dernière version.    
Cyrille    

# Nao - NVDA Advanced OCR

* Auteurs : Alessandro Albano, Davide De Carne, Simone Dal Maso
* [Télécharger version stable](https://nvda-nao.org/download)
* Compatibilité NVDA : 2021.2 et ultérieure

Nao (NVDA Advanced OCR) est une extension qui améliore les capacités OCR standard fournies par NVDA sur les versions modernes de Windows. Alors que la commande standard de NVDA utilise l'OCR Windows pour reconnaître l'écran, NAO est capable d'effectuer l'OCR sur les fichiers enregistrés sur votre disque dur ou vos périphériques USB. Utilisez NVDA-Shift-R pour reconnaître toutes sortes d'images et de PDF ! Placez simplement le focus/curseur sur le fichier que vous désirez, ne l'ouvrez pas, mais appuyez sur NVDA-Shift-r. Le document sera reconnu et une simple fenêtre de texte apparaîtra, vous permettant de lire tout le contenu, de l'enregistrer, de rechercher du texte ou de copier du contenu dans le presse-papiers. Nao est capable de gérer également des pdf multipages, donc si vous avez un document inaccessible, ne vous inquiétez pas, Windows OCR pourra faire tout le travail

# Configuration requise

L'extension fonctionne sur les systèmes Windows 10 et Windows 11, car ils ont des capacités OCR intégrées. Nao est compatible à partir de la version 2021.2 de NVDA, donc n'utilisez pas une version plus ancienne du lecteur d'écran. Veuillez noter que Nao fonctionne avec l'explorateur Windows, sur le bureau ou avec les gestionnaires de fichiers Total Commander ; n'utilisez pas d'autres logiciels comme 7zip ou Winrar , car ils ne sont pas pris en charge.

# Fonctionnalités et commandes

* NVDA + Shift + R : reconnaît toutes sortes d'images et de pdf à partir du système de fichiers ;
* PgPréc / PgSuiv: déplace le curseur entre les pages réelles d'un document multipages.
* P : annonce le numéro de page à la position du curseur, dans un document multipage.
* l : annonce le numéro de ligne à la position du curseur, dans un document multipage.
* c : copie tout le texte dans le presse-papiers.
* s : enregistre une copie du document au format texte.
* f : recherche du texte et lit quelques mots avant et après la chaîne recherchée.
* NVDA + Maj + Ctrl + R : Prend une capture de la totalité de l'écran et la reconnaît.
* Veuillez noter que vous pouvez utiliser les commandes NVDA standard pour explorer la fenêtre et mettre le focus sur un élément. Par exemple, vous pouvez vous déplacer avec les touches fléchées et appuyer sur Entrée sur un bouton pour l'activer. Vous pouvez également amener la souris à votre position avec NVDA + PavNum/, puis cliquer avec les touches gauche/droite.    
Veuillez noter que vous pouvez personnaliser les raccourcis de Nao simplement à partir de la boîte de dialogue des gestes de commande de NVDA. Ouvrez le menu NVDA, allez dans les préférences, et à partir de ce sous-menu, sélectionnez la boîte de dialogue des gestes de commande. N'oubliez pas que cette fonctionnalité n'est pas globale, mais qu'elle ne fonctionne que là où Nao peut faire une ocr. Ainsi, les gestes n'apparaîtront que si vous êtes sur le bureau, ou dans l'explorateur de fichiers, Total Commander ou Xplorer.    
Vous pouvez également interrompre un long processus OCR en appuyant simplement sur « Annuler » dans la fenêtre de la barre de progression ; cette fenêtre vous donne également des informations sur l'état de l'OCR, en mettant à jour les informations toutes les 5 secondes. Vous pouvez configurer comment recevoir les informations de la barre de progression avec la commande NVDA-u standard.    
Vous trouverez un sous-menu nommé Nao, sous le menu NVDA - Outils. Pour le moment, il ne contient qu'un élément qui vous permet de faire un don, mais nous allons améliorer cela avec de nouvelles fonctionnalités !    
[Soutien et dons](https://nvda-nao.org/donate)    
Nao est absolument gratuit. Cependant, n'oubliez pas que cette extension est faite durant le temps libre des développeurs. Nous apprécierions toute contribution que vous pourriez nous apporter ! Si vous pensez que notre travail est bon et qu'il améliore votre vie, Envisagez de faire un don.    
Vous souhaitez signaler un bug, proposer de nouvelles fonctionnalités, traduire l'extension dans votre langue ? Nous avons l'adresse e-mail qu'il vous faut ! Écrivez simplement à [support@nvda-nao.org](mailto:support@nvda-nao.org) (a priori en anglais ou italien) et nous serons heureux de vous aider.    

# Historique

# 2021.2

* L'OCR de pdf et des images sont présentés dans une nouvelle fenêtre de texte, avec quelques raccourcis clavier pour des opérations simples.
* Prise en charge du gestionnaire de fichiers Xplorer.
* Les raccourcis Nao sont personnalisables à partir de la boîte de dialogue Gestes d'entrée de NVDA.
* Nao ne fonctionne que là où c'est possible, donc si vous êtes dans une fenêtre non prise en charge, le raccourci clavier sera ignoré par l'extension ; cela a résolu un problème important où les utilisateurs d'Excel et de Word ne pouvaient pas appuyer sur la touche NVDA-Shift-r, car elle était incorrectement interceptée par Nao.
* Un long processus OCR peut être interrompu en appuyant simplement sur le bouton « Annuler » dans la fenêtre de la barre de progression.
* Ajout de traductions en turc, russe, espagnol, chinois et français.
* Les utilisateurs peuvent faire des dons au projet.
* Correction d'un bug avec certains caractères dans le nom du fichier qui empêchait l'OCR de fonctionner correctement.

# 2021.1

* Première version publique !

---

Voici plus bas le message en anglais qui a été envoyé à la liste internationale, le Vendredi 24 Décembre 2021, je pense un bon cadeau de ses auteurs, alors, le voici:    


# <span lang="en">new version of Nao, NVDA Advanced OCR! by Simone Dal Maso Friday, December 24, 2021</span>

<span lang="en">Hello all and many Christmas!</span>   
<span lang="en">We are proud to tell you that a new version of Nao is available.</span>    
<span lang="en">This is the last version for 2021.</span>    
<span lang="en">We have added new features and solved some bugs, here is the list:</span>    

* <span lang="en">OCR of pdf and images are presented in a new text window, with some hotkeys for simple operations; in this manner we automatically solved the incompatibility with third party addons; shortcuts are:</span>
	* <span lang="en">PgUp / PgDown: move the cursor between real pages of a multipages document.</span>
	* <span lang="en">P: report page number related to the cursor position, in a multipage document.</span>
	* <span lang="en">l: report line number related to the cursor position, in a multipage document.</span>
	* <span lang="en">c: copy all text to the clipboard.</span>
	* <span lang="en">s: Save a copy of the document in text format.</span>
	* <span lang="en">f: find text and read some words before and after the string.</span>
* <span lang="en">Support for the Xplorer filemanager.</span>
* <span lang="en">Nao shortcuts are customizable from the Input Gestures Dialog of NVDA. Open NVDA menu, go to preferences, and from that submenu select input gestures dialog. Remember that this feature is not global, but it works only where Nao can make an ocr. So gestures will appear only if you are in the desktop, or in file explorer, Total Commander or Xplorer.</span>
* <span lang="en">Nao works only where possible, so if you are in a not supported window, the hotkey will be ignored by the addon; this solved an important issue where Excel and Word users couldn't press the NVDA-Shift-r keystroke, since it was incorrectly intercepted by Nao.</span>
* <span lang="en">A long Ocr process can be aborted simply pressing the "Cancel" button on the progress bar window. this window also gives you information about the state of the OCR, updating informations every 5 seconds. You can configure how to receive progress bar information with the standard NVDA-u command.</span>
* <span lang="en">Added Turkish, Russian, Spanish, Chinese and french translations.</span>
* <span lang="en">Users can make donations to the project.</span>
* <span lang="en">Fixed a bug with some characters on the file name that prevents the Ocr to work properly.</span>

<span lang="en">Download it from:</span>    

<span lang="en"><https://www.nvda-nao.org/download></span>

<span lang="en">Please, if you find critical bugs, write an email to:</span>    

<span lang="en">
[support@nvda-nao.org](mailto:support@nvda-nao.org)
</span>

<span lang="en">We hope this addon will improve your productivity.</span>

<span lang="en">See you in 2022!</span>    

<span lang="en">View this message Online (#91332):</span>    
<span lang="en"><https://nvda.groups.io/g/nvda/message/91332></span>


---


# Nao : Nouvelle extension pour lire PDF et images inaccessibles par Cyrille de la liste nvda-fr le Mardi 14 Décembre 2021

Bonjour,

Je vous partage une nouvelle extension intéresssante qui a été publiée récemment. Depuis le temps que j'attendais cette fonctionnalité absente de NVDA mais présente dans Jaws.    
Elle permet d'effectuer un OCR (reconnaissance de caractère) sur un fichier PDF ou image dans l'Expplorateur Windows.    
Plus besoin de se soucier de savoir si l'intégralité d'un document est affichée à l'écran, il n'y a plus besoin d'ouvrir le fichier.    
C'est une première version et il y aura encore des changements.    

* Nom : Nao (NVDA Advanced OCR)
* Auteurs : Alessandro Albano, Davide Decarne, Simone Dal Maso
* Compatibilité NVDA : 2021.2 et ultérieure
* Lien direct de téléchargement:    
<http://github.com/sharkboyto/nao/releases/download/v_2021.1.07/nao-2021.1.07.nvda-addon>
* Page GitHub:    
<http://github.com/sharkboyto/nao>

Je vous colle sous ma signature la traduction française de la documentation (qui sera présente seulement dans la prochaine version de l'extension).

Bon test !

Cyrille

# Nao - NVDA Advanced OCR
Nao (NVDA Advanced OCR) est une extension qui améliore les capacités OCR standard fournies par NVDA sur les versions modernes de Windows. Alors que la commande standard de NVDA utilise l'OCR Windows pour reconnaître l'écran, NAO est capable d'effectuer l'OCR sur les fichiers enregistrés sur votre disque dur ou vos périphériques USB. Utilisez NVDA-Shift-R pour reconnaître toutes sortes d'images et de PDF ! Placez simplement le focus/curseur sur le fichier que vous désirez, ne l'ouvrez pas, mais appuyez sur NVDA-Shift-r. Le document sera reconnu et un simple champ d'édition de texte apparaîtra, vous permettant de lire l'intégralité du contenu. Nao est capable de gérer également des pdf multipages, donc si vous avez un document inaccessible, ne vous inquiétez pas, Windows OCR pourra faire tout le travail

# Configuration requise
L'extension fonctionne sur les systèmes Windows 10 et Windows 11, car ils ont des capacités OCR intégrées. Nao est compatible à partir de la version 2021.2 de NVDA, donc n'utilisez pas une version plus ancienne du lecteur d'écran. Veuillez noter que Nao fonctionne avec l'explorateur Windows, sur le bureau ou avec le gestionnaire de fichiers Total Commander ; n'utilisez pas d'autres logiciels comme 7zip ou Winrar , car ils ne sont pas pris en charge.

# Fonctionnalités et commandes
* NVDA + Shift + R : reconnaît toutes sortes d'images et de pdf à partir du système de fichiers ;
* PgPréc / PgSuiv: déplace le curseur entre les pages réelles d'un document multipages.
* NVDA + Shift + P : annonce le numéro de page correspondant à la position du curseur, dans un document multipage.
* NVDA + Maj + Ctrl + R : Prend une capture de la totalité de l'écran et la reconnaît.

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---