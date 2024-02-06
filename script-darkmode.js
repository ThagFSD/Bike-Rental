let darkMode = localStorage.getItem("darkMode");

const datetime = document.getElementById("date");
const toggleTheme = document.querySelector(".toggle-theme");
const toggleHourFt = document.querySelector('.toggle-12hrs');
const hr = document.querySelector('.hr');
const min = document.getElementsByClassName('min');
const date = document.getElementById("date");
const p = document.getElementsByTagName("p");
const ampmE = document.getElementById("ampm");


const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    date.classList.add("darkmode-text");
    ampmE.style.color = "#eee";
    hr.classList.add("darkmode-text");
    min[0].classList.add("darkmode-text");
    min[1].classList.add("darkmode-text");
    p[0].classList.add("darkmode-text");
    p[1].classList.add("darkmode-text");
    toggleHourFt.style.border = "#eee solid";
    toggleHourFt.style.setProperty("--before", "#eee solid");
    

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    date.classList.remove("darkmode-text");
    hr.classList.remove("darkmode-text");
    ampmE.style.color = "#302d2d";
    min[0].classList.remove("darkmode-text");
    min[1].classList.remove("darkmode-text");
    p[0].classList.remove("darkmode-text");
    p[1].classList.remove("darkmode-text");
    toggleHourFt.style.border = "#302d2d solid";
    toggleHourFt.style.setProperty("--before", "#302d2d solid");

    localStorage.setItem("darkMode", null);
};

// toggleHourFt.addEventListener("click", () => {
    // toggleHourFt.classList.toggle("active-h");
// });

if (darkMode && darkMode === "enabled")
{
    toggleTheme.classList.toggle("active");
    enableDarkmode();
}

toggleTheme.addEventListener("click", () => {
    toggleTheme.classList.toggle("active");
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled")
    {
        enableDarkmode();
        //console.log(darkMode);
    }
    else {
        disableDarkmode();
        //console.log(darkMode);
    }
});


