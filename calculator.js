
function add(num1, num2){
    let result = Number(num1) + Number(num2);
    return result;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1/num2
}

function multiply(num1, num2){
    return num1 * num2
}


let value1 = prompt("Please enter the first Number");
let operations = prompt(value1 + "\n\n" +"Please enter operation to perform [ +, -, *, / ]")
let value2 = prompt( value1 + " " + operations + "\n\n" + "Please Enter the second number")


switch (operations){
    case "+":
        alert(value1 + ' + ' + value2 + ' = ' + add(value1, value2));
        break;
    case "-":
        alert(value1 + ' - ' + value2 + ' = ' + subtract(value1, value2));
        break;
    case "/":
        alert(value1 + ' / ' + value2 + ' = ' + divide(value1, value2));
        break;
    case "*":
        alert(value1 + ' * ' + value2 + ' = ' + multiply(value1, value2));
        break;
    default:
        alert("Unsupported operator [ " + operations + " ] supplied. Please use  ' + ',  ' - ',  ' * '  or  ' / ' operators")

}