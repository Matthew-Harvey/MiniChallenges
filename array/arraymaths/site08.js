//driver function used for display and passing values.
function displayNumbers() {

    let numbers = [];

    var input = document.getElementsByName('txtval[]');
    for (var i = 0; i < input.length; i++) {
        numbers.push(parseFloat(input[i].value));
    }
    //implement the four functions to return sum, avg, max and min
    let sum = sumNumbers(numbers);
    let avg = avgNumber(numbers);
    let max = maxNumber(numbers);
    let min = minNumber(numbers);

    //used for display not need to change unless you are doing only the sum function
    let msg = `Sum = ${sum}<br>Avg = ${avg.toFixed(2)}<br>Max = ${max}<br>Min = ${min}`;
    
    //display the message    
    document.getElementById("results").innerHTML = msg;
    document.getElementById("numberslist").innerHTML = numbers.toString();
}

//takes an array of numbers and returns the sum of all the numbers
function sumNumbers(numArry) {
    var total = 0;
    numArry.forEach(element => {
        total = total + element;
    });
    return total;
}
//takes an array of numbers and returns the average of all the numbers
function avgNumber(numArry) {
    var total = 0;
    numArry.forEach(element => {
        total = total + element;
    });
    return total / numArry.length;
}

//takes an array of numbers and returns the max number
function maxNumber(numArry) {
    var highest = numArry[0];
    numArry.forEach(element => {
        if (highest < element) {
            highest = element;
        }
    });
    return highest;
}

//takes an array of numbers and returns the min number
function minNumber(numArry) {
    var lowest = numArry[0];
    numArry.forEach(element => {
        if (lowest > element) {
            lowest = element;
        }
    });
    return lowest;
}