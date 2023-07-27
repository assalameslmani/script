// function to sum two numbers
function sum(num1, num2){
    sum= num1+num2;
    console.log(sum);
    return sum;
}


// function to subtract two numbers
function subtract(num1, num2){
  subtract= num1 - num2;
  console.log(subtract);
  return subtract;
}

// function to multiply two numbers
function multiply(num1, num2){
    multiply= num1 *num2;
    console.log(multiply);
    return multiply;
}

//function to divide two numbers
function divide(num1, num2){
    if(num2===0){
        return "error";
    }else {
        divide= num1 / num2;
        console.log(divide);
        return divide;
    }
}


function myCalculator(operation, num1, num2){
    let results;
    switch (operation){
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "invalid operation";
    }
    return result;
}
console.log(myCalculator);