---
title: Able Player - Lecteur multimédia HTML5 entièrement accessible pour les webmestre
permalink: "/AblePlayer/"
layout: post
author: BlindHelp
---

<footer>Publié le Mercredi 31 Mars 2021 - Dernière mise à jour le Jeudi Ier Avril 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici Able Player un lecteur multimédia HTML5 entièrement accessible pour les webmestre.

Je vous rassure cet article dédié à Able Player n'est pas un poissons d’avril. 🐠 même si je l'ai écrit le même jour! 😸

### Infos sur Able Player ###

Quand j'avais écrit le post dédié à [NVDA 2019.2 sur BlindHelp.github.io](https://blindhelp.github.io/Disponible-NVDA-2019.2/) il y avait des informations consultables sur le [post de NV Access In-Process du 15 août (en anglais)](https://www.nvaccess.org/post/in-process-15th-august/) y  compris  un [post toujours en anglais à propos de l'utilisation  de NVDA au Vietnam](https://www.nvaccess.org/post/closing_the_gap_in_vietnam/).

Dans ce temp, ils ont publié cette vidéo intéressante, vous pouvez la lire en utilisant le lecteur multimedia ci-dessous, lequel est entièrement accessible par nous les miro.

Ce lecteur contient une interface simple et intuitive, vous pouvez voir ces fonctionnalités décrites plus bas . 

En ce qui concerne les  réglages dudit lecteur multimédia à utiliser sur votre site Web, je vous demanderai vivement de consulter la page du projet dudit lecteur en anglais ci-dessous.

Quant à la mise en œuvre dudit lecteur sur votre site web je ne suis pas le responsable au dysfonctionnement de celui-ci donc je ne vais pas assister à des demandes. C'est pourquoi je vou demande instamment de bien vouloir consulter les liens respectifs tantôt  du projet de ce lecteur multimédia et l'aide de GitHub pour les personnes qui utilisent  cette plate-forme pour intégrer ledit lecteur comme sous-module dans leur blog sur GitHub (en anglais).

### Fonctionnalités ###

- Prend en charge l'audio et la vidéo.
- Prend en charge une piste audio unique ou une liste de lecture entière.
- Inclut un ensemble complet de contrôles du lecteur accessibles au clavier, correctement étiquetés pour les utilisateurs de lecteurs d'écran et contrôlables par des utilisateurs de reconnaissance vocale.
- Comprend des raccourcis  clavier personnalisables permettant à le lecteur d'être utilisé à partir de n'importe où sur la page Web (sauf s'il y a plusieurs instances du lecteur sur une page donnée; alors le lecteur doit alors avoir le focus sur les raccourcis clavier pour fonctionner).
- Caractéristiques de contraste élevé et modulable qui reste visible en mode contraste élevé par Windows, ainsi qu'un indicateur du focus facile à voir afin que les utilisateurs  de clavier puissent facilement indiquer le contrôle actuellement du focus.
- Prend en charge les légendes et sous-titres fermés dans le format  Web Video Timed Text (WebVTT), le format standard recommandé par la spécification HTML5.
- Prend en charge les chapitres, également en utilisant WebVTT. Les chapitres sont des points de chute spécifiques dans la vidéo, permettant au contenu vidéo d'avoir une structure et d'être plus facilement navigable.
- Prend en charge la description audio basée sur le texte, également à l'aide de la WebVTT. Selon le temps désignée, le texte de la description est lu à haute voix par des navigateurs ou par des lecteurs d'écran pour les navigateurs qui ne prennent pas en charge la Web Speech API. Les utilisateurs peuvent éventuellement définir leur lecteur sur une pause lorsque l'audio Description démarre afin d'éviter les conflits entre la description et le programme audio.
- Prend en charge la description audio comme une vidéo séparée. Lorsque deux vidéos sont disponibles (une avec description et une sans description), les deux peuvent être livrées ensemble à l'aide du même lecteur et des utilisateurs peuvent basculer entre les versions.
- Prend en charge le débit de lecture réglable. Les utilisateurs qui ont besoin de ralentir la vidéo afin de mieux traiter et de comprendre  son contenu peut le faire; et les utilisateurs qui doivent accélérer la vidéo afin de maintenir un meilleur focus peuvent le faire.
- Inclut une fonctionnalité de transcription interactive, construite à partir du chapitre WebVTT, des fichiers de légende et de description de la page Web, lorsque  la page est chargée. Les utilisateurs peuvent cliquer n'importe où dans la transcription pour commencer à lire la vidéo (ou audio) à ce point. Les utilisateurs du clavier peuvent également choisir le clavier-activer la transcription, de sorte qu'ils peuvent partager dans son contenu une légende à la fois et appuyez sur Entrée pour lire le support au point souhaité.
- Caractéristiques de la surbrillance automatique de texte dans la transcription lorsque le support joue. Cette fonctionnalité est activée par défaut mais peut être désactivée si les utilisateurs le trouvent distrayant.
- Prend en charge les vidéos YouTube et Vimeo.
- Fournit aux utilisateurs la possibilité de personnaliser l'affichage des légendes et des sous-titres. Les utilisateurs peuvent contrôler le style de police, la taille et la couleur du texte de la légende; Plus la couleur de fond et la transparence; Tous ces options son dans la boîte de dialogue Préférences. Ils peuvent également choisir de positionner des légendes sous la vidéo au lieu de la position par défaut (une superposition semi-transparente).
- Prend en charge le contenu de reprise si le support ne peut pas être lu (voir la section sur la reprise [(Fallback)](https://ableplayer.github.io/ableplayer/) pour plus de détails).
- Comprend des options de personnalisation étendues. Beaucoup de fonctionnalités décrites ci-dessus sont contrôlées par des préférences de l'utilisateur. Ceci est basé sur la conviction que chaque utilisateur a des besoins différents et qu'il n'y a pas de solution unique. C'est le coeur du design universel.


À savoir que  le projet  de ce lecteur appelé AblePlayer est sur le lien ci-dessous (page en anglais):

[Able Player - Fully accessible cross-browser HTML5 media player on GitHub](https://ableplayer.github.io/ableplayer/)

Note: Sur la page du projet Able Player, vous trouverez toutes les instructions d'utilisation et le moyen de l'intégrer dans un dossier sur votre serveur Web.

Ce lecteur appelé Able Player prend en charge plusieurs langues parmi eux le français.

Ce lecteur appelé Able Player peut être utilisé comme un sous-module sur votre repos GitHub.

Voici le lien ci-dessous afin de  travailler avec des sous-modules depuis votre repos GitHub (page en anglais):

[Working with submodules - The GitHub Blog](https://github.blog/2016-02-01-working-with-submodules/)

Merci beaucoup à mon amie Noelia Ruiz, qui m'a fait connaître et m'a aidé à l'incorporer dans le blog et dans le présent article. ✌


<div id="ableplayer">
<h3>Able Player</h3>
<video id="video1" data-able-player preload="metadata" data-heading-level="0" data-lyrics-mode data-transcript-title="Transcription" data-skin="2020" playsinline data-youtube-id="CpDkMjQNOp0" data-description-audible="false">
<a href"https://www.youtube.com/embed/CpDkMjQNOp0"
</video>
<!-- Dependencies -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="../../ableplayer/thirdparty/js.cookie.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="../../ableplayer/build/ableplayer.min.css" type="text/css"/>

<!-- JavaScript -->
<script src="../../ableplayer/build/ableplayer.min.js"></script>
</div>

Voilà,    
Je vous souhaite une bonne utilisation du lecteur Able Player! :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---