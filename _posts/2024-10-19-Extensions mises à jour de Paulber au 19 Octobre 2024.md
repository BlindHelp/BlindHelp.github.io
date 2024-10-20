--- 
title: Extensions mises à jour de Paulber au 19 Octobre 2024
permalink: "/paulber-add-ons-updated-to-october-19-2024/"
layout: post
author: BlindHelp
---

<footer> Publié le Samedi 19 Octobre 2024</footer>


# Extensions mises à jour de Paulber au 19 Octobre 2024

<I>Auteur : paulber19 (paulber19@laposte.net)</I><BR>

<H1>apprentiClavierAccessEnhancement-1.11</H1>
<P>
ApprentiClavier: compléments d'accessibilité
</P>
<P>
Compatibilité avec NVDA : de la 2022.1 à la 2024.1
</P>
<P>
Description : Cette extension Apporte une assistance vocale pour ApprentiClavier, logiciel d'apprentissage du clavier  (uniquement la version française).
</P>
<P>
Elle n'ajoute aucun script.
</P>
<P>
Elle est Compatible et testée avec ApprentiClavier version  française 1.0.9 et 1.0.10.
</P>
<P>
URL : <A HREF="https://github.com/paulber19/apprentiClavierAccessEnhancementNVDAAddon.git">https://github.com/paulber19/apprentiClavierAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement:
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/apprentiClavierAccessEnhancement/apprentiClavierAccessEnhancement-1.11.nvda-addon">Version stable actuelle: 1.11</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/apprentiClavierAccessEnhancement/apprentiClavierAccessEnhancement-1.10.nvda-addon">Version stable précédente: 1.10</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/apprentiClavierAccessEnhancement/dev">versions de développement</A>
</UL>
<P>
<H1>audacityAccessEnhancement-3.2</H1>
<p>
Éditeur multipiste Audacity: complément d'accessibilité
</p>
<P>
Compatibilité avec NVDA : de la 2022.1 à la 2024.1
</P>

Description : Cette extension améliore l'accessiblité du logiciel Audacity en apportant:

* un script  pour annoncer la position audio,
* un script  pour annoncer la sélection,
* un script pour annoncer l'état des boutons "Pause", "Lecture" et "Enregistrement",
* l'annonce automatique des changements de la position audio,
* l'annonce automatique des changements de la sélection (désactivable),
* le support vocal pour les boite de sélection définissant un temps ou une durée Audacity,
* l'utilisation possible de la barre d'espace pour appuyer sur un bouton,
* un  script pour lire le niveau courant des vu-mètres de crète  en lecture ou enregistrement,
* un  script pour lire le niveau courant des potentiomètres de lecture ou d'enregistrement,
* un  script pour lire  la vitesse de lecture,
* un  script pour afficher le manuel utilisateur de l'extension,
* un script pour afficher le guide d'audacity écrit par  David Bailes.

Cette version de l'extension a été testée avec audacity 3.6.2 x64, 3.5.1 x64, 3.4.2 x64, 3.3.3 et 3.3.0.

Les versions d'Audacity antérieures à la 3.3.0 ne sont pas supportées.<BR>

<P>
URL: <A HREF="https://github.com/paulber19/audacityAccessEnhancementNVDAAddon.git">https://github.com/paulber19/audacityAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/audacityAccessEnhancement/audacityAccessEnhancement-3.2.nvda-addon">Version stable actuelle : 3.2</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/audacityAccessEnhancement/audacityAccessEnhancement-3.1.1.nvda-addon">Version stable précédente : 3.1.1</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/audacityAccessEnhancement/dev">versions de développement</A>
</UL>
</LI>
<BR>

## notepadPlusPlusAccessEnhancement-2.7

Éditeur de texte Notepad++: compléments d'accessibilité

Compatibilité avec NVDA : de la 2023.1 à la 2024.4

Description :

1- Fonctionnalités:

Cette extension a pour objectif d'améliorer l'accessibilité de l'éditeur de texte  Notepad++ et ajouter des fonctionnalités pour faciliter l'édition de  fichiers utilisés en langage Python et des fichiers écrit en langage markdown.

