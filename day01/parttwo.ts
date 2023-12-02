import * as fs from "fs";
import * as readline from "readline";
const filePath = "./day01/input.txt";
const fileStream = fs.createReadStream(filePath);
const digitMap = {
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
};

var sum = 0;
const rl = readline.createInterface({
	input: fileStream,
	crlfDelay: Infinity,
});
rl.on("line", (line) => {
	sum += getNumber(line);
});
rl.on("close", () => {
	console.log(sum);
});

const getNumber = (line: string) => {
	const numbers: string[] = [];
	for (let i = 0; i < line.length; i++) {
		if (/\d/.test(line[i])) numbers.push(line[i]);
		else {
			for (let j = 3; j < 6; j++) {
				const sub = line.substring(i, i + j);
				if (sub in digitMap) numbers.push(digitMap[sub]);
			}
		}
	}
	return parseInt(numbers[0] + numbers[numbers.length - 1]);
};
