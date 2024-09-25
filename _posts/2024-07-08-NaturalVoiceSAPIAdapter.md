---
title: NaturalVoiceSAPIAdapter, débloquez toutes les voix neuronales et utilisez-les comme SAPI 5 TTS
permalink: "/NaturalVoiceSAPIAdapter/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 8 Juillet 2024</footer>

Coucou mes amis du blog de BlindHelp!    
Comment allez-vous ?    
Soyez très attentif. Aujourd'hui, grâce à une autre contribution de mon ami <span lang="es">Héctor J. Benítez Corredera</span>, nous allons vous apprendre à activer et utiliser toutes les voix neuronales naturelles de Microsoft Azure telles que SAPI5, grâce à un programme appelé : NaturalVoiceSAPIAdapter.    

Vous trouverez ci-dessous toutes les informacions fournies par l'auteur (traduites de l'anglais vers le français à partir du readme.md qui se trouve dans son dépôt GitHub de NaturalVoiceSAPIAdapter par mes soins).

Notez également que les liens pointent vers les pages en anglais du dépôt sur GitHub de NaturalVoiceSAPIAdapter et des page du  wiki en anglais, y compris les liens vers les bibliothèques utilisées.

L'installer du NaturalVoiceSAPIAdapter est en anglais, mais dans la documentation traduite que j'ai utilisée pour faire ce post, j'ai mis une équivalence en français pour une meilleure compréhension.

Pour ma part, je ne l'ai pas utilisé, je vous en informe simplement pour que vous sachiez que cela existe.

Avertissement: 💀    
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de NaturalVoiceSAPIAdapter téléchargé ni des informations ce trouvant sur la documentation dédié et l'utilisation de NaturalVoiceSAPIAdapter téléchargé est à vos risques et périls. ☠    

# NaturalVoiceSAPIAdapter

Un [moteur de synthèse vocale (TTS) SAPI 5][1] qui peut utiliser les [voix naturelles/neurales][2] fournies par [Azure AI Speech Service][3], notamment :

- Voix naturelles installables pour Narrateur sur Windows 11
- Voix naturelles en ligne grâce à la fonctionnalité Lire à haute voix de Microsoft Edge
- Voix naturelles en ligne d'Azure AI Speech Service, si vous disposez d'une clé d'abonnement appropriée

Tout programme prenant en charge les voix SAPI 5 peut utiliser ces voix naturelles via ce moteur TTS.

Voir les [pages wiki][4] pour plus d'informations techniques.

## Introduction

Connectez-vous à [Azure AI Speech Service][3] pour que les programmes tiers puissent également utiliser le [SAPI 5 TTS Engine][1] de Microsoft [Natural Speech][2]. Prend en charge les voix naturelles suivantes :

- Voix naturelle du narrateur dans Windows 11
- Voix naturelle en ligne pour la fonctionnalité Lire à haute voix dans Microsoft Edge
- Voix naturelle en ligne depuis Azure AI Speech Service, à condition de disposer de la clé correspondante

Tout programme prenant en charge la voix SAPI 5 peut utiliser la voix naturelle décrite ci-dessus à l'aide de ce moteur.

Des informations plus techniques peuvent être trouvées sur la [page wiki][4].

## Configuration système requise

Windows XP SP3 ou versions ultérieures de Windows x86 32/64 bits.

**J'utilise Windows 10. Puis-je utiliser les voix naturelles du Narrateur sous Windows 11 ?**

Oui, tant que votre numéro de build Windows 10 est la 17763 ou supérieur (version 1809). Vous pouvez choisir et installer les voix du Narrateur Windows 11 [ici][5].

Le Narrateur de Windows 10 ne prend pas directement en charge les voix naturelles, mais il prend en charge les voix SAPI 5. Vous pouvez donc faire fonctionner les voix du Narrateur de Windows 11 sur Windows 10 via ce moteur.

**Est-ce que ça marche vraiment sous Windows XP ?**

Oui, même si je ne l'ai testé que sur une machine virtuelle.

