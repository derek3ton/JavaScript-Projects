function age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


// Keywords and Constructors

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White/Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age, sex) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.sex = sex;
}
var subject = new Person("James", "Smith", 43, "Male");
function myFunction() {
document.getElementById("New_and_This").innerHTML = 
"The subjects information is: " + subject.firstname + subject.lastname; 
}

// Nested Functions
function myFunction1() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
        
    }
}

