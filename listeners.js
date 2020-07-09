// --------------------Popup function--------------------

function onMouseOut(event) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
}

function closeAlert(event) {
    document.getElementById("popup").style.display = "none";
}

// --------------------Consts for ev.listeners--------------------

const closeBtn = document.getElementById("closeBtn");

const youtube = document.getElementById("youtube").onclick = function () {
    location.href = "https://www.youtube.com/watch?v=LDmTFlOTFb4"
}


// --------------------Calling listeners--------------------


closeBtn.addEventListener("click", closeAlert);

document.addEventListener("mouseout", onMouseOut);
