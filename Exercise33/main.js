//  Manipulating the DOM

function clearit() {
    document.getElementById("header").innerHTML = "";
    document.getElementsByTagName("p")[0].innerHTML = "";
}

function change() {
    document.getElementById("header").innerHTML = "Share what you know";
    document.getElementsByTagName("p")[0].innerHTML = "Sharing is caring";
}