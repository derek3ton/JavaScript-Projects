function my_Function() {
    var food_output;
    var food = document.getElementById("food").value;
    var food_string = " is a great choice!";
    switch(food){
        case "Pizza":
            food_output="Pizza" + food_string;
        break;
        case "Sushi":
            food_output="Sushi" + food_string;
        break;
        case "Steak":
            food_output="Steak" + food_string;
        break;
        case "Spaghetti":
            food_output="Spaghetti" + food_string;
        break;
        case "Chicken":
            food_output="Chicken" + food_string;
        break;
        case "Rice":
            food_output="Rice" + food_string;
        break;
        case "Hamburgers":
            food_output="Hamburgers" + food_string;
        break;
        default:
        food_output="Please enter choice as written above.";
    }
    document.getElementById("output").innerHTML=food_output;
}

// GetElementsByClassName()
function my_Function1() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!";
}

// Using javaScript with a canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(500, 250);
    ctx.stroke();