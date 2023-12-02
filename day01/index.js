"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
var filePath = './day01/input.txt';
var fileStream = fs.createReadStream(filePath);
var sum = 0;
var rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
});
rl.on('line', function (line) {
    sum += getNumber(line);
});
rl.on('close', function () {
    console.log(sum);
});
var getNumber = function (line) {
    var first = null;
    var second = null;
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
        var char = line_1[_i];
        if (/\d/.test(char)) {
            if (!first)
                first = char;
            else
                second = char;
        }
    }
    if (!second)
        second = first;
    return parseInt(first + second);
};
