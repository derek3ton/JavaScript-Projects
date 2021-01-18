// Global variable example
var Z = 100;  // Variable defined outside of function
function  myFunction() {  // Naming and creating function
        document.write(17 + Z + "<br>");
}   
function myFunction1() {
    document.write(Z + 16);
} 
document.write("Global Variable:")  // Creating heading
document.write("<br>")  // Breaks to new line
myFunction();
myFunction1();

document.write("<br>")  // Breaks to new line
document.write("<br>")

// Local Variable example
document.write("Local Variable")  // Creating a heading
document.write("<br>")
function myFunction2() {  // Naming and creating function 
    var Z = 100;  // Naming variable inside of function (local)
    document.write(100 + Z + "<br>");
}
function myFunction3() {  // Naming and creating function
    document.write(Z + 150); 
}
myFunction2();
myFunction3();

document.write("<br>")
document.write("<br>")

// Console Log debug example
document.write("Console Log Debug");  // Creating a heading
document.write("<br>")
var Z = 15;
function myFunction4() { 
    console.log(z + 15);
}
function myFunction5() {
    document.write(z + 20);
    console.log(z + 20);
}
myFunction4();
myFunction5();

document.write("<br>")  // Breaks to new line
document.write("<br>")

// Else If Statements
function my_Function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply = "Good Morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Good Afternoon!";
    }
    else {
        Reply = "Good Evening!";    
    }
    document.getElementById("Time").innerHTML = Reply;
}