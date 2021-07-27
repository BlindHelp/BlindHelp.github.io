---

title: GitHub CLI - comment l'installer et l'utiliser en ligne de commandes
permalink: "/GitHub-CLI/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 20 Juillet 2021 - Dernière mise à jour le Mardi 27 Juillet 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je vous présente une application appelée GitHub CLI, cette application est idéal pour créer des Pull Requests et même pour faire des Forks en sachant les commandes, il peut être plus facile que de manipuler l'interface Web de GitHub.    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du logiciel téléchargé  ni des informations ce trouvant sur le site Web dédié et l'utilisation du programme téléchargé est à vos risques et périls. ☠  

# GitHub CLI (Command Line Interface)

# Introduction.

Eh bien, pour commencer, je vais faire une rapide histoire à propos de GitHub, Git et à la fin sera le tour de GitHub CLI...

Depuis des années, GitHub est l'une des plateformes mettant le plus à l'honneur Git et ses possibilités. Elle le complète par ses fonctionnalités et les outils mis à disposition des développeurs. Sa CLI 1.12.1 est désormais disponible, mais qu'apporte-t-elle ?

Git est un outil de gestion de versions comme il en existait d'autres avant lui : Bazaar, Mercurial ou encore SVN. Il permet de gérer l'évolution de fichiers et documents de manière efficace. Il est principalement utilisé dans le cadre du développement de logiciels libres, mais peut aussi trouver son intérêt pour de la documentation, la loi, etc.

## Git, un succès distribué.

Outre le fait qu'il ait été pensé par Linus Torvalds pour le développement du noyau Linux dès 2005, l'un de ses principaux atouts était sa conception distribuée, ne nécessitant pas de serveur central. Assez ironiquement, il doit en partie son succès à celui de la plateforme GitHub, rachetée par Microsoft en juin 2018.

Permettant à chacun d'héberger gratuitement les données des projets open source ou non, elle proposait de faire de même en équipe contre un abonnement payant. Un modèle qui a évolué depuis. Mais GitHub est surtout un service bien pensé, complet, pouvant être vu par certains aspects comme un client Git en ligne, survitaminé.

## GitHub : un superset de Git.

La principale force de GitHub est aussi, d'une certaine manière, son principal défaut : elle va bien plus loin que ce que propose Git. Outre la consultation de fichiers et leurs versions, on peut y publier de la documentation, un wiki, un site statique, gérer des discussions autour du projet, les remontées d'erreurs et leur correction, les pull-requests, des processus d'intégration et de déploiement continus, héberger les différentes releases de son application, etc.

Son importance est devenue telle qu'il s'agit presque d'un réseau social pour développeurs, chacun y peaufinant son profil comme on le fait avec un CV sur LinkedIn (qui appartient aussi à Microsoft).

Certains services sont plus spécifiques, comme les Gists, des snippets que l'on peut facilement partager et qui sont eux aussi « versionnés ». Ils ne sont pas gérés sous forme de dépôt comme dans le fonctionnement classique de Git. Ils ne peuvent donc pas être utilisés avec son client en ligne de commandes ou autres. Il faut une intégration propre à GitHub, aucun standard n'étant défini pour la gestion de telles portions de code et leur partage en ligne.

On trouve ainsi des clients pour des environnements de développement comme Atom, Notepad++ ou Visual Studio Code. Les développeurs apprécient aussi de pouvoir gérer de tels modules via la ligne de commande ou des scripts. Là aussi il existe différents outils exploitant les API de GitHub. Mais jusqu'à maintenant, aucun officiel.

## GitHub CLI  est un client multiplateforme pour terminal.

L'idée est de permettre de profiter des possibilités de GitHub depuis un simple terminal, comme pour Git. Il devient ainsi possible d'automatiser simplement certaines tâches, sans avoir à interagir avec une API.

Il fonctionne aussi bien pour les comptes GitHub.com que ceux de la version Enterprise Server. Disponible pour Linux, macOS et Windows, il s'installe facilement, notamment via différents gestionnaires de paquets. Il est open source, sous licence MIT. Tous les détails en anglais sont donnés [par ici](https://github.com/cli/cli#installation).

