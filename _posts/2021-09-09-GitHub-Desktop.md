---
title: GitHub Desktop - Une collaboration simple à partir  de votre bureau
permalink: "/GitHub-Desktop/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 9 Septembre 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, nous vous apportons le programme  [GitHub Desktop,](https://desktop.github.com/) lequel est un client Git GUI (Graphical User Interface) gratuit et open source. Il possède une interface intuitive qui vous permet de gérer le code sans avoir à taper de commandes. Vous pouvez créer ou ajouter des dépôts locaux et effectuer des opérations Git en toute simplicité.  
Créer des branches et passer à celles qui existent déjà n’est pas un problème, tout comme la fusion du code avec la branche master. De plus, vous pouvez suivre vos modifications avec GitHub Desktop.  

J'ai trouvé une documentation sur GitHub Desktop  sur GitHub Docs en  anglais, il n'y a pas de documentation en français, en tout cas sur le site officiel.  
Cependant, vous pouvez consulter la documentation en anglais ["Getting started with GitHub Desktop"](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop)  
De toute façon dans ce guide ci-dessous, je vais vous expliquer les points forts de GitHub Desktop dans notre belle langue en français.  
Ensuite viendra mes explications qui ne sont pas nécessairement inclus dans l'article original en anglais pour une meilleure compréhension afin que vous puissiez utiliser le programme GitHub Desktop de la meilleure façon possible.  
Je vous souhaite une bonne lecture.    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du logiciel téléchargé  ni des informations ce trouvant sur le site Web dédié et l'utilisation du programme téléchargé est à vos risques et périls. ☠  

