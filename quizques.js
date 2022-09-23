const readlineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readlineSync.question("Hello buddy ! What's your name? \n");
console.log("\n")

function welcome(userName){
  console.log(chalk.magenta('Welcome '+ userName + '!'))
  console.log("\n")
}
welcome(userName)



function play(wish){
  var playWish = readlineSync.question(wish)
  var userWish = playWish.toLowerCase()
  if (userWish == "a" || userWish=="yes"){
    console.log("\n")
    console.log("Let's begin! You're at LEVEL 1")
    console.log("-----------------------------------\n")
    var score = 0;
    function quiz(question, answer1, answer2){
      var readlineSync = require("readline-sync")
      var userAnswer = readlineSync.question(question)
      var finalAnswer = userAnswer.toLowerCase()
      if (finalAnswer == answer1 || finalAnswer==answer2) {
        score+=10
        console.log(chalk.bgKeyword("green")("CORRECT!"),"Your score:" + score)
        console.log("\n")
      }
      else {
        score-=10 
        console.log(chalk.bgKeyword("red")("WRONG!"),"Your score:" + score)
        console.log("\n")
      }
    }
    quiz("Can you sneeze in your sleep? \n a. yes \n b. no \n--> ","b", "no", "b");
    quiz("Bay of Bengal is in which state? \n--> ", "liquid")

    
    
    if (score==20){
      console.log(chalk.bold("Hehe! Not bad, " + userName +". You have now entered LEVEL 2."))
      console.log("\n")
      var levelTwo = readlineSync.question("Press y if you would like to continue. Otherwise press any other key.")
      var levelWish = levelTwo.toLowerCase()
      if (levelWish == "y"){
        console.log("-----------------------------------\n")
        quiz("Which world city has the slogan: What Happens Here, Stays Here? \n a. Amsterdam \n b. Las Vegas \n c. Rome \n--> ","b", "Las Vegas");
        quiz("What is in middle of Paris? \n--> ", "r")
        if (score==40) {
          console.log(chalk.bold("Oooooh! Quite sharp brain you have, we see! (¬‿¬)"))
          console.log(chalk.bold("-------You have entered LEVEL 3 congrats!------"))
          console.log("\n");
          quiz("I get smaller every time I take a bath. What am I?\n--> ","soap");
          quiz("I start out tall, but the longer I stand, the shorter I grow. What am I?\n--> ", "candle")
          quiz("What word is spelled incorrectly in every single dictionary?\n--> ", "incorrectly")
            if (score==50){
              console.log("-----------------------------------\n");
              console.log(chalk.bgKeyword("magenta")("Quiz Finished!"), "But Ouch! target missed.")
              console.log("Better luck next time,"+ userName + ".")
            }
            else if (score==70) {
              console.log("-----------------------------------\n")
              console.log(chalk.bgKeyword("magenta")("Quiz Finished!"))
              console.log(chalk.bold("Bravooo, You won! Next level loading soon ╰(*°▽°*)╯ ....."))
            }
            else {
              console.log("-----------------------------------\n")
              console.log(chalk.bgKeyword("red")("Oops, You lost! See you next time, " + userName + " :(" ))
            }
      }
      else {
      console.log(chalk.bgKeyword("red")("Oops, You lost! See you next time, " + userName + ".")) 
      }
      }
      else {
        console.log('\n')
        console.log("Tired this early?  (¬_¬ )")
        console.log(chalk.bgMagenta("Quiz Quitted!"))
      }
    }
    else {
      console.log(chalk.bgKeyword("red")("Oops, You lost! See you next time, " + userName + ".")) 
      }
    } 
  else {
    console.log("-----------------------------------\n")
    console.log(chalk.bold("Get the hell out of here, then!! -_-"))
  }
}
play("Shall we begin the game? \n a. yes \n b. no \n")