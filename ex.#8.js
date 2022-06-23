let res = 0;
const operator = parseInt(prompt("Select an option from these: sum: 1, substract: 2, multiplication: 3, Division: 4")); 

while (isNaN(number1)){
    var num1 = parseInt(prompt("Write the first value "));
}

while(isNaN(number2)){
    var number2 = parseInt(prompt("Insert another value "));
}


switch(operator){
    case 1:
    res = number1 + number2;
    console.log(`${number1} + ${number2} = ${res}`);
    document.write("Check the console");
    break;

    case 2:
    res = number1 - number2;
    document.write(`${number1} - ${number2} = ${res}`);
    break;
    case 3:
        res = number1 * number2;
        alert(`${number1} - ${number2} = ${res}`);
    break;
    case 4:
        res = number1 / number2;
        document.write(`${number1} / ${number2} = ${res}`);
    break;

}