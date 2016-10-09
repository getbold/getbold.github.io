function nav() {
    var x = document.getElementById("nav");
    var y = document.getElementById("left");
    if (x.className === "nav") {
        y.className += " leftbigger";
        x.className += " responsive";
    } else {
        x.className = "nav";
        y.className = "left";
    }
}
