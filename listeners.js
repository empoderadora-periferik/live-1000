// --------------------Popup function--------------------

function onMouseOut(event) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
}


// --------------------Consts for ev.listeners--------------------

const closeBtn = document.getElementById("closeBtn");onclick = function () {
    document.getElementById("popup").style.display = "none"
}

const youtube = document.getElementById("youtube").onclick = function () {
    location.href = "https://www.youtube.com/watch?v=LDmTFlOTFb4"
}


// --------------------Calling listeners--------------------


document.addEventListener("mouseout", onMouseOut);
