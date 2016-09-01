"use strict";

var fs = require("fs");

var file = fs.readFileSync(process.argv[2], "utf-8");
file
    .split("\n")
    .map((line) => {
        return line
            .replace(/\r/g, "")
            .replace(/\s*$/g, "")
            .split(" ");

    })
    .forEach((line) => {
        var output = "";
        for (var i = 1; i <= line[2]; i++) {
            if (i % line[0] === 0 && i % line[1] === 0) {
                output += "FB ";
            } else if (i % line[0] === 0) {
                output += "F ";
            } else if (i % line[1] === 0) {
                output += "B ";
            } else {
                output += i + " ";
            }
        }
        console.log(output.replace(/\s$/, ""));
    });