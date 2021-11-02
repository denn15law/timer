const args = process.argv.slice(2);
const alarmTimes = args.sort((a,b) => a - b);
for (let num of alarmTimes) {
  //setting num to a number
  let number = Number(num);
  //if negative numbers
  if (number > 0){
    setTimeout(() => {
      console.log(`BEEP at ${num} seconds`);
    },number * 1000 );
  } 
}