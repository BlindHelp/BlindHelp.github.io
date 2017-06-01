---
title: SpeechHub, serveur de texte en voix pour NVDA
layout: post
author: BlindHelp
---

<footer>Dimanche   21 mai 2017</footer>


## SpeechHub ##
Coucou mes amis du blog de BlindHelp,                  
SpeechHub, serveur de texte en voix (Text to Speech) pour NVDA ; ce qui est très pratique si nous utilisons une  voix de haute qualité, tels que SAPI 5, ou Microsoft Speech Platform.                 
Voici la procèdure de comment installer et configurer SpeechHub avec votre version de NVDA,ainsi que les liens pour son téléchargement et autres infos utiles !            

# Conseils d'installation de SpeechHub, liens et infos rélatif by BlindHelp #
Bien que ces notes sont très ancienns  ça peut toujours servir, à vous ou à autrui, si vous souhaitez installer SpeechHub sur votre ordinateur.                         

# Pré-requis :  #
Une version de java en 32-bits doit être installée sur votre ordinateur pour faire fonctionner SpeechHub.    
La version 7 ou supérieure est requise.    
Notez que vous pouvez disposer d'un moteur java en 32 bits même sous Windows 7 64 bits, et même si vous disposez déjà d'un moteur java 64 bits.     
Vous avez la possibilité de télécharger une version ci-dessous.           
[runtime java 7, 32 bits, Sun Microsystems](http://sonobraille.free.fr/localisateur/jre-7u80-windows-i586.exe)      
Acceptez la licence et tous les choix par défaut.                  

Nom du fichier à télécharger :                    
jre-7u80-windows-i586.exe              

Le moteur java est Utile également si vous installez le programme              
[Le Localisateur :](http://www.localisateur.org/localisateurw.html)                     
Merci à Philippe LEON pour le lien et les infos.        

Pour info :            
Vous pouvez aussi télécharger Java 8             
[via la page web ninite.com en anglais.](https://ninite.com/)                
[ou via la page ninite.com/accessible. (également  en anglais).](https://ninite.com/accessible)             

chercher la case :             
Java 8             
Java Runtime Environment (JRE) 8u131-b11            
Après avoir coché la case du logiciel à télécharger, tu tapes la lettre b, ce qui permet de tomber sur le bouton nommé, "Get Your Ninite". Tu cliques dessus, la boîte de dialogue du téléchargement s'ouvre. On peut atteindre cette même boîte sans passer par ce bouton-là, et ce via le raccourci " alt+g ".                             
[Voici le lien directe pour téléchargerJava 8 via Ninite:](https://ninite.com/java8/ninite.exe)                               

Nom du fichier à télécharger :                  
Ninite Java 8 Installer.exe                 

Il suffit d'exécuter Ninite Java 8 Installer.exe et de vous détendre. L'automatisation de Ninite installera l'application en arrière-plan et sans barres d'outils ni ordures.                          
Une fois fait entré sur lui, il recherche puis télécharge l'application Java 8 selon votre Windows installé; soit 32 ou 64 bits... comme un grand !                  

Une boîte de dialogue apparaît comme suit :                    
Ninite                
Preparing setup...           
Il s'affiche une barre de progression suivi du pourcentage :                      
Downloading Java 8... 0 % etc, etc...                 
Vous pouvez activer le lien nommé :                      
Show details                      
Pour afficher les détails       
Java 8; Status: OK (up to date)             
Java 8; Status: OK            
Java 8; Status: Installing                   
Java 8; Status: Downloading                  
(suivi du pourcentage)               
Java x64 8; Status: Waiting to download                    

Vous trouver aussi les liens nommés :                
Hide details           
pour cacher les détails.              
Cancel         
pour annuler l'installation en cours.           
Write feedback         
pour écrire un retour ou faire remonter (l'information en anglais)                

Le dossier jre1.8.0_131 est placé dans votre ordinateur lorsque vous installez Java 8 :                            
Sur les ordinateurs en 32 bits :               
`C:\Program Files\Java\jre1.8.0_131`                
Sur les ordinateurs en 64 bits :                   
`C:\Program Files (x86)\Java\jre1.8.0_131`         

N'oubliez pas de autorisé Java dans le pare-feu  de Windows.                     

Maintenant vous pouvez installer allègrement SpeechHub sur votre ordinateur.                        

# Télécharger SpeechHub Version 1.1.0, publiée le 1er juillet 2015 #
[http://www.speakon.org.uk/SpeechHub/public/install/SpeechHubInstall.exe](http://www.speakon.org.uk/SpeechHub/public/install/SpeechHubInstall.exe)                         
S'il vous plait, toujours utiliser le même lien pour télécharger la dernière version en date depuis le site officiel. Merci.                 

Nom du fichier à télécharger :                  
SpeechHubInstall.exe                                          

Lors de l'installation de SpeechHub appuyer sur le bouton  appelé:              
I Agree               
pour accepter la licence.                    

Une fois terminé l'installation de SpeechHub vous avez une boîte de dialogue avec le message suivant :         
SpeechHub 1.1.0.0: Completed                     
Close               
Appuyer sur  ce boutton pour fermer l'assistant d'installation de SpeechHub.               

Remarques Très Importante :            
SpeechHub fonctionne avec Java 7 ou Java 8.                    
Ne pas oublier d'installer Java avant d'installer SpeechHub !                    

Une fois cela fait, vous dévez installer le module complémentaire pourSpeechHub.                      
Consulter la section  nommé :                         
Installation du module complémentaire SpeechHub                       

Consulter aussi la section nommé :                  
Comment l'utiliser avec NVDA              

Vous pouvez placez Java 8 sur un lecteur USB  pour faire fonctionner conjointement SpeechHub avec une version portable de NVDA, voir les explications ci-dessous.                      

# Synthétiseurs SpeechHub #
Voici la liste des synthétiseurs dans NVDA une fois installer SpeechHub :                      
Synthétiseur :                    
Speech Hub eSpeak               
Speech Hub Mary TTS              
Speech Hub Microsoft Speech API version 5            
Speech Hub Microsoft Speech API version 5 - common driver                   
Speech Hub Pico TTS               

# Voix SpeechHub #
Voici la liste des voix se trouvant dans les Paramètres Vocaux de NVDA une fois installer SpeechHub:             
Par exemple si vous avez choisi le Synthétiseur : Speech Hub Microsoft Speech API version 5             
Voix: Microsoft  Hortense  Desktop  -  French          
Voix: Microsoft  Zira  Desktop  -  English  (United  States)              

# Récapitulatif  (Synthétiseurs & Voix) SpeechHub #
Voici le récapitulatif  (Synthétiseurs & Voix) :                           
Synthétiseur : Speech Hub eSpeak                 
 Voix: french               
Synthétiseur : Speech Hub Mary TTS              
Voix: Donald-HSMM                        
Voix: Mickie-HSMM            
Voix: Obadiah-HSMM                          
Voix: Poppy-HSMM             
Voix: Prudence-HSMM                 
Voix: Spike-HSMM                
Synthétiseur : Speech Hub Microsoft Speech API version 5                 
Voix: Microsoft  Hortense  Desktop  -  French                  
Voix: Microsoft  Zira  Desktop  -  English  (United  States)                   
Synthétiseur : Speech Hub Microsoft Speech API version 5 - common driver            
Voix: Microsoft  Hortense  Desktop  -  French            
Voix: Microsoft  Zira  Desktop  -  English  (United  States)                   
Synthétiseur : Speech Hub Pico TTS                
Voix: French             

---

Ci-dessous, vous trouverez toutes les informations concernant SpeechHub glaner sur La Toile !               

`*** Traduction du texte original de l'anglais vers le français au sujet de SpeechHub ***`                        

### SpeechHub ###
Page d'accueil en anglais :                    
[http://www.speakon.org.uk/SpeechHub.html](http://www.speakon.org.uk/SpeechHub.html)                                

### SpeechHub ###
Fonctionnalités version 1.1, dernière version 1.1.0, 1er juillet 2015                      
Première version de SpeechHub avec support pour  MaryTTS version 5; Plus spécifiquement MaryTTS version 5.1.1                          
Les liens sont disponibles plus loin dans la page aux pages de support NVDA et SpeakOn ainsi que dans la documentation complète (en anglais).                    
[http://www.speakon.org.uk/SpeechHub.html#links](http://www.speakon.org.uk/SpeechHub.html#links)

SpeechHub est un serveur de parole multiplate-forme qui est installé sur votre ordinateur. SpeechHub Prend en charge hors ligne les synthétiseurs MaryTTS, PicoTTS, eSpeak, Microsoft speech API version 5 (SAPI5) et Microsoft Speech Platform (MSP).                            
Les applications appelées «clients», nécessitant une communication de la parole, communiquent avec SpeechHub Pour convertir le texte en parole. Actuellement, SpeechHub prend en charge les applications suivantes :                     

 
* NVDA screen reader (Lecteur d'écran NVDA) (page en anglais)                  
[http://www.nvaccess.org/](http://www.nvaccess.org/)                         
SpeechHub se connecte à NVDA en utilisant un seul module complémentaire pour tous les synthétiseurs, mais ils apparaissent séparément dans la boîte de dialogue Synthétiseur de NVDA. Leur utilisation est exactement la même que n'importe quel pilote de synthétiseur natif.                             
* SpeakOn MediaSuite                  
[http://www.speakon.org.uk/SpeakOn.html](http://www.speakon.org.uk/SpeakOn.html)                                
Le support SpeechHub est disponible hors ligne dans SpeakOn; Si SpeechHub est installé, SpeakOn peut utiliser les synthétiseurs de SpeechHub comme d'autres pilotes des synthétiseurs intégrés.                           


# Liens utiles #
Les pages de support NVDA où vous trouverez des informations sur le téléchargement, l'installation et l'utilisation de SpeechHub avec NVDA sont
[ici (page en anglais)](http://www.speakon.org.uk/SpeechHub/public/docs/NVDAClient/index.html)                  
Les pages de support SpeakOn MediaSuite où vous trouverez des informations sur le téléchargement, l'installation et l'utilisation de SpeechOub avec SpeakOn MediaSuite sont les suivantes :                 
[ici (page en anglais)](http://www.speakon.org.uk/SpeechHub/public/docs/SpeakOnClient/index.html)                   
La documentation complète de SpeechHub où vous pouvez trouver une section Introduction et développement est                   
[ici (page en anglais)](http://www.speakon.org.uk/SpeechHub/public/docs/)                  

# Téléchargement et installation à utiliser avec NVDA #
SpeechHub Version 1.1.0, 1er juillet 2015                          
SpeechHub peut être installé dans Windows Vista, 7 et 8 / 8.1.                   

Note by BlindHelp :                   
SpeechHub peut être installé également sous un Windows 10.                     

À l'heure actuelle, Windows, le lecteur d'écran NVDA et SpeakOn MediaSuite peuvent utiliser SpeechHub; Plus de demandes suivront dans le futur. Vous devez installer SpeechHub uniquement une fois, peu importe le nombre d'applications qui l'utilisent.                                 
Les besoins en ressources informatiques de SpeechHub lui-même sont modestes, mais l'efficacité des synthétiseurs qui s'y rattachent varie considérablement. Par conséquent, votre succès dans l'utilisation de SpeechHub dépendra de la spécification de votre ordinateur et du synthétiseur que vous utilisez.                           
La procédure d'installation ci-dessous suppose que SpeechHub doit être utilisé avec NVDA; Une fois installé, il peut être utilisé si vous le souhaitez automatiquement avec SpeakOn MediaSuite.                             
SpeechHub utilise un module complémentaire NVDA. Pour que SpeechHub fonctionne avec NVDA, vous devez d'abord installer SpeechHub, puis installer séparément le module complémentaire NVDA SpeechHub qui est inclus dans le paquet, comme expliqué plus bas, sinon cela ne fonctionnerait pas! Si vous avez mis à jour une ancienne version de SpeechHub, assurez-vous d'installer à nouveau la dernière version du module complémentaire NVDA SpeechHub.                              

[Téléchargez l'installateur SpeechHub à partir d'ici](http://www.speakon.org.uk/SpeechHub/public/install/SpeechHubInstall.exe)                                  

# Nouvelle installation (SpeechHub n'a pas été installé avant) #
Exécutez le programme d'installation SpeechHubInstall.exe. Confirmez que vous avez lu et acceptez le contrat de licence et appuyez sur Suivant pour continuer. Il n'y a pas de choix; L'installateur annoncera que l'installation est terminée; Appuyez sur Entrée pour confirmer.                         
Installez le module complémentaire SpeechHub comme expliqué plus en détail sur cette page.                                

# Mise à niveau de SpeechHub à partir d'une version précédente #
SpeechHub ne peut pas être mis à niveau pendant qu'il fonctionne et si NVDA est utilisé et SpeechHub est sélectionné comme synthétiseur NVDA, il suffit de fermer le serveur qui vous laissera sans parole.                        
Pour éviter cela, avant d'installer la nouvelle version de SpeechHub, sélectionnez le synthétiseur de NVDA comme suit:                           


* Appuyer sur NVDA + n Puis sélectionnez Préférences > Synthétiseur Dans le menu pour invoquer la boîte de dialogue de sélection du Synthétiseur.                               
* Sélectionner eSpeak ou  eSpeak NG (dans les dernièrs versions de NVDA).                                
 * Appuyer sur  OK pour confirmer votre sélection.                           
* Appuyer sur NVDA + n à nouveau et sélectionner Sauvegarder la configuration à partir du menu.                  
* Pour vous assurer que vous avez changé pour le synthétiseur par défaut, vous pouvez vérifier que lorsque vous quittez NVDA et vous redémarrer, le synthétiseur eSpeak ou  eSpeak NG de NVDA est sélectionné.                                         


Maintenant, vous devez vous assurer que le serveur SpeechHub ne fonctionne pas. En supposant que vous avez sélectionné le synthétiseur espeak ou eSpeak NG  de NVDA tel qu'expliqué ci-dessus, le moyen le plus simple est simplement d'attendre 15 minutes à partir de la dernière fois que vous avez invoqué  la boîte de dialogue de sélection du Synthétiseur. C'est parce que chaque fois que vous ouvrez la boîte de dialogue de sélection du Synthétiseur, SpeechHub démarre à nouveau s'il n'est pas déjà démarré.                            
Exécutez le fichier SpeechHubInstall.exe et procédez normalement. Vous devrez confirmer que vous souhaitez remplacer votre installation précédente; Sélectionnez OK. Confirmez que vous souhaitez remplacer l'ancienne version; L'installateur annoncera que l'installation est terminée; Appuyez sur Entrée pour confirmer. Consultez la page suivante pour obtenir les instructions d'utilisation.                          
Installez la dernière version du module complémentaire NVDA SpeechHub comme expliqué ci-dessous.                          

# Installation du module complémentaire SpeechHub #
Le module complémentaire pour SpeechHub appelé speechhub.nvda-addon est placé dans votre ordinateur lorsque vous installez SpeechHub :                
Sur les ordinateurs en 32 bits :                    
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`            
Sur les ordinateurs en 64 bits :         
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`           
Vous pouvez installer le module complémentaire SpeechHub à partir de la boîte de dialogue  Gestionnaire de modules complémentaires ou directement depuis l'Explorateur Windows, ce qui pourrait être plus pratique.               

# Installation directement à partir de l'Explorateur Windows #
Cette méthode fonctionne uniquement lorsque NVDA fonctionne, sinon vous obtiendrez une erreur. Aller vers ::               
Sur les ordinateurs en 32 bits :            
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`                    
Sur les ordinateurs en 64 bits :                        
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`        
Assurez-vous que le focus est mis sur speechhub.nvda-addon et appuyer sur Entrée. Une boîte de dialogue est ouverte vous demandant si vous souhaitez installer le module complémentaire SpeechHub; Sélectionnez OK pour confirmer. Si vous aviez une version précédante de ce module complémentaire une boîte de dialogue vous demandera  si vous souhaitez la mettre à jour; Sélectionnez OK pour confirmer. On vous demandera de redémarrer NVDA pour vous assurer que votre nouveau module complémentaire prend effet; Sélectionnez OK pour confirmer.                      
Une fois que NVDA a redémarré, vous pouvez choisir un synthétiseur SpeechHub  et une voix de la manière habituelle.             

# Installation à partir du Gestionnaire de modules complémentaires #
Suivez les instructions ci-dessous copiées à partir du manuel de NVDA et dans la boîte de dialogue ouverte, naviguer jusqu'à:                     
Sur les ordinateurs en 32 bits :           
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`          
Sur les ordinateurs en 64 bits :              
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`       
Le Gestionnaire de modules complémentaires, (À partir du manuel NVDA)            
Le Gestionnaire de modules complémentaires, accessible en sélectionnant "Gestion des Modules Complémentaires" dans le menu "Outils" du menu NVDA, permet d'installer, désinstaller, activer ou désactiver des paquets de modules complémentaires pour NVDA. Ces paquets sont fournis par la communauté et contiennent du code qui peut ajouter ou modifier des fonctionnalités dans NVDA ou proposer le support de plages braille ou synthèses vocales suplémentaires.              
Le gestionnaire de modules complémentaires contient une liste affichant tous les modules complémentaires actuellement installés dans votre configuration utilisateur de NVDA. Un nom de paquet, la version et l'auteur sont affichés pour chaque module complémentaire, et des informations suplémentaires telles qu'une description et une URL peuvent être affichées en sélectionnant le module complémentaire et en activant le bouton "À propos" du module complémentaire... Si une aide est disponible pour le module sélectionné, vous pouvez y accéder en pressant le bouton "Aide du module complémentaire".                       
Pour ajouter un module complémentaire, cliquez sur le bouton "Ajouter". Vous pourrez ainsi rechercher le paquet du module complémentaire (fichier .nvda-addon) sur votre ordinateur ou votre réseau. Après avoir cliqué sur "Ouvrir", le processus d'installation commence.                         
Quand un module complémentaire est sur le point d'être installé, NVDA vous demandera de confirmer que vous souhaitez installer ce module complémentaire. Comme les fonctionnalités des modules complémentaires ne sont pas restreintes dans NVDA, ce qui implique en théorie qu'ils peuvent accéder à vos données ou à tout votre système pour une version installée, il est important de n'installer que des modules complémentaires venant d'une source fiable. Dès que le module complémentaire est installé, NVDA doit redémarrer pour que le module complémentaire puisse s'activer. Ce module complémentaire aura l'état "Installé" dans la liste jusqu'à ce que vous relanciez NVDA.                   
Pour supprimer un module complémentaire, sélectionnez-le dans la liste et cliquez sur le bouton "Supprimer". NVDA vous demandera de confirmer la désinstallation. Comme pour l'installation, NVDA doit être redémarré pour que le module complémentaire soit complètement supprimé. Jusqu'au redémarrage, ce module aura le statut Supprimé dans la liste.                   
Pour désactiver un module, pressez le bouton désactiver. Pour activer un module précédemment désactivé, pressez le bouton activer. Vous pouvez désactiver un module si le statut du module indique qu'il est en cours d'exécution ou activé, ou l'activer si le module est suspendu ou désactivé. Pour chaque appui sur le bouton Activer/Désactiver, le statut du module change pour indiquer ce qui arrivera au redémarrage de NVDA. Comme lorsque vous installez ou supprimez un module, vous devez redémarrer NVDA pour que les changements prennent effet.                   
Le gestionnaire a également un bouton "Fermer" pour fermer le dialogue. Si vous avez installé, supprimé ou changé le statut des modules complémentaires, NVDA vous demandera d'abord si vous voulez le redémarrer pour que vos changements prennent effet.                  
Une fois que NVDA a redémarré, vous pouvez choisir un synthétiseur SpeechHub et une voix de la manière habituelle.                       

# SpeechHub et votre pare-feu #
SpeechHub s'exécute en tant que serveur socket sur votre ordinateur. Ce serveur est disponible uniquement localement (connu sous le nom de localhost) qui ne devrait pas exposer votre ordinateur à des risques de sécurité, mais certains programmes de pare-feu peuvent vous demander de confirmer que vous souhaitez l'utiliser; Vous devrez confirmer que SpeechHub sera utilisable. SpeechHub ne contacte aucune ressource à l'extérieur de votre ordinateur; Il se communique simplement avec ses applications clientes telles que le module complémentaire NVDA ou SpeakOn MediaSuite                      

# Comment l'utiliser avec NVDA #
SpeechHub est conçu pour fonctionner en arrière-plan et par conséquent, il est démarré automatiquement, s'il n'est pas déjà exécuté, par une application qui s'y connecte. Une ou plusieurs applications appelées «clients» peuvent utiliser SpeechHub en même temps. Lorsque la dernière application ferme la connexion à SpeechHub, SpeechHub s'arrête automatiquement après environ 15 minutes. Cela signifie que lorsqu'un synthétiseur SpeechHub n'est pas sélectionné, il n'utilise aucune ressource sur votre ordinateur.            

# Synthétiseur et sélection de voix #
Après l'installation, pendant que NVDA est en cours d'exécution, appuyer sur la touche NVDA (Insert ou verrouillage majuscules  en fonction de la configuration du clavier) + "n" et choisissez Préférences > Synthétiseurs à partir du  menu. Les synthétiseurs SpeechHub sont clairement marqués dans la liste de la boîte de dialogue. Sélectionnez le synthétiseur de votre choix dans la liste et confirmez en sélectionnant OK. NVDA devrait commencer à parler en utilisant la voix par défaut du synthétiseur.                     
Pour sélectionner une autre voix du synthétiseur sélectionné, appuyer de nouveau sur NVDA + n et choisissez Préférences > Paramètres vocaux dans le menu. Dans la boîte de dialogue des paramètres vocaux, sélectionnez une voix dans la liste et sélectionnez d'autres paramètres disponibles de la manière habituelle. Confirmez votre sélection en appuyant sur OK.                   
Si vous êtes satisfait de votre sélection pour la  voix SpeechHub et vous souhaitez que NVDA utilise votre sélection la prochaine fois que vous démarrer, appuyer sur la touche NVDA + "n" et sélectionnez Sauvegarder la configuration dans le menu. Si vous configurez NVDA pour sauvegarder sa configuration automatiquement, la dernière étape n'est pas requise.                      

# Remarque sur les paramètres vocaux #
Tous les paramètres disponibles pour la sélection dans la boîte de dialogue Paramètres vocaux sont pertinents avec SpeechHub, mais notez ce qui suit :               
À partir des moteurs fournis avec SpeechHub, seul eSpeak prend en charge les variantes et donc la liste des variantes n'apparaît pas avec d'autres synthétiseurs.                  
Tripler le débit est fournie par Sonic qui est intégré dans SpeechHub. Mais pour le pilote commun de Microsoft version API version 5, tous les synthétiseurs prennent en charge Tripler le débit. MaryTTS et PicoTTS utilisent Sonic en permanence pour le contrôle du débit et la hauteur et par conséquent, la case à cocher Tripler le débit n'est pas disponible car ces synthétiseurs l'utilisent tout le temps (ou en d'autres termes, la case à cocher ne peut pas être désactivée).             

# Ajout du support SpeechHub à l'installation portable de NVDA #
SpeechHub peut être utilisé avec l'installation portable de NVDA. Vous devez d'abord installer SpeechHub sur votre ordinateur comme décrit dans la page précédente dans cette section.                           
SpeechHub ne peut être installé que dans un lecteur USB portable  de type USB en lecture-écriture car il doit écrire ses paramètres sur le lecteur. En supposant que NVDA est installé pour l'unité "F", procédez comme suit et n'oubliez pas d'installer le module complémentaire SpeechHub comme expliqué dans la dernière étape ci-dessous.                      


1. Créer un dossier appelé "Applications" dans le répertoire racine :             
`F:\Applications`               
Notez qu'il est très important que vous épeler le nom du dossier Applications exactement sinon SpeechHub ne fonctionnera pas.                  
2. Copier le dossier SpeechHub installé sur votre ordinateur sur le lecteur portable :                      
À partir de, :                    
32-bit:               
`C:\Program Files\SpeechHub`                             
64-bit:                        
`C:\Program Files (x86)\SpeechHub`                        
Vers :                   
`F:\Applications`                        
Résultant en :                   
`F:\Applications\SpeechHub`                  
3. Optionnellement, copier le dossier Java installé sur votre ordinateur sur le lecteur portable :            
SpeechHub a besoin de Java pour fonctionner. Si vous êtes sûr que tous les ordinateurs utilisés avec le lecteur portable ont Java installé, il n'est pas nécessaire d'effectuer cette étape. Sinon, pour une portabilité maximale, copiez le dossier Java sur le lecteur portable. Assurez-vous de copier la version 32 bits de Java, car Java 32 bits peut fonctionner avec des ordinateurs 64 bits, mais Java de 64 bits ne peut pas fonctionner avec des ordinateurs 32 bits. Pour assurer cela, copiez-le à partir de :                   
32-bit:                
`C:\Program Files\Java`            
64-bit:            
`C:\Program Files (x86)\Java`               
Vers                      
`F:\Applications`                       
Résultant en :                  
`F:\Applications\Java`                
SpeechHub fonctionne avec Java 7 ou Java 8.                     
Examinez le sous-dossier sous le dossier java.              
Pour Java 7 le nom du dossier est jre7, laissez-le comme tel.               
Pour Java 8, le nom du dossier varierait et serait par exemple quelque chose comme jre1.8.0_31           
Changez le nom du dossier en jre8               
Notez que le changement de nom de dossier ci-dessus pour Java 8 dans votre lecteur portable est très important, sinon SpeechHub ne fonctionnerait pas avec votre installation portable.                 
Notez que certains ordinateurs ont Java 7 et Java 8 installés ; Vous n'avez pas besoin des  deux à la fois sur votre lecteur portable, car SpeechHub peut travailler avec l'un ou l'autre. Java 8 est préférable.                  
4. Optionnellement, copier un fichier batch pour démarrer NVDA:                
En supposant que NVDA est installé dans un dossier appelé "NVDA" sur votre lecteur portable, vous démarrer probablement NVDA en changeant le dossier dans le dossier NVDA et en cliquant sur (en appuyant sur Entrée) sur le fichier nvda.exe. Vous pouvez toujours le faire et SpeechHub devrait fonctionner correctement. Alternativement, vous pourriez trouver commode de démarrer NVDA à partir d'un fichier de commandes (fichier batch), situé dans la racine du lecteur portable. Un fichier de commandes (fichier batch) est fourni à cette fin, copier:              
À partir de, :               
`F:\Applications\SpeechHub\resources\Start_NVDA.bat`                   
Vers :                
`F:\`                      
Résultant en :                             
`F:\Start_NVDA.bat`           
En cliquant (en appuyant sur Entrée) sur ce fichier batch, vous pouvez démarrer NVDA. Notez que si le dossier où se trouve NVDA est appelé autre chose, vous devez modifier ce fichier de commandes (fichier batch) pour qu'il fonctionne.                   
5. Installer le module complémentaire SpeechHub                  
Pour que SpeechHub fonctionne dans votre installation portable, vous devez installer le module complémentaire SpeechHub. Pour ce faire démarrer votre version portable de NVDA. Invoquer la boîte de dialogue du Synthétiseur [Ctrl + NVDA + s] et assurez-vous qu'un synthétiseur non-SpeechHub est sélectionné; Par exemple le pilote natif eSpeak ou eSpeak NG (dans les dernièrs versions de NVDA). Sauvegarder la configuration de NVDA pour vous assurer que lorsque la version portable de NVDA  est à nouveau démarrée, le pilote natif eSpeak ou eSpeak NG (dans les dernièrs versions de NVDA) est utilisé. Notez que cette étape est très importante pour vous assurer de ne pas perdre la parole pendant l'installation du module complémentaire SpeechHub.                    
Une fois que vous vous êtes assuré que le pilote natif eSpeak est utilisé, installez le complément SpeechHub de la manière habituelle comme expliqué dans une page précédente de cette section à partir de:                               
`F:\Applications\SpeechHub\NVDAAddOn`                     
Si une version précédente du module complémentaire SpeechHub existe, assurez-vous qu'elle est remplacée et que NVDA est redémarré.                      

# SpeechHub avec les didacticiels de NVDA #
Ensemble avec d'autres excellents didacticiels liés à NVDA, Gene NZ a produit des didacticiels audio (en anglais) étape par étape clairs sur l'installation et l'utilisation à la fois des versions standard et portables de SpeechHub.                         
[Ces tutoriels peuvent être trouvés : ici(page en anglais)](http://accessibilitycentral.net/nvda%20audio%20tutorials.html)                 
Les éléments actuels de SpeechHub sont plus loin dans la page ; rechercher SpeechHub                  

# Comment installer le paquet de synthétiseur SpeechHub pour NVDA sur votre ordinateur #
Si vous souhaitez essayer le paquet de synthétiseur SpeechHub, vous pouvez obtenir une copie à partir de                          
[http://www.speakon.org.uk/](http://www.speakon.org.uk/)                
(page en anglais)                           
Pour écouter le didacticiel audio sur ce qu'il faut faire,                
[veuillez consulter le lien suivant à l'adresse suivante :](https://www.dropbox.com/s/n17dk0li6c1ell1/how%20to%20install%20the%20speech%20hub%20synth%20package.MP3?dl=0)                    
(écouter le didacticiel en anglais)                    

# Comment faire pour que le paquet de synthétiseur SpeechHub soit portable avec NVDA #
Vous devrez télécharger la dernière copie de SpeechHub et l'installer sur votre PC. Assurez-vous également d'installer le module complémentaire requis, donc il fonctionnera avec NVDA. Si vous n'avez déjà pas de copie, vous pouvez vous emparer  d'une copie                
[à partir de http://www.speakon.org.uk/](http://www.speakon.org.uk/)          
Vous pouvez également consulter un didacticiel audio antérieur sur la façon d'installer SpeechHub sur votre PC (si nécessaire) ci-dessus. Bien que vous puissiez lire la section sur le travail qui a été effectué jusqu'à présent, ou vous pouvez consulter le site en général.                            

Pour des instructions écrites sur le téléchargement et l'installation du paquet SpeechHub afin  d'être portables sur une clé USB,                 
[veuillez consulter le lien suivant à http://www.speakon.org.uk/SpeechHub/public/docs/](http://www.speakon.org.uk/SpeechHub/public/docs/)                 
(page en anglais)                    
Pour écouter un didacticiel audio sur la façon de rendre SpeechHub portable sur une clé USB avec NVDA,          
[visitez le lien suivant](https://www.dropbox.com/s/9ad3osxnpq6g9ls/how%20to%20make%20the%20speech%20hub%20synthesiser%20package%20go%20portable%20with%20NVDA.MP3?dl=0)                    
(écouter le didacticiel en anglais)                      

Note aux utilisateurs de Java 8 : Même si ces didacticiels audio ont été réalisés pour les utilisateurs de Windows 7 utilisant Java 7 avec SpeechHub; Si vous souhaitez utiliser Java 8 avec SpeechHub à la place, prenez note des informations suivantes. (Cette information est SEULEMENT pour les utilisateurs de la version portable de SpeechHub et Java 8).                  


* Pour Java 7, le nom du dossier est jre7, laissez-le tel quel.                     
* Pour Java 8, le nom du dossier varierait et serait par exemple quelque chose comme jre1.8.0_31                    
* Changez le nom du dossier en jre8                
* Notez que le changement de nom de dossier ci-dessus pour Java 8 dans votre lecteur portable est très important, sinon SpeechHub ne fonctionnerait pas avec votre installation portable.                   
* Notez que certains ordinateurs ont Java 7 et Java 8 installés ; Vous n'avez pas besoin des  deux à la fois sur votre lecteur portable, car SpeechHub peut travailler avec l'un ou l'autre. Java 8 est préférable.               


# Comment faire en sorte que le paquet Speechhub soit portable sur un CD avec 3 options #
Voici les étapes nécessaires pour permettre au paquet Speechhub d'être portable sur un CD. Cela vous permettra d'avoir les 3 options suivantes: 


1. Installation de NVDA sur un PC; 
2. Vous permettant de faire une copie portable de NVDA et de l'enregistrer sur une clé USB; ou 
3. Il suffit simplement d'exécuter NVDA en tant que copie temporaire.                 
Il vous permettra également d'utiliser le paquet Speechhub en déplacement avec votre voix choisie à partir de ce paquet.                      


Étape 1                     
Créez un répertoire (également connu sous le nom d'un dossier) et appelez-le quelque chose de facile à retenir qui se rapporte à speechhub qui se porte portable. Par exemple, vous pouvez créer un nouveau dossier sur votre `C:\` et l'appeler quelque chose comme "speechhub portable".                        

Étape 2                     


1. Ensuite, créez un dossier appelé "Applications" dans le répertoire racine du dossier que vous venez de créer dans l'étape ci-dessus. Par exemple, assurez-vous que le dossier "applications" se trouve dans le dossier  "speechhub portable". Il devrait ressembler à ceci            
`C:\ speechhub portable\Applications`                            
Notez qu'il est très important que vous épeler correctement le nom du dossier Applications - sinon SpeechHub ne fonctionnera pas.                         
2. Copiez le dossier SpeechHub installé sur votre ordinateur sur le dernier dossier que vous venez de créer à l'étape 2 numéro 1 (c'est-à-dire le dossier Application).                       
Par exemple, vous devrez le copier dans `C:\ speechhub portable\Applications`                


Vous devrez copier le dossier SpeechHub à partir de l'un des répertoires suivants sur votre ordinateur. Cela dépendra si vous utilisez une machine 32 bits ou une machine 64 bits.                     

À partir de :                   
32-bit:                 
`C:\Program Files\SpeechHub`                  
64-bit:                     
`C:\Program Files (x86)\SpeechHub`             
Vers :                  
`C:\ speechhub portable\Applications`                                  
Résultant en :                     
`C:\ speechhub portable\Applications\SpeechHub`                 

Étape 3                        
Optionnellement, copiez le dossier Java installé sur votre ordinateur dans le dossier Applications que vous venez de faire au préalable. Il devrait ressembler à ceci                 
`C:\ speechhub portable\Applications\Java`                    
si vous l'avez copié correctement               

SpeechHub a besoin de Java pour fonctionner. Si vous êtes sûr que tous les ordinateurs utilisés avec le lecteur portable ont Java installé, il n'est pas nécessaire d'effectuer cette étape. Sinon, pour une portabilité maximale, copiez le dossier Java dans le dossier que vous aviez fait au préalable. Par exemple le dossier `C:\speechhub portable\Applications`. Assurez-vous de copier la version 32 bits de Java, car Java 32 bits peut fonctionner avec des ordinateurs 64 bits mais Java 64 bits ne peut pas fonctionner avec des ordinateurs 32 bits.                 

Pour assurer cela, copier à partir de :                            
32-bit:                  
`C:\Program Files\Java`                 
64-bit:            
`C:\Program Files (x86)\Java`                      
Vers :                
`C:\ speechhub portable\Applications`                                      
Résultant en :                        
`C:\ speechhub portable\Applications\Java`                  
Notez que certains ordinateurs ont Java 6 et Java 7 installés ; Vous n'avez pas besoin des  deux à la fois sur votre lecteur portable, car SpeechHub peut travailler avec l'un ou l'autre.                    


Étape 4                    
Téléchargez une copie de NVDA et placez-la dans le dossier principal que vous avez créé en premier lieu. Par exemple `C:\ speechhub portable`. Remarque : il doit figurer dans le répertoire racine de ce dossier. C'est-à-dire. `C:\ speechhub portable`. Par exemple, le fichier NVDA_2014.2.exe devra être cliqué sur, puis une case à cocher apparaîtra (comme une boîte de dialogue de sécurité) qui indique que cela s'affiche au démarrage. Décochez cette option, puis ensuite faire tab pour exécuter le bouton et appuyer sur Entrée. Lorsque l'écran suivant s'affiche, vous devriez obtenir un écran pour l'accord de licence. Cochez la case avec la barre d'espace, puis faire tab jusq'à l'écran suivant où vous donne les trois options. Effectuez les modifications apportées à NVDA que vous souhaitez utiliser la copie temporaire, puis enregistrez les modifications. Enfin, fermez complètement l'écran avec Alt + F4.                     

Étape 5                    
Téléchargez les 2 fichiers requis (ce qui fait que le paquet NVDA et le paquet SpeechHub fonctionnent ensemble) en obtenant le fichier zip appelé               
"how to make the speechhub package go portable on a cd with options of 3.zip".                                   
[Il peut être téléchargé à partir du lien suivant](https://www.dropbox.com/s/jzemy57jkgnea3r/how%20to%20make%20the%20speechhub%20package%20go%20portable%20on%20a%20cd%20with%20options%20of%203.zip?dl=0)                            

Ce fichier zip contient les deux fichiers nécessaires. Décompressez ces fichiers et placez-les dans le répertoire que vous avez créé pour la première fois pour ce projet. Par exemple                
`C:\ speechhub portable`. Un fichier sera un fichier autorun.inf et l'autre sera un fichier start.bat.                       

Maintenant, lorsque vous regardez le répertoire que vous avez créé en premier lieu, vous devriez voir ce qui suit :            
`C:\ speechhub portable\Applications` avec le dossier SpeechHub, ainsi que le dossier Java. Vous verrez également les 3 autres fichiers dans le dossier principal. Par exemple le fichier           
`C:\ autorun.inf, le fichier start.bat et également le fichier NVDA_2014.2.exe`. Toute version NVDA peut être utilisée à cette fin. Cela devra cependant être modifié dans le fichier start.bat. Ne vous inquiétez pas, des instructions seront données à cet effet!

Étape 6                  
Mettez en surbrillance les fichiers et les dossiers dans le dossier speechhub portable Par exemple `C:\ speechhub portable` et puis envoyez-les à votre graveur de DVD et suivez les étapes jusqu'à ce que le CD soit brulé ou que les fichiers soient envoyés sur le disque CD-RW. Si vous souhaitez apporter des modifications sur le CD, assurez-vous d'utiliser un disque CD-RW (disque compact réinscriptible), ce qui vous permettra de le faire à tout moment. Il ne vous permettra pas de le faire si un CDR est utilisé.                     

Une fois que le CD a été créé, il ne s'agit que de réintroduire le CD et NVDA et le paquet SpeechHub devrait fonctionner. Sinon, vous devrez peut-être vérifier vos paramètres de lecture automatique dans le panneau de contrôle. Vous devriez pouvoir utiliser NVDA comme d'habitude avec le paquet SpeechHub pendant le déplacement.                                 

Pour écouter le didacticiel audio sur la façon dont cela se fait, passez au lien suivant (attention: le lien pour le tutoriel audio SpeechHub arrive bientôt)                      

Les fichiers nécessaires pour que NVDA et SpeechHub fonctionnent à l'aide d'un fichier d'exécution automatique à partir d'un CD sont disponibles à l'étape 5 ci-dessus.                      
(Dans le fichier zip sont un fichier autorun.inf ainsi qu'un fichier start.bat). Ceux-ci devront être collés dans le répertoire suivant (à titre d'exemple `C:\ speechhub portable`).                                 

# Mise à jour de votre fichier start.bat pour exécuter une version ultérieure de NVDA #
S'il vous plaît, si vous souhaitez qu'une version ultérieure de NVDA fonctionne avec le paquet SpeechHub, le fichier start.bat devra être modifié. Vous aurez besoin d'un programme comme le bloc-notes fourni avec toutes les machines Windows. Supposons que votre start.bat actuel se rapporte à start nvda_2014.2.exe                       

Localisez le Bloc-notes, ouvrez-le et mettez les informations suivantes :                  

`start nvda_2014.3.exe`                   

Une fois modifié, enregistrez ce fichier comme start.bat (en principe, vous modifiez le fichier start.bat et en lui disant de regarder une version ultérieure de NVDA).                       

Copiez ce fichier bat modifié dans le répertoire / dossier racine principal. Par exemple                
`C:\ speechhub portable`                           

À une date ultérieure, si vous souhaitez mettre à jour votre version de NVDA dire à une version encore plus récente, le fichier start.bat devra être modifié à nouveau. C'est ainsi que la nouvelle version fonctionne avec le paquet NVDA ainsi que le paquet SpeechHub sur CD.                       

Pour écouter le didacticiel audio sur la façon dont cela se fait, passez au lien suivant (attention: le lien vers les fichiers requis est bientôt disponible). En outre, le fichier start.bat se rapportera à NVDA 2014.2 et devra être mis à jour au besoin pour fonctionner sur les versions ultérieures comme expliqué ci-dessus).                   

---

Ci-dessous, vous trouverez toutes les informations concernant SpeechHub glaner sur La Toile !                           

`*** Texte original en anglais au sujet de SpeechHub ***`                        

### SpeechHub ###
Home Page in English:                         
[http://www.speakon.org.uk/SpeechHub.html](http://www.speakon.org.uk/SpeechHub.html)                             

### SpeechHub ###
Features release 1.1, latest version 1.1.0, 1 July 2015                        
First SpeechHub version with Support for MaryTTS version 5; more specifically MaryTTS version 5.1.1                    
Links are available further down the page to the NVDA and SpeakOn support pages as well as the full documentation.                      
[http://www.speakon.org.uk/SpeechHub.html#links](http://www.speakon.org.uk/SpeechHub.html#links)                        
SpeechHub is a cross-platform speech server which is installed on your computer. SpeechHub supports out-of-the-box MaryTTS, PicoTTS, eSpeak, Microsoft speech API version 5 (SAPI5) and Microsoft Speech Platform (MSP).                        
Applications called 'clients', requiring speech, communicate with SpeechHub to convert text into speech. At present SpeechHub supports the following applications:                       


* NVDA screen reader                          
[http://www.nvaccess.org/](http://www.nvaccess.org/)                       
SpeechHub connects to NVDA using a single add-on for all synthesizers but they appear separately in the Synthesizer NVDA dialog. Their use is exactly the same as any native synthesizer driver.                   
* SpeakOn MediaSuite                  
[http://www.speakon.org.uk/SpeakOn.html](http://www.speakon.org.uk/SpeakOn.html)               
SpeechHub support is available out-of-the-box in SpeakOn; if SpeechHub is installed, SpeakOn can use SpeechHub's synthesizers like other built-in synthesizer drivers.                        


# Useful links #
The NVDA support pages where you can find information about SpeechHub download, installation and use with NVDA are              
[here](http://www.speakon.org.uk/SpeechHub/public/docs/NVDAClient/index.html)                     
The SpeakOn MediaSuite support pages where you can find information about SpeechHub download, installation and use with SpeakOn MediaSuite are                 
[here](http://www.speakon.org.uk/SpeechHub/public/docs/SpeakOnClient/index.html)                            
The SpeechHub full documentation where you can find an Introduction and development section is                    
[here](http://www.speakon.org.uk/SpeechHub/public/docs/)

# Download and installation for use with NVDA #
SpeechHub Version 1.1.0, 1 July 2015                  
SpeechHub can be installed in Windows Vista, 7 and 8 / 8.1.                            
At present in Windows, the NVDA screen reader and SpeakOn MediaSuite can use SpeechHub; more applications will follow in the future. You have to install SpeechHub only once no matter how many applications use it.             
The computer resource requirements of SpeechHub itself are modest but the efficiency of the synthesizers connected to it vary considerably. Therefore your success in using SpeechHub will depend on the specification of your computer and the synthesizer you use.               
The installation procedure below assumes that the purpose of SpeechHub is to be used with NVDA; once installed it can be used if desired automatically with SpeakOn MediaSuite as well.                
SpeechHub is using an NVDA add-on. To get SpeechHub to work with NVDA you need first to install SpeechHub and then install separately the NVDA SpeechHub add-on wich is included with the package as explained further below otherwise it would not work!. If you have upgraded from an older version of SpeechHub make sure you install again the latest version of the NVDA SpeechHub add-on.                              
[Download the SpeechHub installer from here](http://www.speakon.org.uk/SpeechHub/public/install/SpeechHubInstall.exe)                  

# New installation (SpeechHub was not installed before) #
Run the installer SpeechHubInstall.exe. Confirm that you have read and agree with the license agreement and press Next to continue. There are no choices; the installer will announce that the installation is complete; press Enter to confirm.              
Install the SpeechHub add-on as explained further down this page.             

# Upgrading SpeechHub from a previous version #
SpeechHub cannot be upgraded while it is running and if NVDA is used and SpeechHub is selected as your NVDA synthesizer, simply shutting down the server will leave you without speech.                    
To prevent this, before you install the new version of SpeechHub, select NVDA's own synthesizer as follows:                  


* Press NVDA + n and then select Preferences > Synthesizers from the menu to bring the Synthesizer selection dialog.
* Select eSpeak.
* Press OK to confirm your selection.
* Press NVDA + n again and select the Save configuration from the menu.
* To make sure that you have changed to the default synthesizer, you might want to check that when you quit NVDA and start it again, NVDA's own eSpeak synthesizer is selected.               
Now you need to make sure that the SpeechHub server is not running. Assuming you have selected the espeak NVDA's own synthesizer as explained above, probably the easiest way is to simply wait for 15 minutes from the last time you brought up the Synthesizer selection dialog. This is because each time you bring up the Synthesizer selection dialog SpeechHub starts again if not started already.                
Run the SpeechHubInstall.exe file and proceed normally. You will be asked to confirm that you want to replace your previous installation; select OK. Confirm that you want to replace the old version; the installer will announce that the installation is complete; press Enter to confirm. See the next page for instructions for use.                     
Install the latest version of the NVDA SpeechHub add-on as explained below.                     


# Installing the SpeechHub add-on #
The SpeechHub add-on speechhub.nvda-addon is placed in your computer when you install SpeechHub in:                
On 32-bit computers:              
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`               
On 64-bit computers:                      
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`               
You can install the SpeechHub add-on using either the AddOn Manager or directly from Windows Explorer which might be more convenient.                

# Installing directly from Windows Explorer #
This method works only when NVDA is running otherwise you will get an error. Navigate to:               
On 32-bit computers:            
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`                  
On 64-bit computers:                   
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`                 
Make sure the focus is on speechhub.nvda-addon and press Enter. A dialog box is opened asking you if you wish to install the SpeechHub add-on; select OK to confirm. If you had a version of this add-on before you will be asked if you want to update it; select OK to confirm. You will be asked to restart NVDA to make sure your new add-on takes effect; select OK to confirm.                    
Once NVDA has restarted you can choose a SpeechHub synthesizer and voice in the usual way.                 

# Installing using the AddOn Manager #
Follow the instructions below copied from NVDA's manual and in the open dialog box navigate to:                         
On 32-bit computers:                    
`C:\Program Files\SpeechHub\NVDAAddOn\speechhub.nvda-addon`                  
On 64-bit computers:               
`C:\Program Files (x86)\SpeechHub\NVDAAddOn\speechhub.nvda-addon`                     
The AddOn Manager (From NVDA's manual)                  
The AddOn Manager, accessed by selecting Manage add-ons under Tools in the NVDA menu, allows you to install and uninstall add-on packages for NVDA. These packages are provided by the community and contain custom code that may add or change features in NVDA or even provide support for extra Braille displays or speech synthesizers.          
The AddOns Manager contains a list that displays all the add-ons currently installed in your NVDA user configuration. A package name, version and author are shown for each add-on, though further information such as a description and URL can be viewed by selecting the add-on and pressing the About add-on button.                      
To install an add-on, press the Install button. This will allow you to browse for an add-on package (.nvda-addon file) somewhere on your computer or on a network. Once you press Open, NVDA will ask if you really wish to install the add-on. As the functionality of add-ons is unrestricted inside NVDA, which in theory could include accessing your personal data or even the entire system if NVDA is an installed copy, it is very important to only install add-ons from sources you trust. Once the add-on is installed, NVDA must be restarted for the add-on to start running. Until you do, a status of "install" will show for that add-on in the list.                   
To remove an add-on, select the add-on from the list and press the Remove button. NVDA will ask if you really wish to do this. As with installing, NVDA must be restarted for the add-on to be fully removed. Until you do, a status of "remove" will be shown for that add-on in the list.         
The Manager also has a Close button to close the dialog. If you have installed or removed add-ons, NVDA will first ask you if you wish to restart so that your changes can take effect.                     
Once NVDA has restarted you can choose a SpeechHub synthesizer and voice in the usual way.                    

# SpeechHub and your firewall #
SpeechHub runs as a socket server on your computer. This server is available only locally (known as localhost) which should not expose your computer to security risks but some firewall programs might ask you to confirm that you want to use it; you will need to confirm for SpeechHub to be usable. SpeechHub does not contact any resources outside your computer; it is simply communicating with its client applications such as the NVDA add-on or SpeakOn MediaSuite.                       
 
# How to use with NVDA #
SpeechHub is designed to work in the background and consequently it is started automatically, if it is not running already, by an application that connects to it. One or more applications called 'clients' can use SpeechHub at the same time. When the last application close the connection to SpeechHub, SpeechHub is shutdown automatically after approximately 15 minutes. This means that when a SpeechHub synthesizer is not selected it does not use any resources on your computer.                  

# Synthesizer and voice selection #
After installation, while NVDA is running, press the NVDA key (Insert or Caps Lock depending on keyboard configuration) + 'n' and choose Preferences > Synthesizers from the menu. SpeechHub synthesizers are clearly marked in the dialog list. Select the synthesizer of your choice from the list and confirm by selecting OK. NVDA should start talking using the synthesizer's default voice.                             
To select another voice from the synthesizer you selected, press NVDA + n again and choose Preferences > Voice settings from the menu. In the voice settings dialog, select a voice from the list, and select any other parameters available in the usual way. Confirm your selection by pressing OK.                  
If you are happy with your SpeechHub voice selection and would like NVDA to use your selection next time you start it, press the NVDA + 'n' key and select Save configuration from the menu. If you set NVDA to save its configuration automatically, the last step is not required.             

# Note on voice settings #
All the parameters available for selection in the Voice dialog are relevant with SpeechHub but note the following:                    
From the engines supplied with SpeechHub, only eSpeak supports variants and thus the variant list does not appear with other synthesizers.                  
Rate boost is provided by Sonic which is built into SpeechHub. But for Microsoft speech API version 5 common driver, all synthesizers support rate boost. MaryTTS and PicoTTS use Sonic permanently for rate and pitch control and therefore the rate boost check box is not available as these synthesizers are using it all the time (or in other words the check box cannot be unchecked).                     

# Adding SpeechHub support to the NVDA portable installation #
SpeechHub can be used with the NVDA portable installation. You first need to install SpeechHub on your computer as described in a previous page in this section.                       
SpeechHub can only be installed in a USB type read write portable drive as it needs to write its settings to the drive. Assuming that NVDA is installed to drive 'F', perform the following steps and do not forget to install the SpeechHub add-on as explained in the last step below.         


1. Create a folder called 'Applications' in the root directory:                   
`F:\Applications`                         
Note that it is very important that you spell the folder name Applications exactly otherwise SpeechHub will not work.                             
2. Copy the SpeechHub folder installed on your computer to the portable drive:                  
From:                     
32-bit:                     
`C:\Program Files\SpeechHub`                   
64-bit:                
`C:\Program Files (x86)\SpeechHub`                 
To:                      
`F:\Applications`                 
Resulting in:                          
`F:\Applications\SpeechHub`                   
3. Optionally copy the Java folder installed on your computer to the portable drive:                               
SpeechHub needs Java to work. If you are sure that all the computers used with the portable drive have Java installed, there is no need for you to perform this step. Otherwise, for maximum portability, copy the Java folder to the portable drive. Make sure you copy the 32-bit version of Java as 32-bit Java can work with 64-bit computers but 64-bit Java cannot work with 32-bit computers. To ensure this, copy from:                       
32-bit:               
`C:\Program Files\Java`                          
64-bit:                    
`C:\Program Files (x86)\Java`                  
To                 
`F:\Applications`                
Resulting in:                       
`F:\Applications\Java`                        
SpeechHub works with either Java 7 or Java 8.                          
Examine the sub folder under the java folder.                       
For Java 7 the folder name is jre7, leave it as is.                        
For Java 8 the folder name would vary and be for example something like jre1.8.0_31                  
Change the folder name to jre8                
Note that the above folder name change for Java 8 in your portable drive is very important, otherwise SpeechHub would not work with your portable installation.                
Note that some computers have both Java 7 and Java 8 installed; you don't need both on your portable drive as SpeechHub can work with either. Java 8 is preferable.                        
4. Optionally copy a batch file to start NVDA:                   
Assuming that NVDA is installed in a folder called 'NVDA' on your portable drive, you probably start NVDA by changing folder to the NVDA folder and clicking (pressing Enter) on the nvda.exe file. You can still do this and SpeechHub should work fine. Alternatively you might find it convenient to start NVDA from a batch file located in the root of the portable drive. A batch file is provided for this purposes, copy:                    
From:                     
`F:\Applications\SpeechHub\resources\Start_NVDA.bat`             
To:                        
`F:\`                   
Resulting in:                  
`F:\Start_NVDA.bat`                
By clicking (pressing Enter) on this batch file, you can start NVDA. Note that if the folder where NVDA is located is called something else, you need to modify this batch file for it to work.                          
5. Install the SpeechHub add-on                       
For SpeechHub to work in your portable installation, you must install the SpeechHub add-on. To do this start your portable version of NVDA. Bring up the Synthesizer dialog [Ctrl + NVDA + s] and make sure a non-SpeechHub synthesizer is selected; for example the native eSpeak driver. Save the NVDA configuration to make sure that when the portable NVDA version is started again, the native eSpeak driver is used. Note that this step is very important to make sure you don't lose speech during the SpeechHub add-on installation.                    
Once you have made sure that the eSpeak native driver is used, install the SpeechHub add-on in the usual way as explained in a previous page in this section from:                  
`F:\Applications\SpeechHub\NVDAAddOn`                   
If a previous version of the SpeechHub add-on exists, make sure it is replaced and that NVDA is restarted.                


# SpeechHub with NVDA tutorials #
Together with other excellent NVDA related tutorials, Gene NZ produced clear step-by-step audio tutorials on installing and using both the standard and portable versions of SpeechHub.                          
these tutorials can be found:                           
[here](http://accessibilitycentral.net/nvda%20audio%20tutorials.html)                        
The actual SpeechHub items are further down the page; search for SpeechHub                        

# How to install the SpeechHub synthesiser package for NVDA onto your computer #
If you would like to try out the SpeechHub synthesiser package, you can obtain a copy from               
[http://www.speakon.org.uk/](http://www.speakon.org.uk/)                       
To listen to the audio tutorial on what to do, please             
[go to the following link at](https://www.dropbox.com/s/n17dk0li6c1ell1/how%20to%20install%20the%20speech%20hub%20synth%20package.MP3?dl=0)                       

# How to make the SpeechHub synthesiser package go portable with NVDA #
You will need to download the latest copy of SpeechHub and install it to your PC. Please make sure to also install the required add on, so it will work with NVDA.  If you don't have a copy already, you can grab a copy 
[from http://www.speakon.org.uk/](http://www.speakon.org.uk/)             
You can also refer to an earlier audio tutorial on how to install SpeechHub to your PC (if required) above. While there, you can read the what's new section on the work that has been done so far, or you can check out the website in general.                         

For written instructions on downloading and installing the SpeechHub package to go portable on a USB stick,                   
[please go to the following link at http://www.speakon.org.uk/SpeechHub/public/docs/](http://www.speakon.org.uk/SpeechHub/public/docs/)                             
To listen to an audio tutorial on how to make SpeechHub go portable on a USB stick with NVDA,                       
[please visit the following link](https://www.dropbox.com/s/9ad3osxnpq6g9ls/how%20to%20make%20the%20speech%20hub%20synthesiser%20package%20go%20portable%20with%20NVDA.MP3?dl=0)                         

Java 8 users please note: Even though these audio tutorials have been done for Windows 7 users using Java 7 with SpeechHub; if you would like to use Java 8 with SpeechHub instead, please take note of the following information. (This information is ONLY for users of the portable version of SpeechHub and Java 8).                            


* For Java 7 the folder name is jre7, leave it as is.                      
* For Java 8 the folder name would vary and be for example something like jre1.8.0_31
* Change the folder name to jre8
* Note that the above folder name change for Java 8 in your portable drive is very important, otherwise SpeechHub would not work with your portable installation.
* Note that some computers have both Java 7 and Java 8 installed; you don't need both on your portable drive as SpeechHub can work with either. Java 8 is preferable.


# How to make the Speechhub package go portable on a CD with 3 options #
Below will be the steps needed to allow the Speechhub package to go portable on a CD. It will allow you to have the following 3 options which are:                


1. Installing NVDA to a PC; 
2. Allowing you to make a portable copy of NVDA and save it to a USB stick; or 
3. Simply just running NVDA as a temporary copy.                    
It will also allow you to use the Speechhub package while on the move with your chosen voice from that package.            


Step 1                              
Make a directory (also known as a folder) and call it something easy to remember which relates to speechhub going portable. For example, you could make a new folder on your `C:\` and call it something like "speechhub portable".                          

Step 2                 


1. Next, create a folder called 'Applications' within the root directory of the folder you have just created in the step above. For example, make sure the 'applications' folder is within the 'speechhub portable' folder. It should look like this             
`C:\ speechhub portable\Applications`                     
Note that it is very important that you spell the folder name Applications correctly - otherwise SpeechHub will not work.                      
2. Copy the SpeechHub folder installed on your computer to the latest folder you have just created in Step 2 number 1 (that is the Application folder).                        
For example you will need to copy it into `C:\ speechhub portable\Applications`                       
 

You will need to copy the SpeechHub folder from one of the following directories on your computer.  This will depend if you are running a 32 bit machine or a 64 bit machine.                    

From:                     
32-bit:                       
`C:\Program Files\SpeechHub`                       
64-bit:                 
`C:\Program Files (x86)\SpeechHub`                  
To:                              
`C:\ speechhub portable\Applications`                  
Resulting in:                         
`C:\ speechhub portable\Applications\SpeechHub`                     

Step 3            
Optionally copy the Java folder installed on your computer to the Applications folder you just made beforehand. It should look like this             
`C:\ speechhub portable\Applications\Java`                  
if you have copied it properly.               

SpeechHub needs Java to work. If you are sure that all the computers used with the portable drive have Java installed, there is no need for you to perform this step. Otherwise, for maximum portability, copy the Java folder to the folder you had made beforehand. For example                        
`C:\speechhub portable\Applications folder`. Make sure you copy the 32-bit version of Java, as 32-bit Java can work with 64-bit computers but 64-bit Java cannot work with 32-bit computers.                                

To ensure this, copy from:                    
32-bit:                  
`C:\Program Files\Java`                          
64-bit:            
`C:\Program Files (x86)\Java`           
To:                       
`C:\ speechhub portable\Applications`                          
Resulting in:                   
`C:\ speechhub portable\Applications\Java`           
Note that some computers have both Java 6 and Java 7 installed; you don't need both on your portable drive as SpeechHub can work with either.                              

Step 4                       
Download a copy of NVDA and then put it into the main folder that you created in the first place. For example `C:\ speechhub portable`. Please note: it must be in the root directory of this folder. That is `C:\ speechhub portable`. For example the NVDA_2014.2.exe file will have to be clicked on, and then a check box will appear (like a security dialog) that says show this at Startup. Uncheck this, then tab to the run button and press Enter. When the next screen comes up, you should get a licence agreement screen. Tick the checkbox with the spacebar, then tab to the next screen where it gives you the three options. Make any changes to NVDA that you would like using the temporary copy and then save the changes. Finally close the screen altogether with Alt + F4.                      

Step 5                            
Download the 2 files required (which make the NVDA package and the SpeechHub package work together) by getting the zip file called                   
"how to make the speechhub package go portable on a cd with options of 3.zip".                                
[It can be downloaded from the following link](https://www.dropbox.com/s/jzemy57jkgnea3r/how%20to%20make%20the%20speechhub%20package%20go%20portable%20on%20a%20cd%20with%20options%20of%203.zip?dl=0)                       
This zip file contains both the files that are needed. Unzip these files and put them into the directory you had first created for this project. For example                          
`C:\ speechhub portable`. 
One file will be an autorun.inf file and the other will be a start.bat file.                  

Now, when you look at the directory you created in the first place you should see the following:                        
`C:\ speechhub portable\Applications` with both the SpeechHub folder in it, as well as the Java folder. You will see the other 3 files there in the main folder as well. For example                   
`C:\ autorun.inf` file, the start.bat file and also the NVDA_2014.2.exe file. Any NVDA version can be used for this purpose. This however will have to be modified in the start.bat file. Don't worry, directions will be given for this purpose!                         

Step 6                       
Highlight the files and folders within the speechhub portable folder For example             
`C:\ speechhub portable` and then send them to your DVD burner and follow the steps until the CD is burnt or the files are sent to the CD-RW disk. If you would like to make changes on the CD, make sure you use a CD-RW (compact disk re-writable) disk and this will allow you to do this at any time. It will not allow you to do this if a CDR is used.                        

Once the CD has been created, it is simply a matter of just putting back in the CD and NVDA and the SpeechHub package should work. If not, you may need to check your autoplay settings in the control panel. You should be able to use NVDA as usual along with the SpeechHub package while on the move.                             

To listen to the audio tutorial on how this is done please go to the following link (care: the link for the SpeechHub audio tutorial is coming soon)                        

The files needed to make NVDA and SpeechHub work using an auto run file from a CD are available in Step 5 above.                        
(In the zip file are an autorun.inf file as well as a start.bat file). These will need to be pasted into the following directory (as an example `C:\ speechhub portable`).                       

# Updating your start.bat file to run a later version of NVDA #
Please note, if you would like a later version of NVDA to work along with the SpeechHub package, the start.bat file will need to be modified. You will need a programme like notepad that comes with all Windows machines. Assume that your current start.bat relates to start nvda_2014.2.exe                        

Locate Notepad, open it up and put in the following information:                        

`start nvda_2014.3.exe`                

Once modified, save this file as start.bat (Basically, you are modifying the start.bat file and telling it to look to a later version of NVDA).                  

Copy this modified bat file into the main root directory/folder. For example               
`C:\ speechhub portable`                      

At a later date if you want to update your version of NVDA say to an even newer release, the start.bat file will have to be modified again. This is so the new version works with the NVDA package as well as the SpeechHub package on CD.                

To listen to the audio tutorial on how this is done please go to the following link (care: the link to the files required is coming soon). Also, the start.bat file will relate to NVDA 2014.2 and will have to be updated as needed to work on later versions as explained above).                

---

Voila que je viens de terminer le tutoriel dédié à SpeechHub, en espérant qu'elle vous sera utile!                                      
- Sur ce, je vous souhaite une bonne utilisation  avec NVDA !             
Heureux en utilisant SpeechHub le meilleur outil pour notre lecteur d'écran NVDA!                          
amusez-vous bien!       
have fun with SpeechHub!          
Bien amicalement a vous.         
BlindHelp!         
