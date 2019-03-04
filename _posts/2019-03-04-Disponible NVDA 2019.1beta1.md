---
title: Disponible NVDA 2019.1beta1
layout: post
author: BlindHelp
---

<footer>Lundi 4 Mars 2019</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2019.1 Beta 1. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2019.1 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2019.1beta1](https://www.nvaccess.org/post/nvda-2019-1beta1-available-for-testing/) (en anglais), ceux-ci sont les changements par rapport à la version 2018.4.1:

# 2019.1 #

Les points forts de cette version incluent des améliorations de performances lors de l'accès à Microsoft Word et Excel, des améliorations en matière de stabilité et de sécurité, comme la prise en charge des extensions comportant des informations de compatibilité de version, ainsi que de nombreuses corrections de bogues. Veuillez noter qu'à partir de cette version de NVDA, les modules applicatifs personnalisés, les globalPlugins, les pilotes d'afficheurs braille et les pilotes de synthèses vocales ne seront plus chargés automatiquement à partir de votre répertoire de configuration utilisateur NVDA. Ceux-ci devront plutôt être installées en tant qu'extensions de NVDA. Pour ceux qui développent du code pour une extension, le code pour les tests peut être placé dans un nouveau répertoire du bloc-notes du développeur, dans le répertoire de configuration de l'utilisateur NVDA, si l'option du bloc-notes du développeur est activée dans le nouveau panneau des paramètres avancés de NVDA. Ces modifications sont nécessaires pour mieux assurer la compatibilité du code personnalisé, afin que NVDA ne soit pas endommagé lorsque ce code devient incompatible avec les nouvelles versions.

# Nouvelles Fonctionnalités #

- Nouvelles tables braille : Afrikaans, Arabe braille informatique 8 points, Arabe abrégé, Espagnol abrégé. (#4435) 
- Ajout d'une option dans les paramètres de la souris de NVDA pour que NVDA supporte les situations où la souris est contrôlée par une autre application. (#8452) 
	-	 Cela permet à NVDA de suivre la souris quand un système est contrôlé à distance en utilisant TeamViewer ou un autre logiciel de contrôle à distance. 
- Ajout du paramètre de ligne de commande `--enable-start-on-logon` pour configurer si les installations silencieuses de NVDA le définissent pour démarrer à l'ouverture de session Windows ou non. Spécifiez true pour démarrer à l'ouverture de session ou false pour ne pas démarrer à l'ouverture de session. Si l'argument --enable-start-on-logon n'est pas spécifié, NVDA démarrera par défaut à l'ouverture de session, à moins qu'il n'ait déjà été configuré par une installation précédente. (#8574) 
- Il est possible de désactiver la journalisation de NVDA en mettant le niveau de journalisation sur "désactivé" dans le panneau de paramètres généraux. (#8516) 
- La présence de formules dans les tableaux sous LibreOffice et Apache OpenOffice est maintenant annoncée. (#860) 
- Sous Mozilla Firefox et Google Chrome, le mode navigation annonce maintenant l'élément sélectionné dans les listes déroulantes et les arborescences. 
	-	 Ceci fonctionne sous Firefox 66 et au-delà. 
	-	 Ceci ne fonctionne pas pour certaines listes déroulantes (contrôles de sélection HTML) sous Chrome. 
- Début de support d'applications telles que Mozilla Firefox sur les ordinateurs avec processeur ARM64 (ex : Qualcomm Snapdragon). (#9216) 
- Une nouvelle catégorie Paramètres Avancés a été ajoutée au dialogue Paramètres de NVDA, incluant une option pour tester le nouveau support de NVDA pour Microsoft Word via l'API Microsoft UI Automation. (#9200) 
- Ajout du support de la vue graphique dans le Gestionnaire de Disques de Windows. (#1486) 
- Ajout du support des terminaux Handy Tech Connect Braille et Basic Braille 84. (#9249) 

Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez cette nouvelle version vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

###  Pour télécharger NVDA 2019.1beta1 ###

La version beta1 de NVDA 2019.1 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2019.1 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2019.1beta1 :    

# Depuis la page du poste NV Access NVDA 2019.1beta1 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2019.1beta1](https://www.nvaccess.org/post/nvda-2019-1beta1-available-for-testing/)    
2. chercher puis appuyez sur le lien "Download NVDA 2019.1beta1".               

# Depuis le lien directe de téléchargement de NV Access #
  
  [Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2019.1beta1!](https://www.nvaccess.org/files/nvda/releases/2019.1beta1/nvda_2019.1beta1.exe)                     

#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2019.1beta1. Avec vos tests, vous aiderez à la prochaine version de NVDA 2019.1, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           