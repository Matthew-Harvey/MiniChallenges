//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    var getvowels = getVowelCount(str);
    var vCount = getvowels[0];
    var vFound = getvowels[1];
    
    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vCount} vowels.<br>The vowels found are ${vFound}`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    var vCount = 0;
    var vFound = "";
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    arr = str.split('');
    arr.forEach(element => {
        vowels.forEach(vowel => {
            if (element == vowel) {
                vCount++;
                vFound = vFound + element;
            }
        });
    });
    return [vCount, vFound];

}