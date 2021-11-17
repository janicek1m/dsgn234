let teenDramas = [
    {
        name: "Gossip Girl",
        year: 2007,
        epTwoTitle: "The Wild Brunch"
    },
    {
        name: "90210",
        year: 2008,
        epTwoTitle: "The Jet Set"
    },
    {
        name: "Degrassi: The Next Generation",
        year: 2001,
        epTwoTitle: "Mother and Child Reunion"
    },
    {
        name: "Riverdale",
        year: 2017,
        epTwoTitle: "Chapter Two: A Touch of Evil"
    }, {
        name: "13 Reasons Why",
        year: 2017,
        epTwoTitle: "Tape 1, Side B"
    }, {
        name: "Euphoria",
        year: 2019,
        epTwoTitle: "Stuntin' Like My Daddy"
    }, {
        name: "Dawsons Creek",
        year: 1998,
        epTwoTitle: "Dance"
    }
];


// Example 1: Displays one of the contents into the html

// let container = document.querySelector(".teen-show-container");
// container.innerHTML = teenDramas[0].name + ", " + teenDramas[0].year + ", " + teenDramas[0].epTwoTitle;

// Example 2: Displays all the contents into the html
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) {
// // creates a new div; appends that div to the container
// let newItem = document.createElement("div");
// let showDiv = container.appendChild(newItem);
// // adds a class to each new div
// newItem.classList.add("show");
// // places the show name to the div
// showDiv.innerHTML = show.name;
// console.log(show);
// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);


// Example 3: Same as above, but show the show name, year, and episode title but styled uniquely
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) { // creates a new div; appends that div to the container
//     let newItem = document.createElement("div");
//     let showDiv = container.appendChild(newItem);


//     // adds a class to each new div
//     newItem.classList.add("show");
//     // places the show name to the div
//     showDiv.innerHTML = show.name;


//     // Same process as above to add the show year, needs to go here so that it doesnt get overridden
//     let newYearItem = document.createElement("div");
//     let yearDiv = showDiv.appendChild(newYearItem);

//     newYearItem.classList.add("year");
//     yearDiv.innerHTML = show.year;
// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// Example 4: Same as above, no year, but add a hover on each show and see the name of the second episode
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) { // creates a new div; appends that div to the container
//     let newItem = document.createElement("div");
//     let showDiv = container.appendChild(newItem);


//     // adds a class to each new div
//     newItem.classList.add("show");
//     // places the show name to the div
//     showDiv.innerHTML = show.name;

//     // create a function that will replace the HTML of the show div with the episode title
//     function displayEpTitle() {
//         showDiv.innerHTML = show.epTwoTitle;
//     }
//     // here Im adding back the show name.
//     function revertShow() {
//         showDiv.innerHTML = show.name;
//     }

//     // add an eventlistener for both the mouseover and mouseleave events
//     showDiv.addEventListener("mouseover", displayEpTitle);
//     showDiv.addEventListener("mouseleave", revertShow);

// }
// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// Example 5 Add a button to sort the shows by year, will need more polishing...

let container = document.querySelector(".teen-show-container");
function displayTDramas(show) { // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let showDiv = container.appendChild(newItem);


    // adds a class to each new div
    newItem.classList.add("show");
    // places the show name to the div
    showDiv.innerHTML = show.name;


    // Same process as above to add the show year, needs to go here so that it doesnt get overridden
    let newYearItem = document.createElement("div");
    let yearDiv = showDiv.appendChild(newYearItem);

    // create a function that will replace the HTML of the show div with the episode title
    function displayEpTitle() {
        showDiv.innerHTML = show.year;
    }
    // here Im adding back the show name. I could add the year back, too, but I chose not to
    function revertShow() {
        showDiv.innerHTML = show.name;
    }

    // add an eventlistener for both the mouseover and mouseleave events
    showDiv.addEventListener("mouseover", displayEpTitle);
    showDiv.addEventListener("mouseleave", revertShow);

}
// loops through the teen dramas and runs the displayTDramas function for each one
teenDramas.forEach(displayTDramas);

// New edits: Add an event listener to the button
let button = document.querySelector(".year-button");

function sortDramas() {
    teenDramas.sort(function (a, b) {
        console.log(a, b);
        return a.year - b.year;
    });

    console.log(teenDramas);
    // re-insert teenDramas in new order
    container.innerHTML = '';
    teenDramas.forEach(displayTDramas);
}

button.addEventListener("click", sortDramas);


// Example 6, same as above but toggle button on and off
// let container = document.querySelector(".teen-show-container");

// function displayTDramas(show) {
// // creates a new div; appends that div to the container
// let newItem = document.createElement("div");
// let showDiv = container.appendChild(newItem);


// // adds a class to each new div
// newItem.classList.add("show");
// // places the show name to the div
// showDiv.innerHTML = show.name;


// // Same process as above to add the show year, needs to go here so that it doesnt get overridden
// let newYearItem = document.createElement("div");
// let yearDiv = showDiv.appendChild(newYearItem);

// // create a function that will replace the HTML of the show div with the episode title
// function displayEpTitle() {
//     showDiv.innerHTML = show.year;
// }
// // here Im adding back the show name. I could add the year back, too, but I chose not to
// function revertShow() {
//     showDiv.innerHTML = show.name;
// }

// // add an eventlistener for both the mouseover and mouseleave events
// showDiv.addEventListener("mouseover", displayEpTitle);
// showDiv.addEventListener("mouseleave", revertShow);
// }

// // loops through the teen dramas and runs the displayTDramas function for each one
// teenDramas.forEach(displayTDramas);

// // New edits: Add an event listener to the button
// let button = document.querySelector(".year-button");

// function sortDramas() {
// // store a reference to original teenDramas before sorting it.
// // The JSON.parse code copies the original object into its own entity.
// // Otherwise, the sort() function below would modify the original object.
// // See this stack overflow question for more: https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
// let sortedDramas = JSON.parse(JSON.stringify(teenDramas))

// // create an if statement that checks if the button has the clicked class so that it returns the original state
// if (button.classList.contains("sorted")) {
//     // the sortedDramas variable is already in the original order, nothing todo
//     console.log('sorted');
//     button.classList.remove("sorted");
//     button.innerHTML=("Click to Sort");
// } else {
//     console.log('not sorted');
//     button.classList.add("sorted");
//     // otherwise, the dramas need to be sorted
//     sortedDramas.sort(function(a, b) {
//       return a.year - b.year;
//     });
//     button.innerHTML=("Sorted by year!");
// }

// console.log(container);

// console.log(sortedDramas);
// // re-insert teenDramas in new order
// container.innerHTML = '';
// sortedDramas.forEach(displayTDramas);
// }

// button.addEventListener("click", sortDramas);
