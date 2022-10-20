---
title: Markdown avec VS Code
permalink: "/Markdown-avec-VS-Code/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 15 Octobre 2022 - Dernière mise à jour le Mardi 18 Octobre 2022</footer>

Coucou mes amis du blog de BlindHelp !

Aujourd'hui, je vous présente un programme appelé VS Code (Visual Studio Code) afin d'éditez vos premières lignes de code avec vos langages préférés !

Vous pouvez même utiliser le langage appelé  Markdown avec VS Code grâce à ses différentes extensions dédiées. Vous trouverez ci-dessous les liens liés à ces extensions listées en bric-à-brac pour le langage Markdown. Merci.

À savoir que les extensions sont très importantes dans VS Code !

Vous pouvez aussi utiliser Git avec VS Code, si vous êtes un développeur ou un contributeur dans un projet sur GitHub !

Comme vous le savez, le système de contrôle de version Git est extrêmement important dans le monde du développement, que ce soit au niveau individuel, au niveau d'une équipe, ou même au niveau d'une entreprise. VS Code intègre donc tous les outils nécessaires à son utilisation.

Vous pouvez même y lier votre compte GitHub !

Également il y a une extension très populaire nommée GitLens qui rajoute un accès facile à de nombreuses fonctionnalités de Git et GitHub.

Cependant, les fonctionnalités de Git ni l'utilisation de Git avec VS Code ne sont pas expliquées dans ce post !

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du programme VS Code ni de l'extension téléchargé pour VS Code ni des informations ce trouvant sur la documentation dédié et l'utilisation de l'extension téléchargé est à vos risques et périls. ☠  

Tout au long de ce post, je mentionnerai parfois VS Code au lieu de Visual Studio Code pour le rendre plus court, mais c'est la même chose.

Mais tout d'abord vous trouverez ci-dessous un peu d'histoire introductive sur Visual Studio Code avant de plonger dans le vif du sujet.

# Introduction

Visual Studio Code est l'éditeur de code de référence des développeurs. Il est gratuit, de source ouverte et disponible pour Windows, Linux et macOS. Cet éditeur dispose d'extensions faciles à installer pour la coloration syntaxique, la complétion de code, etc.

Par exemple, nous pouvons programmer en langage C, java, Python, Javascript, Typescript, web, Vue, React, Flutter, Go,  et un grand etc...

Si vous souhaitez utiliser un langage vous devez installer une extension qui fournit une prise en charge du langage dont vous avez besoin. Par exemple, si vous vouliez utiliser Python, vous devez installer des extensions Python et Pylance. Si vous vouliez réaliser des projets en Vue (framework UI pour Web), vous devez installer une extension appelée Volar, et ainsi de suite...

Vous pouvez parcourir toutes les extensions disponibles sur <https://marketplace.visualstudio.com>

# Installer Visual Studio Code

Procédez comme suit pour installer Visual Studio Code :

