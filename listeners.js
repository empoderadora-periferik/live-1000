

// --------------------Popup function--------------------

function onMouseOut(event) {

    document.getElementById("popup").style.display = "block";

}


// --------------------Consts for ev.listeners--------------------

const closeBtn = document.getElementById("closeBtn");onclick = function () {
    document.getElementById("popup").style.display = "none"
}


// --------------------Calling listeners--------------------


$(function(){
    var mouseY = 0;
    var topValue = 0;
    window.addEventListener("mouseout",function(e){
        mouseY = e.clientY;
        if(mouseY<topValue) {
            onMouseOut();
        }
    },
    false);
});