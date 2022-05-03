---
title: Comment modifier un flux de radio dans les radios prédéfinis de RadioSure
permalink: "/RadioSure-modifier-des-flux/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 30 Avril 2022</footer>


Coucou mes amis du blog de BlindHelp!    
Lancer le programme [RadioSure](http://www.radiosure.com) depuis son icône sur le bureau.    
Par exemple je tape dans le champs d'édition: france info    
Ensuite il apparaît plusieurs choix, puis je cherche à l'aide des flèches bas ou haut le nom de la radio:    
`France Info; Pays: France; Genre: Talk-News; Langue: French`    
Je fait menu contextuel ou touche Applications    
Puis je fait entrée sur: Lire    
Il ne se pase rien!    
Ne vous inquiétez pas! Donc, je vais corrigé cela tout de suite...    
Fermer au préalable le programme [RadioSure...](http://www.radiosure.com/)   
Je vais faire cela en plusieurs étapes:    
On peut changer cela coup par coup pour chaque flux radio.    
Faites attention!    
Aller sur le chemin suivant:
`C:\Program Files (x86)\RadioSure\Stations\stations-2013-11-30.rsd`    
Puis ouvrir le fichier stations-2013-11-30.rsd avec le Bloc-notes    
Ou une autre date dans le nom du fichier avec extension .rsd    
Chercher le nom de la radio par Ctrl+f comme affiché dans la liste, dans notre cas celle-ci sera comme nom:    
`France Info`    
Vous aurais le début de la ligne comme ceci:    
`France Info; Pays: France; Genre: Talk-News; Langue: French`    
L'URL du flux est séparé avec une tabulation Au début et à la fin de cette URL (signe tab)    
Sélectionnez et supprimez ces deux  URLs qui ne fonctionne pas, dans notre cas celle-ci sera comme sui:    
`http://mp3.live.tv-radio.com/franceinfo/all/franceinfo.mp3`    
`http://france-info1.creacast.com/france-info.mp3`    
Je les supprimes!    
Donc, je colle seulement la parti de l'URL trouver dans le fichier Flux-Radio-France-en-HD-en-bric-a-brac.html ouvert avec le Bloc-notes, donc, dans notre cas cette URL se trouve sur la ligne:    
`<option value="http://direct.franceinfo.fr/live/franceinfo-hifi.aac">franceinfo</option>`    
Donc, la bonne 'URL pour cette radio est:    
`http://direct.franceinfo.fr/live/franceinfo-hifi.aac`    
Maintenant, je la colle entre les signes tab correspondant à l'URL de ladite radio...    
N'oubliez pas que vous devriez avoir deux signes tab entre cette URL    
Donc, cela donne:    
`France Info	Radio fançaise d'information en continu. Toute l'actualité en français en direct sur Internet. Flux RSS et podcasts audio. Reportages vidéos, actualités et diaporamas sonore en ligne.	Talk-News	France	French	http://direct.franceinfo.fr/live/franceinfo-hifi.aac	-	-	-	-`    
Ceci fait, je vais enregistrer mes modifications en cliquant sur l'élément:    
`Enregistrer	Ctrl+S`    
Ou:    
`Ctrl+s`    
Ensuite Alt+f4 ou Quitter q pour fermer ce fichier stations-2013-11-30.rsd ou une autre date dans le nom du fichier avec extension .rsd que nous venons de modifier...    
Fermez également l'emplacement dudit dossier par Alt+f4    
\r\n\r\nbr>\r\n\r\n
Lancer le programme [RadioSure](http://www.radiosure.com) depuis son icône sur le bureau.    
En principe nous somme sur la dernière radio écouter même si le flux ne fonctionne pas.    
Vous devrez rechercher à nouveau la station de radio modifiée sur la liste ...    
`France Info; Pays: France; Genre: Talk-News; Langue: French`    
A nouveau menu contextuel sur lui,    
Puis je fait entrée sur: Lire    
Maintenant, oui, cette radio fonctionne! 😃    
\r\n\r\nbr>\r\n\r\n
Maintenant, nous allons changer deux flux qui ne fonctionnent pas, pour ces stations de radio France Inter et FIP:    
Aller sur le chemin suivant:    
`C:\Program Files (x86)\RadioSure\Stations\stations-2013-11-30.rsd`    
Puis ouvrir le fichier stations-2013-11-30.rsd avec le Bloc-notes    
Ou une autre date dans le nom du fichier avec extension .rsd    
Chercher le nom de la radio par Ctrl+f comme affiché dans la liste, dans notre cas celle-ci sera comme nom:    
`France Inter; Pays: France; Genre: Talk-Public Radio; Langue: French`    
Dans ce cas, il faudra supprimer ces deux URLs:    
`http://www.tv-radio.com/station/france_inter_mp3/france_inter_mp3-128k.m3u`    
`http://www.tv-radio.com/station/france_inter_mp3/france_inter_mp3-32k.m3u`    
Puis placer la nouvelle URL d'écoute entre les signes tab:
`	http://direct.franceinter.fr/live/franceinter-hifi.aac	-	-	-	-`    
N'oubliez pas que vous devriez avoir deux signes tab entre cette URL    
Donc, cela donne:    
`France Inter	Varietes, infos, interviews	Talk-Public Radio	France	French	http://direct.franceinter.fr/live/franceinter-hifi.aac	-	-	-	-`    
\r\n\r\nbr>\r\n\r\n
Une fois fait cela, je changerai l'autre flux de l'autre radio, donc je recherche par Ctrl+f FIP:    
`FIP; Pays: France; Genre: Variety; Langue: French`    
Donc, cela est présenté comme sui:    
`FIP	Music interrupted by traffic updates and cultural information with a short news broadcast at 10 before the hour, with no advertising. The broadcasts are presented by live announcers from 7 am to 11 pm, after which a robot replays parts of the music broadcast the previous day. FIP's programming is an eclectic mix of musical genres: chanson, rock, world music, classical music, film music, jazz and more, but connected with a theme. FIP is one of the few stations with this type of programming in the world.	Variety	France	French	http://www.tv-radio.com/station/fip_mp3/fip_mp3-128k.m3u	http://mp3.live.tv-radio.com/fip/all/fiphautdebit.mp3	http://www.tv-radio.com/station/fip_mp3/fip_mp3-32k.m3u	-	-	-`    
Dans ce cas, il faudra supprimer ces trois URLs:    
`http://www.tv-radio.com/station/fip_mp3/fip_mp3-128k.m3u`    
`http://mp3.live.tv-radio.com/fip/all/fiphautdebit.mp3`    
`http://www.tv-radio.com/station/fip_mp3/fip_mp3-32k.m3u	-	-	-`    
Puis placer la nouvelle URL d'écoute entre les signes tab:    
`https://icecast.radiofrance.fr/fip-hifi.aac`    
N'oubliez pas que vous devriez avoir deux signes tab entre cette URL    
Donc, cela donne:    
`FIP	Music interrupted by traffic updates and cultural information with a short news broadcast at 10 before the hour, with no advertising. The broadcasts are presented by live announcers from 7 am to 11 pm, after which a robot replays parts of the music broadcast the previous day. FIP's programming is an eclectic mix of musical genres: chanson, rock, world music, classical music, film music, jazz and more, but connected with a theme. FIP is one of the few stations with this type of programming in the world.	Variety	France	French	https://icecast.radiofrance.fr/fip-hifi.aac	-	-	-`    
\r\n\r\nbr>\r\n\r\n
Ceci fait, je vais enregistrer mes modifications en cliquant sur l'élément:    
`Enregistrer	Ctrl+S`    
Ou:    
`Ctrl+s`    
Ensuite Alt+f4 ou Quitter q pour fermer ce fichier stations-2013-11-30.rsd ou une autre date dans le nom du fichier avec extension .rsd que nous venons de modifier...    
Fermez également l'emplacement dudit dossier par Alt+f4    
\r\n\r\nbr>\r\n\r\n
Donc, nous ouvrons notre programme [RadioSure](http://www.radiosure.com) depuis son icône sur le bureau.    
Vous devrez rechercher à nouveau la station de radio modifiée sur la liste ...    
Dans notre exemple il faudra rechercher:    
`France Inter; Pays: France; Genre: Talk-Public Radio; Langue: French`    
Ou:    
`FIP; Pays: France; Genre: Variety; Langue: French`    
Je fait menu contextuel ou touche Applications sur le nom de la radio que nous voulons écouter et que nous venons de modifier le flux d'écoute ...    
Puis je fait entrée sur: Lire    
Maintenant, nous pouvons joyeusement écouter nos flux de radio à nouveau avec [RadioSure!](http://www.radiosure.com) C'est sûr de sûr! 😃    
\r\n\r\nbr>\r\n\r\n
Eh bien, si vous voulez changer tous les flux de Radio France qui ne fonctionnent pas dans les radios prédéfinis de RadioSure, vous devrez taper le nom de cette radio dans le champ d'édition...    
Exemple:    
`france culture`    
Rechercher dans la liste des résultats qui s'affiche le nom de la dite radio.    
`France Culture; Pays: France; Genre: Talk; Langue: French`    
Ouvrez un document texte vierge (.doc, .txt) et écrivez le nom de ladite radio et poursuivez vos autres recherches sur les autres flux de Radio France qui ne fonctionnent pas...    
Une fois que vous avez terminé votre recherche et que vous avez obtenu les bons noms des stations de Radio France, fermez le programme [RadioSure...](http://www.radiosure.com/)    
Aller sur le chemin suivant:    
`C:\Program Files (x86)\RadioSure\Stations\stations-2013-11-30.rsd`    
Puis ouvrir le fichier stations-2013-11-30.rsd avec le Bloc-notes    
Ou une autre date dans le nom du fichier avec extension .rsd    
Chercher le nom de la radio par Ctrl+f comme affiché dans la liste...    
Une fois que le nom de la  station est trouvée, supprimez l'URL ou les URL qui ne fonctionnent pas et collez la bonne URL, donc, je colle seulement la parti de l'URL trouver dans le fichier Flux-Radio-France-en-HD-en-bric-a-brac.html ouvert avec le Bloc-notes, comme expliqué ci-dessus ...    
Maintenant, je la colle entre les signes tab correspondant à l'URL de ladite radio...    
N'oubliez pas que vous devriez avoir deux signes tab entre cette URL    
Une fois que nous avons fini de corriger tous les flux dans ce fichier 2013-11-30.rsd avec le Bloc-notes    
Ou une autre date dans le nom du fichier avec extension .rsd    
\r\n\r\nbr>\r\n\r\n
Ceci fait, je vais enregistrer mes modifications en cliquant sur l'élément:    
`Enregistrer	Ctrl+S`    
Ou:    
`Ctrl+s`    
Ensuite Alt+f4 ou Quitter q pour fermer ce fichier stations-2013-11-30.rsd ou une autre date dans le nom du fichier avec extension .rsd que nous venons de modifier...    
Fermez également l'emplacement dudit dossier par Alt+f4    
\r\n\r\nbr>\r\n\r\n
Donc, nous ouvrons notre programme [RadioSure](http://www.radiosure.com) depuis son icône sur le bureau.    
Vous devrez rechercher à nouveau la station de radio modifiée sur la liste ...    
Puis je fait entrée sur: Lire    
Maintenant, nous pouvons joyeusement écouter nos flux de radio à nouveau avec [RadioSure!](http://www.radiosure.com) C'est sûr de sûr! 😃    
Ce qui est nécessaire, c'est une bonne dose de patience!    
Puis le fichier:    

<https://blindhelp.github.io/Flux-Radio-France-en-HD-en-bric-a-brac.html>

`Faire: Enregistrer le lien sous...`    
Pour enregistrer ledit fichier HTML sur votre disque dur et l'ouvrir avec le Bloc-notes pour pouvoir rechercher et copier les flux des stations de Radio France comme expliqué ci-dessus!    
Voilà!    
Bon courage!    
Puis profitez de [RadioSure!](http://www.radiosure.com/)    
Si vous ne l'avez toujours pas, vous pouvez consulter la page officielle ci-dessous de RadioSure:                          
[www.radiosure.com](http://www.radiosure.com/)                         
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---