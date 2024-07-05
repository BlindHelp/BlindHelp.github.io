--- 
title: radioCenter, extension pour NVDA permettant d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier

permalink: "/radioCenter/"
layout: post
author: BlindHelp
---

<footer> Publié le Mercredi 3 Juillet 2024 - Dernière mise à jour le Jeudi 4 Juillet 2024</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente une nouvelle extension NVDA appelée radioCenter    
Cette extension vous permet d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier.    
Aussi nous permet d'ajouter des stations de radio à la carte, c'est-à-dire, par exemple si  vous connaissez le flux d'écoute de la radio vous pouvez l'ajouter individuellement dans l'extension, en faisant également référence à la recherche par Internet des pages qui nous fournissent de telles informations.    
L'extension radioCenter par défaut ne contient pas de stations de radio ajoutés dans la liste des stations laquelle est vide.    
radioCenter est comme cet agenda que nous achetons ou ce journal que nous avons commencé et que nous devons remplir à notre guise.    
C'est un bon moyen de gérer nos stations de radios facilement.    
* Auteur: Ruslan Dolovaniuk
* Compatible NVDA: 2021.2 à 2024.1
* Version actuelle: 2.1.0 (comprend la traduction en espagnol et en français fait par mes soins envoyé à l'auteur en privé).
* Extension disponible sur [l'Add-on Store](https://nvdaes.github.io/nvdastore/) comme nom: radioCenter
* Voir son repos sur [GitHub](https://github.com/DollaR84/radioCenter)

, si vous souhaitez en savoir plus n'hésitez pas à lire la documentation trouvée ci-dessous désormais traduite en français ! Vous la trouverez également dans l'extension radioCenter dans le dossier doc, fr    
Et en bonus après cette documentation vous trouverez comment ajouter des flux radio dans la section [Configuration rapide par BlindHelp](#configuration-rapide-par-blindhelp) et autres paramétrages à faire pour vous faciliter la tâche.    

# radioCenter

* Auteur: Ruslan Dolovaniuk (Ukraine)
* PayPal: ruslan.dolovaniuk84@gmail.com

cette extension vous permet d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier.
L'enregistrement d'une station de radio n'interfère pas avec l'écoute d'une autre station de radio.


## Liste des raccourcis clavier:
* NVDA+ALT+P: lire/mettre en pause la radio;
* NVDA+ALT+M: activer/désactiver le mode sourdine;
* NVDA+ALT+Flèche Haut: augmenter le volume;
* NVDA+ALT+Flèche Bas: réduire le volume;
* NVDA+ALT+Flèche Droit: station suivante;
* NVDA+ALT+Flèche Gauche: station précédente;
* NVDA+ALT+O: obtenir des informations sur la station;
* NVDA+ALT+R: ouvrir la fenêtre Contrôle Radio Center;

Lors d'un tri manuel dans la liste des stations:
* ALT+Flèche Haut: déplacer la station vers une position plus haute;
* ALT+Flèche Bas: déplacer la station vers une position plus basse;

## Tri des stations:
* sans trier;
* par nom croissant (de A à Z);
* par nom décroissant (de Z à A);
* par priorité et par nom croissant (de A à Z);
* par priorité et nom décroissant (de Z à A);
* manuellement;

## Liste des changements:
### Version 2.1.0
* ajout d'une vérification et d'une correction si des erreurs sont trouvées dans l'indexation des stations ;
* ajout de la localisation espagnole (Rémy Ruiz) ;
* ajout de la localisation française (Rémy Ruiz);

### Version 2.0.0
* ajout de la possibilité d'enregistrer un flux audio dans un fichier;

### Version 1.5.3
* ajout de la localisation tchèque (Jiri Holz);

### Version 1.5.1
* ajout d'une vérification de la fonctionnalité du lien avant d'ajouter une nouvelle station de radio;
* ajout d'une vérification de la fonctionnalité du lien avant de modifier le lien de la station de radio;
* correction d'un certain nombre d'erreurs mineures de fonctionnement;

### Version 1.4.2
* ajout du tri manuel des stations;
* ajout d'une combinaison de touches pour le mode muet;

### Version 1.2.5
* paramètres ajoutés au panneau de paramètres NVDA;
* ajout de la possibilité de modifier une station de radio existante;
* ajout de plusieurs options pour trier les stations de radio;
* changé la fonction de sourdine;
* correction du problème d'ouverture de plusieurs fenêtres de contrôle;

### Version 1.1.1
* ajout de la localisation turque (Umut Korkmaz);

### Version 1.1.0
* ajout du GUI au Control Radio Center;

### Version 1.0.0
* création d'une radio en ligne sur le lecteur VLC de base;

---

### Configuration rapide par BlindHelp<a name=" configuration-rapide-par-blindhelp"></a>

Une fois cette extension installée vous devrez d'abord mettre le chemin du répertoire de sortie d'enregistrement dans dans les Préférences de NVDA, Paramètres… sous la catégorie RadioCenter, pour que le bouton d'enregistrement soit affiché lors de l'écoute d'un flux radio Quand on ouvre la fenêtre Contrôle Radio Center  en cliquant sur l'élément:    
ouvrir la fenêtre Contrôle Radio Center    
En utilisant le geste de commande:    
NVDA+alt+r (clavier, toutes les dispositions)    
Aller dans le menu NVDA puis dans Préférences puis Gestes de commandes sous la catégorie RadioCenter et chercher:    
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
Sachant que l'extension est livrée sans aucun flux d'écoute, une fois notre lien d'écoute ajouté, celui-ci sera affiché de cette façon:    
Radio Paradise: http://stream-tx4.radioparadise.com/aac-320    

Toujours dans la fenêtre Contrôle Radio Center Une fois notre curseur sur le nom et le lien de notre station dans la liste des stations, nous aurons les boutons:    
Lire pour lire la station de radio.    
Lorsque la station est en cours de lecture, en faisant Tab, vous trouverez le bouton:    
Pause pour mettre en pause celle-ci.    
Il faudra appuyer sur le bouton:    
Lire pour continuer la lecture depuis ladite station ou une autre selon l'endroit où se trouve le curseur dans la liste des stations.    
Puis en faisant une fois de plus Tab, vous trouverez le bouton:    
Arrêter pour arrêter la station en cours de lecture.    
En faisant une fois de plus Tab, si la station est en cours de lecture vous trouverez le bouton:    
Couper le son    
Une fois cliqué sur lui  ce bouton deviendra:    
Rétablir le son    
Si nous tabulons, Vous trouverez le bouton:    
Supprimer pour supprimer la station de la liste des stations (ceci est irréversible) ( Attention : pour ce faire, vous devez avoir la station arrêtée, c'est-à-dire pas en cours de lecture.    
Nous aurons également les boutons:    
Ajouter pour ajouter un flux d'une station de radio.    
Modifier pour modifier celle-ci.    
Enregistrer pour enregistrer la station en cours de lecture, sans oublier que vous devez d'abord définir le chemin dans les Préférences de NVDA, Paramètres… sous la catégorie RadioCenter    
Catégories : liste Alt+ c    
RadioCenter    
Faire Tab:    
RadioCenter page de propriété    
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

Voilà que notre fichier audio est enregistré dans le chemin que nous avons défini dans les Préférences de NVDA, Paramètres… sous la catégorie RadioCenter    

Nous avons aussi le bouton Fermer pour fermer la fenêtre Contrôle Radio Center    

Remarque : S'il y a une station en cours de lecture et la fenêtre Contrôle Radio Center est fermée, la station de radio continuera à être diffusée en arrière-plan. Vous devez ouvrir la fenêtre Contrôle Radio Center en cliquant sur l'élément:    
ouvrir la fenêtre Contrôle Radio Center    
en utilisant le geste de commande:    
NVDA+alt+r (clavier, toutes les dispositions)    
Aller dans le menu NVDA puis dans Préférences puis Gestes de commandes sous la catégorie RadioCenter et chercher:    
ouvrir la fenêtre Contrôle Radio Center    
Faire une fois Tab, puis cliquez sur le bouton:    
Exécuter le script Alt+e    

Si ce geste de commande ne vous convient pas, vous pouvez  le changer dans le dialogue Gestes de commandes de NVDA sous la catégorie RadioCenter et chercher:    
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

Et finalement il me manque de vous dire que dans le dialogue Contrôle Radio Center nous aurons deux listes déroulantes  comme suit:    

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

---

Je pense avoir fait le tour de cette extension radioCenter !    
Voila, je vous  souhaite une bbonne utilisation de l'extension radioCenter ! :)    
Bien amicalement,    
Rémy (BlindHelp).    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---