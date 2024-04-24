---
title: Outil Python pour compiler des Tables des Matières avec liens hypertextes en Markdown par Adrian Bonnet 🇫🇷
permalink: "/Markdown-Table-of-Contents/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 13 Avril 2024</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd\'hui, je vous apporte un outil Python pour compiler des Tables des Matières avec liens hypertextes en Markdown par Adrian Bonnet. 🇫🇷    

Ci-dessous je colle les informations trouvées sur cet outil réalisées par son auteur.

Merci à lui, donc ! (bow)

A la fin du post vous trouverez mes conclusions et tests dudit outil.

# Markdown-Table-of-Contents
Outil Python pour compiler des Tables des Matières avec liens hypertextes en Markdown (GitHub-Flavoured-Markdown)

![](https://img.shields.io/badge/status-In_Progress-green) ![](https://img.shields.io/github/license/Relex12/Markdown-Table-of-Contents) ![](https://img.shields.io/github/repo-size/Relex12/Markdown-Table-of-Contents) ![](https://img.shields.io/github/languages/top/Relex12/Markdown-Table-of-Contents) ![](https://img.shields.io/github/last-commit/Relex12/Markdown-Table-of-Contents) ![](https://img.shields.io/github/stars/Relex12/Markdown-Table-of-Contents)



Regarder sur GitHub:

[![Markdown-Table-of-Contents](https://github-readme-stats.vercel.app/api/pin/?username=Relex12&repo=Markdown-Table-of-Contents)](https://github.com/Relex12/Markdown-Table-of-Contents)

[Voir en Anglais.](https://relex12.github.io/Markdown-Table-of-Contents)

---

## Sommaire

* [Markdown-Table-of-Contents](#markdown-table-of-contents)
    * [Sommaire](#sommaire)
    * [Qu\'est-ce que c\'est ?](#quest-ce-que-cest-)
    * [Comment ça marche ?](#comment-ça-marche-)
    * [Comment l\'utiliser ?](#comment-lutiliser-)
    * [Arguments pour la ligne de commande](#arguments-pour-la-ligne-de-commande)
    * [Spécifications](#spécifications)
    * [Fonctionnalités manquantes](#fonctionnalités-manquantes)
    * [Licence](#licence)

<!-- table of contents created by Adrian Bonnet, see https://Relex12.github.io/Markdown-Table-of-Contents for more -->

## Qu\'est-ce que c\'est ?

**N\'avez-vous jamais été frustré de ne pas pouvoir créer de table des matières dynamiques en Markdown ?**

C\'est à ça que sert cet outil. En **une seule commande**, vous pouvez créer une **table des matières avec liens hypertextes** directement dans votre fichier Markdown.

## Comment ça marche ?

Dans votre fichier Markdown, ajoutez une **balise table des matières** (ou balise TOC) là où vous voulez créer la table des matières, puis exécutez Markdown-Table-of-Contents sur votre fichier. La ligne contenant la balise TOC sera supprimée et à la place sera insérée la table des matières avec liens hypertextes générée.

Une **balise TOC** est une chaîne de caractère `toc`, tout en majuscules ou tout en minuscules, entourée d\'une simple ou d\'une double paire de crochets, ce qui signifie que seuls `[TOC]`, `[[TOC]]`, `[toc]` et `[[toc]]` sont des balises TOC valides.

Cette méthode est déjà utilisée par de nombreux éditeurs Markdown (Typora, Markdown Monster) et outils (doctoc), mais ceci est le premier outil de ligne de commande léger en Python simple d\'utilisation à ajouter cette fonctionnalité à Github-Flavored-Markdown.

## Comment l\'utiliser ?

En deux étapes :

1. installez Markdown-Table-of-Contents en clonant le dépôt : `git clone https://github.com/Relex12/Markdown-Table-of-Contents.git`
2. lancez le script sur votre fichier Markdown : `python3 toc.py FileName.md` (les chemins vers `toc.py` et votre fichier peuvent être en relatif ou absolu)

## Arguments pour la ligne de commande

Voici le résultat de la commande `python toc.py -h`:

```
usage: toc.py [-h] [-o OUTPUT] [--depth {1,2,3,4,5,6}] [--ignore-begin]
              FileName

positional arguments:
  FileName              input Markdown file

optional arguments:
  -h, --help            show this help message and exit
  -o OUTPUT, --output OUTPUT
                        output file to write in, default overwrites FileName
  --depth {1,2,3,4,5,6}
                        maximum heading depth, default is 6
  --ignore-begin        ignore headings before the TOC tag
```

## Spécifications

La ligne qui contient la balise TOC **DOIT** commencer par `[TOC]`, `[[TOC]]`, `[toc]` ou `[[toc]]`, ce qui veut dire qu\'il **NE DOIT PAS** y avoir d\'espace blanc entre la précédente fin de ligne et le premier crochet `[`.

La ligne qui contient la balise TOC sera retirée en entier, ce qui veut dire que tout caractère entre le dernier crochet`]` et la fin de ligne sera supprimé en même temps que la balise TOC.

La balise TOC **DOIT** être l\'un de ceux-ci : `[TOC]`, `[[TOC]]`, `[toc]` or `[[toc]]`. Même si `[TOC]]` et `[toc]]` **POURRAIENT** marcher, ils **NE DEVRAIENT PAS** être utilisés.

S\'il y a plus d'une ligne contenant une balise TOC dans tout le fichier, seule la première sera remplacée par la table des matières générée. Toutes les autres balises TOC seront ignorées, ce qui veut dire qu\'elles seront toujours dans le fichier après exécution. Si vous souhaitez remplacer chaque balise TOC, vous **DEVRIEZ** exécuter le script plusieurs fois.

Pour être interprétée comme un titre, une ligne contenant un titre **DOIT** possède un espace blanc (au minimum un caractère espace) entre les dièses `#` et le libellé du titre. Cependant, vous **NE DEVRIEZ PAS** utiliser plus qu\'un seul caractère espace, car tous les caractères entre le premier espace blanc et la fin de ligne (exclus) sont utilisés comme libellé et valeur du lien hypertexte (sans compter les modifications).

Le libellé du titre est modifié dans la valeur du lien hypertexte pour être correctement interprété comme une URL de lien vers un paragraphe : les caractères espaces sont remplacés par des tirets `-`, les points d\'interrogation `?` et les points d\'exclamations `!` sont supprimés sans être remplacés. Vous **NE DEVRIEZ PAS** utiliser d\'autres espaces blancs que les caractères espaces (telles que les tabulations) dans les lignes contenant un titre. Certains caractères spéciaux tels que les dièses `#`, les esperluettes `&` et d\'autres **POURRAIENT** causer des comportements inattendus, notamment une fois uploadé sur GitHub. Les espaces blancs (caractères espace compris) juste avant la fin de ligne **POURRAIENT** également causer des comportements inattendus. Si vous trouvez l\'un de ces comportements, s\'il-vous-plaît déclarez-le (Open an Issue).

L\'indentation des différents niveaux de liste utilise quatre caractères espace pour chaque indentation suppérieur, on partant de 0 espace pour les titres de niveau 1, 4 espaces pour les titres de niveau 2, jusqu\'à 24 espaces pour les titres de niveau 6. Après ces espaces, il y a une astérisque `*` suivie d\'un unique caractère espace puis un crochet `[`. Jusqu\'au prochain crochet `]` se trouve la ligne contenant le titre (chaque caractère de la ligne entre le premier espace blanc et la fin de ligne exclus). Après le crochet, une parenthèse `(` et un dièse `#`, ensuite la ligne du titre modifiée jusqu\'à la parenthèse finale `)`. Comme la fin de ligne est supprimée de la ligne du titre, une autre fin de ligne est ajoutée après la parenthèse finale.

Les fin de lignes sont supposées être longues d\'un caractère, considérées comme étant LF (`\n`). Ce qui veut dire que seulement un caractère est enlevée à la fin de la ligne du titre avant d\'être utilisée comme libellé du lien hypertexte et modifiée comme valeur du lien. Cependant, cela **POURRAIT** fonctionner avec des fins de lignes CRLF. De la même manière, seulement un caractère LF est inséré à la fin des lignes de la table des matières générée.

## Fonctionnalités manquantes

Seus les titres sous forme de dièses sont inclus dans la table des matières générée, ce qui exclu les formes soulignées avec des symbole égal `=` et des tirets `-` et avec des balises HTML `<h1>...</h1>`. L\'implémentation devrait aussi considérer les dièses à droite juste avant la fin de ligne comme faisant partie de la syntaxe et les enlever. De nombreuses autres spécifications sont censées être respectées et ne le sont pas. Voir les spécifications de Github-Flavored-Markdown [ici](https://github.github.com/gfm).

Aussi, la liste des comportements inattendus à cause des caractères spéciaux n\'existe pas : si quelque chose d\'étrange se produit, pensez d\'abord aux caractères spéciaux.

## Licence

Ce projet est un petit projet. Le code source est donné librement à la communauté GitHub, sous la seule licence MIT, qui n\'est pas trop restrictive.

---

## Conclusions et tests effectués par BlindHelp

```
POUR VOTRE INFORMATION

Cette commande n'est pas reconnue  en utilisant : python3

Comme seul python est installé sur mon système, je l'ai remplacé par la commande :
python toc.py FileName.md -o FileName.md

Afin de ne pas altérer le fichier original j'ai modifié le fichier en sortie avec un autre nom :

python toc.py FileName.md -o test.md

Vous pouvez renommer le fichier FileName.md sous un autre nom.

Explications rapides 

Pour tester cela, j'ai fait ce qui suit :

J'ai pris le fichier qui se trouvait dans le dépôt de l'auteur appelé :
README-fr.md
J'ai précédemment supprimé ces parties du fichier appelé README-fr.md
* [Markdown-Table-of-Contents](#markdown-table-of-contents)
    * [Sommaire](#sommaire)
    * [Qu'est-ce que c'est ?](#qu'est-ce-que-c'est-)
    * [Comment ça marche ?](#comment-ça-marche-)
    * [Comment l'utiliser ?](#comment-l'utiliser-)
    * [Arguments pour la ligne de commande](#arguments-pour-la-ligne-de-commande)
    * [Spécifications](#spécifications)
    * [Fonctionnalités manquantes](#fonctionnalités-manquantes)
    * [Licence](#licence)

<!-- table of contents created by Adrian Bonnet, see https://Relex12.github.io/Markdown-Table-of-Contents for more -->

Puis Ctrl+s pour enregistrer ces changements.

Et renommé le fichier par :
FileName.md

Vous pouvez renommer le fichier FileName.md sous un autre nom.

J'ai également placé au même niveau le fichier appelé :
toc.py

J'ai ouvert le fichier que je viens de renommer :
FileName.md

Vous pouvez renommer le fichier FileName.md sous un autre nom.

J'ai laissé en tant que tel le premier titre de niveau 1 appelé :
# Markdown-Table-of-Contents
Celui-ci est situé au début du fichier.

J'ai fait la même chose avec le titre de niveau 2 appelé :
## Sommaire

J'ai laissé une ligne vide puis j'ai ajouté ceci :
[toc]## Sommaire

J'ai immédiatement laissé en tant que tel deuxième titre de niveau 2 appelé :

## Qu'est-ce que c'est ?

Cela ressemblerait à ceci :

## Sommaire

[toc]## Sommaire

## Qu'est-ce que c'est ?

Puis en ligne de commande j'ai tapé :

python toc.py FileName.md -o test.md

Vous pouvez renommer le fichier FileName.md sous un autre nom.

Le résultat se trouve dans le fichier appelé :
test.md

Malheureusement certains caractères ne sont pas bien encodés, je ne sais pas comment l'auteur a fait pour qu'ils s'affichent correctement dans son fichier appelé README-fr.md (pour le français).

J'imagine que ce problème n'existe pas dans le fichier anglais appelé :
README.md

Je viens de faire un test en utilisant le fichier en anglais appelé :
README.md

J'ai supprimé les parties insérées par le script :
## Summary

* [Markdown-Table-of-Contents](#markdown-table-of-contents)
    * [Summary](#summary)
    * [What is it?](#what-is-it)
    * [How does it work?](#how-does-it-work)
    * [How to use it?](#how-to-use-it)
    * [CLI arguments](#cli-arguments)
    * [Specifications](#specifications)
    * [Missing features](#missing-features)
    * [License](#license)

<!-- table of contents created by Adrian Bonnet, see https://github.com/Relex12/Markdown-Table-of-Contents for more -->

## What is it?

J'ai laissé en tant que tel le deuxième titre de niveau 2 appelé :
## Summary
puis le deuxième titre de niveau 2 appelé :
## What is it?

Cela ressemblerait à ceci :

## Summary

[toc]## Summary

## What is it?

Puis en ligne de commande j'ai tapé :

python toc.py FileName.md -o test.md

Vous pouvez renommer le fichier FileName.md sous un autre nom.

J'ai obtenu le même résultat que celui trouvé dans le fichier README.md en anglais réalisé par l'auteur sans aucun problème de codage.
Je pense que l'auteur a traduit le fichier README.md en français ensuite l'auteur l'a renommé en README-fr.md, c'est peut-être pour cela que ce problème d'encodage n'est pas reflété avec des séries de caractères exotiques qui ne s'affichent pas correctement une fois le fichier converti avec le script toc.py...
```

Après cette mise en garde par mes soins, si votre document Markdown (fichier.md) est rédigé en anglais vous ne rencontrerez pas de problème lors de l\'exécution dudit outil (toc.py), sinon si vous utilisez la langue en français, espagnol, etc... vous devrez faire les corrections manuellement dans la partie des noms des liens généré par ledit script selon le vrai nom du titre avec ses lettres accentuées avant de le publier sur GitHub.

Dans le cas de la langue française qui utilise le signe apostrophe \' vous devrez préfixer le signe barre oblique inversée, soit :

```
\'
```

Par exemple :

```
d\'autres lecteurs
```

pour qu\'il s'affiche correctement dans un post sur GitHub (y compris les noms des titres qui les contiennent sous-forme de lien qui sont générés par le script).

Voilà qui est dit !

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