Elle reprend  la plupart des compléments apportées par l'extension NVDA_notepadPlusPlus créé par  Derek Riemer et Tuukka Ojala, puis modifiée par Robert Hänggi et Andre9642 <https://github.com/derekriemer/nvda-notepadPlusPlus>.

À savoir:

* vocalisation du résultat de la commande "control+b" qui permet de se déplacer au délimiteur symétrique,
* vocalisation du déplacement au prochain ou précédent signet par "F2" ou "majuscule+f2",
* signalement des lignes trop longues,
* accessibilité à la saisie semi-automatique,
* accessibilité à la recherche incrémentielle,
* Prise en charge de la fonction de recherche précédente / suivant.

Pour les fichiers Python, elle apporte:

* déplacement à la prochaine class ou méthode,
* importation du code  de la fenêtre d'édition.

Pour les fichiers Markdown ou txt2tags:

* prévisualisation  du résultat de la conversion en HTML dans le tampon virtuel de NVDA ou dans le navigateur par défaut,
* ajout du mode navigation pour les titres, liens, citations.

Et enfin:

* Annonce du numéro et du retrait de chaque ligne,
* scripts pour fixer l'indentation,
* Vocalisation du déplacement du focus par touche "Début" ,
* Comparaison du texte sélectionné avec celui  du  presse-papier,
* aller à la prochaine ligne se terminant par au moins une tabulation ou un espace,
* arrangement de l'annonce du nom des documents:
	* annonce réduite du chemin des fichiers,
	* annonce du nom du fichier avant son chemin,
	* non diction des barres obliques inversées du chemin.

2- Compatibilité:
Cette extension a été testé avec Notepad++ version 8.4.2.

3- Contraintes:
Cette extension utilise et intercepte les raccourcis de Notepad++ configuré par défaut. Il est donc vivement conseillé, pour son bon fonctionnement, de ne pas modifier ces raccourcis.

<P>
URL: <A HREF="https://github.com/paulber19/notepadPlusPlusAccessEnhancementNVDAAddon.git">https://github.com/paulber19/notepadPlusPlusAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement:
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/notepadPlusPlusAccessEnhancement/notepadPlusPlusAccessEnhancement-2.7.nvda-addon">Version stable actuelle: 2.7</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/notepadPlusPlusAccessEnhancement/dev">versions de développement</A>
</UL>
</LI>
<BR>

## NVDAExtensionGlobalPlugin-13.4

Extension des commandes de base de NVDA

Compatibilité avec NVDA : de la 2022.1 à la 2024.4

Description : Cet extension apporte à NVDA une multitude de fonctionnalités qui peuvent être activées ou désactivées individuellement en fonction du besoin.

En voici quelques unes:

* Affichage de la liste des icônes de la zone de notification ou des fenêtres des applications lancées,
* Aide à la composition d'un symbole complexe comme par exemple un a e lié, un symbole puissance 2 et possibilité d'ajouter ses propres catégories et symboles,
* Extension de la fonctionnalité du buffer virtuel pour navigateur :
 * nouvelles commandes pour le mode navigation (paragraphe, division, ancre, repère principal),
 * nouveaux types d'éléments pour la boîte de dialogue ouverte par "NVDA+F7" (bouton radio, paragraphe, cadre, checkBox, etc) avec annonce du nombre d'éléments trouvés,
 * option pour parcourir en boucle à la recherche d'un élément suivant ou précédent,
 * nouveaux scripts pour tableau : annonce cellule/ligne/colonne, passage à la colonne/ligne suivante ou précédente avec annonce des cellules la composant,
* annonce intelligente de la fonction d'édition des commandes comme Copier, Couper ou Coller et amélioration du script de base NVDA qui annonce le texte dans le presse-papier("NVDA+c" ),
* historique des annonces,
* renommage des touches du clavier,
* annonce sélective des touches de commande,
* affichage des éléments visibles composant l'objet au premier plan et possibilité de se déplacer ou de cliquer sur les éléments,
* changement rapide de profil vocal,
* rémanence des touches de modification et rémanence spécifique pour le site gmail.com,
* arrêt, redémarrage ou mise en veille prolongée de l'ordinateur,
* gestion des gestes de commandes configurés par l'utilisateur,
* Contrôle du son : changements rapides du volume du système, NVDA ou application, séparation  audio, commutation temporaire du périphérique de sortie audio,
* gestion des configurations utilisateurs et redémarrage de NVDA avec une configuration précise,
* analyseur de texte,
* activation/désactivation rapide des modules complémentaires,
* Annonce ou affichage d'informations sur l'application sous le focus, telles que sa version, le profil de configuration actif, le module complémentaire chargé,
* utilisation possible du pavé numérique comme clavier numérique standard,
* possibilité d'exécuter des scripts depuis la boîte de dialogue "Gestes de commandes",
* et plus.

