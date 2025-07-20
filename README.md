# Pet Username Generator

Generate fun, **pet-themed usernames** with random **adjectives, animal-related words, and numbers**.  
Works in **Node.js**, **React**, and **React Native**, and allows **custom word separators** (e.g., `_`, `-`, `.`).

---

## Features

- 600+ million possible combinations (60 adjectives × 100 pet words × 100 pet names × 1000 number variants).
- Lightweight & **dependency-free**.
- **Customizable separators** for better username readability.
- **Works in all environments** – Node.js, React, and React Native.

---

## Installation

```bash
npm install pet-username-generator
```

or

```bash
yarn add pet-username-generator
```

---

## Usage

### 1. Node.js (CommonJS)

```javascript
const { generatePetUsername } = require("pet-username-generator");

console.log(generatePetUsername());
// Example: "HappyPawLuna007"

console.log(generatePetUsername("_"));
// Example: "Brave_Paw_Buddy_042"
```

---

### 2. React / React Native (ESM)

```javascript
import generatePetUsername from "pet-username-generator";

console.log(generatePetUsername());
// Example: "FuzzyTailSimba085"

console.log(generatePetUsername("-"));
// Example: "Fluffy-Whisker-Oreo-123"
```

---

## API

### `generatePetUsername(separator?)`

Generates a random pet-themed username.

**Parameters:**

- `separator` (optional): A string used to separate words in the username.  
  Default: `""` (no separator).

**Returns:**

- A string containing the username.

**Example:**

```javascript
generatePetUsername(); // "HappyPawLuna007"
generatePetUsername("_"); // "Happy_Paw_Luna_007"
generatePetUsername("-"); // "Happy-Paw-Luna-007"
```

---

## Examples

```javascript
// Generate 5 random usernames
for (let i = 0; i < 5; i++) {
  console.log(generatePetUsername("_"));
}

// Output:
Fluffy_Paw_Rocky_001;
Clever_Whisker_Oreo_57;
Happy_Wing_Simba_008;
Wild_Beak_Buddy_307;
Brave_Tail_Luna_92;
```

---

## Why Use This?

- Perfect for **e-commerce stores, games, chat apps, or user onboarding** where fun usernames make the experience better.
- Covers **cats, dogs, birds, fish, reptiles, farm animals**, and more for **diverse pet naming**.

---

## License

[MIT](LICENSE)