Sous Windows XP, les voix du Narrateur Windows 11 ne fonctionnent pas, mais les voix Microsoft Edge et Azure en ligne fonctionnent.

**Est-ce que cela fonctionnera sur les futures versions de Windows ?**

Ce moteur utilise des clés de cryptage extraites des fichiers système pour utiliser les voix, il s'agit donc plus d'un hack que d'une solution appropriée.

Pour l'instant, Microsoft n'a pas encore autorisé les applications tierces à utiliser les voix Narrateur/Edge, et cela peut cesser de fonctionner à tout moment, par exemple après une mise à jour du système.

## Configuration système requise

Windows XP SP3 ou supérieur. x86 32/64 bits.

**J'utilise le système Windows 10. Puis-je utiliser la voix naturelle du Narrateur dans le système Windows 11 ?**

Oui, à condition que la version du système soit la 1809 ou version ultérieure. Vous pouvez aller [ici][5] pour télécharger et installer la voix naturelle du Narrateur pour le système Windows 11.

Le système Narrateur de Windows 10 ne prend pas en charge la voix naturelle, mais il prend en charge la voix SAPI 5. Vous pouvez donc utiliser ce moteur pour permettre indirectement au système Narrateur de Windows 10 de prendre également en charge la voix naturelle.

**Est-ce que ça marche vraiment sous Windows XP ?**

Oui, même si je ne l'ai testé que sur une machine virtuelle.

La voix naturelle du narrateur n'est pas disponible sur XP, mais la voix en ligne dans Edge et Azure est toujours disponible.

**Les versions de Windows après peuvent-elles toujours être utilisées ?**

Ce moteur utilise une clé de déchiffrement extraite des fichiers système pour utiliser la voix, ce qui n'est pas un comportement officiellement sanctionné.

Actuellement, Microsoft n'autorise pas les programmes tiers à utiliser Narrator Voice et Edge Voice. Par conséquent, ce moteur peut cesser de fonctionner à tout moment après une mise à jour du système.

##Installation

1. Téléchargez le fichier zip depuis la section [Releases][6].
2. Extrayez les fichiers dans un dossier. Assurez-vous de ne pas déplacer ou renommer les fichiers après l'installation.
3. Exécutez `Installer.exe`.
4. Il vous dira si la version 32 bits et la version 64 bits ont été installées.
    - La version 32 bits fonctionne avec les programmes 32 bits et la version 64 bits fonctionne avec les programmes 64 bits.
    - Sur les systèmes 64 bits, pour que cela fonctionne avec tous les programmes (32 bits et 64 bits), vous devez les installer tous les deux.
    - Sur les systèmes 32 bits, la ligne `64 bits` ne sera pas affichée.
