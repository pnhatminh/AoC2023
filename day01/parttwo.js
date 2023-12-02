"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
var filePath = "./day01/input.txt";
var fileStream = fs.createReadStream(filePath);
var digitMap = {
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
var rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
});
rl.on("line", function (line) {
    sum += getNumber(line);
});
rl.on("close", function () {
    console.log(sum);
});
var getNumber = function (line) {
    var numbers = [];
    for (var i = 0; i < line.length; i++) {
        if (/\d/.test(line[i]))
            numbers.push(line[i]);
        else {
            for (var j = 3; j < 6; j++) {
                var sub = line.substring(i, i + j);
                if (sub in digitMap)
                    numbers.push(digitMap[sub]);
            }
        }
    }
    return parseInt(numbers[0] + numbers[numbers.length - 1]);
};
