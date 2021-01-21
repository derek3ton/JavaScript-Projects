// This variable keeps track of whose turn it is
let activePlayer="X";
let selectedSquares=[]; // This array stored an array of moves.  Use to determine win conditions

function placeXorO(squareNumber){ // This places an x or an o in a square
    // Thhis condition ensures a square hasn't been selected.  
    // The .some method is used to check each element of selectedSquare array
    // To see if it contains the square number clicked on.
    if(!selectedSquares.some(element=>element.includes(squareNumber))) { 
        let select=document.getElementById(squareNumber);  // This variable retrieves the html element that was clicked.
        if(activePlayer==="X") {  // This condition checks whose turn it is
            select.style.backgroundImage="url('images/X2.png')";  // If activePlayer is equal to "X", the x.png is placed in HTML
        } else {
            select.style.backgroundImage="url('images/O2.png')";  // If activePlayer is equal to "O", the O.png is placed in HTML
        }
        selectedSquares.push(squareNumber + activePlayer);  // squareNumber and activePlayer are concantenated together and added to array
        checkWinConditions();  // Calls a funtion to check for any win conditions
        if(activePlayer==='X') {  // This condition is for changing the active player
            activePlayer='O';  // If activePlayer is "X", change to "O"
        } else {   // If activePlayer is anything other than "X"
            activePlayer="X";  //Change activePlayer to "X"
        }
        audio("./media/splat.mp3")  // This plays placement sound
        if(activePlayer==='O') { //This condition checks to see if it is computers turn
            disableClick(); // This function disables clicking for computer choice
            setTimeout(function() {computersTurn();},1000); // This function waits 1 sec before placing image and enables click
        }
        return true; // Returning true is needed for our computersTurn() function to work
    }

    function computersTurn() {  // Results in random square selected
        let success=false;  // boolean need for our while loop
        let pickASquare; //Variable stores a random number 0-8
        while(!success) {  //Condition allows while loop to keep trying if a square is selected already
            pickASquare=String(Math.floor(Math.random() * 9));  // a random number 0-8 is selected
            if (placeXorO(pickASquare)) { // If random number evaluates returns true, the square hasn't been selected yet. 
                placeXorO(pickASquare);  // Calls function
                success=true;  // changes boolean and ends loop
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.  
// drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    if      (arrayIncludes("0X", "1X", "2X")) {drawWinLine(50,100,558,100);}  // Defines every possible win scenario
    else if (arrayIncludes("3X", "4X", "5X")) {drawWinLine(50,304,558,304);}
    else if (arrayIncludes("6X", "7X", "8X")) {drawWinLine(50,508,558,508);}
    else if (arrayIncludes("0X", "3X", "6X")) {drawWinLine(100,50,100,558);}
    else if (arrayIncludes("1X", "4X", "7X")) {drawWinLine(304,50,304,558);}
    else if (arrayIncludes("2X", "5X", "8X")) {drawWinLine(508,50,508,558);}
    else if (arrayIncludes("6X", "4X", "2X")) {drawWinLine(100,508,510,90);}
    else if (arrayIncludes("0X", "4X", "8X")) {drawWinLine(100,100,520,520);}
    else if (arrayIncludes("0O", "1O", "2O")) {drawWinLine(50,100,558,100);}
    else if (arrayIncludes("3O", "4O", "5O")) {drawWinLine(50,304,558,304);}
    else if (arrayIncludes("6O", "7O", "8O")) {drawWinLine(50,508,558,508);}
    else if (arrayIncludes("0O", "3O", "6O")) {drawWinLine(100,50,100,558);}
    else if (arrayIncludes("1O", "4O", "7O")) {drawWinLine(304,50,304,558);}
    else if (arrayIncludes("2O", "5O", "8O")) {drawWinLine(508,50,508,558);}
    else if (arrayIncludes("6O", "4O", "2O")) {drawWinLine(100,508,510,90);}
    else if (arrayIncludes("0O", "4O", "8O")) {drawWinLine(100,100,520,520);} // End of win scenario's
    else if (selectedSquares.length >= 9) {  // this checks for a tie.  If none of the above conditions register and all 9 squares are selected, code executes
        audio("./media/laugh.mp3");  // Plays tie game sound
        setTimeout(function() {resetGame();},1000);  //Sets a .3s timer before resetGame is called
    }
    //This function checks if an array includes 3 strings
    //It is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        const a=selectedSquares.includes(squareA); //next 3 var will be used to check for 3 in a row
        const b=selectedSquares.includes(squareB);
        const c=selectedSquares.includes(squareC);
        if (a===true && b===true && c===true) {return true;} // if the 3 var's we pass are all included in our array true is returned and our else if condition executes drawline function
    }
}

//This function makes the body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents="none"; // makes body element unclickable
    setTimeout(function() {body.style.pointerEvents="auto";}, 1000); // makes body clickable again after 1s.
}

// this function takes a string parameter of the path you set earlier for placement sound './media/place.mp3'
function audio(audioURL) {
    let audio=new Audio(audioURL);
    audio.play();
}

// This function uses canvas to draw win line
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas=document.getElementById("win-lines");  //This line accesses our html canvas
    const c=canvas.getContext("2d");  //This gives access to methods and properties to use on canvas
    let x1=coordX1, // This line indicates where the start of a lines x axis is 
        y1=coordY1, // Indicates where the start of the y axis is
        x2=coordX2, // Indicates where x axis ends
        y2=coordY2, // Indicates where y axis ends
        x=x1, //Variable stores temporary x axis data we update in animation loop
        y=y1; //Variable stores temporary y axis data we update in our animation loop

   //this function interacts with canvas
    function animateLineDrawing() {
        const animationLoop=requestAnimationFrame(animateLineDrawing); // Creates loop when game ends, it restarts
        c.clearRect(0,0,608,608);  // Clears content from last loop
        c.beginPath(); //Starts a new path
        c.moveTo(x1,y1);  // Moves to starting point of line
        c.lineTo(x,y);  // Defines end point of line
        c.lineWidth=10;  //Sets width of line
        c.strokeStyle="rgba(70,255,33,0.8)";  //sets the color of line
        c.stroke();  // Draws everything we laid out above
        if (x1<=x2 && y1<=y2) {  // checks if we have reached endpoint
            if(x<x2) {x+=10;}  //Adds 10 to previous end x point
            if(y<y2) {y+=10;}  //Adds 10 to previous end y point
            if(x>=x2 && y>=y2) {cancelAnimationFrame(animationLoop);} // cancels animation loop
        }
        //This condition is similar to the one above
        //It was necessary for the 6, 4, 2 win condition
        if (x1<=x2 && y1>=y2) {
            if(x<x2) {x+=10;}
            if(y>y2) {y-=10;}
            if(x>=x2 && y<=y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    //This clears canvas after win line is drawn
    function clear() {
        const animationLoop=requestAnimationFrame(clear);  //Starts animation loop
        c.clearRect(0,0,608,608); //Clears canvas
        cancelAnimationFrame(animationLoop); //Cancels animation loop
    }
    //This disallows clicking while the win sound is playing
    disableClick();
    audio("./media/cheer.mp3");  //Plays win sound
    animateLineDrawing();  //Calls main animation loop
    setTimeout(function() {clear(); resetGame();}, 1000);
}

//This function resets game duringa tie or win
function resetGame() {
    for(let i=0; i < 9; i++) {  //This for loop iterates through each HTML square element
        let square=document.getElementById(String(i));  //This variable gets the html element if i
        square.style.backgroundImage="";
    }
    //This resets our array so it is empty and we can start over
    selectedSquares=[];
}