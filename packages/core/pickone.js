import { random } from "./random";
const pickone = arr => {
  if (arr.length === 0) {
    throw new Error("Chance: Cannot pickone() from an empty array");
  }
  return arr[random({ min: 0, max: arr.length - 1 })];
};

export { pickone };
