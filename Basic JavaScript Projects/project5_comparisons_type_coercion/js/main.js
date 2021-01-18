// document.write and "typeof" operator example
document.write("Example of typeof operator:");
document.write("<br>")
document.write(typeof "Example"); 

document.write("<br>")
document.write("<br>")

// Combining a string and number 
document.write("Example of combining a string and number:");
document.write("<br>")
document.write("34"+17);

document.write("<br>")
document.write("<br>");  // Breaks to a new line

// Examples of "true and false" using ==
document.write("Example of using ==:");
document.write("<br>")
document.write(10==10);
document.write("<br>");
document.write(10==11);

document.write("<br>");  // Breaks to a new line
document.write("<br>");

// Examples of "true and false" using ===
document.write("Example of using ===:");
document.write("<br>")
//Example of true
x = 10;
y = 10;
document.write(x===y);
document.write("<br>")
// Example of false
x = 10;
y = "10";
document.write(x===y);
document.write("<br>") // Breaks to a new line
document.write("<br>")

// Boolean logic Operators
// Example of using &&
document.write("Example of using &&:")
document.write("<br>")
document.write(5>3 && 10>5);

document.write("<br>") // Breaks to a new line
document.write("<br>")

// Example of using ||
document.write("Example of using ||:");
document.write("<br>")
document.write(3<4 || 7>6);

document.write("<br>") // Breaks to a new line
document.write("<br>")

//Example of using !
document.write("Example of !:");

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}


