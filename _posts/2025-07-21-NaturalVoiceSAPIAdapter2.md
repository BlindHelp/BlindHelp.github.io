---
title: NaturalVoiceSAPIAdapter, nouvelle méthode pour les voix Microsoft 2025 vient de sortir
permalink: "/NaturalVoiceSAPIAdapter2/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 21 Juillet 2025</footer>

Coucou mes amis du blog de BlindHelp!    
Comment allez-vous ?    
Si vous vous souvenez bien nous traitons sur ce blog [BlindHelp.github.io](https://blindhelp.github.io) il y a plus d'un an un article sur:    
[NaturalVoiceSAPIAdapter, débloquez toutes les voix neuronales et utilisez-les comme SAPI 5 TTS](https://blindhelp.github.io/NaturalVoiceSAPIAdapter)    
Publié le Lundi 8 Juillet 2024    
Soyez très attentif. Aujourd'hui, grâce à une nouvelle contribution de mon ami <span lang="es">Héctor J. Benítez Corredera</span>, nous allons vous apprendre à activer et utiliser toutes les voix neuronales naturelles de Microsoft Azure telles que SAPI5, grâce à un programme appelé : NaturalVoiceSAPIAdapter qui a été mis à jour dans sa nouvelle version.    

Vous trouverez ci-dessous toutes les informacions fournies par l'auteur (traduites de l'anglais vers le français à partir du readme.md qui se trouve dans son dépôt GitHub de NaturalVoiceSAPIAdapter par mes soins).

Notez également que les liens pointent vers les pages en anglais du dépôt sur GitHub de NaturalVoiceSAPIAdapter et des page du  wiki en anglais, y compris les liens vers les bibliothèques utilisées.

L'installer du NaturalVoiceSAPIAdapter est en anglais, mais dans la documentation traduite que j'ai utilisée pour faire ce post, j'ai mis une équivalence en français pour une meilleure compréhension.

Pour ma part, je ne l'ai pas utilisé, je vous en informe simplement pour que vous sachiez que cela existe.

Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de NaturalVoiceSAPIAdapter téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de NaturalVoiceSAPIAdapter téléchargé est à vos risques et périls. ☠    

# NaturalVoiceSAPIAdapter

Un [moteur de synthèse vocale (TTS) SAPI 5][1] qui peut utiliser les [voix naturelles/neurales][2] fournies par [Azure AI Speech Service][3], notamment :

- Voix naturelles pour Narrateur sur Windows 11
- Voix naturelles en ligne grâce à la fonctionnalité Lire à haute voix de Microsoft Edge
- Voix naturelles en ligne d'Azure AI Speech Service, si vous disposez d'une clé d'abonnement appropriée

Tout programme prenant en charge les voix SAPI 5 peut utiliser ces voix naturelles via ce moteur TTS.

Voir les [pages wiki][4] pour plus d'informations techniques.

## Configuration système requise

Plateforme testée minimale: Windows XP SP3 et Windows XP Professional X64 Edition SP2 (32 bits uniquement).

Plate-forme minimale qui prend en charge les voix du Narrateur en locale: Windows 7 RTM, x86 32/64-bit.

Plate-forme minimale qui prend en charge l'installation des voix du Narrateur via Microsoft Store: Windows 10, build 17763.

### Comment puis-je installer des voix naturelles du Narrateur sur Windows 11 ?

Il n'est plus recommandé d'installer des voix naturelles du Narrateur sur Windows 11 si vous souhaitez utiliser ce programme, car la dernière version de ces voix a cessé de fonctionner avec ce programme. Il est recommandé de télécharger et d'utiliser [la dernière version en fonctionnement][5] des voix à la place.

Si le Narrateur cesse de fonctionner lorsque ce programme est installé, essayez de désinstaller tous les packs de voix du Narrateur comme solution de contournement temporaire.

### J'utilise Windows XP / Vista / 7/8/10. Puis-je utiliser les voix naturelles du Narrateur de Windows 11 ?

**Windows XP / Vista**: Malheureusement, les voix du Narrateur en locale ne sont pas prises en charge sur ces plates-formes. Mais les voix en ligne, y compris les voix Edge et Azure, fonctionnent toujours.

**Windows 10 (build 17763 ou supérieur)**: Vous pouvez choisir et installer des voix du Narrateur Windows 11 en utilisant [ces liens][5].

**Windows 7/8/10 (avant la build 17763)**:
1. Téléchargez le fichier  MSIX de la voix à partir [d'hici][5].
2. Préparez un dossier pour stocker les dossiers de voix. Assurez-vous que son chemin ne contient aucun caractère non ASCII.
3. Décompressez le fichier MSIX (comme s'il s'agissait d'un fichier zip) dans son sous-dossier. Vous pouvez avoir plusieurs sous-dossiers de voix dans le même dossier parent. Assurez-vous que le nom du sous-dossier ne contient aucun caractère non ASCII.
4. Définissez le dossier parent comme "Chemin de voix  local" dans le programme d'installation, c'est-à-dire dans l'Installer ou le Setup.
5. Ne mettez pas des choses autres que les sous-dossiers de voix à l'intérieur de ce dossier parent, ou le chargement de la voix peut échouer.

Le Narrateur de Windows 10 ne prend pas directement en charge les voix naturelles, mais il prend en charge les voix SAPI 5. Vous pouvez donc faire fonctionner les voix du Narrateur de Windows 11 sur Windows 10 via ce moteur.

### Est-ce que cela fonctionnera sur les futures versions de Windows ?

Ce moteur utilise des clés de cryptage extraites des fichiers système pour utiliser les voix, il s'agit donc plus d'un hack que d'une solution appropriée.

Pour l'instant, Microsoft n'a pas encore autorisé les applications tierces à utiliser les voix Narrateur/Edge, et cela peut cesser de fonctionner à tout moment, par exemple après une mise à jour du système.

## Installation

1. Téléchargez le fichier zip depuis la section [Releases][6].
2. Extrayez les fichiers dans un dossier. Assurez-vous de ne pas déplacer, renommer ou supprimer les fichiers après l'installation. Si vous souhaitez déplacer / supprimer les fichiers, vous devez d'abord le désinstaller.
3. Exécutez `Installer.exe`.
4. Il vous dira si la version 32 bits et la version 64 bits ont été installées,dans la section "Installation Status".
    - La version 32 bits fonctionne avec les programmes 32 bits et la version 64 bits fonctionne avec les programmes 64 bits.
    - Sur les systèmes 64 bits, pour que cela fonctionne avec tous les programmes (32 bits et 64 bits), vous devez les installer tous les deux.
    - Sur les systèmes 32 bits, la ligne `64 bits` ne sera pas affichée.
5. Cliquez sur Install/Uninstall ; (Equivalence en français: Installer/Désinstaller). L'autorisation "Exécuter en tant qu’administrateur" est requise.
6. Choisissez les types de voix que vous souhaitez utiliser. Par défaut, les voix du Narrateur en locale (si elles sont prises en charge) et les voix en ligne  Microsoft Edge Lire à haute voix (Ceci est l'equivalence en français) ; (message en anglais local Narrator voices et Microsoft Edge Read Aloud online voices) sont activées.
    - Les voix en ligne nécessitent un accès Internet,, Et ils peuvent être plus lents et moins stables. Si vous voulez seulement utiliser les voix du Narrateur en locale, vous pouvez décocher "Enable Microsoft Edge online voices" et "Enable Azure online voices" (Equivalence en français "Activer les voix en ligne Microsoft Edge" et "Activer les voix en ligne Azure".
    - Comme il y a beaucoup de voix en ligne, Par défaut, seuls ceux de vos langues préférées et en anglais (États-Unis) (US) sont incluses, pour éviter d'encombrer la liste de sélection des voix. Cliquez sur "Change..." pour changer les langues incluses.
    - Les voix Azure nécessitent une clé d'abonnement (clé API) et sa région. Cliquez sur "Set Azure key" Pour entrer votre clé. Vous pouvez visiter  la page [Azure Portal](https://portal.azure.com/), pour aller à votre  service de ressource speech, Ensuite à  **Resource Management** > **Keys and Endpoint** to copy & paste the key and the region.
  7. Fermez la fenêtre du programme d'installation, c'est-à-dire l'Installer ou le Setup pour appliquer les modifications. Vous pouvez à nouveau ouvrir le programme d'installation lorsque vous souhaitez modifier quelque chose et que la modification des paramètres ne nécessite pas de réinstallation ou des privilèges administrateur.

![Installer UI en anglais](https://github.com/user-attachments/assets/422264b8-a2ef-4ab7-96e9-4017dd88ca13)


Ou, vous pouvez utiliser `regsvr32` pour enregistrer les fichiers DLL manuellement.


Pour les utilisateurs avancés, voici une [liste des valeurs de registre configurable de ce programme][8]

## Test

Vous pouvez utiliser `TtsApplication.exe` dans les dossiers `x86` et `x64` pour tester le moteur.

Il s'agit d'une version modifiée de [TtsApplication in Windows-classic-samples][7], qui a ajouté une traduction chinoise et des informations plus détaillées sur les événements phonèmes/visèmes.

Vous pouvez également accéder à Panneau de configuration > Voix (Windows XP) ou Panneau de configuration > Reconnaissance vocale > Synthèse vocale (Windows Vista et versions ultérieures).

## Bibliothèques utilisées
- Microsoft.CognitiveServices.Speech.Extension.Embedded.TTS
- [websocketpp](https://github.com/zaphoyd/websocketpp)
- ASIO (standalone version)
- OpenSSL
- [nlohmann/json](https://github.com/nlohmann/json)
- [YY-Thunks](https://github.com/Chuyu-Team/YY-Thunks) (for Windows XP compatibility)
- [spdlog](https://github.com/gabime/spdlog)


[1]: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms717037(v=vs.85)
[2]: https://speech.microsoft.com/portal/voicegallery
[3]: https://learn.microsoft.com/azure/ai-services/speech-service/
[4]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/wiki
[5]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/wiki/Narrator-natural-voice-download-links
[6]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/releases
[7]: https://github.com/microsoft/Windows-classic-samples/tree/main/Samples/Win7Samples/winui/speech/ttsapplication
[8]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/wiki/Configurable-registry-values


---

Mille merci à notre ami <span lang="es">Héctor J. Benítez Corredera</span> pour l'avoir partagé avec nous tous! :)    

Voila, je vous souhaite une bbonne utilisation de NaturalVoiceSAPIAdapter ! :)    
Bien amicalement,    
Rémy (BlindHelp). 🇫🇷    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
