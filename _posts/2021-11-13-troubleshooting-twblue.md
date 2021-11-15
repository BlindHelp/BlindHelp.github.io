---
title: TW Blue, anomalie de fonctionnement - Procédure de dépannage rapide by BlindHelp
permalink: "/troubleshooting-twblue/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 13 Novembre 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Tout d'abord, je voulais remercier nos amis Isabelle et Jérémy pour leur réactivité rapide à la solution de ce problème.    
Suite à une info donné par Jérémy qui nous dit que les dev de TWBlue sont eux qui ont fait une boulette en réinitialisant leur clé d'API ce qui a eu pour conséquence de rendre tous les TWBlue inopérants car depuis l'été, de nombreuses modifications ont été apportées au code du programme, c'est pourquoi j'ai préparé ce guide rapide avec les étapes à suivre au pied de la lettre, à savoir que cette procédure est uniquement destinée aux personnes qui ont installé une ancienne version du programme TW Blue et celui-ci ne fonctionnent pas lorsque est démarrer à partir du raccourci sur le bureau et ont déjà eu une session ouverte sur Tw Blue et leur compte est déjà associé à une compte Twitter.    
L'étape pour récupérer le dossier de configuration d'une version portable est différente, quoi qu'il en soit, je vais l'expliquer ci-dessous.    
Nous allons d'abord traiter le problème de la version installable, pour cela veuillez instamment suivre les instructions décrites ci-dessous.   

# TW Blue, anomalie de fonctionnement - Procédure de dépannage rapide pour la version instalable by BlindHelp

