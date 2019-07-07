import { gender } from "./gender";
import { race } from "./race";

console.log(gender());
console.log(race());
console.log(
  race({
    races: [
      "Dragonborn",
      "Dwarf",
      "Elf",
      "Gnome",
      "Goblin",
      "Halfling",
      "Human"
    ]
  })
);
