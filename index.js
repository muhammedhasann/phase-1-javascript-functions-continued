// code your solution here
function saturdayFun (defaultActivity = "roller-skate") {
  return `This Saturday, I want to ${defaultActivity}!`;
}

function mondayWork (defaultActivity = "go to the office") {
  return `This Monday, I will ${defaultActivity}.`;
}


//THIS IS MY CODE BUT IT DOESN'T PASS THE TESTS
/* function wrapAdjective (greeting = "You are a dedicated programmer!") {
    return function (special) {
        return `${greeting} ${special}$!`

    }
}
const result = wrapAdjective("||")("a dedicated programmer")
const emphatic = result("a hard worker")
 */

//THIS ONE DOES I DON'T KNOW WHY YET BUT I WILL FIGURE IT OUT THIS CODE IS FROM THE BING AI CHAT BOT 

function wrapAdjective(highlightChar = '*') {
  return function(adjective) {
    return `You are ${highlightChar}${adjective}${highlightChar}!`;
  }
}
let result = wrapAdjective()
let emphatic = result("a hard worker")
console.log(emphatic);