#!/usr/bin/node

const [argumentOne, argumentTwo] = process.argv.slice(2);

if (argumentOne === undefined) {
  console.log("No argument");
} else if (argumentTwo === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