5. Cliquez sur Install/Uninstall ; (Equivalence en français: Installer/Désinstaller). L'autorisation "Exécuter en tant qu’administrateur" est requise.
6. Vous pouvez choisir si vous souhaitez utiliser les voix du Narrateur installées,et les voix en ligne  Microsoft Edge Lire à haute voix (Ceci est l'equivalence en français) ; (message en anglais: installed Narrator voices, et le Microsoft Edge Read Aloud online voices).
    - Les voix du narrateur nécessitent Windows 10, 17763 ou version ultérieure.
    - Par défaut, seules les voix Edge dans vos langues préférées et en anglais (États-Unis) sont incluses, pour éviter d'encombrer la liste de sélection des voix. Choisissez `All support languages` ; (Equivalence en français: `Toutes les langues prises en charge`() si vous souhaitez utiliser toutes les voix Edge.
    - Les voix en ligne nécessitent un accès à Internet et peuvent être plus lentes et moins stables. Si vous souhaitez uniquement utiliser les voix locales du Narrateur, vous pouvez décocher "Include Microsoft Edge online voices" ; (Equivalence en français: "Inclure les voix en ligne Microsoft Edge").

![UI d'installation en anglais](https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/assets/55008943/20e29cd7-9951-4cc2-93e9-a0dd5dd058da)

Ou, vous pouvez utiliser `regsvr32` pour enregistrer les fichiers DLL manuellement.

## Installer

1. Téléchargez le fichier zip depuis la colonne [Releases][6].
2. Extrayez dans un dossier. Une fois l'installation terminée, ne déplacez pas et ne renommez pas ces fichiers.
3. Exécutez `Installer.exe`.
4. L'interface indiquera si les versions 32 bits et 64 bits ont été installées.
    - Version 32 bits pour les programmes 32 bits, version 64 bits pour les programmes 64 bits.
    - Sur les systèmes 64 bits, si vous souhaitez que tous les programmes (y compris les programmes 32 bits et 64 bits) puissent utiliser la voix, les deux versions doivent être installées.
    - Sur les systèmes 32 bits, la ligne "64 bits" ne sera pas affichée.
5. Cliquez sur Install/Uninstall (Equivalence en français: Installer/Désinstaller). L'autorisation "Exécuter en tant qu’administrateur" est requise.
6. Vous pouvez choisir d'utiliser la voix du Narrateur installée et la voix en ligne de la fonction de lecture à haute voix de Microsoft Edge (Vous aurez le messages en anglais).
    - Narrator Voice nécessite Windows 10 17763 ou version ultérieure.
    - Par défaut, les voix Edge incluent uniquement les voix correspondant à votre langue préférée et les voix en anglais (États-Unis) pour éviter d'avoir trop d'éléments dans la liste de voix. Si vous souhaitez utiliser toutes les voix Edge, sélectionnez « Toutes les langues prises en charge » (Vous aurez le message en anglais).
    - La voix en ligne nécessite une connexion Internet et peut être plus lente et plus instable. Si vous devez uniquement utiliser la voix locale du Narrateur, vous pouvez décocher `Inclure la voix en ligne Microsoft Edge` (Vous aurez le message en anglais).

![Interface d'installation chinoise](https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/assets/55008943/fd583321-5f41-4652-ae8b-5623ace7b7ed)

Vous pouvez également utiliser `regsvr32` pour enregistrer manuellement les fichiers DLL.

## Tests

Vous pouvez utiliser `TtsApplication.exe` dans les dossiers `x86` et `x64` pour tester le moteur.

Il s'agit d'une version modifiée de [TtsApplication in Windows-classic-samples][7], qui a ajouté une traduction chinoise et des informations plus détaillées sur les événements phonèmes/visèmes.

Vous pouvez également accéder à Panneau de configuration > Voix (Windows XP) ou Panneau de configuration > Reconnaissance vocale > Synthèse vocale (Windows Vista et versions ultérieures).

## test

Ce moteur peut être testé en utilisant `TtsApplication.exe` dans les dossiers `x86` et `x64`.

Ce programme est modifié à partir de TtsApplication dans [Windows-classic-samples] [7], en ajoutant une traduction chinoise et des informations plus détaillées sur les événements phonèmes/visèmes.

Vous pouvez également accéder à Panneau de configuration > Voix (Windows XP) ou Panneau de configuration > Reconnaissance vocale > Synthèse vocale (Windows Vista et versions ultérieures).

## Bibliothèques utilisées
- Microsoft.CognitiveServices.Speech.Extension.Embedded.TTS
- [websocketpp](https://github.com/zaphoyd/websocketpp)
- ASIO (standalone version)
- OpenSSL
- [nlohmann/json](https://github.com/nlohmann/json)
- [YY-Thunks](https://github.com/Chuyu-Team/YY-Thunks) (for Windows XP compatibility)

[1]: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms717037(v=vs.85)
[2]: https://speech.microsoft.com/portal/voicegallery
[3]: https://learn.microsoft.com/azure/ai-services/speech-service/
[4]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/wiki
[5]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/wiki/Narrator-natural-voice-download-links
[6]: https://github.com/gexgd0419/NaturalVoiceSAPIAdapter/releases
[7]: https://github.com/microsoft/Windows-classic-samples/tree/main/Samples/Win7Samples/winui/speech/ttsapplication

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
