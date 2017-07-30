/**
 * OPTIONAL Pro Mode Assignment
 *
 * The below function will produce a couple of different numbers.
 *
 * For this assignment, work through the code without the use of the computer.
 * The objective is to think critically about how the code is executed and
 * see if you can figure out what the answer is for each of the two undefined variables.
 * This will require you to stretch your understanding of how functions, scope,
 * and variables work.
 *
 * This is a very difficult assignment for your first week with Javascript,
 * so don't get frustrated if you test the code out, and don't come to the same
 * conclusion as the code did. Instead, try to work through why the answers are
 * the way they are. If you got them right, then you should order up some
 * pizza and celebrate your understanding of these difficult topics!
 */
    var theNumber = 1;

    var michelangelo = function (value) {
        value = (value * 2); //1*2=2
        return value;
    };

    var donatello = function (value, anotherValue) { //2, 2
        value = anotherValue + value; //value=2+2=4
        anotherValue = value * anotherValue; //anotherValue=4*2=8
        return anotherValue; //8
    };

    var leonardo = function (value) {
        var anotherValue = value; //anotherValue=1
        value *= 4; //1*4=4
        theNumber = value / 2; //4/2=2; theNumber=2
        return (value + anotherValue); //4+1=5
    };

    var raphael = function (value, anotherValue, yetAnotherValue) { //3, 2, 2
        value = value * anotherValue + yetAnotherValue; //value=3*2+2=8
        return yetAnotherValue; //2
    };

    michelangelo(theNumber) + leonardo(theNumber); //2+5=7
    // ^ Before running the script, what number would you expect the line above to evaluate to?
    var resultOne = 7; // replace undefined with the result


    theNumber = theNumber * 2; //theNumber=1*2=2

    donatello(theNumber, 2) - (raphael(3, 2, theNumber)); //8-2=6
    // ^ Before running the script, what number would you expect the line above to evaluate to?
    var resultTwo = 6; // replace undefined with the result
