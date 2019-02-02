
 let gameInstance = {
    yourGuess : 0,
    goalScore: 0,
    wins : 0,
    losses : 0,
    guess1 : 0,
    guess2 : 0,
    guess3 : 0,
    guess4 : 0,
    
    //we grab the text boxes as variables
    startButton: $("#start"),
    crystal1 : $("#input1"),
    crystal2 : $("#input2"),
    crystal3 : $("#input3"),
    crystal4 : $("#input4"),
    guessOutput : $("#guessOutput"),
    targetOutput: $("#goalScore"),
    winsAndLosses: $("#winsLosses"),
    //test function, console logs faster
    test : function(x){
        console.log(x);
    },
    //test function for divs
    testDiv: function(div, x){
        div.html("<h1> test </h1>");
    },
    
    findRandom : function(min, max){
     random = (Math.floor((Math.random()*((max+1) - min)) + min));
        return random;
    },

    //start button instances a new game
     start : function(){
        this.goalScore = 0
        //target is between 19 and 120
         this.goalScore = this.findRandom(19, 120);
         this.targetOutput.html("<h1>goal score: " + this.goalScore + "</h1>"); 
        //guesses are set between 1 and 12 
         this.guess1 = this.findRandom(1, 12);
         this,guess2 = this.findRandom(1, 12);
         this.guess3 = this.findRandom(1, 12);
         this.guess4 = this.findRandom(1, 12);
    },

    //onclicks connect to this 
        addCrystal1 : function(){
        this.yourGuess += this.guess1;
        this.guessOutput.html("<h5>your guess: " + this.yourGuess + "</h5>");
        if(this.yourGuess ===this.target){
            this.wins ++;
            this.winsAndLosses.html(
                "<h3> wins: </h3>" +
                this.wins +
                "<h3> losses: </h3>" +
                this.losses
            );
        }
    },
    addCrystal2 : function(){
        this.testDiv(this.crystal2, "test");
        this.yourGuess += this.guess2;
        this.guessOutput.html("<h5>your guess: " + this.yourGuess + "</h5>");
        if(this.yourGuess ===this.target){
            this.wins ++;
            this.winsAndLosses.html(
                "<h3> wins: </h3>" +
                this.wins +
                "<h3> losses: </h3>" +
                this.losses
            );
        };
    },
    addCrystal3 : function(){
        this.testDiv(this.crystal3, "test");
        this.yourGuess += this.guess3;
        this.guessOutput.html("<h5>your guess: " + this.yourGuess + "</h5>");
        if(this.yourGuess ===this.target){
            this.wins ++;
            this.winsAndLosses.html(
                "<h3> wins: </h3>" +
                this.wins +
                "<h3> losses: </h3>" +
                this.losses
            );
        }
        if(this.yourGuess >= this.target){
            this.losses++;
            this.winsAndLosses.html(
                "<h3> wins: </h3>" +
                this.wins +
                "<h3> losses: </h3>" +
                this.losses
        }
    },
    addCrystal4 : function(){
        this.testDiv(this.crystal4, "test");
        this.yourGuess += this.guess4;
        this.guessOutput.html("<h5>your guess: " + this.yourGuess + "</h5>");
        if(this.yourGuess ===this.target){
            this.wins ++;
            this.winsAndLosses.html(
                "<h3> wins: </h3>" +
                this.wins +
                "<h3> losses: </h3>" +
                this.losses
            )
            else if(this.yourGuess >= this.target){
                this.losses++;
                this.winsAndLosses.html(
                    "<h3> wins: </h3>" +
                    this.wins +
                    "<h3> losses: </h3>" +
                    this.losses
            }
        }
    },
 };

gameInstance.crystal1.on("click", function() {
    gameInstance.addCrystal1(); 
});
gameInstance.crystal2.on("click", function() {
    gameInstance.addCrystal2(); 
});
gameInstance.crystal3.on("click", function() {
    gameInstance.addCrystal3(); 
});
gameInstance.crystal4.on("click", function() {
    gameInstance.addCrystal4(); 
});
gameInstance.startButton.on("click", function() {
    gameInstance.start(); 
})
;