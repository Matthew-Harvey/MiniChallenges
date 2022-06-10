//driver function used for display and passing values.
function findHero() {

    //implement the function findLongestString that returns the longest word.
    var input = document.getElementsByName('txtval[]');
    var inputarr = [];
    for (var i = 0; i < input.length; i++) {
        inputarr.push(input[i].value);
    }

    let lword = findLongestString(inputarr);

    //used for display. no need to change
    document.getElementById("results").innerHTML = lword;

    //extra credit display all of the heroes to the page

}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArry) {
    var longestname = "";
    for (var i = 0; i < namesArry.length; i++) {
        var currentname = namesArry[i];
        if (currentname.length > longestname.length) {
            var longestname = currentname;
        }
    }
    return longestname;

}