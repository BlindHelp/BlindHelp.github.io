---
title: Comment convertir le fichier gettext .mo en fichier .po - La Solution
permalink: "/comment-convertir-le-fichier-gettext-mo-en-fichier-po/"
layout: post
author: BlindHelp
---

<footer>Publié le Samedi 16 Juillet 2022</footer>

Coucou mes amis du blog de BlindHelp!    
Aujourd'hui, je  vous apporte une astuce afin de comment convertir le fichier gettext .mo en fichier .po!    

Avertissement: 💀  
Le blog de BlindHelp n'est pas responsable des dommages causés par une mauvaise utilisation de cette astuce et l'utilisation de cette astuce est à vos risques et périls. ☠  


## Comment convertir le fichier gettext .mo en fichier .po

Existe-t-il un moyen de convertir un fichier .mo en une source de fichier .po lorsque le fichier .po n'est plus disponible? Je dois éditer le contenu d'un fichier .mo, mais je n'ai pas le fichier .po. Est-il possible?    

Vous pouvez résoudre ce problème en utilisant [Poedit Translation Editor - mieux connu sous le nom de Poedit](https://poedit.net) pour décompiler les fichiers .mo.    

Sous Windows et avec récents [POEDIT 2.2.4 installé](https://download.poedit.net/Poedit-2.2.4-setup.exe) en invite de commande vous tapez:    
`"C:\Program Files (x86)\Poedit\GettextTools\bin\msgunfmt.exe" MediaPlayerPro.mo -o MediaPlayerPro.po`    

Pour recréer le fichier.mo en invite de commande vous tapez:    
`"C:\Program Files (x86)\Poedit\GettextTools\bin\msgfmt.exe" MediaPlayerPro.po -o MediaPlayerPro.mo`    

Note: N'oubliez pas de modifier le nom du fichier que j'ai tapé en invite de commande comme exemple: MediaPlayerPro.mo / MediaPlayerPro.po par le nom de votre fichier mo / po    
Ensuite, vous devriez utiliser la première invite de commande mentionné ci-dessus.    
Où se trouve le fichier.mo se créera le fichier.po    
Une fois que vous l'avez édité, vous pouvez le compiler à nouveau en utilisant la deuxième invite de commande mentionné ci-dessus.    
Où se trouve le fichier.po se créera le fichier.mo    

Voilà,    
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
