import { occupations as occupationz } from "./occupations.js";
import { Autocomplete } from "./Autocomplete.js"

// Convert Array to Set
const occupations = new Set([...occupationz]) 

// Initializes Autocomplete
const autocomplete = new Autocomplete(occupations);

// 1️⃣
setBindings();
// 2️⃣
render(); 

// Event Handlers
function onKeyUpHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.clear()

    const userInput = e.target.value;

    // If the user typed less than 2 chars, no need to re-render stuff
    if(userInput.length < 2 && userInput.length !== 0) return;

    // If the user input is empty, we should display/render the full list
    if(userInput.length === 0) render()
    // render the view based on userInput
    else render(userInput);
    
};


function setBindings(){
    // HTML Elements
    const select = document.querySelector("select");
    const input = document.querySelector("input");
    
    // Handler binding
    input.onkeyup = onKeyUpHandler;
}


function render(userInput = null){
    const HTMLdiv = document.querySelector("#results")
    HTMLdiv.innerHTML = "";

    if(userInput) {
        HTMLdiv.appendChild(autocomplete.getHTML(userInput));
    } else {
        HTMLdiv.appendChild(autocomplete.getHTML());
    }
}
