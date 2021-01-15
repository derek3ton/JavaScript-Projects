
// Addition example
function add() {  // Naming function
    var z=17+7;  // Setting variable
    document.getElementById("Math1").innerHTML=" 17+7= " + z; // This executes the function
}


// Subtraction example
function subtract() {  // Naming function
    var z=12-2; // Setting variable
    document.getElementById("Math2").innerHTML=" 12-2= " + z; // This executes the function
}

// Multplication example
function multiply() {  // Naming function
    var z=12*12; // Setting variable
    document.getElementById("Math3").innerHTML=" 12*12=" + z; // This executes the function
}

// division example
function divide() {  // Naming function
    var z=12/6; // Setting variable
    document.getElementById("Math4").innerHTML=" 12/6=" + z;// This executes the function
}

// Multiple variable example
function multiple() {   // Naming function
    var z=(9+9) * 10 / 2 - 3; // Setting variable
    document.getElementById("Math5").innerHTML="9+9*10/2-3= " + z; // This executes the function
}

// Modulus example
function modulus() {  // Naming function
    var z=57 % 7; // Setting variable
    document.getElementById("Math6").innerHTML="57 / 7 has a remainder of \ " + z; // This executes the function
}

// Negation example
function negation() {  // Naming function
    var z=100; // Setting variable
    document.getElementById("Math7").innerHTML=-z; // This executes the function
}

// Increment examplwe
function increment() {  // Naming function
    var z=10;  // Setting variable
    z++; 
    document.write(z); // This executes the function
}

// Decrement examplwe
function decrement() {  // Naming function
    var z=10; // Setting variable
    z--; 
    document.write(z); // This executes the function

}

// Random number example
function random() { // Naming function
    var z = document.getElementById("Math10"); // Setting variable
    z.innerHTML = Math.floor((Math.random() * 100) + 1);
  }

  // Math Object examle
  function sqrt() { // Naming function
  document.getElementById("Math11").innerHTML = Math.sqrt(81);
}