% Récapitulatif Syntaxe Markdown by BlindHelp
% Auteur: BlindHelp
% Dernière mise à jour le 13 Avril 2016.

***

Récapitulatif Syntaxe Markdown by BlindHelp {.unnumbered #recapitulatif-syntaxe-markdown-by-blindhelp}
=

Contenus {.unnumbered #contenus}
-------------

- [Les titres](#mark3)
- [Les paragraphes](#mark4)
- [Les sauts de ligne simple](#mark5)
- [L’emphase](#mark6)
- [Les citations](#mark7)
- [Les listes non ordonnée](#mark8)
- [Les listes ordonnées](#mark9)
- [Le bloc de code](#mark10)
- [Le code dans la ligne](#mark11)
- [Les filets ou barres de séparation](#mark12)
- [Les liens](#mark13)
- [Les images](#mark14)
- [Les tableaux](#mark15)
- [Échappement des caractères](#mark16)
- [Séparer des blocs](#mark17)

***

- [Télécharger le Récapitulatif des Syntaxe Markdown en format MD](#telechargerrecapitulatifsyntaxemarkdown)

***

Récapitulatif des Syntaxe Markdown {.unnumbered #recapitulatif-des-syntaxe-markdown}
-------------

# Les titres #    {#mark3}

<!-- je triche ici en fabriquant le résultat afin que ces titres n'apparaissent pas dans la TOC -->
Les titres HTML se produisent en plaçant un certain nombre de dièses(signe) `#` avant le texte correspondant au niveau du titre souhaité (HTML offre jusqu'à
six niveaux).     

Vous tapez:  

`#` Ceci est un H1  
`##` Ceci est un H2         
`###` Ceci est un H3         
`####` Ceci est un H4         
`#####` Ceci est un H5         
`######` Ceci est un H6         

(mais n’allez pas au delà de 7).    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  


# Ceci est un H1 {.unnumbered #ceci-est-un-H1}

## Ceci est un H2 {.unnumbered #ceci-est-un-H2}

### Ceci est un H3 {.unnumbered #ceci-est-un-H3}

#### Ceci est un H4 {.unnumbered #ceci-est-un-H4}

##### Ceci est un H5 {.unnumbered #ceci-est-un-H5}

###### Ceci est un H6 {.unnumbered #ceci-est-un-H6}

(mais n’allez pas au delà de 7). 


Vous pouvez enfermer chaque titre entre dièses (signe) **\#**, pour des raisons purement esthétiques, parce qu'il n'est pas nécessaire du tout de le faire, c'est-à-dire, vous pouvez faire ceci:    

`###` Ceci est un H3         `###` 

### Ceci est un H3 ### {.unnumbered #ceci-est-un-H3}


Pour les titres des deux premiers niveaux il existe également une autre façon de faire la même chose, qui serait la suivante:     

Ceci est un H1    
`=============`

Ceci est un H1 {.unnumbered #ceci-est-un-H1}
=============


Ceci est un H2   
`-------------`

Ceci est un H2 {.unnumbered #ceci-est-un-H2}
-------------


C'est-à-dire, pour les titres principaux vous souligner le texte avec le signe égal. Pour les titres de deuxième niveau vous utilisés les tirets pour souligner.
C'est indifférent le nombre de signes égal ou tirets que vous utilisé, avec un c'est suffisant.    

Note: Vous pouvez aussi dans un titre inclure un lien:     

Vous taper:       

    ### Titre de niveau 3 incluant [un lien](#)       

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

### Titre de niveau 3 incluant <a href=#>un lien</a> {.unnumbered #Titre-de-niveau-3-incluant-un-lien}

***

# Les paragraphes # {#mark4}

Les paragraphes sont indiqués avec une ou plusieurs lignes de séparation (en appuyant sur la touche entrée).    
Pour afficher un paragraphe, sautez deux ligne et taper votre texte. Un seul saut de ligne correspond à un retour chariot et pas à un changement de paragraphe.    

***

# Les sauts de ligne simple # {#mark5}

Effectuer un saut de ligne simple dans votre texte markdown n’aura aucun effet quand vous l'exporter en HTML.    
Sauf si vous terminez votre ligne par un double espace (ou plus que ça).     
Un retour chariot sera alors exporté.

Vous taper:    

	Ligne sans espace à la fin
	Ligne avec 2 espaces à la fin  
	Troisième ligne

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

Ligne sans espace à la fin
Ligne avec 2 espaces à la fin  
Troisième ligne

Terminer une ligne avec deux ou plusieurs espaces:   
La première ligne se termine par trois espace après la virgule, la deuxième ligne fini par un point final.

Par exemple vous taper:    

	Les roses sont rouges,   
	les violettes sont bleues.

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

Les roses sont rouges,   
les violettes sont bleues.


En résumer:    
Pour effectuer un saut de ligne à l'intérieur d'un paragraphe il faut introduire 2 ou davantage de caractères espaces à la fin de la ligne (avant le saut à la ligne).     

***

# L’emphase # {#mark6}

Pour formater une partie de votre texte comme emphase, entourez le par des astérisques ou des souligné.    
Entourer par un seule signe astérisque il indique italique (emphase faible : *;)    
et par un double signe astérisque il indique gras (emphase forte: **;).  
Il est possible de combiner les deux. Pour indiquer les deux sont utilisés 3 astérisques. Peuvent également être utilisés les soulignés, de la même manière, mais les deux ne doivent pas être mélangés.    Un double tildes vous permettent de barrer le texte.    


Texte _dont_ certains __éléments__ sont formatés **pour _être_** en *italique*, en **gras** ou ~~barrés~~.


Par exemple, vous taper:      
`*Ceci est un texte en italique* `      
`**et ceci est en gras**`     

Vous obtenez le Résultat affiché dans le navigateur comme sui:  
*Ceci est un texte en italique*       
**et ceci est en gras**     

***

# Les citations # {#mark7}

Pour afficher un bloc de citation, commencez le paragraphe par un signe supérieur. Si votre bloc contient plusieurs lignes, vous pouvez faire des sauts de lignes à la main et toutes les ouvrir par un signe supérieur, mais ce n’est pas nécessaire. Ces bloc peuvent contenir d’autres éléments markdown comme des titres ou des listes.    

Par exemple vous taper:   

`> ####` En-têtes dans les blocs de citation    
`>`      
`> *` Vous pouvez citer une liste.    
`> *` Etc.   

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

> #### En-têtes dans les blocs de citation {.unnumbered #En-têtes-dans-les-blocs-de-citation}
>    
> * Vous pouvez citer une liste.    
> * Etc.    

Exemple d'une citation:    

Vous taper:    

`>` une citation est un paragraphe ouvert par un signe supérieur    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

> une citation est un paragraphe ouvert par un signe supérieur     


utilisez le caractère supérieur > avant le bloc de texte. 

Vous taper:    

Ceci est une ligne normale     

`>` Ceci fait partie d'un bloc de citation.    
`>` Ceci fait partie du même bloc de citation.    

Ceci continue le bloc, même s'il n'y a pas de symbole 'supérieur'.    

La ligne vide termine le bloc.    

Ceci est une ligne normale    

`>` Ceci fait partie d'un bloc de citation.    
`>` Ceci fait partie du même bloc de citation.    
`>`    
`>` `>` Ceci est un autre bloc de citation imbriqué.    
`>` `>` Ceci fait partie du bloc imbriqué.    
`>`    
`>` Ceci fait partie du bloc de citation de premier niveau.    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

Ceci est une ligne normale    

> Ceci fait partie d'un bloc de citation.    
> Ceci fait partie du même bloc de citation.    

Ceci continue le bloc, même s'il n'y a pas de symbole 'supérieur'.    

La ligne vide termine le bloc.    

Ceci est une ligne normale    

> Ceci fait partie d'un bloc de citation.    
> Ceci fait partie du même bloc de citation.    
>     
> > Ceci est un autre bloc de citation imbriqué.    
> > Ceci fait partie du bloc imbriqué.     
>   
> Ceci fait partie du bloc de citation de premier niveau.    

***

# Les listes non ordonnée # {#mark8}

Pour afficher une liste, commencez la ligne par un astérisque signe "*", un tiret signe "-" ou un plus signe "+".     

Vous taper:     

`*` élément1    
`*` élément 2   
`*` élément 3   

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

* élément 1
* élément 2
* élément 3

Vous taper:      

`+` élément a    
`+` élément b   
`+` élément c    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

+ élément a
+ élément b
+ élément c

Vous taper:    

`-` premier élément   
`-` deuxième élément    
`-` troisième élément   

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

- premier élément
- deuxième élément
- troisième élément

Voici une liste non ordonnée, avec paragraphes:      

*   Un élément de liste.

    Avec plusieurs paragraphes.

*   Barre

Vous pouvez les imbriquer:

*   Boulier 
    * réponse
*   Bulles
    1.  superposés
    2.  rien
        * SANS IMPORTANCE
    3. renvoi
*   Astuce 

***

# Les listes ordonnées # {#mark9}

Pour afficher une liste ordonnée, sans paragraphes commencez la ligne par un nombre suivit d’un point. Pour que votre markdown soit plus lisible, je vous conseille d’ordonner 
proprement votre liste. Mais ce n’est pas nécessaire pour le rendu HTML.    
C’est le navigateur qui se charge d’ajouter les nombre pour ordonner la liste.    

Par exemple, vous taper:   

`1. Élément A`    
`1234. Élément B`    
`3. Élément C`        
`4. Élément D`    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

1. Élément A
1234. Élément B
3. Élément C
4. ÉlémentD 

Voici une autre liste pour le fun!    

Vous taper:    

`1.  Foo`    
2.  Bar`    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

1.  Foo
2.  Bar

***

# Le bloc de code # {#mark10}

Pour afficher un bloc de code préformaté, sautez deux lignes comme pour un paragraphe, puis indentez chaque ligne par au moins 4 espaces ou une tabulation. Dans le navigateur, la touche tabulation vous fait changer de champ et il n’est généralement pas possible de l’utiliser. Le bloc se terminera dès qu’il arrivera sur une ligne non indentée.

Ceci est un paragraphe normal.

bloc de code.

    Ceci est un paragraphe préformaté
    bloc de code.

***

# Le code dans la ligne # {#mark11}

Pour afficher du code dans une ligne, il faut l’entourer par des guillemets simples inversés : accent grave (`).    

\`code`

\`\<code\>\` enveloppant tout le contenu de ce que l'on veut ajouter sont délimitées par des guillemets simples inversés.

Vous pouvez inclure des guillemets simples inversés littéraux   
comme \`\` \`ceci\` \`\`.

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

Vous pouvez inclure des guillemets simples inversés littéraux   
comme `` `ceci` ``.

***

# Les filets ou barres de séparation # {#mark12}

Aussi appelé séparateur.     
Pour afficher un filet de séparation, entrez `<hr/>`; dans votre texte ou au moins 3 astérisques "*" ou tirets "-" ou souligné "_" sur une ligne entourée de sauts de lignes. Il est possible de les séparer par des espaces pour des raisons purement esthétiques.     

Donc, n'oubliez pas de taper trois ou plusieurs tirets ou astérisques ou soulignés.    
Vous pouvez également les séparer par des espaces (un espace entre chaque tiret / astérisque / souligné ou 4 espaces entre chaque tiret / astérisque / souligné) pour des raisons purement esthétiques, par exemple.    

Vous taper:   
`***`    
`---`    
`___`
`* * *`    
`- - -`    
`_ _ _`
`*    *    *`    
`-    -    -`    
`_    _    _`

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

***

---

___

* * *

- - -

_ _ _

*    *    *

-    -    -

_    _    _

Remarque: Toutes ces méthodes ci-dessus donneront exactement le même résultat.      

*** 

# Les liens # {#mark13}

Il y a deux façons d'indiquer un lien. Le premier s'il fait partie d'un texte, et lorsque vous voulez faire une référence.     

Dans le premier cas, le texte à afficher est alors indiqué entre crochets suivit de l’adresse du lien entre parenthèses. Dans les parenthèses, à la suite du lien, on peut indiquer un titre entre 
guillemets. Ce titre sera affiché lors du survol du lien dans le navigateur. Il sera également lu par les lecteurs d'écrans utilisé par les déficients visuels.     

Exemple:     

Vous tapez:    
`[Télécharger le Récapitulatif des Syntaxe Markdown en format MD](https://cld.pt/dl/download/8eac8395-c40d-4c3a-91bf-0d2f48ba31b2/recapitulatifsyntaxemarkdown.md?download=true "Ouvrir le téléchargement dans une nouvelle fenêtre")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:  
[Télécharger le Récapitulatif des Syntaxe Markdown en format MD](https://cld.pt/dl/download/8eac8395-c40d-4c3a-91bf-0d2f48ba31b2/recapitulatifsyntaxemarkdown.md?download=true "Ouvrir le téléchargement dans une nouvelle fenêtre")

Voici un autre exemple:      

Vous tapez:    

`[Google](http://www.google.com "Lien vers Google")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

[Google](http://www.google.com "Lien vers Google")

Dans le second cas, l’adresse du lien se trouve à la fin du document ou où vous avez  besoins de le placer et sera précédé d'un texte où vous écrivez une balise (étiquette) entre crochets, celle-ci (contient le numéro de lien de référence comme valeur `[1]` `[2]` et ainsi de suite), cette même balise (étiquette)  est suivi par ":" deux points suivi d'un espace, ensuite il vient l’adresse du lien déjà mentionné au début, le tout en une même ligne.     
Logiquement, vous devez placer cette même balise (étiquette)  qui est entre crochets au début du document ou où dans un endroit de votre convenance, cette même balise (étiquette), sera précédé d'un texte où vous écrivez une autre balise (étiquette) , encore une fois entre crochets,  mais cette fois, vous écrirez le nom auquel se réfère le lien, les deux balises (étiquettes)   seront placés ensemble sur une même ligne, n'oubliez pas que cette ligne sera toujours placé au début du document contrairement à la deuxième ligne que nous avons mentionné ci-dessus, elle sera toujours placée à la fin du document, mais pas avant la première ligne.      

Exemple:      

Vous tapez:     

`[Le blog de BlindHelp][1]`


`[1]: http://blindhelp.blogspot.fr/ "Le blog de BlindHelp"`

Vous obtenez le Résultat affiché dans le navigateur comme sui:     


[Le blog de BlindHelp][1]

[1]: http://blindhelp.blogspot.fr/ "Le blog de BlindHelp"

Vous pouvez le faire aussi de manière automatique en encadrant un lien par les signe inférieur et supérieur:  

Vous tapez:     

`<http://www.google.com>`

Il est alors cliquable et affiche l’url indiquée entre le signe inférieur et supérieur.     

Vous obtenez le Résultat affiché dans le navigateur comme sui:     

<http://www.google.com>

pour définir des adresses emails cliquables, il n'est pas nécessaire de les préfixer par `mailto:`     

Remarque: si vous examinez le code HTML, vous constaterez que les liens de type `<adresse_email>` sont automatiquement encodés (et même associés par Pandoc à du JavaScript) et sont de ce fait relativement résistant aux robots de spam !    

En résumer, pour définir un lien   
Inline (technique HTML classique du lien "au fil du texte"):    

Vous Taper:     

`Par [exemple](http://url.com/ "Titre")`     

Vous obtenez le Résultat affiché dans le navigateur comme sui:     

Par [exemple](http://url.com/ "Titre")     

En résumer, pour les liens avec des  
Étiquettes de style de référence (les titres sont facultatifs):     

Vous Taper:     

`Par [exemple][ID]. Ensuite, n'importe où`     
sinon dans la doc, définissez le lien:    

  `[ID]: http://exemple.com/  "Titre"`    

Vous obtenez le Résultat affiché dans le navigateur comme sui:     

Par [exemple][ID]. Ensuite, n'importe où     
sinon dans la doc, définissez le lien:    

  [ID]: http://exemple.com/  "Titre"    

***

# Les images # {#mark14}

Les images sont indiquées de façon similaire aux liens seulement qu'ils sont précédés du symbole "!" point d'exclamation!        
Donc, pour afficher une image, commencez par un point d’exclamation. Puis indiquez le texte alternatif entre crochets. Ce dernier sera affiché si l’image n’est pas chargé et lu par les moteurs de recherche. Terminez par l’URL de l’image entre parenthèses. Cette URL peut être un lien vers le web ou un chemin local de ce type : `/dossier_images/nom_de_mon_image.jpg`. Après le lien vers l’image, il est possible d’ajouter un titre lu par les navigateurs et il sera affiché au survol de l’image par les lecteurs d'écrans utilisé par les déficients visuels.     

Exemple d'image par référence Inline (les titres sont facultatifs)     
Vous taper:    

`![Google logo](https://www.google.fr/images/srpr/logo11w.png "google logo")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:      

![Google logo](https://www.google.fr/images/srpr/logo11w.png "google logo")

Voici encore quelques exemples:     
Vous tapez:     
`![Logo canne blanche (multi-coloris)](http://www.eclipse72.org/medias/ecard/aveugle1-jpg "Logo canne blanche (multi-coloris)")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:     
![Logo canne blanche (multi-coloris)](http://www.eclipse72.org/medias/ecard/aveugle1-jpg "Logo canne blanche (multi-coloris)")

Vous tapez:     
`![Image d'une personne marchant avec une canne](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100 "Image d'une personne marchant avec une canne")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:      
![Image d'une personne marchant avec une canne](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100 "Image d'une personne marchant avec une canne")

Vous tapez:     
`![Image d'une canne longue dépliée.](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Long_cane.jpg/138px-Long_cane.jpg "Image d'une canne longue dépliée.")`

Vous obtenez le Résultat affiché dans le navigateur comme sui:      
![Image d'une canne longue dépliée.](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Long_cane.jpg/138px-Long_cane.jpg "Image d'une canne longue dépliée.")

Exemple  d'image référencée:     

Vous tapez:    
`![Google logo][Google]` ensuite     

`[Google]: https://www.google.fr/images/srpr/logo11w.png "Google logo"`    

Vous obtenez le Résultat affiché dans le navigateur comme sui:   
![Google logo][Google]     

[Google]: https://www.google.fr/images/srpr/logo11w.png "Google logo"    

Exemple d'images associées vers des liens     

Vous taper:      

`[![image_dimensions.php (Image JPEG, 100 × 130 pixels)](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100)](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100)`

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

[![image_dimensions.php (Image JPEG, 100 × 130 pixels)](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100)](http://www.mabmackay.ca/librairies/images/image_dimensions.php?i=1696&x=100)

En résumer, pour les images      
par référence Inline (les titres sont facultatifs) :     

Vous taper:     

`![texte alternatif](/chemin/img.jpg "Titre")`

En résumer, pour les images      
de style de référence:

Vous taper:     

`![texte alternatif][ID]`

`[ID]: /url/vers/img.jpg "Titre"`

N'oubliez pas que :    

* les labels (`urlId`, `imgId`) ne sont pas case-sensitive et peuvent contenir des _espaces_     
* dans les définition de références, l'`URL` peut optionnellement être définie entre `< >`     
* le `titre optionnel` des liens et des images peut être défini entre guillemets, apostrophes ou parenthèses     

***

# Les tableaux # {#mark15}

Les tableaux n’existent pas dans la spécification Markdown originale, mais ils sont présent dans la plupart des implémentations récentes. Et il ont vraiment une utilité très forte dans certains cas.     
L’idée globale est de “dessiner” des colonnes en les entourant avec des barres verticales (|). Le nombre de colonnes est défini dans la première ligne du tableau et vous devez pour chaque ligne avoir le même nombre de colonnes, même si certaines sont vides.      
La première ligne sera votre en-tête. La seconde ligne sépare cet en-tête du corps du tableau et définit l’alignement du texte dans les colonnes. Elle ne contient que des tirets (-) et des deux points (:) sont utilisés pour définir cet alignement. Pas de  deux points (:) ou juste un à gauche signifie que le texte sera aligné à gauche. Si la ligne de tiret (-) est entourée de 2 points (:), le texte sera centré et si un seul deux points (:) est présent à droite de la ligne, le texte sera aligné à droite.          

Par exemple, vous taper:      


\| Entête 1 \| En-tête 2 \| En-tête 3 \|    
\| ------------- \|:-------------: \| --------: \|    
\| Ligne 1 \| 1 \| Valeur \|    
\| Ligne 2 \| 2 \| Valeur \|    
\| Ligne 3 \| 3 \| Valeur \|    


Vous obtenez le Résultat affiché dans le navigateur comme sui:  


| Entête 1 | En-tête 2 | En-tête 3 |
| ------------- |:-------------: | --------: |
| Ligne 1 | 1 | Valeur |
| Ligne 2 | 2 | Valeur |
| Ligne 3 | 3 | Valeur |


Vous pouvez avoir un tableau très propre comme dans l’exemple précédent pour mieux lire en mode édition. Mais ce n’est pas obligatoire. Les bares verticales (|) en début et en fin de ligne sont optionnels. Il est possible d’imbriquer des éléments d’emphase ou de code dans les tableaux. Il n’y a besoin que d’un seul tiret (-) par colonne pour la séparation entre l’en-tête et le corps du tableau.      

Vous taper:       


En-tête 1 \| En-tête 2 \| En-tête 3    
- \|:-: \| -:    
Ligne `1` \| **1** \| **_Valeur_**    
Ligne 2 \| 2 \| *Valeur*    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  


En-tête 1 | En-tête 2 | En-tête 3
- |:-: | -:
Ligne `1` | **1** | **_Valeur_**
Ligne 2 | 2 | *Valeur*


Comme on le voit, ça fonctionne encore une fois exporté, mais toute la lisibilité est perdue dans le Markdown.    

Voici un autre exemple d'un tableau:

Par exemple, vous taper:

Cellule d'en-tête A \| Cellule d'en-tête B    
- \| -    
Cellule 1 \| Cellule 2    
Cellule 3 \| Cellule 4    

Vous obtenez le Résultat affiché dans le navigateur comme sui:      

Cellule d'en-tête A | Cellule d'en-tête B
- | -
Cellule 1 | Cellule 2
Cellule 3 | Cellule 4

Remarque, si vous devez utiliser les symboles employer par Markdown, vous devez échapper ces symboles  en les précédant avec le caractère "\" barre oblique inversée.

***

# Échappement des caractères # {#mark16}

Les caractères spéciaux ayant un sens en HTML et en Markdown doivent être échappés. Pour les esperluètes c'est-à-dire "et comercial" (&),  le signe (<) ou le signe (>)  et autres caractères HTML, Markdown se charge de les convertir en entités HTML lors de l’export. Mais si vous souhaitez utiliser dans votre texte des astérisques, accolades, dièses… à une position indiquant à Markdown que vous désirer un formatage particulier, vous devez les échapper en les faisant précéder d’un antislash c'est-à-dire une barre oblique inversé (\). Sinon Markdown les masquera et appliquera le formatage correspondant. Les caractères suivants sont à échapper :     
`\` * ` - _ [] () {} # + . ! < >  @ ~ 

Voici les mêmes signes écrit En toutes lettres pour faciliter la lecture à mes amis DV :     
barre oblique inversé, astérisque, accent grave, tiret, souligné, crochet gauche, crochet droit, parenthèse gauche, parenthèse droite, accolade gauche, accolade droite, dièse, plus, point,     
point d'exclamation, inférieur, supérieur, arobase, tilde

***

# Séparer des blocs # {#mark17}

Une petite chose peut se révéler agaçante : deux blocs consécutifs se verront fusionnés. Ce sera le cas de deux blocs de citation ou de code par exemple. Et ce quel que soit le nombre de lignes que vous sauterez. Une solution simple est d’ajouter des commentaires html entre deux blocs. La syntaxe des commentaire est la suivante : <!-- texte en commentaire -->;. Le texte sera ignoré par le navigateur. Votre commentaire peut tout à fait être vide.

Vous taper:   

\> Citation 1

\> Citation 2

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

> Citation 1

> Citation 2

Vous taper:     

\> Citation 1    
\<!-- --\>    
\> Citation 2    

Vous obtenez le Résultat affiché dans le navigateur comme sui:  

> Citation 1
<!-- -->
> Citation 2

***

# Télécharger le Récapitulatif des Syntaxe Markdown en format MD {.unnumbered #telechargerrecapitulatifsyntaxemarkdown}

[En cliquant ici](https://blindhelp.github.io/recapitulatifsyntaxemarkdown.md)

***

Sur ce, je vous souhaite une bonne découverte du langage Markdown!     
Amusez-vous bien!     
Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)