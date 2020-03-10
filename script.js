// Programming Foundations
// Module Assignment 2
// 15.3.2020

// Question 1
var petArray = ["cat", "cow", "dog"];

// Question 2
console.log(petArray[1]);

// Question 3
petArray.push("sheep");

// Question 4
console.log(petArray.length);

// Question 5
var catObject = {
    name: "Snowball",
    colour: "white",
    age: 2
};

// Question 6
console.log(catObject.age);

// Question 7
catArray = [
    {
        name: "Snowball",
        colour: "white",
        age: 2
    }
];

// Question 8
for (var i = 0; i < catArray.length; i++) {
    console.log("name: " + catArray[i].name + "\ncolour: " + catArray[i].colour + "\nage: " + catArray[i].age);
}

// Question 9
function logToConsole(creativeNameOfArgument) {
    console.log(creativeNameOfArgument);
}

// Question 10
logToConsole("donkey");