/* 
Alarm clock / timer which will beep after a specified amount of time has passed. 
The user can specify an unlimited number of alarms using command line arguments
node timer1.js 10 3 5 15 9 

*/
//  const beep = process.stdout.write('\x07'); //x07 Doesnt work for my system, tried multiple variations with no success

const process = require('process');
const userInput = process.argv.splice(2)


const timer = function (arrOfNum) {

  for (let element of arrOfNum) {
    //Makes the element a # from a string
    let num = Number(element)

    if (Number.isInteger(num)) {
      setTimeout(() => console.log('!!! BEEP !!!'), num * 1000)
    }
    
  }
}
timer(userInput)