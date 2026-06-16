---
title: Télécharger la dernière version disponible de l'application pour Windows appelée MediaAccess complètement accessible en consultant ce post
permalink: "/MediaAccess-application-for-Windows-releases-download/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 14 Juin 2026</footer>

Coucou mes amis du blog de BlindHelp!    
Je viens de découvrir qu'il existe une application pour Windows appelée MediaAccess complètement accessible, ci-dessous je colle le lien de téléchargement et sa description en français/anglais faite par l'auteur lui-même.

## Lien pour télécharger l'application pour Windows appelée MediaAccess

Télécharger le programme d'installation (Setup) version 2.32 (celui-ci était le numéro de version lorsque j'ai publié ledit article à propos de cette application)    
<https://github.com/reaperaccessible/MediaAccess/releases/latest/download/MediaAccessInstaller.exe>    
Dans tous les cas, en cliquant sur ce même lien permettra de télécharger la dernière version actuelle de l'application pour Windows appelée MediaAccess.    

## Dépôt sur GitHub

<https://github.com/reaperaccessible/MediaAccess/>    

## Pour nos amis programmeurs

Pour cloner le dépôt depuis  GitHub utilisez la commande git suivante:    
`git clone https://github.com/reaperaccessible/MediaAccess.git`    

Et pour conclure, vous trouverez après ma signature la description de l'application déjà mentionnée faite par l'auteur lui-même.    
Voilà c'est fini, 🔐    
Sur ce, je vous souhaite une bonne utilisation de cette nouvelle application pour Windows appelée MediaAccess complètement accessible :)    
À la prochaine sur un autre post!    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷 👨‍🦯

# MediaAccess

**Lecteur audio et vidéo accessible** — Tempo, pitch, effets, sous-titres, plein écran, YouTube intégré.

**Accessible audio and video player** — Tempo, pitch, effects, subtitles, fullscreen, YouTube integration.

---

## 🇫🇷 Français

MediaAccess est un lecteur multimédia conçu pour être pleinement accessible aux utilisateurs de lecteurs d'écran (NVDA, JAWS, etc.) tout en offrant des fonctionnalités avancées.

### Fonctionnalités
- **Lecture audio** : MP3, FLAC, WAV, OGG, AAC, M4A, WMA, Opus, et bien d'autres (via BASS)
- **Lecture vidéo** : MP4, MKV, AVI, MOV, WebM, FLV et autres (via libmpv)
- **Contrôles audio avancés** : tempo, pitch, vitesse de lecture indépendants
- **Effets DSP** : réverbération, écho, égaliseur 3 bandes, compresseur, élargissement stéréo, suppression vocale, audio spatial 3D
- **YouTube intégré** : recherche, lecture et téléchargement (audio ou vidéo) sans configuration externe
- **Radio internet** : recherche RadioBrowser, iHeartRadio, TuneIn + favoris
- **Podcasts** : abonnements RSS, téléchargement d'épisodes
- **Planificateur** : programmer des lectures à heures fixes
- **Mode plein écran** vidéo avec sous-titres, sélection piste audio, captures d'écran
- **Bilingue** : français / anglais (auto-détection ou choix manuel)
- **Accessibilité complète** : annonces vocales, navigation clavier, raccourcis personnalisables

### Installation
Téléchargez le dernier installateur depuis [Releases](https://github.com/reaperaccessible/MediaAccess/releases/latest) et exécutez-le.

### Site web
https://reaperaccessible.fr

---

## 🇬🇧 English

MediaAccess is a multimedia player designed for full accessibility with screen readers (NVDA, JAWS, etc.) while offering advanced features.

### Features
- **Audio playback**: MP3, FLAC, WAV, OGG, AAC, M4A, WMA, Opus and many more (via BASS)
- **Video playback**: MP4, MKV, AVI, MOV, WebM, FLV and others (via libmpv)
- **Advanced audio controls**: independent tempo, pitch, and playback speed
- **DSP effects**: reverb, echo, 3-band EQ, compressor, stereo widening, vocal removal, 3D spatial audio
- **Integrated YouTube**: search, playback, and download (audio or video) with no external setup
- **Internet radio**: RadioBrowser, iHeartRadio, TuneIn search + favorites
- **Podcasts**: RSS subscriptions, episode downloads
- **Scheduler**: schedule playback at specific times
- **Video fullscreen** with subtitles, audio track selection, screenshots
- **Bilingual**: French / English (auto-detect or manual choice)
- **Full accessibility**: speech announcements, keyboard navigation, customizable shortcuts

### Installation
Download the latest installer from [Releases](https://github.com/reaperaccessible/MediaAccess/releases/latest) and run it.

### Website
https://reaperaccessible.fr

---

## License

MediaAccess is licensed under the **GNU General Public License v3.0**. See [LICENSE](LICENSE) for the full text.

### Third-party libraries
- **BASS** (un4seen.com) — free for non-commercial use
- **libmpv** (mpv.io) — GPL/LGPL
- **Rubber Band Library** — GPL
- **SQLite** — public domain
- **Universal Speech** — MIT
- **yt-dlp** — Unlicense / Public Domain

## Build from source

Run `download-deps.bat` (downloads BASS, libmpv, dependencies) then `build_new.bat` (requires MSVC 2017+).

## Troubleshooting

### YouTube playback fails
1. Open **Help → Test YouTube playback** to verify the YouTube extractor and the video engine are functional.
2. Check the log file at `%LOCALAPPDATA%\MediaAccess\mediaaccess.log` for the exact error.
3. For livestreams and DRM-protected videos, MediaAccess automatically falls back to the video engine (you'll hear "Playing via video engine" — DSP effects do not apply in this mode).

### Lecture YouTube en échec (FR)
1. Ouvrez **Aide → Tester la lecture YouTube** pour vérifier que l'extracteur YouTube et le moteur vidéo fonctionnent.
2. Consultez le fichier journal `%LOCALAPPDATA%\MediaAccess\mediaaccess.log` pour l'erreur exacte.
3. Pour les livestreams et vidéos protégées par DRM, MediaAccess bascule automatiquement sur le moteur vidéo (vous entendrez « Lecture via le moteur vidéo » — les effets DSP ne s'appliquent pas dans ce mode).
