// DOM-Elemente 
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number, .comma, .operator");
const equals = document.querySelector(".equals"); // Nur ein Klassenelement, daher nicht getElementsByClassName
const clear = document.querySelector(".clear");

// Funktion zum Anzeigen der gedrückten Taste im Display
const updateDisplay = (buttonValue) => {
    display.value += buttonValue;
};
//Eventlistener für Klicks auf Zahlen, Kommazeichen und Operatoren

numbers.forEach((numberElement) => {
    numberElement.addEventListener("click", () => {
        updateDisplay(numberElement.innerText);
    });
});


// Funktion zum Berechnen des Ausrucks im Display
const calculateExpression = () => {
    display.value = eval(display.value);
};

// Event-Listener für Klicks auf Gleichheitszeichen (=)
equals.addEventListener("click", calculateExpression);
  

// Funktion zum Löschen des Display-Inhalts
const clearDisplay = () => {
    display.value = "";
};
  
// Event-Listener für Klick auf Clear-Button (C)
clear.addEventListener("click", clearDisplay);