---
title: TW Blue Un client Twitter accessible
layout: post
author: BlindHelp
---

<footer>Dernière modification Vendredi 3 août 2018</footer>

### TW Blue Nouveau client Twitter accessible ###

Coucou mes amis du blog de BlindHelp !  
Aujourd'hui je vous apporte quelque chose de nouveau ! il s'agit d'un nouveau client Twitter ! nous savons bien qu'il existe le client  
[The Qube,](http://www.quartzprojects.co.uk/)
 mais ce nouveau client TW Blue est plus révolutionnaire, est il est accessible, il a une interface visible et aussi une interface invisible qui est semblable a celle utiliser par le programme  
[The Qube.](http://www.quartzprojects.co.uk/)  

Ce programme a été développé par une personne aveugle hispanophones et j'ai lui suggérer que le programme soit traduit dans  la langue en Français, et lui
a aimer mon idée, étant donné que le programme a déjà à son actif plusieurs langues traduites.  
TW Blue est maintenant en français! C'est cool!  

De même, quelques pages se trouvant sur le site Web TWBlue ont été récemment traduits en Français par votre serviteur ! (si disponible)

# Les différents liens pour accéder aux pages de TWBlue en anglais: #

N'oubliez pas de choisir le lien nommé:  
Français    
Pour avoir les pages dédier à TWBlue dans notre belle langue le français! (si disponible), dans le cas contraire, les liens ci-dessous vous mèneront aux pages en anglais.  
[Pour télécharger toujours la dernière version en date de TWBlue, c'est ici:](https://twblue.es/downloads/)    
[Pour télécharger des Packs de sons pour TWBlue, c'est par là](https://twblue.es/soundpacks/)    
[La documentation de TWBlue, est consultable par ici:](https://twblue.es/documentation/)    
[Pour connaître les statistiques d'utilisation de TWBlue, c'est par là](https://twblue.es/usage)    
[Pour consulter les problèmes connus de TWBlue, c'est par ici](https://github.com/manuelcortez/twblue/issues)    
[Pour connaître la composition de notre équipe, c'est par là](https://twblue.es/team/)    
Si vous le souhaitez vous pouvez [Faire un don](https://twblue.es/donate/)    
pour soutenir le projet de TWBlue!    
C'est comme si vous prenez  une tasse de café au bistro du coin !    
Nous vous remercions par avance pour votre soutien financier !

# Concernant l'impossibilité d'authentifier de nouveaux comptes Twitter dans TWBlue par Manuel Cortez #

De nombreux utilisateurs de TWBlue ont signalé, à la fois sur Twitter et dans les incidence sur GitHub, que TWBlue n'autoriserait pas de nouveaux comptes. Ceci est le résultat d'une modification apportée par Twitter au fonctionnement du processus d'authentification. Cet article décrit la cause de ce problème et comment le résoudre. Veuillez lire ce message avant de mentionner (@tw_blue2) sur Twitter ou d'ouvrir un ticket d'incidence sur GitHub à ce sujet, car nous avons reçu de nombreux tickets sur GitHub en double et il peut être ennuyant de devoir commenter chacun d'entre eux avec la solution. N'hésitez pas à partager ce message avec vos amis.    

### La cause. ###

Si vous souhaitez simplement que votre TWBlue fonctionne à nouveau et que vous ne teniez pas compte des détails techniques, n'hésitez pas à passer cette section et à aller à la rubrique solution ci-dessous.    
Version courte.    
Twitter a modifié le processus d’autorisation de compte qui a cassé la méthode utilisée par TWBlue, et probablement d’autres clients, pour authentifier les nouveaux comptes.    
Version longue.   
Auparavant, pour authentifier les nouveaux comptes, TWBlue ouvrait un serveur Web sur votre appareil. Ce serveur était sur un port aléatoire et ne restait ouvert que pour recevoir la clé d'accès fourni par Twitter lorsque vous autorisez votre compte à être utilisé avec TWBlue. C’est ainsi que vous avez simplement pu cliquer sur "Autoriser l’application" sur le site Web de Twitter et obtenir l’autorisation de votre compte sans action de votre part. Cependant, récemment, Twitter a commencé à exiger des URL de rappel, des adresses pour lesquelles Twitter envoie des clés d'accès et vers lesquelles les applications Twitter se redirigent après avoir été autorisées à utiliser votre compte. L'URL de rappel de TWBlue était "127.0.0.1", de sorte qu'il pouvait envoyer la clé d'accès Twitter au serveur Web ouvert sur votre appareil, mais cela n'est plus autorisé par la politique de Twitter. De ce fait, TWBlue a dû revenir à l’autorisation par code PIN, dans laquelle vous accordez l’accès à TWBlue en saisissant le code PIN que Twitter vous fournit lorsque vous l’autorisez à utiliser votre compte.    

### Solution. ###

Pour le moment, vous devez télécharger une version snapshot pour autoriser un nouveau compte. Vous pouvez télécharger une version snapshot, qui sera toujours la dernière version disponible [(ici).](https://twblue.es/pubs/snapshot.zip)    

#### Mais je ne veux pas utiliser des versions snapshots! ####

C'est très bien. Vous pouvez utiliser la version snapshot uniquement pour autoriser votre compte. Voici comment vous pouvez faire cela.    

1. Exécutez TWBlue.exe à partir du répertoire de la version snapshot et autorisez votre compte.
2. Fermez TWBlue.
3. Copiez le dossier "config" dans le répertoire de la version snapshot dans le dossier TW Blue de votre dossier appdata. Vous pouvez y accéder en ouvrant la boîte de dialogue d'exécution (Windows+r) et en tapant `"%appdata%\TW"` sans les guillemets.
4. Exécutez la version stable de TWBlue que vous avez installée sur votre système. Il devrait vous connecter à votre compte Twitter et vous pourrez à nouveau utiliser la version stable. Vous pouvez supprimer la version snapshot si vous le souhaitez, mais vous pouvez le conserver au cas où votre configuration serait corrompue et que vous deviez réautoriser votre compte.

[Les versions Snapshot sont de retour!](https://twblue.es/posts/snapshots/)    
Manuel Cortez    

# Source du poste en anglais: #
[Regarding the Inability to Authenticate New Twitter Accounts in TWBlue](https://twblue.es/posts/unable-to-authenticate/)    

# A propos de l'installation de TWBlue depuis le fichier twblue_setup.exe #
Quand j'ai fais les propriétés sur l'icône "TW Blue" sur le bureau, j'ai ce chemin :  
`(C:\Program Files\twblue\TWBlue.exe" -i)`  
Il ne faut pas le changer!  
Voici les explications donnés par le dévloppeur de TW Blue:  
Il est ajouté le `-`basculement i pour dire à tw blue que c'est une copie de l'installateur. Dans les systèmes où l'uac (contrôle 
de compte d'utilisateur) est activé, c'est impossible avec tw blue d'écrire sa configuration dans le répertoire program files. En outre, `-i` permet à TWBlue d'être utilisé par plusieurs utilisateurs sur le même ordinateur, parce que TWBlue stocke ses paramètres dans le répertoire`%appdata%`.  
José Manuel  
Ces bon à savoir !  
`[Clin d'oeil] ;)`  

# Envoyer des fichiers audio avec TWBlue par BlindHelp #
TW Blue peut joindre des fichiers audio anonymement, soit avec le service SndUp ou le service TWUp.  
Par contre lors de l'envoi du fichier audio avec SndUP même si le hashtag #audio est présent, vous ne pouvez pas entendre  votre fichier audio, sauf si
vous utilisez le service TWUp.  
Ce dernier si lit des fichiers audio.  
Lorsque vous ouvrez ce lien fourni par SndUp, vous devez enregistrer le fichier audio en appuyant sur la touche Applications qui ouvre un menu contextuel
ou depuis le Menu Fichier, puis choisir "Enregistrer sous", puis appuyez sur la touche Entrée, à l'aide de votre navigateur préféré.  
Ensuite que la boîte de dialogue est ouverte, appuyez sur le bouton Enregistrer, pour enregistrer votre fichier audio en format .WAV, .OGG ou .MP3.  
Faire la même procédure pour télécharger le fichier audio lors de l'écoute du fichier audio avec TWUp.  
Ensuite, vous pouvez écouter votre fichier audio avec votre lecteur favori, une fois enregistré sur votre disque dur.  

Lorsque on écrit un Tweet avec TW Blue on peut ajouter un audio a notre Tweet.  
Faire tabulation pour atteindre le bouton:  
Ajouter audio  
Faire entrée sur lui!  
Nous avons la possibilité de:  
Enregistrer notre voix via le microphone.  
Pour cela faire plusieurs fois tabulation puis faire entrée sur le bouton:  
Enregistrer  
Parler!  
Ensuite vous pouvez appuyez sur le bouton:  
Pause  
pour relancez l'enregistrement, appuyez sur le bouton:   
Reprendre  
Pour arrêter l'enregistrement, appuyez sur le bouton:  
Arrêter l'enregistrement  
Lorsque on appui sur le bouton Arrêter l'enregistrement, nous allons à nouveau dans la première boîte de dialogue Ajouter audio.  
Il y a aussi le bouton Lire  
pour lire l'enregistrement.  
Pour arrêter la lecture de votre enregistrement audio, appuyez sur le bouton:  
Arrêter  

Il y a le bouton Ignorer  
Pour ignorer l'enregistrement.  
Lorsque on appui sur le bouton Ignorer, nous allons à nouveau dans la première boîte de dialogue Ajouter audio.  
Lorsque on appui sur le bouton Annuler  
Cette boîte de dialogue Ajouter audio se ferme.  
Ensuite vous êtes directement positionnés sur le Tweet que vous êtres entrain d'écrire.  

Lorsque vous êtes sur la boîte de dialogue Ajouter audio  
vous pouvez aussi ajouter un fichier existant  
Il faut appuyez sur le bouton:  
Ajouter un fichier existant  
Il s'ouvre une boîte de dialogue classique de recherche Windows 
Les tipe de fichiers supporté sont: WAV, OGG et MP3  
Une fois trouver votre fichier audio sur votre ordinateur  
appuyez sur le bouton:  
Ouvrir  
Ou faire entrée!  
Se fichier audio vient d'être ajouté au Tweet!  

S'aider avec la touche de tabulation:  

Vous trouvez le bouton Lire  
pour lire votre fichier audio. 
Pour arrêter la lecture du fichier audio, appuyez sur le bouton:  
Arrêter  
Appuyez sur le bouton Ignorer  
pour ignorer se fichier audio.  

Dans les deux cas de figure soit si vous avez enregistrer via le microphone ou vous avez ajouter un fichier audio existant  
faire tabulation  
Vous avez deux options pour charger l'audio:  
C'est une zone de liste déroulante  
par défaut il se trouve sur :  
Charger TWUp  
Si on fait flèche bas, il est sur:  
Charger SNDUp  

Donc, nous allons choisire la premier option:  
Charger TWUp  

Faire à nouveau tabulation pour atteindre le bouton:  
Ajouter:  
Une boîte de dialogue pour charger l'audio s'ouvre  
Il nous indique les pourcentages de chargement du fichier audio en cours...  

Annotez que Aucun fichiers de plus de 50 mégaoctets sera chargé sur TWUp.  

Une fois fini, il s'ajoute a notre Tweet l'URL résultant du chargement du fichier audio via TW UP suivi du hashtag `#`audio.  

Maintenant nous pouvons complèter notre Tweet, puis ensuite appuyez sur le bouton:  
Envoyer  
Pour envoyer notre tweet avec notre audio que nous avons ajouter depuis un fichier existant, ou que nous avons enregistré via  le microphone via  
[TWUp](http://twup.me/)  

Si nous aimons le fichier audio après l'avoir écouté...  
Nous pouvons récupérer ceci par le biais de notre navigateur INTERNET EXPLORER, ou Firefox.  

Pour cela lorsque vous écoutez laudio avec le navigateur Firefox par exemple,  
appuyez sur la touche "Applications" c'est-à-dire le menu contextuel, puis choisir "Enregistrer sous".  
Dans le menu contextuel qui apparaît à l’écran, descendez avec flèche basse jusqu’à atteindre la commande intitulée  "Enregistrer sous"», et pressez la
touche entrée.   

Vous pouvez aller aussi dans le menu Fichier puis choisir "Enregistrer sous".  
pour se faire activez le menu déroulant avec la touche ALT.  
Vous êtes directement positionnés sur le menu « Fichier », pressez flèche basse jusqu’à atteindre « Enregistrer sous », et   pressez la touche entrée.  
Une boîte de dialogue s'ouvre  
Faire TAB et MAJ +TAB, afin de sélectionner le chemin de destination de l’enregistrement.  
Vous aurais le fichier audio comme nom avec l'extension .WAV, .OGG ou .MP3.  

Pour finir l’opération d’enregistrement, faites tabulation jusqu’au bouton intitulé « Enregistrer » et pressez la touche entrée.  

Une fois fini l'enregistrement de votre fichier audio...  
Maintenant le fichier audio est dans la boîte!  

Ultérieurement, vous pourrez ouvrir le fichier audio à partir de votre disque dur.  

Si vous avez le navigateur INTERNET EXPLORER, , Dans le menu fichier, choisir "Enregistrer sous"  
pour se faire activez le menu déroulant avec la touche ALT.  
Vous êtes directement positionnés sur le menu « Fichier », pressez flèche basse jusqu’à atteindre « Enregistrer sous », et   pressez la touche entrée.  
Une boîte de dialogue s'ouvre  
Faire TAB et MAJ +TAB, afin de sélectionner le chemin de destination de l’enregistrement.   

Vous aurais le fichier audio comme nom avec l'extension .WAV, .OGG ou .MP3.  

Note vous pouvez aussi appuyez sur la touche "Applications" c'est-à-dire le menu contextuel, puis choisir "Enregistrer sous".  
Dans le menu contextuel qui apparaît à l’écran, descendez avec flèche basse jusqu’à atteindre la commande intitulée   "Enregistrer sous"», et pressez la
touche entrée.   
Une boîte de dialogue s'ouvre  
Faire TAB et MAJ +TAB, afin de sélectionner le chemin de destination de l’enregistrement.   
Vous aurais le fichier audio comme nom avec l'extension .WAV, .OGG ou .MP3.  

Pour finir l’opération d’enregistrement, faites tabulation jusqu’au bouton intitulé « Enregistrer » et pressez la touche entrée.  

Une fois fini l'enregistrement de votre fichier audio...  
Maintenant le fichier audio est dans la boîte!  

Ultérieurement, vous pourrez ouvrir le fichier audio à partir de votre disque dur.  

Je pense que avec les autres navigateurs il y a une fonction similaire.   

Remarque Importante: Il me semble que les fichiers audio son supprimer du serveur TWUp si besoin.  

Vous pouvez utiliser la deuxième option nommé:  
Charger SndUp  
Mais en revanche le lien ouvert ne joue pas le fichier audio!!!  
L'URL qui nous donne le serveur SndUp lors du chargement du fichier audio est suivi de `/a`   
puis du hashtag `#`audio.  
C'est normal car il s'agit d'un lien API Audio utiliser par SndUp.  
Si vous envoyez l'URL fourni par SndUp avec votre Tweet.  

Une fois fini, il s'ajoute a notre Tweet l'URL résultant du chargement du fichier audio via SndUp suivi de `/a`  
puis du hashtag `#`audio.  

Maintenant nous pouvons complèter notre Tweet, puis ensuite appuyez sur le bouton:  
Envoyer  
Pour envoyer notre tweet avec notre audio que nous avons ajouter depuis un fichier existant, ou que nous avons enregistré via   le microphone via  
[SndUP](http://sndup.net/)  

Remarque très importante!  
la personne peut l'ouvrir toujours depuis TWBlue, mais il n'aura pas les informations du fichier audio que vous avez envoyé via le   serveur SndUp.  
Dans se cas la, il aura uniquement le lien de téléchargement afficher, maintenant pour télécharger le fichier il faut utiliser la même   procédure ci-dessus  
afin d'enregistrer le fichier audio soit   
avec INTERNET EXPLORER ou Firefox!!!  

Si vous souhaitez que la personnes puisse voir l'info du fichier audio que vous avez envoyé via le serveur SndUp,  
il faut enlevé à la fin de l'URL  
`/a`  
Laissez seulement le hashtag   
`#`audio.  
avant d'envoyer le Tweet!!!  

Une fois que le lien est corriger puis le Tweet envoyés...  
si la personne souhaite enregistrer le fichier audio, il ouvrira le lien puis poura voir les infos du fichier audio puis le télécharger.  

Une fois la page ouverte de SNDUp  
Chercher le lien nommé:  
Download.  
Faire entrée!  
Il est normal qu'il ne démarre pas le téléchargement, pas de panique ! lool!  
La personne aura uniquement le lien de téléchargement afficher, maintenant pour télécharger le fichier il faut utiliser la même   procédure ci-dessus afin d'enregistrer le fichier audio soit avec   
INTERNET EXPLORER ou Firefox!!!  

Vous pouvez partager vos fichiers audio anonymement par le biais des deux services déjà mentionnées ci-dessus, mais si vous   souhaitez que la personne puisse  lire vos fichiers audio  
depuis Tweetter il faut choisir la première option appelé TWUp et non la deuxième option appelé SndUp.  
Voila!  
Je vous souhaite un bons chargement de vos fichiers audio avec TWUp et SndUp !  

# Conclusion par BlindHelp: #
En espérant que tout ce que est décrit dans cet article consacré à TW Blue, il vous soit utile!  
je vous dis à la prochaine!  
Sur ceux je vous souhaite une bonne découverte de TW Blue, je n'est pas tester tout mais...  
Tester TW Blue c'est l'adopter!!!   
Amusez-vous bien avec TW Blue!  
Arobamicalement à vous.  
BlindHelp!

# Source de la page de TWBlue en anglais: #
[TWBlue](https://twblue.es/#)