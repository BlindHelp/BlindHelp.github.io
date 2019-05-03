---
title: Codes pour le batch lance JAWS et quitte nvda ou vice versa

layout: post
author: BlindHelp
---

<footer>Vendredi 3 Mai 2019</footer>


Coucou mes amis du blog de BlindHelp!    
À la demande d'un ami qui se reconnaîtra à la lecture de cet article, j'ai découvert pourquoi l'un de ses batches ne fonctionnait pas correctement, j'ai suivi la logique utilisée par Alex Leglaud, bien que je ne connaisse pas le DOS, sauf erreur de ma part, il semble fonctionner à nouveau ledit batch.    
Maintenant, pour ceux que ça peut intéresser, je peux mettre ci-dessous les codes pour le batch lance JAWS et quitte nvda ou vice versa qui marchent à ce jour chez moi. Voilà comment il faut procéder:    

* Copier le contenu du fichier, sous ma signature, dans un nouveau fichier texte, par exemple dans le Bloc-notes. Ne copier que les lignes entre --- début du fichier et --- fin du fichier.  
* Sauvegarder ce fichier texte, avec le nom proposé pour chaque batch puis l'extension .bat.  

# Conseils utiles: #
La syntaxe "rem" indique qu'il s'agit d'un commentaire dans le fichier bat.     
Veillez à ce que certaines lignes du code commencent par deux points, par exemple:    
`:ok`    
`:j18`    
Pour  les instructions qui commencent par if, vous trouverez à la fin un numéro qui correspond à la   vérification de la présence et lancement ou arrêt de JAWS, par exemple:    
`if exist C:\Progra~1\Freedo~1\JAWS\18.0\jfw.exe goto ok2`    
suite dont chaque numéro est supérieur, c'est-à-dire en ordre croissant, sauf pour la première instruction, par exemple:    
`if exist C:\Progra~1\Freedo~1\JAWS\2018\jfw.exe goto ok`    
Vient ensuite le numéro de la version précédente de Jaws, par exemple:    
`goto j18`    
et ainsi de suite .    
Vous trouverez par exemple des lignes qui à la fin comportent un numéro:    
`goto ok2`    
 `:ok2`    
suite dont chaque numéro est supérieur, c'est-à-dire en ordre croissant.    
Quoi qu'il en soit, si vous devez modifier les fichiers actuels parce que votre version de JAWS est supérieure à 2018, vous devrez modifier à nouveau les numéros en fin de ligne pour suivre une séquence logique  utilisé par l'auteur initial de ces batches ; y compris la ligne correspondant à la future version de Jaws trouvée dans le code et dans la ligne de commentaire.    
De toute façon, comme vous avez déjà le code, vous pouvez le voir calmement et étudier la manière dont il a été construit depuis sa création. Ces batches sont compatibles avec les versions de Jaws 2018 à JAWS 11, y compris toutes les versions de NVDA installées dans votre ordinateur.    
Merci à Alex  Leglaud!    
Bonne utilisation!    

