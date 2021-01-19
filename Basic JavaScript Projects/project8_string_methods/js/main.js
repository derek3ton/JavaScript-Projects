// Concat method example

function my_Function() {
    var sent_1 = "This sentence ";
    var sent_2 = "is an example ";
    var sent_3="of how to use ";
    var sent_4="the concat method.";
    var outcome = sent_1.concat(sent_2, sent_3, sent_4);
    document.getElementById("Concat").innerHTML = outcome;
}

// Slice Method example

function my_Function1() {
    var Sentence = "This is an example of the slice method."
    var Part = Sentence.slice(5, 19);
    document.getElementById("Slice").innerHTML = Part;
}


// toUpperCase method example

function my_upper() {
    var str = "This is an example of the toUpperCase() method.";
    var ret = str.toUpperCase();
    document.getElementById("Upper").innerHTML = ret;
}


// Search method
 
function my_Search() {
    var str = "This is an example of a search() method."
    var ret = str.search("search");
    document.getElementById("Search").innerHTML = ret;
}

// toString method example

function my_String() {
    var Z = 432312;
    document.getElementById("String").innerHTML = Z;
}

// toPrecision method example

function my_Precision() {
    var Z=2345.343543526;
    document.getElementById("Precision").innerHTML = Z.toPrecision(7);
}

// toFixed method example

function my_Fixed() {
    var num=2.15678864; 
    var n=num.tofixed(1);
    document.getElementById("Fixed").innerHTML = n;
}


// Valueof example

function my_Value() {
    var str="This is an example of the valueof() method.";
    var res=str.valueOf();
    document.getElementById("Value").innerHTML = res;
}