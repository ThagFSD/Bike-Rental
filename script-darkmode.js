let darkMode = localStorage.getItem("darkMode");

const toggleTheme = document.querySelector(".toggle-theme");
const toggleHourFt = document.querySelector('.toggle-12hrs');
const theme1 = Array.from(document.getElementsByClassName("theme1"));
const theme2 = Array.from(document.getElementsByClassName("secs"));
const p = Array.from(document.getElementsByTagName("p"));

// Enable darkmode 
const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    theme2.forEach(theme2Dark);
    theme1.forEach(darkTheme);
    p.forEach(darkTheme);
    toggleHourDark(toggleHourFt);

    localStorage.setItem("darkMode", "enabled");
};

//Disable darkmode 
const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    theme2.forEach(theme2Light);
    theme1.forEach(lightTheme);
    p.forEach(lightTheme);
    toggleHourLight(toggleHourFt);
    localStorage.setItem("darkMode", null);
};

// Toggle 12 hour theme
function toggleHourLight(element) {
    element.style.border = "#302d2d solid";
    element.style.setProperty("--before", "#302d2d solid");
} 

// Toggle 12 hour theme  
function toggleHourDark(element) {
    element.style.border = "#eee solid";
    element.style.setProperty("--before", "#000 solid");
}

//Darktheme 
function darkTheme(element) {
    element.style.color = "#eee";
}

//Lightheme
function lightTheme(element) {
    element.style.color = "#302d2d";
}

function theme2Dark(element) {
    element.style.color = "#eee";
    element.style.opacity = "0.6";
}

function theme2Light(element) {
    element.style.color = "#afacac";
    // element.style.opacity = "1";
}

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


