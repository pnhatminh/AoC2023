import * as fs from 'fs';
import * as readline from 'readline';
const filePath = './day01/input.txt';
const fileStream = fs.createReadStream(filePath);
var sum = 0;
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
rl.on('line', (line) => {
  sum += getNumber(line)
});
rl.on('close', () => {
  console.log(sum);
});

const getNumber = (line: string) => {
  let first: string | null = null
  let second: string | null = null
  for (let char of line) {
    if (/\d/.test(char)) {
      if (!first) first = char
      else second = char
    }
  }
  if (!second) second = first
  return parseInt((first as string) + (second as string))
}

