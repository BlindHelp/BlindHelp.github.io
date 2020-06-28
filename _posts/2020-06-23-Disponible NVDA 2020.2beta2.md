---
title: Disponible NVDA 2020.2beta2
layout: post
author: BlindHelp
---

<footer>Mardi 23 Juin 2020</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2020.2 Beta 2. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2020.2 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2020.2beta2](https://www.nvaccess.org/post/nvda-2020-2beta2/) (en anglais), ceux-ci sont les changements par rapport à la version beta1:

* Traductions mises à jour pour de nombreuses langues. 
* De petites corrections au fichier Quoi de Neuf. 
* Non plus verbaliser un symbole appelé "object replacement character" (Quelque chose comme caractère de remplacement  des objets).
* Ajout table Braille informatique pour  l'ukrainien. 

# 2020.2 #

Les points forts de cette version incluent le support d'un nouvel afficheur Braille de Natiq nBraille, un meilleur support de l'antivirus Eset et de Windows Terminal, une amélioration des performances pour 1Password et le synthétiseur Windows OneCore, ainsi que beaucoup d'autres correctifs.     

# Nouvelles fonctionnalités #

* Support de nouveaux afficheurs Braille : 
	* Nattiq nBraille (#10778) 
* Ajout d'un script pour ouvrir le dossier de configuration de NVDA (aucun geste par défaut). (#2214) 
* Meilleur support pour l'interface de l'antivirus Eset. (#10894) 
* Ajout du support de Windows Terminal. (#10305) 
* Ajout d'une commande pour annoncer le profil de configuration actif (pas de geste par défaut). (#9325) 
* Ajout d'une commande pour basculer l'annonce des exposants et indices (pas de geste par défaut). (#10985) 
* Les applications Web (par exemple GMail) n'annonceront plus d'anciennes informations lors du déplacement rapide du curseur. (#10885) 
	* Ce correctif expérimental doit être activé manuellement via l'option "Essayer de couper la parole pour les évènements focus expirés" dans les paramètres avancés. 
* Beaucoup de symboles ont été ajoutés au dictionnaire de symboles par défaut. (#11105) 

# Changements #

* Mise à jour du transcripteur Braille Liblouis de la version 3.12.0 vers la version 3.14.0. (#10832) 
* L'annonce des exposants et indices est maintenant contrôlée séparément de l'annonce des attributs de la police. (#10919) 
* En raison de changements dans VS Code, NVDA ne désactivera plus le mode navigation dans Code par défaut. (#10888) 
* Suppression des messages "haut" et "bas" lors du déplacement du curseur de revue à la première ou dernière ligne de l'objet navigateur actuel. (#9551) 
* Suppression des messages "gauche" et "droite" lors du déplacement du curseur de revue au premier ou dernier caractère de la ligne actuelle de l'objet navigateur actuel. (#9551) 

# Corrections de bogues #

* NVDA démarre maintenant correctement quand le fichier journal ne peut être créé (#6330) 
* Dans les versions récentes de Microsoft Word 365, NVDA n'annoncera plus "mot précédent supprimé" quand CTRL+retour arrière est pressé pendant l'édition d'un document. (#10851) 
* Dans Winamp, NVDA annoncera à nouveau le changement de statut des fonctions répétition et aléatoire. (#10945) 
* NVDA n'est plus extrêmement lent lors du déplacement dans la liste des éléments de 1Password. (#10508) 
* Le synthétiseur Windows OneCore ne ralentira plus entre les différents blocs de paroles. (#10721) 
* NVDA ne se figera plus lors de l'ouverture du menu contextuel de 1Password depuis la zone de notifications système. (#11017) 
* Dans Office 2013 et plus ancien : 
	* Les rubans sont annoncés lorsque le curseur s'y déplace pour la première fois. (#4207) 
	* Les éléments du menu contextuel sont à nouveau annoncés correctement. (#9252) 
	* Les sections des rubans sont annoncées constamment lors du déplacement avec CTRL+flèche. (#7067) 
* En mode navigation dans Mozilla Firefox et Google Chrome, le texte n'est plus incorrectement affiché sur une ligne séparée lorsque le contenu Web utilise l'affichage CSS : inline-flex. (#11075) 
* En mode navigation avec le positionnement automatique sur les éléments susceptibles d'être mis en focus désactivé, il est maintenant possible d'activer les éléments impossible à mettre en focus. 
* En mode navigation avec le positionnement automatique sur les éléments susceptibles d'être mis en focus désactivé, il est maintenant possible d'activer les éléments riches via la touche tab. (#8528) 
* En mode navigation avec le positionnement automatique sur les éléments susceptibles d'être mis en focus désactivé, activer certains éléments ne cliquera plus à la mauvaise position. (#9886) 
* Le son d'erreur de NVDA n'est plus joué lors de l'accès à un contrôle de texte DevExpress. (#10918) 
* Les infobulles des icônes de la zone de notifications ne sont plus annoncées lors de la navigation au clavier si elles sont identiques au texte de l'icône, pour éviter une double annonce. (#6656) 
* En mode navigation avec le positionnement automatique sur les éléments susceptibles d'être mis en focus désactivé, basculer en mode formulaire avec NVDA+espace met maintenant en focus l'élément sous le curseur. (#11206) 
* Il est à nouveau possible de vérifier les mises à jour de NVDA sur certains systèmes, par exemple les installations propres de Windows. (#11253) 
* Dans les applications Java, le focus n'est plus déplacé lors d'un changement de sélection dans une liste, un onglet ou une arborressence ne pouvant avoir le focus. (#5989) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

NVDA 2020.2 étant encore seulement en version beta, certains auteurs d'extension ne les ont pas encore mises à jour avec Python 3 ou ne sont pas mis à jour les indicateurs de compatibilité et  y travaillent en ce moment.

Concernant plus spécifiquement NVDA remote qui préoccupe pas mal de monde, il a été annoncé  que l'extension est   maintenant compatible avec NVDA 2019.3. Il existe une version pour NVDA 2019.3 et ultérieure (dans lequel il a collaboré Reef Turner, de NV Access) et une autre pour les anciennes versions de NVDA.    

Voir sur [nvdaremote.com](https://nvdaremote.com/),  menu de navigation Download

Merci à Noelia pour cette info.

###  Pour télécharger NVDA 2020.2beta2 ###

La version beta2 de NVDA 2020.2 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2020.2 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2020.2beta2 :    

# Depuis la page du poste NV Access NVDA 2020.2beta2 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2020.2beta2](https://www.nvaccess.org/post/nvda-2020-2beta2/)    
2. chercher puis appuyez sur le lien "Download NVDA 2020.2beta2".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2020.2beta2!](http://www.nvaccess.org/files/nvda/releases/2020.2beta2/nvda_2020.2beta2.exe)    

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2020.2beta2. Avec vos tests, vous aiderez à la prochaine version de NVDA 2020.2, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           