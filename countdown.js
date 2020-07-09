//Declaring the deadline button so we can find the difference between current date and final date.
const deadline = '2020-07-09 20:30:00 gmt-0300';

//Function to parse date and find seconds, minutes, hours etc...
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    };
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

//Clock display output function
function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const timeInterval = setInterval(() => {
        const t = getTimeRemaining(endtime);

        clock.innerHTML = `${pad(t.days,2)} : ${pad(t.hours,2)} : ${pad(t.minutes,2)} : ${pad(t.seconds,2)}`;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

initializeClock('clock', deadline);