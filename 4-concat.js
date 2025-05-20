#!/usr/bin/node

const [argumentOne, argumentTwo] = process.argv.slice(2);

if (argumentOne === undefined) {
  console.log("argument");
} else if (argumentTwo === undefined) {
  console.log("HBTN");
} else {
  console.log("Python fun");
}
