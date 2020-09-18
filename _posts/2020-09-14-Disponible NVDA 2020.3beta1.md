---
title: Disponible NVDA 2020.3beta1
layout: post
author: BlindHelp
---

<footer>Lundi 14 Septembre 2020</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2020.3 Beta 1. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2020.3 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2020.3beta1](https://www.nvaccess.org/post/nvda-2020-3beta1/) (en anglais), ceux-ci sont les changements par rapport à la version 2020.2:

# 2020.3 #

Cette version contient beaucoup d'améliorations de performance et de stabilité, particulièrement dans les applications Microsoft Office. Il existe de nouveaux paramètres pour basculer l'annonce des graphiques et le support des écrans tactiles. L'existence de contenus marqués (soulignés) peut être reportée dans les navigateurs, et il existe de nouvelles tables Braille allemandes. 


# Nouvelles Fonctionnalités #

* Vous pouvez maintenant basculer l'annonce des graphiques dans les paramètres de mise en forme des documents de NVDA. Notez que désactiver cette option annoncera toujours les textes alternatifs des graphiques. (#4837) 
* Vous pouvez maintenant basculer le support des écrans tactiles de NVDA. Une option a été ajoutée aux paramètres d'écrans tactiles, le raccourci par défaut est NVDA+CTRL+Alt+T. (#9682) 
* Ajout de nouvelles tables braille allemandes. (#11268) 
* NVDA détecte maintenant les contrôles de texte UIA en lecture seule. (#10494) 
* Le texte marqué (surligné) est maintenant signalé en Braille et vocalement dans tous les navigateurs Web. (#11436) 
	* Ceci peut être basculé via une nouvelle option dans les paramètres de mise en forme des documents pour le surlignage. 
* De nouvelles touches d'émulation du clavier du système peuvent être ajoutées via le dialogue Gestes de Commandes. (#6060) 
	* Pour faire cela, appuyez sur le bouton "Ajouter" après avoir sélectionné la catégorie "Touches émulées du clavier du système". 

# Changements #

* Le script d'annonce de la mise en forme (NVDA+F) a été modifié pour reporter la mise en forme à la position du curseur système et non plus du curseur de revue. Pour connaître la mise en forme à la position du curseur de revue utilisez maintenant NVDA+Shift+F. (#9505) 
* NVDA ne place plus automatiquement le focus système sur les éléments pouvant être mis en focus en mode navigation, cela améliore les performances et la stabilité. (#11190) 
* Base CLDR mise à jour de la version 36.1 à la version 37. (#11303) 
* Mise à jour de eSpeak-NG à la version 1.51-dev, niveau 1fb68ffffea4 
* Vous pouvez maintenant utiliser les commandes de navigation de tableau dans les listes avec des éléments cochables comportant plusieurs colonnes. (#8857) 
* Dans le dialogue de confirmation de suppression d'une extension du gestionaire d'extensions, le bouton "Non" est maintenant celui par défaut. (#10015) 
* Dans la liste d'éléments de Microsoft Excel, les formules sont maintenant présentées sous leur forme traduite. (#9144) 
* NVDA indique maintenant correctement la terminologie des notes dans Excel. (#11311) 
* Lors de l'utilisation de la commande de déplacement du curseur de revue vers le focus en mode navigation, le curseur de revue est maintenant déplacé à la position du curseur virtuel. (#9622) 
* Les informations reportées en mode navigation, comme les informations de mise en forme avec NVDA+F sont maintenant affichées dans une fenêtre légèrement plus grande et centrée à l'écran. (

# Corrections de Bogues #

* NVDA annonce maintenant toujours l'arrivée sur un symbole suivi d'un espace lors de la navigation par mot, peu importe le niveau de ponctuations. (#5133) 
* Dans les applications utilisant QT 5.11 et supérieur, les descriptions d'objets sont à nouveau annoncées. (#8604) 
* Lors de la suppression d'un mot par CTRL+Suppr, NVDA n'est plus silencieux. (#3298, #11029) 
	* Le mot à droite du mot supprimé est maintenant annoncé. 
* Dans les paramètres généraux, la liste des langues est maintenant triée correctement. (#10348) 
* Améliorations notables de performances lors du filtrage dans le dialogue des gestes de commandes. (#10307)( 
* Vous pouvez maintenant envoyer un symbole Unicode au-delà de u+FFFF depuis un afficheur Braille. (#10796) 
* NVDA annoncera le contenu du dialogue "Ouvrir avec" sous Windows 10 May 2020 Update. (#11335) 
* Une nouvelle option expérimentale dans les paramètres avancés (Activer l'enregistrement sélectif des évènements UI Automation et les changements de propriétés) peut apporter des améliorations majeures de performances dans Visual Studio et les autres applications basées sur UIA si activée. (#11077, #11209) 
* Dans les listes avec éléments cochables, l'état "sélectionné" n'est plus annoncé systématiquement, et, le cas échéant, l'état "non sélectionné" est annoncé à la place. (#8554) 
* Sous Windows 10 May 2020 Update, NVDA affiche maintenant le mapeur de sons Microsoft lors de l'affichage des périphériques de sortie audio du dialogue Synthétiseurs. (#11349) 
* Sous Internet Explorer, les nombres sont maintenant annoncés correctement pour les listes ordonnées si la liste ne commence pas par `1.` (#8438) 
* Sous Google Chrome, NVDA reporte maintenant l'état "non coché" pour tous les contrôles, pas seulement les cases à cocher, qui ne sont actuellement pas cochés. (#11377) 
* Il est à nouveau possible de naviguer dans différents contrôles si la langue de NVDA est définie sur l'aragonais. (#11384) 
* NVDA ne se figera plus par moment dans Microsoft Word lors du défilement rapide avec flèche haut/bas ou lors de la saisie de caractères avec le Braille activé. (#11431, #11425, #11414) 
* NVDA n'ajoute plus d'espace final inexistant lors de la copie de l'objet navigateur actuel vers le presse-papiers. (#11438) 
* NVDA n'active plus le profil dire tout s'il n'y a rien à lire. (#10899, #9947) 
* NVDA n'est plus incapable de lire la liste des fonctionnalités Internet dans IIS (Internet informations service). (#11468) 
* NVDA garde maintenant le périphérique audio actif, améliorations des performances sur certaines cartes son. (#5172, #10721) 
* NVDA ne se fige ou ne se quitte plus lors d'un appui prolongé de CTRL+Maj+Flèche basse dans Microsoft Word. (#9463) 
* L'état "développé"/"Réduit" des arborressances sur drive.google.com est maintenant tout le temps reporté par NVDA. (#11520) 
* NVDA détectera maintenant automatiquement l'afficheur Braille HumanWare NLSE en Bluetooth, son nom Bluetooth étant maintenant "NLS eReader Humanware". (#11561) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

NVDA 2020.3 étant encore seulement en version beta, certains auteurs d'extension ne les ont pas encore mises à jour avec Python 3 ou ne sont pas mis à jour les indicateurs de compatibilité et  y travaillent en ce moment.

Concernant plus spécifiquement NVDA remote qui préoccupe pas mal de monde, il a été annoncé  que l'extension est   maintenant compatible avec NVDA 2019.3. Il existe une version pour NVDA 2019.3 et ultérieure (dans lequel il a collaboré Reef Turner, de NV Access) et une autre pour les anciennes versions de NVDA.    

Voir sur [nvdaremote.com](https://nvdaremote.com/),  menu de navigation Download

Merci à Noelia pour cette info.

###  Pour télécharger NVDA 2020.3beta1 ###

La version beta1 de NVDA 2020.3 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2020.3 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2020.3beta1 :    

# Depuis la page du poste NV Access NVDA 2020.3beta1 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2020.3beta1](https://www.nvaccess.org/post/nvda-2020-3beta1/)    
2. chercher puis appuyez sur le lien "Download NVDA 2020.3beta1".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2020.3beta1!](http://www.nvaccess.org/files/nvda/releases/2020.3beta1/nvda_2020.3beta1.exe)    

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2020.3beta1. Avec vos tests, vous aiderez à la prochaine version de NVDA 2020.3, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           