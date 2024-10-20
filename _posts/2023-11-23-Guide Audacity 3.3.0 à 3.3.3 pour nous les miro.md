---
title: Guide Audacity 3.3.0 à 3.3.3 pour nous les miro
permalink: "/Guide-Audacity-3.3.0-a-3.3.3/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 23 Novembre 2023 - Dernière révision le Jeudi 4 Avril 2024</footer>


- Auteur: paulber19 (paulber19@laposte.net)

# Guide d\'introduction à Audacity


# Sommaire {#toc}

# Introduction

Ceci est la traduction du
[guide](https://vip.chowo.co.uk/wp-content/uploads/jaws/Audacity-3.3.0-Guide.html)
pour les utilisateurs des lecteurs d\'écran Jaws, NVDA et Narrateur,
écrit par David Bailes, concernant les versions 3.3.0 à 3.3.3
d\'Audacity.

D\'autres guides sont disponibles sur la page [Jaws
Guides](http://vip.chowo.co.uk/jaws-guides/) du site Web \"VIP Software
Guides\". Bien que ceux-ci soient écrits spécifiquement pour les
utilisateurs du lecteur d\'écran Jaws, beaucoup d\'entre eux peuvent
également être utiles aux utilisateurs d\'autres lecteurs d\'écran

Vous pouvez utiliser Audacity pour l\'enregistrement, l\'édition simple
dune pistes individuelles, ou des éditions plus avancées impliquant de
multiples pistes.

Le logiciel Audacity peut être téléchargé à partir de la page d\'accueil
du site [Audacity](http://audacityteam.org/).

Audacity 3.3.3 est disponible en version 64 bits ou 32 bits. Il est
recommandé d\'installer la version 64 bits, sauf si vous avez une raison
particulière d\'avoir besoin de la version 32 bits.

Notez que si vous voulez installer la version 64 bits et que vous avez
installé une version 32 bits d\'Audacity, vous devez la désinstaller
avant d\'installer la version 64 bits.

Les chapitres de cette introduction sont :

-   présentation des Projets Audacity et du curseur dans Audacity,
-   descriptions de la boite de dialogue de bienvenue et comment obtenir
    de l\'aide,
-   aperçu de quelques fonctionnalités d\'Audacity qui sont pertinentes
    pour les utilisateurs de lecteurs d\'écran,
-   aperçu sur la configuration par défaut d\'Audacity comme les
    raccourcis clavier et quelques conseils si vous n\'utilisez pas un
    clavier QWERTY.

## Projets Audacity

Les objets qui sont édités par Audacity sont connus sous le nom de
projet, de sorte que les projets sont équivalents à des documents
Microsoft Word ou à des classeurs Microsoft Excel.

Un projet Audacity se compose d\'un ensemble de pistes de différentes
natures : piste audio, piste de marqueurs, piste de temps. Les pistes de
temps n\'étant pas accessibles aux utilisateurs de lecteurs d\'écran ne
seront donc pas traitées dans ce document.

Pour de nombreuses tâches simples, vous n\'aurez probablement qu\'une
seule piste dans un projet.

Vous pouvez enregistrer un projet Audacity en utilisant le format de
projet de fichiers d\'Audacity. Cela préservera toutes les pistes du
projet.

En principe, Vous n\'avez besoin d\'enregistrer un projet dans ce format
que si vous avez l\'intention de continuer à travailler ultérieurement
sur le projet.

## Curseur

Audacity a un curseur pour spécifier un temps particulier pendant
l\'audio, et cela est similaire au curseur dans Microsoft Word. Le
curseur dans Audacity est utilisé pour définir des temps tels que : le
début de la lecture, la position où vous voulez commencer à sélectionner
une plage de temps et l\'endroit où le son est collé depuis le
presse-papiers.

## Les boîtes de message qui peuvent être affichées après l\'ouverture d\'Audacity

Une ou plusieurs des boîtes de message décrites dans les trois chapitres
suivants peuvent être affichées lorsque vous ouvrez Audacity.

### Mises à jour de l\'application

Si vous n\'avez jamais utilisé une version d\'Audacity qui a la
possibilité de vérifier automatiquement les mises à jour, alors lorsque
vous ouvrez Audacity pour la première fois, une boîte de message de mise
à jour de l\'application s\'ouvre et vous informe sur cette
fonctionnalité.

Par défaut, Audacity vérifie maintenant périodiquement si une nouvelle
version est disponible.

Si vous ne voulez pas que cette vérification se produise, il y a un lien
dans la boîte de dialogue vers la catégorie \"application\" de la boîte
de dialogue \"Préférences\" où vous pouvez modifier le paramètre. Vous
pouvez également modifier ce paramètre à tout moment, comme décrit au
chapitre [\"Vérification automatique des mises à
jour\"](#HDR-UpdateAutomaticChecking) du chapitre \"Préférences\".

### Boite de dialogue de bienvenue

Lorsque vous ouvrez Audacity, une boite de dialogue de bienvenue
s\'affiche qui contient une zone de texte en HTML décrivant des
informations sur la façon d\'obtenir de l\'aide sur Audacity.
Malheureusement les liens dans ce texte ne peuvent pas être ouverts.
C\'est pourquoi les détails de l\'aide disponibles sont donnés au
chapitre suivant.

La boîte de dialogue contient également la case à cocher "Ne plus
montrer ceci au démarrage " Pour empêcher l\'affichage de cette boite de
dialogue à l\'avenir. Pour être tranquille, cochez la case et appuyez
sur le bouton OK.

### Échec du démarrage de FFmpeg

Si vous installez la version 64 bits d\'Audacity et que vous n\'avez
précédemment installé que la bibliothèque FFmpeg pour les versions 32
bits d\'Audacity, la première fois que vous ouvrez Audacity, une boîte
de dialogue d\'échec du démarrage de FFmpeg s\'ouvrira, vous indiquant
qu\'il y a un problème.

Cela peut facilement être résolu en installant la version 64 bits de la
bibliothèque FFmpeg, comme décrit au chapitre [\"Bibliothèque
FFmpeg\"](#HDR-FFMPEGLibrary) du chapitre \"Préférences\".

## Aide

Audacity est un outil extrêmement puissant et ce guide n\'est qu\'une
introduction. Pour plus d\'informations, voir :

-   [Le Wiki anglophone
    d\'Audacity](http://wiki.audacityteam.org/wiki/Audacity_Wiki_Home_Page).
-   Le manuel d\'utilisation d\'Audacity qui peut être ouvert dans votre
    navigateur par défaut en choisissant Manuel dans le menu \"Aide\".
-   [la liste de diffusion anglophone
    audacity4blind](http://www.freelists.org/list/audacity4blind). Sur
    cette page, vous pouvez vous abonner à la liste de diffusion.

Il existe plusieurs façons de demander à être abonné à cette liste. La
première consiste à utiliser cette page Web : saisissez votre adresse
e-mail dans la zone d\'édition \""your email \" ; puis Tabulation et
cochez la case pour indiquer que vous n\'êtes pas un robot ; et enfin
Tab pour le bouton Suivant et appuyez dessus. La deuxième façon consiste
à envoyer un e-mail à
[mailto:ecartis@freelists.org](ecartis@freelists.org), avec le sujet
\"subscribe Audacity4Blind. Après avoir fait votre demande par l\'une ou
l\'autre méthode, vous recevrez un e-mail pour confirmer votre
abonnement. Dans cet e-mail, ouvrez le lien pour confirmer votre adresse
e-mail. Une page Web s\'ouvre dans laquelle vous devez accepter
différents termes. Il y a trois cases à cocher qui doivent être cochées,
et enfin un bouton Suivant pour appuyer.

## Nouvelles fonctionnalités et modifications

Les nouvelles fonctionnalités et changements qui ont été introduits dans
Audacity 3.3.0 incluent ce qui suit :

-   Certains des effets intégrés d\'Audacity peuvent désormais être
    utilisés comme [effets en temps](réel). Ce sont : Bass et Treble,
    Distorsion, Phaser, Reverb et Wahwah.
-   Certaines barres d\'outils ont été modifiées dans la section [Barres
    d\'outils](inférieures) de la fenêtre principale. Cela inclut que
    dans la barre d\'outils de sélection, les détails de la sélection
    qui sont affichés sont désormais définis à l\'aide d\'un bouton de
    menu, plutôt que d\'une zone de liste déroulante.
-   Lorsque vous collez de l\'audio à partir d\'un projet différent, il
    existe désormais des options pour la quantité de données copiées
    dans le projet en cours. Ceci est décrit au chapitre [Coller
    l\'audio d\'un projet](différent) du chapitre \"Préférences\".
-   Dans la boîte de dialogue \"Préférences\", la catégorie
    Périphériques a été renommée en \"Paramètres audio\".
-   Malheureusement, les changements de cette version d\'Audacity font
    que certaines fonctionnalités du script Jaws ne fonctionnent plus.

## Raccourcis par défaut

Depuis la version 2.2, Audacity installe, par défaut, un minimum de
raccourcis. Vous pouvez changer cela et installer un jeu complet de
raccourcis. Ceci est décrit au chapitre [Jeu de raccourcis standard ou
complet](#HDR-DefaultShortcutsSet)\".

Le reste de ce guide suppose que vous avez installé le jeu complet.

## Utilisation d\'un clavier de type autre que QWERTY

Si vous utilisez un clavier d\'un autre type que QWERTY, quelques
commandes clavier ne fonctionnent pas si vous utilisez Audacity avec les
paramètres par défaut.

Pour résoudre ce problème, voir le chapitre [\"Les raccourcis
gênants\"](#HDR-BracketShortcuts).

## Script Jaws

Il existe un script Jaws pour Audacity, et son utilisation apporte la
fourniture de commentaires supplémentaires et de moyens pratiques
d\'obtenir des informations. Tous les détails de ses fonctionnalités
sont disponibles sur le site Web [Jaws Script for
Audacity](https://github.com/campg2j003/JAWS-Script-for-Audacity). Un
lien direct vers le programme d\'installation pour une version bêta de
la version 2.2.2 de ce script est :
[Jaws-Script-for-Audacity_2_2_2-beta-2020-05-10.exe](https://github.com/campg2j003/JAWS-Script-for-Audacity/releases/download/rel2.2.2-beta-2020-05-10/Jaws-Script-for-Audacity_2_2_2-beta-2020-05-10.exe).

Parce que ce script n\'a pas été mis à jour récemment, certaines
fonctionnalités ne fonctionnent pas avec la version actuelle
d\'Audacity. Par exemple, les frappes G et H ne lisent plus les valeurs
de crête des compteurs d\'enregistrement et de lecture

Notez que pour ceux qui utilisent Jaws, le reste du guide ne suppose pas
que ce script est installé

# Fenêtre principale

## Principaux composants de la fenêtre

Les principaux composants de la fenêtre principale d\'Audacity sont :

-   la barre de Titre : Lorsque la fenêtre contient un projet sans nom,
    par exemple au lancement d\'Audacity, le texte dans la barre de
    titre est \"Audacity\". Lorsque la fenêtre contient un nom de
    projet, le texte est le nom du projet.
-   La barre de Menu : Il y a, par défaut, un menu supplémentaire qui
    n\'est pas présent dans la barre de menu, mais qui peut y être
    ajoutés. Voir le chapitre [\"Menus extra\"](#HDR-ExtraMenus).
-   le panneau supérieur des barres d\'outils.
-   le tableau \"Vue de piste\" : Il contient les pistes qui composent
    le projet. Voir le chapitre [\"Tableau \"Vue de
    piste\"](#HDR-TracksTable).
-   le panneau inférieur des barres d\'outils.
-   La barre d\'état : celle-ci est divisé en 3 sections. La première
    section est probablement la plus intéressante, car elle contient
    l\'état de l\'outils \"Transport\", à savoir celui de l\'arrêt
    d\'Audacity, de la lecture, de l\'enregistrement et ainsi de suite.

## Déplacement dans la fenêtre

Comme dans n\'importe quelle fenêtre, pour atteindre la barre de menus,
appuyez sur \"Alt\", et pour la quitter appuyez sur \"Échap\" ou
\"Alt\".

L\'appui sur \"Control + F6\" vous fait passer d\'un élément à un autre
parmi :

-   le panneau supérieur des barres d\'outils.
-   le tableau \"Vue de piste\".
-   le panneau inférieur des Barres d\'outils.

En appuyant sur \"Control + majuscule + F6\" vous vous déplacez dans
l\'ordre inverse.

## Lecture de la barre d\'état

Si vous utilisez Jaws ou NVDA, vous pouvez lire la barre d\'état
d\'Audacity à l\'aide de la combinaison de touches standard du lecteur
d\'écran prévue pour lire une barre d\'état.

Malheureusement, le Narrateur n\'a actuellement pas de commande pour
lire la barre d\'état, et il n\'est donc pas simple de lire la barre
d\'état à l\'aide de ce lecteur d\'écran.

Cependant, si la vue de piste a le focus, vous pouvez passer au premier
champ de la barre d\'état en appuyant sur la touche Narrateur + flèche
droite, et revenir à la vue piste en appuyant sur la touche Narrateur +
flèche gauche

# Ouverture d\'un fichier audio

Pour ouvrir un projet de fichiers audacity ou un fichier audio standard,
utiliser la boîte de dialogue \"Choisir un ou plusieurs fichier (s)\",
qui est atteinte par le sous-menu \"Ouvrir\" du menu \"Fichier\" ou par
le raccourci \"Control + O\". La boîte de dialogue a une structure
similaire à la boîte de dialogue \"Ouvrir\" de Windows. Les types de
fichiers audio standard qu\'Audacity peut ouvrir sont décrits dans le
chapitre suivant.

Quand vous lancez Audacity, la fenêtre principale contient un tableau
\"Vue de piste\" vide.

Quand vous ouvrez un fichier audio, il s\'ouvre dans cette fenêtre
initiale.

Après l\'ouverture d\'un fichier audio standard, le tableau \"Vue de
piste\" contient une seule piste, alors qu\'après l\'ouverture d\'un
projet de fichiers Audacity, il contient toutes les pistes du projet
enregistrées dans le projet. Si vous ouvrez n\'importe quel autre
fichier audio, alors ils s\'ouvrent dans une nouvelle fenêtre Audacity.

Si vous souhaitez délibérément créer une nouvelle fenêtre avec un projet
vide, choisissez le sous-menu \"Nouveau\" du menu \"Fichier\" ou appuyez
sur \"Control + N\".

À la suite de l\'ouverture de fichiers audio standards, vous pouvez
importer un ou plusieurs nouveaux fichiers audio standards dans le
projet actuel. Dans ce cas, une nouvelle piste est ajoutée dans le
tableau de pistes pour chaque fichier. Pour plus de détails, voir le
chapitre [\"Importation de fichiers audio\"](#HDR-AudioFileImport).

## Ouverture de fichier audio standards

L\'installation par défaut de Audacity permet d\'ouvrir des fichiers
audio dans les formats audio suivants : WAV, AIFF, AU, MP3, MP2, MPEG,
Ogg Vorbis et FLAC.

En outre, vous pouvez ouvrir des fichiers dans d\'autres formats, comme
wma et m4a, si vous téléchargez et installez la bibliothèque FFmpeg
(décrite au chapitre [\"Bibliothèque FFmpeg\"](#HDR-FFMPEGLibrary).

Elle n\'est pas incluse dans l\'installation d\'Audacity en raison de
problèmes juridiques sur les brevets.

# Sauvegarde audio {#HDR-SavingAudio}

Vous pouvez sauvegarder l\'audio dans le format de projet audacity ou
dans un des formats audio standards comme décrit dans les chapitres
suivants.

Le format de projet Audacity conserve toutes les pistes dans le projet.
Vous n\'avez vraiment besoin d\'enregistrer un projet sous le format de
projet audacity que si vous avez l\'intention de continuer à travailler
sur le projet dans l\'avenir.

En revanche, lorsque vous sauvegarder dans un des formats audio
Audacity, Audacity mixe automatiquement toutes les pistes en une seule
piste.

Lorsque vous fermez Audacity et si vous n\'avez pas sauvegardez vos
modifications dans un fichier de projet Audacity, alors la boîte de
dialogue \"Sauvegarder les modifications dans\" s\'ouvre vous demandant
si vous voulez sauvegarder les modifications dans un projet Audacity
avant de fermer. Le bouton par défaut est Oui., Mais si vous souhaitez
sauvegarder le projet comme un fichier audio Audacity, il faut refuser
avec le bouton \"Non\" pour ensuite l\'exporter.

## Sauvegarde dans le format de projet audacity

Pour sauvegarder dans ce format, utilisez le sous-menu \"Sauvegarder le
projet\" du sous-menu \"Sauvegarder le projet\" du menu \"Fichier\" ou
utilisez le raccourci \"control + s\".

La première fois que vous faites cela, vous obtenez une boîte de
dialogue d\'Avertissement vous indiquant que seul Audacity peut lire ces
fichiers de projet. La boîte de dialogue contient une case à cocher qui
vous permet de choisir si vous ne voulez plus cet avertissement à
nouveau. Si vous appuyez sur le bouton OK, vous obtenez alors le
dialogue \"Sauvegarder le Projet sous\".

## Sauvegarde dans des formats audio

L\'installation par défaut d\'Audacity peut enregistrer dans les formats
standard suivants : WAV, FLAC, MP3, Ogg Vorbis et MP2.

En outre, vous pouvez enregistrer dans des formats y compris les formats
wma et m4a si vous téléchargez et installez la bibliothèque FFmpeg, qui
n\'est pas incluse avec Audacity en raison de problèmes juridiques, voir
le chapitre [\"Bibliothèque FFmpeg\"](#HDR-FFMPEGLibrary).

Pour enregistrer l\'audio dans l\'un des formats audio standards :

-   Si vous voulez sauvegarder tout l\'audio, utilisez le sous-menu
    \"Exporter sous\" du menu \"Fichier\" et choisissez le sous-menu
    \"Exporter l\'Audio\" (raccourci \"control + majuscule +E\"). Sinon
    et si vous voulez sauvegarder uniquement les données audio
    sélectionnées, choisissez plutôt le sous-menu \"Exporter l\'Audio
    Sélectionné\" à partir du même sous-menu.
-   La boîte de dialogue \"Exportation Audio\" s\'ouvre et a une
    structure très similaire à la boîte de dialogue \"Enregistrer sous\"
    classique de Windows. Si c\'est la première fois, alors le dossier
    est un dossier Audacity dans votre dossier de documents, qui est
    automatiquement créé pour vous par Audacity. Si nécessaire, changez
    le dossier où le fichier sera enregistré
-   Pour définir le format de fichier que vous voulez utiliser pour
    l\'enregistrement de l\'audio, utilisez la zone de liste déroulante
    \"type\", situé après la zone d\'édition du nom du fichier. Notez
    que tous les formats qui utilisent la bibliothèque FFmpeg, ont
    \"FFmpeg\" entre parenthèses après leur nom.
-   éventuellement, Après avoir choisi le format de fichier, vous pouvez
    définir les options pour l\'encodage utilisé par le format à l\'aide
    des éléments qui apparaissent après le bouton Annuler et que l\'on
    atteint par tabulation.
-   Dans la zone d\'édition Nom de fichier, tapez un nom pour le
    fichier, puis appuyez sur le bouton Enregistrer (Alt + S). La boite
    de dialogue \"Édition des balises de Métadonnées\" s\'ouvre
    automatiquement. Cela vous permet d\'éditer divers éléments
    d\'information sur les données audio, comme le nom de l\'Artiste et
    le titre de la Piste. Elle est décrite en détail dans le chapitre
    [\"édition des balises de métadonnées\"](#HDR-MetaDataTags).
-   Si vous ne souhaitez pas modifier ces informations, vous pouvez
    appuyer simplement sur \"Entrée\" ou sur le bouton \"OK\" (bouton
    par défaut).

Attention : si vous annulez ce dialogue, cela entrainera l\'annulation
de l\'enregistrement de l\'audio. Si vous ne voulez pas d\'édition de
métadonnées à chaque fois que vous sauvegarder de l\'audio, vous pouvez
désactiver cette fonctionnalité comme décrit dans le chapitre [\"édition
des balises de métadonnées\"](#HDR-MetaDataTags).

-   Notez que si vous essayez d\'enregistrer dans un des formats inclues
    dans la bibliothèque FFmpeg, une boîte de message s\'ouvre vous
    indiquant que celle-ci doit être configurée

Le sous-menu \"exporter sous\" contient d\'autres commandes pour
exporter sous des formats comme \"mp3\", \"wav\" ou \"OGG\". Ces
commandes ouvrent la boîte de dialogue \"Exporter l\'Audio\" avec le
type déjà défini sur le format approprié.

Toutefois, étant donné que la boite de dialogue d\'Exportation Audio se
souvient du dernier format utilisé et que les commandes n\'ont pas de
raccourcis par défaut, vous pourrez trouver plus commode d\'utiliser la
boîte de dialogue Exporter l\'Audio qui possède un raccourci.

# Lecture audio {#HDR-AudioPlayback}

## Paramètres de lecture

Vous pouvez sélectionner le périphérique de lecture qu\'Audacity utilise
à plusieurs endroits, notamment dans le panneau supérieur de barres
d\'outils de la fenêtre principale d\'Audacity et dans la catégorie
\"Paramètres audio\" de la boîte de dialogue \"Préférences\".

Si vous ne disposez que d\'un seul appareil de lecture sur votre
ordinateur, vous ne devriez pas avoir à modifier ce paramètre.

Si vous avez besoin de changer le périphérique de lecture d\'Audacity,
voici une façon de le faire :

-   Appuyez sur Ctrl + P pour ouvrir la boîte de dialogue
    \"Préférences\"
-   Sélectionnez \"Paramètres audio\" dans la liste des catégories.
-   Tabulez jusqu\'à la liste déroulante \"Lecture\" et définissez le
    périphérique que vous souhaitez utiliser.
-   Appuyez sur Entrée pour activer le bouton OK par défaut

Le volume de la lecture est contrôlé par le curseur du potentiomètre de
volume de lecture qui se trouve dans le panneau supérieur de barres
d\'outils de la fenêtre principale d\'Audacity. Le volume de lecture
total est déterminé à la fois par le volume de lecture d\'Audacity et
par le curseur de volume de l\'appareil de lecture, qui peut être défini
dans Windows.

Pour modifier l\'un de ces paramètres de cette barre d\'outils et en
supposant que le tableau \"Vue de piste\" a le focus :

-   Appuyez deux fois sur Ctrl + F6 pour atteindre le panneau supérieur
    de barres d\'outils.
-   Tabulez en avant ou en arrière (par \"majuscule + Tab\") jusqu\'à ce
    que vous arriviez au potentiomètre du niveau de lecture et apportez
    les modifications souhaitées.
-   Appuyez sur Ctrl + F6 pour revenir à la vue de Piste.

### Commandes de lecture et raccourcis

Ce sont les touches de commandes de lecture les plus courantes.

Outre les commandes de recherche, les commandes se trouvent dans le
sous-menu \"Lecture\" du menu \"Transport\" :

-   Pour démarrer ou arrêter, appuyez sur la barre d\'espace.
-   Pour démarrer ou arrêter et déplacer le curseur, appuyez sur \"x\" :
    Lorsque vous utilisez cette touche pour arrêter la lecture, le
    curseur est déplacé à la position où la lecture a été arrêtée.
-   Pause ou reprise, appuyez sur \"p\".
-   Recherche / Saut. Pendant la lecture, si le focus est dans la vue de
    piste, vous pouvez sauter en avant ou en arrière sur une courte ou
    une longue période. Pour sauter en arrière ou en avant d\'une courte
    période, appuyez respectivement sur la flèche gauche ou la flèche
    droite. Pour sauter en arrière ou en avant sur une longue période,
    appuyez respectivement sur \"majuscule + Flèche gauche\" ou
    \"majuscule + Flèche droite\". Les tailles par défaut des périodes
    courte et longue sont respectivement de 1 et 15 secondes, mais leurs
    tailles peuvent être définies dans la boîte de dialogue
    \"Préférences\", comme décrit dans le chapitre [\"Sauts
    temporels\"](#HDR-Seektimes).

Pour toutes les commandes répertoriées ci-dessus qui démarrent la
lecture, la lecture démarre puis s\'arrête automatiquement selon la
plage de temps sélectionnée (voir le chapitre [\"Sélection de
l\'audio\"](#HDR-AudioSelection)).

S\'il n\'y a pas de sélection, la lecture commence à la position du
curseur et s\'arrête automatiquement à la fin de l\'audio du projet.

Si une plage de temps est sélectionnée, la lecture commence au début de
cette sélection et s\'arrête automatiquement à la fin de la sélection.

Si vous avez besoin de vérifier l\'état de la lecture, c\'est-à-dire la
lecture, l\'arrêt ou la pause, ces informations sont disponibles en tant
que premier élément de la barre d\'état.

La lecture en boucle est décrite au chapitre [\"Lecture en
boucle\"](#HDR-LoopPlayback) du chapitre \"Édition de base\".

Audacity comprend aussi plusieurs commandes de lecture plus
spécialisées, qui sont décrites aux endroits appropriés du guide.

Une liste complète des commandes de lecture est disponible dans la
rubrique \"Lecture\" du chapitre \"Raccourcis\".

# Tableau \"Vue de pistes\" {#HDR-TracksTable}

Le tableau \"Vue de pistes\" contient les pistes qui composent le
projet. Le tableau a une colonne et une ligne pour chacune des pistes.
Chaque piste possède un nom que le lecteur d\'écran lit lorsque vous
passez de piste en piste ou lorsque vous utilisez la commande du lecteur
d\'écran pour lire une ligne.

Une piste audio est un conteneur pour les données audio qui sont
affichées sous la forme d\'une onde.

Souvent, les données audio démarrent à l\'instant zéro, mais après
l\'édition, ce n\'est plus forcément le cas.

À la gauche de la fin de la piste audio, il y a une petite zone
contenant différents éléments qui comprennent un menu, les commandes
pour le gain et le panoramique de la piste. L\'utilisation de ces
commandes est décrite dans la section [\"Édition audio avec plusieurs
pistes\"](#HDR-ADvancedEdition) de ce guide.

Le Curseur s\'affiche dans le tableau \"Vue de piste\" comme une ligne
verticale. C\'est la position de départ de la lecture.

La position du curseur et celle de lecture sont disponibles
respectivement dans la barre d\'outils \"Sélection\" et \"Temps\"
situées dans le panneau inférieur de barre d\'outils.

## Déplacement dans le tableau

À Chaque fois que le focus est à l\'intérieur du tableau \"Vue de
piste\" et que le tableau contient une ou plusieurs pistes, l\'une des
pistes a le focus, et vous pouvez Passer à la piste précédente ou
suivante en utilisant les flèches de direction \"haut\" ou \"bas\"
respectivement.

Vous pouvez également passer à la première ou à la dernière piste par
\"control + début\" ou \"control + Fin\" respectivement.

## Sélection des pistes {#HDR-TracksSelection}

Vous avez besoin de sélectionner des pistes dans les cas suivants :

-   Pour des opérations telles que l\'alignement de pistes qui sont
    disponibles dans le menu \"Pistes\".
-   Dans le cadre du processus de sélection de l\'audio, comme décrit
    dans le chapitre [\"Sélection de l\'audio\"](#HDR-AudioSelection).

Il y a plusieurs manières de sélectionner ou désélectionner des pistes :

-   Pour activer / désactiver la sélection de la piste, appuyez sur
    \"Entrée\".
-   Pour sélectionner toutes les pistes (et une plage de temps qui
    comprend tout l\'audio, comme décrit dans le chapitre [\"Sélection
    de l\'audio\"](#HDR-AudioSelection)), ouvrez le menu
    \"Sélectionner\" et choisissez le sous-menu \"Tous\" ou tapez le
    raccourci \"control + A\".
-   Pour désélectionner toutes les pistes ouvrez le menu
    \"Sélectionner\" puis choisissez le sous-menu \"Rien\" ou tapez le
    raccourci \"Control + majuscule + A\".
-   Pour sélectionner toutes les pistes, ouvrez le menu \"Sélectionner«,
    puis le sous-menu \"Pistes\" et choisissez \"dans toutes les
    pistes\" ou tapez le raccourci \"control + majuscule + K\".

L\'état de sélection (\"sélectionné\") d\'une piste est indiquée à la
suite de son nom.

# Panneaux des Barres d\'outils {#HDR-ToolsBarsGroup}

Il y a deux zones de la fenêtre principale qui contiennent des barres
d\'outils, et celles-ci seront appelées panneaux de barre d\'outils
supérieur et inférieur. Le panneau supérieur de barres d\'outils
apparaît au-dessus du tableau \"Vue de piste\" et le panneau inférieur
de barres d\'outils apparaît en dessous.

Comme mentionné précédemment, vous pouvez faire le tour du panneau
supérieur de barres d\'outils, du tableau \"vue de piste\" et du panneau
inférieur de barres d\'outils soit vers l\'avant soit vers l\'arrière en
appuyant respectivement sur \"control + F6\" ou \"control + Majuscule +
F6\".

Dans les panneaux de barres d\'outils supérieures et inférieures, vous
pouvez accéder à tous les contrôles des barres d\'outils du panneau en
appuyant sur \"Tab\" ou \"majuscule + Tab\".

Notez que vous ne pouvez appuyer sur les boutons des barres d\'outils
qu\'en appuyant sur \"Entrée\". Vous ne pouvez pas utiliser la barre
d\'espace, car cette touche est utilisée pour démarrer et arrêter la
lecture.

Vous pouvez afficher et masquer toutes ces barres d\'outils à l\'aide du
sous-menu \"Barres d\'outils\" du menu \"Affichage\". L\'affichage des
seules barres d\'outils que vous trouvez utiles a l\'avantage de réduire
considérablement le nombre de Tabulations nécessaires pour trouver un
contrôle particulier.

Le reste de ce chapitre sur les barres d\'outils contient des
sous-chapitres sur les panneaux de barres d\'outils supérieures et
inférieures, puis des sous-chapitres sur certaines barres d\'outils
individuelles comme la barre d\'outils \"Sélection\", la barre d\'outils
\"Temps\" et la barre d\'outils \"Lecture à la vitesse\".

## Panneau supérieur de barre d\'outils

Les barres d\'outils qui sont affichés par défaut sont :

-   la barre d\'outils \"Transport\" : elle contient les boutons pour la
    lecture et l\'enregistrement (tous les éléments sont également
    disponibles dans le menu \"Transport\" avec des raccourcis clavier).
-   la barre d\'outils \"outils\" : elle contient des boutons pour
    différents outils d\'édition qui impliquent l\'utilisation de la
    souris.
-   la barre d\'outils \"édition\" : elle contient des boutons pour
    Couper, Coller, etc. Ces commandes sont aussi disponibles sur
    l\'Edition ou dans le menu Affichage, et tous ont des raccourcis
    clavier.
-   La barre d\'outils de configuration audio, qui contient un bouton de
    configuration audio. Cela ouvre un menu permettant de définir les
    périphériques que vous souhaitez utiliser pour l\'enregistrement et
    la lecture. Pour les utilisateurs de clavier, il existe des moyens
    plus pratiques de modifier ces paramètres, par exemple dans la
    catégorie des périphériques de la boîte de dialogue Préférences
-   La barre d\'outils Partager l\'audio, qui contient un bouton
    Partager l\'audio. Cela vous permet de partager de l\'audio avec
    d\'autres utilisateurs en utilisant un service fourni par la même
    société qui possède Audacity. Ce n\'est pas couvert dans ce guide
-   Barres d\'outils mesureur d\'enregistrement et mesureur de lecture.
    Chacun d\'eux contient un bouton qui ouvre un menu pour contrôler un
    mesureur et un potentiomètre pour régler le niveau. Dans les
    versions d\'Audacity antérieures à la version 3.2.0, une barre de
    périphérique était également affichée par défaut dans ce panneau de
    barre d\'outils. Cette barre d\'outils est toujours disponible pour
    ceux qui veulent l\'utiliser, il suffit de l\'activer à l\'aide du
    sous-menu barres d\'outils du menu \"Affichage\". Cependant, dans ce
    guide, elle ne sera pas utilisée

## Panneau inférieur de Barres d\'outils

Par défaut, le panneau inférieur de Barres d\'outils contient :

-   la barre d\'outils \"Snapping\",
-   la barre d\'outils \"Temps\",
-   la barre d\'outils \"Sélection\",
-   La barre d\'outils \"Lecture à la vitesse\"

## Barre d\'outils \"Snapping\"

La barre d\'outils d\'\"Snapping\" contient deux commandes :

-   Une case à cocher \"Snap\", qui est utilisée pour activer ou
    désactiver l\'accrochage (snapping en anglais), et qui par défaut
    n\'est pas cochée. Notez que dans la fenêtre principale d\'Audacity,
    la barre d\'espace démarre ou arrête toujours la lecture. Les
    raccourcis clavier que vous pouvez utiliser pour modifier l\'état de
    la case à cocher incluent \"Contrôle + espace\" et \"Entrée\".
-   Une zone de liste déroulante \"snap to\", qui spécifie l\'unité
    utilisée pour l\'accrochage, comme décrit ci-dessous. Ce contrôle
    n\'est disponible que lorsque la case \"Snapping\" est cochée.

Pour les utilisateurs de clavier, l\'accrochage affecte les commandes
permettant de déplacer légèrement le curseur et les commandes permettant
de déplacer légèrement le début ou la fin de la sélection.

Ce sont les commandes qui ont par défaut les touches \"Flèche
gauche/droite\", \"Majuscule + flèche gauche/droite\" et \"Contrôle +
Majuscule + flèche gauche/droite\". Toutes ces commandes sont décrites
plus loin dans le guide. Lorsque le snapping est désactivé, la taille du
pas de ces commandes dépend du niveau de zoom, comme décrit dans la
section Taille du pas des touches fléchées gauche et droite, plus loin
dans ce guide.

Lorsque le snapping est activé, cela est modifié comme suit. Les
nouvelles positions sont arrondies à l\'unité la plus proche spécifiée
par la zone de liste déroulante \"Snap to\". De plus, la taille de pas
minimale est l\'unité spécifiée par la zone de liste déroulante \"Snap
to\".

## Barre d\'outils \"temps\"

La barre d\'outils \"temps\" contient un seul contrôle, la boite de
sélection numérique \"Position audio\". Pendant la lecture ou
l\'enregistrement, elle montre la position du curseur de lecture ou
d\'enregistrement respectivement. Sinon, elle indique le temps du moment
où vous avez tapez sur la barre d\'espace.

Notez que contrairement aux boites de sélection numérique de la barre
d\'outils \"Sélection\", vous ne pouvez pas modifier le temps affiché
par la boite de sélection numérique \"Position audio\", vous pouvez
uniquement lire sa valeur.

Le format par défaut de la boite de sélection numérique \"Position
audio\" est hh: mm: ss. Vous pouvez changer cela en utilisant le menu
contextuel de cette boite, mais malheureusement il y a un bug qui
provoque la réinitialisation du format à la valeur par défaut si vous
ouvrez la boîte de dialogue Préférences et appuyez sur le bouton OK.

## Barre d\'outils \"Sélection\" {#HDR-SelectionBar}

La barre d\'outils de sélection contient les commandes suivantes :

-   Un bouton de configuration de cette barre d\'outils. Il ouvre un
    menu qui contient les options pour définir la nature de la plage de
    temps qui est affichés dans les deux boîtes de sélection numérique,
    qui sont les deux contrôles suivants dans la barre d\'outils. Ces
    options sont : début et fin, début et durée, durée et fin, et durée
    et centre.
-   Deux boîtes de sélection numérique, qui donnent les détails de la
    plage de temps sélectionnée, qui ont été spécifiés par le menu du
    bouton de configuration précédent.

Si aucune plage de temps n\'est sélectionnée, les boite de sélection
numérique fléchés de début, de fin ou du centre donnent la position du
curseur

### Boites de sélection numérique {#HDR-EditSpinBoxes}

Les controles de la barre d\'outils \"Sélection\" qui sont utilisées
pour afficher et modifier les temps sont souvent appelées \"boites de
sélection numérique\". Ils portent ce nom, car pour modifier un temps,
vous pouvez soit taper un temps, soit utiliser la flèche haut ou la
flèche bas pour augmenter ou diminuer la valeur du temps respectivement.
Dans le guide, ils seront souvent appelés simplement boîtes de sélection
numérique par souci de concision. Chaque boite de sélection numérique
contient un temps qui est affiché dans un certain format. Vous pouvez
changer le format en le choisissant dans une liste de formats à l\'aide
du menu contextuel de la boite de sélection numérique. Dans le cas des
boites de sélection numérique de la barre d\'outils \"Sélection\", si
vous modifiez le format de l\'une d\'entre elles, cette modification est
également appliquée à l\'autre.

La valeur par défaut est le format \"secondes\", mais le format
\"hh:mm:ss +centièmes\" est normalement plus utile car il vous permet de
modifier le temps de manière plus précise.

La plupart des exemples de ce guide utilisera ce format.

Le temps peut être considéré comme être composé d\'un ou plusieurs
tronçons selon le format utilisé. Par exemple, lorsque vous utilisez le
format \"hh:mm:ss\", le temps se compose de trois tronçons composés
chacun de deux chiffres : heures, minutes, et secondes.

Sinon, lors de l\'utilisation du format \"hh:mm:ss + centièmes\", le
temps se compose de quatre tronçons : heures, minutes, secondes, et
centièmes de secondes. Ce dernier est aussi composé de deux chiffres.

Lorsque le focus arrive dans une boite d\'édition, le lecteur d\'écran
lit le contenu entier de la zone, par exemple, \"00h13m04.73s\", c\'est
à dire 0 heures, 13 minutes, et 4 secondes 73. Dans une boite de
sélection numérique, le focus est mis sur un chiffre. Lorsque vous vous
déplacez pour la première fois dans une boite de sélection numérique
après avoir ouvert Audacity, le focus est mis sur le dernier chiffre,
mais si vous revenez ultérieurement sur cette boite de sélection
numérique, le dernier chiffre qui avait le focus lorsque vous avez
quitté la boite de sélection numérique reprend le focus.

Les touches pour déplacer le focus sont les suivantes :

-   \"Début\" ou \"Fin\" vous amène respectivement au premier ou au
    dernier chiffre de la boite de sélection numérique.
-   \"Flèche gauche\" ou \"Flèche droite\" vous amène au chiffre
    précédent ou suivant respectivement.

Lorsque vous utilisez ces touches, votre lecteur d\'écran lit le chiffre
qui est maintenant sous le focus.

De plus, si vous changez de tronçon de temps, votre lecteur d\'écran
lira le nouveau tronçon avant de lire le chiffre. Par exemple, si le
temps est 01h42m38.46s et que le focus est sur le deuxième chiffre des
minutes (le chiffre 2), alors si vous appuyez sur la flèche Droite votre
lecteur d\'écran dira 38s, 3. Autrement si vous appuyez sur Fin alors
votre lecteur d\'écran dira 46 centièmes de seconde, 6.

Il y a deux façons de changer la valeur du temps :

-   Augmentation ou diminution de la valeur du contrôle d\'une unité du
    chiffre focalisé à l\'aide de la flèche haut ou bas.

Cette méthode est utile pour augmenter ou diminuer la valeur d\'une
durée donnée. Après chacune de ces frappes, votre lecteur d\'écran
indique la valeur du tronçon actuelle. Par exemple, si vous souhaitez
augmenter le temps de 3 dixièmes de seconde et en supposant que le
format est réglé sur \"hh: mm: ss + centièmes\" : appuyez sur Fin pour
passer au dernier chiffre, appuyez sur la flèche gauche pour passer aux
dixièmes d\'un deuxième chiffre et appuyez trois fois sur la flèche
haut.

-   Taper des chiffres. Cette méthode est utile pour définir un temps
    qui n\'est pas liée à la valeur actuelle.

Si vous tapez un chiffre (0 à 9), la valeur du chiffre sous le focus est
remplacée par celle du chiffre tapé et le chiffre suivant prend le
focus. Votre lecteur d\'écran lit alors le chiffre qui est maintenant
sous le focus. Si le focus est sur le dernier chiffre, alors après avoir
tapé un chiffre, le focus est placé sur le premier chiffre. Par exemple,
si vous souhaitez définir un temps à 32 minutes, et en supposant aussi
que le format choisi soit \"HH:MM:SS + centièmes\" : Tapez «Début\" pour
déplacer le focus sur le premier chiffre, puis tapez les 8 chiffres
suivants : \"00320000\". Cela remplace complètement le temps avec le
temps de 32 minutes. Si vous utilisez le lecteur d\'écran Jaws ou NVDA,
vous pouvez toujours lire l\'intégralité du temps en appuyant sur la
commande de lecture de la ligne actuelle.

## Barre d\'outils \"Lecture à-la-vitesse\"

En plus de la lecture à la vitesse normale, vous pouvez également lire
l\'audio à des vitesses variant de très lentes à trois fois la vitesse
de lecture normale. Vous pouvez le faire soit en utilisant la barre
d\'outils \"Lecture à la vitesse\", qui se trouve dans le panneau
supérieur des barres d\'outils de la fenêtre principale, soit en
utilisant les commandes du sous-menu \"Lecture à la vitesse\" du menu
\"Extra\".

Elle contient :

-   le bouton \"Lire à la vitesse sélectionnée\" (pas dans la version
    3.3.3).

Notez que, comme pour tous les boutons des barres d\'outils, vous ne
pouvez appuyer sur le bouton qu\'avec \"Entrée\", car la barre d\'espace
est le raccourci pour la lecture à vitesse normale et l\'arrêt.

-   le potentiomètre \"Vitesse de lecture\", dont le curseur peut varier
    de 1 à 300, 300 correspondant à 3 fois la vitesse de lecture
    normale.

# Déplacement du curseur {#HDR-MovingCursor}

Audacity a un curseur pour spécifier un temps donné au cours de
l\'audio, par exemple, le début de la lecture, la position où vous
souhaitez démarrer la sélection d\'un intervalle de temps, ou la
position où sera collée le contenu du presse-papiers.

La lecture de la position actuelle du curseur est décrite dans l\'un des
prochains chapitres.

Les moyens de déplacement du curseur sont les suivants :

-   utiliser la touche \"Début Pour déplacer le curseur au début de la
    piste (temps zéro).
-   utiliser la touche \"Fin\" Pour déplacer le curseur à la fin de tout
    l\'audio.
-   utiliser les touches \"J\" ou K\" Pour déplacer le curseur au début
    ou à la fin respectivement de l\'audio de la piste sélectionnée.
-   utiliser les touches \",\" ou \".\" (Voir le chapitre [\"Les
    raccourcis gênants\"](#HDR-BracketShortcuts)) Pour reculer ou
    avancer respectivement d\'une courte période.
-   utilisez les touches \"majuscule +,\" ou \"majuscule +. (voir le
    chapitre [\"Les raccourcis gênants\"](#HDR-BracketShortcuts)) pour
    avancer ou reculer respectivement d\'une longue période. Ces courtes
    et longues périodes partagent les mêmes valeurs que celles utilisées
    pour les demandes de saut en cours de lecture et qui ont étés
    décrites au chapitre [\"Lecture audio\"](#HDR-AudioPlayback). La
    durée de courte et longues périodes peut être définie dans la boîte
    de dialogue \"Préférences\", comme décrit au chapitre [\"Sauts
    temporels\"](#HDR-SeekTimes).
-   utilisez les touches \"flèche gauche\" et \"flèche droite\" pour
    déplacer le curseur d\'un petit saut à gauche ou à droite
    respectivement. Le réglage de la longueur des sauts est décrit au
    chapitre [\"Longueur des sauts des flèches gauche et
    droite\"](#HDR-JumpSize).
-   utilisez la touche \"x\" pour arrêter la lecture et déplacer le
    curseur à cette position de lecture. Vous pouvez également utiliser
    cette touche pour reprendre la lecture.
-   utilisez la touche \"u\" ou \"i\" et la maintenir enfoncée pour
    faire défiler respectivement vers l\'arrière ou vers l\'avant.
    Lorsque vous relâchez la touche, le curseur est positionné à ce
    temps. Voir le chapitre [\"Frottement\"](#HDR-Scrubbing) pour une
    description complète du frottement.
-   utilisez la touche \"crochet gauche\" (voir le chapitre [\"Les
    raccourcis gênants\"](#HDR-BracketShortcuts)) pour fixer en vol le
    curseur à la position de lecture courante. Si pendant la lecture,
    vous appuyez sur la touche \"\[\" puis ensuite sur la touche
    \"Espace\" pour arrêter la lecture, le curseur est déplacé à la
    position audio où vous avez appuyé sur la touche \"\[\". Dans la
    pratique, la méthode suivante est plus souple:
-   Pendant la lecture, appuyez sur \"P\" pour mettre en pause la
    lecture lorsque vous atteignez la position où vous souhaitez
    déplacer le curseur.
-   Si vous n\'êtes pas satisfait avec cette position, appuyez de
    nouveau sur \"P\" pour reprendre la lecture, recherchez le bon
    endroit à l\'aide des touches de saut et refaite une pause au bon
    endroit.
-   Appuyez sur \"\[\" pour marquer la nouvelle position du curseur.
-   Appuyez sur \"Espace\" pour arrêter.
-   utilisez la boite de sélection numérique de temps \"début\" de la
    barre d\'outils \"Sélection\" : ceci est décrit en détail dans le
    chapitre [\"Déplacement de curseur avec la boite de sélection
    numérique \"début\"](#HDR-MovingCursorWithSelectionStart)
    ci-dessous.

## La boite de sélection numérique de temps quand il y a un curseur

Dans Audacity, il y a soit un curseur soit une plage de temps
sélectionnée. Lorsqu\'il y a un curseur, les temps affichées par les
boites de sélection numériques de temps \"Début\" et \"Fin\" qui
controlent la sélection sont les mêmes et ces temps sont identique à la
position du curseur. Pour cette raison, nous pouvons utiliser la boite
de sélection numérique \"Début\" de la sélection pour lire et changer la
position du curseur, comme décrit dans les deux chapitres suivants

## Lecture de la position du curseur

Il y a deux façons de lire la position du curseur.

La première est de lire la position dans la boite de sélection numérique
\"début\" de la barre d\'outils \"Sélection \" :

-   En supposant que le tableau \"Vue de piste\" est sous le focus,
    appuyez sur \"control + F6\" pour se déplacer au panneau inférieur
    de barre d\'outils dans lequel se trouve la barre d\'outils
    \"Sélection\".
-   Si nécessaire, appuyez sur \"Tab\" jusqu\'à ce que vous atteignez la
    boite de sélection numérique \"Début\", qui contient la position du
    curseur, Notez que lorsque le focus revient dans ce panneau de barre
    d\'outils, l\'objet qui reçoit le focus est celui qui avait
    précédemment le focus, de sorte que vous n\'avez souvent pas besoin
    de beaucoup de \"Tab\" à faire.
-   Appuyez sur \"control + F6\" deux fois ou \"control + majuscule +
    F6\" pour revenir au tableau \"Vue de piste\".

La seconde façon de lire la position du curseur est d\'utiliser la boite
de dialogue \"Définir la limite gauche de sélection\" :

-   en lecture arrêtée, appuyez sur la touche \"crochet gauche\" (voir
    le chapitre [\"Les raccourcis gênants\"](#HDR-BracketShortcuts))
    pour ouvrir cette boite de dialogue.
-   la position du curseur est dans le premier élément de la boite de
    dialogue et c\'est justement celui-ci qui reçoit le focus.
-   Appuyez sur \"Echapp\" pour fermer la boîte de dialogue.

## Déplacement du curseur à l\'aide de la boite de sélection numérique \"Début\" {#HDR-MovingCursorWithSelectionStart}

-   Appuyez sur \"control + F6\" pour amener le focus dans le panneau
    inférieur de barre d\'outils où la barre d\'outils \"Sélection\" est
    la première.
-   tapez \"Tab\" pour atteindre le bouton de configuration de la barre
    d\'outils de sélection et assurez-vous que l\'option \"Début et
    durée de la sélection\" est sélectionnée. Si elle est définie sur
    \"Début et fin de la sélection\", vous pouvez accidentellement
    sélectionnez une plage de temps au lieu de déplacer le curseur,
    comme décrit ci-dessous.
-   appuyez sur \"Tab\" pour atteindre la boite de sélection numérique
    \"Début\", et changer sa valeur, comme décrit au chapitre [Boites de
    sélection numérique](#HDR-EditSpinBoxes).
-   Pour revenir au tableau \"Vue de piste\", appuyez sur \"control +
    F6\" deux fois ou simplement sur \"control+majuscule+f6\".

### Raison pour l\'utilisation de l\'option \"durée\"

En supposant qu\'il n\'a pas de plage de temps définie, considérons les
deux cas suivants :

-   Premier cas : le bouton de configuration de la barre d\'outils de
    sélection définit l\'option \"Début et durée de la sélection\".

La boite de sélection numérique \"début\" affiche la position du curseur
et la boite de sélection numérique \"Durée\" affiche zéro. Si vous
modifiez la valeur de la zone \"Début, alors la zone \"Durée\" reste
toujours inchangé à zéro.

-   second cas : le bouton de configuration de la barre d\'outils de
    sélection définit l\'option \"Début et fin de la sélection\" :

Les boites de sélection numérique \"début\" et \"fin\" affichent la même
valeur, ce qui est Lae position du curseur. Si vous augmentez la valeur
de la boite de sélection numérique \"Début\", alors la valeur de la
boite de sélection numérique \"Fin\" est automatiquement augmentée à la
même valeur. Toutefois, si vous diminuez la valeur de la boite de
sélection numérique \"Début\", la boite de sélection numérique \"Fin\"
reste inchangée. Vous avez alors accidentellement sélectionné une plage
de temps.

## Longueur des sauts faits avec les flèches droite et gauche {#HDR-JumpSize}

Cette section décrit comment la longueur des sauts faits avec les
flèches droite et gauche dépend du niveau de zoom horizontal des données
audio, et comment définir le niveau de zoom de sorte que la longueur des
sauts soit à des valeurs appropriées.

Les longueurs sont également utilisées par \"majuscule + Flèche Gauche
ou Droite\" et \"Control + majuscule + Flèche Gauche ou Droite\", les
séquences de touches pour étendre ou contracter des plages de temps
sélectionnées.

Audacity a la possibilité de faire varier le niveau par lequel les
données audio sont agrandies dans le sens horizontal. Cela sert aux
utilisateurs voyants pour afficher les données audio de manière plus ou
moins détaillée en fonction de la tâche.

L\'appui sur la Flèche Droite ou Gauche déplace le curseur de la même
distance physique sur l\'écran, quel que soit le niveau de zoom
horizontal.

Donc, si le niveau de zoom est augmenté, le moment où le curseur est
déplacé est diminué. De même, si le niveau de zoom est diminué, alors le
temps par lequel le curseur est déplacé en est augmenté.

Après l\'ouverture ou l\'importation d\'un fichier, le zoom horizontal
est réglé afin de que la piste la plus longue dans le projet prenne
l\'espace disponible dans la piste dans la fenêtre. De sorte que le
montant initial de zoom, et donc la longueur des sauts des flèches
droite ou gauche dépend de la longueur des pistes.

Cependant, vous pouvez régler le zoom horizontal à un niveau prédéfini.

Pour ce faire, ouvrez le menu \"affichage\", puis le sous-menu \"Zoom\",
et choisissez le sous-menu \"Zoom Normal\" (raccourci \"Control + 2\").
Lorsque le zoom est réglé sur normal, alors les flèches gauche et droite
déplacent le curseur de quelques centièmes de seconde.

Cette longueur de saut est généralement trop petite pour être utiles.
Cependant, vous pouvez facilement ajuster la taille du pas, en utilisant
les commandes de zoom présentent dans le sous-menu \"zoom\" du menu
\"affichage :

-   Zoom avant (raccourci \"Control + 1\"). Cela double le zoom, et donc
    réduit de moitié le pas des touches flèches gauche et droite.
-   Zoom arrière (raccourci \"control + 3\"). Divise par 2 le zoom, et
    donc double le pas des touches flèches gauche et droite.

Ainsi, par exemple, après avoir réglé le zoom à la normale (\"control+
2\"), la longueur du pas est définit à un peu plus d\'un centième de
seconde, si vous faites un zoom arrière (\"control+ 3\") trois fois, ce
qui multiplie la taille de pas par 8, résultant en une longueur du pas
d\'un peu moins d\'un dixième de secondes.

Comme autre exemple, si vous appuyez sur \"control + 2\" et puis
\"control + 3\" 7 fois, la longueur du pas est d\'environ une secondes
et demie.

## Frottement {#HDR-Scrubbing}

L\'utilisation du mot \"Frottement\"(scrubbing en anglais) dans les
éditeurs audio provient de l\'édition à l\'aide de magnétophones à
bande. La bande est déplacée vers l\'arrière ou vers l\'avant sur la
tête de lecture pour trouver la position précise pour un montage.

Dans Audacity, il y a deux commandes de frottement qui intéressent les
utilisateurs du clavier :

-   Frottement vers l\'arrière avec la touche \"u\",
-   frottement vers l\'avant avec la touche \"i\".

En appuyant et en maintenant une de ces touches, vous pouvez lire
l\'audio en arrière ou en avant.

La vitesse de lecture dépend du paramètre de zoom horizontal
d\'Audacity, et donc en le modifiant, vous pouvez lire l\'audio à une
large gamme de vitesses.

Si vous utilisez un lecteur d\'écran avec son paramètre d\'écho de
frappe défini sur \"caractère\" et pendant le maintien enfoncé de la
touche de frottement, vous entendrez le nom de la touche être répété.
Pour éviter cela, vous pouvez temporairement définir l\'écho de frappe
du lecteur d\'écran sur \"aucun\".

Si aucune plage de temps n\'est sélectionnée, et que vous maintenez
enfoncée l\'une des touches de frottement, la lecture démarre au
curseur. Lorsque vous relâchez la touche, la lecture s\'arrête et le
curseur est positionné à ce temps.

Sinon, si une plage de temps est sélectionnée et que vous maintenez
enfoncée l\'une des touches de frottement, la lecture démarre au début
de la sélection. Contrairement à la lecture normale, si la fin de la
plage de temps sélectionnée est atteinte, la lecture ne s\'arrête pas
automatiquement. Lorsque la touche est relâchée, la plage de temps
sélectionnée est désélectionnée et le curseur est positionné au temps où
la touche a été relâchée.

Si vous appuyez et maintenez l\'une de ces touches, et tout en la
maintenant enfoncée, vous appuyez et maintenez l\'autre touche, la
lecture change immédiatement de direction et ne s\'arrête pas lorsque
vous relâchez la première touche.

La vitesse de lecture pour ces commandes dépend du réglage de zoom
horizontal d\'Audacity.

Cela peut être défini à l\'aide des commandes du sous-menu \"zoom\", qui
se trouve dans le menu \"Affichage\" :

-   Zoom normal (Ctrl + 2), fixe la vitesse de lecture pour ces
    commandes à la moitié de la vitesse de lecture normale.
-   Zoom avant (Ctrl + 1), divise par deux la vitesse courante de
    lecture pour ces commandes. Il existe une vitesse minimale d\'un
    seizième de la vitesse de lecture normale.
-   Zoom arrière (Ctrl + 3), double la vitesse courante de lecture pour
    ces commandes.

Il y a une vitesse maximale de trois fois la vitesse de lecture normale.

Vous pouvez positionner le curseur plus précisément en utilisant des
vitesses de lecture plus basses, et vous pouvez constater qu\'une
vitesse de lecture d\'un quart est un choix utile pour la vitesse.

La précision du positionnement du curseur dépend également de
l\'interface audio qu\'Audacity communique avec vos appareils audio.

Le choix des interfaces est décrit au chapitre [\"Interface
audio\"](#HDR-JumpSize) plus loin dans le guide. L\'utilisation de
l\'interface WASAPI vous donnera le positionnement le plus précis.

Dans la description ci-dessus, il a été dit que lorsque l\'une des
touches de frottement est relâchée, le curseur est positionné au temps
où la touche est relâchée. Cependant, il y a une exception à cela si la
touche \"\[\" ou \"\]\" a été enfoncée pendant la lecture. Dans ce cas,
la sélection de temps présente lorsque la touche de frottement est
relâchée est conservée. Ce comportement permet le frottement avec l\'une
des options décrites dans le chapitre [Méthode générale de sélection
d\'un intervalle de temps](#HDR-GeneralTimeRangeSelection).

# Sélection audio {#HDR-AudioSelection}

Dans le cas d\'un éditeur audio qui ne peut éditer qu\'une seule piste
audio, la sélection de l\'audio consiste simplement en spécifiant le
début et la fin de la période de l\'audio que vous souhaitez
sélectionner. C\'est une plage de temps.

Par exemple, vous pouvez sélectionner l\'audio entre le temps une minute
2 secondes et 5 minutes 23 secondes.

Cependant, Audacity est un éditeur multipiste. Si le projet se compose
d\'un certain nombre de pistes, alors vous voudrez peut-être
sélectionner uniquement l\'audio de certaines pistes dans un intervalle
de temps précis.

Donc, ainsi non seulement il faut sélectionner un intervalle de temps,
mais aussi les pistes concernées.

La sélection de piste a été décrite dans le chapitre [\"Sélection des
pistes\"](#HDR-TracksSelection) ci-dessus et la sélection d\'un
intervalle de temps est décrites dans les sections suivantes.

En utilisant les paramètres par défaut d\'Audacity, si vous essayez
d\'effectuer une action sur du son, comme appliquer un effet, et qu\'en
fait aucun son n\'est sélectionné, une boîte de dialogue s\'ouvre, vous
indiquant qu\'aucun son n\'est sélectionné. Cependant, il existe une
option de sélection automatique, et si elle est activée, au lieu
d\'afficher la boîte de dialogue, tout l\'audio du projet est
sélectionné et l\'effet est appliqué à cette sélection.

Pour les utilisateurs de lecteurs d\'écran, il est recommandé de laisser
cette option désactivée, mais tous les détails de cette option et de ses
paramètres sont décrits au chapitre [\"Sélection
automatique\"](#HDR-AutoSelect) du chapitre \"Préférences\".

Toutes les instructions dans le reste de ce guide supposent que
l\'option est désactivée

## Sélection d\'un intervalle de temps

Un moyen rapide de sélectionner l\'ensemble de l\'audio dans le projet
est d\'utiliser le raccourci \"control + A \" : ce raccourci permet de
sélectionner toutes les pistes et de sélectionner un large intervalle de
temps qui comprend toutes les données audio.

Il y a deux méthodes pour sélectionner une plage de temps :

-   la première est décrite dans la suite de ce chapitre.
-   la seconde, est décrite au chapitre [\"Sélection d\'une plage de
    temps à l\'aide de la position du curseur
    mémorisée\"](#HDR-UsingStoredPositionTimeRangeSelection) ci-dessous.

Après cela, il y a des chapitres sur les commandes de lecture utiles,
apportant des ajustements précis aux plages de temps et comment
désélectionner les plages de temps.

### Méthode générale de sélection d\'un intervalle de temps {#HDR-GeneralTimeRangeSelection}

La première méthode de sélection d\'un intervalle de temps se compose de
deux étapes :

-   Déplacez le curseur à l\'endroit où vous souhaitez commencer ou
    terminer la sélection à l\'aide d\'une des méthodes décrites au
    chapitre [\"Déplacement du curseur\"](#HDR-MovingCursor) ci-dessus.
-   Fixez l\'autre extrémité de la sélection à l\'aide de l\'une des
    méthodes décrite ci-dessous.

Noter que lorsqu\'un intervalle de temps est sélectionné, la lecture
audio se fait uniquement à l\'intérieur de cet intervalle de temps. Il
existe également un certain nombre de commandes de lecture
supplémentaires décrites au chapitre [\"Commandes de lecture pour la
vérification d\'une plage de temps
sélectionnée\"](#HDR-CheckingSelectedTimeRange).

Vous pouvez utiliser l\'une des méthodes suivantes pour fixer l\'autre
extrémité de la sélection :

-   Avec le curseur à la position où vous souhaitez le début de la
    sélection et pour définir la fin de la sélection à la fin de
    l\'audio des pistes sélectionnées, appuyez sur \"majuscule + k\".
-   Avec le curseur placé à l\'endroit où vous voulez la fin de la
    sélection et pour fixer le début de la sélection au début de
    l\'audio des pistes sélectionnées, appuyez sur \"majuscule + j\".
-   Définir la fin de la sélection à l\'aide du raccourci \"\]\" (voir
    le chapitre [\"Les raccourcis gênants\"](#HDR-BracketShortcuts))
    lors de la lecture. Si au cours de la lecture, vous appuyez
    sur\"\]\" et ensuite sur \"Espace\" pour arrêter la lecture, la fin
    de la sélection est positionnée à l\'endroit de l\'audio où vous
    avez appuyé sur la touche \"\]\". Dans la pratique, la méthode
    suivante est plus souple:
-   Pendant la lecture, appuyez sur \"P\" pour mettre en pause lorsque
    vous atteignez la position que vous voulez être la fin de la
    sélection.
-   Si vous n\'êtes pas satisfait avec cette position, appuyez sur \"P\"
    pour reprendre la lecture et avec les raccourcis de saut, ajustée la
    position avant de refaire une nouvelle pause.
-   Appuyez sur \"\]\" pour marquer la position de la fin de la
    sélection.
-   Appuyez sur \"Espace\" pour positionner le curseur de lecture au
    début de la sélection si vous voulez écouter l\'audio sélectionné ou
    sur \"p\" pour continuer la lecture.
-   Réglez la fin de la sélection à l\'aide de la touche \"\]\" pendant
    le balayage vers l\'avant. Maintenez la touche \"i\" enfoncée pour
    faire défiler vers l\'avant. Appuyez sur la touche \"\]\" au temps
    où vous souhaitez terminer la sélection, puis relâchez la touche
    \"i\".
-   De même, vous pouvez définir le début de la sélection à l\'aide de
    la touche \"\[\", tout en faisant défiler vers l\'arrière. Maintenez
    la touche \"u\" enfoncée pour faire défiler vers l\'arrière. Appuyez
    sur la touche \"\[\" au moment où vous souhaitez placer le début de
    la sélection, puis relâchez la touche \"u\".
-   Avec le curseur à l\'endroit où vous voulez le début de la sélection
    et pour définir la fin de la sélection à la fin de tout l\'audio,
    appuyez sur majuscule + fin\".
-   Avec le curseur positionné à l\'endroit où vous voulez la fin de la
    sélection et pour définir le début de la sélection au début des
    pistes (temps zéro), appuyez sur \"majuscule+ début\".
-   À l\'aide des boites de sélection numériques de la barre d\'outils
    \"Sélection\", tel que décrite dans la section suivante.
-   avec \"majuscule + Flèche Gauche\" ou \"majuscule + Flèche Droite\"
    : Avec le curseur placé à l\'endroit où vous souhaitez que le début
    de la sélection soit, vous pouvez appuyer sur \"majuscule + Flèche
    Droite\" une ou plusieurs fois pour déplacer la fin de la sélection
    vers la droite en petites étapes. De même, avec le curseur
    positionné où vous souhaitez la fin de la sélection, vous pouvez
    appuyer sur \"majuscule + Flèche Gauche\" une ou plusieurs fois pour
    déplacer le point de départ de la sélection vers la gauche.

Le réglage des longueurs des pas est décrit au chapitre [\"Longueur des
sauts faits avec les flèches droite et gauche\"](#HDR-JumpSize).

Notez que le tableau \"Vue de piste\" doit être sous le focus pour
l\'utilisation de ces raccourcis.

#### Exemples

Dans les exemples suivants, on suppose qu\'une seule piste est
sélectionnée.

-   Pour sélectionner une plage de temps qui couvre tout l\'audio dans
    la Piste : Appuyez sur \"J\" pour déplacer le curseur au début de
    l\'audio, puis appuyez sur \"majuscule + k\" pour définir la fin de
    la sélection à la fin de l\'audio.

Une alternative évidente serait d\'appuyer sur \"k\", puis sur
\"majuscule + j\".

-   Pour sélectionner quelques secondes au début de l\'audio de la piste
    sélectionnée : Appuyez d\'abord sur \"j\" pour déplacer le curseur
    au début de l\'audio, puis appuyez sur la barre d\'espace pour
    démarrer la lecture.

Lorsque vous arrivez au point où vous voulez être la fin de la plage de
temps, appuyez sur \"x\" pour arrêter la lecture et déplacez le curseur
sur ce point. Enfin, appuyez sur \"majuscule + j\" pour définir le début
de la sélection au début de l\'audio.

-   Pour sélectionner quelques secondes à la fin de l\'audio de la piste
    sélectionnée : Appuyez d\'abord sur \"k\" pour déplacer le curseur à
    la fin de l\'audio. Appuyez ensuite plusieurs fois sur la virgule,
    jusqu\'à ce que le curseur se trouve un peu avant le temps à
    laquelle vous souhaitez être le début de la plage de temps. Appuyez
    sur la barre d\'espace pour démarrer la lecture, puis appuyez sur X
    lorsque vous arrivez au point où vous souhaitez être le début de la
    plage de temps.

Enfin, appuyez sur \"majuscule + k\" pour définir la fin de la sélection
à la fin de l\'audio.

-   Pour sélectionner quelques secondes quelque part dans la piste
    sélectionnée : Appuyez sur la barre d\'espace pour démarrer la
    lecture, puis appuyez sur la touche \"\[\" au point où vous voulez
    être le début de la sélection, puis appuyez sur la touche \"\]\" au
    point où vous voulez être la fin de la sélection, et enfin la barre
    d\'espace pour arrêter la lecture.

## Sélection d\'une plage de temps à l\'aide de la position du curseur mémorisée {#HDR-UsingStoredPositionTimeRangeSelection}

La seconde méthode générale de sélection d\'un intervalle de temps se
compose de quatre étapes :

-   Déplacez le curseur à l\'endroit où vous souhaitez commencer ou
    terminer la sélection, à l\'aide d\'une des méthodes décrites au
    chapitre [\"Déplacement du curseur\"](#HDR-MovingCursor) ci-dessus.
-   Ouvrez le menu \"sélection\", et choisissez de mémoriser la position
    du Curseur à l\'aide du sous-menu \"Stocke la position du curseur\".
-   Fixez l\'autre extrémité de la sélection à l\'aide de l\'une des
    méthodes décrites au chapitre [\"Déplacement du
    curseur\"](#HDR-MovingCursor) ci-dessus.
-   Ouvrez le menu \"sélection\", et choisissez le sous-menu \"Curseur à
    la position stockée du Curseur\".

Dans certains cas, cette méthode est plus facile à utiliser que la
méthode décrite au chapitre précédent. Avoir stocké la position du
curseur, vous permet d\'utiliser la méthode que vous souhaitez pour
positionner le curseur à l\'autre extrémité de la plage de temps que
vous voulez sélectionner, sans aucun danger de perdre l\'autre extrémité
de la sélection.

Notez que pendant la lecture, y compris en pause, la commande de
mémorisation de la position du curseur mémorise la position du curseur
de lecture, plutôt que celle du curseur d\'édition. Cependant, il est
normalement plus facile de positionner le curseur d\'édition précisément
où vous le souhaitez, et donc pour sélectionner une plage de temps, vous
ne voudrez probablement pas stocker la position du curseur de lecture
très souvent. De même, pendant la lecture, y compris en pause, le
\"curseur à la position stockée du curseur\" dans le menu \"Sélection\"
sélectionne de la position du curseur de lecture à la position du
curseur stockée.

## Commandes de lecture pour la vérification d\'une plage de temps sélectionnée {#HDR-CheckingSelectedTimeRange}

Lorsqu\'un intervalle de temps est sélectionné, si vous appuyez sur
\"Espace\", seulement l\'audio de la plage sélectionnée est lue.

Vous pouvez utiliser les commandes de lecture suivantes pour vérifier
que vous avez bien sélectionné la plage de temps que vous voulez :

-   Pour lire une courte période de temps avant ou après le début de la
    sélection, appuyez sur \"majuscule + F5\" ou \"majuscule + F6\"
    respectivement.
-   Pour lire une courte période avant ou après la fin de la sélection,
    appuyez sur majuscule + F7\" ou \"majuscule + F8\" respectivement.
-   Pour jouer un aperçu de coupe : appuyez sur \"c\". Ceci lira une
    courte période avant le début de la sélection, puis une courte
    période après la fin de la sélection. L\'intervalle de temps
    sélectionné lui-même est exclu de la lecture.

Les longueurs de ces périodes font partie du groupe de paramètres
\"Aperçu de la coupe\" et se configurent dans la catégorie \"Lecture\"
des préférences.

## Ajustement d\'une plage de temps

Il y a plusieurs manières de faire de petits ajustements d\'une plage de
temps, et elles sont décrites dans les deux chapitres suivants.

### Utilisation des raccourcis de déplacement du début et fin de sélection

Vous pouvez utiliser les touches suivantes pour déplacer le point de
départ ou de fin de la sélection d\'une petite période de temps :

-   Pour déplacer la fin de la sélection vers la droite, et donc pour
    étendre la plage de temps, appuyez sur \"majuscule + Flèche
    droite\".
-   Pour déplacer la fin de la sélection vers la gauche, afin de
    contracter la plage de temps, appuyez sur \"control + majuscule +
    Flèche gauche\".
-   Pour déplacer le point de départ de la sélection vers la droite, et
    donc pour contracter la plage de temps, appuyez sur \"control +
    majuscule + Flèche droite\".
-   Pour déplacer le point de départ de la sélection vers la gauche, et
    donc pour étendre la plage de temps, appuyez sur \"majuscule +
    Flèche gauche\".

Le réglage des longueurs des pas est décrit au chapitre [\"Longueur des
sauts faits avec les flèches droite et gauche\"](#HDR-JumpSize).

Note que Les deux raccourcis qui utilisent la touche \"control\",
contractent la plage de temps, tandis que les deux autres l\'étendent.

### Utilisation des boites de sélection numérique

-   Si le focus est sur le tableau \"Vue de piste\", tapez \"control +
    F6\" pour l\'amener dans le panneau inférieur où la première barre
    d\'outils est la barre d\'outils de \"sélection\".
-   tapez \"Tab\" pour atteindre le bouton de configuration de la barre
    d\'outils de sélection et sélectionnez l\'option \"Début et fin de
    la sélection\". Cela vous permet de régler le Début ou la Fin de la
    sélection sans affecter les autres.
-   tapez \"Tab\" pour atteindre soit la boite de sélection numérique
    \"début\" ou la boite de sélection numérique \"fin». Si le format
    n\'est pas déjà mis à \"hh:mm:ss + centièmes\" et si vous voulez
    faire de petits ajustements, utilisez le menu contextuel pour
    modifier le format.
-   Si, par exemple, vous souhaitez régler le temps en dixièmes de
    seconde, appuyez sur \"Fin\" pour déplacer le focus sur le dernier
    chiffre (celui des centièmes), puis appuyez sur \"Flèche gauche\"
    pour atteindre le chiffre des dixièmes de secondes. Vous pouvez
    ensuite appuyer sur \"Flèche haut ou bas\" pour augmenter ou
    diminuer respectivement, le temps d\'un dixième de seconde.
-   Ajuster l\'autre point de la sélection si vous le souhaitez.
-   Appuyez sur \"control + F6\" deux fois pour revenir au tableau \"Vue
    de piste\".

## Désélection de la plage de temps

Le déplacement du curseur à l\'aide de l\'une des touches suivantes,
supprime la sélection de la plage de temps : \"Début\", \"Fin\", \"J\",
\"K\", \"Flèche droite\", \"flèche gauche\", \",\" et \".\".

Après l\'appui sur la touche \"flèche gauche\" ou \"flèche droite\", la
position du curseur est placée à la position de début ou de fin de la
plage qui vient d\'être désélectionnée.

Pour désélectionner toutes les pistes, et désélectionner toute plage de
temps, appuyez sur \"control + majuscule + A\". La nouvelle position du
curseur est au début de la plage qui vient d\'être désélectionnée.

# Édition basique

## Annuler et rétablir

Pour annuler appuyez sur \"control + Z\", et pour refaire appuyez sur
control + Y\".

## Supprimer de l\'audio

Pour supprimer l\'audio sélectionné, appuyez sur la touche \"Suppr\".

Si vous voulez écouter un aperçu de l\'audio après la suppression,
appuyez sur \"C\" qui joue une petite période de temps avant et après le
point de sélection.

La longueur de la période de lecture avant et après la sélection peut
être définie dans le groupe de paramètres \"Aperçu de la coupe\" situé
dans la catégorie \"Lecture\" des préférences d\'Audacity.

## Couper

Pour couper l\'audio sélectionné, appuyez sur \"control + X\". L\'audio
sélectionné est retiré de la piste, et placé dans le presse-papier
d\'Audacity.

Comme dans le cas de la suppression de l\'audio, vous pouvez écouter
l\'effet de votre découpe en appuyant sur \"C\" pour Jouer un aperçu de
la coupe.

## Copier

Pour copier l\'audio sélectionné dans le presse-papier d\'Audacity,
appuyez sur \"control + C\".

## Coller

Pour coller l\'audio du presse-papier d\'Audacity dans la ou les
piste(s) sélectionnée(s), appuyez sur \"control+ V\".

Il y a deux cas :

-   S\'il n\'y a pas de plage de temps sélectionnée et donc pas d\'audio
    sélectionné, l\'audio est inséré à la position du curseur.
-   Si de l\'audio est sélectionné, l\'audio sélectionné est remplacé
    par l\'audio collé (celui du presse-papier d\'Audacity).

Si aucune piste n\'est sélectionnée lorsque vous collez de l\'audio,
l\'audio est inséré au début d\'une nouvelle piste.

Il y a un couple de commandes de lecture pratiques qui peuvent être
utilisées pour vérifier que la transition au début et à la fin de
l\'audio collé sonne bien :

-   Pour lire une courte période avant et après le début de la
    sélection, appuyez sur \"control + majuscule + F5».
-   Pour lire une courte période avant et après la fin de la sélection,
    appuyez sur \"control + majuscule + F7».

La durée de la période de lecture avant et après la sélection peut être
définie dans le groupe de paramètres \"Aperçu de la coupe\" situé dans
la catégorie \"Lecture\" des préférences d\'Audacity.

## Coller de l\'audio à partir d\'un autre projet

Lorsque vous collez de l\'audio à partir d\'un autre projet, une boîte
de dialogue Coller l\'audio peut s\'ouvrir, vous demandant comment vous
souhaitez coller votre audio.

Il existe un groupe de deux boutons radio pour les options, qui sont
Clip intelligent et Audio sélectionné uniquement.

Pour les utilisateurs de lecteurs d\'écran, il est recommandé de
sélectionner l\'option Audio sélectionné uniquement. Puis se déplacer
par \"Tab\" jusqu\'à la case à cocher \"Mémoriser mon choix\" pour la
cocher, et enfin \"Tab\" jusqu\'au bouton \"Continuer\" et appuyez
dessus.

Une explication de ce conseil est donnée au chapitre (\[\"Coller
l\'audio d\'un projet différent\" #HDR-PastingAudioFromOtherProject\]
dans le chapitre \"Préférences\" de ce guide.

## Remplacer de l\'audio par du silence

Pour remplacer l\'audio sélectionné avec la même longueur de silence,
dans le menu \"Edition\", ouvrez le sous-menu \"Suppression spéciale\"
et choisir le sous-menu \"Silence Audio\" (raccourci \"control+l\").

## Insérer un silence

Pour insérer une période de silence dans les pistes sélectionnées :

-   Déplacer le curseur à l\'endroit où vous souhaitez insérer le
    silence.
-   ouvrez le menu \" Générer\" et choisissez le sous-menu \"Silence\".
-   la boite de dialogue \"Silence\" (Un Générateur de Silence) s\'ouvre
    et le focus est mis dans la zone d\'de sélection numérique qui
    permet de spécifier la durée du silence. Cette zone d\'édition est
    identique aux boites de sélection numérique de temps utilisées dans
    la barre d\'outils \"Sélection\", bien que le focus soit donné au
    premier chiffre non nul plutôt qu\'au premier chiffre.

Définissez le temps que vous souhaitez, puis appuyez sur \"Entrée\" pour
activer, par défaut, le bouton \"OK\".

La période de silence est insérée, et la plage de temps qui couvre cette
période est sélectionnée.

Notez que toutes les commandes du menu \"Générer\" ont le même
comportement.

Si une ou plusieurs pistes sont sélectionnées, mais pas de plage de
temps, alors l\'audio généré est inséré à l\'emplacement du curseur. Si
une plage de temps est également sélectionnée, l\'audio sélectionné dans
la plage est remplacé par l\'audio généré.

Toutes les boites de sélection numérique de temps des boîtes de dialogue
qui sont ouvertes à partir du menu \"Générer\" sont, par défaut, sous le
format \"secondes\" et le focus est donné au premier chiffre non nul.

## Effets

Audacity fournit un grand nombre d\'effets, qui sont disponibles dans le
menu \"Effets\". Par défaut, les effets sont regroupés par catégorie, et
il existe donc des sous-menus tels que Volume et Compression, Fading, et
Pitch et Tempo.

Il existe un certain nombre d\'options pour la façon dont le menu Effet
est trié ou groupé, comme le tri par nom, et cela peut être défini dans
le groupe \"Options d\'effets\" de la catégorie \"Effets\" de la boîte
de dialogue \"Préférences\", où il y a une liste déroulante \"Trier ou
Grouper\".

Certains des éléments du menu, comme le fondu d\'entrée ou le fondu de
sortie, exécutent simplement l\'effet sur l\'audio sélectionné, mais la
plupart d\'entre eux ouvrent une boîte de dialogue afin que vous
puissiez régler les paramètres de l\'effet.

Dans une boîte de dialogue d\'effet, après les commandes des différents
paramètres, il y a trois boutons :

-   Un bouton Préréglages et paramètres, qui ouvre un menu qui comprend
    des commandes pour tous les préréglages d\'usine et utilisateur.

-   Un bouton Aperçu, qui vous permet d\'entendre un court échantillon
    de l\'effet appliqué à l\'audio sélectionné. La durée par défaut de
    l\'aperçu est de 6 secondes, mais vous pouvez la modifier dans la
    boîte de dialogue \"Préférences\", où dans la catégorie \"Lecture\",
    dans le groupe \"Aperçu des effet\"s, il y a une zone d\'édition
    Longueur. Notez que dans la version 3.3.0 d\'Audacity, mais pas dans
    les versions ultérieures, pour un petit nombre d\'effets, après
    avoir appuyé sur le bouton Aperçu, il se transforme en un bouton
    Arrêter l\'aperçu, ce qui vous permet d\'arrêter l\'aperçu quand
    vous le souhaitez.

-   Un bouton Appliquer, qui est le bouton par défaut de la boite de
    dialogue. Bien qu\'il n\'y ait pas de bouton \"Annuler\", vous
    pouvez toujours quitter la boîte de dialogue en appuyant sur
    \"Échap\".

En plus des effets qui sont inclus avec Audacity, vous pouvez également
utiliser des plugins d\'effets, et certains détails de ceux-ci qui sont
pertinents pour les utilisateurs de lecteurs d\'écran sont donnés au
chapitre [\"Plugins\"](#HDR-Plugins).

Lorsque vous appliquez l\'un des effets du menu d\'effets à un son
sélectionné, les données audio contenues dans la piste sont modifiées.

Vous pouvez également appliquer des effets en temps réel à une piste
entière, ce qui laisse les données audio de la piste inchangées et vous
permet de revenir à tout moment pendant votre montage et d\'apporter des
modifications.

Ceci est décrit au chapitre [\"Effets en temps
réel\"](#HDR-RealTimeEffects).

## Supprimer des pistes

Il existe deux façons de supprimer des pistes :

-   Pour supprimer la piste sous le focus, appuyez sur \"majuscule +
    C\".
-   Pour supprimer la ou les pistes sélectionnées, supprimez à l\'aide
    du menu \"Pistes\" et du sous-menu \"Supprimer la(les) piste(s).
    Cela fournit un moyen rapide de suppression de toutes les pistes si
    vous appuyez sur \"control + A\" pour assurer que toutes les pistes
    sont sélectionnées.

## Éviter l\'introduction de clics lors de l\'édition

Si vous supprimez ou couper une partie de l\'audio dans une piste, et si
le début ou la fin de cette partie n\'a pas une amplitude nulle, alors
il peut en résulter un brusque changement d\'amplitude de l\'audio.

Si la taille de ces brusques changements est assez grande, vous entendez
des clics.

Un problème similaire peut se produire si vous copiez et collez de
l\'audio.

Vous pouvez éviter l\'introduction de ces clics à l\'aide du sous-menu
\"Rechercher les croisements avec le Zéro\", du menu \"sélection\",
(raccourci \"Z\").

Si une piste est sélectionnée, mais il n\'y a pas de période
sélectionnée, si vous appliquez cette commande, la position du curseur
est déplacée vers la position la plus proche de l\'endroit où
l\'amplitude de l\'audio dans la piste sélectionnée est égale à zéro. Le
changement de position est très faible, de sorte que vous n\'avez pas à
vous inquiéter que cela fasse un grand changement à la position du
curseur. De manière semblable, s\'il y a une plage de temps
sélectionnée, la position du début et de la fin de la plage sont
ajustées de sorte que l\'amplitude de l\'audio dans la piste
sélectionnée est égale à zéro.

Afin d\'éviter l\'introduction de clics :

-   Après avoir sélectionné une partie de l\'audio dans une piste, et
    avant de le couper, de le supprimer ou le copier, appliquez la
    commande \"Rechercher les croisements à zéro\".
-   Après avoir placé le curseur pour coller de l\'audio dans une piste,
    et avant de le coller, appliquez \"Rechercher les croisements à
    zéro\".

## Lecture en boucle {#HDR-LoopPlayback}

Depuis Audacity 3.1.0, il y a une plage de boucle qui contrôle la
lecture en boucle, et qui est indépendante de la plage de temps
sélectionnée.

Les options et commandes de bouclage se trouvent dans le sous-menu
\"Bouclage\" (\"looping\") du menu \"Transport\".

Si l\'option \"Boucle activée/désactivée\" du sous-menu \"Bouclage\"
n\'est pas cochée, alors, comme vous pouvez vous y attendre, la lecture
se déroule normalement et non pas en boucle.

Si l\'option est cochée, la lecture commence à la position du curseur ou
au début de la plage de temps sélectionnée, s\'il y en a une. La lecture
continue jusqu\'à ce qu\'elle atteigne la fin de la boucle.

À ce stade, la lecture revient au début de la boucle, et la boucle est
ensuite lue de manière répétée jusqu\'à ce que vous arrêtiez la lecture.

Il existe plusieurs façons de régler la plage de boucle :

-   Vous pouvez sélectionner une plage de temps sélectionnée, puis
    définir la plage de boucle pour qu\'elle soit identique à la plage
    de temps sélectionnée. Pour ce faire, dans le menu \"Transport\",
    ouvrez le sous-menu \"Bouclage\" et choisissez Définir la boucle sur
    la sélection (Maj + L, uniquement dans la version 3.1.3 ou
    ultérieure).
-   Lorsque la lecture est arrêtée, vous pouvez définir le début et la
    fin de la boucle, en utilisant les commandes \"Loop in\" et \"Loop
    out\", qui se trouvent dans le sous-menu \"bouclage\" du menu
    \"Transport\". Chacune de ces commandes ouvre une boîte de dialogue
    qui contient une boite de sélection numérique qui peut être utilisée
    pour définir la position.

L\'utilisation de ces boites de sélection numérique a été décrite au
chapitre [\"Boites de sélection numérique \"](#HDR-EditSpinBoxes) du
chapitre \"Barres d\'outils\". Ces commandes peuvent également être
utilisées pour trouver les valeurs actuelles du début et de la fin de la
boucle.

Vous pouvez lire l\'audio entre le début et la fin de la boucle une fois
en utilisant le menu \"Transport\", en ouvrant le sous-menu \"Lecture\"
et en choisissant \"Lire une fois /Stop\" (Maj + Barre d\'espace).

Notez que dans les versions d\'Audacity antérieures à la 3.1.0, \"Maj +
Espace\" était le raccourci par défaut de la commande Lecture en boucle,
qui a été supprimée. Si vous souhaitez mettre à jour la plage de la
boucle sans arrêter la lecture, vous pouvez le faire en utilisant le
début de la sélection et les commandes de temps de fin dans la barre
d\'outils de sélection. Modifiez simplement l\'une des valeurs, puis
dans le menu \"Transport\", ouvrez le sous-menu \"Bouclage\" et
choisissez \"Définir la boucle sur la sélection\".

# Édition audio avec plusieurs pistes {#HDR-AdvancedEdition}

Ce chapitre décrit certaines commandes et certains paramètres qui sont
pertinents lorsque vous souhaitez travailler sur un projet contenant
plusieurs pistes.

## Importation de fichier audio {#HDR-AudioFileImport}

Vous pouvez importer un ou plusieurs fichiers audio et ceux-ci
deviennent de nouvelles pistes dans le projet existant.

Pour importer un ou plusieurs fichiers audio standards, ouvrir le menu
\"Fichier\", et sélectionnez \"Audio\" dans le sous-menu \"Importer\"
(raccourci \"control + majuscule + I\").

La boite de dialogue \"Choisir un ou plusieurs fichiers audio\"
s\'ouvre.

Note : immédiatement après l\'importation, seule la dernière piste du
projet est sélectionnée.

## Ajout d\'une nouvelle piste vide

Pour ajouter une nouvelle piste vide, choisissez une des commandes du
sous-menu \"Ajouter nouvelle\" du menu \"piste.

## Duplication de piste

Pour dupliquer l\'audio sélectionné dans une ou plusieurs autres pistes,
ouvrez le menu \"Édition\" et choisissez le sous-menu \"Dupliquer\"
(raccourci \"Control + D\").

La copie de l\'audio conserve les mêmes timings que ceux de l\'audio
original, de sorte que dans la ou les nouvelle piste les données audio
commence au début de la période de temps sélectionnée.

## Muet et Solo

Chaque piste dispose d\'un paramètre muet qui peut être allumé ou
éteint, et un paramètre \"solo\" qui peut également être activé ou
désactivé.

Ces paramètres sont utilisés pour contrôler les pistes qui vont
contribuer à la lecture.

De plus, Le paramètre \"muet\" (pas le paramètre \"solo\") affecte
l\'audio qui va contribuer à l\'audio enregistré dans un des formats
standard.

Par défaut, les paramètres \"muet\" et \"solo\" de chaque piste sont
respectivement \"éteint\" et \"inactif\".

L\'état actif de ces paramètres (allumé pour \"muet\" et actif pour
\"solo\") est inscrit après le nom de la piste.

### Muet

Si une piste à son paramètre \"Muet\" allumé, elle ne contribue ni à la
lecture, ni à l\'audio enregistré dans l\'un des formats standard.

Vous pouvez modifier le paramètre \"Muet\" d\'une piste ou les
paramètres de toutes les pistes :

-   Pour basculer le paramètre \"Muet\" de la piste sous le focus,
    appuyez sur \"majuscule + U\".
-   Pour couper le son de toutes les pistes, appuyez sur \"control +
    U\".
-   Pour remettre le son de toutes les pistes, appuyez sur \"Ccontrol +
    majuscule + u\".
-   Pour couper le son de toutes les pistes sélectionnées, appuyez sur
    \"control + Alt + u\".
-   Pour remettre le son sur toutes les pistes sélectionnées appuyez sur
    \"control + alt +majuscule + U\".

Toutes à l\'exception de la première de ces commandes se trouvent dans
le sous-menu \"Silencer/désilencer\" du menu \"Pistes\".

### Solo

Si une ou plusieurs pistes ont leur paramètre \"solo\" activé, seules
ces pistes contribuent à la lecture, indépendamment du paramètre
\"Muet\" des autres pistes. Pour basculer le réglage du Solo de la piste
sous le focus, appuyez sur \"majuscule + S\".

Il y a trois options possibles pour le paramètre \"Solo\" qui impacte
son interaction avec le paramètre \"muet\" :

-   simple (valeur par défaut) : lorsque vous activez le paramètre
    \"Solo\" d\'une piste, le paramètre \"Muet\" et le paramètre
    \"Solo\" de cette piste sont ajustés. Ainsi le paramètre \"Muet\" de
    cette piste est éteint et le paramètre \"muet\" des autres pistes
    est allumé et leur paramètre \"solo\" est inactif. Si le paramètre
    \"solo\" d\'une piste redevient inactif, le paramètre \"muet\" de
    toutes les autres pistes passe à éteint.
-   Multipiste : Le paramètre \"muet\" et le paramètre \"solo\" sont
    complétement indépendants.
-   Aucun : Il n\'y a pas de paramètre \"solo\", il faut se contenter du
    seul paramètre \"muet\".

Le choix de L\'option pour ce paramètre \"solo\" se fait à l\'aide d\'un
bouton dans la sous-rubrique \"comportement des pistes\" de la catégorie
\"Piste\" des préférences d\'Audacity.

## Gain de la piste

Pour modifier le gain de la piste, appuyez sur majuscule + G\".

La boite de dialogue \"Gain\" s\'ouvre qui contient à la fois une zone
d\'édition et un potentiomètre pour changer le gain.

La gamme de gain (db) est de -36 à +36.

Le gain d\'une piste est appliqué à l\'ensemble de la piste et est
appliquée seulement au cours de la lecture, ou lorsque la piste est
exportée vers un fichier, ou lorsque vous utilisez les commandes de
mixage et de rendu.

Modifier le gain n\'affecte pas l\'amplitude des données audio de la
piste.

## Panoramique de la piste

Pour changer le panoramique de la piste, tapez \"majuscule + p\" ou
utilisez le sous-menu \"Changer le panoramique sur la piste visée\" du
sous-menu \"Pistes\" du menu \"Extra\".

La boite de dialogue s\'ouvre qui contient à la fois une zone d\'édition
et un potentiomètre pour changer le panoramique.

La plage de panoramique va de -1 à 1, ce qui correspond à gauche et à
droite respectivement.

## Menu contextuel d\'une piste

Vous ouvrez le menu contextuel de la piste sous le focus en appuyant sur
\"majuscule + M\", ou la touche \"Applications\" ou le raccourci
\"majuscule +f10\".

Les commandes du menu comprennent le changement de nom de la piste, le
déplacement de la position de la piste dans le tableau \"Vue de piste\".
Cette dernière commande est décrite dans le chapitre suivant.

## Déplacement d\'une piste

Les commandes pour déplacer la position de la piste sous le focus sont :
déplacer la piste vers le haut, déplacer la piste vers le bas, déplacer
la piste tout en haut, déplacer la piste tout en bas.

Par défaut, ces commandes n\'ont pas de raccourci associé, mais vous
pouvez en assigner sans problème en utilisant la boite de dialogue
\"Préférences\" d\'Audacity.

Elles se trouvent dans la catégorie \"Clavier\", rubrique \"Piste\" et
sous les noms suivants :

-   \"Déplacer la piste visée vers le haut\",
-   \"Déplacer la piste visée vers le bas\",
-   \"Déplacer la piste visée tout en haut\",
-   \"Déplacer la piste visée tout en bas\".

Les combinaisons de touche qui ne sont pas utilisées et qui pourraient
convenir sont : \"Control + majuscule + Flèche haut\", \"control +
majuscule+ Flèche bas\", \"control + majuscule + début\", \"control +
majuscule + fin\".

## Alignement bout à bout de piste

Si vous sélectionnez deux ou plusieurs pistes, vous pouvez aligner
l\'audio dans ces pistes, de sorte que l\'audio d\'une piste commence à
la fin de l\'audio de la piste précédente.

Pour ce faire, ouvrez le menu \"pistes\", puis le sous-menu \"Aligner
les pistes\" et choisissez le sous-menu \"Aligner bout à bout\".

Note :

-   l\'alignement se fait dans l\'ordre dans lequel les pistes se
    présentent dans le tableau \"Vue de piste\". Si vous avez besoin de
    changer cet ordre, vous pouvez le faire à l\'aide d\'une commande du
    menu contextuel pour la piste concernée.
-   La position de l\'audio dans la première piste sélectionnée reste
    inchangé.

## Décalage d\'audio

Vous pouvez décalez des données audio dans une ou plusieurs pistes, de
telle manière que le début ou la fin de l\'audio soit placée à une
certaine position souhaitée.

Vous pouvez spécifier cette position soit avec le curseur soit avec le
début ou la fin d\'une plage de temps sélectionnée. Toutes les commandes
de déplacement de l\'audio sont disponible dans le sous-menu \"Aligner
les Pistes\" du menu \"Pistes\".

Quelques exemples d\'utilisation sont donnés ci-dessous.

Il y a un couple de commandes de lecture pratiques qui peuvent être
utilisées pour vérifier la position de l\'audio décalé :

-   Pour lire une courte période avant et après le curseur ou la
    sélection démarre, appuyez sur \"control + majuscule + F5\".
-   Pour lire une courte période avant et après la fin de la sélection,
    appuyez sur \"control + majuscule + F7\".

Vous pouvez modifier la longueur de la période dans la boîte de dialogue
\"Préférences\" d\'Audacity, dans la catégorie \"Lecture\".

### Exemples

Premier exemple, pour déplacer l\'audio dans une ou plusieurs pistes à
une position de départ précise :

-   Déplacer le curseur à la position souhaitée à l\'aide des méthodes
    décrites au chapitre [\"Déplacement du
    curseur\"](#HDR-MovingCursor).
-   Sélectionnez les pistes contenant l\'audio que vous souhaitez
    déplacer, et assurez-vous que les autres pistes ne soient pas
    sélectionnées.
-   Ouvrir le sous-menu \"Aligner les Pistes\" du menu \"Pistes\" et
    choisissez le sous-menu \"Commencer au Curseur/Début de la
    Sélection\".

Note : si plus d\'une piste ont été sélectionnées, et le son de ces
pistes commençait à différents moments, l\'audio de toutes les pistes
est déplacé par la même quantité, et donc l\'audio le plus ancien est
positionné à l\'emplacement du curseur.

Si vous voulez déplacer l\'audio d\'une ou plusieurs pistes, de manière
qu\'il se termine à un certain moment souhaité, il vous suffit de
modifier la troisième étape en utilisant le sous-menu \"Terminer au
curseur/ début de la sélection\".

Comme autre exemple, si vous voulez décaler une ou plusieurs pistes
d\'un certain laps de temps, alors :

-   Sélectionnez la ou les pistes que vous voulez décaler dans le temps,
    et assurez-vous que les autres pistes ne soient pas sélectionnées.
-   Appuyez sur \"J\" pour déplacer le curseur vers le début de l\'audio
    dans la ou les pistes sélectionnées.
-   Appuyez sur \"control + F6\" pour amener le focus dans la barre
    d\'outils de sélection,
-   tapez \"Tab\" pour atteindre le bouton de configuration de la barre
    d\'outils de sélection et choisir l\'option \"début et durée de la
    sélection\".
-   tapez \"Tab\" pour atteindre la zone d\'édition \"Début\".
-   suivant que vous voulez les déplacer dans le temps, vers l\'avant ou
    vers l\'arrière, vous devez incrémenter ou décrémenter le temps de
    la zone. Par exemple, si vous souhaitez déplacer l\'audio vers
    l\'avant de 1,5 secondes :
-   tapez \"Fin\" pour amener le focus sur le chiffre des centièmes.
-   tapez \"flèche gauche\" pour se positionner sur le chiffre des
    dixièmes.
-   tapez \"flèche haut\" cinq fois pour incrémenter ce chiffre de cinq
    unités.
-   tapez \"flèche gauche\" pour atteindre le chiffre des secondes.
-   tapez \"Flèche haut\" pour incrémenter ce chiffre d\'une unité.
-   Ouvrir le sous-menu \"Aligner les pistes\" du menu \"Pistes\" et
    choisissez le sous menu \"Commencer au Curseur/Début de la
    Sélection\". Cela déplace les données dans les pistes sélectionnées,
    de sorte que celles-ci maintenant commencent à la nouvelle position
    du curseur.

Note : si vous êtes désireux de déplacer une piste que vous avez
enregistrés et qui n\'est pas alignées avec les pistes existantes, vous
pouvez avoir besoin de déplacer le point de départ de l\'audio à un
temps antérieur à 0.

Parce que vous ne pouvez pas déplacer le curseur avant le temps zéro, la
méthode ci-dessus doit être adaptée comme suit :

-   dans la deuxième étape, vous appuyez sur la touche \"K\" pour passer
    à la fin de l\'audio des pistes sélectionnées.
-   dans la cinquième étape, utilisez le sous menu \"Terminer au
    curseur/début de la sélection\".

Notez qu\'Audacity peut avoir une correction automatique de latence.

## Fondus

Lorsque vous avez plus d\'une piste dans le projet, vous voudrez
peut-être fondre certaines pistes lorsque l\'audio d\'autres pistes
commence et se termine. Par exemple, s\'il y a une musique
d\'introduction avant le début d\'un son parlé, vous voudrez peut-être
commencer à baisser la musique juste avant le début du discours.

Les effets de fondu montant et descendant ont déjà été mentionnés dans
le guide, et ceux-ci s\'estompent simplement vers le haut ou vers le
bas, le début et la fin des fondus étant soit à zéro, soit à 100 % de
l\'amplitude d\'origine. Les deux sections suivantes décrivent les
effets Auto Duck et Adjustable Fade, qui vous permettent d\'effectuer
des fondus plus complexes.

### Effet Auto Duck

L\'effet Auto Duck réduit le volume de l\'audio sélectionné pendant les
périodes où le niveau d\'une autre piste, dépasse un certain seuil. La
piste utilisée comme piste de contrôle est la dernière piste non
sélectionnée qui se trouve juste en dessous d\'une piste sélectionnée.
Ainsi, par exemple, si vous avez une piste musicale et une piste vocale
dans le projet, et que vous souhaitez réduire le volume de la musique
lorsqu\'il y a de la parole dans la piste vocale :

-   Assurez-vous que la piste musicale est la première piste. Si ce
    n\'est pas le cas, vous pouvez déplacer une piste vers le haut ou
    vers le bas de la table des pistes en ouvrant son menu et en
    choisissant Déplacer la piste vers le haut ou Déplacer la piste vers
    le bas respectivement.
-   Assurez-vous que la piste vocale n\'est pas sélectionnée.
-   Sélectionnez tous les fichiers audio de la piste musicale. Pour ce
    faire, assurez-vous d\'abord que la piste est sélectionnée.
    Sélectionnez ensuite une plage de temps qui inclut tout l\'audio de
    la piste : appuyez sur J pour déplacer le curseur au début de
    l\'audio de la piste sélectionnée, puis appuyez sur Maj + K pour
    sélectionner à partir du curseur jusqu\'à la fin de l\'audio de la
    piste sélectionnée.
-   Dans le menu Effets, ouvrez la boîte de dialogue Auto Duck, et si
    vous êtes satisfait des paramètres par défaut, appuyez simplement
    sur Entrée pour appuyer sur le bouton OK par défaut.

Ce sont les différents paramètres Auto Duck:

-   Duck amount. Il s\'agit de la quantité de réduction de volume de
    l\'audio sélectionné pendant les périodes où le niveau des pistes de
    contrôle dépasse le seuil. Sa valeur par défaut est -12dB.
-   Pause maximale. Si le temps entre deux périodes où le niveau de la
    piste de contrôle dépasse le seuil est inférieur au paramètre
    Maximum pause, alors l\'audio sélectionné continue d\'être atténué
    pendant ce temps - il n\'y a pas de fondu vers le haut puis de fondu
    vers le bas.

Si, par exemple, la piste de contrôle contient de la parole, alors s\'il
y a des pauses inférieures à la pause maximale, alors l\'audio
sélectionné continue d\'être atténué pendant cette période. La valeur
par défaut de la pause maximale est de 1 seconde. Notez que quel que
soit ce réglage, la pause maximale est toujours au moins égale à la
somme des longueurs de fondu externes, qui sont décrites ci-dessous.

-   Longueurs de fondu. Le temps pendant lequel le volume de l\'audio
    sélectionné est réduit au volume réduit est composé de deux parties.

Le volume de l\'audio sélectionné peut commencer à baisser avant que le
niveau de la piste de contrôle ne commence à dépasser le seuil. Cet
intervalle de temps est connu sous le nom de longueur de fondu
extérieur, car il se produit en dehors du temps où le seuil est dépassé
et sa valeur par défaut est de 0,5 seconde. De plus, le volume peut
finir de baisser après que le seuil commence à être dépassé. Cet
intervalle est connu sous le nom de longueur de fondu intérieur, car il
se produit à l\'intérieur du temps où le seuil est dépassé, et sa valeur
par défaut est de 0 seconde. De manière tout à fait similaire, le temps
pendant lequel le volume de l\'audio sélectionné est ramené en arrière
est également composé de deux parties :

-   Les longueurs de fondu vers le haut interne et externe, qui ont des
    valeurs par défaut de 0 et 0,5 seconde respectivement.
-   Seuil. L\'audio sélectionné est atténué pendant les périodes où le
    niveau de la piste de contrôle dépasse ce seuil, et sa valeur par
    défaut est de -30 dB.

### Effet de fondu ajustable

Cet effet peut être utilisé de deux manières, selon le réglage de la
liste déroulante \"Préréglage pratique\" :

-   Lorsque cette liste déroulante est définie sur Aucun, vous pouvez
    définir les autres commandes pour produire des fondus qui ne
    commencent et ne se terminent pas nécessairement à zéro et 100 % de
    l\'amplitude d\'origine.
-   Les autres options de la zone de liste déroulante produisent des
    fondus avec une variété de formes, mais qui commencent et se
    terminent à zéro ou à 100 % de l\'amplitude d\'origine.

La boîte de dialogue \"Fondu ajustable\" contient les commandes
suivantes :

-   la liste déroulante \"Type de fondu\". Les types \"Fondu en
    ouverture\" ou \"Fondu en fermeture\" sont des fondus linéaires.
    Pour les types \"Courbe-s vers le haut\" et \"Courbe-s vers le
    bas\", le taux de changement du gain varie tout au long du fondu :
    il commence à un petit taux de changement, augmente jusqu\'à un
    maximum à mi-chemin, puis diminue jusqu\'à un petit à la fin. Vous
    constaterez peut-être qu\'ils sonnent mieux que les types linéaires.
-   la Zone d\'édition et le curseur \"Ajustement fondu milieu (%)\". La
    valeur par défaut de la zone d\'édition est de zéro pour cent et
    l\'utilisation d\'autres valeurs ne sera pas décrite dans ce guide.
-   la zone déroulante \"Début/Fin\". Cela spécifie les unités pour les
    deux zones d\'édition qui suivent cette liste déroulante. Les
    options sont \"% de l\'originel\" et \"db gain\".
-   les zones d\'édition \"Début (ou fin)\" et \"Fin (ou début)\". Ces
    deux zones d\'édition doivent contenir les valeurs du gain au début
    et à la fin du fondu. Notez que l\'ordre des deux valeurs n\'a pas
    d\'importance. Si la liste déroulante \"Type de fondu\" a été
    définie sur un fondu vers le bas, la plus élevée des deux valeurs
    sera utilisée pour le début du fondu et la plus faible des deux
    valeurs pour la fin du fondu. Et de même pour un fondu vers le haut.
-   la liste déroulante \"Réglage pratique\", qui a la valeur par défaut
    \"Aucun sélectionné\". Les autres options sont des fondus de
    différentes formes. Lorsque l\'une de ces options est choisie, les
    paramètres des commandes précédentes sont ignorés et le début et la
    fin du fondu sont soit à zéro, soit à 100 % de l\'amplitude
    d\'origine.

Comme exemple d\'utilisation de cet effet, disons que vous voulez
réduire l\'audio d\'une piste à 50 % de l\'original, puis rester à ce
niveau jusqu\'à la fin de la piste :

-   Assurez-vous que la piste est sélectionnée et qu\'aucune autre piste
    n\'est sélectionnée.
-   Sélectionnez une plage de temps pour le fondu initial vers le bas.
-   Ouvrez le dialogue \"Fondu ajustable\". Réglez le type de fondu sur
    \"Fondu en fermeture\" ou \"Courbe-S vers le bas\", \"début/fin\"
    comme\" à \"% de l\'originel\", et les deux zones d\'édition
    suivantes sur 100 et 50 (ou bien 50 et 100). Appuyez sur Entrée. Le
    fondu est appliqué.
-   La plage de temps reste sélectionnée. Appuyez sur la flèche droite
    pour désélectionner la plage de temps et déplacez le curseur à
    l\'extrémité droite de cette plage de temps. Sélectionnez une plage
    de temps à partir de ce point jusqu\'à la fin de l\'audio dans la
    piste.
-   Ouvrez le dialogue \"Fondu ajustable\". Définissez les zones
    d\'édition \"Début\" et \"Fin\" sur 50 %, puis appuyez sur Entrée.

## Verrouillage de la synchronisation des pistes {#HDR-TrackSyncLock}

L\'idée de verrouillage de la synchronisation des pistes est d\'essayer
et de garder un groupe de pistes qui se synchronisent les unes avec les
autres lors de certaines opérations, comme la suppression d\'audio, qui
affecte le placement de l\'audio d\'une des pistes dans le groupe de
pistes.

Supposez que vous ayez deux pistes audio et que leur synchronisation a
été verrouillé :

Si vous sélectionnez une plage de temps dans une des pistes et que vous
supprimiez l\'audio de cette plage, l\'audio de l\'autre piste sera
aussi supprimé dans la même plage.

Tout le reste de l\'audio des deux pistes est toujours synchronisé.

De la même façon avec seulement deux pistes qui sont verrouillées en
synchronisation :

Si vous sélectionnez une piste, et que vous colliez des fichiers audio
dans cette piste à la position du curseur, alors un silence de même
durée que l\'audio collé est collé dans l\'autre piste à la position du
curseur.

Le commutateur de verrouillage de synchronisation se configure à l\'aide
du sous-menu \"Synchro-verrouiller les pistes (marche/arrêt)\" du menu
\"Pistes\".

Il est désactivé par défaut.

S\'il n\'y a que des pistes audio dans le projet, alors il n\'y a qu\'un
seul groupe de verrouillage de synchronisation.

Les pistes du projet peuvent être divisée en plusieurs groupes à l\'aide
de d\'un marqueur de piste.

Chaque piste audio qui suit immédiatement un marqueur de piste démarre
un nouveau groupe de pistes.

Lorsque plusieurs pistes sont verrouillées en synchronisation, une icône
correspondante est affichée dans la piste et l\'indication
\"verrouillage de synchronisation sélectionné\" est ajouté au nom de la
piste.

# Marqueurs {#HDR-Labels}

Un Marqueur représente un temps précis ou une plage de temps spécifique,
et peut être nommé.

Un marqueur représentant un temps est appelé marqueur de position, un
marqueur représentant une plage de temps est appelé marqueur de région.

Les marqueurs sont stockés dans une piste des marqueurs. Il peut y avoir
plusieurs pistes de marqueurs dans un projet, mais normalement une seule
piste suffit.

Vous pouvez marquer une position ou une plage de temps comme décrit dans
la section suivante pour y revenir plus tard en utilisant les commandes
de déplacement dans les marqueurs (voir chapitre [\"Déplacement à un
marqueur\"](#HDR-MovingToLabel)).

De plus, un certain nombre d\'outils dans le menu \"analyse\" vous
permet d\'ajouter une piste de marqueurs au projet qui contient leurs
résultats d\'analyse. Par exemple, l\'outil \"Trouveur de pulsations\"
génère une piste de marqueurs contenant des marqueurs à des points où
l\'audio a une pulsation.

## Création d\'un marqueur

Il existe deux commandes pour créer un marqueur, et les deux se trouvent
dans le sous-menu \"Marqueurs \" du menu \"Édition\" :

-   Ajouter un marqueur à la Sélection (raccourci \"control + B\") :
    sans plage de temps sélectionnée, un marqueur de position à la
    position du Curseur est créé. S\'il y a une plage de temps
    sélectionnée, un marqueur de région pour cet intervalle de temps est
    créé.
-   Ajouter un marqueur à la position de Lecture (raccourci \"Control +
    M\") : un marqueur de position à la position de Lecture ou
    d\'enregistrement est créé.

Pour ces commandes, il existe une option permettant de choisir si le nom
pour un nouveau marqueur doit être saisi dans une boîte de dialogue ou
dans une zone d\'édition de la piste des marqueurs.

La deuxième option n\'est pas très accessible pour les utilisateurs de
lecteurs d\'écran, et il est donc recommandé d\'utiliser l\'option boîte
de dialogue.

Dans les \"Préférences\", dans la sous-catégorie \"Comportements des
pistes\" de la catégorie \"Piste\", il y a une case à cocher \"Utiliser
un dialogue pour nommer un nouveau marqueur \", qui n\'est pas cochée
par défaut, mais que vous devez cocher.

L\'utilisation de ces commandes pour créer des marqueurs à l\'aide de
ces deux options est décrite ci-après.

Tout d\'abord, en utilisant une boîte de dialogue pour le nom :

-   Choisissez l\'une des commandes dans le sous-menu \"Marqueurs\" du
    menu \"Édition\" ou appuyez sur son raccourci. Une boîte de dialogue
    \"Nouveau marqueur\" s\'ouvre et la zone d\'édition du nom est sous
    le focus.
-   Tapez le nom du marqueur (facultatif), puis appuyez sur \"Entrée\"
    pour appuyer sur le bouton \"OK\", qui est le bouton par défaut de
    la boîte de dialogue. Le nouveau marqueur est ajouté à une piste de
    marqueurs, ce qui est :
-   soit la piste focalisée, s\'il s\'agit d\'une piste de marqueurs.
-   soit la première piste de marqueurs en dessous de la piste
    focalisée, si une telle piste existe.
-   soit une nouvelle piste de marqueurs ajoutée aux pistes existantes.
-   Le focus revient à la piste d\'origine.

Pour utiliser ces commandes pour ajouter des marqueurs et sans utiliser
l\'option Boite de dialogue :

-   Soit vous choisissez l\'une d\'elles dans le sous-menu \"Marqueurs\"
    du menu \"Édition\",
-   soit vous utilisez son raccourci.

Si la piste focalisée n\'est pas une piste de marqueurs, la première
piste de marqueurs en dessous de cette piste devient la piste focalisée,
si une telle piste existe. S\'il n\'y en a pas, une nouvelle piste de
marqueurs est ajoutée aux pistes existantes et devient la piste
focalisée.

Dans la piste de marqueurs focalisée, un nouveau marqueur est créé et
une zone d\'édition s\'ouvre pour entrer un nom pour le marqueur.
Malheureusement, votre lecteur d\'écran ne dit pas que le focus est
maintenant sur cette zone d\'édition.

Tapez un nom pour le marqueur (facultatif), puis appuyez sur Entrée pour
fermer la zone d\'édition.

Pour la commande \"Ajouter un marqueur à la position de lecture\", le
focus est ensuite renvoyé à la piste d\'origine.

## Déplacement à un marqueur {#HDR-MovingToLabel}

Il existe deux commandes pour aller à un marqueur. Pour déterminer
quelle est le marqueur le plus proche, la position d\'un marqueur de
région est considérée comme le début de sa plage de temps Ce sont :

-   Passer au prochain marqueur (raccourci \"Alt + Flèche droite\") :
    pour se déplacer au plus proche marqueur après le curseur ou le
    début d\'une plage de temps sélectionnée. S\'il n\'y a plus d\'autre
    marqueur, le déplacement se fait au premier marqueur de la piste.
-   passer au marqueur précédent : (raccourci \"Alt + Flèche gauche\") :
    pour se déplacer au plus proche marqueur avant le curseur ou au
    début d\'une plage de temps. S\'il n\'y a plus d\'autre marqueur, le
    déplacement se fait au dernier marqueur de la piste.

Ces commandes utilisent les marqueurs d\'une seule piste de marqueurs,
pas de toutes les pistes de marqueurs.

S\'il y a qu\'une seule piste de marqueurs dans le projet (ce qui est
habituellement le cas), les commandes utilisent cette piste même si elle
n\'a pas le focus.

S\'il y a plusieurs pistes de marqueurs c\'est la première piste de
marqueurs (si elle existe) qui suit la piste audio qui est utilisée.

Lorsque ces commandes atteignent un marqueur :

-   si le marqueur est un marqueur de position, le curseur est placé à
    la position du marqueur.
-   si le marqueur est un marqueur de région, la plage de temps associée
    au marqueur est sélectionnée.

Dans les deux cas, Jaws et NVDA indique le nom du marqueur, s\'il en a
une, suivi de sa position dans la piste des marqueurs.

Si ces commandes sont utilisées pendant la lecture, la lecture continue
après le déplacement au marqueur.

Note que si une piste de marqueurs est sous le focus, \"Tab\" et
\"majuscule + Tab\" permettent de passer au marqueur disponible suivant
ou précédent. Cependant l\'utilisation de ces touches n\'est pas
recommandée. En plus de passer à un marqueur, ces touches ouvrent
également la boite d\'édition du nom du marqueur, boite qui n\'est pas
accessible.

Si vous avez accidentellement utilisé l\'une de ces touches, alors vous
pouvez fermer la boîte d\'édition en appuyant sur \"Entrée\".

Si vous avez besoin de modifier le nom du marqueur, vous pouvez utiliser
la boîte de dialogue \"Éditer les marqueurs\", décrite dans la section
suivante.

## Édition des marqueurs

L\'utilisation de la boite de dialogue \"Edition des marqueurs\" permet
le renommage d\'un marqueur, la suppression d\'un marqueur, et
éventuellement être une alternative de déplacement d\'un marqueur.

Pour ouvrir la boîte de dialogue, ouvrez le menu \"Edition\", ouvrez le
sous-menu \"Marqueurs», puis choisissez \"Éditer les marqueurs\".

La boîte de dialogue comporte les éléments suivants :

-   Un tableau qui contient les détails des marqueurs de toutes les
    pistes de marqueurs du projet (décrit dans la section suivante).
-   les boutons \"Insérer avant\", \"Insérer après \" et \"Supprimer\".
-   les boutons \"Importer\" et \"Exporter\" pour l\'importation de
    marqueur à partir ou l\'exportation de marqueurs dans un fichier
    texte.

Lorsque vous ouvrez la boîte de dialogue, l\'une des cellules du tableau
a le focus et est sélectionné. En supposant que le projet contient au
moins un marqueur, un des noms de ces marqueurs est sélectionné.

Pour déterminer celui dont le nom est sélectionné (la position d\'un
marqueur de région est considérée comme le début de sa plage de temps) :

-   Si le curseur ou le début d\'une période sélectionnée est à la
    position du marqueur, le nom du marqueur est sélectionné.
-   Dans le cas contraire, le nom du marqueur qui est juste avant le
    curseur est sélectionné.
-   S\'il n\'y a pas de marqueur avant le curseur, le nom du premier
    marqueur de la piste de marqueurs est sélectionné.

Lorsque vous fermez la boîte de dialogue, soit en appuyant sur le bouton
\"OK\" ou sur le bouton \"annuler\", Le curseur ou une plage de temps
est défini à l\'aide du marqueur qui est sélectionné dans le tableau,
selon que le marqueur est un marqueur de position ou de région.

Note : l\'ouverture de la boîte de dialogue lorsqu\'il n\'y a pas de
marqueur dans le projet n\'est pas très recommandée. Si vous faites
ainsi, le tableau contient une seule ligne et le nom de la piste de
marqueurs est sous le focus et est sélectionné. Le nom du marqueur est
vide. Si vous appuyez sur le bouton \"OK\", une nouvelle piste de
marqueurs est ajoutée dans le projet, et cette piste contient un
marqueur sans nom.

La meilleure chose à faire si vous ouvrez la boîte de dialogue dans ce
cas c\'est d\'appuyer sur le bouton \"Échapp\" pour fermer la boite de
dialogue.

Cependant, même si vous annulez, le curseur est positionné au temps 0 et
donc vous perdez la position précédente du curseur.

### Tableau des marqueurs

Le tableau a six colonnes : le nom de la piste de marqueurs, le nom du
marqueur, le début et la fin de l\'intervalle de temps et les basses et
hautes fréquences.

Si un marqueur est un marqueur de position, le début et la fin de
l\'intervalle de temps ont la même valeur.

Les basses et les hautes fréquences sont pour une sélection spectrale et
ne sont pas étudiées dans ce guide.

Il y a plusieurs moyens de sélection d\'une cellule dans le tableau :

-   sélection de la cellule suivante : appuyez sur Tab\" ou \"flèche
    droite\". Si la dernière cellule est sélectionnée, l\'appui sur
    \"Tab\" fait passer au bouton \"Insérer\".
-   sélection de la cellule précédente : appuyez sur \"majuscule + Tab
    ou \"flèche gauche\". Si la première cellule est sélectionnée,
    l\'appui sur \"majuscule + Tab\" fait passer au bouton \"Annuler\"
    au bas de la boite de dialogue.
-   sélection de la cellule juste en dessous ou au-dessus de la cellule
    courante : appuyez sur \"Flèche bas\" ou \"Flèche haut\"
    respectivement.
-   sélection de la première ou la dernière cellule : appuyez sur
    \"control + début\" ou \"control+ fin\", respectivement.

Note : comme \"Tab\" peut être utilisé pour sélectionner une cellule
dans le tableau, il y a un couple de touches qui vous permet de vous
déplacer directement à l\'extérieur du tableau. De n\'importe quelle
cellule du tableau, \"control + tab\" et \"control + majuscule + Tab\"
fait passer, respectivement, à l\'élément situé après ou avant le
tableau.

### Suppression d\'un marqueur

-   Sélectionnez l\'une des cellules de la ligne représentant le
    marqueur.
-   Il y a alors deux solutions :
-   La première est d\'appuyer sur \"control+ Tab\" pour sortir du
    tableau en allant au bouton \"Insérer\", \"puis Tab\" pour se placer
    sur le bouton \"Supprimer\" et appuyez dessus.
-   La deuxième est d\'utiliser la touche d\'accès rapide \"alt+s\" pour
    appuyer sur le bouton \"Supprimer\" sans bouger du tableau.

### Modification des cellules

Le lecteur d\'écran indique toutes les cellules comme étant des zones
d\'édition. Juste l\'ignorer.

Aucune des cellules ne se comportent comme des zones d\'édition et la
façon dont vous aurez à modifiez une cellule dépend du type de la valeur
qu\'elle contient.

L\'édition du nom d\'un marqueur, du temps de début et du temps de fin
sont décrites dans les chapitres suivants.

Dans tous les cas, vous pouvez validez la modification en appuyant sur
\"Entrée\" ou \"Tab\". La différence entre les deux est que \"Entrée\"
vous déplace à la cellule immédiatement au-dessous de la cellule en
cours, tandis que \"Tab\" fait passer à la prochaine cellule. En outre,
dans les deux cas, vous pouvez annuler l\'édition en appuyant sur
«Échapp ».

### Modification du nom du marqueur

Vous pouvez soit remplacer ou modifier le nom actuel :

-   Pour remplacer le nom actuel : taper du texte.
-   Pour modifier le nom : appuyez sur \"F2\", qui sélectionne le texte.
    Pour désélectionner le texte avant de le modifier, appuyez sur
    \"Flèche droite\" ou \"Fin\" qui positionne le curseur d\'édition
    immédiatement après le texte existant, ou appuyez sur \"Début\" qui
    positionne le curseur d\'édition sur le premier caractère du texte.

Pour validez la modification appuyez sur \"Tab\" ou \"Entrée». Pour
annuler la modification appuyez sur \"Échapp\"

### Modification du temps de début et de fin

-   Appuyez Sur \"F2\" : Vous pouvez maintenant modifier le temps
    exactement de la même manière que vous le faites pour définir la
    position audio ou le début ou fin de sélection.
-   Pour valider la modification appuyez sur \"Tab\" ou \"Entrée\", ou
    pour l\'annuler appuyez sur \"Échapp\".

Notez que, par défaut, le format du temps du début et de la fin des
temps est le même que celui utilisé dans les boites de sélection
numérique de la barre d\'outils \"Sélection\".

Vous pouvez modifier temporairement ce format en utilisant le menu
contextuel dans la zone d\'édition. Ce changement de format ne
s\'applique qu\'aux boites de sélection numérique de la boite de
dialogue et n\'est pas enregistré lorsque la boîte de dialogue est
fermée.

## Sélection de marqueur

Actuellement, la seule raison pour laquelle un utilisateur de lecteur
d\'écran sélectionne un marqueur est de pouvoir utiliser les commandes
de glissement temporel pour le déplacer, ce qui est décrit au chapitre
suivant.

Pour sélectionner un marqueur, la piste de marqueurs contenant le
marqueur doit être au centre de l\'attention.

Vous pouvez ensuite utiliser les touches Tab ou Maj + Tab pour
sélectionner respectivement le marqueur suivant ou précédent.

Tout comme les commandes pour passer au marqueur suivant ou précédent,
ces commandes définissent également la position du curseur ou une plage
de temps sélectionnée, selon que le marqueur sélectionné est
respectivement un marqueur de point ou de plage.

## Décalage temporel de marqueurs {#HDR-TimeShiftingLabel}

Les commandes de Décalage temporel vers la gauche et de Décalage
temporel vers la droite peuvent être utilisées pour ajuster les
positions des clips, comme décrit dans le chapitre \"Décalage temporel
des clips\" ci-dessous. Vous pouvez également les utiliser pour ajuster
les positions des marqueurs. Pour ajuster la position d\'un marqueur,
sans ajuster la position de l\'audio ou de toute autre marqueur :

-   Assurez-vous que toutes les pistes à l\'exception de la piste de
    marqueur contenant le marqueur ne sont pas sélectionnées.

Peu importe que la piste de marqueur elle-même soit sélectionnée ou non.

-   Sélectionnez un marqueur à l\'aide des touches Tab et Maj + Tab,
    comme décrit au chapitre précédent.
-   Utilisez les commandes \"Glissement temporel gauche\" et
    \"Glissement temporel droit\" pour déplacer le marqueur par une
    petite quantité vers la gauche ou la droite respectivement.

# Clips {#HDR-Clips}

Dans le reste de ce document, il a été supposé qu\'une piste audio ne
contient qu\'un seul tronçon de données audio.

Toutefois, une piste audio peut contenir plusieurs tronçons distincts et
ils sont appelées clips.

Dans Audacity, les clips ne peuvent pas se chevaucher.

Il y a plusieurs situations où vous pouvez vous retrouver avec plus
d\'un clip sur une piste :

-   Lorsque vous enregistrez à la fin d\'un clip existant, l\'audio
    enregistré est ajouté en tant que clip distinct.
-   L\'utilisation de diverses commandes de division, décrites
    ci-dessous.
-   Coller de l\'audio dans une piste qui contient déjà un clip et à une
    position extérieure au clip.

Chaque clip peut avoir un nom, et lorsqu\'un clip est créé, un nom lui
est automatiquement attribué. Voici quelques unes des règles pour la
génération de ces noms :

-   Souvent, le nom du clip est simplement le nom de la piste.
-   Lorsque vous enregistrez, le nom du clip contenant l\'enregistrement
    est le nom de la piste, suivi de #n, où n est le nombre de fois que
    vous avez enregistré sur cette piste.
-   Si vous divisez un clip à l\'aide de l\'une des commandes de
    division décrites ci-dessous, tous les clips nouvellement créés
    portent le même nom que le clip d\'origine.

De plus à ces noms générés automatiquement, vous pouvez également
renommer un clip comme vous le souhaitez, comme décrit au chapitre
[\"Renommage d\'un clip](#HDR-ClipRenaming) ci-dessous.

## Déplacement de curseur

Il y a des commandes pour le déplacement aux limites du clip précédent
ou suivant que l\'on trouve dans le sous-menu \"Petit saut de curseur
à\" du menu \"Transport\". Ce sont :

-   \"Délimitation du clip précédent\" : déplace le curseur à la
    prochaine limite de clip avant le curseur ou au début de la période
    sélectionnée.
-   \"délimitation du clip suivant\" : déplace le curseur à la prochaine
    limite de clip après le curseur ou à la fin de la période
    sélectionnée.

Si quelques pistes audio sont sélectionnées, ces commandes cherchent les
limites des clips dans ces pistes. Sinon, les limites sont cherchées
dans toutes les pistes du projet.

Lorsque le curseur est déplacé vers la limite d\'un clip, votre lecteur
d\'écran indique soit début soit fin, suivi du numéro du clip, suivi du
nom de la piste. Dans le cas où deux clips sont immédiatement l\'un à
côté de l\'autre et que la limite du clip est à la fois la fin d\'un
clip et le début du suivant, votre lecteur d\'écran le dit.

## Sélection d\'une plage de temps

Il y a deux ensembles de commandes pour la sélection des plages de temps
qui impliquent les limites de clips.

Elles sont décrites dans les deux chapitres suivants.

Dans les deux cas, si des pistes audio sont sélectionnées, les commandes
utilisent les clips de ces pistes. Sinon, les commandes utilisent les
clips de toutes les pistes audio.

### Sélection du clip précédent ou suivant

Les commandes pour la sélection du clip suivant ou précédent se trouvent
dans le sous-menu «Délimitation du clip\" du menu \"Sélection\" et son :

-   clip suivant : raccourci \"alt+,\".
-   clip précédent : raccourci \"alt+.\" (Voir le chapitre [\"Les
    raccourcis gênants\"](#HDR-BracketShortcuts)).

Lorsqu\'un clip est sélectionné, votre lecteur d\'écran indique le
numéro du clip dans la piste, suivi du nom de la piste.

Veuillez noter que vous pouvez facilement utiliser ces commandes pour se
déplacer aux limites du clip. Juste sélectionnez le clip, puis appuyez
sur \"flèche gauche\" ou \"Flèche droite\" pour annuler la sélection et
positionner le curseur au début ou la fin du clip respectivement.

### Sélection avec les limites du clip

En plus des commandes décrites précédemment, deux autres commandes pour
la sélection de clip existent.

Elles se trouvent également dans le sous-menu \"Délimitation du clip\"
du menu \"Sélection\", mais n\'ont pas de raccourci affecté par défaut.
Ce sont :

-   \"Limite précédente du Clip au Curseur\" : fixe le début de la
    sélection à la limite du précédent clip.
-   \"Curseur à la Prochaine Limite du Clip\" : fixe la fin de la
    sélection à la limite du prochain clip.

Lorsque le début ou la fin de la plage de temps sélectionnée est défini
sur une limite de clip à l\'aide de ces commandes, votre lecteur
d\'écran donne les détails de la limite de clip, exactement de la même
manière que lorsque les commandes de déplacement du curseur sur une
limite de clip sont utilisées.

### Renommage d\'un clip {#HDR-ClipRenaming}

Comme dans le cas de nommer une nouvelle étiquette, pour renommer un
clip, il y a une option pour savoir si cela est fait en utilisant une
boîte d\'édition dans une boîte de dialogue, ou une boîte d\'édition
dans la piste. Et encore une fois, l\'utilisation de la boîte de
dialogue est beaucoup plus accessible pour les utilisateurs de lecteurs
d\'écran, et il est donc recommandé d\'utiliser l\'option de boîte de
dialogue. En fait, l\'option est définie en utilisant le même paramètre
que celui utilisé pour déterminer si une boîte de dialogue est utilisée
pour le nom d\'une nouvelle étiquette. Dans les Préférences, dans la
catégorie \"Comportements des pistes\", il y a une case à cocher
\"Utiliser la boîte de dialogue pour le nom d\'un nouveau label\", qui
n\'est pas cochée par défaut, mais que vous pouvez cocher.

Pour renommer un clip :

-   Sélectionnez un clip, à l\'aide des commandes de sélection du clip
    précédent ou suivant (Alt + virgule ou Alt + point).
-   Dans le menu Edition, choisissez Renommer le clip (Ctrl + F2).

Une boîte de dialogue Set Wave Clip Name s\'ouvre et le contenu de la
zone d\'édition du nom est initialement sélectionné.

-   Tapez un nom et appuyez sur Entrée.

## Diverses commandes de découpe

### Fractionnement

Pour fractionner un clip en deux clips d\'une piste sélectionnée :

-   Placez le curseur où vous souhaitez fractionner le clip.
-   dans le menu \"Édition», ouvrez le sous-menu \"Délimitations du
    clip\" et sélectionnez \"Scinder\".

Vous pouvez également fractionner un clip en trois parties à l\'aide de
cette méthode, si vous sélectionnez un intervalle de temps.

### Commandes \"Supprimer-séparer\" et \"couper-séparer\"

Vous pouvez utiliser les commandes \"supprimer-séparer\" et
\"couper-séparer\" du sous-menu \"Suppression spéciale\" du menu
\"Édition\" pour supprimer ou enlever l\'audio sélectionné, sans
affecter la position du contenu de la piste.

Ceci est en contraste avec les commandes de coupe et suppression
standard qui provoque des déplacements d\'audio.

L\'effet de la commande \"supprimer-séparer\" est le suivant : pour
chaque piste sélectionnées, l\'audio qui se trouve dans la plage de
temps sélectionnée est supprimé et la position de l\'audio qui reste est
inchangée. La piste devient vide dans cette plage de temps et la
position de toutes les données audio ultérieures dans la piste est
restée inchangée.

Par exemple, si dans une piste sélectionnée, la plage de temps se trouve
à l\'intérieure d\'un clip, ce clip est divisé en deux clips. Le premier
clip se termine au début de la plage sélectionnée. Il y a ensuite une
plage vide dont la longueur est la longueur de la plage sélectionnée,
puis le deuxième clip qui commence à la fin de la plage sélectionnée.

Comme autre exemple, si le début de la plage sélectionnée se trouve à
l\'intérieur d\'un clip, et sa fin est à la fin du clip, le clip est
raccourci. Il n\'y a pas de nouveau clip créé.

L\'effet de la commande \"couper-séparer\" est le même que celui de la
commande \"supprimer-séparer\", sauf que l\'audio qui est supprimé est
placé dans le presse-papier d\'Audacity, plutôt que d\'être tout
simplement supprimé.

### Scinder dans une nouvelle piste

La commande \"Scinder dans une nouvelle piste\" du sous-menu
\"Délimitation du clip\" du menu \"Édition\" place l\'audio sélectionné
dans une ou plusieurs autres pistes, sans affecter la position de
l\'audio restante dans la piste originale.

Pour chaque piste sélectionnée, les données audio dans la plage de temps
est supprimée, et donc, la piste se vide dans cette plage de temps et la
position des données audio restantes dans la piste est gardée inchangé.

Une nouvelle piste est ajoutée après la dernière piste, et l\'audio
supprimé y est collé à sa position originale.

Vous pouvez penser à \"Scinder dans une nouvelle piste\" comme étant
équivalent à la commande \"Couper-séparer\" suivi de l\'audio coupé qui
est collé dans une nouvelle piste à la même position que l\'audio
sélectionné d\'origine

### Détacher aux silences

Si l\'audio sélectionné contient des plages de silence complet, c\'est à
dire que l\'amplitude de l\'audio dans ces plages est 0, alors la
commande \"Détacher aux silences\" peut être utilisé pour supprimer ces
plages de l\'audio, laissant les clips séparés les uns des autres par
des plages de temps vides.

Pour chaque plage de l\'audio sélectionné, où l\'amplitude de l\'audio
est égal à zéro, les données audio sont supprimés, ce qui donne une
plage de piste vide et la position d\'une quelconque des données audio
de la piste est laissé inchangé.

## Fusion de clips

Pour fusionner deux clips d\'une piste sélectionnée :

-   Sélectionnez une plage de temps de manière que le début de la plage
    de temps soit avant la fin du premier clip, et que la fin de la
    plage soit après le début du second clip. Ainsi, par exemple, vous
    pouvez fixer le début de la plage de temps au début du premier clip,
    et la fin de la plage à la fin du second clip.
-   fusionner avec la commande \"Fusionner\" du sous-menu \"Délimitation
    du clip\" du menu \"Édition\"(raccourci \"control +j\") : Les clips
    sont alors réunis et n\'en forme plus qu\'un seul. Tout l\'espace
    entre les clips est remplacé par du silence.

Dans la méthode ci-dessus, s\'il y a d\'autres clips entre les deux
clips, ils seront fusionnés dans le clip final.

## Décalage temporel des clips {#HDR-ClipTimeShifting}

Il existe deux commandes, \"Glissement temporel gauche\" et \"Glissement
temporel droit\", qui peuvent être utilisées pour déplacer soit un seul
clip, soit plusieurs clips. Le menu \"Extra\" contient un sous-menu
d\'édition, qui contient ces commandes. Pour plus d\'informations sur ce
menu Extra, consultez le chapitre [\"Menu Extra\"](#HDR-ExtraMenus) du
chapitre \"Préférences\". Par défaut, aucun raccourci n\'est attribué à
ces commandes, mais si vous utilisez fréquemment ces commandes, vous
souhaiterez probablement attribuer vos propres raccourcis.

Les commandes \"Glissement temporel gauche\" et \"Glissement temporel
droit\" déplacent le ou les clips d\'une petite quantité vers la gauche
ou vers la droite respectivement.

Comme dans le cas de l\'utilisation des touches fléchées pour déplacer
le curseur, la quantité de mouvement dépend du paramètre Zoom et la
taille du pas peut être ajustée, comme décrit au chapitre [\"Longueur
des sauts faits avec les flèches droite et gauche\"](#HDR-JumpSize).

Avertissement de bogue. Malheureusement, ces commandes ont fait planter
Audacity 3.1.0, mais ce problème a été corrigé dans Audacity 3.1.1.

### Déplacement d\'un seul clip

-   Passez à la piste qui contient le clip que vous souhaitez déplacer.
-   Déplacez le curseur de manière à ce qu\'il se situe dans le clip.
-   utilisez les commandes \"Glissement temporel gauche\" ou
    \"Glissement temporel droit\" pour déplacer le clip et le curseur
    d\'un petit saut. Si le clip ne peut pas être déplacé, car il est
    juste à côté d\'un autre clip par exemple, un message
    d\'avertissement est affiché.

Si le curseur est positionné à une limite de clip qui est à la fois la
fin d\'un clip et le début du clip suivant, pour les commandes de
déplacement de clips, le curseur est considéré comme étant dans le
deuxième clip, et les commandes s\'appliqueront à ce clip.

À cause de cela, lorsque vous devez placer le curseur sur un clip pour
le déplacer, il est recommandé de ne pas positionnez le curseur à la fin
du clip.

Si le curseur est à la fin du clip et si vous utilisez plusieurs fois la
commande \"Glissement temporel droit\" le clip finit par être adjacent
au clip suivant. Le curseur sera considéré comme étant dans ce dernier
et c\'est ce clip, plutôt que le clip original qui va se déplacer. Il
est peu probable que cela soit ce que vous voulez.

### Déplacement de plusieurs clips adjacents

Pour déplacer un certain nombre de clips adjacents dans une piste :

-   Passez à la piste qui contient les clips à déplacer.
-   Sélectionnez la piste, les autres pistes ne doivent pas être
    sélectionnées.
-   sélectionnez une plage de temps de telle manière que le début de la
    sélection se trouve dans le premier clip à déplacer et que la fin de
    la sélection se trouve dans le dernier clip. Ainsi, par exemple,
    vous pouvez déplacer le curseur au début du premier clip, puis fixer
    la fin de la sélection à la fin du dernier clip.

Dans le cas où d\'autres pistes sont sélectionnées, en plus de la piste
sous le focus, tous les clips de ces pistes qui contiennent d\'audio
sélectionnés sont aussi déplacés.

### Déplacement de clips avec le verrouillage de Synchronisation des pistes activée

L\'utilisation du verrouillage de synchronisation de piste pour garder
un groupe de piste synchroniser dans le temps a été décrite dans le
chapitre [\"Verrouillage de la synchronisation des
pistes\"](HDR-TrackSyncLock).

Si le verrouillage de synchronisation des pistes est activé, lorsque
vous déplacez un seul clip ou un groupe de clips, d\'autres clips et
marqueurs peuvent être aussi déplacés.

Nous nous référerons aux clips qui seraient déplacé si le verrouillage
de synchronisation des pistes avait été désactivé comme étant
l\'ensemble original des clips à déplacer.

Si un clip chevauche dans le temps un clip de l\'ensemble de clips
d\'origine à déplacer, il sera également déplacé.

En fait, la règle est plus générale que cela. Pour tout clip, s\'il
existe une série de clips, commençant par ce clip et se terminant par un
clip dans l\'ensemble de clips d\'origine à déplacer de sorte que chaque
paire de clips adjacents de cette série se chevauche dans le temps,
alors ce clip sera également déplacé.

# Effets en temps réel {#HDR-RealTimeEffects}

Vous pouvez désormais ajouter un ou plusieurs effets en temps réel à une
piste. Contrairement à l\'application d\'un effet à l\'aide du menu
Effets, l\'ajout d\'un effet en temps réel à une piste ne modifie aucune
des données audio de la piste. Au contraire, lorsque vous lisez la
piste, ces effets sont appliqués en temps réel. Cela signifie que vous
pouvez modifier les paramètres de n\'importe lequel de ces effets
pendant la lecture et en entendre l\'effet. Et, en plus, à tout moment
de votre montage, vous pouvez revenir aux effets en temps réel d\'une
piste et modifier les paramètres, ou ajouter ou supprimer des effets. En
utilisant cette version d\'Audacity, vous pouvez utiliser un certain
nombre d\'effets intégrés d\'Audacity comme effets en temps réel :
Basses et aigus, Distorsion, Phaser, Reverb et Wahwah.

De plus, vous pouvez utiliser un certain nombre de plugins d\'effets,
notamment les plugins d\'effets VST et VST3. L\'utilisation des plugins
VST et VST3 à l\'aide d\'un lecteur d\'écran est décrite au chapitre
[\"Plugins\"](#HDR-Plugins).

Vous ajoutez et gérez les effets en temps réel pour la piste ciblée à
l\'aide du \"volet effets en temps réel\", qui est décrit au chapitre
suivant.

## Volet des effets en temps réel

Vous pouvez ouvrir le volet des effets en temps réel en ouvrant le menu
\"Effets\" et en choisissant \"Ajouter des effets en temps réel\", ou en
utilisant le raccourci par défaut, qui est la lettre \"E\".

Visuellement, le volet s\'affiche à gauche de la vue des pistes. Il
contient une liste de tous les effets en temps réel qui ont été ajoutés
à la piste ciblée, et vous pouvez l\'utiliser pour ajouter et supprimer
des effets et modifier les paramètres d\'effet.

Pour fermer le volet et passer à la vue des pistes, vous pouvez soit
utiliser la même commande que vous avez utilisée pour l\'ouvrir, soit
appuyer sur le bouton Fermer (ou la touche \"Échap)\".

Notez que lorsque le volet est ouvert, vous pouvez utiliser les touches
\"Contrôle + F6\" et \"Contrôle + Majuscule + F6\" pour passer aux
autres sections principales de la fenêtre Audacity sans fermer le volet,
mais vous ne trouverez peut-être pas le besoin de le faire très souvent.

Le volet Effets en temps réel contient les commandes suivantes :

-   Un bouton \"Power\", qui contrôle si l\'un des effets de la liste
    des effets est activé.
-   Un bouton de fermeture (Échap), qui ferme le volet, la vue de piste
    reprenant le focus.
-   Une liste d\'effets. Pour chaque effet, il y a trois boutons : un
    bouton \"Power\" qui contrôle uniquement cet effet ; un bouton qui
    porte le nom de l\'effet et qui ouvre une boîte de dialogue pour cet
    effet ; et un bouton \"Remplacer l\'effet\", qui ouvre un menu
    permettant de supprimer l\'effet ou de le remplacer par un autre
    effet.
-   Un bouton \"Ajouter un effet\". Cela ouvre un menu dans lequel, par
    défaut, les effets sont regroupés par type et par éditeur.
    Cependant, il existe un certain nombre d\'autres options pour la
    façon dont le menu est organisé, et le réglage pour cela peut être
    trouvé dans la catégorie \"Effets\" de la boîte de dialogue
    \"Préférences\", où dans le groupement des options d\'effet, il y a
    une liste déroulante \"Organisation des effets en temps réel\"
-   Si aucun effet n\'a été ajouté, il existe un lien pour regarder une
    vidéo sur les effets en temps réel.

Ainsi, pour exemple, pour ajouter un effet en temps réel à la piste
focalisée :

-   Ouvrez le menu Effets et choisissez Ajouter des effets en temps
    réel. Le volet des effets en temps réel s\'ouvre et devient le
    focus.
-   Tabulez jusqu\'au bouton Ajouter un effet, appuyez dessus et
    choisissez un effet dans le menu. L\'effet est ajouté à la liste des
    effets, de sorte que les trois commandes avant le bouton d\'ajout
    d\'effet sont maintenant le bouton \"Power\", le bouton d\'effet et
    le bouton de remplacement d\'effet pour l\'effet ajouté.
-   Donc, pour ouvrir la boîte de dialogue pour l\'effet ajouté, appuyez
    deux fois sur Majuscule + Tab pour accéder au bouton d\'effet, puis
    appuyez dessus. Une boîte de dialogue d\'effet en temps réel
    s\'ouvre et sa structure est décrite dans la section suivante.

## Boîte de dialogue d\'effet en temps réel

Le titre d\'une boîte de dialogue d\'effet en temps réel se compose du
nom de l\'effet, suivi d\'un tiret, suivi du nom de la piste. Et la
boîte de dialogue contient les commandes suivantes :

-   Un bouton bascule \"Activer\", qui a le même état que le bouton
    \"Power\" de l\'effet dans le \"volet des effets en temps réel\".
-   Les commandes pour l\'effet particulier.
-   Bien qu\'il n\'y ait pas de bouton Fermer, vous pouvez fermer la
    boîte de dialogue en appuyant sur \"Échap\".

Afin qu\'un utilisateur puisse facilement contrôler la lecture à l\'aide
du clavier sans avoir à remettre le focus sur la fenêtre principale,
presque toutes les frappes qui peuvent être utilisées dans la fenêtre
principale d\'Audacity peuvent être utilisées quand n\'importe quel
contrôle dans la boîte de dialogue a le focus.

Il y a un petit ensemble de frappes réservées qui sont utilisées pour
naviguer et interagir avec les commandes standard, plutôt qu\'Audacity.
Cependant, en raison de son utilisation pour démarrer et arrêter la
lecture, la barre d\'espace contrôle la lecture et ne peut pas être
utilisée pour interagir avec les commandes. C\'est en fait très
similaire lorsque vous interagissez avec les contrôles dans les barres
d\'outils de la fenêtre principale d\'Audacity. L\'utilisation de la
barre d\'espace pour contrôler la lecture affecte la façon dont vous
pouvez interagir avec deux types de contrôle : les boutons et les cases
à cocher. Dans le cas d\'un bouton, cela signifie simplement que vous ne
pouvez appuyer dessus qu\'avec Entrée, et non avec la barre d\'espace.
Dans le cas d\'une case à cocher, voici deux manières de la cocher ou de
la décocher :

-   La première consiste à utiliser la frappe Ctrl + Barre d\'espace,
    car par défaut, elle n\'est pas utilisée dans l\'ensemble complet de
    frappes par défaut d\'Audacity.
-   La seconde consiste à utiliser les deux touches standard mais peu
    utilisées pour décocher et cocher une case : moins et plus
    respectivement.

Sur les claviers britanniques et américains, vous pouvez utiliser les
deux touches à droite de la touche zéro sur la rangée supérieure du
clavier pour ces touches.

Après avoir ouvert l\'une de ces boîtes de dialogue d\'effets en temps
réel, vous pouvez revenir à la fenêtre principale d\'Audacity sans la
fermer, bien que vous ne souhaitiez peut-être pas le faire très souvent.
Les boîtes de dialogue avec ce comportement sont appelées boîtes de
dialogue non modales. Vous pouvez parcourir la fenêtre principale
d\'Audacity et toutes les boîtes de dialogue ouvertes sans mode en
appuyant sur \"Alt + F6\".

# Édition des Balises de métadonnées {#HDR-MetaDataTags}

Les Métadonnées sont des données qui décrivent d\'autres données et les
métadonnées pour les fichiers audio se compose d\'un certain nombre de
balises, où chaque balise est définie par une étiquette et par une
valeur.

L\'éditeur de balises de Métadonnées d\'Audacity vous permet de modifier
les valeurs d\'un certain nombre de préréglages de balises, et aussi de
créer vos propres balises personnalisées.

Vous pouvez ouvrir l\'éditeur de balises de Métadonnées à tout moment en
choisissant le sous-menu \"Métadonnées \" du menu \"Edition\".

En outre, si vous enregistrez de l\'audio dans l\'un des formats
standard, alors à moins d\'avoir désactivé l\'option appropriée,
L\'éditeur de balises de Métadonnées s\'ouvre automatiquement, comme
décrit au chapitre [\"Sauvegarde audio\"](#HDR-SavingAudio) ci-dessus.

L\'éditeur de balises de Métadonnées contient les éléments suivants :

-   Un tableau qui contient les étiquettes et les valeurs des balises
    (décrit au chapitre suivant).
-   les boutons \"Ajouter\", \"Retirer\" et \"Effacer\" qui sont
    utilisés pour l\'édition du tableau. L\'appui sur le bouton
    \"Effacer\" supprime toutes les valeurs des balises prédéfinies et
    celles des balises personnalisées. Les boutons pour ajouter ou
    supprimer des balises personnalisées sont décrits au chapitre
    [\"Création et modification de balises\"](#HDR-TagsEditing).
-   Une section genre : composée de boutons pour Modifier et
    Réinitialiser la liste des genres, tel que décrit au chapitre
    [\"Édition de la liste des genres\"](#HDR-EditingGenreList)
    ci-dessous.
-   une section modèle : non décrites dans ce guide.

## Description du tableau

Le tableau a deux colonnes : l\'Étiquette et la Valeur, et les 7
premières cellules de la colonne \"Étiquette\" contiennent les noms de
balises prédéfinis comme par exemple, le Nom de l\'Artiste et Titre de
la Piste. NVDA indique que les noms prédéfinis ne sont pas modifiables
en disant \"indisponible « après leurs noms.

Il y a un certain nombre de moyens de sélection d\'une cellule dans le
tableau :

-   Pour sélectionner la cellule suivante dans le tableau, appuyez sur
    \"Tab\" ou \"Flèche droite\". Si la dernière cellule est
    sélectionnée, l\'appui sur \"Tab\" fait passer sur le bouton
    \"Ajouter\".
-   Pour sélectionner la cellule précédente dans le tableau, appuyez sur
    \"majuscule + Tab\" ou \"Flèche gauche\". Si la première cellule est
    sélectionnée, l\'appui sur \"majuscule + Tab\", fait passer sur le
    bouton \"Annuler\".
-   Pour sélectionner la cellule juste en dessous ou au-dessus de la
    cellule active, appuyez sur \"Flèche bas\" ou \"Flèche haut\"
    respectivement.
-   Pour sélectionner la première ou la dernière cellule, appuyez sur
    \"control + début\" ou \"control + fin\", respectivement.

Note : comme \"Tab\" peut être utilisé pour sélectionner une cellule
dans le tableau, il y a un couple de touches qui vous permet de vous
déplacer directement à l\'extérieur du tableau. À partir de n\'importe
quelle cellule du tableau, \"control + tab\" et \"control + majuscule +
Tab\" fait passer à l\'élément avant ou après le tableau.

## Modification des valeurs de paramètre

Toutes les valeurs de balise, à l\'exception des valeurs de balise
\"genre\", sont modifiables à l\'aide d\'une boite d\'édition. Les
valeurs de balises \"genre\" sont modifiables avec une zone d\'édition
en liste déroulante, qui vous permet de choisir rapidement à partir
d\'une liste de genres.

Pour modifier la valeur d\'une étiquette, à l\'exception des valeurs
d\'étiquettes \"genre\", il y a deux possibilités : écraser ou modifier
la valeur actuelle, comme décrit ci-après.

Les deux impliquent l\'utilisation des touches \"Entrée\" ou \"Tab\"
pour confirmer la modification. \"Entrée\" sélectionne la cellule
immédiatement au-dessous de la cellule en cours, \"Tab\" sélectionne la
cellule juste après qui est le nom de la balise suivante dans la ligne.

-   Pour remplacer la valeur actuelle, il suffit de taper du texte, puis
    appuyez sur \"Tab\" ou \"Entrée\" pour confirmer la modification, ou
    \"Échapp\" pour annuler la modification.
-   Pour modifier la valeur, appuyez sur \"F2\", ce qui sélectionne le
    texte. Pour désélectionner le texte avant de le modifier, appuyez
    sur \"flèche droite\" ou \"Fin\" pour positionner le curseur à la
    fin du texte, ou sur \"Début\" pour le mettre au début du texte.
    Pour confirmer la modification appuyez sur \"Tab\" ou \"Entrée\".
    \"Échapp\" pour annuler la modification.

Pour modifier la valeur d\'une balise \"genre\" :

-   Comme pour les autres valeurs de balise, vous pouvez commencer à la
    modifier soit juste en commençant à taper, ou soit en appuyant sur
    \"F2\".
-   Vous pouvez utiliser \"flèche haut\" et \"Flèche bas\" pour
    sélectionner un genre de la liste des genres prédéfinis. Pour
    trouver rapidement un genre commençant par une lettre précise, tapez
    cette lettre, puis appuyez sur \"Flèche bas\" pour dérouler tous les
    genres commençant par cette lettre.
-   pour confirmer la modification, appuyez sur \"Tab\" ou \"Entrée\".
-   \"Échapp\" si vous voulez annuler la modification.

## Création et modification de balise {#HDR-TagsEditing}

Vous pouvez utiliser les lignes de la table après les balises prédéfinis
pour créer vos propres balises personnalisées. Ces lignes vous
permettent de modifier le nom de la balise et sa valeur.

Pour un nouveau jeu de métadonnées, il y a une ligne de rechange après
les balises prédéfinies.

Vous pouvez ajouter et supprimer des lignes de la table à l\'aide des
boutons \"Ajouter\" et \"Retirer\" situés après le tableau. Le bouton
\"Ajouter\" ajoute une ligne, et le bouton \"Retirer\" supprime la ligne
personnalisée courante.

## Édition de la liste des genres {#HDR-EditingGenreList}

Pour modifier la liste des genres qui est disponible dans la zone
d\'édition en liste déroulante, quand vous modifiez la valeur du genre :

-   Appuyez sur le bouton \"Éditer\" dans la section des Genres.
-   la boîte de dialogue d\'édition des genres s\'ouvre. Le premier
    élément de la boite est une zone d\'édition multiligne avec un genre
    par ligne. Notez que lors de la première ouverture de la boîte de
    dialogue, tous les genres sont sélectionnés, et donc, sauf si vous
    tapez d\'abord une touche de navigation, par exemple

\"Flèche droite\", vous remplacerez tous les genres. Pour vous déplacer
vers le haut ou le bas de la liste, appuyez sur \"control + début\" ou
\"control + Fin\" respectivement.

-   Lorsque vous avez terminé la modification, tapez \"Tab\" pour
    atteindre le bouton OK et appuyez dessus.

Pour réinitialiser la liste des genres aux valeurs par défaut, appuyez
sur le bouton de Réinitialisation dans la section des Genres. Une boite
de message s\'ouvre, pour vous demander si vous êtes sûr que vous
souhaitez réinitialiser la liste. Tapez \"Entrée\". Pour appuyer sur le
bouton \"OK\" (bouton par défaut).

# Enregistrement {#HDR-Recording}

Les trois prochains chapitres couvrent ce qui est utile dans la plupart
des enregistrements. À savoir : les paramètres d\'enregistrement, les
commandes et le réglage de niveau d\'enregistrement.

Après ceux-ci, un chapitre décrit comment Audacity peut corriger le
retard dans l\'enregistrement audio lors de l\'enregistrement d\'une
piste vocale, tout en écoutant les pistes existantes.

## Paramètres d\'enregistrement {#HDR-RecordSettings}

Il y a un certain nombre de paramètres qui peuvent avoir besoin d\'être
changés avant de faire un enregistrement, et qui sont décrits dans les
chapitres suivants. Notez que Nombre de ces paramètres peuvent être
configurés dans la catégorie \"Paramètres audio\" de la boite de
dialogue \"Préférences\" d\'Audacity ou dans un dialogue particulier.

### Interface Audio {#hdrAudioInterface}

Audacity fournit un certain nombre d\'options pour l\'interface du
logiciel qu\'Audacity utilise pour interagir avec les périphériques de
lecture et d\'enregistrement :

-   MME (Multimedia extension) : C\'est l\'interface par défaut.
-   Windows DirectSound. Normalement, il n\'y a aucun avantage à
    l\'utiliser par rapport à l\'utilisation du MME.
-   Windows WASAPI (Windows audio session API) : Lors de l\'utilisation
    de cette interface, le périphérique d\'enregistrement inclut aussi
    les soi-disant versions de rebouclage des périphériques de lecture.

En utilisant ce dernier, vous pouvez enregistrer de l\'audio qui est
envoyé à un des périphériques de lecture. Cela offre une alternative au
périphérique d\'enregistrement \"Mixage stéréo\" qui peut ou ne peut pas
être fourni par votre carte son.

Vous pouvez définir cette option :

-   soit à l\'aide de la liste déroulante \"Hôte audio\" du groupe
    \"Interface\" de la catégorie \"Paramètres audio\" de la boite de
    dialogue \"Préférences\".
-   soit à l\'aide de la liste déroulante \"Hôte audio\" de la boite de
    dialogue \"Sélectionner l\'hôte audio\" ouverte par \"Majuscule +
    h\".
-   soit à l\'aide de la liste déroulante \"Hôte audio\" de l\'outil
    \"Paramètres audio\" du groupe supérieur de barre d\'outils.

Note : lorsque vous modifiez cette option, les paramètres de
l\'enregistrement et des dispositifs de lecture peuvent changer, de
sorte que vous devriez alors vérifier ces paramètres.

### Périphérique d\'enregistrement

Vous pouvez sélectionner le périphérique d\'enregistrement en utilisant
la liste déroulante \"Paramètres audio\" d\'enregistrement\" de :

-   soit la catégorie \"Paramètres audio\" de la boîte de dialogue
    \"Préférences\".
-   soit la boite de dialogue \"Sélectionner le périphérique
    d\'enregistrement\" ouverte par \"Majuscule + i\".
-   soit de l\'outil Périphérique\" du panneau supérieur de barre
    d\'outils.

Si une carte son intégrée ou une carte son interne a un certain nombre
de entrées possibles, tels que le microphone ou l\'entrée ligne, chacune
de ces entrées est répertorié comme une unité distincte dans la liste
déroulante. En outre, Si vous utilisez l\'interface MME ou DirectSound
audio, alors Les périphériques disponibles peuvent également inclure
\"Microsoft Sound Mapper - Input\" ou \"Primary Sound Captive Driver\"
respectivement. Chacun d\'eux correspondent au périphérique qui a été
définie en tant que par défaut pour l\'enregistrement périphérique dans
Windows. En règle générale, l\'utilisation de l\'une de ces options
n\'est pas recommandée, car le périphérique d\'enregistrement par défaut
peut parfois changer de façon inattendue, et donc changer votre
périphérique d\'enregistrement dans Audacity sans aucun avertissement.

La liste déroulante recense tous les périphériques d\'enregistrement qui
étaient branchés et activés quand Audacity a été lancé.

Si un périphérique n\'est pas dans la liste, vérifiez l\'onglet
\"Enregistrement\" de la boite de dialogue \"Son\" de Windows pour voir
si le périphérique est activé. Cette boîte de dialogue est décrite au
chapitre [\"Boite de dialogue Son de Windows\"](#HDR-SoundWindowsDialog)
pour ce familiariser avec elle.

### Niveau d\'enregistrement

Ce chapitre décrit les éléments à utiliser pour régler le niveau
d\'enregistrement. Comment régler le niveau d\'enregistrement de sorte
que vous n\'aurez pas trop de bruit ou de coupure, est décrit dans le
chapitre [\"Réglage du niveau d\'enregistrement\"](#HDR-RecordLevel)
ci-dessous.

Si Audacity peut contrôler le niveau du périphérique d\'enregistrement,
alors vous pouvez utiliser le potentiomètre d\'enregistrement
d\'Audacity, ou le cas échéant celui de Windows. Il est cependant plus
facile d\'utiliser le potentiomètre d\'enregistrement d\'Audacity qui
est dans la table de Mixage du panneau supérieur de barre d\'outils de
la fenêtre principale. Pour y accéder à partir du tableau \"Vue de
piste\", appuyez deux fois sur \"control + F6\", puis sur \"Tab\" ou
\"majuscule + Tab\" jusqu\'à ce que vous arriviez au potentiomètre
d\'enregistrement.

Quand Audacity ne peut pas contrôler le niveau du périphérique
d\'enregistrement, le potentiomètre d\'enregistrement est indiqué comme
étant indisponible. Pour les utilisateurs voyants, le curseur apparaît
en grisé et les utilisateurs de lecteurs d\'écran ne peuvent pas
l\'atteindre. Dans ce cas, vous devez utiliser l\'élément approprié de
Windows, comme décrit ci-dessous.

Le fait qu\'Audacity puisse contrôler le niveau d\'enregistrement dépend
pour beaucoup de l\'interface audio que vous utilisez :

-   MME ou Direct Sound: Pour de nombreux périphériques
    d\'enregistrement, vous pouvez utiliser le potentiomètre
    d\'enregistrement d\'Audacity.
-   WASAPI: Pour les périphériques de rebouclage fournis par
    l\'interface WASAPI, le niveau d\'enregistrement ne dépend que du
    niveau de volume du programme qui envoie la sortie audio au
    périphérique de lecture que l\'on veut enregistrer. Il ne dépend ni
    du niveau du volume de Windows, ni des potentiomètres de lecture ou
    d\'enregistrement d\'Audacity.

Le réglage du niveau d\'enregistrement d\'un périphérique avec l\'outil
de Windows est décrit au chapitre [\"Boite de dialogue Son de
Windows\"](#HDR-SoundWindowsDialog).

### Nombre de canaux d\'enregistrement

Le nombre de canaux de l\'appareil d\'enregistrement peut être réglé à
l\'aide de la liste déroulante \"Canaux\" :

-   soit de la catégorie \"Paramètres audio\" de la boite de dialogue
    \"Préférences\".
-   soit dans la boite de dialogue \"Canaux d\'Enregistrement\" ouvert
    par \"majuscule + N\".
-   soit de l\'outil \"Paramètres audio\" du panneau supérieur de barre
    d\'outils.

Si vous enregistrez à l\'aide d\'un microphone, alors le paramètre
approprié dépend si c\'est un microphone mono ou stéréo. Si vous
enregistrez à partir d\'une entrée de ligne, d\'un mixage stéréo ou de
l\'un des périphériques de bouclage en utilisation WASAPI, le paramètre
doit être stéréo.

### Option Doublage (Overdub)

L\'option \"Doublage\" contrôle si Audacity doit jouer toutes les pistes
existantes lors d\'un nouvel enregistrement. Vous pouvez cocher ou
décocher cette option avec le sous-menu \"Doublage\" du sous-menu
\"Options de transport\" du menu \"Transport\", ou avec la case à cocher
\"Doublage\" de la catégorie \"Enregistrement\" de la boite de dialogue
\"Préférences\".

### Option Lecture à travers le logiciel

Cette option contrôle si Audacity doit jouer la nouvelle piste alors
qu\'il est en cours d\'enregistrement. Normalement, cette option doit
être désactivée, mais c\'est utile si vous voulez entendre ce que vous
enregistrez à partir d\'un périphérique.

Cette option peut être cochée ou décochée en utilisant le sous-menu
\"Passage audio logiciel\" du sous-menu \"Options de transport\" du menu
\"Transport\", ou la case à cocher \"Lecture à travers le logiciel\" de
la catégorie \"Enregistrement\" de la boite de dialogue \"Préférences\".

## Commandes d\'enregistrement {#HDR-RecordControls}

Les commandes d\'enregistrement et les raccourcis, utilisant les
paramètres par défaut sont :

-   Pour démarrer l\'enregistrement, appuyez sur \"r\" ou, dans le menu
    \"Transport\", ouvrez le sous-menu \"Enregistrement\" et choisissez
    \"Enregistrer\". Si le projet ne contient aucune piste audio, une
    nouvelle piste audio est créée et l\'audio enregistré est inséré
    dans cette piste, qui n\'est initialement pas sélectionnée. S\'il
    existe des pistes audio existantes, l\'audio enregistré est ajouté à
    la première piste audio sélectionnée, ou bien le cas échéant, à la
    première piste audio.
-   Pour commencer l\'enregistrement et insérer systématiquement dans
    une nouvelle piste, appuyez sur \"majuscule + r\" ou dans le menu
    \"Transport\", ouvrez le sous-menu \"Enregistrement\" et choisissez
    \"Enregistrer une nouvelle piste\". Une nouvelle piste est
    automatiquement ajoutée au projet et l\'audio enregistré est inséré
    à la position du curseur. Cette nouvelle piste n\'est initialement
    pas sélectionnée.
-   Pour démarrer l\'enregistrement Punch and Roll, appuyez sur
    \"majuscule + d\", ou dans le menu \"Transport\", ouvrez le
    sous-menu Enregistrement\" et choisissez \"Enregistrement Punch
    Roll\". Ceci peut être utilisé pour corriger facilement les erreurs
    que vous venez de faire, et est décrit au chapitre \"Enregistrement
    Punch Roll\" ci-dessous.
-   Pour suspendre ou reprendre l\'enregistrement, appuyez sur \"p\".
-   Pour arrêter l\'enregistrement, appuyez sur la barre d\'espace.

Notez que pendant un enregistrement, la deuxième partie de la barre
d\'état contient la durée maximale d\'enregistrement que vous pouvez
faire compte tenu de votre espace disque libre.

Dans les versions d\'Audacity 2.1.3 et antérieures, les raccourcis \"r\"
et \"majuscule + r\" pour deux des commandes permettant de démarrer
l\'enregistrement étaient l\'inverse. Il y a une option dans les
préférences qui vous permet facilement de les avoir de cette façon si
vous le trouvez plus pratique. Dans la catégorie \"Enregistrement\" des
Préférences, il y a une case à cocher \"Enregistrer sur une nouvelle
piste\", qui n\'est pas cochée par défaut. Si cette case est cochée, les
deux commandes pour démarrer l\'enregistrement sont :

-   Pour démarrer l\'enregistrement et insérer systématiquement l\'audio
    dans une nouvelle piste, appuyez sur \"r\", ou dans le menu
    \"Transport\", ouvrez le sous-menu \"Enregistrement\" et choisissez
    \"Enregistrer\".
-   Pour démarrer l\'enregistrement, et ajouter l\'audio à l\'audio
    d\'une piste existante, appuyez sur \"majuscule + r\", ou dans le
    menu \"Transport\", ouvrez le sous-menu \"Enregistrement\" et
    choisissez \"Poursuite de l\'enregistrement\".

## Réglage du niveau d\'enregistrement {#HDR-RecordLevel}

Dans l\'outil \"Mesureur d\'enregistrement\" du panneau supérieur de
barre d\'outils de la fenêtre principale d\'Audacity, il y a le vumètre
d\'Enregistrement pour aider à définir le niveau d\'enregistrement. Le
vumètre contient un bouton déroulant que vous pouvez atteindre en
appuyant sur \"control + F6\" deux fois pour se placer dans le panneau
supérieur de barres d\'outils, puis en appuyant sur \"Tab\" jusqu\'à
l\'atteindre.

Si vous appuyez sur ce bouton en appuyant sur \"Entrée\", un menu
s\'ouvre, contenant des commandes pour contrôler le mesureur.

Vous pouvez démarrer et arrêter la surveillance du signale d\'entrée
pendant l\'enregistrement à l\'aide de ce menu.

Pour que ce mesureur soit accessible pour les utilisateurs de lecteurs
d\'écran, les informations suivantes sont incluses dans le nom du bouton
déroulant (ce nom est lu par les lecteurs d\'écran) :

-   Le niveau de crête : C\'est l\'amplitude maximale du signal pendant
    la cession de surveillance. Il est automatiquement mis à zéro
    lorsque la surveillance commence. Par défaut, cela est donné en
    décibels, 0 étant la valeur maximale.
-   Le mot \"Monitoring\" si la surveillance est en cours.

Pour vérifier quel est le niveau de crête d\'un enregistrement qui est à
peu près susceptible d\'être avec le réglage actuel du niveau
d\'enregistrement :

-   Appuyez sur le bouton déroulant du mesureur \"vumètre
    d\'enregistrement\" et choisissez \"Démarrer le monitoring\".
-   Faites quelques sons représentatifs pendant un court instant.
-   Appuyez de nouveau sur le bouton déroulant et choisissez \"Arrêter
    le monitoring\"Le nom du bouton déroulant inclut le niveau de crête
    pendant cette surveillance.

Normalement, une bonne valeur du niveau de crête à viser est d\'environ
-6 dB. Cela devrait garantir que le niveau d\'enregistrement est à la
fois suffisamment bas pour qu\'il n\'y ait pas de distorsion ou
d\'écrêtage, et suffisamment élevé pour que vous n\'obteniez pas une
quantité de bruit inutile.

À tout moment pendant le monitoring, vous pouvez lire le niveau de crête
qui s\'est produit jusqu\'à présent dans cette session de surveillance,
mais la façon de procéder dépend du lecteur d\'écran que vous utilisez.
Si vous utilisez NVDA ou Narrateur, vous pouvez lire le niveau de crête
en utilisant la commande de lecture de la ligne sous le focus.
Cependant, si vous utilisez Jaws, vous devez faire un aller retour par
\"tab\" et \"majuscule+tab\".

Le niveau de crête peut également être donné en utilisant une échelle
linéaire de 0 à 1. Vous voudrez probablement vous en tenir aux décibels,
mais si vous souhaitez changer l\'échelle :

-   Appuyez sur le bouton déroulant du mesureur \"vumètre
    d\'enregistrement\" en appuyant sur \"Entrée\".
-   Choisissez \"Options\". La boîte de dialogue \"Options des mesureurs
    d\'enregistrement\" s\'ouvre.
-   Réglez les boutons radio \"Type des mesureurs\" sur \"dB\" ou
    \"linéaire\".

## Enregistrement Punch and Roll

L\'enregistrement Punch and Roll vous permet de corriger facilement un
enregistrement juste après avoir fait une erreur. L\'enregistrement
\"Punch In\" est un terme utilisé pour écraser une partie d\'une piste
enregistrée lorsque vous lisez la piste. Le point d\'entrée est le
moment auquel l\'éditeur audio passe de la lecture à l\'enregistrement
sur un audio existant. De même, le point de \"punch out\" correspond à
le temps à laquelle l\'éditeur audio arrête l\'enregistrement et revient
à la lecture.

En enregistrement \"punch and roll\", il y a un point de punch in, mais
pas de point de punch out.

L\'enregistrement continue jusqu\'à ce que vous l\'arrêtiez.

Ce qui suit est un aperçu de l\'enregistrement \"Punch and roll\" dans
Audacity:

-   Vous enregistrez et réalisez que vous venez de faire une erreur.
    Arrêtez l\'enregistrement.
-   Positionnez le curseur à l\'endroit où vous souhaitez insérer le
    point de punch. Ce sera généralement peu de temps avant la fin de
    l\'enregistrement et pendant une pause, par exemple la pause entre
    les phrases.
-   Lancez l\'enregistrement \"punch and Roll\". La lecture démarre
    quelques secondes avant le point de punch-in. Une fois le point de
    punch-in atteint, la lecture s\'arrête et l\'enregistrement démarre.
    L\'enregistrement continue jusqu\'à ce que vous l\'arrêtiez.

En utilisant l\'enregistrement \"Punch and roll\", vous basez le timing
du nouvel enregistrement sur l\'écoute de la lecture de l\'audio avant
le point de punch in. Cependant, dans Audacity, il existe un délai entre
l\'audio lu et l\'enregistrement. Il existe une compensation par défaut
pour cela, et cela peut être suffisant. Si la synchronisation de
l\'audio près du point de punch-in ne sonne pas correctement, indiquant
que la compensation n\'est pas assez bonne, consultez la section
Compensation de latence ci-dessous pour plus de détails sur ce retard et
comment ajuster sa compensation.

Une description plus détaillée de l\'enregistrement Punch and Roll est
la suivante. Vous enregistrez et réalisez que vous venez de faire une
erreur. Arrêtez l\'enregistrement en appuyant sur la barre d\'espace ou
sur \"X\". Vous devez maintenant déplacer le curseur sur la position du
point de punch in :

-   Si vous ne l\'avez pas déjà fait, vérifiez que la piste est
    sélectionnée et qu\'aucune autre piste n\'est sélectionnée.
-   Si vous avez arrêté l\'enregistrement en appuyant sur la barre
    d\'espace, appuyez alors sur \"k\" pour passer à la fin de l\'audio.
-   Si vous avez arrêté l\'enregistrement en appuyant sur \"x\", le
    curseur sera déjà à la fin de l\'audio. En fait, ce sera légèrement
    après la fin, mais cela n\'a pas d\'importance.

Une façon de déplacer ensuite le curseur sur un point de punch-in
approprié est la suivante :

-   Déplacez d\'abord le curseur un peu avant le point d\'entrée
    souhaité à l\'aide de la virgule ou \"majuscule + .\" pour déplacer
    le curseur vers la gauche respectivement de courte ou de longue
    durée.
-   Ensuite, démarrez la lecture et appuyez sur \"x\" lorsque vous
    atteignez le point de punch-in prévu. La lecture s\'arrête et le
    curseur est positionné à l\'endroit où la lecture s\'est arrêtée.

Après avoir positionné le curseur, puis dans le menu \"Transport\",
ouvrez le sous-menu \"Enregistrement\" et choisissez \"Enregistrement
Punch Roll\" (raccourci \"majuscule+ d\"). Cette commande provoque les
événements suivants :

-   L\'audio après le curseur dans la piste sélectionnée est supprimé.
-   La lecture pré-roll commence quelques secondes avant le curseur. Le
    pré-roll est de 5 secondes par défaut, mais vous pouvez définir la
    valeur souhaitée dans la catégorie d\'enregistrement de la boîte de
    dialogue Préférences. Pendant cette lecture, il peut être utile de
    jouer avec l\'enregistrement existant, afin de ne pas avoir à
    recommencer à froid lorsque l\'enregistrement démarre.
-   Lorsque la lecture atteint le curseur, la lecture s\'arrête et
    l\'enregistrement démarre.

Après un enregistrement punch and roll :

-   Si vous avez de nouveau fait une erreur au même endroit, vous pouvez
    simplement faire un autre enregistrement de punch and roll, en
    laissant le curseur à la position de punch d\'origine.
-   Vous pouvez annuler le punch and roll en appuyant sur \"control +
    z\"

Immédiatement après le point d\'entrée, Audacity applique un court fondu
enchaîné de l\'audio d\'origine à l\'audio nouvellement enregistré.
C\'est pour éviter d\'introduire des problèmes. La longueur par défaut
du fondu enchaîné est de 10 ms, ce qui sera probablement une valeur
appropriée, mais vous pouvez modifier cette valeur dans la catégorie
d\'enregistrement de la boîte de dialogue Préférences.

## Correction de latence

Si vous enregistrez une piste vocale, tout en écoutant une ou plusieurs
pistes existantes, en raison de divers retards, le nouvel enregistrement
ne sera pas synchrone avec les autres pistes. Le délai total est connu
comme étant la latence et certains des facteurs qui influent sur sa
taille sont : l\'enregistrement et le périphérique de lecture, la taille
des tampons audio dans Audacity, et les Interface audio (par exemple,
MME ou DirectSound).

Audacity peut automatiquement corriger ce temps de latence, une fois que
ce temps de latence ait été mesuré, comme décrit ci-dessous.

Dans la boîte de dialogue Préférences, sous la catégorie \"Paramètres\",
et le groupe \"Latence\", il y a la zone d\'édition \"Compensation de
latence\", où les unités de la correction sont en millisecondes.

Si vous enregistrez de l\'audio dans une nouvelle piste, alors l\'audio
enregistré est automatiquement décalé plus tard dans le temps, d\'un
temps égal à cette compensation de latence. Afin de déplacer l\'audio
plus tôt dans le temps pour compenser la latence, le nombre devrait être
négatif.

La valeur par défaut de la correction de latence est de -130
millisecondes. La valeur par défaut sera à peu près correcte seulement
pour un enregistrement particulier et il est vivement recommandé de
mesurer le temps de latence.

La méthode suivante pour la mesure de la latence lors de l\'utilisation
d\'un microphone pour l\'enregistrement est précise à 10 millisecondes
près. Cela devrait être normalement bien suffisant.

Elle se compose de trois parties qui seront décrites en détail dans les
sections suivantes :

-   Générer une piste rythmique, qui se compose d\'une série de clics
    espacés d\'une seconde.
-   Enregistrer cette piste rythmique. En raison de la latence et de sa
    correction actuelle, un nombre de clics sur la piste enregistrée
    peut se produire avant ou après les clics de la piste d\'origine.
-   à l\'aide de la zone d\'édition de temps \"Début\" de la barre
    d\'outils \"Sélection\" trouvez la position du clic dans la piste
    enregistrée qui correspond au clic à une seconde dans la piste
    générée et faites une nouvelle correction.

### Générer une piste de rythme

-   Choisissez le sous-menu \"Piste de rythme\" du menu \"Générer\".
-   Le premier controle est la zone d\'édition \"Tempo\" (battements par
    minute), et sa valeur par défaut est de 120. Tapez 60, puis appuyez
    sur \"Tab\" deux fois pour passer à la prochaine zone d\'édition.
-   la zone d\'édition \"pulsations par mesure\" \[bar\] a une valeur
    par défaut de 4. Tapez 1, puis tapez sur \"Entrée\" pour appuyer sur
    le bouton \"OK\" (bouton par défaut).
-   la piste de rythme est créée. La piste est initialement
    sélectionnée, et une plage de temps est choisie, qui comprend toutes
    les données audio.

### Enregistrer la piste de rythmes

Pour enregistrer la piste de rythme en cours de lecture via le casque,
vous aurez évidemment besoin de l\'enlever temporairement. Si vous
utilisez un micro distinct, plutôt que d\'un microphone sur casque,
positionnez-le près du casque de sorte qu\'il puisse ramasser les clics.

-   Démarrer l\'enregistrement dans une nouvelle piste (\"majuscule +
    R\", par défaut), puis appuyez sur la barre d\'Espace pour arrêter
    l\'enregistrement après une poignée de clics.
-   Avec la première piste toujours sous le focus, appuyez sur
    \"majuscule + U\" pour la rende muette, et puis lancer la lecture de
    la piste enregistrée. Si les clics sont très calmes, comparativement
    à NVDA amplifiez la piste :
-   Désélectionnez la première piste, puis sélectionnez la seconde
    piste.
-   Appuyez sur \"Début\", puis \"majuscule + Fin\" pour sélectionner
    une plage de temps.
-   Choisissez le sous-menu \"Amplification\" dans le menu effets.
-   Dans la boite de dialogue \"Amplifier\", appuyez sur \"Entrée\" pour
    accepter la valeur par défaut.

### Trouver la position d\'un clic sur la piste enregistrée

Les instructions suivantes décrivent comment trouver la position du clic
enregistré qui correspond au clic à une seconde de la piste générée et
mettre à jour la correction de latence d\'Audacity.

Il est supposé que la piste originale soit toujours en sourdine depuis
le moment où vous avez vérifié le niveau de la piste enregistrée (voir
ci-dessus) :

-   Appuyez sur \"Début\" pour définir à la fois le début de la
    sélection et la fin / duré de la sélection à zéro.
-   Appuyez sur \"control + F6\" pour se déplacer dans la barre
    d\'outils \"Sélection\" du panneau inférieur de barre d\'outils.
    Tapez \"Tab\" pour atteindre le bouton de configuration de la barre
    d\'outils de sélection et vérifier que \"Début et Durée de la
    sélection\" est bien sélectionné.
-   tapez \"Tab\" pour atteindre la boite de sélection numérique
    \"Début\" et définir son format d\'édition à \"hh:mm:ss +
    millisecondes\" à l\'aide de son menu contextuel.
-   définissez le début de la sélection à 1 seconde en appuyant sur
    \"Fin\" pour passer au dernier chiffre (millisecondes), appuyez sur
    \"Flèche gauche\" trois fois pour atteindre le chiffre des secondes,
    puis appuyez sur \"Flèche haut\" pour l\'le mettre à un.
-   Appuyez sur \"Espace\" pour écouter les quelques premiers clics.

Il y a deux cas possibles :

-   Si le clic enregistré arrive plus tard que le clic original à une
    secondes, l\'espacement de temps avec le premier clic est beaucoup
    plus petit que celui avec le clic suivant.
-   Si le clic enregistré arrive plus tôt que le premier clic à une
    seconde, le temps au premier clic est proche de l\'écart de temps
    entre clics d\'une seconde.

Les étapes pour Trouver la position du clic enregistré et modifier la
correction de latence dans ces deux cas, sont :

-   Premier cas : trouver la position du clic enregistré quand il arrive
    plus tard que le clic original :
-   placer vous sur le chiffre des dixièmes de millisecondes de la zone
    d\'édition \"Début\".
-   Incrémenter le et appuyer sur \"Espace\" pour écouter.
-   recommencer l\'étape précédente jusqu\'à ce que le temps qui
    s\'écoule jusqu\'au premier clic, passe brusquement à environ une
    seconde. Vous avez dépassé le premier clic.
-   diminuer alors le temps de 10 ms pour entendre de nouveau rapidement
    le clic.
-   lisez le temps avec \"NVDA + flèche haut\".
-   modifier la correction de latence en lui retranchant ce temps : par
    exemple, si la correction de latence initiale est de -130
    millisecondes et que le temps au premier clic est de 40
    millisecondes en retard, définir alors la correction a -170
    millisecondes.

```{=html}
<!-- -->
```
-   second cas : trouver la position du clic enregistré quand il arrive
    plus tôt que le clic original :
-   placer vous sur le chiffre des dixièmes de millisecondes de la zone
    d\'édition \"Début\".
-   décrémenter le et appuyer sur \"Espace\" pour écouter.
-   recommencer l\'étape précédente jusqu\'à entendre très rapidement le
    premier clic.
-   lisez le temps avec \"NVDA + flèche haut\".
-   modifier la correction de latence en lui ajoutant ce temps : par
    exemple, si la correction de latence initiale est de -130
    millisecondes et que le temps au premier clic est de 20
    millisecondes en avance, définir alors la correction a -110
    millisecondes.

# Plugins {#HDR-Plugins}

Lorsqu\'Audacity est installé, un nombre raisonnable d\'effets, de
générateurs et d\'analyseurs sont inclus. Vous pouvez également
installer des plugins pour plusieurs d\'entre eux auprès de divers
fournisseurs, comme décrit sur le [site Web des plugins
d\'Audacity](https://plugins.audacityteam.org/).

La couverture des plugins dans ce guide est limitée aux domaines qui
intéressent particulièrement les utilisateurs de lecteurs d\'écran.

## Plugins Nyquist

Nyquist est un langage de programmation pour traitement audio, et
Audacity fournit un cadre pour les plugins à écrire dans ce langage. Un
certain nombre de plugins Nyquist sont inclus dans Audacity, mais les
utilisateurs de lecteurs d\'écran peuvent trouver un certain nombre de
plugins Nyquist supplémentaires utiles. Ceci est un lien vers la liste
des [plugins d\'effets
Nyquist](https://plugins.audacityteam.org/nyquist-plugins/effect-plugins).

Voici un exemple d\'effet utile.

Installez un effet Nyquist que vous avez téléchargé :

-   Dans le menu Outils, choisissez le programme d\'installation du
    plug-in Nyquist. Une boîte de dialogue avec ce nom s\'ouvre.
-   \"Tab\" jusqu\'au bouton \"Parcourir\" et appuyez dessus. Une boîte
    de dialogue Sélectionner un ou plusieurs fichiers s\'ouvre.
    Sélectionnez le fichier du plugin et appuyez sur le bouton Ouvrir.
    Vous êtes renvoyé à la boîte de dialogue du programme
    d\'installation du plug-in Nyquist.
-   Appuyez sur le bouton Appliquer. Une boîte de message du programme
    d\'installation du plugin Nyquist devrait s\'ouvrir avec des
    nouvelles de succès et quelques détails. Appuyez sur le bouton OK.
-   Redémarrez Audacity. Le plugin devrait maintenant être disponible.

## Plugins d\'effets VST et VST3

Les plugins Virtual Studio Technology (VST) utilisent une interface
entre le plugin et un programme tel qu\'Audacity qui a été développé par
la société Steinberg. Il existe quelques versions de l\'interface
actuellement utilisées, VST2 (qui est également connu sous le nom de
VST) et VST3. Les deux peuvent être utilisés dans Audacity.

En plus des plugins d\'effets VST, il existe également des plugins
d\'instruments VST, mais ceux-ci ne peuvent actuellement pas être
utilisés dans Audacity, n\'étant pas accessible aux utilisateurs de
clavier.

Cependant, Audacity fournit une interface alternative accessible. Pour
les effets VST, il y a un curseur pour chaque paramètre, et pour les
effets VST 3, il y a soit un curseur, soit une case à cocher pour chaque
paramètre. Lorsqu\'un curseur est utilisé pour un paramètre, sa valeur
peut être, par exemple, une fréquence ou un niveau, ou une option, telle
que mono ou stéréo, pas seulement un simple pourcentage. Pour les
lecteurs d\'écran, la valeur du paramètre est ajoutée au nom du
paramètre. Ainsi, lorsque vous accédez à un curseur par tabulation,
votre lecteur d\'écran lit le nom du paramètre, la valeur du paramètre
et la position du curseur, un nombre compris entre 0 et 100. Lorsque
vous modifiez la valeur d\'un curseur, à l\'aide des touches standard
telles que Flèche gauche et Flèche droite, seule la nouvelle position du
curseur est lue. La lecture de la nouvelle valeur de paramètre dépend du
lecteur d\'écran que vous utilisez. Si vous utilisez NVDA ou Narrator,
vous pouvez simplement appuyer sur la touche pour lire la ligne
actuelle. Cependant, si vous faites cela en utilisant Jaws, Jaws lit
malheureusement une valeur de paramètre qui est incorrecte. Pour lire
une valeur correcte, il faut \"faire Tab\" loin du contrôle, puis
\"Majuscule + Tab\".

Lorsque vous ouvrez un effet VST ou VST3 pour la première fois, son
interface utilisateur graphique personnalisée est utilisée. Vous ne
pourrez accéder qu\'à un petit nombre de commandes, telles que le bouton
Préréglages et paramètres.

Pour passer à l\'utilisation d\'une interface utilisateur accessible par
clavier :

-   Appuyez sur le bouton Préréglages et paramètres et choisissez
    Options. Une boîte de dialogue d\'options d\'effet s\'ouvre.
-   Tabulez jusqu\'à la case à cocher \"Activer l\'interface
    graphique\", puis décochez-la.
-   Appuyez sur \"Entrée\" pour appuyer sur le bouton \"OK\" par défaut.
-   Pour que le changement d\'interface prenne effet, vous devez alors
    fermer la boîte de dialogue d\'effet, puis la rouvrir.

## Dialogue d\'interface dans l\'effet

Presque tous les effets VST et VST3 ont par défaut une interface
utilisateur graphique personnalisée pour modifier les valeurs de ses
paramètres qui n\'est pas accessible aux utilisateurs de clavier.
Cependant, Audacity fournit une interface alternative accessible.
Avertissement de bug: Malheureusement, les versions 3.3.0 à 3.3.3
d\'Audacity ne fournissent pas d\'interface accessible pour les plugins
VST - le réglage de la case à cocher activer l\'interface graphique
décrite ci-dessous n\'a aucun effet.

Heureusement, les plug-ins VST3 ne sont pas affectés et la plupart des
plug-ins VST sont désormais disponibles en tant que plug-ins VST3.

Lorsque vous ouvrez un effet VST ou VST3 pour la première fois, son
interface utilisateur graphique personnalisée est utilisée et vous ne
pourrez accéder qu\'à un petit nombre de commandes d\'effets, telles que
le bouton Préréglages et paramètres. Pour passer à l\'utilisation d\'une
interface utilisateur accessible par clavier :

-   Appuyez sur le bouton Préréglages et paramètres et choisissez
    \"Options\". Une boîte de dialogue d\'options d\'effet s\'ouvre.
-   Tabulez jusqu\'à la case à cocher \"activer l\'interface
    graphique\", puis décochez-la.
-   Appuyez sur \"Entrée\" pour appuyer sur le bouton \"OK\" par défaut.
-   Pour que le changement d\'interface prenne effet, vous devez alors
    fermer la boîte de dialogue de l\'effet, puis la rouvrir.

Lorsque vous utilisez l\'interface utilisateur accessible au clavier,
pour les effets VST, il y a un curseur pour chaque paramètre, et pour
les effets VST 3, il y a soit un curseur ou une case à cocher pour
chaque paramètre.

Lorsqu\'un curseur est utilisé pour un paramètre, sa valeur peut être,
par exemple, une fréquence ou un niveau, ou une option, telle que mono
ou stéréo, et pas simplement un simple pourcentage.

Pour les lecteurs d\'écran, la valeur du paramètre est ajoutée au nom du
paramètre. Ainsi, lorsque vous accédez à un curseur par tabulation,
votre lecteur d\'écran lit le nom du paramètre, la valeur du paramètre
et la position du curseur, un nombre compris entre 0 et 100.

Lorsque vous modifiez la valeur d\'un curseur, à l\'aide des touches
standard telles que Flèche gauche et Flèche droite, seule la nouvelle
position du curseur est lue.

La lecture de la nouvelle valeur de paramètre dépend du lecteur d\'écran
que vous utilisez. Si vous utilisez NVDA ou Narrator, vous pouvez
simplement appuyer sur la touche pour lire la ligne actuelle.

Cependant, si vous faites cela en utilisant Jaws, Jaws lit
malheureusement une valeur de paramètre qui est incorrecte. Pour lire
une valeur correcte, vous devez taper \"Tab\" loin du contrôle, puis
\"Majuscule + Tab\" à nouveau.

# Préférences {#HDR-Preferences}

La boite de dialogue \"Préférences\" d\'Audacity vous permet de régler
beaucoup de paramètres dans Audacity. Après une brève description de la
boîte de dialogue, les chapitres suivants décrivent les paramètres les
plus courants.

## Boîte de dialogue Préférences

Pour ouvrir cette boîte de dialogue, choisissez le sous-menu
\"Préférences\" du menu \"Édition\" (control + P\").

Sur Le côté gauche de la boîte de dialogue se trouve une vue en
arborescence qui contient une liste de catégories. À la droite de cette
arborescence se trouvent des commandes pour le réglage des options qui
correspondent à la catégorie sélectionnée dans l\'arborescence. Le
bouton par défaut de la boîte de dialogue est le bouton \"OK\".

## Menus Extra {#HDR-ExtraMenus}

Ce menu n\'est pas affiché, par défaut, dans la barre de menu à
l\'installation d\'Audacity.

Vous pouvez faire afficher ou pas ce menu à l\'aide du sous-menu \"Menu
Extra (marche/arrêt)\" du menu \"Affichage\" ou de la case à cocher
\"Afficher les menus supplémentaires\" de la catégorie \"Interface\" de
la boite de dialogue \"Préférences\".

## Sauts temporels {#HDR-SeekTimes}

Durant la lecture, vous pouvez sauter (seek) vers l\'avant ou vers
l\'arrière par de courte ou de longue durée. Pour définir les valeurs de
courte et de longues périodes :

-   Dans la boite de dialogue \"Préférences\", sélectionnez la catégorie
    \"Lecture\".
-   tapez \"tab\" pour trouver le groupe \"sauts de lecture\" qui
    contient les deux zones d\'édition de temps \"court\" et \"long\".
    Les deux temps sont donnés en secondes.

## Sélection automatique {#HDR-AutoSelect}

Cette option n\'est pas activée par défaut. Pour les utilisateurs de
lecteurs d\'écran, il est recommandé de la laisser désactivée. L\'option
\"Sélectionner toute l\'audio, si une sélection est nécessaire \"
affecte ce qui se passe dans deux situations :

La première est dans le cas où vous essayez d\'effectuer une action sur
l\'audio, par exemple appliquer un effet, alors qu\'il n\'y a pas
d\'audio sélectionné :

N\'oubliez pas que pour que de l\'audio soit sélectionné, une ou
plusieurs pistes audio doivent être sélectionnées et une plage de temps
doit être sélectionnée.

Si l\'option est désactivée, le résultat de l\'action est qu\'une boîte
de dialogue s\'ouvre, vous indiquant qu\'il n\'y a pas d\'audio
sélectionné.

Si l\'option est activée, alors tout l\'audio est le projet est
sélectionné, et l\'action est effectuée.

La deuxième situation est si vous essayez d\'effectuer une action sur
certaines pistes, par exemple pour les aligner de bout en bout, et il
n\'y a pas de pistes sélectionnées :

Si l\'option est désactivée, le résultat de l\'action est qu\'une boîte
de dialogue s\'ouvre, vous indiquant qu\'une ou plusieurs pistes doivent
être sélectionnées.

Si l\'option est activée, toutes les pistes audio du projet sont
sélectionnées et l\'action est exécutée.

Pour modifier ce paramètre :

-   Dans la boite de dialogue \"Préférences\", sélectionnez la
    sous-catégorie \"Comportement des pistes\" de la catégorie
    \"Pistes\".
-   trouver la case à cocher \"Sélectionner toute l'audio, si une
    sélection est nécessaire\" laquelle est désactivée par défaut.

## Bibliothèque FFmpeg {#HDR-FFMPEGLibrary}

La bibliothèque FFmpeg contient des décodeurs et des encodeurs qui
permettent à Audacity d\'ouvrir et d\'enregistrer des fichiers dans des
formats qui ne sont pas pris en charge par l\'installation standard
d\'Audacity. La bibliothèque FFmpeg n\'est pas incluse avec Audacity en
raison de problèmes juridiques concernant les brevets. Presque tous les
codeurs sont couverts par un ou plusieurs brevets, mais ces brevets ne
sont pas reconnus dans tous les pays. La page [FFmpeg License and Legal
Considerations](http://www.ffmpeg.org/legal.html) du site Web FFmpeg
contient quelques commentaires sur ces problèmes.

Selon que vous utilisez la version 64 bits ou 32 bits d\'Audacity, vous
devrez installer respectivement la version 64 bits ou 32 bits de la
bibliothèque FFmpeg. Vous pouvez vérifier si vous utilisez une version
64 bits ou 32 bits d\'Audacity en lisant les informations de
construction : dans le menu Aide, choisissez \"À propos de\", et dans la
boîte de dialogue \"À propos de\", passez à la page d\'informations de
construction. Le type de construction est inclus dans les informations.
Pour Audacity 64 bits, ce sera \"CMake Release build (debug level 1), 64
bits\", et pour Audacity 32 bits, \"CMake Release build (debug level 1),
32 bits\". Les instructions pour télécharger et installer l\'une ou
l\'autre version de la bibliothèque FFmpeg sont les suivantes :

-   Allez sur le site dont l\'adresse est
    [\"lame.buanzo.org/#lamewindl\"](https://lame.buanzo.org/).
-   Sur cette page, recherchez le lien permettant de télécharger le
    programme d\'installation pour la version 64 bits ou 32 bits de la
    bibliothèque, comme indiqué ci-dessus.
-   Ouvrez le fichier téléchargé. Un assistant d\'installation s\'ouvre,
    qui installe la bibliothèque FFmpeg dans un dossier où Audacity la
    trouvera automatiquement la prochaine fois qu\'elle sera ouverte

Notez qu\'il n\'y a aucun problème à avoir les deux versions installées
en même temps.

## Ouverture automatique de l\'éditeur de Balises de métadonnées à l\'exportation audio {#HDR-MetaDataTagEditor}

Pour que l\'éditeur de balises de Métadonnées s\'ouvre automatiquement à
chaque exportation audio:

-   Dans la boite de dialogue \"Préférences\" d\'Audacity, sélectionnez
    la catégorie \"Import/Export\".
-   trouvez la case à cocher \"Ouvrir l\'éditeur de balises de
    métadonnées avant d\'exporter\". Cette case est cochée par défaut.

## Dossiers par défaut

Par défaut, lorsque vous exécutez l\'une des commandes ouvrir,
enregistrer, importer ou exporter, et qu\'une boîte de dialogue s\'ouvre
pour vous permettre de choisir un fichier, le dossier par défaut est
défini comme étant le dernier dossier que vous avez utilisé pour cette
commande. Si vous n\'avez jamais utilisé la commande auparavant, alors
le dossier par défaut est un dossier nommé Audacity dans votre dossier
Documents, qui est automatiquement créé par audacity. Cependant, pour
chacune de ces commandes, si vous ne voulez pas que le dossier par
défaut soit le dernier dossier, vous pouvez définir le dossier par
défaut pour qu\'il soit toujours un dossier particulier. Pour ce faire :

-   Dans la boîte de dialogue Préférences d\'Audacity, sélectionnez la
    catégorie Répertoires.
-   Vous pouvez ensuite tabuler sur les commandes pour définir les
    dossiers (répertoires) par défaut. Pour chacune des commandes, il y
    a une zone d\'édition et un bouton Parcourir, et par défaut la zone
    d\'édition est vide.
-   Bien qu\'il soit possible de saisir le chemin complet d\'un dossier
    dans l\'une des zones d\'édition, il est beaucoup plus facile
    d\'appuyer sur le bouton Parcourir qui le suit. Cela ouvre une boîte
    de dialogue Choisir un emplacement, dans laquelle vous pouvez
    sélectionner un dossier.

## Option \"Utiliser un dialogue pour nommer un nouveau marqueur\"

Cette option est décrite dans le chapitre [\"Marqueurs\"](#HDR-Labels).

Elle n\'est pas cochée par défaut, mais pour les utilisateurs de lecteur
d\'écran, il est recommandé qu\'elle le soit.

Notez que malgré le nom de la case à cocher, cette option contrôle
également si une boîte de dialogue est utilisée lors du changement de
nom d\'un clip.

-   Dans la boite de dialogue \"Préférences\" d\'Audacity sélectionnez
    la sous-catégorie \"Comportement des pistes\" de la catégorie
    \"Pistes\".
-   Cochez la case \"Utiliser un dialogue pour nommer un nouveau
    marqueur\".

## Taper pour créer un marqueur

Lorsqu\'une piste d\'étiquette est mise en évidence, si l\'option
\"Taper pour créer un marqueur\" est activée, appuyer sur n\'importe
quelle lettre ou chiffre crée automatiquement une nouvelle étiquette.
Par défaut, cette option est désactivée et les utilisateurs de lecteurs
d\'écran voudront probablement laisser cette option inchangée.

Cependant, si vous souhaitez modifier cette option :

-   Dans la boîte de dialogue \"Préférences\" d\'Audacity, sélectionnez
    la catégorie \"Comportements des pistes\".
-   Dans cette catégorie, il y a la case à cocher «Taper pour créer un
    marqueur ».

## Coller l\'audio d\'un projet différent {#HDR-PastingAudioFromOtherProject}

Après l\'édition, vous vous retrouvez souvent avec une ou plusieurs
sections de données audio (clips), qui faisaient chacune à l\'origine
partie d\'un clip plus long.

Pour chaque clip, Audacity garde une trace du clip original plus long et
stocke ces données dans le projet, même si elles peuvent être masquées.
Cela permet à un utilisateur d\'étendre un clip en utilisant les données
du clip d\'origine.

Malheureusement, cette fonctionnalité n\'est pas accessible aux
utilisateurs de clavier.

Lorsqu\'un clip audio d\'un projet différent est collé dans le projet
que vous éditez, alors si le clip faisait à l\'origine partie d\'un clip
original plus long, alors Audacity vous donne la possibilité de copier
ou non les données du clip d\'origine et de les stocké dans le projet en
cours. Dans la catégorie \"Comportements des pistes\" de la boîte de
dialogue \"Préférences\", dans la rubrique \"Coller l\'audio d\'un autre
projet Audacity\", il y a trois boutons radio :

-   smart Clip : Si le clip faisait initialement partie d\'un clip plus
    long, toutes les données du clip plus long sont également copiées et
    stockées dans le projet actuel. Cela permet aux utilisateurs de
    souris d\'étendre le clip dans le projet en cours, mais peut
    également augmenter considérablement la taille du projet en cours.
-   selected Audio only: Les données d\'un clip original plus long ne
    sont pas copiées et stockées dans le projet en cours. Le clip ne
    peut pas être étendu dans le projet en cours, mais l\'augmentation
    de la taille du projet est réduite au minimum. Étant donné que les
    utilisateurs de clavier ne peuvent de toute façon pas allonger les
    clips, il s\'agit de l\'option recommandée.
-   ask me each time: Une boîte de dialogue \"Coller l\'audio\" s\'ouvre
    lorsque vous collez l\'audio d\'un projet différent, vous demandant
    comment vous voulez coller l\'audio. Ceci est l\'option par défaut.

## Déplacement des clips suivants lors de l\'ajout ou suppression de l\'audio {#HDR-ClipShifting}

Dans la boîte de dialogue \"Préférences\", dans la catégorie
\"Comportements de piste\", il y a une case à cocher \"L\'édition d\'un
clip peut déplacer d\'autres clips\", qui n\'est pas cochée par défaut.

Lorsque cette option est activée, si de l\'audio est ajouté à une piste,
par exemple, en les collant, alors tous les clips de cette piste qui
commencent après l\'audio ajouté sont déplacés vers la droite de la
longueur de l\'audio ajouté.

De même, si de l\'audio est supprimé d\'une piste, par exemple, par
suppression, tous les clips de cette piste qui commencent après l\'audio
supprimé sont déplacés vers la gauche de la longueur de l\'audio
supprimé.

Lorsque l\'option n\'est pas activée, alors si de l\'audio est ajouté ou
supprimé d\'une piste, les positions de tous les clips de la piste qui
commencent après l\'audio ajouté ou supprimé restent inchangées.

Dans Audacity, les clips ne peuvent pas se chevaucher, donc si vous
essayez d\'ajouter de l\'audio qui dépasserait le début du clip suivant,
vous obtiendrez une boîte de dialogue d\'avertissement vous indiquant
qu\'il n\'y a pas assez de place disponible pour coller la sélection ou
générer l\'audio.

## Tri ou regroupement du menu Effet {#HDR-SortEffectMenu}

Il existe un certain nombre d\'options possibles pour la manière dont
les effets du menu \"Effet\" sont regroupés ou triés. L\'option par
défaut pour les effets qui sont inclus avec Audacity est \"Grouper par
type\", et tous les plugins d\'effets supplémentaires est \"Grouper par
éditeur\". Dans la catégorie \"Effets\" de la boîte de dialogue
\"Préférences\", dans le groupement \"Options d\'effet\", il y a une
liste déroulante \"Trier ou Grouper», qui est défini par défaut sur
l\'option par défaut décrite ci-dessus. Les options alternatives
incluent \"Trier par nom d\'effet\", qui était en fait la valeur par
défaut avant la version 3.2.0 d\'Audacity.

## Options d\'enregistrement

Les options d\'enregistrement sont configurables dans la boîte de
dialogue \"Préférences\" et elles sont décrites au chapitre
[\"Paramètres d\'enregistrements\"](#HDR-RecordSettings) du chapitre
[\"Enregistrement\"](#HDR-Recording).

## Modification ou création de raccourcis clavier

La catégorie \"Clavier\" de la boite de dialogue \"Préférences\"
d\'Audacity vous permet de changer les raccourci clavier des commandes
d\'Audacity.

Outre la manière standard d\'accéder à ces commandes en ouvrant la boîte
de dialogue \"Préférences\" et en sélectionnant la catégorie
\"Clavier\", il existe une méthode supplémentaire qui peut vous être
utile. Si vous sélectionnez une commande dans l\'un des menus de la
barre de menus et appuyez sur \"majuscule+ Entrée\" plutôt que sur la
touche \"Entrée\" habituelle, une boîte de dialogue s\'ouvre avec le
titre \"Préférences : clavier\". Dans l\'arborescence ou la liste
décrite ci-dessous, la commande est déjà sélectionnée. Notez que cette
méthode ne fonctionne pas si la commande du menu n\'est pas disponible.

Les trois premiers éléments de cette catégorie sont les suivants :

-   Un groupe de boutons radio qui contrôle la façon dont les commandes
    et les raccourcis sont affichés : Vue en arborescence, vue par nom,
    vue par touche. Ils sont décrits dans les trois prochaines sections.
-   Une zone d\'édition qui vous permet de rechercher des commandes et
    des raccourcis, comme décrit au chapitre [\"Recherche de
    commandes\"](#HDR-CommandSearch). Le nom de cette zone d\'édition
    est \"Rechercher\" si c\'est une vue en arborescence ou par nom,
    \"Raccourcis clavier\" si c\'est une vue par touche.
-   Une arborescence ou une liste de commandes, suivant la vue définie
    par le bouton radio.

### Vue en arborescence

Les commandes sont affichées dans une arborescence, et si une commande a
un raccourci, il apparait à la suite du nom de la commande. La
disposition des commandes dans l\'arborescence reflète la structure des
menus dans la barre de menus de la fenêtre principale d\'Audacity.
Ainsi, au niveau supérieur de l\'arborescence se trouvent les noms des
menus dans la barre de menus. Chacun de ces noms contient les commandes
de ce menu, et les noms de tous les sous-menus contiennent les commandes
de ce sous-menu

### Vue par nom

Les commandes sont affichées sous forme de liste triée par ordre
alphabétique du nom de la commande. Si un raccourci est attribué à une
commande, bien qu\'il soit affiché avant le nom de la commande, les
lecteurs d\'écran le lisent après le nom de la commande. Notez que si la
commande apparaît dans un sous-menu, le nom de la commande est précédé
du nom du sous-menu, par exemple \"Ajouter nouveau - Piste audio\". Ceci
afin que les commandes qui ont le même nom, mais qui apparaissent dans
des sous-menus différents puissent être distinguées les unes des autres

### Vue par touche

Les commandes sont affichées sous la forme d\'une liste et si la
commande a un raccourci qui lui est assignée, il est affiché devant son
nom. Les commandes ayant un raccourci sont listées en premier et sont
triés par ordre alphabétique du nom du raccourci. Les commandes sans
Raccourcis sont ensuite classés par ordre alphabétique selon le nom de
la commande.

### Recherche de commande {#HDR-CommandSearch}

Vous pouvez rechercher une commande ou des commandes à l\'aide du Filtre
de la boîte d\'édition. Les résultats de recherche sont affichés dans
l\'arborescence ou la liste dès que quelque chose est entré dans la zone
d\'édition. Vous n\'avez pas à appuyer sur entrée. Le détail de la
recherche dépend de la vue :

-   la Vue en Arborescence : Le texte que vous entrez est en
    correspondance avec les noms de commandes et de tout raccourci.
-   vue par Nom : Le texte que vous entrez est en correspondance avec
    seulement les noms de commandes.
-   vue par touche : La touche ou la combinaison de touches n\'est
    comparé qu\'avec les raccourcis.

### Création ou modification d\'un raccourci

Pour créer un raccourci :

-   Dans l\'arborescence ou de la liste, sélectionnez la commande
    concernée par le changement.
-   tabulez jusqu\'à la zone d\'édition \"Raccourci\" appuyez sur une
    touche ou combinaison de touche choisie pour le raccourci.
-   tabulez jusqu\'au bouton \"Attribuer\" puis appuyez dessus.

Si le raccourci est déjà affecté à une autre commande, une boîte de
dialogue d\'Erreur s\'ouvre qui vous dit le nom de cette commande. Si
vous appuyez sur le bouton OK, le raccourci sera affecté, et retirée de
l\'autre commande.

Pour effacer un raccourci:

-   Dans l\'Arborescence ou la liste, sélectionnez la commande du
    raccourci que vous souhaitez supprimer.
-   tabulez jusqu\'au bouton \"Effacer\", puis appuyez dessus.

## Jeu de raccourcis standard ou complet {#HDR-DefaultShortcutsSet}

Il y a deux ensembles de raccourcis par défaut:

-   ensemble complet : cet ensemble comprend tous les raccourcis
    présents, par défaut, dans la version 2.1.3 d\'Audacity et ce guide
    suppose que vous utilisez l\'ensemble complet.
-   ensemble standard, nouveau dans Audacity 2.2.0: Il contient moins de
    raccourcis que l\'ensemble complet. L\'idée étant de faciliter, pour
    les utilisateurs, la création de leurs propres raccourcis avec un
    plus grand choix possible car il y a moins de raccourcis déjà
    attribués.

Si Audacity 2.2.0 ou version ultérieure est exécuté avec un compte
utilisateur dans lequel les versions d\'Audacity antérieures à 2.2.0
n\'ont pas été exécutées, Audacity utilise l\'ensemble de raccourcis
standard. Cependant, si l\'une de ces anciennes versions a été exécutée,
alors l\'ensemble complet s\'il est utilisé, et il n\'est pas nécessaire
de changer quoique ce soit, l\'ensemble de raccourcis par défaut est
utilisé.

Pour réinitialiser tous les raccourcis de l\'ensemble standard ou
complet aux valeurs par défaut :

-   Dans la boite de dialogue \"Préférences\" d\'Audacity, sélectionnez
    la catégorie \"Clavier\".
-   tabulez jusqu\'au bouton \"Défaut\" et appuyez dessus. Un menu
    s\'ouvre.
-   Choisissez Standard ou Complet

## Les Raccourci gênants avec un clavier Azerty {#HDR-BracketShortcuts}

### les crochets gauche et droite

Audacity installe par défaut des raccourcis utilisant les crochets pour
les commandes suivantes :

-   commande \"De la limite droite de la sélection au point de lecture\"
    : raccourci \"\[\".
-   commande \"De la limite gauche de la sélection au point de lecture\"
    : raccourci \"\]\".
-   commande \"Saut vers début de la sélection\" : raccourci
    \"control+\[\".
-   commande \"Saut vers la fin de la sélection\" : raccourci
    \"control+\]\".

Avec des claviers de type Qwerty, vous pouvez taper \"\[\" et \"\]\" à
l\'aide des touches \"\[\" et \"\]\" qui se trouvent à droite de la
touche \"P\".

Mais Sur presque tous les claviers utilisés dans d\'autres pays, et en
particulier les claviers Azerty, les touches de type \"\[\" et \"\]\" se
trouvent dans des positions différentes, et vous avez souvent à utiliser
les touches de modification comme \"control\" et \"Alt\" pour saisir ces
caractères. Malheureusement, en utilisant les paramètres par défaut
d\'Audacity, les touches de crochet gauche et droite n\'exécutent les
commandes décrites ci-dessus que lorsque ces touches sont à droite de la
touche de lettre P

Pour les claviers de type Azerty,il est donc préférable de changer ces
raccourcis.

Les lettres G et H n\'étant pas affectées à des commandes, vous pouvez
donc :

-   affecter le raccourci \"g\" à la commande \"De la limite gauche de
    sélection à la position de lecture\".
-   affecter le raccourci \"h\" à la commande \"De la limite droite de
    sélection à la position de lecture\".
-   affecter le raccourci \"control + g\" à la commande \"Saut vers
    début de la sélection\".
-   affecter le raccourci \"control +h\" à la commande \"Saut vers la
    fin de la sélection\".

### le caractère \"point\"

Audacity installe par défaut des raccourcis utilisant le caractère \".\"
pour les commandes suivantes :

-   commande \"Petit saut de curseur à droite\" : raccourci \".\".
-   commande \"Grand saut de curseur à droite\" : raccourci
    \"majuscule + .\".
-   commande \"clip suivant\" : raccourci \"alt+.\".

Le caractère \";\" n\'étant pas utilisé, vous pouvez affectez :

-   \";\" à la commande \"Petit saut de curseur à droite\".
-   \"control + ;\" à la commande \"Grand saut de curseur à droite\".
-   \"control + ,\" à la commande \"Grand saut de curseur à gauche\"
    (pour avoir une cohérence avec la précédente redéfinition).
-   \"Alt + ;\" à la - commande \"clip suivant\".

## Vérification automatique des mises à jour {#HDR-UpdateAutomaticChecking}

Par défaut, Audacity vérifie maintenant périodiquement si une nouvelle
version est disponible. Lorsqu\'elle est disponible, une boîte de
dialogue s\'ouvre avec ces informations et il est possible d\'installer
la mise à jour. Si vous ne voulez pas que cette vérification automatique
se produise, dans la boîte de dialogue \"Préférences\", dans la
catégorie \"Application\", il y a une case à cocher Vérifier les mises à
jour. Par défaut cette case est cochée.

# Boite de dialogue Son de Windows {#HDR-SoundWindowsDialog}

Dans Windows 7 ou dans les versions ultérieures de Windows, la boite de
dialogue \"Son\" a quatre onglets : Lecture, Enregistrement, Sons et
Communications. Les sections suivantes décrivent comment ouvrir cette
boîte de dialogue, les éléments de l\'onglet \"Enregistrement\", et la
manière d\'ajuster le niveau d\'entrée d\'un périphérique.

## Boite de dialogue Son

Voici deux manières d\'ouvrir la boîte de dialogue,

-   la première : Appuyez sur la touche Windows. Le menu de démarrage
    s\'ouvre. Tapez \"sons système\", puis, si nécessaire, appuyez sur
    la flèche vers le bas jusqu\'à ce que vous arriviez à \"Modifier les
    sons du système\" dans la liste des résultats de la recherche, puis
    appuyez sur Entrée. La boîte de dialogue Son s\'ouvre sur l\'onglet
    \"Sons\".
-   la seconde : Appuyez sur la touche Windows. Le menu de démarrage
    s\'ouvre. Tapez \"mmsys.cpl\", et cela devrait être le premier
    résultat de la recherche. Appuyez sur Entrée. La boîte de dialogue
    \"Son\" s\'ouvre sur l\'onglet \"Lecture\".

## Onglet enregistrement

L\'onglet \"enregistrement\" contient la liste des périphériques et le
cas échéant, un ou plusieurs boutons : Configuration, par Défaut,
Propriétés.

Les commandes fournies par les boutons sont également disponibles avec
le menu contextuel du périphérique sélectionné dans la liste et sont
beaucoup plus facile à utiliser que les boutons.

Il y a deux options qui contrôlent les périphériques qui sont présents
dans la liste. Elles apparaissent dans le menu contextuel de l\'élément
dans la liste. Ces options sont : Afficher les Périphériques Désactivés
et Afficher les Périphériques Déconnectés. Par défaut, les deux options
ne sont pas activées. Si vous ne trouvez pas un périphérique qui, selon
vous, devrait être présent, il peut être désactivé. Il ne sera affiché
que si l\'option \"Afficher les Périphériques Désactivés\" est cochée.

Pour chaque élément de la liste, il y a trois lignes de texte : son nom,
une brève description, et son statut, qui peut être en fonctionnement,
invalides, ou n\'est Pas branché. NVDA lit automatiquement les trois
lignes de texte, mais Jaws et Narrator ne lisent que la première ligne.
Si vous utilisez Jaws, vous pouvez lire les deux autres lignes à l\'aide
du curseur Jaws.

De plus, si vous ouvrez le menu contextuel de l\'élément, il y aura une
commande d\'activation ou de désactivation, qui vous indiquera si
l\'élément est désactivé ou activé, respectivement.

## Boite de dialogue Propriétés d\'un périphérique

Pour connaitre les propriétés d\'un des périphériques de la liste de
l\'onglet \"Enregistrement\", sélectionnez-le et appuyez sur la barre
d\'Espace, ou sélectionnez l\'option \"Propriétés\" de son menu
contextuel.

Le volume d\'entrée (niveau) peut être défini dans l\'onglet des Niveaux
de cette boîte de dialogue. Pour La plupart des appareils, il n\'y a
qu\'un seul potentiomètre, mais certains microphones ont un
potentiomètre \"boost\".

# Raccourcis

Ce sont les raccourcis du jeu complet installé par défaut par Audacity.
Certains raccourcis ne sont pas inclus dans le jeu standard.

Pour plus d\'informations sur ces deux jeux de raccourcis installés par
défaut et comment faire pour changer de jeu voir le chapitre [\"Jeu de
raccourcis standard ou complet\"](#HDR-DefaultShortcutsSet).

## Commandes générales

|                                                                  Commande                                                                          | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                                                           Ouvrir un fichier audio                                                                 | control + O |
|                                                          Importer un fichier audio                                                          | control + majuscule + I |
|                                                               Nouveau projet                                                                      | control + N |
|                                                            Sauvegarder le projet                                                                  | control + S |
|                                                               Exporter Audio                                                                | control + majuscule + E |
|                                                      Boîte de dialogue \"Préférences\"                                                            | control + P |
|   Tourner en avant entre le panneau supérieur de barres d\'outils, le tableau \"Vue de piste\" et le panneau inférieur de barre d\'outils        | control + F6 |
|   Tourner en arrière entre le panneau supérieur de barres d\'outils, le tableau \"Vue de piste\", le panneau inférieur de barre d\'outils   | control + majuscule +F6 |
|                            Tourner en avant entre la fenêtre principale d\'Audacity et les fenêtres non modales                                    | Alt + F6 |
|                           Tourner en arrière entre la fenêtre principale d\'Audacity et les fenêtres non modales                             | Alt + majuscule + F6 |
|                                                                 Zoom normal                                                                       | control + 2 |
|                                                                 Zoom Avant                                                                        | control + 1 |
|                                                                Zoom arrière                                                                       | control + 3 |

## Commandes relatives à la lecture audio

|                               Commande                                                         | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                           Démarrage/Arrêt                                                   | barre d\'espace |
|             Démarrage/Arrêt avec déplacement du curseur                                            | X |
|                      frottement vers l\'arrière                                  | Appuyez et maintenez la touche \"U\" |
|                       Frottement vers l\'avant                                   | Appuyez et maintenez la touche \"i\" |
|                           Pause/reprendre                                                          | P |
|                Petit Saut arrière pendant la lecture                                         | Flèche gauche |
|                 Petit saut avant pendant la lecture                                          | Flèche droite |
|                Grand saut arrière pendant la lecture                                   | majuscule + Flèche gauche |
|                 Grand saut avant pendant la lecture                                    | majuscule + Flèche Droite |
|      Basculer entre la lecture en boucle et la lecture standard                                    | l |
|    Définir la plage de boucle sur la plage de temps sélectionnée     | majuscule + l (disponible dans 3.1.3 et versions ultérieures) |
|                  Jouer la plage en boucle une fois                                    | majuscule + barre d\'espace |
|      Boite de dialogue \"Sélection du Périphérique de Lecture\"                              | majuscule + O |
|                 Jouer l\'aperçu de coupe/suppression                                               | C |
|       Jouer une courte période avant le début de la sélection                               | majuscule + F5 |
|       Jouer une courte période après le début de la sélection                               | majuscule + F6 |
|        Jouer une courte période avant la fin de la sélection                                | majuscule + F7 |
|        Jouer une courte période après la fin de la sélection                                | majuscule + F8 |
|   Jouer une courte période avant et après le début de la sélection                     | control + majuscule + F5 |
|    Jouer une courte période avant et après la fin de la sélection                      | control + majuscule + F7 |

## Commandes relatives au Tableau de pistes

|                                           Commande                                          | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                                 Passer à la piste précédente                                | Flèche haut |
|                                  passer à la piste suivante                                 | Flèche Bas |
|                               Se déplacer à la première piste                               | control + Début |
|                               Se déplacer à la dernière piste                               | control + Fin |
|                             Sélectionner/désélectionner la piste                            | Entrée |
|       Sélectionnez toutes les pistes (une plage de temps comprend alors tout l\'audio)      | control + A |
|   Désélectionner toutes les pistes (toutes les plages de temps sont aussi désélectionnées)  | control + majuscule + A |
|                                Sélectionnez toutes les pistes                               | control + majuscule + K |
|                     Ouvrir le menu contextuel de la piste sous le focus                     | majuscule + M ou Touche \"Applications\" |
|                          Fermer (Supprimer) la piste sous le focus                          | majuscule + C |

## Commandes relatives à une piste Audio

|                                 Commande                                          | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                Changer le gain de la piste sous le focus                        | majuscule + G |
|             Changer le panoramique de la piste sous le focus                    | majuscule + P |
|             Couper/rétablir le son de la piste sous le focus                    | majuscule + U |
|                    couper le son de toutes les pistes                            | control + U |
|                   Activer le son de toutes les pistes                      | control + majuscule + U |
|             Couper le son de toutes les pistes sélectionnées                  | control + alt + u |
|            Activer le son de toutes les pistes sélectionnées             | control + alt + majuscule +u |
|           Activer/désactiver Solo pour la piste sous le focus                   | majuscule + S |
|   Ouvrir/fermer le volet des effets en temps réel pour la piste ciblée                | e |

## Commandes relatives au Déplacement du curseur

|                          Command                                    | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|           Aller au début de pistes (temps zéro)                        | Début |
|               Aller à la fin de tout audio                              | Fin |
|   Aller au début de l\'audio de la pistes sélectionnée                   | J |
|   Aller à la fin de l\'audio de la pistes sélectionnée                   | K |
|   Nouvelle position du curseur à la position de lecture                  | \[ |
|      Arrêt de la lecture avec déplacement du curseur                     | X |
|                   Frottement en arrière                   | Appuyez et maintenez la touche u |
|                    Frottement en avant                    | Appuyez et maintenez la touche i |
|                    Petit saut arrière                                 | Virgule |
|                     Petit Saut avant                                   | Point |
|                    Grand saut arrière                           | majuscule + Virgule |
|                     Grand saut avant                             | majuscule + Point |
|      Curseur vers la gauche par une petite quantité                | Flèche Gauche |
|         Curseur à droite par une petite quantité                   | Flèche Droite |

## Commande relatives à la sélection d\'une plage de temps

|                                   Commande                                                 | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|   Sélectionner la plage de temps qui comprend l\'audio de toutes les pistes               | control + A |
|            Début de la Sélection au départ des pistes (temps zéro)                     | majuscule + Début |
|                   Fin de la Sélection à la fin de l\'audio                              | majuscule + Fin |
|                 Fin de la Sélection à la position de lecture                                  | \] |
|      Début de la sélection au début de l\'audio des pistes sélectionnées                 | majuscule + J |
|       Fin de la Sélection à la fin de l\'audio des pistes sélectionnées                  | majuscule + K |
|                         Étendre la sélection à droite                              | majuscule + flèche droite |
|                         Étendre la sélection à gauche                              | majuscule + flèche gauche |
|                       Contracter la sélection à droite                        | control + majuscule + flèche gauche |
|                       Contracter la sélection à gauche                        | control + majuscule + flèche droite |

## Commandes relatives à l\'édition audio

|                     Commande                        | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                      Annuler                       | control + Z |
|                     Rétablir                       | control + Y |
|           Supprimer la sélection audio                | Supp |
|            Couper l\'audio sélectionné             | control + X |
|            Copier l\'audio sélectionné             | control + C |
|                      Coller                        | control + V |
|   Remplacer l\'audio sélectionné par du silence    | control + L |
|          Dupliquer l\'audio sélectionné            | control + D |
|            Fermer (Supprimer) la piste            | majuscule + C |
|      Rechercher les croisements avec le zéro            | Z |

## Commandes relatives aux Marqueurs

|                     Commande                          | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|        Ajouter un marqueur à la sélection            | control + B |
|   Ajouter un marqueur à la position de lecture       | control + M |
|         Se Déplacer au marqueur suivant          | Alt + Flèche droite |
|        Se déplacer au marqueur précédent         | Alt + Flèche Gauche |
|         Sélectionnez le marqueur suivant                 | tab |
|        Sélectionnez le marqueur précédent          | majuscule + tab |

## Commandes relatives aux Clips

|              Commande                   | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|   Sélectionner le clip précédent        | Alt + , |
|    Sélectionner le clip suivant         | Alt + . |
|    Renommer le clip sélectionné      | contrôle + F2 |
|              Scinder                  | control + I |
|        supprimer - séparer         | control + Alt + K |
|          couper - séparer          | control + Alt + X |
|       Scinder comme nouveau        | control + Alt + I |
|        Scinder aux silences          | control + Alt + J |
|             Fusionner                 | control + J |

## Commandes relatives à l\'enregistrement audio

|                               Commande                                  | Raccourci |
|  | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
|                       Ajouter un enregistrement                             | R |
|                  Enregistrer dans une nouvelle Piste                  | majuscule + R |
|                     Enregistrement Punch and Roll                     | majuscule +d |
|                            Pause/reprendre                                  | P |
|                                Arrêter                                   | Espace |
|           Boite de dialogue \"sélection de l\'hôte audio\"            | majuscule + H |
|   Boite de dialogue \"Sélection du Périphérique d\'Enregistrement\"   | majuscule + I |
|     Boite de dialogue \"Sélection des Canaux d\'Enregistrement\"      | majuscule + N |


---

