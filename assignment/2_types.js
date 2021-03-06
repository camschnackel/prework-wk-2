
/**
 * We are going to create an application where you create a variable, and then
 * create a function that doubles it!
 *
 * But there is a catch, its going to not just double numbers, but also strings!
 *
 * AND there is even special handling for objects and booleans.
 *
 * Fill in the code below based on the commented lines.
 */

var someNumber = 8;
var someString = "Taco";
var someBoolean = false;
// make sure to test all the possible inputs.
// var someString =

/*theDoubler(someNumber);*/
/*theDoubler(someString);*/
/*theDoubler(someBoolean);*/

function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
	// for number, we have given an example of how that works
	if (typeof someInput == "number") {
		// if type is number, log that number multiplied by 2
		console.log(someInput*2);

	// if type is string pass back that string twice
	// e.g. sending "someString" in, should log "someStringsomeString"

} else if (typeof someInput == "string") {
	console.log(someInput+someInput);

	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true

} else if (typeof someInput == "boolean") {
	if (someInput == false) {
		console.log("I won\'t double this");
	}	else {
		console.log("Super-duper true");
	}


	// if it's none of those, but it is an object, log "everything is an object"

} else if (typeof someInput == "object") {
	console.log("everything is an object");

	// if it is anything else, print out "I can't double this"

} else {
	console.log("I can't double this");
}
}