# Comment l'installer et l'utiliser En ligne de commandes?

La procédure est simple et rapide. Bien entendu, pour profiter de l'ensemble des fonctionnalités de l'outil, il faudra que Git soit installé et configuré sur votre machine. Si vous êtes utilisateur de GitHub, c'est sans doute votre cas.

Si vous n'avez encore pas installé Git, vous pouvez visiter la page en anglais ci-dessous afin de le télécharger.

# Télécharger Git.

<https://git-scm.com/downloads>

Sur cette page en anglais, vous devez rechercher le bon fichier correspondant à votre système utilisée, par exemple pour Linux, macOS et Windows.

Dans mon cas, comme j'ai un Windows 64 bits, donc, je dois télécharger puis installer Git pour Windows. Ci-dessous, je vous laisse le lien Git pour ce système d'exploitation.

# Git pour Windows.

L'application officielle pour Windows est disponible au téléchargement sur le site web de Git. Rendez-vous sur <http://git-scm.com/download/win> et le téléchargement démarrera automatiquement.

puis en bonus quelques tutoriels pour Git:

[git - petit guide - no deep shit!](http://rogerdudler.github.io/git-guide/index.fr.html)

Documentation pour GitHub en français (format .epub):

<https://github.com/progit/progit2-fr/releases/download/2.1.68/progit.epub>

Source de la documentation:

<https://git-scm.com/book/fr/v2>

Oui, comme je vous l'ai dit initialement GitHub CLI nécessitent git pour être installé sur votre ordinateur, donc vous aurez besoin d'installer Git avant de continuer. Il utilise git en interne pour toutes les fonctions qui peuvent également être faites par git comme par exemple, cloner, pousser, fusionner, etc. Voir le lien de téléchargement indiqué ci-dessus.

# Télécharger GitHub CLI pour Windows.

Pendant la rédaction de cet article, le fichier disponible dans sa dernière version est la suivante:

[gh_1.12.1_windows_amd64.msi](https://github.com/cli/cli/releases/download/v1.12.1/gh_1.12.1_windows_amd64.msi)

# Installation de GitHub CLI pour Windows.

Une fois que vous avez téléchargé le fichier vous devriez l'exécuter  et cliquez ensuite sur chaque boîte de dialogue qui apparaît pendant l'installation. Aussi facile que nous puissions passer à l'authentification GitHub CLI.

La première boîte de dialogue contient le message suivant en anglais:

The Setup Wizard will install GitHub CLI on your computer. Click Next to continue or Cancel to exit the Setup Wizard.

Vous devez appuyer sur le bouton Next

Une fois appuyé sur le bouton Next une deuxième boîte de dialogue sera ouverte, vous trouverez une case à cocher où vous devriez la cocher avec la barre d'espace.

I accept the terms in the License Agreement case à cocher non cochée

Une fois coché vous devriez faire deux Tabulations jusqu'au bouton Next

Une fois appuyé sur le bouton Next une troisième boîte de dialogue sera ouverte, ici, sera affiché la route où le programme GitHub  CLI sera installé par défaut.

Ceci est pour un Windows 10 64 bits:

`C:\Program Files (x86)\GitHub CLI\`    

Une fois appuyé sur le bouton Next une quatrième boîte de dialogue sera ouverte,où vous devrez vérifier si tout est correct avant de pouvoir installer GitHub CLI sur votre ordinateur.

Si tout est correct, vous devez cliquer sur le bouton Install afin de commencer l'installation de ce programme sur votre ordinateur.

S'il vous plaît attendez un moment.

Une fois l'installation terminée, vous devez cliquer sur le bouton Finish afin de fermer l'assistant d'installation. Maintenant, vous pouvez passer à l'authentification GitHub CLI. Voir les explications détaillées ci-dessous.

# Mise en route de GitHub CLI pour Windows .

## Une configuration rapide, un outil déjà complet.

L'outil s'utilise avec l'exécutable gh, un nom volontairement court comme git. La première étape à suivre est la connexion à votre compte GitHub. Elle peut passer par le partage d'un jeton de sécurité placé en variable d'environnement (GITHUB_TOKEN) ou votre navigateur. Nous avons opté pour la seconde méthode. Voir les explications détaillées ci-dessous.

Je vous conseille instamment de voir le manuel de GitHub CLI (page en anglais) se trouvant ci-dessous pour les instructions de configuration et d'utilisation.

[See the manual for setup and usage instructions.](https://cli.github.com/manual/)

# Authentification.

Après l'installation de GitHub CLI, nous devons nous connecter et l'installer avec notre compte GitHub.
 
Pour ce faire, vous aurez besoin d'avoir un compte GitHub, Si vous ne l'avez toujours pas, vous pouvez le faire à partir de la  page en anglais ci-dessous afin d'ouvrir une session sur GitHub.

[Join GitHub](https://github.com/join)

Cela fait, assurez-vous d'être connecté à votre compte GitHub  dans votre navigateur.

<https://github.com/>

Eh bien, pour ma part j'ai un compte sur GitHub, j'ai installé Git et je viens d'installer le programme GitHub CLI.

Comme je suis une personne aveugle, j'ai utilisé le lecteur d'écran [NVDA](https://www.nvaccess.org/) je pense que les voyants peuvent suivre ces mêmes instructions se trouvant ci-dessous pour s'authentifier.

Appuyer sur la combinaison de touches Windows+r pour ouvrir la boîte de dialogue:

`Exécuter dialogue Entrez le nom d'un programme, dossier, document ou ressource Internet, et Windows l'ouvrira pour vous.`    

Saisir la commande suivante:

`gh auth login`    

puis appuyez sur Entrée.

Nous aurons une fenêtre dans le terminal comme message:

`C:\Program Files (x86)\GitHub CLI\gh.exe terminal vide`    

Tout d'abord, vous aurez un premier écran où GitHub CLI vous demandera avec un message en anglais Sur quel type de compte voulez-vous vous connecter?

Utilisez les flèches pour vous déplacer, frapper pour filtrer.

`? What account do you want to log into? [Use arrows to move, type to filter]`    
`> GitHub.com`    
`> GitHub Enterprise Server`    

Habituellement, vous aurez la première option choisie afin de vous connectez sur votre compte GitHub.com, mais si votre entreprise dispose de serveurs mis en place pour stocker le projet GitHub, alors vous devez choisir GitHub Enterprise Server, appuyez sur Entrée.

Ensuite, vous aurez un deuxième écran où GitHub CLI vous demandera avec un message en anglais Comment voudriez-vous vous authentifier sur GitHub CLI?

Utilisez les flèches pour vous déplacer, frapper pour filtrer.

`? How would you like to authenticate GitHub CLI? [Use arrows to move, type to filter]`    
`Login with a web browser]`    
`First copy your one-time code:`    
`Press Enter to open github.com in your browser...`    

Sélectionnez ensuite le code unique  que vous sera donné ceci est Un code de deux fois quatre caractères alphanumériques...    

Pour les personnes qui ont le lecteur d'écran [NVDA](https://www.nvaccess.org/), si je ne me trompe pas, appuyez sur Ctrl + M pour afficher le contenue de cette fenêtre afin  de sélectionner puis  copier dans le presse-papiers ce code unique qui vous est donné en utilisant les raccourcis clavier propres à Windows.

Extrait du Guide de l'utilisateur de NVDA 2021.1

<blockquote>

<H3>11.9. Console Windows</H3>
<P>
NVDA fournit un support pour la console de commande de Windows utilisée par l'invite de commandes, PowerShell, et le sous-système Windows pour Linux.
La console Windows est de taille fixe, typiquement beaucoup plus petite que le tampon contenant l'affichage.
Quand du nouveau texte est écrit, le contenu défile vers le haut et le texte précédent n'est plus visible. 
Le texte qui n'est pas visiblement affiché dans la fenêtre n'est pas accessible avec les commandes de revue de texte de NVDA.
Ainsi, il est nécessaire de faire défiler la fenêtre de la console pour lire le texte plus ancien.
Les raccourcis clavier propres à Windows suivants peuvent être utiles pour <A HREF="#ReviewingText">revoir du texte</A> avec NVDA :
</P>
<TABLE BORDER="1" CELLPADDING="4">
<TR>
<TH>Nom</TH>
<TH>Touche</TH>
<TH>Description</TH>
</TR>
<TR>
<TD>Défilement vers le haut</TD>
<TD>contrôle+flècheHaute</TD>
<TD>Fait défiler la fenêtre de la console vers le haut pour que le texte plus ancien puisse être lu.</TD>
</TR>
<TR>
<TD>Défilement vers le bas</TD>
<TD>contrôle+flècheBasse</TD>
<TD>Fait défiler la fenêtre de la console vers le bas pour que le texte plus récent puisse être lu.</TD>
</TR>
<TR>
<TD>Aller au début</TD>
<TD>contrôle+début</TD>
<TD>Aligne la fenêtre de la console sur le début du tampon.</TD>
</TR>
<TR>
<TD>Aller à la fin</TD>
<TD>contrôle+fin</TD>
<TD>Aligne la fenêtre de la console sur la fin du tampon.</TD>
</TR>
</TABLE>

</blockquote>

Une fois que vous avez copié dans le presse-papier le code de deux fois quatre caractères alphanumériques...    
Appuyez sur Entrée pour ouvrir github.com  dans votre navigateur...    
et collez-le dans le nouvel onglet qui s'ouvre dans votre navigateur.    
Vous allez ouvrir une page en anglais comme nom:    

`Device Activation`    

Vous devrez entrer le code pour que la session soit initiée dans votre terminal. Pour cela, placez le curseur sur le premier champ d'édition. En appuyant sur Ctrl + V cette action collera automatiquement le code de deux fois quatre caractères alphanumériques dans les deux premiers champs d'édition.

Ensuite, vous devrez appuyer sur le bouton "Continue" après les champs d'éditions.    
Si le code est introduit correctement, vous ouvrirez une autre page Web en anglais. Dans le cas contraire, vous recevrez un message d'erreur indiquant que le code est incorrect.    
Dans la nouvelle page qui s'ouvre, cliquez sur Authorize GitHub CLI et entrez votre mot de passe sur l'écran suivant.    
Après avoir fait cela, une autre page Web sera ouvert avec le message suivant en anglais:    
`Congratulations, you're all set!`    
`Your device is now connected.`    

Notez que  le mode d'authentification par défaut est un flot de données pour le   navigateur Web.    
Sinon, la deuxième est passer par un token   (jeton) via une entrée standard, donc, vous devriez vous  authentifier sur Git avec vos informations d'identification GitHub, ensuite vous devez répondre à la question suivante en anglais:

`? Authenticate Git with your GitHub credentials?`    
`Yes`    
`No`    

Si vous avez choisi Oui (Yes), vous aurez un message en anglais :

`Paste an authentication token`    

Coller un token (jeton) d'authentification

Note: Comme j'ai choisi la première alternative, je ne saurais pas quoi faire dans cette partie, mais si vous voulez vous pouvez consulter la documentation en anglais à partir  du lien ci-dessous. Merci.

[Creating a personal access token - GitHub Docs](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Ensuite, vous aurez un troisième écran où GitHub CLI vous demandera avec un message en anglais Quel est votre protocole préféré pour les opérations avec Git?

Utilisez les flèches pour vous déplacer, frapper pour filtrer.

`? What is your preferred protocol for Git operations?  [Use arrows to move, type to filter]`    
`> HTTPS`    
`> SSH`    

GitHub, vous demande de choisir un protocole, allons avec HTTPS pour la simplicité.

Après avoir choisi le protocole de connexion (HTTPS ou SSH), GitHub CLI sera exploitable.

Via GitHub CLI, vous pouvez interagir avec différentes sections du site : issue, pull-requests (pr), release ou encore repo (les dépôts), donc créer un projet, le cloner/forker ou simplement le voir. Certaines actions seront ainsi redondantes avec Git, mais fonctionnant de manière simplifiée.

# Récap des commandes GitHub CLI.

Je considère que vous savez ouvrir une invite de commandes ou PowerShell sous Windows, c'est-à-dire que vous devriez être  dans la fenêtre ¤ Invite de commande.

Voici un récap des commandes GitHub CLI  utilisées lorsque vous saisissez la commande suivante:

`gh help`    

Le texte est affiché en anglais une fois la commande gh help tapé, c'est normal car le programme GitHub CLI est en anglais, Je vais mettre  sa traduction en français ci-dessous ou  à côté de l'anglais accompagné d'une explication si disponible, Et en bonus, le texte je vais le mettre sur un tableau pour une meilleure lecture.

Vous trouverez en premier le nom de la commande à taper, sa description en anglais suivi de la traduction en français, puis plus bas la commande à taper au complet.

---

Message en anglais  | Message en français
- | -
`Work seamlessly with GitHub from the command line.` | `Travailler de manière transparente avec GitHub en ligne de commande.`

# USAGE (Utilisation)

Commande | Décorticage de la commande
- | - 
`gh <command> <subcommand> [flags]` | `Être en ¤ Invite de commande ensuite taper gh suivi de la <commande> puis la <sous-commande> [indicateurs]`

# CORE COMMANDS (Commandes de base)

Commande | Description en anglais | Description en français | Commande au complet
- | - | - | -
`browse` | Open the repository in the browser| Ouvrir le dépôt dans le navigateur | `gh browse`
`gist` | Manage gists | Gérer les gists | `gh gist`
`issue` | Manage issues | Gérer les issues | `gh issue`
`pr` | Manage pull requests | Gérer les pull requests | `gh pr`
`release` | Manage GitHub releases | Gérer les releases GitHub | `gh release`
`repo` | Create, clone, fork, and view repositories | Créer, cloner, bifurquer et voir les dépôts | `gh repo`

# ACTIONS COMMANDS (Actions des commandes)

Commande | Description en anglais | Description en français | Commande au complet
- | - | - | -
`actions` | Learn about working with GitHub actions | En savoir plus sur le travail avec GitHub Actions | `gh actions`
`run` | View details about workflow runs | Voir les détails de l'exécution de flux de travail | `gh run`
`workflow` | View details about GitHub Actions workflows | Voir les détails sur le flux de travail GitHub Actions | `gh workflow`

# ADDITIONAL COMMANDS (Commandes supplémentaires)

Commande | Description en anglais | Description en français | Commande au complet
- | - | - | -
`alias` | Create command shortcuts | Créer des raccourcis de commande | `gh alias`
`api` | Make an authenticated GitHub API request | Faire une demande d'API github authentifiée | `gh api`
`auth` | Login, logout, and refresh your authentication | Ouvrir la session, fermer la session et rafraîchir votre authentification | `gh auth`
`completion` | Generate shell completion scripts | Générer des scripts d'achèvement de shell | `gh completion`
`config` | Manage configuration for gh | Gérer la configuration pour gh | `gh config`
`help` | Help about any command | Aide pour  n'importe quelle commande | `gh help`
`secret` | Manage GitHub secrets | Gérer les secrets GitHub | `gh secret`
`ssh-key` | Manage SSH keys | Gérer les clés SSH | `gh ssh-key`

# FLAGS (Indicateurs)

Commande | Description en anglais | Description en français | Commande au complet
- | - | - | -
`--help` | Show help for command | Afficher l'aide pour la commande | `gh --help`
`--version` | Show gh version | Afficher la version gh | `gh --version`

# EXAMPLES (Exemples)

¤ Invite de commande | Action
- | -
`$ gh issue create` | Commande pour créer un issue
`$ gh repo clone cli/cli` | Commande pour cloner le dépôt de cli
`$ gh pr checkout 321` | Commande pour s'y déplacer au pull request 321

# ENVIRONMENT VARIABLES (Variables d'environnement)

Description de la commande  en anglais | Description de la commande  en français | Commande au complet
- | - | -
`See 'gh help environment' for the list of supported environment variables.` | `Voir 'gh help environment' pour la liste des variables d'environnement pris en charge.` | `gh help environment`

# LEARN MORE (Apprendre encore plus)

Description de la commande  en anglais | Description de la commande  en français | Commande au complet
- | - | -
`Use 'gh <command> <subcommand> --help' for more information about a command.` | `Utiliser 'gh <commande> <sous-commande> --help' pour plus d'informations sur une commande.` | `gh <command> <subcommand> --help`

Message en anglais | Message en français | Lien
- | - | -
Read the manual at | Lire le manuel en anglais à cette adresse | <https://cli.github.com/manual>

FEEDBACK (Retour ou remontée de l'information sur le dépôt de CLI sur GitHub)

Description de la commande à utiliser en anglais | Description de la commande à utiliser en français |Commande au complet
- | - | -
`Open an issue using 'gh issue create -R github.com/cli/cli'` | `Ouvrir un issue utilisant 'gh issue create -R github.com/cli/cli'` | `gh issue create -R github.com/cli/cli`

À la fin de l'écran où tout le texte précédent était affiché c'est-à-dire dans la dernière ligne, si vous avez une version précédente de GH CLI, vous aurez un message en anglais suivi du lien pour aller télécharger la nouvelle version de GitHub Cli sur son dépôt sur GitHub:

Message en anglais | Message en français | Lien
- | - | -
`A new release of gh is available: 1.12.1 → v1.13.1` | `Une nouvelle version de GH est disponible: 1.12.1 → v1.13.1` | <https://github.com/cli/cli/releases/tag/v1.13.1>

Sur cette page en anglais, une fois ouverte vous devez rechercher le bon fichier correspondant à votre système utilisée, par exemple pour Linux, macOS et Windows.

Dans mon cas, comme j'ai un Windows 64 bits, donc, je dois télécharger le nouveau fichier qui vient d'être proposé après avoir installé la version précédente 1.12.1:

[gh_1.13.1_windows_amd64.msi](https://github.com/cli/cli/releases/download/v1.13.1/gh_1.13.1_windows_amd64.msi)

Une fois le fichier téléchargé, vous pouvez l'installer comme vous l'avez fait pour la première fois, comme expliqué ci-dessus.

# Comment ont fait les Pull Requests (pr) avec GitHub CLI?

Pour créer une Pull Request, vous pouvez suivre ces étapes. Je suppose que vous avez installé et configuré  GIT et GitHub CLI sur votre système comme expliqué ci-dessus.

À savoir que les commandes utilisées ci-dessous est un mix entre les commandes Git et celles de GitHub CLI.

En résumé, si vous souhaitez contribuer à un projet, le moyen le plus simple est de:    
1. Trouvez un projet sur le quelle vous souhaitez contribuer sur GitHub.    
2. ¤ Invite de commande sous Windows, en utilisant le lecteur d'écran NVDA, saisir la commande suivante:    
`gh repo fork https://github.com/utilisateur/dépôt.git --clone`    
puis appuyez sur Entrée.    
N'oubliez pas que vous devriez changer la syntaxe utilisateur/dépôt trouvé dans l'exemple de l'URL par le nom de l'utilisateur et le nom du dépôt qui apparaît dans l'URL du projet auquel vous souhaitez collaborer.    
Notez que l'option `--clone` est ajoutée pour forcer le dépôt à distance à être cloné localement.    
Une fois que vous avez saisi cette commande votre compte Github  hébergé via le nuage comprendra un fork du dépôt d'origine et un clonage sera effectué sur le système de fichiers local. À partir de là, vous pouvez faire un commit, un push et même des pull requests GitHub comme ça serait fait avec n'importe quel dépôt ordinaire Git ou GitHub.    
Et c'est à quel point il est facile de faire un fork d'un dépôt github  en ligne de commande avec GitHub CLI.    
3. ¤ Invite de commande` sous Windows, `cd NomDuDépôt`    
4. Cependant, dans des occasions futures, pour avoir la branche master synchronisée avec celle du dépôt que vous venez de bifurquer, vous pouvez procéder comme suit:    
`git remote add upstream https://github.com/utilisateur/dépôt.git`    
puis appuyez sur Entrée.    
Note: le nom upstream c'est un nom habituel pour le dépôt que vous venez de bifurquer (fork). Vous pouvez modifier le nom en mettant le nom de l'utilisateur du dépôt ou laissez-le simplement comme ça.    
N'oubliez pas que vous devriez changer la syntaxe utilisateur/dépôt trouvé dans l'exemple de l'URL par le nom de l'utilisateur et le nom du dépôt qui apparaît dans l'URL du projet auquel vous souhaitez collaborer.    
5. Téléchargez maintenant toutes les références des branches du dépôt à distance ajouté, de sorte que Git connaisse les branches sur le dépôt à distance, y compris la branche master, pour cela saisir la commande suivante:    
`git fetch upstream`    
puis appuyez sur Entrée.    
6. Connectez votre branche master, à celle que vous venez juste après avoir cloné le dépôt avec la branche master du dépot à distance, pour cela saisir la commande suivante:    
`git branch -u upstream/master`    
puis appuyez sur Entrée.    
Note: `-u` peut signifier que c'est un paramètre en référence  à upstream, le dépôt à distance principal, pour ainsi dire.    
Maintenant, lorsque vous êtes sur la branche master de votre dépôt et vous saisissez la commande:    
`git pull`    
vous téléchargerez les dernières modifications apportées par le responsable du dépôt que vous venez de bifurquer. Avant de faire une pull request, il est bon de vous assurer que la branche master est mise à jour avec les dernières modifications apportées dans le dépôt  upstream. Ensuite, vous devez faire la commande:    
`git pull`    
puis appuyez sur Entrée.    
7. Ensuite, vous créez une nouvelle branche identique à la branche master du dépôt cloné et vous allez à cette nouvelle branche pour apporter des modifications saisissant la commande suivante:    
`git checkout -b byNewBranch`    
puis appuyez sur Entrée.    
Note:  Le nom byNewBranch C'est un simple nom factice, vous pouvez mettre n'importe quel autre nom à cette nouvelle branche par rapport à vos modifications, par exemple s'il s'agit d'une traduction en français fr pourrait être le nom de la nouvelle branche, bien que vous puissiez mettre d'autres noms.    
8. Utilisant Windows Explorer, accédez au dossier du dépôt et modifier correctement les fichiers, par exemple, le readme.md, buildVars.py et ainsi de suite.    
9. Testez vos modifications et, quand ils vous conviennent, saisir la commande suivante:    
`git add .`    
puis appuyez sur Entrée.    
Elle permet d'ajouter tout nouveau fichier dans la file des fichiers suivis.    
Il n'y a aussi aucun mal à l'utiliser si la modification concerne uniquement un fichier qui était déjà présent, et qu'aucun fichier n'a été ajouté.    
Donc, si on veut être certain que ça marche à tous les coups, je conseille vivement de toujours saisir cette commande, après avoir fait les ajouts/modifications.    
10. Ensuite faire un commit avec un message descriptif saisissant la commande suivante:    
`git commit -m "Message descriptif"`    
puis appuyez sur Entrée.    
11. Il va falloir envoyer cela dans la nouvelle branche origin fr sur votre  dépôt GitHub.    
Pour ce faire, taper la commande suivante:    
`git push origin fr`    
puis appuyez sur Entrée.    
C'est ainsi qu'une branche appelée FR aura été créée dans votre dépôt.    
12. ¤ Invite de commande sous Windows, saisir la commande suivante:    
`gh pr create -w`    
puis appuyez sur Entrée.    
Note: `-w` signifie que vous souhaitez ouvrir le navigateur.    
Une fois que vous avez saisi cette commande elle s'ouvrira la page Web du déppôt pour créer la  Pull Request sans qu'il soit nécessaire de le rechercher entre les liens du dépôt de GitHub. Le focus sera sûrement placé dans le titre. Appuyez sur la touche Tabulation pour aller à la zone d'édition multilignes, vous effectuez le commentaire que vous souhaitez ou remplissez le template (modèle) fourni si disponible (en anglais), par exemple, lorsqu'une PR est demandé au dépôt de Noelia:    
Vous explorez avec le curseur et sous les en-têtes, qui commencent par deux `##`, vous tapez les données en anglais:    
`Link to issue number:`    
`None`    
`## Summary of the issue:`    
`Missing frenchtranslation.`    
`Description of how this pull request fixes the issue:`    
`Added documentation and messages translated into French.`    
`## Testing performed:`    
`None`    
`## Known issues with pull request:`    
`None`    
`## Change log entry:`    
`None`    
Et puis quand vous avez fini vous appuyez sur le bouton Create pull request, et des tests automatiques seront effectués à surmonter sans problèmes. Après quoi vous pouvez lire l'état de ladite  pull request envoyé, toujours en anglais ensuite vous pouvez fermer la page Web par Alt+F4.    
Patienter jusqu'à ce qu'elle soit prise en compte ;-)    
Et ceci à la base, est le processus de création d'une PR. Si nous créons une PR sur la branche master, il est important de garder à l'esprit que jusqu'à ce que tous les commits que nous envoyons à notre  branche  master ne seront ni acceptés ni fermés y compris dans la PR automatiquement, même si nous les envoyons après l'avoir ouverte.    
Ci-dessous vous aurez plus d'informations en anglais sur la création d'une PR AVEC GitHub CLI:    
<https://cli.github.com/manual/gh_pr_create>

# Astuces en bric-à-brac.

1. Premier réflexe qu'il faut toujours avoir lorsque vous êtes dans le dépôt que vous venez de bifurquer et cloner.    
Saisir la commande suivante:    
`git status`    
Pour vérifier la branche courante, si ce n'est pas la branche fr, `git checkout fr` pour s'y déplacer.    
Note: fr signifie le nom de la nouvelle branche que nous avions créée précédemment pour apporter les modifications au dépôt à  distance.    
Avant de créer cette nouvelle branche appelée fr, nous étions sur la branche master    
En saisissant la commande:    
`git status`    
le message en anglais était le suivant:    
`On branch master`    
`Your branch is up to date with 'origin/master'.`    
2. Vous pouvez vérifier le journal des changements fait au dépôt à distance en effectuant la commande:    
`git log`    
3. Par exemple, si vous voulez faire un fork et un clonage d'un dépôt à distance habituellement en saisissant la commande:    
`gh repo fork https://github.com/utilisateur/dépôt.git --clone`    
L'URL complète n'est pas nécessaire, il suffit de préciser le nom d'utilisateur et du dépôt GitHub. Rien ne vient par contre remplacer tout ce qui touche au cœur du workflow Git et qui n'est pas spécifique à GitHub, c'est bien normal. Les deux outils doivent se complèter, pas s'opposer.    
Mais cette astuce là je n'ai pas essayé, mais je vous la donne au cas où.    

Voilà, je ne peux faire mieux dans ce tutoriel, sachant que avec GitHub CLI, vous pouvez également faire plusieurs choses, mais pour moi, c'est encore nouveau.

---

Merci beaucoup à mon amie <span lang="es">Noelia Ruiz Martínez</span> pour m'avoir fait connaître cette application GitHub CLI. 🤗    

J'espère que ce tutoriel vous aidera  à mieux travailler avec GitHub en ligne de commande utilisant GitHub CLI!    
Je vous souhaite une bonne utilisation de l'application GitHub CLI!    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---