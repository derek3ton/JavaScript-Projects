function myFunction() { // Names function
    var Car={  // Creates KVP for dictionary
        Make: "Ford",
        Model: "F-150",
        Color: "Black",
        Trim: "King Ranch",
        Engine: "V8",
    };
    document.getElementById("dictionary").innerHTML=Car.Color; // Executes function
    
}

function myFunction1() { // Names Function
    var Car={  // Creates KVP 
        Make: "Ford",
        Model: "F-150",
        Color: "Black",
        Trim: "King Ranch",
        Engine: "V8",
    };
    delete Car.Color; // Deletes result before displayed
    document.getElementById("dictionary").innerHTML=Car.Color; // Executes function
}