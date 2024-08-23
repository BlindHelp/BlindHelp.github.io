--- 
title: radioCenter, extension pour NVDA permettant d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier

permalink: "/radioCenter/"
layout: post
author: BlindHelp
---

<footer> Publié le Mercredi 3 Juillet 2024 - Dernière mise à jour le Lundi 19 Août 2024</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente une nouvelle extension NVDA appelée radioCenter    
Cette extension vous permet d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier.    
Aussi nous permet d'ajouter des stations de radio à la carte, c'est-à-dire, par exemple si  vous connaissez le flux d'écoute de la radio vous pouvez l'ajouter individuellement dans l'extension, en faisant également référence à la recherche par Internet des pages qui nous fournissent de telles informations.    
Par exemple, voici un lien d'une page Web pour chercher des flux radio:    
[Flux Radios: France](https://fluxradios.blogspot.com/p/flux-radios-francaise.html)    
Consultez ce même lien pour rechercher plus de flux radios d'ici ou d'ailleurs. Il y a une flopée ! 😏    
L'extension radioCenter par défaut ne contient pas de stations de radio ajoutés dans la liste des stations laquelle est vide.    
radioCenter est comme cet agenda que nous achetons ou ce journal que nous avons commencé et que nous devons remplir à notre guise.    
C'est un bon moyen de gérer nos stations de radios facilement.    
Il faut cependant noter que depuis la version 3.0.x nous avons la possibilité de charger des stations radio et de les mettre dans cette liste générale initialement vide, Ci-dessous, j'explique tout ce que vous devez savoir et bien plus encore ! 😁    
* Auteur: Ruslan Dolovaniuk 🇺🇦
* Compatible NVDA: 2023.2 à 2024.2
* Version actuelle: 4.0.1 (comprend la traduction en espagnol et en français depuis la  version 2.1.0, fait par mes soins envoyé à l'auteur en privé).
* Extension disponible sur [l'Add-on Store](https://nvdaes.github.io/nvdastore/) comme nom: radioCenter
* Voir son repos sur [GitHub](https://github.com/DollaR84/radioCenter)

Lorsque cette extension est mise à jour, elle ne doit pas être en cours d'exécution, c'est-à-dire qu'aucune radio ne doit être en cours de lecture/enregistrement.    

, si vous souhaitez en savoir plus n'hésitez pas à lire la documentation trouvée ci-dessous désormais traduite en français ! Vous la trouverez également dans l'extension radioCenter dans le dossier doc, fr    
Et en bonus après cette documentation vous trouverez comment ajouter des flux radio dans la section [Configuration rapide par BlindHelp](#configuration-rapide-par-blindhelp) et autres paramétrages à faire pour vous faciliter la tâche, inclus comment mettre à jour les collections de radio et beaucoup plus.    

# radioCenter

* Auteur: Ruslan Dolovaniuk (Ukraine)
* PayPal: ruslan.dolovaniuk84@gmail.com

cette extension vous permet d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier.
L'enregistrement d'une station de radio n'interfère pas avec l'écoute d'une autre station de radio.

Dans les collections, en plus des annuaires Internet, il est également possible d'ajouter un répertoire local avec des fichiers m3u.
Pour obtenir une collection locale, vous devez spécifier le chemin de base du répertoire dans les paramètres.
Tous les fichiers m3u de ce répertoire et tous ses sous-répertoires seront automatiquement analysés.

Avertissements!
Vérifier les stations de radio à partir des collections est un processus assez long et gourmand en ressources.
Il est recommandé de l'exécuter par parties, en fermant périodiquement la fenêtre, et de le réexécuter plus tard.
Après avoir rouvert la fenêtre des collections, les tests se poursuivront jusqu'à ce que toutes les stations de radio aient été vérifiées.
De plus, l'état de santé des liens change souvent, il est donc recommandé de vérifier l'état du lien sur le moment avant de l'ajouter à la liste générale.


## Liste des raccourcis clavier:
* NVDA+ALT+P: lire/mettre en pause la radio ;
* NVDA+ALT+P double clic: désactiver la radio ;
* NVDA+ALT+M: activer/désactiver le mode sourdine ;
* NVDA+ALT+Flèche Haut: augmenter le volume ;
* NVDA+ALT+Flèche Bas: réduire le volume ;
* NVDA+ALT+Flèche Droit: station suivante ;
* NVDA+ALT+Flèche Gauche: station précédente ;
* NVDA+ALT+O: obtenir des informations sur la station ;
* NVDA+ALT+R: ouvrir la fenêtre Contrôle Radio Center ;
* ÉCHAP: fermer les fenêtres Contrôle Radio Center et Collections de Radio ;
* CTRL+C: copier le lien de la station de radio dans le presse-papiers ;

Lors d'un tri manuel dans la liste des stations:
* ALT+Flèche Haut: déplacer la station vers une position plus haute ;
* ALT+Flèche Bas: déplacer la station vers une position plus basse ;

Dans les listes de collections:
* ALT+Flèche Haut ou ALT+Flèche Droit: basculer vers le suivant lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* ALT+Flèche Bas ou ALT+Flèche Gauche: basculer vers le précédent lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* CTRL+C: copier le lien de la station dans le presse-papiers ;

## Tri des stations:
* sans trier ;
* par nom croissant (de A à Z) ;
* par nom décroissant (de Z à A) ;
* par priorité et par nom croissant (de A à Z) ;
* par priorité et nom décroissant (de Z à A) ;
* manuellement ;

## Liste des changements:
### Version 4.0.0
* pour NVDA 2023, les collections sont compatibles, à l'exception d'un navigateur radio ;
* créé une collection de vérification des fichiers m3u sur le stockage local ;
* ajout d'un menu de contrôle au menu NVDA ;
* filtres déplacés vers une boîte de dialogue séparée ;
* ajout de la lecture sonore lors de la vérification manuelle d'une station dans les collections ;
* correction d'une erreur de vérification de la station flottante après l'application de filtres ;

### Version 3.6.0
* apporté des modifications pour la compatibilité avec nvda 2023 (les collections sont désactivées pour la version 2023) ;
* ajout de la prise en charge des liens m3u ;
* ajout d'ignorer la casse lors du filtrage par nom et/ou information ;
* ajout de la suppression des espaces au début et à la fin des noms des stations de radio lors de l'analyse dans les collections ;
* ajout de la prononciation de l'état de la station lors de la vérification manuelle à l'aide du bouton de test dans les collections ;
* correction d'une erreur flottante lors de la mise à jour des collections ;

### Version 3.2.0
* ajout de la prise en charge des liens .pls ;
* ajout d'un nom à partir des informations du flux audio lors de la sauvegarde du fichier enregistré ;
* ajout de la gestion des erreurs lorsque l'enregistrement ne peut pas être démarré ;

### Version 3.0.0
* créé un mécanisme de collection pour sélectionner les stations de radio à partir des catalogues ;
* ajouté 3 collections avec des stations de radio ;
* créé un mécanisme pour vérifier automatiquement la fonctionnalité de chaque station de radio dans les collections ;
* ajout d'une vérification manuelle de la fonctionnalité de la station de radio ;
* ajout de la lecture de la radio directement dans la liste des collections ;
* ajout de la sauvegarde des stations de radio à partir de la collection vers la liste générale ;
* ajout d'un filtrage dans les collections par statut ;
* ajout du filtrage dans les collections par texte dans le titre ;
* ajout du filtrage dans les collections par texte dans les informations supplémentaires ;
* ajout de la fermeture des dialogues en appuyant sur ÉCHAP ;
* ajout de la copie du lien de la station de radio dans le presse-papiers dans la liste principale et dans les listes de collection ;
* basculement  des stations améliorées à l'aide de touches de raccourci, car auparavant, elles ne basculent pas toujours ;

### Version 2.1.0
* ajout d'une vérification et d'une correction si des erreurs sont trouvées dans l'indexation des stations ;
* ajout de la localisation espagnole (Rémy Ruiz) ;
* ajout de la localisation française (Rémy Ruiz) ;

### Version 2.0.0
* ajout de la possibilité d'enregistrer un flux audio dans un fichier ;

### Version 1.5.3
* ajout de la localisation tchèque (Jiri Holz) ;

### Version 1.5.1
* ajout d'une vérification de la fonctionnalité du lien avant d'ajouter une nouvelle station de radio ;
* ajout d'une vérification de la fonctionnalité du lien avant de modifier le lien de la station de radio ;
* correction d'un certain nombre d'erreurs mineures de fonctionnement ;

### Version 1.4.2
* ajout du tri manuel des stations ;
* ajout d'une combinaison de touches pour le mode muet ;

### Version 1.2.5
* paramètres ajoutés au panneau de paramètres NVDA ;
* ajout de la possibilité de modifier une station de radio existante ;
* ajout de plusieurs options pour trier les stations de radio ;
* changé la fonction de sourdine ;
* correction du problème d'ouverture de plusieurs fenêtres de contrôle; 

### Version 1.1.1
* ajout de la localisation turque (Umut Korkmaz) ;

### Version 1.1.0
* ajout du GUI au Control Radio Center ;

### Version 1.0.0
* création d'une radio en ligne sur le lecteur VLC de base ;

---

### Configuration rapide par BlindHelp<a name=" configuration-rapide-par-blindhelp"></a>

Une fois cette extension installée vous devrez d'abord mettre le chemin du répertoire de sortie d'enregistrement dans dans les Préférences de NVDA, Paramètres… sous la catégorie Radio Center, pour que le bouton d'enregistrement soit affiché lors de l'écoute d'un flux radio Quand on ouvre la fenêtre Contrôle Radio Center  en cliquant sur l'élément:    
ouvrir la fenêtre Contrôle Radio Center    
En utilisant le geste de commande:    
NVDA+alt+r (clavier, toutes les dispositions)    
Aller dans le menu NVDA puis dans Préférences puis Gestes de commandes sous la catégorie Radio Center et chercher:    
ouvrir la fenêtre Contrôle Radio Center    
Faire une fois Tab, puis cliquez sur le bouton:    
Exécuter le script Alt+e    

Vous devrez ensuite mettre les flux d'écoute radio dans l'extension radioCenter pour que cette extension puisse les lire.    
Pour cela, vous devez ouvrir la fenêtre Contrôle Radio Center  en cliquant sur l'élément:    
ouvrir la fenêtre Contrôle Radio Center    
Faire une fois Tab, puis cliquez sur le bouton:    
Exécuter le script Alt+e    
 
Une fois la fenêtre Contrôle Radio Center ouverte:    
1. Dans le champ nom de la station: on met le nom de la station, par exemple:    
Radio Paradise    
Vérifiez que le nom de la station que vous avez écrit est correct.    
2. Dans le champ url de la station: on met le lien d'écoute directe, par exemple pour la radio Radio Paradise    le lien serait le suivant:    
http://stream-tx4.radioparadise.com/aac-320    
Vérifiez que le lien que vous avez écrit est correct.    
3. Faire Entrée.     
Vous serez averti par un message si la radio est fonctionnelle ou non.    
Le lien vers le flux audio de la station radio a été vérifié avec succès    
ou:    
Le lien vers le flux audio de la station radio ne fonctionne pas    

Si la station a été ajouté avec succès, dans la liste nous avons notre nouvelle station ajoutée par ordre alphabétique ou non.    
Sachant que l'extension est livrée sans aucun flux d'écoute dans cette liste générale, une fois notre lien d'écoute ajouté, celui-ci sera affiché de cette façon:    
Radio Paradise: http://stream-tx4.radioparadise.com/aac-320    

Il faut cependant noter que depuis la version 3.0.x nous avons la possibilité de charger des stations radio et de les mettre dans cette liste générale initialement vide, j'expliquerai cette partie ci-dessous.    

Toujours dans la fenêtre Contrôle Radio Center Une fois notre curseur sur le nom et le lien de notre station dans la liste des stations, nous aurons les boutons:    
Lire pour lire la station de radio.    
Lorsque la station est en cours de lecture, en faisant Tab, vous trouverez le bouton:    
Pause pour mettre en pause celle-ci.    
Il faudra appuyer sur le bouton:    
Lire pour continuer la lecture depuis ladite station ou une autre selon l'endroit où se trouve le curseur dans la liste des stations.    
Puis en faisant une fois de plus Tab, vous trouverez le bouton:    
Arrêter pour arrêter ou plutôt dit désactiver la station en cours de lecture.    

En faisant une fois de plus Tab, si la station est en cours de lecture vous trouverez le bouton:    
Couper le son    
Une fois cliqué sur lui  ce bouton deviendra:    
Rétablir le son    
Si nous tabulons, Vous trouverez le bouton:    
Supprimer pour supprimer la station de la liste des stations (ceci est irréversible) ( Attention : pour ce faire, vous devez avoir la station arrêtée, c'est-à-dire pas en cours de lecture.    
Nous aurons également les boutons:    
Ajouter pour ajouter un flux d'une station de radio.    
Modifier pour modifier celle-ci.    
Enregistrer pour enregistrer la station en cours de lecture, sans oublier que vous devez d'abord définir le chemin dans les Préférences de NVDA, Paramètres… sous la catégorie Radio Center    
Catégories : liste Alt+ c    
Radio Center    
Faire Tab:    
Radio Center page de propriété    
Trier par: liste déroulante rien réduit    
Chemin d'accès au dossier d'enregistrement groupe    
Par exemple:    
édition sélectionné `C:\Users\NomUtilisateur\Documents`    
Parcourir... bouton    
Ok bouton    
Annuler bouton    

Une fois cela fait, dans la fenêtre Contrôle Radio Center, le bouton appelé : Enregistrer apparaîtra en écoutant un flux radio.    

Quand on clique sur le bouton:    
Enregistrer    
Ce bouton deviendra:    
Arrêter l'enregistrement    

Quand on clique sur le bouton:    
Arrêter l'enregistrement    
Ce bouton deviendra:    
Enregistrer    

Ensuite une boîte de dialogue s'ouvre comme nnom:    
Sélectionner le fichier à enregistrer dialogue    
Nom du fichier : liste déroulante    
édition ALT+ N sélectionné 00000001.aac    
Type : liste déroulante Fichiers audio (*.mp3;*.aac    
Enregistrer bouton Alt+ e    

Voilà que notre fichier audio est enregistré dans le chemin que nous avons défini dans les Préférences de NVDA, Paramètres… sous la catégorie Radio Center    

Nous avons aussi le bouton Fermer pour fermer la fenêtre Contrôle Radio Center    

Remarque : S'il y a une station en cours de lecture et la fenêtre Contrôle Radio Center est fermée, la station de radio continuera à être diffusée en arrière-plan. Vous devez ouvrir la fenêtre Contrôle Radio Center en cliquant sur l'élément:    
ouvrir la fenêtre Contrôle Radio Center    
en utilisant le geste de commande:    
NVDA+alt+r (clavier, toutes les dispositions)    
Aller dans le menu NVDA puis dans Préférences puis Gestes de commandes sous la catégorie Radio Center et chercher:    
ouvrir la fenêtre Contrôle Radio Center    
Faire une fois Tab, puis cliquez sur le bouton:    
Exécuter le script Alt+e    

Si ce geste de commande ne vous convient pas, vous pouvez  le changer dans le dialogue Gestes de commandes de NVDA sous la catégorie Radio Center et chercher:    
ouvrir la fenêtre Contrôle Radio Center    
Je pense que l'on peut faire la même chose avec les autres gestes de commandes décrits dans la documentation.    

Rappelez-vous que la combinaison de touches ne soit pas assignée à une autre fonction d'une autre extension ou ne se chevauchent pas avec l'une des applications que nous utilisons.    

Si vous avez l'extension de Paul ber qui s'appelle : Extension des commandes de base de NVDA installée, elle peut faire l'affaire.    
* Version actuelle: [13.3](https://github.com/paulber007/AllMyNVDAAddons/raw/master/NVDAExtensionGlobalPlugin/NVDAExtensionGlobalPlugin-13.3.nvda-addon)
* Compatible NVDA: 2022.1 à 2024.1    
* Voir son repos sur [GitHub](https://github.com/paulber19/NVDAExtensionGlobalPlugin)

Si cette extension n'est pas installée, vous pouvez également utiliser l'extension de <span lang="es">Javi Dominguez</span> appelée commandHelper (Assistant de commandes) Cette extension fait également son job.    
* Compatible NVDA: 2023.1 à 2024.1    
* Voici une brève description: Fournit une autre méthode d'exécution de scripts pour les personnes qui ont des difficultés à appuyer sur des combinaisons de touches compliquées.    
* Extension disponible sur [l'Add-on Store](https://nvdaes.github.io/nvdastore/) comme nom: commandHelper    
* Voir son repos sur [GitHub](https://github.com/javidominguez/commandHelper/)

Malheureusement c'est le cas de cette extension appelée: radioCenter que ses gestes sont compliqués à faire mais avec ces deux extensions citées ci-dessus on peut utiliser l'extension sans problème.    

Dans le dossier nvda nous trouverons le fichier appelé :    
radio_center.dat    
Celui-ci contient toutes nos modifications et radios ajoutées dans l'extension radioCenter.    

J'ai aussi oublié de vous dire que dans le dialogue Contrôle Radio Center nous aurons deux listes déroulantes  comme suit:    

La première liste déroulante  pour définir le type de priorité pour déplacer la station vers une position comme suit:    
Priorité: liste déroulante milieu réduit    
(valeur par défaut)    
Utilisez les touches fléchées pour choisir entre:     
haut    
milieu    
bas    

La deuxième liste déroulante  pour trier les stations comme suit:    
Trier par: liste déroulante rien réduit    
(valeur par défaut)    
Utilisez les touches fléchées pour choisir entre:     
rien    
nom croissant (de A à Z)    
nom décroissant (de Z à A)    
priorité croissante (de A à Z)    
priorité décroissante (de Z à A)    
manuel    

Cette dernière consiste à trier manuellement la liste des stations.    

### Charger des stations radio et de les mettre dans cette liste générale initialement vide depuis la version 3.0.x par BlindHelp

Comme je l'ai dit presque au début du post, radioCenter et globalement une excellente extension, presque subliminal, maintenant elle nous donne la possibilité de charger des radios, en utilisant trois services depuis la version 3.0.x...    
Lorsqu'on clique sur ouvrir la fenêtre Contrôle Radio Center    
Nous allons maintenant trouver un nouvel élément appelé :    
Collections bouton    
Si nous cliquons sur ce bouton, une fenêtre s'ouvrira comme nom :    
Collections de Radio    
Ensuite, nous retrouverons trois onglets :    

* Radio Browser
* Internet Radio Streams
* Mp3 Radio Stations

Appuyez sur "Tabulation" et "Majuscule+Tabulation" pour se déplacer entre les éléments de l'onglet respectif.

Liste des stations : groupe    
liste    
Celle-ci est vide par défaut.    
Mise à jour bouton    
Fermer bouton    
Filtrer par type de statut : liste déroulante tous réduit    
(Celui-ci est le choix par défaut)    
Utilisez les touches fléchées pour trouver les autres types de statut :    
non vérifié    
Cela signifie que le flux radio n'est pas vérifié.    
ne fonctionne pas    
Cela signifie que le flux radio ne fonctionne pas.    
fonctionne    
Cela signifie que le flux radio fonctionne.    

Remarque : ce filtrage par type de statut sera modifié de la même manière selon votre choix pour les trois onglets respectifs.    
tous    
non vérifié    
ne fonctionne pas    
fonctionne    

On retrouvera également deux champs d'édition :    
Filtrer par nom : édition ligne 1 vide    
Je pense qu'on peut taper le nom d'une station par exemple.    

Filtrer par informations : édition ligne 1 vide    
Je pense qu'on peut taper les information que nous souhaitons par exemple le nom du pays.    

Une fois ces étapes franchies appuyez sur :    
Mise à jour bouton    

La liste sera chargée avec toutes les stations selon l'onglet choisi.    
Vous pouvez maintenant rechercher la station dans la liste, vous pouvez par exemple taper sa lettre initiale.    
j pour jazz par exemple.    
Jazz; Statut: fonctionne; Informations: France; FR; 192; MP3; URL: https://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3    
Une fois que vous placez le curseur sur la station souhaitée, si nous tabulons, nous trouverons les boutons :    
Test bouton    
Il est préférable de cliquer sur ce bouton pour tester la station pour savoir avant tout si elle est fonctionnelle.    
Lire bouton    
Cliquez sur ce bouton pour commencer à écouter cette station.    
Une fois que vous placez le curseur sur la station souhaitée, vous pouvez copier son lien dans le presse-papiers si vous souhaitez le partager avec vos amis, par exemple en appuyant sur Ctrl+c, en obtenant le message suivant :    
Lien copié dans le presse-papiers    
Ce bouton une fois la lecture démarrée deviendra:    
Arrêter bouton    
Une fois que nous aurons cliqué sur ce bouton, nous aurons le message suivant :    
la radio est désactivé    
Cliquez sur le bouton :    
Fermer    
Pour fermer la fenêtre appelée :    
Collections de Radio    
Maintenant, nous allons nous retrouver dans la fenêtre :    
Contrôle Radio Center    
Cherchez et cliquez sur le bouton :    
Fermer    
Pour fermer ladite fenêtre.    

Ne le faites que si vous n'avez pas besoin de mettre à jour les flux des radios depuis la fenêtre appelée Collections de Radio à l'aide du bouton :    
    Collections    

Note : Dans les versions précédentes de cette extension, il y avait un bug lorsque nous voulions mettre à jour le contenu de chaque onglet. Laissez-moi mieux vous expliquer :    
C'est-à-dire qu'il était possible que lors d'une mise à jour des stations de radio la liste des radios soit vide dans un des trois onglets ou peut-être tous.    
Même si j'ai cliqué sur :    
Mise à jour bouton    
Je reçois bien le message :    
Mise à jour des données de collection  maintenant    

Il faut insister en cliquant sur ledit bouton, et vous obtiendrez le message suivant :    
Données de collection mises à jour avec succès    

Maintenant, ce bug a été corrigé dans la version 3.6.0    
Maintenant, sans aucun problème, vous pouvez cliquer sur l'élément appelé :    
Mise à jour bouton    
Une fois l'extension mise à jour, vous devrez cliquer sur ledit bouton dans chaque onglet pour avoir la liste des stations mises à jour.    

Vous recevrez le message suivant pour chaque onglet une fois la mise à jour terminée :    
Données de collection mises à jour avec succès    

Note : dans l'onglet: Radio Browser    
Le bouton Lire ou Arrêter parfois Il est étiqueté comme : bouton focalisé    

Dans l'onglet: Internet Radio Streams    
Nous retrouverons quelques radios de la BBC par exemple.    

Dans l'onglet: Radio Browser    
Nous retrouverons une radio de la BBC par exemple.    

Le contenu des radios qui apparaissent dans chaque liste selon l'onglet choisi peut changer.    

Quand on est placé dans la liste des radio d'un des trois onglets :    

* Radio Browser
* Internet Radio Streams
* Mp3 Radio Stations

On retrouvera le bouton :    
Ajouter station    
Une fois cliqué dessus, nous aurons le message suivant :    
La station a été ajoutée à la liste générale    

Cette liste générale se trouve dans la fenêtre :    
Contrôle Radio Center    

Si vous vous souvenez bien, cette liste est vide par défaut et vous pouvez ajouter une station manuellement en plaçant son flux d'écoute dans cette liste qu'on appelle liste générale.    

Il faut cependant noter que depuis la version 3.0.x nous avons la possibilité de charger des stations radio et de les mettre dans cette liste générale initialement vide comme expliqué ci-dessus.    

La station ajoutée sera enregistré dans le fichier : radio_center.dat    

Aussi, après avoir effectué tous les ajouts, je vous conseille de sauvegarder ce fichier au cas où.    

Vous pouvez aussi utiliser la touche ÉCHAP pour fermer les fenêtres Contrôle Radio Center et Collections de Radio.    

Également dans le dialogue Gestes de commandes de NVDA, il existe une section Radio Center, où vous pouvez modifier les combinaisons de touches pour les actions de base.    

### Ajouter un répertoire local avec des fichiers m3u contenant les flux des stations de radio depuis la version 4.0.0 par BlindHelp

À partir de la nouvelle version 4.0.0 dans les collections, en plus des annuaires Internet, il est également possible d'ajouter un répertoire local avec des fichiers m3u contenant les flux des stations de radio.    
Pour obtenir une collection locale, vous devez spécifier le chemin de base du répertoire dans les paramètres de NVDA dans la catégorie Radio Center.    

Par exemple, dans ma configuration de la nouvelle extension radioCenter cela ressemble à ceci :    
`Radio Center page de propriété`    
`Trier par: liste déroulante rien réduit`    
`Chemin d'accès au dossier d'enregistrement groupe`    
Par exemple:    
édition sélectionné `C:\Users\NomUtilisateur\Documents`    
`Parcourir... bouton`    
`Chemin d'accès au répertoire de base de la collection du système de fichiers groupe`    
Par exemple:    
édition `C:\Web Radios Francophones`    
`Parcourir... bouton`    
`Ok bouton`    
`Annuler bouton`    

Sans oublier que vous devez sauvegarder les nouveaux paramètres NVDA, donc pour ce faire:    
Allez au Menu NVDA (nvda+n)    
Et faites Entrée sur l'élément appelé :    
`Sauvegarder la configuration s`

Dans notre cas une fois configuré le chemin du répertoire locale avec des fichiers m3u contenant les flux des stations de radio nous trouverons un nouvel onglet appelé :    
`File System`    

## Comment ajouter un répertoire local avec des fichiers m3u contenant les flux des stations de radio pas à pas par BlindHelp

1. Vous devez d'abord télécharger et décompresser l'archive zip appelé :    
[Web-Radios-Francophones.zip](https://blindhelp.github.io/Web-Radios-Francophones.zip)    
2. Une fois que vous avez décompressé l'archive zip vous trouverez un répertoire appelé :    
`Web Radios Francophones`
3. Vous pouvez mettre ce répertoire par exemple dans le chemin :    
`C:\Web Radios Francophones`    
4. Configurez le chemin comme indiqué ci-dessus dans les paramètres NVDA pour ledit répertoire.    
5. Cliquez sur le bouton `Collections`    
Si nous cliquons sur ce bouton, une fenêtre s'ouvrira comme nom :    
`Collections de Radio`    
6. Recherchez le quatrième onglet appelé :    
`File System`    
7. Une fois ces étapes franchies appuyez sur :    
`Mise à jour bouton`    
8. Vous recevrez le message suivant pour l'onglet `File System` une fois la mise à jour terminée :    
`Données de collection mises à jour avec succès`    
9. La liste sera chargée avec toutes les stations trouvés dans le répertoire locale avec des fichiers m3u contenant les flux des stations de radio.    
10. Une fois que vous placez le curseur sur la station souhaitée, si nous tabulons, nous trouverons les boutons :    
Test bouton    
Il est préférable de cliquer sur ce bouton pour tester la station pour savoir avant tout si elle est fonctionnelle.    
Lire bouton    
Cliquez sur ce bouton pour commencer à écouter cette station.    
Une fois que vous placez le curseur sur la station souhaitée, vous pouvez copier son lien dans le presse-papiers si vous souhaitez le partager avec vos amis, par exemple en appuyant sur Ctrl+c, en obtenant le message suivant :    
Lien copié dans le presse-papiers    
Ce bouton une fois la lecture démarrée deviendra:    
Arrêter bouton    
Une fois que nous aurons cliqué sur ce bouton, nous aurons le message suivant :    
la radio est désactivé    
Cliquez sur le bouton :    
Fermer    
Pour fermer la fenêtre appelée :    
Collections de Radio    
Maintenant, nous allons nous retrouver dans la fenêtre :    
Contrôle Radio Center    
Cherchez et cliquez sur le bouton :    
Fermer    
Pour fermer ladite fenêtre.    

Voilà, maintenant tu sais comment ajouter un répertoire local avec des fichiers m3u contenant les flux des stations de radio.😏     

### Quelques conseils donnés par l'auteur de l'extension radioCenter

A propos de la mise à jour dans les onglets à partir de  Collections de Radio.    

Le bouton Mise à jour met à jour les données uniquement pour l'onglet actuellement ouvert.    

Ainsi, il faut le lancer 3 fois, pour chaque onglet ouvert séparément.    

Mais vous n'êtes pas obligé de le faire en même temps, un à la fois.    

Après chaque mise à jour, une vérification de la fonctionnalité de tous les liens démarrera automatiquement.    

Il s'agit d'un processus assez gourmand en ressources, je vous conseille donc de mettre à jour l'onglet suivant après avoir vérifié toutes les stations de radio de l'onglet précédent.    

Je vous conseille également de lire les stations après avoir effectué la vérification.    

Le nombre de stations de radio déjà vérifiées peut être vu grâce au statut de la station dans la liste.    

S'il y a des stations avec le statut : "non vérifié",    

Cela signifie que la station n'a pas encore été vérifiée jusqu'à ce que son statut passe à : « fonctionne » ou « ne fonctionne pas ».    

Aussi, pour éviter les blocages, je vous conseille d'effectuer la vérification par parties, en fermant parfois la fenêtre de Collections de Radio et en la redémarrant après un certain temps, ou mieux encore, après avoir redémarré nvda.    

Une fois terminé, le résultat de la vérification sera enregistré dans le fichier : radio_collections.dat    

Aussi, après avoir effectué toutes les vérifications, je vous conseille de sauvegarder ce fichier au cas où.    

Je vais aussi réfléchir à la façon de réduire la charge lors des vérifications pour que NVDA ne plante pas, mais jusqu'à présent, cela ressemble à un défaut de python : avec un grand nombre de processus, la mémoire occupée par les processus de vérification déjà terminés n'est pas complètement libéré.    

A propos de : "certains éléments qui apparaissent dans la documentation et ne sont pas dans l'interface radioCenter"    

Certaines combinaisons sont ajoutées par wxpython lui-même sans la fonctionnalité NVDA, il n'y a donc aucun moyen de les ajouter aux gestes de commandes NVDA.    

Par exemple :    

* NVDA+ALT+P double clic: désactiver la radio ;
* CTRL+C: copier le lien de la station de radio dans le presse-papiers ;

Etc, Etc, Etc...    

Les gestes de commandes NVDA qui apparaissent à l'ouverture de la catégorie Radio Center dans le dialogue Gestes de commandes, pour le moment il y en a huit, donc les voici :    

Radio Center développé  (le numéro de l'extension installée est affiché puis le nombre d'extensions que vous avez installées est affiché par exemple, 26 sur 32 niveau 0    
niveau 1 augmenter le volume réduit 1 sur 8    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+flèche haut (clavier, toutes les dispositions)    

couper/rétablir le son réduit 2 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+m (clavier, toutes les dispositions)    

lire/mettre en pause la radio réduit 3 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+p (clavier, toutes les dispositions)    

obtenir des informations sur la station réduit 4 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+o (clavier, toutes les dispositions)    

ouvrir la fenêtre Contrôle Radio Center réduit 5 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+r (clavier, toutes les dispositions)    

réduire le volume réduit 6 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :     
NVDA+alt+flèche bas (clavier, toutes les dispositions)    

station précédente réduit 7 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+flèche gauche (clavier, toutes les dispositions)    

station suivante réduit 8 sur 8 niveau 1    
Une fois développé  voici son geste de commande par défaut :    
NVDA+alt+flèche droite (clavier, toutes les dispositions)    

Voici donc les combinaisons qui sont ajoutées par wxpython lui-même sans la fonctionnalité NVDA, il n'y a donc aucun moyen de les ajouter aux gestes de commandes NVDA :    

* NVDA+ALT+P double clic: désactiver la radio ;
* CTRL+C: copier le lien de la station de radio dans le presse-papiers ;

Lors d'un tri manuel dans la liste des stations:

* ALT+Flèche Haut: déplacer la station vers une position plus haute;
* ALT+Flèche Bas: déplacer la station vers une position plus basse;

Dans les listes de collections:

* ALT+Flèche Haut ou ALT+Flèche Droit: basculer vers le suivant lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* ALT+Flèche Bas ou ALT+Flèche Gauche: basculer vers le précédent lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* CTRL+C: copier le lien de la station dans le presse-papiers ;

Et enfin, n'oubliez pas d'utiliser la touche ÉCHAP pour fermer les fenêtres Contrôle Radio Center et Collections de Radio.    

---

Je pense avoir fait le tour de cette extension radioCenter !    
En espérant que cela vous aide, et maintenant c'est à votre tour de profiter davantage de cette extension radioCenter pour NVDA en écoutant une multitude de stations de radio ! 😏    
Voila, je vous  souhaite une bbonne utilisation de l'extension radioCenter ! :)    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---