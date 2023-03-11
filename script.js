let singleButton = document.getElementById('btn-single');
let multiButton = document.getElementById("btn-two");
let outputDiv = document.querySelector(".container-output");
let BaseServerURL = 'https://sv443.net/jokeapi/v2/joke/Any?type=single&format=json';

function SingleLineJokeURL() {
    return BaseServerURL;
}

function MultiLineJokeURL() {
    return 'https://sv443.net/jokeapi/v2/joke/Any?type=twopart&format=json';
}

// this function will do the work for getting single part joke
const single = function() {
    let url = SingleLineJokeURL();
    fetch(url).
    then(response => response.json()).
    then(json => {
        outputDiv.innerText = json.joke;
    })
}

// this function will do the work for getting double part joke
const twoPart = function() {
    let url = MultiLineJokeURL();
    fetch(url).
    then(response => response.json()).
    then(json => {
        outputDiv.innerHTML = `${json.setup} <br> ${json.delivery}`;
    })
}

// adding event listeners for two buttons
singleButton.addEventListener('click', single);
multiButton.addEventListener('click', twoPart);