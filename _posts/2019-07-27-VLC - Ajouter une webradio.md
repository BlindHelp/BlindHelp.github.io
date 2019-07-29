---
title: VLC - Ajouter une webradio

layout: post
author: BlindHelp
---

<footer>Samedi 27 Juillet 2019</footer>

Coucou mes amis du blog de BlindHelp!            
Ici, je vous apporte tout d'abord une astuce trouvée sur le Web, puis ensuite viendra la partie pour ajouter ces flux radio sur notre Lecteur multimédia VLC et ensuite de les lire, alors profitez-en.    

# Ecouter la radio sur Internet - VLC #
Avec le lecteur multimédia VLC, vous pouvez lire des vidéos et écouter de la musique. Mais saviez-vous que vous pouviez également écouter la radio sur Internet. VLC vous permet en effets à toutes les radios du service Icecast Radio.    

1. Lancez VLC. Affichez la liste de lecture en cliquant sur le menu Vue puis sur Liste de lecture.
2. Dans la colonne de gauche, double cliquez sur l'élément Internet.
3. Cliquez ensuite sur Icecast Radio Directory.
4. Vous avez alors accès à des milliers de radios. Double cliquez sur une radio pour commencer à l'écouter.
5. Vous pouvez utiliser le champ Rechercher pour affiner la liste à vos critères.

Note: Cette partie est totalement inaccessible pour les personnes qui ont un lecteur d'écran tel que JAWS ou NVDA.    
Je trouve une arborescence vide, une zone d'édition, un boucon déroulant avec  lequel  je  ne  peut  rien  faire.    

# Voici une maigre consolation donnée par une personne voyante qui développe des extensions pour NVDA: #
Dans la fenêtre "Liste de lecture", on peut accéder à l'arborescence, mais les éléments ne sont pas nommés, donc évidemment pas lus par NVDA. Heureusement, ici l'élément Icecast Radio Directory est en dernier, et il suffit donc de taper flèche fin pour l'atteindre. Quand il est activé, la liste des radios est correctement lue par NVDA.    
Ce serait un problème à signaler à VLC et facilement corrigeable par eux `*`.    

# Voilà quelques infos supplémentaires. #

- Pour ouvrir la liste de lecture, le raccourci est Ctrl +L. Ça ouvre une nouvelle fenêtre de VLC, si tu n'as pas coché "Liste de lecture intégrée" dans le menu "Vue".
- La liste des radios est sous forme d'une arborescence. Quand tu actives l'élément Icecast Radio Directory, ça ne déplace pas le focus dans la liste des radios. Il faut en plus appuyer sur Tab. Dans cette liste, tu peux te déplacer par l'initiale des radios.
- Je n'ai pas trouvé de moyen facile pour arrêter une radio. On peut toujours la mettre en pause par son menu contextuel.

J'ai eu des plantages de l'ordinateur, donc je pense que ce n'est pas le meilleur logiciel pour écouter des radios via le service Icecast Radio Directory.

# Note be BlindHelp: #
`*` Le problème vient d'être soumis à l'un des développeurs de VLC en français, et ce sera vu dans une prochaine version de VLC.

# Remarques: #
Le plantage est seulement avec le lecteur d'écran NVDA sans ou avec l'extension dédiée à NVDA pour VLC.    
Avec le lecteur d'écran JAWS on peut faire la même manipulation, pas de plantage de JAWS via le service Icecast Radio Directory.    

# Lorsque l'élément Icecast Radio Directory est activé: #

- Appuyez deux fois sur Tab.
- Dans cette liste, tu peux te déplacer par l'initiale des radios, mais aussi avec les touches fléchées.
- Appuyez sur la touche Entrée sur une radio pour commencer à l'écouter.
- Dans cette liste, on peut aussi la mettre en lecture par son menu contextuel.
- Dans cette liste, on peut toujours la mettre en pause par son menu contextuel.

Si on fait Alt+Tab on retrouve la fenêtre avec le nom de la radio en cours de lecture.

- Dans cette fenêtre on peut utilisez les raccourcis claviers natifs à VLC.

# Voici une alternative donnée par un autre ami: #

