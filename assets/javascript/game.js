let yourGuess = 0;
let wins = 0;
let losses = 0;
//we assign each guess to its corresponding div
let crystal1 = $("#input1");
let crystal2 = $("#input2");
let crystal3 = $("#input3");
let crystal4 = $("#input4");
crystal1.text("test");
let findRandom = function(min, max){
    let random = (Math.floor((Math.random()*((max+1) - min)) + min));
    return random;
}
let test = function(x){
    console.log(x);
}
let start = function(){
    yourGuess = 0;
    //guesses will each be a random value between 1 and 1/4 of the target
    let target = findRandom(19, 120);
    //so we find the target first
    let guess1 = findRandom(1, 12);
    let guess2 = findRandom(1, 12);
    let guess3 = findRandom(1, 12);
    let guess4 = findRandom(1, 12);
    
}