# lance JAWS et quitte nvdA.bat #
`---------- Début du fichier ----------`    
<br>
`@echo off`    
`rem quitte nvda et lance jaws 2018`    
`rem quitte nvda`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe -q`    
`rem vérifi la présence et lancement de JAWS`    
`if exist C:\Progra~1\Freedo~1\JAWS\2018\jfw.exe goto ok`    
`goto j18`    
`:ok`    
`start C:\Progra~1\Freedo~1\JAWS\2018\jfw.exe`    
`exit`    
`:j18`    
`if exist C:\Progra~1\Freedo~1\JAWS\18.0\jfw.exe goto ok2`    
`goto j17`    
`:ok2`    
`start C:\Progra~1\Freedo~1\JAWS\18.0\jfw.exe`    
`exit`    
`:j17`    
`if exist C:\Progra~1\Freedo~1\JAWS\17.0\jfw.exe goto ok3`    
`goto j16`    
`:ok3`    
`start C:\Progra~1\Freedo~1\JAWS\17.0\jfw.exe`    
`exit`    
`:j16`    
`if exist C:\Progra~1\Freedo~1\JAWS\16.0\jfw.exe goto ok4`    
`goto j15`    
`:ok4`    
`start C:\Progra~1\Freedo~1\JAWS\16.0\jfw.exe`    
`exit`    
`:j15`    
`if exist C:\Progra~1\Freedo~1\JAWS\15.0\jfw.exe goto ok5`    
`goto j14`    
`:ok5`    
`start C:\Progra~1\Freedo~1\JAWS\15.0\jfw.exe`    
`exit`    
`:j14`    
`if exist C:\Progra~1\Freedo~1\JAWS\14.0\jfw.exe goto ok6`    
`goto j13`    
`:ok6`    
`start C:\Progra~1\Freedo~1\JAWS\14.0\jfw.exe`    
`exit`    
`:j13`    
`if exist C:\Progra~1\Freedo~1\JAWS\13.0\jfw.exe goto ok7`    
`goto j12`    
`:ok7`    
`start C:\Progra~1\Freedo~1\JAWS\13.0\jfw.exe`    
`exit`    
`:j12`    
`if exist C:\Progra~1\Freedo~1\JAWS\12.0\jfw.exe goto ok8`    
`goto j11`    
`:ok8`    
`start C:\Progra~1\Freedo~1\JAWS\12.0\jfw.exe`    
`exit`    
`:j11`    
`if exist C:\Progra~1\Freedo~1\JAWS\11.0\jfw.exe goto ok9`    
`goto j10`    
`:ok9`    
`start C:\Progra~1\Freedo~1\JAWS\11.0\jfw.exe`    
`exit`    
`:j10`    
<br>
`---------- Fin du fichier ----------`

# lance nvdA et décharge jaws.bat # 
`---------- Début du fichier ----------`    
<br>
`@echo off`    
`rem quitte jaws 2018 et lance nvda`    
`rem vérifi la présence et arrêt de JAWS`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\2018\JStop.exe goto ok`    
`goto j18`    
`:ok`    
`start C:\Progra~1\Freedo~1\Runtim~1\2018\JStop.exe`    
`rem lance nvda`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j18`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\18.0\JStop.exe goto ok2`    
`goto j17`    
`:ok2`    
`start C:\Progra~1\Freedo~1\Runtim~1\18.0\JStop.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j17`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\17.0\JStop.exe goto ok3`    
`goto j16`    
`:ok3`    
`start C:\Progra~1\Freedo~1\Runtim~1\17.0\JStop.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j16`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\16.0\JFWKill.exe goto ok4`    
`goto j15`    
`:ok4`    
`start C:\Progra~1\Freedo~1\Runtim~1\16.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j15`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\15.0\JFWKill.exe goto ok5`    
`goto j14`    
`:ok5`    
`start C:\Progra~1\Freedo~1\Runtim~1\15.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j14`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\14.0\JFWKill.exe goto ok6`    
`goto j13`    
`:ok6`    
`start C:\Progra~1\Freedo~1\Runtim~1\14.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j13`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\13.0\JFWKill.exe goto ok7`    
`goto j12`    
`:ok7`    
`start C:\Progra~1\Freedo~1\Runtim~1\13.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j12`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\12.0\JFWKill.exe goto ok8`    
`goto j11`    
`:ok8`    
`start C:\Progra~1\Freedo~1\Runtim~1\12.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j11`    
`if exist C:\Progra~1\Freedo~1\Runtim~1\11.0\JFWKill.exe goto ok9`    
`goto j10`    
`:ok9`    
`start C:\Progra~1\Freedo~1\Runtim~1\11.0\JFWKill.exe`    
`cd /d "C:\Program Files\nvda\"`    
`start nvda.exe`    
`exit`    
`:j10`    
<br>
`---------- Fin du fichier ----------`    

# Télécharger les codes via BlindHelp.github.io #
et pour le plaisir, voici les deux fichiers contenant les codes pour le batch lance JAWS et quitte nvda ou vice versa en cliquant sur le lien ci-dessous:    
[Batch_lance_JAWS_et_quitte_nvda_ou_vice_versa.zip](https://blindhelp.github.io/Batch_lance_JAWS_et_quitte_nvda_ou_vice_versa.zip)    

Voilà  profitez- donc, les codes pour le batch lance JAWS et quitte nvda ou vice versa!                
Bien amicalement,              
Rémy (BlindHelp).

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---