Pour la liste complète des fonctionnalités de l'extension et leur description, consultez son manuel utilisateur.

<P>
URL : <A HREF="https://github.com/paulber19/NVDAExtensionGlobalPlugin.git">https://github.com/paulber19/NVDAExtensionGlobalPlugin.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/NVDAExtensionGlobalPlugin/NVDAExtensionGlobalPlugin-13.4.nvda-addon">Version actuelle : 13.4</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/NVDAExtensionGlobalPlugin/NVDAExtensionGlobalPlugin-13.3.nvda-addon">Version précédente : 13.3</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/NVDAExtensionGlobalPlugin/dev">versions de développement</A>
</UL>
</LI>
<BR>

## radioSureAccessEnhancement-2.9

Lecteur de radios internet  RadioSure: complément d'accessibilité

Compatibilité avec NVDA : de la 2023.1 à la 2024.4

Description : Cette extension améliore l'accessibilité du logiciel RadioSure,  lecteur de web radios avec NVDA.

Compatible avec RadioSure 2.2.

Les versions antérieures ne sont pas supportées.

Voir le manuel utilisateur pour plus d'informations.

<P>
URL: <A HREF="https://github.com/paulber19/radioSureAccessEnhancementNVDAAddon.git">https://github.com/paulber19/radioSureAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/radioSureAccessEnhancement/radioSureAccessEnhancement-2.9.nvda-addon">Version stable actuelle : 2.9</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/radioSureAccessEnhancement/radioSureAccessEnhancement-2.8.nvda-addon">Version stable précédente : 2.8</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/radioSureAccessEnhancement/dev">versions de développement</A>
</UL>
<LI>
<BR>

## recuvaAccessEnhancement-1.9

Logiciel de rrécupération de fichiers Recuva: complément d'accessibilité

Compatibilité avec NVDA : de la 2023.1 à la 2024.4

Description : Bien que cette application soit relativement bien accessible, cette extension  tente  d'améliorer l'accessibilité du logiciel de récupération de fichiers Recuva en:

* nommant certains objets non étiquetés,
* empêchant le placement inutile du focus sur des objets inconnus,
* ajoutant le script "KEY_Search_RESULT" pour relire le résultat global de la recherche,
* maximisant automatiquement la fenêtre affichant le  résultat de la recherche.

<P>
URL: <A HREF="https://github.com/paulber19/recuvaAccessEnhancementNVDAAddon.git">https://github.com/paulber19/recuvaAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/recuvaAccessEnhancement/recuvaAccessEnhancement-1.9.nvda-addon">Version stable actuelle : 1.9</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/recuvaAccessEnhancement/recuvaAccessEnhancement-1.8.nvda-addon">Version stable précédente : 1.8</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/recuvaAccessEnhancement/dev">versions de développement</A>
</UL>
</LI>
<BR>

## VLCAccessEnhancement-2.12

Lecteur multimédia VLC: compléments d'accessibilité

Compatibilité avec NVDA : de la 2023.1 à la 2024.4

Description : Cette extension ajoute diverses commandes pour faciliter la lecture des médias:

