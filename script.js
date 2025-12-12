// Task 1: Verification Log
console.log("Status Manager Started"); // Console log message you can check with F12

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!"; // Changes the HTML content with the id tag, main-title

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle"); // Sets an attribute to the button labeing it as something that can be toggled

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

function highlightListItems() { // Function that contains searches for list elements and sets their background to blue
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "blue";
    }
}

highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
function toggleStatus(e) { // Function that accepts 'e'
    statusOutput.classList.toggle("hidden"); // Element with id status-ouput toggles the hidden class
    console.log("Toggle Button Clicked") // Console log to make sure it toggled
    e.preventDefault(); // Prevents the page from refreshing or jumping when toggleStatus is called

        if(!statusOutput.classList.contains("hidden")) { // if statusOuput is not hidden, then the background color changes to yellow
            mainTitle.style.backgroundColor = "yellow";
            createTimestamp(); // When visible, it calls the function createTimestamp
        } else {
            mainTitle.style.backgroundColor = ""; // Resets the background color when statusOutput is hidden
        }
}

    toggleButton.addEventListener("click", toggleStatus); // Runs toggleStatus function when toggleButton is clicked on

function createTimestamp() {
    statusOutput.innerHTML = ""; // Resets timestamp
    const timeStamp = document.createElement("span"); // Creates a <span> element to log the time
    let currentTime = new Date().toLocaleTimeString(); // Gets the current time as a string
    timeStamp.innerHTML = currentTime; // span timeStamp is now set with the current time
    statusOutput.appendChild(timeStamp); // statusOuput is appended with the timeStamp span and displays  
}

    
/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

function startFlashing() {
    if (intervalId) return; // Prevents multiple flashing 
    intervalId = setInterval(() => { // When  start timer is clicked on, it toggles the hidden class every 500ms
        controlPanel.classList.toggle("hidden");
    }, 500);
}

function stopFlashing() { // When called, the function stops the interval, sets it to null, and removes the class hidden
    clearInterval(intervalId);
    intervalId = null;
    controlPanel.classList.remove("hidden");
}

timerButton.addEventListener("click", startFlashing); // When clicked it will start flashing
timerButton.addEventListener("dblclick", stopFlashing); // When double clicked it will stop flashing
