---
title: GitHub-CLI, l'interface en ligne de commande de GitHub par Abdel
permalink: "/GitHub-CLI-interface-en-ligne-de-commande-de-GitHub-par-Abdel/"
layout: post
author: BlindHelp
---

<footer>Publié le Lundi 16 Octobre 2023
<br>
# GitHub-CLI, l'interface en ligne de commande de GitHub par Abdel
<br>
Salut les amis,    
<br>
J'espère que vous allez tous bien, et que vous êtes en pleine forme.
<br>
Dans ce présent post, je souhaitais vous parler de GitHub-CLI, l'interface en ligne de commande de GitHub.
<br>
## De quoi s'agit t-il ?
<br>
GitHub-CLI offre à ses utilisateurs la possibilité de pouvoir exécuter en ligne de commande, toutes les actions que l'on trouve généralement dans l'interface web de chaque compte utilisateur.
<br>
Cela peut donc aller de la simple création ou fork d'un dépôt, création d'un ticket, création de pull request, jusqu'à l'exécution d'une action de flux de travail, appelée workflow et bien plus encore...
<br>
[GitHub-CLI est très bien documenté](https://cli.github.com/manual/gh) sur la doc officielle de GitHub, ce tuto a juste pour but de vous  faire une présentation non exhaustive des fonctionnalités couramment utilisée avec cette interface.
<br>
##De quoi avons-nous besoin ?
<br>
Si vous êtes sous Windows, comme moi, l'idéal serait de disposer du logiciel GitHub-CLI pour Windows.
<br>
Il est disponible dans [la page releases du dépot GitHub de GitHub-CLI.](https://github.com/cli/cli/releases/)
<br>
La page propose plusieurs versions selon le système d'exploitation, le type 32 ou 64 bits, ainsi que la forme portable ou installable du logiciel.
<br>
Pour la version Windows, pour ceux qui utilisent Windows en 64 bits, la version 64 bits est bien sûr recommandée.
<br>
Choisissez bien la dernière version de GitHub-CLI, pour pouvoir bénéficier des toutes dernières fonctionnalités et API de GitHub.
<br>
### Remarque :
<br>
La version installable ajoute automatiquement le chemin du répertoire "bin" à la variable système path, ce qui devrait permettre l'utilisation des commandes "gh".
<br>
Si vous exécutez la version portable, il faudra le faire vous-même manuellement.
<br>
## Comment configurer GitHub CLI ?
<br>
Avant d'utiliser les commandes "gh", vous devez d'abord vous authentifier dans GitHub.
<br>
Pour ce faire, vous devrez exécuter la commande suivante dans le terminal :
<br>
gh auth login
<br>
Vous devriez alors être invités à choisir entre le compte Github.com et le compte Github Enterprise Server.
<br>
Le premier est le compte classique que nous utilisons généralement pour travailler dans GitHub.
<br>
Le second est le compte d'entreprise, utilisé généralement dans les milieux professionnels.
<br>
Choisissez un compte Github.com classique.
<br>
L'étape suivante nous demande de choisir une méthode d'authentification, soit via un navigateur Web, soit via un jeton d'authentification.
<br>
Je vous conseille de vous connecter avec un navigateur Web qui est le plus simple, le second choix nécessitant que vous ayez déjà créé un jeton appelé "Token" depuis les paramètres de votre compte GitHub.
<br>
Cette première méthode de connexion via le navigateur web vous fournira depuis le terminal, un code à usage unique que vous devrez coller sur la page d'authentification GitHub située à l'adresse suivante :
<br>
[https://github.com/login/device.](https://github.com/login/device)
<br>
Cela autorisera votre appareil et il pourra ainsi accéder à votre compte GitHub, à vos équipes et à vos référentiels.
<br>
Si tout se passe bien, vous verrez le message "Authentication complete" dans le terminal.
<br>
### Dernière étape, choix du protocole.
<br>
Maintenant que vous êtes autorisés via un navigateur Web ou un jeton d'authentification, vous pouvez passer à la dernière étape, dans laquelle Vous pourrez choisir un protocole Git à utiliser pour interagir avec l'hôte GitHub.
<br>
Vous avez alors deux choix : HTTPS et SSH.
<br>
Personnellement, j'utilise [SSH, vous pourrez voir dans cette page la procédure pour générer une clé SSH.[(https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#platform-windows)
<br>
Si tout se passe bien, vous pourrez vérifier que vous êtes bien connectés en exécutant :
<br>
gh auth status
<br>
Voilà, la configuration est maintenant terminée.
<br>
## Créer un ticket sur le référentiel nvaccess/nvda avec GitHub-CLI.
<br>
Pour créer un ticket sur le référentiel nvaccess/nvda, nous avons bien sûr l'interface web, qui est assez simple.
<br>
Avec GitHub-CLI, il faut juste disposer du fichier de modèle correspondant au type de ticket que nous souhaitons réaliser.
<br>
Généralement, les modèles de ticket pour nvaccess/nvda sont disponibles sous la forme de fichiers au format md, qui comportent du code Markdown
<br>
Celui que l'on utilise souvent est le fichier ["bug_report.md", que vous pourrez télécharger ici, avec un clic droit/enregistrer la cible sous.](https://raw.githubusercontent.com/nvaccess/nvda/master/.github/ISSUE_TEMPLATE/bug_report.md)
<br>
Remplissez alors tous les champs sur votre disque dur, avec votre éditeur préféré et une fois l'opération réalisée, utilisez la commande suivante avec GitHub-CLI que vous venez de configurer.
<br>
gh issue create --repo nvaccess/nvda --title "My bug report" --body-file "chemin relatif ou absolu vers le fichier bug-report.md"
<br>
Pour voir toutes les options disponibles de la commande ["gh issue create", jetez un coup d’œil ici.](https://cli.github.com/manual/gh_issue_create)
<br>
### Remarque :
<br>
Les API actuelle de GitHub utilisée dans GitHub-CLI ne permettent pas encore de pouvoir soumettre une extension NVDA via le formulaire de l'addon-dataStore, parce que le modèle yaml utilisé dans la création du ticket pour soumettre une extension n'est pas encore pris en charge.
<br>
Pour le moment, seuls les fichiers de workflows (flux de travail", qui utilisent eux aussi le format yaml, sont pris en charge. 
<br>
Ce sera certainement le cas dans les prochaines mises à jour de GitHub-CLI, c'est d'ailleurs pour cela que je vous expliquais plus haut, qu'il faut toujours veiller à utiliser la dernière version du logiciel GitHub-CLI pour Windows.
<br>
## Création d'une Pull Request avec GitHub-CLI.
<br>
Pour créer une Pull Request avec GitHub-CLI, il faut disposer localement du référentiel sur lequel on souhaite envoyer notre Pull Request.
<br>
Il faut donc le cloner auparavant, avec la commande "git clone".
<br>
Ensuite, créer la branche dans laquelle la correction proposée devrait figurer.
<br>
Voici un petit exemple :
<br>
Depuis la branche "main" du dépôt cloné, taper ce qui suit :
<br>
git checkout -b votreBranche
<br>
La branche "votreBranche" est la branche susceptible de comporter l'implémentation de la correction proposée.
<br>
Dans le tutoriel, on nous invite simplement à taper "gh pr create", et à suivre les instructions qui devraient s'afficher.
<br>
Un fork du dépôt distant sur lequel nous sommes positionnés devrait s'ajouter automatiquement à nos dépôts GitHub.
<br>
Personnellement, je préfère procéder comme suit, pour éviter les erreurs :
<br>
gh repot fork nomUtilisateur/nomDepotDistantAForker --remote-name "Nom du dépôt distant de notre dépôt forké"
<br>
Par exemple, si actuellement nous sommes sur le dépôt "abdel/mp3DirectCut", cela devrait donner ce qui suit :
<br>
gh repo fork --repo abdel792/mp3DirectCut --remote-name origin
<br>
Si l'on exécute la commande "git remote -v", on devrait trouver 2 dépôts distants :
<br>
origin, qui est le dépôt forké qui s'est ajouté à nos propres dépôts, et upstream, qui correspond au dépôt sur lequel nous sommes, et dans lequel on souhaite envoyer notre PR.
<br>
Après avoir terminé le travail sur la branche locale que nous avons ajoutée, il faudra d'abord l'envoyer sur notre dépôt forké, comme suit :
<br>
git push -u origin votreBranche
<br>
Ceci fait, une fois qu'elle sera poussée sur notre dépôt forké, on devra exécuter la PR suivante.
<br>
gh pr create --repo nomUtilisateurOuOrganisation/nomDepotSurLequelNousSommes --title "Titre de la PR en anglais de préférence" --body "Texte 
contenu dans la description de la PR" --ref "branche sur laquelle on souhaite fusionner le travail, généralement, il s'agit de main ou master"
<br>
Comme vous pouvez le constater, la branche courante sur laquelle nous sommes positionnés n'a pas à être indiquée, elle sera reconnue automatiquement.
<br>
Si vous souhaitez utiliser une description formatée en Markdown, comme nous l'avons fait pour le ticket plus haut, vous devrez juste utiliser l'option --body-file "Chemin relatif ou absolu vers le fichier md comportant votre description", à la place de l'option "--body".
<br>
Pour connaître toutes les options de la commande ["gh pr create", c'est par ici.](https://cli.github.com/manual/gh_pr_create)
<br>
Voilà donc pour le moment, ce que je puis vous dire concernant GitHub-CLI, je l'utilise personnellement pour publier les mises à jour de mes extensions NVDA via la commande "gh workflow" que je vous décrirais dans un prochain post.
<br>
Cordialement,    
Abdel.    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---