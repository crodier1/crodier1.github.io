var wins = 0,
    gussesLeft = 6,
    bands = ["SLIPKNOT", "TOOL", "MISFITS", "PANTERA", "KORN", "METALLICA"],
    wrongGuesses = '',
    randomI = Math.floor(Math.random() * bands.length),
    randomBand = bands[randomI],
    wordToGuess = "_".repeat(randomBand.length).split(''),
    rightGuesses = 0,
    bandImages = ['assets/images/slipknot.png', 'assets/images/tool.jpg', 'assets/images/misfits.jpg',
        'assets/images/pantera.jpg', 'assets/images/korn.jpg', 'assets/images/metallica.jpg'],
    blurb = ['Slipknot Refers to Their Fan base as Maggots.', 'Tool once wrote a song called Aenema about a title wave destroying their home town of Los Angeles.',
        'The Misfits is often recognized as the progenitors of the horror punk subgenre.', 'Pantera shot a picture of one of their fans being punched in the face for their 2nd album cover.',
        'Korn is from my home town of Bakersfield, CA.', 'Metallica jokingly referred itself as alcholica because of their prolific drinking.'];


window.onload = function () {
    document.getElementById("word").textContent = wordToGuess.join('');
};


window.onkeyup = function (event) {    

    if (gussesLeft > 0) {

        for (var i = 0; i < randomBand.length; i++) {
            if (randomBand[i] === event.key.toUpperCase() && wordToGuess[i] === '_') {
                wordToGuess[i] = randomBand[i];
                document.getElementById("word").textContent = wordToGuess.join('');
                rightGuesses++;
            }
        }


        if (wrongGuesses.indexOf(event.key.toUpperCase()) === -1 && randomBand.indexOf(event.key.toUpperCase()) === -1) {
            wrongGuesses += event.key.toUpperCase();
            document.getElementById("wrongGuesses").textContent = wrongGuesses;
            gussesLeft--;
            document.getElementById("gussesLeft").textContent = gussesLeft;
        }

    }

    if (rightGuesses === randomBand.length) {
        gussesLeft = 6;
        document.getElementById("gussesLeft").textContent = gussesLeft;
        wrongGuesses = '';
        document.getElementById("wrongGuesses").textContent = wrongGuesses;
        rightGuesses = 0;
        wins++;
        document.getElementById("wins").textContent = wins;
        document.getElementById("winDiv").innerHTML = "<img src=" + bandImages[randomI] + "> <p>" + blurb[randomI] + "</p>";
    }


}


function restart() {
    gussesLeft = 6;
    document.getElementById("gussesLeft").textContent = gussesLeft;
    wrongGuesses = '';
    document.getElementById("wrongGuesses").textContent = wrongGuesses;
    randomI = Math.floor(Math.random() * bands.length);
    randomBand = bands[randomI];
    wordToGuess = "_".repeat(randomBand.length).split('');
    document.getElementById("word").textContent = wordToGuess.join('');
    rightGuesses = 0;
}





