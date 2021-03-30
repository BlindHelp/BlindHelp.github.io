---
title: Disponible NVDA 2019.2
layout: post
author: BlindHelp
---

<footer>Mercredi 14 Août 2019</footer>

Après plusieurs versions bêta et quelques versions candidates, NV Access a publié la version finale 2019.2 du lecteur d'écran NVDA il y a quelques minutes. Celle-ci est maintenant disponible au téléchargement!                  

Si vous avez installé la version Beta ou la version RC1, RC2 vous pouvez obtenir NVDA 2019.2 à partir du menu d’aide de NVDA en sélectionnant l’option "Rechercher une mise à jour...". La boîte de dialogue de mise à jour peut même apparaître automatiquement à tout moment.

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             

Comme expliqué dans cet  [article de NV Access sur NVDA 2019.2](https://www.nvaccess.org/post/nvda-2019-2-now-available/)    (en anglais), ceux-ci sont les changements par rapport à la version NVDA 2019.1.1, la version  stable précédente:

* L'historique des dernières recherches en mode navigation (control+NVDA+f), qui empêchait l'utilisation du dialogue par ceux utilisant IME (input method editor), est supprimé.

# 2019.2 #
Les améliorations principales de cette version consistent en l'ajout de l'auto-détection des afficheurs Braille Freedom Scientific, de l'ajout d'un réglage expérimental aux paramètres avancés pour empêcher le mode navigation de se déplacer automatiquement vers le curseur (ce qui peut améliorer les performances), une option pour trippler le débit du synthétiseur Windows OneCore, et plein d'autres correctifs. 

# Nouvelles Fonctionnalités #

* Le dialogue de recherche inclut maintenant un historique des 20 dernières recherches. (#8482) 
	* L'historique de la recherche est effacé lorsque NVDA se ferme ou redémarre. 
* Le support NVDA pour Miranda NG fonctionne avec les versions les plus récentes du client. (#9053) 
* Vous pouvez maintenant désactiver le mode navigation par défaut en désactivant la nouvelle option " Activer le mode navigation au chargement de la page " dans les paramètres du mode navigation de NVDA. (#8716) 
	* Notez que lorsque cette option est désactivée, vous pouvez toujours activer le mode navigation manuellement en appuyant sur NVDA + Espace. 
* Vous pouvez maintenant filtrer les symboles dans le dialogue de prononciation des symboles et ponctuations du même mode que pour le filtrage dans la liste des éléments et dans le dialogue des gestes de commandes. (#5761) 
* Une commande a été ajoutée pour modifier la résolution de l'unité de texte de la souris (la quantité de texte qui sera prononcé lorsque la souris se déplace), mais aucun geste par défaut n'a été attribué à cette commande. (#9056) 
* Le synthétiseur Windows OneCore dispose désormais d'une option d'augmentation du débit qui permet une parole beaucoup plus rapide. (#7498) 
* L'option Tripler le Débit est maintenant configurable à partir de la boucle Paramètres Synthétiseur pour les synthétiseurs vocaux pris en charge. (Présentement, eSpeak-NG et Windows OneCore). (#8934) 
* Les profils de configuration peuvent maintenant être activés manuellement avec des gestes. (#4209) 
	* Les gestes doivent être configurés à l'aide du dialogue " Gestes de commandes ". 
* Dans Eclipse, ajout du support pour l'auto-complétion dans l'éditeur de code. (#5667) 
	* De plus, les informations Javadoc peuvent être lues à partir de l'éditeur quand il est présent à l'aide de NVDA + d. 
* Ajout d'une option expérimentale au panneau Paramètres Avancés permettant d'empêcher le focus système de suivre le curseur du mode navigation (Mettre automatiquement le focus système sur les éléments pouvant être focalisés). (#2039) Bien que cette option ne puisse pas être désactivée pour tous les sites Web, cela peut également résoudre : 
	* Effet d'élastique : NVDA annule sporadiquement la dernière frappe en mode navigation en sautant vers l'emplacement précédent. 
	* Les zones d'édition volent le focus système lorsque vous les parcourez aux flèches sur certains sites Web. 
	* Les touches du mode Navigation sont lentes à réagir. 
* Pour les pilotes d'afficheurs braille qui le supportent, les paramètres du pilote peuvent maintenant être modifiés à partir de la catégorie paramètres braille dans le dialogue des paramètres de NVDA. (#7452) 
* Les afficheurs Braille de Freedom Scientific sont maintenant supportés par l'auto-détection des afficheurs Braille. (#7727) 
* Ajout d'une commande pour afficher le remplacement du symbole sous le curseur de revue. (#9286) 
* Ajout d'une option dans les paramètres avancés vous permettant d'utiliser une fonction en cours de développement, la réécriture du support de la console Windows par NVDA en utilisant l'API UI Automation de Microsoft. (#9614) 
* Dans la console Python, le champ de saisie prend désormais en charge le collage de plusieurs lignes à partir du presse-papiers. (#9776) 

# Changements #

* Le volume des synthèses est maintenant augmenté et diminué de 5 incréments au lieu de 10 dans la boucle paramètres du synthétiseur. (#6754) 
* Clarification du texte dans le gestionnaire des extensions lors du lancement de NVDA avec l'argument --disable-addons. (#9473) 
* Mise à jour des annotations emoji du référentiel de données locales communes Unicode vers la version 35.0. (#9445) 
* Le raccourci clavier du champ de filtrage dans la liste des éléments en mode navigation a été remplacé par alt + y. (#8728) 
* Lorsqu'un afficheur braille auto-détecté est connecté via Bluetooth, NVDA continuera à rechercher les afficheurs USB pris en charge par le même pilote et passera à une connexion USB si elle devient disponible. (#8853) 
* Mise à jour de eSpeak-NG à la révision 67324cc. 
* Mise à jour du traducteur braille liblouis à la version 3.10.0. (#9439, #9678) 
* NVDA dira maintenant le mot " sélectionné " après avoir annoncé le texte qu'un utilisateur vient de sélectionner (#9028, #9909). 
* Dans Microsoft Visual Studio Code, le mode navigation est maintenant désactivé par défaut. (#9828) 

# Corrections de Bogues #

* NVDA ne plante plus lorsqu'un répertoire d'extensions est vide. (#7686) 
* Les marques LTR et RTL ne sont signalées ni en braille ni par épellation lors de l'accès à la fenêtre des propriétés. (#8361) 
* Lorsqu'on se déplace entre les formulaires avec la navigation rapide en mode Navigation, le formulaire entier est maintenant annoncé plutôt que la première ligne seulement. (#9388) 
* NVDA ne restera plus silencieux quand on quitte l'application Windows 10 Mail. (#9341) 
* NVDA n'échoue plus au démarrage lorsque les paramètres régionaux utilisateur sont définis sur une langue inconnue de NVDA, telle que l'anglais (Pays-Bas). (#8726) 
* Quand le mode navigation est activé dans Microsoft Excel et que l'on passe en mode formulaire ou inversement, l'état du mode navigation est désormais correctement signalé. (#8846) 
* NVDA rend maintenant correctement la ligne située au curseur souris dans Notepad ++ et d'autres éditeurs basés sur Scintilla. (#5450) 
* Dans Google Docs (et d'autres éditeurs basés sur le Web), le braille n'indique plus parfois incorrectement " fin de lst " avant le curseur situé au milieu d'un élément de liste. (#9477) 
* Dans la mise à jour Windows 10 mai 2019, NVDA n'annonce plus beaucoup de notifications de volume si le volume est modifié à l'aide de boutons matériels quand l'explorateur de fichiers a le focus. (#9466) 
* Le chargement du dialogue de prononciation des symboles et ponctuations est désormais beaucoup plus rapide lorsque vous utilisez des dictionnaires de symboles contenant plus de 1 000 entrées. (#8790) 
* Dans les contrôles Scintilla tels que Notepad ++, NVDA peut lire la ligne correcte lorsque le retour à la ligne est activé. (#9424) 
* Dans Microsoft Excel, l'emplacement de la cellule est annoncé quand il change à cause des gestes Maj Entrée ou Maj PavNum Entrée. (#9499) 
* Dans Visual Studio 2017 et versions ultérieures, dans la fenêtre Explorateur d'objets, l'élément sélectionné dans l'arborescence des objets ou dans l'arborescence des membres avec des catégories est désormais correctement annoncé. (#9311) 
* Les extensions dont les noms diffèrent seulement par leur majuscule ne sont plus traités comme des extensions séparées. (#9334) 
* Pour les voix Windows OneCore, le débit défini dans NVDA n'est plus affecté par celui défini dans les paramètres vocaux de Windows 10. (#7498) 
* Le journal peut maintenant être ouvert avec NVDA + F1 en l'absence d'informations développeur pour l'objet navigateur courant. (#8613) 
* Il est à nouveau possible d'utiliser les commandes de navigation NVDA dans les tableaux de Google Docs, Firefox et Chrome. (#9494) 
* Les touches " bumper " fonctionnent maintenant correctement sur les afficheurs Braille Freedom Scientific. (#8849) 
* Lors de la lecture du premier caractère d'un document dans Notepad++ 7.7 X64, NVDA ne se bloque plus pendant 10 secondes. (#9609) 
* HTCom peut maintenant être utilisé avec un afficheur Braille Handy Tech en association avec NVDA. (#9691) 
* Dans Mozilla Firefox, les mises à jour d'une région active ne sont plus signalées si la région active est dans un onglet en arrière-plan. (#1318) 
* Le dialogue de recherche du mode navigation de NVDA n'échoue plus si le dialogue À propos de NVDA est ouvert au même moment en arrière-plan. (#8566) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français à partir des versions précédentes, c'est à dire que vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

###  Pour télécharger NVDA 2019.2 ###

La version stable de NVDA 2019.2 est maintenant disponible pour le téléchargement. 

Pour télécharger la version de NVDA 2019.2:    

# Depuis la page du poste NV Access NVDA 2019.2 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2019.2](https://www.nvaccess.org/post/nvda-2019-2-now-available/)    
2. chercher puis appuyez sur le lien "Download NVDA 2019.2".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2019.2!](https://www.nvaccess.org/files/nvda/releases/2019.2/nvda_2019.2.exe)                     

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

### Documentation sur NVDA 2019.2 ###

A continuation vous pouvez trouver des documents disponibles  dans le menu Aide de NVDA, auquel vous pouvez accéder en appuyant sur la combinaison de touches <kbd>NVDA+n</kbd> ou en cliquant sur le bouton droit de la souris sur l'icône dans la barre d'état système :

* [Guide de l'utilisateur](https://blindhelp.github.io/userGuide.html)
* [Quoi de neuf](https://blindhelp.github.io/changes.html)
* [Résumé des commandes](https://blindhelp.github.io/keyCommands.html)

La semaine dernière ils ont publié cette vidéo intéressante:

<div id="ableplayer">
<h3>Lecteur multimedia</h3>
<video id="video1" data-able-player preload="metadata" data-heading-level="0" data-lyrics-mode data-transcript-title="Transcription" data-skin="2020" playsinline data-youtube-id="CpDkMjQNOp0" data-description-audible="false">
<a href"https://www.youtube.com/embed/CpDkMjQNOp0"
</video>
<!-- Dependencies -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="../../ableplayer/thirdparty/js.cookie.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="../../ableplayer/build/ableplayer.min.css" type="text/css"/>

<!-- JavaScript -->
<script src="../../ableplayer/build/ableplayer.min.js"></script>
</div>

Profitez de NVDA 2019.2.        
@+                     
BlindHelp!                           