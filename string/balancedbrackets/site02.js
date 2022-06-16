//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = document.getElementById("bracketinput").value;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

function isBalanced(brackets) {
    var stack = [];
    let openbrackets = ["{", "[", "("];
    let closebrackets = ["}", "]", ")"];
    const balancedbrackets = {"(":")", "{":"}", "[":"]"}
    for (var index = 0; index < brackets.length; index++) {
        if (openbrackets.includes(brackets[index])) {
            stack.push(brackets[index]);
            continue;
        }
        else if (closebrackets.includes(brackets[index])) {
            if (stack.length == 0) {
                return false;
            }
            let res = stack.pop();
            if (balancedbrackets[res] != brackets[index]) {
                return false
            }
        }
    }
    return stack.length == 0;
}