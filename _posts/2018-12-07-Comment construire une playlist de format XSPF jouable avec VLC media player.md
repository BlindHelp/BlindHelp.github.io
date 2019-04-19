---
title: Comment construire une playlist de format XSPF jouable avec VLC media player
layout: post
author: BlindHelp
---

<footer>Dernière modification Mardi 15 Janvier 2019</footer>

Coucou mes amis du blog de BlindHelp!  
Cet tuto dédié à la construction d'une playlist de format XSPF jouable
avec VLC media player est largement inspiré du tutoriel XSPF en anglais:
XML Shareable Playlist Format de:  
<http://xspf.org/quickstart/>  

Eh bien sans trop tarder, je vous souhaite une bonne lecture! 😉  
Bien amicallement a vous.  
BlindHelp!


Comment construire une playlist de format XSPF jouable avec VLC media player?
=============================================================================

Introduction.
=============

XSPF (prononcez spiff), qui signifie XML Shareable Playlist Format, est
une découverte que j’ai faite il y a peu quand je cherchais un flux
radio. Il s’agit, comme son nom l’indique, d’un dialecte XML permettant
de créer vos playlists de flux audio ou vidéo et même une playlist avec
des flux radio.  

Vous pouvez faire vos listes de lecture XSPF (XML Shareable Playlist
Format) et modifications avec un éditeur de texte comme Notepad (sous
W10), c'est-à-dire le Bloc-notes de Windows. Vous pouvez aussi utiliser
un autre éditeur de texte tel que le
[Notepad++.](https://notepad-plus-plus.org) Il faut juste veiller à bien
respecter la structure des fichiers [XSPF.](http://xspf.org/quickstart)  
Cette liste de lecture XSPF est jouable via VLC.  

[Télécharger Notepad++](https://notepad-plus-plus.org/fr/)  
Pour Windows.  
(page en français).


XSPF (XML Shareable Playlist Format) Guide de démarrage rapide
==============================================================

Cet tuto est un guide destiné aux personnes qui rencontrent le format
XSPF pour la première fois.


Qu'est-ce que le format XSPF?
=============================

-   Un format de liste de lecture comme le format M3U
-   XML comme le format RSS
-   Prononcez spiff
-   application de type MIME / xspf + xml


À quoi ressemble le format XSPF?
================================

Un document très simple ressemblant à ceci:  
`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
`Cette ligne commence par une tabulation`  
`<trackList>`  
`Cette ligne commence par deux tabulations`  
`<track><location>file:///mp3s/song_1.mp3</location></track>`  
`Cette ligne commence par deux tabulations`  
`<track><location>file:///mp3s/song_2.mp3</location></track>`  
`Cette ligne commence par deux tabulations`  
`<track><location>file:///mp3s/song_3.mp3</location></track>`  
`Cette ligne commence par une tabulation`  
`</trackList>`  
`</playlist>`  
Notez que les noms de fichiers sont des URI, ce qui signifie que vous
pouvez les transmettre à un navigateur Web. Notez également que c'est
trackList, avec un L majuscule, pas tracklist, avec un l minuscule.  
La playlist suivante est identique, sauf que les fichiers sont sur le
Web:  
`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
`Cette ligne commence par une tabulation`  
`<trackList>`  
`Cette ligne commence par deux tabulations`  
`<track><location>http://example.com/song_1.mp3</location></track>`  
`Cette ligne commence par deux tabulations`  
`<track><location>http://example.com/song_2.mp3</location></track>`  
`Cette ligne commence par deux tabulations`  
`<track><location>http://example.com/song_3.mp3</location></track>`  
`Cette ligne commence par une tabulation`  
`</trackList>`  
`</playlist>`


Type MIME
=========

`Le type MIME pour les documents XSPF est application / xspf + xml. Ce n'est PAS text / plain, audio / xspf ou text / xml. C'EST IMPORTANT.`


Metadata
========

Dans la section suivante, je vais montrer comment faire des métadonnées
(metadata) standard en donnant des exemples de playlist pour chaque
élément. Je vais montrer chaque élément en apportant une modification
dans l'exemple de code suivant:  
`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
`Cette ligne commence par une tabulation`  
`<trackList>`  
`Cette ligne commence par deux tabulations`  
`<track>`  
`Cette ligne commence par deux tabulations`  
`<location>http://example.com/song_1.mp3</location>`  
`Cette ligne commence par deux tabulations`  
`</track>`  
`Cette ligne commence par une tabulation`  
`</trackList>`  
`</playlist>`


Comment définir des métadonnées sur la liste de lecture, telles que le titre, le nom de l'auteur et la page d'accueil de l'auteur?
==================================================================================================================================

`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
  
`Cette ligne commence par une tabulation`  
`<!-- title of the playlist -->`  
`Cette ligne commence par une tabulation`  
`<title>80s Music</title>`  
  
`Cette ligne commence par une tabulation`  
`<!-- name of the author -->`  
`Cette ligne commence par une tabulation`  
`<creator>Jane Doe</creator>`  
  
`Cette ligne commence par une tabulation`  
`<!-- homepage of the author -->`  
`Cette ligne commence par une tabulation`  
`<info>http://example.com/~jane</info>`  
  
`Cette ligne commence par une tabulation`  
`<trackList>`  
`Cette ligne commence par deux tabulations`  
`<track>`  
`Cette ligne commence par trois tabulations`  
`<location>http://example.com/song_1.mp3</location>`  
`Cette ligne commence par deux tabulations`  
`</track>`  
`Cette ligne commence par une tabulation`  
`</trackList>`  
`</playlist>`


Pour une chanson dans une liste de lecture, comment définir des métadonnées telles que le nom de l'artiste et le titre de l'album?
==================================================================================================================================

`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
`Cette ligne commence par une tabulation`  
`<trackList>`  
`Cette ligne commence par deux tabulations`  
`<track>`  
`Cette ligne commence par trois tabulations`  
`<location>http://example.com/song_1.mp3</location>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- artist or band name -->`  
`Cette ligne commence par trois tabulations`  
`<creator>Led Zeppelin</creator>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- album title -->`  
`Cette ligne commence par trois tabulations`  
`<album>Houses of the Holy</album>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- name of the song -->`  
`Cette ligne commence par trois tabulations`  
`<title>No Quarter</title>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- comment on the song -->`  
`Cette ligne commence par trois tabulations`  
`<annotation>I love this song</annotation>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- song length, in milliseconds -->`  
`Cette ligne commence par trois tabulations`  
`<duration>271066</duration>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- album art -->`  
`Cette ligne commence par trois tabulations`  
`<image>http://images.amazon./images/P/B000002J0B.01.MZZZZZZZ.jpg</image>`  
  
`Cette ligne commence par trois tabulations`  
`<!-- if this is a deep link, URL of the original web page -->`  
`Cette ligne commence par trois tabulations`  
`<info>http://example.com</info>`  
  
`Cette ligne commence par deux tabulations`  
`</track>`  
`Cette ligne commence par une tabulation`  
`</trackList>`  
`</playlist>`  

  

Je pense que c'est très simple à comprendre, les tags principaux sont
playlist, trackList et track. Néanmoins, il y en a beaucoup d’autres si
vous voulez aller plus loin. Je vous invite dans ce cas à lire la
spécification complète de XSPF, dans la documentation en anglais [se
trouvant par ici](http://www.xspf.org/xspf-v1.html)  

  

De toute façon je décortiquerais ci-dessous le code et je donnerais des
exemples plus précis.


Création du fichier de format XSPF
==================================

D'abord, vous devez créer le fichier de format XSPF avec le bloc-notes
de Windows (Notepad) ou le programe notepad++.  
Une fois ouvert le bloc-notes de Windows (Notepad),vous pouvez créer un
fichier vierge:  
Éditeur de texte multiligne  
Sans titre - Bloc-notes  
Appuyer sur la commande Enregistrer Ctrl+S.  
Une boîte de dialogue s'ouvre:  
Se déplacez avec la touche de tabulation:  
Enregistrer sous dialogue Nom du fichier : Nom du fichier :Type :
Type :  
Nom du fichier : liste déroulante réduit ALT+N  
*.txt  
remplacer le nom et l'extension du fichier par:  
nom du fichier.xspf  
Tabulation:  
Type : Fichiers texte (*.txt) réduit ALT+T  
Tabulation:  
Encodage : ANSI réduit Alt+c  
Faire flèche bas pour :  
développé  
Encodage : liste  
ANSI 1 sur 4  
Unicode 2 sur 4  
Unicode big endian 3 sur 4  
UTF-8 4 sur 4  
Choisissez la dernière option:  
UTF-8 4 sur 4  
Tabulation:  
Enregistrer Alt+e  
Appuyer sur se bouton pour Enregistrer le fichier même s'il est vierge.  
Tabulation:  
Annuler Appuyer sur se bouton pour continuer à modifier ce fichier, sans
le sauvegarder pour le moment.  

Supposons que vous laissez votre fichier vierge,puis vous avez appuyé
sur le bouton:  
Enregistrer Alt+e  
Vous aurez un fichier comme nom:  
nom du fichier.xspf


Ce fichier peut servir d'exemple pour voir le code utilisé lors de la construction d’une playlist xspf avec des flux radio jouable avec VLC media player
========================================================================================================================================================


Radios Françaises
=================

Playlist qui regroupe de nombreuse radios françaises.  

Vous verrez le contenu de cette même playlist ci-dessous.

[Télécharger le fichier VLC - PC     Mise à jour le
18/03/2018](https://www.dropbox.com/s/jed19lhhj9s3ajd/FR%20-%20-%20France%20-%20V.2018-03%20-%20PC.xspf?dl=1)  

Nom du fichier:  
FR - - France - V.2018-03 - PC.xspf


Décorticage du code xspf avec des flux radio
============================================

Par exemple, voici à quoi ressemble un fichier XSPF contenant plusieurs
flux de stations de radio:  
`---------- Début du fichier ----------`  
Au début du fichier, vous devez mettre les deux premières lignes
contenant le code suivant:  
`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist version="1" xmlns="http://xspf.org/ns/0/">`  
  
Si vous voulez mettre un commentaire sur votre playlist, vous devez
mettre le code suivant:  
(Chaque ligne de commentaire commence par trois tabulations) ici nous
avons mis quatre lignes contenant un commentaire:  
Examinez attentivement le code car il commence par le signe inférieur,
un point d’exclamation, suivi de deux tirets et se termine par deux
tirets et le signe supérieur, logiquement, vous devriez faire trois
tabulations avant de placez le code.  
`<!-- Dernière mise à jour : 11 février 2016 -->`  
`<!-- Trouvez d'autres radios :  <http://dir.xiph.org> <http://www.shoutcast.com> <http://www.listenlive.eu/france.html> <http://wikradio.free.fr> <http://www.jazzradio.fr/radio/webradio> -->`  
`<!-- Découvrez de nouveaux artistes : <http://www.earbits.com> <http://grooveshark.com> <http://www.lastfm.fr> <http://www.jamendo.com/fr/radios> -->`  
`<!-- Le site officiel de XSPF est <http://xspf.org> - Validateur de fichiers XSPF : <http://validator.xspf.org> -->`  
  
Dans la liste de lecture que vous créez, vous pouvez mettre toutes les
valeurs de manière consécutive et laisser une ligne vide pour placer le
code relatif au titre de la liste de lecture.  
Dans cette ligne va le code pour le titre de la playlist, logiquement,
vous devriez faire une tabulation avant de placez le code.  
`Cette ligne commence par une tabulation`  
`<title>Radio Playlist</title>`  
  
Dans cette ligne va le code pour le nom de l'auteur de la playlist,
logiquement, vous devriez faire une tabulation avant de placez le code.  
`Cette ligne commence par une tabulation`  
`<creator>Olivier Pouzadoux</creator>`  
  
Dans cette ligne va le code pour la Page d'accueil de l'auteur de la
playlist, logiquement, vous devriez faire une tabulation avant de placez
le code.  
`Cette ligne commence par une tabulation`  
`<info>http://www.leshirondellesdunet.com</info>`  
  
Dans cette ligne va le code pour indiquer le début de la list,
logiquement, vous devriez faire une tabulation avant de placez le code.  
`Cette ligne commence par une tabulation`  
`<trackList>`  
  
Dans cette ligne va le code pour indiquer le début ou la suite des
pistes ou morceaux ou des flux radio de la playlist, logiquement, vous
devriez faire deux tabulations avant de placez le code.  
`Cette ligne commence par deux tabulations`  
`<track>`  
  
Les lignes suivantes ont les codes pour indiquer:

-   Le titre de la chanson ou du flux radio ; (cette ligne comportera
trois tabulations au début);
-   Le titre de l'album ou du flux radio ; (cette ligne comportera trois
tabulations au début);
-   Un commentaire de la chanson ou du morceaux ou du flux radio ;
(cette ligne comportera trois tabulations au début);
-   L'URL d'écoute du flux radio, de la chanson ou du morceaux en ligne
; (cette ligne comportera trois tabulations au début);  
Garder à l'esprit que cette ligne est très importante, car ici l'URL
d'écoute du flux radio ou du morceaux sera indiqué.

  
Voici les lignes énumérées ci-dessus (sans les tabulations
respectives):  
`<title>ABC Jazz</title>`  
`<album>ABC Jazz</album>`  
`<annotation>(Jazz) ABC Jazz</annotation>`  
`<location>http://listen.radionomy.com/ABC-Jazz</location>`  
  
Après la ligne contenant l’URL d’écoute du flux radio ou du morceau,
vous devez placer le code suivant.  
Ce code indique la fin des pistes ou morceaux ou des flux radio de la
playlist, logiquement, vous devriez faire deux tabulations avant de
placez le code.  
`Cette ligne commence par deux tabulations`  
`</track>`  
  
Si vous souhaitez ajouter plus de pistes ou morceau ou de flux radio à
votre liste de lecture, aprè la dernière ligne, vous devez remettre les
codes pour indiquer:

-   Le code pour indiquer le début ou la suite des pistes ou morceaux ou
des flux radio de la playlist ; (cette ligne comportera deux
tabulations au début);
-   Le titre de la chanson ou du flux radio ; (cette ligne comportera
trois tabulations au début);
-   Le titre de l'album ou du flux radio ; (cette ligne comportera trois
tabulations au début);
-   Un commentaire de la chanson ou du morceaux ou du flux radio ;
(cette ligne comportera trois tabulations au début);
-   L'URL d'écoute du flux radio, de la chanson ou du morceaux en ligne
; (cette ligne comportera trois tabulations au début);  
Garder à l'esprit que cette ligne est très importante, car ici l'URL
d'écoute du flux radio ou du morceaux sera indiqué;
-   Le code qui indique la fin des pistes ou morceaux ou des flux radio
de la playlist ; (cette ligne comportera deux tabulations au début).

  
Voici les lignes énumérées ci-dessus (sans les tabulations
respectives):  
`<track>`  
`<title>Ambiance Reggae</title>`  
`<album>Ambiance Reggae</album>`  
`<annotation>(Reggae, Ska) Ambiance Reggae</annotation>`  
`<location>http://listen.radionomy.com/ambiance-reggae</location>`  
`</track>`  

  
Si vous souhaitez ajouter encore plus de flux de radio ou de chansons ou
morceaux à votre liste de lecture, vous devez mettre les derniers codes
déjà énumérés ci-dessus.  
  
Quand vous avez fini votre playlist, n'oubliez pas de mettre à la fin le
code qui indique la fin des pistes ou morceaux ou des flux radio de la
playlist ; (cette ligne comportera deux tabulations au début).  
`</track>`  
Et voici le code pour indiquer la fin des morceaux ou flux radio de
votre liste ; (cette ligne comportera une tabulation au début).  
`</trackList>`  
Et enfin le dernier code pour indiquer la clôture de votre playlist.  
`</playlist>`  
  
Voici la suite de la playlist contenant les flux radio (y compris leurs
codes respectifs énumérés ci-dessus sans les tabulations respectives):  
`<title>Alpha Boys' School Radio</title>`  
`<album>Alpha Boys' School Radio</album>`  
`<annotation>Reggae - [http://www.alphaboysschoolradio.com]</annotation>`  
`<location>http://96.31.83.86:8072/;stream/1</location>`  
`</track>`  
`<track>`  
`<title>Bob's Ska Radio</title>`  
`<album>Bob's Ska Radio</album>`  
`<annotation>Ska</annotation>`  
`<location>http://51.255.235.165:5528/stream</location>`  
`</track>`  
`<track>`  
`<title>Azur Blues</title>`  
`<album>Azur Blues</album>`  
`<annotation>Blues</annotation>`  
`<location>http://listen.radionomy.com/Azur-BLUES</location>`  
`</track>`  
`<track>`  
`<title>Beur FM</title>`  
`<album>Beur FM</album>`  
`<annotation>Beur FM - Culture, Music of Maghreb</annotation>`  
`<location>http://broadcast.infomaniak.ch/beurfm-high.mp3</location>`  
`<!-- <location>http://ice5.infomaniak.ch:80/beurfm-high.mp3</location> -->`  
`</track>`  
`<track>`  
`<title>BigUpRadio Lovers Reggae</title>`  
`<album>BigUpRadio Lovers Reggae</album>`  
`<annotation>(Reggae) BigUpRadio Lovers</annotation>`  
`<location>http://167.114.38.73:8023</location>`  
`</track>`  
`<track>`  
`<title>Blues Rock Legends</title>`  
`<album>Blues</album>`  
`<annotation>Blues Rock Folk and Soul</annotation>`  
`<location>http://listen.shoutcast.com/bluesrocklegends</location>`  
`</track>`  
`<track>`  
`<title>BigUpRadio Skankin SKA</title>`  
`<album>BigUpRadio Skankin SKA</album>`  
`<annotation>Ska</annotation>`  
`<location>http://167.114.38.75:8017</location>`  
`</track>`  
`<track>`  
`<title>Chante France</title>`  
`<album>Chante France</album>`  
`<annotation>French songs</annotation>`  
`<location>http://stream1.evasionfm.com:80/Chante_France</location>`  
`</track>`  
`<track>`  
`<title>Chérie FM</title>`  
`<album>Chérie FM</album>`  
`<annotation>French songs, Pop, Divers</annotation>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=listenlive</location>`  
`</track>`  
`<track>`  
`<title>Clube Brasil Integrale</title>`  
`<album>Clube Brasil Integrale</album>`  
`<annotation>Latin, Samba, BossaNova [http://www.clubebrasil.fr]</annotation>`  
`<location>http://srv1.clubebrasil.fr:8040</location>`  
`</track>`  
`<track>`  
`<title>Dub Force Radio</title>`  
`<album>Dub Force Radio</album>`  
`<annotation>Reggae[Dub Force Radio: King Lion Sound System]</annotation>`  
`<location>http://164.132.183.216:9001</location>`  
`</track>`  
`<track>`  
`<title>FG-DJ-RADIO (Electro)</title>`  
`<album>FG-DJ-RADIO (Electro)</album>`  
`<annotation>Electro, House, [http://www.radiofg.com]</annotation>`  
`<location>http://radiofg.impek.com:80/fg</location>`  
`!-- <location>http://radiofg.impek.com:80/fg64.aac</location> -->`  
`</track>`  
`<track>`  
`<title>FG-Club</title>`  
`<album>FG-Club</album>`  
`<annotation>Electro, House, FG-Club</annotation>`  
`<location>http://radiofg.impek.com:80/fg6</location>`  
`!-- <location>http://radiofg.impek.com:80/fg664.aac</location> -->`  
`</track>`  
`<track>`  
`<title>FG-Chic</title>`  
`<album>FG-Chic</album>`  
`<annotation>Electro, House, FG-Chic</annotation>`  
`<location>http://radiofg.impek.com:80/fgc</location>`  
`!-- <location>http://radiofg.impek.com:80/fgc64.aac</location> -->`  
`</track>`  
`<track>`  
`<title>FG-Underground</title>`  
`<album>FG-Underground</album>`  
`<annotation>Electro, House, FG-Underground</annotation>`  
`<location>http://radiofg.impek.com:80/ufg</location>`  
`</track>`  
`<track>`  
`<title>Fimi Radio</title>`  
`<album>Fimi Radio</album>`  
`<annotation>Dancehall, Reggae, HipHop, RnB [http://fimiradio.com/]</annotation>`  
`<location>http://198.178.123.17:10578</location>`  
`</track>`  
`<track>`  
`<title>FIP</title>`  
`<album>FIP</album>`  
`<annotation>Divers [http://fip-radio.com]</annotation>`  
`<location>http://direct.fipradio.fr/live/fip-midfi.mp3</location>`  
`</track>`  
`<track>`  
`<title>France Info</title>`  
`<album>France Info</album>`  
`<annotation>(Info) France Info</annotation>`  
`<location>http://direct.franceinfo.fr/live/franceinfo-midfi.mp3</location>`  
`</track>`  
`<track>`  
`<title>France Inter</title>`  
`<album>France Inter</album>`  
`<annotation>(Divers) France Inter</annotation>`  
`<location>http://direct.franceinter.fr/live/franceinter-midfi.mp3</location>`  
`</track>`  
`<track>`  
`<title>France Culture</title>`  
`<album>France Culture</album>`  
`<annotation>(Divers) France Culture</annotation>`  
`<location>http://direct.franceculture.fr/live/franceculture-midfi.mp3</location>`  
`</track>`  
`<track>`  
`<title>France Musique</title>`  
`<album>France Musique</album>`  
`<annotation>(Classique) France Musique</annotation>`  
`<location>http://direct.francemusique.fr/live/francemusique-midfi.mp3</location>`  
`</track>`  
`<track>`  
`<title>Fun Radio</title>`  
`<album>Fun Radio</album>`  
`<annotation>Pop [http://www.funradio.fr]</annotation>`  
`<location>http://streaming.radio.funradio.fr:80/fun-1-44-128</location>`  
`</track>`  
`<track>`  
`<title>Frequence 3</title>`  
`<album>Frequence 3</album>`  
`<annotation>Pop</annotation>`  
`<location>http://stream-hautdebit.frequence3.net:8000/</location>`  
`</track>`  
`<track>`  
`<title>Hard Salsa Bogota</title>`  
`<album>Hard Salsa Bogota</album>`  
`<annotation>Salsa [Latin]</annotation>`  
`<location>http://192.99.8.192:2126</location>`  
`</track>`  
`<track>`  
`<title>HBR1 - Tronic Lounge</title>`  
`<album>HBR1 - Tronic Lounge</album>`  
`<annotation>House [http://ubuntu.hbr1.com]</annotation>`  
`<location>http://ubuntu.hbr1.com:19800/tronic.ogg</location>`  
`</track>`  
`<track>`  
`<title>Hot Mix Radio Dance</title>`  
`<album>Hot Mix Radio Dance</album>`  
`<annotation>Dance</annotation>`  
`<location>http://streaming.hotmixradio.fm/hotmixradio-dance-128.mp3</location>`  
`</track>`  
`<track>`  
`<title>Indie Pop Rocks</title>`  
`<album>Indie Pop Rocks</album>`  
`<annotation>Electro, Indie</annotation>`  
`<location>http://ice.somafm.com/indiepop</location>`  
`</track>`  
`<track>`  
`<title>Jamendo Lounge</title>`  
`<album>Jamendo Lounge</album>`  
`<annotation>Lounge</annotation>`  
`<location>http://listen.radionomy.com/jazz-bar-blues</location>`  
`</track>`  
`<track>`  
`<title>Jazz Classic</title>`  
`<album>Jazz Classic</album>`  
`<annotation>Jazz Classic</annotation>`  
`<location>http://jazz-wr01.ice.infomaniak.ch/jazz-wr01-128.mp3</location>`  
`</track>`  
`<track>`  
`<title>Jazz New-Orleans</title>`  
`<album>Jazz New-Orleans</album>`  
`<annotation>Jazz New-Orleans [http://www.jazzradio.fr/radio/webradio]</annotation>`  
`<location>http://jazz-wr03.ice.infomaniak.ch/jazz-wr03-128.mp3</location>`  
`</track>`  
`<track>`  
`<title>Libre@Toi (vdl.stream)</title>`  
`<album>Libre@Toi (vdl.stream)</album>`  
`<annotation>Bien Commun, logiciels libres [VoixDuLaT]</annotation>`  
`<location>http://vdl.stream-lat.org:8000/voixdulat_ogg</location>`  
`</track>`  
`<track>`  
`<title>Libre@Toi (IP fixe))</title>`  
`<album>Libre@Toi (IP fixe)</album>`  
`<annotation>Bien Commun, logiciels libres [VoixDuLaT]</annotation>`  
`<location>http://212.129.27.101:8000/voixdulat_ogg</location>`  
`</track>`  
`<track>`  
`<title>La Grosse Radio</title>`  
`<album>La Grosse Radio</album>`  
`<annotation>(Reggae) La Grosse Radio</annotation>`  
`<location>http://hd.lagrosseradio.info:8300/</location>`  
`</track>`  
`<track>`  
`<title>Le Mouv'</title>`  
`<album>Le Mouv'</album>`  
`<annotation>(Rock) Le Mouv'</annotation>`  
`<location>http://direct.mouv.fr/live/mouv-midfi.mp3</location>`  
`</track>`  
`!-- En pause actuellement, ils travaillent sur de nouveaux projets, wait & see... -->`  
`<track>`  
`<title>Ministry of Sound</title>`  
`<album>Ministry of Sound</album>`  
`<annotation>Electro, Transe, House... [http://www.ministryofsound.com]</annotation>`  
`<location>http://icy-e-01.sharp-stream.com:80/mos.aac</location>`  
`</track>`  
`<track>`  
`<title>Mira Costa Radio</title>`  
`<album>Mira Costa Radio</album>`  
`<annotation>R&B [Radionomy Radio MPB]</annotation>`  
`<location>http://streaming.radionomy.com/RadioMPB</location>`  
`</track>`  
`<track>`  
`<title>Music Box</title>`  
`<album>Music Box</album>`  
`<annotation>Rock, Country [www.musicboxtv.com]</annotation>`  
`<location>http://www.musicboxtv.com:8000/live</location>`  
`</track>`  
`<track>`  
`<title>MTH.House</title>`  
`<album>MTH.House</album>`  
`<annotation>Electro, House</annotation>`  
`<location>http://stream.mth-house.de:8500</location>`  
`</track>`  
`<track>`  
`<title>Nostalgie</title>`  
`<album>Nostalgie</album>`  
`<annotation>French songs, Divers [http://www.nostalgie.fr]</annotation>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=listenlive</location>`  
`</track>`  
`<track>`  
`<title>Nova</title>`  
`<album>Nova</album>`  
`<annotation>Black Music, World [http://www.novaplanet.com]</annotation>`  
`<location>http://broadcast.infomaniak.net:80/radionova-high.mp3</location>`  
`</track>`  
`<track>`  
`<title>Passion Radio UK (Reggae)</title>`  
`<album>Passion Radio UK</album>`  
`<annotation>(Reggae) Passion Radio UK</annotation>`  
`<location>http://149.202.90.221:9160/stream</location>`  
`</track>`  
`<track>`  
`<title>Paul In Rio Radio</title>`  
`<album>Paul In Rio Radio</album>`  
`<annotation>Brasil, MPB, Samba, Soul, Latin Jazz, Bossa Nova</annotation>`  
`<location>http://99.198.112.59:80</location>`  
`</track>`  
`<track>`  
`<title>Public Domain Jazz</title>`  
`<album>Public Domain Jazz</album>`  
`<annotation>Pop [www.swissradio.ch/menu/discography/jazz/jazz/]</annotation>`  
`<location>http://82.197.167.138:80</location>`  
`</track>`  
`<track>`  
`<title>Radio Africa No.1</title>`  
`<album>Africa No.1</album>`  
`<annotation>Africa No.1</annotation>`  
`<location>http://african1paris.ice.infomaniak.ch:80/african1paris-128</location>`  
`!-- <location>http://ice19.infomaniak.ch:80/african1paris-128.mp3</location> -->`  
`</track>`  
`<track>`  
`<title>Radio Caprice (Acoustic Blues)</title>`  
`<album>Radio Caprice (Acoustic Blues)</album>`  
`<annotation>Blues</annotation>`  
`<location>http://79.111.14.76:9071</location>`  
`</track>`  
`<track>`  
`<title>Radio Caprice (Lounge)</title>`  
`<album>Radio Caprice (Lounge)</album>`  
`<annotation>Lounge</annotation>`  
`<location>http://79.111.14.76:9059</location>`  
`</track>`  
`<track>`  
`<title>Radio Classsique (Paris)</title>`  
`<album>Radio Classsique (Paris)</album>`  
`<annotation>Classique</annotation>`  
`<location>http://broadcast.infomaniak.net:80/radioclassique-high.mp3</location>`  
`</track>`  
`<track>`  
`<title>Radio Free Arts</title>`  
`<album>Radio Free Arts</album>`  
`<annotation>Classique</annotation>`  
`<location>http://50.7.71.219:7171/stream</location>`  
`</track>`  
`<track>`  
`<title>Radio Ici et Maintenant</title>`  
`<album>Radio Ici et Maintenant</album>`  
`<annotation>Information, Divers</annotation>`  
`<location>http://radio.rim952.fr:8000/stream.mp3</location>`  
`</track>`  
`<track>`  
`<title>Radio Latina</title>`  
`<album>Radio Latina</album>`  
`<annotation>Latin [http://www.latina.fr]</annotation>`  
`<location>http://broadcast.infomaniak.ch/start-latina-high.mp3</location>`  
`</track>`  
`<track>`  
`<title>Radio Libertaire</title>`  
`<album>Radio Libertaire</album>`  
`<annotation>Divers [http://rl.federation-anarchiste.org]</annotation>`  
`<location>http://ecoutez.radio-libertaire.org:8080/radiolib</location>`  
`</track>`  
`<track>`  
`<title>Radio Meuh (aac)</title>`  
`<album>Radio Meuh (aac)</album>`  
`<annotation>Urbain, RnB [http://radiomeuh.com]</annotation>`  
`<location>http://ice19.infomaniak.ch:80/radiomeuh-64.aac</location>`  
`</track>`  
`<track>`  
`<title>Radio Meuh (mp3)</title>`  
`<album>Radio Meuh (mp3)</album>`  
`<annotation>Urbain, RnB [http://radiomeuh.com]</annotation>`  
`<location>http://broadcast-adswizz.infomaniak.net:8000/radiomeuh-128.mp3</location>`  
`</track>`  
`<track>`  
`<title>Radio Mozart</title>`  
`<album>Radio Mozart</album>`  
`<annotation>Classique [http://www.radionomy.com/radio-mozart]</annotation>`  
`<location>http://listen.radionomy.com/radio-mozart</location>`  
`</track>`  
`<track>`  
`<title>Raggakings</title>`  
`<album>Raggakings</album>`  
`<annotation>Reggae, Dance Hall [http://www.raggakings.net]</annotation>`  
`<location>http://64.202.98.51:7970</location>`  
`</track>`  
`<track>`  
`<title>RFI Monde</title>`  
`<album>RFI Monde</album>`  
`<annotation>Information, Divers [RFI monde 64]</annotation>`  
`<location>http://live02.rfi.fr/rfimonde-96k.mp3</location>`  
`</track>`  
`<track>`  
`<title>RFM</title>`  
`<album>RFM</album>`  
`<annotation>Pop, Rock, Divers</annotation>`  
`<location>http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3</location>`  
`</track>`  
`<track>`  
`<title>Rhythm & Grooves</title>`  
`<album>Rhythm & Grooves</album>`  
`<annotation>R&B</annotation>`  
`<location>http://50.62.164.158:8000</location>`  
`</track>`  
`<track>`  
`<title>Rires et Chansons</title>`  
`<album>Rires et Chansons</album>`  
`<annotation>Humour, Pop, Rock [http://www.rireetchansons.fr]</annotation>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=listenlive</location>`  
`</track>`  
`<track>`  
`<title>Roots Legacy Radio</title>`  
`<album>Roots Legacy Radio</album>`  
`<annotation>Reggae - [http://www.rootslegacy.fr/]</annotation>`  
`<location>http://rootslegacy.fr:8080/;listen.mp3</location>`  
`</track>`  
`<track>`  
`<title>RTL</title>`  
`<album>RTL</album>`  
`<annotation>Pop [http://www.rtl.fr]</annotation>`  
`<location>http://streaming.radio.funradio.fr:80/rtl-1-44-96</location>`  
`</track>`  
`<track>`  
`<title>RTL 2</title>`  
`<album>RTL 2</album>`  
`<annotation>Pop [http://www.rtl2.fr]</annotation>`  
`<location>http://streaming.radio.funradio.fr/rtl2-1-44-96</location>`  
`</track>`  
`<track>`  
`<title>Start FM</title>`  
`<album>Start FM</album>`  
`<annotation>Underground [94.2MHz, Vilnius University, Lithuania]</annotation>`  
`<location>http://eteris.startfm.lt/startfm.ogg</location>`  
`</track>`  
`<track>`  
`<title>The Lounge Channel</title>`  
`<album>The Lounge Channel</album>`  
`<annotation>Lounge</annotation>`  
`<location>http://listen.radionomy.com/The-Lounge-Channel</location>`  
`</track>`  
`<track>`  
`<title>The Sound Of The Carebbian</title>`  
`<album>The Sound Of The Carebbian</album>`  
`<annotation>Reggae[http://www.thesoundofthecarebbian.com]</annotation>`  
`<location>http://50.7.70.66:9037</location>`  
`</track>`  
`<track>`  
`<title>Top Music</title>`  
`<album>Top Music</album>`  
`<annotation>Pop, Rock [http://www.topmusic.fr]</annotation>`  
`<location>http://str0.creacast.com/topmusic1</location>`  
`</track>`  
`<track>`  
`<title>Tropicalisima</title>`  
`<album>Tropicalisima</album>`  
`<annotation>Salsa</annotation>`  
`<location>http://50.7.56.2:8020</location>`  
`</track>`  
`<track>`  
`<title>TSF Jazz</title>`  
`<album>TSF Jazz</album>`  
`<annotation>Jazz - [http://www.tsfjazz.com/]</annotation>`  
`<location>http://tsfjazz.ice.infomaniak.ch:80/tsfjazz-high.mp3</location>`  
`</track>`  
`<track>`  
`<title>Virgin Radio</title>`  
`<album>Virgin Radio</album>`  
`<annotation>Top 40, Pop, Rock</annotation>`  
`<location>http://mp3lg4.tdf-cdn.com/9243/lag_164753.mp3</location>`  
`</track>`  
`<track>`  
`<title>Voice FM</title>`  
`<album>Voice FM</album>`  
`<annotation>Top 40</annotation>`  
`<location>http://46.101.7.52:8000</location>`  
`</track>`  
`<track>`  
`<title>WALLY Radio</title>`  
`<album>WALLY Radio</album>`  
`<annotation>Lounge</annotation>`  
`<location>http://37.59.42.207:8349/stream2</location>`  
`</track>`  
`</trackList>`  
`</playlist>`  
  
`--------- fin du fichier ---------`

Contenu de la playlist de Radios Françaises
===========================================

Playlist qui regroupe de nombreuse radios françaises.  

Vous pouvez la télécharger en utilisant le lien indiqué ci-dessus).  
`---------- Début du fichier ----------`  
`<?xml version="1.0" encoding="UTF-8"?>`  
`<playlist xmlns="http://xspf.org/ns/0/" xmlns:vlc="http://www.videolan.org/vlc/playlist/ns/0/" version="1">`  

`<title>Liste de lecture</title>`  
`<trackList>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location`>  
`<title>* * * * * Radios Française * * * * *</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>0</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Nationales -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>1</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://chai5she.cdn.dvmr.fr/bfmbusiness</location>`  
`<title>BFM Business</title>`  
`<album>BFM Business</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>2</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=fluxradios</location>`  
`<title>Cherie FM</title>`  
`<album>Cherie FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>3</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://e1-live-mp3-128.scdn.arkena.com/europe1.mp3</location>`  
`<title>Europe 1</title>`  
`<album>Europe 1</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>4</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.fipradio.fr/live/fip-midfi.mp3</location>`  
`<title>Fip</title>`  
`<album>Fip</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>5</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://streaming.radio.funradio.fr/fun-1-44-128</location>`  
`<title>Fun Radio France</title>`  
`<album>Fun Radio France</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>6</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.francebleu.fr/live/fb1071-midfi.mp3</location>`  
`<title>France Bleu 107.1</title>`  
`<album>France Bleu 107.1</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>7</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.franceculture.fr/live/franceculture-midfi.mp3</location>`  
`<title>France Culture</title>`  
`<album>France Culture</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>8</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.franceinfo.fr/live/franceinfo-midfi.mp3</location>`  
`<title>France Info</title>`  
`<album>France Info</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>9</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.franceinter.fr/live/franceinter-midfi.mp3</location>`  
`<title>France Inter</title>`  
`<album>France Inter</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>10</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.francemusique.fr/live/francemusique-midfi.mp3</location>`  
`<title>France Musique</title>`  
`<album>France Musique</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>11</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3</location>`  
`<title>Jazz Radio</title>`  
`<album>Jazz Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>12</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-latina.ice.infomaniak.ch/start-latina-high.mp3</location>`  
`<title>Latina</title>`  
`<album>Latina</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>13</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://mfm.ice.infomaniak.ch/mfm-128.mp3</location>`  
`<title>M Radio</title>`  
`<album>M Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>14</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.mouv.fr/live/mouv-midfi.mp3</location>`  
`<title>Mouv</title>`  
`<album>Mouv</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>15</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=fluxradios</location>`  
`<title>Nostalgie France</title>`  
`<album>Nostalgie France</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>16</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://novazz.ice.infomaniak.ch/novazz-128.mp3</location>`  
`<title>Nova</title>`  
`<album>Nova</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>17</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=fluxradios</location>`  
`<title>NRJ France</title>`  
`<album>NRJ France</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>18</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3?origine=fluxradios</location>`  
`<title>NRJ France Ultra HD</title>`  
`<album>NRJ France Ultra HD</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>19</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://ouifm.ice.infomaniak.ch/ouifm-high.mp3</location>`  
`<title>Oüi FM</title>`  
`<album>Oui FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>20</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/pharefm</location>`  
`<title>Phare FM</title>`  
`<album>Phare FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>21</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3</location>`  
`<title>Radio Classique</title>`  
`<album>Radio Classique</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>22</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiofg.impek.com/fg</location>`  
`<title>Radio FG</title>`  
`<album>Radio FG</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>23</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://rcf.streamakaci.com/rcf.mp3</location>`  
`<title>RCF</title>`  
`<album>RCF</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>24</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://live02.rfi.fr/rfimonde-96k.mp3</location>`  
`<title>RFI Monde</title>`  
`<album>RFI Monde</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>25</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3</location>`  
`<title>RFM</title>`  
`<album>RFM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>26</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=fluxradios</location>`  
`<title>Rire & Chansons</title>`  
`<album>Rire et Chansons</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>27</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://chai5she.cdn.dvmr.fr/rmcinfo</location>`  
`<title>RMC</title>`  
`<album>RMC</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>28</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://streaming.radio.rtl.fr/rtl-1-44-128</location>`  
`<title>RTL</title>`  
`<album>RTL</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>29</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://icecast.rtl.fr:80/rtl2-1-44-128</location>`  
`<title>RTL2</title>`  
`<album>RTL2</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>30</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://icecast.skyrock.net/s/natio_mp3_128k</location>`  
`<title>Skyrock</title>`  
`<album>Skyrock</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>31</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-sud.ice.infomaniak.ch/start-sud-high.mp3</location>`  
`<title>Sud Radio</title>`  
`<album>Sud Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>32</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3</location>`  
`<title>TSF Jazz</title>`  
`<album>TSF Jazz</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>33</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3</location>`  
`<title>Virgin Radio</title>`  
`<album>Virgin Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>34</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : ABC -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>100</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3</location>`  
`<title>Ado FM</title>`  
`<album>Ado FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>101</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://african1paris.ice.infomaniak.ch/african1paris-128.mp3</location>`  
`<title>Africa N°1</title>`  
`<album>Africa N°1</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>102</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://alouette.ice.infomaniak.ch/alouette-high.mp3</location>`  
`<title>Alouette</title>`  
`<album>Alouette</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>103</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://alpes1grenoble.ice.infomaniak.ch/alpes1grenoble-high.mp3</location>`  
`<title>Alpes 1 Grand Grenoble</title>`  
`<album>Alpes 1 Grand Grenoble</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>104</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://alpes1gap.ice.infomaniak.ch/alpes1gap-high.mp3</location>`  
`<title>Alpes 1 Alpes du Sud</title>`  
`<album>Alpes 1 alpes du Sud</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>105</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://altafrequenza.streamakaci.com/altafrequenza.mp3</location>`  
`<title>Alta Frequenza</title>`  
`<album>Alta Frequenza</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>106</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://broadcast.infomaniak.ch/beurfm-high.mp3</location>`  
`<title>Beur FM</title>`  
`<album>Beur FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>107</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-blackbox.ice.infomaniak.ch/start-blackbox-high.mp3</location>`  
`<title>Blackbox</title>`  
`<album>Blackbox</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>108</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://champagnefmaisne.ice.infomaniak.ch/champagnefm-64-aisne.mp3</location>`  
`<title>Champagne FM Aisne</title>`  
`<album>Champagne FM Aisne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>109</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://champagnefm.ice.infomaniak.ch/champagnefm-128-ardennes.mp3</location>`  
`<title>Champagne FM Ardennes</title>`  
`<album>Champagne FM Ardennes</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>110</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://champagnefm.ice.infomaniak.ch/champagnefm-128-aube.mp3</location>`  
`<title>Champagne FM Aube</title>`  
`<album>Champagne FM Aube</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>111</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://champagnefm.ice.infomaniak.ch/champagnefm-128-marne.mp3</location>`  
`<title>Champagne FM Marne</title>`  
`<album>Champagne FM Marne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>112</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.chantefrance.com/Chante_France</location>`  
`<title>Chante France</title>`  
`<album>Chante France</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>113</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radio-contact.ice.infomaniak.ch/radio-contact-high</location>`  
`<title>Contact FM</title>`  
`<album>Contact FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>114</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : DEF -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>200</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiodreyeckland.ice.infomaniak.ch/radiodreyeckland-128.mp3</location>`  
`<title>Dreyeckland</title>`  
`<album>Dreyeckland</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>201</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Paris</location>`  
`<title>Evasion Paris</title>`  
`<album>Evasion Paris</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>202</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Essonne</location>`  
`<title>Evasion Essonne</title>`  
`<album>Evasion Essonne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>203</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Nord77</location>`  
`<title>Evasion Nord 77</title>`  
`<album>Evasion Nord 77</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>204</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Oise</location>`  
`<title>Evasion Oise</title>`  
`<album>Evasion Oise</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>205</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Somme</location>`  
`<title>Evasion Somme</title>`  
`<album>Evasion Somme</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>206</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Sud77</location>`  
`<title>Evasion Sud 77</title>`  
`<album>Evasion Sud 77</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>207</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream1.evasionfm.com/Yvelines</location>`  
`<title>Evasion Yvelines</title>`  
`<album>Evasion Yvelines</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>208</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://fcradio.ice.infomaniak.ch/fcradio-128.mp3</location>`  
`<title>FC Radio L&#39;Essentiel</title>`  
`<album>FC Radio L Essentiel</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>209</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://fm43.ice.infomaniak.ch/fm43-128.mp3</location>`  
`<title>FM 43</title>`  
`<album>FM 43</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>210</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-forum.ice.infomaniak.ch/start-forum-high.mp3</location>`  
`<title>Forum</title>`  
`<album>Forum</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>211</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://freqplus.ice.infomaniak.ch/freqplus-high.mp3</location>`  
`<title>Frequence Plus</title>`  
`<album>Frequence Plus</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>212</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : GHI -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>300</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://generationfm.ice.infomaniak.ch/generationfm-high.mp3</location>`  
`<title>Generations</title>`  
`<album>Generations</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>301</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://broadcast.infomaniak.ch/hitwest-high.mp3</location>`  
`<title>Hit West</title>`  
`<album>Hit West</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>302</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : JKL -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>400</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://live.jordannefm.com:8000/JFMCantalMD.mp3</location>`  
`<title>Jordanne FM</title>`  
`<album>Jordanne FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>401</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://laradioplus.ice.infomaniak.ch/laradioplus-high.mp3</location>`  
`<title>La Radio Plus - Alpes du nord / Suisse</title>`  
`<album>La Radio Plus - Alpes du nord / Suisse</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>402</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lalaradio.ice.infomaniak.ch/lalaradio-high.mp3</location>`  
`<title>La Radio Plus - Alpes du sud</title>`  
`<album>La Radio Plus - Alpes du sud</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>403</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : MNO -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>500</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/magnum</location>`  
`<title>Magnum La Radio</title>`  
`<album>Magnum La Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>501</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://monafm.bcast.infomaniak.ch/monafm-high.mp3</location>`  
`<title>Mona FM</title>`  
`<album>Mona FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>503</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://montagnefm.ice.infomaniak.ch/montagnefm-96.mp3</location>`  
`<title>Montagne FM</title>`  
`<album>Montagne FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>504</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://nradio.ice.infomaniak.ch/nradio-128.mp3</location>`  
`<title>N&#39;Radio</title>`  
`<album>N Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>505</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://ods.ice.infomaniak.ch/ods-high.mp3</location>`  
`<title>ODS Radio</title>`  
`<album>ODS Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>506</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://ouestfm.ice.infomaniak.ch/ouestfm-high.mp3</location>`  
`<title>Ouest FM</title>`  
`<album>Ouest FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>507</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : PQRS -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>600</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://antenne.pyreneesfm.com/;stream/1</location>`  
`<title>Pyrenees FM</title>`  
`<album>Pyrenees FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>601</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://direct.radiocourtoisie.fr</location>`  
`<title>Radio Courtoisie</title>`  
`<album>Radio Courtoisie</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>603</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiocristal.ice.infomaniak.ch/radiocristal-high.mp3</location>`  
`<title>Radio Cristal</title>`  
`<album>Radio Cristal</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>604</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioespace.ice.infomaniak.ch/radioespace-high.mp3</location>`  
`<title>Radio Espace</title>`  
`<album>Radio Espace</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>605</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream.radio-esperance.net/esperance.mp3</location>`  
`<title>Radio Esperance</title>`  
`<album>Radio Esperance</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>606</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioisagrenoble.ice.infomaniak.ch/radioisagrenoble-128.mp3</location>`  
`<title>Radio Isa Grenoble</title>`  
`<album>Radio Isa Grenoble</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>607</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioisa.ice.infomaniak.ch/radioisa-128.mp3</location>`  
`<title>Radio Isa Nord Isère</title>`  
`<album>Radio Isa Nord Isere</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>608</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/metropolys</location>`  
`<title>Radio Métropolys</title>`  
`<album>Radio Metropolys</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>609</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiono1.ice.infomaniak.ch/radiono1-128.mp3</location>`  
`<title>Radio Numéro 1</title>`  
`<album>Radio Numero 1</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>610</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioscoop-bourg.ice.infomaniak.ch:80/radioscoop-bourg-128</location>`  
`<title>Radio Scoop Bourg-en-Bresse</title>`  
`<album>Radio Scoop Bourg-en-Bresse</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>617</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioscoop-clermont.ice.infomaniak.ch:80/radioscoop-clermont-128</location>`  
`<title>Radio Scoop Clermont-Ferrand</title>`  
`<album>Radio Scoop Clermont-Ferrand</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>618</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioscoop-lyon.ice.infomaniak.ch:80/radioscoop-lyon-128</location>`  
`<title>Radio Scoop Lyon</title>`  
`<album>Radio Scoop Lyon</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>619</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radioscoop-stetienne.ice.infomaniak.ch:80/radioscoop-stetienne-128</location>`  
`<title>Radio Scoop Saint-Etienne</title>`  
`<album>Radio Scoop Saint-Etienne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>620</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiostar.ice.infomaniak.ch/radiostar-128.mp3</location>`  
`<title>Radio Star (Franche-Comté)</title>`  
`<album>Radio Star (Franche-Comte)</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>621</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>https://listen.radioking.com/radio/9728/stream/20210</location>`  
`<title>Radio Star (PACA)</title>`  
`<album>Radio Star (PACA)</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>622</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radiosun.ice.infomaniak.ch/radiosun-high.mp3</location>`  
`<title>Radio Sun</title>`  
`<album>Radio Sun</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>623</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://stream.rtsfm.com/rts-national.mp3</location>`  
`<title>RTS</title>`  
`<album>RTS</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>624</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://rva.ice.infomaniak.ch/rva-high.mp3</location>`  
`<title>RVA</title>`  
`<album>RVA</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>625</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://sensationsessonne.ice.infomaniak.ch/sensationsessonne-128.mp3</location>`  
`<title>Sensations Essonne</title>`  
`<album>Sensations Essonne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>626</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://sensationsnormandie.ice.infomaniak.ch/sensations-normandie.mp3</location>`  
`<title>Sensations Normandie (Bernay)</title>`  
`<album>Sensations Normandie (Bernay)</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>627</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://sensations.ice.infomaniak.ch/sensations.mp3</location>`  
`<title>Sensations Yvelines</title>`  
`<album>Sensations Yvelines</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>628</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/alc</location>`  
`<title>Sweet FM Alençon</title>`  
`<album>Sweet FM Alencon</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>629</vlc:id>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/cgr</location>`  
`<title>Sweet FM Craon</title>`  
`<album>Sweet FM Craon</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>630</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/aig</location>`  
`<title>Sweet FM L&#39;aigle</title>`  
`<album>Sweet FM L Aigle</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>631</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/lms</location>`  
`<title>Sweet FM Le Mans</title>`  
`<album>Sweet FM Le Mans</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>632</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/mms</location>`  
`<title>Sweet FM Mamers</title>`  
`<album>Sweet FM Mamers</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>633</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://62.210.214.169:8000/perche</location>`  
`<title>Sweet FM Saint-Calais</title>`  
`<album>Sweet FM Saint-Calais</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>634</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radio6-boulognesurmer.ice.infomaniak.ch/radio6-boulognesurmer-128.mp3</location>`  
`<title>Radio 6 Boulogne-sur-Mer</title>`  
`<album>Radio 6 Boulogne-sur-Mer</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>635</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radio6-calais.ice.infomaniak.ch/radio6-calais-128.mp3</location>`  
`<title>Radio 6 Calais</title>`  
`<album>Radio 6 Calais</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>636</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radio6-dunkerque.ice.infomaniak.ch/radio6-dunkerque-128.mp3</location>`  
`<title>Radio 6 Dunkerque</title>`  
`<album>Radio 6 Dunkerque</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>637</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://radio6-montreuilsurmer.ice.infomaniak.ch/radio6-montreuilsurmer-128.mp3</location>`  
`<title>Radio 6 Montreuil-sur-Mer</title>`  
`<album>Radio 6 Montreuil-sur-Mer</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>638</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : TUV -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>700</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://streaming.tendanceouest.com/tomanche.mp3</location>`  
`<title>Tendance Ouest Manche</title>`  
`<album>Tendance Ouest Manche</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>701</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://streaming.tendanceouest.com/toorne.mp3</location>`  
`<title>Tendance Ouest Orne</title>`  
`<album>Tendance Ouest Orne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>702</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic2</location>`  
`<title>Top Music Colmar</title>`  
`<album>Top Music Colmar</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>703</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic3</location>`  
`<title>Top Music Haguenau</title>`  
`<album>Top Music Haguenau</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>704</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic4</location>`  
`<title>Top Music Sarrebourg</title>`  
`<album>Top Music Sarrebourg</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>705</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic5</location>`  
`<title>Top Music Saverne</title>`  
`<album>Top Music Saverne</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>706</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic6</location>`  
`<title>Top Music Selestat</title>`  
`<album>Top Music Selestat</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>707</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://str0.creacast.com/topmusic1</location>`  
`<title>Top Music Strasbourg</title>`  
`<album>Top Music Strasbourg</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>708</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://vibration.ice.infomaniak.ch/vibration-high.mp3</location>`  
`<title>Vibration</title>`  
`<album>Vibration</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>709</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://virageradio.ice.infomaniak.ch/virageradio-high.mp3</location>`  
`<title>Virage Radio</title>`  
`<album>Virage Radio</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>710</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-voltage.ice.infomaniak.ch/start-voltage-high.mp3</location>`  
`<title>Voltage</title>`  
`<album>Voltage</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>711</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : WXYZ -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>800</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://start-witfm.ice.infomaniak.ch/start-witfm-high.mp3</location>`  
`<title>Wit FM</title>`  
`<album>Wit FM</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>801</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://lasonotheque.org/UPLOAD/mp3/0313.mp3</location>`  
`<title>----- Radios Régionales / Locales : 0123 -----</title>`  
`<duration>3866</duration>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>900</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-albi.ice.infomaniak.ch/100radio-albi-128.mp3</location>`  
`<title>100% Albi</title>`  
`<album>100% Albi</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>901</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-auch.ice.infomaniak.ch/100radio-auch-128.mp3</location>`  
`<title>100% Auch</title>`  
`<album>100% Auch</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>902</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-carcassonne.ice.infomaniak.ch/100radio-carcassonne-128.mp3</location>`  
`<title>100% Carcassone</title>`  
`<album>100% Carcassone</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>903</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-castres.ice.infomaniak.ch/100radio-castres-128.mp3</location>`  
`<title>100% Castres</title>`  
`<album>100% Castres</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>904</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-foix.ice.infomaniak.ch/100radio-foix-128.mp3</location>`  
`<title>100% Foix</title>`  
`<album>100% Foix</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>905</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-montauban.ice.infomaniak.ch/100radio-montauban-128.mp3</location>`  
`<title>100% Montauban</title>`  
`<album>100% Montauban</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>906</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-pau.ice.infomaniak.ch/100radio-pau-128.mp3</location>`  
`<title>100% Pau</title>`  
`<album>100% Pau</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>907</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-stgaudens.ice.infomaniak.ch/100radio-stgaudens-128.mp3</location>`  
`<title>100% Saint-Gaudens</title>`  
`<album>100% Saint-Gaudens</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>908</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`<track>`  
`<location>http://100radio-tarbes.ice.infomaniak.ch/100radio-tarbes-128.mp3</location>`  
`<title>100% Tarbes</title>`  
`<album>100% Tarbes</album>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:id>909</vlc:id>`  
`<vlc:option>network-caching=1000</vlc:option>`  
`</extension>`  
`</track>`  
`</trackList>`  
`<extension application="http://www.videolan.org/vlc/playlist/0">`  
`<vlc:item tid="0"/>`  
`<vlc:item tid="1"/>`  
`<vlc:item tid="2"/>`  
`<vlc:item tid="3"/>`  
`<vlc:item tid="4"/>`  
`<vlc:item tid="5"/>`  
`<vlc:item tid="6"/>`  
`<vlc:item tid="7"/>`  
`<vlc:item tid="8"/>`  
`<vlc:item tid="9"/>`  
`<vlc:item tid="10"/>`  
`<vlc:item tid="11"/>`  
`<vlc:item tid="12"/>`  
`<vlc:item tid="13"/>`  
`<vlc:item tid="14"/>`  
`<vlc:item tid="15"/>`  
`<vlc:item tid="16"/>`  
`<vlc:item tid="17"/>`  
`<vlc:item tid="18"/>`  
`<vlc:item tid="19"/>`  
`<vlc:item tid="20"/>`  
`<vlc:item tid="21"/>`  
`<vlc:item tid="22"/>`  
`<vlc:item tid="23"/>`  
`<vlc:item tid="24"/>`  
`<vlc:item tid="25"/>`  
`<vlc:item tid="26"/>`  
`<vlc:item tid="27"/>`  
`<vlc:item tid="28"/>`  
`<vlc:item tid="29"/>`  
`<vlc:item tid="30"/>`  
`<vlc:item tid="31"/>`  
`<vlc:item tid="32"/>`  
`<vlc:item tid="33"/>`  
`<vlc:item tid="34"/>`  
  
`<vlc:item tid="100"/>`  
`<vlc:item tid="101"/>`  
`<vlc:item tid="102"/>`  
`<vlc:item tid="103"/>`  
`<vlc:item tid="104"/>`  
`<vlc:item tid="105"/>`  
`<vlc:item tid="106"/>`  
`<vlc:item tid="107"/>`  
`<vlc:item tid="108"/>`  
`<vlc:item tid="109"/>`  
`<vlc:item tid="110"/>`  
`<vlc:item tid="111"/>`  
`<vlc:item tid="112"/>`  
`<vlc:item tid="113"/>`  
`<vlc:item tid="114"/>`  
  
`<vlc:item tid="200"/>`  
`<vlc:item tid="201"/>`  
`<vlc:item tid="202"/>`  
`<vlc:item tid="203"/>`  
`<vlc:item tid="204"/>`  
`<vlc:item tid="205"/>`  
`<vlc:item tid="206"/>`  
`<vlc:item tid="207"/>`  
`<vlc:item tid="208"/>`  
`<vlc:item tid="209"/>`  
`<vlc:item tid="210"/>`  
`<vlc:item tid="211"/>`  
`<vlc:item tid="212"/>`  
  
`<vlc:item tid="300"/>`  
`<vlc:item tid="301"/>`  
`<vlc:item tid="302"/>`  
  
`<vlc:item tid="400"/>`  
`<vlc:item tid="401"/>`  
`<vlc:item tid="402"/>`  
`<vlc:item tid="403"/>`  
  
`<vlc:item tid="500"/>`  
`<vlc:item tid="501"/>`  
`<vlc:item tid="503"/>`  
`<vlc:item tid="504"/>`  
`<vlc:item tid="505"/>`  
`<vlc:item tid="506"/>`  
`<vlc:item tid="507"/>`  
  
`<vlc:item tid="600"/>`  
`<vlc:item tid="601"/>`  
`<vlc:item tid="603"/>`  
`<vlc:item tid="604"/>`  
`<vlc:item tid="605"/>`  
`<vlc:item tid="606"/>`  
`<vlc:item tid="607"/>`  
`<vlc:item tid="608"/>`  
`<vlc:item tid="609"/>`  
`<vlc:item tid="610"/>`  
`<vlc:item tid="617"/>`  
`<vlc:item tid="618"/>`  
`<vlc:item tid="619"/>`  
`<vlc:item tid="620"/>`  
`<vlc:item tid="621"/>`  
`<vlc:item tid="622"/>`  
`<vlc:item tid="623"/>`  
`<vlc:item tid="624"/>`  
`<vlc:item tid="625"/>`  
`<vlc:item tid="626"/>`  
`<vlc:item tid="627"/>`  
`<vlc:item tid="628"/>`  
`<vlc:item tid="629"/>`  
`<vlc:item tid="630"/>`  
`<vlc:item tid="631"/>`  
`<vlc:item tid="632"/>`  
`<vlc:item tid="633"/>`  
`<vlc:item tid="634"/>`  
`<vlc:item tid="635"/>`  
`<vlc:item tid="636"/>`  
`<vlc:item tid="637"/>`  
`<vlc:item tid="638"/>`  
  
`<vlc:item tid="700"/>`  
`<vlc:item tid="701"/>`  
`<vlc:item tid="702"/>`  
`<vlc:item tid="703"/>`  
`<vlc:item tid="704"/>`  
`<vlc:item tid="705"/>`  
`<vlc:item tid="706"/>`  
`<vlc:item tid="707"/>`  
`<vlc:item tid="708"/>`  
`<vlc:item tid="709"/>`  
`<vlc:item tid="710"/>`  
`<vlc:item tid="711"/>`  
  
`<vlc:item tid="800"/>`  
`<vlc:item tid="801"/>`  
  
`<vlc:item tid="900"/>`  
`<vlc:item tid="901"/>`  
`<vlc:item tid="902"/>`  
`<vlc:item tid="903"/>`  
`<vlc:item tid="904"/>`  
`<vlc:item tid="905"/>`  
`<vlc:item tid="906"/>`  
`<vlc:item tid="907"/>`  
`<vlc:item tid="908"/>`  
`<vlc:item tid="909"/>`  
`</extension>`  
  
`--------- fin du fichier ---------`


Récapitulatif des balises  pour construire une playlist de format XSPF jouable avec VLC media player
==========================================================================================

<table>
<caption>
Balises  pour construire une playlist de format XSPF contenant  des Web Radios
</caption>
<tr>
<th>
Nombre de tabulations
</th>
<th>
Syntaxe
</th>
<th>
Contenu
</th>
<th>
Syntaxe
</th>
<th>
Description
</th>
</tr>
<tr>
<th>
Nombre de tabulations
</th>
<th>
Syntaxe
</th>
<th>
Contenu
</th>
<th>
Syntaxe
</th>
<th>
Description
</th>
</tr>
<tr>
<td>
aucune
</td>
<td>
<code><?xml version="1.0" encoding="UTF-8"?></code>
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
C'est la première balise qui est placée au début du fichier XSPF.
</td>
</tr>
<tr>
<td>
aucune
</td>
<td>
<code><playlist version="1" xmlns="http://xspf.org/ns/0/"></code>
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
C'est la deuxième balise qui est placée après la première ligne.
</td>
</tr>
<td>
1
</td>
<td>
<code><trackList></code>
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
Balise pour indiquer le début de la liste. Notez également que c'est trackList, avec un L majuscule, pas tracklist, avec un l minuscule.
</td>
</tr>
<tr>
<td>
2
</td>
<td>
<code><track></code>
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
Balise pour indiquer le début ou la suite des flux radio.
</td>
</tr>
<tr>
<td>
3
</td>
<td>
<code><title></code>
</td>
<td>
Écrire ici le titre du flux radio
</td>
<td>
<code></title></code>
</td>
<td>
Balises pour indiquer le titre du flux radio.
</td>
</tr>
<tr>
<td>
3
</td>
<td>
<code><album></code>
</td>
<td>
Écrire ici Le titre du flux radio
</td>
<td>
<code></album></code>
</td>
<td>
Balises pour indiquer le titre du flux radio.
</td>
</tr>
<tr>
<td>
3
</td>
<td>
<code><annotation></code>
</td>
<td>
Écrire ici le commentaire du flux radio
</td>
<td>
<code></annotation></code>
</td>
<td>
Balises pour indiquer le comentaire du flux radio.
</td>
</tr>
<tr>
<td>
3
</td>
<td>
<code><location></code>
</td>
<td>
Écrire ici l'URL d'écoute du flux radio
</td>
<td>
<code></location></code>
</td>
<td>
Balises pour indiquer l'URL d'écoute du flux radio.
</td>
</tr>
<tr>
<td>
1
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
<code></trackList></code>
</td>
<td>
Balise pour indiquer la fin de la liste. Notez également que c'est trackList, avec un L majuscule, pas tracklist, avec un l minuscule.
</td>
</tr>
<tr>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
aucune
</td>
<td>
<code></playlist></code>
</td>
<td>
Balise pour indiquer la clôture de votre playlist.
</td>
</tr>
</table>

Et maintenant qu’on a notre fichier XSPF, qu’est ce qu'on va bien pouvoir faire avec lui ?
==========================================================================================

Grâce au fichier XSPF que nous venons de créer, et en utilisant un
lecteur tel que [VLC media player,](https://www.videolan.org/) vous
allez pouvoir lire vos playlists de type XSPF.  
Pour ce faire, cliquez simplement sur le menu contextuel ou sur la
touche Applications, puis recherchez l'élément:  
`Lire avec VLC`  
puis appuyez sur Entrée.  
Le lecteur VLC media player s'ouvrira et lira le premier flux disponible
de la liste de lecture.  


Raccourcis clavier standards de VLC media player simplement pour se déplacer / Afficher ou masquer la liste de lecture
======================================================================================================================

-   N  
Lire l'élément suivant dans la liste de lecture (Next).  
Vous jouez plusieurs musiques ou vidéos au sein d'une même playlist
?  
Appuyez sur la touche N pour jouer le prochain élément.  
-   P  
Lire l'élément précédent dans la liste de lecture (Previous).  
Vous jouez plusieurs musiques ou vidéos au sein d'une même playlist
?  
Appuyez sur la touche P pour jouer l'élément précédent.  
-   Ctrl + L  
Afficher ou masquer la liste de lecture.  


Liens utiles:
=============

[XSPF: XML Shareable Playlist Format: Quick
Start](http://xspf.org/quickstart/)  

[Bruitages & Sons, gratuits et libres de droits -
LaSonotheque.org](http://lasonotheque.org)  

[VLC: Site officiel - Des solutions multimédias libres pour tous les OS
! - VideoLAN](https://www.videolan.org/)  

Playlists de radio grâce à:  
<https://www.leshirondellesdunet.com>  
(Merci à Olivier Pouzadoux).  

[VLC - Playlists via
FluxRadios.com](http://fluxradios.blogspot.com/p/vlc-playlist.html)  
(Merci à Sèb du site FluxRadios.com).

Écoute de liste de lecture de type XSPF dans VLC media player
=============================================================

[On peut utiliser des playlist de type XSPF pour VLC, télécharjable
depuis cette page:](http://fluxradios.blogspot.com/p/vlc-playlist.html)  
(Merci encore à Sèb du site FluxRadios.com).  
  
Voilà, c'est fini ! (whew) Comme dirait l'autre!  
  
Amusez-vous bien! :)  
Sur ce je vous souhaite une Bonne construction de vos playlists sous
format XSPF afin d'écoutez vos flux audio ou vidéo avec VLC media
player!  
  
Bonne écoute! 🎶  
  
Voici le nouvel espace de BlindHelp via GitHub que est aussi le votre!  
<https://blindhelp.github.io>  
@+  
BlindHelp!  