- script  pour annoncer la durée du média  déjà lue,
- script pour annoncer la durée du média restante à lire,
- script pour annoncer la durée totale du média,
- script pour annoncer la vitesse courante,
- annonce automatique des changements d'état comme la mise en pause , la coupure du son, la modification de la hauteur du son ou de la vitesse de lecture, la  mise en lecture répétée ou aléatoire,
- annonce automatique de la durée après une commande  de saut,
- scripts pour marquer une position de lecture et relancer la lecture  à cette position,
- script pour reprendre la lecture interrompue au temps mémorisé par VLC,
- lecture correcte de la barre d'état,
- possibilité de modification de certains raccourcis clavier génants de VLC.
- et autres améliorations:
 - l'accès aux contrôles de lecture(idée de fonctionnalité de Javi Dominguez),
 - accès aux dialogue "Effets et filtres",
 - annonce correcte du nom et de la valeur des potentiomètres,
 - la suppression de texte html inutile dans la description de certaints objets (code source de Javi Dominguez).

La liste des commandes est obtenue par Control+NVDA+H    
Compatible avec VLC 3.0.    

<P>
URL: <A HREF="https://github.com/paulber19/VLCAccessEnhancementNVDAAddon.git">https://github.com/paulber19/VLCAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI>Version actuelle : 2.12
 <UL>
 <LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/VLCAccessEnhancement/VLCAccessEnhancement-2.12.nvda-addon">serveur de téléchargement 1</A>
 <LI><A HREF="http://angouleme.avh.asso.fr/fichesinfo/fiches_nvda/data/VLCAccessEnhancement-2.12.nvda-addon">serveur de téléchargement 2</A>
 </UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/VLCAccessEnhancement/VLCAccessEnhancement-2.11.nvda-addon">Version précédente : 2.11</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/VLCAccessEnhancement/dev">versions de développement</A>
</UL>
</LI>
<BR>

## wordAccessEnhancement-3.6

Éditeur de texte Microsoft Word: complément d'accessibilité

Compatibilité avec NVDA : de la 2023.1 à la 2024.4

Description : Cette extension complète les scripts intégrés dans la version de base de NVDA et apporte:

* le script("windows+alt+F5") pour obtenir la liste de divers objets Word (commentaires, modifications, signets, champs, note de fin,  note de bas de page, mots mal orthographiés, erreurs de grammaire...),
* le script ("Alt+éfacement") pour connaitre suivant le cas: le numéro de ligne, colonne  et de page de la position du curseur système,  le début  et la fin de la sélection, ou le numéro de ligne et colonne de la cellule courante d'un tableau (avec indication éventuelle de la position  par rapport au bord gauche et supérieur),
* le script ("windows+alt+f2") pour insérer un commentaire  à la position du curseur,
* le script ("windows+alt+m") pour lire la modification de texte à la position du curseur,
* le script ("windows+alt+n") pour lire la note de bas de page ou de fin à la position du curseur,
* ajout dans les scripts de base  de déplacement de paragraphe en paragraphe ("Control+Flèche bas ou haut"), la possiblité configurable  de sauter  les paragraphes vides,
* les scripts pour se déplacer dans un tableau ou lire ses éléments (ligne, colonne, cellule),
* complète le mode "navigation" de NVDA par de nouvelles commandes propre à Microsoft Word,
* le déplacement de phrase en phrase ("alt+ flèche bas ou haut"),
* le script pour afficher quelques informations sur le document ("windows+alt+f1"),
* amélioration de l'accessibilité du correcteur orthographique de Word 2013 et 2016:
	* le script ("NVDA+majuscule+f7") pour annoncer  l'erreur et la suggestion,
	* le script (NVDA+control+f7") pour annoncer la phrase courante sous le focus.
* lecture automatique de certains éléments comme les commentaires,  notes de bas de page  ou notes de fin.

Cette extension a été testée avec Word 2019, 2016 et 2013 (marche peut-être aussi avec Word 365).

<P>
URL: <A HREF="https://github.com/paulber19/wordAccessEnhancementNVDAAddon.git">https://github.com/paulber19/wordAccessEnhancementNVDAAddon.git</A>
</P>
<P>
Téléchargement :
</P>
<UL>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/wordAccessEnhancement/wordAccessEnhancement-3.6.nvda-addon">Version stable actuelle : 3.6</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/raw/master/wordAccessEnhancement/wordAccessEnhancement-3.5.nvda-addon">Version stable précédente : 3.5</A>
<LI><A HREF="https://github.com/paulber007/AllMyNVDAAddons/tree/master/wordAccessEnhancement/dev">versions de développement</A>
</UL>
</LI>
<BR>


---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---