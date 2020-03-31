---
title: Disponible NVDA 2020.1beta1
layout: post
author: BlindHelp
---

<footer>Lundi 23 Mars 2020</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2020.1 Beta 1. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2020.1 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2020.1beta1](https://www.nvaccess.org/post/nvda-2020-1beta1-available-for-testing/) (en anglais), ceux-ci sont les changements par rapport à la version 2019.3:

# 2020.1 #

Les points forts de cette version incluent la prise en charge de nombreux nouveaux afficheurs Braille de HumanWare et APH, et beaucoup d'autres corrections de bogues comme la possibilité de lire à nouveau du contenu mathématiques dans Microsoft Word en utilisant MathPlayer/MathType. 

# Nouvelles Fonctionnalités #

* L'élément actuellement sélectionné dans une zone de liste est à nouveau annoncé en mode navigation dans Chrome, comme c'était le cas pour NVDA 2019.1. (#10713) 
* Vous pouvez maintenant effectuer des clics droit souris sur les appareils tactiles en maintenant un doigt appuyé. (#3886) 
* Support de nouveaux afficheurs Braille : APH Chameleon 20, APH Mantis Q40, HumanWare BrailleOne, BrailleNote Touch v2, et NLS eReader. (#10830) 

# Changements #

* NVDA empêchera le système de se verrouiller ou de passer en veille pendant Dire Tout. (#10643) 
* Support des cadres IFrames hors-processus dans Mozilla Firefox. (#10707) 
* Mise à jour du transcripteur Braille Liblouis à la version 3.12. (#10161) 
* Dans Visual Studio Code Insider, le mode navigation est maintenant désactivé par défaut, comme dans Visual Studio Code Stable. (#10858) 

# Corrections de Bogues #

* Correction de la non annonce par NVDA du symbole Unicode moins (U+2212) (#10633) 
* Quand on installe une extension à partir du gestionnaire d'extensions, les noms des fichiers et des dossiers dans le dialogue parcourir ne sont plus annoncés deux fois. (#10620, #2395) 
* Dans Firefox, lors du chargement de Mastodon avec l'interface Web avancée activée, toutes les chronologies sont désormais correctement rendues en mode navigation. (#10776) 
* En mode navigation, NVDA annonce désormais " non coché " pour les cases à cocher décochées alors qu'il ne le faisait pas toujours avant. (#10781) 
* Les contrôles de bascule ARIA ne provoquent plus l'annonce d'informations confuses telles que " non enfoncé coché " ou " enfoncé coché ". (#9187) 
* Les voix SAPI4 ne devraient plus refuser de lire certains textes. (#10792) 
* NVDA peut à nouveau lire et interagir avec des équations mathématiques dans Microsoft Word. (#10803) 
* NVDA annoncera de nouveau correctement le texte désélectionné lorsque vous pressez une touche fléchée en mode navigation quand du texte est sélectionné. (#10731). 
* NVDA ne se fermera plus en cas d'erreur à l'initialisation d'eSpeak. (#10607) 
* Les erreurs dues aux caractères unicode dans la traduction d'un raccourci n'arrêteront plus l'installeur, provocant leur correction par retour au texte anglais. (#5166, #6326) 
* Les mouvements par flèches en mode dire tout vers la sortie ou loin des listes et des tableaux n'annoncera plus constamment la sortie de ces derniers si le survol est activé. (#10706) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

NVDA 2020.1 étant encore seulement en version beta, certains auteurs d'extension ne les ont pas encore mises à jour avec Python 3 ou ne sont pas mis à jour les indicateurs de compatibilité et  y travaillent en ce moment.

Concernant plus spécifiquement NVDA remote qui préoccupe pas mal de monde, il a été annoncé  que l'extension est   maintenant compatible avec NVDA 2019.3. Il existe une version pour NVDA 2019.3 et ultérieure (dans lequel il a collaboré Reef Turner, de NV Access) et une autre pour les anciennes versions de NVDA.    

Voir sur [nvdaremote.com](https://nvdaremote.com/),  menu de navigation Download

Merci à Noelia pour cette info.

###  Pour télécharger NVDA 2020.1beta1 ###

La version beta1 de NVDA 2020.1 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2020.1 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2020.1beta1 :    

# Depuis la page du poste NV Access NVDA 2020.1beta1 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2020.1beta1](https://www.nvaccess.org/post/nvda-2020-1beta1-available-for-testing/)    
2. chercher puis appuyez sur le lien "Download NVDA 2020.1beta1".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2020.1beta1!](http://www.nvaccess.org/files/nvda/releases/2020.1beta1/nvda_2020.1beta1.exe)    

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2020.1beta1. Avec vos tests, vous aiderez à la prochaine version de NVDA 2020.1, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           