// Form validation
function validate_Function() {
    var x=document.forms["myForm"]["fname"].value;
    if(x=="") {
        alert("Name is required to submit.");
        return false;
    }
}