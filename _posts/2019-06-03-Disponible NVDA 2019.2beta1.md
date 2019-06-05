---
title: Disponible NVDA 2019.2beta1
layout: post
author: BlindHelp
---

<footer>Lundi 3 Juin 2019</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2019.2 Beta 1. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2019.2 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2019.2beta1](https://www.nvaccess.org/post/nvda-2019-2beta1-released/) (en anglais), ceux-ci sont les changements par rapport à la version 2019.1.1:

# 2019.2 #

Les améliorations principales de cette version consistent en l'ajout de l'auto-détection des afficheurs Braille Freedom Scientific, de l'ajout d'un paramètre expérimental dans les paramètres avancés pour empêcher le mode navigation de se déplacer automatiquement vers le curseur (ce qui peut améliorer les performances), une option pour trippler le débit du synthétiseur Windows OneCore, et plein d'autres correctifs.    

# Nouvelles Fonctionnalités #

* Le dialogue de recherche inclut maintenant un historique des 20 dernières recherches. (`#`8482) 
	* L'historique de la recherche est effacé lorsque NVDA se ferme ou redémarre. 
* Le support NVDA pour Miranda NG fonctionne avec les versions les plus récentes du client. (`#`9053) 
* Vous pouvez maintenant désactiver le mode navigation par défaut en désactivant la nouvelle option " Activer le mode navigation au chargement de la page " dans les paramètres du mode navigation de NVDA. (`#`8716) 
	* Notez que lorsque cette option est désactivée, vous pouvez toujours activer le mode navigation manuellement en appuyant sur NVDA + Espace. 
* Vous pouvez maintenant filtrer les symboles dans le dialogue de prononciation des symboles et ponctuations du même mode que pour le filtrage dans la liste des éléments et dans le dialogue des gestes de commandes. (`#`5761) 
* Une commande a été ajoutée pour modifier la résolution de l'unité de texte de la souris (la quantité de texte qui sera prononcé lorsque la souris se déplace), mais aucun geste par défaut n'a été attribué à cette commande. (`#`9056) 
* Le synthétiseur Windows OneCore dispose désormais d'une option d'augmentation du débit qui permet une parole beaucoup plus rapide. (`#`7498) 
* L'option Tripler le Débit est maintenant configurable à partir de la boucle Paramètres Synthétiseur pour les synthétiseurs vocaux pris en charge. (Présentement, eSpeak-NG et Windows OneCore). (`#`8934) 
* Les profils de configuration peuvent maintenant être activés manuellement avec des gestes. (`#`4209) 
	* Le geste doit être configuré à l'aide du dialogue " Gestes de commandes ". 
* Dans Eclipse, ajout du support pour l'auto-complétion dans l'éditeur de code. (`#`5667) 
	* De plus, les informations Javadoc peuvent être lues à partir de l'éditeur quand il est présent à l'aide de NVDA + d. 
* Ajout d'une option expérimentale au panneau Paramètres Avancés permettant d'empêcher le focus système de suivre le curseur du mode navigation (Mettre automatiquement le focus système sur les éléments pouvant être focalisés). (`#`2039) Bien que cette option ne puisse pas être désactivée pour tous les sites Web, cela peut également résoudre : 
	* Effet d'élastique : NVDA annule sporadiquement la dernière frappe en mode navigation en sautant vers l'emplacement précédent. 
	* Les zones d'édition volent le focus système lorsque vous les parcourez aux flèches sur certains sites Web. 
	* Les touches du mode Navigation sont lentes à réagir. 
* Pour les pilotes d'afficheurs braille qui le supportent, les paramètres du pilote peuvent maintenant être modifiés à partir de la catégorie paramètres braille dans le dialogue des paramètres de NVDA. (`#`7452) 
* Les afficheurs Braille de Freedom Scientific sont maintenant supportés par l'auto-détection des afficheurs Braille. (#7727) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

###  Pour télécharger NVDA 2019.2beta1 ###

La version beta1 de NVDA 2019.2 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2019.2 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2019.2beta1 :    

# Depuis la page du poste NV Access NVDA 2019.2beta1 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2019.2beta1](https://www.nvaccess.org/post/nvda-2019-2beta1-released/)    
2. chercher puis appuyez sur le lien "Download NVDA 2019.2beta1".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2019.2beta1!](https://www.nvaccess.org/files/nvda/releases/2019.2beta1/nvda_2019.2beta1.exe)                     

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2019.2beta1. Avec vos tests, vous aiderez à la prochaine version de NVDA 2019.2, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           