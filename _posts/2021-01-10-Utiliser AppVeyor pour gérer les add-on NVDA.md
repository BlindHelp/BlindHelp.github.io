---
title: Utiliser AppVeyor pour gérer les add-on NVDA
permalink: "/AppVeyor/"
layout: post
author: BlindHelp
---

<footer>Publié le Dimanche 10 Janvier 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Voici un post Dédié au service AppVeyor pour gérer les add-on NVDA fait en principe par @ abdel792 en anglais,  et je viens de le traduire au vol en français, et je le partage avec vous tous, et vous le trouverez ci-dessous.    
Je vous souhaite une bonne lecture.    



# Utiliser AppVeyor pour gérer les add-on NVDA

## Procédure pour construire et attacher des fichiers nvda-addon aux versions sur GitHub

Cela peut être utilisé pour automatiser la construction de compléments NVDA (fichiers binaires avec l'extension .nvda-addon), qui seront téléchargés depuis Appveyor vers GitHub et attachés à la version créée.

Cela fonctionne pour les add-ons basés sur le [modèle de add-on](https://github.com/nvdaaddons/addontemplate).

### Configuration d'AppVeyor pour les add-ons

1. Obtenez le code d'un add-on.

Exemple:

```
git clone https://github.com/username/repo

git pull
```
2. Dans la racine du dossier du module complémentaire (où le fichier sconstruct est placé), collez ce [fichier de configuration AppVeyor](https://gist.github.com/nvdaes/a486e45b98566d530688f6da9ce75f84/raw/d05b620185a58327b39da1215cf3c13c01249031/appveyor.yml) (appveyor.yml).

3. Si vous ne le possédez pas, [créez un jeton d'accès à l'API personnelle](https://github.com/settings/tokens) et [cryptez-le](https://ci.appveyor.com/tools/encrypt).

4. Dans le fichier appveyor.yml, remplacez la valeur fournie pour la clé sécurisée par votre jeton crypté. Par exemple, au lieu de

```
  auth_token:
     secure: 3yxF2EQ/wfLKNEobcRfdNL6srjXjoMdRa/LSQ7z2PJNqOL3IEyiFtlnxxHeIQskH

```

```
auth_token:
    secure: votreEncryptedToken
```

Maintenant, vous pouvez coller votre fichier appveyor.yml dans n’importe quel add-on publié sur votre compte GitHub.

5. [Connectez-vous (Sign in) avec AppVeyor](https://www.appveyor.com/).

6. Dans AppVeyor, sélectionnez New Project (Nouveau projet). (Si nécessaire, choisissez GitHub et autorisez-le).

7. Localisez le nom du référentiel qui vous intéresse, déplacez la souris dessus (par exemple, en appuyant sur NVDA + numpadDivide ou NVDA + shift + m) et activez le lien "Ajouter" ci-dessous.

### Libération

Pour publier une nouvelle version d'un add-on, vous pouvez créer un tag et le transmettre à GitHub:

Exemple

```
git tag 1.0

git push origin 1.0
```

Maintenant, la version sera créée et binary-1.0.nvda-addon sera attaché sur GitHub.

En bonus, Abdel a créé un [fichier appveyorPourFTP.yml](https://gist.githubusercontent.com/nvdaes/a486e45b98566d530688f6da9ce75f84/raw/46236e04b02de117f9edbb30aaf626692116b6c3/appveyorForFTP.yml) for releasing 


## Procédure pour recevoir des notifications sur les commits

Pour les notifications sur les événements Push (recommandé pour la révision des add-ons), veuillez consulter:
https://github.com/nvdaaddons/nvdaaddons.github.io/wiki/githubWebhooks

Quoi qu'il en soit, si vous souhaitez utiliser AppVeyor:

1. Créez une adresse email pour recevoir les notifications. Par exemple, vous pouvez utiliser [l’intégration de messagerie groups.io] (https://groups.io/static/features).

2. Dans le fichier appveyor.yml, ajoutez ces lignes:

`` `

notifications:
  - fournisseur: Email
    à:
      - notificationsEmailAddress.example.com

`` `

Remplacez notificationsEmailAddress.example.com par une adresse électronique valide.

Voici un [sujet dans la liste de diffusion groups.io comme exemple réel] (https://nvdaes.groups.io/g/NVDAADDONSCOMMITS/topic/build_completed/27377767).

## Références

- [Référence Appveyor.yml] (https://www.appveyor.com/docs/appveyor-yml/)
- [Publier des artefacts dans les versions de GitHub | AppVeyor] (https://www.appveyor.com/docs/deployment/github/#configuring-in-appveyoryml)
- [Syntaxe de la valeur du nom de version dans la section deploy du fichier de configuration appveyor.yml] (http://help.appveyor.com/discussions/questions/9221-syntax-of-the-release-name-value-in -la-deploy-section-of-the-appveyoryml-configuration-file)
- [mesa / appveyor.yml à master · anholt / mesa] (https://github.com/anholt/mesa/blob/master/appveyor.yml)
- [Discussion sur la liste de diffusion des add-ons NVDA] (https://nvda-addons.groups.io/g/nvda-addons/topic/6220467)
- [Mises à jour pour l'appveyor d'Abdel sur la liste de diffusion des add-ons de NVDA] (https://nvda-addons.groups.io/g/nvda-addons/topic/31686195#7943)

## Remerciements

Merci à @ abdel792, @derekriemer et @tuukao pour avoir rendu cela possible.

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