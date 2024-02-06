const toggle = document.querySelector('.toggle-12hrs');
const displayHours = document.getElementById("hour");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayDate = document.getElementById("date");
const ampmEl = document.getElementById("ampm");

// 12 hours format toggle
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active-h");

    let formatValue = toggle.getAttribute("data-format");

    if (formatValue === "24") {
        toggle.setAttribute("data-format", 12);
        ampm.style.visibility = "visible";
    }
    else {
        toggle.setAttribute("data-format", 24);
        ampm.style.visibility = "hidden";
    }
});

// Get current date and time 
function displayClock() {
    var monthsName = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysName = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let d = (daysName[new Date().getDay()] + ", " + new Date().getDate() + " " + monthsName[new Date().getMonth()] + " " + new Date().getFullYear());
    let h = (new Date().getHours() < 10 ? "0" : "") + new Date().getHours();
    let m = (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes();
    let s = (new Date().getSeconds() < 10 ? "0" : "") + new Date().getSeconds();
    let ampm = "AM";

    // 12 hours format 
    let formatValue = toggle.getAttribute("data-format");
    if (formatValue === "12") {
        if (h > 12) {
            h = h - 12;
            ampm = "PM"
        }
    }

    // Convert all value to string 
    displayDate.innerText = d;
    displayHours.innerText = h;
    displayMinutes.innerText = m;
    displaySeconds.innerText = s;
    ampmEl.innerText = ampm;

    // Up date every 1000ms 
    setTimeout(() => {
        displayClock();
    }, 1000);
}

displayClock();


