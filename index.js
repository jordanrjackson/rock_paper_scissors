var array = ["rock", "paper", "scissors"]

var clickRock = document.getElementById("rock")
var clickPaper = document.getElementById("paper")
var clickScissors = document.getElementById("scissors")

rock.addEventListener("click", autoChoice)
paper.addEventListener("click", autoChoice2)
scissors.addEventListener("click", autoChoice3)

function autoChoice() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "rock"
  compare(userChoice, compPick)
}
function autoChoice2() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "paper"
  compare(userChoice, compPick)
}
function autoChoice3() {
  var compPick = array[Math.floor(Math.random() * array.length)]
  var userChoice = "scissors"
  compare(userChoice, compPick)
}

function validateField() {
  var docs = document.getElementById("img1")
  docs.setAttribute("src", "/Users/jordan/Desktop/dpl_course/week4/day5/rock_paper_scissors/rock-50x50.png")
  docs.style.display = 'block'
}
function validateField2() {
  var docs = document.getElementById("img2")
  docs.setAttribute("src", "/Users/jordan/Desktop/dpl_course/week4/day5/rock_paper_scissors/paper-50x50.png")
  docs.style.display = 'block'
}
function validateField3() {
  var docs = document.getElementById("img3")
  docs.setAttribute("src", "/Users/jordan/Desktop/dpl_course/week4/day5/rock_paper_scissors/scissors-50x50.png")
  docs.style.display = 'block'
}

function compare(userChoice, compPick) {
  if (userChoice === compPick) {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "!" + " It's a tie!"
  }
  if (userChoice === "rock") {
    if (compPick === "scissors") {
      return validateField()
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You lose!"
      }
    }
  if (userChoice === "paper") {
    if (compPick === "rock") {
      return validateField2()
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You lose!"
      }
    }
  if (userChoice === "scissors") {
    if (compPick === "rock") {
      return validateField3()
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You win!"
    } else {
      return document.getElementById("game").innerHTML = "The computer chose " + `${compPick}` + "! You lose!"
    }
  }
}