//Creates an object to keep track of values
const Calculator={   
    Display_Value: "0",  //This dispalys 0 on the screen
    First_Operand: null,  // This will hold the first operand for any expressions, we set it to null for now
    Wait_Second_Operand: false,  // This checks whether or not the second operand has been input
    operator: null,  // This will hold the operator, we set it to null for now
};

// This function modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand}=Calculator;
    if (Wait_Second_Operand===true) {  // We are checking to see if Wait_Second_Operand is true and set Display_Value to the key that was clicked
        Calculator.Display_Value=digit;
        Calculator.Wait_Second_Operand=false;       
    }   else {  
        Calculator.Display_Value=Display_Value==="0" ? digit : Display_Value + digit;  // This overwrites Display_value if the current value is 0, otherwise it adds onto it
    }
}

//This funtion hadles decimal points
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand===true) return;  // This ensures an accidental decimal point don't cause bugs in your operation
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value+=dot;  // This says that if the Display_Value does not contain a decimal point, we want to add one
    }
}

//This handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator}=Calculator
    const Value_of_Input=parseFloat(Display_Value);  //When an operator key is pressed, we convert the current number displayed on the screen to a number and then stored the result in Calculator.First_Operand if it don't already exist
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator=Next_Operator;
        return;
    }
    if(First_Operand==null) {
        Calculator.First_Operand=Value_of_Input;
    }   else if(operator) {  //Checks if an operator already exists
            const Value_Now = First_Operand || 0;
            let result=Perform_Calculation[operator](Value_Now, Value_of_Input);  //If operator exists, property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed
            result=Number(result).toFixed(9)  //Add  fixed amount of numbers after the decimal                                    
            result=(result*1).toString()      // Removes any trailing 0's                                
            Calculator.Display_Value=parseFloat(result);
            Calculator.First_Operand=parseFloat(result);
    }
    Calculator.Wait_Second_Operand=true;
    Calculator.operator=Next_Operator;
}

const Perform_Calculation={
    "/": (First_Operand, Second_Operand)=>First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand)=>First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand)=>First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand)=>First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand)=>Second_Operand,
};

function Calculator_Reset(){
    Calculator.Display_Value="0";
    Calculator.First_Operand=null;
    Calculator.Wait_Second_Operand=false;
    Calculator.operator=null;
}

//Updates screen with the contents of Display_Value
function Update_Display() {
    const display=document.querySelector(".calculator-screen");
    display.value=Calculator.Display_Value;
}

Update_Display();
//This monitors button clicks
const keys=document.querySelector(".calculator-keys");
keys.addEventListener("click", (event)=> {
    const {target}=event;
    if (!target.matches("button")) {
        return;
    }
    if(target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})