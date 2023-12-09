//generate a random number between [0,1] every 1000 milliseconds. Each time, add 1 to a counter. If random number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than 0.75
function randomGame(){
  let x
  let ans = 0
  let intervalID = setInterval(()=>{
    x = Math.random()
    ans++
    if(x > .75) {
      clearInterval(intervalID)
      console.log("It took " + ans + " try/tries.")
    }
  },1000)
}
