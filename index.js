var array = ["rock", "paper", "scissors"]

var clickRock = document.getElementById("rock")
var clickPaper = document.getElementById("paper")
var clickScissors = document.getElementById("scissors")

var userChoice = rock.addEventListener("click", autoChoice)
var userChoice = paper.addEventListener("click", autoChoice2)
var userChoice = scissors.addEventListener("click", autoChoice3)

function autoChoice() {
  var compChoice = array[Math.floor(Math.random() * array.length)]
  var userChoice = "rock"
  compare(userChoice, compChoice)
}
function autoChoice2() {
  var compChoice = array[Math.floor(Math.random() * array.length)]
  var userChoice = "paper"
  compare(userChoice, compChoice)
}
function autoChoice3() {
  var compChoice = array[Math.floor(Math.random() * array.length)]
  var userChoice = "scissors"
  compare(userChoice, compChoice)
}

function compare(userChoice, compChoice) {
  
  if (userChoice === compChoice) {
    return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "!" + " It's a tie!"
  }
  if (userChoice === "rock") {
    if (compChoice === "scissors") {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You lose!"
      }
    }
  if (userChoice === "paper") {
    if (compChoice === "rock") {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You lose!"
      }
    }
  if (userChoice === "scissors") {
    if (compChoice === "paper") {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compChoice}` + "! You lose!"
    }
  }
}