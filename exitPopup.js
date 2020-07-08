function onMouseOut(event) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
}

function closeAlert(event) {
    document.getElementById("popup").style.display = "none";
}

const closeBtn = document.getElementById("closeBtn");

document.addEventListener("mouseout", onMouseOut);

closeBtn.addEventListener("click", closeAlert);