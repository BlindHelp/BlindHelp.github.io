---
title: Voici un récap des commande CMD pour Windows
layout: post
author: BlindHelp
---

<footer>Samedi 5 Septembre 2020</footer>

Coucou mes amis du blog de BlindHelp!     
Aujourd'hui, je veux partager, ces commande CMD pour Windows avec vous mais à la base la source d'origine est sur [cette page](https://www.ionos.fr/digitalguide/serveur/know-how/commande-cmd/)     
Comme il est bien expliqué je me suis laissé tenté de le partagé avec vous tous, néanmoins il est nécessaire de remercier la personne qui l'a écrit. 🙇    
	J'espère que vous trouverez cela utile et intéressant. 😉    

## Avertissement: ##
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation des comandes CMD ni des informations ce trouvant sur le site Web dédié et l'utilisation des commandes CMD est à vos risques et périls.

# Commandes CMD : tout sur les commandes de Windows #

La plupart des experts en informatique et des utilisateurs de Linux, mais aussi des utilisateurs d’ordinateurs qui ont travaillé avec MS-DOS, sont relativement familiers avec les interfaces en ligne de commande et les commandes correspondantes. Mais même sous Windows, beaucoup de choses peuvent être réalisées via l’invite de commandes. Nous expliquons donc ce qu’est une interface en ligne de commande, comment l’ouvrir et quelles commandes Windows CMD sont disponibles.    
Cependant, les lignes de commande de Windows ont changé au fil du temps : dans les nouvelles versions de Windows, les utilisateurs ne peuvent plus accéder à certaines des commandes habituelles. Afin que vous n’ayez pas à tester laborieusement quelles commandes sont encore valides et lesquelles sont désormais obsolètes, nous allons expliquer dans les parties suivantes quelles commandes CMD fonctionnent encore sous Windows 10. Nos tableaux récapitulatifs décrivent les fonctions des différentes commandes et indiquent sous quels systèmes d’exploitation et versions de Microsoft elles sont efficaces.    

Table des matières<a id="Table des matières"></a>
-------------
[1. Comment fonctionne une interface en ligne de commande ?](#mark1)
[2. Comment ouvrir l’invite de commandes sous Windows ?](#mark2)
[3. Comment saisir des commandes dans l’interface en ligne de commande ?](#mark3)
[4. Commandes CMD sous Windows : une liste des commandes](#mark4)

---

# Comment fonctionne une interface en ligne de commande ?<a id="mark1"></a>

L’interface en ligne de commande, en anglais Command Line Interface (CLI), souvent simplement nommée console est une interface texte dans le système d’exploitation. Avec cette interface, vous pouvez organiser les fichiers, lancer des programmes ou exécuter d’autres commandes qui affectent le système d’exploitation, l’ordinateur ou même le réseau.    
Dans les systèmes d’exploitation plus anciens (comme MS-DOS), vous ne pouviez utiliser aucune interface utilisateur graphique et souvent aucune souris pour naviguer. Vous deviez à la place saisir toutes les commandes, les structures des répertoires étaient alors affichées en mode texte à l’écran. Mais même après la conversion aux systèmes d’exploitation graphiques, l’interface en ligne de commande elle-même est restée en mode texte.    
En général, la connexion entre le système d’exploitation et l’utilisateur, qu’elle soit graphique (GUI = interface utilisateur graphique) ou textuelle (CLI = Command Line Interpreter) est résumée sous le terme de « shell ». L’interpréteur de ligne de commande par défaut pour Windows est CMD.EXE. Mais il y a aussi, par exemple, le PowerShell : il offre encore plus de possibilités que CMD.EXE. Cela facilite la création d’automatismes avec PowerShell. Pour ce faire, les utilisateurs peuvent créer des programmes de script en utilisant le langage de script PowerShell.    
 Remarque    
De nombreuses commandes de la console Windows se réfèrent à des fichiers batch. Il s’agit essentiellement de fichiers texte (avec l’extension .bat ou .cmd) qui sont exécutés depuis l’interface en ligne de commande comme traitement par lots (batch processing). Ces fichiers sont généralement créés pour effectuer des tâches de routine et pour lancer d’autres programmes dans le processus.    

# Comment ouvrir l’invite de commandes sous Windows ?<a id="mark2"></a>

Il y a plusieurs façons d’appeler l’interface en ligne de commande sous Windows. Strictement parlant, l’invite de commandes est le programme CMD.EXE. Vous devriez trouver ce fichier exécutable dans le répertoire système de votre dossier Windows. (Si vous cliquez avec le bouton droit de la souris sur le fichier, Windows vous permettra également d’exécuter le programme en tant qu’administrateur si vous avez les informations d’identification pour le faire). Pour accéder plus rapidement au programme, vous pouvez utiliser la recherche Explorer ou le menu Exécuter. Ce dernier peut être ouvert sous Windows 7, 8 et 10 en utilisant la combinaison de touches Win+R. Il suffit ensuite d’entrer cmd dans le champ de saisie et d’appuyer sur la touche OK.    
L’invite de commandes a depuis longtemps également une place fixe dans le menu « Démarrer » de Windows. Sous Windows 7 et Windows 10, vous trouverez le programme dans le dossier « Accessoires ». Sous Windows 8, Microsoft a remplacé le menu Démarrer par un écran de démarrage. Mais même là, vous trouverez l’invite de commande via les applications. Alternativement, Windows 8 et Windows 10 offrent tous les deux le menu Power-User. Vous pouvez l’ouvrir avec la combinaison de touches Win+X. De cette façon, vous pouvez trouver l’invite de commande à la fois dans l’exécution normale et dans la variante administrateur.    

# Comment saisir des commandes dans l’interface en ligne de commande ?<a id="mark3"></a>

CMD fonctionne via des commandes définies. Vous devez les saisir correctement, sinon l’invite de commandes n’exécute pas la demande. Il en va de même pour les paramètres que vous liez aux commandes. Vous pouvez ajouter des options (ou arguments) à certaines commandes de cette façon. Les arguments sont généralement indiqués par une seule lettre et un signe moins (-), plus (+) ou une barre oblique (/). CMD permet également les espaces réservés. Pour les caractères génériques, utilisez l’astérisque (*) ou le point d’interrogation (?). Alors que ce dernier remplace un caractère unique (lettre, chiffre ou autre caractère), l’astérisque représente un nombre quelconque de caractères.    
 Note    
Vous devez aussi souvent travailler avec les spécifications de chemin d’accès dans l’invite de commandes et lors de la saisie de commandes. Vous en avez besoin pour naviguer dans vos répertoires ou pour nommer précisément les positions dans les commandes. Lorsque vous entrez des chemins d’accès, utilisez la barre oblique inverse (\).    
Certaines commandes CMD peuvent être combinées entre elles. Un tube (pipeline) évalue la sortie de la première commande comme une entrée pour la suivante. Dans l’invite de commandes, les commandes sont reliées par une ligne verticale (|]). Cette ligne est aussi appelée « tube » par beaucoup, mais officiellement elle s’appelle barre verticale. Les barres verticales acheminent les données d’une commande à l’autre :    

* CommandeA | CommandeB    
De plus, il y a la possibilité de redirection : la sortie d’une commande est transmise directement à un fichier (>) ou le contenu d’un fichier texte est compris comme entrée pour la commande (<) :    
* Commande > Fichier (sortie vers un fichier)    
* Commande < Fichier (entrée à partir du fichier)    
Enfin, les commandes de la console Windows peuvent également être liées l’une après l’autre en les exécutants. Ceci peut être réglé par une forme relativement simple (&), mais aussi par deux variantes plus complexes. D’une part, il n'est possible d’exécuter la deuxième commande que si la première commande a réussi. Mais vous pouvez aussi régler exactement le contraire : la deuxième commande n’est exécutée que si la première ne fonctionne pas (|||). Ces deux options peuvent même être combinées pour créer une chaîne de commande :    
* CommandeA & CommandeB (La deuxième commande est exécutée immédiatement après la première.)    
* CommandeA && CommandeB (La deuxième commande n’est exécutée que si la première a réussi.)    
* CommandeA || CommandeB (La deuxième commande n’est exécutée que si la première commande a échoué.)    
* CommandeA && CommandeB || CommandeC (La deuxième commande n’est exécutée que si la première commande a réussi, sinon la troisième est exécutée.)    

 Conseil    
Chaque commande a sa propre syntaxe et ses options individuelles. Pour que vous n’ayez pas à les apprendre par cœur, CMD offre une commande d’aide : avec help commande oucommande /? Vous obtenez des informations sur la façon de gérer la commande.    
Il est très utile que l’invite de commande se souvienne de vos dernières commandes CMD entrées. Vous pouvez en effet utiliser les touches fléchées haut et bas du clavier pour rappeler vos entrées précédentes. Cependant, cela signifie également que vous ne pouvez pas faire défiler la fenêtre CMD avec ces touches. En principe, cela est toutefois possible avec la souris. Toutefois, si vous préférez faire défiler les commandes à l’aide du clavier et que vous êtes prêt à renoncer à la possibilité de les récupérer, vous pouvez effectuer le réglage approprié : pour ce faire, cliquez avec le bouton droit de la souris sur l’invite de commande et sélectionnez l’option « Défilement ».     
Les commandes, les noms de fichiers ou les spécifications de chemins ainsi que les arguments sont séparés par des espaces. D’ailleurs, dans la plupart des cas, peu importe que vous utilisiez des majuscules ou des minuscules. Ce n’est que dans de rares cas qu’il est décisif d’écrire des paramètres en majuscules ou en minuscules (en général, seulement si deux paramètres différents sont abrégés avec la même lettre et ne diffèrent qu’en majuscules ou minuscules).    

# Commandes CMD sous Windows : une liste des commandes<a id="mark4"></a>

Il existe presque 300 commandes pour Windows et son prédécesseur MS-DOS. Au fil des décennies, certaines commandes ont été préservées, d’autres n’ont été ajoutées qu’avec des versions plus récentes de Windows, et d’autres ont été supprimées ou remplacées. Dans notre liste exhaustive, nous expliquons ce que font les différentes commandes et sous quelle version de Windows elles peuvent être exécutées. Vous pouvez ainsi rapidement vérifier si les commandes CMD que vous connaissez fonctionnent toujours sous Windows 10. Pour plus de clarté, nous avons divisé les commandes de la console Windows en quatre catégories : les commandes de base, fichier, système, et réseau.     
 Remarque    
Les informations sur les fonctionnalités des différentes versions de Windows ne doivent être considérées que comme des informations d’orientation. Pour certaines commandes, ce n’est pas seulement la version Windows qui est décisive, mais aussi les éditions (Home, Pro, Server) dans lesquelles vous souhaitez les utiliser. Dans certains cas, vous devez également effectuer certains réglages au préalable pour que les commandes aient un effet. En outre, pour certaines commandes CMD, vous avez besoin des droits d’accès en tant qu’administrateur.    

# Commandes de base #

Commandes CMD | Description | Versions de Windows
- | - | - 
bitsadmin | Crée et surveille les chargements et les téléchargements (Downloads and Uploads). | 10/8/7/Vista
break | Interruption sous DOS Ctrl+C-Checking, ce qui pourrait arrêter les processus dans l’ancien système d’exploitation. N’est disponible que sous Windows pour des raisons de compatibilité. | N’importe quelle version de Win/DOS
call | Appelle un fichier batch dans un autre fichier batch. La commande n’a aucun effet si vous l’entrez directement dans CMD et non dans un fichier batch. | N’importe quelle version de Win/DOS
cd | Affiche le répertoire actuel et vous permet de passer à d’autres répertoires. Avec le paramètre /D plus le disque dur et le chemin d’accès, vous pouvez également modifier le disque dur. Avec cd. vous passez au répertoire supérieur. (possède la même fonction que la commande chdir.) | N’importe quelle version de Win/DOS
chcp | Modifie la page de code actuelle (tableau des jeux de caractères) ou affiche le numéro de la page de code actuelle. | N’importe quelle version de Win/DOS
chdir | Affiche le répertoire courant et vous permet de passer à d’autres répertoires. Avec le paramètre /D plus le disque dur et le chemin d’accès, vous pouvez également modifier le disque dur. Avec chdir. vous passez au répertoire supérieur. (possède la même fonction que la commande cd.) | N’importe quelle version de Win/DOS
choice | Crée une liste de sélection : un exemple typique est la sélection de Oui (O) ou Non (N), que vous créez avec /C JN. Avec le paramètre /M vous pouvez ajouter un message d’explication pour l’utilisateur. | N’importe quelle version de Win (sauf XP)/DOS
clip | Renvoie le résultat d’une commande dans le presse-papiers. Par exemple, vous pouvez copier la structure du répertoire (dir clip) ou le contenu d’un fichier (clip < nom de fichier) dans le presse-papiers. | 10/8/7/Vista
cls | Supprime le contenu de l’écran | N’importe quelle version de Win/DOS
cmd | Démarre CMD.EXE. | 10/8/7/Vista/XP
color | Modifie l’arrière-plan (première valeur) et la couleur du texte (deuxième valeur) de l’invite de commande. Les couleurs sont comprises entre 0 (noir) et F (blanc). | 10/8/7/Vista/XP
command | Démarre CMD.COM. | 32 bits/DOS
date | Affiche la date actuelle et vous permet de la modifier. Avec le paramètre /T, seule la date est affichée sans possibilité de la modifier. | N’importe quelle version de Win/DOS
debug | Lance Debug, un programme qui peut être utilisé pour tester et modifier des programmes dans l’invite de commande. | 32 bits/DOS
dir | Affiche tous les dossiers et fichiers du répertoire courant. Vous pouvez limiter l’édition par attributs (/A), simplifier la liste (/B), ou afficher tous les sous-répertoires et leurs fichiers (/S). | N’importe quelle version de Win/DOS
doskey | Crée des macros, rappelle des commandes et édite l’entrée de commandes. | N’importe quelle version de Win/DOS
dosshell | Ouvre le DOS-Shell, un outil de gestion graphique de fichiers. Sous Windows, le DOS-Shell a été remplacé par Windows Explorer.| 95/DOS
echo | Affiche un message et est principalement utilisé dans les scripts et les fichiers batch. | N’importe quelle version de Win/DOS
edit | Démarre l’éditeur MS-DOS, qui peut être utilisé pour créer des fichiers texte | 32 bits/DOS
edlin | Crée et édite des fichiers texte dans l’invite de commande. | 32 bits/DOS
exit | Quitte CMD.EXE ou CMD.COM. | N’importe quelle version de Win/DOS
fasthelp | Affiche des informations utiles sur les commandes. | DOS
fastopen | Écrit la position d’un programme dans une liste spécifique qui est stockée en mémoire et est destinée à accélérer le démarrage des programmes. | 32 bits/DOS
find | Recherche un ou plusieurs fichiers pour une chaîne de caractères spécifique. Si vous voulez juste savoir à quelle fréquence le mot ou l’expression se produit, utilisez le paramètre /C. Avec l’extension /I, la commande ignore les majuscules et les minuscules lors de la recherche. | N’importe quelle version de Win/DOS
findstr | Trouve des chaînes de caractères dans un ou plusieurs fichiers. Par rapport à la commande find, il existe plus d’options disponibles : vous pouvez rechercher des fichiers qui contiennent des termes différents ou rechercher une phrase exacte avec /C. | 10/8/7/Vista/XP
forcedos | Démarre un programme dans le sous-système MS-DOS s’il n’a pas été reconnu directement par Windows XP comme programme DOS. | XP (32 bits)
graftabl | Permet d’utiliser les caractères étendus d’une page de code spécifique en mode graphique. | 32 bits/DOS
graphics | Démarre un programme avec lequel les graphiques peuvent être imprimés. | 32 bits/DOS
help | Affiche un texte d’aide pour une commande spécifique. (Alternativement, vous pouvez utiliser la commande /?) | N’importe quelle version de Win/DOS
kb16 | Modifie le réglage du pays du clavier pour les programmes DOS. (Uniquement inclus dans Windows pour des raisons de compatibilité. Elle remplace l’ancienne touche keyb.) | 32 bits
keyb | Modifie le réglage du pays du clavier pour les programmes DOS. (Uniquement inclus dans Windows pour des raisons de compatibilité. Elle est remplacée par kb16 dans les nouvelles versions de Windows). | 98/95/DOS
logoff | Déconnecte l’utilisateur de Windows. Vous pouvez également l’utiliser pour terminer des sessions sur des serveurs. | 10/8/7/Vista/XP
lpq | Affiche l’état d’une file d’attente d’impression pour les ordinateurs qui utilisent un Line Printer Daemon (LPD). (Pour utiliser la commande sous Windows 10, 8, 7 ou Vista, vous devez d’abord activer le LPD Print Service et le LPR Port Monitor.) | N’importe quelle version de Win
lpr | Envoie un fichier à un ordinateur qui utilise Line Printer Daemon (LPD). (Pour utiliser la commande sous Windows 10, 8, 7 ou Vista, vous devez d’abord activer le LPD Print-Service et le LPR Port Monitor.) | N’importe quelle version de Win
md | Crée un nouveau répertoire au chemin spécifié. Si les répertoires n’existent pas déjà sur le chemin d’accès, md les crée automatiquement (Alternativement, vous pouvez aussi utiliser la commande mkdir). | N’importe quelle version de Win/DOS
mkdir | Crée un nouveau répertoire au chemin spécifié. Si les répertoires n’existent pas déjà sur le chemin, mkdir les crée automatiquement. (la commande md peut également être utilisée.) | N’importe quelle version de Win/DOS
more | Affiche le contenu d’un fichier (par exemple, un fichier texte) page par page. Vous pouvez également utiliser la commande pour diviser la sortie d’une autre commande sur les pages. | N’importe quelle version de Win/DOS
msg | Envoie un message à un autre utilisateur. Vous pouvez écrire les noms d’utilisateur dans la commande ou créer des fichiers dans lesquels vous stockez les noms d’utilisateur. Vous pouvez ensuite inclure les fichiers dans la commande avec @Nomdefichier. | 10/8/7/Vista/X
nlsfunc | Fournit des informations spécifiques à chaque pays pour le support des langues. | 32 bits/DOS
ntbackup | Exécute les services de sauvegarde directement à partir de l’interface en ligne de commande ou dans le cadre de fichiers batch ou script. | XP
path | Spécifie et affiche le chemin de recherche des fichiers exécutables. | N’importe quelle version de Win/DOS
pause | Suspend l’exécution dans les fichiers batch et des scripts. L’utilisateur sera alors invité dans un message à continuer en appuyant sur une touche. | N’importe quelle version de Win/DOS
popd | Passe au dossier sauvegardé par la commande pushd. La commande fait principalement partie des fichiers batch et des scripts. | 10/8/7/Vista
print | Imprime un fichier texte. L’appareil à utiliser pour l'impression doit être spécifié. | N’importe quelle version de Win/DOS
prompt | Modifie l’affichage de l’invite de commande. | N’importe quelle version de Win/DOS
pushd |Enregistre un chemin spécifique dans un script ou un fichier batch. Avec popd vous pouvez changer de répertoire. | 10/8/7/Vista/XP
qbasic | Démarre Qbasic, un environnement de programmation basé sur le langage de programmation BASIC. | 98/95/DOS
rd | Supprime un répertoire. Celui-ci ne doit pas contenir de fichiers, même cachés. Le paramètre /S peut être utilisé pour supprimer des arborescences de répertoires entières. (Vous pouvez également utiliser la commande rmdir de manière alternative.) | N’importe quelle version de Win/DOS
rem | Écrit des commentaires dans des fichiers batch et les scripts qui sont ignorés pendant l’exécution. | N’importe quelle version de Win/DOS
rmdir | Supprime un répertoire. Celui-ci ne doit pas contenir de fichiers, même cachés. Le paramètre /S peut être utilisé pour supprimer des arborescences de répertoires entières. (Vous pouvez également utiliser la commande rd) | N’importe quelle version de Win/DOS
runas | Permet à un utilisateur d’exécuter des commandes avec les droits d’un autre utilisateur. Par exemple, vous pouvez exécuter des commandes en tant qu’administrateur à partir d’un compte utilisateur normal, tant que vous connaissez le mot de passe correspondant. | 10/8/7/Vista/XP
scandisk | Démarre Microsoft ScanDisk. Le programme vérifie le volume pour détecter les erreurs. | 98/95/DOS
schtasks | Règle l’heure à laquelle certains programmes et commandes sont exécutés. Vous pouvez créer, supprimer et modifier des tâches et afficher toutes les tâches planifiées | 10/8/7/Vista/XP
set | Affiche les variables d’environnement pour CMD.EXE et vous permet de les configurer. | N’importe quelle version de Win/DOS
shift | Déplace les variables dans les fichiers batch et les scripts. | N’importe quelle version de Win/DOS
shutdown | Arrête l’ordinateur (/s), lance un redémarrage (/r) ou déconnecte l’utilisateur (/l). Une interface utilisateur graphique s’affiche lorsque vous saisissez le paramètre /i comme première option de la commande. | 10/8/7/Vista/XP
sort | Lit les données (d’un fichier ou d’une commande) et les sort triées et cela directement dans la ligne de commande, dans un nouveau fichier ou à une autre sortie. | N’importe quelle version de Win/DOS
start | Ouvre une nouvelle fenêtre d’invite. Dans ce cas, un programme ou une commande spécifique peut être exécuté. | N’importe quelle version de Win/DOS
subst | Affecte une lettre de disque à un chemin et crée ainsi un disque virtuel | N’importe quelle version de Win/DOS
taskkill | Met fin à une ou plusieurs tâches en cours d’exécution. Pour cela, vous devez spécifier soit l’ID de processus (PID), soit le nom de l’image. | 10/8/7/Vista
tasklist | Liste tous les processus en cours d’exécution, même sur des ordinateurs distants. L’ID de processus, qui est nécessaire pour la commande taskkill par exemple, est également spécifié. | 10/8/7/Vista/XP
time | Affiche l’heure actuelle et vous permet de la modifier. Si vous saisissez /T comme paramètre, la ligne de commande affiche uniquement l’heure et ne vous permet pas de la modifier directement. | N’importe quelle version de Win/DOS
timeout | Arrête un processus pour une durée déterminée. La commande est utilisée dans les fichiers batch et les scripts. Si le paramètre /NOBREAK est utilisé, la commande ignore toute entrée au clavier. | 10/8/7/Vista
title | Modifie le titre de l’invite. Les espaces sont autorisés, mais pas tous les caractères spéciaux, car par exemple la barre oblique est interprétée comme une introduction à un paramètre. | N’importe quelle version de Win/DOS
tree | Affiche graphiquement la structure de répertoire d’un disque ou d’un chemin. Le paramètre /F liste en outre tous les fichiers des dossiers. /A garantit que seuls des caractères ASCII sont utilisés pour la représentation graphique. La commande considère tous les sous-répertoires à partir du chemin spécifié. Si vous ne saisissez pas de chemin, le dossier courant est utilisé comme sortie/résultat. | N’importe quelle version de Win/DOS
type | Affiche le contenu d’un fichier texte. | N’importe quelle version de Win/DOS
tzutil | Affiche (/g) ou modifie (/s) le fuseau horaire actuellement défini. Le paramètre /I permet de déterminer les fuseaux horaires valides. | 10/8/7
ver | Affiche le numéro de version actuel de Windows ou de MS-DOS. | N’importe quelle version de Win/DOS

# Fichier #

Commandes CMD| Descriptions | Versions de Windows 
- | - | -
append | Spécifie le chemin dans lequel rechercher les fichiers. | 32 bits/DOS
assoc | Modifie le programme associé à une extension de fichier spécifique. | 10/8/7/Vista/XP
attrib | Modifie les attributs de certains fichiers. Vous pouvez utiliser le paramètre +R pour protéger un fichier des modifications, par exemple. | N’importe quelle version de Win/DOS
cipher | Affiche et modifie l’état de cryptage des fichiers et répertoires sur les partitions NTFS. | 10/8/7/Vista/XP
comp | Compare le contenu de deux fichiers ou de deux ensembles de fichiers. Le résultat peut être affiché sous forme de valeur décimale (/D) ou avec des caractères ASCII (/A). | 10/8/7/Vista/XP
compact | Affiche et modifie l’état de compression des fichiers et répertoires sur les partitions NTFS. | 10/8/7/Vista/XP
copy | Copie un ou plusieurs fichiers vers un autre emplacement. De plus, il est possible de combiner plusieurs fichiers en un seul. Vous pouvez utiliser l’astérisque comme métacaractère. | N’importe quelle version de Win/DOS
cscript | Exécute des scripts à partir du Microsoft Script Host. Avec l’option /D vous pouvez aussi activer le débogage. | N’importe quelle version de Win/DOS
del | Supprime un ou plusieurs fichiers. Si vous souhaitez également supprimer tous les fichiers des sous-dossiers, utilisez le paramètre /S. Les fichiers protégés en écriture peuvent être supprimés avec /F. (Vous pouvez également utiliser la commande erase.) | N’importe quelle version de Win/DOS
deltree | Supprime un répertoire et tous ses sous-répertoires et fichiers. | 98/95/DOS
diantz | Compressez les fichiers sans perte au format CAB. (La commande a la même fonction que makecab). | 7/Vista/XP
diskcomp | Compare le contenu de deux disques. | N’importe quelle version de Win (sauf 10)/DOS
diskcopy | Copie le contenu d’un disque sur un autre. | N’importe quelle version de Win (sauf 10)/DOS
endlocal | Met fin à la portée des modifications apportées aux fichiers batch ou aux scripts. Après la commande, les modifications s’appliquent à nouveau à l’ensemble du système (la localisation est lancée avec setlocal). | 10/8/7/Vista/XP
erase | La fonction est la même que del. | N’importe quelle version de Win/DOS
exe2bin | Convertit un fichier EXE en un fichier BIN | 32 bits
expand | Pour extraire les fichiers et dossiers qui sont dans les fichiers CAB. | N’importe quelle version de Win (sauf XP 64 bits)/DOS
extrac32 | Pour extraire les fichiers et dossiers qui sont dans les fichiers CAB. Le programme fait en fait partie d’Internet Explorer, mais peut également être utilisé dans l’invite de commande. | N’importe quelle version de Win
extract | Pour extraire les fichiers et dossiers qui sont dans les fichiers CAB (les nouvelles versions de Windows utilisent expand). | 98/95
fc | Compare deux fichiers individuels ou deux ensembles de fichiers et affiche les différences. | N’importe quelle version de Win/DOS
for | Spécifie qu’une commande précise doit être exécutée pour chaque fichier individuel d’un ensemble de fichiers. La commande est principalement utilisée dans les fichiers batch et script. | N’importe quelle version de Win/DOS
forfiles | Sélectionne un ou plusieurs fichiers et exécute une commande qui fait référence à ces fichiers. Principalement utilisé pour les fichiers batch et les scripts. | 10/8/7/Vista
ftype | Spécifie un programme à utiliser pour ouvrir un type de fichier spécifique. | 10/8/7/Vista/XP
goto | Déplace l’exécution d’un programme batch sur une certaine ligne (marqueur). | N’importe quelle version de Win/DOS
if | Représente une instruction conditionnelle et, en tant que telle, n’exécute des expressions dans les fichiers batch que sous certaines conditions. Peut être étendu par non si les commandes ne doivent pas être exécutées sous certaines conditions. | N’importe quelle version de Win/DOS
makecab | Compressez les fichiers sans perte au format CAB. (Alternativement, la commande diantz peut également être utilisée pour cela.) | 10/8/7/Vista/XP
mklink | Crée un lien symbolique vers un fichier. Vous pouvez également utiliser /D pour créer des liens vers des répertoires. Pour créer un lien fixe au lieu d’un lien symbolique, utilisez /H. | 10/8/7/Vista
move | Déplace un ou plusieurs fichiers d’un répertoire à un autre. La commande peut aussi changer le nom des répertoires. Par défaut, lors du déplacement de fichiers à destination, la commande écrase d’autres fichiers portant le même nom. Si vous voulez l’empêcher, utilisez le paramètre /-Y. | N’importe quelle version de Win/DOS
openfiles | Affiche et sépare les fichiers et dossiers ouverts d’un système. | 10/8/7/Vista/XP
recover | Récupère les fichiers lisibles stockés sur un disque défectueux. | 10/8/7/Vista/XP
ren | Modifie le nom d’un fichier spécifique. Le répertoire et le disque ne peuvent pas être modifiés. (Vous pouvez également utiliser la commande rename). |N’importe quelle version de Win/DOS
rename | La fonction est la même que pour ren. | N’importe quelle version de Win/DOS
replace | Remplace le(s) fichier(s) sélectionné(s) par un ou plusieurs autres fichiers. /S remplace également les fichiers dans les sous-dossiers. L’ajout /U ne remplace les fichiers que si l’autre version est plus récente. Le paramètre /A permet aux utilisateurs d’ajouter simultanément de nouveaux fichiers dans le répertoire cible. Ce paramètre n’est pas compatible avec /S et /U | N’importe quelle version de Win/DOS
robocopy | Permet la copie de fichiers « robuste ». Ceci est une version étendue de copy et xcopy. Avec robocopy, il est possible de transférer des données avec succès même en cas d’interruption du réseau. Au total, 72 paramètres permettent d’adapter la commande de copie. | 10/8/7/Vista
rsm | Gère les médias sur des supports amovibles. Utilisé dans les fichiers batch et les scripts pour prendre en charge les programmes qui n’utilisent pas le Removable Storage API. | Vista/XP
setlocal | Limite la portée des modifications apportées aux fichiers batch ou aux scripts. Après la commande, les modifications ne s’appliquent qu’à ces fichiers (la localisation est lancée avec endlocal). | 10/8/7/Vista/XP
share | Installe le partage de fichiers (File Sharing) et le verrouillage de fichiers (File Locking). | 32 bits/DOS
sxstrace |Démarre WinSxs Tracing Utility, un outil de programmation des diagnostics. | 10/8/7/Vista
takeown | Restaure les droits d’accès des administrateurs qui ont été perdus lors de la réassignation d’un utilisateur à un fichier. | 10/8/7/Vista
undelete | Annule la suppression d’un fichier. | DOS
verify | Vérifie, si activé, si les fichiers ont été écrits correctement sur un disque. Dans le réglage par défaut, le contrôle est désactivé. | N’importe quelle version de Win/DOS
where | Trouve les fichiers qui correspondent à un schéma de recherche spécifique. Dans le schéma, les caractères génériques * et ? peuvent être utilisés. | 10/8/7/Vista
xcopy | Copie des fichiers et des structures de répertoires entiers. Pour cela, la commande offre de nombreuses options supplémentaires. Par exemple, vous pouvez spécifier que seuls les fichiers inférieurs à une certaine date (/D) doivent être copiés. Vous pouvez également spécifier que les fichiers protégés en écriture sont également écrasés (/R). | N’importe quelle version de Win/DOS

# Système #

Commandes CMD | Descriptions | Versions de Windows
| - | -
at | Permet de démarrer les commandes et les programmes à un moment précis. Avec le paramètre /every:Date[,...], vous pouvez également définir des rendez-vous réguliers. | 10/8/7/Vista/XP
auditpol | Affiche les politiques de surveillance actuelles. | 10/8/7/Vista
backup | Crée des sauvegardes de fichiers. Ceux-ci peuvent être restaurés avec restore (remplacé par msbackup). | DOS
bcdboot | Crée et répare les fichiers de démarrage | 10/8/7
bcdedit | Permet aux utilisateurs d’apporter des modifications à la mémoire de données de configuration de démarrage (la commande est une variante plus récente de bootcfg). | 10/8/7/Vista
bdehdcfg | Prépare un disque dur pour le cryptage du disque BitLocker. | 10/8/7
bootcfg | Crée, édite ou affiche le contenu de boot.ini (est toujours à partir de Windows 7 contenu dans le CMD, mais a perdu sa fonction, car boot.ini n’est plus utilisé pour les options de démarrage. Au lieu de cela, vous devriez utiliser bcdedit). | 10/8/7/Vista/XP
bootsect | Règle le Master Boot Code pour qu’il soit compatible avec le gestionnaire de démarrage Windows ou le chargeur NT. (Ne peut être démarré que sous Windows 7 et Vista via la restauration du système). |10/8/7/Vista
cacls | Modifie et affiche la liste de contrôle d’accès. Ceci définit les droits d’accès. (est obsolète et sera remplacé par icacls dans les nouvelles versions de Windows). | 10/8/7/Vista/XP
chkdsk | Vérifie et répare (avec le paramètre /R) un support de données. | N’importe quelle version de Win/DOS
chkntfs | Modifie ou affiche le contrôle du volume au démarrage. | 10/8/7/Vista/XP
cmdkey | Peut afficher (/list), créer (/add) et supprimer (/delete) les informations d’identification. | 10/8/7/Vista
convert | Convertit les partitions FAT/FAT32 en NTFS. | 10/8/7/Vista/XP
ctty | Modifie l’entrée et la sortie (input - output) standard du système. | 98/95/DOS
dblspace | Crée ou configure des disques compressés (une version plus récente de la commande est appelée drvspace). | 98/95/DOS
defrag | Défragmente tous les disques ou seulement certains disques. Pour surveiller la progression, utilisez /U. Pour afficher les statistiques d’évaluation après la défragmentation, utilisez le paramètre /V. | N’importe quelle version de Win/DOS
diskpart | Gère, crée et supprime des partitions sur les disques durs. | 10/8/7/Vista/XP
diskperf | Permet aux utilisateurs de contrôler à distance le Disk Performance Counter. | 10/8/7/Vista
diskraid | Gestion des systèmes RAID | 10/8/7/Vista
dism | Attend pour les images Windows et les intègre. | 10/8/7
dispdiag | Crée un fichier dans le répertoire actuel dans lequel vous pouvez trouver des informations sur votre Display. | 10/8/7/Vista
dosx | Démarre l’interface en DOS Protected Mode, qui permet aux programmes MS-DOS de disposer de plus de 640 Ko de RAM. Uniquement disponible pour les anciens programmes DOS. | 32 bits
driverquery | Crée une liste de tous les pilotes installés. | 10/8/7/Vista/XP
drvspace | Crée ou configure des disques compressés. (une version plus ancienne de la commande s’appelle dblspace). | 98/95/DOS
emm386 | Apporte au DOS plus de 640 Ko de RAM. | 98/95/DOS
esentutl | Gère les bases de données dans l’Extensible Storage Engine. | 10/8/7/Vista/XP
eventcreate | Crée une entrée (ID et information de surveillance) dans un journal des événements. | 10/8/7/Vista/XP
eventtriggers | Configure et affiche les déclencheurs d’évènements. | XP
fdisk | Crée, supprime et gère les partitions sur le disque dur. (Dans les nouvelles versions de Windows, vous utilisez diskpart.) | 98/95/DOS
fltmc |Permet aux utilisateurs de gérer et de visualiser les pilotes de filtre. | 10/8/7/Vista/XP
fondue | Installe des fonctionnalités Windows supplémentaires. (la commande est l’abréviation de l’outil sous-jacent : Features on Demand User Experience Tool.). | 10/8
format | Formate un disque vers le système de fichiers spécifié par l’utilisateur. | N’importe quelle version de Win/DOS
fsutil | Possède de nombreuses fonctions liées au système de fichiers, telles que la suppression de lecteurs. | 10/8/7/Vista/XP
hwrcomp | Compilation de dictionnaires créés par l’utilisateur pour la reconnaissance de l’écriture manuscrite. | 10/8/7
hwrreg | Installe un dictionnaire compilé pour la reconnaissance de l’écriture manuscrite. | 10/8/7
icacls | Modifie et affiche la liste de contrôle d'accès. Ceci définit les droits d'accès (une version obsolète de cette commande est cacls). | 10/8/7/Vista
ktmutil | Démarre le Kernel Transaction Manager. | 10/8/7/Vista
label | Modifie ou supprime le nom d’un disque. | N’importe quelle version de Win/DOS
lh | Charge un certain programme dans la zone de mémoire haute (UMB), possède la même fonction que loadhigh. | 98/95/DOS
licensingdiag | Crée un fichier XML et un fichier CAB qui contiennent des informations sur la licence de produit Windows. | 10/8
loadfix | Assure qu’un programme est chargé et exécuté au-dessus des 64 premiers Ko de mémoire. | 32 bits/DOS
loadhigh | Possède la même fonction que lh. | 98/95/DOS
lock | Verrouille un lecteur afin que seul un programme présélectionné par l’utilisateur puisse y accéder directement. | 98/95
lodctr | Met à jour toutes les entrées du registre relatives aux compteurs de performance. | N’importe quelle version de Win/DOS
logman | Crée et gère les Event Tracing Sessions et des logs de performance. | 10/8/7/Vista/XP
manage-bde | Configure le cryptage du lecteur avec BitLocker. Puis utilisez -on pour crypter un lecteur. Avec -off, vous le décryptez à nouveau et mettez ainsi fin à la protection BitLocker. | 10/8/7
mem | Affiche des informations sur la mémoire de travail et indique quels programmes y sont actuellement chargés. | 32 bits/DOS
memmaker | Optimise la mémoire de travail. | 98/95/DOS
mode | Configure les périphériques du système, en particulier sur le port COM ou LPT. | N’importe quelle version de Win/DOS
mofcomp | Analyse les fichiers au format MOF (Managed Object Format) et ajoute des classes et des instances au référentiel WMI. | N’importe quelle version de Win
mountvol | Crée et supprime les points de terminaison pour les lecteurs et les affiche. | 10/8/7/Vista/XP
msav | Démarre Microsoft Antivirus. | DOS
msbackup | Démarre Microsoft Backup. (remplace backup et restore.) | DOS
mscdex | Charge le CD-ROM pour MS-DOS. | 98/95/DOS
msd | Démarre le programme Microsoft Diagnostics, qui peut être utilisé pour afficher les informations système. | DOS
msiexec | Démarre Windows-Installer, avec lequel on peut installer et configurer Windows. | 10/8/7/Vista/XP
muiunattend | Démarre un processus de configuration automatique de l’interface utilisateur multilingue (MUI). | 10/8/7/Vista
netcfg | Installe le système d’exploitation minimisé Microsoft Windows PE. | 10/8/7/Vista
ocsetup | Installe des fonctions Windows complémentaires | 8/7/Vista
pentnt | Détecte les Floating Point Division Errors dans les puces Pentium, démarre Floating Point Emulation et désactive Floating Point Hardware. | XP
pkgmgr | Installe, désinstalle et configure des paquets et des fonctionnalités pour Windows. | 10/8/7/Vista
pnpunattend | Automatise l’installation des pilotes de périphériques. | 10
pnputil | Installe les périphériques Plug-and-play à partir de l’invite de commande. | 10/8/7/Vista
power | Utilise le statut IDLE d’un processeur pour réduire la consommation d’énergie. | 98/95/DOS
powercfg | Permet à l’utilisateur de modifier les options d’alimentation de l’ordinateur et de contrôler les plans d’alimentation. | 10/8/7/Vista/XP
pwlauncher | Configure les options de démarrage de Windows To Go, vous permettant de démarrer Windows à partir d’une clé USB. | 10/8
qprocess | Fournit des informations sur les processus en cours d’exécution. | 10/8/7/Vista
query | Affiche le statut d’un service spécifique. | 10/8/7/Vista
quser | Fournit des informations sur les utilisateurs actuellement enregistrés. | 10/8/7/Vista
reagentc | Configure l’environnement de restauration Windows pour réparer l’installation du système d’exploitation. | 10/8/7
recimg | Crée une image personnalisée de Windows pour restaurer le système. | 8
reg | Gère le registre à partir de l’invite de commande. Les utilisateurs peuvent créer de nouvelles clés (reg add) et les supprimer (reg delete). | 10/8/7/Vista/XP
regini | Modifie les permissions pour les registres. | 10/8/7/Vista/XP
register-cimprovider | Enregistre un Common Information Model Provider (CIM-Provider) dans Windows. | 10/8
regsvr32 | Enregistre un fichier DLL dans le registre. | 10/8/7/Vista/XP
relog | Crée de nouveaux protocoles d’indicateurs de performance à partir des données des protocoles existants. | 10/8/7/Vista/XP
repair-bde | Répare et décrypte les disques qui sont cryptés avec BitLocker. Les fichiers doivent être stockés sur un disque de rechange. | 10/8/7
reset | Réinitialise une session. (Alternativement, la commande rwinsta peut aussi être utilisée pour cela.) | 10/8/7/Vista/XP
restore | Restaure les sauvegardes créées par la commande backup (remplacée par msbackup). | DOS
rwinsta | La commande a la même fonction que reset. | 10/8/7/Vista/XP
sc | Gère les services en connectant la commande au Service Controller. | 10/8/7/Vista/XP
scanreg | Répare le registre et vous permet d’en créer une sauvegarde. | 98/95
sdbinst | Applique des fichiers de base de données personnalisés (SDB). | 10/8/7/Vista/XP
secedit | Analyse les paramètres de sécurité en comparant la configuration actuelle avec les modèles. Les paramètres peuvent également être configurés, importés et exportés à l’aide de cette commande. | 10/8/7/Vista/XP
setver | Définit un numéro de version de MS-DOS qui est transmis à un programme, même s’il ne correspond pas à la version réelle. | 32 bits/DOS
setx | Crée ou modifie des variables d’environnement dans l’environnement utilisateur ou système. | 10/8/7/Vista
sfc | Vérifie tous les fichiers système importants et protégés. Les mauvaises versions seront remplacées par des versions correctes. | 10/8/7/Vista/XP
smartdrv | Démarre et gère le programme de cache disque SMARTDrive. | 98/95/DOS
sys | Copie les fichiers système de MS-DOS et de l’interpréteur de commandes sur un autre disque. Celui-ci sera alors prêt pour le lancement | 98/95/DOS
systeminfo | Affiche des informations sur l’installation de Windows, y compris tous les Service Packs installés. L’information peut se référer à la fois au système local et à l’ordinateur à distance. | 10/8/7/Vista/XP
tpmvscmgr | Crée et supprime les TPM-Virtual-Smart-Cards. Il s’agit de Smartcards virtuelles qui sont cryptées sur la base du Trusted Platform Module. | 10/8
tracerpt | Traite les logs ou les données en temps réel pendant le traçage des programmes informatiques. | 10/8/7/Vista/XP
typeperf | Affiche ou écrit les données du compteur dans un fichier. | 10/8/7/Vista/XP
unformat | Annule le formatage d’un lecteur à l’aide de la commande format. | DOS
unlock | Déverrouille un disque qui a été verrouillé avec lock. | 98/95
unlodctr | Supprime les noms et les explications des compteurs de performance extensibles dans le registre Windows. | 10/8/7/Vista/XP
vaultcmd | Crée, supprime et affiche les informations de connexion enregistrées. | 10/8/7
vol | Affiche le nom et le numéro de série d’un disque dur | N’importe quelle version de Win/DOS
vsafe | Démarre le logiciel antivirus VSafe. | DOS
vssadmin | Gère le Volume Shadow Copy Service, avec lequel vous pouvez enregistrer différentes versions (Snapshots) de disques. | 10/8/7/Vista/XP
wbadmin | Crée des sauvegardes du système d’exploitation et fournit des informations sur les sauvegardes effectuées. | 10/8/7/Vista
wevtutil | Gère les journaux d’événements et les fichiers de journaux d’événements. | 10/8/7/Vista
whoami | Retourne des informations sur l’utilisateur actuel. Le paramètre /GROUP fournit des informations supplémentaires sur l’appartenance à un groupe | 10/8/7/Vista
winmgmt | Gère les dépôts WMI. Par exemple, les sauvegardes sont possibles via la commande (/backup). | N’importe quelle version de Win
winsat | Évalue de nombreux facteurs du système, tels que la performance du processeur ou les capacités graphiques. | 10/8/7/Vista
wmic | Démarre l’instrumentation de gestion Windows dans l’invite de commande. Cela vous permet de modifier de nombreux paramètres Windows, à la fois localement et sur des ordinateurs à distance. | 10/8/7/Vista/XP
xwizard | Enregistrer les données Windows sous forme de fichiers XML. | 10/8/7

# Réseau #

Commandes CMD | Descriptions | Versions de Windows
- | - | -
arp | Affiche et modifie les entrées qui se trouvent dans le cache de l’Address Resolution Protocol. | N’importe quelle version de Win
atmadm | Affiche des informations sur l’Asynchronous Transfer Mode (ATM). | XP
certreq | Gère et crée les demandes d’enregistrement des certificats auprès des autorités de certification. | 10/8/7/Vista
certutil | Gère les services liés à l’authentification par certificat. | 10/8/7/Vista
change | Modifie les paramètres d’un terminal server et est utilisé avec les paramètres logon, port ou user. (Remplace les commandes chglogon, chgport et chgusr.) | 10/8/7/Vista
checknetisolation | Vérifie la capacité réseau des applications de Windows store. | 10/8
chglogon | Active, désactive ou ajuste les connexions aux sessions Terminal Server. | 10/8/7/Vista
chgport | Affiche ou modifie l’affectation du port COM pour les serveurs de terminaux pour assurer la compatibilité DOS. | 10/8/7/Vista
chgusr | Modifie le mode d’installation d’un terminal server. | 10/8/7/Vista
cmstp | Installe ou désinstalle les profils pour le Gestionnaire de connexions. | 10/8/7/Vista/XP
djoin | Crée un nouveau compte dans Active Directory Domain Services (AD DS). | 10/8/7/Vista
finger | Fournit des informations sur les utilisateurs d’appareils à distance qui utilisent le service Finger (unix). | 10/8/7/Vista/XP
ftp | Transfère des données vers ou depuis un serveur FTP vers un PC. La commande offre d’autres options : par exemple, vous pouvez activer le débogage avec -d. | N’importe quelle version de Win/DOS
getmac | Affiche l’adresse MAC de tous les adaptateurs réseau. Vous définissez le format de sortie (Table, Liste, CSV) avec /FO. Vous pouvez également utiliser /S pour appliquer la commande aux systèmes à distance. | 10/8/7/Vista/XP
gpresult | Affiche des informations sur le Group Policy. | 10/8/7/Vista/XP
gpupdate | Actualise les informations sur le Group Policy. | 10/8/7/Vista/XP
hostname | Donne le nom de l’hôte actuel. | 10/8/7/Vista/XP
interlnk | Connecte deux ordinateurs via une transmission série ou parallèle pour partager des fichiers ou des imprimantes. | DOS
intersvr | Démarre un serveur Interlnk et transfère les données d’un ordinateur à un autre via une transmission série ou parallèle. | DOS
ipconfig | Fournit des informations sur l’IP de chaque adaptateur réseau utilisé. Vous pouvez également utiliser la commande pour libérer (/release) ou renouveler (/renew) les adresses. Le cache DNS peut également être vidé avec /flushdns. | N’importe quelle version de Win/DOS
ipxroute | Modifie et affiche les informations sur les tables de routage IPX. | XP
irftp | Transfère les fichiers par connexion infrarouge s’il en existe une. | 10/8/7/Vista
iscsicli | Gère iSCSI, permettant les connexions via le protocole SCSI. | 10/8/7/Vista
klist | Affiche tous les tickets utilisés pour s’authentifier au service Kerberos. De plus, la commande vous permet de supprimer les Tickets (purge). | 10/8/7
ksetup | Configure une connexion au serveur Kerberos. | 10/8/7
mount | Permet les partages réseau sous le Network File System. (Pour utiliser la commande, vous devez d’abord activer les services NFS.) | 7/Vista
mrinfo | Fournit des informations sur le routeur. | 10/8/7/Vista/XP
nbtstat | Affiche des statistiques et des informations sur les connexions TCP/IP sur les ordinateurs distants. | 10
net | Configure et affiche les paramètres réseau. | N’importe quelle version de Win
net1 | Configure et affiche les paramètres réseau. (Il est recommandé d’utiliser net à la place. La commande net1 n’a été conçue que comme une solution temporaire à un problème Y2K. | 10/8/7/Vista/XP
netsh | Démarre le shell réseau, qui vous permet de définir les paramètres réseau des ordinateurs locaux et distants. | 10/8/7/Vista/XP
netstat | Affiche des statistiques et des informations sur les connexions TCP/IP sur l’ordinateur local. | N’importe quelle version de Win
nfsadmin | Gère les serveurs et clients NFS (pour pouvoir utiliser la commande, vous devez d’abord activer les services NFS sous Windows). | 7/Vista
nltest | Affiche des informations sur les canaux sécurisés dans Active Directory Domain Services (AD DS) et teste ces connexions. | 10/8/7
nslookup | Envoie une requête DNS à une adresse IP ou un nom d’hôte spécifique au serveur DNS par défaut. Alternativement, un autre serveur DNS peut être spécifié. | 10
ntsd | Exécute le débogage. | XP
pathping | Fournit des informations sur le transfert et la perte de paquets lors de l’envoi sur un réseau et spécifie également la Latency. | 10/8/7/Vista/XP
ping | Envoie une Internet Control Message Protocol Echo Request à un hôte spécifique pour vérifier s’il est accessible. De plus, la durée de l’écho est donnée. Les signaux Ping peuvent être transmis en continu avec -t. Pour afficher une statistique pour cette action, appuyez sur Ctrl+Afficher, vous pouvez annuler l’opération avec Ctrl+C. | N’importe quelle version de Win
qappsrv | Affiche tous les ordinateurs distants disponibles sur le réseau. | 10/8/7/Vista/XP
qwinsta | Affiche les informations sur les sessions Remote Desktop ouvertes. | 10/8/7/Vista
rasautou | Gestion des adresses AutoDialer | 10/8/7/Vista/XP
rasdial | Démarre et arrête les connexions réseau pour les clients Microsoft. | 10/8/7/Vista/XP
rcp | Copie les fichiers d’un ordinateur Windows vers un serveur exécutant un daemon RSDH, et vice versa. | 7/Vista/XP
rdpsign | Signature d’un fichier Remote Desktop Protocol (fichier RDP). | 10/7
rexec | Exécute des commandes sur un ordinateur distant exécutant un daemon Rexec. | Vista/XP
route | Affiche la table de routage et vous permet de modifier (change), ajouter (add) ou supprimer (delete) des entrées. | N’importe quelle version de Win
rpcinfo | Envoie un Remote Procedure Call (RPC) à un serveur RPC. Le résultat montre les programmes sur l’ordinateur distant (les services NFS doivent être activés sous Windows pour utiliser la commande). | 7/Vista
rpcping | Envoie un Ping à un serveur via Remote Procedure Call (RPC) et vérifie si une connexion est possible. | 10/8/7/Vista
rsh | Exécute des commandes sur des ordinateurs distants exécutant le programme Unix Remote Shell (RSH). | 7/Vista/XP
setspn | Crée, supprime et modifie les SPN. Ce sont des identificateurs uniques pour les services sur un réseau qui utilise l’authentification Kerberos. | 10/8/7
shadow | Surveille la session sur un ordinateur distant. De plus, l’utilisateur peut contrôler activement l’ordinateur distant. | 7/Vista/XP
showmount | Fournit des informations sur les systèmes de fichiers NFS. (Pour utiliser cette commande, vous devez d'abord activer les services NFS sous Windows.) | 7/Vista
tcmsetup | Active ou désactive un client pour la Telephony Application Programming Interface (TAPI), une interface de programmation pour les applications téléphoniques. | 10/8/7/Vista/XP
telnet | Permet la communication avec un autre ordinateur qui utilise également le protocole Telnet. | N’importe quelle version de Win/DOS
tftp | Permet l’échange de fichiers entre l’ordinateur local et un serveur qui prend en charge le protocole Trivial File Transfer Protocol (TFTP) (pour utiliser la commande, le client TFTP doit être activé dans les préférences système). | 10/8/7/Vista/XP
tlntadmn | Gère un serveur Telnet sur un ordinateur local ou distant (pour utiliser la commande, les fonctions du serveur Telnet doivent être activées dans les préférences système). | 8/7/Vista/XP
tracert | Piste un paquet de données sur son chemin à travers le réseau vers un serveur. Celui-ci ne se contente pas de vérifier si le paquet arrive et en combien de temps, mais il enregistre également les Hops que le paquet réalise sur son chemin. Tous les paquets ont un temps de survie fixe (TTL), qui augmente progressivement avec la commande. | N’importe quelle version de Win
tscon | Connecte la session utilisateur locale en cours à une session sur un ordinateur distant. | 10/8/7/Vista/XP
tsdiscon | Met fin à la connexion entre une session utilisateur locale et la session sur un ordinateur distant. | 10/8/7/VistaXP
tskill | Terminer un processus sur un ordinateur distant. | 10/8/7/Vista/XP
tsshutdn | Arrête ou redémarre un terminal server distant. Si l’ordinateur adressé le prend en charge, l’ordinateur entier peut également être arrêté de cette façon. | XP
umount | Supprime les disques du Network File System installés. (Pour utiliser la commande, vous devez activer les fonctions NFS dans le panneau de configuration.) | 7/Vista
w32tm | Gère le fuseau horaire de Windows, qui synchronise la date et l’heure sur tous les ordinateurs qui partagent un domaine AD-DS. | 10/8/7/Vista/XP
waitfor | Envoie ou attend un signal. Si le signal ne doit pas être envoyé à tous les ordinateurs d’un domaine, mais seulement à un ordinateur spécifique, utilisez le paramètre /S. Cette commande permet de synchroniser les ordinateurs d’un réseau. | 10/8/7/Vista
wecutil | Crée et gère les abonnements aux événements. Celles-ci sont transmises à partir de sources d’événements distantes qui prennent en charge le protocole de management WS. | 10/8/7/Vista
winrm | Gère les connexions sécurisées entre les ordinateurs locaux et distants en utilisant le protocole de gestion WS. | 10/8/7/Vista
winrs | Permet d’accéder à la ligne de commande d’un ordinateur distant via une connexion sécurisée pour effectuer des modifications. Si vous voulez désactiver le cryptage, utilisez -un. | 10/8/7/Vista
wsmanhttpconfig | Gère les fonctions de la Windows Remote Managements (winrm). | 10/8/7/Vista

Conseil    
Windows dispose maintenant de trois commandes différentes pour copier des fichiers et des répertoires. Par exemple, xcopy est plus puissant que copy, et robocopy a une plus grande portée que xcopy. Si vous utilisez une version plus récente de Windows (Vista ou ultérieure), il est préférable d’utiliser la commande robocopy dans l’invite de commande.    

---

# Liens externes à consulter liés à cette article: #

Voici un article dédié à [Robocopy scripts Generator Sauvegardes faciles avec Robocopy](http://www.rptools.org/Outils-DV/robocopy-scripts-generator.html) fait par notre ami Pierre-Louis.    
Et un autre article qui  contient [100 raccoursi de commandes exécuter, run, et 85 raccourcis de configurations directes pour Windows 10](http://www.rptools.org/Outils-DV/raccourcis-config-directe-windows-10.html) fait par lui-même!    
Vous pouvez aussi consulter ça page Web Outils-DV, logiciels et tutos pour Déficients visuels [par là](http://www.rptools.org/Outils-DV/)    
Pour se familiariser avec les commandes DOS, on peut aussi consulter l'article fait par Christian Hartmann [en cliquant ici](http://www.studyvoxmusi.biwi.ca/commandesdos.php)    
Merci beaucoup à Pierre- Louis et àChristian Hartmann. 🙇    

---

Profitez donc de ce récap des commande CMD pour Windows! 😉    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouveau espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
