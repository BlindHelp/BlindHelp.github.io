---
title: Créer un lecteur de radios internet par Jean-Paul Vidal dit "Tyrtamos"
permalink: "/pyqt5_radioweb/"
layout: post
author: BlindHelp
---

<footer>Publié le Mardi 16 Novembre 2021 - Dernière mise à jour le Lundi 22 Novembre 2021</footer>


Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, nous vous apportons la façon de créer un lecteur de radios internet grâce au code trouvé sur  [Les recettes Python de Tyrtamos](https://python.jpvweb.com/python/mesrecettespython/doku.php?id=pyqt5_radioweb) ce qui m'a servi en grande partie à la rédaction de ce post, à savoir que tous les crédits sont pour Monsieur. Jean-Paul Vidal dit "Tyrtamos"    
Comme vous le savez, je ne suis pas un programmeur ni quoi que ce soit en particulier, je ne suis qu'une personne curieuse, et je cherchais un code pour créer un lecteur de radio Web minimaliste et j'ai dû Retrousser mes manches et mettre la main  dans le cambouis.    
Ensuite viendra mes observations générales pour une meilleure compréhension afin que vous puissiez utiliser le code de l'auteur afin de pouvoir créer un lecteur de radios internet de la meilleure façon possible, ceux-ci se trouvent après la partie déjà expliquée par lui-même dans l'article original sur[Les recettes Python de Tyrtamos](https://python.jpvweb.com/python/mesrecettespython/doku.php?id=pyqt5_radioweb) que je reprends sur ce post.    
Que vous dire de plus avant de se lancer ?    
Eh bien je ne vois pas autre chose que... c'est parti !    
Je vous souhaite une bonne lecture.    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du logiciel ou du code téléchargé  ni des informations ce trouvant sur le site Web dédié et l'utilisation du programme ou le code téléchargé est à vos risques et périls. ☠  

# pyqt5_radioweb

Table des matières<a id="Table des matières"></a>
-------------
* [Créer un lecteur de radios internet](#mark1)
* [Généralités](#mark2)
* [Téléchargement](#mark3)
* [Un lecteur de radio internet minimum](#mark4)
* [Un lecteur de radios internet avec "playlist"](#mark5)
* [Fichier des radios retenues](#mark6)
* [Code proposé](#mark7)
* [Version autonome avec pyinstaller](#mark8)
* [Intégration du lecteur dans la zone de notification](#mark9)
* [Code proposé](#mark10)
* [Version autonome avec pyinstaller](#mark11)
* [Observations générales faites en vrac par BlindHelp](#mark12)

---

# Créer un lecteur de radios internet<a id="mark1"></a>

[développé sous Python v3.5 et PyQt5 v5.9 avec Windows 10]

[Retour à la table des matières](#Table des matières)

# Généralités<a id="mark2"></a>

Python, que certains considèrent encore comme un “langage de script” (!) dispose, grâce à des bibliothèques comme PyQt5, de possibilités importantes dans le domaine multimédia. J'ai eu alors envie d'avoir un lecteur de radios internet pour mon propre usage, et comme ça marche très bien, je vais vous en faire profiter!    
Je n'ai pas utilisé d'instructions spécifiques à l'un des OS courants (Windows, Linux, MacOS), aussi je pense que ça fonctionnera sur ces 3 OS. Cependant, j'ai fait le développement sous Windows 10, et j'ai pu voir que sous Linux, il pouvait y avoir des subtilités d'installation à résoudre avant que ça marche… Je n'ai pas (encore) essayé sous Mac OS.    

[Retour à la table des matières](#Table des matières)

# Téléchargement<a id="mark3"></a>

Vous pouvez trouver ici les différents fichiers dont on parle plus bas, sous forme d'archive compressée “zip”:    
[radioweb.zip](https://python.jpvweb.com/python/mesrecettespython/lib/exe/fetch.php?media=radioweb.zip)

Pour votre information    
Une fois téléchargé, il faudra renommer le fichier: radioweb.zip par: radioweb.rar, cela n'est pas annoncé par l'auteur. Je l'ai découvert de pure coïncidence! 😏    
Ensuite il faudra ouvrir WinRAR archiver puis ouvrir le fichier: radioweb.rar    
puis aller dans le menu Outils puis choisir: Réparer l'archive	Alt+R    
Le nouveau fichier  réparé  sera renommé par: rebuilt.radioweb.rar    
Aller dans le menu Commandes pour le tester puis choisir: Tester les fichiers archivés	Alt+T    
Et bingo! Le test ne donne aucune erreur dans le fichier! 😉    
Vous pouvez ensuite le renommé par son nom d'origine d'avant: radioweb.rar    
Je l'ai réparé l'animal! 😉    

Comme une deuxième alternative, si vous n'avez pas le programme WinRAR , vous pouvez télécharger gratuitement 7-Zip    
Vous devriez trouver votre bonheur à partir de cette page:    
[http://www.spiroo.be/7zip/](http://www.spiroo.be/7zip/)    
Une fois installé 7-Zip, il faudra renommer le fichier: radioweb.zip par: radioweb.rar, faire menu contextuel sur le fichier que nous avons téléchargé précédemment, et choisir:    
`7-Zip sous-menu`    
puis choisir:    
`Ouvrir archive`    
Une fois que notre fichier est ouvert, nous pouvons voir son contenu.    
Aller dans le menu Édition puis choisir:    
`Sélectionner Tout	Shift+[Grey +]`    
Puis aller dans le menu Fichier puis choisir:    
`Copier vers...	F5`    
Puis faire `OK`    
Et nous aurons tout le contenu de nos fichiers au même niveau où le fichier radioweb.rar est situé. Je l'ai maintenant chopé l'animal! 😉 Ci-dessous, vous aurez le contenu de l'archive décrit par l'auteur.    

Contenu:    

*	 radiowebmini.py: le lecteur de radio internet minimum
*	 radioweb.py: le lecteur de radio internet avec playlist
*	 radioweb_tray.py: le même lecteur intégré dans la zone de notification
*	 icons8-tour-de-radio-50.png et icons8-tour-de-radio-50.ico: les icônes utilisées
*	 radioweb.txt: la liste des radios que j'ai retenues pour mon usage

Je n'ai pas mis les scripts pour pyinstaller, mais il est facile de les récupérer ci-dessous par copier-coller. Je n'ai pas mis non plus les exécutables “.exe” qui sont générés par pyinstaller pour être sûr de ne pas diffuser de virus (on n'est plus sûr de rien de nos jours sur ce sujet…).    

[Retour à la table des matières](#Table des matières)

# Un lecteur de radio internet minimum<a id="mark4"></a>

Voilà une version minimum. Vous voyez que la partie purement écoute prend… 3 lignes! Et en fait, il a fallu créer une petite fenêtre uniquement pour pouvoir arrêter le programme.    
L'écoute de la radio internet utilise le module QtMultimedia de PyQt5.    
Le programme est prévu pour être lancé avec l'url (l'adresse web) de la radio internet en argument de la ligne de commande. Avec un bureau graphique (Windows, Linux, MacOS), on peut créer une icône sur le bureau, qui lancera le programme avec la radio souhaitée en argument.    
Bien que ce ne soit pas son but, ce programme accepte sans problème les fichiers audio locaux de type mp3! Dans le code, on regarde si le fichier existe sur disque, et si oui, on utilise QUrl.fromLocalFile(url) au lieu de QUrl(url), ce qui ajoutera "file:///" au début de l'adresse. Pour tenir compte de Windows, on en profite pour remplacer les éventuels '\' du chemin disque, par des '/'.    
Voilà le code proposé, très largement documenté. Il s'appelle chez moi “radiowebmini.py (on peut mettre .pyw sous Windows pour éviter l'affichage de la console):    
```
#!/usr/bin/python
# -*- coding: utf-8 -*-
# Python3 v3.5 PyQt5 v5.9
 
"""
Lecteur basique d'une radio internet
Auteur: Jean-Paul Vidal dit "Tyrtamos" (mai 2018)
 
Pour les adresses web des radios francophones, voir par exemple:
http://fluxradios.blogspot.fr/
 
Exemple pour la radio "Frequence 3":
http://ice.stream.frequence3.net/frequence3-128.mp3
 
Pour télécharger une icône, voir par exemple:
https://icones8.fr/icon/2308/tour-de-radio
"""
 
import sys
import os
 
from PyQt5.QtWidgets import (QApplication, QWidget, QPushButton, 
                             QGridLayout, QMessageBox, QStyleFactory)
from PyQt5.QtGui import QIcon
from PyQt5.QtCore import Qt, QUrl
from PyQt5.QtMultimedia import QMediaPlayer, QMediaContent
 
#############################################################################
class RadioWeb(QWidget):
 
    def __init__(self, qurlradio, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Radio internet")
        self.resize(250,50)
        self.setAttribute(Qt.WA_DeleteOnClose, True)
 
        # ajoute un bouton pour arrêter le programme (et l'écoute)
        self.bouton = QPushButton("Arrêter", self)
        self.bouton.setStyleSheet("background-color:lightgreen;")
        self.bouton.clicked.connect(self.close) # fermeture
        layout = QGridLayout()
        layout.addWidget(self.bouton, 0, 0) # bouton au milieu de fenêtre
        self.setLayout(layout)
 
        # crée le player
        self.player = QMediaPlayer()
 
        # et lance l'écoute de la radio demandée
        self.player.setMedia(QMediaContent(qurlradio))
        self.player.play()
 
#############################################################################
if __name__ == "__main__":
 
    # active la bibliothèque graphique
    app = QApplication(sys.argv)
 
    # met un style pour toute l'application
    app.setStyle(QStyleFactory.create("Fusion"))
 
    # option: met une icone pour l'application
    icone = "icons8-tour-de-radio-50.png"
    icone = os.path.join(os.path.dirname(os.path.abspath(__file__)), icone)
    app.setWindowIcon(QIcon(icone))
 
    # récupére l'argument en ligne de commande
    if len(sys.argv)>1:
        url = sys.argv[1]
        if os.path.exists(url):
            # l'url est un fichier audio local sur disque
            qurl = QUrl.fromLocalFile(url.replace('\\', '/'))
        else:
            # l'url est une adresse internet
            qurl = QUrl(url)
    else:
        QMessageBox.information(None, 
            "Chargement de la radio", 
            "Aucune radio n'a été demandée")
        app.quit()
        sys.exit()
 
    # lance la fenêtre pour l'écoute de la radio
    radioweb = RadioWeb(qurl)
    radioweb.show()
 
    # boucle de traitement des évènements et sortie du programme    
    sys.exit(app.exec_())
```
Si ce programme s'appelle “radiowebmini.py”, il faudra pour écouter l'excellente radio “fréquence 3” faire dans une console (cmd.exe pour Windows):    
`python radiowebmini.py http://ice.stream.frequence3.net/frequence3-128.mp3`    
Il faut adapter cette ligne de code selon l'OS. Par exemple, sous Linux, il faut en général utiliser python3 pour avoir l'interpréteur Python version 3.x. etc…    
Au lancement, la radio démarre au bout de quelques secondes (temps de mise en cache), et une petite fenêtre apparait dont la vocation est de permettre l'arrêt du programme (et donc de l'écoute).    
Il s'agit ici d'une version minimale pour l'écoute d'une seule radio. Mais, on peut faire mieux en ajoutant une “playlist” qui permet à tout moment de sélectionner la radio qu'on a envie d'écouter parmi les radios disponibles. C'est l'objet du chapitre suivant.    

[Retour à la table des matières](#Table des matières)

# Un lecteur de radios internet avec "playlist"<a id="mark5"></a>

Avec cette version plus complète et plus confortable, le lancement du programme affiche une fenêtre (QWidget) avec la liste des radios choisies (QTableWidget).    
Un double-clic sur n'importe quelle radio de cette liste lancera son écoute. On peut aussi naviguer avec le clavier, et la touche “entrée” sélectionnera la radio à écouter et lancera son écoute.    
Pour faire une pause dans l'écoute, on peut faire “clic droit ⇒ Pause” dans le petit menu popup, ou faire “Alt-P” au clavier. Pour reprendre, on fera “clic-droit ⇒ Reprendre” ou “Alt-R” au clavier.    
Pour arrêter le programme (et donc l'écoute), on peut faire “clic-droit ⇒ Quitter” ou simplement cliquer sur la croix de la fenêtre ou encore faire “Alt-Q” au clavier.    

[Retour à la table des matières](#Table des matières)

# Fichier des radios retenues<a id="mark6"></a>

```
Les radios sont dans le fichier “radioweb.txt” (encodé 'utf-8') et chaque ligne désigne une radio avec un format: “nom_radio | url_radio”. Le séparateur '|' a été choisi parce qu'il a peu de chance de se retrouver dans un nom de radio ou dans son adresse web. Voilà par exemple mon fichier radioweb.txt avec toutes les radios que j'ai retenues pour mon usage:
`#` liste des radios internet francophones. Voir ici par exemple:
# http://fluxradios.blogspot.fr
# format des lignes: nom_radio | url_radio
# les lignes vides ou commençant par '#' ne comptent pas

RadioSwissClassic | http://stream.srg-ssr.ch/m/rsc_fr/mp3_128
France Musique | http://direct.francemusique.fr/live/francemusique-midfi.mp3
RadioClassique | http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3
Nostalgie | http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3
Fréquence3 |  http://ice.stream.frequence3.net/frequence3-128.mp3
NRJ | http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3
Skyrock | http://www.skyrock.fm/stream.php/tunein16_128mp3.mp3
Cherie FM | http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3
Rires et Chansons | http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3
Fun radio | http://streaming.radio.funradio.fr/fun-1-44-128
RTL2 | http://streaming.radio.rtl2.fr/rtl2-1-44-128
OuiFM | http://ouifm.ice.infomaniak.ch/ouifm-high.mp3
Mistral FM (Toulon) | http://mistralfm.ice.infomaniak.ch/mistralfm-high.mp3
Attention: ces adresses peuvent changer à tout moment! Alors, si une radio ne marche plus, cherchez une autre adresse sur le web, et mettez à jour votre fichier avec un simple éditeur de texte (avec encodage 'utf-8' pour les accents).
Même si ce n'est pas le but du programme, les fichiers “audio” locaux type mp3 sont acceptés avec le même format. On peut par exemple avoir la ligne suivante (cas de Windows: aucun problème pour avoir des espaces ou des caractères accentués dans le chemin, ou pour conserver les '\' qui seront neutralisés dans le code):
Titre du morceau | C:\chemin_vers_le_fichier\fichier.mp3
A noter que j'ai essayé le format traditionnel des playlists ”.m3u“ (et même ”.m3u8“ pour l'encodage 'utf-8') créées initialement pour le lecteur WinAmp. Malheureusement, QtMultimedia intègre bien les url sans générer d'erreur, mais pas les noms des radios qui sont pourtant nécessaires ici. Les versions suivantes de PyQt5 ajouteront peut-être cette fonctionnalité?
```

[Retour à la table des matières](#Table des matières)

# Code proposé<a id="mark7"></a>

Petite particularité du code proposé: il peut être exécuté directement, mais aussi importé pour l'utilisation à partir de la zone de notification (voir chapitre suivant). La variable booléenne globale NOTIF permet de tenir compte des 2 cas, ce qui permet de n'avoir qu'un seule page de codes pour les 2 utilisations.    
Voilà le code proposé, largement commenté. Le programme s'appelle chez moi “radioweb.py” (on peut mettre .pyw sous Windows pour éviter l'affichage de la console):    
```
#!/usr/bin/python
# -*- coding: utf-8 -*-
# Python3 v3.5 PyQt5 v5.9
 
"""
Lecteur avec playlist d'une radio internet
Auteur: Jean-Paul Vidal dit "Tyrtamos" (mai 2018)
 
Les noms et adresses des radios sont dans le fichier radioweb.txt
 
Pour les adresses web des radios francophones, voir par exemple:
http://fluxradios.blogspot.fr/
 
Aussi sur les sites web des radios. Exemple pour "Frequence 3":
http://ice.stream.frequence3.net/frequence3-128.mp3
 
Pour télécharger une icône, voir par exemple:
https://icones8.fr/icon/2308/tour-de-radio
"""
 
import sys
import os
 
from PyQt5.QtWidgets import (QApplication, QWidget, QTableWidget, QMenu, 
    QTableWidgetItem, QAbstractItemView, QGridLayout, QMessageBox, 
    QStyleFactory, QAction)
 
from PyQt5.QtGui import QFont, QIcon
 
from PyQt5.QtCore import (Qt, QUrl, pyqtSlot, QLocale, QLibraryInfo, 
    QTranslator, qInstallMessageHandler)
 
from PyQt5.QtMultimedia import QMediaPlayer, QMediaPlaylist, QMediaContent
 
##############################################################################
# variables globales
 
# indique si ce script est exécuté directement ou seulement importé
NOTIF = True
 
##############################################################################
def chargeradios(fichieradios):
    """charge les radios du fichier radioweb.txt
       format de chaque ligne de ce fichier: "nom | url"
       retourne une liste de listes: [..., [nom, url], ...]
    """
    if not os.path.exists(fichieradios):
        raise ValueError("Le fichier 'radioweb.txt' n'est pas trouvé")
    radios = []
    with open(fichieradios, "r", encoding="utf-8") as fs:
        for ligne in fs:
            ligne = ligne.strip()
            if ligne=="":
                continue # ligne vide => non utilisée
            if ligne.startswith('#'):
                continue # ligne commentaire => non utilisée
            nom, url = ligne.split('|')
            radios.append([nom.rstrip(), url.lstrip()])
    return radios            
 
##############################################################################
class RadioWeb(QWidget):
    """fenêtre qui présente la liste des radios disponibles et qui permet de
       sélectionner celle qu'on veut écouter
    """
 
    #=========================================================================
    def __init__(self, radios=(), parent=None):
        super().__init__(parent)
 
        self.resize(250, 500)
        self.setWindowTitle("Radio Internet")
 
        # fait que la fenêtre sera détruite après sa fermeture
        self.setAttribute(Qt.WA_DeleteOnClose, True)
 
        # stocke la liste des radios [..., [nom, url], ...]
        self.radios = radios
 
        # définit les polices de caractères à utiliser
        famille = "DejaVu Sans"
        taille = 9
 
        # police normale
        self.font = QFont()
        self.font.setFamily(famille)
        self.font.setPointSize(taille)
 
        # police avec gras et italique pour la radio sélectionnée
        self.fontselect = QFont()
        self.fontselect.setFamily(famille)
        self.fontselect.setPointSize(taille)
        self.fontselect.setBold(True)
        self.fontselect.setItalic(True)
 
        # Crée un QTableWidget pour afficher les radios disponibles
        self.tw = QTableWidget(self)
        self.tw.setFont(self.font)
        self.nbrow, self.nbcol = len(self.radios), 1
        self.tw.setRowCount(self.nbrow)
        self.tw.setColumnCount(self.nbcol)
 
        # positionne le QTableWidget dans la fenêtre
        posit = QGridLayout()
        posit.addWidget(self.tw, 0, 0)
        self.setLayout(posit)
 
        # un double-clic lancera la radio sélectionnée
        self.tw.cellDoubleClicked.connect(self.selection)
 
        # peuple le QTableWidget avec les noms des radios (lecture seule)
        for row in range(0, self.nbrow):
            item = QTableWidgetItem(self.radios[row][0])
            item.setFlags(Qt.ItemIsSelectable | Qt.ItemIsEnabled)
            self.tw.setItem(row, 0, item)
 
        # met un titre en haut de la colonne affichée
        self.tw.setHorizontalHeaderItem(0, QTableWidgetItem("Radios"))
 
        # ajuste pour que la colonne affichée prenne toute la place horiz.
        h = self.tw.horizontalHeader()
        h.setStretchLastSection(True)
 
        # pour faire la sélection d'une seule ligne à la fois
        self.tw.setSelectionMode(QAbstractItemView.SingleSelection)
 
        # la sélection pourra être faite avec la souris et le clavier
        self.tw.setFocusPolicy(Qt.StrongFocus)
 
        # crée la playlist à partir de la liste des radios demandées
        self.playlist = QMediaPlaylist()
        for _, urlradio in radios:
            if os.path.exists(urlradio):
                # l'url est un fichier audio local sur disque
                qurlradio = QUrl.fromLocalFile(urlradio.replace('\\', '/'))
            else:
                # l'url est une adresse internet
                qurlradio = QUrl(urlradio)
            self.playlist.addMedia(QMediaContent(qurlradio))
 
        # crée le player
        self.player = QMediaPlayer()
 
        # met la playlist dans le player
        self.player.setPlaylist(self.playlist)
 
        # met en place un menu 'popup' pour le QTableWidget
        self.tw.setContextMenuPolicy(Qt.CustomContextMenu)
        self.tw.customContextMenuRequested.connect(self.popupmenutphotos)
 
        # met le focus sur le QTableWidget et la case courante sur [0,0]
        self.tw.setFocus()
        self.tw.setCurrentCell(0, 0)
 
    # =======================================================================
    @pyqtSlot("QPoint")
    def popupmenutphotos(self, position):
        """crée et affiche le menu popup du QTableWidget
        """
        popupmenu = QMenu(self)
 
        actionPause = QAction("Pause", self)
        actionPause.triggered.connect(self.pause)
        popupmenu.addAction(actionPause)
 
        actionReprendre = QAction("Reprendre", self)
        actionReprendre.triggered.connect(self.reprendre)
        popupmenu.addAction(actionReprendre)
 
        popupmenu.addSeparator()
 
        if NOTIF:
            actionCacher = QAction("Cacher", self)
            actionCacher.triggered.connect(self.hide)
            popupmenu.addAction(actionCacher)
        else:    
            actionQuitter = QAction("Quitter", self)
            actionQuitter.triggered.connect(self.close)
            popupmenu.addAction(actionQuitter)
 
        popupmenu.exec_(self.tw.viewport().mapToGlobal(position))
 
    #=========================================================================
    @pyqtSlot()
    def pause(self):
        """Méthode lancée par le choix 'pause' du menu popup
        """
        self.player.pause()
 
    #=========================================================================
    @pyqtSlot()
    def reprendre(self):
        """Méthode lancée par le choix 'reprendre' du menu
        """
        rowpl = self.player.playlist().currentIndex()
        # relance la lecture seulement si une radio a déjà été lue avant
        if self.tw.item(rowpl, 0).font() == self.fontselect:
            self.player.play()
 
    #=========================================================================
    @pyqtSlot(int, int)
    def selection(self, row, _):
        """Méthode lancée par un double-clic sur la radio sélectionnée
           => déclenche la lecture de cette radio (=> nom en gras-italique)
        """
        self.player.playlist().setCurrentIndex(row)
        self.player.play()
 
        # met en police normale toutes les radios
        for i in range(0, self.nbrow):
            self.tw.item(i, 0).setFont(self.font)
 
        # et met en gras-italique la radio sélectionnée
        self.tw.item(row, 0).setFont(self.fontselect)
 
    #=========================================================================
    @pyqtSlot("QEvent")
    def keyPressEvent(self, event):
        """permet de sélectionner une radio au clavier
        """
        if event.key()==Qt.Key_Enter or event.key()==Qt.Key_Return:
            # sélectionne la radio avec l'une des 2 touches "entrée"
            self.selection(self.tw.currentRow(), 0)
            event.accept()
 
        elif event.key()==Qt.Key_P and (event.modifiers() and Qt.Key_Alt):
            # Alt-P => met en pause au clavier la radio écoutée
            self.pause()
            event.accept()
 
        elif event.key()==Qt.Key_R and (event.modifiers() and Qt.Key_Alt):
            # Alt-R => reprend la lecture de la radio mise en pause avant
            self.reprendre()
            event.accept()
 
        elif event.key()==Qt.Key_Q and (event.modifiers() and Qt.Key_Alt):
            # Alt-Q => ferme ou cache la fenêtre
            self.close()
            event.accept()
 
        else:
            # autres cas: transmet l'évènement clavier à l'ancêtre
            super().keyPressEvent(event)
 
    #=========================================================================
    @pyqtSlot("QEvent")
    def closeEvent(self, event):
        """selon l'utilisation, ferme ou cache la fenêtre
        """
        if NOTIF:
            # cas d'importation pour QSystemTrayIcon => cache la fenêtre
            self.hide()
            event.ignore()
        else:
            # cas d'exécution directe => ferme la fenêtre
            event.accept()    
 
#############################################################################
if __name__ == "__main__":
 
    # indique que ce script est exécuté directement
    NOTIF = False
 
    #========================================================================
    # initialise la bibliothèque graphique
    app = QApplication(sys.argv)
 
    #========================================================================
    # Répertoire d'exécution avec ou sans pyinstaller
    if getattr(sys, 'frozen', False):
        REPEXE = sys._MEIPASS # programme traité par pyinstaller
    else:
        REPEXE = os.path.dirname(os.path.abspath(__file__)) # prog. normal
 
    #========================================================================
    # met la même icône pour toutes les fenêtres du programme
    icone = "icons8-tour-de-radio-50.png"
    app.setWindowIcon(QIcon(os.path.join(REPEXE, icone)))
 
    #========================================================================
    # met un style pour toute l'application
    if "Fusion" in [st for st in QStyleFactory.keys()]:
        app.setStyle(QStyleFactory.create("Fusion"))
    elif sys.platform=="win32":
        app.setStyle(QStyleFactory.create("WindowsVista"))
    elif sys.platform=="linux":
        app.setStyle(QStyleFactory.create("gtk"))
    elif sys.platform=="darwin":    
        app.setStyle(QStyleFactory.create("macintosh"))
    app.setPalette(QApplication.style().standardPalette())
 
    #========================================================================
    # assure la traduction automatique du conversationnel à la locale
    locale = QLocale.system().name()
    translator = QTranslator()
    reptrad = QLibraryInfo.location(QLibraryInfo.TranslationsPath)
    translator.load("qtbase_" + locale, reptrad) # qtbase_fr.qm
    app.installTranslator(translator)
 
    #========================================================================
    # charge les radios du fichier radioweb.txt
    replancement = os.path.dirname(os.path.abspath(__file__))
    fichieradios = os.path.join(replancement,"radioweb.txt") 
    try:
        listeradios = chargeradios(fichieradios)
    except ValueError:
        QMessageBox.information(None, 
            "Chargement des radios", 
            "Le fichier 'radioweb.txt' n'est pas trouvé")
        app.quit()
        sys.exit()
    if len(listeradios)==0:
        QMessageBox.information(None, 
            "Chargement des radios", 
            "Le fichier 'radioweb.txt' est vide")
        app.quit()
        sys.exit()
 
    #========================================================================
    # lance et affiche la fenêtre
    radioweb = RadioWeb(listeradios)
    radioweb.show()
 
    #========================================================================
    # boucle de traitement des évènements    
    sys.exit(app.exec_())
```

[Retour à la table des matières](#Table des matières)

# Version autonome avec pyinstaller<a id="mark8"></a>

On peut convertir le programme précédent pour avoir un fichier exécutable autonome, avec tout ce qui est nécessaire à son bon fonctionnement (interpréteur Python et bibliothèques utilisées).    
Sous Windows, voilà la ligne de commande qu'on peut utiliser sous forme d'un fichier de commande pour la console cmd.exe, qui s'appelle chez moi: “radioweb.bat” et qui fabrique un fichier exécutable unique “radioweb.exe:    
```
SET programme=radioweb

IF EXIST build_onefile RMDIR /S /Q build_onefile
IF EXIST dist_onefile RMDIR /S /Q dist_onefile

pyinstaller ^
--clean ^
--noconfirm ^
--noconsole ^
--onefile ^
--noupx ^
--distpath ".\dist_onefile" ^
--workpath ".\build_onefile" ^
--add-data ".\icons8-tour-de-radio-50.png;." ^
--add-data "E:\Programmes\Python35\Lib\site-packages\PyQt5\Qt\translations;PyQt5\Qt\translations" ^
--icon ".\icons8-tour-de-radio-50.ico" ^
%programme%.py
PAUSE
``````
Il faut, bien sûr, adapter les noms et adresses selon la configuration qu'on a, et ne pas oublier de copier à la main le fichier des radios “radioweb.txt” dans le même répertoire.    
Comme pyinstaller est multiplateforme, on devrait pouvoir faire quelque chose de similaire sous Linux et sous MacOS, mais je n'ai pas encore essayé.    

[Retour à la table des matières](#Table des matières)

# Intégration du lecteur dans la zone de notification<a id="mark9"></a>

La version ci-dessus est confortable, mais elle prend la place d'un programme normal dans la barre des tâches. Une autre solution plus intéressante est de l'intégrer dans la zone de notification.

[Retour à la table des matières](#Table des matières)

# Code proposé<a id="mark10"></a>

Dans ce cas, il y a une icône spécifique qui s'ajoute dans cette zone. Voilà comment ça marche:    

*	 Quand on clique sur cette icône, la fenêtre avec toutes les radios s'affiche pour qu'on en sélectionne une à écouter.
*	 Quand la fenêtre des radios est affichée, on peut sélectionner une radio avec un double-clic, mais aussi avec le clavier: “entrée” pour lancer l'écoute, “Alt-P” pour la pause, “Alt-R” pour la reprise.
*	 Après, quand on clique sur la croix de cette fenêtre (ou “Alt-Q”), cette fenêtre disparait mais elle est seulement cachée (.hide()) et non supprimée! Si on veut plus tard changer de radio, on re-clique sur l'icône de notification, et la même fenêtre se ré-affiche (.show()).
*	 Pendant l'écoute d'une radio, on peut mettre en pause ou reprendre en utilisant les menus popup (clic-droit), tant sur l'icône de notification que sur la fenêtre des radios.
*	 Pour arrêter le programme, on fait clic-droit sur l'icône de notification et on sélectionne “Quitter” sur le menu popup. Il faut ensuite confirmer dans une fenêtre de questionnement pour que le programme s'arrête.    
En plus, on peut faire que ce programme soit lancé automatiquement à l'allumage du PC. Sous Windows 10, voilà comment on peut faire: mettre un raccourci du programme dans le répertoire suivant:    
`C:\Users\utilisateur\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`    
Voilà le code proposé pour intégrer le programme précédent dans la zone de notification. Il s'appelle chez moi “radioweb_tray.py” (on peut mettre .pyw sous Windows pour éviter l'affichage de la console):    
```
#! /usr/bin/python
# -*- coding: utf-8 -*-
# Python3 v3.5, PyQt5 v5.9
 
r"""
Lancement dans la zone de notification d'un
lecteur avec playlist d'une radio internet
Auteur: Jean-Paul Vidal dit "Tyrtamos" (mai 2018)
 
Action sur l'icone de notification:
    clic gauche sur l'icone => affiche la fenêtre du programme
    clic droit sur l'icone => menu contextuel:
        pause: met la radio écoutée en pause
        reprendre: remet la radio en écoute
        quitter: arrête le programme
 
Les noms et adresses des radios sont dans le fichier radioweb.txt
 
Pour les adresses web des radios francophones, voir par exemple:
http://fluxradios.blogspot.fr/
 
Aussi sur les sites web des radios. Exemple pour "Frequence 3":
http://ice.stream.frequence3.net/frequence3-128.mp3
 
Pour télécharger une icône, voir par exemple:
https://icones8.fr/icon/2308/tour-de-radio
 
Pour exécuter automatiquement au lancement du PC sous Windows, ajouter
un raccourcis ici (mettre le bon chemin avant AppData):
C:\Users\utilisateur\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
"""
 
import sys
import os
 
from PyQt5.QtWidgets import (QApplication, QMenu, QMessageBox, QStyleFactory,
    QSystemTrayIcon, QAction)
 
from PyQt5.QtGui import QIcon
 
from PyQt5.QtCore import (QLocale, QLibraryInfo, QTranslator, pyqtSlot, 
    qInstallMessageHandler)
 
from radioweb import chargeradios, RadioWeb
 
#############################################################################
def lancefenetre(fichieradios):
    """charge les radios et lance la fenêtre sans l'afficher
    """
    # charge les radios du fichier radioweb.txt
    try:
        listeradios = chargeradios(fichieradios)
    except ValueError:
        QMessageBox.information(None, 
            "Chargement des radios", 
            "Le fichier 'radioweb.txt' n'est pas trouvé")
        app.quit()
        sys.exit()
    if len(listeradios)==0:
        QMessageBox.information(None, 
            "Chargement des radios", 
            "Le fichier 'radioweb.txt' est vide")
        app.quit()
        sys.exit()
 
    # retourne la variable d'instance de la fenêtre à lancer
    return RadioWeb(listeradios)
 
#############################################################################
def affichefenetre(fen):
    """complément d'affichage de la fenêtre du programme
    """
    fen.tw.setFocus()
    fen.tw.setCurrentCell(0, 0)
 
#############################################################################
class SystemTrayIcon(QSystemTrayIcon):
 
    #========================================================================
    def __init__(self, qicone, parent=None):
        super().__init__(qicone, parent)
 
        # ajoute une bulle d'information si on laisse la souris sur l'icône
        self.setToolTip("Radio Internet\n" + \
                        "Cliquez sur l'icone pour afficher")
 
        # un clic gauche sur l'icône affiche la fenêtre
        self.activated.connect(self.affichefen)
        # un clic gauche sur l'étiquette le lancement affiche la fenêtre
        self.messageClicked.connect(self.affichefen)
 
        # fichier des radios
        replancement = os.path.dirname(os.path.abspath(__file__))
        fichieradios = os.path.join(replancement, "radioweb.txt")
 
        # lance la fenêtre sans affichage
        self.fen = lancefenetre(fichieradios)
 
        # initialise le menu
        self.initmenu()
 
    #========================================================================
    def initmenu(self):
        """crée et affiche le menu du systemtray (clic droit sur l'icône)
        """
        menu = QMenu()
 
        actionPause = QAction('Pause', self)
        actionPause.triggered.connect(self.fen.pause)
        menu.addAction(actionPause)
 
        actionReprendre = QAction('Reprendre', self)
        actionReprendre.triggered.connect(self.fen.reprendre)
        menu.addAction(actionReprendre)
 
        menu.addSeparator()
 
        actionQuitter = QAction('Quitter', self)
        actionQuitter.triggered.connect(self.quitter)
        menu.addAction(actionQuitter)
 
        self.setContextMenu(menu)
 
    #========================================================================
    def affichefen(self, raison=None):
        """clic gauche sur l'icone ou sur l'étiquette du lancement
           => affiche la fenêtre au dessus des autres
        """
        if raison==QSystemTrayIcon.Trigger or raison==None:
            self.fen.showNormal()  # affiche en mode fenêtre
            self.fen.activateWindow()  # affiche au dessus des autres fenêtres
            # pour d'éventuels compléments d'affichage (ex: setFocus)
            affichefenetre(self.fen)
 
    #========================================================================
    @pyqtSlot()
    def quitter(self):
        """demande d'arrêt du programme tray
        """
        reponse = QMessageBox.question(None,
                    "Confirmez!",
                    "Voulez-vous vraiment quitter?",
                    QMessageBox.Yes, QMessageBox.No)
        if reponse == QMessageBox.Yes:
            # ferme la fenêtre de sélection des radios si encore ouverte
            try:
                self.fen.close()
            except Exception:
                pass
            # ferme l'application et arrête l'exécution
            app.quit()
            sys.exit()
 
#############################################################################
if __name__ == '__main__':
 
    #========================================================================
    # Répertoire d'exécution avec ou sans pyinstaller (onedir ou onefile)
    if getattr(sys, 'frozen', False):
        REPEXE = sys._MEIPASS # programme traité par pyinstaller
    else:
        REPEXE = os.path.dirname(os.path.abspath(__file__)) # prog. normal
 
    #========================================================================
    # active la bibliothèque graphique
    app = QApplication(sys.argv)
 
    #========================================================================
    # vérifie qu'il y a un systemtray disponible (sinon => arrêt)
    if not QSystemTrayIcon.isSystemTrayAvailable():
        QMessageBox.critical(None, 
            "Systray",
            "Le système de notification n'est pas disponible sur cet OS")
        app.quit()
        sys.exit(1)
 
    #========================================================================
    # met la même icône pour toutes les fenêtres du programme
    qicone = QIcon(os.path.join(REPEXE, "icons8-tour-de-radio-50.png"))
    app.setWindowIcon(qicone)
 
    #========================================================================
    # met des tooltips à fond jaune clair dans toute l'application
    app.setStyleSheet("QToolTip {background-color: #ffff99; border: 1px solid black}")
 
    #========================================================================
    # style pour toute l'application selon l'OS
    if "Fusion" in [st for st in QStyleFactory.keys()]:
        app.setStyle(QStyleFactory.create("Fusion"))
    elif sys.platform=="win32":
        app.setStyle(QStyleFactory.create("WindowsVista"))
    elif sys.platform=="linux":
        app.setStyle(QStyleFactory.create("gtk"))
    elif sys.platform=="darwin":    
        app.setStyle(QStyleFactory.create("macintosh"))
    app.setPalette(QApplication.style().standardPalette())
 
    #========================================================================
    # indispensable pour utiliser QSystemTrayIcon
    # sinon: arret complet après fermeture d'un simple messagebox
    app.setQuitOnLastWindowClosed(False)
 
    #========================================================================
    # assure la traduction automatique du conversationnel à la locale
    locale = QLocale.system().name()
    translator = QTranslator()
    reptrad = QLibraryInfo.location(QLibraryInfo.TranslationsPath)
    translator.load("qtbase_" + locale, reptrad) # qtbase_fr.qm
    app.installTranslator(translator)
 
    #========================================================================
    # lance le tray
    trayIcon = SystemTrayIcon(qicone)  # bulle: variable globale
    trayIcon.show()
 
    #--------------------------------------------------------------------
    # message d'information affiché 1 seconde si l'OS le supporte
    # sous Windows, l'activation nécessite dans le registre:
    # HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\
    #              Explorer\Advanced\EnableBalloonTips => dword:0x00000001
    # et sa désactivation: ..\EnableBalloonTips => dword:0x00000000
    if trayIcon.supportsMessages():
        trayIcon.showMessage("Radio Internet",
                             "Cliquez sur l'icone pour afficher",
                             QSystemTrayIcon.Information,
                             1000)  # temps d'affichage ignoré sous Windows
 
    #========================================================================
    # boucle de traitement des évènements
    sys.exit(app.exec_())
```

[Retour à la table des matières](#Table des matières)

# Version autonome avec pyinstaller<a id="mark11"></a>

De même que dans le chapitre précédent, on peut convertir le programme pour avoir un exécutable autonome, avec tout ce qui est nécessaire à son bon fonctionnement (interpréteur Python et bibliothèques utilisées).    
Sous Windows, voilà la ligne de commande qu'on peut utiliser sous forme d'un fichier de commande pour la console cmd.exe qui s'appelle chez moi: “radioweb_tray.bat” et qui fabrique un fichier exécutable unique “radioweb_tray.exe:    
```
SET programme=radioweb_tray

IF EXIST build_tray_onefile RMDIR /S /Q build_tray_onefile
IF EXIST dist_tray_onefile RMDIR /S /Q dist_tray_onefile

pyinstaller ^
--clean ^
--noconfirm ^
--noconsole ^
--onefile ^
--noupx ^
--distpath ".\dist_tray_onefile" ^
--workpath ".\build_tray_onefile" ^
--add-data ".\icons8-tour-de-radio-50.png;." ^
--add-data "E:\Programmes\Python35\Lib\site-packages\PyQt5\Qt\translations;PyQt5\Qt\translations" ^
--icon ".\icons8-tour-de-radio-50.ico" ^
%programme%.py
PAUSE
```
Il faut, bien sûr, adapter les noms et adresses selon la configuration qu'on a, et ne pas oublier de copier à la main le fichier des radios “radioweb.txt” dans le même répertoire.    
Comme pyinstaller est multiplateforme, on devrait pouvoir faire quelque chose de similaire sous Linux et sous Mac OS, mais je n'ai pas encore essayé.    
Bonne écoute! Et amusez-vous bien!    

[Retour à la table des matières](#Table des matières)

# Observations générales faites en vrac par BlindHelp<a id="mark12"></a>

Comme indiqué ci-dessus par l'auteur, ce programme a été développé sous Python v3.5 et PyQt5 v5.9 avec Windows 10.    
Je pense que vous avez déjà le programme [Python](http://www.python.org) installé.    
Auparavant, , vous devriez installer la dépendance PyQt5 en invite de commande, tapez la commande suivante:

`pip install PyQt5==5.9`    

pip est l'outil d'installation de prédilection. À partir de Python 3.4, il est inclus par défaut avec l'installateur de Python.    

J'ai oublié que vous devez également installer la dépendance PyInstaller pour créer les fichiers exécutables qui accompagnent les fichiers .bat, et en invite de commande, tapez la commande suivante:

`pip install pyinstaller`    

Eh bien pour les deux premiers codes pour:    

* [Un lecteur de radio internet minimum](#mark4)    
* [Un lecteur de radios internet avec "playlist"](#mark5)    

Pour le premier lecteur, j'ai utilisé le fichier::    
`radiowebmini.py`    
Et au même niveau, j'ai le fichier:    
`icons8-tour-de-radio-50.png`    
et pour le deuxième lecteur, j'ai utilisé le fichier:    
`radioweb.py`    
Et au même niveau, j'ai les fichiers:    
`icons8-tour-de-radio-50.png`    
`radioweb.txt`    
Chacun est dans un dossier dédié.    

Pour le premier fichier, en invite de commande, je tape la commande suivante:    
`py -3.6 radiowebmini.py`    
et je reçois le message:    
`"Aucune radio n'a été demandée"`    

Je ne sais pas ce que j'ai mal fait?    

Pour le deuxième fichier, en invite de commande, je tape la commande suivante:    
`py -3.6 radioweb.py`    
Cela fonctionne sans problèmes

Cependant j'ai essayé le code pour la:    

* [Version autonome avec pyinstaller](#mark8)    
Ceci est pour le lecteur de radio internet avec playlist, utilisant son fichier .bat dédié.    
Ceci contient le fichier:    
`radioweb.py`    
Et au même niveau, j'ai les fichiers:    
`icons8-tour-de-radio-50.ico`    
`icons8-tour-de-radio-50.png`    
`radioweb.txt`    
puis le fichier:    
`radioweb.bat`    
Le tout dans un dossier dédié.    

Notez que vous devez modifier dans le fichier radioweb.bat la ligne qui pointe sur la dépendance [PyQt5](https://pypi.org/project/PyQt5/)    
```
--add-data "E:\Programmes\Python35\Lib\site-packages\PyQt5\Qt\translations;PyQt5\Qt\translations" ^

par exemple chez-moi ceci est:

--add-data "C:\Users\utilisateur\AppData\Local\Programs\Python\Python36-32\Lib\site-packages\PyQt5\Qt\translations;PyQt5\Qt\translations" ^

Où le mot utilisateur sera remplacé par votre nom d'utilisateur et le chemin doit pointé sur votre version de Python installé y compris cette dépendance.

Notez aussi que vous devez ajouter une ligne de plus après la ligne qui suit dans le fichier radioweb.bat:

--add-data ".\icons8-tour-de-radio-50.png;." ^
--add-data ".\radioweb.txt;." ^

Je remarqué cela, car une fois le fichier radioweb.exe lancé, un message d'erreur s'affiché en disant que le fichier radioweb.txt était manquant:
"Le fichier 'radioweb.txt' n'est pas trouvé"

Note supprimer dans le fichier radioweb.txt la ligne:

Testmp3 | E:\Musiques\3_bibmedia64\Musiques\Chicago\Chicago Transit Authority\03 - Beginnings.mp3

C'est normal parce que lorsque vous cliquez sur cet élément, il n'y a pas de fichier de ce type dans le chemin en locale car c'est un exemple donné par l'auteur.

Nous pouvons modifier ce fichier en conséquence avec nos propres liens de flux radio.

Nous pouvons mettre les flux des stations de radio les plus écoutée!
```

Par exemple, vous pouvez télécharger un fichier qui contient une liste de flux de Radio France en mp3, [en cliquant ici](https://blindhelp.github.io/radio_france_-_adresses_flux_mp3_-_juin_2017.zip)

```
Bien que le fichier .exe a été construit, il y avait des messages d'erreur lors de sa création, donc, les voici à titre informatif, (Peut-être que cela servira nos amis développeurs):
INFO: UPX is not available.
Après la ligne:
INFO: checking Analysis
J'ai la ligne:
INFO: Building Analysis because Analysis-00.toc is non existent
INFO: running Analysis Analysis-00.toc
Après plusieurs lignes j'ai des lignes suivi d'un WARNING comme suit:
WARNING: Hidden import "PyQt5.sip" not found!
INFO: Building PYZ because PYZ-00.toc is non existent
Puis un message:
INFO: Building PYZ (ZlibArchive) .\build_tray_onefile\radioweb_tray\PYZ-00.pyz completed successfully.
INFO: checking PKG
INFO: Building PKG because PKG-00.toc is non existent
INFO: Building PKG (CArchive) PKG-00.pkg
INFO: Building PKG (CArchive) PKG-00.pkg completed successfully.
INFO: Bootloader c:\users\utilisateur\appdata\local\programs\python\python36-32\lib\site-packages\PyInstaller\bootloader\Windows-32bit\runw.exe
INFO: checking EXE
INFO: Building EXE because EXE-00.toc is non existent
INFO: Building EXE from EXE-00.toc
INFO: Copying icons from ['icons8-tour-de-radio-50.ico']
INFO: Writing RT_GROUP_ICON 0 resource with 20 bytes
INFO: Writing RT_ICON 1 resource with 10440 bytes
INFO: Updating manifest in C:\Users\utilisateur\Documents\radioweb\build_tray_onefile\radioweb_tray\runw.exe.6i_lwtz6
INFO: Updating resource type 24 name 1 language 0
INFO: Appending archive to EXE .\dist_tray_onefile\radioweb_tray.exe
INFO: Building EXE from EXE-00.toc completed successfully.

Après avoir terminé le processus de création du fichier en .exe depuis le fichier radioweb.bat, j'ai le message suivant:

Appuyez sur une touche pour continuer...
```

Une foi fait cela, puis avoir cliquez sur le fichier Radioweb.exe qui vient d'être créé, j'ai l'interface du programme, voici plus bas sont mode d'utilisation:    

* Les noms des radios sont affichés dans une seule colonne, c'est-à-dire qu'ils sont sur un tableau.
* Pour se déplacer entre les noms des radios utilisez les flèches bas ou haut.
Vous pouvez taper la lettre initiale du nom de la station de radio une fois que vous avez appris le contenu de votre liste, pour aller plus vite.
* Les touches Entrée, démarrent l'écoute de la station de radio sous le curseur.
* Alt+p: met la radio que nous écoutons en pause.
* Alt+r: remet la radio que nous écoutions.
* Alt+q: arrête le programme.
* Lors de l'activation du menu contextuel, nous aurons les mêmes éléments: Pause, Reprendre et Quitter.

Malheureusement pour ceux qui utilisent un lecteur d'écran, Les boutons pour réduire ou augmenter  le volume sont absents de l'interface, mais c'est une autre histoire.    

```
Vous pouvez aussi créer l'exécutable sans passer par le fichier radioweb.bat
Si vous avez installé la dépendance PyInstaller, allez dans le répertoire de votre programme et en invite de commande, , tapez la commande suivante:
pyinstaller radioweb.py
Cela générera le paquet dans un sous-répertoire appelé dist.
Dans notre cas ceci est dans le chemin:
C:/Users/utilisateur/Documents/radioweb/dist/radioweb/radioweb.exe
À l'exécution du fichier radioweb.exe, nous obtiendrons un message d'erreur comme sui:
Chargement des radios alerte Le fichier 'radioweb.txt' n'est pas trouvé
OK 
Appuyez sur ce bouton pour fermer le dialogue!
J'ai enfin compris que nous devrions devoir coller manuellement le fichier Radioweb.txt dans ce dossier!
Eh bien maintenant, cela fonctionne!
```

Et j'ai finalement essayé le code pour la:    

* [Version autonome avec pyinstaller](#mark11)    
Ceci est pour le même lecteur intégré dans la zone de notification, utilisant son fichier .bat dédié.    

Ceci contient le fichier:    
`icons8-tour-de-radio-50.ico`    
`radioweb_tray.py`    
Et au même niveau, j'ai les fichiers:    
`icons8-tour-de-radio-50.png`    
`radioweb.txt`    
puis le fichier:    
`radioweb_tray.bat`    
Le tout dans un dossier dédié.    

N'oubliez pas d'apporter les mêmes modifications dans les fichiers radioweb_tray.bat, radioweb.txt, comme indiqué ci-dessus.    

Les mêmes messages d'erreur ont été présentés lors de la création du fichier radioweb_tray.exe    

Mais une différence de taille, c'est que lorsque j'ai lancé le fichier radioweb_tray.exe, j'ai eu l'Erreur de script suivant:    
```
Unhandled exception in script
Traceback (most recent call last):
	  File "radioweb_tray.py", line 44, in <module>
ModuleNotFoundError: No module named 'radioweb'
```

Je ne sais pas ce que j'ai mal fait?    

```
Vous pouvez aussi créer l'exécutable sans passer par le fichier radioweb_tray.bat
Si vous avez installé la dépendance PyInstaller, allez dans le répertoire de votre programme et en invite de commande, , tapez la commande suivante:
pyinstaller radioweb_tray.py
Cela générera le paquet dans un sous-répertoire appelé dist.
Dans notre cas ceci est dans le chemin:
C:/Users/utilisateur/Documents/radioweb_tray/dist/radioweb_tray/radioweb_tray.exe
À l'exécution du fichier radioweb_tray.exe, nous obtiendrons un message d'erreur comme sui:
Chargement des radios alerte Le fichier 'radioweb.txt' n'est pas trouvé
OK 
Appuyez sur ce bouton pour fermer le dialogue!
J'ai enfin compris que nous devrions devoir coller manuellement le fichier Radioweb.txt dans ce dossier!
Eh bien maintenant, cela fonctionne!
```

Eh bien, comme je ne comprends rien à propos de la programmation, c'est là que je demande vivement à mes amis développeurs de me donner leurs sages conseils afin de décortiquer les messages d'erreur Pendant la création des fichiers .exe ou les codes proposés par l'auteur mentionné ci-dessus. Merci beaucoup les gars!    

Peut-être c'est préférable de passer par la dépendance [PyInstaller](http://www.pyinstaller.org./) en utilisant directement la commande pyinstaller radioweb.py ou pyinstaller radioweb_tray.py sans passer par les fichiers .bat, de toute façon lors de la génération des fichiers .exe sont affichés les mêmes messages d'erreurs (info et WARNING mentionné ci-dessus.    
À grosso modo, en utilisant cette commande, seront créés deux dossiers "build" et "dist" contenant les scripts puis les exécutables .exe dans son dossier correspondant, puis au même niveau, se trouvent nos fichiers que nous avons utilisés à la racine de ce projet:    
`icons8-tour-de-radio-50.ico`    
`icons8-tour-de-radio-50.png`    
`radioweb.py ou radioweb_tray.py`    
Note: le fichier `radioweb.txt` vous devez le mettre dans le dossier "dist" avant de lancer le fichiers exécutable .exe    
Et enfin, il sera créé le fichier:    
`radioweb.spec`    
ou:    
`radioweb_tray.spec`    
Le tout sera soit à la racine du dossier  radioweb ou radioweb_tray ; c'est-à-dire, le dossier qui porte le nom de ce projet.
Tandis que si nous utilisons les fichiers .bat indiqués par l'auteur, en plaçant le fichier .bat selon le type de lecteur que vous souhaitez construire accompagné des autres fichiers pour ce lecteur, le tout  à la racine du dossier de ce projet, sans oublier que vous devrez ajouter la ligne suivante dans le fichier .bat:     
`--add-data ".\radioweb.txt;." ^`    
et aussi avoir modifié la ligne sur ce même fichier .bat qui pointe sur le chemin de la dépendence [PyQt5](https://pypi.org/project/PyQt5/)    
`--add-data "C:\Users\utilisateur\AppData\Local\Programs\Python\Python36-32\Lib\site-packages\PyQt5\Qt\translations;PyQt5\Qt\translations" ^`    
À grosso modo, en utilisant l'un des deux fichiers .bat, seront créés deux dossiers "build_onefile" et "dist_onefile" contenant les scripts puis les exécutables .exe dans son dossier correspondant, puis au même niveau, se trouvent nos fichiers que nous avons utilisés à la racine de ce projet:    
`icons8-tour-de-radio-50.ico`    
`icons8-tour-de-radio-50.png`    
`radioweb.py ou radioweb_tray.py`    
`radioweb.txt`    
Et enfin, il sera créé le fichier:    
`radioweb.spec`
ou:    
`radioweb_tray.spec`    
Le tout sera soit à la racine du dossier  radioweb ou radioweb_tray ; c'est-à-dire, le dossier qui porte le nom de ce projet.    

Voilà, en attendant que toutes mes observations ne sont pas si brouillonne servent à quelque chose pour la création de ce lecteur de radio Web minimaliste! 😣    

[Retour à la table des matières](#Table des matières)

---

Merci encore à M. Jean-Paul Vidal dit "Tyrtamos" pour sa contribution! 😉    
Pour info:    
Sauf mention contraire, le contenu de ce wiki où se trouve le post [Les recettes Python de Tyrtamos](https://python.jpvweb.com/python/mesrecettespython/doku.php?id=pyqt5_radioweb) est placé sous les termes de la licence suivante (page en anglais): [CC Attribution-Noncommercial-Share Alike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/)    
Avertissement.    
Vous êtes autorisé à :    
Partager — copier, distribuer et communiquer le matériel par tous moyens et sous tous formats    
Adapter — remixer, transformer et créer à partir du matériel    
L'Offrant ne peut retirer les autorisations concédées par la licence tant que vous appliquez les termes de cette licence.    
Si vous voulez en savoir plus sur cette licence, vous pouvez consulter le lien suivant (page en français):    
[Creative Commons — Attribution - Pas d'Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International — CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr)    
C'est pourquoi je me suis permis de le copier et de le partager sur  votre nouvel espace via GitHub!    
Profitez-en et partagez-le aussi!    
et enfin...    
Si vous êtes un programmeur  Python  n'oubliez pas de jeter un coup d'œil sur [Les recettes Python de Tyrtamos](https://python.jpvweb.com/python/mesrecettespython/doku.php?id=Sommaire)    
Sur ce, je vous souhaite une bonne codification  et utilisation du lecteur de radios internet! 😉    
@+    
BlindHelp!    

---

Nous espérons vous revoir bientôt sur le      
[Blog de BlindHelp!](http://blindhelp.blogspot.fr/)                    
ou sur  votre nouvel espace via GitHub:                     
[BlindHelp.github.io](https://blindhelp.github.io)                    

---
