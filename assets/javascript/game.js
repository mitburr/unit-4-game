let yourGuess = 0;
let wins = 0;
let losses = 0;
//we assign each guess to its corresponding div
let crystal1 = $("#input1");
let crystal2 = $("#input2");
let crystal3 = $("#input3");
let crystal4 = $("#input4");
//we grab the text boxes as variables
let guessOutput = $("#guessOutput");
let findRandom = function(min, max){
let random = (Math.floor((Math.random()*((max+1) - min)) + min));
    return random;
}
let test = function(x){
    console.log(x);
}
let start = function(){
    yourGuess = 0;
    //target is between 19 and 120
    let target = findRandom(19, 120);
    //guesses are set between 1 and 12 
    let guess1 = findRandom(1, 12);
    let guess2 = findRandom(1, 12);
    let guess3 = findRandom(1, 12);
    let guess4 = findRandom(1, 12);
    //next we attach click functions to the crystals
    crystal1.on("click", function(event){
        test("crystals working" + guess1 + "guess1 declared");
        yourGuess += guess1;
        guessOutput.html("<h5>your guess: " + yourGuess + "</h5>");
    });
    crystal2.on("click", function(){
        yourGuess += guess2;
        guessOutput.html("<h5>your guess: " + yourGuess + "</h5>");
    });
    crystal3.on("click", function(){
        yourGuess += guess3;
        guessOutput.html("<h5>your guess: " + yourGuess + "</h5>");
    });
    crystal4.on("click", function(){
        yourGuess += guess4;
        guessOutput.html("<h5>your guess: " + yourGuess + "</h5>");
    });

}
