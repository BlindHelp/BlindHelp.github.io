---
title: Construire-a-la-aveugle-un-Addon-NVDA-avec-le-template-NVDA
layout: post
author: BlindHelp
---

<footer>Mercredi 12 avril 2017</footer>

Coucou mes amis du blog de BlindHelp !  
Voici un nouveau tuto fait par mes soins, il est complémentaire aux trois autres tutos que nous avons vu la dernière fois dans l'article précédent:                 
[Traduire-a-la-aveugle- un- Addon-NVDA-avec- Poedit – BlindHelp.github.io](https://blindhelp.github.io/Traduire-a-la-aveugle-un-Addon-NVDA-avec-Poedit/)                 
laquelle elles ont été divisées en trois parties:                    

* [Comment traduire un module pour NVDA?](https://blindhelp.github.io/Comment traduire un module pour NVDA.html)
* [Création d'un fichier pot avec Poedit](https://blindhelp.github.io/Creation d'un fichier pot avec Poedit.html)
* [A propos de la traduction des modules complémentaire et comment faire pour le transférer à la Communauté (pour développeurs et traducteurs).](https://blindhelp.github.io/A propos de la traduction des modules complementaire.html)

Cette fois, nous allons voir la façon de comment construire à l'aveugle un Addon NVDA avec le template NVDA.                

### Construire à l'aveugle un Addon NVDA avec le template NVDA. ###
 Avant de passer aux étapes suivantes, vous devez savoir que vous devez être très ordonnée et persévérant, arfin  d'obtenir des résultats optimaux afin d'avoir un  module complémentaire satisfaisant.                
S'il vous plaît prêter attention, j'ai eu moi-même des erreurs, mais grâce au conseils donné par mes amis, jai atteint mes objectif, c'est-à-dire construire à l'aveugle un Addon NVDA avec le template NVDA.           
Certes, il y a beaucoup à apprendre, mais ici je donne les astuces de base pour réaliser cela.         
Je ne me croix pas le meuilleur , ou quoi que ce soit, juste j'essai de faire les choses bien, et surtout partager ce tuto avec vous tous, et  dans le but  que vous obteniez la même satisfaction que moi.        
Donc, je vous souhaite une bonne lecture ainsi qu'un bon apprentissage.

# Conditions requises  préalables à la construction du module complémentaire #
Ici, je vous transcris les explications qui ont été données par mon ami Abdel en privé, et j'ai ajoutés aussi mes propres explications, Merci encore à mon ami Abdel pour m'avoir aider à accomplir ma tâche de manière satisfaisante. 😉

# À propos de Nvda add-on scons template : #
En fait, ce module complémentaire n'est rien d'autre qu'un constructeur d'add-on.                  

# Comment il fonctionne? #
Pour fonctionner, les packages cités dans la section "Requirements" doivent bien être présents.           

# Requirements #

1. Une version de Python 2.7 ou supérieure doit être installée, utiliser de préférence la même que celle de la version de NVDA pour laquelle on souhaite construire le module complémentaire.      
Python 2.7                      
[Source Python 2.7  page en anglais:](https://www.python.org/downloads/release/python-2710/)        
Si l'on est avec un Windows 32 bits, télécharger le fichier suivant:                        
[Windows x86 MSI Installer](https://www.python.org/ftp/python/2.7.10/python-2.7.10.msi)       
Nom du fichier:                     
python-2.7.10.msi                   
Si l'on est avec un Windows 64 bits, télécharger le fichier suivant:                        
[Windows x86-64 MSI Installer](https://www.python.org/ftp/python/2.7.10/python-2.7.10.amd64.msi)                       
Nom du fichier:               
python-2.7.10.amd64.msi                   
2. Le package Scons 2.1.0 ou supérieur.        
[L'installateur pour Windows Scons 2.5.0 est téléchargeable ici :](http://prdownloads.sourceforge.net/scons/scons-2.5.0-setup.exe)       
Nom du fichier:                  
scons-2.5.0-setup.exe                  
3. GNU Gettext tool, qui est un utilitaire servant à gérer les messages de localisation, en d'autre terme, tout ce qui concerne les traductions de messages.           
[Il est téléchargeable à la page suivante sur GnuWin `|` SourceForge.net :](http://gnuwin32.sourceforge.net/downlinks/gettext.php)         
Nom du fichier:            
gettext-0.14.4.exe                     
4. Markdown 2.0.1 ou supérieur, pour la conversion des fichiers md en html, on pourra télécharger l'installateur Markdown 2.0.1 pour Windows dans                
[la page suivante :](https://pypi.python.org/pypi/Markdown/2.0.1)               
 choisir le fichier "Markdown-2.0.1.win32.exe".           
sinon voici plus bas le lien direct pour son téléchargement :                  
[Markdown-2.0.1.win32.exe](https://pypi.python.org/packages/1a/42/578c96a429672b48a55841f0afc8a5a8fadbd5b0c7931a6adc76cdd28129/Markdown-2.0.1.win32.exe#md5=aff3e3a57ae7debc6f6158a57b4b0a65)               
Sans ces packages installés, la construction d'un module complémentaire sera impossible avec l'add-on Scons template.                           

# Création d'un add-on avec le template Scons template #
Pour créer un add-on avec le template Scons template, créer un dossier portant le nom de notre add-on, puis y introduire un sous-dossier intitulé addon, sans tiret du 6 entre le add et le on.              
Dans ce sous-dossier addon, introduire les dossiers de notre add-on, exemple le dossier appModules, globalPlugins, synthDriver, etc.         
Au même niveau hiérarchique que ce dossier addon, dans son dossier parent, c'est à dire le dossier portant le nom de notre addon, introduire les fichiers buildVars.py, manifest.ini.tpl, manifest-translated.ini.tpl, SCONSTRUCT, site_scons, .gitignore et .gitattributes.         
Note: .tpl, c'est l'abréviation de template...                        
Ajouter aussi éventuellement, le fichier readme.md en anglais, et le fichier de styles intitulé style.css si vous disposez d'un fichier de styles avec les fichiers précités.          
Dans le sous-dossier addon, on pourra introduire le sous-dossier locale pour les langues de traductions, mais ne mettre que les fichiers .po pour chaque langue.               
Ne pas mettre également les fichiers manifest.ini dans le dossier locale, car ils devraient être générés automatiquement par le template.                      
Ne pas mettre le fichier manifest.ini original en anglais à la racine du dossier addon, au même niveau hiérarchique que les sous-dossiers appModules, locale, etc.                   
car tous les fichiers manifest.ini sont générés par le template,              
vous devez inscrire les informations du module complémentaire en cours de construction et de son manifest dans le fichier "buildVars.py" en langue anglaise, et entouré par `_()` car il sera traduit dans les fichiers po et construira à son tour les manifest.ini des dossiers de langues dans le dossier intitulé "locale".             
Seule le name contenu dans le manifest ne nécessite pas de traduction, donc, il n'est pas entouré par `_()` dans le fichier buildVars.py.                   
Il faudra aussi ajouter, dans ce sous-dossier addon, un sous-dossier doc, avec toutes les documentations déjà traduite dans des sous-dossiers, fr, es, etc.            
Pour ces documentations traduites, il ne faudra mettre que les fichiers .md, car les fichiers html seront générés par le module complémentaire Scons Template.         
En ce qui concerne la création des fichiers en md                    j'utilise:                    
[Notepad++](http://notepad-plus-plus.org/)                          
j'ai choisi dans le menu Encodage:                     
Encoder en UTF-8 (sans BOM)                    
Au même niveau hiérarchique que ce dossier addon, dans son dossier parent, c'est à dire le dossier portant le nom de notre addon                     
A la racine du dossier contenant les fichiers addonTemplate,                     
où vous avez le fichier buildVars.py et les autres, copier les fichiers:                             
msgfmt.exe; et                    
xgettext.exe                         
pour créer le fichier .pot, ou modèle, qui contient une liste de toutes les chaînes traduisibles extraites du code.                       
Si vous avez téléchargé le code source avec l'option NVDA clone --recursive, vous trouverez ces deux fichiers dans le sous-dossier
miscDeps/tools                                 
Rappelez-vous d'utiliser l'option « récursive » pour le premier clonage, c'est-à-dire:                     
`git clone --recursive https://github.com/nvaccess/nvda.git`                                  
Cela est nécessaire pour récupérer tous les sous-modules.                    
Je pense que cela est plus facile que de télécharger depuis le lien suggéré dans la documentation addonTemplate.                            
Voir ci-dessous une astuces pour télécharger les sources NVDA et leurs mises à jour transmis par notre ami Abdel               
De plus, il est recommandé que tous les fichiers .py et .md ils soient enregistré avec UTF-8 sans BOM.                      
Une fois toutes ces opérations réalisées, il faudra que dans la variable path, de Windows, soient ajoutés les chemins vers `"C:\Python27\Scripts\"`, et `"C:\Program Files (x86\GnuWin32\bin` si l'on est avec un Windows 64 bits" ou `"C:\Program Files\GnuWin32\bin"` si on tourne avec un Windows 32 bits.        
Sinon, pour l'ajout des chemins dans la variable Path, vous allez  sur Bureau / Ordinateur, Alt entrée pour les propriétés.              
Vous  validez sur Modifier les paramètres.                     
Dans l'onglet Paramètres système avancés vous validez sur "Variables d'environnement".                       
Vous  tabulez jusqu'à atteindre la liste des variables système.           
Avec flèche basse, vous  descendez jusqu'à entendre Path.                 
Exemple:                  
`PATH; Valeur: C:\Users\Tartempion
\AppData\Local\Pandoc\`                 
Nom de la variable : PATH                  
`Valeur de la variable : C:\Users\Tartempion
\AppData\Local\Pandoc\`                      
Vous tabulez jusqu'à entendre modifier, puis vous  validez dessus.                
Vous  pressez la touche Fin.           
Vous regardez s'il y a un point virgule à la fin, si ce n'est pas le cas, vous mettez un point virgule, puis vous ajoutez les deux chemins précités, séparés respectivement par un point virgule.                  
Il faut ajoutés les chemins vers `"C:\Python27\Scripts\"`, et `"C:\Program Files (x86\GnuWin32\bin` si l'on est avec un Windows 64 bits" ou `"C:\Program Files\GnuWin32\bin"` si on tourne avec un Windows 32 bits.                 
`Ce qui donne C:\Program Files (x86)\GnuWin32\bin\;C:\Python27\Scripts\;`               
Dans notre exemple sa donne :                 
`PATH; Valeur: C:\Users\Tartempion
\AppData\Local\Pandoc\;C:\Program Files (x86)\GnuWin32\bin\;C:\Python27\Scripts\;`                 
Nom de la variable : PATH            
`Valeur de la variable : C:\Users\Tartempion
\AppData\Local\Pandoc\;C:\Program Files (x86)\GnuWin32\bin\;C:\Python27\Scripts\;`                      
Ensuite, tab jusqu'à OK puis entrée, puis retab jusqu'à OK puis entrée.                   
Ca c'est pour l'ajout des 2 chemins précités dans la variable Path.                         
Note pour un Windows 10:                            
vous allez sur Bureau / Ce PC, Alt entrée pour les propriétés.                 
Vous validez sur Modifier les paramètres.              
Dans l'onglet Paramètres système avancés, vous validez sur "Variables d'environnement".              
Vous tabulez jusqu'à atteindre la liste des variables système.                   
Avec flèche basse, vous descendez jusqu'à entendre Path.                 
Exemple:                    
`Path; Valeur: %USERPROFILE%\AppData\Local\Microsoft\WindowsApps;C:\Users\Tartempion
\AppData\Local\Pandoc\;`                               
Vous tabulez jusqu'à entendre modifier, puis vous validez dessus.                  
Vous tabulez jusqu'à entendre Modifier le texte puis vous validez dessus.                  
Exemple:                 
`%USERPROFILE%\AppData\Local\Microsoft\WindowsApps`                           
`C:\Users\Tartempion
\AppData\Local\Pandoc\`                               
Vous pressez la touche Fin.                           
Vous regardez s'il y a un point virgule à la fin, si ce n'est pas le cas, vous mettez un point virgule, puis vous ajoutez les deux chemins précités, séparés respectivement par un point virgule.                
`Il faut ajoutés les chemins vers "C:\Python27\Scripts\", et "C:\Program Files (x86\GnuWin32\bin si l'on est avec un Windows 64 bits" ou "C:\Program Files\GnuWin32\bin" si on tourne avec un Windows 32 bits.`                            
Par exemple sur un Windows 64 bits:                      
`C:\Users\Tartempion
\AppData\Local\Pandoc\;C:\Program Files (x86)\GnuWin32\bin\;C:\Python27\Scripts`                      
Dans notre exemple sa donne :                  
`%USERPROFILE%\AppData\Local\Microsoft\WindowsApps`                                 
`C:\Users\Tartempion
\AppData\Local\Pandoc\`                     
`C:\Program Files (x86)\GnuWin32\bin\`                     
`C:\Python27\Scripts`                       
La ligne une fois modifiée sa donne:                          
`%USERPROFILE%\AppData\Local\Microsoft\WindowsApps;C:\Users\Tartempion
\AppData\Local\Pandoc\;C:\Program Files (x86)\GnuWin32\bin\;C:\Python27\Scripts`                       
`Pour le MSDos, il faut juste se mettre en mode Console, en allant dans le champ Exécuter "Windows r", taper cmd puis entrée.`                          
`La commande cd\ vous permettra de remonter à la racine du disque local principal, soit généralement le disque C:`                     
`En suite, cd dossier vous permet de descendre l'arborescence des sous-dossiers...`             
Pour préparer la création de l'add-on, renseigner toutes les informations relatives à ce module complémentaire dans le fichier buildVars.py, , le name, summary, description, authors, version, docFileName qui doit être le fichier readme.html...             

# Comment sont générés les fichiers Manifest.ini? #
En fait, tous les manifest.ini doivent être générés par la commande scons, aucun d'entre eux ne doit être créé par l'utilisateur.                       
Ce mécanisme se fait grâce au fichier buildVars.py, qui comporte le texte original en anglais de ce fichier manifest.ini.                       
Il sera ensuite traduit dans les fichiers po selon chaque langue.                   
Une fois les traductions des messages ajoutées dans les fichiers po, la commande scons créera non seulement le manifest.ini original en anglais, mais aussi les manifest.ini de chaque langue dans le dossier locale.            
Pour construire l'add-on, ouvrir le dossier portant le nom de l'add-on dans la console MSDos et taper la commande scons, puis entrée.         
Si tous les packages ont correctement été installés, ceci devrait générer la création du fichier nvda-addon avec tout ce dont il a besoin.              
La commande scons pot citée dans la documentation du module complémentaire add-on Scons Template permet de générer le fichier modèle .po.          

# Récapitulative pour la création de l'add-on #

Avant d'exécuter la commande scons, dans le répertoire addons, doivent figurer les éléments suivants :                             

1. Éventuellement, selon le contexte, le répertoire appModules avec son contenu (à l'exception des fichiers pyo).
2. Éventuellement, selon le contexte, le répertoire globalPlugins, avec son contenu (à l'exception des fichiers pyo).
3. Le répertoire doc avec les sous-répertoires de langues et toutes les traductions de documentations au format md seulement, car c'est le template qui créera les fichiers html.
Ce répertoire ne doit pas comporter le fichier readme.md de la langue anglaise, car il est présent à la racine du template.
4. Le fichier installTasks.py.
5. Le répertoire locale, avec toutes les traductions sauf l'anglais, uniquement les fichiers po.

À la racine du template, doivent figurer les fichiers et répertoires suivants :                              

1. Le répertoire addons, dont le contenu a été énuméré plus haut.
2. Le fichier site_scons.
3. Le fichier .gitattributes.
4. Le fichier .gitignore.
5. Le fichier buildVars.py avec le contenu original du fichier manifest.ini en anglais.
6. Le fichier manifest.ini.tpl.
7. Le fichier manifest-translated.ini.tpl.
8. Le fichier readme.md avec la documentation originale en anglais.
9. Le fichier sconstruct permettant de construire l'addon.
10. Le fichier style.css comportant le style des fichiers html de documentation.
11. Le fichier msgfmt.exe pour créer le fichier .pot.
12. Le fichier xgettext.exe pour créer le fichier .pot.

Remarque: En principe, la commande scons doit créer tout l'addon, fichiers manifest.ini compris, et au format utf-8, ce n'est pas l'utilisateur qui doit enregistrer les fichiers manifest.ini manuellement au format utf-8.               
Toi, tout ce que tu dois faire, c'est traduire les messages dans les fichiers po et éventuellement, les fichiers de documentation au format md.                  
Si dans ton fichier buildVar.py                 
il n'y a pas la ligne avec le code:                        
`# Documentation file name`                       
    `"addon_docFileName" : "readme.html",`                
`}`                         

Il faut l'ajouter manuellement                              
Ensuite lorsque le manifest.ini sera créer, tu aura le code dedans:                     

`docFileName = readme.html`                           
uniquement dans le manifest.ini en anglais                 
au même niveau que le fichier installTasks.py             
dans le répertoire addons           
Ceci est utile si on va sur:                     
Gérer les modules complémentaires...                 
puis ont se place sur le nom du module:                   
Deux fois tab pour ataindre le bouton:                 
Aide de ce module complémentaire                 
Puis faire Entrée!                 
Il s'ouvre le fichier en html traduit en français! Enjoy!               
Petit ajout, si ton addon n'est pas destiné à être déposé sur Github, les deux fichiers suivants sités dans le récapitulative, peuvent être ignorés à la racine de ton template.                   

1. Le fichier .gitattributes.
2. Le fichier .gitignore.

# Comment générer le fichier .pot pour la traduction des messages? #
Vous devez utiliser la commande :                  
`scons pot`                    
Pour générer le fichier .pot pour la traduction des messages.                                    
pour un fichier .po donné, tu peux l'éditer avec 
[PoEdit](https://www.poedit.net/)                    
et aller dans le menu Catalogue et cliquer sur "mise à jour depuis un fichier .pot".                  
Seulement, il te faudra le faire pour chaque fichier de chaque langue.                       
C'est-à-dire:                 
Ouvrir le fichier nvda.po pour chaque langue puis                     
aller dans Catalogue;                  
Mettre à jour depuis un fichier POT...                     
Une fois valider sur ce fichier le catalogue est mis à jour, ceci manuelment.                     
Et là, tu remarqueras bien dans le fichier pot, après l'avoir ouvert avec Poedit, qu'il comporte bien les lignes du fichier manifest.ini en anglais.                  
Si tu les traduis pour chaque langue et que tu les insères dans les dossiers LC_MESSAGES de ces langue dans le répertoire locale, ils devraient générer les fichier manifest.ini pour chaque langue, au format utf8.                       
Normalement, en toute logique, le fichier installTasks.py étant présent dans le répertoire addon, il est compris parmi les fichiers dont les messages seront collectés dans le fichier pot.                               
Si tu changes le contenu des fichier po, il est tout à fait logique et normal, après exécution de la commande scons,  que le fichier manifest.ini soit généré à nouveau, car le constructeur d'addon considèreras qu'un changement a été fait.                       

# Nettoyage après une construction #
Lors de l'utilisation de SCons, il n'est pas nécessaire d'ajouter des commandes spéciales ou des noms de cible à nettoyer après une compilation. Au lieu de cela, vous utilisez simplement l'option -c ou --clean lorsque vous appelez SCons, et SCons supprime les fichiers construits appropriés.                             

# Pour nettoyer le contenu du module complémentaire créé précédemment #
Si vous voulez nettoyer le contenu du module complémentaire créé précédemment vous devez le faire exécutant la commande:                  
`scons --clean`                       

# Note: J'ai un message qui commence par: warning ; Qu'est ce que ça signifie? #
En fait, le message warning concernant le visual c++ compiler est juste un message d'avertissement relatif à la version du Visual C++ compiler, mais le travail est fait quand même, donc aucune raison de s'inquiéter...😌                     

# Sources NVDA et mises à jour  par Abdel #
À toutes fins utiles, je voulais vous communiquer l'astuce suivante.                          

Comme vous le savez, NVDA est en constante évolution, et ses sources aussi !                            

Ne vous êtes-vous jamais posé la question suivante :                    

Bon, je viens de télécharger la dernière version des sources à ce jour,                     
[https://github.com/nvaccess/nvda/archive/master.zip](https://github.com/nvaccess/nvda/archive/master.zip)                          
mais dans 1 mois ou plus tard, comment vais-je faire?                                
Devrais-je à nouveau me taper un nouveau téléchargement?                          

Si un jour, j'en ai marre de télécharger à chaque fois, je vais me retrouver avec une version des sources qui n'est plus d'actualité...                                        

Bref, autant de questions que vous avez certainement été nombreux à vous poser.                                  

Eh bien la réponse réside dans le logiciel de gestion de version Git.                                    

Comme je l'avais expliqué une fois à notre ami JF, Git est un logiciel de gestion de version, c'est à dire qu'il permet de disposer de la version actuelle des sources, mais aussi de pouvoir l'updater, selon le privilège que nous avons, développeur, ou simple consultant.                                                 

Si on a le privilège de développeur, on peut mettre en ligne des nouvelles mises à jour, alors que le simple consultant ne peut que télécharger ces éventuelle mises à jour.                      

Mais comment faire, lorsqu'on est simple consultant, pour télécharger de manière automatique toutes ces mises à jour et ne toujours avoir qu'un seul dossier qui se mettra à jour automatiquement?                               

Il faut tout d'abord télécharger et installer                                      
[Git 64 bits](https://github.com/git-for-windows/git/releases/download/v2.12.0.windows.1/Git-2.12.0-64-bit.exe)                          
[ou 32 bits](https://github.com/git-for-windows/git/releases/download/v2.12.0.windows.1/Git-2.12.0-32-bit.exe)                                  
selon notre version de Windows.                         

Ensuite, créer un dossier dans notre explorateur Windows, par exemple, dans notre dossier "Documents" ou "Mes documents", qu'on appellera "Sources NVDA".                                           

Dans ce dossier "Sources NVDA", introduire les 2 fichiers batch suivants, le premier pour un premier téléchargement des sources, et le second, pour les mises à jour.                                     

Voici le contenu du premier fichier "Clone.bat", chargé de télécharger la première mouture des sources :                                        

`@echo off`                  
`git clone --recursive https://github.com/nvaccess/nvda.git`                 

Voici le contenu du second fichier "Update.bat", chargé de télécharger les mises à jour :                                

`@echo off`                      
`cd nvda`                     
`git pull --recurse-submodules`                   

Après l'exécution du premier fichier "Clone.bat", un sous-dossier "nvda" devrait faire son apparition dans notre dossier "Sources NVDA".                                        

Le fichier "Update.bat" se chargera alors de le mettre à jour automatiquement à chaque fois que des améliorations y seront apportées par les développeurs de NVDA.                                  

Il faudra l'exécuter tous les 15 jours, voire tous les mois pour bénéficier régulièrement de la dernière mouture des sources.                                     

Voila, j'espère que tout cela vous sera utile.                      

Bien amicalement,                     
Abdel                 

Remarque très Importante donnée par Abdel :            
Il ne faut pas appliquer à la lettre la méthode citée ci-dessus dans le cas où vous souhaitez mettre à jour un module complementaire !               
La raison est très simple !                
Cette astuce est plutôt orientée vers les mises à jour de NVDA lui-même, et non à la mises à jour des modules complémentaires    via un fichier Update.bat contenant une liste d'addons.  

 Donc le contexte est différent.                           
 
 Lorsque vous mettez à jour en suivant cette astuce, il faut le faire uniquement si le fichier "clone.bat" a téléchargé les sources de NVDA lui-même, il ne faut pas le faire si le ficher "clone.bat" a téléchargé autre chose, ça va de soi !                        
 
Donc, si votre fichier "clone.bat" inclu 1 ou plusieurs addons, le nom des sous-dossiers générés est plus d'un dossier, donc on ne peut pas appliquer à la lettre la procédure décrite ci-dessus, qui n'explique que la procédure pour les sources de NVDA, rien d'autre.                         
 
 Si vous voulez, il faudra un fichier "update.bat" pour chaque addon, avec en première ligne, cd nom-de-l-addon, au lieu de cd nvda. Voir les explications ci-dessous concernant cela.                        
 
# ContextPlus  permet d'exécuter une invite MSDos à partir d'un dossier. #
Sinon, Si vous souhaitez ouvrir une ligne de commande directement dans le répertoire où se trouve votre fichier, vous pouvez installer le magique petit logiciel ContextPlus que Vous pouvez le trouver                                
[par ici:](https://blindhelp.github.io/cr-contextplus.zip)                      
Nom du fichier une fois décompressé:                   
cr-contextplus.exe                      

# Comment ça marche t-il ? #
Une fois installé celuici...                        
Avec l'explorateur, Nous nous positionnons sur le fichier que on veux traiter, et                   
dans le menu contextuel ContextPlus nous fournit une option                   
ouvrir une invite de commande.                     
Il permet aussi quelques autres trucs, en voici le descriptif:                     
ContextPlus ajoute quatre options au menu contextuel : ouverture de tout
fichier avec le Bloc-Notes, copie dans le presse-papiers du chemin du
fichier, suppression définitive de fichier pour en effacer toute trace,
et ouverture d'une invite de commandes avec le dossier comme racine.                       
Bref, une fois qu'on l'a installé, on ne peut plus s'en passer!                     
J'oubliez Pour fermer l'invite de commande, vous pouvez aussi taper exit puis presser               
entrer.                          
Mille merci à notre ami Michel Such pour sa trouvaille!!! 😊                

# En utilisant ContextPlus afin de télécharger les sources NVDA et faire les mises à jour #
Lorsque vous êtes par exemple sur une partie du dissque dur, placez-vous              
  sur un fichier quelconque            
Faire menu contextuel ou Touche Applications                    
  et choisissez l'éléments:                       
  `¤ Invite de commande`                          
  Faire entrée                 
Une fenêtre MSDos s'ouvre:              
vous pouvez taper la même commande décrite précédemment par notre ami Abdel                      
afin d'effectuer le clonage et pour télécharger les sources de NVDA pour la première fois:                         
`git clone --recursive https://github.com/nvaccess/nvda.git`                 
Faire entrée.                     
Attendre quelques instants en fonction de votre connexion Internet.                            
 Une fois terminé, un dossier "nvda" devrait faire son apparition dans cette partie du disque dur.                           
 Pour fermer l'invite de commande, vous pouvez aussi taper exit puis presser 
entrer.                  
Si vous souhaitez faire la mises à jour des sources              
Ouvrez le dossier "nvda"                   
Touche fin pour être placez sur le dernier fichier               
Faire menu contextuel ou Touche Applications                    
  et choisissez l'éléments:                       
  `¤ Invite de commande`                          
  Faire entrée                 
Une fenêtre MSDos s'ouvre:              
vous pouvez taper la même commande décrite précédemment par notre ami Abdel                      
afin de télécharger les mises à jour :                                
`git pull --recurse-submodules`                                            
Faire entrée.             
Attendre quelques instants en fonction de votre connexion Internet.                            
 Une fois terminé, vous aurez les sources mises à jour.              
Pour fermer l'invite de commande, vous pouvez aussi taper exit puis presser 
entrer.                  

Cependant, pour compiler vous pouvez utiliser la commande "scons source" : Vous pouvez voir si vous aviez des problèmes, et même si les modules sont manquants lorsque vous êtes dans le `¤ Invite de commande` ou enregistrer un fichier txt avec le résultat de la commande.                    
Une fois compilé, vous pouvez exécuter le fichier `"..source\nvda.pyw"`.            
Dans le readme inclus dans le code source vous trouverez toutes les informations pour compiler ou créer des paquets exécutable.                    
Rappelez-vous d'utiliser l'option « récursive » pour le premier clonage, c'est-à-dire :                     
`"git clone --recursive https://github.com/nvaccess/nvda.git"`.                      
Cela est nécessaire pour récupérer tous les sous-modules.                

Remarque: Comme vous pouvez le voir, je viens d'utiliser le même exemple donné par notre ami Abdel afin que vous puissiez voir la différence entre l'utilisation des fichiers .bat et En utilisant ContextPlus afin de télécharger les sources NVDA et faire les mises à jour.                   
 Or, dans  le cas des modules complémentaire, nous pouvons également utiliser quelque chose de similaire, mais cette fois nous nous l'appliquerons aux  modules complémentairs NVDA afin de télécharger les sources et faire la mise à jour de chaque module complementaire, Que ce soit en ligne de commande ou en utilisant ContextPlus.                    
 
# A propos de La commande `"git pull --recurse-submodules"` #
[si l'on s'en tient à la documentation officielle](https://github.com/nvaccess/nvda),                                    
on doit faire un git submodule update après chaque git pull.                   

Cela fait 2 lignes de commandes pour une seule action.                  

La commande "git pull --recurse-submodules",                      
[apparue depuis git version 1.7.3](http://stackoverflow.com/questions/1030169/easy-way-pull-latest-of-all-submodules/33847860)                           
fait d'une pierre 2 coups, c'est pourquoi je pense qu'il serait bien d'installer une version de git supérieure ou égale à la 1.7.3 pour pouvoir l'utiliser, d'autant plus quelle est très efficace.                    

# A propos de la commande `git clone --recursive` #
La commande `git clone --recursive url-du-dépôt` permet de cloner un dépôt comportant des sous-modules.                        
Par exemple :                          
`git clone --recursive https://github.com/derekriemer/nvda-notepadPlusPlus.git`                    
Si tu le fais une première fois, tu trouveras un sous-dossier appelé nvda-notepadPlusPlus dans le répertoire où tu as mis le fichier .bat.                         
Pour mettre à jour le dépôt local  à partir du dépôt distant, il faut de préférence êttre en commande MSDos dans l'invite de commande, pas avec un fichier bat.                                  
Ouvrir d'abord le sous-dossier :                                 
cd nvda-notepadPlusPlus                   
Ensuite, `git status` pour vérifier si on est à jour.                          
Si ce n'est pas le cas :                                   
`git submodule update --init --recursive` pour mettre à jour tous les sous-modules.                           
`git pull` pour mettre à jour le dépôt parent.                              
Vérifier ensuite avec `git status` si tout est bien à jour...

Voici plus bas une petite liste de quelques modules complémentaires disponibles depuis leurs dépôts (repository):                    
Cette liste comprend onze modules complémentaires.                             

# reportSymbols via le `¤` Invite de commande #
Allows to listen the typed symbols (non alphanumeric characters), even when the speaking of characters is turned off.            
[https://github.com/nvdaes/reportSymbols](https://github.com/nvdaes/reportSymbols)              
Si vous voulez cloner le module complémentaire reportSymbols vous pouvez exécuter la commande:                              
`git clone recursive https://github.com/nvdaes/reportSymbols.git`              
Si vous voulez mettre à jour le module complémentaire reportSymbols vous pouvez exécuter la commande:                              
`cd reportSymbols`                         
`git pull --recurse-submodules`             

# readFeeds via le `¤` Invite de commande #
Add-on for using NVDA as a feed reader.                
[https://github.com/nvdaes/readFeeds](https://github.com/nvdaes/readFeeds)          
Si vous voulez cloner le module complémentaire readFeeds vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaes/readFeeds.git`                
Si vous voulez mettre à jour le module complémentaire readFeeds vous pouvez exécuter la commande:                           
` cd readFeeds`                     
`git pull --recurse-submodules`                       

# placeMarkers via le `¤` Invite de commande #
[https://github.com/nvdaes/placeMarkers](https://github.com/nvdaes/placeMarkers)             
Si vous voulez cloner le module complémentaire placeMarkers vous pouvez exécuter la commande:                           
`git clone --rcursive https://github.com/nvdaes/placeMarkers.git`                  
Remarque Très Importante : Cette commande ne fonctionne pas dans mon cas !                             
plutôt j'utilisée cette commande:                          
`git clone https://github.com/nvdaes/placeMarkers.git`                      
Si vous voulez mettre à jour le module complémentaire placeMarkers vous pouvez exécuter la commande:                           
`cd placeMarkers`         
`git pull --recurse-submodules`                

# eMule via le `¤` Invite de commande #
[https://github.com/nvdaes/eMule](https://github.com/nvdaes/eMule)         
Si vous voulez cloner le module complémentaire eMule vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/eMule.git`                   
Si vous voulez mettre à jour le module complémentaire eMule vous pouvez exécuter la commande:                           
`cd eMule`            
`git pull --recurse-submodules`           

# emoticons via le `¤` Invite de commande #
Add-on to enable the announcement of emoticon names instead of the character Representation.                             
[https://github.com/nvdaes/emoticons](https://github.com/nvdaes/emoticons)           
Si vous voulez cloner le module complémentaire emoticons vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaes/emoticons.git`                      
Si vous voulez mettre à jour le module complémentaire emoticons vous pouvez exécuter la commande:                           
`cd emoticons`           
`git pull --recurse-submodules`             

# clipContentsDesigner via le `¤` Invite de commande #
Add-on for managing clipboard text.                       
[https://github.com/nvdaes/clipContentsDesigner](https://github.com/nvdaes/clipContentsDesigner)                
Si vous voulez cloner le module complémentaire clipContentsDesigner vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaes/clipContentsDesigner.git`             
Si vous voulez mettre à jour le module complémentaire clipContentsDesigner vous pouvez exécuter la commande:                           
`cd clipContentsDesigner`             
`git pull --recurse-submodules`             

# lambda via le `¤` Invite de commande #
NVDA Add-On for LAMBDA Software                                  
[https://github.com/nvdaaddons/lambda](https://github.com/nvdaaddons/lambda)                      
Si vous voulez cloner le module complémentaire lambda vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/lambda.git`                   
Si vous voulez mettre à jour le module complémentaire lambda vous pouvez exécuter la commande:                           
`cd lambda`               
`git pull --recurse-submodules`           

# linksManager via le `¤` Invite de commande #
[https://github.com/nvdaes/linksManager](https://github.com/nvdaes/linksManager)           
Si vous voulez cloner le module complémentaire linksManager vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaes/linksManager.git`                  
Mais il y un message d'erreur  en anglais comme sui:                             
Cloning into 'linksManager'...               
warning: You appear to have cloned an empty repository.                    
= Avertissement: vous avez clonée un dépôt vide.               
donc, inutile de cloner le module complementaire linksManager !                     

# addonWizzard via le `¤` Invite de commande #
easily and quickly generate the things you need to get going on your next addon.                     
[https://github.com/nvdaaddons/addonWizzard](https://github.com/nvdaaddons/addonWizzard)           
Si vous voulez cloner le module complémentaire addonWizzard vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/addonWizzard.git`                         
Si vous voulez mettre à jour le module complémentaire addonWizzard vous pouvez exécuter la commande:                           
`cd addonWizzard`            
`git pull --recurse-submodules`             

# mp3DirectCut via le `¤` Invite de commande #
Add-on to improve the accessibility of the software mp3DirectCut with NVDA.                      
[https://github.com/nvdaaddons/mp3DirectCut](https://github.com/nvdaaddons/mp3DirectCut)                 
Si vous voulez cloner le module complémentaire mp3DirectCut vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/mp3DirectCut.git`                     
Si vous voulez mettre à jour le module complémentaire mp3DirectCut vous pouvez exécuter la commande:                           
`cd mp3DirectCut`               
`git pull --recurse-submodules`                    

# toneMaster via le `¤` Invite de commande #
Plays monophonic tone sequences by using NVDA beeps and tone data files.                           
[https://github.com/nvdaaddons/toneMaster](https://github.com/nvdaaddons/toneMaster)                   
Si vous voulez cloner le module complémentaire toneMaster vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/toneMaster.git`                         
Si vous voulez mettre à jour le module complémentaire toneMaster vous pouvez exécuter la commande:                           
`cd toneMaster`                      
`git pull --recurse-submodules`           

# clock via le `¤` Invite de commande #
Clock and calendar add-on with advanced clock features, alarms, stopwatch and timer.                             
[https://github.com/nvdaaddons/clock](https://github.com/nvdaaddons/clock)            
Si vous voulez cloner le module complémentaire clock vous pouvez exécuter la commande:                           
`git clone --recursive https://github.com/nvdaaddons/clock.git`                           
Si vous voulez mettre à jour le module complémentaire clock vous pouvez exécuter la commande:                           
`cd clock`               
`git pull --recurse-submodules`                  

# Source des addons mentionnés ci-dessus (référentiel principal): #
[https://github.com/nvdaes](https://github.com/nvdaes)           
ou:                        
[https://github.com/nvdaaddons](https://github.com/nvdaaddons)                 

# Comment cloner et mettre à jour la liste contenant toutes les sources des modules complémentaires vus ci-dessus disponibles depuis leurs dépôts (repository) : #
Tout d'abord  il faut créer un dossier dans "Documents" ou "Mes documents", qu'on appellera                       
"Sources de mes addons favoris". ".              
Dans ce dossier "Sources de mes addons favoris" introduire les   douze batch suivants, le premier pour   un premier téléchargement qui comporte le clone de tous les addons, et les autres  onze pour les mises à jour comportant la liste de tous les addons vus ci-dessus (non inclus le dépôt du module complémentaire linksManager  qui est vide).

Note : à savoir que rem est une commande pour placer un commentaire dans chaque ligne dans un fichier .bat.                

Voici le contenu du  premier fichier "Clone.bat", chargé de télécharger la première mouture qui comporte le clone de tous les addons :                         
 
 `@echo off`                         
`rem reportSymbols`             
`rem Allows to listen the typed symbols (non alphanumeric characters), even when the speaking of characters is turned off.`          
`git clone --recursive https://github.com/nvdaes/reportSymbols.git`                
`rem readFeeds`                   
`rem Add-on for using NVDA as a feed reader.`                      
`git clone --recursive https://github.com/nvdaes/readFeeds.git`             
`rem placeMarkers`               
`git clone https://github.com/nvdaes/placeMarkers.git`                  
`rem eMule`             
`git clone --recursive https://github.com/nvdaes/eMule.git`                
`rem emoticons`                   
`rem Add-on to enable the announcement of emoticon names instead of the character Representation.`                          
`git clone --recursive https://github.com/nvdaes/emoticons.git`                  
`rem clipContentsDesigner`             
`rem Add-on for managing clipboard text.`            
`git clone --recursive https://github.com/nvdaes/clipContentsDesigner.git`             
`rem lambda`                           
`rem NVDA Add-On for LAMBDA Software`                      
`git clone --recursive https://github.com/nvdaaddons/lambda.git`            
`rem addonWizzard`                    
`rem easily and quickly generate the things you need to get going on your next addon.`                   
`git clone --recursive https://github.com/nvdaaddons/addonWizzard.git`                     
`rem mp3DirectCut`                 
`rem Add-on to improve the accessibility of the software mp3DirectCut with NVDA.`                    
`git clone --recursive https://github.com/nvdaaddons/mp3DirectCut.git`                               
`rem toneMaster`           
`rem Plays monophonic tone sequences by using NVDA beeps and tone data files.`                               
`git clone --recursive https://github.com/nvdaaddons/toneMaster.git`                
`rem clock`                         
`rem Clock and calendar add-on with advanced clock features, alarms, stopwatch and timer.`                     
`git clone --recursive https://github.com/nvdaaddons/clock.git`                  
`rem Sources:`                         
`rem https://github.com/nvdaes`                            
`rem https://github.com/nvdaaddons`                            

Après son exécution, et l'apparition des sous-dossier pour chacun des addons, il te faudra un fichier "update-addon1.bat" pour le premier addon, "update-addon2.bat" pour le second, etc.                       

Le nom "addon1", "addon2" etc. devra être remplacé par le nom réel de tes addons.                                   

Ensuite, chacun des fichiers update devra comporter une ligne "cd nomdossier", puis une ligne git pull --recurse-submodules.                           

Le nomdossier devra être remplacé par le nom du dossier de l'addon en question que le fichier clone aura généré.                          

Malheureusement, dans ce cas de figure bien précis, étant donné le nombre important d'addons, bien que le clone pourra se faire collectivement, le update ne pourra se faire qu'individuellement, selon chacun des addons.                               

Si tu veux, il faudra un fichier "update.bat" pour chaque addon, avec en première ligne, cd nom-de-l-addon, au lieu de cd nvda.                     

Voici le contenu pour chacun des addons qui est chargé de télécharger chaque mises à jour (non inclus le dépôt du module complémentaire linksManager  qui est vide). 

Note : à savoir que rem est une commande pour placer un commentaire dans chaque ligne dans un fichier .bat.                

# Update-reportSymbols.bat #
Nom du fichier :           
"Update-reportSymbols.bat"                          

`@echo off`                       
`rem reportSymbols`               
`rem Allows to listen the typed symbols (non alphanumeric characters), even when the speaking of characters is turned off.`                               
`cd reportSymbols`                               
`git pull --recurse-submodules`                               

# Update-readFeeds.bat #
Nom du fichier :           
Update-readFeeds.bat                     

`@echo off`                       
`rem readFeeds`                  
`rem Add-on for using NVDA as a feed reader.`                             
`cd readFeeds`                    
`git pull --recurse-submodules`                  

# Update-placeMarkers.bat #
Nom du fichier :                          
Update-placeMarkers.bat                         

`@echo off`                       
`rem placeMarkers`            
`cd placeMarkers`                       
`git pull --recurse-submodules`                         

# Update-eMule.bat #
Nom du fichier :                          
Update-eMule.bat                         

`@echo off`                       
`rem eMule`            
`cd eMule`                                    
`git pull --recurse-submodules`

# Update-emoticons.bat #
Nom du fichier :                          
Update-emoticons.bat                         

`@echo off`                       
`rem emoticons`                                        
`rem Add-on to enable the announcement of emoticon names instead of the character Representation.`                    
`cd emoticons`           
`git pull --recurse-submodules`                     

# Update-clipContentsDesigner.bat #
Nom du fichier :                          
Update-clipContentsDesigner.bat                         

`@echo off`                       
`rem clipContentsDesigner`             
`rem Add-on for managing clipboard text.`                             
`cd clipContentsDesigner`            
`git pull --recurse-submodules`            

# Update-lambda.bat #
Nom du fichier :                          
Update-lambda.bat                         

`@echo off`                       
`rem lambda`                                 
`rem NVDA Add-On for LAMBDA Software`                       
`cd lambda`           
`git pull --recurse-submodules`            

# Update-addonWizzard.bat #
Nom du fichier :                          
Update-addonWizzard.bat                

`@echo off`                       
`rem addonWizzard`                      
`rem easily and quickly generate the things you need to get going on your next addon.`                   
`cd addonWizzard`                    
`git pull --recurse-submodules`            

# Update-mp3DirectCut.bat #
Nom du fichier :                          
Update-mp3DirectCut.bat                     

`@echo off`                       
`rem mp3DirectCut`                           
`rem Add-on to improve the accessibility of the software mp3DirectCut with NVDA.`           
`cd mp3DirectCut`                     
`git pull --recurse-submodules`            

# Update-toneMaster #
Nom du fichier :                          
Update-toneMaster.bat                          

`@echo off`                      
`rem toneMaster`                   
`rem Plays monophonic tone sequences by using NVDA beeps and tone data files.`                    
`cd toneMaster`                       
`git pull --recurse-submodules`            

# Update-clock.bat #
Nom du fichier :                          
Update-clock.bat                      

`@echo off`                  
`rem clock`                     
`rem Clock and calendar add-on with advanced clock features, alarms, stopwatch and timer.`                 
`cd clock`                
`git pull --recurse-submodules`            

Après l'exécution du premier fichier "Clone.bat", onze sous-dossiers "comportant le nom de chaque module complementaire" doivent faire leur apparition dans notre dossier ""Sources de mes addons favoris" (non inclus le dépôt du module complémentaire linksManager  qui est vide).              

Voici les onze sous-dossiers par ordre alphabétique :

1. addonWizzard
2. clipContentsDesigner
3. clock
4. emoticons
5. eMule
6. lambda
7. mp3DirectCut
8. placeMarkers
9. readFeeds
10. reportSymbols
11. toneMaster

Maintenant si vous le souhaitez vous pouvez créer un fichier "clone.bat" pour chaque addon, avec en première ligne, `git clone --recursive url-du-dépôt` afin de cloner un dépôt comportant des sous-modules si vous ne souhaitez pas utiliser le fichier "Clone.bat qui contient la liste de tous les modules complementaires mentionné ci-dessus.                                             
Si vous préférez utiliser cette alternative...
Dans ce dossier "Sources de mes addons favoris" introduire les vingt-deux batch suivants, les onze premiers pour   un premier téléchargement qui comporte le clone de   chaque addon, et les autres  onze pour les mises à jour comportant les onze addons vus ci-dessus (non inclus le dépôt du module complémentaire linksManager  qui est vide).

Voici le contenu de chaque fichier   "Clone.bat" qui est chargé de télécharger la première mouture qui comporte le clone de   chaque addon (non inclus le dépôt du module complémentaire linksManager  qui est vide). 

Note : à savoir que rem est une commande pour placer un commentaire dans chaque ligne dans un fichier .bat.                

# Clone-reportSymbols.bat #
Nom du fichier :           
"Clone-reportSymbols.bat"                          

`@echo off`                       
`rem reportSymbols`               
`rem Allows to listen the typed symbols (non alphanumeric characters), even when the speaking of characters is turned off.`                               
`git clone --recursive https://github.com/nvdaes/reportSymbols.git`                               

# Clone-readFeeds.bat #
Nom du fichier :           
Clone-readFeeds.bat                     

`@echo off`                       
`rem readFeeds`                  
`rem Add-on for using NVDA as a feed reader.`                             
`git clone --recursive https://github.com/nvdaes/readFeeds.git`                  

# Clone-placeMarkers.bat #
Nom du fichier :                          
Clone-placeMarkers.bat                         

`@echo off`                       
`rem placeMarkers`            
`git clone https://github.com/nvdaes/placeMarkers.git`                         

# Clone-eMule.bat #
Nom du fichier :                          
Clone-eMule.bat                         

`@echo off`                       
`rem eMule`            
`git clone --recursive https://github.com/nvdaes/eMule.git`              

# Clone-emoticons.bat #
Nom du fichier :                          
Clone-emoticons.bat                         

`@echo off`                       
`rem emoticons`                                        
`rem Add-on to enable the announcement of emoticon names instead of the character Representation.`                    
`git clone --recursive https://github.com/nvdaes/emoticons.git`                     

# Clone-clipContentsDesigner.bat #
Nom du fichier :                          
Clone-clipContentsDesigner.bat                         

`@echo off`                       
`rem clipContentsDesigner`             
`rem Add-on for managing clipboard text.`                             
`git clone --recursive https://github.com/nvdaes/clipContentsDesigner.git`            

# Clone-lambda.bat #
Nom du fichier :                          
Clone-lambda.bat                         

`@echo off`                       
`rem lambda`                                 
`rem NVDA Add-On for LAMBDA Software`                       
`git clone --recursive https://github.com/nvdaaddons/lambda.git`            

# Clone-addonWizzard.bat #
Nom du fichier :                          
Clone-addonWizzard.bat                

`@echo off`                       
`rem addonWizzard`                      
`rem easily and quickly generate the things you need to get going on your next addon.`                   
`git clone --recursive https://github.com/nvdaaddons/addonWizzard.git`            

# Clone-mp3DirectCut.bat #
Nom du fichier :                          
Clone-mp3DirectCut.bat                     

`@echo off`                       
`rem mp3DirectCut`                           
`rem Add-on to improve the accessibility of the software mp3DirectCut with NVDA.`           
`git clone --recursive https://github.com/nvdaaddons/mp3DirectCut.git`            

# Clone-toneMaster #
Nom du fichier :                          
Clone-toneMaster.bat                          

`@echo off`                      
`rem toneMaster`                   
`rem Plays monophonic tone sequences by using NVDA beeps and tone data files.`                    
`git clone --recursive https://github.com/nvdaaddons/toneMaster.git`            

# Clone-clock.bat #
Nom du fichier :                          
Clone-clock.bat                      

`@echo off`                  
`rem clock`                     
`rem Clock and calendar add-on with advanced clock features, alarms, stopwatch and timer.`                 
`git clone --recursive https://github.com/nvdaaddons/clock.git`            

Après l'exécution de chaque   "fichier Clone.bat", onze sous-dossiers "comportant le nom de chaque module complementaire" doivent faire leur apparition dans notre dossier ""Sources de mes addons favoris" (non inclus le dépôt du module complémentaire linksManager  qui est vide).              

Voici les onze sous-dossiers par ordre alphabétique :

1. addonWizzard
2. clipContentsDesigner
3. clock
4. emoticons
5. eMule
6. lambda
7. mp3DirectCut
8. placeMarkers
9. readFeeds
10. reportSymbols
11. toneMaster

Les fichiers "update-addon1.bat" pour le premier addon, "update-addon2.bat" pour le second, etc se chargera alors de    mettre à jour automatiquement  chaque addon, chaque fois que des améliorations y seront apportées par les développeurs des modules complémentaires de NVDA.                          
Il faudra l'exécuter tous les 15 jours, voire tous les mois pour bénéficier régulièrement de la dernière mouture des sources pour chaque modul complémentaire.                         
Voila, j'espère que tout cela vous sera utile.                  
À savoir que, je me suis inspiré par les conseils donnés par notre ami Abdel pour réaliser  le premier fichier "clone.bat" pour cloner une liste d'addons (y compris les autres fichiers "clone-xxx.bat" pour   cloner chaque addon) puis les autres fichiers "update-xxx.bat" pour mettre à jour chaque addon,même si le contexte est différent dans le cas des modules complémentaires.                           
Ce tutoriel s'applique uniquement lorsqu'on est un simple consultant et non un  développeur, mais ne vous inquiétez pas nous verrons cela Dans un prochain article !😉                   
Encore Mille Merci à lui pour toutes les informations et les conseils donnés tout au long de ce tutoriel afin de  construire a l'aveugle un Addon NVDA avec le templateNVDA.                  

# Liens utiles #
git - le petit guide facile en français:               
[git - petit guide - no deep shit!](http://rogerdudler.github.io/git-guide/index.fr.html)                  
[Documentation pour GitHub en français (format .epub):](https://progit2.s3.amazonaws.com/fr/2016-03-05-4c838/progit-fr.1062.epub)                
Documentation officielle de nvaccess  (page  en anglais) sur :             
[NVDA wiki articles contributed by the community](https://github.com/nvaccess/nvda)                         
Si vous le souhaitez    vous pouvez  consulter d'autres articles  sur mon nouvelle espace sur :                 
[blindhelp.github.io](https://blindhelp.github.io)                    

# Remerciement: #

Mille merci à nos amis Abdel, Patrick ZAJDA, Michel SUCH, Paul B, Daniel Poiraud  et tous les autres amis pour les informations qu'ils m'ont donné soit en perso ou via la liste ALLOS, qui ma servi de base pour réaliser ce tutoriel. 😉              

Voila!             
J'espère que cette tuto vous serve!. 😀             
Vous pouvez partager cette tuto sur les listes dédier à NVDA!!!            
Via Dropbox o Wuala ou un autre!.               
Enjoy!          :)              
Arobamicalement à vous.          
BlindHelp!            