On peut se rendre sur le site dirrectement;    
[http://dir.xiph.org/](http://dir.xiph.org/)

Les avantages: les  radios sont classés par style ou genre et puis,  le  site  utilisera notre lecteur de musique par défaut; de plus, aucun plantage et enfin, on peut avec les format .m3u sauvegarder les liers-radios qui nous plaisent dans notre machine pour utilisation ultérieure plus que facile!    

Merci à Paul pour cette astuce! 😄    

Et si malgré tout, vous ne trouvez pas votre bonheur dans le répertoire Icecast radio Directory  de VLC...  Comme vous allez le voir, il est très simple d’écouter d’autres radios. Dans un premier temps, vous allez rechercher le flux correspondant à la radio que vous voulez écouter. Pour cela, vous pouvez vous rendre sur le site [http://www.shoutcast.com/](http://www.shoutcast.com/), puis cliquez ensuite sur le lien LISTEN. Sélectionnez un genre dans le volet gauche, (pour les personnes qui ont un lecteur d'écran tel que JAWS ou NVDA Trouver le titre nommé "GENRE", ensuite, vous pouvez choisir l'un des genres listés sous forme de lien avec les touches fléchées).    
Par exemple si vous cliquez sur le lien nommé:    
[Latin](https://directory.shoutcast.com/Genre?name=Latin)    
vous devrez choisir le type de musique latine que vous voulez écouter;    
Par exemple, vous pouvez cliquez sur le lien nommé ["Salsa"](https://directory.shoutcast.com/Genre?name=Salsa)    
Ensuite, il affiche toutes les radios où vous pouvez écouter de la salsa.    
Pour notre exemple, nous avons sélectionné dans la liste des radios:    
El Metro Salsero    
Note: Au-dessus du nom de la station de radio, vous trouverez un lien appelé:    
"Download", cliquez sur celui-ci  pour afficher les flux associés à cette radio, ensuite cliquez avec le bouton droit de la souris ou touche Applications sur le lien "Any player (.m3u)" et choisissez l'élément selon votre navigateur Web:    
Sous Internet Explorer: Positionnez-vous dessus, clic droit de la souris, flèche basse jusqu’à Copier le raccourci, pressez la touche entrée, le lien est copié dans le presse papier.    
Sous Mozilla Firefox: Positionnez-vous dessus, menu contextuel, flèche basse jusqu’à Copier l’adresse du lien, pressez la touche entrée, le lien est copié dans le presse papier.    

Dans notre cas pour la radio que nous avons choisi, Le lien du flux radio copié dans le presse-papiers sera:    
`http://yp.shoutcast.com/sbin/tunein-station.m3u?id=1694241`    

# Voici quelques flux radio de salsa: #

Salsa Warriors    
`http://yp.shoutcast.com/sbin/tunein-station.m3u?id=1475899`    

LA CATEDRAL DE LA SALSA "RADIO"    
`http://yp.shoutcast.com/sbin/tunein-station.m3u?id=1780010`    

Puertosalsa radio    
`http://yp.shoutcast.com/sbin/tunein-station.m3u?id=1826219`    

Hard Salsa Bogotá   
`http://yp.shoutcast.com/sbin/tunein-station.m3u?id=1658424`    

Et ainsi de suite, vous trouverez plus de radios contenant les flux radio pour écouter de la salsa.    

# Pour ajouter une webradio à VLC: #
Basculez sur VLC. Lancez la commande Ouvrir un flux réseau dans le menu Média ou appuyez simultanément sur les touches Contrôle et N. La boîte de dialogue Ouvrir un média s’affiche, onglet Réseau sélectionné. Supprimez le contenu de la zone de texte Entrer une URL réseau, puis appuyez sur Contrôle et V pour y copier le contenu du presse-papiers. Cliquez enfin sur Lire pour écouter la nouvelle radio.

Si vous recherchez une radio francophone, je vous conseille le site [http://fluxradios.blogspot.fr/.](http://fluxradios.blogspot.fr/) Sélectionnez un pays dans la partie supérieure de la page. Les radios correspondantes sont listées. Cliquez sur le lien de la radio que vous voulez écouter. Plusieurs flux sont proposés pour la radio choisie. Sélectionnez l'un d'entre eux et copiez son URL dans le presse-papiers selon l'option utiliser par votre navigateur Web:    
Sous Internet Explorer: Positionnez-vous dessus, clic droit de la souris, flèche basse jusqu’à Copier le raccourci, pressez la touche entrée, le lien est copié dans le presse papier.    
Sous Mozilla Firefox: Positionnez-vous dessus, menu contextuel, flèche basse jusqu’à Copier l’adresse du lien, pressez la touche entrée, le lien est copié dans le presse papier.    

# Pour ajouter une webradio à VLC: #
Basculez sur VLC. Lancez la commande Ouvrir un flux réseau dans le menu Média ou appuyez simultanément sur les touches Contrôle et N. La boîte de dialogue Ouvrir un média s’affiche, onglet Réseau sélectionné. Supprimez le contenu de la zone de texte Entrer une URL réseau, puis appuyez sur Contrôle et V pour y copier le contenu du presse-papiers. Cliquez enfin sur Lire pour écouter la nouvelle radio.

Les Annuaire des URL du flux de diffusion des radios Shoutcast et Fluxradio sont pratiques et très complets. Ceci étant dit, vous pouvez également rechercher le flux audio d’une Webradio en particulier. Supposons par exemple que vous vouliez écouter la webradio BFM. Ouvrez votre moteur de recherche Web préféré et tapez flux radio bfm. Ouvrez l’un des sites proposés, copiez l’URL du flux dans le presse-papiers de Windows et ouvrez le flux dans VLC. Ici, le lien est copié depuis le site [fluxradio.blogspot.fr](http://fluxradios.blogspot.fr/)  (Merci à Sèb):    
Donc, le voici:    
`http://chai5she.cdn.dvmr.fr/bfmbusiness`     

# Si vous voulez en savoir plus sur VLC, vous pouvez visiter le lien suivant: #
[VLC: Site officiel - Des solutions multimédias libres pour tous les OS ! - VideoLAN](https://www.videolan.org/)                     

# Voici à nouveau le site que nous avons utilisé pour rechercher des flux radios francophones: #
[fluxradio.blogspot.fr](http://fluxradios.blogspot.fr/)  (Merci à Sèb):    

# Et ici vous avez le lien pour les playlists: #
[VLC - Playlists via FluxRadios.com](http://fluxradios.blogspot.com/p/vlc-playlist.html)            
(Merci à Sèb).

# Voici d'autres articles connexes à VLC media player sur BlindHelp.github.io: #

[Ecouter des flux radios et vidéos avec VLC media player](https://blindhelp.github.io/Ecouter-des-flux-radios-et-vid%C3%A9os-avec-VLC-media-player/)    

[Copier ou Ripper un DVD sur son ordinateur avec VLC](https://blindhelp.github.io/Copier-ou-Ripper-un-DVD-sur-son-ordinateur-avec-VLC/)    

[Comment construire une playlist de format XSPF jouable avec VLC media player](https://blindhelp.github.io/Comment-construire-une-playlist-de-format-XSPF-jouable-avec-VLC-media-player/)    

[Ajouté VLC à Envoyer vers pour lire des fichiers ou dossiers](https://blindhelp.github.io/Ajout%C3%A9-VLC-%C3%A0-Envoyer-vers-pour-lire-des-fichiers-ou-dossiers/)    

# Liens utiles: #

[Écouter un DVD en audiodescription avec VLC.](http://angouleme.avh.asso.fr/fichesinfo/fiches_jaws/logiciels_divers/vlc.htm)              

[Utilisation d'un script Jaws pour VLC.](http://angouleme.avh.asso.fr/fichesinfo/fiches_jaws/logiciels_divers/vlc2.htm)            

Voilà, c'est fini ! (whew) Comme dirait l'autre!                     

Amusez-vous bien! :)                       
Sur ce je vous souhaite une bonne écoute des vos flux radios avec VLC media player!                           
Voici le nouvel espace de BlindHelp via GitHub que est aussi le votre!              
[https://blindhelp.github.io](https://blindhelp.github.io)                          
@+                   
BlindHelp!         