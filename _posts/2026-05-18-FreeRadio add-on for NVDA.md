---
title: Nouvelle extension FreeRadio pour NVDA
permalink: "/nouvelle-extension-freeradio-pour-nvda/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 18 Mai 2026</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente une nouvelle extension pour notre lecteur d'écran NVDA appelée: FreeRadio;.

Les langues disponibles pour cette extension sont l'anglais, le portugais et le turc.

Vous trouverez cette extension à partir de l'Add-on Store.

L'Add-on Store est accessible depuis le sous-menu Outils du menu NVDA. Pour accéder à l'Add-on Store depuis n'importe où, attribuez un geste personnalisé à l'aide de la boîte de dialogue Gestes de commandes.

Pour rechercher cette  extension, utilisez la zone de texte "Rechercher". Vous pouvez y accéder en appuyant sur maj+tab dans la liste des extensions. Tapez un ou deux mots-clés pour le type d'extension que vous recherchez, dans notre cas c'est freeradio puis tabulation pour aller à la liste des extensions. L'extensions sera répertoriée si le texte de recherche peut être trouvé dans l'ID, le nom, l'éditeur l'auteur ou la description de l'extension.

Sélectionnez l'extension freeradio dans l'onglet "Extensions disponibles" ensuite ces actions sont accessibles via un menu qu'on ouvre en appuyant sur la touche applications, entrée, un clic droit ou un double-clic sur l'extension freeradio. Ce menu est également accessible par un bouton Actions dans les détails de l'extension sélectionnée.

Voici les informations en anglais trouvés dans l'Add-on Store à propos de cette extension:

# Description :

FreeRadio is an internet radio add-on for NVDA that provides seamless access to thousands of stations via the Radio Browser open directory. It features a fully accessible station browser with search, country filter, favourites management, and per-station audio profiles. Playback is handled by a prioritised backend chain (BASS, VLC, PotPlayer, Windows Media Player) with support for volume control, audio effects, output device selection, and simultaneous audio mirroring to a second device. Additional features include instant and scheduled recording, sleep and alarm timers, automatic ICY metadata announcements, Shazam-based music recognition, and a liked-songs log. All controls and shortcuts are designed for NVDA accessibility.

# Autres détails :

* Éditeur : Çağrı Doğan <cagrid@hotmail.com>
* Auteur : Çağrı Doğan <cagrid@hotmail.com>
* ID : freeradio
* Version installée : 2026.19.5
* Version minimale de NVDA : 2024.1
* Dernière version NVDA testée : 2026.1
* Canal : Stables
* Page web : <https://github.com/Surveyor123/freeradio>
* Licence : GPL v2
* URL de la Licence : <https://www.gnu.org/licenses/gpl-2.0.html>
* URL de téléchargement : <https://github.com/Surveyor123/freeradio/releases/download/v2026.19.5/freeradio-2026.19.5.nvda-addon>
* URL du code source : <https://github.com/Surveyor123/freeradio>
* URL des avis : <https://github.com/nvaccess/addon-datastore/discussions/8952>
* Date d'installation : 19/05/2026
* Date de publication : 18/05/2026
* Résultats de l’analyse par VirusTotal : 0 analyseur de logiciels malveillants a détecté cette extension comme potentiellement malveillante (sur 66).
* URL de l’analyse par VirusTotal : <https://www.virustotal.com/gui/file/a257978c94148dbd7ccf7e2aac50022368e1b6481f7f546bc1e6f0baf5a5aa43>

Voici ci-dessous la description de l'extension FreeRadio en utilisant le fichier appelé readme.md en anglais traduit uniquement pour cet article de l'anglais vers le français fait par mes soins pour une meilleure compréhension.

# FreeRadio — NVDA Add-on

FreeRadio est une extension de radio Internet pour le lecteur d'écran NVDA. Son objectif principal est de permettre aux utilisateurs d'accéder facilement à des milliers de stations de radio Internet. L'ensemble de l'interface et toutes les fonctionnalités ont été conçues en gardant à l'esprit une accessibilité totale pour NVDA.

