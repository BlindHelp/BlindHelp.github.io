---
title: Utiliser AppVeyor pour gérer les add-on NVDA
permalink: "/AppVeyor/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 10 Janvier 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un post dédié au service AppVeyor pour gérer les add-on NVDA Fait à la base par @ abdel792 et autres contributeurs (en anglais),  et je viens de le traduire au vol en français, et je le partage avec vous tous, et vous le trouverez ci-dessous.    
Je vous souhaite une bonne lecture.    



# Utiliser AppVeyor pour gérer les add-on NVDA

## Procédure pour construire et attacher des fichiers nvda-addon aux versions sur GitHub

Cela peut être utilisé pour automatiser la construction d'extensions NVDA (fichiers binaires avec l'extension .nvda-addon), qui seront téléchargés depuis Appveyor vers GitHub et attachés à la version créée.

Cela fonctionne pour les add-ons basés sur le [modèle (template) de add-on](https://github.com/nvdaaddons/addontemplate).

### Configuration d'AppVeyor pour les add-ons

1. Obtenez le code d'un add-on.
<br>
Exemple:    
``git clone https://github.com/username/repo``
<br>
``git pull``
<br>
2. Dans la racine du dossier de l'extension (où le fichier sconstruct est placé), collez ce [fichier de configuration AppVeyor](https://gist.github.com/nvdaes/a486e45b98566d530688f6da9ce75f84/raw/d05b620185a58327b39da1215cf3c13c01249031/appveyor.yml) (appveyor.yml).
<br>
3. Si vous ne le possédez pas, [créez un jeton (token) d'accès à l'API personnelle](https://github.com/settings/tokens) et [cryptez-le](https://ci.appveyor.com/tools/encrypt).
<br>
4. Dans le fichier appveyor.yml, remplacez la valeur fournie pour la clé sécurisée par votre jeton (token) crypté. Par exemple, au lieu de:     
<br>
``  auth_token:``    
``     secure: 3yxF2EQ/wfLKNEobcRfdNL6srjXjoMdRa/LSQ7z2PJNqOL3IEyiFtlnxxHeIQskH``    
<br>
``auth_token:``    
``    secure: votreEncryptedToken``    
<br>
Maintenant, vous pouvez coller votre fichier appveyor.yml dans n’importe quel add-on publié sur votre compte GitHub.
<br>
5. [Connectez-vous (Sign in) avec AppVeyor](https://www.appveyor.com/).
<br>
6. Dans AppVeyor, sélectionnez New Project (Nouveau projet). (Si nécessaire, choisissez GitHub et autorisez-le).
<br>
7. Localisez le nom du référentiel (dépôt) qui vous intéresse, déplacez la souris dessus (par exemple, en appuyant sur NVDA + numpadDivide ou NVDA + shift + m) et activez le lien "Add" ci-dessous.

### Libération

Pour publier une nouvelle version d'un add-on, vous pouvez créer un tag et le transmettre à GitHub:

Exemple
<br>
```git tag 1.0```
<br>
```git push origin 1.0```
<br>

Maintenant, la version sera créée et le binary-1.0.nvda-addon sera attaché sur GitHub.

En bonus, Abdel a créé un [fichier appveyorPourFTP.yml](https://gist.githubusercontent.com/nvdaes/a486e45b98566d530688f6da9ce75f84/raw/46236e04b02de117f9edbb30aaf626692116b6c3/appveyorForFTP.yml) pour libérer


## Procédure pour recevoir des notifications sur les commits

Pour les notifications sur les événements Push (recommandé pour la révision des add-ons), veuillez consulter ce wiki (en anglais):    
[https://github.com/nvdaaddons/nvdaaddons.github.io/wiki/githubWebhooks](https://github.com/nvdaaddons/nvdaaddons.github.io/wiki/githubWebhooks)

Quoi qu'il en soit, si vous souhaitez utiliser AppVeyor:

1. Créez une adresse email pour recevoir les notifications. Par exemple, vous pouvez utiliser [l'intégration de messagerie groups.io](https://groups.io/static/features).
<br>
2. Dans le fichier appveyor.yml, ajoutez ces lignes:
<br>
```notifications:```
<br>
```- provider:```
<br>
```Email to:```
<br>
```- notificationsEmailAddress.example.com```
<br>
Remplacez notificationsEmailAddress.example.com par une adresse électronique valide.
<br>
Voici un [sujet dans la liste de diffusion groups.io (en anglais) comme exemple réel](https://nvdaes.groups.io/g/NVDAADDONSCOMMITS/topic/build_completed/27377767).

## Références (en anglais)

- [Appveyor.yml reference](https://www.appveyor.com/docs/appveyor-yml/)
- [Publishing artifacts to GitHub Releases ```|``` AppVeyor](https://www.appveyor.com/docs/deployment/github/#configuring-in-appveyoryml)
- [Syntax of the release name value in the deploy section of the appveyor.yml configuration file](http://help.appveyor.com/discussions/questions/9221-syntax-of-the-release-name-value-in-the-deploy-section-of-the-appveyoryml-configuration-file)
- [mesa/appveyor.yml at master · anholt/mesa](https://github.com/anholt/mesa/blob/master/appveyor.yml)
- [Discussion on the NVDA add-ons mailing list](https://nvda-addons.groups.io/g/nvda-addons/topic/6220467)
- [Updates for appveyor by Abdel on the NVDA add-ons mailing list](https://nvda-addons.groups.io/g/nvda-addons/topic/31686195#7943)

## Remerciements

Merci à @ abdel792, @derekriemer et @tuukao pour avoir rendu cela possible.

---

# Récapitulatif des instructions a tout fin utile #

1. Inscrivez-vous sur  Appveyor. Confirmer l'E-Mail de vérification , sinon de nouveaux projets ne peuvent pas être enregistrés.
<br>
Une fois fait, Connectez-vous à votre compte en utilisant cette URL:
<br>
[https://ci.appveyor.com/login](https://ci.appveyor.com/login)
<br>
2. Créez un jeton (token) avec les autorisations suivantes. notifications, public_repo, repo:status, repo_deployment
<br>
[https://github.com/settings/tokens](https://github.com/settings/tokens)
<br>
3. Chiffrer le jeton (token) généré.
<br>
[https://ci.appveyor.com/tools/encrypt](https://ci.appveyor.com/tools/encrypt)
<br>
4. Placez la clé cryptée dans le fichier appveyor.yml.
<br>
```auth_token:```
<br>
```    secure: yourEncryptedToken```
<br>
5. Créez un nouveau projet sur Appveyor.
<br>
[https://ci.appveyor.com/projects/new](https://ci.appveyor.com/projects/new)
<br>
5.1. Sur le titre cloud, sélectionnez  github. Activer le bouton:
<br>
```autorize github.```
<br>
5.2. Sur l'écran GitHub qui s'ouvre, accorder les autorisations demandées.
<br>
6. Sélectionnez le projet, vous devez mettre la souris sur le titre du projet pour afficher le bouton Add. Nous activons le bouton Add.
<br>

Envoyer une mise à jour. Une fois que les commits nécessaires ont été  fait, utilisez les commandes: git tag, git push origin.
<br>
Par exemple:
<br>
```git tag 1.0```
<br>
```git push origin 1.0```
<br>

---

Voilà,    
Je vous souhaite une bonne utilisation de AppVeyor afin de bien gérer les add-on NVDA :)    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---