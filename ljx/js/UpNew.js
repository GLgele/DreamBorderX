if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
}
else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET", "../xml/UpNews.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

document.getElementById("news1").innerHTML =
xmlDoc.getElementsByTagName("news1")[0].childNodes[0].nodeValue;
document.getElementById("news2").innerHTML =
xmlDoc.getElementsByTagName("news2")[0].childNodes[0].nodeValue;
document.getElementById("news3").innerHTML =
xmlDoc.getElementsByTagName("news3")[0].childNodes[0].nodeValue;
document.getElementById("update1").innerHTML =
xmlDoc.getElementsByTagName("update1")[0].childNodes[0].nodeValue;
document.getElementById("update2").innerHTML =
xmlDoc.getElementsByTagName("update2")[0].childNodes[0].nodeValue;
document.getElementById("update3").innerHTML =
xmlDoc.getElementsByTagName("update3")[0].childNodes[0].nodeValue;