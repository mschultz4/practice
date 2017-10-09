"use strict";

const pangram = text => {
  const textNormal = text
    .toLowerCase()
    .replace(/\W/g, "")
    .split("");

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  if (alphabet.every(letter => textNormal.includes(letter))) {
    return "pangram";
  }
  return "not pangram";
};

console.log(pangram("hello howdy', @abcdefghijklmnopqrstuvwxyz#$$% do"));
