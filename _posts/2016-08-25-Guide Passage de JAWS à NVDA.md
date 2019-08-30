---
title: Guide Passage de  JAWS à NVDA

layout: post
author: BlindHelp
---

<footer>Jeudi 25 août 2016 (Mis à jour le 6 août 2019)</footer>

### Passage de  JAWS à NVDA ###
Traduit en Français Par Rémy Ruíz(BlindHelp). Si vous le souhaitez, vous pouvez consulter la version originale en anglais
[Switching From JAWS To NVDA.](http://community.nvda-project.org/wiki/SwitchingFromJawsToNVDA#SwitchingFromJAWSToNVDA)

# Passage de  JAWS à NVDA #

## Introduction ##

Le propos de ce guide  est d'aider à la personne   utilisateur de JAWS (Job AccessWith Speech), une solution comercial de lecture d'écran proportionnée par Freedom Scientific, pour  passer avec facilité au revue d'écran gratuite et open-source NVDA (Non Visual Desktop Access). Le guide présuppose des connaissances préalable de JAWS et que vous êtes   capable de l'utiliser efficacement.

Ceci ne propose pas de remplacer le Guide utilisateur intégré, mais plutôt que NVDA ne puise pas intimider tant.

## Forces et faiblesses ##

L'intention de ce guide est de ne pas faire une comparaison entre JAWS et NVDA, mais il est nécessaire de mentionner certaines choses qui fonctionnent différemment. Cela dit, dans la plupart des situations quotidiennes, vous trouverez que NVDA fonctionne aussi bien que comme JAWS, si pas mieux dans certains cas.

## Une note rapide à propos  de la Disposition du Clavier  Portable NVDA ##

Sélectionnez la disposition  du clavier portable ne défini pas automatiquement la touche Verrouillage majuscules comme touche modificatrice NVDA. Toutefois, il fournit  une case à cocher suivi d'une  liste déroulante qui permet de choisir  la Disposition du Clavier pour basculer vers cette option. Appuyez sur NVDA+control+k pour ouvrir cette option.

## Remarque Sur la touche Insert ##

Comme vous le savez peut-être, JAWS et NVDA peuvent utiliser la touche insert comme  leurs touches modificatrices. Les deux lecteurs d'écran le traitent légèrement différemment, ce qui pourrait conduire à une certaine confusion si vous êtes habitué à l'un ou l'autre.

Avec JAWS chargé, la touche insert est uniquement pour son utilisation. Cela signifie que, pour utiliser la fonction d'origine qui lui est assignée (par exemple, basculer entre les modes d'insertion et de réécriture dans un éditeur de texte ou d'un traitement de texte), vous devez d'abord appuyer sur le raccourci pour envoyer la frappe suivante au système.
NVDA d'autre part vous permet d'effectuer la fonction d'origine de la touche insert en appuyant deux fois rapidement. Gardez cela à l'esprit la prochaine fois que vous modifierez du texte en utilisant NVDA et que vous supprimerez du texte. Cela fonctionne également pour la touche Verrouillage majuscules lorsqu'elle est affectée en tant que touche modificatrice NVDA (appuyez deux fois rapidement sur la touche pour basculer en Verrouillage majuscules).

## Synthétiseurs alternatifs ##

NVDA utilise les voix Windows OneCore, intégrées à Windows 10, en tant que synthétiseur par défaut de Windows 10. Les voix Windows OneCore sont réactifs, ont un son naturel et sont disponibles dans de nombreuses langues. Pour ajouter des voix supplémentaires, installez une nouvelle langue dans Windows 10, y compris le pack de langues. Les variantes d'une langue, telles que "Anglais (Britannique)" et "Anglais (Américain)" incluent des voix différentes.

eSpeak NG est le synthétiseur de parole qui est inclus avec NVDA. Il est utilisé par défaut dans Windows 8.1 et les versions antérieures. Comme NVDA lui-même, c'est aussi gratuit et open-source, qui est l'une des raisons de son inclusion. L'autre étant le nombre  de langues qu'il peut parler.

Les voix Windows OneCore et eSpeak NG ont toutes les deux accès à des fonctions telles que"Tripler le débit" permettant le débit de la parole de doubler efficacement. Vous pouvez également appuyer sur MAJ pour mettre en pause. Appuyez à nouveau sur cette touche pour reprendre la parole au lieu de CONTROL, qui arrête simplement la parole.

Pour changer de synthétiseur, appuyez sur NVDA+control+s. Pour configurer d'autres paramètres vocaux, appuyez sur NVDA+control+v.

Cependant, il est possible que, pour une raison quelconque, ni Windows OneCore ni eSpeak NG ne vous conviennent. Si tel est le cas, vous serez heureux de savoir qu'il existe des alternatives qui seront abordées dans les sections suivantes.

### Eloquence ###

Code Factory a publié une version de [eloquence en tant que  extension NVDA pouvant être acheté à partir de ce lien](http://codefactoryglobal.com/app-store/voices-for-nvda/).  Le prix comprend également une licence d'utilisation du synthétiseur Vocalizer de Nuance.

Consultez la section intitulée «Scripts» pour plus d'informations sur les extensions NVDA.

### Encore plus de voix ###

Si vous ne trouvez toujours pas la voix idéale pour vous, consultez la [page ExtraVoices](http://community.nvda-project.org/wiki/ExtraVoices). Cette page en anglais répertorie les autres synthétiseurs de parole (gratuits et payants).

## Terminologie ##

La plupart du temps, JAWS et NVDA ils utilisent beaucoup de termes en commun pour décrire les contrôles, par exemple bouton radio , liste déroulante, case à cocher, etc.

Une différence notable est que NVDA établit une distinction entre les zones d'édition simples et multiligne, et il vous indiquera également si un champ est "protégé" (tout ce que vous écrivez sera remplacés par des astérisques). Aussi vous avertira si le texte est sélectionné dans un champ lorsque vous y placez avec la touche de tabulation. Si c'est le cas, Lorsque vous écrivez le texte sélectionné sera remplacé.

NVDA appel "voix" a les différentes langues qu'un synthétiseur peut   parler, et "variante" a les différentes voix pris en charge par votre synthétiseur.

## Curseurs ##

NVDA Il a plusieurs curseurs pour aider à naviguer  dans Windows et ces applications, semblables a JAWS. La terminologie est légèrement différente, comme décrit ci-dessous.

Le curseur PC, dans la documentation NVDA, il est mentionné comme "le focus système" et "le curseur système".

L'équivalent au curseur JAWS est une combinaison pour la navigation par objet, le curseur de revue, Revue de document et revue de l'écran. La fonction "revue de l'écran" est peut-être le plus similaire au curseur JAWS, mais il est convenable de se familiariser avec les trois modes de revue. Vous trouverez des instructions pour cela, approfondis et plus facile à comprendre, dans le Guide de l'utilisateur ou le livre en anglais [Basic Training for NVDA](https://www.nvaccess.org/product/basic-training-for-nvda-ebook/) ($30 AUD).

Contrairement à JAWS, vous n'avez pas besoin de passer entre le curseur PC et le curseur JAWS, donc le pavé numérique est réservé exclusivement pour travailler avec des fonctions correspondantes  au curseur JAWS.

Il est intéressant de noter que lorsque vous utilisez la navigation par objet ou le curseur de revue, la souris ne se déplace pas en synchronisation. Vous devez appuyer sur une commande pour déplacer la souris vers l'emplacement du curseur de revue, qui ressemble à la façon dont le "curseur invisible" de JAWS fonctionne. Il existe également des commandes pour simuler le clic ou le verrouillage des deux boutons de la souris.

Cependant, si vous souhaitez simplement activer l'objet actuel sur lequel vous vous focalisez lorsque vous utilisez la navigation par objet, il est nécessaire de le faire sans avoir à déplacer le curseur de la souris sur l'objet.

### Accéder à la zone de notification (barre d'état système) ###

NVDA ne fournit pas de boîte de dialogue pour accéder à la zone de notification, car il est possible d'y accéder en mode natif. Appuyez sur WINDOWS+B pour accéder à la zone de notification, puis utilisez les touches fléchées pour vous déplacer entre les éléments. Appuyer sur la barre d'espace d'une icône revient à cliquer sur le bouton gauche de la souris. Appuyer sur Entrée équivaut à double-cliquer avec le bouton gauche de la souris (il n'y a pas de distinction entre ceux-ci dans Windows 10). Appuyez sur la touche Applications ou appuyez sur Maj+F10 pour ouvrir le menu contextuel d’un élément.

Si le premier élément de la zone de notification est "Bouton de notification Chevron", Windows n'est pas configuré pour afficher toutes les icônes. Appuyez sur ENTRÉE ou sur la barre d'espace pour l'ouvrir, puis sur les touches fléchées pour parcourir les éléments. Pour configurer Windows afin qu'il affiche toujours toutes les icônes dans la zone de notification, ouvrez Paramètres, "Zone de notification" ou "Sélectionnez les icônes qui apparaissent dans la barre des tâches", et assurez-vous que l'option "Affichez toujours toutes les icônes dans la zone de notification" est coché.

Si vous préférez une boîte de dialogue à laquelle vous pouvez accéder avec NVDA+F11, il existe une extension "SysTrayList" disponible sur le [site Comunautaire des Extensions NVDA](https://addons.nvda-project.org/index.es.html).

### Accéder au ruban ###

Microsoft Office 2007 a remplacé le menu et les barres d'outils par un "ruban". Tout comme la zone de notification, elles sont accessibles afin que NVDA ne fournisse pas de remplacement de "ruban virtuel". Microsoft a une page en anglais sur [L'Utilisation du clavier pour travailler avec le ruban](https://support.office.com/en-us/article/use-the-keyboard-to-work-with-the-ribbon-954cd3f7-2f77-4983-978d-c09b20e31f0e).  Appuyez essentiellement sur ALT ou ALT + lettre pour accéder à des rubans individuels.  Appuyez sur Ctrl +Flèche gauche et Flèche droite pour vous déplacer entre les groupes dans le ruban actuel (par exemple Presse-papiers, Police, Paragraphe, etc. du ruban  Accueil de Word).  Appuyez sur la touche TAB pour passer d'un élément à l'autre de chaque ruban et barre d'espacement ou Entrée pour activer l'élément du ruban actuel.  Le ruban contient également "Dites-moi" (Tell Me).  Appuyez sur alt + q, puis tapez le terme à rechercher ou la fonction à laquelle vous souhaitez accéder, utilisez les touches de direction pour sélectionner ce dernier dans la liste et appuyez sur Entrée pour l'activer.

### Vérification de l'état des barres de progression ###

Jaws fournit une commande INSERT+control+b pour vérifier l'état des barres de progression dans la fenêtre  actuelle.  NVDA propose des options pour que les barres de progression soient annoncées automatiquement au fur et à mesure de leur mise à jour.  Cela peut être fait à la fois verbalement ("5%", "6%", "23%", etc.) et par des bips, en augmentant le ton, ou les deux. Pour configurer cela, appuyez sur NVDA+U.  Sinon, il est disponible dans la catégorie Présentation des Objets de la boîte de dialogue Paramètres de NVDA.  Appuyez sur NVDA+control+o pour ouvrir ces options.

### Accéder aux  caractères et aux emojis ###

Jaws a une commande INSERT+4 pour sélectionner des symboles.  Dans NVDA INSERT+4 (en supposant que INSERT est votre touche modificatrice NVDA) basculera  le mode  Dire les touches de commandes, ce qui annonce lorsque vous appuyez sur des touches non alphanumériques, telles que la barre d'espace ou les flèches.  Pour sélectionner des caractères spéciaux, vous pouvez utiliser différents moyens dans de nombreux programmes.  Par exemple, appuyez sur CONTROL+ALT+E pour taper le symbole de l'euro dans Word.  La fonctionnalité insérer des symboles dans Word (ALT+N, puis U) est accessible, bien que certains des symboles répertoriés dans la boîte de dialogue "Autres symboles" ne soient pas lus correctement dans toutes les versions de Word.  De même, le programme "charmap" de Windows lui-même vous permet d'insérer n'importe quel symbole de n'importe quelle source.  Encore une fois, tous les caractères ne sont pas complètement décrits.

La fenêtre Emoji de Windows 10 est accessible.  Appuyez sur WINDOWS+; (WINDOWS+point-virgule).  Appuyez sur la touche TAB pour accéder aux catégories, sélectionnez-en une, puis appuyez sur Entrée.  Appuyez sur MAJ+TAB pour parcourir la liste des émojis de cette catégorie, utilisez les flèches pour vous déplacer entre les emojis disponibles et Entrée pour insérer l'émoji actuel dans le texte.  Appuyez sur Echap lorsque vous avez terminé.

### Curseur tactile ###

Dans JAWS 15 ou ultérieur, vous pouvez utiliser les touches du pavé numérique pour naviguer dans les applications à l'aide d'une arborescence similaire à celle utilisée par les lecteurs d'écran de smartphone comme VoiceOver pour naviguer dans les écrans tactiles. Dans NVDA, les commandes de navigation par objet et le mode objet tactile peuvent être utilisées à cette fin.

## Curseur virtuel ##

Le curseur virtuel il est connu comme "mode navigation". Dans une grande partie il fonctionne comme dans JAWS, offrant l'accès aux touches de raccourci de navigation, ou dans la langue NVDA, "navigation avec une seule lettre".

Voici quelques problèmes courants que vous pouvez rencontrer lors de la navigation sur le Web avec NVDA pour la première fois, et comment les résoudre.

### Pourquoi est-tout sur une seule ligne ? ###

Si vous n'êtes pas au courant, JAWS possède deux modes d'affichage des pages web ou autres documents en utilisant le curseur virtuel, Disposition simple et disposition à l'écran. La disposition simple il est définit  par défaut, et montre le contenu d'une forme linéaire -plaçant chaque lien ou contrôle dans sa propre ligne. La  disposition à l'écran distribue le contenu de forme similaire à la façon dont il apparaît à l'écran.

L'option par défaut dans NVDA est "Disposition à l'écran", mais vous pouvez basculer facilement a sa version disposition simple en appuyant sur NVDA+v pendant que vous êtes en mode navigation. Cela désactivera la "disposition à l'écran". N'oubliez pas de sauvegarder la configuration avec NVDA+Contrôle+c après d'avoir apporté cette modification.

### Il me Répète "Cliquable Cliquable Cliquable. ###

Lors de la lecture des pages web, vous avez peut-être remarqué que NVDA dit "Cliquable", parfois trop souvent, même plusieurs fois dans le même lien ou contrôle.

À partir de la version 2018.4 et ultérieure, NVDA dira cliquable qu'une seule fois. Si vous rencontrez ce problème, mettez à jour votre copie. Étant donné que la mise à jour n’entraîne aucun coût, NV Access recommande de toujours utiliser la dernière version stable de NVDA.

Vous pouvez également désactiver l'annonce de l'élément cliquable en accédant aux Paramètres de NVDA Mise en Forme des Documents (NVDA+control+d) et en décochant la case "Cliquable" dans le groupe d'éléments.

### La recherche ne fonctionne pas sur le web ###

Lorsque JAWS est chargée, en appuyant sur Contrôle+f dans Internet Explorer ou Firefox  il s'ouvre la boîte de dialogue Rechercher de JAWS au lieu d'activer la commande de recherche natif au navigateur. Ceci pour vous permettre de rechercher du texte en utilisant le curseur virtuel. La commande rechercher classique permettra de Rechercher l'occurrence suivante du texte que vous avez saisi, mais ne bougera pas le curseur virtuel vers cet emplacement. Cela est dû à l'interaction des lecteurs d'écran  avec des pages web.

NVDA a sa propre commande rechercher pour la recherche dans le mode navigation, mais il n'a pas été associé à Contrôle+f, donc en appuyant sur cette touche de  raccourci il appels  la commande rechercher du navigateur, donc la recherche ne fonctionnera pas comme prévu.

Pour ouvrir la boîte de dialogue Rechercher NVDA Appuyez sur Contrôle+NVDA+F. Tapez ce que vous souhaitez rechercher puis appuyez sur entrée.

### Pas de commandes pour afficher les formulaires et les titres ? ###

Dans JAWS, vous pouvez appuyer sur JAWS+F5 pour lister les champs de formulaire, JAWS+F6 pour lister les titres et JAWS+F7 pour lister les liens. Dans NVDA, tout cela a été combiné dans un dialogue de liste d'éléments, et vous pouvez y accéder en appuyant sur NVDA+F7.

## Mode formulaire ##

L'équivalent aux Mode formulaire, dans NVDA, est le Mode focus et se comporte d'une manière très similaire à JAWS, même en changeant automatiquement entre le mode navigation pour se déplacer dans une page web. Il jouera un son pour vous informer sur le mode dans lequel vous vous trouvez.  Si vous le souhaitez, NVDA peut verbaliser le changement de mode au lieu d'utiliser un son.

Les détails sur le "mode focus" sont expliqués dans le guide de l'utilisateur.

## NVDA parle trop ##

Parfois, il peut sembler que NVDA est trop prolixe dans ces verbalisations, en particulier dans certaines listes d'éléments. Cela arrive parce que, en ce qui concerne NVDA, les listes d'éléments sont des tableaux. NVDA est configuré par défaut  pour annoncer  les titres de chaque ligne ou colonne.

Pour désactiver cette option, décochez la case "Annoncer les titres des lignes et colonnes d'un tableau" dans la boîte de dialogue "Mise en forme des documents" qui se trouve dans les Paramètres de NVDA. Appuyez sur NVDA+control+d pour ouvrir cette boîte de dialogue.

## Dictionnaires de Prononciation ##

NVDA il a toujours inclus une fonction pour modifier le "Dictionnaires de Prononciation", qui sont similaires aux fichiers de l'assistant du dictionnaire de JAWS. Il y a un groupe de cases à cocher dans Ajouter/Éditer entrée au dictionnaire, (avec l'étiquette Type), qui détermine comment il traitera le texte dans le champ "modèle" (comme NVDA lorsque il se réfère au mot réel).

* N'importe où, qui est le comportement par défaut.
* Mot entier, c'est comment JAWS gère les entrées au dictionnaire.
* Expression régulière, ce qui est compliqué.

Vous y trouverez également une case à cocher "Respecter la casse".

Accédez aux Dictionnaires de prononciation avec NVDA+n (pour ouvrir le menu NVDA), puis P pour Préférences, puis D pour Dictionnaires. Il y a trois options. Le dictionnaire par défaut fonctionne sur toutes les voix, le dictionnaire voix fonctionne que sur la voix actuelle et le dictionnaire temporaire fonctionne sur toutes les voix, mais uniquement pour la session en cours. Sauf si vous savez que vous souhaitez utiliser l'un des deux autres, le "dictionnaire par défaut" est le plus souvent le dictionnaire à modifier.

## Scripts ##

Comme dans JAWS, il est possible d'ajouter des scripts pour améliorer l'expérience pour d'autres applications ou pour fournir de nouvelles fonctionnalités qui sont accessibles depuis n'importe où. Ces paquets de script sont appelés "extension NVDA". Vous pouvez trouver d'extensions sur le [site Comunautaire des Extensions NVDA](http://addons.nvda-project.org/).

Y compris quelques uns qui émulent les fonctionnalités de JAWS pas actuellement incorporée dans NVDA, tels que une liste d'icôns correspondant à la barre des tâches système, la fonction  "virtualiser fenêtre" ou la possibilité d'ajouter du texte dans le presse-papiers. Des scripts pour les applications populaires, tels que GoldWave sont également disponibles. Le guide de l'utilisateur contient des informations sur l'installation des extensions, et vous pouvez lire la documentation d'aide qui est fourni avec chaque extension pour apprendre plus sur comment l'utiliser.

Le lien suivant mène au [Guide du développeur NVDA (en anglais)](https://www.nvaccess.org/files/nvda/documentation/developerGuide.html) contenant des informations sur la création d'extensions.

## Accès Distant ##

En 2015, Christopher Toth et Tyler Spivey ils ont publié une extension gratuite pour permettre aux utilisateurs de NVDA de fournir une prise en charge à distance, similaire au Tamdem de JAWS. Pour en savoir plus sur l'extension, s'il vous plaît consulter [la page d'accueil de NVDA Remote](http://www.nvdaremote.com).

## Configurer une application particulière ##

NVDA peut utiliser des profils de configuration et il est possible de configurer certains paramètres qui seront appliquées lors de l'utilisation d'un programme. Cela se fait en créant un profil de configuration pour une application particulière. Pour créer un profil de configuration pour une application particulière, ouvrez la boîte de dialogue Profils de configuration lors de l'utilisation de l'application en question. Pour ouvrir le dialogue, appuyez sur NVDA+N, pour afficher le menu NVDA. flèche bas jusqu'à ce que vous entendiez Profils de configuration et appuyez sur Entrée, ou appuyez sur NVDA+control+P.

Lorsque le dialogue s'ouvre, sélectionner Nouveau et sélectionner "Application en cours" lorsque vous êtes invité à utiliser ce profil. Toute modification apportée aux paramètres NVDA (par exemple, synthétiseur, débit  de la voix ou niveau des ponctuations) s'applique à ce profil.

### Alterner Dire tout ###

Dans les versions récentes de JAWS, vous pouvez configurer un synthétiseur de voix différent à utiliser lorsque  Dire tout est actif. Vous pouvez le faire dans NVDA en créant un profil Dire tout dans le menu Profils de configuration.

Voici les étapes.

1. Ouvrez le  Profils de configuration à partir du menu principal NVDA. Appuyez sur NVDA+N, puis  flèche bas jusqu'à atteindre Profils de configuration.
2. Créez un nouveau profil en faisant tabulation sur le bouton *Nouveau* ou appuyez sur alt+N.
3. Après avoir nommé votre profil, Tab jusqu'aux boutons radio pour utiliser ce profil. Flèche bas jusqu'à ce que vous entendiez Dire tout. Appuyer sur *OK*

pendant que ce profil est actif, vous devez compléter le processus en configurant le synthétiseur quand le profil Dire tout est actif.