1. Dans un navigateur Web, accédez à la page officielle (en anglais) [code.visualstudio.com.](https://code.visualstudio.com/)
2. Téléchargez la version de votre système d'exploitation, prend en charge Windows, Linux et macOS.
3. Une fois téléchargé, exécutez le programme d'installation. Cela ne prendra qu'une minute.

# Configuration de Visual Studio Code

Lorsque vous ouvrez Visual Studio Code pour la première fois il posera des questions. Par exemple, si lui détecte que vous utilisez un lecteur d'écran ou non.

Si vous utilisez un lecteur d'écran, il vous sera demander la confirmation par "Yes" ou "No". Visual Studio  Code n'aime pas faire des erreurs, car certaines choses changent, que vous utilisiez ou non un lecteur d'écran.

Quelque chose que nous devons comprendre depuis le début est que Visual Studio Code est complètement une interface Web. Bien que vous le voyiez comme une application de bureau, il est basé sur Electron/Chromium. Cela signifie qu'il partage beaucoup de choses avec le navigateur Chrome, comme le moteur de rendu.

Il y a un petit inconvénient lors de l'utilisation des lecteurs d'écran dans des applications d'interface Web telles que VS Code. Les lecteurs d'écran utilisent leurs propres touches de navigation rapide pour naviguer sur le Web et parfois si nous ne le découvrons pas, nous pourrions constater que nous regardons une page Web dans VS Code. Ce n'est pas le cas. Ce qui se passe, c'est que 95% du temps, nous devrons utiliser le mode formulaire de NVDA, de sorte que NVDA laisse tout le contrôle à VS Code.

N'oubliez pas d'utiliser les commandes de clavier suivantes :    
`NVDA+espace`    
Basculer entre le mode navigation et le mode formulaire. En mode formulaire, les touches sont passées directement à l'application, vous permettant d'interagir avec elle. En mode navigation, vous pouvez naviguer dans le document avec le curseur, les touches de navigation rapide, etc.

Bien que par défaut, NVDA devrait être en mesure de reconnaître qu'il est confronté à une application Web et activera automatiquement le mode formulaire.

Avec le mode formulaire activé, vous pouvez voir VS Code comme n'importe quelle application. Alt pour accéder aux menus, et une énorme quantité de commandes rapides que vous apprendrez en chemin.

À savoir que rarement, NVDA perd le focus et ne détecte pas s'il est dans un contenu Web de VS Code. Ensuite, nous ne pouvons pas alterner entre le mode formulaire et le mode navigation. Il suffit généralement d'appuyer une fois sur Tab et tout revient à la normale. Mais dans le pire des cas, il change de fenêtre (par exemple, l'ouverture du menu Démarrer) et revient à VS Code. Cela ne prendra pas plus d'une seconde. Ce n'est pas quelque chose qui se produit immédiatement, mais je vous le commente pour que vous le preniez en compte et que vous ne vous effrayez pas si cela vous arrive.

Avant de plonger dans les fonctionnalités de Visual Studio Code, commençons par une configuration de base.

Lorsque vous ouvrez VS Code pour la première fois, vous ne pourrez pas faire grand-chose, car VS Code aime bien que vous lui indiquez un dossier de travail. Nous pouvons ouvrir un dossier avec la commande "Ctrl+K Ctrl+O", ou recherchez l'option dans le menu File.

Remarque: je dois mentionner que VS Code est en anglais, mais nous pouvons le mettre en français, pour cela, vous devez installer une extension pour l'avoir dans cette langue mais je laisse cela à votre critère. À des fins pratiques, lorsque je me réfère à une option dans VS Code, je le ferai en anglais, je suppose que la plupart des utilisateurs l'utiliseraient en anglais car c'est la langue prédéterminée lors de l'ouverture du programme. De plus, si vous avez des inconvénients et regardez sur le Web, probablement les références que vous trouvez seront en anglais, et il n'est pas toujours facile de les relier à ce que vous voyez dans l'interface en français.

Vous pouvez également obtenir le module linguistique français pour VS Code - L’extension officielle de Microsoft pour traduire l’interface de VS Code en français, en cliquant à partir du lien ci-après. Merci.

# Configuration de l'environnement de travail dans Visual Studio Code

Une autre façon d'utiliser VS Code pour un projet est via un fichier d'extension ".code-workspace". Étant donné que lorsque vous devez revenir au projet, il suffira d'ouvrir l'explorateur de fichiers de votre système, de rechercher le projet et d'ouvrir le fichier. Ceci est utile lorsque vous avez de nombreux projets différents, avec différentes configurations.

Suivez ces étapes pour créer le fichier d'extension ".code-workspace":

* Dans le menu "File", vous recherchez l'option "Save Workspace As..."
* Choisissez le dossier dans lequel vous souhaitez enregistrer le fichier. Si vous créez un nouveau projet, je vous recommande de l'enregistrer dans le dossier de votre projet, peu importe si celui-ci est vide.
* Ajoutez le dossier à votre espace nouvellement créé. Utilisez l'option "Add Folder to Workspace...". Peu importe que ce soit le même dossier dans lequel vous avez enregistré le fichier.

Vous pouvez également avoir des fichiers ".code-workspace" comme modèle, donc pour cela vous copiez le modèle, vous créer un projet vide pour le projet et vous collez le modèle dans ce dossier.

Vous pouvez avoir des modèles pour les différents types de projets. Par exemple, un modèle pour Python, un autre pour les projets JavaScript, un autre pour Java... Au fur et à mesure que vous effectuez des configurations de vos préférences.

Pour toutes les autres options de configuration de VS Code, vous avez le bouton "Manage" en bas à gauche, à partir duquel vous pouvez ouvrir les "Settings".

Une fois que vous avez cliqué sur le bouton "Manage" si vous êtes programmeur n'hésitez pas à explorer les différents paramètres !

Vous pouvez maintenant fermer l'onglet "Settings". Comme vous pouvez le constater, on ne revient pas par défaut sur l'onglet d'accueil de VS Code. Pour revenir à l'accueil, allez dans le menu "Help", puis cliquez sur "Get Started".

Une fois ouvert l'onglet d'accueil l'élément s'intitulera :    
`Get Started - Visual Studio Code`    

Au démarrage de VS Code l'onglet contient une case à cocher nommée :    
`hors de liste case à cocher coché When checked, this page will be shown on startup.`    
`Show welcome page on startup`    

Vous trouverez cette case à cocher, à la fin de l'élément nommé "hors de liste"

Celle-ci est cochée par défaut, donc, l'onglet d'accueil s'affichera au démarrage de VS Code.

Appuyez sur la barre d'espace pour décocher cette case à cocher.

Une fois fait cela, cette case à cocher aura l'état :    
`hors de liste case à cocher non coché When checked, this page will be shown on startup.`    
`Show welcome page on startup`    

Si elle est non cochée, donc, l'onglet d'accueil ne s'affichera pas au prochain démarrage de VS Code.

Après c'est une affaire de gout !

Comme vous le savez, je ne suis pas programmeur et c'est pourquoi je ne pourrai pas vous expliquer les divers configurations à faire dans VS Code ni la façon de faire  des templates (modèles) à utiliser dans les différents langages  sous VS Code.

Je pense que ces templates (modèles) nous pouvons les trouver sur le Web, Probablement dans les sites où ils enseignent des cours de programmation.

Je découvre VS Code en même temps que vous, car je voulais savoir comment l'utiliser pour effectuer des documents avec le langage Markdown. Consultez la section ci-après pour plus d'informations sur ce sujet. Merci.

# Explorer vos fichiers de projet

VS Code a son propre explorateur de fichiers. Pour naviguer vers lui, utilisez le raccourci clavier "Control+Shift+E". Si vous appuyez à nouveau et que vous modifiez un fichier, vous reviendrez là où vous étiez. Vous pouvez également utiliser la commande "Control+0" (du clavier alphanumérique) pour ouvrir l'explorateur.

L'explorateur de fichiers est un widget en forme d'arborescence. Vous pouvez appuyer sur "Entrée" sur n'importe quel fichier pour l'ouvrir, ou pressez la touche "Applications" pour exécuter des actions dessus ou créer un nouveau fichier. Vous pouvez également copier et déplacer des fichiers, comment vous le feriez typiquement dans un explorateur de fichiers.

En tout cas, l'explorateur de fichiers intégré à VS Code vous permettra de vous organiser et de naviguer facilement à l'intérieur de votre projet.

Si vous utilisez la commande "Control+Shift+E" pour ouvrir l'explorateur, le curseur par défaut est toujours positionné sur le fichier que vous modifiez. C'est quelque chose à prendre en compte si nous analysons rapidement de nombreux fichiers. Par exemple, si vous avez le fichier "test.py" ouvert et que vous allez à l'explorateur, ouvrez le fichier "Hello.js", puis fermez-le, lorsque vous revenez à l'explorateur, le focus sera toujours dans "test.py" Parce que c'est le fichier qui est le fichier qu'il était ouvert.

Si vous souhaitez ouvrir un fichier rapidement et vous connaissez le nom, vous pouvez utiliser la commande "Control+P". Il vous affichera une liste de fichiers avec un filtre pour atteindre simplement dont vous avez besoin. C'est le moyen le plus simple de naviguer entre les fichiers que nous connaissons déjà leurs noms.

Alternativement, vous pouvez appuyer sur "Control+Tab" et vous verrez les fichiers que vous avez ouverts récemment. Gardez la touche "Control" enfoncée jusqu'à ce que vous décidiez du fichier auquel vous souhaitez aller. C'est comme lorsque vous appuyez sur "Alt+Tab" pour changer entre les fenêtres de Windows. Lorsque vous travaillez sur un projet, vous êtes le plus susceptible de sauter fréquemment parmi certains fichiers spécifiques, VS Code reconnaîtra cela et les mettra toujours à porter de main avec "Control+Tab".

# Découvrez l'éditeur de code

VS Code a plusieurs éditeurs de code, mais tous fonctionnent de manière similaire. Vous ne remarquerez probablement pas la différence, ils sont associés au type de fichier que vous utilisez.

L'extension d'un fichier nous spécifie son type, et ce qu'on pourra y trouver. C'est ce qui se trouve après le dernier point dans un nom de fichier ; par exemple, index.html, blog.js, styles.css...

Il y a des choses fondamentales que la grande majorité partagent. De plus, vous pouvez avoir plusieurs éditeurs ouverts en même temps même pour le même fichier !

Vous pouvez défaire les modifications avec "Control+Z" puis les refaire avec "Control+Shift+Z". Même si vous fermez le fichier et le rouvrez, vous aurez la montagne  de modifications apportées. L'enregistrement des modifications pour chaque fichier sera perdu lors du redémarrage de VS Code.

Pour enregistrer un fichier, cliquez simplement sur "Control+S".

# Saisie automatique de caractères

Lors de l'écriture de texte, VS Code fera automatiquement certaines choses pour vous. Vous pouvez le vouloir ou non, personnellement je le laisse en automatique.

Vs Code pourrait écrire automatiquement des choses comme :

* La fermeture d'une parenthèse, d'un crochet, d'une accolade que vous venez d'ouvrir.
* Retrait automatique lorsque vous démarrez un bloc de code.
* La fermeture automatique des différents types de guillemets.

Parfois, ces choses nous amènent à faire des erreurs de syntaxe si nous ne faisons pas attention. Par exemple, un guillemet supplémentaire, un bloc avec plus d'un symbole de fermeture, etc. Cela m'est beaucoup arrivé au début. Mais lorsque vous vous y habituez, vous vous rendez compte qu'il est plus efficace d'écrire du code si l'éditeur fait des choses pour vous.

# Saisie automatique de code

Par défaut, la saisie automatique de code est actif dans VS Code. Et c'est généralement très bien. Chaque fois que vous tapez quelque chose, VS Code vous donnera des suggestions que vous pouvez accepter ou ignorer. Plus il y a de lettres tapés, plus la quantité d'options disponibles est faible. Vous pouvez vous déplacer avec les flèches pour sélectionner l'option qui vous intéresse, ou vous pouvez continuer à taper normalement.

Parfois (lorsque vous appelez une fonction par exemple) VS Code vous donnera des indications sur l'utilisation d'un paramètre.

La saisie automatique est sensible au contexte dans nombreux langages, alors soyez très prudent !

Si pour une raison quelconque, vous n'obtenez pas la saisie automatique, vous pouvez l'ouvrir avec "Control+Space".

Certaines personnes préfèrent désactiver la saisie automatique et l'ouvrir manuellement, lorsque vous l'essayez, vous pouvez décider ce qui vous convient le mieux. Dans mon cas, je préfère qu'il s'ouvre automatiquement. Plusieurs fois, je ne fais pas attention, comme au moment de la rédaction de ce document.

Remarque: VS Code a une prise en charge native pour les fichiers Markdown. Utile pour écrire les Guides de l'utilisateur de NVDA ou les différents manuels pour les extensions dudit lecteur d'écran par exemple.

Voici plus bas le lien pour une documentation en anglais pour l'édition de Markdown avec Visual Studio Code :    
[Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)

Il est également utile de désactiver le mode formulaire lors de la prévisualisation d'un fichier Markdown.

# Prenez en main la palette de commandes

La palette de commandes est une fonctionnalité dont vous ne pourrez plus vous passer ! Elle vous sera d'une grande aide pour travailler plus efficacement sur VS Code.

Dans VS Code, il existe un raccourci qui vous permet de trouver toutes les commandes possibles et imaginables en tapant leur nom. Ça veut dire que vous n'avez pas besoin d'apprendre par cœur dans quel menu se trouve une commande, ni son raccourci clavier (même si vous finirez par en apprendre certains !). Tout ça grâce à la palette de commandes, que vous ouvrez avec "Control+Shift+P". Il fonctionne de manière similaire au contrôle des fichiers récents, mais c'est pour les commandes de VS Code. Il vous apparaîtra toutes les commandes disponibles dans VS Code, qui sont nombreuses. Grâce au filtrage puissant, si vous vous souvenez d'un mot clé d'une commande dont vous avez besoin, vous pouvez tapez les lettres et voir si elle fait partie des résultats. Pour vous déplacer pour les résultats, vous le faites avec les flèches. Une fois que vous l'avez trouvé, vous appuyez sur "Entrée" et la commande sera exécutée. Il vous indiquera également la combinaison du raccourci clavier si vous l'avez, et si vous recherchez avec l'objet navigateur de NVDA vous verrez une option pour attribuer ou réaffecter un raccourci clavier.

Voici quelques exemples à partir de la palette de commandes :

Par exemple, imaginons que vous ayez plusieurs éditeurs ouverts, et que vous vouliez tous les fermer pour travailler sur une autre fonctionnalité de votre projet. Ouvrez la palette de commandes et tapez simplement le mot "Close" :

Vous y voyez la commande "Close All Editors", ou "Fermer tous les éditeurs". Vous pouvez y accéder avec les flèches de votre clavier, et appuyer sur "Entrée" pour exécuter la commande.

Notez aussi que la palette de commandes vous montre également le raccourci clavier pour la commande que vous souhaitez exécuter !

Un autre exemple de commande rapide : la création d'un nouveau fichier. Ouvrez la palette de commandes et tapez "New File" :
`New File`    
`Nouveau fichier`    
Cela accomplit la même chose que lorsque vous cliquez sur le bouton dans l'explorateur de fichiers, mais sans utiliser votre souris. Tout geste qui requiert la souris nous ralentit : essayez de garder le plus possible les mains sur le clavier !

La palette de commandes est un peu l'arme secrète de VS Code : elle vous facilitera l'apprentissage de l'outil, et vous permettra d'être plus efficace !

# Extensions de VS Code

Pour personnaliser encore plus votre configuration de VS Code, vous pouvez installer des plugins, ou extensions. Ces plugins viennent rajouter des fonctionnalités ou des outils supplémentaires à votre VS Code.

Comme je l'ai dit ci-dessus, vous pouvez parcourir toutes les extensions disponibles sur <https://marketplace.visualstudio.com>

Comme je l'ai mentionné précédemment, les extensions sont très importantes dans VS Code. Mais comment les installer ?

Eh bien, résumons ce que vous avez fait jusqu'à présent  avec Visual Studio Code :

1. Téléchargez et installez la toute dernière version de Visual Studio Code pour votre système d'exploitation à partir du lien indiqué ci-dessus, si vous ne l'avez pas encore fait !
2. Lancez Visual Studio Code et suivez les instructions de configuration comme indiqué ci-dessus, si vous ne l'avez pas encore fait !
3. Si vous avez fait les étapes précédentes avec Visual Studio Code, maintenant, dans la barre d'outils de gauche, cliquez sur l'icône Extensions et tapez le nom de l'extension souhaitée, mais il vaut mieux expliquer cette partie en profondeur ci-dessous.

Pour le faire, nous ouvrirons le menu View, Extensions. Nous appuyerons sur "Control+Shift+X". Le curseur sera positionné sur un champ de recherche. Si nous faisons Tab, nous pouvons voir deux catégories :

Le champ de recherche est nommé :    
`Search Extensions in Marketplace Autocomplétion`    

* Installed Section développé: Extensions installées.    
`Extensions liste`    
* Recommended Section développé: Extensions recommandées, si vous souhaitez les installer ou non. J'ai plusieurs recommandations mais je n'installe pas quelque chose si je n'en ai pas besoin.    
`Extensions liste`    

Par exemple, si nous allons dans la section Installed et que nous nous faisons une fois de plus Tab, nous verrons une liste des extensions installées. Il est important que celle-ci soit sur "développé"  et non sur "réduit", si elle était sur "réduit", la liste des extensions ne serait pas affichée.

Là, nous pouvons éliminer ou désactiver les extensions, comme s'il s'agissait des extensions pour NVDA. Et comme dans NVDA, je recommande de maintenir le programme VS Code avec le moins d'extensions possibles. Ainsi, notre environnement sera plus léger.

Si nous recherchons une extension spécifique, nous pouvons utiliser le moteur de recherche. Par exemple, supposons que nous en ayons vraiment besoin pour avoir notre interface en français de VS Code, vous tapez  simplement "pack fr" sans les guillemets dans le champ de recherche nommé :    
`Search Extensions in Marketplace Autocomplétion`    

Après avoir tapé votre recherche, nous faisons une fois Tab. VS Code dans ce cas, nous dira ce qui suit :    
`French Language Pack for Visual Studio Code, 1.73.10191015, Publisher Microsoft, Language pack extension for French`    
Je vais donc appuyer sur "Entrée" sur elle.    
À ce stade, il est pratique de désactiver le mode formulaire pour voir ce que fait l'extension. Nous le désactivons et naviguons à travers les en-têtes. Nous obtiendrons beaucoup d'informations, ce qui peut indiquer si l'extension répond ou non à nos attentes. Parfois, il est difficile de le déterminer, dans ces cas, il est préférable d'installer et d'essayer.    
Mais dans notre cas, c'est un module linguistique français pour VS Code et je pense qu'il n'y a pas de problème.    

Ici, vous avez un extrait de la documentation de ladite extension :    


> Utilisation    
> Vous pouvez remplacer la langue d'IU par défaut en définissant explicitement la langue d'affichage de VS Code à l'aide de la commande Configurer la langue d'affichage. Appuyez sur Ctrl+Maj+P pour faire apparaître la Palette de commandes, puis commencez à taper afficher pour filtrer le contenu et afficher la commande Configurer la langue d'affichage. Appuyez sur Entrée pour afficher une liste de langues installées en fonction des paramètres régionaux. Les paramètres régionaux actuels sont en surbrillance. Sélectionnez une autre entrée relative aux paramètres régionaux pour changer de langue d'IU.    


Comme nous avons déjà perdu le focus de l'interface principale lors de la navigation dans le document HTML, la recherche du bouton "Install" peut devenir un peu fastidieuse dans ces cas. Si nous activons le mode formulaire pour rechercher le bouton, nous devrons tabuler plusieurs fois car nous devrons également parcourir les liens du document HTML. Donc, dans ces cas, je recommande l'une des astuces les plus utiles de la navigation Web: la recherche via NVDA.

Appuyez sur "NVDA+Control+F". Ensuite, nous écrivons Install et nous recherchons. C'est dans un widget de barre d'outils, lorsque nous y arrivons, nous pouvons activer le mode formulaire si nous voulions naviguer plus facilement par les boutons disponibles de la barre d'outils.

Nous devrons trouver le nom de l'extension comme :    
`Language pack extension for French`    
Sous le nom de l'extension, vous trouverez le bouton appelé :    
`Install`    

Pour l'instant, nous appuyons uniquement sur le bouton Install. Nous serons informés que l'extension est installée. Certaines extensions doivent redémarrer VS Code, mais la grande majorité ne le fait pas. Bien que je préfère redémarrer VS Code au cas où...

Dès que l'installation sera terminée, un message s'affichera vous signalant la fin de l'installation.

Après avoir installé cette extension, vous devrez  redémarrez VS Code.

Donc, si nous avons installé cette extension, nous devrons cliquer sur le bouton appelé :    
`Restart`    

En cliquant sur ce bouton, si VS Code est déjà en cours d'exécution, il sera redémarré et nous aurons maintenant notre interface dans notre belle langue le français !

Enjoy!    

Vous pouvez également obtenir le module linguistique français pour VS Code - L’extension officielle de Microsoft pour traduire l’interface de VS Code en français, en cliquant à partir du lien ci-dessous :    
[French Language Pack for Visual Studio Code via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-fr)

# Découvrez des extensions VS Code listées en bric-à-brac pour le langage Markdown

Voici quelques suggestions d'extensions VS Code listées en bric-à-brac que vous trouverez peut-être intéressantes pour le langage Markdown :

[Markdown All in One via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) : Tout ce dont vous avez besoin pour écrire en Markdown (raccourcis clavier, table des matières, aperçu automatique et plus).

[Markdown Preview Enhanced via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) : Vue Aperçu.

[Markdown PDF via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf) : Conversion au format PDF.

[markdownlint via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) : Vérification syntaxique.

[Markdown Shortcuts via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts) : Des raccourcis pratiques.

[Markdown Extended via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended) : Export dans différents formats (HTML, PDF, PNG et JPEG).

[Excel to Markdown table via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=csholmq.excel-to-markdown-table) : Copier/coller de données Excel.

[CSV to Markdown Table Converter via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Marchiore.csvtomarkdown) : Copier/coller de données CSV.

[Markdown Preview Mermaid Support via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) : Prise en charge des diagrammes et organigrammes. [Voir le projet Mermaid sur GitHub](https://mermaid-js.github.io/mermaid/#/)

[PlantUML via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) : Prise en charge des diagrammes UML (et d'autres). [Voir le projet PlantUML sur GitHub](https://github.com/plantuml)

[Graphviz Markdown Preview via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=geeklearningio.graphviz-markdown-preview) : Création de graphiques avec Graphviz.

# Découvrez plus d'extensions VS Code listées en bric-à-brac

Voici quelques suggestions d'extensions VS Code listées en bric-à-brac que vous trouverez peut-être intéressantes :

[GitLens via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) : Rajoute un accès facile à de nombreuses fonctionnalités de Git et GitHub.

[Pylance via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) : Un serveur de langue riche en fonctionnalités pour Python dans VS Code.

[Volar via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Vue.volar) : Réaliser des projets en Vue (framework UI pour Web) ⚡ Extension de support rapide  du langage Vue.

[vscode-pandoc via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DougFinke.vscode-pandoc) : Pour convertir dans beaucoup d'autres formats.

[Search Hero via Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Wscats.search) : Tous les développeurs font des recherches sur Internet pour trouver des réponses, donc Search Hero intègre directement la recherche et la traduction multimoteur.

Vous pouvez bien sûr trouver toutes les extensions disponibles sur [Visual Studio Marketplace](https://marketplace.visualstudio.com/vscode)

J'espère que vous l'apprécierez et que ceci  soit très utile pour vous!    
À la prochaine sur un autre post!     
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
