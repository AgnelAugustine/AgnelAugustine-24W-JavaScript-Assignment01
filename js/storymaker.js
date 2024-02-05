// Variables for pre-defined arrays
let nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectives = ["a funny", "a scary", "a goofy", "a stinky", "a barking", "a fat"];
let nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; 



// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to get array element and displaying it
function noun1_on_click() {
    document.getElementById('choosenNoun1').textContent = getRandomElement(nouns1);
}

function verb_on_click() {
    document.getElementById('choosenVerb').textContent = getRandomElement(verbs);
}

function adjective_on_click() {
    document.getElementById('choosenAdjective').textContent = getRandomElement(adjectives);
}

function noun2_on_click() {
    document.getElementById('choosenNoun2').textContent = getRandomElement(nouns2);
}

function setting_on_click() {
    document.getElementById('choosenSetting').textContent = getRandomElement(settings);
}

// Concatenate the user story and display
function playback_on_click() {
    document.getElementById('story').textContent = document.getElementById('choosenNoun1').textContent + " " +
        document.getElementById('choosenVerb').textContent + " " +
        document.getElementById('choosenAdjective').textContent + " " +
        document.getElementById('choosenNoun2').textContent + " " +
        document.getElementById('choosenSetting').textContent;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    document.getElementById('choosenNoun1').textContent = "";
    document.getElementById('choosenVerb').textContent = "";
    document.getElementById('choosenAdjective').textContent = "";
    document.getElementById('choosenNoun2').textContent = "";
    document.getElementById('choosenSetting').textContent = "";
    document.getElementById('story').textContent = getRandomElement(nouns1) + " " +
        getRandomElement(verbs) + " " +
        getRandomElement(adjectives) + " " +
        getRandomElement(nouns2) + " " +
        getRandomElement(settings);
}

// Event Listeners
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);