## L'Annuaire de Radio Browser

FreeRadio utilise la base de données ouverte  de [Radio Browser](https://www.radio-browser.info/) pour son catalogue de stations. Radio Browser est un annuaire gratuit et géré par la communauté hébergeant plus de 50 000 stations de radio Internet du monde entier. Aucune inscription ni compte n'est requis et son API est ouverte à tous. Chaque station comprend des informations sur l'adresse, le pays, le genre, la langue et le débit binaire ; les stations sont classées par votes des utilisateurs. FreeRadio se connecte à cette API via des serveurs miroir situés en Allemagne, aux Pays-Bas et en Autriche ; si un serveur est inaccessible, il passe automatiquement au suivant.

## Ajouter une station à Radio Browser

Si une station que vous recherchez ne figure pas dans l'annuaire de Radio Browser, vous pouvez la soumettre vous-même à [https://www.radio-browser.info/add](https://www.radio-browser.info/add). Aucun compte ou inscription n’est nécessaire.

👉 À savoir : Cette page est en anglais bien sûr.

Remplissez le formulaire sur cette page :

- **Stream URL** *(required)* — l'URL directe du flux audio, se terminant par `.mp3`, `.aac`, `.ogg` ou similaire. Il ne s'agit pas de l'adresse du site Web de la station ; c'est l'adresse du flux brut que vous colleriez dans un lecteur multimédia. La plupart des stations publient l'URL de leur flux sur leur site Web ou dans leur section "Écouter en direct".
- **Station name** *(required)* — le nom de la station tel qu'il doit apparaître dans l'annuaire.
- **Homepage** — l'adresse du site Internet de la station.
- **Country and language** — sélectionnez le pays et la langue de diffusion dans les listes déroulantes.
- **Tags** — des mots-clés séparés par des virgules, pour  le genre ou topic  par exemple `news`, `jazz`, `classical`. Ceux-ci sont utilisés pour la recherche et le filtrage.
- **Logo URL** — un lien direct vers l'image du logo de la station, si disponible.

Après soumission, la station est revue et ajoutée à l'annuaire public. Une fois accepté, il apparaîtra dans la recherche de FreeRadio et les listes de pays automatiquement, puisque l'annuaire est actualisé à partir de l'API en direct.

## Exigences

- NVDA 2024.1 ou version ultérieure
- Windows 10 ou version ultérieure
- Connexion Internet

## Installation

Téléchargez le fichier `.nvda-addon`, appuyez dessus sur Entrée et redémarrez NVDA lorsque vous y êtes invité.

## Raccourcis clavier

Tous les raccourcis peuvent être réassignés depuis le Menu NVDA → Préférences → Gestes de commandes → FreeRadio. Ces raccourcis fonctionnent de n'importe où, quelle que soit la fenêtre ayant le focus.

| Shortcut | Function | Description |
|---|---|---|
| `Ctrl+Win+R` | Open station browser | Opens the browser window if closed, or brings it to the foreground if already open. |
| `Ctrl+Win+P` | Pause / resume | Pauses the current station if playing; resumes if paused. If nothing is playing, starts the last station or opens the favourites list depending on your setting. Pressing twice in quick succession jumps directly to a tab of your choice. Pressing three times can trigger a separate action depending on your setting. |
| `Ctrl+Win+S` | Stop | Fully stops the current station and resets the player. |
| `Ctrl+Win+→` | Next favourite | Moves to the next station in the favourites list. Wraps around to the beginning at the end of the list. |
| `Ctrl+Win+←` | Previous favourite | Moves to the previous station in the favourites list. Jumps to the end when at the beginning. |
| `Ctrl+Win+↑` | Volume up | Increases volume by 10; maximum 100. |
| `Ctrl+Win+↓` | Volume down | Decreases volume by 10; minimum 0. |
| `Ctrl+Win+V` | Add to favourites | Adds the currently playing station to the favourites list. Announces if the station is already in the list. |
| `Ctrl+Win+I` | Station info | Announces the currently playing station name. Press twice to show details such as country, genre and bitrate in a dialog. Press three times to copy the current track info (ICY metadata) to the clipboard if available; if no metadata is present, starts Shazam music recognition instead. Press four times to force music recognition in case of wrong ICY metadata. |
| `Ctrl+Win+M` | Audio mirror | Mirrors the current stream to an additional audio output device simultaneously. Press again to stop mirroring. |
| `Ctrl+Win+E` | Instant recording | Press once to start recording the current station; press again to stop. Press **twice** to start a **song recording** — the file is named after the current track and the recording stops automatically when the track changes. Press twice again while a song recording is active to stop it early. Playback continues uninterrupted in all recording modes. Only available for stations that broadcast ICY metadata. |
| `Ctrl+Win+W` | Open recordings folder | Opens the folder containing recorded files in File Explorer. |
| *(unassigned)* | Toggle mute notifications | Toggles the Mute Notifications setting on the fly. Assign a key combination via NVDA Menu → Preferences → Input Gestures → FreeRadio. |

Next / previous shortcuts only navigate the favourites list; they do not work with the all stations list. When a list is focused in the browser window, the left and right arrow keys serve the same purpose — see In-Dialog Shortcuts.

## Station Browser

FreeRadio also adds a **FreeRadio** submenu to the NVDA Tools menu. From there you can directly open the Station Browser and FreeRadio Settings.

The window opened with `Ctrl+Win+R` contains five tabs: All Stations, Favourites, Recording, Timer, and Liked Songs. You can navigate between tabs with `Ctrl+Tab`.

When the All Stations tab opens, the top 1,000 most-voted stations are automatically loaded from Radio Browser. Selecting a country from the dropdown updates the list to show that country's stations. Typing in the search field instantly  performs a full search across the entire Radio Browser database simultaneously by name, country and genre.

The **Output Device** dropdown at the bottom of the browser window — outside the tabs — lists all BASS-recognised audio output devices. Selecting a device immediately redirects audio output to it and saves the choice permanently; the same device is used automatically in the next session. If the selected device is not connected, the add-on falls back to the system default automatically. This control is only functional when the BASS backend is active.

The **Volume** (0–200) and **Effects** controls in the same area can be adjusted at any time while the window is open. From the Effects list, Chorus, Compressor, Distortion, Echo, Flanger, Gargle, Reverb, EQ: Bass Boost, EQ: Treble Boost and EQ: Vocal Boost can be enabled simultaneously; changes are applied to the active stream instantly. These controls are fully functional only when the BASS backend is active.

The **Play/Pause** button is also located at the bottom of the window. If no station is playing it starts the selected station; if a station is already playing it pauses playback.

When a station is selected in the list, the **Station Details** button displays information such as country, language, genre, format, bitrate, website and stream URL in a separate dialog. Each field appears in its own read-only text box; you can move between fields with Tab and copy all information to the clipboard at once with the **Copy all to clipboard** button. This button is available in both the All Stations and Favourites tabs.

### In-Dialog Shortcuts

The following keys work only while the Station Browser window is active.

### F Keys

| Shortcut | Function | Description |
|---|---|---|
| `F1` | Help guide | Opens the add-on's help file in the default browser. The guide for the active NVDA language is searched first; if not found, the default guide is opened. |
| `F2` | Now playing | Announces the current station name and ICY metadata track info if available. |
| `F3` | Previous station | Moves to the previous station in the All Stations or Favourites tab and starts playing immediately. Jumps to the end when at the beginning of the list. |
| `F4` | Next station | Moves to the next station in the All Stations or Favourites tab and starts playing immediately. Wraps to the beginning at the end of the list. |
| `F5` | Volume down | Decreases volume by 10 (minimum 0). |
| `F6` | Volume up | Increases volume by 10 (maximum 200). |
| `F7` | Pause / resume | Pauses if a station is playing; resumes if paused and media is loaded. |
| `F8` | Stop | Fully stops the current station and resets the player. |
| `F9` | Rename | Opens rename dialog for focused station in favorits tab. |

### List and Navigation Shortcuts

| Shortcut | Function | Description |
|---|---|---|
| `→` | Next station | When the All Stations or Favourites list is focused, moves to the next station and plays it immediately. Wraps to the beginning at the end of the list. |
| `←` | Previous station | When the All Stations or Favourites list is focused, moves to the previous station and plays it immediately. Jumps to the end when at the beginning. |
| `Enter` | Play | When the All Stations or Favourites list is focused, starts playing the selected station immediately. Switches to the selected station even if another station is already playing. |
| `Space` | Play / Pause | Pauses if a station is playing; otherwise starts playing the selected station. |
| `Ctrl+Tab` | Next tab | Switches to the next tab (All Stations → Favourites → Recording → Timer → Liked Songs). |
| `Ctrl+Shift+Tab` | Previous tab | Switches to the previous tab. |
| `Escape` | Hide | Hides the window; the add-on continues playing in the background. |

### Volume Shortcuts

| Shortcut | Function | Description |
|---|---|---|
| `Ctrl+↑` | Volume up | Increases volume by 10. Only works while the browser window is open. |
| `Ctrl+↓` | Volume down | Decreases volume by 10. Only works while the browser window is open. |

### Alt Key Shortcuts

| Shortcut | Function | Description |
|---|---|---|
| `Alt+R` | Go to search field | Moves focus to the search text box. Searches Radio Browser with the text in the search field; name, country and genre are searched simultaneously. |
| `Alt+V` | Add / remove favourite | Adds the selected station to favourites; removes it if already in the list. |
| `Alt+1` | All Stations | Switches to the All Stations tab. |
| `Alt+2` | Favourites | Switches to the Favourites tab. |
| `Alt+3` | Recording | Switches to the Recording tab. |
| `Alt+4` | Timer | Switches to the Timer tab. |
| `Alt+5` | Liked Songs | Switches to the Liked Songs tab. |
| `Alt+K` | Close | Closes the window; the add-on continues playing in the background. |

## Favourites

The favourites list is a personal station collection stored permanently. To add a station, select it in the list and press the Add to Favourites button or use the `Alt+V` shortcut. The same shortcut removes a station that is already in the list when it is selected.

Favourites can be played with `Ctrl+Win+→` and `Ctrl+Win+←`; these shortcuts work even when the browser window is not open.

To delete a station from the favourites list, select it and press the **Delete Station** button or the `Delete` key. After deletion, focus and selection automatically move to the next station in the list. If the deleted station was the last one, focus moves to the previous station. If the list becomes empty, focus moves to the Play button.

### Reordering Favourites

With a station selected in the Favourites tab, press `comma` to enter move mode — you will hear a beep. Navigate to the target position with the arrow keys, then press `comma` again. The station is placed at the chosen position and the new order is saved immediately. Pressing `comma` again at the same position cancels the move.

### Adding a Custom Station

To add a station that is not in Radio Browser, use the Add Custom Station button. In the dialog that appears, enter the station name and stream URL to add it directly to your favourites. Custom stations can be played and reordered just like any other favourite.

### Station Audio Profile

The Favourites tab includes two buttons for managing per-station audio settings:

**Save Audio Profile for This Station** — saves the current volume level and active effects (chorus, EQ, etc.) as a profile tied to that specific station. Whenever that station starts playing, its saved volume and effects are automatically applied, overriding the global defaults.

**Clear Audio Profile** — removes the saved audio profile from the selected station. After clearing, the station reverts to the global volume and effects settings. This button is only active when the selected station already has a saved profile.

Both buttons are located below the favourites list and are only enabled when a station in the list is selected.

## Music Recognition

Pressing `Ctrl+Win+I` three times triggers Shazam-based music recognition for the currently playing stream. Recognition only starts when no ICY metadata (track info broadcast by the station) is available; if metadata is present, it is copied to the clipboard instead.

Recognition works as follows: a short audio sample is captured from the stream using ffmpeg, the Shazam fingerprinting algorithm is applied, and the result is sent to Shazam's servers. If recognition succeeds, the track title, artist, album and release year are announced by NVDA and automatically copied to the clipboard. If the **Save liked songs to a text file** option is enabled, the recognition result is also appended to `likedSongs.txt`.

**Audio feedback:** Two rising beeps sound when recognition starts, and two falling beeps when it ends. A short beep plays every 2 seconds while the process is running.

**Requirement:** ffmpeg.exe is required. An ffmpeg.exe placed in the add-on folder is used automatically; if it is in a different location, the path can be set in Settings. Download ffmpeg from [ffmpeg.org](https://ffmpeg.org/download.html).

## Audio Mirror

The `Ctrl+Win+M` shortcut mirrors the currently playing stream to a second audio output device simultaneously. This is useful for listening on two different devices at the same time, such as speakers and headphones.

On first press, a selection dialog listing the available output devices appears. Once a device is chosen, mirroring begins and main playback continues uninterrupted. Pressing the shortcut again stops mirroring.

**Use cases:**
- **Speakers + headphones** — Let a guest follow the same broadcast on headphones while you listen through the computer speakers.
- **Recording setup** — Route the main output to speakers and the second output to an external recorder or audio interface for external capture.
- **Multi-room** — Play through a Bluetooth speaker and the built-in speaker simultaneously; no extra software needed to carry audio to another room.
- **Remote monitoring** — In a screen-sharing or remote desktop session, both the local and remote sides can hear the same stream simultaneously.

> **Note:** Audio mirroring is only available when the BASS backend is active. If the volume is changed while mirroring is active, both outputs are updated simultaneously.

## Recording

Recordings are saved to `Documents\FreeRadio Recordings\` by default. The filename includes the station name (or song title, in song recording mode) and the recording start time. The recordings folder can be changed at any time from NVDA Menu → Preferences → Settings → FreeRadio → **Recordings folder**. Because the recording engine connects directly to the stream, the audio is written to disk as received — no processing or re-encoding is applied; recording quality is identical to the broadcast quality.

**Instant recording:** While a station is playing, press `Ctrl+Win+E` once. Press again to stop. Playback continues uninterrupted throughout.

**Song recording:** Press `Ctrl+Win+E` **twice** in quick succession while a station that broadcasts ICY metadata is playing. The recording starts immediately and is named after the current track title. When the track changes, the recording stops automatically and NVDA announces the saved filename. If you want to end the recording early before the track finishes, press `Ctrl+Win+E` twice again. If the current station does not broadcast ICY metadata, song recording is not available and NVDA will inform you.

**Scheduled recording:** Open the Recording tab in the browser. Select a station from your favourites, enter the start time in HH:MM format and the duration in minutes, then choose a recording mode:

- **Record while listening** — plays and records simultaneously. A playback backend is started using the BASS → VLC → PotPlayer → Windows Media Player priority order.
- **Record only** — records silently in the background without any audio output; the recording engine connects directly to the stream.

If the entered time has already passed, the recording is scheduled for the following day. NVDA announces when a recording starts and when it finishes.

## Timer

Open the Timer tab in the station browser (`Alt+4`). Two types of timer can be added:

**Alarm — start radio:** Automatically starts playing a selected station from your favourites at the specified time. Choose a station and enter the time in HH:MM format.

**Sleep — stop radio:** Stops playback at the specified time. When the timer fires, volume is gradually reduced over 60 seconds before playback stops. No station selection is needed; just enter the time.

For both types, if the entered time has already passed the action is scheduled for the following day. Pending timers are listed in the tab; select one and press the Remove Selected Timer button to cancel it.

## Settings

The following options can be configured from NVDA Menu → Preferences → Settings → FreeRadio:

| Option | Description |
|---|---|
| Audio output device (BASS backend) | Sets the audio output device for radio playback. The list includes all BASS-compatible devices on the system plus a "System default" option. Changes are applied immediately on save; if the selected device is disconnected, the add-on automatically falls back to the system default and announces the change. Only active when the BASS backend is in use. |
| Volume | Sets the add-on's starting volume (0–200). Changes made during playback with `Ctrl+Win+↑` / `Ctrl+Win+↓` are also reflected here. |
| Default audio effect | Sets the audio effect applied when NVDA starts or a station begins playing. The selected effect corresponds to the Effects list in the Station Browser. Only active when the BASS backend is in use. |
| Station switch transition (BASS backend) | Controls the transition behaviour when switching between stations. **Instant cut** (default) stops the previous station immediately before the new one starts. **Short crossfade (1 second)** and **Normal crossfade (2 seconds)** start the new station immediately with no gap, then gradually fade out the previous station in the background once the new stream is confirmed active. Has no effect and no performance impact when set to Instant cut. Only available when the BASS backend is in use. |
| Resume last station on NVDA startup | When enabled, the last played station automatically restarts every time NVDA starts. |
| Auto-announce track changes (ICY metadata) | When enabled, NVDA automatically reads the new track name each time it changes on a station that broadcasts ICY metadata. The first track is also announced immediately when switching to a new station. Disabled by default. |
| Mute notifications | When enabled, NVDA does not announce station changes, playback state changes (play, pause, stop), or recording events (started, stopped, finished). Error messages, favourites feedback, music recognition results, and update notifications are not affected. Can also be toggled on the fly via an unassigned input gesture. Disabled by default. |
| Save liked songs to a text file | When enabled, track info copied to the clipboard by pressing `Ctrl+Win+I` three times is also appended to `Documents\FreeRadio Recordings\likedSongs.txt`. If no ICY metadata is available, the Shazam recognition result is saved to the same file. Disabled by default. |
| When Ctrl+Win+P is pressed with no active playback | Determines what happens when this shortcut is pressed and nothing is playing: start the last station or open the favourites list. |
| When Ctrl+Win+P is pressed twice | Selects what happens when the shortcut is pressed twice in quick succession: do nothing, open the favourites list, open the recording tab or open the timer tab. When "do nothing" is selected, the first press responds instantly with no delay. |
| When Ctrl+Win+P is pressed three times | Selects what happens when the shortcut is pressed three times in quick succession: do nothing, open the favourites list, open the search tab, open the recording tab or open the timer tab. |
| Check for updates automatically | When enabled, a background update check runs each time NVDA starts; you are notified if a new version is found. When disabled, automatic checks stop but manual checks remain available. |
| ffmpeg.exe path | Path to the ffmpeg.exe used for music recognition. If left blank, an ffmpeg.exe in the add-on folder is used automatically. |
| VLC path | If VLC is not installed or is in a non-standard location, the full path to the executable can be entered here. |
| wmplayer.exe path | Enter the path to Windows Media Player here if needed. |
| PotPlayer path | If PotPlayer is in a non-standard location, its path can be entered here. |
| Recordings folder | Sets the folder where recorded files are saved. If left blank, the default location `Documents\FreeRadio Recordings\` is used. A Browse button lets you select the folder interactively. Changes take effect immediately after saving. |
| Disable internet connectivity check before playing | Recommended for users who experience a delay before a station starts playing. Also useful when DNS is blocked. |

## Mute Notifications

When **Mute notifications** is enabled in Settings, NVDA silences the following automatic announcements:

- Station name when a new station starts playing
- Playback state changes: play, pause, stop
- Recording events: started, stopped, finished (instant, song and scheduled recordings)
- ICY track change announcements, even when **Auto-announce track changes** is also enabled

The following announcements are intentionally **not** affected: error messages, favourites feedback (added / already in list), music recognition results, and update notifications.

The setting can be toggled from NVDA Menu → Preferences → Settings → FreeRadio, or instantly at any time via an unassigned input gesture (assign one from NVDA Menu → Preferences → Input Gestures → FreeRadio). When toggled, NVDA announces "Notifications muted" or "Notifications unmuted" once to confirm the change.

## Auto-announce Track Changes

When the **Auto-announce track changes** option is enabled in Settings, FreeRadio checks the active station's ICY metadata stream in the background approximately every 5 seconds. When the track changes, the new title is automatically read by NVDA — no keypress required.

When switching to a new station, the first track info is announced as soon as the connection is established. If you switch to a station that does not broadcast ICY metadata, the system stays silent and the previous station's track info is not repeated.

This feature is disabled by default and can be toggled from NVDA Menu → Preferences → Settings → FreeRadio.

## Liked Songs

When the **Save liked songs to a text file** option is enabled, track info copied to the clipboard by pressing `Ctrl+Win+I` three times is also appended line by line to `Documents\FreeRadio Recordings\likedSongs.txt`.

On stations that broadcast ICY metadata, the track title and artist are saved directly. On stations without ICY metadata, the Shazam recognition result is saved to the same file — both sources share the same list. The file is created automatically if it does not exist; each entry is appended to the end of the file and previous entries are never deleted.

## Liked Songs Tab

The **Liked Songs** tab in the station browser displays all tracks saved in `likedSongs.txt`. The list is automatically reloaded from the file each time the tab is opened.

Selecting a track from the list enables the following actions:

- **Play on Spotify:** Tries to open the Spotify desktop app directly. If the app is not installed, falls back to the Spotify website and automatically starts playing the first result.
- **Play on YouTube (`Alt+O`):** Searches YouTube for the selected track and opens the results in the default browser.
- **Remove (`Alt+M`):** Deletes the selected track from `likedSongs.txt` and updates the list. The `Delete` key also triggers this button when the list is focused.
- **Refresh (`Alt+E`):** Reloads the list from the file.

The Spotify, YouTube, and Remove buttons are only enabled when a real track is selected in the list.

## Playback

The add-on selects a playback backend using the following priority order:

1. **BASS** — the default and primary backend. No separate installation is required; it is bundled with the add-on. BASS sends audio directly to the Windows audio stack and appears in the Windows volume mixer as an independent audio source named "pythonw.exe", separate from NVDA. This means FreeRadio audio flows on a completely separate channel from NVDA speech: the radio does not cut out, mix with, or get affected by NVDA's own audio settings while NVDA is speaking. The user can adjust the radio volume independently from NVDA in the Windows Volume Mixer. Supports HTTP, HTTPS and most embedded stream formats. Audio mirroring is only available with this backend.
2. **VLC** — takes over if BASS fails. Searched automatically in common installation locations, user profile folders and the system PATH.
3. **PotPlayer** — tried if VLC is not found. Searched automatically in common installation locations.
4. **Windows Media Player** — used as a last resort; requires the WMP component to be installed on the system.

## Update Check

FreeRadio automatically checks for new versions via GitHub.

**Automatic check:** Runs silently in the background 15 seconds after NVDA starts. If a new version is found, you are notified; if none is found, no message is shown.

**Manual check:** Can be triggered on demand from NVDA Tools → FreeRadio → **Check for Updates…**. When started this way, the result is announced even if the version is up to date.

**When an update is found:** A dialog opens showing the version number and your installed version.

- If a directly downloadable `.nvda-addon` file is available on the GitHub release, a **Download and Install** button is shown. Once confirmed, the file is downloaded in the background, NVDA announces when the download starts, and NVDA's own installation screen opens automatically.
- If no direct download link is available, an **Open Page** button is shown and the GitHub release page opens in the default browser.

**To disable automatic checks:** Turn off the **Check for updates automatically** option from NVDA Menu → Preferences → Settings → FreeRadio.

## License

GPL v2

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

------
