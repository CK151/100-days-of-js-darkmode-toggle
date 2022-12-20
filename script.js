const toggleDarkMode = document.querySelector(".toggle-dark-mode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// Set Dark mode

const enableDarkeMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";

    localStorage.setItem("darkMode", "enabled");
}


// disable dark mode
const disenableDarkeMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";

    localStorage.setItem("darkMode", null);
}

//save dark mode
if (darkMode == "enabled") {
    enableDarkeMode();
}


//add event listener

toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode != "enabled") {
        enableDarkeMode();
    }
    else {
        disenableDarkeMode();
    }
})