---
title: Firefox 57 et Windows 10 Fall Creators Update
layout: post
author: BlindHelp
---

<footer>Mardi 31 Octobre 2017</footer>

Coucou mes amis du blog de BlindHelp!

Dans l'article du blog de NV Access [In-Process Halloween 2017](https://www.nvaccess.org/post/in-process-halloween-2017-edition/) (en anglais), deux recommandations sur la mise à jour de Firefox et Windows concernant NVDA ont été publiées:

### Firefox 57

Comme expliqué, récemment, il y a eu beaucoup de discussions dans la communauté sur Mozilla, qui mettra bientôt à jour Firefox. Firefox 57, connu sous le nom Firefox Quantum, inclut des modifications pour améliorer la vitesse et la sécurité du navigateur. Malheureusement, cela affecte l'utilisation des lecteurs d'écran.

Pour l'instant, NV Access recommande de passer à la version Extended Support Release (ESR), et d'éviter Firefox 57 jusqu'à ce qu'il soit compatible avec NVDA.

Pour télécharger Firefox ESR:

1. Aller à la [page de Firefox ESR](https://www.mozilla.org/en-US/firefox/organizations/all/).
2. Trouvez votre langue, par exemple Français, en utilisant la première zone d'édition de la page ou le dialogue Rechercher de NVDA (<kbd>NVDA+contrôle+f</kbd>).
3. Activer le lien Download correspondant à votre système d'exploitation.

Installer la version Firefox ESR (ESR = Extended Service Release).

Cette version permet encore l’utilisation de l’eID pour se connecter et signer
(pour les utilisateurs de Windows ou MacOS).

N’utilisez plus de version de Firefox à partir de la v52.0 ou ultérieure, mais passez à la version ESR.
Dans cette version, Firefox continuera de permettre l’utilisation de l’eID. Entretemps, DogID travaille à une modification de l’application de telle sorte qu’elle devienne indépendante des versions des navigateurs.
Si vous avez déjà installé la version v52.0 (ou que Firefox l’a installée automatiquement) et que ce n’est pas la version ESR, veuillez suivre la procédure suivante :

Désinstallez Firefox de votre pc .
Mozilla a une procédure de désinstallation de Firefox, disponible via le lien suivant:
[Désinstaller Firefox de votre ordinateur | Assistance de Firefox](https://support.mozilla.org/fr/kb/desinstaller-firefox-ordinateur)

Vous ne devez uniquement que désinstaller Firefox. Les données utilisateurs ainsi que les paramétrages effectués peuvent être gardés.

Mais pour ma part,J'ai installéla nouvelle version Firefox ESR par-dessus  une version précédente de Firefox sans aucun problème.

Les données utilisateurs ainsi que les paramétrages effectués ils ont été conservés.

Faire Entrée sur   le fichier que vous avez téléchargé:

Firefox Setup 52.4.1esr.exe

Note: le fichier pour Firefox ESR 64 bits et 32bits
comporte le même nom, veuillez le vérifier avant de cliquer sur le lien de téléchargement.

Pendant l'installation, vous devez autoriser l'application à s'exécuter et suivre les instructions à l'écran.

Une fois l'installation terminée, cliquez sur "Terminer" et votre Firefox redémarre. 😀

Installez la nouvelle version Firefox ESR.
[Lien de téléchargement vers la dernière version ESR:](https://www.mozilla.org/en-US/firefox/organizations/all/)

Veuillez cliquer sur le lien et sélectionnez la version adéquate ainsi que la langue souhaitée.  Suivez la procédure mise au point par Mozilla ou celle indiqué ci-dessus par mes soins.

Attention ! Ne répétez pas la procédure complète : vous avez déjà téléchargé Firefox. Allez directement à l’étape qui décrit ce que vous devez faire lorsque Firefox est déjà téléchargé.

Pour en être sûr, contrôlez la version de Firefox après installation. Vous devez dès lors voir la mention ESR après Firefox et un numéro de version de 52.0 (ou plus élevé).

Aller au  Menu ? (Point d'interrogation ) puis À propos de Firefox

Une boîte de dialogue s'ouvre avec ces informations:

À propos de Mozilla Firefox, 52.4.1 (64 bits)

Vous utilisez actuellement le canal de mise à jour esr
   
Ceci est la version de Firefox suggérée par NV Access.
   
   À titre d'infomation:
   
[Installer Firefox sous Windows `|` Assistance de Firefox - Mozilla Support](https://support.mozilla.org/fr/kb/installer-firefox-windows)
[À savoir que: Installer une version précédente ne corrige pas la plupart des problèmes](https://support.mozilla.org/fr/kb/installer-ancienne-version-firefox)

#### Références

[Firefox Extended Support Release for Your Organization, Business, Enterprise - Overview - Mozilla](https://www.mozilla.org/en-US/firefox/organizations/)
[Firefox — Notes (52.4.1) - Mozilla](https://www.mozilla.org/en-US/firefox/52.4.1/releasenotes/)

### Windows 10 Fall Creators Update

Cette mise à jour de Windows 10 inclut un système de protection appelé "Controlled folder access" (accès contrôlé aux dossiers).

Il est recommandé que le "Controlled folder access" reste désactivé lors de l'installation ou de la mise à jour de NVDA. Sinon, une erreur se produira et il ne sera pas possible de créer un raccourci sur le bureau. Une fois installé ou mis à jour, ce système de protection de Windows n'interfère pas avec NVDA.

#### Références

[Windows 10 Fall Creators Update sur ZDNet](http://www.zdnet.fr/actualites/fall-creators-update-microsoft-presente-les-nouveautes-de-windows-10-maj-39852380.htm)
[Windows 10 : avec sa fonctionnalité "Controlled Folder Access", Microsoft espère mieux vous protéger des ransomwares grâce à Windows Defender](https://www.developpez.com/actu/168383/Windows-10-avec-sa-fonctionnalite-Controlled-Folder-Access-Microsoft-espere-mieux-vous-proteger-des-ransomwares-grace-a-Windows-Defender/)
[Découvrir comment l’Accès contrôlé aux dossiers peut aider à empêcher la modification des fichiers par des applications malveillantes `|` Microsoft Docs](https://docs.microsoft.com/fr-fr/windows/threat-protection/windows-defender-exploit-guard/evaluate-controlled-folder-access)
[Empêcher les ransomware et autres menaces de chiffrer et modifier les fichiers `|` Microsoft Docs](https://docs.microsoft.com/fr-fr/windows/threat-protection/windows-defender-exploit-guard/controlled-folders-exploit-guard)
[Stopping ransomware where it counts: Protecting your data with Controlled folder access - Windows Security blog](https://blogs.technet.microsoft.com/mmpc/2017/10/23/stopping-ransomware-where-it-counts-protecting-your-data-with-controlled-folder-access/)

Nous espérons que cette information est utile pour continuer à profiter de NVDA.

@+
BlindHelp!