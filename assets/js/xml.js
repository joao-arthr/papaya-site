xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "assets/xml/como.xml", false);
xmlhttp.send();
xmldoc = xmlhttp.responseXML;

let x = xmldoc.getElementsByTagName("item")

function funcaoConteudo() {
    n = x.length;
    for (var i = 0; i < n; i++) {
        document.write("<div class='col-lg-3 col-md-6 text-center'><div class='mt-5'>" +
            "<div class='mb-2'><i class='bi-" + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + " fs-1 text-warning '></i></div>" +
            "<h3 class='h4 mb-2'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h3>" +
            "<p class='text-muted mb-0'>" + x[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue + "</p></div></div>");
    }

}