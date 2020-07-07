function onMouseOut(event) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
}

function closeAlert(event) {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener("mouseout", onMouseOut);

document.addEventListener("click", closeAlert);