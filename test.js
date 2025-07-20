// test.js
const { generatePetUsername } = require("./index.js");

// Test with default separator
console.log("Default separator:");
for (let i = 0; i < 5; i++) {
  console.log(generatePetUsername());
}

// Test with underscore separator
console.log("\nUsing underscore separator:");
for (let i = 0; i < 5; i++) {
  console.log(generatePetUsername("_"));
}

// Test with dash separator
console.log("\nUsing dash separator:");
for (let i = 0; i < 5; i++) {
  console.log(generatePetUsername("-"));
}
