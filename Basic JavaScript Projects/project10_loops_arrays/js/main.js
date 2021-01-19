// While loop
function Call_Loop() {
    var text="";
    var i=0;
    while(i<10) {
        text += "<br>" + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

// String.length
function String() {
    var str = "This is an example of the string length property. "
    var n = str.length;
    document.getElementById("String").innerHTML = n;
}

// For Loop example
var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_loop() {
    for (Y=0; Y<Instruments.length; Y++) {
    Content+=Instruments [Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

// Array example
function array_function() {
    var tree=[];
    tree[0]="Fir";
    tree[1]="Pine";
    tree[2]="Cypress";
    tree[3]="Red Wood";
    document.getElementById("Array").innerHTML= "This type of tree is a "+tree[2]+".";  
}

// Constant example
function constant_function() {
    const Dog={breed:"German Shepherd", sex:"Male", color:"Black/Tan"};
    Dog.color="brown";
    Dog.sex="female";
    document.getElementById("Constant").innerHTML="This dog is a " + Dog.sex + ", " + Dog.color + ", " + Dog.breed + ".";
}

// Let example
function let_function() {
    var Z = "brown";
    document.write(Z);
    {
        let Z = "red";
        document.write("<br>"+Z);
    }
    document.write("<br>"+Z);
}

// Return statement example
function return_function(name) {
    return "My name is " + name;
}
document.getElementById("Return").innerHTML=return_function("Derek")+".";

// Creating an object using "Let"
let dog={
    breed: "Akita",
    sex: "Female",
    color: "White",
    description: function() {
        return "The dog is a "+ this.breed + ", " + this.sex + ", " + this.color;    
        }
    };
document.getElementById("Object").innerHTML=dog.description();