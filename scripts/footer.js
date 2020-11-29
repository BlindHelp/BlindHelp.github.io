import ConvertDate from './convertDate.js';

var footer = document.getElementById("footer");
var div = document.createElement("DIV");
var update = new Date(document.lastModified);
var convertDocumentDate = new ConvertDate(update);

div.innerHTML = "<p>Dernière mise à jour: <time>" + convertDocumentDate.convertedDate + "</time></p>";
footer.appendChild(div);
