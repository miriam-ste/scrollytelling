document.addEventListener ("scroll", function() {
    if(inView("Overall-text")){
        document.getElementById("CDU-graph").style.opacity = 0.25;
        document.getElementById("SPD-graph").style.opacity = 0.25;
        document.getElementById("Left-graph").style.opacity = 0.25;
        document.getElementById("FPD-graph").style.opacity = 0.25;
        document.getElementById("Greens-graph").style.opacity = 0.25;
        document.getElementById("Overall_Parliament-graph").style.opacity = 1;
        console.log("print")
    }


})

function inView(id) {
    var object = document.getElementById(id);
    var y = object.getBoundingClientRect().y
    //console.log(object.getBoundingClientRect().y, window.innerHeight)
    if (y <= window.innerHeight && y > 0) {
        return true;
    } else {
        return false;
    }
}