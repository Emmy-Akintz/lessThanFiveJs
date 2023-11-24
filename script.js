const randomNumTemplate = Math.random() * 10
const randomNum = Math.round(randomNumTemplate)

let output = document.querySelector("output")

// console.log(randomNumTemplate);
// console.log(randomNum);

for (i = 0; i < 5; i++) {
    const userInput = prompt("Input a number that must be less than the random number which is less than or equal to 10 and you have 5 attempts!")

    if (userInput < randomNum) {
        alert("The number is less than the random number")
    } else if (userInput > randomNum) {
        alert("The number is greater than the random number")
    } else if (userInput = randomNum) {
        alert(`You have guessed right and the value is ${randomNum}`)
        break
    } else {
        alert("You lost!<br>The value is " + randomNum)
    }
}