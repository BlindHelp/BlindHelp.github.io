---
title: Nouvelle version 5.1.0 de l'extension radioCenter pour NVDA, par Ruslan Dolovaniuk
permalink: "/radioCenter-5-1-0-update-by-Ruslan-Dolovaniuk/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 16 Août 2025</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous apporte des informations toutes fraîches sur lla nouvelle version 5.1.0 de l'extension radioCenter pour NVDA, reçu en privé par Ruslan Dolovaniukque et je vous le partage avec vous tous.    
Il faut cependant noter que depuis la version 5.0.0 vous devrez vous inscrire sur le site en question (vvoir le lien plus bas) qui est effectivement facile d'usage selon mon ami Paul du Canada. 🇨🇦    

## Quelques notes importantes par Rémy (BlindHelp). 🇫🇷
Pour ma part, je ne l'ai pas utilisé cette nouvelle version radioCenter 5.1.0, je vous en informe simplement pour que vous sachiez que celle-ci est maintenant disponible sur la chaîne télégramme et le groupe de l'auteur.    
Notez également que les liens cités dans ce billet pointent vers les pages en anglais fourni également par l'auteur.    

* Auteur: Ruslan Dolovaniuk 🇺🇦
* Compatible NVDA: 2023.2 à 2025.1.2
* Version actuelle: 5.1.0 (comprend la traduction en espagnol et en français depuis la  version 2.1.0, fait par mes soins envoyé à l'auteur en privé).

## Informations complémentaires  transmis par Ruslan Dolovaniuk
La nouvelle version peut être téléchargée à partir de la chaîne Telegram ou via  un  lien direct vers le fichier:

<https://elrus.ho.ua/downloads/nvda/radioCenter-5.1.0.nvda-addon>

Fichier sur ma chaîne télégramme et mon groupe    
Chaîne Telegram: <https://t.me/elrusapps>    
Groupe Telegram: <https://t.me/elrus_apps>    

Faire un don.    
Transférer sur une carte bancaire:     
`€: 4441 1144 9720 3321`    
`$: 4441 1144 8905 4781`    
`₴: 4149 4993 7736 2866`    
PayPal: <https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B3VG4L8B7CV3Y&source=url>    

--
Cordialement, Ruslan.     

---

Avertissement: 💀    
Le blog de BlindHelp n’est pas responsable des dommages causés par une mauvaise utilisation de l’extension téléchargé ni des informations ce trouvant sur la documentation dédié et l’utilisation de l’extension téléchargé est à vos risques et périls. ☠    

Vous pouvez également consulter le premier article dédié à l'extension radioCenter sur:    
[radioCenter, extension pour NVDA permettant d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier](https://blindhelp.github.io/radioCenter/)    
Publié le Mercredi 3 Juillet 2024 - Dernière mise à jour le Dimanche 6 Octobre 2024    

Lorsque cette extension est mise à jour, elle ne doit pas être en cours d'exécution, c'est-à-dire qu'aucune radio ne doit être en cours de lecture/enregistrement.    

, si vous souhaitez en savoir plus n'hésitez pas à lire la documentation trouvée ci-dessous désormais traduite en français ! Vous la trouverez également dans l'extension radioCenter dans le dossier doc, fr    

# radioCenter

* Auteur: Ruslan Dolovaniuk (Ukraine)
* PayPal: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B3VG4L8B7CV3Y&source=url
* Telegram Channel: https://t.me/elrusapps
* Telegram Group: https://t.me/elrus_apps

cette extension vous permet d'écouter des stations de radio en ligne et d'enregistrer le flux audio dans un fichier.
L'enregistrement d'une station de radio n'interfère pas avec l'écoute d'une autre station de radio.

Pour utiliser les collections, vous devez vous inscrire sur le site web https://elrus.pp.ua et ajouter vos identifiants de connexion aux paramètres.
Pour attribuer un raccourci clavier à une station, sélectionnez « Créer un raccourci clavier » dans le menu contextuel de la station dans la liste des stations.

Dans les collection, en plus des annuaires Internet, il est également possible d'ajouter un répertoire local avec des fichiers m3u.
Pour obtenir une collection locale, vous devez spécifier le chemin de base du répertoire dans les paramètres.
Tous les fichiers m3u de ce répertoire et tous ses sous-répertoires seront automatiquement analysés.


## Liste des raccourcis clavier:
* NVDA+ALT+P: lire/mettre en pause la radio ;
* NVDA+ALT+P double clic: désactiver la radio ;
* NVDA+ALT+SHIFT+R : Activer/désactiver l'enregistrement ;
* NVDA+ALT+M: activer/désactiver le mode sourdine ;
* NVDA+ALT+Flèche Haut: augmenter le volume ;
* NVDA+ALT+Flèche Bas: réduire le volume ;
* NVDA+ALT+Flèche Droit: station suivante ;
* NVDA+ALT+Flèche Gauche: station précédente ;
* NVDA + ALT + D : sélection du périphérique de sortie de lecture ;
* NVDA+ALT+O: obtenir des informations sur la station ;
* NVDA+ALT+R: ouvrir la fenêtre Contrôle Radio Center ;
* ÉCHAP: fermer les fenêtres Contrôle Radio Center et Collections de Radio ;
* CTRL+C: copier le lien de la station de radio dans le presse-papiers ;

### Lors d'un tri manuel dans la liste des stations:
* ALT+Flèche Haut: déplacer la station vers une position plus haute ;
* ALT+Flèche Bas: déplacer la station vers une position plus basse ;

### Dans les listes de collections:
* ALT+Flèche Haut ou ALT+Flèche Droit: basculer vers le suivant lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* ALT+Flèche Bas ou ALT+Flèche Gauche: basculer vers le précédent lien (si la radio dispose de plusieurs liens vers le flux audio) ;
* CTRL+C: copier le lien de la station dans le presse-papiers ;

### Combinaisons utilisateur :
* Les combinaisons utilisateur doivent inclure NVDA + une touche numérique de 0 à 9 et les modificateurs éventuels ;

## Tri des stations:
* sans trier ;
* par nom croissant (de A à Z) ;
* par nom décroissant (de Z à A) ;
* par priorité et par nom croissant (de A à Z) ;
* par priorité et nom décroissant (de Z à A) ;
* manuellement ;

## Liste des changements:
### Version 5.1.0
* Correction d'un problème avec plusieurs modificateurs pour les combinaisons personnalisées ;
* traduction améliorée en tchèque (P. Partyka) ;
* traduction ajoutée en slovaque (P. Partyka) ;

### Version 5.0.0
* Ajout de la compatibilité avec le catalogue Internet https://elrus.pp.ua ;
* Suppression de la compatibilité locale avec d'autres catalogues Internet ;
* Ajout de la possibilité de changer de périphérique audio pour la lecture radio ;
* Ajout de la prononciation du nom de la station radio au démarrage de la lecture et lors du changement à l'aide des flèches ;
* Ajout de la prononciation du volume lors du changement ;
* Ajout de la possibilité de définir une combinaison de touches de raccourci pour chaque station afin de changer rapidement de station ;

### Version 4.6.3
* Ajout de la localisation roumaine (Nicu Untilă);  

### Version 4.5.0
* ajout d'un menu contextuel à la liste des stations de radio dans la fenêtre principale ;
* ajout d'une combinaison de touches pour enregistrer une station de radio ;
* disponibilité fixe de l'enregistrement sans qu'il soit nécessaire de commencer à écouter la station de radio ;
* correction du changement des étiquettes sur les boutons de la fenêtre principale ;
* correction du changement dans les étiquettes des éléments dans le menu du service NVDA ;
* changement synchronisé des étiquettes sur les boutons de la fenêtre principale, les éléments du menu de service NVDA, les éléments du menu contextuel, lors de l'appui sur des combinaisons de touches ;
* ajout d'une traduction arabe (وفيق طاهر);

### Version 4.2.1
* ajout de l'extraction du nom de la station, le cas échéant, lors du traitement du fichier m3u ;
* Ajout d'une option aux paramètres permettant d'afficher ou non un lien vers la station ;
* une option a été ajoutée aux paramètres pour le nombre de stations par portion à vérifier ;
* correction de quelques erreurs lors de la vérification automatique des stations ;

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