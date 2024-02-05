const displayHours = document.getElementById("hour");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayDate = document.getElementById("date");

function displayClock() {
    var monthsName = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysName = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = (daysName[new Date().getDay()] + ", " + new Date().getDate() + " " + monthsName[new Date().getMonth()] + " " + new Date().getFullYear());
    let h = (new Date().getHours() < 10 ? "0" : "") + new Date().getHours();
    let m = (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes();
    let s = (new Date().getSeconds() < 10 ? "0" : "") + new Date().getSeconds();

    displayDate.innerHTML = d;
    displayHours.innerHTML = h;
    displayMinutes.innerHTML = m;
    displaySeconds.innerHTML = s;

    setTimeout(() => {
        displayClock();
    }, 1000);
}

displayClock();

