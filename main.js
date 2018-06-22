const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(item => {
    let createPlanet = document.createElement("p");
    createPlanet.textContent = item;
    planetEl.appendChild(createPlanet);
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const uppercasePlanets = planets.map(function(letters){
    let uppercase = letters.toUpperCase();
    return uppercase;
})
console.log(uppercasePlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const noEs = planets.filter(function(item){
    let containE = item.includes("e");
    if (containE === true){
        return containE;
    }
})
console.log(noEs);
// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
const fullSentence = words.reduce(function(firstWord, nextWord){
    return `${firstWord} ` + nextWord;
})
console.log(fullSentence);
