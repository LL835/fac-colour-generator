function createHexCode() {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let newHexCode = "#"
    for (let i = 0; i < 6; i++) {
        const randomHexValue = hexValues[Math.floor(Math.random() * hexValues.length)]
        newHexCode += randomHexValue;
    }
    return newHexCode;
}

function generateColourPalette(){
    const colourSample = document.querySelectorAll(".colour-sample");
    const colourSampleHexCode = document.querySelectorAll(".hex-code")
    for (let i = 0; i < colourSample.length; i++) {
        const randomColour = createHexCode()
        if (colourSample[i].dataset.status === "unlocked") {
        colourSample[i].style.background = randomColour;
        colourSampleHexCode[i].textContent = randomColour;
        colourSample[i].dataset.hexcode = `${randomColour}`
        }
    }
}

function copyHexToClipBoard(colour){
    const hexCode = colour.parentElement.parentElement.parentElement.dataset.hexcode
    navigator.clipboard.writeText(hexCode)
}

function toggleLock(button){
    const status = button.parentElement.parentElement.parentElement
    if (status.dataset.status === "unlocked"){
        button.src = "./icons/lock.png";
        status.dataset.status = "locked";
    } else {
        button.src = "./icons/unlock.png";
        status.dataset.status = "unlocked"
    }
}

// Generates a new colour palette as soon as page is loaded.
document.addEventListener("DOMContentLoaded", generateColourPalette);

// Generates a new colour palette when user hits spacebar.
document.addEventListener("keypress", (e) => {
    if (e.key === " "){
        e.target.blur() // Stops the spacebar focusing on the last button that was clicked
        generateColourPalette();
    } else return;
})

// Generates a new colour palette when user click the "[SPACE]" button
const spaceBarButton = document.querySelector(".space-button");
spaceBarButton.addEventListener("click", generateColourPalette)

// Lets the user copy the hex code to their clipboard
const copyIcons = document.querySelectorAll(".copy-icon");
for (let i = 0; i < copyIcons.length; i++){
    copyIcons[i].addEventListener("click", (e) => {
        copyHexToClipBoard(e.target);
    })
}

// Lets the user lock a colour
const padlockIcons = document.querySelectorAll(".padlock-icon")
for (let i = 0; i < padlockIcons.length; i++){
    padlockIcons[i].addEventListener("click", (e) => {
        toggleLock(e.target)
    })
}
