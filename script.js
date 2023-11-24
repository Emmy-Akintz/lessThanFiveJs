const randomNumTemplate = Math.random() * 10
const randomNum = Math.round(randomNumTemplate)

let userInput = document.getElementById("userinput")
console.log(userInput);

// console.log(randomNumTemplate);
// console.log(randomNum);

for (i = 0; i < 5; i++) {
    document.getElementById("query").innerHTML = "Input a number that must be less than the random number which is less than or equal to 10 and you have 5 attempts!"
    // const userInput = prompt("Input a number that must be less than the random number which is less than or equal to 10 and you have 5 attempts!")


    if (userInput < randomNum) {
        document.getElementById("output").innerHTML = "The number is less than the random number"
    } else if (userInput > randomNum) {
        document.getElementById("output").innerHTML = "The number is greater than the random number"
    } else if (userInput = randomNum) {
        document.getElementById("output").innerHTML = `You have guessed right and the value is ${randomNum}`
        break
    } else {
        document.getElementById("output").innerHTML = "You lost!<br>The value is " + randomNum
    }
}