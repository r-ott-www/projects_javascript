/* init:  Variable, die den Zählerwert speichert und mit 0 initialisiert wird */ 
let count = 0;

/* counter element: Referenz auf das HTML-Element mit der ID "counterValue", 
das den Zählerwert anzeigen wird.*/
const counter = document.getElementById("counterValue");

// increment function: Funktion, die den Zähler erhöht. 

function incrementCounter(){
    count = Number(localStorage.getItem("count")); // ruft den aktuellen Zählerwert aus dem Local Storage ab
    counter.innerText = count; // aktualisiert das counter-Element auf der Webseite
    localStorage.setItem("count", count + 1); // speichert den inkrementierten Wert im Local Storage.
}

//event listener

window.onload = incrementCounter;

//reset

const reset = document.getElementsByTagName("button")[0];

/* Wenn der "RESET"-Button geklickt wird, setzt die Funktion den im Local Storage 
gespeicherten Zählerwert auf 0 zurück und ruft incrementCounter() auf, 
um die Anzeige des Zählers zu aktualisieren.*/

reset.addEventListener("click", () => {
    localStorage.setItem("count", 0);
    incrementCounter();
})