---

title: Oracle VM VirtualBox - Programme pour lancer plusieurs systèmes d'exploitation en même temps (dans plusieurs machines virtuelles
permalink: "/Oracle-VM-VirtualBox/"
layout: post
author: BlindHelp
---

<footer>Publié le Jeudi 29 Avril 2021</footer>


Coucou mes amis du blog de BlindHelp!  
Aujourd'hui, nous vous apportons le programme [Oracle VM VirtualBox](http://www.virtualbox.org) (anciennement VirtualBox) qui est un logiciel libre de virtualisation publié par Oracle.  
Écrit en C, C++, Python et assembleur.  
L'interface est en Qt.  
Lorsque je rédigeais Cet article la dernière  Version Stable a été la 6.1.22 du 29 Avril 2021. Rendez-vous à la section ["Téléchargement"](#mark00) où vous trouverez un lien pour télécharger la dernière version de Oracle VM VirtualBox.  
Télécharger la dernière version en date du programme Oracle Virtual Box à partir de la page Web officielle ci-dessous:  
[Index of /virtualbox](http://download.virtualbox.org/virtualbox/)  
Compatible avec les systèmes d'exploitation Linux, Microsoft Windows, macOS, Solaris et Genode OS Framework.  
Type du programme: Hyperviseur.  
Le programme est sous Licence publique générale GNU version 2.  
Le dépôt du programme est consultable sur:  
<https://www.virtualbox.org/browser/vbox/trunk>  
Vous pouvez trouver une documentation en anglais du programme Oracle VM VirtualBox en ligne en cliquant [ici.](https://www.virtualbox.org/manual/UserManual.html)  
Vous pouvez également visiter le site Web (en anglais) du programme Oracle VM VirtualBox [par là.](https://www.virtualbox.org/)  

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation du logiciel téléchargé  ni des informations ce trouvant sur le site Web dédié et l'utilisation du programme téléchargé est à vos risques et périls. ☠  

Table des matières<a id="Table des matières"></a>
-------------
- [Avant-propos](#mark0)
- [Téléchargement](#mark00)
- [1 Premiers pas](#mark1)
- [1.1 À quoi sert la virtualisation ?](#mark1.1)
- [1.2 Un peu de terminologie](#mark1.2)
- [1.3Aperçu des fonctionnalités](#mark1.3)
- [1.4 Systèmes d'exploitation hôtes supportés](#mark1.4)
- [1.4.1 Systèmes d'exploitation invités supportés](#mark1.4.1)
- [1.4.2 Disque VDI](#mark1.4.2)
- [1.5 Installer VirtualBox et le pack d'extension](#mark1.5)
- [1.6 Démarrer VirtualBox](#mark1.6)
- [1.7 Créer votre première machine virtuelle](#mark1.7)
- [1.8 Lancer votre machine virtuelle](#mark1.8)
- [1.8.1 Démarrage d'une nouvelle VM pour la première fois](#mark1.8.1)
- [1.8.2 Capturer et rendre le clavier et la souris](#mark1.8.2)
- [1.8.3 Taper des caractères spéciaux](#mark1.8.3)
- [1.8.4 Changer de média amovible](#mark1.8.4)
- [1.8.5 Redimensionner la fenêtre de la machine](#mark1.8.5)
- [1.8.6 Sauvegarder l'état de la machine](#mark1.8.6)
- [1.9 Utiliser des groupes de VMs](#mark1.9)
- [1.10 Instantanés](#mark1.10)
- [1.10.1 Prendre, restaurer et effacer des instantanés](#mark1.10.1)
- [10.2 Contenu d'un instantané](#mark10.2)
- [1.11 Configuration d'une machine virtuelle](#mark1.11 )
- [1.12 Supprimer des machines virtuelles](#mark1.12)
- [1.13 Cloner des machines virtuels](#mark1.13)
- [1.14 Importer et exporter des machines virtuelles](#mark1.14)
- [1.15 Paramètres globaux](#mark1.15)
- [1.16 Interfaces alternatives](#mark1.16)
- [2 Détails sur l'installation](#mark2)
- [2.1 Installation sur des hôtes Windows](#mark2.1)
- [2.1.1 Prérequis](#mark2.1.1)
- [2.1.2 Effectuer l'installation sous Windows](#mark2.1.2)
- [2.1.3 Désinstallation sous Windows](#mark2.1.3)
- [2.1.4 Installation sans efforts sous Windows](#mark2.1.4)
- [2.2 Installation sur des hôtes Mac OS X](#mark2.2)
- [2.2.1 Effectuer l'installation sous Mac OS X](#mark2.2.1)
- [2.2.2 Désinstallation sous Mac OS X](#mark2.2.2)
- [2.2.3 Installation sans efforts sous Mac OS X](#mark2.2.3)
- [2.3 Installation sur des hôtes Linux](#mark2.3)
- [2.3.1 Prérequis](#mark2.3.1)
- [2.3.2 Le module noyau de VirtualBox](#mark2.3.2)
- [2.3.3 Effectuer l'installation sous Linux](#mark2.3.3)
- [2.3.3.1 Installer VirtualBox à partir d'un paquet Debian/Ubuntu](#mark2.3.3.1)
- [2.3.3.2 Utiliser l'installeur alternatif (VirtualBox.run)](#mark2.3.3.2)
- [2.3.3.3 Effectuer une installation manuelle](#mark2.3.3.3)
- [2.3.3.3.0 Désinstallation sous Linux](#mark[2.3.3.3.0)
- [2.3.3.4 Mettre à jour et désinstaller VirtualBox](#mark2.3.3.4)
- [2.3.3.5 Installation automatique des paquets Debian](#mark2.3.3.5)
- [2.3.3.6 Installation automatique des paquets .rpm](#mark2.3.3.6)
- [2.3.3.7 Options d'installation automatique](#mark2.3.3.7)
- [2.3.4 Le groupe vboxusers](#mark2.3.4)
- [2.3.5 Démarrer VirtualBox sur Linux](#mark2.3.5)
- [2.4 Installation sur les hôtes Solaris](#mark2.4)
- [2.4.1 Effectuer l'installation sous Solaris](#mark2.4.1)
- [2.4.2 Le groupe vboxuser](#mark2.4.2)
- [2.4.3 Démarrer VirtualBox sur Solaris](#mark2.4.3)
- [2.4.4 Désinstallation sous Solaris](#mark2.4.4)
- [2.4.5 Installation sans efforts sous Solaris](#mark2.4.5)
- [2.4.6 Configurer un espace pour exécuter VirtualBox sous Solaris](#mark2.4.6)
- [3 Configurer des machines virtuelles](#mark3)
- [3.1.0 Systèmes d'exploitation hôtes supportés pour la version 4.3.13](#mark3.1.0)
- [3.1 Systèmes d'exploitation invités supportés pour la version 4.3.13](#mark3.1)
- [3.1.1 Invités Mac OS X](#mark3.1.1)
- [3.1.2 Invités 64 bits](#mark3.1.2)
- [3.2 Matériel émulé](#mark3.2)
- [3.3 Paramètres généraux](#mark3.3)
- [3.3.1 Onglet "Base"](#mark3.3.1)
- [3.3.2 Onglet "Avancé"](#mark3.3.2)
- [3.3.3 Onglet "Description"](#mark3.3.3)
- [3.4 Paramètres système](#mark3.4)
- [3.4.1 Onglet "Carte mère"](#mark3.4.1)
- [3.4.2 Onglet "Processeur"](#mark3.4.2)
- [3.4.3 Onglet "Accélération"](#mark3.4.3)
- [3.5 Paramètres d'affichage](#mark3.5)
- [3.6 Paramètres du stockage](#mark3.6)
- [3.7 Paramètres de son](#mark3.7)
- [3.8 Paramètres réseau](#mark3.8)
- [3.9 Ports série](#mark3.9)
- [3.10 Support USB](#mark3.10)
- [3.10.1 Paramètres USB](#mark3.10.1)
- [3.10.2 Notes d'implémentation pour les hôtes Windows et Linux](#mark3.10.2)
- [3.11 Dossiers partagés](#mark3.11)
- [3.12 Autre firmware (EFI)](#mark3.12)
- [3.12.1 Modes graphiques dans EFI](#mark3.12.1)
- [4 Les suppléments invité](#mark4)
- [4.1 Introduction](#mark4.1)
- [4.2 Installer et maintenir les suppléments invité](#mark4.2)
- [4.2.1 Suppléments invité pour Windows](#mark4.2.1)
- [4.2.1.1 Installation](#mark4.2.1.1)
- [4.2.1.2 Mettre à jour les suppléments invité Windows](#mark4.2.1.2)
- [4.2.1.3 Installation sans efforts des suppléments invité](#mark4.2.1.3)
- [4.2.1.4 Extraction manuelle du fichier](#mark4.2.1.4)
- [4.2.2 Suppléments invité pour Linux](#mark4.2.2)
- [4.2.2.1 Installer les suppléments invité pour Linux](#mark4.2.2.1)
- [4.2.2.2 Intégration graphique et de la souris](#mark4.2.2.2)
- [4.2.2.3 Metter à jour les suppléments invité Linux](#mark4.2.2.3)
- [4.2.2.4 Désinstaller les suppléments invité Linux](#mark4.2.2.4)
- [4.2.3 Suppléments invité pour Solaris](#mark4.2.3)
- [4.2.3.1 Installer les suppléments invité Solaris](#mark4.2.3.1)
- [4.2.3.2 Désinstaller les suppléments invité Solaris](#mark4.2.3.2)
- [4.2.3.3 Mettre à jour les suppléments invité](#mark4.2.3.3)
- [4.2.4 Suppléments invité pour OS/2](#mark4.2.4)
- [4.3 Dossiers partagés](#mark4.3)
- [4.3.1 Montage manuel](#mark4.3.1)
- [4.3.2 Montage automatique](#mark4.3.2)
- [4.4 L'accélération graphique matérielle](#mark4.4)
- [4.4.1 Accélération 3D matérielle (OpenGL et Direct3D 8/9)](#mark4.4.1)
- [4.4.2 L'accélération matérielle 2D pour les invités Windows](#mark4.4.2)
- [4.5 Fenêtres transparentes](#mark4.5)
- [4.6 Propriétés invité](#mark4.6)
- [4.7 Contrôle de l'invité](#mark4.7)
- [4.8 Transfert de mémoire](#mark4.8)
- [4.8.1 Faire du ballon avec la mémoire](#mark4.8.1)
- [4.8.2 Fusion de page](#mark4.8.2)
- [5 Le stockage virtuel](#mark5)
- [5.1 Les contrôleurs de disque dur : IDE, SATA (AHCI), SCSI, SAS](#mark5.1)
- [5.2 Fichiers images de disque (VDI, VMDK, VHD, HDD)](#mark5.2)
- [5.3 Le gestionnaire de médias virtuels](#mark5.3)
- [5.4 Modes spéciaux d'écriture d'images](#mark5.4)
- [5.5 Images de différenciation](#mark5.5)
- [5.6 Cloner des images de disque](#mark5.6)
- [5.7 Mise en cache des E/S dans l'hôte](#mark5.7)
- [5.8 Limiter la bande passante des images de disque](#mark5.8)
- [5.9 Support des CD/DVD](#mark5.9)
- [5.10 Serveurs iSCSI](#mark5.10)
- [6 Le réseau virtuel](#mark6)
- [6.1 Matériel réseau virtuel](#mark6.1)
- [6.2 Introduction aux modes réseaux](#mark6.2)
- [6.3 Network Address Translation (NAT)](#mark6.3)
- [6.3.1 Configurer la redirection de ports avec NAT](#mark6.3.1)
- [6.3.2 Démarrer avec PXE avec NAT](#mark6.3.2)
- [6.3.3 Limites du NAT](#mark6.3.3)
- [6.4 Network Address Translation Service (expérimental)](#mark6.4)
- [6.5 Réseau Bridgé](#mark6.5)
- [6.6 Réseau interne](#mark6.6)
- [6.7 Réseau Host-only](#mark6.7)
- [6.8 Réseau en tunnel UDP](#mark6.8)
- [6.9 Réseau VDE](#mark6.9)
- [6.10 Limiter la bande passante des E/S réseaux](#mark6.10)
- [6.11 Améliorer les performances réseaux](#mark6.11)
- [7 Machines virtuelles distantes](#mark7)
- [7.1 Affichage distant (VRDP support)](#mark7.1)
- [7.1.1 Visualiseurs RDP tiers classiques](#mark7.1.1)
- [7.1.2 VBoxHeadless, le serveur de bureau distant](#mark7.1.2)
- [7.1.3 Pas à pas : créer une machine virtuelle sur un serveur headless](#mark7.1.3)
- [7.1.4 USB distant](#mark7.1.4)
- [7.1.5 Authentification RDP](#mark7.1.5)
- [7.1.6 Chiffrement RDP](#mark7.1.6)
- [7.1.7 Connexions multiples au serveur VRDP](#mark7.1.7)
- [7.1.8 Avoir plusieurs moniteurs distants](#mark7.1.8)
- [7.1.9 Redirection graphique VRDP](#mark7.1.9)
- [7.1.10 Personnalisation du VRDP](#mark7.1.10)
- [7.2 Téléportation](#mark7.2)
- [8 VBoxManage](#mark8)
- [8.1 Introduction](#mark8.1)
- [8.2 Aperçu des commandes](#mark8.2)
- [8.3 Options générales](#mark8.3)
- [8.4 VBoxManage list](#mark8.4)
- [8.5 VBoxManage showvminfo](#mark8.5)
- [8.6 VBoxManage registervm / unregistervm](#mark8.6)
- [8.7 VBoxManage createvm](#mark8.7)
- [8.8 VBoxManage modifyvm](#mark8.8)
- [8.8.1 Paramètres généraux](#mark8.8.1)
- [8.8.2 Paramètres réseaux](#mark8.8.2)
- [8.8.2.1 Paramètres du réseau NAT](#mark8.8.2.1)
- [8.8.3 Options du port série, du son, du presse-papier et de l'USB](#mark8.8.3)
- [8.8.4 Paramètres de la machine distante](#mark8.8.4)
- [8.8.5 Paramètres de téléportation](#mark8.8.5)
- [8.9 VBoxManage clonevm](#mark8.9)
- [8.10 VBoxManage import](#mark8.10)
- [8.11 VBoxManage export](#mark8.11)
- [8.12 VBoxManage startvm](#mark8.12)
- [8.13 VBoxManage controlvm](#mark8.13)
- [8.14 VBoxManage discardstate](#mark8.14)
- [8.15 VBoxManage adoptstate](#mark8.15)
- [8.16 VBoxManage snapshot](#mark8.16)
- [8.17 VBoxManage closemedium](#mark8.17)
- [8.18 VBoxManage storageattach](#mark8.18)
- [8.19 VBoxManage storagectl](#mark8.19)
- [8.20 VBoxManage bandwidthctl](#mark8.20)
- [8.21 VBoxManage showhdinfo](#mark8.21)
- [8.22 VBoxManage createhd](#mark8.22)
- [8.23 VBoxManage modifyhd](#mark8.23)
- [8.24 VBoxManage clonehd](#mark8.24)
- [8.25 VBoxManage convertfromraw](#mark8.25)
- [8.26 VBoxManage getextradata/setextradata](#mark8.26)
- [8.27 VBoxManage setproperty](#mark8.27)
- [8.28 VBoxManage usbfilter add/modify/remove](#mark8.28)
- [8.29 VBoxManage sharedfolder add/remove](#mark8.29)
- [8.30 VBoxManage guestproperty](#mark8.30)
- [8.31 VBoxManage guestcontrol](#mark8.31)
- [8.32 VBoxManage debugvm](#mark8.32)
- [8.33 VBoxManage metrics](#mark8.33)
- [8.34 VBoxManage hostonlyif](#mark8.34)
- [8.35 VBoxManage dhcpserver](#mark8.35)
- [8.36 VBoxManage extpack](#mark8.36)
- [9 Sujets avancés](#mark9)
- [9.1 VBoxSDL, l'afficheur simplifié de VM](#mark9.1)
- [9.1.1 Introduction](#mark9.1.1)
- [9.1.2 Étiquetage sécurisé avec VBoxSDL](#mark9.1.2)
- [9.1.3 Libérer les modificateurs avec VBoxSDL sur Linux](#mark9.1.3)
- [9.2 Identifications automatiques dans l'invité](#mark9.2)
- [9.2.1 Identification automatique dans un invité Windows](#mark9.2.1)
- [9.2.2 Identifications automatisées à un invité Linux/Unix](#mark9.2.2)
- [9.2.2.1 VirtualBox Greeter pour Ubuntu / LightDM](#mark9.2.2.1)
- [9.3 Configuration avancées pour les invités Windows](#mark9.3)
- [9.3.1 Préparation automatique du système Windows](#mark9.3.1)
- [9.4 Configuration avancée pour les invités Linux et Solaris](#mark9.4)
- [9.4.1 Paramétrage manuel des services sélectionnés sur l'invité Linux](#mark9.4.1)
- [9.4.2 Paramétrage approfondi des pilotes graphique et souris de l'invité](#mark9.4.2)
- [9.5 Montage de processeur à chaud](#mark9.5)
- [9.6 PCI passthrough](#mark9.6)
- [9.7 Webcam passthrough](#mark9.7)
- [9.7.1 Utilisation d'une webcam hôte dans l'invité](#mark9.7.1)
- [9.7.2 Hôtes Windows](#mark9.7.2)
- [9.7.3 Hôtes Mac OS X](mark#9.7.3)
- [9.7.4 Hôtes Linux](#mark9.7.4)
- [9.8 Configuration d'affichage avancée](#mark9.8)
- [9.8.1 Résolutions VESA personnalisées](#mark9.8.1)
- [9.8.2 Configuration de la résolution maximum des invités quand on utilise l'interface graphique](#mark9.8.2)
- [9.9 Configuration avancée du stockage](#mark9.9)
- [9.9.1 Utiliser un disque dur brut de l'hôte à partir de l'invité](#mark9.9.1)
- [9.9.1.1 L'accès à un disque dur physique](#mark9.9.1.1)
- [9.9.1.2 Accès aux partitions individuelles d'un disque dur physique](#mark9.9.1.2)
- [9.9.2 Configuration des vendor product data (VPD) du disque dur](#mark9.9.2)
- [9.9.3 Accès à des cibles iSCSI via le réseau interne](#mark9.9.3)
- [9.10 Commandes de base pour utiliser les ports série](#mark9.10)
- [9.11 Peaufiner le moteur NAT de VirtualBox](#mark9.11)
- [9.11.1 Configurer l'adresse d'une interface réseau NAT](#mark9.11.1)
- [9.11.2 Configurer le serveur d'amorçage (prochain serveur) d'une interface réseau NAT](#mark9.11.2)
- [9.11.3 Peaufiner les tampons TCP/IP pour NAT](#mark9.11.3)
- [9.11.4 Associer des sockets à une interface spécifique](#mark9.11.4)
- [9.11.5 Activer le proxy DNS en mode NAT](#mark9.11.5)
- [9.11.6 Utiliser le résolveur de l'hôte comme proxy DNS en mode NAT](#mark9.11.6)
- [9.11.6.1 Résolution de noms d'hôte définie par l'utilisateur](#mark9.11.6.1)
- [9.11.7 Configurer des aliases pour le moteur NAT](#mark9.11.7)
- [9.12 Configurer les informations DMI du BIOS](#mark9.12)
- [9.12.1 Informations DMI du BIOS (type 0)](#mark9.12.1)
- [9.12.2 Informations système DMI (type 1)](#mark9.12.2)
- [9.12.3 Informations carte mère DMI (type 2)](#mark9.12.3)
- [9.12.4 Boîtier système DMI ou chassis (type 3)](#mark9.12.4)
- [9.12.5 Informations DMI du processeur (type 4)](#mark9.12.5)
- [9.12.6 Chaînes OEM DMI (type 11)](#mark9.12.6)
- [9.13 Configurer la table ACPI personnalisée](#mark9.13)
- [9.14 Peaufiner les horloges et la synchronisation du temps](#mark9.14)
- [9.14.1 Configurer le time stamp counter (TSC) (horodateur) de l'invité pour refléter l'heure de l'exécution](#mark9.14.1)
- [9.14.2 Accélérer ou ralentir l'horloge de l'invité](#mark9.14.2)
- [9.14.3 Peaufiner les paramètres de synchronisation du temps des suppléments invité](#mark9.14.3)
- [9.14.4 Désactiver la synchronisation des suppléments invité](#mark9.14.4)
- [9.15 Installer le pilote du réseau bridgé alternatif sur les invités Solaris 11](#mark9.15)
- [9.16 Échantillons de VNIC VirtualBox pour les VLANs sur les hôtes Solaris 11](#mark9.16)
- [9.17 Configurer plusieurs interfaces réseaux host-only sur les hôtes Solaris](#mark9.17)
- [9.18 Configurer le CoreDumper sur les hôtes Solaris](#mark9.18)
- [9.19 Déverrouiller l'interface graphique du gestionnaire de VirtualBox](#mark9.19)
- [9.19.1 Personnalisation du gestionnaire de VM](#mark9.19.1)
- [9.19.2 Personnalisation du sélecteur de VM](#mark9.19.2)
- [9.19.3 Configurer les entrées du menu de sélection de VM](#mark9.19.3)
- [9.19.4 Configurer les entrées du menu de la fenêtre d'une VM](#mark9.19.4)
- [9.19.5 Configurer les entrées de la barre d'état de la fenêtre de la VM](#mark9.19.5)
- [9.19.6 Configurer les modes visuels de la fenêtre](#mark9.19.6)
- [9.19.7 Personnalisation de la touche hôte](#mark9.19.7)
- [9.19.8 Action quand la VM s'arrête](#mark9.19.8)
- [9.20 Démarrer le service Web de VirtualBox automatiquement](#mark9.20)
- [9.20.1 Linux : démarrer le service web via init](#mark9.20.1)
- [9.20.2 Solaris: démarrer le service web par SMF](#mark9.20.2)
- [9.20.3 Mac OS X : démarrer le service web par launchd](#mark9.20.3)
- [9.21 VirtualBox Watchdog](#mark9.21)
- [9.21.1 Contrôle du jeu de ballon de mémoire](#mark9.21.1)
- [9.21.2 Détection de l'isolement de l'hôte](#mark9.21.2)
- [9.21.3 Plus d'informations](#mark9.21.3)
- [9.21.4 Linux : démarrer le service watchdog via init](#mark9.21.4)
- [9.21.5 Solaris : démarrer le service watchdog via SMF](#mark9.21.5)
- [9.22 Autres packs d'extension](#mark9.22)
- [9.23 Démarrer des machines virtuelles lors de l'amorçage du système](#mark9.23)
- [9.23.1 Linux : démarrer le service autostart par init](#mark9.23.1)
- [9.23.2 Solaris : démarrer le service autostart par SMF](#mark9.23.2)
- [9.23.3 Mac OS X : démarrer le service autostart par launchd](#mark9.23.3)
- [9.24 La gestion experte par VirtualBox du stockage](#mark9.24)
- [9.25 Prise en charge des événements de gestion de l'énergie de l'hôte](#mark9.25)
- [9.26 Support expérimental du passage par des instructions SSE4.1 / SSE4.2](#mark9.26)
- [9.27 Support de la synchronization des indicateurs du clavier](#mark9.27)
- [10 Sous-bassements techniques](#mark10)
- [10.1 Où VirtualBox stocke ses fichiers](#mark10.1)
- [10.1.1 Machines créées par VirtualBox version 4.0 ou supérieur](#mark10.1.1)
- [10.1.2 Machines créées par des versions de VirtualBox antérieures à 4.0](#mark10.1.2)
- [10.1.3 Données globales de configuration](#mark10.1.3)
- [10.1.4 Résumé des modifications de la configuration de 4.0](#mark10.1.4)
- [10.1.5 Fichiers XML de VirtualBox](#mark10.1.5)
- [10.2 Exécutables et composants de VirtualBox](#mark10.2)
- [10.3 Virtualisation matérielle vs. logicielle](#mark10.3)
- [10.4 Détails sur la virtualisation logicielle](#mark10.4)
- [10.5 Détails sur la virtualisation matérielle](#mark10.5)
- [10.6 Pagination nested et VPIDs](#mark10.6)
- [11 Interfaces de programmation de VirtualBox](#mark11)
- [12 Dépannage](#mark12)
- [12.1 Procédures et outils](#mark12.1)
- [12.1.1 Catégoriser et isoler des problèmes](#mark12.1.1)
- [12.1.2 Recueillir des informations de débogage](#mark12.1.2)
- [12.1.3 Le débogueur de VM intégré](#mark12.1.3)
- [12.1.4 Format du cœur d'une VM](#mark12.1.4)
- [12.2 Général](#mark12.2)
- [12.2.1 L'invité affiche des erreurs IDE/SATA pour les images basées sur un fichier sur un système de fichiers hôte lent](#mark12.2.1)
- [12.2.2 Réponse aux requêtes de flush IDE/SATA de l'invité](#mark12.2.2)
- [12.2.3 Faibles performances dues à la gestion d'énergie de l'hôte](#mark12.2.3)
- [12.2.4 GUI : l'option d'accélération graphique est grisée](#mark12.2.4)
- [12.3 Invités Windows](#mark12.3)
- [12.3.1 Écrans bleus Windows après avoir changé la configuration d'une VM](#mark12.3.1)
- [12.3.2 Écran bleu sur Windows 0x101 si SMP est activé (IPI timeout)](#mark12.3.2)
- [12.3.3 Échecs d'installation de Windows 2000](#mark12.3.3)
- [12.3.4 Comment garder les informations d'un écran bleu des invités Windows](#mark12.3.4)
- [12.3.5 Pas de réseau dans les invités Windows Vista](#mark12.3.5)
- [12.3.6 Les invités Windows peuvent provoquer une forte charge du processeur](#mark12.3.6)
- [12.3.7 Temps d'accès élevés aux dossiers partagés](#mark12.3.7)
- [12.3.8 La tablette USB coordonne mal dans les invités Windows 98](#mark12.3.8)
- [12.3.9 Les invités Windows sont retirés du domaine Active Directory après la restauration d'un instantané](#mark12.3.9)
- [12.3.10 Restauration de d3d8.dll et de d3d9.dll](#mark12.3.10)
- [12.4 Invités Linux et X11](#mark12.4)
- [12.4.1 Les invités Linux peuvent entraîner une forte charge du processeur](#mark12.4.1)
- [12.4.2 Processeurs AMD Barcelona](#mark12.4.2)
- [12.4.3 Versions bugguées du noyau Linux (Linux 2.6)](#mark12.4.3)
- [12.4.4 Presse-papier partagé, redimensionnement automatique et bureau transparent dans les invités X11](#mark12.4.4)
- [12.5 Invités Solaris](#mark12.5)
- [12.5.1 Les versions inférieures à Solaris 10 plantent en mode 64 bits](#mark12.5.1)
- [12.6 Hôte Windows](#mark12.6)
- [12.6.1 Problème du serveur VBoxSVC out-of-process COM](#mark12.6.1)
- [12.6.2 Changements de CD/DVD non reconnus](#mark12.6.2)
- [12.6.3 Réponse lente en utilisant le client RDP de Microsoft](#mark12.6.3)
- [12.6.4 Lancer un initiateur et une cible iSCSI sur un seul système](#mark12.6.4)
- [12.6.5 Adaptateurs réseaux bridgés absents](#mark12.6.5)
- [12.6.6 L'adaptateur réseau Host-only ne peut pas être créé](#mark12.6.6)
- [12.7 Hôtes Linux](#mark12.7)
- [12.7.1 Le module du noyau Linux refuse de se charger](#mark12.7.1)
- [12.7.2 Lecteur CD/DVD de l'hôte Linux non trouvé](#mark12.7.2)
- [12.7.3 Lecteur CD/DVD non trouvé sur l'hôte Linux (distributions anciennes)](#mark12.7.3)
- [12.7.4 Disquette non trouvée sur un hôte Linux](#mark12.7.4)
- [12.7.5 Messages d'erreur étranges de l'IDE invité lors de l'écriture sur un CD/DVD](#mark12.7.5)
- [12.7.6 Problème de l'IPC VBoxSVC](#mark12.7.6)
- [12.7.7 L'USB ne fonctionne pas](#mark12.7.7)
- [12.7.8 Noyaux PAX/grsec](#mark12.7.8)
- [12.7.9 pool vmalloc du noyau Linux dépassé](#mark12.7.9)
- [12.8 Hôtes Solaris](#mark12.8)
- [12.8.1 Ne peut pas démarrer de VM, pas assez de mémoire contiguë](#mark12.8.1)
- [12.8.2 La VM s'arrête avec des erreurs de dépassement de mémoire sur les hôtes Solaris 10](#mark12.8.2)
- [13 Guide de sécurité](#mark13)
- [13.1 Aperçu](#mark13.1)
- [13.1.1 Principes généraux de sécurité](#mark13.1.1)
- [13.2 Installation et configuration sécurisées](#mark13.2)
- [13.2.1 Aperçu de l'installation](#mark13.2.1)
- [13.2.2 Configuration post installation](#mark13.2.2)
- [13.3 Fonctions de sécurité](#mark13.3)
- [13.3.1 Le modèle de sécurité](#mark13.3.1)
- [13.3.2 Configuration sécurisée des machines virtuelles](#mark13.3.2)
- [13.3.3 Configurer et utiliser l'authentification](#mark13.3.3)
- [13.3.4 Opérations potentiellement non sécurisées](#mark13.3.4)
- [13.3.5 Chiffrement](#mark13.3.5)
- [14 Limites connues](#mark14)
- [14.1 Fonctions expérimentales](#mark14.1)
- [14.2 Problèmes connus](#mark14.2)
- [15 Historique des changements](#mark15)
- [16 Matériaux tiers et licences](#mark16)
- [16.1 Matériaux](#mark16.1)
- [16.2 Licences](#mark16.2)
- [17 Informations sur la confidentialité de VirtualBox](#mark17)
- [Glossary](#mark000)

---

# Avant-propos<a id="mark0"></a>

Eh bien, tout d'abord, ce guide de l'utilisateur a été compilé avec certaines données existantes trouvées sur le Web, d'autres parties n'ont pas été traitées dans ce guide de l'utilisateur, par exemple les nouveautés de cette version, une liste détaillée existe  dans la documentation (en anglais) en ligne.  
Sachez que la documentation (en anglais) qui est en ligne est plus complète que ce guide de l'utilisateur décrit ci-dessous, car celui-ci ne traite que dans certaines parties de la version 4.3.13 de ce programme, mais au moins, vous avez une idée de la façon dont cela fonctionne.  
D'autres choses qui sont expliqués dans ce post ont été ajoutées pour rendre  ce guide de l'utilisateur décrit ci-dessous plus intéressant.  
Si vous ne disposez pas encore d'un exemplaire de Oracle VM VirtualBox, vous pouvez le télécharger en allant à la section ["Téléchargement".](#mark00)  
Et enfin, je remercie vraiment la personne qui a traduit ce guide de l'utilisateur de l'anglais vers le français qui m'a servi comme base pour faire cet article! 😉  
Je vous souhaite une bonne lecture!  

[Retour à la table des matières](#Table des matières)

# Téléchargement<a id="mark00"></a>

Cette section contient des liens concernant seulement la version 6.1.22  

Dernière version en date:  
6.1.22/ 29-Apr-2021 18:25  
Télécharger Oracle Virtual Box pour Windows en cliquant sur le lien direct ci-dessous:  
[VirtualBox-6.1.22-144080-Win.exe](http://download.virtualbox.org/virtualbox/6.1.22/VirtualBox-6.1.22-144080-Win.exe)  
Puis l'Extension Pack compatible avec cette même version (Si nécessaire dans le cas qui vous donne une erreur).  
Dernière version en date:  
Oracle_VM_VirtualBox_Extension_Pack-6.1.22-144080.vbox-extpack         28-Apr-2021 23:40  11M  
Télécharger Oracle Virtual Box Extension Pack pour Windows en cliquant sur le lien direct ci-dessous:  
[Oracle_VM_VirtualBox_Extension_Pack-6.1.22-144080.vbox-extpack](http://download.virtualbox.org/virtualbox/6.1.22/Oracle_VM_VirtualBox_Extension_Pack-6.1.22-144080.vbox-extpack)  

Cependant, vous pouvez télécharger toujours la dernière version du programme Oracle Virtual Box à partir de la page Web officielle ci-dessous:  
[Index of /virtualbox](http://download.virtualbox.org/virtualbox/)  
Compatible avec les systèmes d'exploitation Linux, Microsoft Windows, macOS, Solaris et Genode OS Framework.  
Type du programme: Hyperviseur.  
Le programme est sous Licence publique générale GNU version 2.  
Le dépôt du programme est consultable sur:  
<https://www.virtualbox.org/browser/vbox/trunk>  

[Retour à la table des matières](#Table des matières)

# 1 Premiers pas<a id="mark1"></a>

Bienvenue à Oracle VM VirtualBox!  
VirtualBox est une application de virtualisation de plateformes croisées. Qu'est-ce que cela veut dire ? D'une part, il s'installe sur vos ordinateurs existant basés sur Intel ou AMD, qu'ils soient sous les systèmes d'exploitation Windows, Mac, Linux ou Solaris. D'autre part, il augmente la capacité de votre ordinateur existant pour qu'il puisse lancer plusieurs systèmes d'exploitation en même temps (dans plusieurs machines virtuelles). Donc, vous pouvez par exemple lancer Windows et Linux sur votre Mac, lancer Windows Server 2008 sur votre serveur Linux, lancer Linux sur votre PC Windows et ainsi de suite pour toutes vos applications. Vous pouvez installer et lancer autant de machines virtuelles que vous voulez la seule limite pratique étant votre espace disque et la mémoire.
VirtualBox est résolument simple bien que très puissant. Il peut se lancer partout, depuis de petits systèmes embarqués jusqu'aux machines de bureau en passant par des déploiements en centre de données ou même des environnements dans le  nuages.  

Dans ce guide de l'utilisateur ne allons simplement commencer par une introduction rapide à la virtualisation et sur la façon de lancer votre première machine virtuelle avec l'interface graphique de VirtualBox, facile à utiliser. Les chapitres suivants entreront beaucoup plus dans les détails en traitant d'outils et de fonctionnalités plus puissants, mais heureusement, il n'est pas nécessaire de lire tout le guide de l'utilisateur avant de pouvoir utiliser VirtualBox.  
Vous pouvez trouver un résumé des possibilités de VirtualBox au chapitre [1.3 Aperçu des fonctionnalités](#mark1.3), Pour ceux qui utilisent déjà VirtualBox et qui voudraient seulement voir les nouveautés de cette version, Vous pouvez consulter la documentation (en anglais) en allant à:  
<https://www.virtualbox.org/manual/UserManual.html#ChangeLog>  

[Retour à la table des matières](#Table des matières)

# 1.1 À quoi sert la virtualisation ?<a id="mark1.1"></a>

Les techniques et les fonctionnalités offertes par VirtualBox servent dans plusieurs scénarios:  

* Lancer plusieurs systèmes d'exploitation en même temps.  
VirtualBox vous permet d'exécuter plus d'un système d'exploitation en même temps. De cette façon, vous pouvez lancer des logiciels écrits pour un système d'exploitation dans un autre (par exemple un logiciel Windows sur Linux ou Mac) sans devoir redémarrer pour l'utiliser.  
Comme vous pouvez configurer les types de matériels "virtuels" connectés à chaque système d'exploitation, vous pouvez installer un vieux système d'exploitation tel que DOS ou OS/2 même si le matériel de votre machine physique n'est plus supporté par ce système d'exploitation (Si compatible avec les nouvelles versions du programme VirtualBox).  
* Installation plus facile de logiciels.  
Les éditeurs de logiciels peuvent utiliser des machines virtuelles pour y mettre des configurations de logiciels. Par exemple, installation d'une solution complète de serveur de messagerie sur une vraie machine peut être une tâche très fastidieuse. Avec VirtualBox, vous pouvez emballer une configuration aussi complexe (appelé alors souvent un environnement applicatif) dans une machine virtuelle. L'installation et l'exécution d'un serveur de messagerie devient aussi facile que d'importer un environnement applicatif dans VirtualBox.  
* Tester et réparer une récupération d'incidence.  
Une fois installés, on peut considérer une machine virtuelle et ses disques durs virtuels comme un "conteneur" qu'on peut, au choix, geler, réveiller, copier, sauvegarder et transporter entre hôtes.  
Au-delà de cela, en utilisant une autre fonctionnalité de VirtualBox appelé les "instantanés", vous pouvez sauvegarder un état en particulier d'une machine virtuelle et revenir à cet état si nécessaire. De cette manière, vous pouvez librement essayer un environnement informatique. Si quelque chose ne va pas (par exemple, si un logiciel ne se comporte pas bien après l'installation ou si un invité a un virus), on peut facilement revenir à un instantané récent et éviter de sauvegarder et de restaurer fréquemment.  
On peut créer autant d'instantanés que vous voulez, ce qui permet de voyager dans le temps des machines virtuelles en arrière et en avant. Vous pouvez effacer des instantanés alors qu'une machine virtuelle est en fonction pour gagner de l'espace disque.  
* Consolider une infrastructure.
La virtualisation peut réduire significativement les coûts en matériel et électricité. La plupart du temps, les ordinateurs actuels n'utilisent qu'une partie de leur puissance potentielle et tournent avec une faible charge système moyenne.  
On gaspille donc beaucoup de ressources matérielles et énergétiques. Au lieu de lancer autant d'ordinateurs physiques, qui ne sont que partiellement utilisés, on peut emballer de nombreuses machines virtuelles sur quelques hôtes puissants et équilibrer les charges entre elles.  

[Retour à la table des matières](#Table des matières)

# 1.2 Un peu de terminologie<a id="mark1.2"></a>

Quand on parle de virtualisation (mais aussi pour comprendre les chapitres suivants de ce guide de l'utilisateur), acquérir un peu de terminologie fondamentale nous aidera, en particulier avec les termes suivants :  
Pour plus des détails, merci de voir les chapitres [1.4 Systèmes d'exploitation hôtes supportés](#mark1.4) et [1.4.1 Systèmes d'exploitation invités supportés](#mark1.4.1).

Système d'exploitation hôte (OS hôte ou Machine hôte). C'est le système d'exploitation de l'ordinateur physique sur lequel VirtualBox a été installé. Il existe des versions de VirtualBox pour des hôtes Windows, Mac OS X, Linux, Solaris et Genode  
En quelques mots la machine hôte représente la machine physique qui va "héberger" une ou plusieurs machines virtuelles.  
VirtualBox est installé sur la machine hôte.  
En anglais, on la nomme "Host".  

Système d'exploitation invité (OS invité ou Machine invitée). C'est le système d'exploitation en fonction dans la machine virtuelle. En théorie, VirtualBox peut lancer tous les systèmes d'exploitation x86 (DOS, Windows, OS/2, FreeBSD, OpenBSD), mais pour s'approcher le plus possible de la performance d'origine du code invité sur votre machine, nous avons dû faire beaucoup d'optimisations qui sont spécifiques à certains systèmes d'exploitation. Donc si votre système d'exploitation favori peut être un invité, nous en supportons et optimisons officiellment quelques-uns sélectionnés (cependant, cela inclut ceux les plus courants).  
Voir le chapitre [1.4.1 Systèmes d'exploitation invités supportés](#mark1.4.1), pour plus des détails.  

En quelques mots  la machine invité représente la machine virtuelle qui sera allouée et gérée par l'hyperviseur VirtualBox.  
On l'appelle aussi parfois "client" mais ce terme est moins adapté, il ne faut pas le confondre avec le client d'un système client/serveur.  
En anglais, on la nomme "guest".  

Machine virtuelle (VM). C'est l'environnement spécial créé par VirtualBox pour votre système d'exploitation invité qui s'exécute. Autrement dit, vous lancer votre système d'exploitation invité "dans" une VM. Normalement, une VM apparaîtra sur le bureau de votre ordinateur comme une fenêtre, mais elle peut être affichée en mode plein écran, ou à distance sur un autre ordinateur, selon les interfaces de VirtualBox que vous utilisez.  De manière plus abstraite, en interne, VirtualBox conçoit une VM comme un ensemble de paramètres qui déterminent sont comportement. Parmi eux, on a les paramètres matériels (combien de mémoire devrait avoir la VM, quels disques durs devrait virtualiser VirtualBox via quels fichiers conteneurs, quels CDs, lesquels sont montés, etc.) ainsi que des informations d'état (si la machine est en fonction, sauvegardée, ses instantanés, etc.). Ces paramètres apparaissent dans la fenêtre du gestionnaire de VirtualBox ainsi que par le programme en ligne de commande VBoxManage, voir le chapitre [8 VBoxManage.](#mark8)  
Autrement dit, une VM est aussi ce que vous pouvez voir dans la boîte de dialogue de ses paramètres.  

Suppléments Invité ( En anglais, on la nomme Guest Additions). Ceci renvoie aux paquets logiciels spéciaux qui sont inclus avec VirtualBox mais conçus pour être installés à l'intérieur d'une VM pour améliorer les performances de l'OS invité et pour ajouter des fonctionnalités supplémentaires (dossiers partagés, glisser-déposer, ajustement automatique de la résolution de l'écran, etc.). La licence interdit d'utiliser les extensions en entreprise ou en université. C'est décrit en détails au chapitre [4 Les suppléments invité.](#mark4)  

[Retour à la table des matières](#Table des matières)

# 1.3 Aperçu des fonctionnalités<a id="mark1.3"></a>

Voici un bref résumé des principales fonctionnalités de VirtualBox :  

* Portabilité. VirtualBox se lance sur un grand nombre de systèmes d'exploitation hôtes 32 et 64 bits (de nouveau, voir chapitre [1.4 Systèmes d'exploitation hôtes supportés](#mark1.4) pour plus de détails).  
VirtualBox est ce qu'on appelle un hyperviseur "hébergé" (parfois désigné comme un hyperviseur de "type 2"). Alors qu'un hyperviseur bare-metal" ou de "type 1" se lancerait directement sur le matériel, VirtualBox exige l'installation d'un système d'exploitation. Il peut alors lancer toutes les applications sur cet hôte.  
Dans une très large mesure, VirtualBox est fonctionellement identique sur toutes les plate-formes hôtes et on peut utiliser les mêmes formats de fichiers et d'images. Ceci vous permet de lancer des machines virtuelles créées sur un hôte sur un autre hôte ayant un système d'exploitation hôte différent ; par exemple, vous pouvez créer une machine virtuelle sur Windows puis la lancer sous Linux.  
En outre, on peut facilement importer et exporter des machines virtuelles en utilisant le format ouvert de virtualisation (OVF voir chapitre [1.14 Importer et exporter des machines virtuelles](#mark1.14), un standard industriel créé dans ce but. Vous pouvez même importer des OVFs qui ont été créés avec un logiciel de virtualisation différent.  
* Aucune virtualisation matérielle requise. Pour de nombreux scénarios, VirtualBox n'exige pas la construction, dans le processeur, des fonctionnalités récentes du matériel telles que Intel VT-x ou AMD-V. Contrairement à beaucoup d'autres solutions de virtualisation, vous pouvez donc utiliser VirtualBox même sur du vieux matériel où ces fonctionnalités ne sont pas présentes. Les détails techniques sont expliqués au chapitre [10.3, Virtualisation matérielle vs. logicielle.](#mark10.3)  
* Suppléments invité : dossiers partagés, fenêtres transparentes (seamless), virtualisation 3D. Les suppléments invité de VirtualBox sont des paquets logiciels qu'on peut installer à l'intérieur des systèmes invités supportés pour améliorer leurs performances et effectuer une intégration et une communication accrues avec le système hôte. Après avoir installé les suppléments invité, une machine virtuelle supportera vajustement automatique des résolutions graphiques, les fenêtres transparentes, la vidéo 3D accélérée et davantage. Les suppléments invité sont décrits en détails au chapitre [4, Les suppléments invité.](#mark4)  
Notamment, les suppléments invité offrent les "dossiers partagés", ce qui vous permet d'accéder aux fichiers depuis l'intérieur d'une machine invitée. Les dossiers partagés sont décrits au chapitre [4.3 Dossiers partagés.](#mark4.3)  
* Bon support matériel. Entre autres, VirtualBox supporte :  
	*	 Le multiprocesseur invité (SMP). VirtualBox peut montrer jusqu'à 32 processeurs virtuels à chaque machine virtuelle, indépendamment du nombre de cœurs présents sur votre hôte physiquement.  
	*	 Support des périphériques USB. VirtualBox implémente un contrôleur USB virtuel et vous permet de connecter des périphériques USB de votre choix à vos machines virtuelles sans devoir installer de pilotes spécifiques sur l'hôte. Le support USB n'est pas limité à certaines catégories de périphériques. Pour des détails, voir le chapitre [3.10.1 Paramètres USB.](#mark3.10.1)  
	*	 Compatibilité matérielle. VirtualBox virtualise une vaste gamme de périphériques virtuels, parmi lesquels beaucoup sont en général fournis par d'autres plateformes de virtualisation. Ceci inclut les contrôleurs de disques IDE, SCSI and SATA, plusieurs cartes son et réseau virtuelles, les ports série et parallèle virtuels, ainsi qu'un contrôleur d'interruptions entrée/sortie programmable avancé (I/O APIC), ce qu'on trouve dans de nombreux systèmes PC modernes. Cela facilite le clonage d'images de PC depuis des machines réelles et l'importation de machines virtuelles tierces dans VirtualBox.  
	*	 Support complet de l'ACPI. L'Advanced Configuration and Power Interface (ACPI) est complètement supportée par VirtualBox. Cela facilite le clonage d'images de PC depuis des machines réelles et l'importation de machines virtuelles tierces dans VirtualBox. Avec son support d'état d'énergie de l'ACPI unique, VirtualBox peut même signaler aux systèmes d'exploitation supportant l'ACPI l'état de l'alimentation de l'hôte. Pour les systèmes mobiles sur batterie, le système invité ainsi que l'économie d'énergie et peut  signaler à l'utilisateur le temps restant (par exemple en modes plein écran).  
	*	 résolutions sur plusieurs écrans. Les machines virtuelles VirtualBox supportent les résolutions d'écran sur autant d'écrans que d'écrans physiques, ce qui leur permet de s'étaler sur une grande variété d'écrans reliés au système hôte.  
	*	 Support iSCSI construit en dur. Cette fonctionnalité unique vous permet de connecter une machine virtuelle directement à un serveur de stockage iSCSI sans passer par le système hôte. La VM accède à la cible iSCSI directement, sans l'intermédiaire requis pour virtualiser des disques virtuels dans les fichiers conteneurs. Pour des détails, voir le chapitre [5.10 Serveurs iSCSI.](#mark5.10)  
	*	 Amorçage par le réseau PXE. Les cartes réseaux virtuelles intégrées de VirtualBox supportent complètement l'amorçage à distance via Preboot Execution Environment (PXE).  
* Multigénération d'instantanés en branches. VirtualBox peut sauvegarder des instantanés de votre choix de l'état de la machine virtuelle. Vous pouvez revenir dans le passé et rétablir l'état de la machine virtuelle à n'importe quel instantané, puis démarrer une autre configuration de VM à partir de là, ce qui crée de fait une arborescence d'instantanés complète. Pour les détails, voir le chapitre [1.10 Instantanés.](#mark1.10) Vous pouvez créer et effacer des instantanés alors que la machine virtuelle est en fonction.  
* Groupes de VMs. VirtualBox offre une fonction de groupes permettant à l'utilisateur d'organiser les machines virtuelles en groupe ou individuellement. Outre les groupes classiques, il est également possible pour une VM d'être dans plus d'un groupe et pour des groupes à nested dans une hiérarchie - c'est-à-dire des groupes de groupes. Les opérations faisables sur les groupes sont généralement les mêmes que celles applicables aux VMs individuelles, à savoir le démarrage, la pause, la réinitialisation, la fermeture (état sauvegardé, envoyer une extinction, couper), désactiver l'état sauvegardé, afficher dans le système de fichiers, trier.  
* Architecture propre ; une modularité sans précédent. VirtualBox a un aspect extrêmement modulaire avec des interfaces de programmation internes bien définies et une séparation propre du code client et serveur. Cela facilite son contrôle par plusieurs interfaces à la fois : par exemple, vous pouvez démarrer une VM en cliquant simplement sur un bouton de l'interface graphique de VirtualBox, puis contrôler cette machine à partir de la ligne de commande, voire même à distance. Voir le chapitre [1.16 Interfaces alternatives](#mark1.16) pour plus  de détails.  
Du fait de son architecture modulaire, VirtualBox peut également présenter toutes ses fonctionnalités et sa ﬂexibilité de configuration dans un kit de développement logiciel (SDK), cohérent qui permet d'intégrer tous les aspects de VirtualBox à d'autres logiciels.  
Merci de voir le chapitre [11 Interfaces de programmation de VirtualBox](#mark11) pour plus de détails.  
* Affichage de machines à distance. La VirtualBox Remote Desktop Extension (VRDE) permet un accès distant et en haute performance à une machine virtuelle en fonction.  
Cette extension supporte le protocole de bureau distant (VRDP), construit au départ dans Microsoft Windows, avec des suppléments spéciaux pour un support complet de l'USB sur le client.  
Le VRDE de se base pas sur le serveur RDP construit dans Microsoft Windows ; mais il est inclu directement dans la couche de virtualisation. Il s'en suit qu'il fonctionne avec les systèmes d'exploitation hôte différents de Windows (même en mode texte) et il n'a pas besoin non plus d'un support applicatif dans la machine virtuelle. Le VRDE est décrit en détail au chapitre [7.1 Affichage distant (VRDP support).](#mark7.1)  
Sur la base de cette possibilité spéciale, VirtualBox vous offre plus de fonctionnalités uniques :  
	*	 Authentification RDP Extensible. VirtualBox supporte déjà Winlogon sur Windows et PAM sur Linux pour l'anthentification RDP. En outre, il inclut un SDK facile à utiliser qui vous permet de créer des interfaces de votre choix pour d'autres méthodes d'authentification ; voir le chapitre [7.1.5 Authentification RDP](#mark7.1.5) pour plus de détails.  
	*	 USB via RDP. Via le support RDP de canaux virtuels, VirtualBox vous permet aussi de connecter des périphériques USB de votre choix en local sur une machine virtuelle en fonction à distance sur un serveur RDP VirtualBox ; voir le chapitre [7.1.4 USB distant](#mark7.1.4) pour plus de détails.  

[Retour à la table des matières](#Table des matières)

# 1.4 Systèmes d'exploitation hôtes supportés<a id="mark1.4"></a>

VirtualBox peut être installé sur les systèmes hôtes suivants:  

* Linux (en 32 et 64 bits ; en .deb, en .rpm et en source)
* Mac OS X (10.9, 10.10 et 10.11 en 64 bits)
* Solaris (10 et 11 en 64 bits)
* Windows (XP, Vista, 7, 8, 8.1 et 10 en 32 et 64 bits)
À partir de VirtualBox v5.x, Windows XP n'est plus supporté.  
* Windows Server (2008, 2008R2, 2012 et 2012 R2 en 64 bits)
* FreeBSD
* Genode

Note: À titre d'information VirtualBox dans la Version 4.3.13 fonctionne sur les systèmes d’exploitation hôtes énumérés dans le chapitre [3.1.0 Systèmes d'exploitation hôtes supportés pour la version 4.3.13](#mark3.1.0)  

[Retour à la table des matières](#Table des matières)

# 1.4.1 Systèmes d'explotation invités supportés<a id="mark1.4.1"></a>

En tant qu'invité, il supporte:  

* IBM OS/2 Warp ;
* Linux 2.x/3.x/4.x ;
Debian, Red Hat/CentOS;
* FreeBSD, NetBSD, OpenBSD ;
* Mac OS X ;
* Windows, de 3.1 à 10 et pour les serveurs, de NT4 à 2012.

Note: À titre d'information VirtualBox dans la Version 4.3.13 fonctionne sur les systèmes d’exploitation invités énumérés dans le chapitre [3.1 Systèmes d'exploitation invités supportés pour la version 4.3.13](#mark3.1)  

[Retour à la table des matières](#Table des matières)

# 1.4.2 Disque VDI<a id="mark1.4.2"></a>

Le VDI est le format d'enregistrement par défaut des disques durs virtuels pour VirtualBox5. Selon les choix de l'utilisateur lors de la création de ce disque, il peut avoir une taille fixe ou variable. La taille sera fixe si l'utilisateur a choisi "taille fixe" dans les options. Si l'utilisateur choisit 8 Go, le disque pèsera 8 Go et ce, sans possibilité de le modifier par la suite, même si cet espace se révèle insuffisant lors de l'utilisation de la machine virtuelle. Cependant si la taille est dynamiquement allouée, le disque occupera l'espace qu'il nécessite et il pourra augmenter cet espace jusqu'à la limite fixée par l'utilisateur. Néanmoins, la taille de ce disque ne pourra jamais être réduite. Le disque nécessitera de l'espace supplémentaire lorsque sur le système virtuel, des logiciels ou des fichiers seront installés par exemple.  
Ces deux choix de stockage ont chacun avantages et inconvénients. Un disque de taille dynamiquement allouée utilise en gros simplement l'espace où sont écrites des données, au prix d'un léger surcoût en lecture/écriture, à la manière d'un logical volume manager (LVM) en Linux ou AIX. A contrario, une taille fixe occupe un espace fixe qui est mobilisé dès sa création, mais assure des performances proches d'un disque natif. En 2016 où une taille typique de disque est 1 To, et si l'on ne doit pas stocker des dizaines de machines virtuelles, 40 Go s'allouent typiquement en espace fixe.  
Le VDI est récupérable facilement aussi comme fichier de disque dur virtuel : on copie aisément ce fichier, que l'on peut ensuite importer dans d'autres machines virtuelles devenant des copies conformes de la première. Cela permet une redondance des serveurs dans un réseau, et aussi des sauvegardes commodes.  

[Retour à la table des matières](#Table des matières)

# 1.5 Installer VirtualBox et le pack d'extension<a id="mark1.5"></a>

VirtualBox est fourni dans de nombreux paquets et son installation dépend de votre système d'exploitation hôte. Si vous avez déjà installé ce logiciel, l'installation devrait être facile pour chaque plateforme hôte, VirtualBox utilise la méthode d'installation la plus courante facile possible. Si vous avez un problème ou des besoins particuliers, reportez vous au chapitre [2 Détails sur l'installation](#mark2) pour plus de détails sur les différentes méthodes d'installation.  

Le logiciel peut être étendu au moyen de packs d'extension. L'éditeur en fournit un qui ajoute notamment le support de l'USB 2.0 (EHCI), l'USB 3 (xHCI), la webcam, la connexion directe à l'invité par RDP, le Boot PXE ou encore le chiffrement des images disques avec l'algorithme AES. Il est fourni sous une licence différente : VPUEL pour VirtualBox Personal Use and Evaluation License.  

À partir de la version 4.0, VirtualBox est divisé en plusieurs composants.  

1. Le paquet de base contient tous les composants libres et il est sous licence GNU General Public License V2.  
2. Des packs d'extension supplémentaires peuvent être téléchargés, qui rajoutent des fonctionnalités au paquet de base de VirtualBox. Pour l'instant, Oracle fournit un seul pack d'extension, qu'on peut trouver sur <http://www.virtualbox.org> et qui offre les fonctionnalités supplémentaires suivantes :  
a) Périphériques virtuels USB 2.0 (EHCI); ; voir le chapitre [3.10 Paramètres USB.](#mark3.10)  
b) Support de VirtualBox Remote Desktop Protocol (VRDP); voir le chapitre [7.1 Affichage distant (VRDP support).](#mark7.1)  
c) Amorçage Intel PXE ROM avec support pour la carte réseau E1000.  
d) Support expérimental pour passthrough PCI sur les hôtes Linux; voir le chapitre [9.6 PCI passthrough.](#mark9.6)  
 
Les packs d'extension VirtualBox ont une extension de nom de fichiers .vbox-extpack.  
Pour installer une extension, double-cliquez simplement sur le fichier du paquet et une fenêtre de gestion des opérations réseaux apparaîtra, vous guidant à travers les étapes nécessaires.  
Pour voir les packs d'extension actuellement installés, merci de démarrer le gestionnaire VirtualBox (voir la prochaine section). Dans le menu "Fichier", merci de sélectionner "Préférences". Dans la fenêtre qui apparaît, allez à la catégorie "Extensions" qui affiche les extensions actuellement installées et vous permet de supprimer un paquet ou d'en ajouter un.  
Vous pouvez aussi utiliser VBoxManage en ligne de commande : voir le chapitre [8.36 VBoxManage extpack](#mark8.36) pour plus de détails.  

Note: Quand vous serez familier de l'utilisation des assistants, songez à utiliser le mode expert disponible dans certains assistants. Quand il est disponible, on peut le sélectionner en cliquant sur un bouton et cela accélère les processus de l'utilisateur pour utiliser l'assistant.  

[Retour à la table des matières](#Table des matières)

# 1.6 Démarrer VirtualBox<a id="mark1.6"></a>

Après l'installation, vous pouvez démarrer VirtualBox comme suit:  

* Sur un hôte Windows, dans le menu standard "Programmes", cliquez sur l'élément du groupe "VirtualBox". Sur Vista ou Windows 7, vous pouvez aussi taper "VirtualBox" dans la zone de recherche du menu "Démarrer".
* Sur un hôte Mac OS X, dans la zone de recherche, cliquez deux fois sur l'élément "VirtualBox" du dossier "Applications". (Il se peut que vous vouliez mettre cet élément sur votre Dock.)
* Sur un hôte Linux ou Solaris, selon votre environnement de bureau, une icône "VirtualBox" peut avoir été mis soit dans le groupe "Système" soit dans "Outils système" de votre menu "Applications". Sinon vous pouvez taper VirtualBox dans un terminal.

Quand vous démarrez VirtualBox pour la première fois, une fenêtre devrait apparaître :  

Cette fenêtre s'appelle le "Gestionnaire VirtualBox. À gauche, vous pouvez voir un panneau qui listera, plus tard, toutes vos machines virtuelles. Comme vous n'en avez pas créées, la liste est vide. Une ligne de boutons au-dessus vous permet de créer de nouvelles VMs et de travailler sur celles existantes, lorsque vous en avez. Le panneau à droite affiche les propriétés de la machine virtuelle actuellement sélectionnée s'il y en a une. De nouveau, comme vous n'avez pas encore de machine, le panneau affiche un message de bienvenue.  

[Retour à la table des matières](#Table des matières)

# 1.7 Créer votre première machine virtuelle<a id="mark1.7"></a>

Cliquez sur le bouton "Nouveau" en haut de la fenêtre du gestionnaire VirtualBox. Un assistant apparaîtra pour vous guider à travers le paramétrage d'une nouvelle machine virtuelle (VM) :  

Sur les écrans suivants, l'assistant vous demandera le minimum d'informations dont il a besoin pour créer une VM, en particulier :  

1. Le nom de la VM sera plus tard affiché dans la liste des VMs de la fenêtre du gestionnaire VirtualBox, et il sera utilisé pour les fichiers de la VM sur le disque. Si vous pouvez utiliser n'importe quel nom, gardez en tête qu'après avoir créé quelques VMs, vous apprécierez d'avoir donné à vos VMs des noms parlants ; ainsi "Ma VM" serait moins utile que Windows 10 avec OpenOffice".  
2. Pour le "Type de système d'exploitation", sélectionnez le système d'exploitation que vous voudrez installer plus tard. Les systèmes d'exploitation supportés sont ici regroupés ; si vous voulez installer une chose très rare et non listé, sélectionnez "Autre". Selon votre sélection, VirtualBox activera ou désactivera certains paramètres de VM dont peut avoir besoin votre système d'exploitation invité. C'est particulièrement important pour les invités 64 bits (voir le chapitre [3.1.2 Invités 64 bits).](#mark3.1.2) Il est donc recommandé de toujours paramétrer la bonne valeur.  
3. Sur la page suivante, sélectionnez la mémoire (RAM) que VirtualBox devra affecter à chaque fois que la machine virtuelle sera démarrée. La quantité de mémoire donnée ici sera retirée de votre machine hôte laissée au système d'exploitation invité, lequel verra cette mémoire comme RAM installée sur l'ordinateur (virtuel).  
Note: Choisissez avec prudence ce paramètre ! La mémoire donnée à la VM ne sera pas disponible pour votre OS hôte pendant que la VM sera en fonction, donc ne spécifiez pas plus que vous ne pouvez donner. Par exemple, si votre machine hôte a 1 Go de RAM et si vous entrez 512 Mo de RAM pour une machine virtuelle en particulier, pendant l'exécution de cette VM, vous n'aurez plus que 512 Mo pour tous les autres logiciels de votre hôte. Si vous lancez deux VMs en même temps, encore plus de mémoire sera affectée à la deuxième VM (qui peut même ne pas démarrer si la mémoire n'est pas disponible). D'un autre côté, vous devriez spécifier autant que votre système d'exploitation invité (et vos applications) ont besoin pour s'exécuter correctement.  
Un invité Windows XP exigera au moins quelques centaines de Mo de RAM pour fonctionner correctement, et Windows Vista refusera même de s'installer avec moins de 512 Mo.  
Bien sûr, si vous voulez lancer des applications gourmandes en ressources graphiques dans votre VM, vous pouvez avoir besoin de plus de RAM.  
La règle d'or est donc que si vous avez 1 Go de RAM voire plus dans votre ordinateur hôte, il est sûr d'affecter 512 Mo à chaque VM. Mais dans tous les cas, assurez-vous d'avoir au moins 256 à 512 Mo de RAM sur votre système d'exploitation hôte. Sinon, il se peut que vous ne votre OS hôte fasse un usage excessif de l'espace d'échange sur votre disque dur, ce qui peut conduire à un plantage de votre système hôte.  
Comme avec les autres paramètres, vous pourrez modifier ce réglage plus tard après avoir créé la VM.  
4. Ensuite vous devez spécifier un disqke dur virtuel pour votre VM.  
Il existe de nombreuses façons, potentiellement compliquées, de fournir de l'espace de disque dur à une VM avec VirtualBox, (voir le chapitre [5 Le stockage virtuel](#mark5) pour plus de détails), mais la manière la plus courante est d'utiliser un gros fichier image sur votre "vrai" disque dur, dont VirtualBox présente le contenu à votre VM comme si c'était un disque dur normal. Ce fichier représente un disque dur complet donc vous pouvez même le copier vers un autre hôte et l'utiliser avec une autre installation VirtualBox.  
L'assistant affiche la fenêtre suivante :  
* Pour créer un nouveau disque dur virtuel vierge, appuyez sur le bouton "Nouveau".  
* Vous pouvez utiliser un fichier image de disque existant.  
La zone de liste déroulante affichée dans la fenêtre contient toutes les images de disque dont se souvient VirtualBox, probablement parce qu'elles sont actuellement attachées à une machine virtuelle (ou elles l'ont jadis été).  
Vous pouvez aussi cliquer sur le petit bouton dossier à côté de la zone de liste déroulante pour ouvrir une boîte de dialogue de fichier standard qui vous permet de choisir un fichier image de disque sur le disque de votre hôte.  
Vraisemblablement, si vous utilisez VirtualBox pour la première fois, vous voudrez créer une nouvelle image de disque. Appuyez donc sur le bouton "Nouveau".  
Ceci ouvre une nouvelle fenêtre, celle de "Assistant Créer un nouveau disque virtuel", qui vous aide à créer un nouveau fichier image de disque dans le dossier de la nouvelle machine virtuelle.  
VirtualBox supporte deux types de fichiers image :  
* Un fichier rempli dynamiquement ne grossira que lorsque l'invité stockera des données sur son disque dur virtuel. Il sera donc petit au départ sur le disque dur hôte et ne grossira que plus tard jusqu'à la taille indiquée, au fur et à mesure que des données le rempliront.  
* Un fichier à taille fixe occupera immédiatement l'espace spécifié même si seule une partie de l'espace disque virtuel est en réalité utilisée. S'il occupera beaucoup plus de place, un fichier à taille fixe connaît moins de latence et il va donc légèrement plus vite qu'un fichier rempli dynamiquement.  
Pour des détails sur les différences, merci de vous reporter au chapitre [5.2, Fichiers images de disque (VDI, VMDK, VHD, HDD).](#mark5.2)  
Pour empêcher votre disque dur physique de tourner à plein, VirtualBox limite la taille du fichier image. Là encore il doit y avoir assez de place pour le contenu de votre système d'exploitation et les applications que vous voulez installer pour un invité Windows ou Linux modernes, vous aurez probablement besoin de plusieurs gigaoctets pour une utilisation sérieuse :  
Après avoir sélectionné ou créé votre fichier image, appuyez de nouveau sur "Suivant" pour passer à la page suivante.  
5. Après avoir cliqué sur "Terminer", votre nouvelle machine virtuelle sera créée. Vous la verrez alors dans la liste à gauche de la fenêtre du gestionnaire, avec le nom que vous avez entré au départ.  

[Retour à la table des matières](#Table des matières)

# 1.8 Lancer votre machine virtuelle<a id="mark1.8"></a>

Pour démarrer une machine virtuelle, vous avez plusieurs choix :  

* Cliquez deux fois sur son entrée dans la liste dans la fenêtre du gestionnaire ou  
* sélectionnez son entrée dans la liste de la fenêtre du gestionnaire et appuyez sur le bouton "Démarrer" en bas ou  
* pour les machines virtuelles créées avec VirtualBox 4.0 ou supérieur, allez au dossier "VirtualBox VMs" dans le dossier personnel de votre système, cherchez le sous-répertoire de la machine que vous voulez démarrer et cliquez deux fois sur le fichier de paramètres de la machine (ayant une extension de fichier .vbox).  

Ceci ouvre une nouvelle fenêtre et la machine virtuelle que vous avez sélectionnée va démarrer.  
Tout ce que vous verriez sur l'écran d'un système normal apparaît dans la fenêtre, (voir le chapitre [1.2 Un peu de terminologie.)](#mark1.2)  

En général, vous pouvez utiliser la machine virtuelle presqu'exactement comme vous utiliseriez un vrai ordinateur. Il y a quelques points à mentionner quand même.  

* Si vous avez un CD ou un DVD physique à partir duquel vous voulez installer votre système d'exploitation invité (par exemple un CD ou un DVD d'installation de Windows), mettez-le dans le lecteur CD ou DVD de votre hôte.  
Puis dans la zone de liste déroulante des médias d'installation de l'assistant, sélectionnez "Lecteur hôte" avec la bonne lettre de lecteur (ou, en cas d'hôte Linux, le fichier de périphérique).  
Ceci permettra à votre VM d'accéder au média dans votre lecteur hôte et vous pouvez poursuivre l'installation à partir de là.  
* Si vous avez téléchargé un média d'installation sur Internet sous forme d'un fichier image ISO (en général pour une distribution Linux), vous pourriez graver ce fichier sur un CD ou un DVD vierge et poursuivre comme on vient de décrire. Mais avec VirtualBox, vous pouvez passer cette étape et monter le fichier ISO directement. VirtualBox présentera ce fichier comme un lecteur de CD ou de DVD-ROM à lamachine virtuelle, comme il le fait avec une image de disque dur virtuel.  
Dans ce cas, la zone de liste déroulante de l'assistant contient la liste des médias d'installation qui ont été précédemment utilisés avec VirtualBox.  
Si votre média n'est pas dans la liste (surtout si vous utilisez VirtualBox pour la première fois), sélectionnez la petite icône de dossier à côté de la zone de liste déroulante pour afficher une boîte de dialogue de fichiers standard dans laquelle vous pouvez choisir le fichier image sur vos disques hôtes.  

Dans les deux cas, après avoir fait vos choix dans l'assistant, vous pourrez installer votre système d'exploitation.  

[Retour à la table des matières](#Table des matières)

# 1.8.1 Démarrage d'une nouvelle VM pour la première fois<a id="mark1.8.1"></a>

Quand on démarre une VM pour la première fois, un autre nommé "Assistant premier démarrage" apparaîtra pour vous aider à sélectionner un média d'installation. Comme la VM est créée vierge, agissant exactement comme un vrai ordinateur sans système d'exploitation installé, elle ne fera rien et affichera un message d'erreur selon lequel aucun système d'exploitation n'a été trouvé.  
C'est pourquoi l'assistant vous aide à sélectionner un média à partir duquel vous pouvez installer un système d'exploitation.  

[Retour à la table des matières](#Table des matières)

# 1.8.2 Capturer et rendre le clavier et la souris<a id="mark1.8.2"></a>

À partir de la version 3.2, VirtualBox offre aux nouvelles machines virtuelles une tablette USB virtuelle à travers laquelle les événements de la souris sont transmis au système d'exploitation invité. Il s'en suit que si vous lancez un système d'exploitation invité moderne qui peut gérer de tels périphériques, il se peut que le support de la souris fonctionne sans que la souris ne soit "capturée" comme décrit ci-dessous ; voir chapitre [3.4.1 Onglet "Carte mère"](#mark3.4.1) pour plus d'informations.  
Sinon, si la machine virtuelle ne voit que la souris et le clavier PS/2 standards, car le système d'exploitation de la machine virtuelle ne "sait" pas qu'il ne fonctionne pas sur un vrai ordinateur, il attend à avoir un contrôle exclusif de votre clavier et de votre souris. Ce n'est cependant pas le cas puisque, sauf si vous lancez votre VM en mode plein écran, votre VM doit partager le clavier et la souris avec d'autres applications et éventuellement d'autres VMs sur l'hôte.  
Il s'en suit qu'immédiatement après l'installation d'un système d'exploitation invité, et avant que vous installiez les Suppléments invité (nous expliquerons cela dans une minute), seule une des deux votre VM ou le reste de votre ordinateur - peut "détenir" le clavier et la souris. Vous verrez un deuxième pointeur de souris qui sera toujours enfermé dans la fenêtre de la VM. De base, vous activez la VM en cliquant dedans.  
Pour rendre le clavier et la souris à votre système d'exploitation hôte, VirtualBox réserve une touche spéciale de votre clavier pour lui : la "touche hôte". Par défaut, c'est la touche Contrôle droit de votre clavier ; sur un hôte Mac, la touche hôte par défaut est la touche de commande gauche. Vous pouvez modifier ce réglage par défaut dans les paramètres globaux de VirtualBox, voir chapitre [1.15 Paramètres globaux.](mark1.15) Dans tous les cas, le paramétrage actuel de la touche hôte est toujours affiché en bas à droite de la fenêtre de la VM, au cas où vous l'auriez oublié:  

En détail, tout se traduit comme suit:  

* Votre clavier appartient à la VM si la fenêtre de la VM du bureau hôte contient le focus du clavier (et si vous avez beaucoup de fenêtres ouvertes dans votre système d'exploitation invité, la fenêtre contenant le focus dans votre VM). Cela veut dire que si vous voulez taper quelque chose dans votre VM, cliquez d'abord sur la barre de titre de la fenêtre de votre VM.  
Pour rendre la propriété du clavier, appuyez sur la touche hôte (comme expliqué ci-dessus, en général la touche Contrôle droit).  
Remarquez que si la VM possède le clavier, certaines séquences de touches (comme Alt-Tab par exemple) ne seront plus vues par l'hôte, mais iront plutôt à l'invité. Après avoir appuyé sur la touche hôte pour réactiver le clavier hôte, tous les appuis iront de nouveau à l'hôte pour que les séquences comme Alt-Tab ne touchent plus l'invité. Pour des raisons techniques, il se peut qu'il ne soit pas possible, pour une VM, de récupérer toutes les entrées du clavier même si elle possède ce dernier. Par exemples, la séquence Alt-Ctrl-Suppr sur les hôtes Windows ou des touches uniques utilisées par certaines applications sur les hôtes X11 comme la fonction "La touche Contrôle souligne le pointeur de la souris" du bureau GNOME .  
* Votre souris n'appartient à la VM qu'après avoir cliqué de nouveau dans la fenêtre de la VM. Le pointeur de souris de l'hôte disparaîtra et votre souris maniera le pointeur de l'invité au lieu de votre pointeur de souris normal.  
Remarquez que l'appartenance de la souris ne dépend pas de celle du clavier, même après avoir cliqué sur la barre de titre pour pouvoir taper dans la fenêtre de la VM, votre souris n'appartient pas nécessairement à la VM.  
Pour rendre l'appartenance de votre souris à la VM, appuyez sur la touche hôte.  

Comme ce comportement peut être gênant, VirtualBox offre un ensemble d'outils et de pilotes de périphériques pour les systèmes invités, appelé les "Suppléments invité VirtualBox", qui rendent beaucoup transparentes les opérations du clavier et de la souris de la VM. Très important, les suppléments vous débarrasserons du deuxième pointeur de souris de "l'invité" et fera fonctionner la souris de votre hôte directement dans l'invité.  
On décrira ceci plus tard au chapitre [4 Les suppléments invité.](#mark4)  

[Retour à la table des matières](#Table des matières)

# 1.8.3 Taper des caractères spéciaux<a id="mark1.8.3 "></a>

Les systèmes d'exploitation prévoient certaines combinaisons de touches pour lancer certaines procédures. Certaines de ces combinaisons de touches peuvent être difficiles à faire dans une machine virtuelle ; car il y a trois candidats à la réception de l'entrée clavier : le système d'exploitation hôte, VirtualBox ou le système d'exploitation invité. Le récepteur de l'appui sur les touches dépend d'un certain nombre de facteurs comprenant la touche elle-même.  

* Les systèmes d'exploitation hôte réservent certaines combinaisons de touches pour eux.  
C'est par exemple impossible de faire Ctrl+Alt+Supp si vous voulez redémarrer le système d'exploitation invité de votre machine virtuelle, car cette combinaison de touches est en général rattachée en dur à l'OS hôte (Windows comme Linux l'interceptent), et l'appui sur cette combinaison de touches redémarrera donc votre hôte.  
De plus, sur les systèmes on Linux et Solaris, qui utilise le système X Window, la combinaison de touches Ctrl+Alt+Effacement redémarrent en général le serveur X (pour relancer toute interface graphique en cas de problème). Comme le serveur X intercepte cette combinaison, l'appui sur ces touches relancera en général votre interface graphique hôte (et tuera tous les programmes, dont VirtualBox, dans le processus).  
Par ailleurs, sur les hôtes Linux qui supportent les terminaux virtuels, la combinaison de touches Ctrl+Alt+Fx (où Fx est une touche de fonctions entre F1 et F12) permet en principe de basculer entre des terminaux virtuels. Comme avec Ctrl+Alt+Supp, ces combinaisons sont interceptées par le système d'exploitation hôte et elles basculent donc toujours entre les terminaux de l'hôte.  
Si vous voulez plutôt envoyer ces combinaisons de touches au système d'exploitation invité de la machine virtuelle, vous devrez utiliser une des méthodes suivantes :  

* Utiliser les icônes du menu "Machine" de la fenêtre de la machine virtuelle. Vous y trouverez "Insérer Ctrl+Alt+Supp" et "Ctrl+Alt+Effacement" ; cette dernière n'ayant toutefois d'effet qu'avec les invités Linux ou Solaris.  
* Appuyer sur des combinaisons de touches spéciales avec la touche hôte (en principe, la touche contrôle droit), alors VirtualBox traduira, pour la machine virtuelle :  
	*	 Touche hôte + Supp envoie Ctrl+Alt+Supp pour redémarrer l'invité);  
	*	 Touch hôte + Effacement pour envoyer Ctrl+Alt+Effacement (pour redémarrer l'interface graphique 'un invité Linux ou Solaris) ;
	*	 Les systèmes d'exploitation hôte réservent certaines combinaisons de touches pour eux.  
C'est par exemple impossible de faire Ctrl+Alt+Supp si vous voulez redémarrer le système d'exploitation invité de votre machine virtuelle, car cette combinaison de touches est en général rattachée en dur à l'OS hôte (Windows comme Linux l'interceptent), et l'appui sur cette combinaison de touches redémarrera donc votre hôte.  
De plus, sur les systèmes on Linux et Solaris, qui utilise le système X Window, la combinaison de touches Ctrl+Alt+Effacement redémarrent en général le serveur X (pour relancer toute vinterface graphique en cas de problème). Comme le serveur X intercepte cette combinaison, l'appui sur ces touches relancera en général votre interface graphique hôte (et tuera tous les programmes, dont VirtualBox, dans le processus).  
Par ailleurs, sur les hôtes Linux qui supportent les terminaux virtuels, la combinaison de touches Ctrl+Alt+Fx (où Fx est une touche de fonctions entre F1 et F12) permet en principe de basculer entre des terminaux virtuels. Comme avec Ctrl+Alt+Supp, ces combinaisons sont interceptées par le système d'exploitation hôte et elles basculent donc toujours entre les terminaux de l'hôte.  
Si vous voulez plutôt envoyer ces combinaisons de touches au système d'exploitation invité de la machine virtuelle, vous devrez utiliser une des méthodes suivantes :  
	*	 Utiliser les icônes du menu "Machine" de la fenêtre de la machine virtuelle. Vous y trouverez "Insérer Ctrl+Alt+Supp" et "Ctrl+Alt+Effacement" ; cette dernière n'ayant toutefois d'effet qu'avec les invités Linux ou Solaris.
	*	  Appuyer sur des combinaisons de touches spéciales avec la touche hôte (en principe, la touche contrôle droit), alors VirtualBox traduira, pour la machine virtuelle :
	*	  Touche hôte + Supp envoie Ctrl+Alt+Supp pour redémarrer l'invité);
	*	  Touch hôte + Effacement pour envoyer Ctrl+Alt+Effacement (pour redémarrer l'interface graphique 'un invité Linux ou Solaris) ;
	*	  Touche hôte + F1 (ou autres touches de fonction) pour simuler Ctrl+Alt+F1 (ou d'autres touches de fonction, pour basculer entre les terminaux virtuels d'un invité Linux).  
* Pour d'autres combinaisons de touches telles que Alt-Tab (pour basculer entre des fenêtres ouvertes), VirtualBox vous permet de configurer si ces combinaisons concerneront l'hôte ou l'invité, si la machine virtuelle a le focus. C'est un paramètre global de toutes les machines virtuelles qui se trouve dans "Fichier" -> "Préférences" -> "Entrée" -> "Capture automatique du clavier".  
* Touche hôte + F1 (ou autres touches de fonction) pour simuler Ctrl+Alt+F1 (ou d'autres touches de fonction, pour basculer entre les terminaux virtuels d'un invité Linux).  
* Pour d'autres combinaisons de touches telles que Alt-Tab (pour basculer entre des fenêtres ouvertes), VirtualBox vous permet de configurer si ces combinaisons concerneront l'hôte ou l'invité, si la machine virtuelle a le focus. C'est un paramètre global de toutes les machines virtuelles qui se trouve dans "Fichier" -> "Préférences" -> "Entrée" -> "Capture automatique du clavier".  

[Retour à la table des matières](#Table des matières)

# 1.8.4 Changer de média amovible<a id="mark1.8.4 "></a>

Pendant qu'une machine virtuelle fonctionne, vous pouvez changer de média amovible dans le menu "Périphériques" de la fenêtre de la VM. Vous pouvez y sélectionner en détail ce que VirtualBox présente à votre VM en tant que CD, DVD, ou disquette.  
Les paramètres sont les mêmes que ceux disponibles pour la VM dans la boîte de dialogue "Paramètres" de la fenêtre principale de VirtualBox, mais vu que la boîte de dialogue est désactivée quand la machine est dans l'état "en fonction" ou "sauvegardée", ce menu supplémentaire vous évite d'éteindre et de redémarrer la VM à chaque fois que vous voulez changer de média.  
Dès lors, dans le menu "Périphériques", VirtualBox vous permet d'attacher le lecteur hôte à l'invité ou de sélectionner une image de DVD ou de disquette en utilisant le gestionnaire d'images de disque, tout comme décrit au chapitre [1.11 Configuration d'une machine virtuelle.](#mark1.11)  

[Retour à la table des matières](#Table des matières)

# 1.8.5 Redimensionner la fenêtre de la machine<a id="mark1.8.5"></a>

Vous pouvez redimensionner la fenêtre de la machine virtuelle quand elle fonctionne. Dans un tel cas, une des choses suivantes arrivera :  

1. Si vous avez activé le "mode échelle", l'écran de la machine virtuelle sera adapté à la taille de la fenêtre. Ceci peut être utile si vous avez de nombreuses machines en fonction et si vous voulez les visualiser en fonction en arrière-plan. Sinon, il pourrait être utile d'agrandir la fenêtre si l'écran d'affichage de la fenêtre est très petit, par exemple car vous y exécutez un vieux système d'exploitation.  
Pour activer le mode échelle, appuyez sur touche hôte + C, ou sélectionnez "Mode échelle "du menu "Machine" dans la fenêtre de la VM. Pour désactiver le mode échelle, appuyez de nouveau sur la touche hôte + C.  
Les valeurs d'affichage de l'écran de l'invité sont préservées lorsque vous redimensionnez la fenêtre. Pour ignorer ces valeurs d'affichage, appuyez sur Majuscule pendant l'opération de redimensionnement.  
Merci de voir le chapitre [14 Limites connues](#mark14) pour des remarques supplémentaires.  
2. Si vous avez installé les Suppléments invité et s'ils supportent le redimensionnement automatique, les suppléments invité ajusteront automatiquement la résolution de l'écran du système d'exploitation invité. Par exemple, si vous exécutez un invité Windows 1rc une résolution de 1024x768 pixels et si vous élargissez la fenêtre de la VM de 100 pixels, les suppléments invité passeront la résolution de l'affichage de Windows en 1124x768.  
Merci de voir le chapitre [4 Les suppléments invité](#mark4) pour plus d'informations sur les suppléments invité.  
3. Sinon, si la fenêtre est plus haute que l'écran de la VM, l'écran sera centré. Si elle est plus petite, les barres de défilement seront ajoutées à la fenêtre de la machine.  

[Retour à la table des matières](#Table des matières)

# 1.8.6 Sauvegarder l'état de la machine<a id="mark1.8.6"></a>

Quand vous cliquez sur le bouton "Fermer" de la fenêtre de votre machine virtuelle (en haut à droite de la fenêtre, exactement comme vous fermeriez n'importe quelle fenêtre de votre système), VirtualBox vous demande si vous voulez "sauvegarder" ou "couper" la VM. (Vous pouvez appuyez sur la touche hôte et "Q" simultanément en guise de raccourci.)  

La différence entre ces trois options est cruciale. Elles signifient :  

* Sauvegarder l'état de la machine : Avec cette option, VirtualBox "gèle" la machine virtuelle en sauvegardant complètement son état sur votre disque local.  
Quand vous redémarrerez la VM plus tard, vous vous retrouverez avec la VM exactement là où vous l'avez interrompue. Tous vos programmes seront encore ouverts et votre ordinateur recommencera ses tâches. La sauvegarde de l'état d'une machine virtuelle revient, d'une certaine façon, à mettre en veille prolongée un ordinateur portable (par exemple en fermant l'écran).  
*  Envoyer le signal Éteindre. Ceci enverra un message d'extinction ACPI à la machine virtuelle, qui a le même effet que si vous aviez appuyé sur le bouton d'alimentation d'un ordinateur réel. Si la VM exécute un système d'exploitation moderne, cela devrait provoquer un vrai mécanisme d'extinction de la VM.  
* PCouper la machine : Avec cette option, VirtualBox arrête aussi l'exécution de la machine virtuelle, mais sans sauvegarder son état.  

### Avertissement: ###

Cela revient à débrancher le câble d'alimentation d'un vrai ordinateur sans l'éteindre correctement. Si vous redémarrez la machine après l'avoir coupée, votre système d'exploitation devra redémarrer complètement et il se peut qu'il fasse une vérification de ses disques systèmes (virtuels). Vous ne devriez donc pas le faire car cela peut conduire à une perte de données ou à un état incohérent du disque du système invité.  

Par exception, si votre machine virtuelle a des instantanés (voir le prochain chapitre), vous pouvez utiliser cette option pour restaurer l'instantané actuel de la machine virtuelle rapidement. Dans ce cas, couper la machine ne dégradera pas son état mais seules les modifications faites depuis que vous avez pris l'instantané seront perdues.  

Le bouton "Désactiver" de la fenêtre du gestionnaire de VirtualBox Manager désactive un état sauvegardé de la machine virtuelle. Cela a le même effet que de couper la machine, donc les mêmes avertissements s'appliquent.  

[Retour à la table des matières](#Table des matières)

# 1.9 Utiliser des groupes de VMs<a id="mark1.9"></a>

Les groupes de VMs permettent à l'utilisateur de créer des groupes ad hoc de VMs, et de gérer et d'effectuer des fonctions de façon collective ou individuelle sur ceux-ci. Il existe un certain nombre de fonctions liées aux groupes :

1. Créer un groupe en utilisant l'option de l'interface graphique 1) Remontez une VM au-dessus d'une autre VM.  
Créer un groupe en utilisant l'option 2) Sélectionnez plusieurs VMs et sélectionnez "Groupe" sur le menu issu du clic droit, comme suit :  
2. Option en ligne de commande 1) Créer un groupe et y affecter une VM :  
`VBoxManage modifyvm "Fred" --groups "/TestGroup"`  
Option en ligne de commande 2) Retirer une VM d'un groupe et effacer le groupe s'il est vide :  
`VBoxManage modifyvm "Fred" --groups ""`  
3. Plusieurs groupes par exemple :  
`VBoxManage modifyvm "Fred" --groups "/TestGroup,/TestGroup2"`  
4. Groupes nested hiérarchie de groupes comme :  
`VBoxManage modifyvm "Fred" --groups "/TestGroup/TestGroup2"`  
5. Résumé des commandes de groupes : Démarrer, mettre en pause, réinitialiser, fermer (sauvegarder l'état, envoyer un signal d'extinction, couper), désactiver l'état sauvegardé, afficher dans un système de fichiers, trier.  

[Retour à la table des matières](#Table des matières)

# 1.10 Instantanés<a id="mark1.10"></a>

Avec les instantanés, vous pouvez sauvegarder un état particulier d'une machine virtuelle pour une utilisation ultérieure. Plus tard, vous pourrez rétablir son état même si vous pouvez avoir beaucoup modifié la VM entre temps. Un instantané de la machine virtuelle est ainsi équivalent à passer une machine en état "sauvegardé", comme décrit ci-dessus, mais il peut y en avoir beaucoup, et ces états sauvegardés sont préservés.  
Vous pouvez voir les instantanés d'une machine virtuelle en sélectionnant d'abord une machine dans le gestionnaire VirtualBox, puis en cliquant sur le bouton "Instantanés" en haut à droite.  
Jusqu'à ce que vous preniez un instantané de la machine, la liste des instantanés restera vide sauf pour l'icône "état actuel" que représente le point "Maintenant" du temps de vie de la machine virtuelle.  

[Retour à la table des matières](#Table des matières)

# 1.10.1 Prendre, restaurer et effacer des instantanés<a id="mark1.10.1"></a>

Il existe trois opérations liées aux instantanés :  

1. Vous pouvez prendre un instantané. Ceci effectue une copie de l'état actuel de la machine, auquel vous pourrez revenir plus tard n'importe quand.
* Si votre VM est en fonction, sélectionnez "Prendre un instantané" dans le menu déroulant "Machine" de la fenêtre de la VM.  
* Si votre VM est dans l'état "sauvegardée" ou "coupée", (comme indiqué à côté de la VM dans la fenêtre principale de VirtualBox), cliquez sur l'onglet "Instantanés" en haut à droite de la fenêtre principale, puis soit sur la petite icône en appareil photo (pour "Prendre un instantané"), soit effectuez un clic droit sur l'icône "état actuel" dans la liste et sélectionnez "Prendre un instantané" dans le menu.
Dans tous les cas, une fenêtre apparaîtra et vous demandera un nom d'instantané. Ce nom a une finalité purement de référence pour vous aider à vous souvenir de l'état de l'instantané. Par exemple, un nom utile serait "Installation neuve à partir de rien, pas de suppléments invité", ou "Pack service à peine installé". Vous pouvez aussi ajouter un texte plus long dans le champ "Description" si vous le voulez.  
Votre nouvel instantané apparaîtra ensuite dans la liste des instantanés. Juste dessous de votre nouvel instantané, vous verrez une icône appelée "état actuel", signifiant que l'état actuel de votre VM est une variante basée sur l'instantané que vous avez pris précédemment. Si vous prenez plus tard un autre instantané, vous verrez qu'ils seront affichés en séquences et chaque instantané consécutif dérive d'un précédent :  
VirtualBox n'impose aucune limite quant au nombre d'instantanés que vous pouvez prendre. La seule limite pratique est l'espace disque sur votre hôte : chaque instantané stocke l'état de la machine virtuelle et occupe donc de l'espace disque (voir la prochaine section pour plus de détails sur ce qui est stocké exactement dans un instantané.)  
2. Vous pouvez restaurer un instantané en effectuant un clic droit sur un instantané que vous avez pris dans la liste des instantanés. Un restaurant un instantané, vous revenez en arrière (ou vous reculez) dans le temps : l'état actuel de la machine est perdu et la machine est restaurée dans l'état exact où elle était quand vous avez pris l'instantané.  
Note: La restauration d'un instantané concernera également les disques durs connectés à votre VM puisque l'état complet des disques durs virtuels sera rétabli. Ceci signifie aussi que tous les fichiers qui ont été créés depuis l'instantané et toutes les autres modifications de fichiers seront perdues. Afin d'empêcher une telle perte de données, tout en utilisant la fonctionnalité des instantanés, il est possible d'ajouter un deuxième disque dur en mode "write-through" en utilisant l'interface VBoxManage et de l'utiliser pour stocker vos données. Vu que les disques durs write-through ne sont pas inclus dans les instantanés, ils restent inchangés quand une machine est rétablie. Voir le chapitre [5.4 Modes spéciaux d'écriture d'images](#mark5.4) pour plus de détails.  
Pour éviter de perdre l'état actuel quand vous restaurez un instantané, vous pouvez créer un nouvel instantané avant la restauration.  
En restaurant un instantané précédent et en prenant plus d'instantanés à partir de là, il est même possible de créer une sorte de réalité alternative et de basculer entre les différents historiques de la machine virtuelle. Cela peut donner une arborescence complète d'instantanés de machine.
3. Vous pouvez aussi effacer un instantané, ce qui ne touchera pas l'état de la machine virtuelle mais seulement les fichiers du disque qu'utilisait VirtualBox pour stocker les données de l'instantané, libérant ainsi de l'espace disque. Pour effacer un instantané, effectuez un clic droit dessus dans l'arborescence des instantanés et sélectionnez "Effacer". À partir de VirtualBox 3.2, on peut même effacer des instantanés pendant qu'une machine fonctionne.  
Note: Si la prise et la restauration d'instantanés sont des opérations très rapides, l'effacement d'un instantané peut mettre temps considérable car de grandes quantité de données peuvent être copiées entre plusieurs fichiers images de disques. Il se peut que les fichiers de disque temporaires aient besoin de beaucoup de place pendant le déroulement de l'opération.  

Certaines situations ne peuvent pas être gérées pendant qu'une VM est en fonction et vous aurez un message circonstancié selon lequel vous devez effectuer cet effacement d'instantané quand la VM sera éteinte.  

[Retour à la table des matières](#Table des matières)

# 1.10.2 Contenu d'un instantané<a id="mark1.10.2"></a>

Voyez un instantané comme un marquage dans le temps que vous avez posé. De façon plus formelle, un instantané consiste en trois éléments :  

* Il contient une copie complète des paramètres de la VM y compris la configuration matérielle, afin que quand vous restaurerez un instantané, les paramètres de la VM soient également restaurés (par exemple, si vous avez modifié la configuration du disque dur ou les paramètres système de la VM, ce changement est annulé quand vous restaurez un instantané.)  
La terminologie et la fonctionnalité de restauration d'instantanés ont toutes deux changé avec VirtualBox 3.1. Avant cette version, il n'était possible que de revenir au tout dernier instantané pris – pas à ceux antérieurs, et l'opération s'appelait "Désactiver l'état actuel" et non "Restaurer le dernier instantané". La limite a été dépassée avec la version 3.1. Il est maintenant possible de restaurer n'importe quel instantané, revenir en arrière et reculer dans le temps.  
La copie de ces paramètres est stockée dans la configuration de la machine, fichier texte XML, occupant ainsi très peu de place.  
* L'état complet de tous les disques virtuels attachés à la machine est préservé. Le retour en arrière sur un instantané signifie que toutes les modifications faites sur les disques de la machine – fichier par fichier, bit par bit – seront toutes annulées. Les fichiers créés entre-temps disparaîtront, les fichiers effacés seront restaurés, les modifications de fichiers seront inversées.  
(À proprement parler, ceci n'est vrai que pour les disques durs virtuels en mode "normal". Comme indiqué ci-dessus, vous pouvez configurer des disques pour se comporter autrement avec les instantanés (voir chapitre [5.4 Modes spéciaux d'écriture d'images.](#mark5.4) De manière encore plus précise et juste techniquement, ce n'est pas le disque dur virtuel lui-même qui est restauré quand on restaure un instantané. En fait, quand on prend un instantané, VirtualBox crée des images de différenciation contenant seulement les modifications depuis que l'instantané a été pris, puis le instantané est restauré, VirtualBox applique cette image de différenciation, revenant ainsi en arrière vers l'état précédent.  
Ceci est non seulement plus rapide, mais cela utilise moins d'espace disque. Pour les détails, qui peuvent être complexes, merci de voir le chapitre [5.5 Images de différenciation.)](#mark5.5)  
La création d'une telle image de différenciation n'occupe pas beaucoup de place dès le départ sur le disque hôte, puisque l'image de différenciation sera vide au départ (et grandira plus tard de façon dynamique à chaque opération d'écriture sur le disque). Par contre, plus vous utiliserez la machine après avoir créé l'instantané, plus l'image de différenciation grossira.  
* Enfin, si vous avez pris un instantané pendant que la machine était en fonction, l'état de la mémoire de la machine est également sauvegardé dans l'instantané (tout comme la mémoire peut être sauvegardée quand vous fermez la fenêtre de la VM). Quand vous restaurez un tel instantané, l'exécution recommence exactement là où elle en était quand vous avez pris l'instantané.  
Le fichier de l'état de la mémoire peut être aussi gros que la taille de la mémoire de la machine virtuelle et il occupera donc lui aussi beaucoup de place sur le disque.  

[Retour à la table des matières](#Table des matières)

# 1.11 Configuration d'une machine virtuelle<a id="mark1.11"></a>

Quand vous sélectionnez une machine virtuelle dans la liste dans la fenêtre du gestionnaire, vous verrez à droite un résumé des paramètres de cette machine.  
Un clic sur le bouton "Paramètres" dans la barre d'outils en haut ouvre une fenêtre détaillée où vous pouvez configurer de nombreuses propriétés de la VM sélectionnée. Mais attention, bien qu'il soit possible de modifier tous les paramètres de la VM après avoir installé un système d'exploitation invité, certaines modifications pourraient empêcher un système d'exploitation invité de fonctionner correctement après l'installation.  

Note: Le bouton "Paramètres" est désactivé par défaut quand une VM est soit dans l'état "en fonction", soit "sauvegardée". Ceci simplement car la boîte de dialogue des paramètres vous permet de modifier des caractéristiques fondamentales de l'ordinateur virtuel créé pour votre système d'exploitation invité, et ce système d'exploitation peut ne pas bien supporter cela quand, par exemple, la moitié de sa mémoire lui est coupée sous les pieds. Il s'en suit que si le bouton "Paramètres" est désactivé, éteignez d'abord la VM actuelle.  

VirtualBox offre pléthore de paramètres qu'on peut changer pour une machine virtuelle. Tous les paramètres modifiables dans la fenêtre "Paramètres" sont décrits en détails au chapitre [3 Configurer des machines virtuelles.](#mark3) Encore plus de paramètres sont disponibles avec l'interface en ligne de commande de VirtualBox ; voir chapitre [8 VBoxManage.](#mark8)  

[Retour à la table des matières](#Table des matières)

# 1.12 Supprimer des machines virtuelles<a id="mark1.12"></a>

Pour supprimer une machine virtuelle dont vous n'avez plus besoin, effectuez un clic droit sur la liste de VMs du gestionnaire et sélectionnez "Supprimer" dans le menu contextuel qui apparaît.  
Une fenêtre de confirmation apparaîtra, vous permettant de sélectionner s'il faut supprimer la machine seulement de la liste des machines ou également les fichiers associés.  
L'élément "Supprimer" est désactivé quand une machine est en fonction.  

[Retour à la table des matières](#Table des matières)

# 1.13 Cloner des machines virtuels<a id="mark1.13"></a>

Pour expérimenter une configuration de VM, tester différents niveaux d'OS invité ou sauvegarder une VM, VirtualBox peut créer une copie complète ou liée d'une VM existante.   
Un assistant vous guidera dans le processus de clonage :  

On peut appeler cet assistant à partir du menu contextuel de la liste des VMs du gestionnaire (en sélectionnant "Cloner") ou de la vue "Dépôts" de la VM sélectionnée. Choisissez d'abord un nouveau nom pour le clone. Quand vous sélectionnez Réinitialiser l'adresse MAC de toutes les cartes réseaux, toutes les cartes réseaux se voient affecter une nouvelle adresse MAC. Ceci est utile quand la VM source et celle clonée doivent fonctionner sur le même réseau. Si vous ne changez rien, toutes les cartes réseaux auront la même adresse MAC que celle de la VM source. Selon comment vous appelez l'assistant, vous avez différents choix pour l'opération de clonage. Vous devez d'abord décider si le clone devrait être lié à la VM source ou être totalement indépendant :  

* Clone complet : Dans ce mode, toutes les images de disques dépendantes sont copiées dans le nouveau dossier de la VM. Le clone peut fonctionner complètement sans la VM d'origine.  
Le support du clonage a été introduit avec VirtualBox 4.1.  
* Clone lié : Dans ce mode, de nouvelles images de différenciation du disque sont créées là où les images de disque parents se trouvent à l'origine. Si vous avez sélectionné l'état actuel de la VM source comme point de clonage, un nouvel instantané sera créé implicitement.  
Après avoir sélectionné le mode de clonage, vous devez décider ce que vous voulez exactement cloner. Vous pouvez toujours créer un clone de l'état actuel seulement, ou de tout. Quand vous sélectionnez tout, l'état actuel et, également, tous les instantanés seront clonés. Si vous partez d'un instantané ayant des fils en plus, vous pouvez également cloner l'état actuel et tous ses fils.  
Ceci crée un clone à partir de cet instantané et inclut tous les instantanés fils.  
La durée de l'opération de clonage dépend de la taille et du nombre d'images de disques attachées. Garder aussi en tête que tout instantané a des images de différenciation de disques rattachées, qu'il faut aussi cloner.  
L'icône "Cloner" est désactivée quand une machine est en fonction.  
Pour savoir comment cloner une VM en ligne de commande, merci de voir le chapitre [8.9 VBoxManage clonevm.](#mark8.9)  

[Retour à la table des matières](#Table des matières)

# 1.14 Importer et exporter des machines virtuelles<a id="mark1.14"></a>

VirtualBox peut importer et exporter des machines virtuelles au format du standard industriel Open Virtualization Format (OVF).  
OVF est un standard de plateforme croisée supporté par de nombreux produits de virtualisation, permettant de créer des machines virtuelles prêtes à l'emploi importables ensuite dans un virtualiseur tel que VirtualBox. VirtualBox facilite l'exportation et l'importation d'OVF, en y donnant un accès et un support depuis la fenêtre du gestionnaire et son interface en ligne de commande. Cela permet d'empaqueter ce qu'on appelle des applicatifs virtuels : des images de disque et des paramètres de configuration qu'on peut distribuer facilement. De cette façon, chacun peut donner des logiciels dans un paquet prêt à utiliser complet (incluant système d'exploitation et applications) qui n'a pas besoin de configuration ou d'installation autre que l'importation dans VirtualBox.  

Note: Le standard OVF est complexe et son support dans VirtualBox est un processus évolutif. En particulier, nous ne garantissons pas que VirtualBox supporte tous les applicatifs créés par d'autres logiciels de virtualisation. Pour une liste des limites connues, merci de voir le chapitre [14 Limites connues.](#mark14)  

Les applicatifs au format OVF peut apparaître sous deux variantes :  

1. Ils peuvent être fournis en plusieurs fichiers, comme une ou plusieurs images de disque, en général au format universel VMDK (voir chapitre [5.2 Fichiers images de disque (VDI VMDK, VHD, HDD)](#mark5.2) et un fichier de description en texte, au format XML avec une extension .ovf. Ces fichiers doivent résider dans le même répertoire pour que VirtualBox puisse les importer.  
2. Sinon, les fichiers ci-dessus peuvent être empaquetés dans un seul fichier archive, ayant en général une extension .ova. (De tels fichiers archives utilisent une variante du format d'archivage TAR et peuvent donc être déballés hors de VirtualBox avec n'importe quel outil capable de déballer des fichiers TAR standards.)  

Le support d'OVF a été introduit à l'origine avec VirtualBox 2.2 et a connu des améliorations essentielles au fur et à mesure des versions consécutives.  
À partir de la version 4.0, VirtualBox crée des associations de types de fichiers pour des fichiers OVF et OVA sur votre système d'exploitation hôte.  

Pour importer un applicatif dans l'un des formats ci-dessus, cliquez simplement deux fois sur le fichier OVF/OVA. Sinon, sélectionnez "Fichier" -> "Importer un applicatif" à partir de la fenêtre du gestionnaire. Dans la boîte de dialogue de fichier qui apparaît, allez sur le fichier ayant soit l'extension .ovf, soit .ova.  
Si VirtualBox peut gérer le fichier, une boîte de dialogue ressemblant à celle suivante apparaîtra :  

Elle présente les machines virtuelles décrites dans le fichier OVF et elle vous permet de modifier les paramètres de la machine virtuelle en cliquant deux fois sur les éléments de description.  
Une fois que vous avez cliqué sur "Importer", VirtualBox copiera les images de disque et créera les machines virtuelles locales ayant les paramètres décrits dans la boîte de dialogue. Elles apparaîtront alors dans la liste de machines virtuelles du gestionnaire.  
Remarquez que vu que les images de disque sont souvent grosses, et que les images VMDK fournis avec les applicatifs virtuels sont en général incluses dans un format compressé spécial inadapté à l'usage direct par les machines virtuelles, il faudra d'abord déballer les images et les copier, ce qui peut prendre quelques minutes.  
Pour savoir comment importer une image en ligne de commande, merci de voir le chapitre [8.10 VBoxManage import.](#mark8.10)  
Inversement, pour exporter des machines virtuelles déjà présentes dans VirtualBox, sélectionnez "Fichier" -> "Exporter un applicatif". Une boîte de dialogue apparaîtra vous permettant de mettre plusieurs machines virtuelles dans un applicatif OVF. Puis, sélectionnez la destination où stocker les fichiers cibles, le processus de conversion commence. Cela peut mettre encore du temps.  
Pour savoir comment exporter une image en ligne de commande, merci de voir le chapitre [8.11 VBoxManage export.](#mark8.11)  

Note: OVF ne peut pas décrire d'instantanés pris pour une machine virtuelle. Il s'ensuit que lorsque vous exportez une machine virtuelle avec des instantanés, seul l'état actuel de la machine sera exporté et les images de disque de l'export seront dans l'éta "applati", identique à l'état actuel de la machine virtuelle.  

[Retour à la table des matières](#Table des matières)

# 1.15 Paramètres globaux<a id="mark1.15"></a>

Vous pouvez atteindre la boîte de dialogue des paramètres globaux par le menu Fichier, en sélectionnant l'élément Préférences... Elle offre une sélection de paramètres qui s'appliquent à toutes les machines virtuelles de l'utilisateur actuel ou, s'il y a des Extensions, à tout le système :  

1. Général: Permet à l'utilisateur de spécifier le dossier/répertoire par défaut des fichiers de la VM et la bibliothèque d'Authentification à RDP.  
2. Entrée: Permet à l'utilisateur de spécifier la touche Hôte. Elle indique la touche qui active si le curseur est sur le focus de la VM ou dans les fenêtres du système d'exploitation hôte (voir chapitre [1.8.2 Capturer et rendre le clavier et la souris)](#mark1.8.2) et qu'on utilise aussi pour activer certaines actions sur la VM (voir chapitre [1.8.3 Taper des caractères spéciaux)](#mark1.8.3)  
3. Mises à jour: Permet à l'utilisateur de spécifier divers paramètres des mises à jour automatiques.  
4. Langue: Permet à l'utilisateur de spécifier la langue de l'interface graphique.  
5. Affichage: Permet à l'utilisateur de préciser la résolution de l'écran, sa hauteur et sa largeur.  
6. Réseau: Permet à l'utilisateur de configurer les détails des réseaux Host Only.  
7. Extensions: Permet à l'utilisateur de lister et de gérer les paquets d'extension installés.  
8. Proxy: Permet à l'utilisateur de configurer un serveur proxy HTTP.  

[Retour à la table des matières](#Table des matières)

# 1.16 Interfaces alternatives<a id="mark1.16"></a>

Comme indiqué brièvement au chapitre [1.3 Aperçu des fonctionnalités](#mark1.3) VirtualBox possède un concept interne très flexible qui permet d'utiliser plusieurs interfaces pour contrôler les mêmes machines virtuelles. Pour illustrer, vous pouvez par exemple démarrer une machine virtuelle avec la fenêtre du gestionnaire de VirtualBox puis l'arrêter en ligne de commande.  
Avec le support de bureau distant (RDP) de VirtualBox, vous pouvez même lancer des machines virtuelles à distance sur un serveur sans écran et rediriger la sortie graphique sur le réseau.  
En détails, le paquet standard de VirtualBox inclut les interfaces suivantes :  

1. VirtualBox est le gestionnaire VirtualBox. Cette interface graphique utilise l'environnement Qt ; la plupart de ce guide de l'utilisateur est consacré à sa description. S'il est le plus facile à utiliser, certaines fonctionnalités plus avancées de VirtualBox n'y figurent pas pour garder sa simplicité.  
2. VBoxManage est notre interface en ligne de commande pour avoir un contrôle automatisé et très détaillé de tous les aspects de VirtualBox. Il est décrit au chapitre [8 VBoxManage.](#mark8)  
3. VBoxSDL est une interface graphique alternative simple, possédant des fonctionnalités volontairement limitées, conçu pour n'afficher que des machines virtuelles contrôlées en détail avec VBoxManage. C'est intéressant pour des environnements professionnels où l'affichage de tous les gadgets les boutons de l'interface graphique complète n'est pas faisable. VBoxSDL est décrit au chapitre [9.1 VBoxSDL,](#mark9.1) l'afficheur simplifié de VM.  
4. Enfin, VBoxHeadless est encore une autre interface qui produit une sortie invisible sur l'hôte, mais qui agit exactement comme un serveur RDP si l'extension de bureau à distance de VirtualBox (VRDE) est installée. Contrairement aux autres interfaces graphiques, l'interface sans affichage n'a pas besoin de support graphique. Cela sert, par exemple, si vous voulez héberger vos machines virtuelles sur un serveur Linux sans affichage et sans système X Window installé. Pour les détails, voir le chapitre [7.1.2 VBoxHeadless,](#mark7.1.2) le serveur de bureau distant.  

Si les interfaces ci-dessus ne satisfont pas encore vos besoins particuliers, il est possible de créer d'autres interfaces avec le moteur de virtualisation complexe au cœur de VirtualBox, car le cœur de VirtualBox présente ouvertement toutes ses fonctionnalités dans une API propre ; merci de vous reporter au chapitre [11 Interfaces de programmation de VirtualBox.](#mark11)  

[Retour à la table des matières](#Table des matières)

# 2 Détails sur l'installation<a id="mark2"></a>

Comme l'installation de VirtualBox varie selon votre système d'exploitation hôte, nous fournissons des instructions d'installation dans quatre chapitres distincts, respectivement pour Windows, Mac OS X, Linux et Solaris.

[Retour à la table des matières](#Table des matières)

# 2.1 Installation sur des hôtes Windows<a id="mark2.1"></a>

# 2.1.1 Prérequis<a id="mark2.1.1"></a>

Pour les différentes versions de Windows que nous supportons en tant que systèmes d'exploitation hôtes, merci de vous reporter au chapitre [1.4 Systèmes d'exploitation hôtes supportés.](#mark1.4)  
En outre, l'installeur Windows 1.1 ou supérieur doit être présent sur votre système. Cela devrait être le cas si vous avez installé les mises à jour récentes de Windows.  

[Retour à la table des matières](#Table des matières)

# 2.1.2 Effectuer l'installation sous Windows<a id="mark2.1.2"></a>

L'installation de VirtualBox peut se lancer:  

* soit en cliquant deux fois sur son fichier exécutable (contenant les architectures 32 et 64 bits)
* soit en entrant:
`VirtualBox.exe -extract`  
sur la ligne de commande. Cela va extraire les deux installeurs dans un répertoire temporaire où vous trouverez ensuite les fichiers .MSI habituels. Puis vous pouvez faire un 
`msiexec /i VirtualBox-<version>-MultiArch_<x86|amd64>.msi`  
pour lancer l'installation.  

Dans tous les cas, ceci affichera la boîte de dialogue de bienvenue dans l'installation et vous permet de choisir où installer VirtualBox et les composants à installer. Outre l' application VirtualBox, les composants suivants sont disponibles :  

Support USB: Ce paquet contient des pilotes spéciaux pour votre hôte Windows dont a besoin VirtualBox pour supporter pleinement les périphériques USB dans vos machines virtuelles.  
Réseau: Ce paquet contient les pilotes réseaux supplémentaires pour votre hôte Windows, dont a besoin VirtualBox pour supporter le réseau bridgç (pour que les cartes réseaux de votre VM soient accessibles depuis d'autres machines de votre réseau physique).  
Support Python: Ce paquet contient le support de scriptage Python pour l'API de VirtualBox (voir chapitre [11 Interfaces de programmation de VirtualBox).](#mark11) Pour qu'ils fonctionnent, une installation de Python sur Windows opérationnelle est requise sur le système.  

Voir, par exemple, <http://www.python.org/download/windows/>  

Selon votre configuration de Windows, il se peut que vous voyez des avertissements de "pilotes non signés" ou équivalent. Merci de sélectionner "Continuer" sur ces avertissements, sans quoi VirtualBox pourrait ne pas fonctionner correctement après l'installation.  
L'installeur va créer un groupe "VirtualBox" dans le menu "Démarrer" de Windows qui vous permet de lancer l'application et d'accéder à sa documentation.  
Avec des paramètres standards, VirtualBox sera installé pour tous les utilisateurs du système local. Si ce n'est pas ce que vous voulez, vous devez appeler l'installeur en l'extrayant d'abord via:  
`VirtualBox.exe -extract`  
puis en faisant comme suit :  
`VirtualBox.exe -msiparams ALLUSERS=2`  
ou:  
`msiexec /i VirtualBox-<version>-MultiArch_<x86|amd64>.msi ALLUSERS=2`  
sur les fichiers .MSI extraits. Ceci n'installera VirtualBox que pour l'utilisateur actuel.  
Si vous ne voulez pas installer toutes les fonctionnalités de VirtualBox, vous pouvez régler le paramètre ADDLOCAL en option pour nommer explicitement les fonctionnalités à installer. Les fonctionnalités suivantes sont disponibles :  

VBoxApplication Binaires principaux de VirtualBox.  

Note: Il ne faut pas que cette fonctionnalité soit absente car elle contient l'ensemble de fichiers minimum pour que l'installation de VirtualBox fonctionne.  

VBoxUSB Support USB.
VBoxNetwork Tout le support réseau ; y compris les fonctionnalités VBoxNetworkFlt et VBoxNetworkAdp (voir ci-dessous).  
VBoxNetworkFlt Support du réseau bridgé.  
VBoxNetworkAdp Support du réseau Host-only.  
VBoxPython Support Python.  

Par exemple, pour n'installer que le support USB avec les binaires principaux, faites un :  
`VirtualBox.exe -msiparams ADDLOCAL=VBoxApplication,VBoxUSB`  
ou un:  
`msiexec /i VirtualBox-<version>-MultiArch_<x86|amd64>.msi ADDLOCAL=VBoxApplication,VBoxUSB`  

[Retour à la table des matières](#Table des matières)

# 2.1.3 Désinstallation sous Windows<a id="mark2.1.3"></a>

Comme VirtualBox utilise l'installeur standard de Microsoft Windows, vous pouvez désinstaller VirtualBox en sécurité n'importe quand en choisissant l'entrée du programme dans le menu "Ajouter/supprimer des programmes" du panneau de configuration de Windows.  

[Retour à la table des matières](#Table des matières)

# 2.1.4 Installation sans efforts sous Windows<a id="mark2.1.4"></a>

Vous pouvez effectuer des installations sans efforts en utilisant le support MSI standard.  

[Retour à la table des matières](#Table des matières)

# 2.2 Installation sur des hôtes Mac OS X<a id="mark2.2"></a>

# 2.2.1 Effectuer l'installation sous Mac OS X<a id="mark2.2.1"></a>

Pour les hôtes Mac OS X, VirtualBox est dans un fichier image de disque (dmg). Effectuez les étapes suivantes :  

1. Cliquez deux fois sur ce fichier pour monter son contenu.
2. Une fenêtre s'ouvrira, vous disant de cliquer deux fois sur le fichier de l'installeur VirtualBox.mpkg affiché dans cette fenêtre.  
3. Ceci démarrera l'installeur, qui vous permettra de sélectionner où installer VirtualBox.  

Après l'installation, vous pouvez voir une icône VirtualBox dans le dossier "Applications" du Finder.

[Retour à la table des matières](#Table des matières)

# 2.2.2 Désinstallation sous Mac OS X<a id="mark2.2.2"></a>

Pour désinstaller VirtualBox, réouvrez le fichier image de disque (dmg) et cliquez deux fois sur l'icône Désinstaller dedans.  

[Retour à la table des matières](#Table des matières)

# 2.2.3 Installation sans efforts sous Mac OS X<a id="mark2.2.3"></a>

Pour effectuer une installation non interactive de VirtualBox, vous pouvez la version en ligne de commande de l'installeur.  
Montez le fichier image du disque (dmg" comme décrit dans l'installation normale. Ouvrez ensuite une session de terminal et exécutez :  
`sudo installer -pkg /Volumes/VirtualBox/VirtualBox.mpkg \`  
`-target /Volumes/Macintosh\ HD`  

[Retour à la table des matières](#Table des matières)

# 2.3 Installation sur des hôtes Linux<a id="mark2.3"></a>

# 2.3.1 Prérequis<a id="mark2.3.1"></a>

Pour les diverses versions de Linux que nous supportons comme systèmes d'exploitation hôtes, merci de vous reporter au chapitre [1.4 Systèmes d'exploitation hôtes supportés.](#mark1.4)  
Vous devrez installer les paquets suivants sur votre système Linux avant de commencer l'installation (certains systèmes feront cela pour vous automatiquement quand vous installerez VirtualBox) :  

* Qt 4.6.2 ou supérieur ;  
* SDL 1.2.7 ou supérieur (cette bibliothèque graphique s'appelle en général libsdl ou équivalent).  

Note: Pour être précis, ces paquets ne sont requis que si voulez lancer les interfaces graphiques de VirtualBox. En particulier, VirtualBox, le gestionnaire graphique de VirtualBox, a besoin de Qt et de SDL ; VBoxSDL, notre interface graphique simplifiée, exige seulement SDL. Inversement, si vous ne voulez que VBoxHeadless, ni Qt ni SDL ne sont requis.  

[Retour à la table des matières](#Table des matières)

# 2.3.2 Le module noyau de VirtualBox<a id="mark2.3.2"></a>

VirtualBox utilise un module spécial du noyau appelé vboxdrv pour effectuer des affectations de mémoire physique et contrôler le processeur pour exécuter les systèmes invités. Sans ce module du noyau, vous pouvez utiliser le gestionnaire de VirtualBox pour configurer des machines virtuelles mais elles ne démarreront pas. En outre, existe des modules noyau vboxnetflt et vboxnetadp requis pour les fonctionnalités réseau plus avancées de VirtualBox.  
Le module noyau de VirtualBox est automatiquement installé sur votre système quand vous installez VirtualBox. Pour le maintenir avec les futures mises à jour du noyau, pour les distributions Linux qui le permettent – la plupart de celles actuelles – nous recommandons d'installer Dynamic Kernel Module Support (DKMS) 2. Cet environnement vous aide à construire et à mettre à jour les modules du noyau.  
Si DKMS n'est pas déjà installé, exécutez une des procédures suivantes :  
* Sur un système Ubuntu :  
`sudo apt-get install dkms`  
* Sur un système Fedora :  
`yum install dkms`  
* Sur un système Mandriva ou Mageia :  
`urpmi dkms`  

Si DKMS est disponible et installé, le module du noyau VirtualBox devrait toujours fonctionner automatiquement et il sera automatiquement reconstruit si vous mettez à jour le noyau de votre hôte.  
Sinon, il n'y a que deux situations où vous devrez vous préoccuper du module noyau :  

1. L'installation échoue dès le départ. Cela signifie probablement que votre système Linux n'est pas prêt à construire des modules noyau externes.  
La plupart des distributions Linux peuvent être paramétrées simplement en installant les bons paquets - en principe il s'agit du compilateur GNU (GCC), GNU Make (make) et des paquets contenant les fichiers d'en-tête de votre noyau - et en s'assurant que toutes les mises à jour du système sont installées et que le système exécute le noyau le plus récent proposé par la distribution. Les numéros de version des paquets des fichiers d'en-tête doivent être les mêmes que celui du noyau que vous utilisez.  
* Avec les versions Debian et Ubuntu, vous devez installer la bonne version de linux-headers et s'il existe, le paquet linux-kbuild. Les versions actuelles d'Ubuntu devraient avoir installé les bons paquets par défaut.  
* Dans les versions de Debian et d'Ubuntu encore plus anciennes, vous devez installer la bonne version du paquet kernel-headers.  
* Sur les systèmes Fedora et Redhat, le paquet est kernel-devel.  
* Sur SUSE et openSUSE Linux, vous devez installer les bonnes versions des paquets kernel-source et kernel-syms.  
* Si vous avez construit votre propre noyau, vous devrez vous assurer d'avoir installé toutes les en-têtes requises et d'autres fichiers au bon endroit pour construire les modules externes. Les détails sur la manière de faire cela dépendent de la façon dont vous avez construit votre noyau et si vous n'êtes pas sûr, vous devriez consulter la documentation que vous avez suivie pour construire.
2. Le noyau de votre hôte Linux a été mis à jour et DKMS n'est pas installé. Dans ce cas, le module du noyau devra être réinstallé en exécutant (en tant qu'administrateur) :  
`/etc/init.d/vboxdrv setup`  

Voir <http://en.wikipedia.org/wiki/Dynamic_Kernel_Module_Support> pour une introduction.  

[Retour à la table des matières](#Table des matières)

# 2.3.3 Effectuer l'installation sous Linux<a id="mark2.3.3"></a>

VirtualBox est disponible de base dans un certain nombre de formats de paquet pour diverses distributions Linux classiques (voir chapitre [1.4 Systèmes d'exploitation hôtes supportés](#mark1.4) pour les détails). En outre, un installeur générique alternatif (.run) devrait fonctionner sur la plupart des distributions Linux.  

[Retour à la table des matières](#Table des matières)

# 2.3.3.1 Installer VirtualBox à partir d'un paquet Debian/Ubuntu<a id="mark2.3.3.1"></a>

Tout d'abord, téléchargez le paquet adapté à votre distribution. Les exemples suivants supposent que vous installez sur un système Ubuntu Raring 32 bits. Utilisez dpkg pour installer le paquet Debian :  
`sudo dpkg -i VirtualBox-3.2_4.3.13_Ubuntu_raring_i386.deb`  
On vous demandera d'accepter la licence d'utilisation Personelle et d'évaluation de VirtualBox.  
Sauf si vous répondez "oui" l'installation sera annulée.  
L'installeur cherchera aussi un module noyau VirtualBox adapté à votre noyau. Le paquet comprend des modules précompilés pour la plupart des configurations de noyau classiques. Si aucun module noyau adapté n'est trouvé, le script d'installation essaie de construire un module lui-même. Si le processus de construction ne réussit pas, on vous affichera un avertissement et le paquet ne sera pas configuré. Merci de jeter un œil sur `/var/log/vbox-install.log` pour voir pourquoi la compilation a échoué. Il se peut que vous deviez installer les en-têtes de Linux appropriées (voir chapitre [2.3.2 Le module noyau de VirtualBox).](#mark2.3.2) Après avoir corrigé les problèmes, faites:  
`sudo /etc/init.d/vboxdrv setup`  
Ceci démarrera un nouvel essai de construction du module.  
Si un module de noyau convenable a été trouvé dans le paque, ou si le module a été construit avec succès, le script d'installation essaiera de charger ce module. Si ceci échoue, merci de voir le chapitre [12.7.1 Le module du noyau Linux refuse de se charger](#mark12.7.1) pour plus d'informations.  
Une fois que VirtualBox s'est installé et configuré avec succès, vous pouvez le démarrer en sélectionnant "VirtualBox" dans votre menu démarrer ou en ligne de commande (voir chapitre [2.3.5 Démarrer VirtualBox sur Linux).](#mark2.3.5)  

[Retour à la table des matières](#Table des matières)

# 2.3.3.2 Utiliser l'installeur alternatif (VirtualBox.run)<a id="mark2.3.3.2"></a>

L'installeur alternatif effectue les étapes suivantes :

* Il déballe les fichiers de l'application dans le répertoire cible,   
`/opt/VirtualBox/`  
qu'on ne peut pas modifier.  
* Il construit les modules noyau de VirtualBox (vboxdrv, vboxnetflt et vboxnetadp) et il les installe.  
* Il crée `/etc/init.d/vboxdrv`, un script d'installation pour démarrer le module noyau de VirtualBox.  
* Il crée un nouveau groupe système appelé vboxusers.  
* Il crée des liens symboliques /usr/bin vers un script shell (/opt/VirtualBox/VBox) qui fait des vérifications de propreté et qui répartit les exécutables finaux, VirtualBox, VBoxSDL, VBoxVRDP, VBoxHeadless et VBoxManage  
* Il crée `/etc/udev/rules.d/60-vboxdrv.rules`, un fichier de description pour udev, s'il est présent, pour rendre les périphériques USB accessibles par tous les utilisateurs du groupe vboxusers.  
* Il écrit le répertoire d'installation `/etc/vbox/vbox.cfg`.  
L'installeur doit être exécuté en tant qu'administrateur, soit avec install soit avec uninstall, en premier paramètre.  
`sudo ./VirtualBox.run install`  
Ou si vous n'avez pas de commande "sudo" disponible, lancez ceci plutôt en tant qu'administrateur :  
`./VirtualBox.run install`  
Après cela, vous devez mettre tous les utilisateurs qui devraient pouvoir accéder à des périphériques USB depuis des invités VirtualBox dans le groupe vboxusers, soit via les outils de gestion graphiques, soit en lançant la commande suivante en tant qu'administrateur :  
`sudo usermod -a -G vboxusers username`  
Note: La commande usermod de certaines distributions Linux anciennes ne supportepas l'option -a (qui ajoute l'utilisateur au groupe donné sans le rendre membre d'autres groupes). Dans ce cas, cherchez les membres actuels du groupe avec la command groups et ajoutez tous ces groupes dans une liste séparée par des virgules à la ligne de commande dans l'option -G, comme ceci:  
`usermod -G group1,group2,vboxusers`  
`username`.

[Retour à la table des matières](#Table des matières)

# 2.3.3.3 Effectuer une installation manuelle<a id="mark2.3.3.3"></a>

Si, pour une raison quelconque, vous ne pouvez pas utiliser l'installeur en script shell décrit précédemment, vous pouvez aussi effectuer une installation manuelle. Appelez l'installeur comme ceci :  
`./VirtualBox.run --keep --noexec`  
Ceci déballera tous les fichiers nécessaires à l'installation dans le répertoire install sous le répertoire actuel. Les fichiers de l'application VirtualBox sont contenus dans VirtualBox.tar.bz2 que vous pouvez déballer dans n'importe quel répertoire de votre système. Par exemple :  
`sudo mkdir /opt/VirtualBox`  
`sudo tar jxf ./install/VirtualBox.tar.bz2 -C /opt/VirtualBox`  
ou en tant qu'administrateur :  
`mkdir /opt/VirtualBox`  
`tar jxf ./install/VirtualBox.tar.bz2 -C /opt/VirtualBox`  
Les sources du module noyau de VirtualBox sont fournies dans le répertoire src. Pour construire le module, allez dans le répertoire et lancez   
`make`  
Si tout se construit correctement, lancez la commande suivante pour installer le module dans le bon répertoire de modules :  
`sudo make install`  
Si vous m'avez pas sudo, passez en compte administrateur et lancez  
`make install`  
Le module de noyau VirtualBox a besoin d'un nœud de périphérique pour fonctionner. La commande make ci-dessus vous dira comment créer le nœud de périphérique selon votre système Linux. La procédure est légèrement différente pour une installation Linux classique avec le répertoire /dev, un système avec devfs, maintenant obsolète, et un système Linux moderne avec udev.  
Sur certaines distributions Linux, vous pourriez rencontrer des difficultés pour construire le module. Vous devrez analyser les messages d'erreur du système de construction pour trouver la cause des problèmes. En général, assurez-vous que les sources du noyau Linux actuel sont utilisées pour le processus de construction.  
Remarquez que le nœud de périphérique /dev/vboxdrv du module noyau doit appartenir à root:root et n'être autorisé en lecture/écriture que pour l'utilisateur.  
Ensuite, vous devrez installer le script d'initialisation du système pour le module du noyau :  
`cp /opt/VirtualBox/vboxdrv.sh /etc/init.d/vboxdrv`  
(en supposant que vous avez installé VirtualBox dans le répertoire /opt/VirtualBox) et activé le script d'initialisation en utilisant la méthode adaptée à votre distribution. Vous devriez créer un fichier de configuration pour VirtualBox :  
`mkdir /etc/vbox`  
`echo INSTALL_DIR=/opt/VirtualBox > /etc/vbox/vbox.cfg`  
et, par commodité, créer les liens symboliques suivants :  
`ln -sf /opt/VirtualBox/VBox.sh /usr/bin/VirtualBox`  
`ln -sf /opt/VirtualBox/VBox.sh /usr/bin/VBoxManage`  
`ln -sf /opt/VirtualBox/VBox.sh /usr/bin/VBoxHeadless`  
`ln -sf /opt/VirtualBox/VBox.sh /usr/bin/VBoxSDL`  

[Retour à la table des matières](#Table des matières)

# 2.3.3.3.0 Désinstallation sous Linux<a id="mark2.3.3.3.0"></a>

# 2.3.3.4 Mettre à jour et désinstaller VirtualBox<a id="mark2.3.3.4"></a>

Avant de mettre à jour ou de désinstaller VirtualBox, vous devez fermer toutes les machines virtuelles actuellement en fonction et quitter les applications VirtualBox ou VBoxSVC. Pour mettre à jour VirtualBox, lancez simplement l'installeur de la version à jour. Pour désinstaller VirtualBox, appelez l'installeur comme ceci :
`sudo ./VirtualBox.run uninstall`  
ou, en tant qu'administrateur  
`./VirtualBox.run uninstall`  

À partir de la version 2.2.2, vous pouvez désinstaller le paquet .run en appelant  
`/opt/VirtualBox/uninstall.sh`  

Pour désinstaller VirtualBox à la main, inversez simplement les étapes de l'installation manuelle.  

[Retour à la table des matières](#Table des matières)

# 2.3.3.5 Installation automatique des paquets Debian<a id="mark2.3.3.5"></a>

Les paquets Debian solliciteront une intervention de l'utilisateur lors de la première installation.  
On utilise le système debconf pour effectuer cette tâche. Pour empêcher toute intervention de l'utilisateur pendant l'installation, vous pouvez définir des valeurs par défaut. Un fichier vboxconf peut contenir les paramètres de debconf suivants:  
`virtualbox virtualbox/module-compilation-allowed boolean true`  
`virtualbox virtualbox/delete-old-modules boolean true`  

La première ligne permet la compilation du module noyau vboxdrv si aucun module n'a été trouvé pour le noyau actuel. La deuxième ligne permet au paquet d'effacer les anciens modules vboxdrv compilés par des installations précédentes.  
Ces paramètres par défaut peuvent être appliqués avec  
`debconf-set-selections vboxconf`  
avant l'installation du paquet Debian VirtualBox.  
De plus, il existe des options de configuration classiques que vous pouvez définir avant l'installation, décrites au chapitre [2.3.3.7 Options d'installation automatique.](#mark2.3.3.7)  

[Retour à la table des matières](#Table des matières)

# 2.3.3.6 Installation automatique des paquets .rpm<a id="mark2.3.3.6"></a>

Le format .rpm n'offre pas de système de configuration comparable au système debconf. Voir le chapitre [2.3.3.7 Options d'installation automatique](#mark2.3.3.7) pour savoir comment définir certaines options d'installation classiques fournies par VirtualBox.  

[Retour à la table des matières](#Table des matières)

# 2.3.3.7 Options d'installation automatique<a id="mark2.3.3.7"></a>

Pour configurer le processus d'installation de nos paquets .deb et .rpm, vous pouvez créer un fichier de réponses appelé `/etc/default/virtualbox`.   La génération automatique de la règle udev peut être empêchée par le paramètre suivant:  
`INSTALL_NO_UDEV=1`  
La création du groupe vboxusers peut être empêchée avec  
`INSTALL_NO_GROUP=1`  

Si la ligne  
`INSTALL_NO_VBOXDRV=1`  
est spécifiée, l'installeur du paquet n'essaiera pas de construire le module noyau vboxdrv si aucun module adapté au noyau actuel n'a été trouvé.  

[Retour à la table des matières](#Table des matières)

# 2.3.4 Le groupe vboxusers<a id="mark2.3.4"></a>

Les installeurs pour Linux créent le groupe d'utilisateurs système vboxusers pendant l'installation. Tous les utilisateurs du système qui vont utiliser les périphériques USB depuis des invités VirtualBox doivent être membres de ce groupe. Un utilisateur peut devenir membre du groupe vboxusers via l'outil graphique de gestion des utilisateurs/groupes ou en ligne de commande avec  
`sudo usermod -a -G vboxusers nomutilisateur`  

[Retour à la table des matières](#Table des matières)

# 2.3.5 Démarrer VirtualBox sur Linux<a id="mark2.3.5"></a>

La façon la plus simple de démarrer un programme VirtualBox est de lancer le programme de votre choix (VirtualBox, VBoxManage, VBoxSDL ou VBoxHeadless) à partir d'un terminal. Ce sont des liens symboliques vers VBox.sh qui démarrent pour vous le programme nécessaire.  
Les instructions détaillées suivantes ne devraient vous intéresser que si vous souhaitez exécuter VirtualBox sans l'installer préalablement. Vous devriez commencer par compiler le module noyau vboxdrv (voir ci-dessus) et l'insérer dans le noyau Linux. VirtualBox consiste en un démon de service (VBoxSVC) et plusieurs applications. Le démon est démarré automatiquement si nécessaire. Toutes les applications VirtualBox communiqueront avec le démon par les sockets du démon local d'Unix. Il peu] y avoir plusieurs instances de démon sous différents comptes utilisateurs  les applications peuvent ne communiquer qu'avec le démon en fonction sous le compte utilisateur en tant qu'application. Le socket de domaine locale réside dans un sous-répertoire du répertoire des fichiers temporaires de votre système, appelé `.vbox-<username>-ipc`. En cas de problèmes de communication ou de problèmes au démarrage du serveur, vous pouvez essayer de supprimer ce répertoire.  
Toutes les applications de VirtualBox (VirtualBox, VBoxSDL, VBoxManage et VBoxHeadless) exigent que le répertoire de VirtualBox soit dans le chemin de la bibliothèque :  
`LD_LIBRARY_PATH=. ./VBoxManage showvminfo "Windows XP"`  

[Retour à la table des matières](#Table des matières)

# 2.4 Installation sur les hôtes Solaris<a id="mark2.4"></a>

Pour les versions spécifiques de Solaris que nous supportons comme systèmes d'exploitation hôtes, merci de vous reporter au chapitre [1.4 Systèmes d'exploitation hôtes supportés.](#mark1.4)  
Si vous avez déjà une instance installée de VirtualBox sur votre hôte Solaris, merci de la désinstaller avant d'installer une nouvelle instance. Reportez-vous au chapitre [2.4.4 Désinstallation sous Solaris](#mark2.4.4) pour les instructions de désinstallation.  

[Retour à la table des matières](#Table des matières)

# 2.4.1 Effectuer l'installation sous Solaris<a id="mark2.4.1 "></a>

VirtualBox est disponible en paquet Solaris standard. Téléchargez le paquet SunOS VirtualBox qui comprend les versions 32 et 64 bits de VirtualBox. L'installation doit se faire en tant qu'administrateur et depuis l'espace global car l'installeur de VirtualBox charge des pilotes noyau qui ne peuvent pas l'être depuis des espaces non globaux. Pour vérifier là où vous êtes actuellement, lancez la commande `zonename`. Exécutez les commandes suivantes :  
`gunzip -cd VirtualBox-4.3.13-SunOS.tar.gz | tar xvf -`  

À partir de VirtualBox 3.1, le paquet noyau de VirtualBox n'est plus distinct et il a été intégré au paquet principal. Installez le paquet VirtualBox en utilisant   :
`pkgadd -d VirtualBox-4.3.13-SunOS.pkg`  

Note: Si vous utilisez les Espaces Solaris, pour n'installer VirtualBox que dans celui actuel et pas dans une autre, utilisez pkgadd -G. Pour plus d'informations, reportez-vous au manuel de pkgadd ; voir aussi le chapitre [2.4.6 Configurer un espace pour exécuter VirtualBox.](#mark2.4.6)  

L'installeur vous demandera alors d'entrer le paquet que vous voulez installer. Choisissez "1" ou "tous" et poursuivez. Ensuite, l'installeur vous demandera si vous voulez autoriser l'exécution du script postinstall. Choisissez "y" et poursuivez, car il est fondamental d'exécuter ce script qui installe le module noyau de VirtualBox. Suite à cette confirmation, l'installeur installra VirtualBox et exécutera le script de paramétrage postinstall.  
Une fois que le script postinstall a été exécuté, votre installation est maintenant terminée.  
Vous pouvez maintenant effacer en toute sécurité de votre système le paquet décompressé et les fichiers autoresponse. VirtualBox devrait être installé dans `/opt/VirtualBox`.  

[Retour à la table des matières](#Table des matières)

# 2.4.2 Le groupe vboxuser<a id="mark2.4.2"></a>

À partir de VirtualBox 4.1, l'installeur crée un groupe d'utilisateurs système vboxuser pendant l'installation sur les hôtes Solaris qui supportent les fonctionnalités USB exigées par VirtualBox.  
Tous les utilisateurs système qui vont utiliser des périphériques USB à partir des invités dans VirtualBox doivent faire partie de ce groupe. Un utilisateur peut devenir membre de ce groupe avec les outils de gestion graphiques des utilisateurs/groupes ou, en ligne de commande, en exécutant en tant qu'administrateur :  
`usermod -G vboxuser username`  

Remarquez que l'ajout d'un utilisateur actif à ce groupe exigera que l'utilisateur se déconnecte et se reconnecte. Vous devriez faire cela à la main après avoir installé avec succès le paquet.  

[Retour à la table des matières](#Table des matières)

# 2.4.3 Démarrer VirtualBox sur Solaris<a id="mark2.4.3"></a>

La façon la plus simple de démarrer un programme VirtualBox est de lancer le programme de votre choix (VirtualBox, VBoxManage, VBoxSDL ou VBoxHeadless) à partir d'un terminal. Ce sont des liens symboliques vers VBox.sh qui démarre pour vous le programme requis.  
Vous pouvez aussi appeler directement les programmes souhaités depuis `/opt/VirtualBox`.  
L'utilisation des liens fournis est plus facile car vous n'êtes pas obligé de taper le chemin complet.  
Vous pouvez configurer certains éléments de l'interface graphique VirtualBox en Qt tels que la police et les couleurs en exécutant `VBoxQtconfig` à partir du terminal.  

[Retour à la table des matières](#Table des matières)

# 2.4.4 Désinstallation sous Solaris<a id="mark2.4.4"></a>

La désinstallation de VirtualBox sur Solaris nécessite les droits d'administrateur. Pour effectuer la désinstallation, démarrez une session administrateur en terminal et exécutez :  
`pkgrm SUNWvbox`  

Après confirmation, ceci supprimera VirtualBox de votre système.  
Si vous désinstallez VirtualBox version 3.0 ou inférieur, vous devez supprimer le paquet d'interface noyau VirtualBox, exécutez :  
`pkgrm SUNWvboxkern`  

[Retour à la table des matières](#Table des matières)

# 2.4.5 Installation sans efforts sous Solaris<a id="mark2.4.5"></a>

Pour effectuer une installation non interactive de VirtualBox, nous avons créé un fichier de réponses appelé autoresponse qu'installera l'installeur pour répondre à ses questions plutôt que de vous les poser.  
Extrayez le paquet tar.gz comme décrit dans l'installation normale. Puis ouvrez une session administrateur en terminal et exécutez :  
`pkgadd -d VirtualBox-4.3.13-SunOS-x86 -n -a autoresponse SUNWvbox`  

Pour effectuer une désinstallation non interactive, ouvrez une session administrateur en terminal et exécutez :  
`pkgrm -n -a /opt/VirtualBox/autoresponse SUNWvbox`  

[Retour à la table des matières](#Table des matières)

# 2.4.6 Configurer un espace pour exécuter VirtualBox sous Solaris<a id="mark2.4.6"></a>

À partir de VirtualBox 1.6, il est possible d'exécuter VirtualBox depuis des espaces Solaris.  
Pour une introduction aux espaces Solaris, merci de vous reporter à <http://www.sun.com/bigadmin/features/articles/solaris_zones.jsp>.  
En supposant que VirtualBox a déjà été installé dans votre espace, vous devez donner au nœud de périphérique de VirtualBox un accès à la zone. Ceci se fait en effectuant les étapes suivantes.  
Démarrez une session administrateur en terminal et exécutez :  
`zonecfg -z vboxzone`  

Dans l'invite zonecfg, ajoutez la ressource device et les propriétés match à l'espace. Voici comment on peut faire :  

`zonecfg:vboxzone>add device`  
`zonecfg:vboxzone:device>set match=/dev/vboxdrv`  
`zonecfg:vboxzone:device>end`  
`zonecfg:vboxzone>verify`  
`zonecfg:vboxzone>exit`  

Si vous exécutez VirtualBox 2.2.0 ou supérieur sur des hôtes Solaris 11 ou Nevada, vous devriez aussi ajouter un périphérique pour /dev/vboxusbmon, identique à ce qui est indiqué ci-dessus. Cela ne s'applique pas aux hôtes Solaris 10 à cause de l'absence du support USB.  
Remplacez "vboxzone" par le nom de l'espace dans lequel vous souhaitez exécuter VirtualBox.  
Ensuite, redémarrez l'espace en utilisant `zoneadm` et vous devriez pouvoir lancer VirtualBox depuis l'espace configuré.  

[Retour à la table des matières](#Table des matières)

# 3 Configurer des machines virtuelles<a id="mark3"></a>

Alors que le chapitre [1 Premiers pas](#mark1) vous donnait une introduction rapide à VirtualBox et sur la façon de faire marcher votre première machine virtuelle, le chapitre qui suit décrit en détail la manière de configurer des machines virtuelles.  
Vous disposez d'une latitude considérable dans la décision sur le matériel qui sera donné à l'invité. Le matériel virtuel peut être utilisé pour communiquer avec le système hôte ou avec d'autres invités. Par exemple, si vous fournissez à VirtualBox l'image d'un CD-ROM dans un fichier ISO, VirtualBox peut présenter cette image à un système invité comme s'il s'agissait d'un CD-ROM physique. De la même façon, vous pouvez donner à un système invité un accès au réseau par sa carte réseau virtuelle, si tel est votre choix, donner au système hôte, à d'autres invités ou à des ordinateurs un accès Internet au système hôte.  

[Retour à la table des matières](#Table des matières)

# 3.1.0 Systèmes d'exploitation hôtes supportés pour la version 4.3.13<a id="mark3.1.0"></a>

Cette partie Systèmes d'exploitation hôtes ne traite que pour la version 4.3.13  

* Hôtes Windows :  
	*	 Windows XP, tous les packs service (32 bits)  
	*	 Windows Server 2003 (32 bits)  
	*	 Windows Vista (32 bits et 64 bits 1).  
	*	 Windows Server 2008 (32 bits et 64 bits)  
	*	 Windows 7 (32 bits et 64 bits)  
	*	 Windows 8 (32 bits et 64 bits)  
	*	 Windows Server 2012 (64 bits)  
* Hôtes Mac OS X : 2  
	*	 10.6 (Snow Leopard, 32 bits et 64 bits)  
	*	 10.7 (Lion, 32 bits et 64 bits)  
	*	 10.8 (Mountain Lion, 64 bits)  
Il faut du matériel Intel ; merci de voir aussi le chapitre [14 Limites connues.](#mark14)  
* Hôtes Linux (32 bits et 64 bits 3). Cela inclut entre autres :  
	*	 10.04 ("Lucid Lynx"), 10.10 ("Maverick Meerkat"), 11.04 ("Natty Narwhal"), 11.10 "Oneiric Oncelot"), 12.04 ("Precise Pangolin"), 12.10 ("Quantal Quetzal"), 13.04 ("Raring Ringtail")  
	*	 Debian GNU/Linux 6.0 ("squeeze") et 7.0 ("wheezy")  
	*	 Oracle Enterprise Linux 5, Oracle Linux 6  
	*	 Redhat Enterprise Linux 5 et 6  
	*	 Fedora Core 6 à 17  
	*	 Gentoo Linux  
	*	 openSUSE 11.0, 11.1, 11.2, 11.3, 11.4, 12.1, 12.2  
	*	 Mandriva 2010 et 2011  
On devrait pouvoir utiliser VirtualBox sur la plupart des systèmes basés sur un noyau Linux 2.6 ou 3.x, soit en utilisant l’installeur de VirtualBox, soit en faisant une installation manuelle ; voir le chapitre [2.3 Installation  sur des hôtes Linux.](#mark2.3)  Cependant, les distributions Linux formellement testées et supportées sont celles pour lesquelles nous offrons un paquet dédié.  
Remarquez qu’à partir de VirtualBox 2.1, les systèmes d’exploitation hôtes Linux basés sur le noyau 2.4 ne sont plus supportées.  
* Les hôtes Solaris (64 bits seulement) sont supportés avec les restrictions listées au chapitre [14 Limites connues](#mark14)  
* Solaris 11 y compris Solaris 11 Express  
	*	 Solaris 10 (u8 et supérieur)  

1 Le support pour Windows 64 bits a été ajouté avec VirtualBox 1.5.  
2 Le support préliminaire de Mac OS X (étape beta) a été ajouté avec VirtualBox 1.4, le support complet avec 1.6. Le support pour Mac OS X 10.4 (Tiger) a été supprimé avec VirtualBox 3.1.  
3 Le support pour Linux 64 bits a été ajouté avec VirtualBox 1.4.  

Vous pouvez également voir le chapitre [1.4 Systèmes d'exploitation hôtes supportés](#mark1.4) qui contient les dernières informations déjà mises à jour.  

[Retour à la table des matières](#Table des matières)

# 3.1 Systèmes d'exploitation invités supportés pour la version 4.3.13<a id="mark3.1"></a>

Cette partie Systèmes d'exploitation invités ne traite que pour la version 4.3.13  

Comme VirtualBox est conçu pour offrir un environnement de virtualisation générique pour les systèmes x86, il peut exécuter des systèmes d'exploitation de tout type, même ceux non cités ici. Cependant, le principal est pour nous d'optimiser VirtualBox pour les systèmes invités suivants :  

Windows NT 4.0 Toutes les versions, les éditions et les packs service sont complètement supportés ; cependant, il y a des problèmes avec les anciens packs service. Nous recom-mandons d'installer le pack service 6a. Les suppléments invité sont disponibles avec des fonctionnalités limitées.  
Windows 2000 / XP / Server 2003 / Vista / Server 2008 / Windows 7 / Windows 8 / Server 2012  
Toutes les versions, les éditions et les packs service sont complètement supportés (y compris les versions 64 bits, sous réserve des conditions préalables listées ci-dessous). Les suppléments invité sont disponibles.  
DOS / Windows 3.x / 95 / 98 / ME Un test restreint a été effectué. Utilisation non recommandée au-delà des mécanismes d'installation primitive. Pas de suppléments invité disponibles.  
Linux 2.4 Support limité.  

Linux 2.6 Toutes les versions/éditions sont complètement supportées (32 bits et 64 bits). Les suppléments invité sont disponibles.  
Nous recommandons fortement d'utiliser un noyau Linux version 2.6.13 ou supérieur pour une meilleure performance.  

Note: Certaines versions du noyau Linux ont des bogues les empêchant de s'exécuter dans un environnement virtuelle ; merci de voir le chapitre [12.4.3 Versions bugguées du noyau Linux (Linux2.6)](#mark12.4.3)  pour plus de détails.  

Linux 3.x Toutes les versions/éditions sont complètement supportées (32 bits et 64 bits). Les suppléments invité sont disponibles.

Solaris 10 (u6 et supérieur), Solaris 11 (y compris Solaris 11 Express) Complètement supporté (32 bits et 64 bits). Les suppléments invité sont disponibles.  
FreeBSD Exige l'activation de la virtualisation matérielle. Support limité. Les suppléments invité ne sont pas encore disponibles.  
OpenBSD Exige l'activation de la virtualisation matérielle. Les versions 3.7 et supérieur sont supportées. Les suppléments invité ne sont pas encore disponibles.  
OS/2 Warp 4.5 Exige l'activation de la virtualisation matérielle. Nous ne supportons officiellement que MCP2 ; les autres versions d'OS/2 peuvent ou pas fonctionner. Les suppléments invité sont disponibles avec des fonctionnalités limitées. 
Mac OS X VirtualBox 3.2 a ajouté un support expérimental des invités Mac OS X, mais il es tfourni avec des restrictions. Merci de voir la section suivante au chapitre [14 Limites connues.](#mark14)  

Vous pouvez également voir le chapitre [1.4.1 Systèmes d'exploitation invités supportés](#mark1.4.1) qui contient les dernières informations déjà mises à jour.  

[Retour à la table des matières](#Table des matières)

# 3.1.1 Invités Mac OS X<a id="mark3.1.1"></a>

À partir de la version 3.2, VirtualBox a un support expérimental des invités Mac OS X. Il vous permet d'installer et d'exécuter des versions non modifiées de Mac OS X sur du matériel hôte supporté.  
Si les solutions concurrentes offrent des modifications des DVDs d'installation de Mac OS X (chargeur d'amorçage différent, fichiers remplacés), VirtualBox est le premier produit à offrir une architecture PC moderne qu'attend OS X sans besoin de "bidouilles".  
Vous devriez garder en tête un certain nombre de problèmes importants avant d'essayer d'installer un invité Mac OS X :  

1. Mac OS X est un logiciel propriétaire sous licence et il contient des restrictions juridiques et techniques limitant son utilisation à certains matériels et scénarios d'utilisations. Il est important que vous compreniez et que vous respectiez ces restrictions.  
En particulier, pour la plupart des versions de Mac OS X, Apple interdit de les installer sur du matériel non Apple.  
Ces restrictions juridiques sont également renforcées au niveau technique. Mac OS X vérifie s'il s'exécute sur du matériel Apple et la plupart des DVDs fournis avec le matériel Apple vérifient même le modèle exact. Ces restrictions ne sont pas contournées par VirtualBox et s'appliquent toujours.  
2. Seuls des processeurs connus et testés par Apple sont supportés. Il s'en suit que si votre processeur Intel est plus récent que la construction de Mac OS X, ou si vous avez un processeur non Intel, il plantera très probablement au moment du démarrage avec une exception "Unsupported CPU". Il vaut mieux généralement utiliser le DVD de Mac OS X fourni avec votre matériel Apple.  
3. L'installeur de Mac OS X s'attend à ce que le disque dur soit partitionné, donc quand il n'offre pas de sélection, vous devez lancer l'Outil de disque du menu "Outils" et partitionner le disque dur. Puis, fermez l'outil de disque et poursuivez l'installation.  
4. En outre, comme le support de Mac OS X de VirtualBox est actuellement encore expérimental, merci de vous reporter aussi au chapitre [14 Limites connues.](#mark14)  

[Retour à la table des matières](#Table des matières)

# 3.1.2 Invités 64 bits<a id="mark3.1.2"></a>

VirtualBox supporte les systèmes d'exploitation invités 64 bits, même sur des systèmes d'exploitation hôtes 32 bits, 2 pourvu qu'existent les conditions suivantes :  

1. Vous avez besoin d'un processeur 64 bits avec le support de la virtualisation matérielle (voir le chapitre [10.3 Virtualisation matérielle vs. logicielle).](#mark10.3)  
2. Vous devez activer la virtualisation matérielle pour la VM particulière où vous voulez le support du 64 bits ; la virtualisation logicielle n'est pas supportée pour les VMs 64 bits.  
3. Si vous voulez utiliser un invité 64 bits sur un système d'exploitation hôte 32 bits, vous devez aussi sélectionner un système d'exploitation 64 bits pour la VM en particulier. Comme le support du 64 bits sur des hôtes 32 bits implique des dépassements supplémentaires, VirtualBox n'active ce support qu'à la demande expresse. Sur des hôtes 64 bits (fournis en général avec le support de la virtualisation matérielle), les systèmes d'exploitation invités 64 bits sont toujours supportés, indépendamment des paramètres, donc vous pouvez simplement installer un système d'exploitation 64 bits dans l'invité.  

Avertissement: Sur tous les hôtes, vous devriez activer le I/O APIC pour les machines virtuelles que vous souhaitez utiliser en mode 64 bits. C'est surtout vrai pour les VMs Windows 64 bits. Voir le chapitre [3.3.2 Onglet "Avancé".](#mark3.3.2)  
En outre, pour les invités Windows 64 bits, vous devriez vous assurer que la VM utilise le périphérique réseau Intel, car il n'y a pas de support pour le pilote 64 bits pour la carte AMD PCNet ; voir chapitre [6.1 Matériel réseau virtuel.](#mark6.1)  

Si vous utilisez l'assistant "Créer une VM" de l'interface graphique de VirtualBox, (voir chapitre [1.7 Créer votre première machine virtuelle),](#mark1.7) VirtualBox utilisera automatiquement les bons paramètres pour chaque type de système d'exploitation 64 bits choisi.  

[Retour à la table des matières](#Table des matières)

# 3.2 Matériel émulé<a id="mark3.2"></a>

VirtualBox virtualise presque tout le matériel de l'hôte. Selon la configuration de la VM, l'invité utilisera le matériel virtuel suivant :  

* Périphériques d'entrée. Par défaut, VirtualBox émule un clavier et une souris PS/2 standards. Ces périphériques sont supportés par presque tous les systèmes d'exploitation passés et actuels.  
En outre, VirtualBox peut fournir des périphériques d'entrée virtuels pour éviter de devoir capturer la souris et un clavier, comme décrit au chapitre [1.8.2 Capturer et rendre le clavier et la souris.](#mark1.8.2)  
* Graphisme. Le périphérique graphique de VirtualBox (parfois cité comme périphérique VGA) n'est pas, contrairement à presque tous les autres périphériques émulés, basé sur un équivalent physique. C'est un périphérique de synthèse simple qui fournit une compatibilité avec les VGA et plusieurs registres étendus standards par la VESA BIOS Extensions (VBE).  
Le support des invités 64 bits a été ajouté avec VirtualBox 2.0 ; le support des invités 64 bits sur des hôtes 32 bits a été ajouté avec VirtualBox 2.1.  
* Stockage. VirtualBox émule actuellement l'interface ATA standard qu'on trouve dans les puces PIIX3/PIIX4 Intel, l'interface SATA (AHCI) et deux adaptateurs SCSI (LSI Logic et BusLogic) ; voir le chapitre [5.1 Les contrôleurs de disque dur : IDE, SATA (AHCI), SCSI, SAS](#mark5.1) pour plus de détails. Bien qu'en fournir un d'entre eux suffirait pour VirtualBox enlui-même, cette multitude d'adaptateurs de stockage est requise pour des raisons de compatibilité avec d'autres hyperviseurs. Windows est particulièrement pointilleux sur ces périphériques d'amorçage, et la migration des VMs entre hyperviseurs est très difficile voire impossible si les contrôleurs de stockage sont différents.  
* Réseau. Voir chapitre [6.1 Matériel réseau virtuel.](#mark6.1)  
* USB. VirtualBox émule deux contrôleurs d'hôte USB, EHCI et OHCI. Deux contrôleurs hôtes sont nécessaires car l'OHCI ne gère que les périphériques USB à faible ou grande vitesse (USB 1.x et 2.0), alors que l'EHCI ne gère que les périphériques à très haute vitesse (USB 2.0 seulement). Les contrôleurs USB émulés ne communiquent pas directement avec les périphériques sur l'hôte, mais plutôt avec une couche USB virtuelle qui rend abstrait le protocole USB et qui permet d'utiliser des périphériques USB distants.  
* Audio. Voir chapitre [3.7 Paramètres de son.](#mark3.7)  

[Retour à la table des matières](#Table des matières)

# 3.3 Paramètres généraux<a id="mark3.3"></a>

Dans la fenêtre des paramètres, dans "Général", vous pouvez configurer la plupart des aspects fondamentaux de la machine virtuelle, tels que la mémoire ou du matériel essentiel. Il y a trois onglets, "Base", "Avancé" et "Description".  

[Retour à la table des matières](#Table des matières)

# 3.3.1 Onglet "Base"<a id="mark3.3.1"></a>

Sous l'onglet "Base" de la catégorie Général des paramètres, vous pouvez voir ces paramètres :  

Nom Le nom sous lequel apparaît la VM dans la liste des VMs de la fenêtre principale. Sous ce nom, VirtualBox enregistre aussi les fichiers de configuration de la VM. En changeant le nom, VirtualBox renomme aussi ces fichiers. Il s'en suit que vous ne pouvez utiliser que des caractères autorisés par les noms de fichier de votre système d'exploitation hôte.  
Remarquez qu'en interne, VirtualBox utilise des identifieants unique (UUIDs) pour identifier les machines virtuelles. Vous pouvez les afficher avec VBoxManage.  
Système d'exploitation / version Le type du système d'exploitation invité qui est (ou sera) installé dans la VM. C'est le même paramètre que celui spécifié dans l'assistant "Nouvelle machine virtuelle", comme décrit au chapitre [1.7 Créer votre première machine virtuelle.](#mark1.7)  
Si les paramètres par défaut d'une VM nouvellement créée sont en fonction du type de système d'exploitation sélectionné, la modification ultérieure du type n'a aucun effet sur les paramètres de la VM ; cette valeur est donc purement informative et décorative.  

[Retour à la table des matières](#Table des matières)

# 3.3.2 Onglet "Avancé"<a id="mark3.3.2"></a>

Dossier d'instantané Par défaut, VirtualBox enregistre les données de l'instantané avec vos autres données de configuration de VirtualBox ; voir chapitre [10.1 Où VirtualBox stocke ses fichiers.](#mark10.1) Avec ce paramètre, vous pouvez spécifier un autre dossier pour chaque VM.  

Presse-papier partagé Vous pouvez sélectionner ici si le presse-papier du système d'exploitation invité devrait être partagé avec celui de votre hôte. Si vous sélectionnez "Bidirectionnel", VirtualBox s'assurera toujours que les deux presse-papier contiennent les mêmes données.  
Si vous sélectionnez "Hôte vers invité" ou "Invité vers hôte", VirtualBox copiera les données du presse-papier dans une direction.  
Le partage du presse-papier nécessite que les suppléments invité de VirtualBox soient installés. Il s'en suit que ce paramètre n'a aucun effet sans cela ; voir chapitre [4 Les suppléments invité](#mark4) pour plus de  détails.  
Le presse-papier partagé est désactivé par défaut. Voir chapitre [13.3.2.3 Presse-papier](#mark13.3.2.3) pour une explication. On peut changer ce paramètre n'importe quand en utilisant le menu "Presse-papier" du menu "Périphériques" de la machine virtuelle.  
Drag'n'Drop Ce paramètre permet d'activer le glisser/déplacer : sélectionnez un fichier sur le bureau, cliquez sur le bouton gauche, amenez la souris dans la fenêtre de la VM et cliquez de nouveau sur le bouton de la souris. Le fichier est copié de l'hôte à l'invité. C'est fonction n'est actuellement implémentée que pour la copie de fichiers de l'hôte vers l'invité. 
Média amovible : se rappeler des changements au moment de l'exécution Si ceci est coché, VirtualBox enregistrera l'état des médias montés entre deux exécutions d'une machine virtuelle.  
Mini barre d'outils En mode plein écran ou transparent, VirtualBox peut afficher une petite barre d'outils contenant certains éléments disponibles normalement dans la barre de menus de la machine virtuelle. Cette barre d'outils se réduit à une ligne grise, sauf si vous déplacez la souris dessus. Avec la barre d'outils, vous pouvez basculer entre le mode plein écran et transparent, contrôler l'exécution de la machine ou activer certains périphériques. Si vous ne voulez pas voir la barre d'outils, désactivez ce paramètre.  
Le deuxième paramètre permet d'afficher la barre d'outil en haut de l'écran et non en bas.  

[Retour à la table des matières](#Table des matières)

# 3.3.3 Onglet "Description"<a id="mark3.3.3"></a>

Ici, vous pouvez taper une description pour votre machine virtuelle si vous le voulez. Cela n'a aucun effet sur le fonctionnement de la machine, mais pourriez trouver cet espace utile pour y noter des choses comme la configuration d'une machine virtuelle et le logiciel installé dedans.  
Pour insérer un saut de ligne dans la zone de texte de la description, appuyez sur Maj+Entrée.  

[Retour à la table des matières](#Table des matières)

# 3.4 Paramètres système<a id="mark3.4"></a>

La catégorie "Système" regroupe divers paramètres liés au matériel de base présenté à la machine virtuelle.  

Note: Le mécanisme d'activation de Microsoft Windows étant sensible aux modifications matérielles, si vous modifiez les paramètres matériels pour un invité Windows, certains de ces changements peuvent provoquer la demande d'une nouvelle activation de Microsoft.  

Le support du glisser/déplacer a été ajouté avec VirtualBox 4.2  

[Retour à la table des matières](#Table des matières)

# 3.4.1 Onglet "Carte mère"<a id="mark3.4.1"></a>

Dans l'onglet "Carte mère", vous pouvez influencer le matériel virtuel qui serait normalement sur la carte mère d'un vrai ordinateur.  

Mémoire de base Ceci définit la quantité de RAM affectée et donnée à la VM quand elle est en fonction. La quantité de mémoire spécifiée sera récupérée sur le système d'exploitation hôte, donc il faut qu'elle soit disponible ou rendue disponible comme mémoire libre sur l'hôte au moment du démarrage de la VM et elle ne sera pas disponible pour l'hôte tant que la VM sera en fonction. C'est le même paramètre que celui spécifié dans l'assistant "Nouvelle machine virtuelle", comme décrit dans les grandes lignes du chapitre [1.7 Créer votre première machine virtuelle.](#mark1.7)  
En général, il est possible de modifier la taille de la mémoire après avoir installé le système d'exploitation invité (pourvu que vous ne réduisiez pas la mémoire à une quantité telle qu'un système d'exploitation ne démarrerait plus).  
Ordre d'amorçage Ce paramètre détermine l'ordre dans lequel le système d'exploitation invité essaiera de s'amorcer sur les différents périphériques de démarrage virtuels. Analogue à un paramètre du BIOS d'un vrai PC, VirtualBox peut dire à un OS invité de démarrer sur une disquette, un lecteur CD/DVD virtuel, le disque dur virtuel (chacun d'eux étant défini par les autres paramètres de la VM), le réseau ou aucun.  
Si vous sélectionnez "Réseau", la VM essaiera de démarrer sur le mécanisme PXE du réseau virtuel. Il faut le configurer en détail en ligne de commande Merci de voir le chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  
Chipset Vous pouvez sélectionner ici le chipset qui sera présenté à la machine virtuelle. Avant VirtualBox 4.0, PIIX3 était ici la seule option disponible. Pour les systèmes d'exploitation invités modernes tels que Mac OS X, ce vieux chipset n'est plus bien supporté. Du coup, VirtualBox 4.0 a introduit une émulation du chipset ICH9, plus moderne, qui supporte le PCI express, trois bus PCI, des ponts PCI-à-PCI et des Message Signaled Interrupts (MSI).  
Cela permet aux systèmes d'exploitation modernes de gérer davantage périphériques PCI sans besoin d'un partage d'IRQ. Remarquez que le support ICH9 est expérimental et non recommandé pour les systèmes d'exploitation invités qui n'en ont pas besoin.  
Pointage de périphériques Le périphérique de pointage par défaut des invités anciens est une souris PS/2 traditionnelle. Avec USB tablet, VirtualBox indique à la machine virtuelle qu'une tablette USB est connectée et il envoie les événements de souris à la machine virtuelle via ce périphérique. Le troisième paramètre est un USB Multi-Touch Tablet adapté aux invités Windows récents.  
L'utilisation de la tablette USB virtuelle a l'avantage que les mouvements sont envoyés avec une synchronisation absolue (et non seulement les changements relatifs), ce qui permet à VirtualBox de traduire les événements de souris dans la fenêtre de la VM en événements de la tablette sans devoir "capturer" la souris dans l'invité, comme décrit au chapitre [1.8.2 Capturer et rendre le clavier et la souris.](#mark1.8.2) Cela rend l'utilisation de la VM moins pénible même si les suppléments invité ne sont pas installés.  
Activer I/O APIC Advanced Programmable Interrupt Controllers (APICs) (contrôleurs d'interruptions programmables avancés) sont des fonctionnalités du matériel x86 récent ayant remplacé ces dernières années le Programmable Interrupt Controllers (PICs). Avec un I/O APIC, les systèmes d'exploitation peuvent utiliser plus de 16 requêtes d'interruption (IRQs), évitant donc le partage d'IRQ pour une meilleure ﬁabilité.  

La tablette USB virtuelle a été ajoutée avec VirtualBox 3.2. Selon le système d'exploitation choisi, elle est maintenant activée par défaut pour les nouvelles machines virtuelles.  

Note: L'activation de I/O APIC est requis pour les systèmes d'exploitation invités 64 bits, surtout Windows Vista ; il est aussi nécessaire si vous voulez utiliser plus d'un processeur virtuel dans une machine virtuelle.  

Cependant, le support des I/O APICs logiciel n'est pas fiable avec les systèmes d'exploitation autres que Windows. De plus, l'utilisation de I/O APIC augmente légèrement la charge de la virtualisation et donc, cela ralentit un peu l'OS invité.  

Avertissement: Tous les systèmes d'exploitation Windows à partir de Windows 2000 installent des noyaux différents en fonction de la disponibilité de l'I/O APIC. Comme avec l'ACPI, l'I/O APIC ne doit pas être désactivé après l'installation d'un OS invité Windows. Son activation après l'installation n'aura par contre aucun effet.  

Activer l'EFI Ceci active la Extensible Firmware Interface (EFI), qui remplace le BIOS de base et peut servir dans certains cas d'utilisation avancée. Merci de vous reporter au chapitre [3.12 Autre firmware (EFI)](#mark3.12) pour plus de  détails.  
Horloge matérielle en temps UTC Si ceci est coché, VirtualBox indiquera à l'invité l'heure du système au format UTC plutôt qu'en temps local (hôte). Cela change la façon dont agit l'horloge en temps réel virtuelle (RTC) et peut être utile pour des systèmes d'exploitation invité de type Unix qui attendent généralement une horloge matérielle en UTC.  

De plus, vous pouvez désactiver Advanced Configuration and Power Interface (ACPI) que VirtualBox présente par défaut au système d'exploitation invité. L'ACPI est le standard industriel actuel permettant au système d'exploitation de reconnaître le matériel, de configurer les cartes mères et d'autres périphériques, et de gérer l'énergie. Comme tous les PCs modernes contiennent cette fonctionnalité et Windows et Linux le supportent depuis des années, il est activé par défaut dans VirtualBox. On ne peut le désactiver qu'en ligne de commande ; voir chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  

Avertissement: Tous les systèmes d'exploitation Windows à partir de Windows 2000 installent des noyaux différents selon que l'ACPI est activé, donc l'ACPI ne doit pas être désactivé après l'installation d'un OS invité Windows. Son activation après l'installation n'aura par contre aucun effet.  

[Retour à la table des matières](#Table des matières)

# 3.4.2 Onglet "Processeur"<a id="mark3.4.2"></a>

Dans l'onglet "Processeur", vous pouvez définir le nombre de cœurs de processeur virtuels que devrait voir le système d'exploitation invité. À partir de la version 3.0, VirtualBox supporte le symmetrical multiprocessing (SMP) et peut présenter jusqu'à 32 cœurs de processeur virtuels à chaque machine virtuelle.  
Vous ne devriez quand même pas configurer une machines virtuelles pour utiliser plus de cœurs de processeur que vous n'en avez physiquement (coeurs réels, pas d'hyperthreads).  
Dans cet onglet, vous pouvez aussi définir le "CPU execution cap". Ce paramètre limite la quantité de temps qu'en processeur hôte peut donner pour émuler un processeur virtuel. Le réglage par défaut est de 100% ce qui veut dire qu'il n'y a aucune limite. Un réglage à 50% implique qu'un seul processeur peut utiliser jusqu'à 50% d'un seul processeur hôte. Remarquez que la limitation du temps d'exécution des processeurs virtuels peut provoquer des problèmes de timing dans l'invité.  

Par ailleurs, le paramètre "Activer PAE/NX" détermine si les possibilités PAE et NX du processeur hôte seront proposées à la machine virtuelle. PAE signifie "Physical Address Extension".  
Normalement, s'il est activé et supporté par le système d'exploitation, même un processeur x86 32 bits peut accéder à plus de 4 Go de RAM. Cela est rendu possible par l'ajout de 4 bits aux adresses mémoire, de sorte qu'avec 36 bits, on peut gérer jusqu'à 64 Go. Certains systèmes d'exploitation (tels qu'Ubuntu Server) exigent le support PAE du processeur et ne peuvent pas fonctionner dans une machine virtuelle sans cela.  
Sur des machines virtuelles qui exécutent des systèmes d'exploitation serveurs modernes, VirtualBox supporte aussi le branchement à chaud du processeur. Pour des détails là-dessus, merci de vous reporter au chapitre [9.5 Montage de processeur à chaud.](#mark9.5)  

[Retour à la table des matières](#Table des matières)

# 3.4.3 Onglet "Accélération"<a id="mark3.4.3"></a>

Dans cet onglet, vous pouvez déterminer si VirtualBox devrait utiliser les extensions de virtualisation matérielle que peut supporter votre hôte et comment. C'est le cas avec la plupart des processeurs fabriqués après 2006.  
Vous pouvez sélectionner individuellement pour chaque machine virtuelle si VirtualBox devraitutiliser la virtualisation logicielle ou matérielle.  
Dans la plupart des cas, les paramètres défaut conviendront ; VirtualBox aura choisi des options par défaut en fonction du système d'exploitation que vous avez sélectionné quand vous avez créé la machine virtuelle. Toutefois, dans certaines situations, il se peut que vous vouliez modifier ces réglages par défaut préconfigurés.  
Il se peut que les utilisateurs avancés s'intéressent aux détails techniques sur la virtualisation logicielle vs matérielle ; merci de voir le chapitre [10.3 Virtualisation matérielle vs. logicielle.](#mark10.3)  
Si votre processeur hôte supporte les fonctions pagination nested (AMD-V) ou EPT (Intel VT-x), vous pouvez compter sur une augmentation significative des performances en activant la pagination nested en plus de la virtualisation matérielle. Pour des détails techniques, voir le chapitre [10.6 Pagination nested et VPIDs.](#mark10.6)  

[Retour à la table des matières](#Table des matières)

# 3.5 Paramètres d'affichage<a id="mark3.5"></a>

Taille de la mémoire graphique Ceci définit la taille de la mémoire fournie par la carte graphique virtuelle et disponible pour l'invité, en Mo. Comme avec la mémoire globale, la quantité spécifiée sera affectée à partir de la mémoire résidente de l'hôte. À partir de la quantité de mémoire graphique, certaines résolutions et profondeur des couleurs peuvent être disponibles.  
L'interface graphique affichera un avertissement si la quantité de mémoire graphique est trop petite pour pouvoir passer la VM en mode plein écran. La valeur minimum dépend du nombre d'écrans virtuels, de la résolution de l'écran et de la profondeur des couleurs sur l'affichage hôte, ainsi que de l'activation de l'accélération 3D et de l'accélération graphique 2D. Une ébauche d'estimation est profondeur des couleurs / 8) x nombre de pixels verticalement x nombre de pixels horizontalement x nombre d'écrans = nombre de bytes. Comme indiqué ci-dessus, de la mémoire supplémentaire pourrait être nécessaire pour définir les accélérations d'affichage activées.  
Nombre d'écrans Avec ce paramètre, VirtualBox peut fournir plusieurs écrans virtuels à une machine virtuelle. Si un système d'exploitation invité (tel que Windows) supporte le rattachement à plusieurs écrans, VirtualBox peut affirmer que plusieurs écrans virtuels sont présents. 6 Jusqu'à 8 écrans virtuels peuvent ainsi être supportés.  
La sortie de plusieurs écrans virtuels peut être affichée sur l'hôte dans plusieurs fenêtres de VM placées côte à côte.  
Néanmoins, en mode plein écran ou transparent, ils utiliseront les écrans physiques disponibles connectés à l'hôte. Il s'en suit que pour que les modes plein écran et transparent fonctionnent avec plusieurs écrans, vous aurez besoin d'au moins autant d'écrans physiques que d'écrans virtuels configurés, sans quoi VirtualBox renverra une erreur. Vous pouvez configurer la relation entre les écrans hôte et invité en utilisant le menu Vue, en appuyant sur Touche hôte + Origine pendant que vous êtes en mode plein écran ou transparent.  
Merci de voir aussi le chapitre [14 Limites connues.](#mark14)  
Activer l'accélération 3D Si vous avez installé les Suppléments invité sur une machine virtuelle, vous pouvez sélectionner ici si l'invité devrait supporter la vidéo accélérée 3D.  
Merci de vous reporter au chapitre [4.4.1 Accélération 3D matérielle (OpenGL et Direct3D](#mark4.4.1) pour des détails.  
Activer l'accélération graphique 2D Si vous avez installé les Suppléments invité sur une machine virtuelle contenant Windows, vous pouvez sélectionner ici si l'invité doit supporter la vidéo accélérée 2D. Merci de vous reporter au chapitre [4.4.2 L'accélération matérielle 2D pour les invités Windows,](#mark4.4.2) pour les détails.  
Affichage distant Dans l'onglet "Affichage distant", si vous avez installé l'extension VirtualBox Remote Display Extension (VRDE), vous pouvez activer le serveur VRDP construit dans VirtualBox. Cela vous permet de vous connecter à la console de la machine virtuelle à distance avec n'importe quel client RDP standard tel que mstsc.exe fourni avec Microsoft Windows. Sur les systèmes Linux et Solaris, vous pouvez utiliser le programme standard open-source rdesktop. Ces fonctionnalités sont décrites en détail au chapitre [7.1 Affichage distant (VRDP support).](#mark7.1)  
Capture graphique Dans l'onglet "Capture graphique", vous pouvez activer la capture graphique d'une VM. Remarquez que cette fonction peut être activée/désactivée aussi pendant l'exécution de la VM.  

Avant VirtualBox version 2.2, la virtualisation logicielle était par défaut ; à partir de la version 2.2, VirtualBox activera la virtualisation matérielle par défaut pour les nouvelles machines virtuelles créées. (Les machines virtuelles existantes ne sont pas automatiquement modifiées pour des raisons de compatibilité, et vous pouvez bien sûr modifier le réglage par défaut pour chaque machine virtuelle.).  

[Retour à la table des matières](#Table des matières)

# 3.6 Paramètres du stockage<a id="mark3.6"></a>

La catégorie "Stockage" des paramètres de la VM vous permet de connecter des images et des lecteurs de disque dur, de CD/DVD et de disquette virtuelles à votre machine virtuelle.  
Dans un vrai PC, ce qu'on appelle les "contrôleurs de stockage" connectant des lecteurs de disque physiques au reste de l'ordinateur. De la même façon, VirtualBox présente des contrôleurs de stockage virtuels à une machine virtuelle. Sous chaque contrôleur, vous voyez les périphériques virtuels connectés (disques durs, lecteur CD/DVD ou disquette).  

Note: Cette section ne peut vous donner qu'une brève introduction aux paramètres de stockage de VirtualBox. Comme VirtualBox vous donne un choix énorme d'options dans cette zone, nous avons consacré tout un chapitre de ce guide de l'utilisateur à l'explication de tous les détails : merci de voir le chapitre [5 Le stockage virtuel.](#mark5)  

Si vous avez utilisé l'assistant "Créer une VM" pour créer une machine, vous verrez normalement quelque chose comme suit :  

Selon le type de système d'exploitation invité que vous avez sélectionné quand vous avez créé la VM, la présentation classique des périphériques de stockage dans une nouvelle VM est ainsi :  

* Vous verrez un contrôleur IDE, auquel on a connecté un lecteur CD/DVD virtuel (sur le "deuxième port maître") du contrôleur IDE).  
* Vous verrez aussi un contrôleur SATA controller, qui est un type plus moderne de contrôleur de stockage pour un transport de données du disque dur plus rapide, où on a rattaché les disques durs virtuels. Au départ, vous aurez en principe un disque comme celui-ci, mais vous pouvez en avoir plusieurs, chacun représenté par un fichier image de disque (fichiers (VDI, dans ce cas).  

Si vous avez créé votre VM avec une version antérieure de VirtualBox, la présentation des stockages par défaut peut vrier Il se peut donc que vous ayez un contrôleur IDE auquel on a connecté le lecteur CD/DVD et les disques durs. Cela pourrait aussi être le cas si vous avez sélectionné un ancien type de système d'exploitation quand vous avez créé la VM. Comme les anciens systèmes d'exploitation ne supportent pas le SATA sans pilotes supplémentaires, VirtualBox veillera à ce qu'aucun périphérique de ce type ne soit présent au départ. Merci de voir le chapitre [5.1 Les contrôleurs de disque dur : IDE, SATA (AHCI), SCSI, SAS](#mark5.1) pour des informations supplémentaires.  
VirtualBox fournit aussi un contrôleur amovible spécial : vous ne pouvez pas y ajouter d'autres périphériques que des lecteurs amovibles. Les périphériques amovibles virtuels comme les lecteurs CD/DVD virtuels peuvent être connectés soit à un lecteur amovible hôte (si vous en avez un), soit associés à une image de disque qui doit alors être au format RAW.  
Vous pouvez modifier librement ces connexions de médias. Par exemple, si vous copier des fichiers depuis un autre disque dur virtuel que vous avez créé, vous connecter ce disque comme deuxième disque dur, vous pourriez aussi ajouter un deuxième lecteur CD/DVD virtuel ou modifier l'endroit où ces éléments sont branchés. Les options suivantes sont disponibles:  

* Pour ajouter un autre disque dur virtuel ou un lecteur CD/DVD ou de disquette, sélectionnez un contrôleur de stockage auquel l'ajouter (IDE, SATA, SCSI, SAS, contrôleur amovible), puis cliquez sur le bouton "ajouter un disque" sous l'arborescence. Vous pouvez alors sélectionner soit "Ajouter un périphérique CD/DVD" soit "Ajouter un disque dur".  
(Si vous avez cliqué sur un contrôleur amovible, vous pouvez plutôt ajouter un lecteur amovible.) Sinon, effectuez un clic droit sur le contrôleur de stockage et sélectionnezy un élément de menu.  
Sur la partie droite de la fenêtre, vous pouvez alors définir ce qui suit:  
1. Vous pouvez sélectionner à quel slot de périphérique du contrôleur devrait se connecter le disque virtuel. Les contrôleurs IDE ont quatre slots qu'on appelle traditionnellement le "maître primaire", "esclave primaire" , "maître secondaire" et "esclave secondaire". Au contraire, les contrôleurs SATA et SCSI vous offrent jusqu'à 30 slots pour connecter des périphériques virtuels.  
2. Vous pouvez sélectionner le fichier image à utiliser.  
	*	 Pour les disques durs virtuels, un ascenseur en liste déroulante apparaît à droite, vous offrant la sélection soit de fichier de disque dur virtuel en utilisant une boîte de dialogue fichier standard soit de créer un nouveau disque dur (fichier image), qui ouvrira l'assistant "Créer un nouveau disque", décrite au chapitre [1.7 Créer votre première machine virtuelle.](#mark1.7)  
Pour des détails sur les types de fichiers images supportés, merci de voir le chapitre [5.2 Fichiers images de disque (VDI, VMDK, VHD, HDD).](#mark5.2)  
– Pour les lecteurs CD/DVD virtuels, les fichiers image seront en général au format standard ISO. La plupart du temps, vous sélectionnerez cette option quand vous installerez un système d'exploitation à partir d'une image ISO que vous avez récupéré sur Internet. Par exemple, la plupart des distributions Linux sont disponibles par ce biais.  
Pour les lecteurs CD/DVD virtuels, les options suivantes sont disponibles:  
	*	 Si vous sélectionnez "Lecteur hôte" dans la liste, le périphérique physique de l'ordinateur hôte sera connecté à la VM, pour que le système d'exploitation invité puisse lire et écrire sur votre périphérique physique. Cela sert, par exemple, si vous voulez installer Windows depuis un vrai CD d'installation.  
Dans ce cas, sélectionnez votre lecteur hôte dans la liste déroulante affichée.  
Si vous voulez écrire (graver) des CDs ou des DVDs en utilisant le lecteur hôte, vous devez également activer l'option "Passthrough" ; voir chapitre [5.9 Support des CD/DVD.](#mark5.9)  
	*	 Si vous sélectionnez " Supprimer un disque du lecteur virtuel", VirtualBox présentera un lecteur CD/DVD vide à l'invité dans lequel on a inséré le média.  
* Pour supprimer une connexion,, sélectionnez-la et cliquez sur l'icône "Supprimer" tout en bas (ou effectuez un clic droit dessus et sélectionnez l'élément du menu).  
On peut changer de média amovible (de CD/DVDs et de disquettes) pendant que l'invité fonctionne. Comme la boîte de dialogue "Paramètres" n'est pas disponibles à ce moment-là, vous pouvez aussi accéder à ces paramètres à partir du menu "Périphériques" de la fenêtre de votre machine virtuelle.  

Le support multi-écrans a été ajouté avec VirtualBox 3.2.  

[Retour à la table des matières](#Table des matières)

# 3.7 Paramètres de son<a id="mark3.7"></a>

La section "Son" de la fenêtre de paramètres d'une machine virtuelle détermine si la VM verra une carte son connectée et si la sortie son se fait en dur sur le szstème hôte.  
Si le son est activé pour un invité, vous pouvez choisir entre l'émulation d'un contrôleur Intel AC'97, un contrôleur Intel HD Audio 7 ou un e carte SoundBlaster 16. Dans tous les cas, vous pouvez sélectionner le pilote son que VirtualBox utilisera sur l'hôte.  

Le support d'Intel HD Audio a été ajouté avec VirtualBox 4.0 car Windows 7 (versions 32 bits et 64 bits) ainsi que Windows Vista 64 bits ne supportent pas le contrôleur Intel AC'97.  

Sur un hôte Linux, selon votre configuration hôte, vous pouvez aussi choisir entre les sous-systèmes OSS, ALSA ou the PulseAudio sur les distributions Linux récentes (Fedora 8 et supérieur, Ubuntu 8.04 et supérieur), le sous-système PulseAudio devrait être privilégié.  

[Retour à la table des matières](#Table des matières)

# 3.8 Paramètres réseau<a id="mark3.8"></a>

La section "Réseau" de la fenêtre des paramètres d'une machine virtuelle vous permet de configurer la façon dont VirtualBox présente des cartes réseaux virtuelles à votre VM et dont elles agissent.  
Quand vous créez une machine virtuelle la première fois, VirtualBox active par défaut une carte réseau virtuelle et sélectionne le mode "Network Address Translation" (NAT) pour celle-ci.  
De cette manière, l'invité peut se connecter au monde extérieur en utilisant le réseau de l'hôte et le monde extérieur peut se connecter aux services de l'invité que vous choisissez de rendre visibles à l'extérieure de la machine virtuelle.  
Ce comportement par défaut convient probablement à 95% des utilisateurs de VirtualBox.  
Cependant, VirtualBox est extrêmement flexible quant à la manière de virtualiser le réseau. Il supporte de nombreuses cartes réseaux par machine virtuelle, les quatre premières peuvent être configurées en détail dans la fenêtre du gestionnaire. Des cartes réseaux supplémentaires peuvent être configurées en ligne de commande avec VBoxManage.  
Du fait de la large gamme d'options disponibles, nous avons consacré un chapitre complet de ce guide à la configuration réseau ; merci de voir le chapitre [6 Le réseau virtuel.](#mark6)  

[Retour à la table des matières](#Table des matières)

# 3.9 Ports série<a id="mark3.9"></a>

VirtualBox supporte pleinement les ports série virtuels d'une machine virtuelle d'une manière facile à utiliser.  
Jadis, les PC originels d'IBM, les ordinateurs personnels (Personal Computers) étaient équipés d'un ou deux ports série (appelés aussi des ports COM par DOS et Windows). Les ports série sont généralement utilisés avec des modems et certaines souris se connectaient en port série avant que l'USB ne ne devienne omnipotent.  
Si les ports série ne sont plus aussi omniprésents qu'avant, il leur reste encore des cas d'usage importants. Par exemple, on peut utiliser des ports série pour paramétrer un réseau primitif par un câble null-modem, au cas où Ethernet n'est pas disponible. De plus, les ports série sont indispensables pour les programmeurs système ayant besoin de faire du débogage de noyau, car les logiciels de débogage de noyaux interagissent avec les développeurs par le port série. Avec les ports série virtuels, les programmeurs système peuvent faire du débogage de noyau sur une machine virtuelle plutôt qu'un vrai ordinateur où ils se connecteraient.  
Si un port série virtuel est activé, le système d'exploitation invité voit un périphérique UART16550A compatible standard. La réception et la transmission de données est supportée. La manière dont le port série virtuel est alors connecté à l'hôte peut se configurer et les détails dépendent de votre système d'exploitation hôte.  
Vous pouvez utiliser soit l'outil graphique, soit VBoxManage en ligne de commande pour paramétrer des ports série virtuels. Pour le dernier cas, merci de vous reporter au  chapitre [8.8 VBoxManage modifyvm;](#mark8.8) dans cette section, cherchez les options --uart et --uartmode.  
Dans le premier cas, vous pouvez configurer jusqu'à deux ports série virtuels par machine virtuelle. Pour chaque périphérique, vous devrez déterminer   

1. le type de port série que la machine virtuelle devrait voir en sélectionnant un I/O base address and interrupt (IRQ). Pour ceux-ci, nous vous recommandons d'utiliser les valeurs traditionnelles 9, qui sont :  
a) COM1: I/O base 0x3F8, IRQ 4  
b) COM2: I/O base 0x2F8, IRQ 3  
c) COM3: I/O base 0x3E8, IRQ 4  
d) COM4: I/O base 0x2E8, IRQ 3  
2. Puis, vous devrez déterminer à quoi ce port série virtuel devrait être connecté. Pour chaque port série virtuel, vous avez les options suivantes :  
* Vous pouvez choisir que le port série virtuel soit "déconnecté", ce qui signifie que l'invité verra le périphérique mais il se comportera comme si aucun câble n'y avait été connecté.  
* Vous pouvez connecter le port série virtuel à un port série existant sur votre hôte.  
(Sur un hôte Windows, cela sera un nom comme COM1 ; sur des hôtes Linux ou Solaris, ce sera un nœud de périphérique comme /dev/ttyS0). VirtualBox redirigera alors simplement toutes les données reçues et envoyées sur le port série virtuel vers le périphérique physique.  
* Vous pouvez dire à VirtualBox de connecter le port série virtuel à un tunnel logiciel sur l'hôte. Cela dépend de votre système d'exploitation hôte :  
– Sur un hôte Windows, les données seront envoyées et reçues par un tunnel nommé. Le nom du tunnel doit être au format `\.\pipe\<nom>` où `<name>` devrait identifier la machine virtuelle mais vous êtes libre dans votre choix.  
Pour rediriger du trafic série, vous pouvez utiliser un programme d'aide appelé VMware Serial Line Gateway, disponible en téléchargement sur <http://www.l4ka.org/91.php>  Cet outil fournit un mode serveur fixé nommé tunnel sur `\.\pipe\vmwaredebug` et il connecte les connexions TCP entrantes sur le port 567 avec le tunnel nommé.  
– Sur un hôte Mac, Linux ou Solaris, un socket locale est plutôt utilisée. Le nom de fichier du socket doit être choisi de telle sorte que l'utilisateur de VirtualBox ait assez de droits pour créer et écrire dessus. Le répertoire `/tmp` est souvent un bon candidat.  
Sur Linux, plusieurs outils peuvent se connecter à un socket de domaine local ou en créer un een mode serveur. L'outil le plus flexible est socat et il est disponible dans beaucoup de distributions.  
Dans ce cas, vous pouvez configurer si VirtualBox devrait créer le tunnel nommé (ou, sur les hôtes non Windows, le socket de domaine local) lui-même ou si VirtualBox devrait supposer que le tunnel (ou le socket) existe déjà. Avec les options en ligne de commande de VBoxManage, ceci est désigné respectivement comme le mode "serveur" ou "client".  
Pour une connexion directe entre deux machines virtuelles, (ce qui correspond à un câble null-modem), configurez simplement une VM pour créer un tunnel/socket et un autre pour s'y relier.  
* Vous pouvez envoyer la sortie du port série virtuel vers un fichier. Cette option est très utile pour récupérer des sorties de diagnostic sur un invité. Vous pouvez utiliser n'importe quel fichier dans ce but, tant que l'utilisateur de VirtualBox a assez de droits pour créer et écrire dans le fichier.  

Voir, par exemple, <http://en.wikipedia.org/wiki/COM_(hardware_interface)>  

Vous pouvez configurer jusqu'à deux ports série par machine virtuelle, mais vous pouvez choisir n'importe quel numéro de port hors de ceux ci-dessus. Cependant, les ports série ne sont pas capables de partager de manière fiable des interruptions ; si deux ports doivent être utilisés en même temps, ils doivent utiliser différents niveaux d'interruption, par exemple COM1 et COM2, mais pas COM1 et COM3.  

Le support du port série a été ajouté avec VirtualBox 1.5.  

[Retour à la table des matières](#Table des matières)

# 3.10 Support USB<a id="mark3.10"></a>

# 3.10.1 Paramètres USB<a id="mark3.10.1"></a>

La section "USB" de la fenêtre de paramètres d'une machine virtuelle vous permet de configurer le support USB sophistiqué de VirtualBox.  
VirtualBox peut permettre à des machines virtuelles d'accéder aux périphériques USB directement sur votre hôte. Pour cela, VirtualBox présente au système d'exploitation invité un contrôleur USB virtuel. Dès que le système invité démarre en utilisant un périphérique USB, il apparaîtra comme indisponible sur l'hôte.  

Note:  

1. Faites attention avec les périphériques USB utilisés sur l'hôte ! Par exemple, si vous permettez à votre invité de se connecter à votre disque dur USB actuellement monté sur l'hôte, lorsque l'invité est actif, il sera déconnecté de l'hôte sans débranchement propre. Cela peut entraîner une perte de données.  
2. Les hôtes Solaris ont quelques limites connues avec le support USB ; merci de voir le chapitre [14 Limites connues.](#mark14)  

Au-delà de permettre un accès de l'invité à vos périphériques USB locaux, VirtualBox permet même à vos invités de se connecter à des périphériques USB distants en utilisant le VirtualBox Remote Desktop Extension (VRDE). Pour des détails sur cela, voir le chapitre [7.1.4 USB distant.](#mark7.1.4)  
Dans la boîte de dialogue des paramètres, vous pouvez d'abord configurer si l'USB est disponible dans l'invité et éventuellement activer le contrôleur USB 2.0 (EHCI) pour l'invité.  
Si tel est le cas, vous pouvez déterminer en détail les périphériques disponibles. Pour ce faire, vous devez créer ce qu'on appelle des "filtres" en spécifiant certaines propriétés du périphérique USB.  

Note: Le contrôleur EHCI est inclu dans une extension de VirtualBox qu'il faut installer séparément. Voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) pour plus d'informations.  

Un clic sur le bouton "+" à droite de la fenêtre "Filtres des périphériques USB" crée un nouveau filtre. Vous pouvez donner au filtre un nom (pour le retrouver plus tard) et spécifier les critères du filtre. Plus vous spécifiez ce critères, plus les périphériques seront sélectionnés avec précision. Par exemple, si vous ne spécifiez qu'un ID de fabricant 046d, tous les périphériques fabriqués par Logitech seront disponibles pour l'invité. Si vous complétez tous les champs, le filtre ne s'appliquera plutôt qu'à un modèle de périphérique particulier d'un fabricant particulier et pas aux autres périphériques du même type ayant un autre numéro de série ou de révision.  
Dans le détail, les critères suivants sont disponibles:  

1. ID du fabricant et du produit. Avec l'USB, chaque fabricant de produits USB a un numéro d'identification unique au monde, l'"ID fabricant". De la même façon, chaque ligne de produits se voit affecté un numéro "ID de produit". Les deux numéros sont écrits en général en hexadécimal (c'est-à-dire qu'ils se composent des chiffres 0 à 9 et des lettres A à F), et deux-points séparant l'ID du fabricant et du produit. Par exemple, 046d:c016 signifie le fabricant Logitech et le produit Souris optique à roulette M-UV69a".  
Sinon, vous pouvez aussi spécifier un nom de "fabricant" et de "Produit".  
Pour lister tous les périphériques USB connectés à votre machine hôte avec leurs IDs de fabricant et de produit respectifs, vous pouvez utiliser la commande suivante (voir chapitre [8 VBoxManage:](#mark8)  
`VBoxManage list usbhost`  
Sur Windows, vous pouvez aussi voir tous les périphériques USB connectés à votre système dans le gestionnaire de périphériques. Sur Linux, vous pouvez utiliser la commande `lsusb`.  
2. Numéro de série. Si l'ID du fabricant et du produit sont déjà très spécifiques pour identifier des périphériques USB, si vous avez deux périphériques identiques de la même gamme et de la même ligne de produits, vous aurez aussi besoin de leur numéro de série pour les filtrer correctement.  
3. Distant. Ce paramètre spécifie si le périphérique est seulement en local, distant (par VRDP), ou autrement.  

Sur un hôte Windows, vous devrez débrancher et reconnecter un périphérique USB pour l'utiliser après avoir créé un filtre pour lui.  
Par exemple, vous pourriez créer un nouveau filtre USB et spécifier un ID fabricant de 046d (Logitech, Inc), a Un index de fabricant à 1, et "non distant". Tous les périphériques USB de l'hôte fabriqués par Logitech, Inc ayant un numéro d'index 1 seront visibles pour le système invité.  
Plusieurs filtres peuvent sélectionner un périphérique unique – par exemple, un filtre qui sélectionne tous les périphériques Logitech et un qui sélectionne une webcam en particulier.  
Vous pouvez désactiver des filtres sans les supprimer en cliquant dans la case à cocher à côté du nom du filtre.  

[Retour à la table des matières](#Table des matières)

# 3.10.2 Notes d'implémentation pour les hôtes Windows et Linux<a id="mark3.10.2"></a>

Sur les hôtes Windows, un pilote de périphérique en mode noyau fournit un support proxy USB.  
Il implémente un moniteur USB, qui permet à VirtualBox de capturer des périphériques quand ils sont branchés et un pilote de périphérique USB qui amène les périphériques USB à une machine virtuelle.  
VirtualBox antérieures à 1.4.0, un redémarrage du système n'est plus nécessaire après l'installation du pilote. De plus, vous n'avez plus besoin de rebrancher des périphériques pour que VirtualBox les gère.  
Sur les hôtes Linux récents, VirtualBox accède aux périphériques USB par des fichiers spéciaux du système de fichiers. Quand VirtualBox est installé, ils sont rendus disponibles pour tous les utilisateurs dans le groupe système vboxusers. Pour pouvoir accéder à l'USB à partir de systèmes invités, assurez-vous d'être membre de ce groupe.  
Sur les anciens hôtes Linux, on accède aux périphériques USB en utilisant le système de fichiers usbfs. Donc, l'utilisateur qui exécute VirtualBox a besoin des droits en lecture et écriture sur le système de fichiers USB. La plupart des distributions fournissent un groupe (comme usbusers) où doit être ajouté l'utilisateur VirtualBox. En outre, VirtualBox ne peut pas faire un proxy avec les périphériques USB de la machine virtuelle qui ne sont pas gérés par un pilote USB de l'hôte Linux. L'entrée `Driver= de /proc/bus/usb/devices` vous montrera les périphériques actuellement reconnus. Merci de vous reporter aussi au chapitre [12.7.7 L'USB ne fonctionne pas](#mark12.7.7) pour des détails sur usbfs.  

[Retour à la table des matières](#Table des matières)

# 3.11 Dossiers partagés<a id="mark3.11"></a>

Les dossiers partagés vous permettent d'échanger facilement des données entre une machine virtuelle et votre hôte. Cette fonctionnalité exige que les suppléments invité de VirtualBox soient installés dans une machine virtuelle et ceci est décrit en détail au chapitre [4.3 Dossiers partagés.](#mark4.3)  

[Retour à la table des matières](#Table des matières)

# 3.12 Autre firmware (EFI)<a id="mark3.12"></a>

À partir de la version 3.1, VirtualBox inclut un support expérimental pour l'Extensible Firmware Interface (EFI), qui est un nouveau standard industriel conçu pour remplacer éventuellement, à terme, le BIOS traditionnel comme interface pour les ordinateurs faisant du bootstrapping et certains services système.  
Par défaut, VirtualBox utilise le firmware BIOS pour les machines virtuelles. Pour utiliser l'EFI pour une machine virtuelle donnée, vous pouvez activer l'EFI dans la boîte de dialogue "Paramètres" de la machine (voir chapitre [3.4.1 Onglet "Carte mère").](#mark3.4.1) Sinon, utilisez l'interface en ligne de commande VBoxManage comme ceci:  

`VBoxManage modifyvm "nom VM" --firmware efi`  

Pour revenir à l'utilisation du BIOS, utilisez:  

`VBoxManage modifyvm "nom VM" --firmware bios`  

Un utilisateur notable de l'EFI est Mac OS X d'Apple, mais les Linux (tels que Fedora 11) et Windows récents (à partir de Vista) offrent des versions spéciales qu'on peut démarrer en utilisant l'EFI.  
Une autre utilisation possible de l'EFI dans VirtualBox est le développement et le test d'applications EFI, sans démarrer d'OS.  
Remarquez que le support EFI de VirtualBox est expérimental et il sera amélioré au fur et à mesure des progrès d'EFI et de son extension. Mac OS X et Linux sont connus pour très bien fonctionner, les invités Windows sont actuellement incapables de démarrer avec l'implémentation EFI de VirtualBox.  

[Retour à la table des matières](#Table des matières)

# 3.12.1 Modes graphiques dans EFI<a id="mark3.12.1"></a>

EFI fournit deux interfaces graphiques distinctes : GOP (Graphics Output Protocol) et UGA (Universal Graphics Adapter). Mac OS X utilise GOP, tandis que Linux a tendance à utiliser UGA.  
VirtualBox fournit une option de configuration pour contrôler la taille du framebuffer pour les deux interfaces.  
Pour contrôler GOP, utilisez la commande VBoxManage suivante:  

`VBoxManage setextradata "nom VM" VBoxInternal2/EfiGopMode N`  

Où N peut être 0,1,2,3,4, respectivement pour des résolutions d'écran 640x480, 800x600, 1024x768, 1280x1024, 1440x900.  
Pour modifier la résolution UGA:  

`VBoxManage setextradata "nom VM" VBoxInternal2/UgaHorizontalResolution 1440`  
`VBoxManage setextradata "nom VM" VBoxInternal2/UgaVerticalResolution 900`  

Le mode graphique pour GOP et UGA ne peut être modifié que quand la VM est éteinte et il reste permanente jusqu'à ce qu'il soit modifié.  

[Retour à la table des matières](#Table des matières)

# 4 Les suppléments invité<a id="mark4"></a>

Le chapitre précédent traitait de la manière de commencer avec VirtualBox et d'installer des systèmes d'exploitation dans une machine virtuelle. Pour une utilisation interactive et sérieuse, les suppléments invité de VirtualBox vous faciliteront beaucoup la vie, en offrant une intégration approfondie entre l'hôte et l'invité et en améliorant la performance d'interactivité des systèmes invités. Ce chapitre décrit en détail les suppléments invité.  

[Retour à la table des matières](#Table des matières)

# 4.1 Introduction<a id="mark4.1"></a>

Comme indiqué au chapitre [1.2 Un peu de terminologie,](#mark1.2) les suppléments invité sont conçus pour s'installer à l'intérieur d'une machine virtuelle après qu'un système d'exploitation a été installé. Il s'agit de pilotes de périphériques et d'applications système qui optimisent le système d'exploitation invité pour une meilleure performance et plus d'utilisabilité. Merci de voir le chapitre [3.1 Systèmes d'exploitation invités supportés pour la version 4.3.13](#mark3.1) pour des détails sur les systèmes d'exploitation entièrement supportés avec les suppléments invité par VirtualBox.  
Vous pouvez également voir le chapitre [1.4.1 Systèmes d'exploitation invités supportés](#mark1.4.1) qui contient les dernières informations déjà mises à jour.  
Les suppléments invité de VirtualBox pour tous les systèmes d'exploitation invités supportés sont fournis sous forme d'un fichier unique d'image de CD-ROM qui s'appelle VBoxGuestAdditions.iso. Ce fichier image se trouve dans le répertoire d'installation de VirtualBox. Pour installer les suppléments invité sur une VM en particulier, vous montez ce fichier ISO dans votre VM comme un CD-ROM virtuel et vous installez à partir de là.  
Les suppléments invité offrent les fonctions suivantes:  

Intégration du pointeur de souris Pour dépasser la limite du support de la souris décrite au chapitre [1.8.2 Capturer et rendre le clavier et la souris,](#mark1.8.2) ceci vous offre un support de la souris transparente. Vous n'aurez qu'un pointeur de souris et l'appui sur la touche hôte n'est plus nécessaire pour "libérer" la souris de sa capture par l'OS invité. Pour que cela fonctionne, un pilote de souris spécial est installé dans l'invité pour communiquer avec le pilote de la "vraie" souris de votre hôte et il déplace le pointeur de la souris de l'invité en conséquence.  
Dossiers partagés Ceci fournit une manière facile d'échanger des fichiers entre l'hôte et l'invité. Tout comme le voisinage réseau Windows ordinaire, vous pouvez dire à VirtualBox de traiter un répertoire particulier de l'hôte comme un dossier partagé et VirtualBox le rendra disponible pour le système d'exploitation invité en tant que partage réseau, que l'invité ait ou non un réseau. Pour les détails, merci de vous reporter au chapitre [4.3 Dossiers partagés.](#mark4.3)  
Meilleur support graphique Si la carte graphique virtuelle émulée par VirtualBox pour tous les systèmes d'exploitation invités offre toutes les fonctions de base, les pilotes graphiques personnalisés installés avec les suppléments invité vous offrent ces modes graphiques supplémentaires élevés et non standards ainsi qu'une performance graphique accélérée.  
De plus, avec les invités Windows, Linux et Solaris, vous pouvez redimensionner la fenêtre de la machine virtuelle si les suppléments invité sont installés. La résolution graphique de l'invité sera automatiquement ajustée (comme si vous aviez entré à la main une résolution de votre choix dans les paramètres d'affichage de l'invité). Merci de voir aussi le chapitre [1.8.5 Redimensionner la fenêtre de la machine.](#mark1.8.5)  
Enfin, si les suppléments invité sont installés, les graphismes 3D et 2D des applications invités peuvent être accélérés ; voir le chapitre [4.4 L'accélération graphique matérielle.](#mark4.4)  
Fenêtres transparentes Avec cette fonctionnalité, les fenêtres individuelles affichées sur le bureau de la machine virtuelle peuvent se placer sur le bureau de l'hôte comme si l'application à leur origine fonctionnait vraiment sur l'hôte. Voir chapitre [4.5 Fenêtres transparentes](#mark4.5) pour les détails.  
Canaux de communication hôte/invité génériques Les suppléments invité vous permettent de contrôler et de surveiller l'exécution de l'invité autrement que comme indiqué ci-dessus.  
Ce qu'on appelle les "propriétés invité" fournit un mécanisme générique à base de chaînes pour échanger des bits de données entre un invité et un hôte, certains d'entre eux ayant des significations spéciales pour contrôler et surveiller l'invité;; voir le chapitre [4.6 Propriétés invité](#mark4.6) pour les détails.  
En outre, des applications peuvent être démarrées dans l'invité à partir de l'hôte ; voir le chapitre [4.7 Contrôle de l'invité.](#mark4.7)  
Synchronization du temps Quand les suppléments invité sont installés, VirtualBox peut s'assurer que l'horloge système de l'invité est mieux synchronisée avec celle de l'hôte.  
Pour plusieurs raisons, il se peut que l'horloge de l'invité tourne à un rythme légèrement plus lent que celle de l'hôte. L'hôte pourrait recevoir des mises à jour par NTP et sa propre horloge pourrait ne pas tourner de manière rectiligne. Une VM pourrait aussi être mise en pause, ce qui arrête le cours du temps dans l'invité sendant une durée plus ou moins longue. Quand le temps des horloges séparées entre l'invité et l'hôte ne diffère que légèrement, le service de synchronisation du temps essaie d'ajuster progressivement et doucement l'heure de l'invité, par petites accélérations, soit pour "ratraper", soit pour "perdre" du temps. Quand la différence est trop importante (par exemple si la VM a été mise en pause pendant des heures puis restaurée d'un état sauvegardé), l'heure de l'invité est modifiée immédiatement sans ajustement progressif.  
Les suppléments invité resynchroniseront l'heure régulièrement. Voir le chapitre [9.14.3 Peaufiner les paramètres de synchronisation du temps des suppléments invité](#9.14.3) pour savoir comment configurer les paramètres du mécanisme de synchronisation du temps.  
Presse-papier partagé Quand les suppléments invité sont installés, le presse-papier du système d'exploitation invité peut être éventuellement partagé avec votre système d'exploitation hôte ; voir le chapitre [3.3 Paramètres généraux.](#3.3)  
Connexions automatiques (passer des droits) Pour les détails, merci de voir le chapitre [9.2 Identifications automatiques dans l'invité.](#mark9.2)  

Chaque version de VirtualBox, même celles mineures, inclut sa propre version des suppléments invité. Si les interfaces par lesquelles le cœur de VirtualBox communique avec les suppléments invité sont stables pour que les suppléments invité déjà installés dans une VM continuent de fonctionner, quand VirtualBox est mis à jour sur l'hôte, pour de meilleurs résultats, il est recommandé d'avoir des suppléments invité de la même version.  
À partir de VirtualBox 3.1, les suppléments invité pour Windows et Linux vérifient donc automatiquement s'ils doivent être mis à jour. Si l'hôte fait tourner une version plus récente de VirtualBox que celle des suppléments invité, une notification avec des instructions complémentaires s'affiche dans l'invité.  
Pour désactiver cette vérification des mises à jour des suppléments invité dans une machine virtuelle donnée, définissez la valeur de la propriété invité `/VirtualBox/GuestAdd/CheckHostVersion` à 0 ; voir chapitre [4.6 Propriétés invité](#mark4.6) page 81 pour des détails.  

[Retour à la table des matières](#Table des matières)

# 4.2 Installer et maintenir les suppléments invité<a id="mark4.2"></a>

Les suppléments invité sont disponibles pour les machines virtuelles faisant fonctionner Windows, Linux, Solaris ou OS/2. Les sections suivantes décrivent en détail les spécificités de chaque variante.  

[Retour à la table des matières](#Table des matières)

# 4.2.1 Suppléments invité pour Windows<a id="mark4.2.1"></a>

Les suppléments invité de VirtualBox pour Windows sont conçus pour s'installer dans une machine virtuelle exécutant un système d'exploitation Windows. Les versions suivantes des invités Windows sont supportées :

* Microsoft Windows NT 4.0 (tous les packs service)
* Microsoft Windows 2000 (tous les packs service)
* Microsoft Windows XP (tous les packs service)
* Microsoft Windows Server 2003 (tous les packs service)
* Microsoft Windows Server 2008
* Microsoft Windows Vista (toutes les éditions)
* Microsoft Windows 7 (toutes les éditions)
* Microsoft Windows 8 (toutes les éditions)
* Microsoft Windows Server 2012

[Retour à la table des matières](#Table des matières)

# 4.2.1.1 Installation<a id="mark4.2.1.1"></a>

Dans le menu "Périphériques" de la barre de menu de la machine virtuelle, VirtualBox a un élément de menu tout prêt nommé "Insérer l'image du CD des suppléments invité", qui monte le fichier ISO des suppléments invité dans votre machine virtuelle. L'invité Windows devrait alors démarrer automatiquement l'installeur des suppléments invité qui installe les suppléments invité dans votre invité Windows. Les autres systèmes d'exploitation invités (ou si le démarrage automatique d'un logiciel sur CD est désactivé) exigent un démarrage manuel de l'installeur.  

Note: Pour que l'accélération Direct3D de base fonctionne dans un invité Windows, vous devez installer les suppléments invité en "Mode sans échec". Cela ne vaut pas pour le pilote graphique expérimental WDDM Direct3D disponible pour les invités Vista et Windows 7, voir chapitre [14 Limites connues,](#mark14) pour les détails.  

Le pilote expérimental WDDM a été ajouté avec VirtualBox 4.1.  

Si vous préférez monter les suppléments à la main, vous pouvez suivre les étapes suivantes:  

1. Démarrez la machine virtuelle dans laquelle vous avez installé Windows.  
2. Sélectionnez "Monter un CD/DVD-ROM" dans le menu "Périphériques" de la barre de menus de la machine virtuelle, puis "image CD/DVD-ROM". Ceci ouvre le gestionnaire de médias virtuels décrit au chapitre [5.3 Le gestionnaire de médias virtuels.](#mark5.3)  
3. Dans le gestionnaire de médias virtuels, appuyez sur le bouton "Ajouter" et parcourez le système de fichiers de votre hôte pour trouver le fichier VBoxGuestAdditions.iso:  
* Sur un hôte Windows, vous pouvez trouver ce fichier dans le répertoire d'installation de VirtualBox (en général sous `C:\Program files\Oracle\VirtualBox )`.  
* Sur les hôtes Mac OS X, vous pouvez trouver ce fichier dans le groupe de l'application VirtualBox. (Effectuez un clic droit sur l'icône de VirtualBox dans Chercheur et choisissez Afficher le contenu du paquet. S'y trouve le fichier, dans le dossier `Contents/MacOS.)`  
* Sur un hôte Linux, vous pouvez trouver ce fichier dans le dossier additions sous lequel vous avez installé VirtualBox (normalement, `/opt/VirtualBox/)`.
* Sur les hôtes Solaris, vous pouvez trouver ce fichier dans le dossier additions sous lequel vous avez installé VirtualBox (normalement `/opt/VirtualBox)`.  
4. De retour dans le gestionnaire de médias virtuels, sélectionnez ce fichier ISO et appuyez sur le bouton "Sélectionner". Ceci montera le fichier ISO et le présentera à votre invité Windows comme un CD-ROM.  
Sauf si vous avez désactivé la fonction "Exécution automatique" de votre invité Windows, Windows démarrera automatiquement le programme d'installation des suppléments invité de VirtualBox depuis l'ISO Additions. Si vous avez désactivé la fonction d'exécution automatique, choisissez `VBoxWindowsAdditions.exe` dans le lecteur `CD/DVD` dans l'invité pour démarrer l'installeur.  
L'installeur ajoutera plusieurs pilotes de périphériques à la base de données des pilotes Windows puis appellera l'assistant Nouveau matériel détecté.  
Selon votre configuration, il pourrait afficher des avertissements selon lequel les pilotes n'ont pas de signature numérique. Vous devez les confirmer afin de continuer l'installation et d'installer correctement les suppléments.  
Après l'installation, redémarrez votre système d'exploitation invité pour activer les suppléments.  

[Retour à la table des matières](#Table des matières)

# 4.2.1.2 Mettre à jour les suppléments invité Windows<a id="mark4.2.1.2"></a>

Les suppléments invité Windows peuvent être mis à jour en lançant de nouveau le programme d'installation comme décrit précédemment. Ceci remplacera les pilotes des suppléments précédents par des versions mises à jour.  
Vous pouvez aussi ouvrir le gestionnaire de périphériques de Windows et sélectionner "Mettre à jour le pilote..." pour deux périphériques:  

1. l'adaptateur graphique de VirtualBox et  
2. le périphérique système VirtualBox.  

Pour chacun d'eux, choisissez de fournir votre propre pilote et si vous avez un disque utilisez  celui-ci pour orienter l'assistant sur le lecteur de CD-ROM contenant les suppléments invité.  

[Retour à la table des matières](#Table des matières)

# 4.2.1.3 Installation sans efforts des suppléments invité<a id="mark4.2.1.3"></a>

Avant d'effectuer une installation sans efforts des suppléments invité de VirtualBox sur un invité Windows, il doit y avoir absolument des Oracle CA (Certificate Authority) installés, pour empêcher des fenêtres d'intervention de l'utilisateur qui contrarieront une installation silencieuse.  

Note: Sur certaines versions de Windows comme Windows 2000 et Windows XP les fenêtres d'intervention de l'utilisateur mentionnées ci-dessus s'afficheront toujours, même après avoir importé les certificats d'Oracle.  

Depuis VirtualBox 4.2, vous pouvez installer ces certificats CA sur un invité Windows de façon automatisée en utilisant l'outil VBoxCertUtil.exe qui se trouve sur le CD d'installation des suppléments invité dans le dossier cert:  

* Connectez-vous en tant qu'administrateur sur l'invité.  
* Montez le .ISO des suppléments invité de VirtualBox.  
* Ouvrez une fenêtre de ligne de commande sur l'invité et rendez-vous dans le dossier cert du CD des suppléments invité de VirtualBox.  
* Faites:  
`VBoxCertUtil add-trusted-publisher oracle-vbox.cer --root oracle-vbox.cer`  
Cela installera les certificats dans le stockage des certificats. Si on installe les mêmes certificats plus d'une fois, une erreur circonstanciée s'affichera.  

Avant VirtualBox 4.2, il faut importer les certificats CA d'Oracle de manière plus manuelle en utilisant l'outil certutil.exe inclu depuis Windows Vista. Pour des versions de Windows antérieures à Vista, vous devez télécharger et installer certutil.exe à la main. Les certificats n'étant pas sur le CD-ROM des suppléments invité de VirtualBox précédant la 4.2, vous devez les extraire préalablement d'un exécutable de VirtualBox signé.  
Dans l'exemple suivant, les certificats nécessaires seront extraits de l'installeur des suppléments invité pour Windows sur le CD-ROM:  
`VeriSign Code Signing CA`  

* Dans l'explorateur Windows, faites un clic droit sur `VBoxWindowsAdditions-<Architecture>.exe`, cliquez sur "Propriétés"  
* Allez sur l'onglet "Signatures numériques", choisissez "Oracle Corporation" et cliquez sur "Détails"  
* Dans l'onglet "Général" cliquez sur "Afficher le Certificat"  
* Dans l'onglet "Chemin de Certification", sélectionnez `"VeriSign Class 3 Public Primary CA"`  
* Cliquez sur "Afficher le certificat"  
* Dans l'onglet "Détails" cliquez sur "Copier vers le fichier..."  
* Dans l'assistant qui apparaît, choisissez `"DER encoded binary (binaire encodé DER X.509 (.CER)"` et enregistrez le fichier du certificat dans un chemin local, puis terminez l'assistant.  
* Fermez la boîte de dialogue du certificat `"Verisign Class 3 Code Signing 2010 CA"` Oracle Corporation  
* Dans l'explorateur Windows, effectuez un clic droit sur `VBoxWindowsAdditions-<Architecture>.exe`, cliquez sur "Propriétés"  
* Allez sur l'onglet "Signatures numériques", choisissez "Oracle Corporation" et cliquez sur "Détails"  
* Dans l'onglet "Général", cliquez sur "Afficher le Certificat"  
* Dans l'onglet "Détails" cliquez sur "Copier vers le fichier ..."  
* Dans l'assistant qui apparaît, choisissez `"DER encoded binary X.509 (.CER)"` et enregistrez le fichier du certificat dans un chemin local, terminez l'assistant  
* Fermez la boîte du dialogue du certificat "Oracle Corporation"  
Après avoir exporté les deux certificats ci-dessus, vous pouvez les importer dans le trousseau des certificats en utilisant l'outil certutil.exe:  
`certutil -addstore -f Root "<Chemin du fichier du certificat exporté>"`  
Afin de permettre des installations invité entièrement sans efforts, vous pouvez spécifier un paramètre en ligne de commande au lanceur de l'installation:  
`VBoxWindowsAdditions.exe /S`  
Ceci installe automatiquement les bons fichiers et les bons pilotes pour la plateforme correspondante (32 ou 64 bits).  

Note: Par défaut, sur une installation sans efforts sur un invité Windows 7 ou 8, un pilote graphique XPDM va s'installer. Ce pilote graphique ne supporte pas Windows `Aero/ Direct3D` de l'invité - il faut donc installer à la place le pilote graphique expérimental WDDM. Pour sélectionner ce pilote par défaut, ajoutez le paramètre `/with_wddm` de la ligne de commande quand vous appelez l'installeur des suppléments invité Windows.  

Note: Pour que Windows Aero fonctionne correctement sur un invité, la taille de la mémoire graphique de l'invité doit être configurée pour être d'au moins 128 Mo.  

Pour plus d'options concernant les installations d'invité sans efforts, consultez l'aide en ligne de commande en utilisant la commande:  

`VBoxWindowsAdditions.exe /?`

[Retour à la table des matières](#Table des matières)

# 4.2.1.4 Extraction manuelle du fichier<a id="mark4.2.1.4"></a>

Si vous souhaitez installer les fichiers et les pilotes à la main, vous pouvez extraire les fichiers des suppléments invité Windows en tapant :

`VBoxWindowsAdditions.exe /extract`  

Pour extraire explicitement les suppléments invité Windows pour une autre plateforme que celle où vous êtes (par exemple des fichiers 64 bits sur une plateforme 32 bits), vous devez exécuter l'installeur pour la plateforme adéquate `(VBoxWindowsAdditions-x86.exe ou VBoxWindowsAdditions-amd64.exe) avec le paramètre /extract`.  

[Retour à la table des matières](#Table des matières)

# 4.2.2 Suppléments invité pour Linux<a id="mark4.2.2"></a>

Comme pour les suppléments invité Windows, les suppléments invité de VirtualBox pour Linux sont un ensemble de pilotes de périphérique et d'applications système qui s'installent dans le système d'exploitation invité.  
Les distributions Linux suivantes sont supportées officiellement:  

* Oracle Linux à partir de la version 5, y compris les noyaux UEK ;  
* Fedora à partir de Fedora Core 4;  
* Redhat Enterprise Linux à partir de la version 3;  
* SUSE et openSUSE Linux à partir de la version 9;  
* Ubuntu à partir de la version 5.10.  

Beaucoup d'autres distributions sont connues pour fonctionner avec les suppléments invité.  
La version du noyau Linux fournie par défaut dans SUSE et openSUSE 10.2, dans Ubuntu 6.10 (toutes les versions) et Ubuntu 6.06 (édition serveur) contient un bogue qui peut le faire planter au démarrage quand il tourne sur une machine virtuelle. Les suppléments invité fonctionnent dans ces distributions.  
Remarquez que certaines distributions Linux sont déjà fournies avec tout ou partie des suppléments invité deVirtualBox. Vous pouvez choisir de garder la version des suppléments invité de votre distribution, mais ils sont souvent obsolètes et limités dans leurs fonctionnalités, donc nous recommandons de les remplacer par les suppléments invité fournis avec VirtualBox. L'installeur des suppléments invité de VirtualBox pour Linux essaie de détecter l'installation existante et de les remplacer, mais selon la façon dont votre distribution intègre les suppléments invité, cela peut exiger un peu d'intervention manuelle. Il est fortement recommandé de prendre un instantané de la machine virtuelle avant de remplacer les suppléments invité préinstallés.  

[Retour à la table des matières](#Table des matières)

# 4.2.2.1 Installer les suppléments invité pour Linux<a id="mark4.2.2.1"></a>

Les suppléments invité de VirtualBox pour Linux sont fournis sur le même fichier de CD-ROM virtuel que les suppléments invité pour Windows décrits ci-dessus. Ils sont également fournis avec un programme d'installation qui vous guide à travers le processus de paramétrage bien que du fait des différences significatives entre les distributions Linux, l'installation peut être légèrement plus complexe.  
L'installation implique généralement les étapes suivantes:  

1. Avant d'installer les suppléments invité, vous devrez préparer votre système invité à construire les modules externes du noyau. Ceci fonctionne comme décrit au chapitre [2.3.2 Le module noyau de VirtualBox,](#mark2.3.2) sauf que cette étape doit être maintenant effectuée dans votre invité Linux et non sur un système hôte Linux , comme décrit ici.  
De nouveau, comme avec les hôtes Linux, nous recommandons d'utiliser DKMS s'il est disponible pour le système invité. S'il n'est pas installé, utilisez cette commande pour les systèmes Ubuntu/Debian:  
`sudo apt-get install dkms`  
ou, pour les systèmes Fedora:  
`yum install dkms`  
Assurez-vous d'installer DKMS avant d'installer les suppléments invité Linux. Si DKMS n'est pas disponible ou pas installé, il faudra recréer à la main les modules noyau de l'invité à chaque fois que le noyau invité sera mis à jour en utilisant la commande `/etc/init.d/vboxadd setup` en tant qu'administrateur.
2. Insérez le fichier de CD VBoxGuestAdditions.iso dans le lecteur CD-ROM virtuel comme pour un  autre système invité, exactement de la même façon que ce qui est décrit pour un invité Windows dans le chapitre [4.2.1.1 Installation.](#mark4.2.1.1)  
3. Rendez-vous dans le répertoire où est monté votre lecteur CD-ROM et exécutez, en tant qu'administrateur :  
`sh ./VBoxLinuxAdditions.run`  
Pour votre confort, nous fournissons les instructions pas à pas suivantes pour les copies fraîchement installées des versions récentes de les distributions Linux les plus populaires. Après ces étapes préparatoires, vous pouvez exécuter l'installeur des suppléments invité VirtualBox comme décrit ci-dessus.  

# Ubuntu

1. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`apt-get update`  
en tant qu'administrateur suivi de:  
`apt-get upgrade`  
2. Installez DKMS en utilisant:  
`apt-get install dkms`  
3. Redémarrez votre système invité afin d'activer les mises à jour puis poursuivez comme décrit ci-dessus.  

# Fedora

1. Afin de mettre à jour complètement votre szstème invité, ouvrez un terminal et lancez:  
`yum update`  
en tant qu'administrateur.  
2. Installez DKMS et le compilateur GNU C en utilisant:  
`yum install dkms`  
suivi de:  
`yum install gcc`  
3. Redémarrez votre système invité afin d'activer les mises à jour puis poursuivez comme décrit ci-dessus.  

# openSUSE

1. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`zypper update`  
en tant qu'administrateur.  
2. Installez l'outil make et le compilateur GNU C en utilisant:  
`zypper install make gcc`  
3. Redémarrez votre système invité afin d'activer les mises à jour.  
4. Cherchez le noyau que vous exécutez en utilisant:
`uname -a`  
Un exemple serait `2.6.31.12-0.2-default` qui renvoie au noyau "par défaut". Puis installez le bon paquet de développement du noyau. Dans l'exemple ci-dessus, il s'agirait de:  
`zypper install kernel-default-devel`  
5. Assurez-vous que votre noyau actuel `(uname -a)` et les paquets du noyau que vous avez installés `(rpm -qa kernel\*)` ont exactement le même numéro de version. Continuez l'installation comme décrit ci-dessus.  

# SuSE Linux Enterprise Desktop (SLED)

1. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`zypper update`  
en tant qu'administrateur.  
2. Installez le compilateur the GNU C en utilisant:  
`zypper install gcc`  
3. Redémarrez votre système invité afin d'activer les mises à jour.  
4. Cherchez le noyau que vous exécutez en utilisant:  
`uname -a`  
Un exemple serait `2.6.27.19-5.1-default` qui renvoie au noyau "par défaut". Puis installez le bon paquet de développement du noyau. Dans l'exemple ci-dessus, il s'agirait de:  
`zypper install kernel-syms kernel-source`  
5. Assurez-vous que votre noyau actuel `(uname -a)` et les paquets du noyau que vous avez installés `(rpm -qa kernel\*)` ont exactement le même numéro de version. Continuez l'installation comme décrit ci-dessus.  

# Mandrake

1. Mandrake inclut des suppléments invité VirtualBox qui seront remplacés si vous suivez ces étapes.  
2. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`urpmi --auto-update`  
en tant qu'administrateur.  
3. Redémarrez le système afin d'activer les mises à jour.  
4. Installez DKMS en utilisant:  
`urpmi dkms`  
et assurez-vous de choisir le bon paquet `kernel-devel` quand l'installeur vous le demande (utilisez `uname -a` pour comparer).  

# Oracle Linux, Red Hat Enterprise Linux et CentOS

1. Pour les versions antérieures à 6, ajoutez `divider=10` aux options de démarrage du noyau dans `/etc/grub.conf` pour réduire la charge du processeur actif.  
2. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`yum update`  
en tant qu'administrateur.  
3. Installez le compilateur GNU C et les paquets de développement du noyau en utilisant:  
`yum install gcc`  
suivi de:  
`yum install kernel-devel`  
Pour les noyaux Oracle UEK, utilisez:  
`yum install kernel-uek-devel`  
pour installer les en-têtes du noyau UEK.  
4. Redémarrez votre système invité afin d'activer les mises à jour puis poursuivez comme décrit ci-dessus.  
5. Si Oracle Linux ne trouve pas les paquets requis, soit vous devez les installer à partir d'une autre source (comme un DVD), soit utilisez le serveur public Yum d'Oracle qui se trouve sur <http://public-yum.oracle.com>

# Debian

1. Afin de mettre à jour complètement votre système invité, ouvrez un terminal et lancez:  
`apt-get update`  
en tant qu'administrateur suivi de:  
`apt-get upgrade`  
2. Installez l'outil make et le compilateur GNU C en utilisant:  
`apt-get install make gcc`  
3. Redémarrez votre système invité afin d'activer les mises à jour.  
4. Déterminez la version exacte de votre noyau en utilisant `uname -a` et installez la bonne version du paquet linux-headers, par exemple en utilisant:  
`apt-get install linux-headers-2.6.26-2-686`  

[Retour à la table des matières](#Table des matières)

# 4.2.2.2 Intégration graphique et de la souris<a id="mark4.2.2.2"></a>

Dans les invités Linux et Solaris, l'intégration graphique et de la souris de VirtualBox passe par le système X Window. VirtualBox peut utiliser la variante X.Org du système (ou XFree86 version 4.3 qui est identique à la première version de X.Org). Au cours du processus d'installation, le serveur d'affichage X.Org sera paramétré pour utiliser les pilotes graphiques et de souris fournis avec les suppléments invité.  
Après l'installation des suppléments invité dans une installation neuve d'une distribution Linux ou d'un système Solaris supportés, (beaucoup de systèmes non supportés fonctionneront correctement aussi), le mode graphique de l'invité changera pour s'adapter à la taille de la fenêtre VirtualBox et de l'hôte lorsqu'elle est redimensionnée. Vous pouvez aussi demander au système invité de passer à une résolution en particulier en envoyant une "suggestion de mode graphique" en utilisant l'outil VBoxManage.  
Plusieurs écrans invités sont supportés dans les invités utilisant le serveur X.Org version 1.3 (qui fait partie de la version 7.3 du système X Window version 11) ou une version supérieure.  
La présentation des écrans invités peut être ajustée au besoin en utilisant les outils fournis avec le système d'exploitation invité.  
Si vous voulez mieux comprendre les détails de la manière dont les pilotes X.Org sont paramétrés (en particulier si vous souhaitez les utiliser dans un réglage non géré correctement par notre installeur), vous devriez lire le chapitre [9.4.2 Paramétrage approfondi des pilotes graphique et souris de l'invité.](#mark9.4.2)  

[Retour à la table des matières](#Table des matières)

# 4.2.2.3 Metter à jour les suppléments invité Linux<a id="mark4.2.2.3"></a>

Les suppléments invité peuvent être mis à jour simplement en refaisant la procédure d'installation avec une image de CD-ROM mise à jour. Ceci remplacera les pilotes par des versions mises à jour. Vous devriez redémarrer après avoir mis à jour les suppléments invité.  

[Retour à la table des matières](#Table des matières)

# 4.2.2.4 Désinstaller les suppléments invité Linux<a id="mark4.2.2.4"></a>

Si vous avez une version des suppléments invité installée sur votre machine virtuelle et si vous souhaitez l'enlever sans en installer d'autres, vous pouvez le faire en insérant l'image CD des suppléments invité dans le lecteur de CD-ROM virtuel comme décrit ci-dessus et en lançant l'installeur des suppléments invité actuels avec le paramètre "uninstall" à partir de l'endroit où est monté l'image du CD sur l'invité:  
`sh ./VBoxLinuxAdditions.run uninstall`  
Si cela fonctionnera en principe sans problème, il se peut que vous deviez faire certains nettoyages à la main sur l'invité (en particulier du fichier XFree86Config ou xorg.conf) dans certains cas, surtout si la version installée des suppléments ou le système d'exploitation invité étaient très anciens ou si vous avez fait vos propres modifications du paramétrage des suppléments invité après les avoir installé.  
À partir de la version 3.1.0, vous pouvez désinstaller les suppléments en appelant:  
`/opt/VBoxGuestAdditions-4.3.13/uninstall.sh`  
Merci de remplacer `/opt/VBoxGuestAdditions-4.3.13` par le bon répertoire d'installation des suppléments invité.  

[Retour à la table des matières](#Table des matières)

# 4.2.3 Suppléments invité pour Solaris<a id="mark4.2.3"></a>

Comme les suppléments invité pour Windows, les suppléments invité de VirtualBox pour Solaris incluent un ensemble de pilotes de périphériques et d'applications système qui peuvent s'installer dans le système d'exploitation invité.  
Les distributions Solaris suivantes sont officiellement supportées:  

* Solaris 11 y compris Solaris 11 Express;  
* Solaris 10 (u5 et supérieur);  

Il se peut que d'autres distributions fonctionnent si elles se basent sur des versions des logiciels comparables.  

[Retour à la table des matières](#Table des matières)

# 4.2.3.1 Installer les suppléments invité Solaris<a id="mark4.2.3.1"></a>

Les suppléments invité de VirtualBox pour Solaris sont fournis sur le même ISO de CD-ROM que pour les suppléments pour Windows et Linux décrits ci-dessus. Ils sont aussi fournis avec un programme d'installation qui vous guide à travers le processus d'initialisation.  
L'installation implique les étapes suivantes :  

1. Monter le fichier VBoxGuestAdditions.iso comme votre lecteur de CD-ROM virtuel de votre invité Solaris, exactement comme expliqué pour un invité Windows au chapitre [4.2.1.1 Installation.](#mark4.2.1.1)  
Au cas où le lecteur de CD-ROM de l'invité ne se monte pas (ce qu'on a constaté avec certaines versions de Solaris 10), exécutez en tant qu'administrateur :
`svcadm restart volfs`  
2. Rendez-vous dans le répertoire où votre lecteur de CD-ROM est monté et exécutez en tant qu'administrateur :
`pkgadd -G -d ./VBoxSolarisAdditions.pkg`
3. Choisissez "1" et confirmez l'installation du paquet des suppléments invité. Après la fin de l'installation, reconnectez-vous au serveur X de votre invité pour activer suppléments invité de X11.  

[Retour à la table des matières](#Table des matières)

# 4.2.3.2 Désinstaller les suppléments invité Solaris<a id="mark4.2.3.2"></a>

Les suppléments invité Solaris peuvent être supprimés en toute sécurité en retirant de l'invité le paquet. Ouvrez une session de terminal administrateur et exécutez :  
`pkgrm SUNWvboxguest`  

[Retour à la table des matières](#Table des matières)

# 4.2.3.3 Mettre à jour les suppléments invité<a id="mark4.2.3.3"></a>

Les suppléments invité devraient être mis à jour en désinstallant d'abord les suppléments invité existants puis en installant les nouveaux. Essayer d'installer de nouveaux les suppléments invité sans supprimer ceux existant n'est pas possible.  

[Retour à la table des matières](#Table des matières) 

# 4.2.4 Suppléments invité pour OS/2<a id="mark4.2.4"></a>

VirtualBox inclut aussi un jeu de pilotes qui améliore l'exécution d'OS/2 dans une machine virtuelle. À cause de restrictions d'OS/2 lui-même, cette variante des suppléments invité a un jeu de fonctionnalités limité ; voir chapitre [14 Limites connues](#mark14) pour les détails.  
Les suppléments invité OS/2 sont fournis sur la même ISO de CD-ROM que ceux des autres plateformes. Donc, montez l'ISO dans OS/2 comme décrit précédemment. Les suppléments invité OS/2 se trouvent dans `directory \32bit\OS2`.  
Comme on ne fournit pas pour le moment d'installeur automatique, merci de vous reporter au fichier readme.txt de ce répertoire, qui décrit la façon d'installer les suppléments invité OS/2 à la main.  

[Retour à la table des matières](#Table des matières)

# 4.3 Dossiers partagés<a id="mark4.3"></a>

Avec la fonction "dossiers partagés", de VirtualBox, vous pouvez accéder à des fichiers de votre système hôte depuis votre système invité. Cela est identique à utiliser des partages réseau dans des réseaux Windows – sauf que les dossiers partagés ne nécessitent pas de réseau mais seulement les suppléments invité. Les dossiers partagés sont supportés avec les invités Windows (2000 ou plus récent), Linux et Solaris.  
Les dossiers partagés doivent être présents physiquement sur l'hôte et sont alors partagés avec l'invité qui utilise un pilote de système de fichiers spécial des suppléments invité pour dialoguer avec l'hôte. Pour les invités Windows, les dossiers partagés sont implémentés comme un redirecteur pseudo-réseau ; pour les invités Linux et Solaris, les suppléments invité fournissent un système de fichiers virtuel.  
Pour partager un dossier hôte avec une machine virtuelle de VirtualBox, vous indiquer le chemin vers ce dossier et choisir pour lui un "nom partagé" que l'invité peut utiliser pour y accéder. D'où: créez tout d'abord le dossier partagé sur l'hôte, puis dans l'invité, connectez-vous-y.  
Il existe plusieurs façons de paramétrer des dossiers partagés pour une machine virtuelle en particulier :  

* Dans la fenêtre d'une VM en fonction, vous pouvez sélectionner "Dossiers partagés" du menu "Périphériques" ou cliquer sur l'icône de dossier dans la barre d'état dans le coin en bas à droite.  
* Si une VM est en fonction, vous pouvez configurer des dossiers partagés dans chaque boîte de dialogue "Paramètres" d'une machine virtuelle.  
* En ligne de commande, vous pouvez créer des dossiers partagés en utilisant VBoxManage, comme suit :  
`VBoxManage sharedfolder add "nom VM" --name "sharename" --hostpath "C:\test"`  
Voir chapitre [8.29 VBoxManage sharedfolder add/remove](#mark8.29) pour les détails.  

Il existe deux types de partages :  

1. Les partages de VM disponibles seulement pour la VM pour laquelle ils ont été définis ;  
2. Partages inter-VM, qui peuvent être ajoutés et supprimés pendant l'exécution et qui ne durent pas après l'arrêt d'une VM ; ajoutez pour eux l'option `--transient` à la ligne de commande ci-dessus.  

Les dossiers partagés donnent par défaut un accès en lecture/écriture aux fichiers de l'emplacement de l'hôte. Pour restreindre l'invité à un accès en lecture seule, créez un dossier partagé en lecture seule. Cela peut se faire soit en interface graphique, soit mettant l'option `--readonly` lors de la création du dossier partagé avec VBoxManage.  
À partir de la version 4.0, les dossiers partagés de VirtualBox supportent aussi les liens symboliques (symlinks), dans les conditions suivamtes :  

1. Le système d'exploitation hôte doit supporter les liens symboliques (donc, un hôte Mac, Linux ou Solaris est requis).  
2. Actuellement, seuls les suppléments invité pour Linux et Solaris supportent les liens symboliques.  

[Retour à la table des matières](#Table des matières)

# 4.3.1 Montage manuel<a id="mark4.3.1"></a>

Vous pouvez monter des dossiers partagés depuis l'intérieur d'une VM de la même façon que vous monteriez un partage réseau ordinaire :  

* Dans un invité Windows, on peut naviguer dans les dossiers partagés qui apparaissent donc dans l'explorrateur Windows. Donc, pour connecter un dossier partagé à votre invité Windows, ouvrez l'explorateur Windows et cherchez-le dans "Favoris réseaux" -> "Tout le réseau" -> "Dossier partagé VirtualBox". En effectuant un clic droit sur un dossier partagé et en sélectionnant "Connecter un lecteur réseau" dans le menu qui apparaît, vous pouvez affecter une lettre de lecteur à ce dossier partagé.  
Sinon, sur la ligne de commande Windows, utilisez ce qui suit :  
`net use x: \vboxsvr\sharename`  
Si vboxsvr est un nom gé (remarquez que vboxsrv fonctionnerait aussi), remplacez `"x:"` par la lettre du lecteur que vous voulez utiliser pour le partage, et `sharename` par le nom du partage spécifié avec VBoxManage.  
* Dans un invité Linux, utilisez la commande suivante :  
`mount -t vboxsf [-o OPTIONS] sharename mountpoint`  
Pour monter un dossier partagé au moment du démarrage, ajoutez l'entrée suivante à 
`/etc/fstab :`  
`sharename pointmontage vboxsf defaults 0 0`  
* Dans un invité Solaris, utilisez la commande suivante :  
`mount -F vboxfs [-o OPTIONS] nompartage mountpoint`  
Remplacez nompartage (utilisez des minuscules) par le nom du partage spécifié avec VBoxManage ou par l'interface graphique, et pointmontage par l'endroit de l'invité où vous voulez monter le partage (par exemple `/mnt/share)`. Les règles habituelles de montage s'appliquent, c'est-à-dire créer d'abord un répertoire s'il n'existe pas déjà.  
Voici un exemple de montage d'un dossier partagé pour l'utilisateur "jack" sur Solaris :  
`$ id`  
`uid=5000(jack) gid=1(other)`  
`$ mkdir /export/home/jack/mount`  
`$ pfexec mount -F vboxfs -o uid=5000,gid=1 jackshare /export/home/jack/mount`  
`$ cd ~/mount`  
`$ ls`  
`sharedfile1.mp3 sharedfile2.txt`  
`$`  
Par-delà les options standard fournies par la commande `mount`, celles suivantes sont disponibles :  
`iocharset CHARSET`  
pour définir l'encodage utilisé pour les opérations d'E/S. Remarquez que sur les invités Linux, si vous ne spécifiez pas l'option `"iocharset"`, le pilote des suppléments invité essaiera d'utiliser l'encodage spécifié par l'option `CONFIG_NLS_DEFAULT` du noyau. Si cette option n'est pas définie, UTF-8 sera utilisé. En outre, `convertcp CHARSET` est disponible pour définir l'encodage utilisé pour le nom du dossier partagé (utf8 par défaut) et Les options de montage génériques (documentées dans la page du manuel de mount) s'appliquent aussi. Celles particulièrement utiles sont `uid`, `gid` et `mode`, car elles permettent un accès par des utilisateurs ordinaires (en mode lecture/écriture selon les réglages) même si l'administrateur a monté le système de fichiers.  

[Retour à la table des matières](#Table des matières)

# 4.3.2 Montage automatique<a id="mark4.3.2"></a>

À partir de la version 4.0, VirtualBox peut monter automatiquement des dossiers partagés avec vos options. Si le montage automatique est activé pour un dossier partagé spécifique, les suppléments invité monteront automatiquement ce dossier dès qu'un utilisateur se connecte à l'OS invité. Les détails dépendent du type d'OS invité :  

* Avec des invités Windows,, tout dossier monté automatiquement aura sa propre lettre de lecteur (comme E:) selon les lettres de lecteur disponibles dans l'invité.  
Si aucune lettre de lecteur n'est libre, le montage automatique échouera ; donc le nombre de lecteurs montés automatiquement est limité en général à 22 ou moins avec des invités Windows.  
* Avec des invités Linux,, les dossiers partagés montés automatiquement sont montés dans le répertoire `/media`, avec le préfixe `sf_`. Par exemple, le dossier partagé `myfiles` serait monté dans `/media/sf_myfiles` sur Linux et dans `/mnt/sf_myfiles` sur Solaris.  
La propriété invité `/VirtualBox/GuestAdd/SharedFolders/MountPrefix` détermine le préfixe utilisé. Modifiez cette propriété invité en une valeur différente de `"sf"` pour changer ce préfixe ; voir chapitre [4.6 Propriétés invité,](#mark4.6) pour les détails.  
Note: L'accès aux dossiers partagés montés automatiquement n'est autorisé que pour le groupe utilisateur vboxsf, créé par l'installeur des suppléments invité de VirtualBox.  
Donc les utilisateurs de l'invité doivent être membres de ce groupe pour avoir un accès en lecture/écriture ou en lecture seule si le dossier n'est pas inscriptible.  
Pour modifier le répertoire de montage en autre chose que `/media`, vous pouvez régler la propriété invité `/VirtualBox/GuestAdd/SharedFolders/MountDir`.  
* Les invités Solaris se comportent comme les invités Linux, sauf que `/mnt` est utilisé comme répertoire de montage par défaut au lieu de `/media`.  
Pour effectuer des changements sur les dossiers partagés montés automatiquement pendant qu'une VM est en fonction, l'OS invité doit être relancé. (Cela ne vaut que pour les dossiers partagés montés automatiquement, pas pour coux montés à la main.)  

[Retour à la table des matières](#Table des matières)

# 4.4 L'accélération graphique matérielle<a id="mark4.4"></a>

# 4.4.1 Accélération 3D matérielle (OpenGL et Direct3D 8/9)<a id="mark4.4.1"></a>

Les suppléments invité de VirtualBox contiennent un support 3D matériel expérimental pour les invités Windows, Linux et Solaris.  
Avec cette fonction, si une application de votre machine virtuelle utilise des fonctions 3D via les interfaces de programmation OpenGL ou Direct3D 8/9, plutôt qu'une émulation logicielle (qui serait lente), VirtualBox essaiera d'utiliser le matériel 3D de votre hôte. Cela fonctionne pour toutes les plateformes hôtes supportées (Windows, Mac, Linux, Solaris), pourvu que votre système d'exploitation hôte puisse utiliser votre accélération 3D matérielle au premier plan.  
L'accélération 3D suppose actuellement les conditions suivantes :  

1. elle n'est disponible que pour certains invités Windows, Linux et Solaris. En particulier :  
* L'accélération 3D des invités Windows exige Windows 2000, Windows XP, Vista ou Windows 7. OpenGL et Direct3D 8/9 (pas avec Windows 2000) sont supportés (expérimental).  
* OpenGL sur Linux exige un noyau 2.6.27 et supérieur et le serveur X.org version 1.5 et supérieur. Ubuntu 10.10 et Fedora 14 ont été testées et confirmées comme opérationnelles.  
* OpenGL sur les invités Solaris exige le serveur X.org version 1.5 et supérieur.  
2. Les suppléments invité doivent être installés.  
Note: Pour l'accélération Direct3D de base fonctionne avec les invités Windows, VirtualBox a besoin de remplacer des fichiers système de Windows dans la machine virtuelle. Donc, le programme d'installation suppléments invité offre l'accélération Direct3D en option que vous devez activer explicitement. De plus, vous devez installer les suppléments invité en mode "Sans échec". Cela ne s'applique pas au pilote graphique expérimental WDDM Direct3D disponible pour les invités Vista et Windows 7, voir le chapitre [14 Limites connues](#mark14) pour les détails.  
3. Le support 3D étant pour l'instant expérimental, il est désactivé par défaut et il faut l'activer à la main dans les paramètres de la VM (voir le chapitre [3.3 Paramètres généraux).](#mark3.3)  

Le support OpenGL pour les invités Windows a été ajouté avec VirtualBox 2.1 ; le support pour Linux et Solaris a suivi avec VirtualBox 2.2. Avec VirtualBox 3.0, le support Direct3D 8/9 a été ajouté pour les invités Windows. OpenGL 2.0 est maintenant supporté aussi. Avec VirtualBox 4.1, le support du thème Windows Aero a été ajouté pour les invités Windows Vista et Windows 7 (expérimental)  

Note: Les systèmes invité douteux ne devraient pas être autorisés à utiliser les fonctions d'accélération 3D de VirtualBox tout comme les logiciels douteux de l'hôte ne devraient pas être autorisés à utiliser l'accélération 3D. Les pilotes du matériel 3D sont en général trop complexes pour être parfaitement sécurisés et tout logiciel autorisé à y accéder peut être en mesure de compromettre le système d'exploitation qui les exécute. En outre, l'activation de l'accélération 3D donne à l'invité un accès direct à une grande étendue de code informatique supplémentaire du processus hôte de VirtualBox, donc il pourrait être concevable de l'utiliser pour planter la machine virtuelle.  

Avec VirtualBox 4.1, le support du thème Windows Aero est ajouté pour les invités Windows Vista et Windows. Pour activer le support du thème Aero, le pilote graphique expérimental WDDM de VirtualBox doit être installé, il est disponible avec l'installation des suppléments invité.  
Comme le pilote graphique WDDM est pour l'instant expérimental, il n'est pas installé par défaut et il faut le sélectionner à la main dans l'installeur des suppléments invité en répondant "Non" dans la boîte de dialogue "Voulez-vous installer le support Direct3D de base" qui s'affiche quand la fonction Direct3D est sélectionnée.  

Note: Contrairement au support Direct3D de base actuel, l'installation du pilote graphique WDDM n'exige pas le "Mode sans effet".  

Le thème Aero n'est pas activé par défaut. Pour l'activer  

* Dans l'invité Windows Vista, effectuez un clic droit sur le bureau, dans le menu contextuel, sélectionnez "Personnaliser" et sélectionnez "Couleur de fenêtre et Apparance" dans la fenêtre "Personnalisation", dans la boîte de dialogue "Paramètres de l'apparence", sélectionnez "Windows Aero" et appuyez sur "OK"  
* Dans l'invité Windows 7, effectuez un clic droit sur le bureau, dans le menu contextuel, sélectionnez "Personnaliser" et sélectionnez un thème Aero dans la fenêtre "Personnalisation"  

Techniquement, VirtualBox implémente cela en installant un pilote 3D matériel supplémentaire dans votre invité quand les suppléments invité sont installés. Ce pilote agit comme un pilote 3D matériel et signale au système d'exploitation invité que le matériel (virtuel) est capable de faire de l'accélération matérielle 3D. Quand une application de l'invité demande alors l'accélération matérielle via les interfaces de programmation OpenGL ou Direct3D, elles sont envoyées vers l'hôte par un tunnel de communication spécial fourni par VirtualBox, puis l'hôte effectue l'opération 3D demandée via les interfaces de programmation de l'hôte.  

[Retour à la table des matières](#Table des matières)

# 4.4.2 L'accélération matérielle 2D pour les invités Windows<a id="mark4.4.2"></a>

À partir de la version 3.1, les suppléments invité de VirtualBox contiennent le support expérimental de l'accélération graphique 2D matériel pour les invités Windows.  
Avec cette fonctionnalité, si une application (comme un lecteur de vidéos) de votre VM Windows utilise les couches graphiques 2D pour lire un clip vidéo, VirtualBox essaiera d'utiliser l'accélération graphique matérielle de votre hôte plutôt que de faire de l'interprétation de couches ni conversion de couleurs dans le logiciel (ce qui serait lent). Cela fonctionne actuellement avec les plateformes hôtes Windows, Linux et Mac, pourvu que votre système d'exploitation hôte puisse utiliser l'accélération graphique 2D au premier plan.  
L'accélération graphique 2D est possible aujourd'hui sous les conditions suivantes :  

1. Elle n'est disponible que pour des invités Windows (XP ou supérieur).  
2. Les suppléments invité doivent être installés.  
3. Le support 2D étant pour l'instant expérimental, il est désactivé par défaut et il faut l'activer à la main dans les paramètres de laVM (voir chapitre [3.3 Paramètres généraux.](#mark3.3)  

Techniquement, VirtualBox implémente ceci en montrant les possibilités DirectDraw de la couche vidéo dans le pilote graphique des suppléments invité. Le pilote envoie toutes les commandes de la couche à l'hôte via un tunnel de communication spécial implémenté par VirtualBox. Côté hôte, OpenGL est alors utilisé pour implémenter la transformation des couleurs et l'échelonage.  

[Retour à la table des matières](#Table des matières)

# 4.5 Fenêtres transparentes<a id="mark4.5"></a>

Avec la fonction "fenêtres transparentes", de VirtualBox, vous pouvez afficher vos fenêtres d'une machine virtuelle côte à côte près des fenêtres de votre hôte. Cette fonctionnalité est supportée pour les systèmes d'exploitation invités suivants (si les suppléments invité sont installés) :  

* Les invités Windows (support ajouté à VirtualBox 1.5);  
* Les invités supportés Linux ou Solaris exécutant le système X Window (ajouté avec VirtualBox 1.6).

Après que les fenêtres transparentes ont été activées (voir ci-dessous), VirtualBox supprime l'affichage de l'arrière-plan du bureau de votre invité, ce qui vous permet de lancer les fenêtres de votre système d'exploitation invité de manière transparente à côté des fenêtres de votre hôte :  

Pour activer le mode transparent, après avoir démarré la machine virtuelle, appuyez sur Touche hôte (en principe contrôle droit) et "L" simultanément. Ceci agrandira la taille de l'affichage de la VM jusqu'à la taille de l'écran hôte et masquera l'arrière-plan du système d'exploitation invité.  
Pour revenir à l'affichage normal de la VM (donc pour désactiver les fenêtres transparentes), appuyez de nouveau sur Touche hôte et "L".  

[Retour à la table des matières](#Table des matières)

# 4.6 Propriétés invité<a id="mark4.6"></a>

À partir de la version 2.1, VirtualBox permet de demander certaines propriétés depuis un invité existant, si les suppléments invité de VirtualBox sont installés et si la VM est en fonction. C'est intéressant pour deux choses :  

1. Un certain nombre de caractéristiques prédéfinies de la VM sont maintenues automatiquement par VirtualBox et peuvent être répercutées sur l'hôte, par exemple, pour gérer les performances de la VM et les statistiques.  
2. De plus, des chaînes de données peuvent être échangées entre l'invité et l'hôte. Cela fonctionne dans les deux sens.  

Pour faire cela, VirtualBox établit un canal de communication privé entre les suppléments invité de VirtualBox et l'hôte, et les logiciels des deux côtés peuvent utiliser ce canal pour échanger des chaînes de données pour des objectifs de votre choix. Les propriétés invité ne sont que des clés de chaîne auxquelles est rattachée une valeur. Elles peuvent être définies (donc éditées) soit par l'hôte, soit par l'invité, et on peut les lire des deux côtés.  
En plus d'établir le mécanisme général de lecture et d'écriture de valeurs, un ensemble de propriétés invité prédéfinies est maintenu automatiquement par les suppléments invité de VirtualBox pour permettre de récupérer des données intéressantes de l'invité telles que le système exact de l'invité et le niveau du service pack, la version installée des suppléments invité, les utilisateurs connectés à l'OS invité, les statistiques réseau et davantage. Ces propriétés prédéfinies ont toutes pour préfixe `/VirtualBox/` et sont organisées en arborescence hiérarchique de clés.  
Certaines informations de l'exécution s'affichent quand vous sélectionnez "Boîte de dialogue d'informations sur la session" du menu "Machine" de la machine virtuelle.  
Une manière plus flexible d'utiliser ce guide est de passer par la commande `VBoxManage guestproperty` ; voir chapitre [8.30 VBoxManage guestproperty](#mark8.30) pour les détails. Par exemple, pour voir toutes les propriétés invité disponible pour une Vm donnée en fonction, listées avec leurs valeurs respectives, utilisez ceci :  

`$ VBoxManage guestproperty enumerate "Windows Vista III"`  
`VirtualBox Command Line Management Interface Version 4.3.13`  
`(C) 2005-2014 Oracle Corporation`  
`All rights reserved.`  

`Name: /VirtualBox/GuestInfo/OS/Product, value: Windows Vista Business Edition,`  
`timestamp: 1229098278843087000, flags:`  
`Name: /VirtualBox/GuestInfo/OS/Release, value: 6.0.6001,`  
`timestamp: 1229098278950553000, flags:`  
`Name: /VirtualBox/GuestInfo/OS/ServicePack, value: 1,`  
`timestamp: 1229098279122627000, flags:`  
`Name: /VirtualBox/GuestAdd/InstallDir,`  
`value: C:/Program Files/Oracle/VirtualBox`  
`suppléments invité, timestamp: 1229098279269739000, flags:`  
`Name: /VirtualBox/GuestAdd/Revision, value: 40720,`  
`timestamp: 1229098279345664000, flags:`  
`Name: /VirtualBox/GuestAdd/Version, value: 4.3.13,`  
`timestamp: 1229098279479515000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxControl.exe, value: 4.3.13r40720,`  
`timestamp: 1229098279651731000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxHook.dll, value: 4.3.13r40720,`  
`timestamp: 1229098279804835000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxDisp.dll, value: 4.3.13r40720,`  
`timestamp: 1229098279880611000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxMRXNP.dll, value: 4.3.13r40720,`  
`timestamp: 1229098279882618000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxService.exe, value: 4.3.13r40720,`  
`timestamp: 1229098279883195000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxTray.exe, value: 4.3.13r40720,`  
`timestamp: 1229098279885027000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxGuest.sys, value: 4.3.13r40720,`  
`timestamp: 1229098279886838000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxMouse.sys, value: 4.3.13r40720,`  
`timestamp: 1229098279890600000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxSF.sys, value: 4.3.13r40720,`  
`timestamp: 1229098279893056000, flags:`  
`Name: /VirtualBox/GuestAdd/Components/VBoxVideo.sys, value: 4.3.13r40720,`  
`timestamp: 1229098279895767000, flags:`  
`Name: /VirtualBox/GuestInfo/OS/LoggedInUsers, value: 1,`  
`timestamp: 1229099826317660000, flags:`  
`Name: /VirtualBox/GuestInfo/OS/NoLoggedInUsers, value: false,`  
`timestamp: 1229098455580553000, flags:`  
`Name: /VirtualBox/GuestInfo/Net/Count, value: 1,`  
`timestamp: 1229099826299785000, flags:`  
`Name: /VirtualBox/HostInfo/GUI/LanguageID, value: C,`  
`timestamp: 1229098151272771000, flags:`  
`Name: /VirtualBox/GuestInfo/Net/0/V4/IP, value: 192.168.2.102,`  
`timestamp: 1229099826300088000, flags:`  
`Name: /VirtualBox/GuestInfo/Net/0/V4/Broadcast, value: 255.255.255.255,`  
`timestamp: 1229099826300220000, flags:`  
`Name: /VirtualBox/GuestInfo/Net/0/V4/Netmask, value: 255.255.255.0,`  
`timestamp: 1229099826300350000, flags:`  
`Name: /VirtualBox/GuestInfo/Net/0/Status, value: Up,`  
`timestamp: 1229099826300524000, flags:`  
`Name: /VirtualBox/GuestInfo/OS/LoggedInUsersList, value: username,`  
`timestamp: 1229099826317386000, flags:`  

Pour interroger la valeur d'une seule propriété, utilisez la sous-commande  "get" comme ceci:  

`$ VBoxManage guestproperty get "Windows Vista III"`  
`"/VirtualBox/GuestInfo/OS/Product"`  
`VirtualBox Command Line Management Interface Version 4.3.13`  
`(C) 2005-2014 Oracle Corporation`  
`All rights reserved.`  

`Value: Windows Vista Business Edition`  

Pour ajouter ou modifier des propriétés invité depuis l'invité, utilisez l'outil VBoxControl. Cet outil est inclu dans les suppléments invité de VirtualBox 2.2 ou supérieur. S'il est lancé avec un invité Linux, cet outil exige les privilèges administrateur pour des raisons de sécurité :  

`$ sudo VBoxControl guestproperty enumerate`  
`VirtualBox suppléments invité Command Line Management Interface Version 4.3.13`  
`(C) 2009-2014 Oracle Corporation`  
`All rights reserved.`  

`Name: /VirtualBox/GuestInfo/OS/Release, value: 2.6.28-18-generic,`  
`timestamp: 1265813265835667000, flags: <NULL>`  
`Name: /VirtualBox/GuestInfo/OS/Version, value: #59-Ubuntu SMP Thu Jan 28 01:23:03 UTC 2010,`  
`timestamp: 1265813265836305000, flags: <NULL>`  
`...`

Pour des besoins plus complexes, vous pouvez utiliser l'interface de programmation de VirtualBox ; voir chapitre [11 Interfaces de programmation de VirtualBox.](#mark11)  

[Retour à la table des matières](#Table des matières)

# 4.7 Contrôle de l'invité<a id="mark4.7"></a>

À partir de la version 3.2, les suppléments invité de VirtualBox permettent de démarrer les applications d'une VM à partir du système hôte.  
Pour que cela fonctionne, l'application doit être installée dans l'invité ; pas besoin de logiciels supplémentaires sur l'hôte. De plus, une sortie en mode texte (sur stdout et stderr) peut s'afficher sur l'hôte pour un traitement ultérieur avec des options pour spécifier les droits des utilisateurs et une valeur de timeout (en millisecondes) pour limiter le temps où l'application peut s'exécuter.  

Cette fonctionnalité peut être utilisée pour automatiser le déploiement d'un logiciel dans l'invité.  
À partir de la version 4.0, les suppléments invité pour Windows permettent une mise à jour automatique (seulement si les suppléments invité 4.0 ou supérieurs sont déjà installés). En outre, la copie de fichiers de vhôte vers l'invité ainsi que la création à distance de répertoires invités est disponible.  
Pour utiliser ces fonctionnalités, utilisez la ligne de commande de VirtualBox, voir chapitre [8.31 VBoxManage guestcontrol.](#mark8.31)  

[Retour à la table des matières](#Table des matières)

# 4.8 Transfert de mémoire<a id="mark4.8"></a>

Dans des environnements serveur ayant beaucoup de VMs ; les suppléments invité peuvent être utilisés pour partager de la mémoire physique de l'hôte entre plusieurs VMs, réduisant la quantité totale de mémoire utilisée par les VMs. Si l'utilisation de la mémoire est le facteur limitatif et que des ressources processeur sont encore disponibles, cela peut aider à empaqueter davantage de VMs sur chaque hôte.  

[Retour à la table des matières](#Table des matières)

# 4.8.1 Faire du ballon avec la mémoire<a id="mark4.8.1"></a>

À partir de la version 3.2, les suppléments invité de VirtualBox peuvent changer la quantité de mémoire hôte utilisée par une VM pendant que la machine est en fonction. Vu comme cette fonction est implémentée, elle s'appelle le "jeu de ballon de mémoire".  

Note: VirtualBox ne supporte le jeu de ballons avec la mémoire que sur les hôtes 64 bits et il n'est pas supporté sur les hôtes Mac OS X.  

En principe, pour changer la quantité de mémoire affectée à une machine virtuelle, il faut éteindre la machine virtuelle complètement et modifier ses paramètres. Avec le jeu de ballon de mémoire, la mémoire affectée à une machine virtuelle peut être donnée à une autre machine virtuelle sans devoir arrêter la machine.  
Quand on veut faire du ballon avec la mémoire, les suppléments invité de VirtualBox (qui tournent dans l'invité) affectent de la mémoire physique du système d'exploitation invité au niveau noyau et il verrouille cette mémoire dans l'invité. Cela garantit que l'invité n'utilisera plus cette mémoire : aucune application de l'invité ne peut l'affecter, et le noyau invité ne l'utilisera pas non plus. VirtualBox peut alors réutiliser cette mémoire et la donner à une autre machine virtuelle.  
La mémoire rendue disponible par ce jeu de ballon n'est pas disponible pour être réutilisée par VirtualBox. Elle n'est pas rendue sous forme de mémoire libre à l'hôte. Jouer au ballon avec la mémoire à partir d'un invité en fonction n'augmentera pas la taille de la mémoire libre non affectée de l'hôte. En effet, le jeu de ballon avec la mémoire est donc un mécanisme de transfert de mémoire entre plusieurs machines virtuelles pendant leur fonctionnement. Cela peut servir pour démarrer temporairement une autre machine, ou, dans des environnements plus compliqués, pour une gestion sophistiquée de la mémoire de nombreuses machines virtuelles en fonction en parallèle, selon la façon dont la mémoire est utilisée par les invités.  
Pour l'instant, le jeu de ballon avec la mémoire n'est supporté que via VBoxManage. Utilisez la commande suivante pour agrandir ou réduire la taille du ballon de mémoire dans une machine virtuelle en fonction où les suppléments invité sont installés:  

`VBoxManage controlvm "nom VM" guestmemoryballoon <n>`  

où `"nom VM"` est le nom ou l'UUID de la machine virtuelle en question et `<n>` est la quantité de mémoire à affecté à partir de l'invité, en mégaoctets. Voir chapitre [8.13 VBoxManage controlvm](#mark8.13) pour plus d'informations.  

Vous pouvez aussi définir un ballon par défaut qui sera automatiquement récupéré sur la VM à chaque fois qu'elle démarrera avec la commande suivante :  

`VBoxManage modifyvm "nom VM" --guestmemoryballoon <n>`  

Par défaut, aucun ballon de mémoire n'est affecté. C'est un paramètre de VM comme les autres paramètres de `modifyvm` et donc, on ne peut les définir que quand la machine est éteinte ; voir chapitre [8.8, VBoxManage modifyvm.](#mark8.8)  

[Retour à la table des matières](#Table des matières)

# 4.8.2 Fusion de page<a id="mark4.8.2"></a>

Alors que le jeu de ballon avec la mémoire réduit simplement la quantité de RAM disponible pour une VM, la fusion de page fonctionne différemment : elle évite les doublons de mémoire entre plusieurs VMs identiques et en fonction.  
Dans un environnement serveur qui exécute plusieurs VMs identiques (comme avec des systèmes d'exploitation identiques) sur le même hôte, beaucoup de pages de mémoire sont identiques. La technologie de fusion de page de VirtualBox, introduite avec VirtualBox 3.2, est une technique nouvelle pour identifier efficacement ces pages de mémoire identiques et les partager entre plusieurs VMs.  

Note: VirtualBox ne supporte la fusion de page que sur des hôtes 64 bits et il n'est pas supporté sur les hôtes Mac OS X. La fusion de page ne fonctionne aujourd'hui qu'avec des invités Windows (2000 et supérieur).  

Plus les VMs se ressemblent sur un hôte donné, plus la fusion de page peut réduire efficacement la quantité de mémoire hôte utilisée. Il fonctionne donc mieux si toutes les VMs d'un hôte exécutent des systèmes d'exploitation identiques (par exemple Windows XP Pack Service 2). Plutôt que d'avoir une copie complète de chaque système d'exploitation dans chaque VM, la fusion de page identifie les pages mémoire identiques utilisées par les systèmes d'exploitation et elle élimine les doublons, partageant la mémoire de l'hôte entre plusieurs machines ("deduplication"). Si une VM essaie de modifier une page partagée avec d'autres VMs, une nouvelle page est de nouveau affectée pour cette VM avec une copie de la page partagée ("copie à l'écriture").  
Tout ceci est entièrement transparent pour la machine virtuelle.  
Il se peut que vous soyez familier de ce genre de transfert de mémoire via d'autres produits d'hypervision qui appellent cette fonction le "partage de page" ou la "fusion d'une même page".  
Cependant, la fusion de page est très différente des autres solutions, dont les approches ont plusieurs inconvénients :  

1. Les hyperviseurs traditionnels analysent toute la mémoire invité et calculent les sommes de contrôle (hachages) pour chaque page de mémoire individuelle. Puis ils cherchent des endroits avec des hachages identiques et comparent et comparent tout le contenu de ces pages ; si deux pages donnent le même hachage, il est très probable que les pages soient identiques par leur contenu. Cela peut, bien sûr, prendre du temps, surtout si le système n'est pas inactif. La mémoire supplémentaire ne devient donc disponibles qu'après une durée importante (cela peut prendre des heures voire des jours !). Pire, ce genre d'algorithme de partage de page consomme en général beaucoup de ressources et augmente la vitesse de la virtualisation jusqu'à 10-20%.  
La fusion de page dans VirtualBox utilise une logique des suppléments invité de VirtualBox pour identifier rapidement les cellules mémoire les plus vraisemblablement identiques dans les VMs. Elle peut faire la plupart des sauvegardes possibles des partages de pages
presqu'immédiatement et avec pratiquement aucune charge.  
2. La fusion de page a aussi beaucoup moins de chances d'être perdue avec de la mémoire identique qu'elle éliminera, pour apprendre seulement quelques secondes plus tard que la mémoire va maintenant changer, devant effectuer une réaffectation très gourmande et gênant souvent le service.

Pour l'instant, la fusion de page ne peut être contrôlée qu'avec VBoxManage et pendant qu'une VM est éteinte. Pour activer la fusion de page pour une VM, utilisez La commande suivante:

`VBoxManage modifyvm "nom VM" --pagefusion on`  

Vous pouvez voir l'opération de fusion de page en utilisant des métriques. `RAM/VMM/Shared affichant la quantité totale de pages fusionnées, tandis que la métrique par VM `Guest/RAM/Usage/Shared` renverra la quantité de mémoire fusionnée d'une VM donnée. Merci de vous reporter au chapitre [8.33 VBoxManage metrics](#mark8.33) pour des informations sur la manière de demander des métriques.  

[Retour à la table des matières](#Table des matières)

# 5 Le stockage virtuel<a id="mark5"></a>

Comme la machine virtuelle s'attendra, la plupart du temps, à voir un disque dur construit dans son ordinateur virtuel, VirtualBox doit pouvoir présenter du "vrai" stockage à l'invité comme un disque dur virtuel. Il existe aujourd'hui trois méthodes pour faire cela :  

1. Le plus souvent, VirtualBox utilisera de gros fichiers images sur un vrai disque dur et les présentera à un invité comme des disques durs virtuels. Cela est décrit au chapitre [5.2 Fichiers images de disque (VDI, VMDK, VHD, HDD) .](#mark5.2)  
2. Sinon, si vous avez des serveurs de stockage iSCSI, vous pouvez connecter un tel serveur à VirtualBox comme le décrit le chapitre [5.10 Serveurs iSCSI.](#mark5.10)  
3. Enfin, comme fonction avancée, vous pouvez permettre à une machine virtuelle d'accéder directement à un des disques durs de votre hôte ; cette fonction avancée est décrite au chapitre [9.9.1 Utiliser un disque dur brut de l'hôte à partir de l'invité.](#mark9.9.1)  

Chaque périphérique virtuel (fichier image, cible iSCSI ou disque physique) devra être con-necté au contrôleur de disque dur virtuel présenté par VirtualBox à une machine virtuelle. Ceci est expliqué dans la prochaine section.  

[Retour à la table des matières](#Table des matières)

# 5.1 Les contrôleurs de disque dur : IDE, SATA (AHCI), SCSI, SAS<a id="mark5.1"></a>

Dans un vrai PC, les disques durs et les lecteurs de CD/DVD sont connectés à un périphérique appelé le contrôleur de disque dur, qui pilote les opérations du disque dur et les transferts de données. VirtualBox peut émuler les quatre types de contrôleurs de disque les plus courants qu'on trouveen général dans les PCs d'aujourd'hui : IDE, SATA (AHCI), SCSI et SAS.  

Les contrôleurs IDE (ATA) sont une extension très avancée de la rétrocompatibilité du contrôleur de disque dur dans les PC/AT IBM (1984). Au début, cette interface ne fonctionnait qu'avec des disques durs mais elle a ensuite été étendue aussi au support des lecteurs CD-ROM et d'autres types de médias amovibles. Dans des PCs physiques, ce standard utilise des nappes de 40 ou 80 ﬁls. Chaque câble peut connecter deux périphériques à un contrôleur, ce qu'on appelait traditionnellement le "maître" et "l'esclave". Les PCs classiques avaient deux connecteurs par câbles, le support jusqu'à quatre périphériques était donc classique.  
 Dans VirtualBox, chaque machine virtuelle peut avoir un contrôleur IDE activé, ce qui vous donne jusqu'à quatre périphériques de stockage virtuels connectables à la machine. (Par défaut, un des quatre – le maître secondaire -) est préconfiguré pour être le lecteur CD/DVD de la machine virtuelle, mais ceci peut être modifié.  
Donc, même si votre système d'exploitation invité ne supporte pas les périphériques SCSI ou SATA, il devrait toujours pouvoir voir un contrôleur IDE.  

1 Le support SATA a été ajouté avec VirtualBox 1.6 ; le support SCSI expérimental a été ajouté à la 2.1 et est complètement  implémenté avec la 2.2. En général, les connexions de stockage ont été rendus beaucoup plus flexibles avec VirtualBox 3.1 ; voir ci-dessous. Le support pour le contrôleur LSI Logic SAS a été ajouté avec VirtualBox 3.2.  
2 L'affectation du lecteur CD/DVD de la machine au maître secondaire était figé avant VirtualBox 3.1 ; il est maintenant modifiable et le lecteur peut être sur d'autres slots du contrôleur IDE et il peut y avoir plus de deux lecteurs.  
Vous pouvez aussi sélectionner le type exact de contrôleur IDE que VirtualBox devrait matériellement présenter à la machine virtuelle (PIIX3, PIIX4 ou ICH6). Il n'y a pas de différence en termes de performance, mais si vous importez une machine virtuelle d'un autre produit de virtualisation, le système d'exploitation de cette machine peut attendre un type de contrôleur particulier et planter s'il n'est pas trouvé.  
Après avoir créé une nouvelle machine virtuelle avec l'assistant "Nouvelle Machine virtuelle" de l'interface graphique, vous verrez généralement un contrôleur IDE dans les paramètres de "Stockage" de la machine, auquel le lecteur CD/DVD sera connecté, sur un des quatre ports du contrôleur.
* Serial ATA (SATA) est un standard récent introduit en 2003. Par rapport à l'IDE, il supporte plus de périphériques par contrôleur et à bien plus haute vitesse. De plus, avec du matériel physique, les périphériques peuvent être ajoutés et supprimés pendant que le système fonctionne. L'interface standard des contrôleurs SATA est appelé Advanced Host Controller Interface (AHCI).  
Comme un vrai contrôleur SATA, le contrôleur SATA virtuel de VirtualBox travaille plus vite et consomme moins de ressources processeur que le contrôleur IDE virtuel. De plus, il vous permet de connecter jusqu'à 30 disques durs virtuels à une machine au lieu de seulement trois comme avec le contrôleur IDE de VirtualBox (avec le lecteur DVD déjà connecté).  
Pour cette raison, à partir de la version 3.2 et selon le système d'exploitation invité sélectionné, VirtualBox utilise SATA par défaut pour les machines virtuelles nouvellement créées.  
Un contrôleur virtuel SATA est créé par défaut et le disque par défaut créé avec une nouvelle VM est connecté à ce contrôleur.  
Avertissement: Tout le contrôleur SATA et les disques virtuels qui s'y connectent (y compris ceux en mode de compatibilité IDE) ne seront pas vus par les systèmes d'exploitation n'ayant pas de support périphérique pour AHCI. En particulier, il n'y a pas de support pour AHCI dans Windows avant Windows Vista, donc Windows XP (même SP3) ne verra pas de tels disques sauf si vous installez des pilotes supplémentaires. Il est possible de passer de l'IDE à SATA après l'installation en installant les pilotes SATA et en changeant le type de contrôleur dans la boîte de dialogue des paramètres de la VM. VirtualBox recommande les pilotes Intel Matrix Storage qui sont téléchargeables sur <http://downloadcenter.intel.com/Product_Filter.aspx?ProductID=2101>  
Pour ajouter un contrôleur SATA à une machine pour laquelle il n'a pas été activé par défaut (soit parce qu'elle a été créée par une version antérieure de VirtualBox, soit parce que SATA n'est pas supporté par défaut par le système d'exploitation invité sélectionné), allez dans l'onglet "Stockage" de la boîte de dialogue des paramètres de la machine, cliquez sur le bouton "Ajouter un contrôleur" sous la case "Arborescence de stockage" puis sélectionnez "Ajouter un contrôleur SATA". Après quoi, le contrôleur traditionnel apparaîtra comme un périphérique PCI distinct dans la machine virtuelle et vous pouvez y ajouter des disques virtuels.  
Pour modifier les paramètres du mode de compatibilité IDE pour le contrôleur SATA, merci de voir le chapitre [8.19 VBoxManage storagectl.](#mark8.19)  
* SCSI est un autre standard industriel signifiant "Small Computer System Interface". SCSI a été standardisé dès 1986 comme une interface générique pour transférer des données entre tous les types de périphériques, y compris ceux de stockage. Aujourd'hui, SCSI est encore utilisé pour connecter des disques durs et des lecteurs à bandes, mais il est généralement devenu un matériel de convenance. On l'utilise encore souvent sur des stations de travail et des serveurs à haute performance.  
En priorité pour des raisons de compatibilité avec d'autres logiciels de virtualisation, VirtualBox supporte en option les contrôleurs LSI Logic et BusLogic SCSI, chacun d'entre eux pouvant gérer jusqu'à 15 disques durs virtuels.  
Pour activer un contrôleur SCSI, sur l'onglet "Stockage" de la boîte de dialogue des paramètres d'une machine virtuelle, cliquez sur le bouton "Ajouter un contrôleur" sous la case "Arborescence de stockage" puis sélectionnez "Ajouter un contrôleur SCSI". Après quoi, le contrôleur supplémentaire apparaîtra comme périphérique PCI distinct dans la machine virtuelle.  
Avertissement: Comme avec les autres types de contrôleurs, un contrôleur SCSI ne sera vu que par les systèmes d'exploitation ayant un support de ce périphérique. Windows 2003 et supérieur incluent des pilotes pour le contrôleur LSI Logic, tandis que
Windows NT 4.0 et Windows 2000 incluent des pilotes pour le contrôleur BusLogic.  
Windows XP n'inclut aucun pilote.  
* Serial Attached SCSI (SAS) est un autre standard de bus qui utilise le jeu de commandes SCSI. Mais contrairement au SCSI, avec les périphériques physiques, on utilise des câbles série au lieu de ceux parallèles, ce qui simplifie la connexion de périphériques physiques.  
D'une certaine manière, SAS est donc au SCSI ce que SATA est à l'IDE: il permet des connexions plus fiables et plus rapides.  
Pour supporter des invités de haut niveau exigeant des contrôleurs SAS, VirtualBox émule un contrôleur a LSI Logic SAS qui peut être activé de la même façon qu'un contrôleur SCSI.  
Pour le moment, on peut connecter jusqu'à huit périphériques au contrôleur SAS.  
Avertissement: Comme avec SATA, le contrôleur SAS ne sera vu que par les systèmes d'exploitation supportant ce périphérique. En particulier, il n'y a pas de support de SAS dans Windows avant Windows Vista, donc Windows XP (même SP3) ne verra pas de tels disques, sauf si vous installez des pilotes supplémentaires.  

En résumé, VirtualBox vous offre les catégorie; de slots de stockage virtuels suivantes :  

1. quatre slots attachés au contrôleur IDE traditionnel, qui sont toujours présents (un d'eux est en général un lecteur de CD/DVD virtuel) ;  
2. 30 slots attachés au contrôleur SATA s'il est activé et si votre système d'exploitation invité le supporte ;  
3. 15 slots attachés au contrôleur SCSI s'il est activé et si le système d'exploitation invité peut le voir ;  
4. huit slots attachés au contrôleur SAS, s'il est activé et si le système d'exploitation invité peut le voir ;  

Étant donné le vaste choix de contrôleurs de stockage, il se peut que vous vous demandiez lequel choisir. En général, vous devriez éviter l'IDE, à moins que ce soit le seul contrôleur supporté par votre invité. Que vous utilisiez SATA, SCSI ou SAS ne présente pas de vraie différence.  
La variété des contrôleurs n'est fournie par VirtualBox que pour des raisons de compatibilité avec le matériel existant et d'autres hyperviseurs.  

[Retour à la table des matières](#Table des matières)

# 5.2 Fichiers images de disque (VDI, VMDK, VHD, HDD)<a id="mark5.2"></a>

Les fichiers images de disque résident sur le système hôte et sont vues par les systèmes invités comme des disques durs d'une certaine composition. Quand un système d'exploitation invité lit ou écrit sur un disque dur, VirtualBox redirige la requête vers le fichier image.  
Comme un disque physique, un disque virtuel est d'une taille (capacité), qui doit être indiquée quand le fichier image est créé. Mais contrairement à un disque physique, VirtualBox vous permet d'étendre un fichier image après l'avoir créé, même s'il contient déjà des données (voir le chapitre [8.23 VBoxManage modifyhd](#mark8.23) pour plus de détails  .
VirtualBox supporte quatre variantes de fichiers images de disque :  

* Normalement, VirtualBox utilise son propre format de container pour les disques durs invités – des fichiers Virtual Disk Image (VDI). En particulier,ce format sera utilisé quand vous créerez une nouvelle machine virtuelle avec un nouveau disque.  
* VirtualBox supporte aussi complètement le format d container VMDK ouvert et populaire, utilisé par de nombreux produits de virtualisation, en particulier, par VMware.
* VirtualBox supporte complètement le format VHD utilisé par Microsoft.  
* Les fichiers images de Parallels version 2 (format HDD) sont aussi supportés. 5 Par manque de documentation du format, les nouveaux formats (3 et 4) ne sont pas supportés. Vous pouvez cependant convertir de tels fichiers images à leur version 2 en utilisant des outils fournis par Parallels.  
Indépendamment de la capacité et du format du disque, comme on l'a brièvement indiqué au chapitre [1.7 Créer votre première machine virtuelle](#mark1.7) il y a deux options sur la façon de créer une image de disque :   la taille fixe ou dynamique.  
* Si vous créez une image à taille fixe , un fichier image sera créé sur votre système hôte ayant rigoureusement la même taille que la capacité du disque virtuel. Donc, pour un disque de 10G, vous aurez un fichier de 10G. Remarquez que la création d'une image à taille fixe peut prendre du temps selon la taille de l'image et les performances d'écriture de votre disque dur.  
* Pour une gestion du stockage plus flexible, utilisez une image dynamique. Elle sera très petite au départ et n'occupera pas de place pour des secteurs de disque virtuel inutilisés mais elle grandira à chaque fois qu'un secteur de disque sera écrit pour la première fois, jusqu'à ce que le lecteur ne atteigne la capacité maximale choisie quand le lecteur a été créé. Si ce format prend moins de place au départ, le fait que VirtualBox doit étendre le fichier image consomme des ressources de calcul supplémentaires, donc jusqu'à ce que la taille du fichier de disque a été stabilisée, les opérations d'écriture peuvent être plus lentes qu'avec des disques à taille fixe. Cependant, après un certain temps, la vitesse de grossissement ralentira l'inconvénient moyen des opérations d'écriture deviendra négligeable.  

[Retour à la table des matières](#Table des matières) 

# 5.3 Le gestionnaire de médias virtuels<a id="mark5.3"></a>

VirtualBox garde une trace de toutes les images de disque dur, de lecteur CD/DVD-ROM et de disquette utilisés par les machines virtuelles. On les désigne souvent comme des "médias connus" et ils proviennent de deux sources :  

Le redimensionnement d'image a été ajouté avec VirtualBox 4.0.  
Le premier support du VMDK a été ajouté avec VirtualBox 1.4 ; depuis la version 2.1, VirtualBox supporte complètement le VMDK, ce qui veut dire que vous pouvez créer des dépôts et utiliser toutes les autres fonctions avancées décrites ci-dessus pour les images VDI avec VMDK.  
Le support a été ajouté avec VirtualBox 3.1.

* tous les médias actuellement attachés aux machines virtuelles ;  
* les médias "enregistrés" pour la compatibilité avec les versions de VirtualBox inférieures à 4.0. Pour les détails sur les modalités du changement de l'enregistrement des médias, avec la version 4.0, merci de vous reporter au chapitre [10.1, Où VirtualBox stocke ses fichiers.](#mark10.1)  
Vous pouvez visualiser et modifier les médias connus dans le gestionnaire de médias virtuels, auquel vous pouvez accéder à partir du menu "Fichier" de la fenêtre principale de VirtualBox :  

Les médias connus sont regroupés, par commodité, dans trois onglets pour les trois formats possibles. Ces formats sont :  

* Les images de disque dur, soit au format de VirtualBox Virtual Disk Image(VDI), soit dans des formats tiers listés au chapitre précédent ;  
* Les images CD/DVD au format ISO standard ;  
* les images de disquette au format standard RAW. pour chaque image, le gestionnaire de médias Virtuels vous montre le chemin complet vers le fichier image et d'autres informations, telles que la machine virtuelle à laquelle est attachée l'image, s'il y en a.  

Le gestionnaire de média virtuels vous permet de:  
* supprimer une image du registre (et effacer éventuellement le fichier image en même temps) ;  
* "libérer" une image, c'est-à-dire la détacher d'une machine virtuelle si elle est rattachée actuellement à une d'elles en tant que disque dur virtuel.  

À partir de la version 4.0, pour créer de nouvelles images de disque, merci d'utiliser l'onglet "Stockage" dans la boîte de dialogue des paramètres d'une machine virtuelle, car les images de disque sont désormais stockées par défaut dans le dossier de chaque machine.  
Vous pouvez copier des fichiers images de disque dur entre systèmes hôtes et les importer alors dans les machines virtuelles, bien que certains systèmes invités (surtout Windows 2000 et XP) exigeront que la nouvelle machine virtuelle soit réglée de façon identique à l'ancienne.  

Note: Ne faites pas de simples copies des images de disque dur virtuels. Si vous importez une seconde copie dans une machine virtuelle, VirtualBox se plaindra avec une erreur puisque VirtualBox affecte un identifiant unique (UUID) à chaque image de disque pour garantir qu'elle n'est utilisée qu'une fois. Voir chapitre [5.6 Cloner des images de disque](#mark5.6) pour des instructions à ce sujet. De plus, si vous voulez copier une machine virtuelle sur un autre système, VirtualBox a un outil d'importation/exportation qui pourrait mieux convenir à vos besoins ; voir chapitre [1.14 Importer et exporter des machines virtuelles.](#mark1.14)  

[Retour à la table des matières](#Table des matières)

# 5.4 Modes spéciaux d'écriture d'images<a id="mark5.4"></a>

Pour chaque image de disque dur virtuel supportée par VirtualBox, vous pouvez déterminer distinctement la façon dont elle peut être touchée par les opérations d'écriture par une machine virtuelle et les opérations de prise d'instantanés. Ceci vaut pour tous les formats d'image précités (VDI, VMDK, VHD ou HDD) et indépendamment du fait qu'une image soit de taille fixe ou dynamique.  
Par défaut, les images sont en mode "normal". Pour marquer une image existante avec un d es modes non standards listés ci-dessous, utilisez VBoxManage modifyhd ; voir chapitre [8.23 VBoxManage modifyhd.](#mark8.23) Sinon, utilisez VBoxManage pour attacher l'image à une VM et utilisez l'argument `--mtype` ; voir chapitre [8.18 VBoxManage storageattach.](#mark8.18)  

1. Avec des images normales (le réglage par défaut), il n'y a aucune restriction de lecture et d'écriture pour les systèmes invités.  
Quand vous prenez un instantané de votre machine virtuelle comme décrit au chapitre [1.10 Instantanés,](#mark1.10) l'état d'un "disque dur normal" sera enregistré avec l'instantané et, lors du retour à l'instantané, son état sera complètement réinitialisé.  
(Techniquement, pour parler rigoureusement, le fichier image lui-même n'est pas "réinitialisé". Quand un instantané est pris, VirtualBox "gèle" plutôt le fichier image et n'écrit plus dedans. Pour les opérations d'écriture de la VM, un deuxième fichier image de "différenciation" est créé, qui ne reçoit que les modifications de l'image d'origine ; voir la section suivante pour les détails.)  
Si vous pouvez attacher une même image "normale" à plus d'une machine virtuelle, une seule de ces machines virtuelles attachée au même fichier image peut être exécuté en même temps, sans quoi il y aurait des conflits si plusieurs machines écrivent dans le même fichier image.  
2. À l'opposé, les disques durs write-through ne sont absolument pas concernés par les instantanés : leur état n'est pas sauvegardé quand on prend un instantané, et il n'est pas restauré quand on restaure un instantané.  
Cette restriction est plus légère qu'avant VirtualBox 2.2. Jadis, chaque image de disque "normale" ne pouvait être  attachée qu'à une seule machine. Maintenant, elle peut être attachée à plus d'une machine du moment qu'une seule des machines soit en fonction.
3. Les Disques durs partageables sont des variantes des disques durs write-through. En principe, ils se comportent exactement de la même façon, à savoir que leur état n'est pas sauvegardé quand on prend un instantané et il n'est pas restauré quand on restaure un instantané. La différence n'apparaît que si vous attachez de tels disques à plusieurs VMs.  
Les disques partageables peuvent être attachés à plusieurs VMs qui peuvent fonctionner en même temps. Cela les rend adaptés pour l'utilisation de systèmes de fichiers cluster entre des VMs et des applications identiques qui sont explicitement préparés pour accéder en même temps à un disque. Seules des images de disques fixes peuvent être utilisées dans ce mode, les images dynamiques sont rejetées.  
Avertissement: C'est une fonctionnalité pour experts, dont la mauvaise utilisation peut provoquer une perte de données – les systèmes de fichiers réguliers ne sont pas préparés à gérer des modifications simultanées par plusieurs éléments.  
4. Ensuite, les images immuables ne se souviennent des accès en écriture que de manière temporaire pendant que la machine est en fonction ; tous les changements sont perdus quand la machine virtuelle est allumée la fois d'après. Il s'en suit qu'à l'inverse des images "normales", une même image immuable peut être utilisée avec plusieurs machines virtuelles sans restrictions.  
La création d'une image immuable a peu de sens puisqu'elle serait vide au départ et elle perdrait son contenu à chaque redémarrage de la machine (sauf si vous voulez vraiment avoir un disque toujours non formaté quand la machine démarre). Du coup, normalement, vous créeriez d'abord une image "normale" puis, quand vous estimez son contenu utile, vous la marquez plus tard comme immuable.  
Si vous prenez l'instantané d'une machine avec des images immuables, sur chaque machine allumée, ces images sont réinitialisées à leur état du dernier instantané (actuel) (et non à l'état de l'image immuable d'origine).  
Note: En guise d'exception particulière, les images immuables ne sont pas réinitialisées si elles sont attachées à une machine dont le dernier instantané a été pris pendant que la machine était en fonction (ce qu'on appelle un instantané "en ligne"). Il s'en suit que si l'instantané actuel de la machine est "en ligne", ses images immuables se comportent exactement comme les images "normales" décrites précédemment. Pour réactiver la réinitialisation automatique de telles images, effacez l'instantané actuel de la machine.  
De nouveau, techniquement, VirtualBox n'écrit jamais directement sur image immuable.  
Toutes les opérations d'écriture de la machine seront envoyées dans une image de différenciation ; la prochaine fois que la VM sera allumée, l'image de différenciation sera rétablie à chaque démarrage de la machine, ses images immuables ont exactement le même contenu. L'image de différenciation n'est réinitialisée que lorsque la machine est allumée à partir de VirtualBox, pas quand vous redémarrez en demandant un redémarrage à l'intérieur de la machine. C'est également pourquoi les images immuables se comportent comme décrit ci-dessus quand des instantanés sont aussi présents, ce qui utilise également des images de différenciation.
Si la désactivation automatique de l'image de différenciation au démarrage d'une VM ne correspond pas à vos besoins, vous pouvez la désactiver en utilisant le paramètre autoreset de VBoxManage modifyhd ; voir chapitre [8.23 VBoxManage modifyhd](#mark8.23)  pour plus de détails.  
 Ce comportement a aussi changé avec VirtualBox 2.2. Jadis, les images de différenciation étaient désactivées quand la session de la machine se terminait ; maintenant, elles sont désactivées à chaque fois que la machine est allumée.  
5. Une image en mode multiattachée peut être attachée à plus d'une machine virtuelle en même temps même si ces machines sont en fonction en même temps. Pour chaque machine virtuelle à laquelle une image est attachée, une image de différenciation est créée. Il s'en suit que les données écrites sur un tel disque dur virtuel par une machine n'est pas vue par les autres machines auxquelles l'image est attachée ; chaque machine crée son propre historique des écritures de l'image multiattachée.  
Techniquement, une image "multiattachée" se comporte de la même façon qu'une image "immuable", sauf que l'image de différenciation n'est pas réinitialisée à chaque fois que la machine démarre.  
6. Enfin, l'image en lecture seule est utilisée automatiquement pour les images de CD/DVD, vu que les CDs/DVDs ne sont jamais inscriptibles.  

Pour illustrer les différences entre les différents types au regard des instantanés : supposons que vous avez installé votre système d'exploitation hôte dans votre VM et que vous avez pris un instantané. Imaginons que vous avez accidentellement infecté votre VM avec un virus et vous voulez revenir à l'instantané. Avec une image de disque dur normale, vous restaurez simplement l'instantané et l'état antérieur de votre image de disque dur seront restaurées également (et votre infection virale sera annulée). Avec un disque dur immuable, il suffit d'éteindre et de rallumer votre VM et l'infection virale sera désactivée. Par contre, avec une image write-through, vous ne pouvez pas annuler facilement l'infection virale par la virtualisation, mais vous devrez désinfecter votre machine virtuelle comme un vrai ordinateur.  
Là encore, vous pourriez trouver les images write-through utiles si vous voulez préserver des données critiques indépendamment des instantanés, et comme vous pouvez attacher plus d'une image à une VM, vous pourriez vouloir avoir une image immuable pour le système d'exploitation et une en write-through pour vos fichiers de données.  

[Retour à la table des matières](#Table des matières)

# 5.5 Images de différenciation<a id="mark5.5"></a>

La section précédente portait sur les images de différenciation et la façon de les utiliser avec des instantanés, des images immuables et des attachements immuables. Pour l'utilisateur curieux de VirtualBox, cette section décrit avec plus de détails la façon dont elles fonctionnent.  
Une image de différenciation est une image de disque spéciale qui ne garde que les différences avec une autre image. En elle-même, une image de différenciation est inutile, elle doit toujours se référer à une autre image. On parle donc généralement d'une image de différenciation comme d'un "enfant" qui garde les différences avec son "parent".  
Quand une image de différenciation est active, elle reçoit toutes les opérations d'écriture de la machine virtuelle à la place de son parent. L'image de différenciation ne contient que les secteurs du disque dur virtuel qui ont changé depuis que l'image de différenciation a été créée. Quand la machine lit un secteur à partir d'un tel disque dur virtuel, elle regarde d'abord dans l'image de différenciation. Si le secteur est présent, il est renvoyé à partir de là ; sinon VirtualBox regarde dans le parent. En d'autres termes, le parent devient en lecture seule ; on n'écrit plus jamais dedans mais il est lu si un secteur n'a pas changé.  
On peut enchaîner les images de différenciation. Si une autre image de différenciation est créée pour un disque virtuel qui a déjà une image de différenciation, il devient le "petit-fils" du parent d'origine. La première image de différenciation devient alors également en lecture seul et les opérations d'écriture ne vont que dans l'image de différenciation du second niveau. Lors de la lecture à partir d'un disque virtuel, VirtualBox a besoin de regarder d'abord dans la deuxième image de différenciation, puis dans la première si le secteur n'a pas été trouvé, puis dans l'image d'origine.  
Il peut y avoir un nombre illimité d'images de différenciation et chaque image peut avoir plus d'un enfant. Il s'en suit que les images de différenciation peuvent constituer une arborescence complexe avec des parents, des "fratries" et des enfants, en fonction de la complexité de la configuration de votre machine. Les opérations d'écriture vont toujours dans l'image de différenciation "active" attachée à la machine, et pour les opérations de lecture, VirtualBox peut avoir besoin de regarder jusqu'aux parents dans la chaîne, jusqu'à ce qu'il trouve le secteur en question. Vous pouvez regarder l'arborescence dans le gestionnaire de médias virtuels :  

Dans toutes ces situations, du point de vue de la machine virtuelle, le disque dur virtuel se comporte comme n'importe quel autre disque. Pendant que la machine virtuelle est en fonction, il y a un léger ralentissement (overhead) E/S d'exécution car il se peut que VirtualBox doive regarder des secteurs plusieurs fois. Cela ne se voit cependant pas, puisque les tables d'informations des secteurs sont toujours gardées en mémoire et peuvent être consultées rapidement.  
On utilise des images de différenciation dans les situations suivantes :  

1. Les instantanés. Quand vous créez un instantané comme expliqué dans la section précé-dente, VirtualBox "gèle" les images attachées à la machine virtuelle et crée des images de différenciation pour chacun d'eux (pour être précis, une par image qui n'est pas en mode "write-through"). Du point de vue de la machine virtuelle, les disques virtuels continuent d'agir comme avant, pais toutes les opérations d'écriture vont dans les images de différenciation. Chaque fois que vous créez un autre instantané, pour chaque disque dur attaché, une autre image de différenciation est créée et attachée, formant une chaîne ou une arborescence.  
Donc, vous voyez que l'image du disque d'origine est maintenant attachée à un instantané, ce qui représente l'état du disque quand on a pris l'instantané.  
Si vous restaurez maintenant un instantané – à savoir, si vous voulez revenir à l'état exact de la machine stocké dans le dépôt –, il se produit la chose suivante :  
a) VirtualBox copie les paramètres de la machine virtuelle copiés dans vinstantané vers la machine virtuelle. Du coup, si vous avez fait des modifications dans la configuration après avoir pris l'instantané, elles sont annulées.  
b) Si vous avez pris l'instantané quand la machine était en fonction, il contient un état sauvegardé de la machine et cet état est restauré également ; après la restauration de l'instantané, la machine sera en état "sauvegardé" et elle reprendra son exécution là où elle avait été commencée la fois suivante. Sinon, la machine sera dans l'état "éteint" et elle fera un démarrage complet.  
c) Pour chaque image de disque attachée, à la machine, l'image de différenciation contenant les opérations d'écriture depuis que l'instantané actuel a été pris est supprimée et l'image du parent originel est réactivée. (Si vous avez restauré l'instantané "racine", ce sera l'image de disque racine de tous les attachements ; sinon ce sera d'autres images de différenciation descendantes). Cela restaure de fait l'ancien état de la machine.  
Si vous effacez plus tard un instantané afin de gagner de l'espace disque, chaque attachement de disque des images de différenciation devient obsolète. Dans ce cas, l'image de différenciation du disque ne peut pas être tout simplement effacée. VirtualBox doit plutôt regarder chaque secteur de l'image de différenciation et le copier dans le parent ; ceci s'appelle des images de "synchronisation" et cela peut être une procédure longue selon la taille de l'image de différenciation. Il se peut qu'il faille temporairement une importante quantité d'espace disque supplémentaire avant que l'image de différenciation rendue obsolète par l'opération de synchronisation ne soit effacée.  
2. Les images immuables. Quand une image passe en mode "immuable", une image de différenciation est créée également. Comme  pour les instantanés, l'image parent devient alors en lecture seule et l'image de différenciation reçoit toutes les opérations d'écriture.  
Chaque fois qu'on démarre la machine virtuelle, toutes les images immuables qui y sont attachées voient leur image de différenciation spécifique nettoyée, ce qui réinitialise de fait le disque virtuel de la machine virtuelle à chaque redémarrage.  

[Retour à la table des matières](#Table des matières)

# 5.6 Cloner des images de disque<a id="mark5.6"></a>

Vous pouvez dupliquer des fichiers images de disque dur sur le même hôte pour produire rapidement une deuxième machine virtuelle avec la même configuration de système d'exploitation.  
Néanmoins, vous devriez ne faire des copies d'images de disques durs virtuels que en utilisant l'outil fourni par VirtualBox ; voir chapitre [8.24 VBoxManage clonehd](#mark8.24) car VirtualBox affecte un numéro d'identifiant unique (UUID) à chaque image de disque, qui est stocké dans l'image et VirtualBox refusera de fonctionner avec deux images ayant le même numéro. Si vous essayez, par accident, de réimporter une image de disque que vous avez copiée normalement, vous pouvez faire une seconde copie en utilisant l'outil de VirtualBox et l'importer à la place.  
Remarquez que les distributions Linux récentes identifient le disque dur de démarrage à partir de l'ID du disque. L'ID utilisé par VirtualBox pour un lecteur est déterminé à partir de l'UUID de l'image du disque dur virtuel. Donc si vous clonez une image de disque et si vous essayez de démarrer l'image, copiée il se peut que l'invité ne puisse pas déterminer son propre disque de démarrage car l'UUID a changé. Dans ce cas, vous devez adapter l'ID du disque dans le script de votre chargeur de démarrage (par exemple `/boot/grub/menu.lst)`. L'ID d'un disque ressemble à ceci :  

`scsi-SATA_VBOX_HARDDISK_VB5cfdb1e2-c251e503`

L'ID de l'image copiée peut être déterminée avec:  

`hdparm -i /dev/sda`  

[Retour à la table des matières](#Table des matières)

# 5.7 Mise en cache des E/S dans l'hôte<a id="mark5.7"></a>

À partir de la version 3.2, VirtualBox peut éventuellement désactiver la mise en cache de l'E/S qu'effectuerait le système d'exploitation hôte sur les fichiers images du disque.  

Traditionnellement, VirtualBox ouvrait des fichiers images de disque comme des fichiers nor-maux, ce qui faisait qu'ils étaient mis en cache par le système d'exploitation hôte comme n'importe quel autre fichier. Le principal avantage en est la vitesse : quand l'OS invité écrit sur le disque et quand le cache de l'hôte utilise l'écriture différée, l'opération d'écriture peut être déclarée terminée pour l'OS invité rapidement alors que l'OS hôte peut effectuer l'opération sans synchronisation. De même, quand vous démarrez une VM une deuxième fois et si vous avez assez de mémoire disponible pour que l'OS l'utilise pour la mise en cache, de grandes parties du disque dur virtuel peuvent aller dans la mémoire du système et la VM peut accéder plus rapidement aux données.  
Remarquez que cela ne s'applique qu'aux fichiers images ; la mise en tampon ne fonctionnait jamais pour les disques présents sur des supports iSCSI distants, ce qui est le scenario le plus classique dans les paramétrages du type enterprise (voir chapitre [5.10 Serveurs iSCSI).](#mark5.10)  
Si la mise en tampon est un paramètre par défaut utile pour virtualiser quelques machines sur un ordinateur de bureau, elle présente quelques inconvénients :  

1. L'écriture différée dans le cache de l'OS hôte est moins sécurisée. Quand l'OS invité écrit des données, il considère que les données sont écrites même si elles ne sont pas encore arrivées sur le disque physique. Si, pour une raison quelconque, l'écriture n'a pas lieu (problème électrique, plantage de l'hôte), les chances de perdre des données augmentent.  
2. Les fichiers images de disque ont tendance à être importantes. Leur mise en cache utilise donc très vite tout le cache de l'OS hôte. Selon l'efficacité de la gestion du cache par l'OS hôte, cela peut ralentir énormément l'hôte, surtout si plusieurs VMs fonctionnent en même temps. Par exemple, sur des hôtes Linux, la mise en cache de l'hôte peut aboutir à un report, par Linux, de toutes les écritures jusqu'à ce que le cache de l'hôte soit presque plein, avant d'écrire tous ces changements en une fois, ce qui peut suspendre l'exécution d'une VM pendant quelques minutes. Cel peut donner des erreurs d'E/S dans l'invité car les requêtes E/S excèderaient le timeout.  
3. La mémoire physique est souvent gaspillée, car les systèmes d'exploitation hôtes ont en général leur propre système de mise en cache des E/S, ce qui aboutit à la mise en cache double des données (à la fois dans le cache de l'invité et de l'hôte), avec peu d'effet.  
Si vous décidez de désactiver la mise en cache des E/S dans l'hôte, pour les raisons ci-dessus, VirtualBox utilise son propre petit cache pour mettre les écritures en tampon, mais en général, aucune lecture de ce cache n'est fait par l'OS invité. De plus, VirtualBox supporte complètement l'E/S asynchrone pour ses contrôleurs SATA, SCSI et SAS virtuels via plusieurs threads d'E/S.  
Les E/S asynchrones n'étant pas supportées par les contrôleurs IDE, pour des raisons de performance, vous pourriez vouloir laisser la mise en cache de l'hôte pour les contrôleurs IDE virtuels de votre VM.  
Pour cette raison, VirtualBox vous permet de configurer si la mise en cache des E/S est utilisée pour chaque contrôleur E/S, indépendamment. Soit décochez la case "Utiliser la mise en cache des E/S de l'hôte" des paramètres de stockage, d'un contrôleur de stockage donné, soit utilisez la commande `VBoxManage` suivante pour désactiver la mise en cache des E/S de l'hôte pour un contrôleur de stockage virtuel :  

`VBoxManage storagectl <vm> --name <nomcontrôleur> --hostiocache off`  

Voir chapitre [8.19 VBoxManage storagectl](#mark8.19) pour les détails.  
Également pour les raisons ci-dessus, VirtualBox utilise maintenant par défaut des contrôleurs SATA pour les nouvelles machines virtuelles.  

[Retour à la table des matières](#Table des matières)

# 5.8 Limiter la bande passante des images de disque<a id="mark5.8"></a>

À partir de la version 4.0, VirtualBox permet de limiter la bande passante maximale utilisée pour les E/S asynchrones. De plus, il supporte le partage des limites entre des groupes de bandes passantes pour plusieurs images. Il est possible d'avoir plus d'une limite.  
Les limites sont configurées via VBoxManage. L'exemple ci-dessous crée un groupe de bandes passantes nommé "Limit", et pose la limite à 20 Mo/s et affecte le groupe aux disques attachés à la VM :  

`VBoxManage bandwidthctl "nom VM" add Limit --type disk --limit 20M`  
`VBoxManage storageattach "nom VM" --controller "SATA" --port 0 --device 0 --type hdd`  
`--medium disk1.vdi --bandwidthgroup Limit`  
`VBoxManage storageattach "nom VM" --controller "SATA" --port 1 --device 0 --type hdd`  
`--medium disk2.vdi --bandwidthgroup Limit`  

Tous les disques d'un groupe partagent la limite de la bande passante, c'est-à-dire que dans l'exemple ci-dessus la bande passante des deux images combinées ne peut jamais dépasser 20Mo/s. Toutefois, si un disque n'a pas besoin de bande passante, l'autre peut utiliser la bande passante restante dans son groupe.  
Les limites pour chaque groupe peuvent être modifiées pendant que la VM est en fonction, ce qui applique immédiatement les modifications. L'exemple ci-dessous modifie le groupe créé dans l'exemple ci-dessus en 10 Mo/s:  

`VBoxManage bandwidthctl "nom VM" set Limit --limit 10M`  
[Retour à la table des matières](#Table des matières)

# 5.9 Support des CD/DVD<a id="mark5.9"></a>

Le/les lecteur(s) CD/DVD virtuels ne supportent par défaut que la lecture. Vous pouvez modifier la configuration d'un média pendant l'exécution. Vous pouvez choisir entre trois options pour présenter les données d'un média :  

* Lecteur hôte définit que l'invité peut lire sur un média du lecteur hôte.  
* Fichier image (en général un fichier ISO) donne à l'invité un accès en lecture seule aux données de l'image.  
* EVide signifie un lecteur sans média dedans.  

La modification entre les situations ci-dessus, le changement de média dans le lecteur hôte ou de fichier image signalera un changement de média au système d'exploitation invité, lequel peut réagir au changement (par exemple, en démarrant un programme d'installation).  
Les changements de médias peuvent être empêchés par l'invité et VirtualBox répercute cela en verrouillant le lecteur hôte si besoin. Vous pouvez forcer le retrait d'un média en pareilles situations via l'interface graphique de VirtualBox ou l'outil en ligne de commandes VBoxManage. En fait, cela revient à une éjection en urgence, ce que supportent de nombreux lecteurs deCD/DVD avec tous les effets colatéraux associés : l'OS invité peut renvoyer des messages d'erreur comme sur du vrai matériel, les applications invitées peuvent mal se comporter. Utilisez ceci avec précaution.  

Note: La chaîne d'identification du lecteur fournie à l'invité (qui serait affichée, dans l'invité, par les outils de configuration tels que le gestionnaire de périphériques de Windows) est toujours "VBOX CD-ROM", indépendamment de la configuration actuelle du lecteur virtuel. Ceci pour empêcher la détection d'être faite en retard dans le systèm d'exploitation invité à chaque fois que la configuration change.  

L'émulation standard des CD/DVD ne permet de lire que des formats de CD et de DVD de données standards. Une possibilité supplémentaire, expérimentale, est de donner un accès direct de l'invité au lecteur CD/DVD de l'hôte en activant le mode "passthrough". Selon le matériel hôte, cela peut potentiellement faire marcher trois choses :  

* L'écriture sur CD/DVD depuis l'invité, si le lecteur DVD de l'hôte est un graveur de CD/DVD ;  
* la lecture de CDs audio ;  
* la lecture de DVDs chiffrés.  

Il existe une case à cocher "Passthrough" dans la boîte de dialogue graphique de configuration du média attaché aux contrôleurs de stockage, ou vous pouvez utiliser l'option `--passthrough` de VBoxManage `storageattach` ; voir chapitre [8.18 VBoxManage storageattach](#mark8.18) pour les détails.  
Même si pass-through est activé, les commandes non sûres telles que la mise à jour du firmware du lecteur, seront bloquées. Les formats de CD vidéo ne sont pas du tout supportés, même pas en mode passthrough, et on ne peut pas les lire à partir d'une machine virtuelle.  
Sur les hôtes Solaris, pass-through exige de lancer VirtualBox avec de vrais droits d'administrateur du fait de mesures de sécurité renforcées par l'hôte.  

[Retour à la table des matières](#Table des matières)

# 5.10 Serveurs iSCSI<a id="mark5.10"></a>

iSCSI signifie "Internet SCSI" et c'est un standard qui permet d'utiliser le protocole SCSI à travers des des connexions Internet. (TCP/IP). En particulier, avec l'arrivée du Gigabit Ethernet, on peut désormais se permettre d'attacher des serveurs de stockage iSCSI simplement comme des disques durs distants à un réseau d'ordinateurs. Dans la terminologie iSCSI, le serveur fournissant les ressources de stockage s'appelle la "cible iSCSI", tandis que le client qui se connecte au serveur et qui accède à ses ressources s'appelle "l'initiateur iSCSIr".  
VirtualBox peut présenter de manière transparente du stockage distant iSCSI à une machine virtuelle en tant que disque dur. Le système d'exploitation ne verra pas de différence entre une image de disque virtuel (fichier VDI) et une cible iSCSI. Pour obtenir cela, VirtualBox comporte un initiateur iSCSI intégré.  
Le support iSCSI de VirtualBox a été développé selon le standard iSCSI et il devrait fonctionner avec toutes les cibles iSCSI conformes au standard. Pour utiliser une cible iSCSI avec VirtualBox, vous devez utiliser la ligne de commande ; voir chapitre [8.18 VBoxManage storageattach.](#mark8.18)  

[Retour à la table des matières](#Table des matières)

# 6 Le réseau virtuel<a id="mark6"></a>

Comme indiqué brièvement au chapitre [3.8 Paramètres réseau,](#mark3.8) VirtualBox fournit jusqu'à huit cartes Ethernet PCI virtuelles pour chaque machine virtuelle. Pour chaque carte, vous pouvez sélectionner individuellement  

1. le matériel virtualisé ainsi que 
2. le mode de virtualisation effectué par la carte virtuelle par rapport à votre matériel réseau physique sur l'hôte.  

Quatre des cartes réseaux peuvent être configurées dans la section "Réseau" de la boîte de dialogue des paramètres de l'interface graphique de VirtualBox. Vous pouvez configurer les huit cartes réseaux en ligne de commande avec VBoxManage modifyvm ; voir chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  
Ce chapitre explique les différents paramètres réseaux avec davantage de détails.  

[Retour à la table des matières](#Table des matières)

# 6.1 Matériel réseau virtuel<a id="mark6.1"></a>

Pour chaque carte, vous pouvez sélectionner individuellement le type de matériel qui sera présenté à la machine virtuelle. VirtualBox peut virtualiser les six types de matériel réseau suivants :  

* AMD PCNet PCI II (Am79C970A) ;  
* AMD PCNet FAST III (Am79C973, par défaut) ;  
* Intel PRO/1000 MT Desktop (82540EM) ;  
* Intel PRO/1000 T Server (82543GC) ;  
* Intel PRO/1000 MT Server (82545EM) ;  
* Adaptateur réseau paravirtualisé (virtio-net).  

PCNet FAST III est celle par défaut parce qu'elle est supportée par presque tous les systèmes d'exploitation non inclus ainsi que par le chargeur de démarrage GNU GRUB. Par exception, les adaptateurs de la famille Intel PRO/1000 ont été choisis pour certains types de systèmes d'exploitation invités qui n'incluent plus de pilotes pour la carte PCNet, tel que Windows Vista.  
Le type Intel PRO/1000 MT Desktop fonctionne avec Windows Vista aet les versions supérieures. La variante T Server de la carte Intel PRO/1000 est reconnue par les invités Windows XP sans installer de pilotes supplémentaires. La variante MT Server facilite les imports
d'OVF à partir d'autres plateformes.  
"L'adaptateur réseau paravirtualisé (virtio-net)" est spécial. Si vous le sélectionnez, VirtualBox ne virtualise pas du matériel réseau classique (à savoir supporté par les systèmes d'exploitation invités non intégrés). VirtualBox s'attend alors à ce qu'une interface logicielle spéciale pour les environnements virtualisés provienne de l'invité, évitant ainsi la complexité de l'émulation du matériel réseau et de la performance d'importation du réseau. À partir de la version 3.1, VirtualBox fournit un support des pilotes réseaux du standard industriel "virtio", qui font partie du projet libre KVM.  
Les pilotes réseaux "virtio" sont disponibles pour les systèmes d'exploitation invités suivants :  

* Les noyaux Linux version 2.6.25 ou supérieur peuvent être configurés pour fournir le support virtio ; certaines distributions ont back-porté aussi virtio dans d'anciens noyaux.  
* Pour Windows 2000, XP et Vista, les pilotes virtio peuvent être téléchargés et installés sur la page Web du projet KVM.  
<http://www.linux-kvm.org/page/WindowsGuestDrivers>  
VirtualBox contient aussi un support limité pour ce qu'on appelle jumbo frames, c'est-à-dire les paquets réseaux de plus de 1500 octets de données, si vous utilisez le réseau Intel de virtualisation bridgé. En d'autres termes, jumbo frames ne sont pas supportés avec les périphériques réseaux AMD ; dans ce cas, jumbo packets will seront rejetés en silence côté récepteur et transmetteur. Les systèmes d'exploitation invités qui essaient d'utiliser cette fonctionnalité verront cela comme une perte de paquets, ce qui peut provoquer un comportement inattendu de l'application dans l'invité. Cela ne pose pas problème avec les systèmes d'exploitation invités dans leur configuration par défaut, vu que jumbo frames doit être explicitement activé.  

[Retour à la table des matières](#Table des matières)

# 6.2 Introduction aux modes réseaux<a id="mark6.2"></a>

Chacun des huit adaptateurs réseaux peut être configuré séparément pour agir dans l'un des modes suivants :  

Non attaché Dans ce mode, VirtualBox dit à l'invité qu'une carte réseau est présente, mais qu'il n'y a pas de connexion – comme si aucun câble Ethernet n'était branché dans la carte.  
De cette façon, il est possible de "retirer" le câble réseau virtuel Ethernet et de couper la connexion, ce qui peut être utile pour informer un système d'exploitation invité qu'aucune connexion réseau n'est disponible, et ceci renforce une reconfiguration.  
Network Address Translation (NAT) Si vous ne voulez que naviguer sur le Web, télécharger des fichiers et lire des messages dans l'invité, ce mode par défaut devrait vous suffir et vous pouvez sauter sans souci le reste de cette section. Merci de remarquer qu'il existe certaines limitations quand on utilise le partage de fichiers Windows (voir chapitre [6.3.3 Limites du NAT](#mark6.3.3) pour des détails).  
Réseau NAT Le réseau NAT est une nouvelle forme de NAT introduite dans VirtualBox 4.3. Voir chapitre [6.4 Network Address Translation Service (expérimental)](#mark6.4) pour les détails.  
Réseau avec pon t Ceci est pour les besoins réseaux plus avancés tels que des simulations de réseaux et des exécutions de serveurs dans un invité. Lorsque vous l'activez, VirtualBox se connecte à une de vos cartes réseaux installées et il échange des paquets réseaux directement, dépassant la pile réseau du système d'exploitation de votre hôte.  
Réseau interne On peut l'utiliser pour créer un type différent de réseau sur une base logicielle, visible pour les machines sélectionnées, mais pas pour les applications de l'hôte ou du monde extérieur.  
Réseau Host-only On peut l'utiliser pour créer un réseau contenant l'hôte et un ensemble de machines virtuelles, sans avoir besoin de l'interface réseau physique de l'hôte. À la place, une interface réseau virtuelle (identique à une interface loopback) est créée sur l'hôte, offrant une connectivité entre les machines virtuelles et l'hôte.  
Réseau générique Mode rarement utilisé, il partage la même interface réseau générique en permettant à l'utilisateur de sélectionner un pilote qui peut être inclu dans VirtualBox ou distribué dans un pack d'extension.  
Pour l'instant, il existe potentiellement deux sous-modes disponibles :  

Tunnel UDP On peut l'utiliser pour interconnecter directement, facilement et de manière transparente des machines virtuelles qui fonctionnent sur différents hôtes, via une infrastructure réseau existante.  
Réseau VDE (Virtual Distributed Ethernet) Cette option peut être utilisée pour se connecter à un service Ethernet distribué virtuel sur un hôte Linux ou FreeBSD. Pour l'instant ceci nécessite de compiler VirtualBox à partir des sources car les paquets d'Oracle ne l'incluent pas.  

Les sections suivantes décrivent les modes réseaux disponibles avec plus de détails.  

[Retour à la table des matières](#Table des matières)

# 6.3 Network Address Translation (NAT)<a id="mark6.3"></a>

Network Address Translation (NAT) est la manière la plus simple d'accéder à un réseau externe à partir d'une machine virtuelle. Habituellement, cela n'exige aucune configuration sur le réseau hôte ou le système invité. C'est pourquoi c'est le mode réseau par défaut de VirtualBox.  
Une machine virtuelle dont NAT est activé agit exactement comme un vrai ordinateur qui se connecte à Internet par un routeur. Le "routeur", dans ce cas, est le moteur réseau de VirtualBox, qui dirige le trafic depuis et vers la machine virtuelle de façon transparente. Dans VirtualBox, ce routeur se place entre chaque machine virtuelle et l'hôte. Cette séparation maximise la sécurité puisque, par défaut, les machines virtuelles ne peuvent pas se parler.  
L'inconvénient du mode NAT est que, comme dans un réseau privé, derrière un routeur, la machine virtuelle est invisible et injoignable depuis le réseau extérieur ; vous ne pouvez pas lancer de serveur de cette façon, sauf si vous réglez une redirection de ports (décrite ci-dessous).  
Les blocs réseaux envoyés par le système d'exploitation invité sont reçus par le moteur NAT de VirtualBox qui extrait les données TCP/IP et les envoie en utilisant le système d'exploitation hôte. Pour une application de l'hôte ou un autre ordinateur du même réseau comme l'hôte, cela fonctionne comme si des données étaient envoyées par l'application VirtualBox de l'hôte, en utilisant une adresse IP appartenant à l'hôte. VirtualBox écoute les réponses aux paquets envoyés et les réempaquète et les renvoie à la machine invitée sur son réseau privé.  
La machine virtuelle reçoit son adresse et sa configuration réseau sur le réseau privé à partir d'un serveur DHCP intégré à VirtualBox. L'adresse IP ainsi affectée à la machine virtuelle se trouve en général sur un réseau complètement différent de l'hôte. On peut paramétrer l'utilisation de NAT pour autant de cartes qu'a une machine virtuelle, la première carte est connectée au réseau privé sur 10.0.2.0, la deuxième carte sur 10.0.3.0 et ainsi de suite. Si vous avez besoin de modifier la plage d'adresses affectées à l'invité pour une raison quelconque, merci de vous reporter au chapitre [9.11 Peaufiner le moteur NAT de VirtualBox.](#mark9.11)  

[Retour à la table des matières](#Table des matières)

# 6.3.1 Configurer la redirection de ports avec NAT<a id="mark6.3.1"></a>

Comme la machine virtuelle est connectée à un réseau privé interne de VirtualBox et invisible pour l'hôte, les services réseaux de l'invité ne sont pas accessibles à la machine hôte ou à d'autres ordinateurs du même réseau. Cependant, comme un routeur physique, VirtualBox peut rendre disponibles des services sélectionnés pour le monde extérieur à l'invité via la redirection de port. Cela veut dire que VirtualBox écoute certains ports sur l'hôte et renvoie tous les paquets qui y arrivent vers l'invité, sur le même port ou sur un autre.  
Pour une application de l'hôte ou d'autres machines physiques (ou virtuelles) du réseau, cela fonctionne comme si les services étaient derrière un proxy qui tournerait en fait sur l'hôte. Cela signifie également que vous ne pouvez pas lancer le même service sur les mêmes ports de l'hôte.  
Néanmoins, vous pouvez toujours tirer parti de lancer un service dans une machine virtuelle – par exemple, les services de la machine hôte ou d'autres machines virtuelles ne peuvent pas -être atteintes ou plantées par une faille ou un bogue du service, et le service peut fonctionner dans un autre système d'exploitation que le système hôte.  

Pour configurer la redirection de ports, vous pouvez utiliser l'éditeur graphique de redirection de ports que vous trouverez dans la boîte de dialogue des paramètres réseaux des adaptateurs réseaux configurés pour utiliser NAT. Vous pouvez y orienter les ports de l'hôte vers les ports de l'invité pour permettre au trafic réseau d'être acheminé sur un port spécifique de l'invité.  
Vous pourriez utiliser un autre outil en ligne de commande, VBoxManage ; pour les détails, merci de vous reporter au chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  
Vous devrez savoir les ports de l'invité utilisés par les services de l'invité et décider des ports à utiliser sur l'hôte (souvent, mais pas toujours, vous voudrez utiliser les mêmes ports sur l'invité et sur l'hôte). Vous pouvez utiliser n'importe quel port de l'hôte qui ne sont pas déjà utilisés par un service. Par exemple, pour régler les connexions NAT entrantes pour un serveur ssh de l'invité, utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --natpf1 "guestssh,tcp,,2222,,22"`  

Avec l'exemple ci-dessus, tout le trafic TCP arrivant sur le port 2222 de n'importe quelle interface de l'hôte sera redirigé sur le port 22 de l'invité. Le nom du protocole tcp est un attribut obligatoire définissant le protocole qu'il faudrait utiliser pour la redirection (on pourrait utiliser udp). Le nom guestssh est purement descriptif et il sera auto-généré si vous n'en mettez pas. Le numéro après --natpf indique la carte réseau, comme dans d'autres endroits de VBoxManage.  
Pour supprimer de nouveau cette règle de redirection, utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --natpf1 delete "guestssh"`  

Si, pour une raison quelconque, l'invité utilise une adresse IP affectée de manière statique non gérée par le serveur DHCP interne, vous devez spécifier l'IP de l'invité lors de l'enregistrement de la règle de redirection :  

`VBoxManage modifyvm "nom VM" --natpf1 "guestssh,tcp,,2222,10.0.2.19,22"`  

Cet exemple est identique au précédent, sauf que qu'on dit au moteur NAT qu'il peut trouver l'invité à l'adresse 10.0.2.19.  
Pour rediriger tout le trafic rentrant depuis une interface spécifique de l'hôte sur l'invité, spécifiez l'IP de cette interface de l'hôte comme ceci :  

`VBoxManage modifyvm "nom VM" --natpf1 "guestssh,tcp,127.0.0.1,2222,,22"`  

Ceci redirige tout le trafic TCP arrivant sur l'interface localhost (127.0.0.1) via le port 2222 sur le port 22 de l'invité.  
Il est possible de configurer les connexions NAT entrantes pendant que la VM est en fonction, voir chapitre [8.13 VBoxManage controlvm.](#mark8.13)  

[Retour à la table des matières](#Table des matières)

# 6.3.2 Démarrer avec PXE avec NAT<a id="mark6.3.2"></a>

Le démarrage avec PXE est désormais supporté en mode NAT. Le serveur DHCP de NAT fournit un fichier d'amorçage dont le nom ressemble à `nomvm.pxe` si le répertoire TFTP existe dans le répertoire où se trouve le fichier VirtualBox.xml de l'utilisateur. L'utilisateur est chargé de fournir `nomvm.pxe`.  

[Retour à la table des matières](#Table des matières)

# 6.3.3 Limites du NAT<a id="mark6.3.3"></a>

Il y a quatre limites du mode NAT que les utilisateurs devraient savoir :  

Limite du protocole ICMP : Certains outils de débogage réseau souvent utilisés (comme ping ou tracerouting) s'appuient sur le protocole ICMP pour envoyer/recevoir des messages. Si le support ICMP a été amélioré avec VirtualBox 2.1 (ping devrait maintenant fonctionner), d'autres outils peuvent ne pas marcher de manière fiable.  

La réception des broadcasts UDP n'est pas fiable : L'invité ne reçoit pas de broadcasts fiables car, pour économiser des ressources, il n'écoute qu'un certain temps après que l'invité a envoyé des données UDP sur un port particulier. En conséquence, la résolution de nom NetBios basée sur les broadcasts ne fonctionne pas toujours (mais WINS fonctionne toujours). Un contournement est d'utiliser l'IP numérique du serveur désiré en notation `\server\share`.  

Les protocoles tels que GRE ne sont pas supportés : Les protocoles autres que TCP et UDP ne sont pas supportés. Cela signifie que certains produits VPN (comme PPTP de Microsoft) ne peuvent pas être utilisés. Il existe d'autres produits VPN qui utilisent simplement TCP et UDP.  

Redirection des ports de l'hôte < 1024 impossible : Sur les hôtes basés sur Unix, (comme Linux, Solaris, Mac OS X), il n'est pas possible de trouver des ports en-dessous de 1024 pour les applications non lancées par root. Il s'en suit que si vous essayez de configurer la redirection de tels port, la VM refusera de démarrer.  

Ces limites ne concernent normalement pas les utilisations standards du réseau. Mais la présence de NAT a également des effets subtils qui peuvent interférer avec des protocoles qui, en principe, fonctionnent. Un exemple est NFS, où le serveur est souvent configuré pour refuser les connexions depuis des ports non privilégiés (donc les ports qui ne sont pas inférieurs à 1024).  

[Retour à la table des matières](#Table des matières)

# 6.4 Network Address Translation Service (expérimental)<a id="mark6.4"></a>

Le service Network Address Translation (NAT) fonctionne comme un routeur domestique en regroupant les systèmes qui l'utilisent dans un réseau et en écartant les systèmes extérieurs d'accéder aux systèmes en son sein tout en permettant aux systèmes qu'il contient de communiquer entre eux et avec l'extérieur via TCP et UDP en IPv4 et IPv6.  
Un service NAT est rattaché à un réseau interne. Les machines virtuelles qui doivent l'utiliser devraient être branchées au réseau interne. Le nom du réseau interne se choisit à la création du service NAT et le réseau interne sera créé s'il n'existe pas déjà. Voici un exemple de commande pour créer un réseau NAT :  

`VBoxManage natnetwork add -t nat-int-network -n "192.168.15.0/24" -e`  

Ici, "nat-int-network" est le nom du réseau interne à utiliser et "192.168.15.0/24" est l'adresse du réseau et l'interface due masque du service NAT. Dans cette configuration statique, par défaut, l'adresse affectée à la passerelle sera 192.168.15.1 (adresse suivant celle de l'interface), bien que cela soit sujet à changement. Pour connecter un serveur DHCP au réseau interne, nous modifions l'exemple comme suit :  

`VBoxManage natnetwork add -t nat-int-network -n "192.168.15.0/24" -e -h on`  

ou pour ajouter un serveur DHCP au réseau après l'avoir créé :  

`VBoxManage natnetwork modify -t nat-int-network -h on`  

Pour le désactiver à nouveau, utilisez :  

`VBoxManage natnetwork modify -t nat-int-network -h off`  

Le serveur DHCP fournit la liste des noms de serveurs enregistrés mais elle n'identifie pas les serveurs du réseau 127/8.  
Pour démarrer le service NAT, utilisez la commande suivante :  

`VBoxManage natnetwork start -t nat-int-network`  

Si un serveur DHCP est connecté au réseau, il démarrera avec le service réseau NAT.  

`VBoxManage natnetwork stop -t nat-int-network`  

arrête le service réseau NAT ainsi que le serveur DHCP s'il y en a un.  
Pour effacer le service réseau NAT, utilisez :  

`VBoxManage natnetwork remove -t nat-int-network`  

Cette commande ne supprime pas le serveur DHCP s'il y en a un actif sur le réseau interne.  
La redirection de Ports est supportée (en utilisant le paramètre `"-p"` pour switch for IPv4 et `"-P"` pour IPv6) :  

`VBoxManage natnetwork modify -t nat-int-network -p "ssh:tcp:[]:10022:[192.168.15.15]:22"`  

Ceci ajoute une règle de redirection de pots depuis le 10022 TCP de l'hôte vers le 22 de l'invité ayant l'adresse IP 192.168.15.15. Pour effacer la règle, utilisez :  

`VBoxManage natnetwork modify -t nat-int-network -p delete ssh`  

Il est possible d'associer un service NAT à l'interface désirée :  

`VBoxManage setextradata global "NAT/win-nat-test-0/SourceIp4" 192.168.1.185`  

Pour voir la liste des réseaux NAT enregistrés, utilisez :  

`VBoxManage list natnetworks`  

[Retour à la table des matières](#Table des matières)

# 6.5 Réseau Bridgé<a id="mark6.5"></a>

Avec le réseau bridgé, VirtualBox utilise un pilote de périphérique sur votre système hôte qui filtre les données de votre adaptateur réseau physique. Ce pilote s'appelle donc un pilote "net filter".  
Il permet à VirtualBox d'intercepter les données du réseau physique et d'y envoyer des données, ce qui crée de fait une nouvelle interface réseau logicielle. Quand un invité utilise une telle interface, cela se passe, sur le système hôte, comme si l'invité était connecté physiquement à l'interface réseau en utilisant un câble réseau :   l'hôte peut envoyer des données à l'invité via cette interface et en reçoit des données. Cela veut dire que vous pouvez régler du routage ou des ponts entre l'invité et le reste de votre réseau.  
Pour que cela fonctionne, VirtualBox a besoin d'un pilote de périphérique sur votre système hôte. La manière dont fonctionne le réseau bridgé a été complètement réécrite avec VirtualBox 2.0 et 2.1, selon le système d'exploitation hôte. Du point de vue utilisateur, la principale différence est qu'une configuration complexe n'est plus nécessaire, quel que soit le système d'exploitation hôte supporté.  

Note: Même si TAP n'est plus nécessaire sur Linux avec le réseau bridgé, vous pouvez toujours utiliser les interfaces TAP pour certains paramétrages avancés puisque vous pouvez connecter une VM à n'importe quel interface de l'hôte – qui pourrait être également une interface TAP.  

Pour les hôtes Mac OS X et Solaris, les pilotes net filter étaient déjà ajoutés à VirtualBox 2.0 (vu que le support de Host Interface Networking existait à l'origine sur ces plateformes). Avec VirtualBox 2.1, les pilotes net filter ont été également ajoutés pour les hôtes Windows et Linux à la place des mécanismes précédemment présents dans VirtualBox pour ces plateformes ; surtout sur Linux, l'ancienne méthode impliquait de créer des interfaces TAP et des ponts, ce qui était complexe et variait d'une distribution à l'autre. Rien de tout cela n'est désormais nécessaire. Le réseau bridgé s'appelait jadis "Host Interface Networking" et on l'a renommé avec la version 2.2 sans changer ses fonctionnalités.  

Pour activer le réseau bridgé, tout ce que vous devez faire est d'ouvrir la boîte de dialogue des paramètres d'une machine virtuelle, d'aller sur l'onglet "Réseau" et de sélectionner "Réseau bridgé" dans la boîte à liste déroulante du champ "Attaché à". Au départ, sélectionnez l'interface désirée de l'hôte dans la liste en bas de la fenêtre, qui contient les interfaces réseaux physiques de vos systèmes. Sur un MacBook physique, par exemple, cela vous permettra de choisir entre "en1: AirPort" (qui est l'interface sans fil) et "en0: Ethernet", qui représente l'interface avec câble réseau.  

Note: Créer un pont avec une interface sans fil se fait différemment d'avec une interface filaire, car la plupart des adaptateurs sans ﬁl ne supportent pas le mode promiscuous. Tout le trafic doit utiliser l'adresse MAC de l'adaptateur sans fil de l'hôte, donc VirtualBox doit remplacer l'adresse MAC source dans l'en-tête Ethernet d'un paquet sortant pour s'assurer que la réponse sera envoyée à l'interface hôte. Quand VirtualBox voit un paquet entrant ayant pour adresse IP de destination celle appartenant à un des adaptateurs d'une machine virtuelle, il remplace l'adresse MAC de destination dans l'en-tête Ethernet par l'adresse MAC de l'adaptateur de la VM et il l'envoie. VirtualBox examine les paquets ARP et DHCP afin de découvrir les adresses IP des machines virtuelles.  

Selon votre système d'exploitation hôte, vous devriez garder en tête les limites suivantes :  
* Sur les hôtes Macintosh, la fonctionnalité est limitée quand on utilise AirPort (le réseau sans fil de Mac) pour du réseau bridgé. Actuellement, VirtualBox ne supporte l'IPv4 qu'avec AirPort. Pour les autres protocoles tels qu'IPv6 et IPX, vous devez choisir une interface filaire.  
* Sur les hôtes Linux, la fonctionnalité est limitée quand on utilise les interfaces sans fil pour le réseau bridgé. Actuellement, VirtualBox supporte le sans fil qu'en IPv4. Pour les autres protocoles tels qu'IPv6 et IPX, vous devez choisir une interface filaire.  
De plus, le paramétrage du MTU sur moins de 1500 octets sur unes interfaces filaires fournies par le pilote sky2 sur les Marvell Yukon II EC Ultra Ethernet NIC est connu pour provoquer une perte de paquets dans certaines conditions.  
Certains adaptateurs nettoient les tags VLAN matériellement. Cela ne permet pas d'utiliser le troncage de VLAN entre une VM et le réseau externe avec les noyaux Linux pre-2.6.27, ni avec les systèmes d'exploitation hôtes autres que Linux  .
* Sur les hôtes Solaris, il n'y a aucun support pour utiliser les interfaces sans fil. Le filtrage du trafic de l'invité par IPFilter n'est pas complètement supporté non plus à cause de restrictions techniques du sous-système réseau de Solaris. Ces problèmes devraient être résolus dans la future version Solaris 11.  
À partir de VirtualBox 4.1, sur les hôtes Solaris 11 (construction 159 et supérieur), il est possible d'utiliser les Crossbow Virtual Network Interfaces (VNICs) de Solaris directement, avec VirtualBox, sans configuration dépassant l'exclusivité de chaque VNIC pour chaque interface réseau de l'invité  .
De VirtualBox 2.0.4 à VirtualBox 4.0, VNICs peuvent être utilisés, mais avec les précautions suivantes :  

	*	 Un VNIC ne peut pas être partagé entre plusieurs interfaces réseaux invitées, c'est-à-dire que chaque interface réseau invitée doit avoir son propre et exclusif VNIC.  
	*	 Il faut affecter au VNIC et à l'interface réseau invitée qui utilise VNIC des adresses MAC identiques.  
Quand on utilise des interfaces VLAN avec VirtualBox, il faut les nommer selon le schéma de nommage PPA-hack (par exemple "e1000g513001"), sans quoi l'invité pourrait recevoir des paquets dans un format imprévu.  

[Retour à la table des matières](#Table des matières)

# 6.6 Réseau interne<a id="mark6.6"></a>

Le réseau interne est identique à celui bridgé dans le sens où la VM peut communiquer directement avec le monde extérieur. Toutefois, le "monde extérieur" se limite aux autres VMs sur le même hôte et connectées au même réseau interne.  
Même si, techniquement, on peut faire tout ce qu'on fait avec un réseau interne avec un le réseau bridgé, il présente des avantages de sécurité. En mode réseau bridgé, tout le trafic passe par l'interface physique du système hôte. Il est donc possible d'attacher un snifeur de paquets (tel que Wireshark) à l'interface hôte et d'enregistrer tout le trafic qui y transite. Si, pour une raison quelconque, vous préférez que deux ou plusieurs VMs sur une même machine communiquent en privé, en cachant leurs données au système et à l'utilisateur hôtes, le réseau bridgé n'est donc pas envisageable.  
Les réseaux internes sont créés automatiquement en tant que de besoin c'est-à-dire qu'il n'y a pas de configuration centrale. Chaque réseau interne est identifié simplement par son nom. Une fois qu'il y a plus d'une carte réseau virtuelle active avec le même ID réseau interne, le pilote support de VirtualBox "branchera" automatiquement les cartes et agira comme un switch. Les pilotes support de VirtualBox implémentent un switch Ethernet complet et supportent les frames broadcast/multicast et le mode promiscuous.  
Afin d'attacher la carte réseau d'une VM à un réseau interne, réglez son mode réseau sur "réseau interne". Il existe deux manières de faire cela :  

* Vous pouvez utiliser une boîte de dialogue "Paramètres" de laVM dans l'interface graphique de VirtualBox. Dans la catégorie "Réseau" de la boîte de dialogue des paramètres, sélectionnez "réseau interne" dans la liste déroulante des modes réseaux. Maintenant, sélectionnez le nom d'un réseau interne existant dans la liste déroulante en-dessous ou tapez un nouveau nom dans la zone d'édition.  
* Vous pouvez utiliser:  

`VBoxManage modifyvm "nom VM" --nic<x> intnet`  

Éventuellement, vous pouvez spécifier un nom de réseau par la commande:

`VBoxManage modifyvm "nom VM" --intnet<x> "nom réseau"`  

Si vous ne spécifiez pas de nom réseau, la carte réseau sera attachée au réseau intnet par défaut.  

Sauf si vous configurez les cartes réseaux (virtuelles) dans les systèmes d'exploitation invités qui participent au réseau interne pour utiliser des adresses IP statiques, vous pourriez vouloir utiliser le serveur DHCP qui est construit dans VirtualBox pour gérer des adresses IP pour le réseau interne. Merci de voir le chapitre [8.35 VBoxManage dhcpserver](#8.35) pour des détails.  
Par mesure de sécurité, l'implémentation Linux du réseau interne n'autorise que les VMs en fonction sous le même utilisateur à établir un réseau interne.  

[Retour à la table des matières](#Table des matières)

# 6.7 Réseau Host-only<a id="mark6.7"></a>

Le réseau Host-only est un autre mode réseau qui a été ajouté à la version 2.2 de VirtualBox.  
On peut le voir comme un mode hybride entre les modes réseaux bridgé et interne : comme en réseau bridgé, les machines virtuelles peuvent se parler entre elles et avec l'hôte comme si elles étaient connectées à un commutateur Ethernet physique. Au contraire, comme avec un réseau interne, il faut une interface réseau physique et les machines virtuelles ne peuvent pas parler au monde extérieur à l'hôte puisqu'elles ne sont pas connectées à une interface réseau physique.  
Quand on utilise le mode réseau host-only, VirtualBox crée une nouvelle interface logicielle sur l'hôte qui apparaît alors à côté de vos interfaces réseaux existantes. En d'autres termes, alors que le réseau bridgé et que l'interface physique existante est utilisée pour y attacher des machines virtuelles, avec le réseau host-only, une nouvelle interface "loopback" est créée sur l'hôte. Et alors qu'avec le réseau interne, le trafic entre les machines virtuelles n'est pas visible, le trafic sur l'interface "loopback" de l'hôte peut être intercepté.  
Le réseau Host-only est particulièrement utile pour les applicatifs virtuels préconfigurés où plusieurs machines virtuelles sont groupées et conçues pour collaborer. Par exemple, une machine virtuelle peut contenir un serveur web et une deuxième une base de données, et comme elles sont faites pour se parler, l'applicatif peut demander à VirtualBox de définir un réseau host-only pour les deux. Un deuxième réseau (bridgé) connecterait alors le serveur web au monde extérieur pour offrir des données, mais le monde extérieur ne peut pas se connecter à la base de données.  
Pour passer l'interface réseau d'une machine virtuelle en mode "host only" :  

* soit allez sur l'onglet "Réseau" de la boîte de dialogue des paramètres de la machine virtuelle dans l'interface graphique et sélectionnez "réseau host-only", soit
* en ligne de commandes, taper `VBoxManage` `modifyvm` `"nom VM"` `--nic<x> hostonly`; voir chapitre [8.8 VBoxManage modifyvm](#mark8.8) pour les détails.  
Pour le réseau host-only, comme avec le réseau interne, vous pouvez trouver utile le serveur DHCP construit dans VirtualBox. Il peut être activé puis gérer les adresses IP dans le réseau host-only, puisque sans cela, vous devriez configurer toutes les adresses IP de manière statique.  
* Dans l'interface graphique de VirtualBox, vous pouvez configurer tous ces éléments dans les paramètres globaux via "Fichier" -> "Paramètres" -> "Réseau", qui liste tous les réseaux host-only qui sont actuellement utilisés. Cliquez sur le nom du réseau puis sur le bouton "Éditer" à droite, et vous pouvez modifier les paramètres de l'adaptateur et du DHCP.  
* Sinon, vous pouvez utiliser VBoxManage dhcpserver en ligne de commandes ; voir chapitre [8.35 VBoxManage dhcpserver](#mark8.35) pour des détails.  

Note: Sur les hôtes Linux et Mac OS X, le nombre d'interfaces host-only est limité à 128. Il n'y a pas de telles limites sur les hôtes Solaris et Windows.  

[Retour à la table des matières](#Table des matières)

# 6.8 Réseau en tunnel UDP<a id="mark6.8"></a>

Ce mode réseau permet d'interconnecter des machines virtuelles qui fonctionnent sur des hôtes différents.  
Techniquement, cela se fait en encapsulant des frames Ethernet envoyés ou reçus par la carte réseau de l'invité dans des datadrams UDP/IP, et en les envoyant via n'importe quel réseau disponible sur l'hôte.  
Le mode Tunnel UDP a trois paramètres :  
Port source UDP Le port sur lequel écoute l'hôte. Les datagrams arrivant sur ce port depuis n'importe quelle adresse source seront redirigés vers la partie réceptrice de la carte réseau invitée.  
Adresse de destination L'adresse IP de l'hôte cible des données transmises.  
Port de destination UDP Le numéro du port sur lequel sont envoyées les données transmises.  
Quand on interconnecte deux machines virtuelles sur deux hôtes différents, leurs adresses IP doivent être échangées. Sur un seulhôte, les ports UDP source et de destination doivent être échangés.  
Dans l'exemple suivant, l'hôte 1 utilise l'adresse IP 10.0.0.1 et l'hôte 2 utilise l'adresse IP 10.0.0.2. La configuration en ligne de commandes :  

`VBoxManage modifyvm "VM 01 on host 1" --nic<x> generic`  
`VBoxManage modifyvm "VM 01 on host 1" --nicgenericdrv<x> UDPTunnel`  
`VBoxManage modifyvm "VM 01 on host 1" --nicproperty<x> dest=10.0.0.2`  
`VBoxManage modifyvm "VM 01 on host 1" --nicproperty<x> sport=10001`  
`VBoxManage modifyvm "VM 01 on host 1" --nicproperty<x> dport=10002`  

et  

`VBoxManage modifyvm "VM 02 on host 2" --nic<y> generic`  
`VBoxManage modifyvm "VM 02 on host 2" --nicgenericdrv<y> UDPTunnel`  
`VBoxManage modifyvm "VM 02 on host 2" --nicproperty<y> dest=10.0.0.1`  
`VBoxManage modifyvm "VM 02 on host 2" --nicproperty<y> sport=10002`  
`VBoxManage modifyvm "VM 02 on host 2" --nicproperty<y> dport=10001`  

Bien entendu, vous pouvez toujours interconnecter deux machines virtuelles sur le même hôte en paramétrant le paramètre Adresse de destination sur 127.0.0.1 sur les deux. Cela agira de la même façon que le "réseau interne" dans ce cas, cependant l'hôte peut voir le trafic réseau, ce qui ne pourrait pas être le cas dans un réseau interne normal.  

Note: Sur les hôtes basés sur Unix (comme Linux, Solaris, Mac OS X), il n'est pas possible de sonder les portss inférieurs à 1024 pour des applications non lancées par root. Il s'en suit que si vous essayez de configurer un tel port source UDP, la VM refusera de démarrer.  

[Retour à la table des matières](#Table des matières)

# 6.9 Réseau VDE<a id="mark6.9"></a>

Virtual Distributed Ethernet (VDE est une infrastructure réseau flexible et virtuelle, qui couvre plusieurs hôtes d'une manière sécurisée. Elle permet de basculer entre L2/L3, y compris l'émulation du protocole spanning-tree, des VLANs et de WAN. C'est une partie optionnelle de VirtualBox qui n'est incluse que dans le code source.  
VDE est un projet développé par Renzo Davoli, Professeur associé à l'Université de Bologne, Italie.  

Les blocs à construire de base de l'infrastructure sont les switches VDE, les prises VDE et les fils VDE qui inter-connectent les switches.
Le pilote VDe de VirtualBox prend un paramètre :  

`Réseau VDE Le nom de la socket du switch du réseau VDE à laquelle la VM sera connectée`.  

L'exemple basique suivant montre la manière de connecter une machine virtuelle à un switch VDE :  

1. Créez un switch VDE :  
`vde_switch -s /tmp/switch1`  
2. Configuration en ligne de commandes :  
`VBoxManage modifyvm "nom VM" --nic<x> generic`  
`VBoxManage modifyvm "nom VM" --nicgenericdrv<x> VDE`  
Pour se connecter automatiquement à un port du switch affecté, utilisez :
`VBoxManage modifyvm "nom VM" --nicproperty<x> network=/tmp/switch1`  
Pour se connecter à un port du switch spécifique `<n>`, utilisez :  
`VBoxManage modifyvm "nom VM" --nicproperty<x> network=/tmp/switch1[<n>]`  
La dernière option est utile pour les VLANs.  
3. Éventuellement, reliez le port du switch VDE et le VLAN : (à partir de la ligne de commande du switch)  
`vde$ vlan/create <VLAN>`  
`vde$ port/setvlan <port> <VLAN>`  
VDE n'est disponible sur les hôtes Linux et FreeBSD que si le logiciel VDE est la bibliothèque supplément VDE du projet VirtualSquare sont installées sur le système hôte.  
<http://wiki.virtualsquare.org/wiki/index.php/VDE_Basic_Networking>  
Pour les hôtes Linux, la bibliothèque partagée libvdeplug.so doit être disponible dans le chemin de recherche des  bibliothèques partagée.  
Pour plus d'informations sur le paramétrage de réseaux VDE, merci de voir la documentation accompagnant le logiciel.  

[Retour à la table des matières](#Table des matières)

# 6.10 Limiter la bande passante des E/S réseaux<a id="mark6.10"></a>

À partir de la version 4.2, VirtualBox permet de limiter la bande passante maximum utilisée pour la transmission réseau. Plusieurs adaptateurs réseaux d'une VM peuvent partager les limites des groupes de bande passante. Il est possible d'avoir plus d'une limite.  

Note: VirtualBox ne gère le trafic de la VM que dans le sens de la transmission, en faisant attendre les paquets à envoyer par les machines virtuelles. Il ne limite pas le trafic reçu par les machines virtuelles.  

On configure les limites avec VBoxManage. L'exemple ci-dessous crée un groupe de bande passante appelé "Limit", paramètre la limite à 20 Mo/s et affecte le groupe au premier et au deuxième adaptateurs de la VM :  

`VBoxManage bandwidthctl "nom VM" add Limit --type network --limit 20m`  
`VBoxManage modifyvm "nom VM" --nicbandwidthgroup1 Limit`  
`VBoxManage modifyvm "nom VM" --nicbandwidthgroup2 Limit`  

Tous les adaptateurs d'un groupe partagent la limite de la bande passante, ce qui veut dire que dans l'exemple ci-dessus, la bande passante des deux adaptateurs associés ne peut jamais dépasser 20 Mo/s. Par contre, si un adaptateur n'a pas besoin de bande passante, l'autre peut utiliser le reste de bande passante de son groupe.  
On peut modifier les limites de chaque groupe pendant que la VM est en fonction, les changements étant répercutés immédiatement. L'exemple ci-dessous montre le passage de la limite du groupe créé dans l'exemple ci-dessus à 100 Ko/s :  

`VBoxManage bandwidthctl "nom VM" set Limit --limit 100k`  

Pour désactiver complètement l'encadrement du premier adaptateur de la VM, utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --nicbandwidthgroup1 none`  

Il est également possible de désactiver l'encadrement de tous les adaptateurs affectés à un groupe de bande passante alors que la VM est en fonction, en spécifiant la limite zéro pour le groupe. Par exemple, pour le groupe de bande passante nommé "Limit", utilisez :  

`VBoxManage bandwidthctl "nom VM" set Limit --limit 0`  

[Retour à la table des matières](#Table des matières)

# 6.11 Améliorer les performances réseaux<a id="mark6.11"></a>

VirtualBox offre une variété d'adaptateurs réseaux virtuels qu'on peut "attacher" au réseau de l'hôte d'un certain nombre de manières. Selon les types d'adaptateurs et d'attachements utilisés, les performances réseaux seront différentes. Dans une logique de performances, l'adaptateur réseau virtio est préférable aux adaptateurs Intel PRO/1000 émulés, préférables eux-mêmes à la famille d'adaptateurs PCNet. Tant les adaptateurs virtio que Intel PRO/1000 profitent de la segmentation et de l'offloading de vérification de somme. La segmentation offloading est essentielle pour de hautes performances car elle permet moins de changements de contextes, augmentant drastiquement les tailles des paquets croisés entre VM/boddary hôte.  

Note: Ni les pilotes virtio, ni ceux Intel PRO/1000 de Windows XP supportent la segmentation offloading. Donc, les invités Windows XP n'atteignent jamais les mêmes vitesses de transmission que les autres types d'invités. Reportez-vous à la base MS Knowledge article 842264 pour des information supplémentaires.  

Trois types d'attachements : interne, bridgé et host-only, ont des performances presqu'identiques, le type internal étant légèrement plus rapide et utilisant moins de cycles processeur puisque les paquets ne vont jamais dans la pile réseau de l'hôte. L'attachement NAT est le plus lent (et le plus sûr) de tous les types d'attachement car il fournit une traduction d'adresse réseau. L'attachement du pilote générique est spécial et ne peut pas être considéré comme une alternative à d'autres types d'attachements.  
Le nombre de processeurs affectés à la VM n'améliore pas les performances et, dans certains cas, cela peut les réduire du fait d'une concurrence dans l'invité.  
Voici un petit résumé des choses à vérifier afin d'améliorer les performances réseau :  

1. Si possible utilisez l'adaptateur réseau virtio, ou utilisez un des adaptateurs Intel PRO/1000 ;  
2. Utilisez l'attachement bridgé plutôt que NAT;  
3. Assurez-vous que la segmentation offloading est activée dans l'OS invité. En général, elle sera activée par défaut. Vous pouvez vérifier et modifier les paramètres d'offloading en utilisant la commande ethtool dans les invités Linux.  

[Retour à la table des matières](#Table des matières)

# 7 Machines virtuelles distantes<a id="mark7"></a>

# 7.1 Affichage distant (VRDP support)<a id="mark7.1"></a>

 VirtualBox peut afficher les machines virtuelles à distance, ce qui signifie qu'une machine virtuelle peut s'exécuter sur un ordinateur même si la machine sera affichée sur un deuxième ordinateur, et la machine sera contrôlée également à partir de là, comme si la machine virtuelle fonctionnait sur ce deuxième ordinateur.  
Pour une flexibilité maximum, à partir de VirtualBox 4.0, VirtualBox implémente l'affichage distant d'une machine par une interface d'extension générique, le VirtualBox Remote Desktop Extension (VRDE). Le paquet libre de base de VirtualBox ne fournit pas cette interface, tandis que les implémentations peuvent être offerts par des tiers avec les paquets d'extension de VirtualBox qui doivent être installés séparément du paquet. Voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) pour plus d'informations.  
Oracle fournit un support pour le VirtualBox Remote Display Protocol (VRDP) dans ce paquet d'extension de VirtualBox. Quand on installe ce paquet, les versions de VirtualBox 4.0 et supérieur supportent le VRDP de la même façon que les versions binaires (non libre)) de VirtualBox avant la 4.0.  
VRDP est une extension rétro-compatible au Remote Desktop Protocol (RDP) de Microsoft. Dès lors, vous pouvez utiliser n'importe quel client RDP standard pour contrôler la VM distante.  
Même quand l'extension est installée, le serveur VRDP est désactivé par défaut. On peut l'activer facilement pour chaque VM, soit dans le gestionnaire VirtualBox des paramètres d'"Affichage" (voir chapitre [3.5 Paramètres d'affichage),](#mark3.5) soit avec VBoxManage:  

`VBoxManage modifyvm "nom VM" --vrde on`  

Si vous utilisez VBoxHeadless (décrit plus loin en détails), le support VRDP sera automatiquement activé puisque VBoxHeadless n'a aucun autre moyen de sortie.  
Par défaut, le serveur VRDP utilise le port TCP 3389. Vous devrez modifier le port par défaut si vous exécutez plus d'un serveur VRDP, vu que le port ne peut être utilisé que par un serveur à la fois. Il se pourrait aussi que vous deviez le modifier sur les hôtes Windows car le port par défaut pourrait être déjà utilisé par le serveur RDP intégré à Windows lui-même. Les ports 5000 à 5050 sont le plus souvent inusités et pourraient être un bon choix.  
Vous pouvez modifier le port soit dans les paramètres "Affichage" dans l'interface graphique, soit via l'option `--vrdeport` depuis la commande `VBoxManage modifyvm`. Vous pouvez indiquer une liste séparée par des virgules de ports ou de plages de ports. Utilisez un tiret entre deux numéros de ports pour indiquer une plage. Le serveur VRDP s'appuiera sur un des ports disponibles au sein de la liste spécifiée. Par exemple, `VBoxManage modifyvm "nom VM"`  
`--vrdeport 5000,5010-5012` configurera le serveur pour s'appuyer sur un des ports parmi le 5000, 5010, 5011 ou 5012. Voir chapitre [8.8.4 Paramètres de la machine distante](#mark8.8.4) pour des détails.  
Vous pouvez savoir le port utilisé au final par une VM en fonction avec la commande `VBoxManage showvminfo`, vous pouvez aussi le voir dans l'interface graphique sous l'onglet " En cours d'exécution" de la "Boîte de dialogue d'informations sur la session", accessible depuis le menu "Machine" de la fenêtre de la VM.  
Le support d'IPv6 a été implémenté dans VirtualBox 4.3. Si l'OS hôte supporte l'IPv6, le serveur VRDP écoutera automatiquement les connexions IPv6 en plus de celles IPv4.  

[Retour à la table des matières](#Table des matières)

# 7.1.1 Visualiseurs RDP tiers classiques<a id="mark7.1.1"></a>

Comme VRDP est rétro-compatible avec RDP, vous pouvez utiliser n'importe quel visualiseur RDP standard pour vous connecter à une machine virtuelle distante (des exemples arrivent ci- dessous). Pour que cela fonctionne, vous devez spécifier l'adresse IP de votre système hôte (pas celle de la machine virtuelle !) l'adresse du serveur auquel se connecte ainsi que le numéro du port qu'utilise le serveur RDP.  
Voici des exemples de visualiseurs RDP les plus courants :  

* Sur Windows, vous pouvez utiliser le Microsoft Terminal Services Connector (mstsc.exe) inclu dans Windows. Vous pouvez le lancer depuis la boîte de dialogue "Exécuter" (appuyez sur la touche Windows et "R") en tapant "mstsc". Vous pouvez également le trouver dans "Démarrer" -> "Tous les Programmes" -> "Accessoires" -> "Connexion bureau distant". Si vous utilisez la boîte de dialogue "Exécuter", vous pouvez y entrer des options directement :  
`mstsc 1.2.3.4:3389`  
Remplacez 1.2.3.4 par l'adresse IP de l'hôte et 3389 par un autre port si nécessaire.  
Note: Il faut entourer les adresses IPv6 de crochets pour spécifier un port. Par exemple, `mstsc [fe80::1:2:3:4]:3389`  
Note: Lors d'une connexion à localhost pour tester la connexion, les adresses localhost et 127.0.0.1 pourraient ne pas fonctionner en utilisant mstsc.exe. Par contre, l'adresse `127.0.0.2[:3389]` doit être utilisée.  
* Sur les autres systèmes, vous pouvez utiliser le programme libre standard rdesktop. Celui- ci est inclu avec la plupart des distributions Linux, mais VirtualBox est fourni avec une variante modifiée de rdesktop pour un support de l'USB à distance (voir chapitre [7.1.4 USB distant](#mark7.1.4) ci-dessous).  
Avec rdesktop, utilisez une ligne telle que celle-ci :  
`rdesktop -a 16 -N 1.2.3.4:3389`  
Comme indiqué pour le visualiseur Microsoft ci-dessus, remplacez 1.2.3.4 par l'adresse IP de l'hôte et 3389 par un autre port si nécessaire. L'option `-a 16` demande que la résolution soit de 16 bits par pixel, ce qui est recommandé. (Pour de meilleures performances, après l'installation du système d'exploitation invité, vous devriez définir sa profondeur d'affichage des couleurs à la même valeur). L'option `-N` permet d'utiliser les touches du pavé numérique.  
* Si vous lancez le bureau KDE, vous pourriez préférer krdc, le visualiseur RDP de KDE. La ligne de commande ressemblerait à ceci :  
`krdc rdp://1.2.3.4:3389`  
De nouveau, remplacez `1.2.3.4` par l'adresse IP de l'hôte et `3389` par un port différent si nécessaire. Le champ "rdp://" est requis avec krdc pour qu'il passe en mode RDP.  
* Avec les clients Sun Ray thin, vous pouvez utiliser uttsc, qui fait partie du paquet Sun Ray Windows Connector. Voir la documentation correspondante pour des détails.  

[Retour à la table des matières](#Table des matières)

# 7.1.2 VBoxHeadless, le serveur de bureau distant<a id="mark7.1.2"></a>

Si toutes les VM lancées dans le gestionnaire VirtualBox sont capables de lancer des machines virtuelles à distance, ce n'est pas pratique de lancer l'interface graphique complète si vous ne voulez jamais avoir de VMs affichées en local au premier plan. En particulier, si vous lancez un serveur matériel dont le seul objectif est d'héberger des VMs et où toutes les VMs sont supposées se lancer à distance via VRDP, il est inutile d'avoir une interface graphique quelconque sur le serveur surtout que sur un hôte Linux ou Solaris, le gestionnaire VirtualBox est fourni avec les dépendances des bibliothèques Qt et SDL. C'est un inconvénient si ne voulez pas du tout avoir de système X Window sur votre serveur.  
VirtualBox est donc fourni avec une autre interface appelée VBoxHeadless, qui ne produit aucune sortie visible sur l'hôte, mais qui produit des données VRDP. Cette interface n'a aucune dépendance du système X Window sur Linux et des hôtes Solaris.
Avant VirtualBox 1.6, le serveur headless s'appelait VBoxVRDP. Toujours pour des raisons de rétro-compatibilité, l'installation de VirtualBox installe toujours un exécutable avec ce nom.  

Pour démarrer une machine virtuelle avec VBoxHeadless, vous avez trois options :  

* Vous pouvez utiliser `VBoxManage startvm "nom VM" --type headless`  
L'option supplémentaire `--type` amène VirtualBox à utiliser `VBoxHeadless` en tant qu'interface avec le moteur de virtualisation interne plutôt que l'interface Qt.  
* Une alternative est d'utiliser VBoxHeadless directement, comme suit :  
`VBoxHeadless --startvm <uuid|name>`  
Cette manière de démarrer la VM aide au dépannage des problèmes signalés par `VBoxManage startvm ...` car vous pouvez voir parfois des messages d'erreur plus détaillés, surtout pour les échecs imtervenant avant que l'exécution de la VM ne commence.  
Dans des situations normales, on préfère `VBoxManage startvm` car il lance la VM directement comme tâche de fond, ce qui doit se faire explicitement lors du démarrage direct de VBoxHeadless.  
* L'autre alternative est de démarrer VBoxHeadless à partir de l'interface graphique du gestionnaire de VirtualBox, en maintenant appuyée la touche Majuscule au démarrage de la machine.  
Remarquez que quand vous utilisez VBoxHeadless pour démarrer une VM, comme le serveur headless n'a aucun autre moyen d'affichage, le serveur VRDP sera toujours activé, indépendamment du fait que vous ayez activé le serveur VRDP dans les paramètres de la VM ou pas. Si vous n'en voulez pas (par exemple parce que vous voulez accéder à la VM via ssh only), démarrez la VM comme ceci :  
`VBoxHeadless --startvm <uuid|name> --vrde off`  
Pour activer le serveur VRDP en fonction de la configuration de la VM, comme le feraient les autres interfaces, utilisez ceci :  
`VBoxHeadless --startvm <uuid|name> --vrde config`  
Si vous démarrez la VM avec `VBoxManage startvm ...`, les paramètres de configuration de la VM sont toujours utilisés.  

[Retour à la table des matières](#Table des matières)

# 7.1.3 Pas à pas : créer une machine virtuelle sur un serveur headless<a id="mark7.1.3"></a>

Les instructions suivantes peuvent vous donner une idée de la façon de créer une machine virtuelle sur un serveur headless via une connexion réseau. Nous allons créer une machine virtuelle, établir une connexion RDP et installer un système d'exploitation invité – tout ceci sans devoir toucher au serveur headless. Tout ce dont vous avez besoin est ce qui suit :  

1. VirtualBox sur une machine serveur avec un système d'exploitation hôte supporté. Le pack d'extension de VirtualBox du serveur VRDP doit être installé (voir la section précédente).  
Pour l'exemple suivant, nous supposerons un serveur Linux.  
2. Un fichier ISO accessible depuis le serveur, contenant les données d'installation du système invité pour installer (nous supposons que c'est Windows XP dans l'exemple suivant).  
3. Une connexion en terminal à l'hôte par lequel vous pouvez accéder à une ligne de commande (par exemple via ssh).  
4. Un visualiseur RDP sur le client distant ; voir chapitre [7.1.1 Visualiseurs RDP tiers classiques](#mark7.1.1) ci-dessus pour des exemples.  

Remarquez encore que sur la machine serveur, comme nous n'allons utiliser que le serveur headless, ni Qt ni SDL ni le système X Window ne seront nécessaires.  

1. Sur le serveur headless, créez une nouvelle machine virtuelle :  
`VBoxManage createvm --name "Windows XP" --ostype WindowsXP --register`  
Remarquez que si vous ne spécifiez pas `--register`, vous devrez utiliser manuellement la commande `registervm` plus tard.  
Remarquez aussi que vous n'avez pas besoin de spécifier `--ostype`, mais en le faisant, cela sélectionne des valeurs par défaut apropriées pour certains paramètres de la VM, par exemple la taille de la RAM et le type de périphérique réseau virtuel. Pour avoir la liste complète des systèmes d'exploitation supportés, vous pouvez utiliser   
`VBoxManage list ostypes`  
2. Assurez-vous que les paramètres de la VM sont adaptés au système d'exploitation invité que nous allons installer. Par exemple :  
`VBoxManage modifyvm "Windows XP" --memory 256 --acpi on --boot1 dvd --nic1 nat`  
3. Créez un disque dur virtuel pour la VM (dans ce cas, 10Go de taille) :  
`VBoxManage createhd --filename "WinXP.vdi" --size 10000`  
4. Ajoutez un contrôleur IDE à la nouvelle VM :  
`VBoxManage storagectl "Windows XP" --name "IDE Controller"`  
`--add ide --controller PIIX4`  
5. Mettez le fichier VDI créé ci-dessus comme premier disque dur virtuel de la nouvelle VM :  
`VBoxManage storageattach "Windows XP" --storagectl "IDE Controller"`  
`--port 0 --device 0 --type hdd --medium "WinXP.vdi"`  
6. Attachez le fichier ISO contenant l'installeur du système d'exploitation que vous voudrez installer plus tard sur la machine virtuelle, pour que la machine puisse démarrer dessus :  
`VBoxManage storageattach "Windows XP" --storagectl "IDE Controller"`  
`--port 0 --device 1 --type dvddrive --medium /full/path/to/iso.iso`  
7. Démarrez la machine virtuelle en utilisant VBoxHeadless:  
`VBoxHeadless --startvm "Windows XP"`  
Si tout s'est bien passé, vous devriez voir un message de copyright. Si vous êtes renvoyé en ligne de commande, quelque chose n'a pas fonctionné.  
8. Sur la machine client, ouvrez le visualiseur RDP et essayez de vous connecter au serveur (voir chapitre [7.1.1 Visualiseurs RDP tiers classiques](#mark7.1.1) ci-dessus pour voir comment utiliser les divers visualiseurs RDP classiques).  
Vous devriez voir maintenant le processus d'installation de votre système d'exploitation invité, à distance dans le visualiseur RDP.  

[Retour à la table des matières](#Table des matières)

# 7.1.4 USB distant<a id="mark7.1.4"></a>

Une fonction très spéciale du support VRDP de VirtualBox est qu'il supporte les périphériques USB distants également via le réseau. C'est-à-dire que l'invité de VirtualBox en fonction sur l'ordinateur peut accéder à des périphériques USB de l'ordinateur distant sur lequel sont affichées les données VRDP de la même manière que des périphériques USB connectés à l'hôte actuel. Cela permet d'exécuter des machines virtuelles sur un hôte VirtualBox qui agit comme serveur, où un client peut se connecter de n'importe où avec simplement un adaptateur réseau et un dispositif d'affichage capable de lancer un visualiseur RDP. Quand on branche des périphériques USB dans le client, le serveur VirtualBox distant peut y accéder.  
Pour ces périphériques USB distants, les mêmes règles de filtres s'appliquent, comme pour d'autres périphériques USB, comme décrit au chapitre [3.10.1 Paramètres USB.](#mark3.10.1) Tout ce que vous devez faire est de spécifier "Remote" (ou "Any") en définissant ces règles.  
L'accès à des périphériques USB n'est possible que si le client RDP supporte cette extension.  
Sur les hîtes Linux et Solaris, l'installation de VirtualBox fournit un client VRDP convenable appelé rdesktop-vrdp. Les versions récentes de uttsc, un client taillé pour être utilisé avec des clients Sun Ray thin et qui supporte l'accès aux périphériques USB distants. Les clients RDP pour d'autres plateformes seront fournis dans de futures versions de VirtualBox.  
Pour rendre disponible un périphérique USB distant pour une VM, vous devriez démarrer `rdesktop-vrdp` comme suit :  

`rdesktop-vrdp -r usb -a 16 -N my.host.address`  

Remarquez que `rdesktop-vrdp` ne peut accéder à des périphériques USB que par `/proc/bus/usb`.
Merci de vous reporter au chapitre [12.7.7 L'USB ne fonctionne pas](#mark12.7.7) pour des détails supplémentaires sur la manière de régler correctement les droits. De plus, il est conseillé de désactiver le chargement automatique d'un pilote ce l'hôte, sur l'hôte distant, qui pourrait fonctionner sur des périphériques USB, pour vous assurer que les périphériques seront accessibles au client RDP. Si vous avez bien fait le paramétrage sur l'hôte distant, les événements de branchement/débranchement sont visibles dans le fichier `VBox.log` de la VM.  

[Retour à la table des matières](#Table des matières)

# 7.1.5 Authentification RDP<a id="mark7.1.5"></a>

Pour chaque machine virtuelle accessible à distance via RDP, vous pouvez déterminer individuellement si les connexions du client sont authentifiées et comment. Pour cela, utilisez la commande `VBoxManage modifyvm` avec l'option `--vrdeauthtype` ; voir chapitre [8.8 VBoxManage modifyvm](#mark8.8) pour une présentation générale. Trois méthodes d'authentification sont disponibles :  

* La méthode "null" signifie qu'il n'y a pas d'authentification du tout ; n'importe quel client peut se connecter au serveur VRDP et, ainsi, à la machine virtuelle. C'est, bien sûr, très peu sécurisé et cela ne doit être recommandé que sur des réseaux privés.  
* La méthode "external" fournit une authentification externe via une bibliothèque d'authentification spéciale. VirtualBox inclut deux bibliothèques d'authentification :  
1. La bibliothèque d'authentification par défaut, VBoxAuth, authentifie en fonction des droits de l'utilisateur sur l'hôte. Selon la plateforme hôte, cela signifie :  
	*	 Sur les hôtes Linux, VBoxAuth.so authentifie les utilisateurs à partir du système PAM de l'hôte.  
	*	 Sur les hôtes Windows, VBoxAuth.dll authentifie les utilisateurs à partir du système WinLogon de l'hôte.  
	*	 Sur les hôtes Mac OS X, VBoxAuth.dylib authentifie les utilisateurs à partir du service répertoire de l'hôte.
Le support pour Mac OS X a été ajouté dans la version 3.2.  
 En d'autres termes, la méthode "external" par défaut réalise l'authentification par les comptes utilisateurs existant sur le système hôte. Tout utilisateur ayant des autorisations d'authentification valides est accepté, c'est-à-dire que le nom d'utilisateur n'a pas besoin de correspondre à l'utilisateur qui lance la VM.  
2. Une bibliothèque supplémentaire qui s'appelle VBoxAuthSimple réalise l'authentification à partir des autorisations configurées dans la section "extradata" du fichier XML des paramètres d'une machine virtuelle. C'est probablement la méthode la plus simple de s'authentifier, qui ne dépend pas de l'invité en fonction et supporté (voir ci-dessous).  
Les étapes suivantes sont nécessaires :  
a) Activer VBoxAuthSimple avec la commande suivante :  
`VBoxManage setproperty vrdeauthlibrary "VBoxAuthSimple"`  
b) Pour activer la bibliothèque pour une VM en particulier, vous devez passer en authentification externe :  
`VBoxManage modifyvm <vm> --vrdeauthtype external`  
Remplacez `<vm>` par le nom ou l'UUID de la VM.  
c) Vous devrez alors configurer les utilisateurs et les mots de passe en écrivant ces éléments dans les extradata de la machine. Comme le fichier XML des paramètres de la machine, dans lequel il faut écrire le mot de passe à la section "extradata", est un fichier en texte brut, VirtualBox utilise le `hachage` pour chiffrer les mots de passe. Il faut utiliser la commande suivante :  
`VBoxManage setextradata <vm> "VBoxAuthSimple/users/<utilisateur>" <hash>`  
Remplacez `<vm>` par le nom ou l'UUID de la VM, `<utilisateur>` par le nom d'utilisateur qui devrait être autorisé à se connecter et `<hash>` par le mot de passe chiffré. Par exemple, pour avoir la valeur hachée du mot de passe "secret", vous pouvez utiliser la commande suivante :  
`VBoxManage internalcommands passwordhash "secret"`  
Ceci affichera:  
`2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b`  

Vous pouvez alors utiliser `VBoxManage setextradata` pour stocker cette valeur dans la section "extradata" de la machine.  
Un exemple des deux ensemble, pour définir le mot de passe de l'utilisateur "john" sur la machine "Ma VM" en "secret", utilisez cette commande :  
`VBoxManage setextradata "Ma VM" "VBoxAuthSimple/users/john"`  
`2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b`  
* Enfin, la méthode d'authentification "guest" réalise l'authentification par un composant spécial fourni avec les suppléments invité ; il s'en suit que l'authentification ne s'effectue pas sur l'hôte mais via les comptes utilisateurs de l'invité  .
Cette méthode est actuellement en test et pas encore supportée.  

Outre les méthodes décrites ci-dessus, vous pouvez remplacer la méthode d'authentification "external" par défaut par n'importe quel autre module. Pour cela, VirtualBox offre une interface claire qui vous permet d'écrire votre propre module d'authentification. Ceci est décrit en détails dans le manuel de référence du Kit de développement logiciel de VirtualBox ; merci de voir le chapitre [11 Interfaces de programmation de VirtualBox](#mark11) pour des détails.  

[Retour à la table des matières](#Table des matières)

# 7.1.6 Chiffrement RDP<a id="mark7.1.6"></a>

Le chiffrement du flux de données des fonctions RDP se base sur le chiffrage symétrique RC4 (avec des clés jusqu'à 128bit). Les clés RC4 sont remplacées à intervalles réguliers (tous les 4096 paquets).  
RDP fournit différentes méthodes d'authentification :  

1. Historiquement, on utilisait l'authentification RDP4, avec laquelle le client RDP ne réalise aucun contrôle pour vérifier l'identité du serveur auquel il se connecte. Comme on peut obtenir les autorisations de l'utilisateur en utilisant une attaque "man in the middle" (MITM) (personne initiée), l'authentification RDP4 n'est pas sécurisée et vous ne devriez en général pas l'utiliser.  
2. L'authentification RDP5.1 utilise un certificat serveur pour lequel le client possède la clé publique. De cette façon, vous avez la garantie que le serveur possède la clé privée correspondante. Cependant, comme cette clé privée codée en dur a été publiée il y a quelques années, l'authentification RDP5.1 n'est pas sécurisée.  
3. L'authentification RDP5.2 utilise la sécurité RDP améliorée, ce qui veut dire qu'un protocole de sécurité externe est utilisé pour sécuriser la connexion. RDP4 et RDP5.1 utilisent la sécurité RDP Standard. Le serveur VRDP supporte la sécurité renforcée RDP avec le protocole TLS et, faisant partie du handshake TLS, il envoie le certificat du serveur au client.  
La propriété VRDE Security/Method définit la méthode de sécurité souhaitée qui est utilisée pour une connexion. Les valeurs valides sont :  

* Negotiate `-` les connexions sécurisées améliorées (TLS) et RDP standards sont autorisées. La méthode de sécurité se négocie avec le client. C'est le réglage par défaut.  
* RDP `-` seule la sécurité QDP Standard est acceptée.  
* TLS `-` seule la sécurité RDP améliorée est acceptée. Le client doit supporter TLS.  
Par exemple la commande suivante autorise un client à utiliser une connexion sécurisée soit par RDP Standard, soit par RDP améliorée :  

`vboxmanage modifyvm "nom VM" --vrdeproperty "Security/Method=negotiate"`  

Si la propriété Security/Method est réglée sur Negotiate ou TLS, le protocole TLS sera automatiquement utilisé par le serveur si le client supporte TLS. Cependant, pour utiliser TLS, le serveur doit posséder le certificat du serveur, la clé privée du serveur et l'autorité du certificat (Certificate Authority (CA)). L'exemple suivant montre comment générer un certificat de serveur.  

a) Créez un certificat CA auto-signé :  
`openssl req -new -x509 -days 365 -extensions v3_ca \`  
`-keyout ca_key_private.pem -out ca_cert.pem`  

b) Générez une clé privée du serveur et une demande de signature :  
`openssl genrsa -out server_key_private.pem`  
`openssl req -new -key server_key_private.pem -out server_req.pem`  

c) Générez le certificat du serveur :  
`openssl x509 -req -days 365 -in server_req.pem \`  
`-CA ca_cert.pem -CAkey ca_key_private.pem -set_serial 01 -out server_cert.pem`  

Le serveur doit être configuré pour accéder aux fichiers requis :  

`vboxmanage modifyvm "nom VM" \`  
`--vrdeproperty "Security/CACertificate=path/ca_cert.pem"`  

`vboxmanage modifyvm "nom VM" \`  
`--vrdeproperty "Security/ServerCertificate=path/server_cert.pem"`  

`vboxmanage modifyvm "nom VM" \`  
`--vrdeproperty "Security/ServerPrivateKey=path/server_key_private.pem"`  

Comme le client qui se connecte au serveur détermine le type de chiffrement qui sera utilisé, avec rdesktop, le visualiseur RDP de Linux, utilisez les options `-4` ou `-5`.  

[Retour à la table des matières](#Table des matières)

# 7.1.7 Connexions multiples au serveur VRDP<a id="mark7.1.7"></a>

Le serveur VRDP de VirtualBox supporte plusieurs connexions simultanées à une VM en fonction à partir de différents clients. Tous les clients connectés voient la même sortie d'écran et partagent le pointeur de souris et le focus du clavier. Cela revient à ce que plusieurs personnes utilisent le même ordinateur en même temps, chacun leur tour devant le clavier.  
La commande suivante active le mode connexions multiples :  

`VBoxManage modifyvm "nom VM" --vrdemulticon on`  

[Retour à la table des matières](#Table des matières)

# 7.1.8 Avoir plusieurs moniteurs distants<a id="mark7.1.8"></a>

Pour accéder à deux ou plusieurs moniteurs de VM distants, vous devez activer le mode multiconnexion VRDP (voir le chapitre [7.1.7 Connexions multiples au serveur VRDP).](#mark7.1.7)  
Le client RDP peut sélectionner le numéro du moniteur virtuel auquel se connecter en utilisant le paramètre d'identification domain `(-d)`. Si le paramètre se termine par `@` suivi d'un numéro, VirtualBox interprète ce numéro comme l'index des écrans. On sélectionne l'écran invité primaire avec `@1`, le premier écran secondaire avec `@2`, etc.  
Le client Microsoft RDP6 ne vous permet pas de saisir un nom de domaine distinct.  
Utilisez plutôt domaine\nom_utilisateur dans le champ Nom d'utilisateur : `-` par exemple, `@2\name`. nom doit être remseigné et il doit être le nom utilisé pour vous identifier si le serveur VRDP est configuré pour demander une autorisation. Sinon, vous pouvez utiliser n'importe quel texte comme nom d'utilisateur.  

[Retour à la table des matières](#Table des matières)

# 7.1.9 Redirection graphique VRDP<a id="mark7.1.9"></a>

À partir de VirtualBox 3.2, le serveur VRDP peut rediriger les flux graphiques de l'hôte vers le client RDP. Les frames graphiques sont compressés en utilisant l'algorithme JPEG, ce qui permet un ratio de compression plus fort que les méthodes de compression bitmap RDP standards. Il est possible d'augmenter le ratio de compression en diminuant la qualité de l'image.  
Le serveur VRDP détecte automatiquement les flux vidéos dans un invité au fur et à mesure que les zones rectangulaires se mettent à jour fréquemment. Il s'en suit que cette méthode fonctionne avec n'importe quel système d'exploitation invité, sans devoir installer de logiciels supplémentaires dans l'invité ; en particulier, les suppléments invité ne sont pas requis.  
Par contre, côté client, seul le client de connexion Connexion bureau à distance de Windows 7 supporte actuellement cette fonctionnalité. Si un client ne supporte pas la redirection graphique, le serveur VRDP se rabat sur le rafraîchissement régulier des bitmap.  
La commande suivante active la redirection graphique :  

`VBoxManage modifyvm "nom VM" --vrdevideochannel on`  

La qualité de l'image se définit par une valeur entre 10 et 100 pour cent, ce qui représente un niveau de compression JPEG (où les nombres les plus bas signifient des qualité plus faibles mais une compression plus forte). Vous pouvez modifier la qualité en utilisant la commande suivante :  

`VBoxManage modifyvm "nom VM" --vrdevideochannelquality 75`  

[Retour à la table des matières](#Table des matières)

# 7.1.10 Personnalisation du VRDP<a id="mark7.1.10"></a>

Avec VirtualBox 4.0, il est possible de désactiver l'affichage, l'entrée souris et clavier, le son, l'USB distant ou le presse-papier, de façon individuelle dans le serveur VRDP.  
Les commandes suivantes modifient les paramètres correspondant du serveur :  

`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableDisplay=1`  
`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableInput=1`  
`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableUSB=1`  
`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableAudio=1`  
`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableClipboard=1`  
`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableUpstreamAudio=1`  

Pour réactiver une fonction, utilisez une commande identique sans l'argument 1. Par example :  

`VBoxManage modifyvm "nom VM" --vrdeproperty Client/DisableDisplay=`  

Ces propriétés ont été ajoutées avec VirtualBox 3.2.10. Cependant, dans la série 3.2.x, il était nécessaire d'utiliser les commandes suivantes pour modifier les paramètres :  

`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableDisplay" 1`  
`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableInput" 1`  
`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableUSB" 1`  
`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableAudio" 1`  
`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableClipboard" 1`  

Pour réactiver une fonction, utilisez une commande identique sans l'argument 1. Par exemple :  

`VBoxManage setextradata "nom VM" "VRDP/Feature/Client/DisableDisplay"`  

[Retour à la table des matières](#Table des matières)

# 7.2 Téléportation<a id="mark7.2"></a>

À partir de la version 3.1, VirtualBox supporte la "téléportation" – à savoir qu'il peut déplacer une machine sur un réseau d'un hôte VirtualBox à l'autre, pendant que la machine est en fonction.  
Cela fonctionne indépendamment du système d'exploitation hôte : vous pouvez téléporter des machines virtuelles entre, par exemple, des hôtes Solaris et Mac.  

La téléportation exige qu'une machine soit en fonction sur un hôte, qu'on appelle alors la "source". L'hôte sur lequel la machine virtuelle sera téléportée s'appellera alors la "cible" ; la machine sur la cible est alors configurée pour attendre la source afin de contacter la cible. L'état en fonction de la machine sera transféré de la source à la cible en un temps nimimum.  
La téléportation est possible sur n'importe quel réseau TCP/IP ; la source et la cible n'ont besoin que de s'entendre sur un port TCP/IP spécifié dans les paramètres de téléportation.  
Cependant, pour l'instant, il y a quelques prérequis pour que cela fonctionne :  

1. Sur l'hôte cible, vous devez configurer une machine virtuelle dans VirtualBox avec exactement les mêmes paramètres matériels que la machine sur la source que vous voulez téléporter. Cela ne s'applique pas aux paramètres purement descriptifs tels que le nom de la VM, mais bien sûr, pour que la téléportation fonctionne, la machine cible doit avoir la même quantité de mémoire et les autres paramètres matériels. Sans cela, la téléportation échouera avec un message d'erreur.  
2. Les deux machines virtuelles sur la source et la cible doivent partager le même stockage (images de disques durs et de lecteur amovible et CD/DVD). Cel signifie qu'elles utilisent soit la même cible iSCSI, soit le stockage se trouve quelque part sur le réseau et les deux hôtes y ont accès via NFS ou SMB/CIFS.  
Cela veut dire aussi que ni la machine source ni la machine cible ne peuvent avoir d'instantanés.  
Puis, suivez les étapes suivantes :  

1. Sur l'hôte cible, configurez la machine virtuelle pour attendre qu'une demande de téléportation n'arrive quand elle sera démarrée, plutôt que pour essayer de démarrer la machine.  
Cela se fait avec la commande VBoxManage suivante :  
`VBoxManage modifyvm <nomvmcible> --teleporter on --teleporterport <port>`  
où `<nomvmcible>` est le nom de la machine virtuelle de l'hôte cible et `<port>` est un numéro de port TCP/IP à utiliser sur les hôtes source et cible. Par exemple, utilisez le 6000. Pour les détails, voir chapitre [8.8.5 Paramètres de téléportation.](#mark8.8.5)  
2. Démarrez la VM sur l'hôte cible. Vous verrez qu'au lieu de démarrer, elle affichera une boîte de dialogue de progression indiquant qu'elle attend une demande de téléportation.  
3. Démarrez la machine sur l'hôte source comme d'habitude. Quand elle est en fonction et quand vous voulez la téléporter, lancez la commande suivante sur l'hôte source :  
`VBoxManage controlvm <nomvmsource> teleport --host <hôtecible> --port <port>`  
où `<nomvmsource>` est le nom de la machine (virtuelle sur l'hôte source (la machine actuellement en fonction) et `<hôtecible>` est le nom ou l'IP de l'hôte cible où une demande de téléportation par la machine est attendue, et `<port>` doit être le même numéro que celui spécifié dans la commande sur l'hôte cible. Pour les détails, voir chapitre [8.13 VBoxManage controlvm.](#mark8.13)  
Pour tester, vous pouvez aussi téléporter des machines sur le même hôte ; dans ce cas, utilisez `"localhost"` comme nom d'hôte sur l'hôte source et cible.  

Note: Dans de rares cas, si les processeurs de la source et de la cible sont très différents, la téléportation peut échouer avec un message d'erreur ou la cible peut planter. Cela peut arriver surtout si la VM exécute des logiciels très optimisés pour fonctionner sur un processeur particulier sans vérifier correctement que les certaines fonctions du processeur sont bien présentes. VirtualBox filtre les capacités du processeur présenté aus système d'exploitation invité. Les utilisateurs avancés peuvent essayer de restreindre les possibilités de ces processeurs virtuels avec la commande `VBoxManage` `--modifyvm` `--cpuid` ; voir chapitre [8.8.5 Paramètres de téléportation.](#mark8.8.5)  

[Retour à la table des matières](#Table des matières)

# 8 VBoxManage<a id="mark8"></a>

# 8.1 Introduction<a id="mark8.1"></a>

Comme brièvement indiqué au chapitre [1.16 Interfaces alternatives,](#mark1.16) VBoxManage est l'interface en ligne de commande de VirtualBox. Avec elle, vous pouvez contrôler complètement VirtualBox depuis la ligne de commandes de votre système d'exploitation hôte. VBoxManage supporte toutes les fonctionnalités auxquelles vous donne accès l'interface graphique, mais il supporte bien plus que ça. Il ouvre vraiment toutes les fonctions du moteur de virtualisation, même celles auxquelles on ne peut pas (encore) accéder en mode graphique.  
Vous devrez utiliser la ligne de commande si vous voulez  

* utiliser une autre interface que celle graphique (par exemple, VBoxSDL ou le serveur VBox-Headless) ;  
* contrôler certains paramètres de configuration plus avancés et expérimentaux d'une VM.  

Il faut avoir en tête deux choses en utilisant VBoxManage : D'abord, VBoxManage doit toujours être utilisé avec des "sous-commandes" spécifiques telles que "list" ou "createvm" ou "startvm".  
Toutes les sous-commandes supportées par VBoxManage sont décrites en détail au chapitre [8 VBoxManage.](#mark8)  
Ensuite, la plupart de ces sous-commandes exigent que vous spécifiez une machine virtuelle en particulier après la sous-commande. Il y a deux façons de faire cela :  

* Vous pouvez spécifier le nom de la VM comme il s'affiche dans l'interface graphique de VirtualBox. Remarquez que si ce nom contient des espaces, vous devez l'entourer de guillemets), comme cela est toujours le cas avec les arguments d'une ligne de commande contenant des espaces).  
Par exemple :  
`VBoxManage startvm "Windows XP"`  
* Vous pouvez spécifier l'UUID, qui est l'identifiant interne unique utilisé par VirtualBox pour parler de la machine virtuelle. En supposant que la VM précitée nommée "Windows XP" porte l'UUID affiché ci-dessous, la commande suivante a le même effet que celle précédente :  
`VBoxManage startvm 670e746d-abea-4ba6-ad02-2a3b043810a5`  
Vous pouvez taper VBoxManage list vms pour voir toutes les VMs enregistrées ; listées avec leurs paramètres, y compris leurs noms respectifs et leurs UUIDs.  
Des exemples classiques de la façon de contrôler VirtualBox depuis la ligne de commande apparaissent ci-dessous :  

* Pour créer une nouvelle machine virtuelle en ligne de commandes et l'enregistrer immédiatement avec VirtualBox, utilisez VBoxManage createvm avec l'option `--register, 1` comme ceci :  
Pour des détails, voir chapitre [8.7 VBoxManage createvm.](#mark8.7)  
`$ VBoxManage createvm --name "SUSE 10.2" --register`  
`VirtualBox Command Line Management Interface Version 4.3.13`  
`(C) 2005-2014 Oracle Corporation`  
`All rights reserved.`  
`Virtual machine 'SUSE 10.2' is created.`  
`UUID: c89fc351-8ec6-4f02-a048-57f4d25288e5`  
`Settings file: '/home/nomutilisateur/.config/VirtualBox/Machines/SUSE 10.2/SUSE 10.2.xml'`  
Comme vous pouvez le voir dans la sortie ci-dessus, une nouvelle machine virtuelle a été créée avec le nouvel UUID et un nouveau fichier XML de paramètres.  
* Pour afficher la configuration d'une VM en particulier, utilisez VBoxManage showvminfo ; voir chapitre [8.5 VBoxManage showvminfo](#mark8.5) pour des détails et un exemple.  
* Pour modifier les paramètres pendant qu'une VM est éteinte, utilisez VBoxManage modifyvm, comme ceci :  
`VBoxManage modifyvm "Windows XP" --memory "512MB"`  
Pour des détails,voir chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  
* Pour modifier la configuration du stockage (par exemple pour ajouter un contrôleur de stockage et ensuite un disque virtuel), utilisez VBoxManage storagectl et VBoxManage storageattach ; voir chapitre [8.19 VBoxManage storagectl](#mark8.19) et chapitre [8.18 VBoxManage storageattach](#mark8.18) pour les détails.  
* Pour contrôler le comportement de la VM, utilisez :  
	*	 Pour démarrer une VM éteinte, utilisez VBoxManage startvm ; voir chapitre [8.12 VBoxManage startvm](#mark8.12) pour les détails.
	*	 Pour mettre en pause ou sauvegarder une VM en fonction, ou pour modifier certains de ses paramètres, utilisez VBoxManage controlvm ; voir chapitre [8.13 VBoxManage controlvm](#mark8.13)  pour les détails.  

[Retour à la table des matières](#Table des matières)

# 8.2 Aperçu des commandes<a id="mark8.2"></a>

Quand vous lancez VBoxManage sans paramètres ou si vous entrez une ligne de commande invalide, le diagramme de syntaxe ci-dessous s'affichera. Remarquez que la sortie sera légèrement différente selon la plateforme hôte ; en cas de doute, vérifiez la sortie de VBoxManage pour voir les commandes disponibles sur votre hôte en particulier.  

`Usage:`  

`VBoxManage [<general option>] <command>`  

`General Options:`  

`[-v|--version] print version number and exit`  
`[-q|--nologo] suppress the logo`  
`[--settingspw <pw>] provide the settings password`  
`[--settingspwfile <file>] provide a file containing the settings password`  

`Commands:`  

`list [--long|-l] vms|runningvms|ostypes|hostdvds|hostfloppies|`  
`intnets|bridgedifs|natnets|dhcpservers|hostinfo|`  
`hostinfo|hostcpuids|hddbackends|hdds|dvds|floppies|`  
`usbhost|usbfilters|systemproperties|extpacks|`  

`groups|webcams`  

`showvminfo <uuid|vmname> [--details]`  
`[--machinereadable]`  
`showvminfo <uuid|vmname> --log <idx>`  

`registervm <filename>`  

`unregistervm <uuid|vmname> [--delete]`  

`createvm --name <name>`  
`[--groups <group>, ...]`  
`[--ostype <ostype>]`  
`[--register]`  
`[--basefolder <path>]`  
`[--uuid <uuid>]`  

`modifyvm <uuid|vmname>`  
`[--name <name>]`  
`[--groups <group>, ...]`  
`[--ostype <ostype>]`  
`[--iconfile <filename>]`  
`[--memory <memorysize in MB>]`  
`[--pagefusion on|off]`  
`[--vram <vramsize in MB>]`  
`[--acpi on|off]`  
`[--ioapic on|off]`  
`[--hpet on|off]`  
`[--triplefaultreset on|off]`  
`[--hwvirtex on|off]`  
`[--nestedpaging on|off]`  
`[--largepages on|off]`  
`[--vtxvpid on|off]`  
`[--vtxux on|off]`  
`[--pae on|off]`  
`[--longmode on|off]`  
`[--synthcpu on|off]`  
`[--cpuidset <leaf> <eax> <ebx> <ecx> <edx>]`  
`[--cpuidremove <leaf>]`  
`[--cpuidremoveall]`  
`[--hardwareuuid <uuid>]`  
`[--cpus <number>]`  
`[--cpuhotplug on|off]`  
`[--plugcpu <id>]`  
`[--unplugcpu <id>]`  
`[--cpuexecutioncap <1-100>]`  
`[--rtcuseutc on|off]`  
`[--graphicscontroller none|vboxvga]`  
`[--monitorcount <number>]`  
`[--accelerate3d on|off]`  
`[--firmware bios|efi|efi32|efi64]`  
`[--chipset ich9|piix3]`  
`[--bioslogofadein on|off]`  
`[--bioslogofadeout on|off]`  
`[--bioslogodisplaytime <msec>]`  
`[--bioslogoimagepath <imagepath>]`  
`[--biosbootmenu disabled|menuonly|messageandmenu]`  
`[--biossystemtimeoffset <msec>]`  
`[--biospxedebug on|off]`  
`[--boot<1-4> none|floppy|dvd|disk|net>]`  
`[--nic<1-N> none|null|nat|bridged|intnet|`  
`generic|natnetwork]`  
`[--nictype<1-N> Am79C970A|Am79C973]`  
`[--cableconnected<1-N> on|off]`  
`[--nictrace<1-N> on|off]`  
`[--nictracefile<1-N> <filename>]`  
`[--nicproperty<1-N> name=[value]]`  
`[--nicspeed<1-N> <kbps>]`  
`[--nicbootprio<1-N> <priority>]`  
`[--nicpromisc<1-N> deny|allow-vms|allow-all]`  
`[--nicbandwidthgroup<1-N> none|<name>]`  
`[--bridgeadapter<1-N> none|<devicename>]`  
`[--intnet<1-N> <network name>]`  
`[--nat-network<1-N> <network name>]`  
`[--nicgenericdrv<1-N> <driver>`  
`[--natnet<1-N> <network>|default]`  
`[--natsettings<1-N> [<mtu>],[<socksnd>],`  
`[<sockrcv>],[<tcpsnd>],`  
`[<tcprcv>]]`  
`[--natpf<1-N> [<rulename>],tcp|udp,[<hostip>],`  
`<hostport>,[<guestip>],<guestport>]`  
`[--natpf<1-N> delete <rulename>]`  
`[--nattftpprefix<1-N> <prefix>]`  
`[--nattftpfile<1-N> <file>]`  
`[--nattftpserver<1-N> <ip>]`  
`[--natbindip<1-N> <ip>`  
`[--natdnspassdomain<1-N> on|off]`  
`[--natdnsproxy<1-N> on|off]`  
`[--natdnshostresolver<1-N> on|off]`  
`[--nataliasmode<1-N> default|[log],[proxyonly],`  
`[sameports]]`  
`[--macaddress<1-N> auto|<mac>]`  
`[--mouse ps2|usb|usbtablet|usbmultitouch]`  
`[--keyboard ps2|usb`  
`[--uart<1-N> off|<I/O base> <IRQ>]`  
`[--uartmode<1-N> disconnected|`  
`server <pipe>|`  
`client <pipe>|`  
`file <file>|`  
`<devicename>]`  
`[--lpt<1-N> off|<I/O base> <IRQ>]  `
`[--lptmode<1-N> <devicename>]`  
`[--guestmemoryballoon <balloonsize in MB>]`  
`[--audio none|null|dsound|solaudio|oss|`  
`oss|coreaudio]`  
`[--audiocontroller ac97|hda|sb16]`  
`[--clipboard disabled|hosttoguest|guesttohost|`  
`bidirectional]`  
`[--draganddrop disabled|hosttoguest`  
`[--vrde on|off]`  
`[--vrdeextpack default|<name>`  
`[--vrdeproperty <name=[value]>]`  
`[--vrdeport <hostport>]`  
`[--vrdeaddress <hostip>]`  
`[--vrdeauthtype null|external|guest]`  
`[--vrdeauthlibrary default|<name>`  
`[--vrdemulticon on|off]`  
`[--vrdereusecon on|off]`  
`[--vrdevideochannel on|off]`  
`[--vrdevideochannelquality <percent>]`  
`[--usb on|off]`  
`[--usbehci on|off]`  
`[--snapshotfolder default|<path>]`  
`[--teleporter on|off]`  
`[--teleporterport <port>]`  
`[--teleporteraddress <address|empty>`  
`[--teleporterpassword <password>]`  
`[--teleporterpasswordfile <file>|stdin]`  
`[--tracing-enabled on|off]`  
`[--tracing-config <config-string>]`  
`[--tracing-allow-vm-access on|off]`  
`[--autostart-enabled on|off]`  
`[--autostart-delay <seconds>]`  
`[--defaultfrontend default|<name>]`  

`clonevm <uuid|vmname>`  
`[--snapshot <uuid>|<name>]`  
`[--mode machine|machineandchildren|all]`  
`[--options link|keepallmacs|keepnatmacs|`  
`keepdisknames]`  
`[--name <name>]`  
`[--groups <group>, ...]`  
`[--basefolder <basefolder>]`  
`[--uuid <uuid>]`  
`[--register]`  

`import <ovfname/ovaname>`  
`[--dry-run|-n]`  
`[--options keepallmacs|keepnatmacs]`  
`[more options]`  
`(run with -n to have options displayed`  
`for a particular OVF)`  

`export <machines> --output|-o <name>.<ovf/ova>`
`[--legacy09|--ovf09|--ovf10|--ovf20]`  
`[--manifest]`  
`[--iso]`  
`[--options manifest|iso|nomacs|nomacsbutnat]`  
`[--vsys <number of virtual system>]`  
`[--product <product name>]`  
`[--producturl <product url>]`  
`[--vendor <vendor name>]`  
`[--vendorurl <vendor url>]`  
`[--version <version info>]`  
`[--description <description info>]`  
`[--eula <license text>]`  
`[--eulafile <filename>]`  

`startvm <uuid|vmname>...`  
`[--type gui|sdl|headless]`  

`controlvm <uuid|vmname>`  
`pause|resume|reset|poweroff|savestate|`  
`acpipowerbutton|acpisleepbutton|`  
`keyboardputscancode <hex> [<hex> ...]|`  
`setlinkstate<1-N> on|off |`  
`nic<1-N> null|nat|bridged|intnet|generic|natnetwork`  
`[<devicename>] |`  
`nictrace<1-N> on|off |`  
`nictracefile<1-N> <filename> |`  
`nicproperty<1-N> name=[value] |`  
`nicpromisc<1-N> deny|allow-vms|allow-all |`  
`natpf<1-N> [<rulename>],tcp|udp,[<hostip>],`  
`<hostport>,[<guestip>],<guestport> |`  
`natpf<1-N> delete <rulename> |`  
`guestmemoryballoon <balloonsize in MB> |`  
`usbattach <uuid>|<address> |`  
`usbdetach <uuid>|<address> |`  
`clipboard disabled|hosttoguest|guesttohost|`  
`bidirectional |`  
`draganddrop disabled|hosttoguest |`  
`vrde on|off |`  
`vrdeport <port> |`  
`vrdeproperty <name=[value]> |`  
`vrdevideochannelquality <percent> |`  
`setvideomodehint <xres> <yres> <bpp>`  
`[[<display>] [<enabled:yes|no> |`  
`[<xorigin> <yorigin>]]] |`  
`screenshotpng <file> [display] |`  
`vcpenabled on|off |`  
`vcpscreens all|none|<screen>,[<screen>...] |`  

`setcredentials <username>`  
`--passwordfile <file> | <password>`  
`<domain>`  
`[--allowlocallogon <yes|no>] |`  
`teleport --host <name> --port <port>`  
`[--maxdowntime <msec>]`  
`[--passwordfile <file> |`  
`--password <password>] |`  
`plugcpu <id> |`  
`unplugcpu <id> |`  
`cpuexecutioncap <1-100>`  
`webcam <attach [path [settings]]> | <detach [path]> | <list>`  

`discardstate <uuid|vmname>`  

`adoptstate <uuid|vmname> <state_file>`  

`snapshot <uuid|vmname>`  
`take <name> [--description <desc>] [--live] |`  
`delete <uuid|snapname> |`  
`restore <uuid|snapname> |`  
`restorecurrent |`  
`edit <uuid|snapname>|--current`  
`[--name <name>]`  
`[--description <desc>] |`  
`list [--details|--machinereadable]`  
`showvminfo <uuid|snapname>`  

`closemedium disk|dvd|floppy <uuid|filename>`  
`[--delete]`  

`storageattach <uuid|vmname>`  
`--storagectl <name>`  
`[--port <number>]`  
`[--device <number>]`  
`[--type dvddrive|hdd|fdd]`  
`[--medium none|emptydrive|additions|`  
`<uuid|filename>|host:<drive>|iscsi]`  
`[--mtype normal|writethrough|immutable|shareable|`  
`readonly|multiattach]`  
`[--comment <text>]`  
`[--setuuid <uuid>]`  
`[--setparentuuid <uuid>]`  
`[--passthrough on|off]`  
`[--tempeject on|off]`  
`[--nonrotational on|off]`  
`[--discard on|off]`  
`[--bandwidthgroup <name>]`  
`[--forceunmount]`  
`[--server <name>|<ip>]`  
`[--target <target>]`  
`[--tport <port>]`  
`[--lun <lun>]`  
`[--encodedlun <lun>]`  
`[--username <username>]`  
`[--password <password>]`  
`[--initiator <initiator>]`  
`[--intnet]`  

`storagectl <uuid|vmname>`  
`--name <name>`  
`[--add ide|sata|scsi|floppy|sas]`  
`[--controller LSILogic|LSILogicSAS|BusLogic|`  
`IntelAHCI|PIIX3|PIIX4|ICH6|I82078]`  
`[--portcount <1-30>]`  
`[--hostiocache on|off]`  
`[--bootable on|off]`  

`[--remove]`  

`bandwidthctl <uuid|vmname>`  
`add <name> --type disk|network`  
`--limit <megabytes per second>[k|m|g|K|M|G] |`  
`set <name>`  
`--limit <megabytes per second>[k|m|g|K|M|G] |`  
`remove <name> |`  
`list [--machinereadable]`  
`(limit units: k=kilobit, m=megabit, g=gigabit,`  
`K=kilobyte, M=megabyte, G=gigabyte)`  

`showhdinfo <uuid|filename>`  

`createhd --filename <filename>`  
`[--size <megabytes>|--sizebyte <bytes>]`  
`[--diffparent <uuid>|<filename>`  
`[--format VDI|VMDK|VHD] (default: VDI)`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  

`modifyhd <uuid|filename>`  
`[--type normal|writethrough|immutable|shareable|`  
`readonly|multiattach]`  
`[--autoreset on|off]`  
`[--property <name=[value]>]`  
`[--compact]`  
`[--resize <megabytes>|--resizebyte <bytes>]`  

`clonehd <uuid|inputfile> <uuid|outputfile>`  
`[--format VDI|VMDK|VHD|RAW|<other>]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--existing]`  

`convertfromraw <filename> <outputfile>`  
`[--format VDI|VMDK|VHD]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--uuid <uuid>]`  
`convertfromraw stdin <outputfile> <bytes>`  
`[--format VDI|VMDK|VHD]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--uuid <uuid>]`  

`getextradata global|<uuid|vmname>`  
`<key>|enumerate`  

`setextradata global|<uuid|vmname>`  
`<key>`  
`[<value>] (no value deletes key)`  

`setproperty machinefolder default|<folder> |`  
`hwvirtexclusive on|off |`  
`vrdeauthlibrary default|<library> |`  
`websrvauthlibrary default|null|<library> |`  
`vrdeextpack null|<library> |`  
`autostartdbpath null|<folder> |`  
`loghistorycount <value>`  
`defaultfrontend default|<name>`  

`usbfilter add <index,0-N>`  
`--target <uuid|vmname>|global`  
`--name <string>`  
`--action ignore|hold (global filters only)`  
`[--active yes|no] (yes)`  
`[--vendorid <XXXX>] (null)`  
`[--productid <XXXX>] (null)`  
`[--revision <IIFF>] (null)`  
`[--manufacturer <string>] (null)`  

`[--product <string>] (null)`  
`[--remote yes|no] (null, VM filters only)`  
`[--serialnumber <string>] (null)`  
`[--maskedinterfaces <XXXXXXXX>]`  

`usbfilter modify <index,0-N>`  
`--target <uuid|vmname>|global`  
`[--name <string>]`  
`[--action ignore|hold] (global filters only)`  
`[--active yes|no]`  
`[--vendorid <XXXX>|""]`  
`[--productid <XXXX>|""]`  
`[--revision <IIFF>|""]`  
`[--manufacturer <string>|""]`  
`[--product <string>|""]`  
`[--remote yes|no] (null, VM filters only)`  
`[--serialnumber <string>|""]`  
`[--maskedinterfaces <XXXXXXXX>]`  

`usbfilter remove <index,0-N>`  
`--target <uuid|vmname>|global`  

`sharedfolder add <uuid|vmname>`  
`--name <name> --hostpath <hostpath>`  
`[--transient] [--readonly] [--automount]`  

`sharedfolder remove <uuid|vmname>`  
`--name <name> [--transient]`  

`guestcontrol <uuid|vmname>`  

`exec[ute]`  
`--image <path to program> --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose] [--timeout <msec>]`  
`[--environment "<NAME>=<VALUE> [<NAME>=<VALUE>]"]`  
`[--wait-exit] [--wait-stdout] [--wait-stderr]`  
`[--dos2unix] [--unix2dos]`  
`[-- [<argument1>] ... [<argumentN>]]`  

`copyfrom`  
`<guest source> <host dest> --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  
`[--dryrun] [--follow] [--recursive]`  

`copyto|cp`  
`<host source> <guest dest> --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  
`[--dryrun] [--follow] [--recursive]`  

`createdir[ectory]|mkdir|md`  
`<guest directory>... --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  
`[--parents] [--mode <mode>]`  

`removedir[ectory]|rmdir`  
`<guest directory>... --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  
`[--recursive|-R|-r]`  

`removefile|rm`  
`<guest file>... --username <name>`  
`[--passwordfile <file> | --password <password>]`  

`[--domain <domain>] [--verbose]`  

`ren[ame]|mv`  
`<source>... <dest> --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  

`createtemp[orary]|mktemp`  
`<template> --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--directory] [--secure] [--tmpdir <directory>]`  
`[--domain <domain>] [--mode <mode>] [--verbose]`  

`list <all|sessions|processes|files> [--verbose]`  

`process kill --session-id <ID>`  
`| --session-name <name or pattern>`  
`[--verbose]`  
`<PID> ... <PID n>`  

`[p[s]]kill --session-id <ID>`  
`| --session-name <name or pattern>`  
`[--verbose]`  
`<PID> ... <PID n>`  

`session close --session-id <ID>`  
`| --session-name <name or pattern>`  
`| --all`  
`[--verbose]`  

`stat`  
`<file>... --username <name>`  
`[--passwordfile <file> | --password <password>]`  
`[--domain <domain>] [--verbose]`  

`updateadditions`  
`[--source <guest additions .ISO>] [--verbose]`  
`[--wait-start]`  
`[-- [<argument1>] ... [<argumentN>]]`  

`watch [--verbose]`  

`debugvm <uuid|vmname>`  
`dumpguestcore --filename <name> |`  
`info <item> [args] |`  
`injectnmi |`  
`log [--release|--debug] <settings> ...|`  
`logdest [--release|--debug] <settings> ...|`  
`logflags [--release|--debug] <settings> ...|`  
`osdetect |`  
`osinfo |`  
`getregisters [--cpu <id>] <reg>|all ... |`  
`setregisters [--cpu <id>] <reg>=<value> ... |`  
`show [--human-readable|--sh-export|--sh-eval|`  
`--cmd-set]`  
`<logdbg-settings|logrel-settings>`  
`[[opt] what ...] |`  
`statistics [--reset] [--pattern <pattern>]`  
`[--descriptions]`  

`metrics list [*|host|<vmname> [<metric_list>]]`  
`(comma-separated)`  

`metrics setup`  
`[--period <seconds>] (default: 1)`  
`[--samples <count>] (default: 1)`  
`[--list]`  

`[*|host|<vmname> [<metric_list>]]`  

`metrics query [*|host|<vmname> [<metric_list>]]`  

`metrics enable`  
`[--list]`  
`[*|host|<vmname> [<metric_list>]]`  

`metrics disable`  
`[--list]`  
`[*|host|<vmname> [<metric_list>]]`  

`metrics collect`  
`[--period <seconds>] (default: 1)`  
`[--samples <count>] (default: 1)`  
`[--list]`  
`[--detach]`  
`[*|host|<vmname> [<metric_list>]]`  

`dhcpserver add|modify --netname <network_name> |`  
`[--ip <ip_address>`  
`--netmask <network_mask>`  
`--lowerip <lower_ip>`  
`--upperip <upper_ip>]`  
`[--enable | --disable]`  

`dhcpserver remove --netname <network_name> |`  

`extpack install [--replace] <tarball> |`  
`uninstall [--force] <name> |`  
`cleanup`  

À chaque fois que vous appelez VBoxManage, une seule commande peut être exécutée. Toute- fois, une commande peut supporter plusieurs sous-commandes que vous pouvez appeler en une seule fois. Les sections suivantes fournissent des informations de référence détaillées sur les différentes commandes.  

[Retour à la table des matières](#Table des matières)

# 8.3 Options générales<a id="mark8.3"></a>

* `--version` : affiche la version de cet outil et quitte.  
* `--nologo` : supprime l'affichage des informations de logo (utile pour les scripts)  
* `--settingspw` : spécifiie un mot de passe pour les paramètres  
* `--settingspwfile` : spécifie un fichier contenant le mot de passe des paramètres  

Le mot de passe des paramètres est utilisé pour certains paramètres ayant besoin d'être stockés et chiffrés pour des raisons de sécurité. Pour le moment, le seul paramètre chiffré est l'initiateur secret iSCSI (voir chapitre [8.18 VBoxManage storageattach](#mark8.18) pour les détails). Tant qu'aucun mot de passe des paramètres n'a été spécifié, ces informations sont stockées en texte brut. Après avoir utilisé l'option `--settingspw|--settingspwfile` une fois, il faut toujours l'utiliser, sans quoi le paramètre chiffré ne peut pas être chiffré.  

[Retour à la table des matières](#Table des matières)

# 8.4 VBoxManage list<a id="mark8.4"></a>

La commande list donne des informations pertinentes sur votre système et sur les paramètres actuels de VirtualBox.  
Les sous-commandes suivantes sont disponibles avec VBoxManage list :  

* vms liste toutes les machines virtuelles actuellement enregistrées avec VirtualBox. Par défaut, elle affiche une liste compacte avec le nom et l'UUID de chaque VM ; si vous spécifiez en plus `--long` ou `-l`, cela affichera une liste détaillée comme avec la commande `showvminfo` (voir ci-dessous).  
* runningvms liste toutes les machines virtuelles actuellement en fonction avec leurs identifiants uniques (UUIDs) sous la même forme qu'avec vms.  
* ostypes liste les systèmes d'exploitation invités connus aujourd'hui de VirtualBox, ainsi que les identifiants utilisés pour s'y référer avec la commande modifyvm.  
* hostdvds, hostfloppies, listent respectivement les lecteurs DVD, amovibles, les interfaces réseaux bridgées et host-only sur l'hôte, ainsi que le nom utilisé pour y accéder depuis VirtualBox.  
* bridgedifs, hostonlyifs aet dhcpservers, listent respectivement les interfaces réseaux bridgées, host-only et les serveurs DHCP disponibles sur l'hôte. Merci de voir le chapitre [6 Le réseau virtuel](#mark6) pour les détails à leur sujet.  
* hostinfo affiche des informations sur le système hôte telles que les processeurs, la taille de la mémoire et la version du système d'exploitation.  
* hostcpuids affiche les paramètres CPUID aux processeurs de l'hôte. Cela peut servir à une analyse plus fine des possibilités de virtualisation de l'hôte.  
* hddbackends liste les fondations de disque virtuel connues de VirtualBox. Pour chaque format (tels que VDI, VMDK ou RAW), ceci liste les possibilités de la fondation et sa configuration.  
* hdds, dvds et floppies vous donnent des informations sur les images de disque virtuel actuellement utilisées par VirtualBox, y compris leurs paramètres, leurs identifiants uniques (UUIDs) associés par VirtualBox et tous leurs fichiers associés. C'est l'équivalent de la ligne de commandes du gestionnaire de médias virtuels ; voir chapitre [5.3 Le gestionnaire de médias virtuels.](#mark5.3)  
* usbhost donne des informations sur les périphériques USB attachés à l'hôte, en particulier des informations utiles pour construire des filtres USB et s'ils sont actuellement utilisés par l'hôte.  
* usbfilters liste les filtres USB globaux enregistrés avec VirtualBox c'est-à-dire les filtres des périphériques accessibles à toutes les machines virtuelles  et il affiche les paramètres du filtre.  
* systemproperties affiche des paramètres globaux de VirtualBox, tels que la RAM minimum et maximum de l'invité et la taille du disque dur virtuel, les paramètres du dossier et la bibliothèque d'authentification actuellement utilisée.  
* extpacks affiche les packs d'extension de VirtualBox actuellement installés ; voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) et chapitre [8.36 VBoxManage extpack](#mark8.36) pour plus d'informations.  

[Retour à la table des matières](#Table des matières)

# 8.5 VBoxManage showvminfo<a id="mark8.5"></a>

La commande showvminfo affiche des informations sur une machine en particulier. Ce sont les mêmes informations qu'afficherait VBoxManage list vms `--long` pour toutes les machines virtuelles.  
Vous aurez des informations ressemblant à ce qui suit :  

`$ VBoxManage showvminfo "Windows XP"`  
`VirtualBox Command Line Management Interface Version 4.3.13`  
`(C) 2005-2014 Oracle Corporation`  
`All rights reserved.`  

`Name: Windows XP`  
`Guest OS: Other/Unknown`  
`UUID: 1bf3464d-57c6-4d49-92a9-a5cc3816b7e7`  
`Config file: /home/nomutilisateur/.config/VirtualBox/Machines/Windows XP/Windows XP.xml`  
`Memory size: 512MB`  
`VRAM size: 12MB`  
`Number of CPUs: 2`  
`Synthetic Cpu: off`  
`Boot menu mode: message and menu`  
`Boot Device (1): DVD`  
`Boot Device (2): HardDisk`  
`Boot Device (3): Not Assigned`  
`Boot Device (4): Not Assigned`  
`ACPI: on`  
`IOAPIC: on`  
`PAE: on`  
`Time offset: 0 ms`  
`Hardw. virt.ext: on`  
`Nested Paging: on`  
`VT-x VPID: off`  
`State: powered off (since 2009-10-20T14:52:19.000000000)`  
`Monitor count: 1`  
`3D Acceleration: off`  
`2D Video Acceleration: off`  
`Teleporter Enabled: off`  
`Teleporter Port: 0`  
`Teleporter Address:`  
`Teleporter Password:`  
`Storage Controller (0): IDE Controller`  
`Storage Controller Type (0): PIIX4`  
`Storage Controller (1): Floppy Controller 1  `
`Storage Controller Type (1): I82078`  
`IDE Controller (0, 0): /home/user/windows.vdi (UUID: 46f6e53a-4557-460a-9b95-68b0f17d744b)`  
`IDE Controller (0, 1): /home/user/openbsd-cd46.iso (UUID: 4335e162-59d3-4512-91d5-b63e94eebe0b)`  
`Floppy Controller 1 (0, 0): /home/user/floppy.img (UUID: 62ac6ccb-df36-42f2-972e-22f836368137)`  
`NIC 1: disabled`  
`NIC 2: disabled`  
`NIC 3: disabled`  
`NIC 4: disabled`  
`NIC 5: disabled`  
`NIC 6: disabled`  
`NIC 7: disabled`  
`NIC 8: disabled`  
`UART 1: disabled`  
`UART 2: disabled`  
`Audio: disabled (Driver: Unknown)`  
`Clipboard Mode: Bidirectional`  
`VRDE: disabled`  
`USB: disabled`  

`USB Device Filters:`  
`<none>`  

`Shared folders:`  
`<none>`  

`Statistics update: disabled`  

[Retour à la table des matières](#Table des matières)

# 8.6 VBoxManage registervm / unregistervm<a id="mark8.6"></a>

La commande registervm vous permet d'importer la définition d'une machine virtuelle dans VirtualBox via un fichier XML. La machine ne doit pas entrer en conflit avec une autre déjà enregistrée dans VirtualBox et elle ne peut pas avoir de disques durs ou amovibles attachés.  
Il est recommandé de mettre le fichier de définition dans le répertoire des machines avant de l'enregistrer.  

Note: Lors de la création d'une nouvelle machine virtuelle avec VBoxManage createvm
(voir ci-dessous), vous pouvez spécifier directement l'option `--register` pour éviter de devoir l'enregistrer séparément.  

La commande unregistervm désenregistre une machine virtuelle. Si vous spécifiez également `--delete`, les fichiers suivants seront eux aussi automatiquement effacés :  
1. tous les fichiers images de disque dur, y compris les fichiers de différenciation, utilisés par la machine et non partagés avec d'autres machines ;  
2. les fichiers de l'état sauvegardé créés par la machine s'il y en a (un si la machine était en état "sauvegardé" et un pour chaque instantané en ligne) ;  
3. le fichier XML de la machine et ses sauvegardes ;  
4. les fichiers journaux de la machine s'il y en a ;  
5. le répertoire de la machine s'il est vide après l'effacement de tout ce qui précède.  

[Retour à la table des matières](#Table des matières)

# 8.7 VBoxManage createvm<a id="mark8.7"></a>

Cette commande crée un nouveau fichier de définition de machine virtuelle XML.  
Le paramètre `--name <name>` est requis et doit spécifier le nom de la machine. Ce nom étant utilisé par défaut pour nommer le fichier des paramètres (avec l'extension .xml) et le dossier machine (un sous-dossier du dossier .config/VirtualBox/Machines), il doit respecter les exigences de votre système d'exploitation hôte en matière de spécifications d'un nom de fichier. Si vous renommez plus tard la VM, le nom du fichier et du dossier seront modifiés automatiquement.  
Néanmoins, si vous utilisez l'option `--basefolder <path>`, le dossier de la machine sera appelé <path>. Dans ce cas, les noms du fichier et du dossier ne seront pas modifiés si la machine virtuelle est renommée.  
Par défaut, cette commande ne fait que créer le fichier XML, sans enregistrer automatiquement la VM avec votre installation de VirtualBox. Pour enregistrer instantanément la VM, utilisez l'option `--register`, ou lancez VBoxManage registervm séparément a posteriori.  

[Retour à la table des matières](#Table des matières)

# 8.8 VBoxManage modifyvm<a id="mark8.8"></a>

Cette commande modifie les propriétés d'une machine virtuelle enregistrée et non en fonction.  
La plupart des propriétés disponibles avec cette commande correspondent aux paramètres de la VM affichés dans l'interface graphique de VirtualBox dans la boîte de dialogue "Paramètres" de chaque VM ; celles-ci ont été décrites dans le chapitre [3 Configurer des machines virtuelles.](#mark3) Néanmoins, certains des paramètres les plus avancés ne sont disponibles que via l'interface VBoxManage.  
Ces commandes exigent que la machine soit éteinte (ni en fonction ni en état "sauvegardé").  
Certains paramètres de la machine peuvent être aussi modifiés pendant qu'une machine est en fonction ; ces paramètres auront alors une sous-commande correspondante avec la sous-commande VBoxManage controlvm (voir chapitre [8.13 VBoxManage controlvm).](#mark8.13)  

[Retour à la table des matières](#Table des matières)

# 8.8.1 Paramètres généraux<a id="mark8.8.1"></a>

Les paramètres généraux suivants sont disponibles via VBoxManage modifyvm :  

* `--name <nom>` : Ceci modifie le nom de la VM et renomme éventuellement les fichiers internes virtuels, comme décrit avec VBoxManage createvm ci-dessus.  
* `--ostype <ostype>` : Ceci spécifie le système d'exploitation supposé fonctionner dans la VM. Pour en apprendre davantage sur les différents identifiants utilisables, utilisez VBoxManage list ostypes.  
* `--memory <taillemémoire>` : Ceci définit la quantité de RAM, en Mo, que devrait s'affecter à elle-même la machine virtuelle sur l'hôte. Voir les remarques au chapitre [1.7 Créer votre première machine virtuelle](#mark1.7) pour plus d'informations.  
* `--vram <taillevram>` : Ceci définit la quantité de RAM de la carte graphique. Voir chapitre [3.5 Paramètres d'affichage](#mark3.5) pour des détails.  
* `--acpi on|off` ; `--ioapic on|off` : Ces deux éléments déterminent si la VM devrait supporter respectivement l'ACPI et l'APIC I/O ; voir chapitre [3.4.1 Onglet "Carte mère"](#mark3.4.1) pour des détails.  
* `--hardwareuuid <uuid>` : L'UUID présentée à l'invité via les tables mémoire (DMI/SMBIOS), les propriétés matérielles et invité. Par défaut, c'est le même que l'uuid de la VM. Utile quand vous clonez une VM. La téléportation en tient compte automatiquement.  
* `--cpus <nombreprocesseur>` : Ceci définit le nombre de processeurs virtuels de la machine virtuelle (voir chapitre [3.4.2 Onglet "Processeur").](#mark3.4.2) Si le branchement à chaud des processeurs est activé (voir ci-dessous), ceci définit le nombre maximum de processeurs virtuels qu'on peut brancher dans les machines virtuelles.  
* `--rtcuseutc on|off` : Cette option fait tourner l'horloge en temps réel (RTC) en temps UTC (voir chapitre [3.4.1 Onglet "Carte mère").](#mark3.4.1)  
* `--cpuhotplug on|off` : Ceci active le branchement à chaud du processeur. Quand vous l'activez, les processeurs virtuels peuvent être ajoutés et supprimés d'une machine virtuelle pendant qu'elle est en fonction. Voir chapitre [9.5 Montage de processeur à chaud](#mark9.5) pour plus d'informations.  
* `--plugcpu|unplugcpu <id>` : Si vous avez activé le branchement des processeurs à chaud (voir ci-dessus), ceci ajoute un processeur virtuel aux machines virtuelles (ou en supprime un). `<id>` spécifie l'index du processeur virtuel à ajouter ou supprimer et doit être un numéro entre 0 et le nombre maximum de processeurs configurés avec l'option `--cpus`. Le processeur 0 ne peut jamais être supprimé.  
* `--cpuexecutioncap <1-100>` : Ce paramètre contrôle le nombre de temps processeur utilisable par un processeur. La valeur 50 implique qu'un seul processeur virtuel peut utiliser jusqu'à 50% d'un seul processeur de l'hôte.  
* `--pae on|off` : Ceci active/désactive la PAE (voir chapitre [3.4.2 Onglet "Processeur").](#mark3.4.2)  
* `--longmode on|off` : Ceci active/désactive le mode long (voir chapitre [3.4.2 Onglet "Processeur").](#mark3.4.2)  
* `--synthcpu on|off` : Ce paramètre détermine si VirtualBox présente ou non un processeur synthétique à l'invité pour permettre une migration en direct entre les systèmes hôtes qui diffèrent de manière significative.  
* `--hpet on|off` : Ceci active/désactive un High Precision Event Timer (HPET) qui peut remplacer les timers du système primitif. C'est désactivé par défaut. Remarquez que Windows ne supporte un HPET qu'à partir de Vista.  
* `--hwvirtex on|off` : Ceci active ou désactive l'utilisation des extensions du matériel de virtualisation (Intel VT-x ou AMD-V) dans le processeur de votre système hôte ; voir chapitre [10.3 Virtualisation matérielle vs. logicielle.](#mark10.3)  
* `--triplefaultreset on|off` : ce paramètre permet de relancer l'invité au lieu de récupérer une Guru Meditation. Certains invités échouent par une triple erreur lors de la réinitialisation du processeur, donc on peut parfois souhaiter ce comportement. Cela ne fonctionne que sur les invités non SMP.  
* `--nestedpaging on|off` : Si la virtualisation matérielle est activée, ce paramètre supplémentaire active ou désactive l'utilisation de la fonction de pagination nested du processeur de votre système hôte ; voir chapitre [10.3 Virtualisation matérielle vs. logicielle.](#mark10.3)  
* `--largepages on|off` : Si la virtualisation matérielle et la pagination nested sont activées, pour Intel VT-x seulement, vous pouvez obtenir un gain de performances jusqu'à 5% en activant ce paramètre. Il fait utiliser à l'hyperviseur les grandes pages pour réduire l'utilisation du TLB et l'overhead.  
* `--vtxvpid on|off` : Si la virtualisation matérielle est activée, pour Intel VT-x seulement, ce paramètre supplémentaire active ou désactive l'utilisation de la fonction TLB taggçe (VPID) du processeur de votre système hôte ; voir chapitre [10.3 Virtualisation matérielle vs. logicielle.](#mark10.3)  
* `--vtxux on|off` : Si vous avez activé la virtualisation matérielle, seulement pour VT-x d'Intel, ce paramètre active ou désactive l'utilisation de la fonction mode invité sans restriction pour faire tourner votre invité.  
* `--accelerate3d on|off` : Ceci active, si vous avez installé les suppléments invité, la disponibilité de l'accélération 3D ; voir chapitre [4.4.1 Accélération 3D matérielle (OpenGL et Direct3D 8/9).](#mark4.4.1)  
* Vous pouvez influencer le logo du BIOS affiché quand une machine virtuelle démarre avec un certain nombre de paramètres. Par défaut, un logo VirtualBox est affiché.  
Avec `--bioslogofadein on|off` et `--bioslogofadeout on|off,` vous pouvez déterminer si le logo devrait fade in et out.  
Avec `--bioslogodisplaytime <msec>` vous pouvez, définir la durée d'affichage du logo en millisecondes.  
Avec `--bioslogoimagepath <cheminimage>` vous pouvez, si vous le souhaitez, remplacer l'image affichée par votre propre logo. L'image doit être un fichier BMP décompressé 256 couleurs avec des informations sur la zone des couleurs (au format Windows 3.0). La taille de l'image ne doit pas excéder 640 x 480.  
* `--biosbootmenu disabled|menuonly|messageandmenu` : Ceci spécifie si le BIOS permet à l'utilisateur de sélectionner un périphérique de démarrage temporaire. menuonly supprime le message, mais l'utilisateur peut encore appuyer sur F12 pour sélectionner un périphérique de démarrage temporaire.  
* `--nicbootprio<1-N> <priorité>` : Ceci spécifie l'ordre dans lequel les NICs sont essayés pour démarrer par le réseau (en utilisant PXE). La priorité est un entier entre 0 à 4. La priorité 1 est la plus élevée, la priorité 4 est la plus faible. La priorité 0, qui est celle par défaut sauf autrement spécifié, est la plus faible.  
Remarquez que cette option n'a d'effet que quand le démarrage Intel PXE ROM est utilisé.  
* `--boot<1-4> none|floppy|dvd|disk|net` : Ceci spécifie l'ordre d'amorçage pour la machine virtuelle. Il y a quatre "slots", auxquels essaiera d'accéder la VM de 1 à 4, et pour chacun d'eux, vous pouvez définir un périphérique sur lequel la VM devrait essayer de démarrer.  
* `--snapshotfolder default|<path>` : Ceci vous permet de spécifier le dossier dans lequel seront stockés les instantanés d'une machine virtuelle.  
* `--firmware efi|bios` : Spécifie le firmware utilisé pour démarrer une machine virtuelle en particulier : EFI ou BIOS. N'utilisez EFI que si vous comprenez bien ce que vous faites.  
* `--guestmemoryballoon <taille>` définit la taille par défaut de la mémoire du ballon de l'invité c'est-à-dire la mémoire affectée par les suppléments invité de VirtualBox à partir du système d'exploitation invité et rendue à l'hyperviseur pour être réutilisée par d'autres machines virtuelles. `<taille>` doit être spécifiée en mégaoctets. La taille par défaut est de 0 mégaoctets. Pour les détails, voir chapitre [4.8.1 Faire du ballon avec la mémoire.](#mark4.8.1)  
* `--lptmode<1-N> <Périphérique>` Spécifie le nom du périphérique du port parallèle utilisé par la fonction Pert parallèle. Utilisez ceci avant `--lpt`. Cette fonction est spécifique au système d'exploitation.  
* `--lpt<1-N> <base E/S> <IRQ>` Spécifie l'adresse E/S du port parallèle et le numéro IRQ utilisés par la fonction Port parallèle. Utilisez ceci après `--lptmod`. L'adresse de base E/S et le numéro IRQ sont les valeurs vues par l'invité, c'est-à-dire les valeurs disponibles dans le gestionnaire de périphériques de l'invité.  
* `--defaultfrontend default|<nom>` : Ceci vous permet de spécifier l'interface par défaut qui sera utilisée au démarrage de cette VM voir chapitre [8.12 VBoxManage startvm](#mark8.12) pour des détails.  

[Retour à la table des matières](#Table des matières)

# 8.8.2 Paramètres réseaux<a id="mark8.8.2"></a>

Les paramètres réseaux suivants sont disponibles avec VBoxManage modifyvm. Avec tous ces paramètres, le numéro décimal suivant directement le nom de l'option `("1-N"` dans la liste ci-dessous) spécifie l'adaptateur réseau virtuel dont vous modifiez les paramètres.  

* `--nic<1-N> none|null|nat|bridged|intnet|hostonly|generic` : Avec cela, vous pouvez définir, pour chacune des cartes réseaux virtuelles de la VM, le type de réseau qui devrait être disponible. Ils peuvent ne pas être présents (none), non connectés à l'hôte (null), utiliser le network address translation (nat), le réseau bridgé (bridged) ou communiquer avec d'autres machines virtuelles en utilisant le réseau internal (intnet), le réseau host-only (hostonly), ou accéder à des sous-modes rarement utilisés (generic).  
Ces options correspondent aux modes décrits en détail au chapitre [6.2 Introduction aux modes réseaux.](#mark6.2)  
* `--nictype<1-N> Am79C970A|Am79C973|82540EM|82543GC|82545EM|virtio` : Cela vous permet, pour chacune des cartes réseaux virtuelles de la VM, de spécifier le matériel réseau que VirtualBox présente à l'invité ; voir chapitre [6.1 Matériel réseau virtuel.](#mark6.1)  
* `--cableconnected<1-N> on|off` : Cela vous permet de déconnecter temporairement une interface réseau virtuelle comme si vous débranchiez un câble réseau d'une vraie carte réseau. Cela pourrait être utile pour reparamétrer certains composants logiciels dans la VM.  
* Avec l'option "nictrace", vous pouvez éventuellement tracer le trafic réseau en l'envoyant vers un fichier pour faire du débogage.  
Avec `--nictrace<1-N> on|off`, vous pouvez activer un traçage réseau pour des cartes réseaux en particulier.
Si vous l'activez, vous devez spécifier avec `--nictracefile<1-N> <nomfichier>` le fichier où devrait être journalisée la trace.  
* `--bridgeadapter<1-N> none|<nompériphérique>` : Si le réseau bridgé est activé pour une carte réseau virtuelle (voir l'option `--nic` ci-dessus ; sinon ce paramètre n'a aucun effet) utilisez cette option pour spécifier l'interface de l'hôte qu'utilisera l'interface réseau virtuelle donnée. Pour des détails, merci de voir le chapitre [6.5 Réseau Bridgé.](#mark6.5)  
* `--hostonlyadapter<1-N> none|<nompériphérique>` : Si le réseau host-only a été activé pour une carte réseau virtuelle (voir l'option `--nic` ci-dessus ; sinon ce paramètre n'a aucun effet), utilisez cette option pour spécifier l'interface réseau host-only qu'utilisera l'interface réseau donnée. Pour des détails, merci de voir le chapitre [6.7 Réseau Host-only.](#mark6.7)  
* `--intnet<1-N> network` : Si le réseau interne a été activé pour une carte réseau virtuelle (voir l'option `--nic` ci-dessus ; sinon ce paramètre n'a aucun effet), utilisez cette option pour spécifier le nom du réseau interne (voir chapitre [6.6 Réseau interne).](#mark6.6)  
* `--macaddress<1-N> auto|<mac>` : Avec cette option, vous pouvez définir l'adresse MAC de la carte réseau virtuelle. Normalement, chaque carte réseau virtuel se voit affecter une adresse aléatoire par VirtualBox Lors de la création de la VM.  
* `--nicgenericdrv<1-N> <pilote fondation>` : Si le réseau générique a été activée pour une carte réseau virtuelle (voir l'option `--nic` ci-dessus ; sinon ce paramètre n'a aucun effet), ce mode vous permet d'accéder à des sous-modes réseaux rarement utilisés, tels que le réseau VDE ou le tunnel UDP.  
* `--nicproperty<1-N> <nomparam>="paramvaleur"` : Cette option, associée avec `"nic-genericdrv"`, vous permet de passer des paramètres aux fondations réseaux rarement utilisées.  
Ces paramètres sont des fondations spécifiques au moteur et sont différentes entre les pilotes de la fondation du tunnel UDP et du VDE. Par exemple, merci de voir le chapitre [6.8 Réseau en tunnel UDP.](#mark6.8)  

[Retour à la table des matières](#Table des matières)

# 8.8.2.1 Paramètres du réseau NAT<a id="mark8.8.2.1"></a>

Les paramètres de réseau NAT suivants sont disponibles via VBoxManage modifyvm. Avec tous ces paramètres, le numéro décimale suivant le nom de l'option ("1-N" dans la liste ci-dessous) spécifie l'adaptateur réseau virtuel que devrait modifier ces paramètres.  

* `--natpf<1-N> [<nom>],tcp|udp,[<hostip>],<porthôte>,[<ipinvité>], <portinvité>` : Cette option définit une règle de redirection de port NAT (merci de voir le chapitre [6.3.1 Configurer la redirection de ports avec NAT](#6.3.1) pour des détails).  
* `--natpf<1-N> delete <nom>` : Cette option supprime une règle de redirection de port NAT (merci de voir le chapitre [6.3.1 Configurer la redirection de ports avec NAT](#6.3.1) pour les détails).  
* `--nattftpprefix<1-N> <préfixe>` : Cette option définit un préfixe pour le serveur TFTP intégré, à savoir là où se trouve le fichier de démarrage (merci de voir le chapitre [6.3.2 Démarrer avec PXE avec NAT](#6.3.2) et le chapitre [9.11.2 Configurer le serveur d'amorçage (prochain serveur) d'une interface réseau NAT](#mark9.11.2) pour les détails).  
* `--nattftpfile<1-N> <fichierdémarrage>` : Cette option définit le fichier de démarrage TFT (merci de voir le chapitre [9.11.2 Configurer le serveur d'amorçage (prochain serveur) d'une interface réseau NAT](#mark9.11.2) pour des détails).  
* `--nattftpserver<1-N> <serveurtftp>` : Cette option définit l'adresse du serveur TFTP sur lequel démarrer (voir chapitre [9.11.2 Configurer le serveur d'amorçage (prochain serveur) d'une interface réseau NAT](#mark9.11.2) pour les détails).  
* `--natdnspassdomain<1-N> on|off` : Cette option spécifie si le serveur DHCP passe le nom de domaine pour la résolution du nom du réseau.  
* `--natdnsproxy<1-N> on|off` : Cette option fait faire du proxy au moteur NAT pour toutes les requêtes DNS de l'invité adressées au serveur DNS de l'hôte (merci de voir le chapitre [9.11.5 Activer le proxy DNS en mode NAT](#mark9.11.5) pour des détails).  
* `--natdnshostresolver<1-N> on|off` : Cette option fait utiliser par le moteur NAT le mécanismes de résolveur de l'hôte pour gérer les requêtes DNS (merci de voir le chapitre [9.11.5 Activer le proxy DNS en mode NAT](#mark9.11.5) pour les détails).  
* `--natnatsettings<1-N> [<mtu>],[<socksnd>],[<sockrcv>],[<tcpsnd>], [<tcprcv>]` : Cette option contrôle plusieurs paramètres NAT (merci de voir le chapitre [9.11.3 Peaufiner les tampons TCP/IP pour NAT](#mark9.11.3) pour les détails).  
* `--nataliasmode<1-N> default|[log],[proxyonly],[sameports]` : Cette option définit le comportement du cœur du moteur NAT : `log -` active la journalisation, `proxyonly -` switch les modes d'alias pour rendre NAT transparent, `sameports` renforce le moteur NAT pour envoyer des paquets via le même port qu'ils arrivent, default `-` désactive tous les modes mentionnés ci-dessus. (merci de voir le chapitre [9.11.7 Configurer des aliases pour le moteur NAT](#mark9.11.7) pour des détails).  

[Retour à la table des matières](#Table des matières)

# 8.8.3 Options du port série, du son, du presse-papier et de l'USB<a id="mark8.8.3"></a>

Les autres paramètres matériels suivants sont disponibles avec VBoxManage modifyvm :  

* `--uart<1-N> off|<I/O base> <IRQ>` : Avec cette option, vous pouvez configurer les ports série virtuels de la VM (voir chapitre [3.9 Ports série](#mark3.9) pour une introduction.  
* `--uartmode<1-N> <arg>` : Ce paramètre contrôle la façon dont VirtualBox se connecte à un port série virtuel donné (on la configurait jadis avec l'option `--uartX`, voir ci-dessus) sur l'hôte sur lequel fonctionne la machine virtuelle. Comme décrit en détail au chapitre [3.9 Ports série](#mark3.9) pour chaque port, vous pouvez spécifier `<arg>` comme une des options suivantes :  
	*	 disconnected : Même si le port série apparaît dans l'invité, il ne sert à rien comme un vrai port COM sans câble.  
	*	 `server <pipename>` : Sur un hôte Windows, ceci dit à VirtualBox de créer un tuyau nommé sur l'hôte, appelé <pipename> et de connecter le port série virtuel dessus. Remarquez que Windows exige que le nom d'un tuyau nommé commence par `\.\pipe\`.  
Sur un hôte Linux, plutôt qu'un tuyau nommé, un socket de domaine local est utilisée.  
	*	 `client <pipename>` : Ceci agit comme server..., sauf que le tuyau (ou le socket de domaine local) n'est pas créée par VirtualBox, mais est supposée déjà exister.  
	*	 `<devicename>` : Si, au lieu de celui ci-dessus, le nom du périphérique du port série matériel de l'hôte est spécifié, le port série virtuel est connecté à ce port matériel. Sur un hôte Windows, le nom du périphérique sera un port COM tel que COM1 ; sur un hôte Linux, le nom du périphérique ressemblera à `/dev/ttyS0`. Cela vous permet de "brancher" un vrai port série à une machine virtuelle.  
* `--audio none|null|oss` : Avec cette option, vous pouvez définir si la VM supporte le son.  
* `--clipboard disabled|hosttoguest|guesttohost|bidirectional` : Avec ce paramètre, vous pouvez sélectionner si le presse-papier du système d'exploitation invité doit être partagé avec l'hôte ; voir chapitre [3.3 Paramètres généraux.](#mark3.3)  Cela exige que les suppléments invité soient installés dans la machine virtuelle.  
* `--monitorcount <nombre>` : Cela active le support multi-monitoeurs ; voir chapitre [3.5 Paramètres d'affichage.](#mark3.5)  
* `--usb on|off` : Cette option active ou désactive le contrôleur virtuel USB de la VM ; voir chapitre [3.10.1 Paramètres USB](#mark3.10.1) pour les détails.  
* `--usbehci on|off` : Cette option active ou désactive le contrôleur USB 2.0 virtuel de la VM ; voir chapitre [3.10.1 Paramètres USB](#mark3.10.1) pour des détails.  

[Retour à la table des matières](#Table des matières)

# 8.8.4 Paramètres de la machine distante<a id="mark8.8.4"></a>

Les paramètres suivants concernant le comportement de la machine distante sont disponibles avec VBoxManage modifyvm :  

* `--vrde on|off` : Avec l'interface graphique de VirtualBox, ceci active ou désactive le serveur VirtualBox remote desktop extension (VRDE). Remarquez que si vous utilisez VBoxHeadless (voir chapitre [7.1.2 VBoxHeadless, le serveur de bureau distant)](#mark7.1.2) VRDE est activé par défaut.  
* `--vrdeport default|<ports>` : Un port ou une plage de ports que le serveur VRDE peut sonder ; "default" ou "0" signifient le port 3389, le port RDP standard. Vous pouvez spécifier une liste de ports ou de plages de ports séparée par des virgules. Utilisez un tiret entre de numéros de ports pour spécifier une plage. Le serveur VRDE sondera un des ports disponibles dans la liste spécifiée. Une seule machine peut utiliser un port donné en même temps. Par exemple, l'option `--vrdeport 5000,5010-5012` dira au serveur de sonder un des ports suivants : 5000, 5010, 5011 ou 5012.  
* `--vrdeaddress <adresse IP >` : L'adresse IP de l'interface réseau de l'hôte que sondera le serveur VRDE. Si vous la spécifiez, le serveur n'acceptra les connexions que sur l'interface de l'hôte spécifiée.  
On peut utiliser ce paramètre pour indiquer si le serveur VRDP devrait accepter des connexions IPv4, IPv6 ou les deux :  
	*	 IPv4 seulement : `--vrdeaddress "0.0.0.0"`  
	*	 IPv6 seulement : `--vrdeaddress "::"`  
	*	 IPv6 et IPv4 (par défaut) : `--vrdeaddress ""`  
* `--vrdeauthtype null|external|guest` : Cela vous permet de choisir s'il faut une autorisation et sous quelle forme ; voir chapitre [7.1.5 Authentification RDP](#mark7.1.5) pour des détails.  
* `--vrdemulticon on|off` : Ceci active la multiconnexions au même serveur VRDE si le serveur supporte cette fonction ; voir chapitre [7.1.7 Connexions multiples au serveur VRDP.](#mark7.1.7)  
* `--vrdereusecon on|off` : Ceci spécifie le comportement du serveur VRDE quand plusieurs connexions sont désactivées. Quand on active cette option, le serveur autorisera un nouveau client à se connecter et il fermera la connexion existante. Quand cette option est désactivée (c'est le réglage par défaut), une nouvelle connexion ne sera pas acceptée si un client est déjà connecté au serveur.  
* `--vrdevideochannel on|off` : Ceci active la redirection graphique, si elle est supportée par le serveur VRDE ; voir chapitre [7.1.9 Redirection graphique VRDP.](#mark7.1.9)  
* `--vrdevideochannelquality <pourcent>` : Définit la qualité de l'image dans la redirection graphique ; voir chapitre [7.1.9 Redirection graphique VRDP.](#mark7.1.9)  

[Retour à la table des matières](#Table des matières)

# 8.8.5 Paramètres de téléportation<a id="mark8.8.5"></a>

Avec les commandes suivantes pour VBoxManage modifyvm, vous pouvez configurer une machine pour qu'elle soit une cible de téléportation. Voir chapitre [7.2 Téléportation](#mark7.2) pour une introduction détaillée.  

* `--teleporter on|off` : Avec ce paramètre, vous activez ou désactivez l'attente par une machine d'une requête de téléportation venant du réseau lorsqu'elle est démarrée. Si elle est activée, quand on démarre la machine, cela ne démarre pas la machine virtuelle comme cela est normalement le cas, mais cela attend qu'une requête de téléportation n'arrive à l'adresse listée avec les deux options suivantes.  
* `--teleporterport <port>, --teleporteraddress <adresse>` : il faut les utiliser avec teleporter et elle dit à une machine virtuelle le port et l'adresse sur lesquelles elle doit écouter les demandes de téléportation d'une autre machine virtuelle. `<port> ` peut être n'importe quel numéro de port TCP/IP libre (comme 6000) ; `<adresse>` peut être n'importe quelle adresse IP ou nom d'hôte et il spécifie un socket TCP/IP à sonder. Par défaut, c'est `"0.0.0.0"`, ce qui signifie toutes les adresses.  
* `--teleporterpassword <mot_de_passe>` : si vous donnez cet argument facultatif, la requête de téléportation ne réussira que si la machine source spécifie le même mot de passe que celui donné avec cette commande.  
* `--teleporterfichier_mot_de_passe <mot_de_passe>` : si vous donnez cet argument facultatif, la requête de téléportation ne réussira que si la machine source spécifie le même mot de passe que celui spécifié dans le fichier donné avec cette commande. Utilisez `stdin` pour lire le mot de passe à partir de l'entrée standard.  
* `--cpuid <leaf> <eax> <ebx> <ecx> <edx>` : Les utilisateurs avancés peuvent utiliser cette commande avant une opération de téléportation pour restreindre les possibilités du processeur virtuel présenté par VirtualBox au système d'exploitation invité. Il faut l'exécuter à la fois sur la machine source et cible. impliquées dans la téléportation et cela modifiera ce que l'invité verra quand il exécutera l'instruction machine CPUID. Cel pourrait aider les applications se comportant mal à cause d'un mauvais présupposé sur la présence de certaines capacités du processeur. La signification des paramètres dépend du matériel ; merci de vous reporter aux manuels des processeurs AMD ou Intel.  

[Retour à la table des matières](#Table des matières)

# 8.9 VBoxManage clonevm<a id="mark8.9"></a>

Cette commande crée une copie complète ou liée d'une machine virtuelle existante.  
La sous-commande clonevm prend au moins en argument le nom de la machine virtuelle à cloner. Vous pouvez utiliser les paramètres supplémentaires suivants pour configurer davantage la procédure de clonage de la VM :  

* `--snapshot <uuid>|<nom>` : Sélectionne un instantané spécifique auquel se reporte le processus de clonage. Par défaut, c'est à l'état courant qu'il se réfère.  
* `--mode machine|machineandchildren|all` : Sélectionne le mode de clonage. Si la machine est sélectionnée (comme par défaut), l'état actuel de la VM sans instantanés est cloné. En mode machineandchildren, l'instantané fourni par `--snapshot` et tous les instantanés fils sont clonés. Si vous sélectionnez le mode all, tous les instantanés de l'état actuel seront clonés.  
* `--options link|keepallmacs|keepnatmacs|keepdisknames` : Permet de peaufiner encore davantage l'opération de clonage. La première dit de créer un clone lié, ce qui n'est possible que pour le clonage d'une machine à partir d'un instantané. Les deux options suivantes permettent de définir la façon dont les adresses MAC de chaque carte réseau virtuel seront gérées. Elles peuvent être soit réinitialisées (comme par défaut), soit inchangées (keepallmacs), soit inchangées quand le type de réseau est NAT (keepnatmacs). Si vous ajoutez keepdisknames, toutes les nouvelles images de disque dur s'appellent comme celles d'origine, sinon elles sont renommées.  
* `--name <name>` : Sélectionne un nouveau nom pour la nouvelle machine virtuelle. Par défaut, il s'agit de "Nom d'origine Clone".  
* `--basefolder <basefolder>` : Sélectionne le dossier où devrait être sauvegardée la configuration.  
* `--uuid <uuid>` : Sélectionne l'UUID de la nouvelle VM. Cette id doit être unique dans l'instance de VirtualBox où ce clone doit être enregistré. Par défaut, un nouvel UUID est créé.  
* `--register` : Enregistre automatiquement le nouveau clone dans l'installation de VirtualBox. Si vous voulez enregistrer la nouvelle VM plus tard à la main, voir chapitre [8.6 VBoxManage registervm / unregistervm](#mark8.6) pour les instructions pour faire cela.  

[Retour à la table des matières](#Table des matières)

# 8.10 VBoxManage import<a id="mark8.10"></a>

Cette commande importe un applicatif virtuel au format OVF en copiant les images de disque virtuelles et en créant les machines virtuelles dans VirtualBox. Voir chapitre [1.14 Importer et exporter des machines virtuelles](#mark1.14) pour une présentation des applicatifs.  
La commande import prend comme argument au moins le chemin d'un fichier OVF en entrée et elle attend que les images de disque, s'il en faut, soient dans le même répertoire que le fichier OVF. Beaucoup d'autres options en ligne de commande sont supportées pour contrôler en détails ce qui est importé et pour modifier les paramètres d'importation, mais les détails dépendent du contenu du fichier OVF.  
Il est donc recommandé de lancer d'abord la sous-commande import avec l'option `--dry-run` ou `-n`. Cela affichera alors à l'écran le contenu d'un applicatif et la façon de l'importer dans VirtualBox, ainsi que les options facultatives en ligne de commandes pour influencer le comportement de l'importation.  
Par exemple, voilà l'écran qui s'afficherait pour un applicatif modèle contenant un invité Windows XP :  

`VBoxManage import WindowsXp.ovf --dry-run`  
`Interpreting WindowsXp.ovf...`  
`OK.`  
`Virtual system 0:`  
`0: Suggested OS type: "WindowsXP"`  
`(change with "--vsys 0 --ostype <type>"; use "list ostypes" to list all)`  
`1: Suggested VM name "Windows XP Professional_1"`  
`(change with "--vsys 0 --nomvm <name>")`  
`3: Number of CPUs: 1`  
`(change with "--vsys 0 --cpus <n>")`  
`4: Guest memory: 956 MB (change with "--vsys 0 --memory <MB>")`  
`5: Sound card (appliance expects "ensoniq1371", can change on import)`  
`(disable with "--vsys 0 --unit 5 --ignore")`  
`6: USB controller`  
`(disable with "--vsys 0 --unit 6 --ignore")`  
`7: Network adapter: orig bridged, config 2, extra type=bridged`  
`8: Floppy`  
`(disable with "--vsys 0 --unit 8 --ignore")`  
`9: SCSI controller, type BusLogic`  
`(change with "--vsys 0 --unit 9 --scsitype {BusLogic|LsiLogic}";  `
`disable with "--vsys 0 --unit 9 --ignore")`  
`10: IDE controller, type PIIX4`  
`(disable with "--vsys 0 --unit 10 --ignore")`  
`11: Hard disk image: source image=WindowsXp.vmdk,`  
`target path=/home/user/disks/WindowsXp.vmdk, controller=9;channel=0`  
`(change controller with "--vsys 0 --unit 11 --controller <id>";`  
`disable with "--vsys 0 --unit 11 --ignore")`  

Comme vous pouvez le voir, les éléments de configuration individuelle sont numérotés et en fonction de leur type de support, les options en ligne de commande. La sous-commande import peut être redirigée pour ignorer de nombreux éléments tels que ceux avec des options `--vsys X` `--unit Y` `--ignore`, où X est le numéro du système virtuel (zéro sauf s'il y a plusieurs descriptions de système virtuel dans l'applicatif) et Y le numéro de l'élément, tel qu'affiché à l'écran.  
Dans l'exemple ci-dessus, `Item #1` spécifie le nom de la machine cible dans VirtualBox. `Items #9` et `#10` spécifient respectivement les contrôleurs de disque. Item `#11` décrit une image de disque dur ; dans ce cas, l'option supplémentaire `--controller` indique l'élément auquel devrait être connectée l'image de disque, avec le fichier OVF d'origine par défaut.  
Vous pouvez associer plusieurs éléments pour un même système virtuel derrière une même option `--vsys`. Par exemple, pour importer une machine comme décrit dans l'OVF mais sans la carte son ni le contrôleur USB, mais avec l'image de disque connectée au contrôleur IDE au lieu du contrôleur SCSI, utilisez ceci :  

`VBoxManage import WindowsXp.ovf`  
`--vsys 0 --unit 5 --ignore --unit 6 --ignore --unit 11 --controller 10`  

[Retour à la table des matières](#Table des matières)

# 8.11 VBoxManage export<a id="mark8.11"></a>

Cette commande exporte une ou plusieurs machines virtuelles à partir de VirtualBox vers un applicatif virtuel au format OVF, ce qui inclut la copie de leurs images de disque virtuel en VMDK compressé. Voir chapitre [1.14 Importer et exporter des machines virtuelles](#mark1.14) pour une présentation des applicatifs.  
La commande export est simple à utiliser : affichez la machine (ou les machines) que vous voulez exporter dans un même fichier OVF et spécifiez le fichier OVF cible après l'option facultative `--output` ou `-o`. Remarquez que le répertoire du fichier cible OVF recevra également les images de disques exportés au format VNDK compressé (quel que soit le format d'origine) et vous devriez leur laisser assez d'espace disque.  
Derrière une simple exportation d'une machine virtuelle donnée, vous pouvez ajouter diverses informations produit dans le fichier applicatif. Utilisez `--product`, `--producturl`, `--vendor`, `--vendorurl` et `--version` pour spécifier les informations supplémentaires. Pour des raisons légales, vous pouvez ajouter un texte de licence ou le contenu d'un fichier de licence en utilisant respectivement les options `--eula` et `--eulafile`. Comme avec l'importation OVF, vous devez utiliser l'option `--vsys X` pour adresser les options précitées à la bonne machine virtuelle.  
Pour les produits de virtualisation non pleinement compatibles avec le standard OVF 1.0, vous pouvez activer un mode OVF 0.9 basique avec l'option `--legacy09`.  

[Retour à la table des matières](#Table des matières)

# 8.12 VBoxManage startvm<a id="mark8.12"></a>

Cette commande démarre une machine virtuelle qui est en état "Éteinte" ou "Sauvegardée".  
Le paramètre facultatif `--type` détermine si la machine sera démarrée dans une fenêtre ou si la sortie devrait passer par VBoxHeadless, en activant ou pas VRDE ; voir chapitre [7.1.2 VBoxHeadless, le serveur de bureau distant](#mark7.1.2)  pour plus d'informations. La liste des types peut changer et il n'est pas garanti que tous les types sont acceptés par la variante d'un produit.  
La valeur par défaut, globale ou individuelle à une VM, du type d'interface d'une VM sera utilisée si vous ne spécifiez pas explicitement le type. Si aucune n'est définie, c'est la variante GUI qui sera démarrée.  
Les valeurs suivantes sont autorisées :  

gui Démarre une VM en affichant une fenêtre graphique. C'est le cas par défaut.  

headless Démarre une VM sans fenêtre pour un affichage distant.  

sdl Démarre une VM avec une GUI minimale et limitée dans ses fonctionnalités.  

Note: Si vous rencontrez des problèmes en démarrant des machines virtuelles avec certaines interfaces et s'il n'y a pas d'informations d'erreur convaincantes, essayez de démarrer les machines virtuelles en lançant directement leur interface respective, car cela peut donner des informations supplémentaires sur l'erreur.  

[Retour à la table des matières](#Table des matières)

# 8.13 VBoxManage controlvm<a id="mark8.13"></a>

La sous-commande controlvm vous permet modifier l'état d'une machine virtuelle en fonction.  
Vous pouvez spécifier ce qui suit :  

* VBoxManage controlvm `<vm>` pause met temporairement une machine virtuelle en attente, sans vraiment changer son état. La fenêtre de la VM sera grisée pour indiquer que la VM est actuellement en pause. (Cela revient à sélectionner l'élément "Pause" dans le menu "Machine" de l'interface graphique.)  
* Utilisez VBoxManage controlvm `<vm>` resume pour inverser une commande pause précédente. (Cela revient à sélectionner l'élément "Reprendre" du menu "Machine" de l'interface graphique.)  
* VBoxManage controlvm `<vm>` reset a le même effet sur une machine virtuelle que l'appui sur le bouton "Reset" d'un vrai ordinateur : un redémarrage à froid de la machine virtuelle, ce qui redémarrera le système d'exploitation invité immédiatement. L'état de la VM n'est pas sauvegardé et des données peuvent être perdues. (Cela revient à sélectionner l'élément "Réinitialiser" du menu "Machine" de l'interface graphique.)  
* VBoxManage controlvm `<vm>` poweroff a le même effet sur une machine virtuelle que de débrancher le câble d'alimentation d'un vrai ordinateur. Là encore, l'état de la VM n'est pas sauvegardé et il se peut que des données soient perdues. (Cela revient à sélectionner l'élément "Couper" de l'interface graphique ou à appuyer sur le bouton Fermer de la fenêtre puis sélectionner "Couper la machine" dans la boîte de dialogue.)  
Après cela, l'état de la VM sera "éteint". À partir de là, vous pouvez la relancer ; voir chapitre [8.12 VBoxManage startvm.](#mark8.12)  
* VBoxManage controlvm `<vm>` savestate sauvegardera l'état actuel de la VM sur le disque et arrêtera la VM. (Cela revient à sélectionner l'élément "Fermer" du menu "Machine" de l'interface graphique ou à appuyer sur le bouton fermer de la fenêtre et sélectionner "Sauvegarder l'état de la machine" dans la boîte de dialogue.)  
Après cela, l'état de la machine sera "Sauvegardé". À partir de là, vous pouvez la relancer ; voir chapitre [8.12 VBoxManage startvm.](#mark8.12)  
* VBoxManage controlvm `<vm> teleport `--hostname <nom> --port <port> [--passwordfile<fichier> | --password <mot_de_passe>]` passe la machine en source de téléportation et engage une téléportation sur la cible donnée.  

Voir chapitre [7.2 Téléportation](#mark7.2) pour une présentation. Si vous spécifiez le mot de passe facultatif, il doit correspondre à celui donné avec la commande modifyvm pour la machine cible ; voir chapitre [8.8.5 Paramètres de téléportation](#mark8.8.5) pour des détails.  

Quelques options supplémentaires sont disponibles avec controlvm, ne modifiant pas directement l'état de la VM en fonction   :

* L'opération `setlinkstate<1-N>` connecte ou déconnecte les câbles réseaux virtuels à leurs interfaces réseaux.  
* `nic<1-N> null|nat|bridged|intnet|hostonly|generic` : Avec ceci, vous pouvez définir, pour chaque carte réseau virtuelle de la VM, le type de réseau qui devrait être disponible. Elles peuvent ne pas être connectées à l'hôte (null), utiliser network address translation (nat), le réseau bridgé (bridged) ou communiquer avec d'autres machines virtuelles en utilisant le réseau interne (intnet) ou host-only (hostonly) ou accéder à des sous-modes rarement utilisés (generic). Ces options correspondent aux modes décrits en détails au chapitre [6.2 Introduction aux modes réseaux.](#mark6.2)  
* usbattach et usbdettach rendent les périphériques USB de l'hôte, à la volée, visibles pour la machine virtuelle sans besoin de créer des filtres préalablement. Les périphériques USB peuvent être désignés par leur UUID (identifiant unique) ou leur adresse sur le système hôte.  
Vous pouvez utiliser VBoxManage list usbhost pour trouver ces informations.  
* vrde on|off vous permet d'activer ou de désactiver le serveur VRDP s'il est installé.  
* `vrdeport default|<ports>` modifie le port ou la plage de ports que peut sonder le serveur VRDP ; "default" ou "0" signifient le port 3389, celui standard pour RDP. Pour des détails, voir la description de l'option `--vrdeport` au chapitre [8.8.3 Options du port série, du son, du presse-papier et de l'USB.](#mark8.8.3)  
* setvideomodehint demande que le système invité passe dans un mode graphique particulier. Cela exige l'installation des suppléments invité et ne fonctionne pas pour tous les systèmes invités.  
* screenshotpng prend une impression écran de l'affichage invité et le sauvegarde au format PNG.  
* L'opération setcredentials est utilisé pour les identifications distantes dans les invités Windows. Pour des détails, merci de vous reporter au chapitre [9.2 Identifications automatiques dans l'invité.](#mark9.2)  
* L'opération guestmemoryballoon modifie la taille du ballon de la mémoire de l'invité, c'est-à-dire la mémoire affectée par les suppléments invité de VirtualBox au système d'exploitation invité et rendue à l'hyperviseur pour être réutilisée par d'autres machines virtuelles. Elle doit être spécifiée en mégaoctets. Pour des détails, voir chapitre [4.8.1 Faire du ballon avec la mémoire.](#mark4.8.1)  
* `cpuexecutioncap <1-100>` : Cette opération contrôle la quantité de temps processeur que peut utiliser un processeur virtuel. Une valeur de 50 implique qu'un seul processeur virtuel peut utiliser jusqu'à 50% d'un seul processeur de l'hôte.  

[Retour à la table des matières](#Table des matières)

# 8.14 VBoxManage discardstate<a id="mark8.14"></a>

Cette commande désactive l'état sauvegardé d'une machine virtuelle qui n'est pas en fonction, ce qui fera redémarrer son système d'exploitation la prochaine fois que vous démarrerez. Cela revient à débrancher le câble d'alimentation d'une machine physique et vous devrieu l'éviter si possible.  

[Retour à la table des matières](#Table des matières)

# 8.15 VBoxManage adoptstate<a id="mark8.15"></a>

Si vous avez un fichier d'çtat sauvegardé (.sav), c'est-à-dire séparé de la configuration de la VM, vous pouvez "adopter" le fichier. Cela passera la VM en état sauvegardé et quand vous la démarrerez, VirtualBox essaiera de la restaurer à partir du fichier d'état sauvegardé que vous avez indiqué. Cette commande ne devrait être utilisée que dans des configurations spéciales.  

[Retour à la table des matières](#Table des matières)

# 8.16 VBoxManage snapshot<a id="mark8.16"></a>

Cette commande est utilisée pour contrôler les instantanés en ligne de commande. Un instantané consiste en une copie complète des paramètres de la machine virtuelle, copiés à un moment où l'instantané a été pris, et éventuellement un fichier d'état sauvegardé de la machine virtuelle si l'instantané a été pris alors que la machine était en fonction. Après qu'un instantané a été pris, VirtualBox crée  un disque dur de différenciation pour chaque disque dur normal associé à la machine pour que, quand on restaure un instantané, les disques durs virtuels de la machine virtuelle puissent être rapidement réinitialisés en reabandonnant simplement les fichiers de différenciation.  
L'opération prend un instantané de l'état actuel de la machine virtuelle. Vous devez fournir un nom pour l'instantané et vous pouvez éventuellement entrer une description. Le nouvel instantané est inséré à l'arborescence des instantanés comme un fichier de l'instantané actuel et il devient le nouvel instantané actuel. Le paramètre --description permet de décrire l'instantané. Si vous spécifiez `--live`, la VM ne s'arrêtera pas pendant la création de l'instantané. L'opération delete efface un instantané (spécifié par son nom ou son UUID). Cela peut être long à se terminer car les images de différenciation associées à l'instantané pourraient devoir être synchronisées avec leurs images de différenciation filles.  
L'opération restore restaurera l'instantané donné (spécifié par son nom ou son UUID) en réinitialisant les paramètres de la machine virtuelle et l'état actuel à ceux de l'instantané. L'état actuel précédent de la machine sera perdu. Après cela, l'instantané donné devient le nouvel instantané "actuel" pour que les instantanés consécutifs s'insèrent sous l'instantané à partir duquel on a restauré.  
L'opération restorecurrent est un raccourci pour restaurer l'instantané actuel (donc l'instantané d'où provient l'état actuel). Cette sous-commande revient à utiliser la sous-commande "restore" avec le nom ou l'UUID de l'instantané actuel, sauf qu'elle évite l'étape supplémentaire de déterminer ce nom ou cet UUID.  
Avec l'opération edit, vous pouvez modifier le nom ou la description d'un instantané existant.  
Avec l'opération showvminfo, vous pouvez voir les paramètres de la machine virtuelle stockées dans un instantané existant.  

[Retour à la table des matières](#Table des matières)

# 8.17 VBoxManage closemedium<a id="mark8.17"></a>

Cette commande supprime un fichier image de disque dur, de DVD ou disquette, d'un registre de médias VirtualBox.  
Éventuellement, vous pouvez demander que l'image soit effacée. Vous aurez les retours circonstanciés selon lesquels la suppression a échoué, mais l'image ne sera pas enregistrée.  

[Retour à la table des matières](#Table des matières)

# 8.18 VBoxManage storageattach<a id="mark8.18"></a>

Cette commande attache/modifie/supprime un média de stockage connecté à un contrôleur de stockage précédemment ajouté avec la commande storagectl (voir la section précédente). Avant VirtualBox 4.0, il fallait appeler VBoxManage openmedium avant de pouvoir attacher à média à une machine virtuelle ; cet appel "enregistrait" le média avec le registre des médias global de VirtualBox. Avec VirtualBox 4.0, ce n'est plus nécessaire ; les médias sont ajoutés aux registres des médias automatiquement. L'appel "closemedium" a cependant été conservé pour permettre de supprimer explicitement un média du registre. La syntaxe est ainsi :  

`VBoxManage storageattach <uuid|nomvm>`  
`--storagectl <name>`  
`[--port <number>]`  
`[--device <number>]`  
`[--type dvddrive|hdd|fdd]`  
`[--medium none|emptydrive|`  
`<uuid>|<filename>|host:<drive>|iscsi]`  
`[--mtype normal|writethrough|immutable|shareable]`  
`[--comment <text>]`  
`[--setuuid <uuid>]`  
`[--setparentuuid <uuid>]`  
`[--passthrough on|off]  `  
`[--tempeject on|off]`  
`[--nonrotational on|off]`  
`[--discard on|off]`  
`[--bandwidthgroup name|none]`  
`[--forceunmount]`  
`[--server <name>|<ip>]`  
`[--target <target>]`  
`[--tport <port>]`  
`[--lun <lun>]`  
`[--encodedlun <lun>]`  
`[--username <username>]`  
`[--password <password>]`  
`[--initiator <initiator>]`  
`[--intnet]`  

Un certain nombre de paramètres sont requis classiquement ; ceux à la fin de la liste ne sont requis que pour les cibles iSCSI (voir ci-dessous).  
Les paramètres classiques sont :  

`uuid|nomvm` Le nom ou l'UUID de la VM. Obligatoire.  
`storagectl` Nom du contrôleur de stockage. Obligatoire. Vous pouvez obtenir la liste des contrôleurs de stockage actuellement attachés à une VM avec VBoxManage showvminfo ; voir chapitre [8.5 VBoxManage showvminfo.](#mark8.5)  
port Le numéro du port du contrôleur de stockage qui doit être modifié. Obligatoire, sauf si le contrôleur de stockage n'a qu'un seul port.  
device Le numéro du périphérique du port à modifier. Obligatoire, sauf si le contrôleur de stockage n'a qu'un périphérique par port.  
type Définit le type de lecteur auquel doit être attaché/détaché/modifié un média. On ne peut se passer de cet argument que si le type de média peut être déterminé par le média donné avec l'argument `--medium` argument ou à partir du précédents rattachements de médias medium Spécifie ce qu'il faut attacher. Les valeurs suivantes sont supportées :  

* "none" : Tout périphérique existant serait supprimé du slot donné.  
* "emptydrive" : Pour un lecteur amovible ou de DVD virtuel, cela fait se comporter le périphérique comme un lecteur amovible dans lequel on n'a inséré aucun média.  
* "additions" : Seulement pour un lecteur DVD virtuel, ceci connecte l'image des Suppléments invité de VirtualBox au slot de périphérique donné.  
* Si vous spécifiez un UUID, il doit s'agir de l'UUID d'un média de stockage déjà connu de VirtualBox (par exemple car il a été attaché à une autre machine virtuelle). Voir chapitre [8.4 VBoxManage list](#mark8.4) pour la façon de lister les médias connus. Ce média est alors attaché au slot du périphérique donné.  
* Si vous spécifiez un nom de fichier, il doit s'agir du chemin complet vers une image de disque existante (ISO, RAW, VDI, VMDK ou autre), qui est donc attaché au slot du périphérique donné.  
* `"host:c<lecteur>"` : Pour un lecteur amovible ou de DVD virtuel seulement, ceci connecte le slot du périphérique donné au lecteur amovible ou de DVD spécifié sur l'ordinateur hôte.  
* `"iscsi"` : Pour les disques durs virtuels seulement, cela permet de spécifier une cible iSCSI. Dans ce cas, vous devez donner davantage de paramètres ; voir ci-dessous.  
Certaines modifications ci-dessus, en particulier concernant les médias amovibles (disquettes ou CDs/DVDs), peuvent prendre effet pendant que la VM est en fonction. Les autres (changement de périphérique ou dans les slots des disques durs) exigent que la VM soit éteinte.  
mtype Définit la façon dont ce média se comporte vis-à-vis des instantanés et des opérations d'écriture. Voir chapitre [5.4 Modes spéciaux d'écriture d'images](#mark5.4) pour des détails.  
comment Une description que vous souhaitez stocker avec ce média (facultative ; par exemple pour une cible iSCSI, "Gros serveur de stockage de l'étage inférieur"). C'est purement descriptif et facultatif pour que le média fonctionne correctement.  
setuuid, setparentuuid Modifie l'UUID ou l'UUID parent d'un média avant de l'attacher à une VM. C'est une option pour experts. Une utilisation impropre peut rendre le média inutilisable ou donner des configurations de VM cassées si une autre VM se réfère déjà au même média. La variante la plus fréquemment utilisée est `--setuuid ""`, qui affecte un nouvel UUID (aléatoire) à une image. Cela sert à résoudre des erreurs d'UUID dupliqués si on a dupliqué une image par les outils de copie de fichiers.  
passthrough Seulement pour un lecteur DVD virtuel, vous pouvez activer le support de gravure sur DVD (actuellement expérimental ; voir chapitre [5.9 Support des CD/DVD).](#mark5.9)  
tempeject Seulement pour un lecteur DVD virtuel, vous pouvez configurer le comportement pour avoir l'éjection du média synchronisé avec l'invité. Si vous l'activez, l'éjection n'a qu'un effet temporaire. Si vous éteignez puis redémarrez la VM, le média configuré au départ sera toujours dans le lecteur.  
nonrotational Ce paramètre permet d'activer le drapeau non-rotational pour les disques durs virtuels. Certains invités (comme Windows 7 ou plus) gèrent de tels disques comme des SSDs et ne fragmentent pas de tels médias.  
bandwidthgroup Définit le groupe de bande passante à utiliser pour le périphérique donné ; voir chapitre [5.8 Limiter la bande passante des images de disque.](#mark5.8)  
forceunmount Seulement pour un lecteur DVD ou amovible virtuel, cela démonte de force le DVD/CD/disquette ou monte un nouveau DVD/CD/disquette même si celui précédent est verrouillé en lecture par l'invité. De nouveau, voir chapitre [5.9 Support des CD/DVD](#mark5.9) pour des détails.  

Quand on utilise "iscsi" avec le paramètre `--medium` pour le support iSCSI voir chapitre [5.10 Serveurs iSCSI](#mark5.10) vous pouvez ou devez utiliser des paramètres supplémentaires :  

server Le nom de l'hôte ou l'adresse IP de la cible iSCSI ; requis.  
target La chaîne du nom de la cible. Il est déterminé par la cible iSCSI et il est utilisé pour identifier la ressource de stockage ; requis.  
tport Numéro de port TCP/IP du service iSCSI sur la cible (facultatif).  
lun Numéro d'unité logique de la ressource cible (facultatif). Souvent, cette valeur vaut zéro.  
username, password Nom d'utilisateur et mot de passe (initiator secret) pour l'authentification sur la cible si nécessaire (facultatif).  

Note: Le nom d'utilisateur et le mot de passe sont stockés sans chiffrement (donc en clair) dans le fichier XML de configuration de la VM si vous ne fournissez aucun paramètre de mot de passe. Quand vous spécifiez pour la première fois un paramètre de mot de passe, le mot de passe est stocké et chiffré.  

intnet Si vous le spécifiez, connecte à la cible iSCSI via le réseau interne. Cela nécessite une configuration supplémentaire décrite au chapitre [9.9.3 Accès à des cibles iSCSI via le réseau interne.](#mark9.9.3)  

[Retour à la table des matières](#Table des matières)

# 8.19 VBoxManage storagectl<a id="mark8.19"></a>

Cette commande attache/modifie/supprime un contrôleur de stockage. Après elle, on peut attacher des médias virtuels au contrôleur avec la commande storageattach (voir la prochaine section).  
La syntaxe est comme suit :  

`VBoxManage storagectl <uuid|nomvm>`  
`--name <nom>`  
`--add <ide/sata/scsi/floppy>]`  
`[--controller <LsiLogic|LSILogicSAS|BusLogic|`  
`IntelAhci|PIIX3|PIIX4|ICH6|I82078>]`  
`[--portcount <1-30>]`  
`[--hostiocache on|off]`  
`[--bootable on|off]`  
`[--remove]`  

où les paramètres signifient :  

`uuid|nomvm` Nom ou UUID de la VM. Obligatoire.  
`nom` Nom du contrôleur de stockage. Obligatoire.  
add Définit le type de bus système auquel doit être connecté le contrôleur de stockage.  
controller Permet de choisir le type de chipset à émuler pour le contrôleur de stockage donné.  
portcount Ceci détermine le nombre de ports que le contrôleur SATA devrait supporter.  
hostiocache Configure l'utilisation du cache E/S de l'hôte pour toutes les images de disque attachées à ce contrôleur de stockage. Pour des détails, merci de voir le chapitre [5.7 Mise en cache des E/S dans l'hôte.](#mark5.7)  
bootable Sélectionne si ce contrôleur est amorçable.  
remove Supprime le contrôleur de stockage de la config de la VM.  

[Retour à la table des matières](#Table des matières)

# 8.20 VBoxManage bandwidthctl<a id="mark8.20"></a>

Cette commande crée/efface/modifie/affiche les groupes de bande passante de la machine virtuelle donnée :  

`VBoxManage bandwidthctl <uuid|nomvm>`  
`add <nom> --type disk|network --limit <megabytes per second>[k|m|g|K|M|G] |`  
`set <nom> --limit <megabytes per second>[k|m|g|K|M|G] |`  
`remove <nom> |`  
`list [--machinereadable]`  

Les sous-commandes suivantes sont disponibles :  

* add, crée un nouveau groupe de bande passante d'un type doné.  
* set, modifie la limite d'un groupe de bande passante existante.  
* remove, détruit un groupe de bande passante.  
* list, affiche tous les groupes de bande passante définis pour la VM donnée.  

Les paramètres signifient :  

`uuid|nomvm` Le nom ou l'UUID de la VM. Obligatoire.  
nom Nom du groupe de bande passante. Obligatoire.  
type Type de groupe de bande passante. Obligatoire. Deux types sont supportés : disk et network. Voir chapitre [5.8 Limiter la bande passante des images de disque](#mark5.8) ou chapitre [6.10 Limiter la bande passante des E/S réseaux](#mark6.10) pour une description d'un type particulier.  
limit Spécifie la limite du groupe donné. On peut le modifier pendant que la VM est en fonction.  
L'unité par défaut est en mégaoctet par seconde. Vous pouvez modifier l'unité en spécifiant un des suffixes suivants : k pour kilobits/s, m pour mégabits/s, g pour gigabits/s, K pour kilo octets/s, M pour méga octets/s, G pour giga octets/s.  

Note: Les limites de bande passante du réseau ne s'appliquent qu'au trafic émis par les machines virtuelles. Le trafic reçu par les VMs est illimité.  

 Note: Pour supprimer un groupe de bande passante, il ne doit être référencé sur aucun disque ou adaptateur d'une VM en fonction.  

[Retour à la table des matières](#Table des matières)

# 8.21 VBoxManage showhdinfo<a id="mark8.21"></a>

Cette commande affiche des informations sur une image de disque virtuelle, en particulier sa taille sur le disque, son type et les machines virtuelles qui l'utilisent.  

Note: Pour être compatible avec des versions plus anciennes de VirtualBox la commande "showvdiinfo" est également supportée et associée en interne à la commande "showhdinfo".  

L'image de disque doit être spécifiée soit par son UUID (si le média est enregistré), soit par le nom du fichier. Les images enregistrées peuvent être listées par VBoxManage list hdds (voir chapitre [8.4 VBoxManage list](#mark8.4) pour plus d'informations). Un nom de fichier doit être spécifié en tant que chemin valide, soit absolu soit relatif en partant du répertoire actuel.  

[Retour à la table des matières](#Table des matières)

# 8.22 VBoxManage createhd<a id="mark8.22"></a>

Cette commande crée une nouvelle de disque dur virtuel. La syntaxe est comme suit :  

`VBoxManage createhd --filename <nomfichier>`  
`--size <mégaoctets>`  
`[--format VDI|VMDK|VHD] (par défaut : VDI)`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  

où les paramètres signifient :  

nomfichier Permet de choisir un nom de fichier. Obligatoire.  

mégaoctets Permet de définir la capacité de l'image, en MO. Obligatoire.  

format Permet de choisir un format de fichier pour le fichier de sortie, différent du format du fichier d'entrée.  

variant Permet de choisir une variante du format de fichier pour le fichier de sortie. C'est une liste de drapeaux séparée par des virgules. Toutes les combinaisons ne sont pas supportées , spécifier des drapeaux incohérents donne un message d'erreur.  

Note: Pour être compatible avec d'anciennes versions de VirtualBox, la commande "createvdi" est également supportée et associée en interne avec la commande "createhd".  

[Retour à la table des matières](#Table des matières)

# 8.23 VBoxManage modifyhd<a id="mark8.23"></a>

Avec la commande modifyhd, vous pouvez modifier les caractéristiques d'une image de disque après l'avoir créé :  

`VBoxManage modifyhd <uuid>|<nomfichier>`  
`[--type normal|writethrough|immutable|shareable|`  
`readonly|multiattach]`  
`[--autoreset on|off]`  
`[--compact]`  
`[--resize <megabytes>|--resizebyte <octets>]`  

Note: Malgré le "hd" du nom de la sous-commande, la commande fonctionne avec toutes les images de disque et pas seulement les disques durs. Pour être compatible avec les anciennes versions de VirtualBox, la commande "modifyvdi" est également supportée et a été associée en interne à la commande "modifyhd".  

L'image de disque doit être spécifiée soit par son UUID (si le média est enregistré), soit par le nom du fichier. Les images enregistrées peuvent être listées par VBoxManage list hdds (voir chapitre [8.4 VBoxManage list](#mark8.4) pour plus d'informations). Un nom de fichier doit être spécifié en tant que chemin valide, soit absolu soit relatif en partant du répertoire actuel.  
Les options suivantes sont disponibles :  

* Avec l'argument `--type`, vous pouvez modifier le type d'une image existante entre le mode normal, immuable, write-through et autres modes ; voir chapitre [5.4 Modes spéciaux d'écriture d'images](#mark5.4) pour des détails.  
* Pour les disques durs immuables seulement (de différenciation), l'option `--autoreset on|off` détermine si le disque est automatiquement réinitialisé à chaque démarrage de la VM (de nouveau, voir chapitre [5.4 Modes spéciaux d'écriture d'images).](#mark5.4) Par défaut, c'est actif.  
* L'option `--compact`, peut être utilisée pour compresser des images de disque (à savoir supprimer des blocs qui ne contiennent que des zéros). Cela réallègera une image à taille dynamique ; cela réduira la taille physique de l'image sans changer la taille logique du disque virtuel. La compression fonctionne aussi bien pour les images de base que celles de différenciation créées dans un instantané.  
Pour que l'opération soit efficace, il faut d'abord libérer de l'espace dans le système invité en y mettant des zéros via le logiciel adapté. Pour les invités Windows, vous pouvez utiliser l'outil sdelete de Microsoft. Exécutez sdelete -z dans l'invité pour mettre des zéros dans l'espace libre avant de compresser l'image de disque virtuel. Pour Linux, utilisez l'outil zerofree qui supporte les systèmes de fichiers s ext2/ext3. Pour les invités Mac OS X, utilisez la fonction Supprimer l'espace libre de l'outil de disque intégré. Utilisez-y Zero Out Data.  
Remarquez que la compression n'est actuellement disponible que pour les images VDI. Vous pouvez obtenir la même chose en mettant des zéros sur les blocs libres et clonant le disque vers un autre format dynamique. Vous pouvez utiliser ce contournement jusqu'à ce que la compression soit supportée pour les autres formats de disque que VDI.  
* L'option `--resize x` (où x est le nouvel espace total désiré en mégaoctets) vous permet de modifier la capacité d'une image existante ; ceci ajuste la taille logique d'un disque virtuel sans beaucoup changer la taille physique.  
Le redimensionnement d'images a été ajouté à VirtualBox 4.0.  
Cela ne fonctionne actuellement que pour les formats VDI et VHD et pour les variantes, à taille dynamique, et vous ne pouvez l'utiliser que pour augmenter (ou réviser) la capacité. Par exemple, si vous avez créé au départ un disque de 10G à présent plein, vous pouvez utiliser la commande `--resize 15360` pour passer la capacité à 15G (15,360Mo) sans devoir créer une nouvelle image et y copier toutes les données à partir d'une machine virtuelle. Cependant, remarquez que cela ne change que la capacité du lecteur ; vous devrez ensuite, en général, utiliser un outil de gestion des partitions dans l'invité pour ajuster la partition principale et remplir le lecteur.  
L'option `--resizebyte x` fait presque la même chose mait x est exprimé en octets au lieu de mégaoctets.  

[Retour à la table des matières](#Table des matières)

# 8.24 VBoxManage clonehd<a id="mark8.24"></a>

Cette commande duplique une image de disque dur virtuel enregistrée vers un nouveau fichier image ayant un nouvel identifiant unique (UUID). La nouvelle image peut être transférée vers un autre système hôte ou réimportée dans VirtualBox en utilisant le gestionnaire de médias virtuels ; voir chapitre [5.3 Le gestionnaire de médias virtuels](#mark5.3)  et le chapitre [5.6 Cloner des images de disque.](#mark5.6) La syntaxe est comme suit :  

`VBoxManage clonehd <uuid>|<nomfichier> <outputfile>`  
`[--format VDI|VMDK|VHD|RAW|<other>]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--existing]`  

L'image de disque à cloner et celle cible doivent être spécifiées soit par leur UUID (si le média est enregistré), soit par leur nom du fichier. Les images enregistrées peuvent être listées par VBoxManage list hdds (voir chapitre [8.4 VBoxManage list](#mark8.4) pour plus d'informations). Un nom de fichier doit être spécifié en tant que chemin valide, soit absolu soit relatif en partant du répertoire actuel.  
Les options suivantes sont disponibles :  

`--format` Permet de choisir un format de fichier pour le fichier de sortie, autre que celui du fichier d'entrée.  

`--variant` Permet de choisir une variante de format de fichier pour le fichier de sortie. C'est une liste de drapeaux séparée par des virgules. Toutes les combinaisons ne sont pas supportées, spécifier des drapeaux incohérents donne un message d'erreur.  

`--existing` Effectue le clonage sur un média de destination existant. Seule la partie du média source convenant au média de destination est copiée. Cela signifie que si le média de destination est plus petit que la source, seule une partie en est copiée, et si le média de destination est plus gros que la source, le reste de l'espace du média de destination reste inchangé.  

Note: Pour être compatible avec les anciennes versions de VirtualBox, la commande "clonevdi" est également supportée et elle a été associée en interne à la commande "clonehd".  

[Retour à la table des matières](#Table des matières)

# 8.25 VBoxManage convertfromraw<a id="mark8.25"></a>

Cette commande convertit une image de disque brute en fichier VirtualBox Disk Image (VDI). La syntaxe est la suivante :  

`VBoxManage convertfromraw <filename> <outputfile>`  
`[--format VDI|VMDK|VHD]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--uuid <uuid>]`  
`VBoxManage convertfromraw stdin <fichiersortie> <octets>`  
`[--format VDI|VMDK|VHD]`  
`[--variant Standard,Fixed,Split2G,Stream,ESX]`  
`[--uuid <uuid>]`  

où les paramètres signifient :  

`--bytes` La taille du fichier image, en octets, fournie en entrée.  

`--format` Sélectionnez le format de l'image de disque à créer. Par défaut, c'est VDI.  

`--variant` Permet de choisir une variante de format de fichier pour le fichier en sortie. C'est une liste de drapeaux séparée par des virgules. Toutes les combinaisons ne sont pas supportées, spécifier des drapeaux incohérents donne un message d'erreur.  

`--uuid` Permet de spécifier l'UUID ou le fichier de sortie.  

La deuxième forme oblige VBoxManage à lire le contenu de l'image de disque à partir de l'entrée standard (utile pour utiliser cette commande en ligne).  

Note: Pour être compatible avec d'anciennes versions de VirtualBox, la commande "convertdd" est aussi supportée et elle est associée en interne à la commande "convertfromraw".  

[Retour à la table des matières](#Table des matières)

# 8.26 VBoxManage getextradata/setextradata<a id="mark8.26"></a>

Ces commandes vous permet d'attacher et de récupérer des chaînes de données dans une machine virtuelle ou à une configuration de VirtualBox (en spécifiant global au lieu d'un nom de machine virtuelle). Vous pouvez spécifier une clé (comme chaîne de texte) pour associer les données que vous pourrez récupérer plus tard. Par exemple :  

`VBoxManage setextradata Fedora5 installdate 2006.01.01`  
`VBoxManage setextradata SUSE10 installdate 2006.02.02`  

associerait la chaîne "2006.01.01" à la clé installdate pour la the machine virtuelle Fedora5, et "2006.02.02" pour la machine SUSE10. Vous pourriez récupérer l'information comme suit :  

`VBoxManage getextradata Fedora5 installdate`  

qui renverrait  

`VirtualBox Command Line Management Interface Version 4.3.13`   
`(C) 2005-2014 Oracle Corporation`  
`All rights reserved.`  

`Value: 2006.01.01`  

Pour supprimer une clé, la commande  setextradata doit être exécutée sans spécifier des données (seule la clé), par exemple:  

`VBoxManage setextradata Fedora5 installdate`  

[Retour à la table des matières](#Table des matières)

# 8.27 VBoxManage setproperty<a id="mark8.27"></a>

Cette commande est utilisée pour modifier des paramètres globaux qui modifient toute l'installation de VirtualBox. Certains d'entre eux correspondent aux paramètres de la boîte de dialogue "Paramètres globaux" de l'interface graphique. Les propriétés suivantes sont disponibles :  

machinefolder Ceci spécifie le dossier par défaut dans lequel sont stockées les définitions de la machine virtuelle ; voir chapitre [10.1 Où VirtualBox stocke ses fichiers](#mark10.1) pour les détails.  

hwvirtexclusive Ceci spécifie si VirtualBox utilisera en exclusivité les extensions de virtualisation matérielle (Intel VT-x ou AMD-V) du processeur du système hôte ; voir chapitre [10.3 Virtualisation matérielle vs. logicielle.](#mark10.3) Si vous souhaitez partager ces extensions avec d'autres hyperviseurs en fonction en même temps, vous devez désactiver ce paramètre. Cela a des implications négatives en termes de performance.  

vrdeauthlibrary Ceci indique la bibliothèque à utiliser quand on a sélectionné l'authentification "externe" pour une machine virtuelle en particulier ; voir chapitre [7.1.5 Authentification RDP](#mark7.1.5) pour des détails.  

websrvauthlibrary Ceci spécifie la bibliothèque utilisée par le service web pour authentifier les utilisateurs. Pour des détails sur le service web de VirtualBox, merci de vous reporter au manuel de référence SDK distinct de VirtualBox (voir chapitre [11 Interfaces de programmation de VirtualBox).](#mark11)  

vrdeextpack Ceci spécifie la bibliothèque qui implémente l'extension Bureau distant de VirtualBox.  

loghistorycount Ceci sélectionne le nombre de journaux de VMs (anciens) conservés.  

autostartdbpath Ceci sélectionne le chemin vers la base de données autostart. Voir chapitre [9.23 Démarrer des machines virtuelles lors de l'amorçage du système.](#mark9.23)  

defaultfrontend Ceci sélectionne l'interface globale des VMs. Voir chapitre [8.12 VBoxManage startvm.](#mark8.12)  

[Retour à la table des matières](#Table des matières)

# 8.28 VBoxManage usbfilter add/modify/remove<a id="mark8.28"></a>

Les commandes usbfilter sont utilisées pour travailler avec des filtres USB dans des machines virtuelles ou avec des filtres globaux qui concernent tout le paramétrage de VirtualBox. Les filtres globaux sont appliqués avant les filtres spécifiques aux machines et ils peuvent être utilisés pour empêcher les périphériques d'être capturés par une machine virtuelle. Les filtres globaux s'appliquent toujours dans un ordre particulier, et seul le premier filtre convenant à un périphérique est appliqué. Par exemple, si le premier filtre global dit de garder (rendre disponible) une carte mémoire Kingston particulière et le deuxième d'ignorer tous les périphériques Kingston, cette carte mémoire sera disponible pour toutes les machines ayant un filtre adéquat mais pas les autres périphériques Kingston.  
Lors de la création d'un filtre USB en utilisant usbfilter add, vous devez fournir trois ou quatre paramètres obligatoires. L'index spécifie la position du filtre dans la liste. S'il y a déjà un filtre à cette place, lui-même et les suivants seront déplacés. Sinon, le nouveau filtre sera ajouté à la fin de la liste. Le paramètre target sélectionne la machine virtuelle à laquelle devrait être attaché le filtre, sinon utilisez "global" pour l'appliquer à toutes les machines virtuelles.  
name est le nom du nouveau filtre et des filtres globaux, action autorise les machines à accéder aux périphériques correspondant à la description du filtre ("hold") ou ne leur donne pas accès ("ignore"). En outre, vous devriez spécifier des paramètres de filtrage. Vous pouvez trouver les paramètres des périphériques attachés à votre système en utilisant VBoxManage list usbhost.  
Enfin, vous pouvez spécifier si le filtre devrait être actif, et pour les filtres globaux, s'ils concernent les périphériques locaux, à distance (par connexion RDP) ou autrement.  
Quand vous modifiez un filtre USB en utilisant usbfilter modify, vous devez spécifier le filtre par index (voir la sortie de VBoxManage list usbfilters pour voir les indexes des filtres globaux et VBoxManage showvminfo pour voir les indexes des machines individuelles), et par cible, laquelle est soit une machine virtuelle, soit "global". Les propriétés modifiables sont les mêmes que pour usbfilter add. Pour supprimer un filtre, utilisez usbfilter remove et spécifiez l'index et la cible.  

[Retour à la table des matières](#Table des matières)

# 8.29 VBoxManage sharedfolder add/remove<a id="mark8.29"></a>

Cette commande vous permet de partager des dossiers de l'ordinateur hôte avec les systèmes d'exploitation invités. Pour cela, il faut que les systèmes invités aient une version installée des Suppléments invité qui supporte cette fonctionnalité.  

Les dossiers partagés sont décrits en détails au chapitre [4.3 Dossiers partagés.](#mark4.3)  

[Retour à la table des matières](#Table des matières)

# 8.30 VBoxManage guestproperty<a id="mark8.30"></a>

Les commandes "guestproperty" vous permettent de voir ou de définir les propriétés d'une machine virtuelle en fonction. Merci de voir le chapitre [4.6 Propriétés invité](#mark4.6) pour une présentation. Comme il y est expliqué, les propriétés de l'invité sont des pairs de chaînes clé/valeur arbitraires qu'on peut changer et lire depuis l'hôte ou l'invité, donc on peut les utiliser comme des canaux de communication à faible volume pour des chaînes du moment qu'un invité est en fonction et a installé les suppléments invité. De plus, un certain nombre de valeurs dont les clés commencent par `"/VirtualBox/"` sont automatiquement définies et maintenues par les suppléments invité.  
Les sous-commandes sont disponibles (où `<vm>`, dans chaque cas, peut être soit un nom soit un UUID d'une VM, comme pour les autres commandes de VBoxManage) :  

* `enumerate <vm> [--patterns <pattern>]` : Ceci liste toutes les propriétés invité disponibles pour une VM donnée avec leur valeur. Cette liste sera très limitée si le processus service de l'invité ne peut pas être contacté, notamment car la VM n'est pa en fonction ou les suppléments invité ne sont pas installés.  
Si vous spécifiez `--patterns <échantillon>`, il agit comme un filtre pour ne lister que les propriétés correspondant à l'échantillon donné. L'échantillon peut contenir les caractères jokers suivants :  
	*	 `* (astérisque)` : représente n'importe quel nombre de caractères ; par exemple, `"/VirtualBox*"` correspondrait à toutes les propriétés commençant par `"/VirtualBox"`.  
	*	 `? (point d'interrogation) `: représente un seul caractère de votre choix ; par exemple, `"fo? "` correspondrait à `"foo" `et à `"for"`.  
	*	 `| (symbole pipe)` : peut être utilisé pour spécifier plusieurs échantillons alternatifs ; par exemple, `"s*|t*"` correspondrait à tout ce qui commence par un "s" ou un "t".  
* `get <vm>` : Ceci ne récupère la valeur que d'une propriété. Si la propriété est introuvable (par exemple car l'invité n'est pas en fonction), ceci affichera `No value set!`  
* `set <vm> <propriété> [<valeur> [--flags <drapeaux>]]` : Ceci vous permet de définir une propriété invité en spécifiant la clé et la valeur. Si vous ne mettez pas `<valeur>`, la propriété est effacée. Avec `--flags`, vous pouvez éventuellement spécifier un comportement supplémentaire (vous pouvez en combiner plusieurs en les séparant par des virgules) :  
	*	 TRANSIENT : la valeur ne sera pas stockée avec les données de la VM quand la VM existe;  
	*	 TRANSRESET : la valeur sera effacée dès que la VM redémarrera et/ou existera;  
	*	 RDONLYGUEST : la valeur ne peut être modifiée que par l'hôte, l'invité ne peut que la lire;  
	*	 RDONLYHOST : inversement, cette valeur ne peut être modifiée que par l'invité, l'hôte ne peut que la lire;  
	*	 READONLY : la combinaison des deux, la valeur ne peut pas être modifiée.  
* `wait <vm> <échantillon> --timeout <timeout>` : Ceci attend une valeur particulière décrite par "échantillon" à modifier ou effacer ou à créer. Les règles de l'échantillon sont les mêmes qu'avec la commande "enumerate" ci-dessus.  
* `delete <vm> <propriété>` : Efface une propriété invité définie précédemment.  

[Retour à la table des matières](#Table des matières)

# 8.31 VBoxManage guestcontrol<a id="mark8.31"></a>

Les commandes "guestcontrol" vous permettent de contrôler certaines choses de l'invité à partir de l'hôte. Merci de voir le chapitre [4.7 Contrôle de l'invité](#mark4.7) pour une présentation.  
En général, la syntaxe est la suivante :  

`VBoxManage guestcontrol <uuid|nomvm> <commande>`  

Les sous-commandes suivantes sont disponibles (où `<uuid|nomvm>`, dans tous les cas, peut être le nom ou l'UUID d'une VM comme avec les autres commandes de VBoxManage) :  

* execute, qui permet d'exécuter un programme/script (processus) déjà installé et exécutable sur l'invité. Cette commande ne fonctionne que pendant qu'une VM est active et en fonction et sa syntaxe est la suivante :  
`VBoxManage guestcontrol <uuid|nomvm> exec[ute]`  
`--image <chemin du programme> --username <nom>`  
`[--passwordfile <fichier> | --password <mot de passe>]`  
`[--environment "<NOM>=<VALEUR> [<NOM>=<VALEUR>]"]`  
`[--verbose] [--timeout <msec>]`  
`[--wait-exit] [--wait-stdout] [--wait-stderr]`  
`[--dos2unix] [--unix2dos]`  
`-- [[<argument1>] ... [<argumentN>]]`  

où les paramètres signifient :  
`uuid|nomvm` Le nom ou l'UUID de la VM. Obligatoire.  
`--image "<chemin du programme>"` Chemin absolu et nom du processus à exécuter dans l'invité, comme `C:\Windows\System32\calc.exe`  
`--username <nom>` Nom de l'utilisateur sous lequel devrait se lancer le processus. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>`  
`--password <motdepasse>` Mot de passe du compte utilisateur spécifié, à lire dans le fichier donné. Si vous n'en donnez pas, un mot de passe vierge est supposé.  

	*	 `password <mot de passe>` Mot de passe du compte utilisateur spécifié avec --username.  
Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--dos2unix` Convertit les fins de lignes de la sortie des invités DOS/Windows en fins compatibles `UNIX (CR + LF -> LF).` Pas encore implémenté.  
`--environment "<NOM>=<VALEUR>"` Une ou plusieurs variables d'environnement à définir ou dérégler. Par défaut, le nouveau processus de l'invité sera créé avec l'environnement standard de l'OS invité. Cette option permet de modifier cet environnement. Pour définir/modifier une variable, une paire NOM=VALEUR doit être spécifiée ; pour dérégler une certaine variable, le nom sans valeur doit être défini, par exemple `NOM=`.  
Les arguments contenant des espaces doivent être entourés de guillemets. Vous pouvez spécifier plus d'un `--environment` en même temps pour maintenir vierge la ligne de commande.  
`--timeout <msec>` Valeur (en millisecondes) qui spécifie la durée pendant laquelle le processus démarré est autorisé à fonctionner et combien de temps VBoxManage attend une sortie de ce processus. Si vous ne spécifiez pas de timeout, VBoxManage attendra jusqu'à ce que le processus démarré se termine ou ce qu'une erreur ne survienne.  
`--unix2dos` Convertit les fins de lignes de la sortie des invités DOS/Windows en fins compatibles UNIX `(CR + LF -> LF)`. Pas encore implémenté.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  
`--wait-exit` Attend la fin d'un processus et affiche son code de sortie avec la raison/les drapeaux de sa fin.  
`--wait-stdout` Attend la fin d'un processus et affiche son code de sortie avec la raison/les drapeaux de sa fin. En attendant, VBoxManage récupère la sortie du processus sur stdout.  
`--wait-stderr` Attend la fin d'un processus et affiche son code de sortie avec la raison/les drapeaux de sa fin. En attendant, VBoxManage récupère la sortie du processus sur stderr.  
`[-- [<argument1s>] ... [<argumentNs>]]` Un ou plusieurs arguments à passer au processus à exécuter.  
Les arguments contenant des espaces doivent être entourés de guillemets.  

Note: Sur Windows, il existe certaines limites pour les applications graphiques ; merci de voir le chapitre [14 Limites connues](#mark14) pour plus d'informations.  

Exemples :  
`VBoxManage --nologo guestcontrol "Ma VM" execute --image "/bin/ls"`  
`--username foo --passwordfile bar.txt --wait-exit --wait-stdout -- -l /usr`  
`VBoxManage --nologo guestcontrol "My VM" execute --image "c:\windows\system32\ipconfig.exe"`  
`--username foo --passwordfile bar.txt --wait-exit --wait-stdout`  
Remarquez que les deux barres obliques inversées du deuxième exemple ne sont requis que pour les hôtes Unix.  

Note: Pour certaines commandes, il faut spécifier le nom d'utilisateur d'un compte utilisateur existant sur l'invité ; les exécutions anonymes ne sont pas supportées pour des raisons de sécurité. Néanmoins, le mot de passe d'un compte utilisateur est facultatif et dépend de la politique et des règles de l'invité. Si vous ne spécifiez aucun mot de passe pour un nom d'utilisateur donné, un mot de passe vierge sera utilisé. Sur certains OS comme Windows, il se peut qu'il faille ajuster la politique de sécurité pour autoriser le paramétrage d'un compte utilisateur avec un mot de passe vierge. En outre, les règles du domaine global pourraient s'appliquer et, donc, on ne peut pas les modifier.  

À partir de VirtualBox 4.1.2 l'exécution d'un processus invité par défaut se limite à 5 processus invités en même temps. Si un nouveau processus invité est lancé et dépasserait cette limite, le plus ancien dans l'invité qui ne s'exécute pas sera désactivé afin de pouvoir lancer ce nouveau processus. En outre, la récupération de la sortie de cet ancien processus invité ne sera alors plus possible. Si les 5 processus invités sont toujours actifs et en fonction, le démarrage d'un nouveau processus enverra un message d'erreur circonstancié.  
Pour augmenter ou diminuer la limite d'exécution des processus invité, il faut modifier soit la propriété `/VirtualBox/GuestAdd/VBoxService/--control-procs-max-kept`, soit la ligne de commande VBoxService en spécifiant `--control-procs-max-kept`. Il faut ensuite redémarrer l'OS invité. Pour gérer un nombre illimité de processus invités, il faut définir une valeur de 0 (non recommandé).  

* copyto, qui permet de copier des fichiers de l'hôte vers l'invité (seulement si les suppléments invité 4.0 et supérieur sont installés).  
`VBoxManage guestcontrol <uuid|nomvm> copyto|cp`  
`<source invité> <hôte dest> --username <nom>`  
`[--passwordfile <fichier> | --password <mot de passe>]`  
`[--dryrun] [--follow] [--recursive] [--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
source sur l'hôte Chemin absolu du/des fichier(s) source(s) de l'hôte sur l'hôte pour copier vers l'invité, comme `C:\Windows\System32\calc.exe`. Il peut s'agir d'une expression joker, comme `C:\Windows\System32\*.dll`  
destination sur l'invité Chemin de destination absolu sur l'invité, comme `C:\Temp`  
`--username <nom>` Nom d'utilisateur sous lequel devrait fonctionner le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié, à lire dans le fichier donné. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--password <mot depasse>` Mot de passe du compte utilisateur spécifié avec `--username`.  
Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--dryrun` Dit à VBoxManage de ne faire qu'une exécution dry au lieu de copier vraiment les fichiers dans l'invité.  
`--follow` Active le suivi des liens symboliques sur la source de l'hôte.  
`--recursive` Copie récursivement les fichiers/répertoires de la source spécifiée.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  
`--flags <drapeaux>` Drapeaux supplémentaires à définir. Ce n'est pas utilisé pour le moment.  

* copyfrom, qui permet de copier des fichiers de l'invité vers l'hôte (seulement si les suppléments invité 4.0 et supérieur sont installés). Il prend les mêmes paramètres que copyto ci-dessus.  
* createdirectory, qui permet de copier des fichiers de l'invité vers l'hôte (seulement si les suppléments invité 4.0 et supérieur sont installés). Il prend les mêmes paramètres que copyto ci-dessus.  
`VBoxManage guestcontrol <uuid|nomvm> createdir[ectory]|mkdir|md`  
`<répertoire invité>... --username <nom>`  
`[--passwordfile <fichier> | --password <mot de passe>]`  
`[--parents] [--mode <mode>] [--verbose]`  

où les paramètres signifient :  
`uuid|nomvm L'UUID` ou le nom de la VM. Obligatoire.  
répertoire à créer sur l'invité Chemin absolu du/des répertoire(s) à créer sur l'invité, comme `D:\Foo\Bar`. Les répertoires Parents doivent exister (comme dans cet exemple `D:\Foo)` si vous ne mettez pas `--parents`. L'utilisateur spécifié doit avoir les droits appropriés pour créer le répertoire spécifié.  
`--username <nom>` Nom de l'utilisateur sous lequel devrait fonctionner le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié, à lire dans le fichier donné. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--password <mot de passe>` Mot de passe du compte utilisateur spécifié avec `--username`. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--parents` Crée aussi les répertoires parent non encore créés pour le répertoire spécifié, par exemple si le répertoire `D:\Foo de D:\Foo\Bar` n'existe pas encore, il sera créé.  
Si on ne spécifie pas `--parent`, l'action échouerait.  
`--mode <mode>` Définit les droits du répertoire spécifié. Seules des valeurs octales (comme 0755) sont supportées pour l'heure.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  

* removedirectory, qui permet d'effacer des répertoires dans l'invité (seulement ceux où sont installés les suppléments invité 4.3.2 et supérieur).  
`VBoxManage guestcontrol <uuid|nomvm> removedir[ectory]|rmdir`  
`<répertoire invité>... --username <nom>`  
`[--passwordfile <fichier> | --password <mot_de_passe>]`  
`[--recursive|-R|-r] [--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
répertoire à supprimer dans l'invité Chemin absolu du/des répertoire(s) à supprimer sur l'invité, par exemple `D:\Foo\Bar`. L'utilisateur spécifié doit avoir les bons droits pour effacer le(s) répertoire(s) de l'invité spécifié(s).  
`--username <nom>` Nom d'utilisateur sous lequel devrait fonctionner le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié qui lit le fichier donné. Si vous n'en mettez pas, on supposera un mot de passe vide.  
`--password <mot_de_passe>` Mot de passe du compte utilisateur spécifié par `--username`.  
Si vous n'en donnez pas, on supposera un mot de passe vide.  
`--recursive` Supprime des répertoires et, récursivement, leur contenu.  
`--verbose` Dit à VBoxManage d'être plus bavard.  

* removefile, qui permet d'effacer des fichiers sur l'invité (seulement là où sont installés les suppléments invité 4.3.2 et supérieur).  
`VBoxManage guestcontrol <uuid|nomvm> removefile|rm`  
`<fichier_d_invité>... --username <nom>`  
`[--passwordfile <fichier> | --password <mot_de_passe>]`  
`[--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
fichier à supprimer dans l'invité Chemin absolu du/des fichier(s) à supprimer sur l'invité, comme `D:\Foo\Bar\text.txt`. L'utilisateur spécifié doit avoir les bons droits pour effacer les fichiers spécifiés sur l'invité.  
`--username <nom>` Nom d'utilisateur sous lequel devrait fonctionner le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié qui lit le fichier donné. Si vous n'en mettez pas, on supposera un mot de passe vide.  
`--password <mot_de_passe>` Mot de passe du compte utilisateur spécifié avec `--username`. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--verbose` Dit à VBoxManage d'être plus bavard.  

* `ren[ame]|mv`, qui permet de renommer des fichiers (ou des répertoires) dans l'invité (seulement là où sont installés les suppléments invité 4.3.2 et supérieur).  
`VBoxManage guestcontrol <uuid|nomvm> ren[ame]|mv`  
`<source>... <dest> --username <nom>`  
`[--passwordfile <fichier> | --password <mot_de_passe>]`  
`[--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM.  
source Chemin absolu d'une ou plusieurs sources à déplacer quelque part. Si vous spécifiez plus d'une source, la destination doit être un répertoire existant sur la VM.  
L'utilisateur spécifié doit avoir les bons droits d'accès aux fichiers et aux répertoires sources et de destination.  
dest Chemin absolu de la destination où déplacer le/les source(s). Il peut s'agir d'un répertoire ou d'un fichier, selon que vous spécifiez une ou plusieurs sources.  
L'utilisateur spécifié doit avoir les bons droits d'accès au fichier et au répertoire de: ` --username <nom>` Nom de l'utilisateur sous lequel fonctionne le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié d'où lire l'invité donné. Si vous n'en donnez pas, on suppose un mot de passe vide.  
`--password <mot_de_passe>` Mot de passe du compte utilisateur spécifié avec `--username`. Si vous n'en donnez pas, on suppose un mot de passe vide.  
`--verbose` Dit à VBoxManage d'être plus bavard.  

* createtemporary, qui permet de copier des fichiers de l'hôte sur l'invité (seulement si les suppléments invités 4.2 ou supérieur sont installés).  
`VBoxManage guestcontrol <uuid|nomvm> createtemp[orary]|mktemp`  
`<modèle> --username <nom>`  
`[--passwordfile <fichier> | --password <mot_de_passe>]`  
`[--directory] [--secure] [--tmpdir <répertoire>]`  
`[--domain <domaine>] [--mode <mode>] [--verbose]`  

où les paramètres signifient :  
`uuid|nomvm L'UUID ou le nom de la VM. Obligatoire.  
modèle Un nom de fichier sans chemin et avec au moins trois caractères 'X' consécutifs ou se terminant par 'X'.  
`--username <nom>` Nom de l'utilisateur sous lequel devrait fonctionner le processus de copie. Cet utilisateur doit exister sur l'OS invité.  
`--passwordfile <fichier>` Mot de passe du compte utilisateur spécifié, à lire dans le fichier donné. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--password <mot de passe>` Mot de passe du compte utilisateur spécifié avec `--username`. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--directory` Crée un répertoire temporaire au lieu d'un fichier.  
`--secure` Création sécurisée. Le mode du fichier est 0755. Et l'opération échouera si elle ne peut s'effectuer en sécurité.  
`--tmpdir <répertoire>` Répertoire où le fichier / répertoire sera créé. Si vous n'en indiquez pas, un répertoire temporaire spécifique 'à la plateforme est utilisé.  
`--mode <mode>` Définit les droits du répertoire spécifié. Seules des valeurs octales (comme 0755) sont supportées pour l'heure  .
`--verbose` Dit à VBoxManage d'être plus verbeux.  

* list, qui présente plusieurs informations de contrôle de l'invité telles que les sessions et les fichiers ouverts dans l'invité et les processus de l'invité.  
`VBoxManage guestcontrol <uuid|nomvm> list`  
`<all|sessions|processes|files> [--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
`all|sessions|processes|files` présenter les sessions dans l'invité, les processus de l'invité, les fichiers dans l'invité ou toutes les informations disponibles.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  

* process kill, qui termine des processus de l'invité en particulier pour une session de l'invité, à partir soit l'ID de la session, soit du nom de la session.  
`VBoxManage guestcontrol <uuid|nomvm> process kill`  
`--session-id <ID>`  
`| --session-name <nom ou modèle>`  
`[--verbose]`  
`<PID> ... <PID n>`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
`--session-id` Spécifie la session de l'invité à utiliser par son ID.  
`--session-name` Spécifie la session de l'invité à utiliser par son nom. Vous pouvez spécifier plusieurs sessions en spécifiant les jokers `*` ou `?`.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  
`<PID> ... <PID n>` Liste les identifiants des processus (PIDs ) à terminer.  
* [p[s]]kill, qui termine des processus en particulier dans une session de l'invité, à partir soit de l'ID de la session, soit de son nom.
`VBoxManage guestcontrol <uuid|nomvm> process kill`  
`--session-id <ID>`  
`| --session-name <nom ou modèle>`  
`[--verbose]`  
`<PID> ... <PID n>`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
`--session-id` Spécifie la session de l'invité à utiliser par son ID.  
`--session-name` Spécifie la session de l'invité à utiliser par son nom. Vous pouvez spécifier plusieurs sessions avec les jokers `*` ou `?`.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  
`<PID> ... <PID n>` Liste les identifiants des processus (PIDs) à terminer.  

* session close, qui ferme des sessions spécifiques de l'invité à partir de l'ID de la session ou de son nom.  
`VBoxManage guestcontrol <uuid|nomvm> session close`  
`--session-id <ID>`  
`| --session-name <nom ou extrait>`  
`| --all`  
`[--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
`--session-id` Ferme une session de ;'invité spécifiée par son ID.  
`--session-name` Ferme une session de ;'invité spécifiée par son nom. Vous pouvez fermer plusieurs sessions grâce aux jokers `*` ou `?`.  
`--all` Ferme toutes les sessions de l'invité.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  

* stat, qui affiche l'état d'un fichier ou d'un système de fichiers de l'invité.  
`VBoxManage guestcontrol <nomvm>|<uuid> stat`  
`<file>... --username <nom>`  
`[--passwordfile <fichier> | --password <mot de passe>]`  
`[--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
élément(s) de fichier à vérifier sur l'invité Chemin absolu du/des répertoire(s) à vérifier sur l'invité, comme `/home/foo/a.out`. L'utilisateur spécifié doit avoir les droits adéquats d'accès à/aux élément(s) fichier unique(s).  
	*	 `username <nom>` Nom de l'utilisateur sous lequel devrait s'exécuter le processus de copie. L'utilisateur doit exister sur l'OS invité.  
	*	 `passwordfile <fichier>` Mot de passe du compte utilisateur spécifié, à lire dans le fichier donné. Si vous n'en donnez pas, un mot de passe vierge est supposé.  
	*	 `password <mot de passe>` Mot de passe du compte utilisateur spécifié avec `--username`.  
Si vous n'en donnez pas, un mot de passe vierge est supposé.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  

* updateadditions, qui permet de mettre à jour une version des suppléments invité installée sur l'invité (sur les suppléments invité installés 4.0 et supérieur).  
`VBoxManage guestcontrol <nomvm>|<uuid> updateadditions`  
`[--source "<fichier des suppléments invité .ISO à utiliser>"] [--verbose]`  
`[--wait-start] [-- [<argumen
t1>] ... [<argumentN>]]`  
où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
	*	 `source "<fichier des suppléments invité .ISO à utiliser>"` Chemin complet vers un autre fichier .ISO de suppléments invité à utiliser pour mettre à jour les suppléments invité.  
	*	 verbose Dit à VBoxManage d'être plus verbeux.  
	*	 `wait-start` Démarre le processus normal de mise à jour et attend jusqu'à ce que la mise à jour des suppléments invité soit effectivement démarrée dans l'invité. Cela peut être nécessaire du fait de l'interaction nécessaire avec l'OS invité pendant la phase d'installation.  
Si vous ne mettez pas ce drapeau, VBoxManage attendra que toute la mise à jour des suppléments invité s'achève.  
`[– [<argument1s> ... [<argumentNs>]]]`  
Arguments en ligne de commandes à utiliser avec l'installeur des suppléments invité.  
Sert à ajouter des fonctions non installées précédemment sur l'invité.  
Vous devez entourer les arguments contenant des espaces par des guillemets.  
* watch, qui affiche un contrôle de l'activité actuelle de l'invité.  
`VBoxManage guestcontrol <uuid|nomvm> watch`  
`[--verbose]`  

où les paramètres signifient :  
`uuid|nomvm` L'UUID ou le nom de la VM. Obligatoire.  
`--verbose` Dit à VBoxManage d'être plus verbeux.  

[Retour à la table des matières](#Table des matières)

# 8.32 VBoxManage debugvm<a id="mark8.32"></a>

Les commandes "debugvm" sont pour les experts qui veulent jouer avec les détails exacts de l'exécution d'une machine virtuelle. Comme le débogueur de la VM décrit au chapitre [12.1.3 Le débogueur de VM intégré](#mark12.1.3) ces commandes ne sont utiles que si vous êtes très familier des détails l'architecture d'une VM et de la façon de déboguer un logiciel.  
Les sous-commandes de "debugvm" fonctionnent sur une machine virtuelle en fonction. Celles suivantes sont disponibles :  

* Avec `dumpguestcore --filename <nom>`, vous pouvez créer un fichier de renvoi système de la VM en fonction, qui sera écrit dans le fichier donné. Ce fichier aura un format ELF cœur standard (avec des sections personnalisées) ; voir chapitre [12.1.4 Format du cœur d'une VM.](#mark12.1.4)  
Cela correspond à la commande writecore du débogueur.  
* La commande info est utilisée pour afficher des éléments d'info liés à la VMM, aux émulations de périphérique et aux pilotes associés. Cette commande prend un ou deux arguments : le nom de l'élément d'info, éventuellement suivi d'une chaîne contenant les arguments spécifiques à l'élément d'info. L'élément d'info help fournit une liste des éléments disponibles et des astuces sur les arguments supplémentaires.  
Cela correspond à la commande info du débogueur.  
* La commande injectnmi provoque une interruption non masquable (non-maskable interrupt (NMI) dans l'invité, qui pourrait être utile dans certains scénarios de débogage. Ce qui se passe exactement dépend du système d'exploitation invité mais une NMI peut planter tout le système d'exploitation invité. Ne l'utilisez pas, sauf si vous savez ce que vous faites.  
* La commande osdetect lance la fonction de (re)-détection du débogueur de VMM du système d'exploitation de l'invité.  
Cela correspond à la commande detect du débogueur.  
* La commande osinfo est utilisée pour afficher des infos sur le système d'exploitation (OS) détecté par le débogueur de la VM.  
* La commande getregisters est utilisée pour afficher le registre du processeur et des périphériques. La commande prend une liste des registres, chacun ayant une des formes suivantes :  
	*	 `réglage-registre.nom-registre.sous-champ`  
	*	 `réglage-registre.nom-registre`  
	*	 `nom-registre-processeur.sous-champ`  
	*	 `nom-registre-processeur`  
	*	 `all`  
La forme all affichera tous les registres (pas les sous-champs). Les noms des registres sont indifférents à la casse. Quand vous interrogez un registre du processeur, vous pouvez ne pas mettre le réglage du registre, il sera sélectionné en utilisant la valeur de l'option `--cpu` (0 par devant).  
* La commande setregisters est utilisée pour modifier les registres des périphériques et du processeur. La commande prend une liste d'affectations de registres, chacune ayant une des formes suivantes :  
	*	 `réglage-registre.nom-registre.sous-champ=valeur`  
` réglage-registre.nom-registre=valeur`  
` nom-registre-processeur.sous-champ=valeur`  
` nom-registre-processeur=valeur`  
Le format de la valeur devrait être du même genre que ce qu'affiche getregisters, sauf qu'on peut utiliser des octets et des décimales au lieu de l'hexadécimal. Le nommage du registre et le réglage par défaut du registre processeur sont gérés de la même manière qu'avec la commande getregisters.  
* La commande statistics peut être utilisée pour afficher des statistiques VMM sur la ligne de commandes. L'option `--reset` réinitialisera les statistiques. Les statistiques concernées sont filtrables avec l'option `--pattern` qui accepte des jokers en style DOS/NT (`?` et `*`).  

[Retour à la table des matières](#Table des matières)

# 8.33 VBoxManage metrics<a id="mark8.33"></a>

Cette commande supporte la surveillance de l'utilisation des ressources système. Les ressources sont représentées par différentes métriques associées au système hôte ou à une VM en particulier.  
Par exemple, le système hôte a une métrique CPU/Load/User qui affiche le pourcentage du temps processeur passé à tourner en mode utilisateur sur une période spécifique.  
Les données de métrique sont rassemblées et stockées en interne ; vous pouvez les récupérer n'importe quand avec la sous-commande VBoxManage metric query. Les données sont disponibles tant que le processus en tâche de fond VBoxSVC process is est vivant. Ce processus ce termine peu après que toutes les VMs et les interfaces ont été fermées.  
Par défaut, aucune métrique n'est enregistrée. La récupération de métriques ne commence pas avant que VBoxManage metrics setup ne soit appelé avec un bon intervalle modèle et que le nombre de métriques n'a été conservé. On mesure l'intervalle en secondes. Par exemple, pour activer la récupération des métriques de l'utilisation du processeur et de la mémoire hôte toutes les secondes, en gardant les 5 échantillons les plus actuels, vous pouvez utiliser la commande suivante :  

`VBoxManage metrics setup --period 1 --samples 5 host CPU/Load,RAM/Usage`  

Le recueil de métriques ne peut être activé que sur des VMs démarrées. Les données et les paramètres de récupération d'une VM en particulier disparaîtront dès que vous éteindrez la VM.  
Utilisez la sous-commande VBoxManage metrics list pour voir les métriques actuellement disponibles. Vous pouvez aussi utiliser l'option `--list` avec une sous-commande modifiant les paramètres de métrique pour chercher les métriques concernées.  
Remarquez que la sous-commande VBoxManage metrics setup désactive tous les échantillons qui peuvent avoir été recueillis pour un jeu d'objets et de métriques spécifique.  
Pour activer ou désactiver la récupération des métriques sans perdre les données, vous pouvez utiliser les sous-commandes VBoxManage metrics enable et VBoxManage metrics disable.  
Remarquez que ces sous-commandes attendent en paramètres des métriques, pas des sous-métriques, comme CPU/Load ou RAM/Usage. En d'autres termes, l'activation de CPU/Load/User tout en désactivant CPU/Load/Kernel n'est pas supporté.  
L'hôte et les VMs ont différents ensembles de métriques associées. Vous pouvez lister les métriques disponibles avec la sous-commande VBoxManage metrics list.  
Un nom de métrique complet peut inclure une fonction d'agrégat. Le nom prend la forme suivante : `Catégorie/Métrique[/SousMétrique][:aggrégé]`. Par exemple, `RAM/Usage/Free:min` signifie` la quantité minimum de mémoire disponible parmi toutes les données en mémoires, cela s'applique à l'objet hôte.  
Les sous-commandes peuvent s'appliquer à tous les objets et les métriques ou se limiter à un objet et/ou une liste de métriques. Si vous ne donnez aucun objet ni métrique en paramètres, les sous-commandes s'appliqueront à toutes les métriques disponibles de tous les objets. Vous pouvez utiliser une astérisque `("*")` pour spécifier explicitement que la commande devrait s'appliquer à tous les objets ou à toutes les métriques. Utilisez "host" en nom d'objet pour limiter la cible de la commande aux métriques relatives à l'hôte. Pour limiter la cible à un sous-ensemble de métriques, utilisez une liste de noms séparés par des virgules.  
Par exemple, pour interroger les données de métriques sur le temps passé par le processeur en modes utilisateur et noyau, sur la machine virtuelle nommée "test", vous pouvez utiliser la commande suivante :  

`VBoxManage metrics query test CPU/Load/User,CPU/Load/Kernel`  

La liste suivante résume les sous-commandes disponibles :  

list Cette sous-commande affiche les paramètres des métriques existant actuellement. Remarquez que les métriques spécifiques à la VM ne sont disponibles que quand une VM en particulier est en fonction.  
setup Cette sous-commande définit l"intervalle entre deux prises d'échantillons des données de métriques et le nombre d'échantillons gardés en interne. Les données mémorisées sont disponibles en affichage avec la sous-commande query. L'option `--list` affiche les métriques qui ont été modifiées dans le résultat de l'exécution de la commande.  
enable Cette sous-commande "réactive le recueil de données après qu'il a été arrêTé avec la sous-commande disable. Remarquez que la spécification de sous-métriques comme paramètres n'activera pas les métriques sous-jacentes. Utilisez `--list` pour savoir si la commande a fait ce que vous aviez prévu.  
disable Cette sous-commande "suspends" le recueil des données sans changer les paramètres de récupération ni altérer les données recueillies. Remarquez que la spécification de sous-métriques en paramètres ne désactivera pas les métriques sous-jacentes. Utilisez `--list` pour voir si la commande a fait ce que vous aviez prévu  .
query Cette sous-commande récupère et affiche les données de métriques mémorisées.  

Note: La sous-commande query subcommand ne supprime pas ni ne remet à 0 les données mémorisées. Si vous interrogez assez souvent, vous verrez la durée d'évacuation graduelle des échantillons par les nouveaux échantillons.  

collect Cette sous-commande définit l'intervalle entre la prise de deux échantillons de données de métrique et le nombre d'échantillons mémorisés en interne. Les données recueillies s'affichent périodiquement jusqu'à ce que vous appuyiez sur Ctrl-C, sauf si vous spécifiez l'option `--detach`. Avec l'option `--detach`, cette sous-commande agit de la même façon que setup. L'option `--list` affiche les métriques correspondant au filtre spécifié.  

[Retour à la table des matières](#Table des matières)

# 8.34 VBoxManage hostonlyif<a id="mark8.34"></a>

Avec "hostonlyif", vous pouvez changer la configuration de l'IP d'une interface réseau host-only.  
Pour une description du réseau host-only, merci de vous reporter au chapitre [6.7 Réseau Host-only.](#mark6.7) Chaque interface host-only par un nom et peut soit utiliser le serveur DHCP interne, soit voir son adresse IP configurée à la main (IP4 et IP6).  

[Retour à la table des matières](#Table des matières)

# 8.35 VBoxManage dhcpserver<a id="mark8.35"></a>

Les commandes de "dhcpserver" vous permettent de contrôler le serveur DHCP construit dans VirtualBox. Vous pourriez trouver cela utile si vous utilisez le réseau interne ou host-only. (En théorie, vous pouvez l'activer aussi pour un réseu bridgé, mais cela provoquera probablement des conflits avec d'autres serveurs DHCP de votre réseau physique.)  
Utilisez les options suivantes de la ligne de commandes :  

* Si vous utilisez le réseau interne pour l'adaptateur réseau virtuel d'une machine virtuelle, utilisez `VBoxManage dhcpserver add `--netname <nom_réseau>`, où `<nom_réseau>` est le même nom de réseau que celui que vous avez utilisé avec `VBoxManage modifyvm <nomvm> --intnet<X> <nom_réseau>`.  

* Si vous utilisez le réseau interne pour l'adaptateur réseau virtuel d'une machine virtuelle, utilisez plutôt `VBoxManage dhcpserver add --ifname <hostonly_if_name>`, où `<hostonly_if_name>` est le même nom de l'interface host-only que vous avez utilisé avec `VBoxManage modifyvm <nomvm> --hostonlyadapter<X> <hostonly_if_name>`.  
Vous pouvez aussi utiliser l'option `--netname comme avec les réseaux internes si vous connaissez le nom du réseau host-only ; vous pouvez voir les noms avecc VBoxManage list hostonlyifs (voir chapitre [8.4 VBoxManage list](#mark8.4) ci-dessus).  

Les paramètres suivants supplémentaires sont requis quand vous ajoutez un serveur DHCP pour la première fois :  

* Avec `--ip`, spécifiez l'adresse IP du serveur DHCP lui-même.  
* Avec `--netmask`, spécifiez le masque du réseau.  

* Avec `--lowerip` et `--upperip`, vous pouvez spécifier respectivement l'adresse la plus basse et la plus haute que le serveur DHCP attribuera aux clients.  

Enfin, vous devez spécifier `--enable`, sinon le serveur DHCP sera créé en état désactivé, ce qui ne fera rien.  
Après cela, VirtualBox démarrera automatiquement le serveur DHCP pour le réseau interne ou host-only donné dès que la première machine virtuelle utilisant ce réseau sera démarrée.  
Inversement, utilisez `VBoxManage dhcpserver remove` avec `--netname <nom_réseau>` ou `--ifname <hostonly_if_name>` pour supprimer le serveur DHCP, de nouveau pour le réseau interne ou host-only donné.
Pour modifier les paramètres d'un serveurDHCP créé précédemment avec `VBoxManage dhcpserver add`, vous pouvez utiliser `VBoxManage dhcpserver modify` pour une interface réseau interne ou host-only donnée.  

[Retour à la table des matières](#Table des matières)

# 8.36 VBoxManage extpack<a id="mark8.36"></a>

La commande "extpack" vous permet d'ajouter ou de supprimer des packs d'extension de VirtualBox comme décrit au chapitre [1.5 Installer VirtualBox et les packs d'extension.](#mark1.5)  

* Pour ajouter un nouveau pack d'extension, utilisez `VBoxManage extpack install <.vbox-extpack>`. Cette commande échouera si une version plus ancienne du même pack d'extension est déjà installée. Vous pouvez utiliser le paramètre optionnel `--replace` pour désinstaller l'ancien paquet avant d'installer le nouveau paquet.  
* Pour supprimer un pack d'extension précédemment installé, utilisez `VBoxManage extpack uninstall <nom>`. Vous pouvez utiliser VBoxManage list extpacks pour afficher les noms des pack d'extensions actuellement installés ; merci de voir aussi le chapitre [8.4 VBoxManage list.](#mark8.4) Vous pouvez utiliser le paramètre optionnel `--force` pour surpasser le refus de se désinstaller d'un pack d'extension.  

* La commande VBoxManage extpack cleanup peut être utilisée pour supprimer temporairement les fichiers et les répertoires qui peuvent avoir été laissés après l'échec d'une précédente commande d'installation ou de désinstallation.  

Les commandes suivantes montrent des exemples d'une liste des packs d'extension et de la manière d'en supprimer un :  

`$ VBoxManage list extpacks`  
`pack d'extensions: 1`  
`Pack no. 0: Oracle VM VirtualBox pack d'extension`  
`Version: 4.1.12`  
`Revision: 77218`  
`Edition:`  
`Description: USB 2.0 Host Controller, VirtualBox RDP, PXE ROM with E1000 support`.`   
`VRDE Module: VBoxVRDP`  
`Usable: true`  
`Why unusable:`  
`$ VBoxManage extpack uninstall "Oracle VM VirtualBox pack d'extension"`  
`0%...10%...20%...30%...40%...50%...60%...70%...80%...90%...100%`  
`Successfully uninstalled "Oracle VM VirtualBox pack d'extension".`  

[Retour à la table des matières](#Table des matières)

# 9 Sujets avancés<a id="mark9"></a>

# 9.1 VBoxSDL, l'afficheur simplifié de VM<a id="mark9.1"></a>

# 9.1.1 Introduction<a id="mark9.1.1"></a>

VBoxSDL est une interface graphique (GUI) simple qui élimine le support du clicodrome fourni par VirtualBox, notre principale GUI. VBoxSDL est utilisé actuellement d'abord pour déboguer VirtualBox, donc il n'est pas officiellement supporté. Vous pouvez quand même le trouver utile pour des environnements où les machines virtuelles ne sont pas nécessairement contrôlées par la même personne qui utilise la machine virtuelle.  

Note: VBoxSDL n'est pas disponible sur la plateforme hôte Mac OS X.  

VBoxSDL ne fournit vraiment qu'une fenêtre simple ne contenant que la machine virtuelle "pure", sans menus ni contrôleurs sur lesquels cliquer et sans indicateurs supplémentaires sur l'activité de la VM :  

Pour démarrer une machine virtuelle avec VBoxSDL au lieu de l'interface graphique de VirtualBox, tapez ce qui suit sur une ligne de commande: 

`VBoxSDL --startvm <vm>`  

où `<vm>` est, comme d'habitude dans les paramètres en ligne de commande de VirtualBox, le nom ou l'UUID d'une machine virtuelle existante.  

[Retour à la table des matières](#Table des matières)

# 9.1.2 Étiquetage sécurisé avec VBoxSDL<a id="mark9.1.2"></a>

Quand vous lancez des systèmes d'exploitation invités en mode plein écran, le système d'exploitation invité a en général le contrôle de tout l'écran. Cela pourrait représenter un risque de sécurité car le système d'exploitation invité pourrait, pour l'utilisateur, lui faire croire qu'il est vraiment dans un autre système (qui pourrait avoir un haut niveau de sécurité), ou lui faire assimiler des messages à l'écran comme provenant du système d'exploitation hôte.  

Afin de protéger l'utilisateur contre les risques de sécurité précités, on a développpé la fonction d'étiquetage de sécurité. L'étiquetage de sécurité n'est actuellement disponible que pour VBoxSDL. S'il est activé, une partie de la zone d'affichage est réservée à une étiquette où est affiché un message défini par l'utilisateur. La hauteur de l'étiquette est définie à 20 pixels dans VBoxSDL. La couleur de la police et de l'arrière-plan de l'étiquette peuvent éventuellement être définies en valeurs de couleurs RGB hexadécimales. On utilise la syntaxe suivante pour activer l'étiquettage de sécurité :  

`VBoxSDL --startvm "nom VM"`  
`--securelabel --seclabelfnt ~/fonts/arial.ttf`  
`--seclabelsiz 14 --seclabelfgcol 00FF00 --seclabelbgcol 00FFFF`  

Outre l'activation de l'étiquette de sécurité, il faut fournir une police TrueType Pour utiliser une autre taille de police que 12 points, utilisez le paramètre `--seclabelsiz`.  
Vous pouvez définir le texte de l'étiquette avec

`VBoxManage setextradata "nom VM" "VBoxSDL/SecureLabel" "L étiquette"`

Une modification de cette étiquette prendra effet immédiatement.  
En général, les résolutions du plein écran sont limitées à certaines géométries "standards" telles que 1024 x 768. Une augmentation de vingt lignes n'est en général pas faisable, donc dans la plupart des cas, VBoxSDL choisira la résolution suivante la plus élevée comme 1280 x 1024 et l'écran de l'invité ne couvrira pas toute la zone d'affichage. Si VBoxSDL ne peut pas choisir de résolution plus élevée, l'étiquette de sécurité sera dessinée en haut de la zone de l'écran de l'invité. Pour surmonter le problème selon lequel le bas de l'écran de l'invité est caché, VBoxSDL peut fournir des modes graphiques personnalisés à l'invité, réduits par la hauteur de l'étiquette.  
Pour les invités Windows et ceux Solaris et Linux récents, les suppléments invité de VirtualBox fournissent automatiquement les modes graphiques réduits. De plus, le BIOS VESA a été ajusté pour dupliquer sa table en mode standard avec des résolutions ajustées. Les IDs du mode ajusté se calculent en utilisant la formule suivante :  

`reduced_modeid = modeid + 0x30`  

Par exemple, pour démarrer Linux avec 1024 x 748 x 16, le mode standard 0x117 (1024 x 768 x 16) est utilisé de base. Le paramètre du noyau Linux du mode graphique se calcule alors en faisant :  

`vga = 0x200 | 0x117 + 0x30`  
`vga = 839`  

On duplique les modes standards au lieu de ne fournir que les modes ajustés car la plupart des systèmes d'exploitation invités ont besoin des modes VESA standards figés et ils refusent de démarrer avec d'autres modes.  
Quand vous utilisez le pilote VESA de X.org, il faut calculer les modes personnalisés et les ajouter à la main à la configuration (en général, dans `/etc/X11/xorg.conf`). Vous pouvez trouver un outil à la main pour déterminer les entrées des modes sur <http://www.tkk.fi/Misc/Electronics/faq/vga2rgb/calc.html>

[Retour à la table des matières](#Table des matières)

# 9.1.3 Libérer les modificateurs avec VBoxSDL sur Linux<a id="mark9.1.3"></a>

Quand vous basculez d'un terminal virtuel (VT) X à un autre en utilisant Ctrl-Alt-Fx pendant que la fenêtre VBoxSDL contient le focus d'entrée, l'invité recevra les événements d'appui sur Ctrl et Alt sans recevoir les événements de relâchement correspondant de la touche. C'est une limite liée à l'architecture de Linux. Pour réinitialiser les touches modificatrices, il est possible d'envoyer SIGUSR1 au fil principal de VBoxSDL (première entrée de la liste ps). Par exemple, quand vous basculez vers un autre VT et quand vous enregistrez la machine virtuelle à partir de ce terminal, la séquence suivante peut être utilisée pour s'assurer que la VM sauvegardée avec des modificateurs bloqué :  

`kill -usr1 <pid>`  
`VBoxManage controlvm "Windows 2000" savestate`  

[Retour à la table des matières](#Table des matières)

# 9.2 Identifications automatiques dans l'invité<a id="mark9.2"></a>

VirtualBox fournit des modules invité supplémentaires pour Windows, Linux et Solaris pour activer l'identification automatique dans l'invité.  
Quand on lance un système d'exploitation dans une machine virtuelle, il pourrait être souhaitable d'effectuer des identifications automatiques et coordonnées en utilisant des autorisations issues d'un système d'identification maître. (Avec les "autorisations", on se réfère aux informations d'identification qui consistent dans le nom d'utilisateur, le mot de passe et le nom de domaine, où chaque valeur pourrait être vide.)  

[Retour à la table des matières](#Table des matières)

# 9.2.1 Identification automatique dans un invité Windows<a id="mark9.2.1"></a>

Depuis Windows NT, Windows fourni un sous-système d'identification modulaire ("Winlogon") qu'on peut utiliser et étendre par ce qu'on appelle des modules GINA (Graphical Identification and Authentication). Avec Windows Vista et Windows 7, les modules GINA ont été remplacés par un nouveau mécanisme appelé "fournisseurs d'autorisations". Les suppléments invité de VirtualBox pour Windows sont fournis à la fois avec un module GINA et un fournisseur d'autorisations, ils permettent donc à n'importe quel invité Windows d'effectuer des identifications automatiques.  
Pour activer le module GINA ou fournisseur d'autorisations des suppléments invité de VirtualBox, installez les suppléments invité en utilisant le paramètre `/with_autologon` en ligne de commande. Toutes les étapes manuelles suivantes exigés pour installer ces modules se feront via l'installeur.  
Pour installer à la main le module GINA de VirtualBox, extrayez les suppléments invité (voir chapitre [4.2.1.4 Extraction manuelle du fichier)](#mark4.2.1.4) et copiez le fichier VBoxGINA.dll dans le répertoire Windows SYSTEM32. Puis, dans le registre, créez la clé suivante :  

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\GinaDLL`  

avec la valeur VBoxGINA.dll.  

Note: Le module GINA de VirtualBox est implémenté sur le module GINA standard de Windows (MSGINA.DLL). En conséquence, il ne fonctionnera vraisemblablement pas avec des modules GINA tiers.  

Pour installer à la main le module fournisseur d'autorisation de VirtualBox, extrayez les suppléments invité (voir chapitre [4.2.1.4 Extraction manuelle du fichier)](#mark4.2.1.4) et copiez le fichier VBoxCredProv.dll dans le répertoire Windows SYSTEM32. Puis, dans le registre, créez les clés suivantes :  

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\`  
`Authentication\Credential Providers\{275D3BCC-22BB-4948-A7F6-3A3054EBA92B}`  

`HKEY_CLASSES_ROOT\CLSID\{275D3BCC-22BB-4948-A7F6-3A3054EBA92B}`  

`HKEY_CLASSES_ROOT\CLSID\{275D3BCC-22BB-4948-A7F6-3A3054EBA92B}\InprocServer32`  

avec pour valeurs celles par défault (la clé nommée (Default) dans chaque clé) définies sur VBoxCredProv. Après quoi, il faut créer une nouvelle chaîne nommée  

`HKEY_CLASSES_ROOT\CLSID\{275D3BCC-22BB-4948-A7F6-3A3054EBA92B}\InprocServer32\ThreadingModel`  

avec une valeur de Appartement.  
Pour définir les autorisations, utilisez la commande suivante sur une VM en fonction :  

`VBoxManage controlvm "Windows XP" setcredentials "John Doe" "secretpassword" "DOMTEST"`  

Pendant que la VM est en fonction, vous pouvez chercher les autorisations accordées par les modules d'identification de VirtualBox (GINA ou fournisseur d'autorisation) en utilisant le périphérique des suppléments invité de VirtualBox. Quand Windows est en mode "déconnecté", les modules d'identification chercheront constament les autorisations et si elles existent, il tentera une identification. Après avoir récupéré les autorisations, les modules d'identification les écraseront pour que la commande ci-dessus doive se répéter pour les identifications consécutives.  
Pour des raisons de sécurité, les autorisations ne sont pas stockées de façon permanente et vous les perdrez quand vous redémarrerez la VM. En outre, les autorisations sont en "écriture seule", c'est-à-dire qu'il n'y a aucun moyen de récupérer les autorisations côté hôte. Vous pouvez réinitialiser les autorisations côté hôte en définissant des valeurs vides.  
Selon la variante particulière de votre invité Windows, les restrictions suivantes s'appliquent :  

1. Pour les invités Windows XP, le sous-système d'identification doit être configuré pour utiliser la boîte de dialogue classique d'identification car le module GINA de VirtualBox ne supporte pas la boîte de dialogz de bienvenue à la XP.  
2. Pour les invités Windows Vista, Windows 7 et Windows 8, le sous-système d'identification ne supporte pas ce qu'on appelle la Secure Attention Sequence (CTRL+ALT+DEL). Il s'en suit que les paramètres des règles du groupe de l'invité doivent être modifiés pour ne pas utiliser la Secure Attention Sequence. De plus, le nom d'utilisateur donné n'est comparé qu'au vrai nom d'utilisateur, pas au nom convivial d'utilisateur. Cela veut dire que quand vous renommez un utilisateur, vous devez aussi fournir le nom d'utilisateur originel (en interne, Windows ne renomme jamais les comptes utilisateurs).  
3. La gestion de l'identification automatique du Windows Remote Desktop Service (connu jadis sous le nom Terminal Services) est désactivée par défaut. Pour l'activer, créez la clé de registre:
`HKEY_LOCAL_MACHINE\SOFTWARE\Oracle\VirtualBox Guest Additions\AutoLogon`  
avec une valeur DWORD de 1.  
La commande suivante oblige VirtualBox à garder les autorisations après leur lecture par l'invité et au redémarrage de la VM :  
`VBoxManage setextradata "Windows XP" VBoxInternal/Devices/VMMDev/0/Config/KeepCredentials 1`  
Remarquez que c'est un risque de sécurité potentiel car une application malveillante en fonction sur l'invité pourrait solliciter ces informations en utilisant la bonne interface.  

[Retour à la table des matières](#Table des matières)

# 9.2.2 Identifications automatisées à un invité Linux/Unix<a id="mark9.2.2"></a>

À partir de la version 3.2, VirtualBox fournit un module PAM personnalisé (Pluggable Authentication Module) qu'on peut utiliser pour effectuer des identifications automatiques dans l'invité sur des plateformes qui supportent cet environnement. Virtuellement, toutes les distributions Linux/Unix modernes s'appuient sur PAM.  

Pour des identifications automatiques sur des distributions Ubuntu (ou dérivées d'Ubuntu), qui utilisent le gestionnaire d'affichage LightDM, merci de voir le chapitre [9.2.2.1 VirtualBox Greeter pour Ubuntu / LightDM.](#mark9.2.2.1)  
Le module pam_vbox.so lui-même ne fait pas de vérification effective des autorisations passées à l'OS invité ; il s'appuie plutôt sur d'autres modules tels que pam_unix.so ou pam_unix2.so dans la pile PAM pour faire la validation effective en utilisant les autorisations récupérées par pam_vbox.so. Dès lors, il faut que pam_vbox.so soit en haut de la liste d'authentification du service PAM.  

Note: pam_vbox.so ne supporte que le auth primitif. D'autres primates tels que account, session ou password ne sont pas supportés.  

Le module pam_vbox.so est inclu dans les suppléments invité mais il n'est pas installé et/ou activé par défaut sur l'OS invité. Afin de l'installer, il faut le copier de `/opt/VBoxGuestAdditions-<version>/lib/VBoxGuestAdditions/` dans le répertoire des modules de sécurité, en général `/lib/security/` sur les invités Linux 32 bit ou `/lib64/security/` sur ceux 64 bits. Merci de vous reporter à la documentation de votre OS invité pour le bon répertoire du module PAM.  
Par exemple, pour utiliser pam_vbox.so avec un OS invité Linux Ubuntu et GDM (le GNOME Desktop Manager) pour identifier les utilisateurs automatiquement avec les droits passés par l'hôte, l'OS invité doit être configuré comme ce qui suit :  

1. Le module pam_vbox.so doit être copié dans le répertoire des modules de sécurité, dans ce cas, c'est `/lib/security`.
2. Éditez le fichier de configuration de PAM avec GDM qui se trouve dans `/etc/pam.d/gdm`, en ajoutant la ligne auth requisite pam_vbox.so au début. En outre, dans la plupart des distributions Linux, il existe un fichier appelé `/etc/pam.d/common-auth`. Ce fichier est inclut dans de nombreux services (comme le fichier GDM indiqué ci-dessus). Vous devez y ajouter la ligne auth requisite pam_vbox.so.  
3. Si vous voulez une authentification contre la base de données shadow en utilisant pam_unix.so ou pam_unix2.so, l'argument try_first_pass de pam_unix.so ou use_first_pass pour pam_unix2.so est nécessaire pour passer les autorisations du module VirtualBox au module d'authentification de la base de données shadow. Pour Ubuntu, il faut ajouter cela à `/etc/pam.d/common-auth`, à la fin de la ligne référençant pam_unix.so. Cet argument dit au module PAM d'utiliser les autorisations déjà présentes dans la pile, à savoir celles fournies par le module PAM de VirtualBox.  

Avertissement: Une pile PAM mal configurée peut vraiment vous empêcher de vous connecter à votre système invité !

Pour faciliter le déploiement, vous pouvez passer l'argument debug juste après la ligne pam_vbox.so. La sortie du journal de débogage sera enregistrée en utilisant syslog.  

Note: Par défaut, pam_vbox n'attendra pas les autorisations venant de l'hôte, en d'autres termes : quand une invite de connexion s'affiche (ppar exemple via GDM/KDM ou la console texte) et quand pam_vbox n'a pas encore les autorisations, il n'attend pas qu'elles viennent. Le module suivant de la pile PAM (selon la configuration de PAM) aura une chance d'authentification.  

À partir de VirtualBox 4.1.4 pam_vbox supporte plusieurs paramètres de propriétés d'invité résidant tous dans `/VirtualBox/GuestAdd/PAM/`. Ces paramètres permettent à pam_vbox d'attendre que les autorisations soient fournies dans l'hôte et, éventuellement, il peut afficher un message tout en les attendant. Les propriétés d'invité suivantes peuvent être définies :  

1. CredsWait : Définissez sur "1" si pam_vbox devrait commencer à attendre jusqu'à ce que les autorisations viennent de l'hôte. En attendant, aucune autre méthode d'authentification comme la connexion à la main ne sera disponible. Si cette propriété est vide ou effacée, les autorisations ne seront pas attendues et pam_vbox comme avant (voir le paragraphe ci-dessus). Cette propriété doit être définie en lecture seule pour l'invité (RDONLYGUEST).
2. CredsWaitAbort : Annule l'attente des autorisations si une valeur est définie. Elle peut être définie à partir de l'hôte et de l'invité.  
3. CredsWaitTimeout : Timeout (en secondes) pendant lequel il faut laisser pam_vbox attendre les autorisations. Si aucune autorisation ne vient dans ce délai, l'authentification de pam_vbox sera définie comme échouée et le prochain module PAM de la chaîne sera appelé. Si vous ne spécifiez pas cette propriété, ou que vous la réglez sur "0" ou sur une valeur invalide, on utilisera un timeout infini. Cette propriété doit être paramétrée en lecture seule pour l'invité (RDONLYGUEST).  

Pour personnaliser davantage pam_vbox, il existe les propriçtés invité suivantes :  

1. CredsMsgWaiting : message personnalisé affiché pendant que pam_vbox attend les autorisations de l'hôte. Cette propriété doit être réglée en lecture seule pour l'invité (RDONLYGUEST).  
2. CredsMsgWaitTimeout : message personnalisé affiché pendant l'attente de la fin du timeout des autorisations de pam_vbox, par exemple si elles ne sont pas arrivées à temps. Cette propriété doit être réglée en lecture seule pour l'invité (RDONLYGUEST).  

Note: Si une propriété pam_vbox est définie avec de mauvais drapeaux (RDONLYGUEST), cette propriété sera ignorée et - selon la propriété - une valeur par défaut sera utilisée. Il peut s'en suivre que pam_vbox n'attendra pas les autorisations.  
Consultez le fichier syslog adéquat pour plus d'informations et utilisez l'option debug.  

[Retour à la table des matières](#Table des matières)

# 9.2.2.1 VirtualBox Greeter pour Ubuntu / LightDM<a id="mark9.2.2.1"></a>

À partir de la version 4.2.12, VirtualBox est fourni avec son propre module greeter, qui s'appelle vbox-greeter et qu'on peut utiliser avec LightDM 1.0.1 ou supérieur. LightDM est le gestionnaire d'affichage par défaut depuis Ubuntu 10.11 et on peut donc l'utiliser également pour des identifications automatiques sur l'invité.  
vbox-greeter n'a pas besoin du module pam_vbox décrit ci-dessus pour fonctionner – il est fourni avec son propre mécanisme d'authentification fourni par LightDM. Cependant, pour offrir le maximum de flexibilité, vous pouvez utiliser les deux modules ensemble sur le même invité.  
Comme pour le module pam_vbox, vbox-greeter est fourni avec les suppléments invité mais il n'est pas installé et/ou activé par défaut sur l'OS invité. Pour installer vbox-greeter automatiquement pendant l'installation des suppléments invité, utilisez le paramètre `--with-autologon` au lancement du fichier VBoxLinuxAdditions.run   :

`# ./VBoxLinuxAdditions.run -- --with-autologon`  

Pour une installation manuelle ou différée, le fichier `vbox-greeter.desktop` doit être copié de `/opt/VBoxGuestAdditions-<version>/shared/VBoxGuestAdditions/` dans le répertoire `xgreeters`, généralement `/usr/share/xgreeters/`. Merci de vous reporter à la documentation de votre OS invité pour le bon répertoire de LightDM greeter.  
Le module vbox-greeter lui-même a été installé par l'installeur des suppléments invité de VirtualBox et il se trouve dans `/usr/sbin/`. Pour activer `vbox-greeter` en tant que module greeter standard, le fichier `/etc/lightdm/lightdm.conf` doit être modifié :  

`[SeatDefaults]`  
`greeter-session=vbox-greeter`  

Note: Il faut complètement relancer le serveur LightDM afin que vbox-greeter soit utilisé comme greeter par défaut. En tant qu'administrateur, exécutez un service `lightdm --full-restart` sur Ubuntu, ou redémarrez tout simplement l'invité.  

Note: vbox-greeter est indépendant de la session graphique choisie par l'utilisateur (comme Gnome, KDE, Unity etc). Néanmoins, il exige FLTK 1.3 pour afficher sa propre interface utilisateur.  

De noubreuses propriétés invité peuvent être utilisées pour personnaliser davantage l'identification de l'utilisateur. Pour identifier automatiquement les utilisateurs, s'appliquent les mêmes propriétés qu'avec pam_vbox, voir chapitre [9.2.2 Identifications automatisées à un invité Linux/Unix.](#mark9.2.2)  
Outre les propriétés invité indiquées ci-dessus, vbox-greter permet davantage de personnalisation de son interface utilisateur. Ces propriétés invité spéciales se trouvent toutes dans `/VirtualBox/GuestAdd/Greeter/` :

1. HideRestart : Réglez-le sur "1" si vbox-greeter doit masquer le bouton de redémarrage de l'invité. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
2. HideShutdown : Réglez-la à "1" si vbox-greeter doit masquer le bouton d'extinction de l'invité. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
3. BannerPath : Chemin vers un fichier .PNG à utiliser comme bannière en haut. La taille de l'image doit être de 460 x 90 pixels, quelle que soit la profondeur de bit. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
4. UseTheming : Définissez-la à "1" pour activer les options de thème suivantes. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
5. Theme/BackgroundColor : Couleur RRGGBB hexadécimale du fond. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
6. Theme/LogonDialog/HeaderColor : Couleur d'avant RRGGBB hexadécimale pour le texte d'en-tête. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
7. Theme/LogonDialog/BackgroundColor: Couleur en RRGGBB hexadécimale du fond de la boîte de dialogue d'identification. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  
8. Theme/LogonDialog/ButtonColor : Couleur de fond RRGGBB hexadécimale du bouton de la boîte de dialogue d'identification. Vous devez définir cette propriété en lecture seule pour l'invité (RDONLYGUEST).  

Note: Les mêmes restrictions des propriétés invité ci-dessus s'appliquent comme celles indiquées dans la section pam_vbox.  

[Retour à la table des matières](#Table des matières)

# 9.3 Configuration avancées pour les invités Windows<a id="mark9.3"></a>

# 9.3.1 Préparation automatique du système Windows<a id="mark9.3.1"></a>

À partir de Windows NT 4.0, Microsoft offre un outil "préparation système" (en bref : Sysprep) pour préparer un système Windows à être déployé ou redistribué. Si Windows 2000 et XP sont inclus avec Sysprep sur leur média d'installation, l'outil est également disponible en téléchargement sur le site Internet de Microsoft. Dans une installation standard de Windows Vista et 7, Sysprep est déjà inclu. Sysprep consiste principalement dans un exécutable qui s'appelle sysprep.exe qui est appelé par l'utilisateur pour passer l'installation Windows en mode préparation.  
À partir VirtualBox 3.2.2, les suppléments invité offrent un moyen de lancer une préparation du système sur le système d'exploitation invité de manière automatisée et contrôlée depuis le système hôte. Pour faire cela, voir le chapitre [4.7 Contrôle de l'invité](#mark4.7) pour utiliser la fonction avec l'identifiant spécial sysprep pour que le programme s'exécute avec le nom d'utilisateur sysprep et le mot de passe sysprep des autorisations. Sysprep se lance avec les droits système requis.  

Note: La spécification de l'emplacement de "sysprep.exe" n'est pas possible – les chemins suivants seront plutôt utilisés (basés sur le système d'exploitation) :  

* `C:\sysprep\sysprep.exe` pour Windows NT 4.0, 2000 et XP  
* `%WINDIR%\System32\Sysprep\sysprep.exe` pour Windows Vista, 2008 Server et 7  

Les suppléments invité utiliseront automatiquement le chemin adapté pour exécuter l'outil de préparation système.  

[Retour à la table des matières](#Table des matières)

# 9.4 Configuration avancée pour les invités Linux et Solaris<a id="mark9.4"></a>

# 9.4.1 Paramétrage manuel des services sélectionnés sur l'invité Linux<a id="mark9.4.1"></a>

Les suppléments invité de VirtualBox contiennent plusieurs pilotes. Si, pour une raison quelconque, vous ne souhaitez pas les installer, vous pouvez installer les suppléments invité en utilisant la commande suivante :  

`sh ./VBoxLinuxAdditions.run no_setup`  

Après quoi, vous devrez au moins compiler les modules noyau en lançant la commande  

`/usr/lib/VBoxGuestAdditions/vboxadd setup`  

en tant que root (vous devrez remplacer lib par lib64 sur certains invités 64 bits), et sur les anciens invités sans service udev, vous devrez ajouter le service vboxadd au niveau d'exécution par défaut pour vous assurer que les modules sont chargés.  
Pour régler le service de synchronisation du temps, lancez la commande  

`/usr/lib/VBoxGuestAdditions/vboxadd-service setup`  

et ajoutez le service vboxadd-service au niveau d'exécution par défaut. Pour paramétrer la partie X11 et OpenGL des suppléments invité, lancez la commande  

`/usr/lib/VBoxGuestAdditions/vboxadd-x11 setup`  

(vous n'avez pas besoin d'activer un service).  
Pour recompiler les modules noyau invité, utilisez cette commande :  

`/usr/lib/VBoxGuestAdditions/vboxadd setup`  

Après la compilation, vous devriez redémarrer votre invité pour vous assurer que les nouveaux modules sont bien utilisés.  

[Retour à la table des matières](#Table des matières)

# 9.4.2 Paramétrage approfondi des pilotes graphique et souris de l'invité<a id="mark9.4.2"></a>

Cette section suppose que vous êtes familier de la configuration de votre serveur X.Org en utilisant xorg.conf et éventuellement les mécanismes récents en utilisant hal ou udev et xorg.conf.d.  
Sinon, vous pouvez apprendre à les utiliser en étudiant la documentation fournie avec X.Org.  
Les suppléments invité de VirtualBox sont fournis avec les pilotes pour les versions X.Org  

* `X11R6.8/X11R6.9 et XFree86 version 4.3 (vboxvideo_drv_68.o et vboxmouse_drv_68.o)`  
* `X11R7.0 (vboxvideo_drv_70.so and vboxmouse_drv_70.so)`  
* `X11R7.1 (vboxvideo_drv_71.so and vboxmouse_drv_71.so)`  
* Serveur X.Org versions 1.3 et plus `(vboxvideo_drv_13.so et vboxmouse_drv_13.so et ainsi de suite)`.  

Par défaut, vous pouvez trouver ces pilotes dans le répertoire  
`/opt/VBoxGuestAdditions-<version>/lib/VBoxGuestAdditions`  
et les bonnes versions du serveur X sont liées de façon symbolique aux répertoires du pilote de X.Org.  
Pour que l'intégration graphique fonctionne correctement, le serveur X doit charger le pilote vboxvideo (beaucoup de versions récentes du serveur X le cherchent automatiquement si elles voient qu'elles sont sur VirtualBox) et pour une expérience utilisateur optimale, les pilotes du noyau invité doivent être chargés et l'outil des suppléments invité VBoxClient doit être en fonction en tant que client dans la session X. Pour que l'intégration de la souris fonctionne correctement, les pilotes du noyau invité doivent être chargés et, au surplus, dans les serveurs X de X.Org X11R6.8 à X11R7.1 et dans XFree86 version 4.3, le bon pilote vboxmouse doit être chargé et associé à `/dev/mouse` ou `/dev/psaux` ; dans le serveur X.Org 1.3 ou supérieur, un pilote de souris PS/2 doit être chargé et le bon pilote vboxmouse doit être associé à `/dev/vboxguest`.  
Le pilote graphique invité de VirtualBox peut utiliser n'importe quelle configuration graphique pour laquelle la résolution rentre dans la mémoire graphique affectée à la machine virtuelle (moins une petite quantité utilisée par le pilote invité) comme décrit au chapitre [3.5 Paramètres d'affichage.](#mark3.5) Le pilote offrira une gamme de nœuds standards allant au moins jusqu'à la résolution invité par défaut pour tous les écrans invités. Dans le serveur X.Org et supérieur, le mode par défaut peut être modifié en définissant la propriété de sortie VBOX_MODE sur `"<width>x<height>"` pour tout écran invité. Quand VBoxClient et les pilotes du noyau sont actifs, cela se fait automatiquement quand l'hôte demande une modification du mode. Le pilote des anciennes versions ne peut recevoir de nouveaux modes qu'en demandant à l'hôte les requêtes à intervalles réguliers.  
Avec les serveurs X pre-1.3, vous pouvez également ajouter vos propres modes dans le fichier de configuration du serveur X. Vous devez simplement les ajouter à la liste des "Modes" de la sous-section "Display" de la section "Screen". Par exemple, la section affichée ici a un mode de résolution personnalisé de 2048x800 :  

`Section "Screen"`  
`Identifier "Default Screen"`  
`Device "VirtualBox graphics card"`  
`Monitor "Generic Monitor"`  
`DefaultDepth 24`  
`SubSection "Display"`  
`Depth 24`  
`Modes "2048x800" "800x600" "640x480"`  
`EndSubSection`  
`EndSection`  

[Retour à la table des matières](#Table des matières)

# 9.5 Montage de processeur à chaud<a id="mark9.5"></a>

Quand des machines virtuelles fonctionnent sur des systèmes d'exploitation serveurs modernes, VirtualBox supporte le montage à chaud de processeur.  
Le support du montage de processeur à chaud a été introduit avec VirtualBox 3.2.  
Alors que, sur un ordinateur physique, cela voudrait dire qu'un processeur peut être ajouté ou supprimé pendant que la machine fonctionne, VirtualBox supporte l'ajout et le retrait de processeurs virtuels pendant que la machine virtuelle est en fonction.  
Le montage à chaud de processeur ne fonctionne qu'avec les systèmes d'exploitation invités qui le supportent. Jusque-là, il ne s'applique qu'à Linux et Windows Server 2008 x64 édition Data Center. Windows ne supporte que l'ajout à chaud alors que Linux supporte l'ajout et le retrait à chaud, mais pour utiliser cette fonction avec plus de 8 processeurs, il faut un invité Linux 64 bits.  
Pour l'instant, le branchement à chaud d'un processeur exige d'utiliser l'interface en ligne de commandes VBoxManage. Tout d'abord, il faut activer le branchement à chaud pour une machine virtuelle :  

`VBoxManage modifyvm "nom VM" --cpuhotplug on`  

Ensuite, l'option `--cpus` spécifie le nombre maximum de processeurs que peut avoir la machine virtuelle :  

`VBoxManage modifyvm "nom VM" --cpus 8`  

Quand la VM est désactivée, vous pouvez ajouter et supprimer des processeurs virtuels avec les sous-commandes modifyvm `--plugcpu` et `--unplugcpu`, qui prend le nombre de processeurs virtuels en paramètre, comme ceci :  

`VBoxManage modifyvm "nom VM" --plugcpu 3`  
`VBoxManage modifyvm "nom VM" --unplugcpu 3`  

Remarquez que le processeur 0 ne peut jamais être supprimé.  
Pendant que la VM est en fonction, les processeurs peuvent être ajoutés avec les commandes  
`controlvm plugcpu/unplugcpu` :  

`VBoxManage controlvm "nom VM" plugcpu 3`  
`VBoxManage controlvm "nom VM" unplugcpu 3`  

Voir chapitre [8.8 VBoxManage modifyvm](#mark8.8) et chapitre [8.13 VBoxManage controlvm](#mark8.13) pour des détails.  
Avec des invités Linux, ce qui suit s'applique : Pour empêcher d'éjecter alors que le processeur est utilisé, il doit être éjecté de l'invité au préalable. Les suppléments invité pour Linux contiennent un service qui reçoit les événements de retrait à chaud et ils éjectent le processeur. De plus, après qu'un processeur a été ajouté à la VM, il n'est pas utilisé automatiquement par Linux.  
Le service des suppléments invité pour Linux s'en chargera s'il est installé. Sinon, vous pouvez démarrer un processeur avec la commande suivante :  

`echo 1 > /sys/devices/system/cpu/cpu<id>/online`  

[Retour à la table des matières](#Table des matières)

# 9.6 PCI passthrough<a id="mark9.6"></a>

Sur des hôtes Linux, avec un noyau assez récent (au moins la version 2.6.31), le passthrough de périphériques PCI expérimental est disponible. Le support expérimental pour le passthrough PCI a été introduit avec VirtualBox 4.1.  

Note: Le module PCI passthrough est inclu comme un paquet d'extension de VirtualBox, qui doit être installé séparément. Voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) pour plus d'informations.  

Cette fonction vous permettra essentiellement d'utiliser directement les périphériques PCI physiques de l'hôte sur l'invité même si l'hôte n'a pas de pilote pour ce périphérique particulier. Tant les cartes PCI normales que certaines cartes PCI express sont supportées. L'AGP et certaines cartes PCI Express ne sont pas supportées pour l'instant si elles s'appuient sur l'unité de programmation GART (Graphics Address Remapping Table) pour la gestion des textures vu qu'il fait plutôt des opérations non triviales avec l'association de pages qui s'interfacent avec IOMMU.  
Il se peut que cette limite soit surmontée dans les prochaines versions.  
Pour être totalement opérationnel, le support PCI passthrough de VirtualBox dépend d'une unité matérielle IOMMU qui n'est pas encore trop largement disponible. Si le périphérique utilise le bus mastering (à savoir qu'il fait sa propre DMA sur la mémoire de l'OS), une IOMMU est requise, sinon de telles transactions DMA peuvent écrire sur la mauvaise adresse physique de la mémoire car le moteur DMA du périphérique est  programmé pour utiliser un protocole spécifique au périphérique pour faire des transactions avec la mémoire. Les fonctions IOMMU comme traduction des unités correspondant à la mémoire physique accèdent aux requêtes du périphérique en utilisant la connaissance de l'adresse physique de la mémoire de l'invité via les règles de traduction d'adresse physique de l'hôte.  
La solution d'Intel pour IOMMU est vendue sous le nom "Intel Virtualization Technology for Directed I/O" (VT-d), et celle d'AMD s'appelle AMD-Vi. Merci donc de vérifier si le modèle de votre carte mère comporte la technologie adaptée. Même si votre matériel n'a pas d'IOMMU, certaines cartes PCI peuvent fonctionner (comme des adaptateurs série PCI), mais l'invité affichera un avertissement au démarrage et l'exécution de la VM s'achèvera si le pilote invité essaie d'activer le bus mastering.  
Très couramment, le BIOS ou l'OS hôte désactive par défaut l'IOMMU. Donc avant d'essayer de l'utiliser, merci de vous assurer que  

1. Votre carte mère a une unité IOMMU.  
2. Votre processeur supporte l'IOMMU.  
3. L'IOMMU est activé dans le BIOS.  
4. La VM doit fonctionner avec VT-x/AMD-V et la pagination nested doit être activée.  
5. Votre noyau Linux a été compilé avec le support IOMMU (y compris la réassociation du DMA, voir l'option de compilation CONFIG_DMAR). Le pilote PCI stub (CONFIG_PCI_STUB) est requis aussi.  
6. Votre noyau Linux reconnaît et utilise l'unité IOMMU (l'option (de démarrage intel_iommu=on pourrait être nécessaire). Cherchez DMAR et PCI-DMA dans le journal du démarrage.  

Une fois que vous êtes sûre que le noyau hôte supporte l'IOMMU, la prochaine étape est de sélectionner la carte PCI et de l'attacher à l'invité. Pour visualiser la liste des périphériques PCI disponibles, utilisez la commande lspci. La sortie ressemblera à ceci :  

`01:00.0 VGA compatible controller: ATI Technologies Inc Cedar PRO [Radeon HD 5450]`  
`01:00.1 Audio device: ATI Technologies Inc Manhattan HDMI Audio [Mobility Radeon HD 5000 Series]`  
`02:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit`  
`Ethernet controller (rev 03)`  
`03:00.0 SATA controller: JMicron Technology Corp. JMB362/JMB363 Serial ATA Controller (rev 03)`  
`03:00.1 IDE interface: JMicron Technology Corp. JMB362/JMB363 Serial ATA Controller (rev 03)`  
`06:00.0 VGA compatible controller: nVidia Corporation G86 [GeForce 8500 GT] (rev a1)`  

La première colonne est une adresse PCI (au format bus:device.function). Cette adresse pourrait être utilisée pour identifier les périphériques pour aller plus loin. Par exemple, pour attacher un contrôleur réseau PCI du système listé ci-dessus, au second bus PCI de l'invité, en périphériqz 5, la fonction 0, utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --pciattach 02:00.0@01:05.0`  

Pour détacher ce même périphérique, utilisez  

`VBoxManage modifyvm "nom VM" --pcidetach 02:00.0`  

Merci de remarquer que l'hôte et l'invité pourraient librement affecter une autre adresse PCI à la carte attachée à l'exécution, donc ces adresses ne s'appliquent qu'à l'adresse de la carte au moment d'être attaché (hôte), et lors de l'initialisation du PCI de BIOS (invité).  
Si la machine virtuelle a un périphérique PCI attaché, certaines limitations s'appliquent :  

1. Seules les cartes PCI aux interruptions non partagées (telles que l'utilisation de MSI sur l'hôte) sont supportées pour le moment.  
2. On ne peut pas sauvegarder/restaurer de façon fiable l'état de l'invité (car l'état interne de la carte PCI ne pourrait pas être récupéré).  
3. La téléportation (migration en direct) ne fonctionne pas (pour la même raison).  
4. Aucune couche d'affectation de mémoire physique. L'hôte préaffectera toute la RAM nécessaire au démarrage de la VM (vu que nous ne pouvons pas relier les accès physiques au matériel à la mémoire physique).  

[Retour à la table des matières](#Table des matières)

# 9.7 Webcam passthrough<a id="mark9.7"></a>

# 9.7.1 Utilisation d'une webcam hôte dans l'invité<a id="mark9.7.1"></a>

VirtualBox 4.3 inclut une fonction expérimentale permettant à un invité d'utiliser une webcam hôte. Ceci complète le support général du passthrough USB qui était la façon dont on utilisait généralement les webcams dans les anciennes versions. Le support de webcam passthrough peut gérer théoriquement des sources graphiques non USB, mais cela n'a pas été testé du tout.  

Note: Le module webcam passthrough fait partie du pack d'extension Oracle VM VirtualBox que vous devez installer séparément. Voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) pour plus d'informations.  

Vous pouvez connecter la webcam de l'hôte à la VM en utilisant le menu "Périphériques" dans la barre de menus de la VM. Le menu "Webcams" contient une liste des périphériques d'entrée vidéo disponibles sur l'hôte. Un clic sur le nom d'une webcam connecte ou déconnecte le périphérique de l'hôte correspondant.  
Il faut utiliser l'outil en ligne de commandes VBoxManage pour activer le passthrough webcam.  
Merci de voir les sections ci-dessous spécifiques aux hôtes pour des détails complémentaires. Les commandes suivantes sont disponibles :  

* Obtenir une liste des webcams hôtes (ou d'autres périphériques d'entrée vidéos):  

`VBoxManage list webcams`  

Le format de sortie est :  

alias "nom lisible par l'utilisateur"chemin sur l'hôte ou identifiant  

L'alias est utilisable en tant que raccourci dans d'autres commandes. L'alias `'.0'` signifie le périphérique d'entrée vidéo par défaut sur l'hôte, `'.1', '.2`', etc renvoient au premier, au deuxième, etc. périphérique d'entrée vidéo. L'ordre des périphériques dépend de l'hôte.  
* Connecter une webcam à une VM en fonction :  

`VBoxManage controlvm "nom VM" webcam attach [chemin_hôte_|alias [paramètres]]`  

Ceci connectera une webcam à l'invité. Le paramètre settings est une chaîne  
`Paramètre1=Valer1;Paramètre2=Valeur2`, qui permet de configurer la webcam émulée.  
Les paramètres suivants sont supportés :  

	*	 MaxFramerate La vitesse maximale d'envoi des plans graphiques à l'invité. Une vitesse élevée demande beaucoup de puissance de processeur. Donc, parfois, il vaut mieux mettre une limite plus basse. Par défaut, il n'y a aucune limite et l'invité peut utiliser tous les ratios graphiques supportés par la webcam de l'hôte.  
	*	 MaxPayloadTransferSize Combien d'octets à la fois peut envoyer la webcam à l'invité. La valeur par défaut est de 3060 octets, ce qu'utilisent certaines webcams. Des valeurs supérieures réduisent légèrement la charge du processeur si l'invité peut utiliser des tampons plus gros. Cependant, il se pourrait qu'un MaxPayloadTransferSize ne soit pas supporté par certains invités.  

* Déconnecter une webcam d'une VM en fonction :  

`VBoxManage controlvm "nom VM" webcam detach [chemin_hôte|alias]`  

* Lister les webcams connectées à une VM en fonction :  

`VBoxManage controlvm "nom VM" webcam list`  

La sortie comprend le chemin ou l'alias utilisés dans la commande `'webcam attach'` pour chaque webcam connectée  

[Retour à la table des matières](#Table des matières)

# 9.7.2 Hôtes Windows<a id="mark9.7.2"></a>

Quand on déconnecte la webcam de l'hôte, la webcam émulée est automatiquement déconnectée de l'invité.

[Retour à la table des matières](#Table des matières)

# 9.7.3 Hôtes Mac OS X<a id="mark9.7.3"></a>

OS X version 10.7 ou supérieur est requis.  
Quand on déconnecte la webcam de l'hôte, la webcam émulée reste connectée à l'invité et vous devez la déconnecter à la main en utilisant la commande VBoxManage controlvm "nom
`VM" webcam detach` ....  

[Retour à la table des matières](#Table des matières)

# 9.7.4 Hôtes Linux<a id="mark9.7.4"></a>

Quand on déconnecte la webcam de l'hôte, la webcam émulée n'est automatiquement déconnectée de de l'invité que si la webcam est en train de transmettre de l'image. Si la webcam est inactive, vous devrez la déconnecter à la main en utilisant la commande VBoxManage controlvm
`"nom VM" webcam detach` ....  
Les aliases .0 et .1 sont associés à `/dev/video0` l'alias .2 est associé à `/dev/video1` et ainsi de suite.

[Retour à la table des matières](#Table des matières)

# 9.8 Configuration d'affichage avancée<a id="mark9.8"></a>

# 9.8.1 Résolutions VESA personnalisées<a id="mark9.8.1"></a>

Outre les résolutions VESA standards, le BIOS VESA de VirtualBox vous permet d'ajouter jusqu'à 16 modes graphiques personnalisés qui seront signalés au système d'exploitation invité. Quand on utilise des invités Windows avec les suppléments invité de VirtualBox, un pilote graphique personnalisé sera utilisé à la place de la solution VESA de repli, donc ces informations ne s'appliquent pas.  
Vous pouvez configurer des modes graphiques supplémentaires pour chaque VM en utilisant la fonction de données supplémentaires. La clé des données supplémentaires s'appelle `CustomVideoMode<x>` avec x étant un numéro de 1 à 16. Merci de remarquer que les modes seront lus de 1 au numéro suivant non défini ou jusqu'à 16. L'exemple suivant ajoute un mode graphique correspondant à la résolution d'affichage native de nombreux ordinateurs notebook :  

`VBoxManage setextradata "nom VM" "CustomVideoMode1" "1400x1050x16"`  

Les IDs du mode VESA pour les modes graphiques personnalisés commencent à 0x160. Afin d'utiliser le mode graphique personnalisé ci-dessus, vous devez donner à Linux la ligne de commande suivante :  

`vga = 0x200 | 0x160`  
`vga = 864`  

Pour les systèmes d'exploitation ayant les suppléments invité, vous pouvez définir un mode graphique personnalisé en utilisant la fonction d'astuce du mode graphique.  

[Retour à la table des matières](#Table des matières)

# 9.8.2 Configuration de la résolution maximum des invités quand on utilise l'interface graphique<a id="mark9.8.2"></a>

Quand on démarre des systèmes invités ayant les suppléments invité installés en utilisant l'interface graphique (l'application normale de VirtualBox), ils ne seront pas autorisés à utiliser des résolutions d'écran supérieures à la taille de l'écran de l'hôte sauf si l'utilisateur les redimensionne à la main en utilisant la fenêtre, en basculant en mode plein écran ou transparent ou en envoyant une astuce de mode graphique utilisant VBoxManage. Ce comportement est celui que la plupart des utilisateurs voudront mais si vous avez d'autres besoins, il est possible de le modifier en exécutant une des commandes suivantes sur la ligne de commandes :  

`VBoxManage setextradata global GUI/MaxGuestResolution any`  

supprimera toutes les limites des résolutions de l'invité.  

`VBoxManage setextradata global GUI/MaxGuestResolution >width,height<`  

spécifie à la main une résolution maximum.  

`VBoxManage setextradata global GUI/MaxGuestResolution auto`  

restaure les paramètres par défaut. Remarquez que ces paramètres s'appliquent globalement à tous les systèmes invités, pas seulement à une seule machine.  

[Retour à la table des matières](#Table des matières)

# 9.9 Configuration avancée du stockage<a id="mark9.9"></a>

# 9.9.1 Utiliser un disque dur brut de l'hôte à partir de l'invité<a id="mark9.9.1"></a>

À partir de la version 1.4, plutôt que d'utiliser des images de disques virtuels (comme décrit en détail au chapitre [5 Le stockage virtuel)](#mark5) VirtualBox peut aussi présenter aux machines virtuelles soit des disques durs entiers, soit des partitions sélectionnées, comme des disques virtuels  .
Avec VirtualBox, ce typed'accès s'appelle "l'accès au disque dur brut" ; il permet à un système d'exploitation invité d'accéder à son disque dur virtuel sans passer par le système de fichiers de l'OS hôte. La différence de performance finale entre les fichiers images et les disques bruts varie beaucoup selon l'overhead du système de fichiers hôte et le dynamisme de la croissance des images, et enfin des stratégies de mise en cache de l'OS hôte. La mise en cache concerne aussi indirectement d'autres aspects tels que le comportement en cas d'échec, à savoir si le disque dur contient toutes les données écrites avant un OS hôte ne plante. Consultez la documentation de votre OS hôte pour les détails à ce sujet  .

Avertissement: L'accès au disque dur brut est réservé aux utilisateurs experts. Une utilisation incorrecte ou d'une configuration obsolète peut provoquer une perte totale des données du disque physique. Surtout, n'essayez pas de démarrer la partition avec le système d'exploitation hôte actuellement en fonction dans un invité. Cela entraînera une grave corruption de données.  

L'accès au disque dur brut – tant entiers qu'aux partitions individuelles – est implémenté comme support du format image VMDK. Il s'en suit que vous devrez créer un fichier image VMDK qui définit l'endroit où les données seront stockées. Après avoir créé une image VMDK spéciale, vous pouvez l'utiliser comme un disque virtuel normal. Par exemple, vous pouvez utiliser le gestionnaire VirtualBox (chapitre [5.3 Le gestionnaire de médias virtuels)](#mark5.3) ou VBoxManage pour affecter l'image à une machine virtuelle.  

[Retour à la table des matières](#Table des matières)

# 9.9.1.1 L'accès à un disque dur physique<a id="mark9.9.1.1"></a>

Si cette variante est la plus simple à paramétrer, vous devez avoir à l'esprit que cela donnera au système d'exploitation invité un accès total et direct à tout un disque dur. Si votre système d'exploitation hôte démarre aussi sur ce disque, merci de faire particulièrement attention à ne pas accéder à la partition avec l'invité. Côté positif, le disque physique peut être repartitionné de façon arbitraire sans devoir recréer le fichier image qui donne accès au disque brut.  
Pour créer une image qui représente un disque dur physique entier (qui ne contiendra pas de vraies données physiques vu qu'elles seront stockées sur le disque physique), sur un hôte Linux, utilisez la commande  

`VBoxManage internalcommands createrawvmdk -filename /chemin/vers/fichier.vmdk`  
`-rawdisk /dev/sda`  

Ceci crée l'image `/chemin/vers/fichier.vmdk` (il doit être absolu), et toutes les données seront lues et écrites à partir de `/dev/sda`.  
Sur un hôte Windows, plutôt que de spécifier le périphérique comme ci-dessus, utilisez par exemple` \.\PhysicalDrive0`. Sur un hôte Mac OS X, utilisez plutôt, par exemple, `/dev/disk1`.  
Remarquez que sur OS X, vous ne pouvez avoir d'accès à tout un disque que si aucun volume n'est monté à partir de là.  
La création de l'image exige un accès en lecture/écriture au périphérique donné. L'accès en lecture/écriture sera aussi nécessaire plus tard lors de l'utilisation de l'image d'une machine virtuelle. Sur certaines plateformes hôtes (comme Windows Vista et supérieur), l'accès au disque brut peut être restreint et non autorisé par l'OS hôte dans certaines situations.  
Comme avec les images de disque normales, ceci n'attache pas automatiquement l'image nouvellement créée à une machine virtuelle. Ceci peut se faire avec, par exemple,  
`VBoxManage storageattach WindowsXP --storagectl "IDE Controller"`  
`--port 0 --device 0 --type hdd --medium /path/to/file.vmdk`  

Quand cela se fait, la machine virtuelle démarrera depuis le disque physique spécifié.  

[Retour à la table des matières](#Table des matières)

# 9.9.1.2 Accès aux partitions individuelles d'un disque dur physique<a id="mark9.9.1.2"></a>

Ce "support de partition brut" est très semblable à l'accès au "disque dur complet" décrit ci- dessus. Cependant, dans ce cas, toutes les informations de partitionnement seront stockées dans l'image VMDK, donc vous pouvez par exemple installer un autre chargeur d'amorçage dans le disque dur virtuel sans toucher les informations de partitionnement de l'hôte. Si l'invité pourra avoir toutes les partitions existantes sur le disque physique, l'accès sera filtré de sorte que la lecture des partitions pour lesquelles aucun accès n'est autorisé ne contiendra que des zéros et que toutes les écritures dessus soient ignorées.  
Pour créer une image spéciale pour le support d'une partition brute (qui contiendra une petite quantité de données, comme déjà indiqué), sur un hôte Linux, utilisez la commande  

`VBoxManage internalcommands createrawvmdk -filename /chemin/vers/fichier.vmdk`  
`-rawdisk /dev/sda -partitions 1,5`  

Comme vous pouvez le voir, la commande est identique à celle pour l'accès "au disque dur brut", sauf le paramètre supplémentaire -partitions. Cet exemple créerait l'image  
`/chemin/vers/fichier.vmdk` (qui, de nouveau, doit être absolu), et les partitions 1 et 5 de `/dev/sda` deviendraient accessibles à l'invité.  
VirtualBox a la même numérotation de partitions que votre hôte Linux. Il s'en suit que les numéros donnés dans l'exemple ci-dessus se référeraient respectivement à la première partition primaire et au premier lecteur logique de la partition étendue.  
Sur un hôte Windows, au lieu de spécifier le périphérique comme ci-dessus, utilisez par exemple `\.\PhysicalDrive0`. Sur un hôte Mac OS X, utilisez plutôt par exemple `/dev/disk1`.  
Remarquez que sur OS X, vous ne pouvez utiliser que des partitions non montées (éjectez d'abord les volumes concernés). Les numéros de partition sont les mêmes sur les hôtes Linux, Windows et Mac OS X  .
Vous pouvez prendre les numéros dans la liste des partitions dans la sortie de  

`VBoxManage internalcommands listpartitions -rawdisk /dev/sda`  

La sortie liste les types et les tailles des partitions pour donner à l'utilisateur assez d'informations pour identifier les partitions nécessaires à l'invité.  
Les images donnant accès aux partitions individuelles sont spécifiques à un paramétrage de disque particulier à un hôte. Vous ne pouvez pas transposer ces images à un autre hôte ; et à chaque fois que le partitionnement de l'hôte change, l'image doit être recréée.  
La création d'une image exige l'accès en écriture sur le périphérique donné. L'accès en lecture/écriture sera également nécessaire plus tard pour utiliser l'image à partir d'une machine virtuelle. Si ce n'est pas faisable, il existe une variante spéciale de l'accès à une partition brute (disponible aujourd'hui uniquement sur les hôtes Linux) qui évite de devoir donner à l'utilisateur actuel l'accès à tout le disque. Pour faire une telle image, utilisez  

`VBoxManage internalcommands createrawvmdk -filename /chemin/vers/fichier.vmdk`  
`-rawdisk /dev/sda -partitions 1,5 -relative`  

Utilisée depuis une machine virtuelle, l'image ne se réfèrera pas à tout le disque mais seulement aux partitions individuelles (dans l'exemple `/dev/sda1` et `/dev/sda5)`. Par conséquent, l'accès en lecture/écriture n'est requis que pour les partitions concernées, pas pour tout le disque.  
Mais lors de la création, un accès en lecture seule à tout le disque est nécessaire pour avoir les informations de partitionnement.  
Dans certaines configurations, il peut être nécessaire de modifier le code du MBR de l'image créée, par exemple pour remplacer le chargeur de démarrage Linux utilisé sur l'hôte par un autre chargeur de démarrage. Cela permet, par exemple, à l'invité, de démarrer directement sur Windows, alors que l'hôte démarre sur Linux sur le "même" disque. Pour obtenir cela, le paramètre `-mbr` vous est offert. Il spécifie un nom de fichier à partir duquel il faut prendre le code du MBR. La table des partitions n'est pas modifiée, donc on peut utiliser un fichier MBR d'un système ayant un partitionnement totalement différent. Un exemple est  

`VBoxManage internalcommands createrawvmdk -filename /chemin/vers/fichier.vmdk`  
`-rawdisk /dev/sda -partitions 1,5 -mbr winxp.mbr`  

Le MBR modifié sera stocké dans l'image, pas sur le disque hôte.  
L'image créée peut être attachée à un contrôleur de stockage dans une configuration de VM, comme d'habitude.  

[Retour à la table des matières](#Table des matières)

# 9.9.2 Configuration des vendor product data (VPD) du disque dur<a id="mark9.9.2"></a>

VirtualBox signale les données liées au fabricant du produit de ses disques durs virtuels, consistant dans le numéro de série du disque dur, le numéro de révision du firmware et du modèle.  
Vous pouvez modifier ces données en utilisant les commandes suivantes :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/SerialNumber" "serial"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/FirmwareRevision" "firmware"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/ModelNumber" "model"`  

Le numéro de série est une chaîne alphanumérique de 20 octets, la Révision du firmware est une chaîne alphanumérique de 8 octets et le numéro de modèle est une chaîne alphanumérique de 40 octets. Au lieu de "Port0" (qui renvoie au premier port), spécifiez le port SATA désiré du disque dur.  
Les commandes ci-dessus s'appliquent aux machines virtuelles ayant un contrôleur AHCI (SATA). Les commandes pour les machines virtuelles ayant un contrôleur IDE sont :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/piix3ide/0/Config/PrimaryMaster/SerialNumber" "serial"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/piix3ide/0/Config/PrimaryMaster/FirmwareRevision" "firmware"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/piix3ide/0/Config/PrimaryMaster/ModelNumber" "model"`  

Pour les disques durs, il est aussi possible de marquer le lecteur comme ayant un média non rotationnel avec :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/NonRotational" "1"`  

Trois paramètres supplémentaires sont nécessaires pour que les lecteurs CD/DVD signalent les données produit du fabricant :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/ATAPIVendorId" "vendor"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/ATAPIProductId" "product"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/Config/Port0/ATAPIRevision" "revision"`  

L'id du fabricant est une chaîne alphanumérique de 8 octets, l'id du produit est une chaîne alphanumérique de 16 octets, la révision est une chaîne alphanumérique de 4 octets. À la place de "Port0" (qui renvoie au premier port), spécifiez le port du disque dur SATA désiré.  

[Retour à la table des matières](#Table des matières)

# 9.9.3 Accès à des cibles iSCSI via le réseau interne<a id="mark9.9.3"></a>

En fonctionnalité expérimentale, VirtualBox permet d'accéder à une cible iSCSI d'une machine virtuelle en fonction configurée pour utiliser le mode réseau interne. Merci de voir le chapitre [5.10 Serveurs iSCSI](#mark5.10) ; chapitre [6.6 Réseau interne](#mark6.6) ; et chapitre [8.18 VBoxManage storageattach](#mark8.18) pour avoir des informations supplémentaires.  

La pile IP d'accès au réseau interne doit être configurée dans la machine virtuelle qui accède à la cible iSCSI. Vous devez choisir une IP statique libre et une adresse MAC non utilisée par d'autres machines virtuelles. Dans l'exemple ci-dessous, adaptez le nom de la machine virtuelle, l'adresse MAC, la configuration IP et le nom du réseau interne ("MyIntNet") selon vos besoins.  
Les huit commandes suivantes doivent être d'abord lancées :  

`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/Trusted 1`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/Config/MAC 08:00:27:01:02:0f`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/Config/IP 10.0.9.1`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/Config/Netmask 255.255.255.0`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/LUN#0/Driver IntNet`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/LUN#0/Config/Network MyIntNet`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/LUN#0/Config/TrunkType 2`  
`VBoxManage setextradata "nom VM" VBoxInternal/Devices/IntNetIP/0/LUN#0/Config/IsService 1`  

Enfin, le disque iSCSI doit être attachée avec l'option `--intnet` pour dire à l'initiateur iSCSI d'utiliser le réseau interne :  

`VBoxManage storageattach ... --medium iscsi`  
`--server 10.0.9.30 --target iqn.2008-12.com.sun:sampletarget --intnet`  

Par rapport à une configuration iSCSI "ordinaire", l'adresse IP de la cible doit être spécifiée comme un adaptateur IP numérique, vu qu'il n'y a pas de résolveur DNS pour le réseau interne.  
La machine virtuelle ayant la cible iSCSI devrait être démarrée avant que la VM qui l'utilise ne soit allumée. Si vous démarrez une machine virtuelle qui utilise un disque iSCSI sans que la cible iSCSI ne soit allumée, elle peut mettre jusqu'à 200 secondes avant de détecter cette situation.  
La VM ne pourra pas s'allumer.  

[Retour à la table des matières](#Table des matières)

# 9.10 Commandes de base pour utiliser les ports série<a id="mark9.10"></a>

À partir de la version 1.4, VirtualBox fournissait le support les ports série virtuels qui, pour l'instant, était plutôt compliqué à paramétrer avec la séquence des commandes `VBoxManage setextradata`. Depuis la version 1.5, cette façon de paramétrer les ports série n'est plus nécessaire et obsolète. Pour paramétrer les ports série virtuels, utilisez les méthodes décrites maintenant au chapitre [3.9 Ports série.](#mark3.9)  

Note: Pour être rétro-compatible, les anciennes commandes `setextradata`, dont la description ci-dessous est issue de l'ancienne version du guide, restent valables côté de la nouvelle façon de configurer les ports série. Il s'en suit que si la première méthode de configuration des ports série ne marche pas, assurez-vous que la VM en question ne contient pas d'anciennes données de configuration actives telles que écrites ci-dssous.  

L'ancienne séquence de configuration d'un port série utilisait les 6 commandes suivantes :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/Config/IRQ" 4`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/Config/IOBase" 0x3f8`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/LUN#0/Driver" Char`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/LUN#0/AttachedDriver/Driver" NamedPipe`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/LUN#0/AttachedDriver/Config/Location" "\.\pipe\vboxCOM1"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/serial/0/LUN#0/AttachedDriver/Config/IsServer" 1`  

Cela définit un port série dans l'invité avec les paramètres par défaut de COM1 (IRQ 4, adresse E/S 0x3f8) et le paramètre Location suppose que cette configuration est utilisée sur un hôte Windows, car on utilise la syntaxe de tuyau (pipe) nommé Windows. Gardez à l'esprit que sur les hôtes Windows, un tuyau nommé doit toujours commencer par `\.\pipe\`. Sur Linux, s'appliquent les mêmes paramètres de configuration, sauf que vous pouvez choisir le nom du chemin de Location plus librement. Les sockets du domaine local se mettent n'importe où, pourvu que l'utilisateur qui exécute VirtualBox ait le droit de créer un nouveau fichier dans le répertoire. La dernière commande ci-dessus définit que VirtualBox agit comme un serveur, c'est-à-dire qu'il crée lui-même le tuyau nommé au lieu de se connecter à un autre qui existe déjà.  

[Retour à la table des matières](#Table des matières)

# 9.11 Peaufiner le moteur NAT de VirtualBox<a id="mark9.11"></a>

# 9.11.1 Configurer l'adresse d'une interface réseau NAT<a id="mark9.11.1"></a>

En mode NAT, on affecte à l'interface réseau de l'invité une plage IPv4 10.0.x.0/24 par défaut, où x correspond à l'instance d'une interface NAT +2. Donc, x vaut 2 quand il n'y a qu'une instance NAT d'active. Dans ce cas, l'invité se voit affecter l'adresse 10.0.2.15, la passerelle est définie sur 10.0.2.2 et on peut trouver le serveur de noms sur 10.0.2.3.  
Si, pour une raison quelconque, vous devez modifier le réseau NAT, ce qui se fait avec la commande suivante :  

`VBoxManage modifyvm "nom VM" --natnet1 "192.168/16"`  

Cette commande réserverait les adresses réseaux de 192.168.0.0 à 192.168.254.254 à la première instance réseau NAT de "nom VM". On affecterait à l'invité l'IP 192.168.0.15 et on pourrait trouver la passerelle par défaut sur 192.168.0.2.  

[Retour à la table des matières](#Table des matières)

# 9.11.2 Configurer le serveur d'amorçage (prochain serveur) d'une interface réseau NAT<a id="mark9.11.2"></a>

Pour un amorçage réseau en mode NAT, VirtualBox utilise par défaut le serveur TFTP inclu, qui se trouve à l'adresse 10.0.2.4. Ce comportement par défaut devrait très bien fonctionner pour les scénario de démarrage à distance courants. Cependant, il est possible de modifier l'IP du serveur d'amorçage et l'emplacement de l'image de démarrage avec les commandes suivantes :  

`VBoxManage modifyvm "nom VM" --nattftpserver1 10.0.2.2`  
`VBoxManage modifyvm "nom VM" --nattftpfile1 /srv/tftp/boot/MyPXEBoot.pxe`  

[Retour à la table des matières](#Table des matières)

# 9.11.3 Peaufiner les tampons TCP/IP pour NAT<a id="mark9.11.3"></a>

La performance de la pile NAT de VirtualBox est souvent déterminée par son interaction avec la pile TCP/IP de l'hôte et la taille de plusieurs tampons (SO_RCVBUF et SO_SNDBUF). Pour certaines configurations, les utilisateurs pourraient vouloir ajuster la taille des tampons pour une meilleure performance. Vous pouvez faire cela en utilisant les commandes suivantes (les valeurs s'expriment en kilo-octets peuvent varier de 8 à 1024) :  

`VBoxManage modifyvm "nom VM" --natsettings1 16000,128,128,0,0`  

Cet exemple illustre le peaufinage des paramètres NAT. Le premier paramètre est le MTU, puis la taille du tampon d'envoi du socket et la taille du tampon de réception du socket, la taille initiale de la fenêtre d'envoi TCP, et enfin, la taille initiale de la fenêtre de réception TCP.  
Remarquez que la spécification de zéro revient à se rabattre sur la valeur par défaut.  
Chacun de ces tampons a une taille par défaut de 64Ko et un MTU par défaut de 1500.  

[Retour à la table des matières](#Table des matières)

# 9.11.4 Associer des sockets à une interface spécifique<a id="mark9.11.4"></a>

Par défaut, le moteur NAT de VirtualBox dirigera les paquets TCP/IP via l'interface par défaut affectée par la pile TCP/IP de l'hôte. (La raison technique en est que le moteur NAT utilise des sockets pour la communication.) Si, pour une raison quelconque, vous voulez changer ce comportement, vous pouvez dire au moteur NAT d'associer à une interface en particulier une adresse IP. Utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --natbindip1 "10.45.0.2"`  

Après cela, le trafic sortant sera envoyé par interface ayant l'adresse IP 10.45.0.2. Merci de vous assurer que cette interface est active et en fonction avant cette affectation.  

[Retour à la table des matières](#Table des matières)

# 9.11.5 Activer le proxy DNS en mode NAT<a id="mark9.11.5"></a>

Le moteur NAT offre par défaut les mêmes serveurs DNS à l'invité que ceux configurés sur l'hôte.  
Dans certains scénario il peut être souhaitable de cacher les IPs du serveur DNS à l'invité, par exemple quand ces informations peuvent changer sur l'hôte après l'expiration des deux DHCP. Dans ce cas, vous pouvez dire au moteur NAT d'agir comme un proxy DNS en utilisant la commande suivante :

`VBoxManage modifyvm "nom VM" --natdnsproxy1 on`  

[Retour à la table des matières](#Table des matières)

# 9.11.6 Utiliser le résolveur de l'hôte comme proxy DNS en mode NAT<a id="mark9.11.6"></a>

Pour résoudre les noms de réseau, le serveur DHCP du moteur NAT offre une liste de serveurs DNS enregistrés de l'hôte. Si pour une raison quelconque, vous devez cacher cette liste de serveurs DNS et utiliser les paramètres du serveur DNS de l'hôte, forçant ainsi le moteur NAT de VirtualBox à intercepter les requêtes DNS et à les rediriger sur le résolveur de l'hôte, utilisez la commande suivante :  

`VBoxManage modifyvm "nom VM" --natdnshostresolver1 on`  

Remarquez que ce paramètre est identique au mode proxy DNS, cependant alors que le mode proxy ne redirige que les requêtes DNS sur les serveurs appropriés, le mode résolveur interprètera les requêtes DNS et utilisera l'API DNS de l'hôte pour prendre les informations et les retourner à l'invité.

[Retour à la table des matières](#Table des matières)

# 9.11.6.1 Résolution de noms d'hôte définie par l'utilisateur<a id="mark9.11.6.1"></a>

Dans certains cas, il pourrait être utile d'intercepter le mécanisme de résolution de noms, en fournissant une adresse IP définie par l'utilisateur pour une requête DNS en particulier. Le mécanisme d'interception permet à l'utilisateur d'associer non seulement un hôte, mais aussi des domaines et même des conventions de nommage plus complexes si nécessaire.  
La commande suivante définit la règle d'association d'un nom et d'une IP spécifiée :  

`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/{pcnet,e1000}/0/LUN#0/Config/HostResolverMappings/ \`  
`<nom uniq de la règle d'interception>/HostIP" <IPv4>`  
`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/{pcnet,e1000}/0/LUN#0/Config/HostResolverMappings/ \`  
`<nom uniq de la règle d'interception>/HostName" <nom de vhôte>`  

La commande suivante définit une règle pour associer un échantillon de nom à une IP spécifiée :  

`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/{pcnet,e1000}/0/LUN#0/Config/HostResolverMappings/ \`  
`<nom uniq de la règle d'interception>/HostIP" <IPv4>`  
`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/{pcnet,e1000}/0/LUN#0/Config/HostResolverMappings/ \`  
`<uniq name of interception rule>/HostNamePattern" <échantillonhôte>`  

L'échantillon hôte peut inclure `"|", "?" et "*"`.  
Cette exemple démontre la façon de demander au mécanisme du résolveur de l'hôte de résoudre tout le domaine et probablement des mirroirs du site `www.blocked-site.info avec l'IP 127.0.0.1`:  

`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/e1000/0/LUN#0/Config/HostResolverMappings/ \`  
`all_blocked_site/HostIP" 127.0.0.1`  
`VBoxManage setextradata "nom VM" \`  
`"VBoxInternal/Devices/e1000/0/LUN#0/Config/HostResolverMappings/ \`  
`all_blocked_site/HostNamePattern" "*.blocked-site.*|*.fb.org"`  

Note: Le mécanisme de résolution de l'hôte devrait être activé pour utiliser les règles d'association définies par l'utilisateur (merci de voir le chapitre [9.11.6 Utiliser le résolveur de l'hôte comme proxy DNS en mode NAT](#mark9.11.6) pour plus de détails).  

[Retour à la table des matières](#Table des matières)

# 9.11.7 Configurer des aliases pour le moteur NAT<a id="mark9.11.7"></a>

Par défaut, le cœur de NAT utilise des alias et des ports aléa toires quand il génère un alias pour la connexion. Cela fonctionne bien pour la plupart des protocoles comme SSH, FTP et ainsi de suite. Mais certains protocoles pourraient nécessiter un comportement plus transparent ou dépendre du vrai numéro de port pour envoyer un paquet. Il est possible de modifier le mode NAT avec l'interface VBoxManage avec les commandes suivantes :  

`VBoxManage modifyvm "nom VM" --nataliasmode1 proxyonly`  

et  

`VBoxManage modifyvm "Linux Guest" --nataliasmode1 sameports`  

Le premier exemple désactive les alias et passe NAT en mode transparent, le deuxième exemple renforce la préservation des numéros des ports. Ces modes peuvent se combiner si nécessaire.  

[Retour à la table des matières](#Table des matières)

# 9.12 Configurer les informations DMI du BIOS<a id="mark9.12"></a>

Vous pouvez changer les données DMI que VirtualBox fournit aux invités pour une VM spécifique.  
Utilisez les commandes suivantes pour configurer les informations DMI du BIOS :  

[Retour à la table des matières](#Table des matières)

# 9.12.1 Informations DMI du BIOS (type 0)<a id="mark9.12.1"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSVendor" "fabricant BIOS"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSVersion" "Version BIOS"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSReleaseDate" "date publication BIOS"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSReleaseMajor" 1`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSReleaseMinor" 2`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSFirmwareMajor" 3`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBIOSFirmwareMinor" 4`  

[Retour à la table des matières](#Table des matières)

# 9.12.2 Informations système DMI (type 1)<a id="mark9.12.2"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemVendor" "Fabricant Système"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemProduct" "Produit système"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemVersion" "Version système"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemSerial" "Numéro de série système"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemSKU" "System SKU"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemFamily" "Famille système"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemUuid"`  
`"9852bf98-b83c-49db-a8de-182c42c7226b"`  

[Retour à la table des matières](#Table des matières)

# 9.12.3 Informations carte mère DMI (type 2)<a id="mark9.12.3"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardVendor" "Fabricant carte"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardProduct" "Produit carte"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardVersion" "Version carte mère"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardSerial" "Série carte"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardAssetTag" "Tag Board"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardLocInChass" "Emplacement carte"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiBoardBoardType" 10`  

[Retour à la table des matières](#Table des matières)

# 9.12.4 Boîtier système DMI ou chassis (type 3)<a id="mark9.12.4"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiChassisVendor" "Fabricant Chassis"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiChassisType" 3`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiChassisVersion" "Version Chassis"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiChassisSerial" "Série Chassis"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiChassisAssetTag" "Tag Chassis"`  

[Retour à la table des matières](#Table des matières)

# 9.12.5 Informations DMI du processeur (type 4)<a id="mark9.12.5"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiProcManufacturer" "GenuineIntel"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiProcVersion" "Pentium(R) III"`  

[Retour à la table des matières](#Table des matières)

# 9.12.6 Chaînes OEM DMI (type 11)<a id="mark9.12.6"></a>

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiOEMVBoxVer" "vboxVer_1.2.3"`  
`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiOEMVBoxRev" "vboxRev_12345"`  

Si une chaîne DMI n'est pas définie, la valeur par défaut de VirtualBox est utilisée. Pour définir une chaîne vide, utilisez `"<EMPTY>"`.  

Remarquez que dans la liste ci-dessus, tous les paramètres cités (DmiBIOSVendor, DmiBIOSVersion mais pas DmiBIOSReleaseMajor) sont censés être des chaînes. Si la chaîne est un nombre valide, le paramètre est traité comme un nombre et la VM refusera probablement de démarrer avec une erreur VERR_CFGM_NOT_STRING. Dans ce cas, utilisez `"string:<valeur>"`, par exemple,  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/pcbios/0/Config/DmiSystemSerial" "string:1234"`  

La modification de ces information peut \avérer nécessaire pour donner les informations DMI de l'hôte à l'invité afin d'empêcher Windows de demander une nouvelle clé du produit. Sur les hôtes Linux, vous pouvez obtenir les informations de BIOS DMI avec  

`dmidecode -t0`  

et les informations du système DMI avec  

`dmidecode -t1`  

[Retour à la table des matières](#Table des matières)

# 9.13 Configurer la table ACPI personnalisée<a id="mark9.13"></a>

VirtualBox peut être configuré pour présenter à l'invité une table ACPI personnalisée. Utilisez la commande suivante pour la configurer :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/acpi/0/Config/CustomTable" "/chemin/vers/table.bin"`  

La configuration d'une table ACPI personnalisée peut empêcher Windows Vista et Windows 7 de demander une nouvelle clé du produit. Sur les hôtes Linux, on peut lire une des tables de l'hôte dans `/sys/ﬁrmware/acpi/tables/`.  

[Retour à la table des matières](#Table des matières)

# 9.14 Peaufiner les horloges et la synchronisation du temps<a id="mark9.14"></a>

# 9.14.1 Configurer le time stamp counter (TSC) (horodateur) de l'invité pour refléter l'heure de l'exécution<a id="mark9.14.1"></a>

Par défaut, VirtualBox synchronise toutes les sources de l'heure dans une source d'heure unique, l'heure de l'hôte monotonic. Cela reflète les suppositions de nombreux systèmes d'exploitation invités qui s'attendent à ce que toutes les sources d'heure reflètent l'heure "la pendule". Dans des circonstances spéciales, il peut être cependant utile de faire en sorte que le TSC (time stamp counter) de l'invité reflète le temps effectif passé à exécuter l'invité.  
Ce mode de gestion spécial du TSC peut s'activer individuellement par VM et, pour de meilleurs résultats, il ne faut l'utiliser qu'en association avec la virtualisation matérielle. Pour activer ce mode, utilisez la commande suivante :  

`VBoxManage setextradata "nom VM" "VBoxInternal/TM/TSCTiedToExecution" 1`  

Pour inverser le mode de gestion TSC par défaut, utilisez :  

`VBoxManage setextradata "nom VM" "VBoxInternal/TM/TSCTiedToExecution"`  

Remarquez que si vous utilisez le mode de gestion TSC spécial avec un système d'exploitation invité qui est très strict quant à la cohérence des sources de l'heure, il se peut que vous receviez un message d'avertissement ou d'erreur lié à l'incohérence de l'heure. Cela peut aussi rendre l'heure non fiable avec certains systèmes d'exploitation invités en fonction de leur utilisation du TSC.  

[Retour à la table des matières](#Table des matières)

# 9.14.2 Accélérer ou ralentir l'horloge de l'invité<a id="mark9.14.2"></a>

Pour certains objectifs, il peut être utile d'accélérer ou de ralentir l'horloge virtuelle de l'invité.  
Vous pouvez le faire comme suit :  

`VBoxManage setextradata "nom VM" "VBoxInternal/TM/WarpDrivePercentage" 200`  

L'exemple ci-dessus doublera la vitesse de l'horloge de l'invité alors que  

`VBoxManage setextradata "nom VM" "VBoxInternal/TM/WarpDrivePercentage" 50`  

ralentira l'horloge de l'invité. Remarquez que la modification du rythme de l'horloge virtuelle peut perturber l'invité et même provoquer un comportement anormal de l'invité. Par exemple, une vitesse plus élevée signifie des timeouts plus courts pour les périphériques virtuels, provoquant un délai de réponse légèrement accru du périphérique virtuel, à l'origine d'une augmentation de la charge de l'hôte qui peut provoquer des échecs de l'invité. Notez aussi que tous les mécanismes de synchronisation du temps essaieront souvent de resynchroniser l'heure de l'invité sur l'heure de référence (qui est celle de l'hôte si les suppléments invité de VirtualBox sont actifs).  
Donc, toutes les synchronisation du temps devraient être désactivés si vous modifiez la vitesse de l'horloge invité comme indiqué ci-dessus (voir chapitre [9.14.3 Peaufiner les paramètres de synchronisation du temps des suppléments invité).](#mark9.14.3)  

[Retour à la table des matières](#Table des matières)

# 9.14.3 Peaufiner les paramètres de synchronisation du temps des suppléments invité<a id="mark9.14.3"></a>

Les suppléments invité de VirtualBox garantissent que l'heure du système invité se synchronise avec l'heure de l'hôte. Plusieurs paramètres peuvent être personnalisés. Vous pouvez définir les paramètres pour une VM spécifique en utilisant la commande suivante :  

`VBoxManage guestproperty set "nom VM" "/VirtualBox/GuestAdd/VBoxService/PARAMETER" VALUE`  

où PARAMETER est un des suivants :  

`--timesync-interval` Spécifie l'intervalle entre deux synchronisations de l'heure invité par  rapport à l'hôte. Par défaut, il est de 10000 ms (10 secondes).  

`--timesync-min-adjust` Valeur absolue minimum du débit mesuré en millisecondes pour faire les ajustements. Par défaut, c'est 1000 ms sur OS/2 et 100 ms ailleurs.  

`--timesync-latency-factor` Le multiplicateur de latence de demande de temps pour calculer le temps minimum ajusté dynamiquement. Il est par défaut de 8 fois, ce qui veut dire en détails : mesurer le temps mis pour déterminer l'heure de l'hôte (l'invité doit contacter le service hôte de la VM, ce qui peut prendre du temps), multiplier cette valeur par 8 et n'ajuster que si la différence d'heure entre l'hôte et l'invité dépasse cette valeur. Sinon, ne pas ajuster l'heure.  

`--timesync-max-latency` La latence de demande de l'horloge max acceptée. Par défaut, il s'agit de 250 ms.  

`--timesync-set-threshold` Début du débit absolu donné en millisecondes, où doit commencer le réglage de l'heure, plutôt que d'essayer de l'ajuster tout simplement. Il s'agit par défaut de 20 minutes.  

`--timesync-set-start` Définit l'heure à laquelle démarrer le service de syncchro du temps.  

`--timesync-set-on-restore 0|1` Règle l'heure après que la VM a été restaurée d'un état sauvegardé si vous mettez 1 en paramètre (par défaut). Désactivez-le en mettant 0. Dans ce dernier cas, l'heure sera ajustée tout simplement, ce qui peut mettre du temps.  
Vous pouvez aussi spécifier tous ces paramètres comme options de la ligne de commandes du service BoxService.  

[Retour à la table des matières](#Table des matières)

# 9.14.4 Désactiver la synchronisation des suppléments invité<a id="mark9.14.4"></a>

Une fois installés et démarrés, les suppléments invité de VirtualBox essaieront de synchroniser l'heure de l'invité avec celle de l'hôte. Vous pouvez l'empêcher en interdisant le service de l'invité de lire l'horloge de l'hôte :  

`VBoxManage setextradata "nom VM" "VBoxInternal/Devices/VMMDev/0/Config/GetHostTimeDisabled" 1`  

[Retour à la table des matières](#Table des matières)

# 9.15 Installer le pilote du réseau bridgé alternatif sur les invités Solaris 11<a id="mark9.15"></a>

À partir de VirtualBox 4.1, VirtualBox inclut un nouveau pilote de filtre réseau qui utilise la fonction Crossbow de Solaris 11. Par défaut, ce nouveau pilote est installé pour les hôtes Solaris 11 (construction 159 ci-dessus) qui le supportent.  
Pour obliger l'installation de l'ancien pilote de filtre réseau basé sur STREAMS, exécutez en tant qu'administrateur la commande suivante avant d'installer le paquet VirtualBox :  

`touch /etc/vboxinst_vboxflt`  

Pour obliger l'installation du pilote de filtre réseau basé sur Crossbow, exécutez en tant qu'administrateur la commande suivante avant d'installer le paquet VirtualBox :  

`touch /etc/vboxinst_vboxbow`  

Pour vérifier le pilote actuellement utilisé par VirtualBox, exécutez :  

`modinfo | grep vbox`  

Si la sortie contient "vboxbow", cela indique que VirtualBox utilise le pilote de filtre réseau Crossbow, alors que le nom "vboxflt" indique que l'ancien pilote de filtre réseau STREAMS est utilisé.  

[Retour à la table des matières](#Table des matières)

# 9.16 Échantillons de VNIC VirtualBox pour les VLANs sur les hôtes Solaris 11<a id="mark9.16"></a>

VirtualBox supporte des échantillons VNIC (Virtual Network Interface) pour configurer des VMs via des VLANs.  
Le support du réseau bridgé basé sur Crossbow a été introduit avec VirtualBox 4.1 et il exige Solaris 11 construction 159 ou supérieur.  
Un échantillon VNIC de VirtualBox est un VNIC dont le nom commence par  
`"vboxvnic_template" (sensible à la casse)`.  
Voici un exemple de la façon d'utiliser un échantillon VNIC pour configurer un VLAN pour des VMs. Créez un échantillon VNIC de VirtualBox en exécutant, en tant qu'administrateur :  

`dladm create-vnic -t -l nge0 -v 23 vboxvnic_template0`  

Cela créera un VNIC temporaire par l'interface "nge0" avec l'ID de VLAN 23. Pour créer des échantillons VNIC résistant aux redémarrages de l'hôte, sautez le paramètre `-t` dans la commande ci-dessus. Vous pouvez vérifier l'état actuel des liens en utilisant :  

`$ dladm show-link`  
`LINK CLASS MTU STATE BRIDGE OVER`  
`nge0 phys 1500 up -- --`  
`nge1 phys 1500 down -- --`  
`vboxvnic_template0 vnic 1500 up -- nge0`  

`$ dladm show-vnic`  
`LINK OVER SPEED MACADDRESS MACADDRTYPE VID`  
`vboxvnic_template0 nge0 1000 2:8:20:25:12:75 random 23`  

 Une fois que l'échantillon VNIC est créé, toutes les VMs ayant besoin de faire partie du VLAN 23 par l'interface physique "nge0" pourront utiliser le même échantillon VNIC. Cela simplifie et rend plus efficace la gestion des VMs sur des VLANs car les détails du VLAN ne sont pas stockés dans la configuration de chaque VM mais récupérés dans le modèle VNIC que vous pouvez modifier n'importe quand en utilisant dladm. Outre l'ID du VLAN, des traductions VNIC peuvent être créées avec des propriétés supplémentaires telles que les limites de bande passante, le fanout du processeur, etc. Reportez-vous à la documentation du réseau de votre Solaris pour savoir comment faire cela. Ces propriétés supplémentaires, s'il y en a, s'appliquent aussi aux VMs qui utilisent l'échantillon VNIC.  

[Retour à la table des matières](#Table des matières)

# 9.17 Configurer plusieurs interfaces réseaux host-only sur les hôtes Solaris<a id="mark9.17"></a>

Par défaut, VirtualBox vous offre une interface réseau host-only L'ajout de davantage d'interfaces réseaux host-only sur les hôtes Solaris exige une configuration manuelle. Voici comment ajouter deux interfaces réseaux host-only supplémentaires.  
Vous devez d'abord arrêter toutes les VMs en fonction et désactiver toutes les interfaces "vboxnet". Exécutez les commandes suivantes en tant qu'administrateur :  

`ifconfig vboxnet0 unplumb`  

Après vous être assuré que toutes les interfaces vboxnet sont désactivées, supprimez le pilote en utilisant :  

`rem_drv vboxnet`  

puis éditez le fichier `/platform/i86pc/kernel/drv/vboxnet.conf` et ajoutez une ligne pour les nouvelles interfaces :  

`name="vboxnet" parent="pseudo" instance=1;`  
`name="vboxnet" parent="pseudo" instance=2;`  

Ajoutez autant de lignes comme celles-ci que nécessaire et assurez-vous que le nombre d'"instance" soit implémenté de façon unique. Ensuite, rechargez le pilote vboxnet en utilisant :  

`add_drv vboxnet`  

Maintenant, activez toutes les interfaces en utilisant `ifconfig vboxnetX plumb` (où X peut être 0, 1 ou 2 dans ce cas) et une fois activée, vous pouvez alors configurer l'interface comme n'importe quelle interface réseau.  
Pour que les paramètres de vos nouvelles interfaces réseaux persistent entre les redémarrages, vous devrez éditer les fichiers `/etc/netmasks`, utilisez `NWAM /etc/nwam/llp` et ajoutez les entrées adéquates pour définir le masque réseau et l'IP statique de chacune de ces interfaces. L'installeur de VirtualBox ne met à jour ces fichiers de configuration que pour l'interface `"vboxnet0" `qu'il crée par défaut.  

[Retour à la table des matières](#Table des matières)

# 9.18 Configurer le CoreDumper sur les hôtes Solaris<a id="mark9.18"></a>

VirtualBox est capable de produire ses propres fichiers cœur pour un débogage étendu si quelque chose ne va pas. Cela n'est actuellement disponible que sur les hôtes Solaris.  
On peut activer le CoreDumper en utilisant la commande suivante :  

`VBoxManage setextradata "nom VM" VBoxInternal2/CoreDumpEnabled 1`  

Vous pouvez spécifier le répertoire à utiliser pour y mettre les fichiers cœur avec cette commande :  

`VBoxManage setextradata "nom VM" VBoxInternal2/CoreDumpDir <chemin-du-répertoire>`  

Assurez-vous que le répertoire que vous spécifiez se trouve sur un volume ayant un espace disque suffisant et où le processus VirtualBox a assez de droits pour écrire des fichiers dans ce répertoire. Si vous sautez cette commande et si vous ne spécifiez aucun répertoire où mettre les fichiers cœur, le répertoire actuel de l'exécutable de VirtualBox sera utilisé (ce qui échouerait vraisemblablement au moment de l'écriture des cœurs car ils sont protégés par des droits administrateur). Il est recommandé que vous définissiez explicitement un répertoire d'envoi des fichiers cœur.  
Vous devez spécifier le moment où les CoreDumper de VirtualBox devraient être récupérés.  
Cela se fait en utilisant les commandes suivantes :  

`VBoxManage setextradata "nom VM" VBoxInternal2/CoreDumpReplaceSystemDump 1`  
`VBoxManage setextradata "nom VM" VBoxInternal2/CoreDumpLive 1`  

Vous devrez passer au moins une des deux commandes ci-dessus si vous avez activé les CoreDumper.  
Le réglage de `CoreDumpReplaceSystemDump` prévoit que la VM outrepasse le mécanisme cœur de l'hôte et en cas de plantage, seul le de VirtualBox produirait le fichier cœur.  
Le réglage de CoreDumpLive demande à la VM de produire des cœurs à chaque fois que le processus de la VM reçoit un signal SIGUSR2. Après avoir produit le fichier cœur, la VM ne sera pas interrompu et continuera de fonctionner. Vous pouvez ainsi récupérer des cœurs du processus de la VM en utilisant :  

`kill -s SIGUSR2 <VM-process-id>`  

Les fichiers cœur produits par le CoreDumper de VirtualBox ont la forme `core.vb.<ProcessName>.<ProcessID>`, par exemple `core.vb.VBoxHeadless.11321`.  

[Retour à la table des matières](#Table des matières)

# 9.19 Déverrouiller l'interface graphique du gestionnaire de VirtualBox<a id="mark9.19"></a>

# 9.19.1 Personnalisation du gestionnaire de VM<a id="mark9.19.1"></a>

Il existe plusieurs paramètres de personnalisation avancés pour déverrouiller le gestionnaire de VirtualBox, c'est-à-dire pour supprimer des fonctionnalités que l'utilisateur ne devrait pas voir.  

`VBoxManage setextradata global GUI/Customizations OPTION[,OPTION...]`  

où OPTION est un des mots-clés suivants :  

noSelector N'autorise pas le démarrage du gestionnaire de VirtualBox. Ceci affichera une fenêtre contenant un vrai message d'erreur.  

noMenuBar Les fenêtres de la VM ne contiendront pas de barre de menus.  

noStatusBar Les fenêtres de la VM ne contiendront pas de barre d'état.  

Pour désactiver toutes les personnalisations du gestionnaire de VM, faites  

`VBoxManage setextradata global GUI/Customizations`  

[Retour à la table des matières](#Table des matières)

# 9.19.2 Personnalisation du sélecteur de VM<a id="mark9.19.2"></a>

Les paramètres de données supplémentaires suivants sont disponibles, par machine, pour modifier le comportement de la fenêtre du sélecteur de VM selon certaines VMs :  

`VBoxManage setextradata "VM name" PARAMETRE true`  

où PARAMETRE peut être :  

`GUI/HideDetails` N'affiche pas la configuration de VM d'une VM en particulier. Les fenêtre des détails sera tout simplement  cacher si on sélectionne cette VM.

`GUI/PreventReconfiguration` Ne permet pas à l'utilisateur d'ouvrir la boîte de dialogue des paramètres d'une VM en particulier.  

`GUI/PreventSnapshotOperations` Empêche de prendre des instantanés d'une VM avec la GUI, pendant son exécution ou quand on coupe la VM.  

`GUI/HideFromManager` Cache une VM en particulier dans la fenêtre du sélecteur de VM.  

`GUI/PreventApplicationUpdate` Désactive la vérification automatique des mises à jour et cache l'élément de menu correspondant.  

Merci de remarquer que ces paramètres n'empêchent pas l'utilisateur de reconfigurer la VM avec VBoxManage modifyvm.  

[Retour à la table des matières](#Table des matières)

# 9.19.3 Configurer les entrées du menu de sélection de VM<a id="mark9.19.3"></a>

Vous pouvez désactiver (c'est-à-dire black-lister) certaines entrées de l'onglet des paramètres globaux dans le sélecteur de VM :  

`VBoxManage setextradata global GUI/RestrictedGlobalSettingsPages OPTION[,OPTION...]`  

où OPTION est un des mots-clés suivants :  

General N'affiche pas l'onglet Général des paramètres.  

Input N'afiche pas l'onglet Entrée des paramètres.  

Update N'afiche pas l'onglet Mise à jour des paramètres.  

Language N'affiche pas l'onglet Langue des paramètres.  

Display N'affiche pas l'onglet Affichage des paramètres.  

Network N'affiche pas l'onglet Réseau des paramètres.  

Extensions N'affiche pas l'onglet Extensions des paramètres.  

Proxy N'affiche pas l'onglet Proxy des paramètres.  

C'est un paramètre global. Toutes les combinaisons de ce qui précède est possible . Pour restaurer le comportement par défaut, utilisez  

`VBoxManage setextradata global GUI/RestrictedGlobalSettingsPages`  

[Retour à la table des matières](#Table des matières)

# 9.19.4 Configurer les entrées du menu de la fenêtre d'une VM<a id="mark9.19.4"></a>

Vous pouvez désactiver (c'est-à-dire black-lister) certaines actions du menu dans la fenêtre de la VM :  

`VBoxManage setextradata "nom VM" GUI/RestrictedRuntimeMenus OPTION[,OPTION...]`  

où OPTION est l'un des mots-clés suivants :  

All N'affiche pas de menu dans la fenêtre de la VM.  

Machine N'affiche pas le menu Machine dans la fenêtre de la VM.  

View N'affiche pas le menu Vue dans la fenêtre de la VM.  

Devices N'affiche pas le menu Périphériques dans la fenêtre de la VM.  

Help N'affiche pas le menu Aide dans la fenêtre de la VM.  

Debug N'affiche pas le menu Débogage dans la fenêtre de la VM. Le menu de débogage n'est visible que si on démarre la GUI avec des paramètres spécial en ligne de commandes ou des paramètres de variables d'environnement particulières.  

C'est un paramètre spécifique à chaque VM. Toute combinaison de ce qui précède est possible.  
Pour restaurer le comportement par défaut, lancez :  

`VBoxManage setextradata "VM name" GUI/RestrictedRuntimeMenus`  

[Retour à la table des matières](#Table des matières)

# 9.19.5 Configurer les entrées de la barre d'état de la fenêtre de la VM<a id="mark9.19.5"></a>

Vous pouvez désactiver (c'est-à-dire black-lister) certains éléments de la barre d'état :  

`VBoxManage setextradata "nom VM" GUI/RestrictedStatusBarIndicators OPTION[,OPTION...]`  

où OPTION est un des mots-clés suivants :  

HardDisks N'affiche pas l'icône du disque dur dans la barre d'état de la fenêtre de la VM. Par défaut, l'icône de disque dur ne s'affiche que si la configuration de la VM contient un ou plusieurs disques durs.  

OpticalDisks N'affiche pas l'icône du CD dans la barre d'état de la fenêtre de la VM. Par défaut, l'icône du CD ne s'affiche que si la configuration de la VM contient un ou plusieurs lecteurs CD.  

FloppyDisks N'affiche pas l'icône du lecteur amovible dans la barre d'état de la fenêtre de la VM. Par défaut, l'icône du lecteur amovible ne s'affiche que si la configuration de la VM contient un ou plusieurs lecteurs amovibles.  

Network N'affiche pas l'icône du réseau dans la barre d'état de la fenêtre de la VM. Par défaut, l'icône de réseau ne s'affiche que si la configuration de la VM contient un ou plusieurs adaptateurs réseaux.  

USB N'affiche pas l'icône de l'USB dans la barre d'état.  

SharedFolders N'affiche pas l'icône des dossiers dans la barre d'état.  

VideoCapture N'affiche pas l'icône de la capture vidéo dans la barre d'état.  

Features N'affiche pas l'icône des fonctions du processeur dans la barre d'état.  

Mouse N'affiche pas l'icône de la souris dans la barre d'état.  

Keyboard N'affiche pas l'icône du clavier dans la barre d'état.  

C'est un paramètre individuel à chaque VM. Toutes les combinaisons de ce qui précède est possible. Si vous spécifiez toutes les options, aucune icône n'est affichée dans la barre d'état de la fenêtre de la VM. Pour restaurer le comportement par défaut, utilisez  

`VBoxManage setextradata "VM name" GUI/RestrictedStatusBarIndicators`  

[Retour à la table des matières](#Table des matières)

# 9.19.6 Configurer les modes visuels de la fenêtre<a id="mark9.19.6"></a>

Vous pouvez désactiver (c'est-à-dire blacklister) certains modes visuels de la VM   :  

`VBoxManage setextradata "nom VM" GUI/RestrictedVisualStates OPTION[,OPTION...]`  

où OPTION est un des mots-clés suivants :  

Fullscreen Ne pas autoriser le passage de la VM en mode plein-écran.  

Seamless Ne pas autoriser le passage de la VM en mode transparent.  

Scale Ne pas autoriser le passage de la VM en mode échelonné.  

C'est un paramètre individuel à chaque VM. Vous pouvez combiner n'importe comment ce qui précède. Pour restaurer le comportement par défaut, utilisez  

`VBoxManage setextradata "nom VM" GUI/RestrictedVisualStates`  

[Retour à la table des matières](#Table des matières)

# 9.19.7 Personnalisation de la touche hôte<a id="mark9.19.7"></a>

Pour désactiver toutes les combinaisons de touches de l'hôte, ouvrez les préférences et modifiez la touche hôte sur Aucune. Cela pourrait être utile lors de l'utilisation de VirtualBox en mode kiosk.  
Pour redéfinir ou désactiver certaines actions de la touche hôte, utilisez la commande suivante :  

`VBoxManage setextradata global GUI/Input/MachineShortcuts "FullscreenMode=F,...."`  

La liste suivante montre les actions possibles avec la touche hôte ainsi que leur raccourci par défaut avec la touche hôte. Le paramétrage d'une action sur Aucune désactivera cette action de la touche hôte.  

Action| Touche par défaut | Action
- | - | -
TakeSnapshot | T | Prend un instantané
TakeScreenshot | E | Fait une impression d'écran
MouseIntegration | I | Bascule l'intégration de la souris
TypeCAD | Del | Envoie Ctrl+Alt+Supp
TypeCABS | Backspace | Envoie Ctrl+Alt+Effacement
Pause | P | Met la VM en pause
Reset | R | Réinitialisation (brutale) de l'invité
SaveState | | Enregistre l'état de la VM et ferme la VM
Shutdown | H | Appuie sur le bouton ACPI (virtuel) d'alimentation
PowerOff | | Coupe la VM (sans sauvegarder son état
Close | Q | Affiche la boîte de dialogue de fermeture de la VM
FullscreenMode | F | Passe la VM en plein écran
SeamlessMode | L | Passe la VM en mode transparent
ScaleMode | C | Passe la VM en mode échelonné
GuestAutoResize | G | Redimensionne automatiquement la fenêtre de l'invité
WindowAdjust | A | Redimension automatique de la fenêtre invité
PopupMenu | Home | Affiche un menu en mode plein écran/transparent
SettingsDialog | S | Ouvre la boîte de dialogue des paramètres de la VM
InformationDialog | N | Affiche la fenêtre d'informations sur la VM
NetworkAdaptersDialog | | Affiche la boîte de dialogue des adaptateurs réseaux
SharedFoldersDialog | | Affiche la boîte de dialogue des dossiers partagés de la VM
InstallGuestAdditions | D | Monte l'ISO contenant les suppléments invité

Pour désactiver le mode plein-écran ainsi que le mode transparent, utilisez la commande suivante :  

`VBoxManage setextradata global GUI/Input/MachineShortcuts "FullscreenMode=None,SeamlessMode=None"`  

[Retour à la table des matières](#Table des matières)

# 9.19.8 Action quand la VM s'arrête<a id="mark9.19.8"></a>

Vous pouvez interdire (c'est-à-dire blacklister) certaines actions quand la VM s'arrête. Pour interdire des actions spécifiques, tapez :  

`VBoxManage setextradata "nom VM" GUI/RestrictedCloseActions OPTION[,OPTION...]`  

où OPTION est l'un des mots-clés suivants :  

SaveState N'autorise pas l'utilisateur à sauvegarder l'état de la VM quand elle s'arrête.  

Shutdown N'autorise pas l'utilisateur à éteindre la VM en envoyant l'événement ACPI couper à l'invité.  

PowerOff N'autorise pas l'utilisateur à couper la VM.  

Restore N'autorise pas l'utilisateur à revenir au dernier instantané lors de l'extinction de la VM.  

Il s'agit d'un paramètre individuel à chaque VM. Toutes les combinaison de ce qui précède est possible. Si vous spécifiez toutes les options, la VM ne pourra pas être éteinte.  

[Retour à la table des matières](#Table des matières)

# 9.20 Démarrer le service Web de VirtualBox automatiquement<a id="mark9.20"></a>

Le service Web de VirtualBox (vboxwebsrv) est utilisé pour contrôler VirtualBox à distance. Il est documenté en détails dans le Software Development Kit (SDK) de VirtualBox ; merci de voir le chapitre [11 Interfaces de programmation de VirtualBox.](#mark11) Comme la base client qui utilise cette interface grossit, nous avons ajouté des scripts de démarrage pour les systèmes d'exploitation que nous supportons. Les sections suivantes décrivent la manière de les utiliser. Le service Web de VirtualBox ne démarre jamais automatiquement suite à une installation standard.  

[Retour à la table des matières](#Table des matières)

# 9.20.1 Linux : démarrer le service web via init<a id="mark9.20.1"></a>

Sur Linux, le service web peut être démarré automatiquement au démarrage de l'hôte en ajoutant les paramètres adéquats au fichier `/etc/default/virtualbox`. Un paramètre est obligatoire, VBOXWEB_USER, qui doit être défini sur l'utilisateur qui démarrera alors les VMs. Les paramètres du tableau ci-dessous commencent tous par `VBOXWEB_ (VBOXWEB_HOST, VBOXWEB_PORT` etc.) :  

Paramètre Description Par défaut
- | - | -
USER | L'utilisateur sous lequel fonctionne le service web | 
HOST | L'hôte où on doit chercher le service web localhos t| 
PORT | Le port où on doit chercher le service web | 18083
SSL_KEYFILE Fichier de clé et du certificat du serveur, format PEM | 
SSL_PASSWORDFILE | Nom du fichier mot de passe de la clé du serveur | 
SSL_CACERT | Fichier de certificat CA, format PEM | 
SSL_CAPATH | Chemin du certificat CA | 
SSL_DHFILE | Nom du fichier DH ou longueur de la clé DH en octets | 
SSL_RANDFILE | Fichier contenant seed en générateur de nombre aléatoire | 
TIMEOUT | Timous de la session en secondes ; 0 désactive le timeouts | 300
CHECK_INTERVAL | Fréquence des vérifications des timeout en secondes | 5
THREADS | Nombre maximum de session simultanées possibles | 100
KEEPALIVE | Nombre maximum de requêtes avant de fermer un socket | 100
ROTATE | Nombre de fichiers journaux ; 0 désactive la journalisation | 10
LOGSIZE | Taille maximum d'un fichier journal en octets à récupérer | 1Mo
LOGINTERVAL | Délai maximum en secondes pour ratraper l'enregistrement des journaux | 1 day

La définition du paramètre SSL_KEYFILE active le support SSL/TLS. L'utilisation de chiffrement est fortement recommandée, car sans cela, tout (même les mots de passe) sera transféré en clair.  

[Retour à la table des matières](#Table des matières)

# 9.20.2 Solaris: démarrer le service web par SMF<a id="mark9.20.2"></a>

Sur les hôtes Solaris, le démon du service Web de VirtualBox est intégré à l'environnement SMF.  
Vous pouvez modifier les paramètres mais vous n'êtes pas obligé si ceux par défaut ci-dessous correspondent déjà à vos besoins :  

`svccfg -s svc:/application/virtualbox/webservice:default setprop config/host=localhost`  
`svccfg -s svc:/application/virtualbox/webservice:default setprop config/port=18083`  
`svccfg -s svc:/application/virtualbox/webservice:default setprop config/user=root`  

Le tableau de la section précédente montrant le nom des paramètres et leurs réglages par défaut s'applique également à Solaris. Vous devez passer le nom des paramètres en minuscules et ajouter le préfixe `config/`, par exemple `config/user` ou `config/ssl_keyfile`. Si vous avez changé quelque chose, n'oubliez pas de lancer la commande suivante pour que les changements aient un effet immédiat :  

`svcadm refresh svc:/application/virtualbox/webservice:default`  

Si vous oubliez la commande ci-dessus, les paramètres ci-dessus seront utilisés au moment de l'activation du service. Vérifiez les réglages actuelles des propriétés avec :  

`svcprop -p config svc:/application/virtualbox/webservice:default`  

Lorsque tout est bien configuré, vous pouvez démarrer le service web de VirtualBox avec la commande suivante :  

`svcadm enable svc:/application/virtualbox/webservice:default`  

Pour plus d'informations sur SMF, merci de vous reporter à la documentation de Solaris.  

[Retour à la table des matières](#Table des matières)

# 9.20.3 Mac OS X : démarrer le service web par launchd<a id="mark9.20.3"></a>

Sur Mac OS X, on utilise launchd pour démarrer le service web de VirtualBox. Vous pouvez trouver un fichier exemple de configuration dans `$HOME/Library/LaunchAgents/org.virtualbox.vboxwebsrv.plist`.  
Vous pouvez l'activer en changeant la clé Disabled de true en false. Pour démarrer manuellement le service, utilisez la commande suivante :  

`launchctl load ~/Library/LaunchAgents/org.virtualbox.vboxwebsrv.plist`  

Pour des informations supplémentaires sur la façon dont vous pourriez configurer les services de launchd, voir <http://developer.apple.com/mac/library/documentation/MacOSX/Conceptual/BPSystemStartup/BPSystemStartup.html>  

[Retour à la table des matières](#Table des matières)

# 9.21 VirtualBox Watchdog<a id="mark9.21"></a>

À partir de VirtualBox 4.2, le service de ballon de mémoire, connu jadis comme le VBoxBalloonCtrl, a été renommé en VBoxWatchdog, ce qui intègre à présent plusieurs services de l'hôte qui sont conçus pour fonctionner dans un environnement serveur.  
Il s'agit des services :  

* Contrôle du ballon de mémoire, qui prend en charge automatiquement d'un ballon de mémoire configuré pour une VM (voir chapitre [4.8.1 Faire du ballon avec la mémoire](#mark4.8.1) pour une présentation du jeu de ballon avec la mémoire. Cela est surtout utile pour les environnements serveurs où les VMs peuvent solliciter de manière dynamique plus ou moins de mémoire pendant leur fonctionnement.  
Le service vérifie régulièrement que le ballon actuel d'une VM et sa RAM invitée disponible et il ajuste automatiquement le ballon de mémoire actuel en l'augmentant ou le réduisant selon le cas. Cette gestion ne s'applique qu'aux VMs en fonction ayant installé des suppléments invité récents.  
* La détection d'un isolement de l'hôte, qui offre un moyen de détecter si l'hôte ne peut plus atteindre une instance en particulier du serveur VirtualBox et qui prend les mesures appropriées telles que l'extinction, la sauvegarde de l'état actuel, voire la coupure de certaines VMs.  

Vous pouvez spécifier toutes les valeurs de configuration soit en ligne de commande, soit par des données supplémentaires globales, tandis que les valeurs en ligne de commandes ont toujours une priorité élevée si on les définit. Certaines des valeurs de configuration peuvent être également spécifiées sur une base individuelle par VM. Donc, l'ordre pour regarder les paramètres est : ligne de comande, données supplémentaires pour chaque VM (s'il y en a), données supplémentaires globales.  

[Retour à la table des matières](#Table des matières)

# 9.21.1 Contrôle du jeu de ballon de mémoire<a id="mark9.21.1"></a>

Le contrôle des ballons de mémoire augmente ou réduit le ballon de mémoire des VMs à partir de la mémoire disponible sur les VMs et de la taille maximale désirée d'un ballon.  
Pour régler le contrôle du jeu de ballons mémoires, il faut paramétrer la taille que peut atteindre une VM. Vous pouvez le faire en ligne de commande avec  

`--balloon-max <Taille en Mo>`  

, individuellement pour chaque VM avec les données supplémentaires avec  

`VBoxManage setextradata <VM-Name> VBoxInternal2/Watchdog/BalloonCtrl/BalloonSizeMax <Taille en Mo>`  

ou en utilisant une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/BalloonCtrl/BalloonSizeMax <Taille en Mo>`  

Note: Si vous ne spécifiez pas de taille maximale du ballon avec au moins un des paramètres ci-dessus, vous ne pourrez faire aucun jeu de ballon.  

Vous pouvez régler la taille incrémentale d'un ballon, en Mo, soit en ligne de commandes avec  

`--balloon-inc <Taille en Mo>`  

, soit en utilisant une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/BalloonCtrl/BalloonIncrementMB <Taille en Mo>`  

La taille d'incrémentation par défaut est de 256 Mo si vous ne spécifiez rien.  
La même chose marche pour une taille minimale incrémentée de ballon : en ligne de commande avec  

`--balloon-dec <Taille en Mo>`  

ou en utilisant une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/BalloonCtrl/BalloonDecrementMB <Taille en Mo>`  

La taille minimale incrémentale d'un ballon par défaut est de 128 Mo si vous n'indiquez rien.  
Pour définir la limite inférieure d'un ballon en Mo, c'est en ligne de commande avec  

`--balloon-lower-limit <Taille en Mo>`  

ou par une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/BalloonCtrl/BalloonLowerLimitMB <Taille en Mo>`  

La limite inférieure par défaut est de 128 si vous n'indiquez rien.  

[Retour à la table des matières](#Table des matières)

# 9.21.2 Détection de l'isolement de l'hôte<a id="mark9.21.2"></a>

Pour détecter si l'hôte va être isolé, c'est-à-dire qu'il ne va plus pouvoir atteindre la session du serveur VirtualBox, l'hôte doit régler une valeur dans une donnée supplémentaire pour une période de temps. Si cette valeur n'est pas définie dans le délai du timeout, une fois ce délai dépassé, ce qu'on appelle une réponse à l'isolement de l'hôte sera envoyée aux VMs gérées. Vous pouvez contrôler les VMs gérées en définissant des groupes de VM et en affectant des VMs à ces groupes. Par défaut, aucun groupe n'est défini, ce qui veut dire que toutes les VMs du serveur seront gérées lorsqu'aucune réponse hôte ne sera reçue dans les 30 secondes  .
Pour définir en ligne de commandes les groupes gérés par la détection de l'isolement de l'hôte :  

`--apimon-groups=<string[,stringN]>`  

ou utilisez une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/APIMonitor/Groups <chaîne[,chaîneN]>`  

Pour définir le timeout d'isolement de l'hôte en ligne de commandes :  

`--apimon-isln-timeout=<ms>`  

ou utilisez une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/APIMonitor/IsolationTimeoutMS <ms>`  

Pour régler la réponse d'isolement finale en ligne de commandes :  

`--apimon-isln-response=<cmd>`  

ou en utilisant une donnée supplémentaire globale avec  

`VBoxManage setextradata global VBoxInternal2/Watchdog/APIMonitor/IsolationResponse <cmd>`  

Les commandes de réponse suivantes sont disponibles :  

* none, qui ne fait rien.  
* pause, qui met en pause l'exécution d'une VM.  
* poweroff, qui éteint la VM en appuyant sur le buton d'alimentation de la VM. La VM n'aura aucune chance de sauvegarder des données ou de lancer le processus d'extinction.  
* save, qui enregistre l'état actuel de la machine et qui coupe ensuite la VM. Si la sauvegarde de l'état de la machine échoue, la VM sera mise en pause.  
* shutdown, qui éteint la VM gentiment, en envoyant un événement ACPI d'extinction au système d'exploitation de la VM. L'OS a alors une chance de s'éteindre proprement.  

[Retour à la table des matières](#Table des matières)

# 9.21.3 Plus d'informations<a id="mark9.21.3"></a>

Pour des options et des paramètres plus avancés comme la vérification de la verbosité de la journalisation, l'aide intégrée à la ligne de commande est accessible avec `--help`.  

[Retour à la table des matières](#Table des matières)

# 9.21.4 Linux : démarrer le service watchdog via init<a id="mark9.21.4"></a>

Sur Linux, vous pouvez démarrer automatiquement le service watchdog lors du démarrage de l'hôte en ajoutant les paramètres adéquats au fichier `/etc/default/virtualbox`. Un paramètre est obligatoire, `VBOXWATCHDOG_USER`, vous devez le personnaliser avec l'utilisateur qui démarrera les VMs. Pour une rétro compatibilité, vous pouvez spécifier également `VBOXBALLOONCTRL_USER` Les paramètres du tableau suivant commence tous par `VBOXWATCHDOG_ (VBOXWATCHDOG_BALLOON_INTERVAL, VBOXWATCHDOG_LOGSIZE` etc., et pour les paramètres qui existaient précédemment, vous pouvez utiliser les paramètres `VBOXBALLOONCTRL_INTERVAL` etc) :  

Paramètre | Description | Réglage par  défaut
- | - | -
USER | L'utilisateur sous lequel fonctionne le service watchdog | 
ROTATE | Nombre de fichiers journaux ; 0 désactive la gestion des journaux | 10
LOGSIZE | Taille maximum du fichier journal, en octets, pour faire la gestion | 1Mo
LOGINTERVAL | Intervalle de secondes maximum en secondes pour faire la rotation des journaux | 1 day
BALLOON_INTERVAL | Intervalle de la vérification de la taille du ballon (msec) | 30000
BALLOON_INCREMENT | Incrémentation de la taille du ballon (Mo) | 256
BALLOON_DECREMENT | Diminution de la taille du ballon (Mo) | 128
BALLOON_LOWERLIMIT | Limite la plus basse de la taille du ballon (Mo) | 64
BALLOON_SAFETYMARGIN | Mémoire libre nécessaire pour diminuer la taille du ballon (Mo) | 1024

[Retour à la table des matières](#Table des matières)

# 9.21.5 Solaris : démarrer le service watchdog via SMF<a id="mark9.21.5"></a>

Sur les hôtes Solaris, le démon du service watchdog de VirtualBox est intégré à l'environnement SMF. Vous pouvez modifier les paramètres, mais ce n'est pas obligatoire si ceux par défaut correspondent déjà à vos besoins :  

`svccfg -s svc:/application/virtualbox/balloonctrl:default setprop config/balloon_interval=10000`  
`svccfg -s svc:/application/virtualbox/balloonctrl:default setprop config/balloon_safetymargin=134217728`  

Le tableau de la section précédente expliquant les noms des paramètres et les réglages par défaut s'applique également à Solaris. Vous devez passer les noms des paramètres en minuscules et ajouter un préfixe `config/`, par exemple `config/user` ou `config/balloon_safetymargin`.  
Si vous avez fait un changement, n'oubliez pas de lancer la commande suivante pour donner aux changements un effet immédiat :  

`svcadm refresh svc:/application/virtualbox/balloonctrl:default`  

Si vous oubliez la commande ci-dessus, les paramètres précédents seront utilisés lors de l'activation du service. Vérifiez les paramètres des propriétés actuels avec :  

`svcprop -p config svc:/application/virtualbox/balloonctrl:default`  

Quand tout est configuré correctement, vous pouvez démarrer le service watchdog de VirtualBox avec la commande suivante :  

`svcadm enable svc:/application/virtualbox/balloonctrl:default`  

Pour plus d'informations sur SMF, merci de vous reporter à la documentation de Solaris.

[Retour à la table des matières](#Table des matières)

# 9.22 Autres packs d'extension<a id="mark9.22"></a>

À partir de VirtualBox 4.2.0, il existe un autre pack d'extension, VNC, open source et qui remplace l'intégration précédente du protocole d'accès à distance VNC. C'est du code expérimental et il ne sera d'abord disponible que dans le paquet du code source de VirtualBox. Une grande partie du code est issue de contributions d'utilisateurs et elle n'est en aucun cas supportée par Oracle. La gestion du clavier est très sérieusement limitée et seul la couche du clavier américain fonctionne. Les autres plans de clavier auront au moins quelques touches, qui produiront de mauvais résultats (avec des effets souvent très surprenants), et pour les plans ayant des différences significatives avec le plan de clavier américain, ils sont très probablement inutilisables.  
Il est possible d'installer à la fois le pack d'extension VirtualBox d'Oracle VM et VNC, mais on ne peut activer qu'un module VRDE à la fois. La commande suivante passe en module VRDE de VNC dans VNC :  

`VBoxManage setproperty vrdeextpack VNC`  

La configuration de l'accès à distance fonctionne de la même façon que VRDP (voir chapitre [7.1 Affichage distant (VRDP support)](#mark7)).1), avec quelques limites : VNC ne supporte pas la spécification de plusieurs numéros de ports et l'authentification se fait différemment. VNC ne peut gérer que l'authentification par mot de passe et il n'y a aucune possibilité d'utiliser l'affichage de mots de passe. Il ne reste pas d'autre choix que de donner un mot de passe en clair dans la configuration de VNC, ce qu'on peut faire avec la commande suivante :  

`VBoxManage modifyvm "nom VM" --vrdeproperty VNCPassword=secret`  

L'utilisateur est responsable du secret de son mot de passe et vous devriez le supprimer quand vous donnez la configuration d'une VM à quelqu'un d'autre, quelle que soit la finalité. Certains serveurs VNC prétendent qu'ils gardent le mot de passe "chiffré dans leur configuration. Ce n'est pas du vrai chiffrement, ce ne sont que des mots de passe, ce qui est exactement aussi sécurisé que les mots de passe en clair.  
La commande suivante revient à VRDP (s'il est installé) :

`VBoxManage setproperty vrdeextpack "Oracle VM VirtualBox Extension Pack"`  

[Retour à la table des matières](#Table des matières)

# 9.23 Démarrer des machines virtuelles lors de l'amorçage du système<a id="mark9.23"></a>

À partir de VirtualBox 4.2.0, il est possible de démarrer des VMs automatiquement à l'amorçage du système sur Linux, Solaris et Mac OS X, pour tous les utilisateurs.

[Retour à la table des matières](#Table des matières)

# 9.23.1 Linux : démarrer le service autostart par init<a id="mark9.23.1"></a>

Sur Linux, le service autostart s'active en définissant deux variables de /etc/default/virtualbox.  
La première est `VBOXAUTOSTART_DB`, qui contient un chemin absolu vers le répertoire de la base de données existante. Tous les utilisateurs devraient avoir un accès en écriture au répertoire pour démarrer automatiquement des machines virtuelles. En outre, vous devriez donner au répertoire le le peu collant. La deuxième variable est `VBOXAUTOSTART_CONFIG`, qui fait pointer le service vers le fichier de configuration d'autostart utilisé lors du démarrage pour déterminer s'il faut autoriser des utilisateurs individuels à démarrer une VM automatiquement et les délais de démarrage de la configuration.  
Vous pouvez mettre le fichier de configuration dans /etc/vbox et il contient plusieurs options. Une s'appelle default_policy qui contrôle si le service autostart autorise ou non les utilisateurs non dans la liste d'exceptions à démarrer des VMs. La liste d'exceptions commence par `exception_list` et elle contient une liste de nom d'utilisateurs séparée par des virgules.  
De plus, vous pouvez configurer un délai de démarrage propre à chaque utilisateur pour éviter une surcharge de l'hôte. Une configuration modèle est présentée ci-dessous :  

`# La politique par défaut est d'interdire le démarrage d'une VM, l'autre`  
`# choix étant "allow".`  
`default_policy = deny`  

`# Bob est autorisé à démarrer des machines virtuelles, mais chacun à intervalle`  
`# de 10 secondes`  
`bob = {`  
`allow = true`  
`startup_delay = 10`  
`}`   

`# Alice n'est pas autorisé à démarrer des machines virtuelles, utile pour`  
`# exclure certains utilisateurs si la politique par défaut est allow.`  
`alice = {`  
`allow = false`  
`}`  

Tout utilisateur voulant activer autostart pour des machines en particulier doit définir le chemin du répertoire de la base de données autostart avec  

`VBoxManage setproperty autostartdbpath <Autostart directory>`  

[Retour à la table des matières](#Table des matières)

# 9.23.2 Solaris : démarrer le service autostart par SMF<a id="mark9.23.2"></a>

Sur les hôtes Solaris, Le démon autostart de VirtualBox est intégré à l'environnement SMF. Pour l'activer, vous devez faire pointer le service vers un fichier de configuration existant qui est au même format que sur Linux (voir chapitre [9.23.1 Linux : démarrer le service autostart par init](#mark9.23.1)

`svccfg -s svc:/application/virtualbox/autostart:default setprop config/config=/etc/vbox/autostart.cfg`  

Quand tout est bien configuré, vous pouvez démarrer le service autostart de VirtualBox avec la commande suivante :  

`svcadm enable svc:/application/virtualbox/autostart:default`  

Pour plus d'informations sur SMF, merci de vous reporter à la documentation de Solaris.

[Retour à la table des matières](#Table des matières)

# 9.23.3 Mac OS X : démarrer le service autostart par launchd<a id="mark9.23.3"></a>

Sur Mac OS X, on utilise launchd pour démarrer le service autostart de VirtualBox. Vous pouvez trouver un fichier de configuration exemple dans `/Applications/VirtualBox.app/Contents/MacOS/org.virtualbox.vboxautostart.plist.`  
Pour activer le service, copiez le fichier dans `/Library/LaunchDaemons` et passez la clé Disabled de true à false. Par ailleurs, remplacez le deuxième paramètre par un fichier de configuration existant et qui est au même format que sur Linux (voir chapitre [9.23.1 Linux : démarrer le service autostart par init](#mark9.23.1). Pour démarrer le service à la main, utilisez la commande suivante :  

`launchctl load /Library/LaunchDaemons/org.virtualbox.vboxautostart.plist`  

Pour avoir des informations supplémentaires sur la façon dont les services launchd pourraient se configurer, voir <http://developer.apple.com/mac/library/documentation/MacOSX/Conceptual/BPSystemStartup/BPSystemStartup.html>

[Retour à la table des matières](#Table des matières)

# 9.24 La gestion experte par VirtualBox du stockage<a id="mark9.24"></a>

Si le modèle d'instantané de VirtualBox ne suffit pas, il est possible d'activer un mode spécial qui permet de configurer des connexions de supports de stockage pendant que la VM est en pause. L'utilisateur doit être sûr que les données du disque restent cohérentes pour l'invité car, tout comme avec le montage à chaud, l'invité n'est pas informé des médias déconnectés ou nouvellement connectés.  
Vous pouvez activer le mode de gestion experte du stockage pour chaque VM en exécutant:  

`VBoxManage setextradata "nom VM" "VBoxInternal2/SilentReconfigureWhilePaused" 1`    

Vous pouvez reconfigurer les connexions de supports de stockage pendant que la VM est en pause en utilisant :  

`VBoxManage storageattach ...`   

[Retour à la table des matières](#Table des matières)

# 9.25 Prise en charge des événements de gestion de l'énergie de l'hôte<a id="mark9.25"></a>

Certains événements de la gestion d'énergie de l'hôte sont gérés par VirtualBox. Le comportement dépend en fait de la plateforme :

Mise en veille prolongée de l'hôte Cet événement est généré quand l'hîte va se mettre en veille prolongée, c'est-à-dire quand l'hôte sauvegarde son état sur un support de stockage non volatile puis s'éteint.  
Cet événement n'est actuellement géré que sur les hôtes Windows et Mac OS X. Quand il est généré, VirtualBox mettra en pause toutes les VMs en fonction.  
Réveil de l'hôte Cet événement est généré lorsque l'hôte sort d'une mise en veille prolongée.  
Cet événement n'est actuellement géré que sur les hôtes Windows et Mac OS X. Quand cet événement est généré, VirtualBox réveillera les VMs qui ont été mises en pause.  
Batterie faible Le niveau de la batterie a atteint un seuil critique (en général moins de 5 pour cent de sa charge).
Cet événement n'est actuellement géré que sur les hôtes Windows et Mac OS X. Quand cet événement est généré, VirtualBox sauvegardera l'état et terminera toutes les VMs pour préparer une coupure potentielle de l'hôte  
Ce comportement est configurable. En utilisant la commande suivante, aucune VM n'est sauvegardé :  

`VBoxManage setextradata global "VBoxInternal2/SavestateOnBatteryLow" 0`  

Il s'agit d'un réglage global ou individuel aux VMs. La valeur individuelle à une VM est prioritaire sur celle globale. La commande suivante sauvegardera l'état de toutes les VMs, sauf celui de la VM "foo" :  

`VBoxManage setextradata global "VBoxInternal2/SavestateOnBatteryLow" 1`  
`VBoxManage setextradata "foo" "VBoxInternal2/SavestateOnBatteryLow" 0`  

La première ligne n'est pas vraiment obligatoire puisque par défaut, c'est une sauvegarde qui est effectuée.  

[Retour à la table des matières](#Table des matières)

# 9.26 Support expérimental du passage par des instructions SSE4.1 / SSE4.2<a id="mark9.26"></a>

Pour offrir le support des SSE 4.1 / SSE 4.2 aux invités, le processeur de l'hôte doit gérer ces jeux d'instructions. A partir de VirtualBox 4.3.8, il est possible d'activer ces instructions pour les invités en utilisant les commandes suivantes :  

`VBoxManage setextradata "VM name" VBoxInternal/CPUM/SSE4.1 1`  
`VBoxManage setextradata "nom VM" VBoxInternal/CPUM/SSE4.2 1`  

Ces paramètres se règlent par VM et sont désactivés par défaut.  

[Retour à la table des matières](#Table des matières)

# 9.27 Support de la synchronization des indicateurs du clavier<a id="mark9.27"></a>

Cette fonction permet aux diodes du clavier de correspondre à celles du clavier de la machine virtuelle quand la fenêtre de la machine est active. Elle est supportée pour l'instant sur les hôtes Mac OS X et Windows et elle est disponible à partir des versions 4.2.24 et 4.3.8. Vous pouvez activer cette fonction en utilisant la commande suivante :

`VBoxManage setextradata "nom VM" GUI/HidLedsSync "1"`  

Pour la désactiver, utilisez la même commande mais passez "1" à "0", ou utilisez la commande  
`VBoxManage` pour supprimer les données supplémentaires. C'est un paramètre par VM et désactivé par défaut.  

[Retour à la table des matières](#Table des matières)

# 10 Sous-bassements techniques<a id="mark10"></a>

Le contenu de ce chapitre n'est pas indispensable pour utiliser VirtualBox avec succès. Nous indiquons ce qui suit à titre informatif pour ceux qui sont plus familiers de la technologie et de l'architecture informatique et qui veulent en savoir davantage sur la manière que fonctionne VirtualBox "sous le capeau".  

[Retour à la table des matières](#Table des matières)

# 10.1 Où VirtualBox stocke ses fichiers<a id="mark10.1"></a>

Dans VirtualBox, une machine virtuelle et ses paramètres sont déscrits dans un fichier de paramètres de la machine virtuelle, au format XML. De plus, la plupart des machines virtuelles ont un ou plusieurs disques durs qui leur sont en général présentés par des images de disque (comme au format VDI). L'endroit où sont stockés tous ces fichiers dépend de la version de VirtualBox qui a créé la machine.

[Retour à la table des matières](#Table des matières)

# 10.1.1 Machines créées par VirtualBox version 4.0 ou supérieur<a id="mark10.1.1"></a>

À partir de la version 4.0, par défaut, chaque machine virtuelle dispose d'un répertoire sur votre ordinateur hôte (où tous les fichiers de cette machine sont stockés – le fichier des paramètres XML (avec une extension de fichier .vbox) et ses images de disque.  
Par défaut, ce "dossier machine" se trouve dans un dossier ordinaire appelé "VirtualBox VMs", créé par VirtualBox dans le dossier personnel de l'utilisateur du système actuel. L'emplacement de ce répertoire personnel dépend des conventions du système d'exploitation hôte :  

* Sur Windows, il s'agit de `%HOMEDRIVE%%HOMEPATH%; en général quelque chose comme C:\Documents and Settings\NomUtilisateur\`.
* Sur Mac OS X, il s'agit de `/Users/nomutilisateur`.
* Sur Linux et Solaris, il s'agit de `/home/nomutilisateur`.
Par simplicité, nous abrègerons cela ci-dessous par `$HOME`. En utilisant cette convention, le dossier ordinaire de toutes les machines virtuelles est `$HOME/VirtualBox VMs`.  
Par exemple, quand vous créez une machine virtuelle qui s'appelle "VM Exemple", vous verrez que VirtualBox crée  
1. le dossier `$HOME/VirtualBox VMs/VM Exemple/` et, dans ce dossier,
2. le fichier des paramètres `VM Exemple.vbox` et
3. l'image de disque virtuel `VM Example.vdi`.
C'est le rangement par défaut si vous utilisez l'assistant "Créer une nouvelle machine virtuelle" comme décrit au chapitre [1.7 Créer votre première machine virtuelle](#mark1.7). Une fois que vous commencez à travailler avec la VM, des fichiers supplémentaires apparaîtront : vous trouverez des fichiers journaux dans un sous-dossier qui s'appelle Logs, et une fois que vous aurez pris des instantanés, ils apparaîtront dans un sous-dossier Snapshots. Pour chaque VM, vous pouvez modifier l'emplacement de son dossier d'instantanés dans les paramètres de la VM.  
Vous pouvez changer le dossier machine par défaut en sélectionnant "Préférences" du menu "Fichier" de la fenêtre principale de VirtualBox. Puis, dans la fenêtre qui apparaît, cliquez sur l'onglet "Général". Sinon, utilisez VBoxManage setproperty machinefolder ;; voir le chapitre [8.27 VBoxManage setproperty](#mark8.27).

[Retour à la table des matières](#Table des matières)

# 10.1.2 Machines créées par des versions de VirtualBox antérieures à 4.0<a id="mark10.1.2"></a>

Si vous avez mis à jour vers VirtualBox 4.0 en partant d'une ancienne version de VirtualBox, vous aurez probablement vos fichiers de paramètres et les disques selon l'organisation du système de fichiers d'alors.  
Avant la version 4.0, VirtualBox séparait les fichiers des paramètres de la machine des images de disque virtuel. Les fichiers de paramétrages de la machine avaient une extension .xml et se trouvaient dans un dossier appelé "Machines" dans le répertoire de configuration global de VirtualBox (voir la prochaine section). Donc, par exemple, sur Linux, il s'agissait du répertoire caché `$HOME/.VirtualBox/Machines`. Le dossier par défaut des disques durs s'appelait `"Hard-Disks"` et se trouvait également dans le dossier `.VirtualBox`. L'utilisateur pouvait changer les deux endroits dans les préférences globales (le concept de "dossier par défaut des disques durs" a été abandonné avec VirtualBox 4.0, vu que les images de disque se trouvent désormais par défaut dans le dossier de chaque machine.)  
L'ancienne organisation avait plusieurs gros inconvénients.  

1. Il était très difficile de déplacer une machine virtuelle d'un hôte à l'autre car les fichiers concernés ne se trouvaient pas dans le même dossier. De plus, les médias virtuels de toutes les 
machines étaient enregistrés avec un registre global dans le fichier des paramètres transversaux de VirtualBox. `($HOME/.VirtualBox/VirtualBox.xml)`.  
Pour déplacer une machine sur un autre hôte, il n'était donc pas suffisant de déplacer le fichier des paramètres XML et les images de disque (qui se trouvaient à des endroits différents), mais il fallait en plus copier méticuleusement les entrées du disque dur à partir du XML du registre de médias global, ce qui était presqu'impossible si la machine avait des instantanés et, donc, des images de différenciation.
2. Le stockage des images de disque virtuel, qui peuvent beaucoup grossir, sous le répertoire caché .VirtualBox (au moins sur les hôtes Linux et Solaris) amenait de nombreux utilisateurs à se demander ce qu'était devenu leur espace disque.

Si les nouvelles VMs créées avec VirtualBox 4.0 ou supérieur respecteront la nouvelle organisation, pour une compatibilité maximum, les anciennes VMs ne sont pas converties en nouvelle organisation. Sans cela, les paramètres de la machine seraient immanquablement cassés si l'utilisateur rétrogradait de la 4.0 à une version plus ancienne de VirtualBox.

[Retour à la table des matières](#Table des matières)

# 10.1.3 Données globales de configuration<a id="mark10.1.3"></a>

Outre les fichiers des machines virtuelles, VirtualBox gère des données globales de configuration. Sur Linux et Solaris, depuis  VirtualBox 4.3 elles se trouvent dans le répertoire caché `$HOME/.config/VirtualBox` même si `$HOME/.VirtualBox` sera utilisé s'il existe pour rester compatible avec les anciennes versions ; sur un Mac, elles se trouvent dans `$HOME/Library/VirtualBox`.  
VirtualBox crée automatiquement ce répertoire de configuration si nécessaire. Vous pouvez éventuellement fournir un répertoire de configuration alternatif en réglant la variable d'environnement `VBOX_USER_HOME` ou, en plus, sur Linux ou Solaris, en utilisant la variable standard `XDG_CONFIG_HOME` (car le fichier des paramètres globaux de VirtualBox.xml pointe vers tous les autres fichiers de configuration, ce qui permet de naviguer entre plusieurs configurations de VirtualBox.  
VirtualBox stocke essentiellement dans ce répertoire son fichier de paramètres globaux, un autre fichier XMK appelé VirtualBox.xml. Cela comprend des options de configuration globales et la liste des machines virtuelles enregistrées avec des pointeurs vers leurs fichiers de paramètres XML. Ni l'emplacement du fichier ni son répertoire n'ont changé avec VirtualBox 4.0.)  
Avant VirtualBox 4.0, tous les médias virtuels (fichiers images de disque) étaient également stockés dans un registre global de ce fichier de paramètres. Par compatibilité, ce registre de médias existe toujours si vous mettez à jour VirtualBox et s'il y a des médias issus de machines créées avec une version inférieure à 4.0. Si vous n'avez pas de telles machines, ce ne sera pas des registres de médias globaux ; avec VirtualBox 4.0, chaque fichier XML d'une machine a son propre registre de médias.  
De même, avant VirtualBox 4.0, le dossier "Machines" par défaut et le dossier "HardDisks" par défaut se trouvaient dans le répertoire de configuration de VirtualBox (par exemple, `$HOME/.VirtualBox/Machines` sur Linux). Si vous mettez à jour à partir d'une version de VirtualBox inférieure à la 4.0, les fichiers de ce répertoire ne sont pas déplacés automatiquement afin de ne pas casser la rétro compatibilité.  

[Retour à la table des matières](#Table des matières)

# 10.1.4 Résumé des modifications de la configuration de 4.0<a id="mark10.1.4"></a>

Avant 4.0 4.0 ou supérieur  
Dossier par défaut des machines  
`$HOME/.VirtualBox/Machines$HOME/VirtualBox VMs`  

Emplacement des images de disque  
`$HOME/.VirtualBox/HardDisks In each machine's folder`  

Extension des fichiers de paramètres de la machine  
`.xml .vbox`  

Registre de médias Fichier VirtualBox.xml  
`global`  

Chaque fichier des paramètres d'une machine  
`Enregistrement des médias Ouverture/fermeture  
`explicite obligatoire`  
`Automatique après la connexion`  

[Retour à la table des matières](#Table des matières)

# 10.1.5 fichiers XML de VirtualBox<a id="mark10.1.5"></a>

VirtualBox utilise l'XML tant pour les fichiers des paramètres de la machine que pour le fichier de configuration global, VirtualBox.xml.  
Tous les fichiers XML de VirtualBox sont versionnés. Quand un nouveau fichier de paramètres est créé (par exemple parce qu'on crée une nouvelle machine virtuelle), VirtualBox utilise automatiquement le format des paramètres de la version actuelle de VirtualBox. Il se peut que ces fichiers ne soient pas lus si vous rétrogradez à une version plus ancienne de VirtualBox. Cependant, quand VirtualBox rencontre un fichier de paramètres d'une ancienne version (comme après une mise à jour de VirtualBox), il essaie autant que possible de garder le format des paramètres.  
Il ne mettra à jour en silence les fichiers des paramètres que si les paramètres actuels ne peuvent pas être exprimés dans l'ancien format, par exemple parce que vous avez activé une fonction qui n'était pas présente dans l'ancienne version de VirtualBox. 1 Dans ces cas-là, VirtualBox sauvegarde le fichier des anciens paramètres dans le répertoire de configuration de la machine virtuelle.  
Si vous avez besoin de revenir à une ancienne version de VirtualBox, vous devrez recopier à la main ces fichiers de sauvegarde.  
Nous ne documentons volontairement pas les spécifications des fichiers XML de VirtualBox car nous nous réservons le droit de les modifier à l'avenir. Nous vous suggérons donc fortement de ne pas éditer ces fichiers à la main. VirtualBox offre un accès complet à ses données de configuration par son outil en ligne de commande VBoxManage (voir le chapitre [8 VBoxManage)](#mark8) et son API (voir le chapitre [11 Interfaces de programmation de VirtualBox).](#mark11)  

1 Par exemple, avant VirtualBox 3.1, il n'était possible que d'activer ou de désactiver un seul lecteur DVD dans une machine virtuelle. S'il a été activé, cela serait toujours possible sur le deuxième maître du contrôleur IDE. Avec VirtualBox 3.1, on peut connecter des lecteurs DVD à un slot de son choix sur un contrôleur de son choix, donc ils pourraient être sur le deuxième esclave d'un contrôleur IDE ou sur un slot SATA. Si vous avez un fichier de paramètres d'une machine d'une ancienne version et si vous mettez à jour VirtualBox vers la 3.1 et si vous déplacez le lecteur DVD de sa position par défaut, on ne peut pas l'exprimer dans l'ancien format des paramètres ; le fichier XML de la machine serait écrit dans le nouveau format et une copie de sauvegarde de l'ancien format serait gardée.  

[Retour à la table des matières](#Table des matières)

# 10.2 Exécutables et composants de VirtualBox<a id="mark10.2"></a>

VirtualBox a été conçu pour être modulaire et flexible. Quand on ouvre l'interface graphique (GUI) de VirtualBox et qu'on démarre une VM, au moins trois processus fonctionnent :  

1. VBoxSVC, le processus du service de VirtualBox qui fonctionne toujours en tâche de fond.  
Ce processus est lancé automatiquement par le processus du premier client VirtualBox (la GUI, VBoxManage, VBoxHeadless, le service web ou autres) et il s'arrête peu de temps après que le dernier client a quitté. Le service est responsable d'archiver, maintenir l'état de toutes les VMS et de la communication entre les composants de VirtualBox. Cette communication est implémentée via COM/XPCOM.  
Note: Quand nous parlons de "clients" ici, nous voulons dire les clients locaux d'un processus serveur VBoxSVC en particulier, pas les clients sur un réseau. VirtualBox utilise son propre concept client/serveur pour permettre à ses processus de coopérer, mais tous ces processus tournent sous le même compte utilisateur du système d'exploitation hôte, et c'est entièrement transparent pour l'utilisateur.  
2. Le processus de la GUI„ VirtualBox, une application client basée sur la bibliothèque multiplateformes Qt. Lancée sans l'option `--startvm`, cette application agit comme un gestionnaire de VirtualBox, en affichant les VMs et leurs paramètres. Elle communique alors les paramètres et les changements d'état à `VBoxSVC` et elle répercute les changements subis par d'autres moyens comme VBoxManage.  
3. Si on lance l'application client VirtualBox avec l'argument `--startvm`, elle charge la bibliothèque VMM qui inclut l'hyperviseur proprement dit et qui lance une machine virtuelle et offre une entrée et une sortie à l'invité.

Toutes les interfaces de VirtualBox (client) communiqueront avec le processus du service et elles peuvent contrôler et répercuter l'état actuel. Par exemple, tant le selecteur de VM que la fenêtre de VM ou VBoxManage peuvent être utilisés pour mettre en pause la VM en fonction, les autres composants reflèteront toujours le changement d'état.  
La GUI de VirtualBox n'est qu'une des nombreuses interfaces (client) disponibles. La liste complète comprise dans VirtualBox est :  

1. VirtualBox, l'interface Qt implémentant le gestionnaire et les VMS en fonction ;  
2. VBoxManage, une alternative moins conviviale mais plus puissante, décrite au chapitre [8 VBoxManage.](#mark8)  
3. VBoxSDL, une interface graphique simple basée sur la bibliothèque SDL ; voir chapitre [9.1 VBoxSDL, l'afficheur simplifié de VM.](#mark9.1)  
4. VBoxHeadless, une interface de VM qui ne fournit pas directement de sortie graphiqke et d'entrée clavier/souris, mais qui permet une redirection par VirtualBox Remote Desktop Extension; voir chapitre [7.1.2 VBoxHeadless, le serveur de bureau distant.](#mark7.1.2)  
5. vboxwebsrv, le processus du service web de VirtualBox qui permet de contrôler un hôte VirtualBox à distance. Ceci est décrit en détails dans le manuel de référence du VirtualBox Software Development Kit (SDK) ; merci de voir le chapitre [11 Interfaces de programmation de VirtualBox](#mark11) pour des détails.  
6. Le shell Python de VirtualBox, une alternative en Python à VBoxManage. Elle est aussi décrite dans le manuel de référence du SDK.

En interne, VirtualBox comporte beaucoup plus d'interfaces séparées. Vous pourriez les rencontrer en analysant les messages d'erreur internes ou les fichiers journaux. Parmi elles, on compte :  

* IPRT, une bibliothèque d'exécution portable qui forme une couche d'abstraction d'accès aux fichiers, du filetage (threading), la manipulation de chaînes, etc. Chaque fois que VirtualBox accède aux fonctions du système hôte, il le fait via cette bibliothèque pour une portabilité multiplateformes.  
* VMM (Virtual Machine Monitor), le cœur de l'hyperviseur.  
* EM (Execution Manager), contrôle l'exécution d'un code invité.  
* REM (Recompiled Execution Monitor), fournit une émulation logicielle des instructions du processeur.  
* TRPM (Trap Manager), intercepte et traite les traps et les exceptions de l'invité.  
* HWACCM (Hardware Acceleration Manager), offre un support pour VT-x et AMD-V.  
* PDM (Pluggable Device Manager), une interface abstraite entre le VMM et les périphériques émulés qui sépare lese implémentations du périphérique de l'intérieur du VMM et qui facilite l'ajout de nouveaux périphériques émulés. Par PDM, des développeurs tiers peuvent ajouter de nouveaux périphériques virtuels à VirtualBox, sans devoir modifier VirtualBox lui-même.  
* PGM (Page Manager), un composant contrôlant la pagination de l'invité.  
* PATM (Patch Manager), corrige le code de l'invité pour améliorer et accélérer la virtualisation logicielle.  
* TM (Time Manager), gère les horloges et tous les aspects de l'heure des invités.  
* CFGM (Configuration Manager), fournit une structure arborescente qui garde les paramètres de configuration de la VM et tous les périphériques émulés.  
* SSM (Saved State Manager), enregistre et charge l'état d'une VM.  
* VUSB (Virtual USB), une couche USB qui sépare les contrôleurs USB émulés des contrôleurs de l'hôte et des périphériques USB ; ceci active également l'USB distant.  
* DBGF (Debug Facility), un débogueur de VM intégré.  
* VirtualBox émule un certain nombre de périphériques pour offrir l'environnement matériel dont ont besoin divers invités. La plupart de ces périphériques standards se trouvent dans beaucoup de machines compatibles PC et sont largement supportés par les systèmes d'exploitation invités. Pour les périphériques réseaux et de stockage en particulier, il existe plusieurs options pour que les périphériques émulés accèdent au matériel sous-jacent. Ces périphériques sont gérés par PDM.  
* Les suppléments invité pour divers systèmes d'exploitation invités. Il s'agit de code installé dans les machines virtuelles ; voir chapitre [4 Les suppléments invité.](#mark4)  
* Le composant "Main" est spécial : il croise tous les bits ci-dessus et c'est la seule API publique fournie par VirtualBox. Tous les processus clients listés ci-dessus n'utilisent que cettte API et n'accèdent jamais directement aux composants de l'hyperviseur. Il s'en suit que des applications tierces utilisant l'API principale de VirtualBox peuvent s'appuyer sur le fait qu'elle est toujours bien testée et que toutes les possibilités de VirtualBox sont complètement présentées. C'est cette API qui est décrite dans le manuel de référence du SDK de VirtualBox indiqué ci-dessus (de nouveau, voir le chapitre [11 Interfaces de programmation de VirtualBox).](#mark11)  

[Retour à la table des matières](#Table des matières)

# 10.3 Virtualisation matérielle vs. logicielle<a id="mark10.3"></a>

VirtualBox permet aux logiciels de la machine virtuelle de s'exécuter directement sur le processeur de l'hôte, mais il utilise une gamme de techniques complexes pour intercepter les opérations interférant avec votre hôte. Chaque fois que l'invité essaie de faire quelque chose de potentiellement dangereux pour votre ordinateur et ses données, VirtualBox s'interpose et rentre en action. En particulier, pour beaucoup de matériel auquel croit avoir accès l'invité, VirtualBox simule un certain environnement "virtuel" selon la façon dont vous avez configuré une machine virtuelle. Par exemple, quand l'invité cherche à accéder à un disque dur, VirtualBox redirige ces requêtes vers ce que vous avez configuré comme étant le disque dur virtuel de la machine virtuelle – en principe, un fichier image sur votre hôte.  
Malheureusement, la plateforme x86 n'a jamais été conçue pour pour être virtualisée. La détection des situations où VirtualBox doit contrôler le code invité qui s'exécute, comme décrit ci-dessus, est difficile. Il existe deux façons de faire cela :  

* Depuis 2006, les processeurs Intel et AMD supportent ce qu'on appelle la "virtualisation matérielle". Cela signifie que ces processeurs peuvent aider VirtualBox à intercepter des opérations potentiellement dangereuses que pourrait essayer de faire le système d'exploitation invité et ils facilitent la présentation de matériel virtuel à une machine virtuelle.  
Ces fonctionnalités du matériel diffèrent entre les processeurs Intel et AMD. Intel a appelé sa techno VT-x ;; AMD a nommé la leur AMD-V. Le support d'Intel et d'AMD de la virtualisation est très différent dans le détail, mais pas si différent dans le principe.  

Note: Sur de nombreux systèmes, les fonctions de virtualisation matérielle doivent être préalablement activées dans le BIOS avant de pouvoir être utilisées par VirtualBox.  

Contrairement aux autres logiciels de virtualisation, pour de nombreux scénarios d'utilisation, VirtualBox n'exige pas que les fonctions de virtualisation matérielle soient présentes. Par des techniques sophistiquées, VirtualBox virtualise beaucoup de systèmes d'exploitation invités complets de manière logicielle. Cela signifie que vous pouvez lancer des machines virtuelles même sur d'anciens processeurs qui ne supportent pas la virtualisation matérielle.  
Même si VirtualBox n'exige pas toujours la virtualisation matérielle, son activation est nécessaire dans les scénario suivants :  

* Certains systèmes d'exploitation, rares, comme OS/2, utilisent des instructions processeur très ésotériques qui ne sont pas supportées par notre virtualisation logicielle. Pour les machines virtuelles configurées pour contenir un tel système d'exploitation, la virtualisation matérielle est activée automatiquement.
* Le support des invités 64 bits de VirtualBox (ajouté avec la version 2.0) et le multiprocessing (SMP, ajouté avec la version 3.0) exigent tous deux l'activation de la virtualisation matérielle (ce n'est tout de même pas une grosse limite vu l'immense majorité des processeurs 64 bits et multi cœurs actuels incluant lavirtualisation matérielle ; les exceptions à cette règle étant par exemple les anciens processeurs Intel Celeron et AMD Opteron.)

Avertissement: Ne lancez pas d'autres hyperviseurs (produits de virtualisation open-source ou propriétaires) en même temps que VirtualBox ! Si plusieurs hyperviseurs peuvent, en principe, être installés en parallèle, n'essayez pas de lancer plusieurs machines virtuelles à partir d'hyperviseurs concurrents en même temps. VirtualBox ne peut pas savoir ce qu'un autre hyperviseur essaie de faire sur un même hôte, et surtout si plusieurs produits essaient d'utiliser la virtualisation matérielle, les fonctions telles que VT-x, cela peut planter tout l'hôte. De plus, dans VirtualBox, vous pouvez mélanger la virtualisation logicielle et matérielle quand vous lancez plusieurs VMs. Dans certains cas, une petite perte de performances sera inévitable si vous mélangez des VMs avec virtualisation VT-x et logicielle. Nous recommandons de ne pas mélanger les modes de virtualisation si la performance maximum et une faible temps système sont essentiels. Cela ne s'applique pas à AMD-V.

[Retour à la table des matières](#Table des matières)

# 10.4 Détails sur la virtualisation logicielle<a id="mark10.4"></a>

L'implémentation de la virtualisation sur les processeurs x86 sans le support de la virtualisation matérielle est une tâche extraordinairement complexe car l'architecture du processeur n'a pas été conçue pour être virtualisée. On peut résoudre en général les problèmes, mais au prix de performances réduites. Ainsi, il existe un conflit constant entre les performances de virtualisation et et son soin.  
Le jeu d'instructions x86 a été conçu au départ dans les années 1970 et subi des modifications significatives avec l'ajout d'un mode protégé dans les années 1980s avec l'architecture du processeur 286, puis à nouveau avec l'Intel 386 et l'architecture 32 bits. Alors que le 386 avait un support de virtualisation vraiment limité pour les opérations en mode réel, (le mode V86, utilisé par la "DOS Box" de Windows 3.x et d'OS/2 2.x), aucun pport n'existait pour virtualiser toute l'architecture.  
En théorie, la virtualisation logicielle n'est pas complexe en soi. Outre les quatre niveaux de privilèges ("rings") fournis par le matériel (dont en général on n'utilise que deux : ring 0 pour le mode noyau et ring 3 pour le mode utilisateur), il faut faire la différence entre le "contexte hôte" et le "contexte invité".  
Dans le "contexte hôte", tout est comme s'il n'y avait pas d'hyperviseur actif. Cela pourrait être le mode actif si une autre application de votre hôte consomme du temps processeur ; dans ce cas, il existe un mode ring 3 hôte et un mode ring 0 hôte. L'hyperviseur n'est pas impliqué.  
Par contre, dans le "contexte invité", une machine virtuelle est active. Tant que le code invité s'exécute en ring 3, ce n'est pas très problématique vu qu'un hyperviseur peut paramétrer les tableaux des pages correctement et exécuter ce code de manière native sur le processeur. Les problèmes arrivent sur la manière d'intercepter ce que fait le noyau de l'invité.
Il y a plusieurs solutions possibles à ces problèmes. Une approche est l'émulation logicielle totale, ce qui implique généralement une recompilation. A savoir que tout le code qui doit être
exécuté par l'invité est analysé, transformé sous une forme qui n'autorisera pas l'invité à modifier et à voir l'état réel du processeur, lequel l'exécutera simplement. Ce processus est bien sûr très complexe et coûteux en termes de performances. (VirtualBox contient un recompilateur basé sur QEMU qu'on peut utiliser pour une émulation logicielle pure, mais le recompilateur n'est activé que dans des situations particulières, décrites ci-dessous.)  
Une autre solution possible est la paravirtualisation, où seuls les OS invités spécialement modifiés sont autorisés à s'exécuter. De cette manière, la plupart des accès matériels sont rendus abstraits et toutes les fonctions qui accèderaient normalement au matériel ou à l'état privilégié du processeur se basent plutôt sur l'hyperviseur. La paravirtualisation peut donner de bonnes fonctionnalités et de bonnes performances sur des processeurs x86 standards, mais cela ne peut marcher que si l'OS invité peut être modifié, ce qui n'est évidemment pas toujours le cas.  
VirtualBox choisit une approche différente. Quand on démarre une machine virtuelle par un pilote noyau du support ring-0, VirtualBox a réglé le système hôte pour qu'il puisse lancer nativement la plupart du code invité, mais il s'insère lui-même "en bas" de l'image. Il peut alors supposer le contrôle lorsque c'est nécessaire – si une instruction privilégiée est exécutée, l'invité plante (traps) (en particulier car un accès au registre E/S a été tenté et un périphérique doit être virtualisé) ou car des interruptions se produisent. VirtualBox peut alors gérer cela et soit acheminer une requête vers un périphérique virtuel, soit, si possible, déléguer la gestion de tels éléments à l'OS hôte ou invité. Dans le contexte invité, VirtualBox peut être donc dans un des trois états :

* Le code invité ring 3 s'exécute sans modifications, à pleine vitesse, autant que possible. Lenombre de fautes sera généralement faible (sauf si l'invité autorise l'E/S du port depuis ring , chose que nous ne pouvons pas faire car nous ne voulons pas que l'invité puisse accéder aux ports réels). On parle aussi de "mode brut", car le code ring-3 de l'invité s'exécute sans modifications.
* Pour le code invité en ring 0, VirtualBox utilise une astuce savoureuse : il reconfigure l'invité pour que son code ring-0 se lance plutôt en ring 1 (ce qui n'est en principe pas utilisé sur les systèmes d'exploitation x86). Il s'en suit que lorsque le code ring-0 de l'invité  qui s'exécute en fait en ring 1) tel que le pilote d'un périphérique invité, essaie d'écrire sur un registre E/S ou d'exécuter une instruction non privilégiée, l'hyperviseur de VirtualBox en ring 0 "réel" peut prendre le dessus.
* L'hyperviseur (VMM) peut être actif. Chaque fois qu'une erreur survient, VirtualBox regarde l'instruction problématique et il peut la reléguer à un périphérique virtuel, à l'OS ôte, à l'invité ou il peut le lancer dans le recompilateur.
En particulier, on utilise le recompilateur quand le code invité désactive les interruptions VirtualBox ne peut pas savoir quand on y reviendra (dans ces situations, VirtualBox analyse en fait le code invité en utilisant son propre désassembleur). De plus, certaines instructions privilégiées telles que LIDT doivent être gérées à part. Enfin, tout le code en mode réel ou protégé (comme le code du BIOS, un invité DOS ou un démarrage de système d'exploitation) se lance complètement dans un recompilateur.  

Malheureusement, cela ne fonctionne que dans une certaine mesure. Entre autres, les situations suivantes nécessitent une gestion spéciale :  

1. L'exécution de code ring 0 en ring 1 provoque beaucoup d'erreurs d'instructions supplémentaires car ring 1 n'est pas autorisé à exécuter des instructions privilégiées (dont le ring 0 de l'invité en contient beaucoup). Avec chacune de ces erreurs, le VMM doit s'arrêter et émuler le code pour obtenir le comportement désiré. Si cela fonctionne, l'émulation de milliers d'erreurs est très coûteuse et très pénalisante en performances de l'invité virtualisé.  
2. Il existe des défauts dans l'implémentation de ring 1 de l'architecture x86 qui n'ont jamais été corrigés. Certaines instructions qui planteraient même en ring 1 ne le font pas. Cela concerne par exemple les paires d'instructions LGDT/SGDT, LIDT/SIDT, ou POPF/PUSHF.  
Alors que l'instruction "load" est privilégiée et peut donc planter, l'instruction "store" réussit toujours. Si l'invité est autorisé à les exécuter, il verra l'état réel du PC et pas celui virtualisé.  
L'instruction CPUID a également le même problème.  
3. Un hyperviseur a en général besoin de réserver certaines parties de l'espace d'adresse de 'invité (tant l'espace d'adresse liénaire que les sélecteurs) pour son propre usage. Ce n'est as complètement transparent pour l'OS invité et cela peut provoquer des conflits.  
4. L'instruction SYSENTER (utilisée pour les appels système) exécutée par une application en fonction dans un OS invité transite toujours par le ring 0. Mais c'est là où l'hyperviseur e lance et pas l'OS invité. Dans ce cas, l'hyperviseur doit bloquer et émuler l'instruction même quand ce n'est pas souhaitable.  
5. Les registres de segments du processeur contiennent un cache de descripteur "caché" inaccessible de manière logicielle. L'hyperviseur ne peut pas lire, enregistrer ou restaurer cet état, mais l'OS invité peut l'utiliser.  
6. Certaines ressources doivent (et peuvent) être neutralisées par l'hyperviseur, mais l'accès  est si fréquent que cela crée une perte significative de performances. Un exemple réside dans le registre TPR (Task Priority) en mode 32 bits. Les accès à ce registre doivent être bloqués par l'hyperviseur, mais certains systèmes d'exploitation invités (en particulier Windows et Solaris) écrivent très souvent dans ce registre, ce qui porte une atteinte certaine aux performances de virtualisation.  
Pour corriger ces problèmes de performances et de sécurité, VirtualBox contient un gestionnaire d'analyse et de scan de code (Code Scanning and Analysis Manager (CSAM)), qui désassemble le code invité, et un gestionnaire de correctifs (Patch Manager (PATM)), qui peut le remplacer pendant l'exécution.  
Avant d'exécuter du code ring 0, CSAM le scanne de manière récursive pour trouver des instructions problématiques. PATM le corrige in-situ , c'est-à-dire qu'il remplace l'instruction par un passage à la mémoire de l'hyperviseur, où un générateur intégré a mis une implémentation plus convenable. En réalité, c'est une tâche très complexe car il existe de nombreuses situations compliquées à trouver et à gérer correctement. Donc, vu son actuelle complexité, vous pourriez trouver que PATM est un recompilateur avancé in-situ recompiler.  
De plus, à chaque fois qu'une erreur survient, VirtualBox analyse le code problématique pour déterminer s'il est possible de le corriger afin de l'empêcher de provoquer davantage futures d'erreurs. Cette approche fonctionne bien en pratique et améliore de façon drastique les performances de la virtualisation logicielle.

[Retour à la table des matières](#Table des matières)

# 10.5 Détails sur la virtualisation matérielle<a id="mark10.5"></a>

Avec VT-x d'Intel, il existe deux modes opératoires du processeur : le mode racine VMM et le
mode non-racine.  
* En mode racine, le processeur se comporte beaucoup comme les anciennes générations de
processeurs sans le support VT-x. Il y a quatre niveaux de privilèges ("rings") et le même
jeu d'instructions est supporté avec, en plus, des instructions spécifiques de virtualisation.  
Le mode racine est ce que le système d'exploitation hôte utilise sans virtualisation, et il est
aussi utilisé par l'hyperviseur quand la virtualisation est active.  
* En mode non-racine, le fonctionnement du processeur est très différent. Il y a toujours
quatre niveaux de privilèges et le même jeu d'instructions, mais une nouvelle structure, qui
s'appelle VMCS (Virtual Machine Control Structure), contrôle désormais le fonctionnement
du processeur et elle détermine la manière dont se comportent certaines instructions. Le
mode non-racine est celui dans lequel les systèmes invités fonctionnent.  
Le passage du mode racine au mode non racine s'appelle "l'entré1 VM", celui en sens inverse
s'appelle "Quitter VM". Le VMCS inclut une zone d'état invité et hôte sauvegardée/restaurée à
chaque entrée et sortie en VM. Surtout, les VMMS contrôlent les opérations de l'invité qui feront
quitter la VM.  
Les VMCS permettent un contrôle très fin via ce que les invités peuvent et ne peuvent pas faire.  
Par exemple, un hyperviseur peut autoriser un invité à écrire certains bits dans des registres de
contrôle protégés, mais pas dans d'autres. Cela permet une virtualisation efficace dans des cas
où les invités peuvent être autorisés à écrire des bits de contrôle sans gêner l'hyperviseur, tout en
les empêchant de modifier les bits de contrôle dont l'hyperviseur a besoin pour avoir un contrôle
total. Le VMMS fournit aussi un contrôle via l'affichage d'interruptions et les exceptions.  
Chaque fois qu'une instruction ou un événement fait quitter une VM, le VMCS contient des informations sur les raisons de la sortie, ainsi que, souvent, des détails environnants. Par exemple,
si une écriture dans le registre CR0 fait quitter, l'instruction en cause est enregistrée, ainsi que le
fait qu'un accès en écriture sur le registre de contrôle a tronqué la sortie, et des informations
sur  le registre source et destination. L'hyperviseur peut ainsi gérer efficacement la condition
sans avoir besoin de techniques avancées telles que CSAM et PATM décrits ci-dessus.  
VT-x évite intrinsèquement plusieurs problèmes qui se posent avec la virtualisation logicielle.  
L'invité a son propre espace d'adresse distinct, qu'il ne partage pas avec l'hyperviseur, ce qui élimine les plantages potentiels. De plus, le code du noyau de l'OS invité se lance avec le privilège
ring 0 en mode non racine VMX, rendant inopérants les problèmes d'exécution de code en ring
0 sur des niveaux moins privilégiés. Par exemple, l'instruction SYSENTER peut faire une transition vers le ring 0 sans problèmes. Naturellement, même en ring 0 en mode non-racine VMX,
tous les accès E/S par le code invité amène toujours la VM à quitter, permettant l'émulation de
périphérique.  
La plus grosse différence entre VT-x et AMD-V est qu'AMD-V fournit en environnement de
virtualisation plus complet. VT-x exige que le code non-racine VMX s'exécute en mode pagination
activée, ce qui rejette la virtualisation matérielle de logiciels dont le code est en mode réel et en
mode protégé non paginé. Cela n'inclut en général que les firmwares et les chargeurs d'OS,
néanmoins cela complique l'implémentation d'un hyperviseur avec VT-x. AMD-V n'a pas cette
restriction.  
Bien entendu, la virtualisation matérielle n'est pas parfaite. Par rapport à la virtualisation
logicielle, la charge des ﬁns des VMs est relativement élevée. Cela pose des problèmes aux
périphériques dont l'émulation requiet un grand nombre de blocages (trass). Par exemple, avec
le périphérique VGA en mode 16 couleurs, mon seulement tous les accès au port en E/S, mais
aussi tous les accès à la mémoire tampon (framebuffer) doivent être bloqués.  

[Retour à la table des matières](#Table des matières)

# 10.6 Pagination nestée et VPIDs<a id="mark10.6"></a>

En plus de la virtualisation matérielle "brute", votre processeur peut supporter aussi des techniques sophistiquées supplémentaires : 2

* Une fonctionnalité récente, qui s'appelle la "pagination nestée" implémente la gestion de
la mémoire dans le matériel, ae qui peut beaucoup accélérer la virtualisation matérielle
puisque ces tâches n'ont plus besoin d'être accomplies par le logiciel de virtualisation.  
Avec la pagination nested, le matériel fournit un autre niveau d'indirection en passant
du linéaire aux adresses physiques. Les tables de page fonctionnent comme avant mais
les adresses linéaires sont désormais d'abord traduites en adresses physiques de "l'invité"
et pas directement en adresses physiques. Il existe maintenant un nouveau jeu de registres de pagination sous le mécanisme depagination traditionnel et qui traduit les adresses
physiques invitées en adresses physiques de l'hôte, qui sont utilisées pour accéder à la
mémoire.  
La pagination nested élimine la charge causée par les ﬁns de VM et les accès aux tables de
pages. Par définition, avec les tables de pages nested, l'invité peut gérer la pagination sans
que l'hyperviseur n'intervienne. La pagination nestée améliore ainsi substantiellement les
performances de virtualisation.  
Sur les processeurs AMD, la pagination nested est disponible depuis l'architecture
Barcelona (K10) – on l'appelle maintenant la "rapid virtualization indexing" (RVI). Intel a ajouté le support de la pagination nested, qu'ils appellent la "extended page tables"
(EPT), à leurs processeurs Core i7 (Nehalem).  
Si la pagination nested est activée, l'hyperviseur de VirtualBox peut également utiliser largepages, pour réduire l'utilisation du TLB et la charge. Cela peut provoquer une amélioration
jusqu'à 5% des performances. Pour activer cette fonctionnalité pour une VM, vous avez
besoin d'utiliser la commande `VBoxManage modifyvm --largepages` ; voir chapitre [8.8 VBoxManage modifyvm.](#mark8.8)  
* Sur les processeurs Intel, une autre fonction matérielle, qui s'appelle "Virtual Processor
Identifiers" (VPIDs), peut beaucoup accélérer le changement de contexte en réduisant le
besoin de flusher beaucoup les Translation Lookaside Buffers (TLBs) du processeur.  
Pour activer ces fonctions pour une VM, vous devez utiliser les commandes `VBoxManage modifyvm --vtxvpid` et `--largepages` ; voir chapitre [8.8 VBoxManage modifyvm](#mark8.8)

2 VirtualBox 2.0 a ajouté le support de la pagination nestée d'AMD ; le support de l'EPT et des VPIDs d'Intel a été ajouté à la version 2.1.

[Retour à la table des matières](#Table des matières)

# 11 Interfaces de programmation de VirtualBox<a id="mark11"></a>

VirtualBox est fournie avec un support complet pour les développeurs tiers. Ce qu'on appelle
"l'API principale" de VirtualBox implémente toutes les fonctionnalités du moteur de virtualisation. Elle est complètement documentée et disponible pour n'importe qui souhaitant contrôler
VirtualBox en programmant.
L'API principale est disponible pour des clients C++ via COM (sur les hôtes Windows) ou
XPCOM (sur les autres hôtes). Des passerelles existent aussi avec SOAP, Java et Python.  
Toutes les informations sur la programmation (documentation, informations de référence, entêtes et autres fichiers d'interface ainsi que des modèles) ont été mises dans un Software Development Kit (SDK), distinct disponible en téléchargement sur <http://www.virtualbox.org>  
En particulier, le SDK est fourni avec un "PGuide de pogrammation et de Référence" au format
PDF contenant entre autres des informations qui se trouvaient jadis dans ce chapitre du manuel
de l'utilisateur.  

[Retour à la table des matières](#Table des matières)

# 12 Dépannage<a id="mark12"></a>

Ce chapitre apporte des réponses à des questions fréquemment posées. Afin d'améliorer votre
expérience utilisateur avec VirtualBox, il est recommandé de lire cette section pour en apprendre plus sur les soucis classiques et pour avoir les recommandations sur la manière d'utiliser le
produit.

[Retour à la table des matières](#Table des matières)

# 12.1 Procédures et outils<a id="mark12.1"></a>

# 12.1.1 Catégoriser et isoler des problèmes<a id="mark12.1.1"></a>

Le plus souvent, un invité virtualisé se comporte comme un système physique. Une machine
virtuelle rencontrera les mêmes problèmes que le ferait une machine physique. Si, par exemple,
vous perdez la connectivité à Internet à cause de problèmes extérieurs, les machines virtuelles
seront touchées exactement comme celles physiques.  
Si vous rencontrez un problème vraiment lié à VirtualBox, celui-ci aide à le catégoriser et à
l'isoler. Voici quelques-unes de questions auxquelles vous devriez répondre avant de signaler un
problème :  

1. Le problème est-il spécifique à un OS invité en particulier ? À une version de l'OS invité ?  
Surtout avec les problèmes liés aux invités Linux, le problème peut être spécifique à une
distribution et à une version de Linux.  
2. Le problème est-il spécifique à un OS hôte en particulier ?  
Les problèmes ne sont généralement pas spécifiques à un OS hôte (car la plupart de la base du code de VirtualBox est
partagée par toutes les plateformes supportées), mais, surtout en matière de réseau et
de support USB, il existe d'importantes différences entre les plateformes hôtes. Certains
problèmes liés à la GUI sont aussi spécifiques à l'hôte.  
3. Le problème est-il spécifique à un matériel hôte particulier ?  
Cette catégorie de problèmes
est généralement liée au processeur de l'hôte. D1 fait de différences importantes entre VT-x
et AMD-V, des problèmes peuvent être spécifiques à l'une ou l'autre technologie. Le modèle
exact du processeur peut également marquer une différence (même pour la virtualisation
logicielle) car différents processeurs supportent différentes fonctions, ce qui peut toucher
certains aspects du fonctionnement du processeur invité.  
4. Le problème est-il spécifique à un mode de virtualisation en particulier ?  
Certains problèmes peuvent n'arriver qu'en mode virtualisation logicielle, d'autres peuvent être spécifiques à la virtualisation matérielle.  
5. Le problème est-il spécifique au SMP de l'invité ? À savoir, est-il lié au nombre de processeurs virtuels (VCPUs) de l'invité ?  
L'utilisation de plus d'un processeur touche de façon
significative le fonctionnement interne d'un OS invité.  
6. Le problème est-il spécifique aux suppléments invité ?  
Dans certains cas, c'est écrit (par
exemple un problème de dossiers partagés), dans d'autres, cela peut être moins évident
(par exemple, des problèmes d'affichage). Si le problème est spécifique aux suppléments
invité, est-il spécifique à une version en particulier des suppléments invité ?  
7. Le problème est-il spécifique à un environnement particulier ?  
Certains problèmes sont
liés à un environnement et externes à la VM ; cela implique en général un paramétrage du
réseau. Certaines configurations de serveurs externes tels que DHCP ou PXE peuvent poser
des problèmes qui ne surviennent pas avec d'autres serveurs identiques.  
8. Le problème est-il une régression ?  
Le fait de savoir qu'un problème est une régression
facilite beaucoup en général la recherche d'une solution. Dans ce cas, il est crucial de
connaître la version concernée et celle qui ne l'est pas.  

[Retour à la table des matières](#Table des matières)

# 12.1.2 Recueillir des informations de débogage<a id="mark12.1.2"></a>

Pour déterminer un problème, il est souvent important de recueillir des informations de débogage
que l'assistance de VirtualBox peut analyser. Cette section contient des informations sur le type
d'informations que vous pouvez obtenir.  
À chaque fois que VirtualBox démarre une VM, ce qu'on appelle un "release log ﬁle" (fichier
journal) est créé, donnant beaucoup d'informations sur la configuration de la VM et les événements lors de son exécution. Le fichier journal s'appelle VBox.log et se trouve dans le dossier
du fichier journal de la VM. Il s'agira en général d'un répertoire comme celui-ci :  

`$HOME/VirtualBox VMs/{machinename}/Logs`  

Au démarrage d'une VM, le fichier de configuration de la dernière exécution sera renommé
en .1, jusqu'à .3. Parfois, quand il y a un problème, il est utile de jeter un œil dans le journal.  
Quand vous demandez de l'aide sur VirtualBox, le fait de fournir le fichier journal correspondant
est obligatoire.  
Par commodité, pour chaque machine virtuelle, la fenêtre principale de VirtualBox peut afficher ces journaux dans une fenêtre. Pour y accéder, sélectionnez une machine virtuelle dans la
liste à gauche et sélectionner "Afficher les journaux..." dans la fenêtre "Machine".  
Le fichier journal (VBox.log) contient une gamme d'informations de diagnostique telles que le
type et la version d'OS hôte, la version de VirtualBox et l'architecture (32 ou 64 bits), un aperçu
complet de la configuration de l'invité (CFGM), des informations détaillées sur le type et les
fonctions supportées par le processeur, si la virtualisation matérielle est activée, des informations
sur le réglage VT-x/AMD-V, l'état des transitions (création, exécution, en pause, éteint, etc.), les
messages du BIOS invité, les messages des suppléments invité, les entrées du journal spécifiques
aux périphériques, à la fin de l'exécution, l'état final de l'invité et des statistiques consolidées.  
En cas de plantage, il est très important de recueillir les sorties du plantage. Ceci est vrai tant
pour les plantages de l'hôte que pour ceux de l'invité. Pour des informations sur l'activation de
plus de messages sur les systèmes Linux, Solaris et OS X, reportez-vous à l'article sur les messages
du cœur sur le site Internet de VirtualBox. 1  
Vous pouvez également utiliser VBoxManage debugvm pour créer un journal de toute une machine virtuelle ; voir chapitre [8.32 VBoxManage debugvm.](#mark8.32)  
Pour des problèmes liés au réseau, il est souvent utile de récupérer une trace du trafic réseau.  
Si le trafic est acheminé par un adaptateur de l'hôte, il est possible d'utiliser Wireshark ou un
outil similaire pour y récupérer le trafic. Cependant, cela inclut aussi souvent beaucoup de trafic
indépendant de la VM.  
VirtualBox offre la possibilité de récupérer seulement le trafic réseau de l'adaptateur réseau
d'une VM spécifique. Reportez-vous à l'article sur le trafic réseau sur le site Internet de
VirtualBox 2 pour des informations sur l'activation de cette récupération. Les fichiers de trace
créés par VirtualBox sont au format .pcap et peuvent être facilement analysés avec Wireshark.  

1 <http://www.virtualbox.org/wiki/Core_dump>  
2 <http://www.virtualbox.org/wiki/Network_tips>  

[Retour à la table des matières](#Table des matières)

# 12.1.3 Le débogueur de VM intégré<a id="mark12.1.3"></a>

VirtualBox inclut un débogueur de VM intégré, qui peut servir aux utilisateurs avancés. Ce
débogueur permet d'examiner et, dans une certaine mesure, de contrôler l'état de la VM.

Avertissement: L'utilisation du débogueur de VM est à vos risques et périls. Il n'existe
pas d'assistance autour, la documentation suivante a été rendue disponible uniquement pour les utilisateurs avancés ayant un degré de familiarité très élevé du jeu
d'instructions d'une machine x86/AMD64, ainsi que des connaissances détaillées de
l'architecture PC. Une certaine familiarité avec les côtés internes de l'OS invité concerné peut aussi aider.

Le débogueur de VM est disponible dans toutes les versions ordinaires de production de
VirtualBox, mais il est désactivé par défaut car l'utilisateur moyen l'utilisera très peu. Il existe
deux manières d'accéder au débogueur :  

* Une fenêtre de console du débogueur affichée à côté de la VM  
* Via le protocole telnet sur le port 5000  

Vous pouvez activer le débogueur de trois façons :  

* Démarrer la VM directement en utilisant VirtualBox --startvm, avec, en plus,
l'argument --dbg, --debug, ou --debug-command-line. Voir l'aide sur l'utilisation de
VirtualBox pour des détails.  
* Définir la variable d'environnement VBOX_GUI_DBG_ENABLED ou VBOX_GUI_DBG_AUTO_SHOW
avec true avant de lancer le processus de VirtualBox. Le réglage des variables (seule leur
présence est vérifiée) est effectif, même quand le premier processus de VirtualBox est la
fenêtre du sélecteur de VM. Les VMs qui se lancent ensuite à partir du sélecteur auront un
débogueur actif.  
* Définir la donnée supplémentaire GUI/Dbg/Enabled sur true avant de lancer la VM. Vous
pouvez la régler de façon globale ou sur une base individuelle à chaque VM.  

Un nouveau menu 'Débogage' sera ajoutée à l'application VirtualBox. Ce menu permet à
l'utilisateur d'ouvrir la console du débogueur.  
La syntaxe des commandes du débogueur de VM est grosso modo sur le même modèle que les
débogueurs de Microsoft et d'IBM, utilisés sur DOS, OS/2 et Windows. Les utilisateurs familiers
de symdeb, CodeView, ou du débogueur du noyau the OS/2 trouveront le débogueur de VM de
VirtualBox classique.  
La commande la plus importante est help. Cela affichera un message d'aide à l'utilisation
rapide de toutes les commandes du débogueur. L'ensemble des commandes supporté par le
débogueur de VM change souvent et la commande help est toujours à jour.  
Voici un résumé rapide des commandes souvent utilisées :  

* stop – arrête l'exécution de la VM et active le mono-session (single stepping)  
* g – continue l'exécution de la VM  
* t – passe en mono-session (single step) une instruction  
* rg/rh/r – affiche les registres actuels de l'invité/hyperviseur  
* kg/kh/k – affiche la pile d'appel actuelle de l'invité/hyperviseur actuel  
* da/db/dw/dd/dq – affiche le contenu de la mémoire sous forme d'as ASCII/octets/mots/dwords/qwords  
* u – désassemble la mémoire  
* dg – affiche le GDT de l'invité  
* di – affiche le IDT de l'invité  
* dl – affiche le LDT de l'invité  
* dt – affiche le TSS de l'invité  
* dp* – affiche les structures des tables de pages de l'invité  
* bp/br – définit un point de rupture normal/recompilateur  
* bl – liste les points de rupture  
* bc – vide les points de rupture  
* writecore – écrit sur le disque un fichier cœur de VM, reportez-vous  au chapitre [12.1.4 Format du cœur d'une VM](#mark12.1.4)

Voir le help intégré pour d'autres commandes disponibles.  
Le débogueur de VM supporte le débogage symbolique de base, même si les symboles du code
invité ne sont pas souvent disponibles. Pour les invités Solaris, la commande detect détermine
automatiquement la version de l'OS invité et localise les symboles du noyau dans la mémoire
de l'invité. Le débogage symbolique est alors disponible. Pour les invités Linux, les commandes
detect déterminent également la version de l'OS invité, mais il n'y a pas de symboles dans la
mémoire de l'invité. Les symboles du noyau sont disponibles dans le fichier /proc/kallsyms
des invités Linux. Vous devez copier ce fichier dans l'hôte, en utilisant par exemple scp. La
commande loadmap du débogueur peut être utilisée pour rendre les informations de symbole
disponibles pour le débogueur de VM. Remarquez que le fichier kallsyms contient les symboles
des modules actuellement chargés ; si la configuration de l'invité change, les symboles changeront aussi et doivent être mis à jour.
Pour tous les invités, une façon simple de vérifier que les bons symboles sont chargés est la
commande k. L'invité est en principe occupé et il devrait être vidé des informations symboliques
que la boucle active du système d'exploitation invité exécute.  
Un autre groupe de commandes du débogueur est celui info. L'exécution d info help fournit
ces informations d'utilisation complètes. Les commandes d'informations fournissent des données
ad-hoc pertinentes sur divers périphériques émulés et sur les aspects de la VMM. Il n'y a pas de
lignes directrices générales sur l'utilisation des commandes info, la bonne commande à utiliser
dépend beaucoup du problème à trouver. Certaines commandes info sont :  

* cfgm – affiche une branche de l'arborescence de la configuration  
* cpuid – affiche les sorties du CPUID de l'invité  
* ioport – affiche les E/S des plages de ports enregistrées  
* mmio – affiche les plages MMIO enregistrées  
* mode – affiche le mode de pagination actuel  
* pit – affiche l'état i8254 PIT  
* pic – affiche l'état i8259A PIC  
* ohci/ehci – affiche un sous-ensemble de l'état du contrôleur USB OHCI/EHCI  
* pcnet0 – affiche l'état PCnet  
* vgatext – affiche le contenu du tampon (framebuffer) VGA formaté en mode texte standard  
* timers – affiche toutes les horloges de la VM  

La sortie des commandes info exige généralement une connaissance approfondie du périphérique émulé et/ou des aspects internes de VirtualBox VMM. Cependant, quand on les utilise
correctement, les informations fournies peuvent avoir une valeur inestimable.

[Retour à la table des matières](#Table des matières)

# 12.1.4 Format du cœur d'une VM<a id="mark12.1.4"></a>

VirtualBox utilise le format ELF 64 bits pour les fichiers cœur de la VM créés par VBoxManage
debugvm ; voir chapitre [8.32 VBoxManage debugvm](#mark8.32) Les fichiers cœur d'une VM
contiennent les messages de la mémoire et du processeur de la VM et ils peuvent être utiles pour
déboguer votre OS invité. Vous pouvez savoir les spécifications du format objet ELF 64 bits ici :  

<http://downloads.openwatcom.org/ftp/devel/docs/elf-64-gen.pdf>

La présentation grosso modo du format du cœur de la VM est celle-ci :

`[ ELF 64 Header]`  
`[ Program Header, type PT_NOTE ]`  
`-> offset to COREDESCRIPTOR`  
`[ Program Header, type PT_LOAD ] - un par plage de mémoire physique contiguë`  
`-> Memory offset of range`  
`-> File offset`  
`[ Note Header, type NT_VBOXCORE ]`  
`[ COREDESCRIPTOR ]`  
`-> Magic`  
`-> Version du fichier cœur de la VM`  
`-> Version de VBox`  
`-> Nombre de vprocesseurs etc.`  
`[ Note Header, type NT_VBOXCPU ] - one pour chaque vprocesseur`  
`[ vCPU 1 Note Header ]`  
`[ CPUMCTX - vCPU 1 dump ]`  
`[ Remarques + données supplémentaires ] - Non utilisées aujourd'hui`  
`[ Memory dump ]`  

Les descripteurs de mémoire contiennent les adresses physiques de la mémoire liées à l'invité
et pas les adresses virtuelles. Les régions de la mémoire telles que les régions MMIO ne sont pas
incluses dans le fichier cœur.  
Vous pouvez trouver les structures de données et les définitions pertinentes dans les
sources de VirtualBox sous les fichiers en-têtes suivants : include/VBox/dbgfcorefmt.h,
include/VBox/cpumctx.h et src/VBox/Runtime/include/internal/ldrELFCommon.h.  
Vous pouvez examiner le fichier cœur de la VM en utilisant elfdump et GNU readelf ou
d'autres outils similaires.  

[Retour à la table des matières](#Table des matières)

# 12.2 Général<a id="mark12.2"></a>

# 12.2.1 L'invité affiche des erreurs IDE/SATA pour les images basées sur un fichier sur un système de fichiers hôte lent<a id="mark12.2.1"></a>

De temps en temps, certains systèmes de fichiers hôte offrent des performances d'écriture très
faibles et, par conséquent, créent des timeout sur les commandes IDE/SATA de l'invité. C'est un
comportement normal et cela ne devrait pas provoquer de vrais problèmes, car l'invité devrait
répéter des commandes qui ont dépassé le timeout. Cependant, certains invités (comme certaines
versions de Linux) ont de gros problèmes si l'écriture dans un fichier image met 15 secondes. Or,
certains systèmes de fichiers nécessitent plus d'une minute pour effectuer une seule écriture, si
le cache de l'hôte contient beaucoup de données à écrire.

Le symptôme de ce problème est que l'invité ne peut plus accéder à ses fichiers lors de grosses
écritures, ce qui aboutit en général à un accroc immédiat de l'invité.  
Pour contourner ce problème (la vraie correction est d'utiliser un système de fichier plus rapide
qui n'excède pas de telles performances d'écriture inacceptables), il est possible de flusher le
fichier image après qu'une certaine quantité de données a été écrite. Cet intervalle est en principe
infini mais vous pouvez le configurer individuellement pour chaque disque d'une VM.  
Pour des disques IDE, utilisez la commande suivante :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/piix3ide/0/LUN#[x]/Config/FlushInterval" [b]`  

Pour des disques SATA, utilisez la commande suivante :  

`VBoxManage setextradata "nom VM"`  
`"VBoxInternal/Devices/ahci/0/LUN#[x]/Config/FlushInterval" [b]`  

La valeur [x] qui sélectionne le disque pour l'IDE est 0 pour le périphérique maître du premier
canal, 1 pour périphérique esclave du premier canal, 2 pour le périphérique maître du deuxième
canal, ou 3 pour le périphérique esclave du deuxième canal. Pour SATA, utilisez des valeurs entre
0 et 29. Seuls les disques supportent cette option de configuration ; vous ne devez pas la définir
pour des lecteurs CD/DVD.  
L'unité d'intervalle `[b]` est le nombre d'octets écrits depuis le dernier flush. Sa valeur doit être
sélectionnée de sorte que les longs délais d'écriture occasionnels ne se produisent pas. Comme
la bonne valeur d'intervalle de flush dépend des performances de l'hôte et du système de fichiers
hôte, savoir la valeur optimum qui fait disparaître le problème nécessite d'expérimenter. Des
valeurs entre 1000000 et 10000000 (1 to 10 mégaoctets) sont un bon point de départ. La
diminution de l'intervalle réduit la probabilité du problème et les performances d'écriture de
l'invité. Le test des valeurs faibles inutilement sera coûteux en performances sans avantages. Un
intervalle de 1 fera un flush toutes les opération d'écriture et cela devrait résoudre le problème
dans tous les cas, mais cela est très coûteux en performances d'écriture.  
Fournir la valeur 0 à [b] revient à un intervalle de lush infini ce qui désactive de fait ce
contournement. La suppression de la donnée supplémentaire en ne spécifiant aucune valeur
pour [b] aboutit au même effet.  

[Retour à la table des matières](#Table des matières)

# 12.2.2 Réponse aux requêtes de flush IDE/SATA de l'invité<a id="mark12.2.2"></a>

Si vous le souhaitez, les images de disque virtuelles peuvent être flushées quand l'invité lance une
commande IDE FLUSH CACHE. Normalement ces requêtes sont ignorées pour des performances
améliorées. Les paramètres ci-dessous sont acceptés uniquement pour les lecteurs de disque.  
Elles ne doivent pas être définies pour des lecteurs DVD.  
Pour activer le flush des disques IDE, lancez la commande suivante :  

`VBoxManage setextradata "nom VM" "VBoxInternal/Devices/piix3ide/0/LUN#[x]/Config/IgnoreFlush" 0`  

La valeur [x] qui sélectionne le disque pour l'IDE est 0 pour le périphérique maître du premier
canal, 1 pour périphérique esclave du premier canal, 2 pour le périphérique maître du deuxième
canal, ou 3 pour le périphérique esclave du deuxième canal.  

Pour activer le flush pour des disques SATA, lancez la commande suivante :

`VBoxManage setextradata "nom VM" "VBoxInternal/Devices/ahci/0/LUN#[x]/Config/IgnoreFlush" 0`  

La valeur [x] qui sélectionne le disque peut être une valeur entre 0 et 29.  
Remarquez que cela ne concerne pas les flush effectués selon la configuration décrite au
chapitre [12.2.1 L'invité affiche des erreurs IDE/SATA pour les images basées sur un fichier sur un système de fichiers hôte lent](#mark12.2.1) La restauration des paramètres par défaut  ignorant des commandes est possible en paramétrant la valeur sur 1 ou en supprimant la clé.  

[Retour à la table des matières](#Table des matières)

# 12.2.3 Faibles performances dues à la gestion d'énergie de l'hôte<a id="mark12.2.3"></a>

Sur certaines plateformes matériel et sur certains systèmes d'exploitation, les performances de
virtualisation sont touchées de manière négative par la gestion d'énergie du processeur de l'hôte.  
Les symptômes peuvent être un changement de son dans l'invité ou un comportement erratique
de l'horloge de l'invité.  
Certains problèmes peuvent venir de bogues d'un firmware et/ou du système d'exploitation
hôte. Donc, la mise à jour du firmware et l'application de correctifs au système d'exploitation est
recommandée.  
Pour des performances de virtualisation optimales, le support de l'état d'énergie C1E dans le
BIOS du système devrait être activé si ce paramètre est disponible (tous les systèmes ne supportent pas l'état d'énergie C1E). Sur les systèmes Intel, le paramètre Intel C State devrait être
désactivé. La désactivation d'autres paramètres de gestion d'énergie peut aussi améliorer les performances. Toutefois, vous devez toujours faire un bilan performance consommation d'énergie.  

[Retour à la table des matières](#Table des matières)

# 12.2.4 GUI : l'option d'accélération graphique est grisée<a id="mark12.2.4"></a>

Pour utiliser l'accélération graphique 2D dans VirtualBox, la carte graphique de votre hôte devrait
supporter certaines extensions d'OpenGL. Au démarrage, VirtualBox vérifie ces extensions et, si
le test échoue, cette option est grisée silencieusement.  
Pour savoir la raison pour laquelle il a échoué, vous pouvez exécuter à la main la commande
suivante :  

`VBoxTestOGL --log "log_file_name" --test 2D`  

Elle listera les extensions OpenGL nécessaires une par une et elle vous montrera celles où le test
a échoué. Cela signifie en général que vous exécutez un pilote OpenGL obsolète ou mal configuré
sur votre hôte. Cela peut aussi signifier que le chipset graphique manque d'une fonctionnalité
requise.  

[Retour à la table des matières](#Table des matières)

# 12.3 Invités Windows<a id="mark12.3"></a>

# 12.3.1 Écrans bleus Windows après avoir changé la configuration d'une VM<a id="mark12.3.1"></a>

La modification de certains paramètres d'une machine virtuelle peut faire échouer des invités
Windows au démarrage, avec un écran bleu. Cela peut se produire si vous changez les paramètres
d'une VM après avoir installé Windows ou si vous copiez ude image de disque avec un Windows
installé sur une VM nouvellement créée dont les paramètres diffèrent de la machine d'origine.  
Cela s'applique en particulier aux paramètres suivants :  

* Vous ne devriez jamais modifier les paramètres ACPI et APIC E/S après avoir installé Windows. Selon la présence de ces fonctions matérielles, le programme d'installation de Windows choisit des versions spéciales du noyau et des pilotes de périphérique et il n'arrivera
pas à démarrer si on supprime ces fonctionnalités. (Leur activation pour une VM Windows installé sans elles ne présente aucun risque. Par contre, Windows n'utilisera pas ces
fonctions dans ce cas.)  
 * La modification des contrôleurs de stockage aboutira à des échecs au démarrage. Cela
pourrait aussi s'appliquer si vous copiez une image de disque d'une ancienne version de
VirtualBox sur une machine virtuelle créée avec une version de VirtualBox plus récente ; le
sous-type de contrôleur IDE est passé de PIIX3 à PIIX4 avec VirtualBox 2.2. Assurez-vous
que ces paramètres sont identiques.  

[Retour à la table des matières](#Table des matières)

# 12.3.2 Écran bleu sur Windows 0x101 si SMP est activé (IPI timeout)<a id="mark12.3.2"></a>

Si une VM est configurée pour avoir plus d'un processeur (multiprocesseurs symmétrique, SMP),
certaines configurations d'invités Windows plantent avec un message d'erreur 0x101 indiquant
une interruption du timeout de l'inter-processeur (IPIs, Interprocessor Interrupts). Ces interruptions synchronisent la gestion de mémoire entre les processeurs.
Selon Microsoft, cela vient d'une race condition (condition conflictuelle) dans Windows. Un
correctif existe. 3 Si cela n'aide pas, merci de réduire le nombre de processeurs virtuels à 1.  

[Retour à la table des matières](#Table des matières)

# 12.3.3 Échecs d'installation de Windows 2000<a id="mark12.3.3"></a>

En installant des invités Windows 2000, vous pourriez rencontrer un des problèmes suivants :  

* L'installation redémarre, en général lors de l'enregistrement d'un composant.  
* L'nstallation remplit tout le disque dur par des fichiers journaux vides.  
* L'installation se plaint d'un échec lors de l'installation de msgina.dll.  

Ces problèmes viennent tous d'un bogue du pilote de disque dur de Windows 2000. Après
avoir sollicité une requête du disque dur, il arrive un conflit de condition (race condition) dans le
code du pilote Windows, qui conduit à une corruption si l'opération se termine trop vite, donc si
l'interruption matérielle du contrôleur IDE survient trop tôt. Avec du matériel physique, il existe
un délai garanti dans la plupart des systèmes, donc le problème est généralement caché (il devrait
être cependant possible de le reproduire aussi sur du matériel physique). Dans un environnement
virtuel, l'opération peut se faire immédiatement (surtout sur des systèmes très rapides) avec
plusieurs processeurs) et l'interruption est signalée plus tôt que sur un système physique. La
solution consiste à introduire un délai artificiel avant d'envoyer de telles interruptions. Vous
pouvez configurer ce délai pour une VM avec la commande suivante :  

`VBoxManage setextradata "nom VM" "VBoxInternal/Devices/piix3ide/0/Config/IRQDelay" 1`  

Ceci définit le délai sur une milliseconde. Si cela n'aide pas, passez-le à une valeur entre 1
et 5 millisecondes. Merci de remarquer que cela ralentit les performances du disque. Après
l'installation, vous devriez pouvoir supprimer la clé (ou la passer à 0).

[Retour à la table des matières](#Table des matières)

# 12.3.4 Comment garder les informations d'un écran bleu des invités Windows<a id="mark12.3.4"></a>

Quand les invités Windows connaissent un plantage du noyau, ils affichent l'horrible écran bleu.  
Selon la façon dont est configuré Windows, les informations demeureront à l'écran jusqu'à ce
que la machine ne redémarre ou ils redémarrent automatiquement. Pendant l'installation, Windows est généralement configuré pour redémarrer automatiquement. Avec le redémarrage automatique, il n'y a aucune chance d'enregistrer les informations d'un écran bleu, alors qu'elles
pourraient être importantes pour déterminer le problème.  
VirtualBox offre une méthode d'arrêt de l'invité quand il veut redémarrer. Pour activer cette
fonction, exécutez la commande suivante :  

`VBoxManage setextradata "nom VM" "VBoxInternal/PDM/HaltOnReset" 1`  

3 Voir <http://support.microsoft.com/kb/955076>

[Retour à la table des matières](#Table des matières)

# 12.3.5 Pas de réseau dans les invités Windows Vista<a id="mark12.3.5"></a>

Avec Windows Vista, Microsoft a abandonné le support de la carte AMD PCNet utilisée par
VirtualBox comme carte réseau virtuelle par défaut avant la version 1.6.0. Pour les invités Windows Vista, VirtualBox utilise maintenant par défaut une carte Intel E1000.  
Si, pour une raison quelconque, vous voulez toujours utiliser la carte AMD, vous devez
télécharger le pilote de PCNet sur le site Internet d'AMD (disponible seulement pour Windows
32 bits). Vous pouvez le transférer dans la machine virtuelle en utilisant un dossier partagé (voir
chapitre [4.3 Dossiers partagés).](#mark4.3)

[Retour à la table des matières](#Table des matières)

# 12.3.6 Les invités Windows peuvent provoquer une forte charge du processeur<a id="mark12.3.6"></a>

Plusieurs applications en arrière-plan des invités Windows, en particulier les anti-virus, sont
connues pour augmenter considérablement la charge du processeur même si l'invité semble être
inactif. Nous vous recommandons de désactiver les anti-virus des invités virtualisés si possible.  

[Retour à la table des matières](#Table des matières)

# 12.3.7 Temps d'accès élevés aux dossiers partagés<a id="mark12.3.7"></a>

Les performances d'accès aux dossiers partagés depuis un invité Windows pourraient diminuer
du fait des délais de résolution du service de domaine des dossiers partagés de VirtualBox. Pour
corriger ces délais, ajoutez les entrées suivante au fichier `\windows\system32\drivers\etc\lmhosts` de l'invité Windows :

`255.255.255.255 VBOXSVR #PRE`  
`255.255.255.255 VBOXSRV #PRE`  

Après ce changement, il faut redémarrer l'invité.  

[Retour à la table des matières](#Table des matières)

# 12.3.8 La tablette USB coordonne mal dans les invités Windows 98<a id="mark12.3.8"></a>

Si une VM Windows 98 est configurée pour utiliser la tablette USB émulée (périphérique de
pointage absolu), il se peut que la traduction de la coordination soit incorrecte et que le pointeur
soit restreint au quart en haut à gauche de l'écran de l'invité.  
Les pilotes HID (Human Interface Device) USB de Windows 98 sont très vieux et ils ne gèrent
pas les tablettes de la même manière que les systèmes d'exploitation récents (Windows 2000 et
supérieur, Mac OS X, Solaris). Pour contourner le problème, exécutez la commande suivante :  

`VBoxManage setextradata "nom VM" "VBoxInternal/USB/HidMouse/0/Config/CoordShift" 0`  

Pour restaurer le comportement par défaut, supprimez la clé ou réglez sa valeur à 1.

[Retour à la table des matières](#Table des matières)

# 12.3.9 Les invités Windows sont retirés du domaine Active Directory<a id="mark12.3.9"></a>

après la restauration d'un instantané
Si un invité Windows est membre d'un domaine Active Directory et que vous utilisez la fonction
des instantanés de VirtualBox, pourraient se produire des pertes de cet état après la restauration
d'un ancien instantané.  
Ceci vient du changement automatique de mot de passe de la machine opéré régulièrement
par Windows pour des raisons de sécurité. Vous pouvez désactiver cette fonction en suivant les
inptructions de <http://support.microsoft.com/kb/154501> cet article de Microsoft.

[Retour à la table des matières](#Table des matières)

# 12.3.10 Restauration de d3d8.dll et de d3d9.dll<a id="mark12.3.10"></a>

Les suppléments invité de VirtualBox pour Windows et inférieurs à la 4.1.8 ne sauvegardaient pas
les fichiers système d'origine d3d8.dll et d3d9.dll lors de l'installation du support expérimental
de Direct3D. Ce processus remplace ces deux fichiers système par des fichiers des suppléments
invité de VirtualBox gérables correctement par les appels de Direct3D. Si ce problème a été
corrigé avec VirtualBox 4.1.8, il n'y a aucun moyen de faire réparer ces fichiers par l'installeur
des suppléments invité.  
La corruption de ces fichiers n'a pas d'implications si l'accélération 3D est activée et si le
support de base de Direct3D est installé, à savoir sans WDDM (sur Windows Vista ou supérieur)
ou sur les anciens systèmes Windows comme Windows XP. Avec le support Direct3D de base,
toutes les applications Direct3D 8.0 et Direct3D 9.0 utiliseront directement les fichiers Direct3D
de VirtualBox et fonctionneront ainsi comme prévu.  
Par contre, pour le support WDDM Direct3D, les fichiers d3d8.dll et d3d9.dll inclus d'origine
sont nécessaires pour lancer des applications Direct3D 8.0 et Direct3D 9.0. Il résulte de la corruption des fichiers système ci-dessus que ces applications ne fonctionneront plus. Voir ci-dessous
pour une guide pas à pas sur la restauration des fichiers systèmes d'origine d3d8.dll et d3d9.dll
si l'installeur des suppléments invité de VirtualBox a averti que ces fichiers étaient incorrects ou
en cas de problème en exécutant les applications Direct3D.  

Note: À partir de Windows 7 le bureau 3D (aka Aero) utilise DirectX 10 pour être
affiché afin que les fichiers d3d8.dll et d3d9.dll corrompus n'aient aucun effet sur la
session en cours.  

C'est pourquoi la détection d'une telle corruption de fichier n'est pas considérée comme fatale pour l'installation basique de Direct3D sur tous les invités Windows supportés et pour une
installation de WDDM Direct3D sur les invités Windows 7 et supérieur.  

Extraire d3d8 et d3d9.dll du CD d'installation de Windows XP :  

1. Téléchargez et installez la dernière version de 7-Zip File Manager <http//www.7-zip.org>  
2. Parcourez le CD d'installation, par exemple `E:\i386` (ou AMD64 pour la version 64 bits)  
3. Localisez le fichier d3d8.dl_ et d3d9.dl_, cliquez deux fois dessus et extrayez d3d8.dll et
d3d9.dll  
4. Redémarrez Windows en mode sans échec  
5. Copiez d3d8.dll et d3d9.dll extraits dans `C:\Windows\system32` et `C:\Windows\system32\dllcache`  
6. Redémarrez  

Extraction de d3d8 et de d3d9.dll du pack service de Windows XP

1. 1, 3-6 Identiques au CD d'installation  
2. Utilisez 'Ouvrir avec' pour ouvrir WindowsXP-KB936929-SP3-x86.exe en tant qu'archive et
parcourez le répertoire i386.  

Extraction de d3d8 et de d3d9.dll du CD d'installation de Vista/Windows7 ou des images du pack Service  

1. Téléchargez et installez la dernière version de 7-Zip File Manager <http//www.7-zip.org>  
2. Parcourez le CD d'installation, par exemple `E:\sources`  
3. Localisez le fichier install.wim et cliquez deux fois dessus. Après l'ouverture du fichier
par 7-Zip, vous verrez un certain nombre de dossiers. Chaque sous-dossier numéroté
représente une version différente de `I$indows (Starter, Home Basic`, et ainsi de suite)  
4. Après être entré dans les dossiers numérotés adéquats, parcourez le répertoire `Windows\System32` (ou `C:\Windows\SysWOW64` pour la version 64 bits) et localisez d3d8.dll
et d3d9.dll puis extrayez  
5. Copiez d3d8.dll et d3d9.dll extraits dans `C:\Windows\system32` ou `C:\Windows\SysWOW64` (les fichiers de system32 devraient aller dans system32, ceux de SysWOW64 dans Sys-
WOW64)
6. Redémarrez  

[Retour à la table des matières](#Table des matières)

# 12.4 Invités Linux et X11<a id="mark12.4"></a>

# 12.4.1 Les invités Linux peuvent entraîner une forte charge du processeur<a id="mark12.4.1"></a>

Certains invités Linux peuvent entraîner une forte charge du processeur même si le système
invité semble inactif. Cela peut venir d'une fréquence horloge élevée du noyau invité. Certaines
distributions Linux, par exemple Fedora, incluent un noyau Linux configuré pour une fréquence
d'horloge de 1000Hz. Nous vous recommandons de recompiler le noyau invité et de sélectionner
une fréquence d'horloge de 100Hz.  
Les noyaux Linux inclus avec Linux Red Hat Enterprise (RHEL) entre la version 4.7 et 5.1
ainsi que les noyaux des distributions Linux associées (par exemple, CentOS et Oracle Linux)
supportent un paramètre divider=N du noyau. D'où le fait que de tels noyaux supportent une
fréquence d'horloge plus faible sans recompilation. Nous vous suggérons d'ajouter le paramètre
divider=10 du noyau pour sélectionner une fréquence de l'horloge du noyau invité de 100Hz.  

[Retour à la table des matières](#Table des matières)

# 12.4.2 Processeurs AMD Barcelona<a id="mark12.4.2"></a>

La plupart des invités basés sur Linux échoueront avec l'AMD Phenoms ou Barcelona-level  
Opterons du fait d'un bogue dans le noyau Linux. Activez l'APIC E/S pour contourner le problème (voir chapitre [3.4 Paramètres système).](#mark3.4)

[Retour à la table des matières](#Table des matières)

# 12.4.3 Versions bugguées du noyau Linux (Linux 2.6)<a id="mark12.4.3"></a>

Les bogues suivants des noyaux Linux les empêchent de les exécuter correctement dans
VirtualBox, ce qui fait planter la VM au démarrage :  

 * La version du noyau Linux 2.6.18 (et certaines versions 2.6.17) ont introduit un conflit de
condition (race condition) qui peut provoquer un plantage au démarrage dans VirtualBox.  
Merci d'utiliser une version du noyau 2.6.19 ou supérieur.  
* Avec la virtualisation matérielle et l'APIC EÓS activé, les noyaux inférieurs au 2.6.24-rc6
peuvent planter au démarrage avec le message suivant :  

`Kernel panic - not syncing: IO-APIC + timer doesn't work! Boot with
apic=debug and send a report. Then try booting with the 'noapic' option`

Si vous voyez ce message, soit désactivez la virtualisation matérielle, soit l'APIC E/S (voir
chapitre [3.4 Paramètres système),](#mark3.4) ou mettez à jour l'invité vers un noyau plus
récent. 4

4 Voir <http://www.mail-archive.com/git-commits-head@vger.kernel.org/msg30813.html> pour des détails sur
le correctif du noyau.  

[Retour à la table des matières](#Table des matières)

# 12.4.4 Presse-papier partagé, redimensionnement automatique et bureau transparent dans les invités X11<a id="mark12.4.4"></a>

Les services du bureau invité dans les invités exécutant le système X11 window (Solaris, Linux et
autres) sont fournis par un service invité qui s'appelle VBoxClient, qui fonctionne sous l'ID de
l'utilisateur qui démarre la session du bureau et qui est démarré automatiquement en utilisant
les lignes de commande suivantes:  

`VBoxClient --clipboard`  
`VBoxClient --display`  
`VBoxClient --seamless`  

quand votre session utilisateur X11 est lancée si vous utilisez un environnement de bureau
courant (Gnome, KDE et autres). Si un service du bureau particulier ne fonctionne pas bien,
il vaut la peine de vérifier si le processus qui devrait le fournir est en fonction.  
Les processus VBoxClient créent des fichiers dans le dossier personnel de l'utilisateur avec
des noms sous la forme .vboxclient-*.pid quand ils fonctionnent, pour empêcher un service
donné de se démarrer deux fois. Il peut arriver, à cause d'une mauvaise configuration, que ces
fichiers se créent sous la propriété de l'administrateur et ne sont pas effacés quand les services
s'arrêtent, ce qui les empêchera de démarrer à l'avenir. Si vous ne pouvez pas démarrer les
services, vous pourriez vérifier si ces fichiers existent.  

[Retour à la table des matières](#Table des matières)

# 12.5 Invités Solaris<a id="mark12.5"></a>

# 12.5.1 Les versions inférieures à Solaris 10 plantent en mode 64 bits<a id="mark12.5.1"></a>

Les versions de Solaris 10 inférieures ou égales à Solaris 10 8/07 ("S10U4") détectent mal les
processeurs Intel récents fabriqués depuis 2007. Ce problème fait planter ou stopper le noyau
Solaris 64 bits presqu'immédiatement lors du démarrage, tant dans un environnement virtualisé
que physique.  
La solution recommandée est de mettre à jour vers Solaris au moins 10 5/08 ("S10U5").  
D'autres solutions consistent à obliger Solaris à toujours démarrer le noyau 32 bits ou à appliquer
un correctif au bogue 6574102 (tant que Solaris utilise le noyau 32 bits).  

[Retour à la table des matières](#Table des matières)

# 12.6 Hôte Windows<a id="mark12.6"></a>

# 12.6.1 Problème du serveur VBoxSVC out-of-process COM<a id="mark12.6.1"></a>

VirtualBox utilise le Component Object Model (COM) de Microsoft pour la communication inter
et intra-processus. Cela permet à VirtualBox de partager une configuration commune entre les
processus de différentes machines virtuelles et de fournir plusieurs versions de l'interface utilisateur basées sur une architecture commune. Toutes les informations d'état et la configuration
globales sont maintenues par le processus VBoxSVC.exe, qui est un service COM hors des pro-cessus. À chaque fois que le processus de VirtualBox est démarré, il demande un accès au serveur
COM et Windows démarre automatiquement le processus. Remarquez que l'utilisateur final ne
devriez jamais le démarrer.  
Quand le dernier processus se déconnecte du serveur COM, il se terminera lui-même après
quelques secondes. La configuration de VirtualBox (fichiers XML) est maintenue et appartient
au serveur COM et les fichiers sont verrouillés à chaque fois que le serveur s'exécute.  
Dans certains cas - comme quand une machine virtuelle se termine de manière imprévue -,
le serveur COM ne remarquera pas que le client est déconnecté et il restera actif longtemps (10
minutes voire plus), gardant verrouillés les fichiers de configuration. Dans de rares cas, le serveur
COM pourrait connaître une erreur interne et, en conséquence, les autres processus pourraient
ne pas pouvoir l'initialiser. Dans ces situations, il est recommandé d'utiliser le gestionnaire des
tâches de Windows pour tuer le processus VBoxSVC.exe.  

[Retour à la table des matières](#Table des matières)

# 12.6.2 Changements de CD/DVD non reconnus<a id="mark12.6.2"></a>

Si vous avez affecté un lecteur CD/DVD physique à un invité et si l'invité ne remarque pas les
changements de médias, assurez-vous que la fonction de notification de changement de média
(MCN) de Windows n'est pas désactivée. Elle est représentée par la clé suivante dans le registre
Windows ::  

`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Cdrom\Autorun`  

Il se peut que certaines applications désactivent cette clé contre l'avis de Microsoft. Si elle est
définie à 0, passez-la à 1 et redémarrez votre système. VirtualBox s'appuie sur la notification de
Windows de changement de média.  

[Retour à la table des matières](#Table des matières)

# 12.6.3 Réponse lente en utilisant le client RDP de Microsoft<a id="mark12.6.3"></a>

Si vous vous connectez à une machine virtuelle avec le client RDP de Microsoft (appelé Remote
Desktop Connection), il peut y avoir d'importants délais entre l'entrée (le déplacement de la
souris dans un menu est la situation la plus évidente) et la sortie. Ceci car le client RDP récupère
l'entrée pendant un certain temps avant de l'envoyer au serveur RDP.  
Vous pouvez diminuer l'intervalle en déscnissant une clé du registre Windows sur des valeurs
plus petites que celles par défaut, 100. La clé n'existe pas au départ, elle doit être de type
DWORD. Son unité de valeur est en millisecondes. Les valeurs autour de 20 conviennent aux
connexions avec faible bande passante entre le client et le serveur RDP. Des valeurs autour de
4 peuvent être utilisées pour une connexion Internet à 4 gigaoctets. En général, les valeurs
inférieures à 10 donnent une performance très réduite par rapport aux périphériques d'entrée
locaux et à l'écran de l'hôte sur lequel fonctionne la machine virtuelle.  
Selon que le paramètre à modifier est pour un utilisateur individuel ou pour le système, vous
pouvez définir soit  

`HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Min Send Interval`  

ou soit  

`HKEY_LOCAL_MACHINE\Software\Microsoft\Terminal Server Client\Min Send Interval`  
correctement.  

[Retour à la table des matières](#Table des matières)

# 12.6.4 Lancer un initiateur et une cible iSCSI sur un seul système<a id="mark12.6.4"></a>

Des Deadlocks peuvent se produire sur un hôte Windows quand on essaie d'accéder à une cible
iSCSI en fonction dans une machine virtuelle invitée avec un initiateur iSCSI (comme Microsoft
iSCSI Initiator) en fonction sur l'hôte. Cela vient d'un flaw dans le composant du gestionnaire de
cache de Windows et cela donne une réponse lente du système hôte, de plusieurs minutes, suivies
d'un message d'erreur "Delayed Write Failed" (délai d'écriture différé) dans la barre système ou
dans une fenêtre de message distincte. L'invité est bloqué pendant ce temps et il peut afficher
des messages d'erreur ou devenir instable.  
La définition d'une variable d'environnement VBOX_DISABLE_HOST_DISK_CACHE à 1 activera
un contournement de ce problème jusqu'à ce que Microsoft le traite. Par exemple, ouvrez une
fenêtre d'invite de commande et démarrez VirtualBox comme ceci :  

`set VBOX_DISABLE_HOST_DISK_CACHE=1`  
`VirtualBox`  

Si cela réduira les performances du disque invité (surtout en écriture), cela ne concerne pas
les performances d'autres applications en fonction sur l'hôte.  

[Retour à la table des matières](#Table des matières)

# 12.6.5 Adaptateurs réseaux bridgés absents<a id="mark12.6.5"></a>

Si aucun adaptateur bridgé n'apparaît dans la section "Réseau" des paramètres de la VM, cela
signifie généralement que le pilote du réseau bridgé n'a pas été installé correctement sur votre
hôte. Cela pourrait venir des raisons suivantes :  

* Le nombre maximum de filtres autorisés a été atteint sur l'hôte. Dans ce cas, le journal
MSI indiquerait le code d'erreur 0x8004a029 retourné à l'installation du composant réseau
NetFlt :  
`VBoxNetCfgWinInstallComponent: Install failed, hr (0x8004a029)`  
Vous pouvez essayer d'augmenter le nombre de filtres maximum dans le registre Windows
avec la clé suivante :  
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Network\MaxNumFilters`  
Le nombre maximum autorisé est de 14. Après le redémarrage, essayez de réinstaller
VirtualBox.  
* Le cache INF est corrompu. Dans ce cas, le journal d'installation `(%windir%\inf\setupapi.log`  
sur `XP ou %windir%\inf\setupapi.dev.log` sur Vista ou supérieur) indiqueraient
normalement un échec pour trouver le paquet du pilote adapté aux composants
sun_VBoxNetFlt ou sun_VBoxNetFltmp. La solution est alors de désinstaller VirtualBox,
de supprimer le cache `INF (%windir%\inf\INFCACHE.1)`, de redémarrer et d'essayer de
réinstaller VirtualBox  

[Retour à la table des matières](#Table des matières)

# 12.6.6 L'adaptateur réseau Host-only ne peut pas être créé<a id="mark12.6.6"></a>

Si l'adaptateur host-only ne peut pas être créé (soit avec le gestionnaire soit avec VBox-
Manage), le cache INF est probablement corrompu. Dans ce cas, le journal d'installation
`(%windir%\inf\setupapi.log sur XP ou %windir%\inf\setupapi.dev.log` sur Vista ou
supérieur) indiquerait généralement un échec pour trouver un paquet de pilote adapté au
composant sun_VBoxNetAdp. De nouveau, comme pour le problème du réseau bridgé
décrit ci-dessus, la solution consiste à désinstaller VirtualBox, à supprimer le cache JNF
`(%windir%\inf\INFCACHE.1)`, à redémarrer et à essayer de réinstaller VirtualBox.  

[Retour à la table des matières](#Table des matières)

# 12.7 Hôtes Linux<a id="mark12.7"></a>

# 12.7.1 Le module du noyau Linux refuse de se charger<a id="mark12.7.1"></a>

Si le module du noyau Linux (vboxdrv) refuse de se charger, c'est-à-dire que vous avez un
message "Error inserting vboxdrv: Invalid argument", vérifiez (en tant qu'administrateur) la
sortie de la commande dmesg pour trouver la raison de l'échec du chargement. Probablement, le
noyau n'est pas d'accord avec la version de gcc utilisée pour compiler le module. Assurez-vous
d'utiliser le même compilateur que celui utilisé pour construire le noyau.  

[Retour à la table des matières](#Table des matières)

# 12.7.2 Lecteur CD/DVD de l'hôte Linux non trouvé<a id="mark12.7.2"></a>

Si vous avez configuré une machine virtuelle pour utiliser le lecteur CD/DVD de l'hôte, mais s'il
semble ne pas fonctionner, assurez-vous que l'utilisateur actuel a le droit d'accéder au fichier de
périphérique Linux correspondant (/dev/hdc ou /dev/scd0 ou /dev/cdrom ou identique). Sur
la plupart des distributions, l'utilisateur doit être ajouté à un groupe correspondant (qui s'appelle
en général cdrom ou cdrw).  

[Retour à la table des matières](#Table des matières)

# 12.7.3 Lecteur CD/DVD non trouvé sur l'hôte Linux (distributions anciennes)<a id="mark12.7.3"></a>

Sur les anciennes distributions Linux, si votre lecteur CD/DVD a un autre nom, il se peut que
VirtualBox soit incapable de le trouver. Sur les hôtes Linux anciens, VirtualBox suit les étapes
suivantes pour trouver vos lecteurs CD/DVD :

1. VirtualBox examine si la variable d'environnement VBOX_CDROM est définie (voir ci-
dessous). Si tel est le cas, VirtualBox ne fait pas les vérifications suivantes.  
2. VirtualBox teste si /dev/cdrom fonctionne.  
3. En plus, VirtualBox vérifie si des lecteurs CD/DVD sont montés en vérifiant /etc/mtab.  
4. En outre, VirtualBox vérifie si une des entrées de /etc/fstab pointe vers un lecteur
CD/DVD.  

En d'autres termes, vous pouvez essayer de définir VBOX_CDROM pour contenir vos lecteurs
CD/DVD, séparés par des deux-points, par exemple comme suit :  

`export VBOX_CDROM='/dev/cdrom0:/dev/cdrom1'`  

Sur les distributions Linux modernes, VirtualBox utilise la couche d'abstraction matérielle (hal)
pour localiser le matériel CD et DVD.  

[Retour à la table des matières](#Table des matières)

# 12.7.4 Disquette non trouvée sur un hôte Linux<a id="mark12.7.4"></a>

Les instructions précédentes (pour les lecteurs CD et DVD) s'appliquent aussi aux disquettes,
sauf que sur les distributions anciennes, VirtualBox teste par défaut les périphériques /dev/fd*
ce que vous pouvez changer avec la variable d'environnement VBOX_FLOPPY.  

[Retour à la table des matières](#Table des matières)

# 12.7.5 Messages d'erreur étranges de l'IDE invité lors de l'écriture sur un CD/DVD<a id="mark12.7.5"></a>

Si le support expérimental d'écriture sur un CD/DVD est activé avec une mauvaise configuration de l'hôte et de l'invité VirtualBox, il est possible que vos efforts pour accéder à l'écriture
sur CD/DVD échouent et n'aboutissent qu'à des messages d'erreur du noyau invité (pour les invités Linux) ou à des messages d'erreur de l'application (pour les invités Windows). VirtualBox
effectue les vérifications de cohérence habituelles quand une VM est allumée (en particulier,
il quitte avec un message d'erreur si l'utilisateur qui démarre la VM ne peut pas écrire sur le
périphérique du graveur CD/DVD), mais il ne peut pas détecter toutes les mauvaises configurations. La configuration de l'OS hôte et de l'invité requise n'est pas spécifique à VirtualBox, mais
quelques problèmes fréquents sont listés ici, ils se sont produits en lien avec VirtualBox.  
Vous devez faire très attention à utiliser le bon périphérique. Le nom du fichier du lecteur
CD/DVD de l'hôte configuré (dans la plupart des cas, /dev/cdrom) doit pointer vers le périphérique qui permet d'écrire sur l'unité CD/DVD. Pour les unités du graveur CD/DVD, connecté
à un contrôleur SCSI ou à un contrôleur IDE qui fait interface avec le sous-système SCSI de Linux
(ce qui est classique pour certains contrôleurs SATA), il doit renvoyer au nœud de périphérique
SCSI (comme /dev/scd0). Même pour les unités de graveurs de CD/DVD en IDE, il doit renvoyer au nœud du lecteur CD-ROM adéquat (comme /dev/scd0) si le module du noyau ide-scsi
est chargé. Ce module est requis pour le support du graveur CD/DVD avec tous les noyaux
Linux 2.4 et avec certains noyaux 2.6 des débuts. De nombreuses distributions Linux chargent ce
module à chaque fois que le graveur CD/DVD est détecté dans le système, même si le noyau supporterait des graveurs CD/DVD sans le module. VirtualBox supporte l'utilisation des fichiers de
périphérique IDE (comme /dev/hdc), pourvu que le noyau le supporte et que le module ide-scsi
ne soit pas chargé.  

Des règles similaires (sauf que dans l'invité, le graveur CD/DVD est toujours un périphérique
IDE) s'appliquent à la configuration de l'invité. Ce paramétrage étant très classique, il est probable que la configuration par défaut de l'invité fonctionne comme prévu.  

[Retour à la table des matières](#Table des matières)

# 12.7.6 Problème de l'IPC VBoxSVC<a id="mark12.7.6"></a>

Sur Linux, VirtualBox utilise une version personnalisée de XPCOM de Mozilla (modèle d'objet
du composant multi-plateformes) pour la communication inter et intra processus (IPC). Le processus VBoxSVC sert de hub de communication entre plusieurs processus de VirtualBox et il
maintient la configuration globale, c'est-à-dire la base de données XML. Au démarrage d'un
composant de VirtualBox, les processus VBoxSVC et VirtualBoxXPCOMIPCD sont lancés automatiquement. Ils ne sont accessibles qu'à partir du compte utilisateur qui l'a lancé. VBoxSVC
possède la base de données de la configuration de VirtualBox qui se trouve normalement
dans `~/.config/VirtualBox`, ou dans le répertoire de configuration adéquat de votre système
d'exploitation. Tant qu'il est en fonction, les fichiers de configuration sont verrouillés. La communication entre les composants de VirtualBox et VBoxSVC est faite via une socket de domaine
local qui se trouve dans `/tmp/.vbox-<username>-ipc`. En cas de problèmes de communication
(par exemple si une application VirtualBox ne peut pas communiquer avec VBoxSVC), clôturez
les démons et supprimez le répertoire de la socket du domaine local.  

[Retour à la table des matières](#Table des matières)

# 12.7.7 L'USB ne fonctionne pas<a id="mark12.7.7"></a>

Si l'USB ne fonctionne pas sur votre hôte Linux, assurez-vous que l'utilisateur actuel fait partie
du groupe vboxusers. Sur les hôtes anciens, vous cevez vous assurer que l'utilisateur a le droit
d'accéder au système de fichiers USB (usbfs), sur lequel s'appuie VirtualBox pour récupérer
des informations valides sur les périphériques' USB de votre hôte. Le reste de cette section ne
s'applique qu'à ces anciens systèmes.  
Comme usbfs est un système de fichiers virtuel, un chmod sur /proc/bus/usb n'a aucun effet.  
Les droits sur usbfs ne peuvent donc être changés que si vous éditez le fichier /etc/fstab.  
Par exemple, la plupart des distributions Linux comportent un groupe utilisateur qui s'appelle
usb ou similaire, dont l'utilisateur actuel doit faire partie. Pour donner à tous les utilisateurs de
ce groupe un accès à usbfs, assurez-vous que la ligne suivante est présente :  

`# 85 is the USB group`  
`none /proc/bus/usb usbfs devgid=85,devmode=664 0 0`  

Remplacez 85 par l'ID du groupe correspondant à votre système (cherchez dans /etc/group
"usb" ou proche). Sinon, si vous vous moquez des considérations de sécurité, donnez à tous les
utilisateurs l'accès à l'USB en changeant "664" en "666".  
Les distributions sont très créatives sur le script qui monte le système de fichiers usbfs. Parfois, la commande est cachée à des endroits improbables. Pour SuSE 10.0, la commande de mon-
tage fait partie du fichier de configuration udev /etc/udev/rules.d/50-udev.rules. Comme
cette distribution n'a aucun groupe d'utilisateurs appelé usb, vous pouvez utiliser par exemple le
groupe vboxusers qui a été créé par l'installeur de VirtualBox. Les numéros des groupes étant
affectés de manière dynamique, l'exemple suivant utilise 85 comme modèle. Modifiez la ligne
contenant (on a inséré un retour à la ligne pour améliorer la lisibilité)

`DEVPATH="/module/usbcore", ACTION=="add",`  
`RUN+="/bin/mount -t usbfs usbfs /proc/bus/usb"`  

et ajoutez les options nécessaires (assurez-vous que tout est sur une seule ligne) :

`DEVPATH="/module/usbcore", ACTION=="add",`  
`RUN+="/bin/mount -t usbfs usbfs /proc/bus/usb -o devgid=85,devmode=664"`  

`Debian Etch a sa commande de montage dans /etc/init.d/mountkernfs.sh`. Cette distribution n'ayant pas de groupe usb, la solution la plus simple est d'autoriser tous les membres du
groupe vboxusers à accéder au sous-système USB. Modifiez la ligne  

`domount usbfs usbdevfs /proc/bus/usb -onoexec,nosuid,nodev`  

pour qu'elle contienne  

`domount usbfs usbdevfs /proc/bus/usb -onoexec,nosuid,nodev,devgid=85,devmode=664`  

Comme d'habitude, remplacez 85 par le vrai numéro du groupe qui devrait avoir accè aux
périphériques USB.  
D'autres distributions font des opérations identiques dans des scripts stockés dans le répertoire
`/etc/init.d`.  

[Retour à la table des matières](#Table des matières)

# 12.7.8 Noyaux PAX/grsec<a id="mark12.7.8"></a>

Les noyaux Linux incluant le correctif grsec (voir <http://www.grsecurity.net/>) et ses dérivés
doivent désactiver PAX_MPROTECT pour que les binaires VBox puissent démarrer une VM. Ceci
car VBox doit créer un code exécutable en mémoire anonyme.  

[Retour à la table des matières](#Table des matières)

# 12.7.9 pool vmalloc du noyau Linux dépassé<a id="mark12.7.9"></a>

Quand on exécute un grand nombre de VMs avec un beaucoup de RAM sur un systèmes Linux
(disons 20 VMs de 1Go de RAM chacune), les VMs supplémentaires pourraient ne pas réussir à
démarrer avec une erreur du noyau disant que le pool vmalloc est dépassé et que vous devriez
l'agrandir. Le message d'erreur vous dit aussi de spécifier vmalloc=256MB dans votre liste des
paramètres du noyau. Si l'ajout de ce paramètre à votre configuration de GRUB ou de LILO
empêche le noyau de démarrer (avec un message d'erreur bizarre tel que "failed to mount the
root partition"), vous avez probablement un conflit de mémoire entre votre noyau et la RAM
disque initiale. Vous pouvez résoudre cela en ajoutant le paramètre suivant à votre configuration
de GRUB :

`uppermem 524288`  

[Retour à la table des matières](#Table des matières)

# 12.8 Hôtes Solaris<a id="mark12.8"></a>

# 12.8.1 Ne peut pas démarrer de VM, pas assez de mémoire contiguë<a id="mark12.8.1"></a>

Le système de fichiers ZFS est connu pour utiliser presque toute la RAM disponible comme du
cache si les paramètres système par défaut ne sont pas modifiés. Cela peut conduire à une
énorme fragmentation de la mémoire de l'hôte, empêchant les VMS de VirtualBox de démarrer.  
Nous vous recommandons de limiter la limite du cache ZFS en ajoutant une ligne  

`set zfs:zfs_arc_max = xxxx`  

à /etc/system où xxxx octets est la quantité de mémoire utilisable pour le cache ZFS.  

[Retour à la table des matières](#Table des matières)

# 12.8.2 La VM s'arrête avec des erreurs de dépassement de mémoire sur les hôtes Solaris 10<a id="mark12.8.2"></a>

Les hôtes Solaris 10 32 bits (bogue 1225025) exigent un espace d'échange supérieur ou égal à
la taille de la mémoire physique de l'hôte. Par exemple, 8 Go de mémoire physique exigerait
au moins 8 Go d'échange. Vous pouvez configurer cela pendant l'installation de Solaris 10 en
choisissant une 'installation personnalisée' et en modifiant les partitions par défaut.  

Note: Cette restriction ne s'applique qu'aux hôtes Solaris 32 bits, les hôtes 64 bits ne
sont pas concernés !  

Pour les installations Solaris 10 existantes, il faut monter une image d'échange supplémentaire
et l'utiliser comme échange. D'où le fait que si vous avez un échange de 1 Go et 8 Go de mémoire
physique, vous devez ajouter un échange supplémentaire de 7 Go. Vous pouvez faire cela comme
suit :  
Pour ZFS (en tant qu'administrateur) :  

`zfs create -V 8gb /_<ZFS volume>_/swap`  
`swap -a /dev/zvol/dsk/_<ZFS volume>_/swap`  

Pour monter le système de fichiers au démarrage, ajoutez la ligne suivante à /etc/vfstab :  

`/dev/zvol/dsk/_<ZFS volume>_/swap - - swap - no -`  

Sinon, vous pouvez agrandir l'espace existant en utilisant :  

`zfs set volsize=8G rpool/swap`  

Et redémarrer le système pour que les changements prennent effet.  
Pour UFS (en tant qu'administrateur) :  

`mkfile 7g /path/to/swapfile.img`  
`swap -a /path/to/swapfile.img`  

Pour le monter au redémarrage, ajoutez la ligne suivante à /etc/vfstab :  

`/path/to/swap.img - - swap - no -`  

[Retour à la table des matières](#Table des matières)

# 13 Guide de sécurité<a id="mark13"></a>

# 13.1 Aperçu<a id="mark13.1"></a>

# 13.1.1 Principes généraux de sécurité<a id="mark13.1.1"></a>

Les principes suivants sont fondamentaux pour utiliser une application en toute sécurité.  

Maintenir à jour le logiciel Une des bonnes pratiques de sécurité est d'avoir des versions du
logiciel et des correctifs à jour. Activez la notification de mise à jour de VirtualBox pour
être averti quand une nouvelle version de VirtualBox est disponible. Quand vous mettez à
jour VirtualBox, n'oubliez pas de mett!e à jour aussi les suppléments invité. Maintenez à
jour le système d'exploitation hôte ainsi que l'invité.  
Restreindre l'accès réseau des services critiques Utilisez les moyens, tels qu'un pare-feu,
pour protéger votre ordinateur et vo(s) invité(s) de l'extérieur. Choisir le bon mode de
réseau pour des VMs permet de distinguer le réseau de l'hôte de l'invité et vice versa.  
Suivre le principe du privilège le plus restreint dispose qu'il faut donner aux utilisateurs les privilèges strictement nécessaires pour accomplir
leurs tâches. Exécutez toujours VirtualBox en tant qu'utilisateur ordinaire. Nous déconseillons fortement d'exécuter VirtualBox avec des privilèges système.  
Choisissez des droits restrictifs quand vous créez des fichiers de configuration, par exemple quand vous créez /etc/default/virtualbox, voir chapitre [2.3.3.7 Options d'installation automatique](#mark2.3.3.7) Le mode 0600 serait idéal.  
Surveiller l'activité du système La sécurité du système repose sur trois piliers : de bons protocoles de sécurité, une bonne configuration du système et la surveillance du système.  
L'évaluation et la lecture des fruits de l'évaluation constituent la troisième exigence.  
Chaque composant d'un système a un certain degré de capacité à être surveillé. Suivez les
conseils d'évaluation de ce document et surveillez régulièrement les fruits de l'évaluation.  
Garder à jour les informations de sécurité Oracle améliore en permanence ses logiciels et sa
documentation. Vérifiez ce passage chaque année pour trouver les révisions.  

[Retour à la table des matières](#Table des matières)

# 13.2 Installation et configuration sécurisées<a id="mark13.2"></a>

# 13.2.1 Aperçu de l'installation<a id="mark13.2.1"></a>

Vous ne devriez télécharger le paquet de base de VirtualBox qu'à partir d'une source de confiance,
telle que le site Internet officiel <http://www.virtualbox.org> Vous devriez vérifier l'intégrité
du paquet avec la somme de contrôle SHA256 fournie sur le site officiel.  
Vous pouvez trouver des instructions générales d'installation de VirtualBox pour les hôtes supportés au chapitre [2 Détails sur l'installation](#mark2)
Sur les hôtes Windows, l'installeur permet de désactiver le support USB, le support du réseau
bridgé, le support du réseau host-only et les bindings du langage Python, voir chapitre [2.1 Installation sur des hôtes Windows](#mark2.1) Toutes ces fonctionnalités sont activées par défaut mais la
désactivation de certaines d'entre elles pourrait être adaptée si vous n'avez pas besoin des fonctionnalités correspondantes sur une machine virtuelle. Les bindings du langage Python ne sont
nécessaires que si vous devez utiliser l'API de VirtualBox avec des applications Python externes.  
En particulier, le support USB et le support des deux modes réseaux nécessitent d'installer des
pilotes du noyau Windows sur l'hôte. Donc, la désactivation de ces fonctions peut non seulement permettre d'encadrer l'utilisateur dans certaines fonctionnalités, mais aussi de minimiser
le champ d'attaque d'un pirate potentiel.  
En général, on installe tout le paquet VirtualBox. Il faut faire l'installation avec les privilèges
système. Tous les binaires de VirtualBox devraient être lancés en tant qu'utilisateur ordinaire et
jamais en tant qu'utilisateur privilégié.  
Le pack d'extension d'Oracle VM VirtualBox apporte des fonctionnalités supplémentaires et il
doit être téléchargé et installé à part, voir chapitre [1.5 Installer VirtualBox et les packs d'extension](#mark1.5) Comme pour le paquet de base, vous devriez vérifier la somme de contrôle SHA256
du pack d'extension. Comme le système d'installation exige des privilèges systèmes, VirtualBox
vous demandera le mot de passe système pendant l'installation du pack d'extension.  

[Retour à la table des matières](#Table des matières)

# 13.2.2 Configuration post installation<a id="mark13.2.2"></a>

Normalement, aucune configuration post installation d'un composant de VirtualBox n'est nécessaire. Cependant, sur les hôtes Solaris et Linux, il faut configurer les droits adaptés pour que
les utilisateurs exécutent des VMs et puissent accéder à certaines ressources de l'hôte. Par exemple, les utilisateurs Linux doivent faire partie du groupe vboxusers pour pouvoir donner des
périphériques USB à un invité. Si vous devriez accéder à une interface série à partir d'une VM, il
faut donner les bons droits à l'utilisateur pour qu'il puisse accéder à ce périphérique. La même
chose s'applique à d'autres ressources comme la partition brute, les lecteurs DVD/CD et les périphériques de son.  

[Retour à la table des matières](#Table des matières)

# 13.3 Fonctions de sécurité<a id="mark13.3"></a>

Cette section évoque les mécanismes de sécurité spécifiques à VirtualBox.  

[Retour à la table des matières](#Table des matières)

# 13.3.1 Le modèle de sécurité<a id="mark13.3.1"></a>

Une des propriétés des gestionnaires de machines virtuels (VMMs) comme VirtualBox est
d'enfermer un invité en l'exécutant dans un environnement protégé, une machine virtuelle laquelle fonctionne en tant que processus d'un utilisateur du système d'exploitation hôte. L'invité ne
peut pas communiquer directement avec le matériel hôte ou avec d'autres ordinateurs, mais
uniquement via le VMM. Le VMM offre des ressources physiques et des périphériques émulés à
l'invité, auxquelles on accède par le système d'exploitation hôte pour effectuer les tâches nécessaires. Les paramètres de la VM contrôlent les ressources fournies à l'invité, par exemple la
quantité de mémoire de l'invité ou le nombre de processeurs invités (voir chapitre [3.3 Paramètres généraux)](#mark3.3) et les fonctionnalités activées pour cet invité (par exemple le contrôle à distance, certains paramètres d'affichage et autres).  

[Retour à la table des matières](#Table des matières)

# 13.3.2 Configuration sécurisée des machines virtuelles<a id="mark13.3.2"></a>

Plusieurs aspects de la configuration d'une machine virtuelle sont sujets à des considérations de
sécurité.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.1 Le réseau<a id="mark13.3.2.1"></a>

Le mode réseau par défaut des VMs est NAT, ce qui signifie que la VM se comporte comme un
ordinateur derrière un routeur, voir chapitre [6.3 Network Address Translation (NAT)](#mark6.3)  
L'invité fait partie d'un sous-réseau privé appartenant à cette VM et l'adresse IP de l'invité n'est
pas visible de l'extérieur. Ce mode réseau fonctionne sans paramétrage supplémentaire et il suffit
pour la plupart des besoins.  
Si vous utilisé le réseau bridgé, la VM se comporte comme un ordinateur dans le même réseau
que l'hôte, voir chapitre [6.5 Réseau Bridgé](#mark6.5) Dans ce cas, l'invité a un accès réseau
identique à l'hôte et un pare-feu pourrait être nécessaire pour protéger d'autres ordinateurs du
sous-réseau contre des invités malveillants potentiels et pour protéger l'invité contre un accès
direct par les autres ordinateurs. Dans certains cas, il est intéressant de songer à utiliser une
règle de redirection pour un port spécifique en mode NAT, plutôt que d'utiliser le réseau bridgé.  
Certaines configurations n'ont pas besoin que la VM soit connectée au réseau public. Le réseau
interne (voir chapitre [6.6 Réseau interne)](#mark6.6) ou le réseau host-only (voir chapitre [6.7 Réseau Host-only)](#mark6.7) suffisent souvent pour connecter des VMs entre elles ou pour ne
connecter des VMs qu'à l'hôte mais pas au réseau public.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.2 Authentification sur un bureau distant (VRDP)<a id="mark13.3.2.2"></a>

Quand on utilise le pack d'extension de VirtualBox fourni par Oracle pour accéder à distance
(VRDP), on peut éventuellement utiliser plusieurs méthodes pour configurer l'authentification
RDP. La méthode "null" est très peu sûre, vous devriez l'éviter sur un réseau public. Voir chapitre [7.1.5 Authentification RDP](#mark7.1.5) pour les détails.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.3 Presse-papier<a id="mark13.3.2.3"></a>

Le presse-papier partagé permet aux utilisateurs de partager des données entre l'hôte et l'invité.  
L'activation du presse-papier en "mode bidirectionnel" permet à l'invité de lire et d'écrire dans le
presse-papier de l'hôte. Le mode "hôte vers invité" et "Invité vers hôte" limitent l'accès à un seul
sens. Si l'invité peut accéder au presse-papier de l'hôte, il peut aussi accéder potentiellement à
des données sensibles de l'hôte partagées dans le presse-papier.  
Si l'invité peut lire et/ou écrire dans le presse-papier de l'hôte, un utilisateur distant qui se connecte à l'invité par le réseau aura également cette possibilité, ce qui peut ne pas être souhaitable.  
Par conséquent, le presse-papier partagé est désactivé pour les nouvelles machines.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.4 Dossiers partagés<a id="mark13.3.2.4"></a>

Si un dossier de l'hôte est partagé avec l'invité, n'importe quel utilisateur connecté à distance à
l'invité par le réseau peut accéder aussi à ces fichiers car le mécanisme de partage des dossiers
ne peut pas être désactivé de manière sélective pour des utilisateurs distants.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.5 Accélération graphique 3D<a id="mark13.3.2.5"></a>

L'activation de la 3D avec les suppléments invité expose l'hôte à des risques supplémentaires de
sécurité ; voir chapitre [4.4.1 Accélération 3D matérielle (OpenGL et Direct3D 8/9)](#mark4.4.1)

[Retour à la table des matières](#Table des matières)

# 13.3.2.6 CD/DVD passthrough<a id="mark13.3.2.6"></a>

L'activation du CD/DVD passthrough permet à l'invité d'effectuer des opérations avancées sur le
lecteur CD/DVD, voir chapitre [5.9 Support des CD/DVD](#mark5.9) Cela peut poser un problème
de sécurité car un invité pourrait écraser des données sur un DVD.  

[Retour à la table des matières](#Table des matières)

# 13.3.2.7 USB passthrough<a id="mark13.3.2.7"></a>

La présentation de périphériques USB à l'invité offre à l'invité un accès complet à ces périphériques, voir chapitre [3.10.1 Paramètres USB](#mark3.10.1) Par exemple, outre la lecture et
l'écriture du contenu des partitions d'un disque USB externe, l'invité pourra également
lire et écrire la table de partitions et des données matérielles sur ce disque.  

[Retour à la table des matières](#Table des matières)

# 13.3.3 Configurer et utiliser l'authentification<a id="mark13.3.3"></a>

Les composants suivants de VirtualBox peuvent utiliser des mots de passe pour l'authentification :  

* Lors de l'utilisation du stockage iSCSI à distance et si le serveur de stockage exige une
authentification, vous pouvez fournir un mot de passe d'initiateur avec la commande  
`VBoxManage storageattach`. Tant que vous ne fournissez pas de réglage de mots de
passe (l'option
`--settingspwfile`  
en ligne de commande), ce mot de passe secret est stocké sans chiffrement dans la configuration de la machine et il est donc potentiellement lisible sur l'hôte. Voir chapitre [5.10 Serveurs iSCSI](#mark5.10) et chapitre [8.18 VBoxManage storageattach](#mark8.18)  
* Quand vous utilisez le service Web de VirtualBox pour contrôler un hôte VirtualBox à distance, les connexions au service sont authentifiées de plusieurs façons. Ceci est décrit en
détails dans manuel de référence du kit de développement logiciel de VirtualBox (SDK) ;
merci de voir chapitre [11 Interfaces de programmation de VirtualBox](#mark11)  

[Retour à la table des matières](#Table des matières)

# 13.3.4 Opérations potentiellement non sécurisées<a id="mark13.3.4"></a>

Les fonctions suivantes de VirtualBox peuvent présenter des problèmes de sécurité :  

* L'activation de la 3D par les suppléments invité expose l'hôte à des risques de sécurité
supplémentaires ; voir chapitre [4.4.1 Accélération 3D matérielle (OpenGL et Direct3D 8/9)](#mark4.4.1)  
* En téléportant une machine, le flux de données par lequel passe le contenu de la mémoire
de la machine est transféré d'un hôte à l'autre sans chiffrement. Un tiers ayant un accès
au réseau par lequel les données sont transférées pourrait donc intercepter ces données.  
On pourrait utiliser un tunnel SSH pour sécuriser la connexion entre les deux hôtes. Mais
au moment de téléporter une VM par un réseau non fiable, la première question à vous
poser est celle de savoir comment les VMs peuvent accéder de manière sécurisée à la/aux
même(s) image(s) de disque virtuel avec une performance raisonnable.  
* Quand vous utilisez le service Web de VirtualBox pour contrôler un hôte VirtualBox à distance, les connexions au service (par lesquelles les appels de l'API sont transférées en SOAP
XML) ne sont pas chiffrées, elles utilisent par défaut le HTTP en clair. C'est un risque potentiel de sécurité ! Pour des détails sur le service Web, merci de voir chapitre [11 Interfaces de programmation de VirtualBox](#mark11)  
Les services web ne sont pas lancés par défaut. Merci de vous reporter au chapitre [9.20 Démarrer le service Web de VirtualBox automatiquement](#mark9.20) pour voir comment démarrer ce service et activer le support SSL/TLS. Il faut le démarrer en tant qu'utilisateur
ordinaire et seules les VMs de cet utilisateur sont contrôlables. Par défaut, le service sonde
localhost, empêchant toute connexion distante.  
* Le trafic envoyé par une connexion réseau en tunnel UDP n'est pas chiffré. Vous pouvez
soit le chiffrer au niveau du réseau hôte (avec IPsec), soit utiliser des protocoles chiffrés
dans le réseau invité (tel que SSH). Les propriétés de sécurité sont similaires au  bridged Ethernet.  

[Retour à la table des matières](#Table des matières)

# 13.3.5 Chiffrement<a id="mark13.3.5"></a>

Les composants suivants de VirtualBox utilisent le chiffrement pour protéger ces données sensibles :  

* Quand on utilise le pack d'extension de VirtualBox fourni par Oracle pour le support du
bureau distant (VRDP), les données peuvent être éventuellement chiffrées. Voir chapitre [7.1.6 Chiffrement RDP](#mark7.1.6) pour des détails. Seule la méthode Enhanced RDP Security (RDP5.2) avec le protocole TLS offre une connexion sécurisée. La Standard RDP
Security (RDP4 et RDP5.1) est vulnérable à une attaque man-in-the-middle.  

[Retour à la table des matières](#Table des matières)

# 14 Limites connues<a id="mark14"></a>

# 14.1 Fonctions expérimentales<a id="mark14.1"></a>

Certaines fonctions de VirtualBox sont étiquetées comme étant expérimentales. De telles fonctions sont offertes sur une base "as-is" et elles ne sont pas formellement supportées. Cependant,
des retours et les suggestions sur ces fonctions sont bienvenus. Voici une liste complète des
fonctions expérimentales :  

* Pilote graphique WDDM Direct3D pour les invités Windows
* Support de l'accélération matérielle 3D pour les invités Windows, Linux, et Solaris
* Support de l'accélération 2D pour les invités Windows
* PCI pass-through (hôtes Linux uniquement)
* Invités Mac OS X (hôtes hosts uniquement)
* Émulation du chipset ICH9
* ﬁrmware EFI
* Pass-through lecteur CD/DVD de l'hôte
* Support d'iSCSI par le réseau interne
* Signalement synthétique du processeur

[Retour à la table des matières](#Table des matières)

# 14.2 Problèmes connus<a id="mark14.2"></a>

La section suivante décrit les problèmes connus avec VirtualBox 4.3.13. Sauf autrement spécifié,
il est prévu de corriger ces problèmes dans les prochaines versions.  

* Les limites SMP (multiprocesseur) de l'invité existent :  
	* Faibles performances avec des invités 32 bits sur des processeurs AMD. Cela concerne surtout les invités Windows et Solaris, mais aussi probablement certaines révisions du noyau Linux. Corrigé partiellement dans la 3.0.6 pour les invités Windows
NT, 2000, XP et 2003 32 bits. Exige l'installation des suppléments invité 3.0.6 ou
supérieur.  
	* Faibles performances avec les invités 32 bits sur certains modèles de processeurs
Intel qui n'incluent pas le support de l'optimisation matérielle APIC virtuel. Cela concerne surtout les invités Windows et Solaris, mais probablement également certaines
révisions du noyau Linux. Corrigé partiellement dans la 3.0.12 pours les invités Windows NT, 2000, XP et 2003 32 bits. Exige l'installation des suppléments invité 3.0.12
ou supérieur.  
* Invités 64 bits sur des systèmes hôtes 32 bits avec VT-x peut provoquer des instabilités
sur votre système. Si vous vivez cela, n'essayez pas d'exécuter des invités 64 bits. Reportez-
vous au forum des utilisateurs de VirtualBox pour des informations supplémentaires.  
* NX (empêche l'exécution et l'exécution de données) ne fonctionne que sur les invités en
fonction sur des hôtes 64 bits ou sur des hôtes 32 bits ayant activé PAE et la virtualisation
matérielle doit être activée.  
* Pour que le support Direct3D de base dans les invités Windows fonctionne, il faut installer les suppléments invité en mode "sans échec" dans Windows. Appuyez sur F8 quand
l'invité Windows démarre et sélectionnez "Mode sans échec", puis installez les suppléments
invité. Sans cela, le mécanisme de protection des fichiers de Windows interfèrera dans le
remplacement des DLLs installés par VirtualBox et il restaurera les DLLs du système Windows d'origine.  
Note: Cela ne s'applique pas au pilote graphique expérimental Direct3D WDDM
disponible pour les invités Vista et Windows 7 inclu avec VirtualBox 4.1.  
* contrôle de l'invité. Sur les invités Windows, un processus lancé via le support d'exécution
du contrôle de l'invité ne pourra pas afficher d'interface graphique, sauf si le compte utilisateur sous lequel il est lancé est connecté et s'il a une session de bureau.  
En outre, pour utiliser des comptes avec ou sans mot de passe vide, vous devez modifier la
politique de groupe de l'invité. Pour ce faire, ouvrez un éditeur des règles de groupes en
ligne de commande en tapant `gpedit.msc`, ouvrez la clé `Computer Configuration\Windows Settings\Security Settings\Local Policies\Security Options` et passez la valeur de `Accounts: Limit local account use of blank passwords to console logon only en Disabled`.  
* La compression d'images de disques virtuels est limitée aux fichiers VDI. La commande
`VBoxManage modifyhd --compact` n'est actuellement implémentée que les fichiers VDi.  
Pour l'instant, la seule façon d'optimiser la taille des images de disques virtuels dans
d'autres formats (VMDK, VHD) est de cloner l'image puis d'utiliser l'image clonée dans
la configuration de la VM.  
* import/export d'OVF :  
	* La localisation des OVF (plusieurs langues dans un fichier OVF) n'est pas encore supportée.
– Certaines sections OVF comme StartupSection, DeploymentOptionSection et Install-
Section sont ignorées.  
	* Les documents de venvironnement OVF, y compris leurs sections de propriétés et la
configuration d'applicatifs avec des images ISO, ne sont pas encore supportés.  
	* Les fichiers distants avec HTTP ou d'autres mécanismes ne sont pas encore supportés.  
* Ni le mode échelonné ni le mode transparent ne fonctionnent bien avec les invités qui
utilisent les fonctions 3D d'OpenGL (telles que celles avec les gestionnaires de fenêtres
ayant activé compiz).  
* Le serveur RDP du pack d'extension de VirtualBox ne supporte que les flux audio au format
22.05kHz stereo 16 bit. Si le client RDP demande d'autres formats de son, ils ne seront pas
sonores.  
* La préservation de l'apparence de l'affichage en mode échelonné ne fonctionne que sur les
hôtes Windows et sur les hôtes Mac OS X.  
* Sur les hôtes Mac OS X, les fonctions suivantes ne sont pas encore implémentées :  
	* Émulation du verrouillage numérique
	*Mesure de la fréquence du processeur
	* Jeu de ballon avec la mémoire
* Invités Mac OS X :
	* Les invités Mac OS X ne peuvent fonctionner que sur un certain matériel hôte. Pour
des détails sur les limites de la licence et du matériel hôte, merci de voir chapitre [3.1.1 Invités Mac OS X](#mark3.1.1) et vérifiez les conditions de la licence logicielle d'Apple.  
	* VirtualBox n'offre pas de suppléments invité pour Mac OS X pour l'instant.  
	* La résolution graphique est par défaut de 1024x768 car Mac OS X se rabat sur le
support d'affichage EFI intégré. Voir chapitre [3.12.1 Modes graphiques dans EFI](#mark3.12.1) pour plus d'informations sur la façon de modifier les modes graphiques EFI.  
	* Les invités Mac OS X ne fonctionnent qu'avec un processeur sur une VM. Le support
du SMP sera fourni dans une version future.  
	* Selon votre système et votre version de Mac OS X, vous pourriez connaître des plantages de l'invité après quelque temps. Vous pouvez corriger cela en désactivant
l'économie d'énergie (passez le timeout à "Never" (jamais)) dans les préférences du
système.  
	* Par défaut, l'EFI de VirtualBox active la sortie de débogage du noyau Mac OS X pour
vous aider à diagnostiquer les problèmes de démarrage. Remarquez qu'il y a de nombreux messages et toutes les erreurs ne sont pas fatales (elles s'afficheraient aussi
sur votre Mac physique). Vous pouvez désactiver ces messages en lançant cette commande :  
`VBoxManage setextradata "nom VM" "VBoxInternal2/EfiBootArgs" " "`  
Pour revenir au comportement précédent, utilisez:  
`VBoxManage setextradata "nom VM" "VBoxInternal2/EfiBootArgs" ""`  
* Hôtes Solaris :  
	* Il n'y a pas de support des périphériques USB connectés aux hôtes Solaris 10.  
	* Le support USB sur les hôtes Solaris exige Solaris version 11 snv_124 ou supérieur.  
Les Webcams et les autres périphériques de temps (isochronous) sont connus pour
donner de faibles performances.  
	*Aucune informations d'ACPI (état de la batterie, source d'énergie) n'est signalée à
l'invité.  
	* Pas de support des adaptateurs wiﬁ avec le réseau bridgé.  
	* Le réseau bridgé basé sur Crossbow sur les hôtes Solaris ne fonctionne pas directement avec les liens agrégés. Cependant, vous pouvez créer à la main un VNIC (en
utilisant dladm) via le lien agrégé et utilisez-le avec une VM. Cette limite technique
sera corrigée dans une future version de Solaris 11.  
* Suppléments invité de la version 4.1, 4.1.2 et 4.1.4 pour Windows Il se peut que le
pilote graphique WDDM de VirtualBox peut être installé et gardé dans le sysstème invité
après la désinstallation des suppléments invité. Cela vient d'un bogue du désinstalleur des
suppléments invité.  
Note: Cela ne s'applique pas aux mises à jour des suppléments invité, c'est-à-dire
que l'installation d'une version des suppléments invité par-dessus une autre fonctionne
correctement.  
Pour résoudre ce problème, vous devriez désinstaller le pilote graphique WDDM de
VirtualBox à la main. Pour cela, ouvrez le gestionnaire de périphériques et vérifiez si
l'adaptateur d'affichage s'appelle "VirtualBox Graphics Adapter". Sinon - il n'y a rien
à faire. Si oui, - faites un clic droit sur VirtualBox Graphics Adapter dans le gestionnaire de périphériques, sélectionner "Désinstaller", cochez "Effacer le pilote de ce périphérique" et cliquez sur "OK". Une fois que la désinstallation est ﬁnie - dans le gestionnaire de périphériques, allez dans le menu "Action" et sélectionnez "Analyser les changements matériels" pour utiliser le bon pilote (celui par défaut de Windows) pour l'adaptateur
graphique.  
* Ni le pilote virtio ni Intel PRO/1000 des invités Windows XP ne supportent la segmentation hors charge (offloading). Donc, les invités Windows XP unt des vitesses de transmission plus lentes que d'autres types d'invités. Reportez-vous à l'article 842264 du MS
Knowledge base pour des informations supplémentaires.  
* Suppléments invité pour OS/2. Les dossiers partagés ne sont pas encore supportés avec
les invités OS/2. De plus, les fenêtres transparentes et le redimensionnement de l'invité
ne seront probablement jamais implémentés à cause de limites intrinsèques du système
graphique d'OS/2.  

[Retour à la table des matières](#Table des matières)

# 15 Historique des changements<a id="mark15"></a>

Cette section consultable en ligne résume les changements entre les versions de VirtualBox. Remarquez que cet historique n'est pas exhaustif ; tous les changements ne sont pas listés.  
Les numéros de version de VirtualBox consistent en trois nombres séparés par des points où le premier et le second numéro représentent la version majeure et le 3ème nombre la version mineure. Les numéros des versions mineures des versions officielles sont toujours là. Un numéro de version mineure ad hoc représente une construction de développement ou de test. En outre, chaque construction contient un numéro de révision.

Vous pouvez consulter la documentation (en anglais) afin de connaître les nouveautés de cette version en allant à:  

<https://www.virtualbox.org/manual/UserManual.html#ChangeLog>  

L'historique des changements (en anglais) sont également disponibles à:  

<https://www.virtualbox.org/wiki/Changelog>

[Retour à la table des matières](#Table des matières)

# 16 Matériaux tiers et licences<a id="mark16"></a>

VirtualBox englobe des matériaux de plusieurs logiciels Open Source. Donc, l'utilisation de ces matériaux par VirtualBox est soumise à des licences Open Source. Ce document en anglais consultable en ligne reproduit ces licences et fournit une liste des matériaux utilisés avec leurs conditions de licences respectives.  

Vous pouvez consulter la partie Matériaux tiers et licences qui se trouve dans la documentation (en anglais) en allant à:  

<https://www.virtualbox.org/manual/UserManual.html#ThirdParty>

[Retour à la table des matières](#Table des matières)

# 16.1 Matériaux<a id="mark16.1"></a>

Vous pouvez consulter la partie Matériaux qui se trouve dans la documentation (en anglais) en allant à:  

<https://www.virtualbox.org/manual/UserManual.html#third-party-materials>

[Retour à la table des matières](#Table des matières)

16.2 Licences<a id="mark16"></a>

VirtualBox est libre d'utilisation pour sa partie principale mais les Add-on, quant à eux, sont disponibles uniquement pour un usage privé, à titre privé. En bref, il est interdit d'utiliser les Add-on en entreprise ou en université.  

Vous pouvez consulter la partie Licences qui se trouve dans la documentation (en anglais) en allant à:  

<https://www.virtualbox.org/manual/UserManual.html#third-party-licenses>

[Retour à la table des matières](#Table des matières)

# 17 Informations sur la confidentialité de VirtualBox<a id="mark17"></a>

Politique de confidentialité version 5, 13 déc. 2012  
La politique de confidentialité d'Oracle publiée sur <http://www.oracle.com/html/privacy.html> s'applique à vos données personnelles recueillies et utilisées par Oracle. Les informations suivantes décrivent en détails les informations qui sont échangées entre l'application VirtualBox et Oracle et celles recueillies par le site Internet virtualbox.org.  

1. virtualbox.org. Le site Internet "virtualbox.org" enregistre les informations d'utilisation anonymes telles que votre adresse IP, votre situation géographique, votre navigateur, l'endroit d'où vous naviguez, la durée de votre visite, le nombre de pages vues pendant votre visite (collectivement, “données anonymes"). En outre, mais seulement si vous choisissez de vous enregistrer, le chasseur de bogues du site Internet et les forums stockent les données que vous choisissez de révéler lors de l'enregistrement telles que votre nom d'utilisateur et vos informations de contact.  
2. Cookies. Le site Internet virtualbox.org, le chasseur de bogues et le forum utilisent des cookies pour identifier et savoir les navigateurs internet qui nous visitent et, si vous vous êtes enregistré, pour faciliter votre identification. La plupart des navigateurs vous permettent de refuser les cookies. Si vous pouvez visiter le site Internet sans cookies, l'écriture dans le chasseur de bogues et dans les services de forum ne fonctionnera probablement pas sans eux.  
3. Processus d'enregistrement de VirtualBox. Il se peut que l'application VirtualBox demande à l'utilisateur, à titre facultatif, de s'enregistrer auprès d'Oracle. Si vous choisissez de vous enregistrer, votre nom, votre adresse électronique, votre pays et votre société seront envoyés à Oracle et stockées avec l'adresse IP de la personne ainsi que la version du produit et la plateforme utilisée.  
4. Notifications de mise à jour. Il se peut que l'application VirtualBox contacte Oracle pour savoir si une nouvelle version de VirtualBox a été publiée et pour avertir l'utilisateur si tel est le cas. Dans ce processus, des données anonymes telles que votre adresse IP et un numéro de comptage non caractéristique, la version du produit et la plateforme utilisée sont envoyées pour que le serveur sache si une mise à jour est disponible. Par défaut, cette vérification a lieu une fois par jour. Pour modifier cet intervalle ou désactiver ces vérifications, allez dans les préférences de VirtualBox.  
5. Utilisation des informations personnelles. Oracle peut utiliser ces données anonymes et personnelles recueillies par les moyens ci-dessus à des fins statistiques ou pour vous informer automatiquement des nouveaux messages liés au vôtre sur le chasseur de bogues et le forum, pour administrer le site Internet et pour vous contacter du fait de problèmes techniques. Oracle peut aussi vous informer de nouvelles versions de produits liés à VirtualBox.  
Vos données personnelles ne seront en aucun cas transmises à un tiers sans votre consentement, sauf si cela est demandé à Oracle par une loi ou dans le cadre de procédures légales.  
6. Mises à jour. Oracle peut mettre à jour sa politique de confidentialité n'importe quand en  publiant une nouvelle version sur <http://www.oracle.com/html/privacy.html> et les informations de confidentialité seront mises à jour dans la documentation fournie avec l'application VirtualBox. Vous devriez vérifier ces ressources de temps en temps pour vous assurer que les changements vous conviennent.  

[Retour à la table des matières](#Table des matières)

# Glossary<a id="mark000"></a>

Vous pouvez consulter le glossaire qui se trouve dans la documentation (en anglais) en allant à:  

<https://www.virtualbox.org/manual/UserManual.html#Glossary>  

[Retour à la table des matières](#Table des matières)

---

Je vous souhaite une très bonne utilisation du programme Oracle VM VirtualBox - Programme pour lancer plusieurs systèmes d'exploitation en même temps (dans plusieurs machines virtuelles! :)  
@+  
BlindHelp!  

---

Nous espérons vous revoir bientôt sur le  
[Blog de BlindHelp!](htt://blindhelp.blogspot.fr/)  
ou sur  votre nouvel espace via GitHub:  
[BlindHelp.github.io](https://blindhelp.github.io)  

---


