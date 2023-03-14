const chars = ['|', '/', '-', '\\', '/', '-', '|', '\n'];
let timeInterval = 0;

for(let character of chars){
  timeInterval += 100
  setTimeout(() => {
    process.stdout.write(`\r${character}`);
  }, timeInterval);
}
