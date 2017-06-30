// Problem 1
function combineWord (wordOne, wordTwo) {
    var twoWords = wordOne + wordTwo;
    return twoWords;
}
combineWord("dog","house");

//Problem 2
function repeatPhrase (phrase, n) {
    for(var i=n;i>0;i--){
        console.log(phrase);
    }
};
repeatPhrase("I'm Sleepy",51)

//Problem 3
function toTheNthPorwer (number, power) {
    var powered = Math.pow(number,power);
    return powered
}
toTheNthPower(2,3);

//Problem 4
function areaOfACircle (radius) {
    var r = radius * radius;
    var area = r * Math.PI;
    return area;
}
areaOfACircle(20);

//Problem 5
function pythagoreanTheorem (a,b) {
    var varA = Math.pow(a,2);
    var varB = Math.pow(b,2);
    var varc = varA + varB;
    var result = Math.sqrt(varC);
    return result;
}
pythagoreanTheorem(3,5);

//Problem 6
function isXEvenlyDivisibleByY (x, y) {
    if (x % y) {
        var result = "No, " + x + " is not evenly divisible by " + y;
        return result;
    } else {
         var result = "Yes, " + x + " is evenly divisible by " + y;
        return result;
    }
}
isXEvenlyDivisibleByY (534242,42)


//Problem 7
function countVowels () {

}
