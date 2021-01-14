var shoe={brand:"Nike", type:"running"} // Assign variables

function myFunction1() {  // Function calling variable
    document.getElementById("demo").innerHTML="The shoe is \ " + shoe.brand;    
}

function myFunction2() {
    var sentence="This is the way I live";
    sentence +="\ and it's the way I like it.";
    document.getElementById("color").innerHTML = sentence;
   
  
}


function myFunction3() {
    var sentence="This is an example of";
    sentence +="\ concatenating a string."
    document.getElementById("example").innerHTML=sentence;  
}

