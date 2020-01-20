---
title: Disponible NVDA 2019.3beta2
layout: post
author: BlindHelp
---

<footer>Mercredi 15 Janvier 2020</footer>

Il y a quelques heures, NV Access a annoncé la publication de NVDA 2019.3 Beta 2. Celle-ci est maintenant disponible au téléchargement!                  

Cette version est destinée aux utilisateurs qui souhaitent essayer NVDA 2019.3 avant sa publication officielle et qui souhaitent fournir des suggestions et des commentaires. Son utilisation dans les environnements de production est totalement déconseillée.         

Si vous voulez l'installer et que vous avez une version stable, vous pouvez télécharger le fichier d'installation depuis le lien ci-dessous qui vous mènera à la page habituelle de téléchargement  de NV Access (en anglais) ou utilisez autrement le lien direct ci-dessous fourni par NV Access.             


Comme expliqué dans cet  [article de NV Access sur NVDA 2019.3beta2](https://www.nvaccess.org/post/nvda-2019-3beta2-now-available-for-testing/) (en anglais), ceux-ci sont les changements par rapport à la version 2019.3beta1:

# 2019.3 #

NVDA 2019.3 est une version très importante contenant de nombreux changements structurels incluant la mise à jour de Python 2 à Python 3, et une réécriture majeure du sous-système de parole de NVDA. Bien que ces changements rendent incompatibles certaines extensions anciennes, la mise à jour vers Python 3 est nécessaire pour la sécurité, et les changements dans la parole permettront d'intéressantes innovations dans un futur proche. Autres points forts de cette version : Support du 64 bit pour les VMS Java, des fonctionnalités de Rideau d'écran et de surlignage du focus, le support de davantage d'afficheurs braille et une nouvelle visionneuse braille, ainsi que beaucoup de corrections de bogues. 

# Nouvelles Fonctionnalités #

* La précision de la commande pour déplacer la souris à l'objet navigateur a été améliorée dans les zones de texte des applications Java. (#10157) 
* Ajout du support des afficheurs Braille Handy Tech suivants (#8955) : 
	* Basic Braille Plus 40 
	* Basic Braille Plus 32 
	* Connect Braille 
* Tous les gestes personnalisés peuvent maintenant être supprimés via un nouveau bouton "Réinitialiser aux valeurs par défaut" dans le dialogue "Gestes de commandes". (#10293) 
* L'annonce de la police dans Microsoft Word indiquera maintenant si un texte est marqué comme masqué. (#8713) 
* Ajout d'une commande pour déplacer le curseur de revue vers la position précédemment définie comme marqueur de début pour la sélection ou la copie : NVDA+Maj+F9. (#1969) 
* Dans Internet Explorer, Microsoft Edge et les versions récentes de Firefox et Chrome, les régions sont maintenant annoncées en mode formulaire et en navigation par objet. (#10101) 
* Dans Internet Explorer, Google Chrome et Firefox, vous pouvez maintenant naviguer par article et groupe en utilisant des scripts de navigation rapide. Ces scripts ne sont pas assignés par défaut et peuvent l'être via le dialogue "Gestes de commande" lorsque celui-ci est ouvert à partir d'un document en mode navigation. (#9485, #9227) 
	* Les figures sont également reportées, elles sont considérées comme des objets et vous pouvez y naviguer en utilisant la touche de navigation rapide o. 
* Dans Internet Explorer, Google Chrome et Mozilla Firefox, les articles sont désormais annoncés lors de la navigation par objet et éventuellement, en mode navigation, si ceci est activé dans les paramètres de mise en forme du document. (#10424) 
* Ajout du rideau d'écran qui, quand il est activé, rend l'écran totalement noir sous Windows 8 et supérieur (#7857) 
	* Ajout d'un script pour activer le rideau d'écran (jusqu'au prochain redémarrage avec un seul appui, ou toujours tant que NVDA est exécuté avec deux appuis). Aucun geste n'est assigné par défaut. 
	* Ceci peut être configuré et activé via la catégorie "Vision" du dialogue de paramètres NVDA. 
* Ajout de la fonctionnalité surlignage d'écran à NVDA. (#971, #9064) 
	* Le surlignage du focus, de l'objet navigateur et du curseur en mode navigation peuvent être activés et configurés dans la catégorie "Vision" des paramètres NVDA. 
	* Note : cette fonction est incompatible avec l'extension Focus Highlight, cette dernière pourra être utilisée si la fonction native est désactivée. 
* Ajout de l'outil Visionneuse Braille, permettant de visualiser la sortie braille via une fenêtre à l'écran. (#7788) 

# Changements #

* Le guide de l'utilisateur décrit maintenant comment utiliser NVDA dans les consoles Windows. (#9957) 
* Lancer nvda.exe remplace désormais automatiquement toute copie de NVDA en cours d'exécution. Le paramètre de ligne de commande -r|--replace est toujours accepté mais ignoré. (#8320) 
* Sous Windows 8 et supérieur, NVDA indiquera désormais le nom et la version des applications hébergées telles que les applications téléchargées depuis le Microsoft Store en utilisant les informations transmises par l'application.) (#4259, #10108) 
* Quand on active ou désactive le suivi des modifications dans Microsoft Word, NVDA annoncera désormais l'état de ce paramètre. (#942) 
* La version de NVDA est désormais indiquée dans le premier message du journal. Cela se produit même si la journalisation a été désactivée via l'interface graphique. (#9803) 
* Le dialogue des paramètres ne permet plus de changer le niveau de journalisation si ce dernier a déjà été configuré via la ligne de commande. (#10209) 
* Dans Microsoft Word, NVDA annonce désormais l'état d'affichage des caractères non imprimables lorsqu'on fait le raccourci clavier Ctrl+Maj+8. (#10241) 
* Mise à jour du transcripteur Braille Liblouis vers la révision 58d67e63. (#10094) 
* Quand l'annonce des caractères CLDR (y compris les emojis) est activée, ceux-ci sont annoncés à tous les niveaux de ponctuation. (#8826) 
* Les paquets Python tiers, tel que Comtypes, incluent maintenant leurs avertissements et erreurs dans le journal de NVDA. (#10393) 
* Mise à jour des annotations d'emoji du référenciel commun de l'Unicode vers la version 36.0. (#10426) 
* Quand le focus est sur un groupe en mode navigation, la description est désormais lue également. (#10095) 
* Java Access Bridge est désormais inclu dans NVDA pour permettre l'accès aux applications Java, y compris les machines virtuelles Java 64 bits. (#7724) 
* Si Java Access Bridge n'est pas activé pour l'utilisateur, NVDA l'activera automatiquement à son lancement. (#7952) 
* Mise à jour de eSpeak-NG à la version 1.51-dev, révision ca65812ac6019926f2fbd7f12c92d7edd3701e0c. (#10581) 

# Corrections de Bogues #

* Les emojis ainsi que les autres caractères Unicode 32 bits prennent maintenant moins de place sur un afficheur Braille lorsqu'ils sont affichés sous forme de valeurs hexadécimal. (#6695) 
* Sous Windows 10, NVDA annonce maintenant les infos bulle dans les applications universelles s'il est configuré pour annoncer les infos bulle dans le dialogue de paramétrage "Présentation des objets". (#8118) 
* Sous Windows 10 version anniversaire et plus récente, le texte tapé est maintenant annoncé dans MinTTY. (#1348) 
* Sous Windows 10 version anniversaire et ultérieure, le texte qui apparaît près du curseur dans les consoles Windows n'est plus épelé. (#513) 
* Les commandes dans le dialogue compresseur d'Audacity sont maintenant annoncées lors de la navigation dans ce dialogue. (#10103) 
* NVDA ne considère plus les espaces comme des mots lors de la navigation par objet dans les éditeurs de texte basés sur Scintilla tel que Notepad++. (#8295) 
* NVDA empêchera le système de passer en veille lors de la lecture d'un long texte avec les commandes de navigation d'un afficheur Braille. (#9175) 
* Sous Windows 10, le Braille suit maintenant correctement lors de l'édition d'une cellule dans Microsoft Excel ainsi que dans d'autres contrôles de texte UIA où il ne suivait pas. (#9749) 
* NVDA annonce à nouveau les suggestions dans la barre d'adresse de Microsoft Edge. (#7554) 
* NVDA ne sera plus silencieux quand le focus est sur un en-tête de contrôle d'onglet HTML dans Internet Explorer. (#8898) 
* Dans Microsoft Edge basé sur EdgeHTML, NVDA n'émettra plus le son de suggestions de recherche quand la fenêtre est agrandie. (#9110, #10002) 
* Les listes déroulantes ARIA 1.1 sont maintenant supportées sous Firefox et Chrome. (#9616) 
* NVDA n'annoncera plus le contenu des colonnes masquées visuellement pour les éléments de liste des contrôles SysListView32. (#8268) 
* Le dialogue de paramètres n'affiche plus le niveau de journalisation sur les écrans sécurisés. (#10209) 
* Dans le menu Démarrer de Windows 10 version anniversaire et supérieur, NVDA annonce maintenant le détail des résultats de recherche. (#10232) 
* En mode navigation, si le déplacement du curseur ou l'utilisation de la navigation rapide entraîne la modification du document, NVDA n'indiquera plus un contenu incorrect dans certains cas. (#8831, #10343) 
* Certains noms de puces dans Microsoft Word ont été corrigés. (#10399) 
* Dans la mise à jour de Mai de Windows 10 et supérieur, NVDA annonce maintenant correctement le premier emoji ou le premier élément dans l'historique du presse-papiers lorsque le paneau d'emoji et le dialogue d'historique du presse-papiers sont ouverts, respectivement. (#9204) 
* Dans Poedit, il est à nouveau possible de voir les traductions pour les langues se lisant de droite à gauche. (#9931) 
* Dans l'application Paramètres de la mise à jour de Windows 10 avril 2018 et ultérieure, NVDA n'annoncera plus les informations de la barre de progression de volume qui se trouve dans ll'onglet Système / Son. (#10284) 
* Des expressions régulières invalides dans les dictionaires de parole n'entraînent plus l'arrêt complet de la parole. (#10334) 
* Quand on parcourt des éléments à puces dans Microsoft Word avec UIA activé, la puce de l'élément de liste suivant n'est plus indûment annoncée. (#9613) 
* Quelques rares erreurs de traduction Braille et erreurs avec Liblouis ont été résolues. (#9982) 
* Les applications Java démarrées avant le lancement de NVDA sont maintenant accessibles sans avoir à redémarrer l'application Java. (#10296) 
* Dans Firefox, lorsque l'élément sélectionné est marqué comme courant (aria-current), NVDA ne le répète plus plusieurs fois. (#8960) 
* NVDA traitera désormais certains caractères unicode composés tels que le e accent aigu comme un seul caractère lors du déplacement dans le texte. (#10550) 
* Spring Tool Suite Version 4 est maintenant supporté. (#10001) 
* NVDA n'annoncera plus deux fois l'étiquette quand un élément aria-labeledby est un élément interne. (#10552) 
* Sous Windows 10 version 1607 et au-delà, les caractères saisis depuis un clavier Braille sont maintenant vocalisés dans plus de situations. (#10569) 
* Lors du changement du périphérique audio, les sons émis par NVDA seront désormais lus directement sur le nouveau périphérique sélectionné. (#2167) 
* Dans Mozilla Firefox, déplacer le focus en mode navigation est maintenant plus rapide. Cela rend le déplacement du curseur en mode navigation plus réactif dans certains cas. (#10584)


Remarque Très Importante: y a eu un grand changement dans la traduction en français, Si vous utilisez la version 2019.1 ou ultérieure vous constaterez que le mot "module complémentaire" ou "modules complémentaires" pour désigner le mot "add-on" ou "add-ons" a été modifié par le mot "extension".

NVDA 2019.3 étant encore seulement en version beta, certains auteurs d’extension ne les ont pas encore mises à jour et y travaillent en ce moment.

Concernant plus spécifiquement NVDA remote qui préoccupe pas mal de monde, il a été annoncé jusqu’à présent que l’extension n’est pas encore compatible mais que l’auteur y travaille et a le soutient de NVAccess ; il est annoncé qu’elle sera compatible lorsque la version NVDA 2019.3 définitive sera publiée.


Merci à Cyrille pour cette info.

###  Pour télécharger NVDA 2019.3beta2 ###

La version beta2 de NVDA 2019.3 est maintenant disponible pour le téléchargement et les tests. Si vous êtes intéressé à essayer ce que NVDA 2019.3 a à offrir avant sa publication officielle, nous vous invitons à télécharger la version beta et à fournir vos commentaires.            

Pour télécharger la version de NVDA 2019.3beta2 :    

# Depuis la page du poste NV Access NVDA 2019.3beta2 #

1. Accédez à la [page du poste de NV Access pour télécharger NVDA 2019.3beta2](https://www.nvaccess.org/post/nvda-2019-3beta2-now-available-for-testing/)    
2. chercher puis appuyez sur le lien "Download NVDA 2019.3beta2".               

# Depuis le lien directe de téléchargement de NV Access #
  
[Vous pouvez cliquer   sur ce lien directe de NV Access en toute confiance pour télécharger NVDA 2019.3beta2!](https://ci.appveyor.com/api/buildjobs/g1i3dmwdutrvxlk7/artifacts/output/nvda_2019.3beta2.exe)    
  
#### Notes ####

* Si vous souhaitez recevoir des nouvelles de NV Access, Entrez votre adresse email dans la boite d'édition Email address.                
* Comme indiqué dans la            
[page sur la confidentialité de NV Access](http://www.nvaccess.org/privacy/)           
(en anglais), parfois même des sites externes offrent des téléchargements de NVDA, et NV Access il est pas responsable du contenu ou des pratiques de confidentialité de ces sites.         
* Vous pouvez commenter les erreurs de cette version dans la liste de diffusion dédié à NVDA,, [ALLOS](mailto:ALLOS@yahoogroupes.fr), ou sur la [page d'incidences en GitHub](https://github.com/nvaccess/nvda/issues).              

Profitez de NVDA 2019.3beta2. Avec vos tests, vous aiderez à la prochaine version de NVDA 2019.3, la prochaine version stable de NVDA.        
@+                     
BlindHelp!                           