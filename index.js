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
        colourSample[i].style.background = randomColour;
        colourSampleHexCode[i].textContent = randomColour;
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