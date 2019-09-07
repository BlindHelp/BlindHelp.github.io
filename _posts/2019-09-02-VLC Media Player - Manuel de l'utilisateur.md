---
title: VLC Media Player - Manuel de l'utilisateur pour les personnes aveugles ou malvoyantes
layout: post
author: BlindHelp
---

<!DOCTYPE html>
<html lang="fr">


<footer>Lundi 2  Septembre 2019</footer>

---

Table des matières<a id="Table des matières"></a>
-------------
- [VLC Media Player - Manuel de l'utilisateur pour les personnes aveugles ou malvoyantes](#mark0)
- [Chapitre 1. Introduction](#mark1)
- [1.2 Données techniques du manuel](#mark2)
- [Chapitre 2. Télécharger, installer et définir par défaut.	](#mark3)
- [2.1 Télécharger](#mark4)
- [2.2 Installation](#mark5)
- [2.3 Définir comme lecteur par défaut](#mark6)
- [Chapitre 3 Commandes à utiliser](#mark7)
- [3.1 Commandes générales](#mark8)
- [3.2 Commandes générales de lecture](#mark9)
- [3.3 Commandes générales de volume](#mark10)
- [3.4 Commandes générales de répétition du média](#mark11)
- [3.5 Commandes supplémentaires avec l'extension de NVDA VLC Media Player](#mark12)
- [3.6 Commandes supplémentaires avec l'extension de NVDA VLC Access Enhancement](#mark13)
- [3.7 Tâches facultatives avec l'extension de NVDA VLC Access Enhancement](#mark14)
- [3.8 Aller à un temps spécifié de lecture](#mark15)
- [3.9 Commandes de la barre de menus](#mark16)
- [Chapitre 4. Réglage du volume au démarrage de la lecture](#mark17)
- [Chapitre 5. Réglages du son (Égaliseur)](#mark18)
- [Chapitre 6. Lecture du média](#mark19)
- [6.1 Lecture de médias récents](#mark20)
- [6.2 Créer une liste de lecture](#mark21)
- [6.3 Vue de la liste de lecture](#mark22)
- [Chapitre 7. Créer des raccourcis clavier dans VLC](#mark23)
- [Chapitre 8. Enregistrer avec VLC](#mark24)
- [Chapitre 9. Conversion en différents formats audio et vidéo avec VLC](#mark25)
- [Chapitre 10. Écoutez vos radios et TV en ligne préférées avec VLC](#mark26)
- [Chapitre 11. Créer des listes de lecture de radio en ligne](#mark27)
- [Chapitre 12. Lecture de films en DVD](#mark28)
- [12.1 Commandes générales](#mark29)
- [12.2 Commandes générales de lecture](#mark30)
- [12.3  Commandes générales de volume](#mark31)
- [Utilisation d'un script Jaws pour VLC par Daniel Poiraud.](#mark32)

---

# VLC Media Player - Manuel de l'utilisateur pour les personnes aveugles ou malvoyantes<a id="mark0"></a>

Auteur: Rémy Ruiz, Adapté en français et inspiré du manuel réalisé par mon ami Gunther Melendez    
Source en espagnol:     
[<span lang="es">Accesibilidad y Tecnología: Manual de uso del Reproductor VLC media player</span>](https://accesibilidadytecnologia.blogspot.com/2019/09/manual-de-uso-del-reproductor-vlc-media.html)    
Destiné à: les personnes ayant une déficience visuelle.    

# Chapitre 1. Introduction<a id="mark1"></a>
Bien qu’il existe une grande variété de lecteurs multimédias, il est bon de savoir que l’accessibilité pour les personnes ayant une déficience visuelle est très favorable, du Lecteur Windows media player au légendaire Winamp, en passant par iTunes, le lecteur media player classic, entre autres, nous allons nous concentrer sur le lecteur multimédia VLC, qui répond non seulement aux attentes de tout lecteur, telles que: accessibilité, qualité audio, commandes pour presque toutes les fonctions principales, création des raccourcis, la conversion en différents types de format, enregistrer tout ou partie d’un contenu audio ou vidéo, etc.    
En ce qui concerne l'accessibilité avec les lecteurs d’écran, bien que dans l’opération de base, Jaws, NVDA et le Narrateur s'adaptant parfaitement, nous devons nous référer au fait que dans le cas du lecteur d'écran NVDA, nous privilégions l'utilisation et la simplicité, 2  extensions, d'une part, l'extension appelée VLC media pláyer, qui, s'il remplit bien sa fonction, ne peut pas s'empêcher de faire référence à l'autre extension appelée, VLC Access Enhancement, qui, à son critères propres, accomplit sa tâche de manière excellente, car en plus de fournir plus de tâches à effectuer, il nous donne donc plus de commandes pour que notre expérience d'utilisation du lecteur VLC soit vraiment la meilleure. Avec cela, nous ne voulons pas dévaluer un lecteur ou une extension, mais au final, on est libre de décider avec quel lecteur on se sent plus à l'aise et ainsi votre expérience de VLC ne pourra en être que meilleure !    
Dans ce manuel, les actions principales seront expliquées, à la fois dans son fonctionnement et son accessibilité avec les lecteurs principaux, ainsi qu'avec le lecteur NVDA et les 2 extensions mentionnés ci-dessus, car il convient de mentionner qu'il existe des fonctions pouvant être exécutées uniquement avec l'utilisation de l'un d'eux.    
Enfin, je ne voudrais pas rater l'occasion de remercier Paulber19, créateur de l''extension VLC Access Enhancement, pour les améliorations apportées dans la dernière version 1.3.1, ainsi que tous les bêta-testeurs qui permettent de signaler des bugs ou demander de nouvelles fonctionnalités pour améliorer l'extension.    

# 1.2 Données techniques du manuel<a id="mark2"></a>

Lecteur multimédia:    

* VLC media player, version 3.0.8

Système d'exploitation:    

* Windows 10 1903, applicable aux versions précédentes

Lecteurs d'écrans utilisés:    

* Jaws 2019 1906.10, réalisable avec les versions précédentes
* NVDA 2019.2, réalisable avec les versions précédentes
* Narrateur de Windows 10

Extensions utilisés  de NVDA:    

* VLC media pláyer, versión 2.10  
* VLC Access Enhancement, versión 1.3.1 

Auteur du présent manuel en français:    

* Rémy Ruiz (BlindHelp)

Publié sur:    

* [BlindHelp.github.io](https://blindhelp.github.io/) 

# Chapitre 2. Télécharger, installer et définir par défaut.<a id="mark3"></a>
# 2.1 Télécharger<a id="mark4"></a>
Pour télécharger le lecteur multimédia VLC, vous pouvez le faire depuis le site Web officiel de VideoLAN:    
[https://www.videolan.org/vlc/index.es.html](https://www.videolan.org/vlc/index.es.html)    
 Ici, il vous suffit de rechercher la version 32 ou 64 bits en fonction de l’architecture de votre ordinateur. Comme déjà mentionné, le programme est gratuit et open source.    
En outre, si vous le souhaitez, vous pouvez également télécharger la version installable et la version portable. Pour cela, vous pouvez accéder à la section de téléchargement, choisir la version en fonction de l'architecture de votre ordinateur et le format .exe pour installable et 7z / zip pour portable.    

# 2.2 Installation<a id="mark5"></a>
Quant à l'installation:    

1.	Appuyez sur Entrée sur le fichier .exe.
2.	Lorsque vous ouvrez l'assistant d'installation, vous serez dans la sélection de la langue. Ce sera déjà en français, appuyez sur Tab jusqu'à OK et appuyez sur Entrée. 
3.	Appuyez sur Tab jusqu'à Suivant et appuyez sur Entrée.
4.	Maintenant, vous serez dans le contrat de licence, appuyez sur Tab jusqu'à Suivant et appuyez sur Entrée.
5.	Le type d'installation s'ouvrira, appuyez sur les flèches haut ou bas et choisissez celui qui vous convient. Il est recommandé de choisir celui qui est suggéré, maintenant appuyez sur Tab et vous serez dans une liste d'options, il est recommandé de le laisser tel quel, appuyez sur Tab jusqu'à Suivant et appuyez sur Entrée. 
6.	Appuyez sur Tab jusqu'à Installer et appuyez sur Entrée.
7.	À la fin de l'installation, appuyez sur Tab et, selon votre décision, cochez ou non la case permettant d'exécuter le lecteur, puis appuyez sur Tab jusqu'à Terminer et appuyez sur Entrée.
8.	Lorsque vous ouvrez le lecteur VLC pour la première fois, une boîte contenant 2 options qui sont cochées vous est proposée, autorisez l'accès au réseau pour les métadonnées et vérifiez les mises à jour de VLC, il est recommandé de les laisser comme ça, appuyez sur Tab jusqu'à Continuer, appuyez sur Entrée.
9.	Vous pouvez maintenant commencer à utiliser VLC.

Quant au VLC portable:    

1.	Décompressez le fichier VLC.zip / VLC.7z. Enregistrez le dossier résultant sur votre ordinateur, à l'emplacement de votre choix. 
2.	Ouvrez le dossier VLC et appuyez sur Entrée dans le fichier VLC.exe     
3.	Lorsque vous ouvrez le lecteur VLC pour la première fois, une boîte contenant 2 options qui sont cochées vous est proposée, autorisez l'accès au réseau pour les métadonnées et vérifiez les mises à jour de VLC, il est recommandé de les laisser comme ça, appuyez sur Tab jusqu'à Continuer, appuyez sur Entrée.    
4.	Vous pouvez maintenant commencer à utiliser VLC.
5.	Il est recommandé de créer un raccourci vers le fichier VLC.exe sur le bureau. Pour faire cela:
	* Placez-vous  sur le fichier  VLC.exe.
	* Appuyez sur la touche Applications.
	* Appuyez sur flèche bas jusqu'à Envoyer vers sous-menu. Appuyez sur flèche droite.
	* Appuyez sur flèche bas jusqu'à Bureau (créer un raccourci). Appuyez sur Entrée. 
	* Maintenant le raccourci sur le bureau vient d'être créé. Ainsi, lorsque vous souhaitez utiliser le lecteur VLC, appuyez simplement sur Entrée sur ce raccourci.

# 2.3 Définir comme lecteur par défaut<a id="mark6"></a>
Pour définir VLC en tant que lecteur par défaut, nous allons expliquer 2 procédures:    

1.	Pour Windows 10:
	* Appuyez sur Windows+i pour ouvrir la fenêtre Paramètres.
	* Appuyez sur Tab jusqu'à Système.
	* Appuyez sur flèche droite jusqu'à Applications. Appuyez sur Entrée.
	* Appuyez une fois sur Tab, vous serez sur une liste, appuyez sur  flèche bas jusqu'à Applications par défaut. Appuyez sur Entrée ou sur la barre d'espace.  
	* Appuyez sur Tab jusqu'à Lecteur de musique, appuyez sur Entrée.  
	* Appuyez sur Tab jusqu'à VLC media player bouton. Appuyez sur Entrée.
	* Maintenant appuyez sur Tab jusqu'à Lecteur vidéo, Appuyez sur Entrée. 
	* Appuyez sur Tab jusqu'à VLC media player bouton. Appuyez sur Entrée.
	* Prêt.
2.	Pour Windows 10 et les systèmes d'exploitation antérieurs:
	* Placez-vous  sur le fichier .mp3. Appuyez sur la touche Applications.
	* Appuyez sur flèche bas jusqu'à Ouvrir avec sous-menu. Appuyez sur flèche droite.  
	* Appuyez sur flèche haut jusqu'à Choisir une autre application. Appuyez sur Entrée.
	* Appuyez sur flèche haut et allez sur VLC media player.
	* Appuyez sur Tab jusqu'à Toujours utiliser cette application pour ouvrir les fichiers .mp3 case à cocher non cochée, cochez la case en appuyant sur la barre d'espace.  
	* Appuyez sur Tab jusqu'à OK. Appuyez sur Entrée.
	* Répétez les mêmes étapes dans d’autres fichiers tels que mp4, avi, etc.
	* Prêt.

# Chapitre 3 Commandes à utiliser<a id="mark7"></a>
Nous distinguerons les commandes générales d'un même lecteur, utilisables par n’importe quel lecteur d'écran (Narrator, Jaws et NVDA), ainsi que les commandes ajoutées par les extensions de NVDA: VLC media player 2.10 et VLC Access Enhancement 3.1.1 

# 3.1 Commandes générales<a id="mark8"></a>
Parmi les principaux raccourcis clavier nous avons:

* Ouvrir un fichier…: Ctrl+O
* Ouvrir un dossier: Ctrl+F
* Préférences: Ctrl+P
* Afficher / masquer la liste de lecture: Ctrl+L
* Activer ou désactiver l'interface minimale (sans les menus): Ctrl+H
* Enregistrer la liste de lecture: Ctrl+Y
* Ouvrir un flux réseau: Ctrl+N
* Convertir / Enregistrer: Ctrl+R
* Aller à un temps spécifié: Ctrl+T
* Quitter: Ctrl+Q

# 3.2 Commandes générales de lecture<a id="mark9"></a>

* Mettre en pause ou reprendre la lecture: Barre espace    
C'est simple et efficace.
* Couper ou réactiver le son (fonction Mute ou Muet): M    
 Notez que la lecture continue, seul le son est coupé.
* Arrêter (stopper la lecture et retournent au début du morceau de musique ou de la vidéo que vous étiez en train de lire): S
* Lire la piste suivante: N
* Lire la piste précédente: P
* Accélérer la lecture: plus  (du pavé numérique actif)
* Ralentir la lecture: moins  (du pavé numérique actif)
* Avancer de 3 secondes: Maj+Flèche droite
* Reculer de 3 secondes: Maj+Flèche gauche
* Avancer de 10 secondes: Flèche droite
* Reculer de 10 secondes: Flèche gauche
* Avancer de 1 minute: Ctrl+Flèche droite
* Reculer de 1 minute: Ctrl+Flèche gauche

Seulement avec NVDA

* Avancer de 5 minutes: Ctrl+Alt+Flèche droite
* Reculer de 5 minutes: Ctrl+Alt+Flèche gauche 

# 3.3 Commandes générales de volume<a id="mark10"></a>

* Augmenter le volume: Flèche haut
* Diminuer le volume: Flèche bas

# 3.4 Commandes générales de répétition du média<a id="mark11"></a>
En appuyant sur les commandes suivantes, les lecteurs ne vous diront rien. Il est donc recommandé de faire très attention lorsque vous les utilisez.    

A.	Répéter    
Cette option est désactivée par défaut. Pour l'activer et l'utiliser correctement, procédez comme suit, dans l'ordre indiqué. 

* Répéter tout: Appuyez une fois sur la touche l
* Répéter le média courant: appuyez à nouveau sur la touche l 
* Désactiver la répétition: appuyez à nouveau sur la touche l

B.	Répétition aléatoire

Cette option est désactivée par défaut. Pour l'activer et l'utiliser correctement, procédez comme suit, dans l'ordre indiqué. 

* Répéter en mode  aléatoire: appuyez une fois sur la touche r
* Désactiver la répétition aléatoire: appuyez à nouveau sur la touche r

Note.    
Lors du redémarrage de VLC, définissez le type de répétition que vous préférez. 

# 3.5 Commandes supplémentaires avec l'extension NVDA VLC Media Player<a id="mark12"></a>
Auteur: Javi Domínguez    
Version: 2.10    
Plusieurs langues et compris le français    
Valable pour les versions de VLC 3.0 et supérieures    
Télécharger la dernière version depuis la page suivante:    
[https://addons.nvda-project.org/addons/vlc.fr.html](https://addons.nvda-project.org/addons/vlc.fr.html)    
Actions    

* Verbaliser l'état entre activer désactiver la répétition (dans le même ordre que dans la forme générale): l 
* Verbaliser l'état entre activer désactiver la répétition aléatoire: r
* Verbaliser la barre d'état du Lecteur multimédia VLC: i
* Naviguer à travers les contrôles de lecture: Tab et Maj+Tab 
* Verbaliser les changements du volume et du temps

# 3.6 Commandes supplémentaires avec l'extension de NVDA VLC Access Enhancement<a id="mark13"></a>
Auteur: Paulber19    
Version: 1.3.1    
Langues disponibles, français et espagnol    
Compatibilité: à partir de NVDA 2018.3.2 à NVDA2019.2     
Pour la dernière maj de l'extension qui est la version 1.3.1 du 11/06/2019 c'est par ici:    
[VLCAccessEnhancement-1.3.1.nvda-addon](https://rawgit.com/paulber007/AllMyNVDAAddons/master/VLC//VLCAccessEnhancement-1.3.1.nvda-addon)    
Pour utiliser cette extension, vous devez désactiver ou supprimer l'extension de NVDA VLC Media Player, si vous l'avez également installé.    
Actions    

* Afficher l'aide sur les raccourcis possibles dans la fenêtre principale: NVDA+Control+H
* Enregistrer la position courante de lecture pour ce média: NVDA+contrôle+f5
* Relancer la lecture à la position  enregistrée pour ce média: NVDA+contrôle+f6
* Relancer la lecture interrompue à la position mémorisée par VLC, par exemple: en appuyant sur s: contrôle+alt+r
* Afficher le dialogue pour  définir un temps et déplacer le curseur de lecture à ce temps: Control+, (virgule)
* Annoncer la durée déjà lue du média: , (virgule)
* Annoncer la durée du média restante à lire: ; (point-virgule)
* Annoncer la durée totale du média: : (deux points)
* Augmenter la vitesse: +
* Diminuer la vitesse: - (moins du pavé numérique)
* Revenir à la vitesse normale: =
* Annoncer la vitesse de lecture courante: ! (point d'exclamation)
* Basculer entre répéter tout, répéter le média courant, ne pas répéter: l
* Basculer entre lecture aléatoire, lecture normale: r
* Pour ne pas déranger l'utilisateur ni le changement du  niveau du volume ni la durée lue automatiquement ne sont pas annoncés, pour que cela soit annoncé, vous devez d'abord mettre la lecture en pause et appuyer sur la commande pour entendre l’action souhaitée.

# 3.7 Tâches facultatives avec l'extension de NVDA VLC Access Enhancement<a id="mark14"></a>
Vous pouvez éventuellement modifier certaines commandes générales du lecteur et rétablir les valeurs par défaut de la configuration, telles qu’elles étaient au moment de l’installation. Pour effectuer ces 2 tâches, procédez comme suit:    

 * Appuyez sur NVDA+n
* Appuyez sur flèche  bas jusqu'à  préférences, appuyez sur flèche droite. 
* Appuyez sur la flèche haut jusqu'à Lecteur multimédia VLC: compléments d'accessibilité - Paramètres, appuyez sur Entrée.  
* Vous aurez 2 options: Modifier les raccourcis du lecteur média VLC et Supprimer le dossier de configuration de VLC.    
Pour exécuter l’une de ces deux options, vous devez d’abord fermer le lecteur.     
Nous allons maintenant expliquer comment modifier les raccourcis de VLC Media Player, personnellement, il est conseillé de le faire, à la fin, vous décidez.     
* Appuyez sur Entrée dans l'option Modifier les raccourcis du lecteur média VLC.
Le lecteur va verbaliser les modifications qui seront apportées, il s'agira désormais de commandes générales, c'est-à-dire que vous pouvez les utiliser avec n'importe quel lecteur. Les changements sont les suivants:
* Augmenter la vitesse de lecture de 0.5x: o     
* Augmenter la vitesse de 0.1x: i
* Diminuer la vitesse de lecture   de 0.1x: u
* Diminuer la vitesse de lecture   de 0.5x: y
* Revenir à la vitesse normale: =
 * Aller 5 minutes en avant: contrôle+majuscule+flèche droite
* Aller 5 minutes en arrière: contrôle+majuscule+flèche gauche    
Appuyez sur Tab jusqu'à OK et appuyez sur Entrée. Maintenant, un avertissement apparaîtra: Le fichier de configuration de VLC a été mis à jour. Appuyez sur OK avec la touche Entrée. 

Pour effectuer la deuxième tâche,, Supprimer le dossier de configuration de VLC, placez-vous sur cette option, appuyez sur entrée et recommencez. Une notification sera présentée, appuyez sur OK avec la touche Entrée.  

# 3.8 Aller à un temps spécifié de lecture<a id="mark15"></a>
Pour aller à  un temps spécifié dans la lecture soit d'audio ou vidéo, la commande générale est Ctrl+T.    
Au total, 6 chiffres doivent être écrits en continu.    

* Les deux premiers pour indiquer les heures
* Les deux suivants pour indiquer les minutes
* Les deux derniers pour indiquer les secondes    

Donc par exemple:     
Si vous voulez aller à 23 minutes et 8 secondes de lecture, vous devez taper: 002308 et appuyer sur entrée.     
Si vous voulez aller à 2 heures 15 minutes et 37 secondes de lecture, vous devez taper: 021537 et appuyer sur entrée.    
Si vous voulez aller à 57 secondes de lecture, vous devez taper: 000057 et appuyer sur entrée.    
Avec l'extension  de NVDA VLC Access Enhancement, la commande est contrôle+, (virgule) lorsque vous appuyez sur ce raccourci, une boîte d'édition s'ouvre pour écrire les heures, lorsque vous appuyez de nouveau sur la touche Tab, vous vous retrouvez dans une autre zone d'édition dans laquelle vous devez écrire les minutes. Faites de même pour les secondes. et appuyez sur Aller au temps avec la touche Entrée.    

# 3.9 Commandes de la barre de menus<a id="mark16"></a>
Pour activer la barre de menus, appuyez sur la touche Alt, appuyez sur la touche droite pour afficher dans l'ordre respectif les menus suivants. Écoutez attentivement les commandes correspondant à chaque cas.    

* Média Alt+M
* Lecture Alt+L
* Audio Alt+A
* Vidéo Alt+V
* Sous-titres  Alt+t
* Outils Alt+O
* Vue Alt+u
* Aide Alt+i

Pour accéder aux différentes tâches de chaque menu, appuyez sur flèche haut ou bas et appuyez sur entrée à l'endroit où vous souhaitez effectuer l'opération. Chaque tâche a également une commande respective.    
Note:    
Toutes les commandes de tâches sur chaque menu ne fonctionnent pas.    
Si vous avez créé un raccourci clavier, ce sera votre commande définie.

# Chapitre 4. Réglage du volume au démarrage de la lecture<a id="mark17"></a>
Lorsque vous commencez à utiliser et à lire un média, VLC le fait à un niveau de 85 en fonction des valeurs du même lecteur. Vous pouvez modifier en variant le volume à votre convenance, en appuyant sur  la flèche  haute (pour l'augmenter) et sur la flèche basse (pour le baisser).    
Si vous souhaitez modifier et définir un nouveau niveau de volume lorsque vous commencez à utiliser le lecteur VLC, suivez les prochaines étapes:    

1.	Appuyez sur Ctrl+p pour ouvrir le panneau des préférences.
2.	Appuyez sur Tab jusqu'à Interface case à cocher cochée.  
3.	Appuyez sur flèche droite jusqu'à Audio  case à cocher cochée.  
4.	Appuyez sur Tab jusqu'à Toujours remettre le niveau de volume à :   case à cocher non cochée. Appuyez sur la barre d'espace pour la cochée. 
5.	Appuyez une fois sur Tab, vous serez dans une liste où, en appuyant sur les flèches haut ou bas, vous pourrez choisir le niveau de volume au démarrage.    
6.	Une fois situé au niveau souhaité, appuyez sur la touche de raccourci:Alt+e (Enregistrer).
Vous pouvez maintenant redémarrer le lecteur et vous remarquerez le nouveau niveau de volume.

# Chapitre 5. Réglages du son (Égaliseur)<a id="mark18"></a>
Vous pouvez régler le son de la lecture du média et rendre ainsi l'expérience utilisateur de VLC plus agréable.    
Pour accéder à cette tâche, nous allons utiliser le lecteur NVDA avec l'extension VLC Media Player. L'accessibilité à la fois avec le lecteur Jaws et le lecteur NVDA avec l'extension VLC Access Enhancement est possible sauf indication contraire, cette dernière extension de NVDA est moins réactive quand on est dans la boite de dialogue Ajustements et effets, quoique.
Ainsi, si vous utilisez NVDA avec les 2 extensions, vous devez désactiver l'extension VLC Access Enhancement et activer l'extension VLC Media Player.    
 Note: Vous pouvez utiliser la première extension appelée VLC Access Enhancement, mais si vous ne pouvez pas faire ces manipulations avec cette extension, vous pouvez utiliser la deuxième extension appelée VLC Media Player.    
Procédure:    

1.	Appuyez sur la commande Alt+O (Outils).
2.	Le lecteur vous dira Effets et filtres Ctrl+E. Sinon, appuyez sur la flèche haut. Appuyez sur Entrée. 
3.	Appuyez sur Tab jusqu'à Activer case à cocher non cochée. Appuyez sur la barre d'espace pour la cochée.  
4.	Appuyez sur Tab jusqu'à Préamp Potentiomètre    120, à partir de là, vous pouvez modifier les niveaux qui sont 12 au total (tous sont à zéro par défaut). Avancez à chaque niveau en appuyant sur Tab. 
5.	Pour modifier et tester le son pour chaque niveau, vous pouvez appuyer sur les touches suivantes:    
	* Appuyez sur flèche haut: il augmentera de 1 à 1.
	* Appuyez sur flèche bas: il diminuera de 1 à 1.
	* Appuyez sur page précédente: il augmentera de 10 à 10.
	* Appuyez sur page suivante: il diminuera de 10 à 10.
	* Appuyez sur début: ira au niveau plus bas, -200.
	* Appuyez sur fin: ira au niveau plus haut, 200.
6.	Appuyez sur Tab jusqu'à Enregistrer. Appuyez sur Entrée.
7.	Appuyez sur Maj Tab jusqu'à Fermer. Appuyez sur Entrée.

# Chapitre 6. Lecture du média<a id="mark19"></a>
Lorsque nous faisons référence à la lecture du média (fichiers audio, vidéo, URLs), appuyez simplement sur Entrée sur ce média et démarrez la lecture, bien sûr, si VLC est l'application par défaut. Si ce n'est pas le cas, nous allons appuyer sur les commandes générales de VLC à cette fin.    
Dans le cas des fichiers, il sera utilisée la commande Ctrl+O.    
Dans le cas des dossiers, il sera utilisée la commande Ctrl+F.    
Dans les deux cas, vous serez dans la vue de l'explorateur, appuyez sur Maj Tab jusqu'à Arborescence et suivez la procédure pour rechercher le fichier ou le dossier correspondant.     
Si VLC est l'application par défaut et que vous souhaitez lire un dossier,  localisez-le d'abord, appuyez sur la touche Applications, puis sur flèche bas jusqu'à Lire avec VLC. Appuyez sur Entrée.    
Une fois que le média est en cours de lecture, vous pouvez utiliser les commandes générales ou les extensions pour mieux profiter de l'expérience de VLC.

# 6.1 Lecture de médias récents<a id="mark20"></a>
Lorsque vous fermez VLC et que vous le rouvrez, VLC peut lire les 10 derniers médias lus.     
Pour cela suivez les indications suivantes.    

1.	Ouvrir VLC.
2.	Appuyez sur Alt, vous serez dans le menu Média.
3.	Appuyez sur flèche haut jusqu'à ouvrir Médias récents. Appuyez sur Entrée.    
4.	Maintenant vous serez dans le premier média à lire, en appuyant sur la flèche bas vous pourrez sélectionner l’un des 10 derniers médias lus. Appuyez sur Entrée où vous voulez.
5.	Pour supprimer la liste, localisez l'option Effacer Alt+c. Appuyez sur Entrée. 

# 6.2 Créer une liste de lecture<a id="mark21"></a>
Vous pouvez créer des listes de lecture avec toutes vos chansons ou vidéos préférées afin de pouvoir les écouter ou les regarder. N'oubliez pas que VLC prend en charge presque tous les formats disponibles.    
Pour la création des listes de lecture, 4 formats sont disponibles, XSPF, m3u, m3u8 et html, il est recommandé de le faire en m3u.    
Procédure à suivre:     

1.	Ouvrir VLC.
2.	Lire  le premier média (musique ou vidéo).
3.	Lire les médias suivants, il n’est pas nécessaire de les lirre dans leur intégralité. Ne fermez pas VLC.
4.	Une fois l'ajout des médias terminés, appuyez sur la touche Alt,, vous serez dans le menu Média, appuyez sur la flèche haut ou bas jusqu'à Enregistrer la liste de lecture… Ctrl+Y. Appuyez sur Entrée.  
5.	Vous allez maintenant être dans la zone d'édition, où vous devez entrer le nom que la liste de lecture aura.
6.	Appuyez sur Tab, vous serez dans  Type de fichier, appuyer sur la flèche bas et aller à Liste de lecture M3U (*.m3u).     
Pour choisir dans quel dossier l'enregistrer, continuez d'appuyer sur Tab jusqu'à la liste en arborescence et choisissez celui que vous voulez.      
7.	Appuyez sur Tab jusqu'à Enregistrer. Appuyez sur Entrée.
8.	Pour le lire, appuyez simplement sur Entrée sur le fichier m3u créé, et VLC commencera la lecture, si VLC n'est pas le lecteur par défaut, appuyez sur la touche Applications, appuyez sur la flèche bas jusqu'à Ouvrir avec, appuyez sur Entrée ou flèche droite puis localisez VLC media player, et appuyez sur Entrée.

# 6.3 Vue de la liste de lecture<a id="mark22"></a>
Si vous lisez une liste de lecture, vous pouvez accéder à cette vue en appuyant sur la commande Ctrl+L, lorsque vous ouvrez celle-ci, Appuyez sur Tab jusqu'à la liste en arborescence, ici vous pouvez appuyez sur  flèche haut   ou bas, pour lire le morceau  de votre choix en appuyant sur entrée. En outre, si vous appuyez sur la touche Applications, vous pouvez exécuter l'une des options qui vous sont présentées. Si vous souhaitez supprimer un morceau de la liste de lecture, appuyez simplement sur la touche Effacement.    
Dans cette vue, vous ne pouvez effectuer que ces actions.    
Un élément important à prendre en compte est que, étant dans la vue de la liste de lecture, vous ne pourrez pas accéder aux commandes générales du lecteur, telles que augmenter le volume, avancer   la lecture, etc, pour cela fermer la vue de la liste de lecture en appuyant encore une fois   sur la commande Ctrl+L.    
En conclusion, pour ouvrir ou fermer la vue de la liste de lecture, appuyez sur Ctrl+L afin de pouvoir exécuter les actions correspondant à chaque vue dans lequel vous vous trouvez.    

# Chapitre 7. Créer des raccourcis clavier dans VLC<a id="mark23"></a>
Nous pouvons créer nos propres raccourcis clavier dans VLC et ainsi rendre notre expérience d'utilisation du lecteur plus personnalisée. Ces raccourcis seront des commandes générales qui nous aideront à réaliser l’action pour laquelle ils ont été créés simplement en appuyant dessus.    
Les étapes pour créer les raccourcis sont:    

1.	Ouvrir VLC.
2.	Appuyez sur la commande Ctrl+p.
3.	Appuyez sur Tab jusqu'à Interface case à cocher cochée Paramètres de l'interface.
4.	Appuyez sur flèche droite jusqu'à Raccourcis  case à cocher  coché  Configurer les raccourcis claviers.
5.	Appuyez sur Tab jusqu'à Arborescence.
6.	Maintenant, appuyez sur flèche bas ou appuyez sur la lettre avec laquelle vous commencez l'action pour laquelle vous voulez créer un raccourci clavier et le localiser. Par exemple, la touche e jusqu'à Enregistrer.
7.	Appuyez sur Entrée.
8.	Tapez le raccourci clavier souhaité. Par exemple, pour enregistrer, vous pouvez utiliser les touches Ctrl + Maj + e.
9.	Appuyez sur Tab jusqu'à Enregistrer. Appuyez sur Entrée. Aussi pour le faire plus vite vous pouvez appuyer sur Alt+e.
10.	Maintenant, redémarrez VLC.    
Lorsque vous jouez, vous pouvez maintenant utiliser le raccourci clavier. Il est recommandé de créer des raccourcis clavier pour les actions suivantes. Vous pouvez effectuer ceux que vous souhaitez dans la liste en arborescence.    
	* Vitesse normale
	* Prendre une capture d'écran
	* Enregistrer
	* Effacer la liste de lecture

# Chapitre 8. Enregistrer avec VLC<a id="mark24"></a>
Vous pouvez enregistrer les médias lus (chansons, films, etc.), soit du début à la fin ou de n'importe quelle partie d'entre eux. Pour cela, suivez les étapes ci-dessous:    

1.	En faisant usage de commandes générales:
	* Démarrer la lecture du média, il peut s'agir d'audio ou de vidéo.
	* Pour marquer le début de l'enregistrement, appuyez sur la commande Alt+L, puis appuyez sur flèche haut jusqu'à Enregistrer et appuyez sur Entrée.
	* Répétez les étapes pour marquer la fin de l'enregistrement.
2.	En faisant usage de raccourci clavier créé:
	* Démarrer la lecture du média, il peut s'agir d'audio ou de vidéo.
	* Appuyez sur le raccourci clavier créé pour enregistrer, l'enregistrement commence.
	* Pour mettre fin à l'enregistrement, appuyez à nouveau sur le raccourci créé pour enregistrer.     

Les fichiers enregistrés seront dans le dossier Musique ou Vidéos, selon le type du  média.    
Ils porteront le nom vlc-record, suivi de la date de l'enregistrement.    

# Chapitre 9. Conversion en différents formats audio et vidéo avec VLC<a id="mark25"></a>
Une autre tâche importante que nous pouvons accomplir avec VLC, est la conversion des différents formats audio et vidéo, nous avons donc:    

* Conversion entre formats audio. 
* Conversion entre formats vidéo.
* Conversion entre formats vidéo à audio.

Pour effectuer cette tâche, nous allons suivre les étapes suivantes.     

1.	Ouvrez le lecteur VLC.
2.	Appuyez sur la commande  Ctrl+R.
3.	Appuyez sur Tab jusqu'à Sélection de fichier. Ajouter. Appuyez sur Entrée. 
4.	Vous serez dans la vue de l'explorateur, appuyez sur Maj Tab jusqu'à Arborescence et localisez le fichier à convertir, suivez la procédure. 
5.	Au retour, vous serez dans Ajouter. Appuyez sur Tab jusqu'à Convertir / Enregistrer Alt+C. Appuyez sur Entrée.
6.	Appuyez sur Tab jusqu'à Destination. Appuyez sur Entrée.
7.	Vous allez maintenant être dans une zone d'édition, où vous devez écrire le nouveau nom du fichier qui sera converti, Il est nécessaire si l'emplacement où il sera enregistré est le même dossier source. Si vous souhaitez modifier le dossier de destination, appuyez sur Maj Tab jusqu'à  la liste en arborescence et appuyez sur Parcourir et sélectionnez une destination et le nom du fichier final. Dans ce dernier cas, il n'est pas nécessaire de renommer le fichier d'origine. 
8.	Appuyez sur Tab jusqu'à Enregistrer. Appuyez sur Entrée.
9.	Appuyez sur Tab jusqu'à Down. Appuyez sur les flèches haut ou bas et localisez le format souhaité.
10.	Appuyez sur Tab jusqu'à Démarrer. Appuyez sur Entrée.    

La conversion est rapide, mais cela dépendra également de la taille des fichiers ou du média à convertir.

# Chapitre 10. Écoutez vos radios et TV en ligne préférées avec VLC<a id="mark26"></a>
VLC nous permet également de regarder la TV et d'écouter des radios en ligne de partout dans le monde, pour cela, nous devons avoir 2 exigences fondamentales: le premier être connecté à internet et deuxièmement, avoir  l'URL du streaming de la TV ou de la radio que nous voulons écouter.     
Procédure:    

1.	Ouvrir VLC.
2.	Appuyez sur la commande Ctrl+N.
3.	Tapez ou  collez l'URL du streaming de la radio ou de la TV.
4.	Appuyez sur Entrée.

Si l'URL est mise à jour et correcte, vous devriez déjà regarder la TV ou écouter la radio.

# Chapitre 11. Créer des listes de lecture de radio en ligne<a id="mark27"></a>
Vous pouvez créer des listes de lecture avec plusieurs stations de radio pour pouvoir les écouter.    
Il existe 4 formats disponibles, XSPF, m3u, m3u8 et html, il est recommandé de le faire en m3u.    

1.	Ouvrir VLC.
2.	Appuyez sur la commande Ctrl+N.
3.	Collez l'URL du streaming de la radio.
4.	Appuyez sur Entrée. La lecture va commencer.
5.	Répétez les étapes pour chacune des stations de radio qui figureront dans la liste.
6.	Lorsque vous avez terminé d'ajouter les stations de radio, appuyez sur la touche Alt, vous serez dans le menu Média, appuyez sur  flèche haut ou bas jusqu'à Enregistrer la liste de lecture… Ctrl+Y. Appuyez sur Entrée.  
7.	Maintenant, vous serez dans la zone d'édition, où vous devez taper le nom du fichier contenant les stations de radio.
8.	Appuyez sur Tab, vous serez dans Type de fichier, appuyer sur la flèche bas et aller à  Liste de lecture M3U (*.m3u).     
Pour choisir dans quel dossier l'enregistrer, continuez d'appuyer sur Tab jusqu'à la liste en arborescence et choisissez celui que vous voulez.      
9.	Appuyez sur Tab jusqu'à Enregistrer. Appuyez sur Entrée.
10.	Pour le lire, appuyez simplement sur Entrée sur le fichier m3u créé, et VLC commencera la lecture, si VLC n'est pas le lecteur par défaut, appuyez sur la touche Applications, appuyez sur la flèche bas jusqu'à Ouvrir avec, appuyez sur Entrée ou flèche droite puis localisez VLC media player, et appuyez sur Entrée.

Note:    

* Vous pouvez partager la liste créée avec d'autres utilisateurs de VLC.    
Dans le cas des fichiers XSPF, les listes créées sur un média autre que VLC, ne les lisent pas.     
* Vous pouvez lire d’autres listes téléchargées sur Internet dans d’autres formats, tels que pls, m3u. Certaines pages sur Internet facilitent ces listes. Nous recommanderons Community Radio Browser. Vous pouvez y accéder à l’adresse suivante:    
[http://www.radio-browser.info/gui/#!/](http://www.radio-browser.info/gui/#!/)    
Son utilisation est très accessible et facile, appuyez sur Entrée sur le bouton By category (Par catégorie)et vous pouvez ensuite choisir la liste sous forme de lien  par exemple, By country (Par pays), By tags (Par genres), etc. Si vous avez du mal à le comprendre, vous pouvez visiter le lien suivant pour consulter un tutoriel réalisé par mes soins, sur l'utilisation de cette page:    
[Community Radio Browser - Le top du top](https://blindhelp.github.io/Community-Radio-Browser-Le-top-du-top/)    
* Dans le cas des listes de TV en ligne, la procédure est similaire, mais les URL sont constamment mises à jour, vous devez donc en être très vigilant.

# Chapitre 12. Lecture de films en DVD<a id="mark28"></a>
Pour la lecture de vidéos et / ou de films DVD, les commandes générales que nous allons utiliser sont similaires à celles décrites dans les chapitres précédents. Pour une meilleure compréhension, nous le mentionnerons avec les modifications correspondantes.    
Les commandes respectives de NVDA, avec les 2 extensions expliqués dans ce manuel, sont conservées et vous pouvez les utiliser sans problème.    

# 12.1 Commandes générales<a id="mark29"></a>
* Ouvrir un fichier…: Ctrl+O
* Ouvrir un dossier: Ctrl+F
* Préférences: Ctrl+P
* Afficher / masquer la liste de lecture: Ctrl+L
* Activer ou désactiver l'interface minimale (sans les menus): Ctrl+H
* Enregistrer la liste de lecture: Ctrl+Y
* Ouvrir un flux réseau: Ctrl+N
* Convertir / Enregistrer: Ctrl+R
* Aller à un temps spécifié: Ctrl+T
* Quitter: Ctrl+Q

# 12.2 Commandes générales de lecture<a id="mark30"></a>
* Mettre en pause ou reprendre la lecture: Barre espace    
C'est simple et efficace.    
* Couper ou réactiver le son (fonction Mute ou Muet): M     
Notez que la lecture continue, seul le son est coupé.
* Arrêter (stopper la lecture et retournent au début du morceau  de la vidéo que vous étiez en train de lire): s
* Changer la piste audio de la vidéo en cours de lecture, à condition bien sûr qu'il y en ait plusieurs. Sinon, cela ne fait qu'afficher le message "Piste audio : Piste 1" (en boucle): b
* Activer / désactiver les sous-titres: v
* Activer / désactiver le mode plein écran,  que la lecture soit en cours ou en pause: f
* Quitter le plein écran: échap
* Sélectionner le chapitre DVD suivant: Maj+n
* Sélectionner le chapitre DVD précédent: Maj+p
* Sélectionner le titre DVD suivant: Maj+b
* Sélectionner le titre DVD précédent: Maj+o
* Lire la vidéo suivante de la liste de lecture: n
* Lire le film depuis le début: p
* Aller au menu DVD: Maj+m
* Accélérer la lecture: plus (du pavé numérique actif)
* Ralentir la lecture: moins (du pavé numérique actif)
* Avancer de 3 secondes: Maj+Flèche droite
* Reculer de 3 secondes: Maj+Flèche gauche
* Avancer de 10 secondes: Flèche droite
* Reculer de 10 secondes: Flèche gauche
* Avancer de 1 minute: Ctrl+Flèche droite
* Reculer de 1 minute: Ctrl+Flèche gauche

Seulement avec NVDA

* Avancer de 5 minutes: Ctrl+Alt+Flèche droite
* Reculer de 5 minutes: Ctrl+Alt+Flèche gauche

# 12.3  Commandes générales de volume<a id="mark31"></a>
* Augmenter le volume: Flèche haut ou Ctrl+Flèche haut
* Baisser le volume: Flèche bas ou Ctrl+Flèche bas

Note:    
Ces deux dernières combinaisons sert à augmenter ou diminuez le volume, dans VLC, indépendamment du volume de Windows.

# Utilisation d'un script Jaws pour VLC par Daniel Poiraud.<a id="mark32"></a>
Les personnes qui utilisent JAWS peuvent consulter l'article suivant consacré à VLC avec ce lecteur d'écran (y compris les scripts à télécharger):    
[Utilisation d'un script Jaws pour VLC.](http://angouleme.avh.asso.fr/fichesinfo/fiches_jaws/logiciels_divers/vlc2.htm)

---

Source:    
 [BlindHelp.github.io](https://blindhelp.github.io/)    
Si vous souhaitez partager ce manuel, n'oubliez pas de citer l'auteur et la source.    