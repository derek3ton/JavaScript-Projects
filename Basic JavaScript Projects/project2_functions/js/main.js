var shoe={brand:"Nike", type:"running"} // Assign variables

function myFunction1() {  // Setting function and name
    document.getElementById("demo").innerHTML="The shoe is \ " + shoe.brand; // Executes function   
}

function myFunction2() {  // Setting function and name
    var sentence="This is the way I live";  // Assigning string to variable
    sentence +="\ and it's the way I like it.";  // Concatenating string
    document.getElementById("color").innerHTML = sentence;  // Executing function
}

function myFunction3() {  // Setting function and name
    var sentence="This is an example of";  // assining string to variable
    sentence +="\ concatenating a string."  // Concatenating strings
    document.getElementById("example").innerHTML=sentence;  // Executing function
}

