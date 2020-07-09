// --------------------Popup function--------------------

function onMouseOut(event) {

    if (timeSpentOnSite >= 5) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
}
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

// ------------------------User time on page----------------

var timer;
var timerStart;
var timeSpentOnSite = getTimeSpentOnSite();

function getTimeSpentOnSite(){
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCounting(){
    timerStart = Date.now();
    timer = setInterval(function(){
        timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
        localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
        timerStart = parseInt(Date.now());
        // Convert to seconds
        console.log(parseInt(timeSpentOnSite/1000));
    },1000);
}

startCounting();