1. Au préalable Avant toute manipulation, nous devons rechercher notre dossier de configuration, pour cela  dans la fenêtre du dialogue Exécuter de Windows ouverte par les touches Windows+R vous tapez:    
``%appdata%\TWBlue\config``    
Ou dans le cas contraire aller sur le bureau, puis chercher votre nom d'utilisateur, faire Entrée,  puis ouvrir les dossiers AppData, Roaming, TW Blue puis sauvegarder le dossier config    
Mais il y a une chose, comme en principe, nous ne savons pas si ce dossier config est endommagé ou non, je préfère faire quelque chose de plus drastique, car si je garde le dossier d'origine TW Blue avec mon dossier config dans le dossier AppData et que je fait la désinstallation puis je fais une nouvelle installation du programme, le TW Blue ne démarre pas.    
2. Au lieu de sauvegarder uniquement le dossier config, nous renommerons le dossier TWBlue  se trouvant dans le dossier AppData.    
3. Appuyez sur la touche F2 et renommez ce dossier par xTWBlue puis faire entrée afin d'accepter les changements de ce nouveau nom.    
4. Fermez cette fenêtre avec Alt + F4    
5. Désinstaller le programme TWBlue et vérifier qu'il a rien laisser dans son dossier de programmes.    
Pour les personnes qui ont Windows 10, c'est dans le chemin:    
``"C:\Program Files\twblue"``    
En principe, la désinstallation de TW Blue supprime ce dossier et son raccourci bureau.    
Remarque: L'assistant de désinstallation pour le programme TW Blue ne supprime pas le dossier config (y compris le dossier TW Blue se trouvant dans le dossier AppData), c'est pourquoi je vous conseille de suivre instamment mes instructions décrites ci-dessus.    
6. Téléchargez la dernière version instalable de TW BLU du 12 novembre 2021 depuis le suivant lien direct.    
[TWBlue 2021.11.12 installer pour windows (32 et 64 bits)](https://twblue.es/pubs/twblue_setup.exe)    
Pour votre information: Vous ne devriez pas réinstaller la nouvelle version de TW Blue en aucune manière au-dessus de l'ancienne version!    
Hélas la désinstallation/réinstallation est indispensable car si par malheur vous ne le faites pas sans désinstallé la version précédente de Tw Blue, vous aurez un message d'erreur avec quoi une dll est introuvable! ☹    
Vous devrez absolument la désinstaller avant d'installer cette nouvelle version!    
Remarque: L'assistant de désinstallation pour le programme TW Blue ne supprime pas le dossier config (y compris le dossier TW Blue se trouvant dans le dossier AppData), c'est pourquoi je vous conseille de suivre instamment mes instructions décrites ci-dessus.    
7. Une fois le téléchargement terminé, il faut localisez le fichier exécutable que vous venez de télécharger comme extension .exe.    
8. Fermez tous les programmes actuellement utilisés par le système, vous éviterez donc de redémarrer votre ordinateur après cette nouvelle installation de TW Blue.    
9. Maintenant, nous allons procéder à l'installation de cette nouvelle version de Tw Blue, en faisant entrer sur le fichier exécutable.    
10. Suivez les instructions à l'écran en laissant toutes les valeurs cochées par défaut et n'oubliez pas d'accepter la licence utilisateur final.    
11. À la fin de l'installation, une case à cocher est cochée pour lancer TW Blue après la fermeture de l'assistant d'installation. Laissez-le comme ça!    
12. Eh bien, Patientez s'il-vous-plait un moment, une  fenêtre de Tw Blue comme titre:    
"Nous avons besoin de votre aide" est ouverte, il nous demande de faire un don, appuyez sur le bouton "Non", ncar nous avons pas de pépettes dans le 👛...    
13. Ensuite une nouvelle fenêtre s'ouvre qui nous propose d'ajouter un compte, il faut la  fermer par échap ou le bouton Annuler puis fermer l'interface de TW Blue par Alt+F4.    
J'ai oublié de vous dire quand on démarre Tw Blue, en version instalable nous aurons un premier message comme suit:    
``TWBlue a détecté que vous exécutez windows 10 et a changé la configuration clavier par défaut à la configuration clavier Windows 10. Cela signifie que certains raccourcis clavier peuvent être différents. S'il vous plaît vérifier le Modificateur de raccourci en appuyant sur Alt+Win+K pour voir tous les raccourcis disponibles pour cette configuration clavier.``    
Cliquez sur le bouton OK pour fermer ce dialogue.    
14. Si nous avons suivi l'étape précédente faisant référence à la manière de sauvegarder notre dossier config en renommant le dossier principal TW Blue avec le nouveau nom xTW Blue, vous devrez le chercher à nouveau dans le dossier AppData.    
15. Lorsque vous démarrez le programme TW Blue dans sa version instalable , il sera créés un nouveau dossier nommé config dans le dossier TW Blue au  même niveau où le dossier que nous avons renommé par xTW Blue dans le dossier AppData.
N'oubliez pas d'exécuter la commande dans le dialogue Exécuter( touches Windows+r) Pour ouvrir le nouveau dossier nommé config:    
``%appdata%\TWBlue\config``    
Ou dans le cas contraire aller sur le bureau, puis chercher votre nom d'utilisateur, faire Entrée,  puis ouvrir les dossiers AppData, Roaming, TW Blue, config    
16. Ensuite, vous devrez ouvrir le dossier que vous avez renommé par xTW Blue se trouvant dans le dossier AppData    
En conclusion, nous aurons deux explorateurs Windows ouverts, c'est-à-dire le premier  avec le dossier config, celui du dossier TW Blue et le deuxième dossier config, celui du dossier  xTW Blu, (les deux se trouvant dans  le dossier AppData).    
17. Attention! Ici vous devez prendre garde, une fois que vous avez ouvert le dossier xTW Blue puis le dossier config du dossier TW Blue (les deux dans  le dossier AppData)    
copiez simplement le premier dossier composé de 5 chiffres puis un point entre les chiffres (dans mon cas, il est affiché comme ça), par la commande Ctrl+c    
Innutile de copier les fichiers:    
``keymap.keymap``    
``twblue.conf``    
Je ne sais pas si ces fichiers sont affectés d'une manière ou d'une autre avec la nouvelle mise à jour du programme, mais je préfère ne pas les copier dans le nouveau dossier config    
puisque nous voulons faire une configuration propre et sans erreurs Afin de démarrer notre version TW Blue instalable en toute sécurité, je ne veux pas prendre des risques inécessaires.    
Cependant, vous pouvez déplacer ledit dossier xTW Blue par la commande Ctrl+x puis la coller ailleurs par la commande Ctrl+v, par exemple dans un autre dossier pour l'avoir sous le coude.    
18. Ensuite, dans le dossier Tw Blue que vous avez ouvert dans l'autre Explorateur Windows    
faire la commande Ctrl+v pour coller ce dossier composé de 5 chiffres puis un point entre les chiffres (dans mon cas, il est affiché comme ça) afin de trouver vos identifiants que vous avez utilisés précédament  afin de vous connecter à votre compte qui était déjà associé à bvotre compte Twitter à travers de TW Blue.    
19. Fermez toutes les fenêtres des deux explorateurs de Windows que vous venez d'ouvrir précédemment.    

Si vous avez fait toutes ces étapes indiquées ci-dessus, nous allons maintenant au bureau et nous recherchons l'icône TWBlue puis nous cliquons dessus.    
En principe il s'ouvrira avec la première fenêtre que nous avions vu précédemment comme titre:    
``Nous avons besoin de votre aide``    
Appuyez sur le bouton:    
``Non``    
et nous allons nous connecter à notre compte de Twitter via TW Blue comme nous l'avons fait avant de cette panne.    
Nous écoutons un son lorsque TWBlue démarre! 😄    
Maintenant, nous pouvons configurer Tw Blue à notre goût, mais l'important est d'avoir connecté notre compte à nouveau en utilisant TW Blue associé à notre compte Twitter... 👍    

Pour les personnes qui utilisent une version portable de TW Blue, ils doivent suivre instamment les étapes décrites ci-dessous.    

# TW Blue, anomalie de fonctionnement - Procédure de dépannage rapide pour la version portable by BlindHelp

1. Accédez au dossier où le programme TW Blue portable a été décompressé soit  pour la version en 32 ou 64 bits.    
twblue_x86 pour 32 bits,    
``twblue_x64 pour 64 bits.    
2. Récupérer le dossier config de votre version portable par la commande Ctrl+x puis la coller ailleurs par la commande Ctrl+v, par exemple dans un autre dossier pour l'avoir sous le coude.    
3. Supprimer tout le contenu du dossier où le programme TW Blue portable correspondant à la version précédente a été décompressé soit  pour la version en 32 ou 64 bits.    
4. Téléchargez à nouveau la nouvelle version de TW Blue en version portable (archive zip) soit pour Windows en 32 ou 64 bits, à partir des liens directs indiqués ci-dessous du 12 novembre 2021.    
[Télécharger TWBlue 2021.11.12 pour 32 bits](https://twblue.es/pubs/twblue_x86.zip)    
[Télécharger  TWBlue 2021.11.12 pour 64 bits](https://twblue.es/pubs/twblue_x64.zip)    
5. Décompressez l'un des fichiers téléchargés (archive zip) en fonction de votre architecture de Windows, soit pour 32 ou 64 bits dans le dossier que nous venons de le vider de son contenu.    
6. Ensuite recherchez et cliquez sur le fichier  twblue.exe    
7. Eh bien, Patientez s'il-vous-plait un moment, une  fenêtre de Tw Blue comme titre:    
"Nous avons besoin de votre aide" est ouverte, il nous demande de faire un don, appuyez sur le bouton "Non", ncar nous avons pas de pépettes dans le 👛...    
8. Ensuite une nouvelle fenêtre s'ouvre qui nous propose d'ajouter un compte, il faut la  fermer par échap ou le bouton Annuler puis fermer l'interface de TW Blue par Alt+F4.    
9. Lorsque vous démarrez le programme TW Blue en version portable, il sera créés un nouveau dossier nommé config dans ce dossier.    
10. Si nous avons suivi l'étape précédente faisant référence à la manière de sauvegarder notre dossier config de la version portable, vous devrez le chercher à nouveau.    
11. Ensuite, vous devrez ouvrir ce dossier comme nom config de la version portable que vous avez sauvegardé précédemment.    
12. Puis ouvrir le dossier config du TW Blue) de la nouvelle version portable.    
En conclusion, nous aurons deux explorateurs Windows ouverts, c'est-à-dire, le premier dossier config précédemment sauvegardé puis le deuxième dossier config se trouvant dans le dossier dédié à la version portable de TW Blue.    
13. Attention! Ici vous devez prendre garde, une fois que vous avez ouvert le dossier config précédemment sauvegardé puis le dossier config utilisé pour la version portable    
copiez simplement le premier dossier composé de 5 chiffres puis un point entre les chiffres (dans mon cas, il est affiché comme ça), par la commande Ctrl+c    
Innutile de copier les fichiers:    
``keymap.keymap``    
``twblue.conf``    
Je ne sais pas si ces fichiers sont affectés d'une manière ou d'une autre avec la nouvelle mise à jour du programme, mais je préfère ne pas les copier dans le nouveau dossier config    
puisque nous voulons faire une configuration propre et sans erreurs Afin de démarrer notre version TW Blue portable en toute sécurité, je ne veux pas prendre des risques inécessaires.    
14. Ensuite, dans le dossier Tw Blue dédié à la version portable que vous avez ouvert dans l'autre Explorateur Windows    
faire la commande Ctrl+v pour coller ce dossier composé de 5 chiffres puis un point entre les chiffres (dans mon cas, il est affiché comme ça) afin de trouver vos identifiants que vous avez utilisés précédament  afin de vous connecter à votre compte qui était déjà associé à bvotre compte Twitter à travers de TW Blue.    
15. Fermer la première fenêtre de l'Explorateur Windows que vous venez d'ouvrir précédemment, c'est-à-dire celle du dossier config précédemment sauvegardé, puis garder la deuxième fenêtre du dossier Tw Blue dédié à la version portable ouverte.    

Si vous avez fait toutes ces étapes indiquées ci-dessus, nous allons maintenant au dossier où la version portable est déjà ouverte avec l'Explorateur Windows et nous recherchons le fichier comme nom twblue.exe, puis nous cliquons dessus.    
En principe il s'ouvrira avec la première fenêtre que nous avions vu précédemment comme titre:    
``Nous avons besoin de votre aide``    
Appuyez sur le bouton:    
``Non``    
et nous allons nous connecter à notre compte de Twitter via TW Blue comme nous l'avons fait avant de cette panne.    
Nous écoutons un son lorsque TWBlue démarre! 😄    
Maintenant, nous pouvons configurer Tw Blue à notre goût, mais l'important est d'avoir connecté notre compte à nouveau en utilisant TW Blue associé à notre compte Twitter... 👍    

Si vous utilisez une version portable de TW Blue, nous vous suggérons que vous créer un raccourci sur le Bureau pour accéder au programme plus rapidement.    

À coup sûr, cette  procédure de dépannage rapide chez-moi a bien réinitialisé la procédure d'autorisation sous TW Blue après d'avoir été en panne comme tous les utilisateurs de TWBlue!    

En espérant que tout ce que est décrit dans cet procédure consacré au dépannage rapide liée à l'anomalie de fonctionnement de TW Blue il vous soit utile!    

Veuillez consulter la documentation de TW Blue afin de savoir comment autoriser l'application pour qui puisse accéder à votre compte Twitter, en sélectionnant "Documentation" dans le sous menu Aide Alt+i    
La procédure d'autorisation de l'application n'est pas expliquée dans cette procédure de dépannage rapide.    

Je vous souhaite de tout mon cœur que cela fonctionne aussi pour vous tous!    

Je voulais encore remercier nos amis Isabelle et Jérémy pour leur aide apporté. ;)    

Sur ceux, en attendant que vous ayez aussi un bon gazouillement avec l'oiseau bleu je vous dis à très bientôt sur Twitter! :);     
Amusez-vous bien avec TW Blue!    
Arobamicalement à vous.     
BlindHelp!     

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---