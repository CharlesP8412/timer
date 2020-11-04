/* 

    The user can press b and it should beep right away
    The user can input any number from 1 to 9 and it should
        immediately output "setting timer for x seconds...", and
       beep after that number of seconds has passed
     The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

Take user Input
b for instant beep
1-9 for timed beep 
exit cmd
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = function (number) {
  //Makes the element a # from a string
  let num = Number(number)
  if (Number.isInteger(num)) {
    setTimeout(() => console.log('!!! BEEP !!!'), num * 1000)
  }
}

//LEFT OFF WITH EXTRA INPUTS AND CMD Capture
// Basic Timer works
rl.question('Timer Progam: \nEnter time from 1 to 9 seconds (if want longer times get a watch...) \n Press b to Test \n CTRL + C to Exit\nInput: ', (input) => {

  if (input === '\u0003') {
  console.log("Thanks for using me, ciao!")
   rl.close();
  }
  console.log(`Setting timer for x seconds... ${input}`);
  timer(input)
});