Table des matières<a id="Table des matières"></a>
-------------
* [Débuter avec GitHub Desktop](#getting-started-with-github-desktop)
* [Introduction](#introduction)
* [Partie 1: Installation et authentification](#part-1-installing-and-authenticating)
* [Partie 2: Configurer et personnaliser GitHub Desktop](#part-2-configuring-and-customizing-github-desktop)
* [Partie 3: Collaborer dans des projets avec GitHub Desktop](#part-3-contributing-to-projects-with-github-desktop)
* [Créer, ajouter et cloner des dépôts](#creating-adding-and-cloning-repositories)
* [Apporter des modifications à une branche](#making-changes-in-a-branch)
* [Collaborer avec GitHub Desktop](#collaborating-with-github-desktop)
* [Maintenir votre dépôt local synchronisé](#keeping-your-local-repository-in-sync)
* [Lire plus](#further-reading)
* [Raccourcis clavier GitHub Desktop sur Windows](#keyboard-shortcuts)
* [Lancement de GitHub Desktop à partir de la ligne de commande](#launching-github-desktop-from-the-command-line)

---

# Débuter avec GitHub Desktop<a id="getting-started-with-github-desktop"></a>

GitHub Desktop est un projet open source. Vous pouvez voir la feuille de route, contribuer au projet ou ouvrir un issue pour fournir des demandes de rétroaction ou de fonctionnalité. Pour plus d'informations, reportez-vous à la page en anglais du dépôt [desktop/desktop](https://github.com/desktop/desktop) .

Apprenez à configurer, authentifier et configurer GitHub Desktop pour vous permettre de contribuer sur des projets directement à partir de votre machine.

GitHub Desktop ce décline dans deux versions pour Mac et Windows.

Vous pouvez consulter l'article en anglais sur les systèmes compatibles avec le programme GitHub Desktop en allant à:  
["Supported operating systems."](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/supported-operating-systems)  
Dans ce poste seulement je parlerai de la version GitHub Desktop  pour Windows.

[Retour à la table des matières](#Table des matières)

## Introduction<a id="introduction"></a>

GitHub Desktop est une application qui vous permet d'interagir avec GitHub à l'aide d'une interface graphique à la place de la ligne de commande ou d'un navigateur Web. GitHub Desktop encourage vous et votre équipe à collaborer en utilisant les meilleures pratiques avec Git et GitHub. Vous pouvez utiliser GitHub Desktop pour compléter la plupart des commandes Git à partir de votre bureau avec une confirmation visuelle des modifications. Vous pouvez faire un push, un pull et cloner des dépôts distant avec GitHub Desktop et utiliser des outils de collaboration tels que l'attribution des commits et la création des pull requests.

Ce guide vous aidera à démarrer avec GitHub Desktop en configurant l'application, authentifiant votre compte, configurez les paramètres de base et en introduisant les principes fondamentaux de la gestion de projets avec GitHub Desktop. Vous pourrez utiliser GitHub Desktop pour collaborer à des projets et se connecter à des dépôts distant après avoir suivi ce guide.

Il peut être utile de comprendre les concepts de base de Git et GitHub avant de commencer à utiliser GitHub Desktop. Pour plus d'informations, consulter les articles suivants en anglais.

* ["Using Git"](https://docs.github.com/en/github/getting-started-with-github/using-git)
* ["Learning about GitHub"](https://docs.github.com/en/github/getting-started-with-github/learning-about-github)
* ["Getting started with GitHub"](https://docs.github.com/en/github/getting-started-with-github)

Ci-dessous je donne quelques explications sur l'utilisation de GitHub.

## Pour quoi

Il y a plein d'usages possibles à GitHub mais en gros ça permet :

* de créer un site web super rapidement
* de faire de l'écriture collaborative
* de créer des flux de travail avec des ressources associées

Et en vrai, à la base, c'est pour écrire du code (informatique) à plusieurs. C'est le principe du Git, on voit facilement toutes les versions qui existent et qui ont pu exister. Du coup, c'est cool pour du code mais ça marche très bien pour du français ou de l'anglais ou n'importe quel langage en fait ...

## Pour qui

Pour tous ceux qui ont besoin de diffuser du contenu ou de le partager surtout si on a envie de bosser à plusieurs dessus.

[Retour à la table des matières](#Table des matières)

## Partie 1: Installation et authentification<a id="part-1-installing-and-authenticating"></a>

Vous pouvez installer GitHub Desktop ou tout système d'exploitation compatible. Pour plus d'informations, voir la page de l'article en anglais ["Supported operating systems."](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/supported-operating-systems)

Pour installer Github Desktop, visitez la page de téléchargement de [GitHub Desktop en anglais.

<https://desktop.github.com/>

Pour plus d'informations, voir la page de l'article en anglais ["Installing GitHub Desktop."](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/installing-github-desktop)

Ci-dessous je donne quelques explications sur l'installation de GitHub Desktop.

## Installer GitHub Desktop

GitHub Desktop est une appli qui permet de cloner le dépôt "en local" sur votre ordinateur. En fait, c'est une appli qui lit les .git, les fichiers qui gardent tout l'historique des différentes versions.  
Télécharger GitHub Desktop : <https://desktop.github.com/>

Après avoir téléchargé, vous devriez installer GitHub Desktop sur votre ordinateur:  
Suivez les instructions à l'écran de l'assistant d'installation.  
À la fin de l'installation, vous obtiendrez le message suivant:  
`GitHub Desktop a été installé avec succès.`  
Vous pouvez l'ouvrir à tout moment en cliquant sur l'icône située sur le bureau:  
`GitHub Desktop`  
L'interface du programme est en anglais.  

Une fois que vous avez installé Github Desktop, vous pouvez authentifier l'application avec votre compte sur GitHub ou GitHub Enterprise. L'authentification vous permet de vous connecter à des dépôts distants sur GitHub ou GitHub Enterprise.

1. Avant de pouvoir vous authentifier sur GitHub ou GitHub Enterprise, vous aurez besoin d'un compte. Pour plus d'informations sur la création d'un compte, reportez-vous à l'article en anglais ["Signing up for a new GitHub account"](https://docs.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account) ou contactez votre administrateur de site GitHub Enterprise.  
2. Dans le menu déroulant File, cliquez sur Options. Dans la fenêtre Options, cliquez sur Accounts et suivez les étapes à suivre pour vous connecter. Pour plus d'informations sur l'authentification, voir l'article en anglais ["Authenticating to GitHub."](https://docs.github.com/en/desktop/getting-started-with-github-desktop/authenticating-to-github)  

Eh bien, comme je l'imagine, vous avez créé déjà votre compte dans GitHub, si ce n'était pas le cas, procédez comme suit:

## Créer un compte GitHub

Se rendre sur <https://www.github.com>  
Choisir un nom d'utilisateur.  
Renseigner une adresse mail.  
Choisir un mot de passe.  
Cliquer sur signup.  

Une fois dans l'application GitHub Desktop:  
On s'identifie dedans avec les mêmes identifiants que sur GitHub.  
Une fois que vous avez rempli les champs cités ci-dessus, cliquez sur le bouton:  
`Sign in to GitHub.com`  
Vous devez ensuite autoriser l'application GitHub Desktop afin d'utiliser vos données de votre compte et vos dépôts hébergés dans GitHub via la nouvelle page qui s'ouvre dans votre navigateur par défaut.  

[Retour à la table des matières](#Table des matières)

## Partie 2: Configurer et personnaliser GitHub Desktop<a id="part-2-configuring-and-customizing-github-desktop"></a>

Après avoir installé GitHub Desktop, vous pouvez configurer et personnaliser l'application pour répondre au mieux à vos besoins.

Vous pouvez connecter ou supprimer des comptes sur GitHub ou GitHub Enterprise, choisissez un éditeur de texte par défaut ou shell, éditer votre configuration de Git modifier l'apparence de GitHub Desktop, personnaliser les boîtes de dialogue système et définir les préférences de confidentialité dans la fenêtre Options de GitHub Desktop. Pour plus d'informations, voir l'article en anglais ["Configuring basic settings."](https://docs.github.com/en/desktop/getting-started-with-github-desktop/configuring-basic-settings)  

Voici pour info les noms des onglets que nous trouvons dans Options:

`Accounts`  
`Integrations`  
`Git`  
`Appearance`  
`Prompts`  
`Advanced`  

[Retour à la table des matières](#Table des matières)

## Partie 3: Collaborer dans des projets avec GitHub Desktop<a id="part-3-contributing-to-projects-with-github-desktop"></a>

Après l'installation, l'authentification et la configuration de l'application, vous êtes prêt à commencer à utiliser GitHub Desktop. Vous pouvez créer, ajouter ou cloner des dépôts et utiliser GitHub Desktop pour gérer les contributions à vos dépôts.

À partir de là on va retrouver facilement le dépôt qu'on a créé sur GitHub si c'est la première fois, sinon, votre dépôt sera affiché avec la liste des autres dépôts que nous avons fait un fork d'eux précédemment.  
Par exemple:  
On va dans "File", "Clone Repository" et on copie/colle l'URL ou le "nom du propriétaire/nom du dépôt".  
Maintenant, on a sur notre ordinateur une copie de tous les contenus présents dans le dépôt "distant".  

[Retour à la table des matières](#Table des matières)

### Créer, ajouter et cloner des dépôts<a id="creating-adding-and-cloning-repositories"></a>

Vous pouvez créer un nouveau dépôt en sélectionnant le menu File et en cliquant sur New repository.... Pour plus d'informations, voir  l'article en anglais ["Creating your first repository using GitHub Desktop."](https://docs.github.com/en/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)

Vous pouvez ajouter un dépôt (repository) depuis votre ordinateur local en sélectionnant le menu File et en cliquant sur Add Local Repository.... Pour plus d'informations, voir  l'article en anglais ["Adding a repository from your local computer to GitHub Desktop."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)

Vous pouvez cloner (clone) un dépôt (repository)  depuis GitHub en sélectionnant le menu File et en cliquant sur Clone Repository.... Pour plus d'informations, voir  l'article en anglais ["Cloning and Forking Repositories from GitHub Desktop."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)  

Voici une astuce pratique lorsque vous créez un dépôt pour la première fois:

Penser à créer un readme.md au moment de l'initialisation du dépôt  

## Quelques utilisations de MarkDown

MarkDown est un langage informatique qui va nous servir à mettre en page du texte et des contenus multi-media. C'est un langage basé sur le HTML, le langage des sites Web.  
En créant notre premier fichier, on en fait un fichier MarkDown en ajoutant .md à la fin. C'est ce qui fait que les ordinateurs vont comprendre qu'on utilise ce langage.  

Pour en savoir plus vous trouverez ci-dessous un article fait par mes soins sur le langage MarkDown.  
[Qu'est-ce que le Markdown - BlindHelp via GitHub.io](https://blindhelp.github.io/Qu-est-ce-que-le-Markdown/)  

[Retour à la table des matières](#Table des matières)

### Apporter des modifications à une branche<a id="making-changes-in-a-branch"></a>

Vous pouvez utiliser GitHub Desktop pour créer une branche d'un projet. Les branches isolent votre travail de développement d'autres branches du dépôt, afin que vous puissiez expérimenter en toute sécurité les changements. Pour plus d'informations, voir  l'article en anglais ["Managing branches."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)  

Après avoir apporté des modifications à une branche, vous pouvez les examiner dans GitHub Desktop et faire un commit afin de garder une trace de vos modifications. Pour plus d'informations, voir  l'article en anglais ["Committing and reviewing changes to your project."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)  

Si vous souhaitez accéder à vos modifications à distance ou que vous les partagez avec d'autres personnes, vous pouvez faire un push de vos commits vers GitHub. Pour plus d'informations, voir  l'article en anglais ["Pushing changes to GitHub."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)

[Retour à la table des matières](#Table des matières)

### Collaborer avec GitHub Desktop<a id="collaborating-with-github-desktop"></a>

Vous pouvez utiliser GitHub Desktop pour créer des issues ou des pull requests afin de collaborer sur le projets avec d'autres personnes. Les Issues vous aident à garder une trace des  idées et à discuter de modifications possibles aux projets. Les Pull requests vous permettent de partager vos modifications proposées avec d'autres personnes, de recevoir des  commentaires (feedback) et de fusionner (merge) des modifications   dans un projet. Pour plus d'informations, voir  l'article en anglais ["Creating an issue or pull request."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)

Vous pouvez afficher vos propres pull requests ou de vos collaborateurs sur GitHub Desktop. En affichant une pull request dans GitHub Desktop vous permet de voir les modifications et de faire des modifications supplémentaires en ouvrant les fichiers et les dépôts du projet dans votre éditeur de texte par défaut. Pour plus d'informations, voir  l'article en anglais ["Viewing a pull request in GitHub Desktop."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)

[Retour à la table des matières](#Table des matières)

# Maintenir votre dépôt local synchronisé<a id="keeping-your-local-repository-in-sync"></a>

Lorsque vous apportez des modifications à vos dépôts en locale ou lorsque d'autres personnes apportent des modifications  aux dépôts distants, vous devez synchroniser votre copie locale du projet avec le dépôt distant. GitHub Desktop peut conserver votre copie locale d'un projet en synchronisation avec la version distante faisant un push et un pull des commits. Pour plus d'informations, voir  l'article en anglais ["Syncing your branch."](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)

[Retour à la table des matières](#Table des matières)

### Lire plus<a id="further-reading"></a>

Si vous voulez lire la suite de l'article en anglais cliquez simplement [ici](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop#further-reading)

[Retour à la table des matières](#Table des matières)

Raccourcis clavier GitHub Desktop sur Windows<a id="keyboard-shortcuts"></a>

Remarque Ces raccourcis clavier sont utilisés sur un clavier QWERTY  

La grande majorité des raccourcis peuvent être utilisées sur un clavier AZERTY  


Site wide shortcuts
==========================================================================================

Keyboard Shortcut | Description
- | -
CtrlVirgule | Go to Options
F11 | Toggle full screen view
Ctrl0 | Reset zoom to default text size
Ctrl= | Zoom in for larger text and graphics
CtrlTiret | Zoom out for smaller text and graphics
CtrlShiftI | Toggle Developer Tools


Repositories
==========================================================================================

Keyboard Shortcut | Description
- | -
CtrlN | Add a new repository
CtrlO | Add a local repository
CtrlShiftO | Clone a repository from GitHub
CtrlT | Show a list of your repositories
CtrlP | Push the latest commits to GitHub
CtrlShiftP | Pull down the latest changes from GitHub
CtrlDelete | Remove an existing repository
CtrlShiftG | View the repository on GitHub
CtrlAccent grave | Open repository in your preferred command line tool
CtrlShiftF | Show the repository in Explorer
CtrlShiftA | Open the repository in your preferred editor tool
CtrlI | Create an issue on GitHub


Branches
==========================================================================================

Keyboard shortcut | Description
- | -
Ctrl1 | Show all your changes before committing
Ctrl2 | Show your commit history
CtrlB | Show all your branches
CtrlG | Go to the commit summary field
CtrlEnter | Commit changes when summary or description field is active
space | Select or deselect all highlighted files
CtrlShiftN | Create a new branch
CtrlShiftR | Rename the current branch
CtrlShiftD | Delete the current branch
CtrlShiftU | Update from default branch
CtrlShiftB | Compare to an existing branch
CtrlShiftM | Merge into current branch
CtrlH | Show or hide stashed changes
CtrlShiftC | Compare branches on GitHub
CtrlR | Show the current pull request on GitHub


Vous trouverez ci-dessous le lien de l'article en anglais:  
[Keyboard shortcuts](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/keyboard-shortcuts)

[Retour à la table des matières](#Table des matières)

# Lancement de GitHub Desktop à partir de la ligne de commande<a id="launching-github-desktop-from-the-command-line"></a>

Vous pouvez lancer GitHub Desktop à partir de la ligne de commande.

1. Ouvrez une invite de commande.  
2. Pour lancer GitHub Desktop à partir du dernier dépôt ouvert, tapez  github. Pour lancer GitHub Desktop pour un dépôt en particulier, tapez github suivi du chemin du dépôt.  
`C:\Users\octocat> github path\to\repo`  
Vous pouvez également changer pour le chemin de votre dépôt puis tapez  github . pour ouvrir ce  dépôt.  
`C:\Users\octocat> cd repo\myrepo`  
`C:\Users\octocat\repo\myrepo> github .`  

Vous trouverez ci-dessous le lien de l'article en anglais:  
[Launching from the command line](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/launching-github-desktop-from-the-command-line)

[Retour à la table des matières](#Table des matières)

---

Sur ce, je vous souhaite une bonne utilisation du programme GitHub Desktop! 😉    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
