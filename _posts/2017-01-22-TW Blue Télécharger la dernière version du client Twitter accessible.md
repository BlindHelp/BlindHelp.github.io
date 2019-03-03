---
title: TW Blue Télécharger la dernière version du client Twitter accessible
layout: post
author: BlindHelp
---

<footer>Dernière modification Mercredi 15 août 2018</footer>

### Nouvelle version de TwBlue 0.94 du mercredi 15.08.2018. ###

Coucou mes amis du blog de BlindHelp !  
Le mercredi 15 Août 2018 est sortie la version de TW Blue 0.94.                
Nous sommes heureux d'annoncer que la version 0.94 de TWBlue est ici!                        
[Télécharger à partir du site officiel de TW Blue](https://twblue.es/es/downloads)         
ou depuis la mise à jour automatique.        
Une fois télécharger puis installer cette nouvelle version de TWBlue 0.94...               
Pour savoir les changements aller sur le Menu Aide puis faire entrée sur l'élément nommé:                                
Quoi de neuf dans cette version ?              
Pour avoir l'aide aller sur ce même menu, puis faire entrée sur l'élément nommé:                     
Documentation            

# Lien directe pour la version instalable (Windows 32 et 64 bits): #
[Nouvelle version de TwBlue 0.94 du mercredi 15 août 2018](https://twblue.es/pubs/twblue_setup.exe)

# Lien directe pour la version portable #
[Télécharger TWBlue 0.94 pour 32 bits](https://twblue.es/pubs/twblue-latest_x86.zip)    
[Télécharger TWBlue 0.94 pour 64 bits](https://twblue.es/pubs/twblue-latest_x64.zip)    

# Lien directe pour TWBlue dans un paquet pour les applications portables (portable apps) #
[Télécharger TWBlue 0.94 pour PortableApps](http://twblue.es/pubs/TWBluePortable_0.94.paf.exe)

# Lien directe pour les version snapshot #

- Version générée directement à partir de notre référentiel de code source.
- Il inclut les dernières fonctionnalités et les corrections de bogues intégrées.
- Il peut contenir des erreurs qui n'ont pas été trouvées.
- Les mises à jour des traductions et de la documentation ne sont pas garanties.

[Télécharger TWBlue snapshot](https://twblue.es/pubs/snapshot.zip)    

Pour ma part je recommande la version dite Snapshot qui, bien qu'il s'agisse d'une version de développement, fonctionne mieux car plus compatible avec les modifications récentes introduites par Twitter, voir les informations ci-dessous.    
Merci à notre amie Isabelle de nous avoir fourni ces informations utiles.    

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

# Les différents liens pour accéder aux pages de TWBlue en anglais: #

N'oubliez pas de choisir le lien nommé:  
Français    
Pour avoir les pages dédier à TWBlue dans notre belle langue le français! (si disponible), dans le cas contraire, les liens ci-dessous vous mèneront aux pages en anglais.  
[Pour télécharger toujours la dernière version en date de TWBlue, c'est ici:](https://twblue.es/downloads/)    
[Pour télécharger des Packs de sons pour TWBlue, c'est par là](https://twblue.es/soundpacks/)    
[La documentation de TWBlue, est consultable par ici:](https://twblue.es/documentation/)    
[Pour connaître les statistiques d'utilisation de TWBlue, c'est par là](https://twblue.es/usage)    
[Pour consulter les problèmes connus de TWBlue, c'est par ici](https://github.com/manuelcortez/twblue/issues)    
[Pour connaître la composition de notre équipe, c'est par la](https://twblue.es/team/)    
Si vous le souhaitez vous pouvez [Faire un don](https://twblue.es/donate/)    
pour soutenir le projet de TWBlue!    
C'est comme si vous prenez  une tasse de café au bistro du coin !    
Nous vous remercions par avance pour votre soutien financier !

# Qu'est-ce que c'est que TWBlue ? #
C'est un logiciel qui permet d'utiliser le réseau social Twitter de façon accessible.                 
Sur ceux je vous souhaite une bonne découverte de TW Blue, je n'est pas tester tout mais...  
Tester TW Blue c'est l'adopter!!!   
Amusez-vous bien avec TW Blue!  
Arobamicalement à vous.  
BlindHelp!             

# Source de la page de TWBlue en anglais: #
[TWBlue](https://twblue.es/#)