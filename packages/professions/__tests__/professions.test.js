import { createChancesArray } from "@automatic-bassoon/core";
import { pickProfession } from "../index";

const professions = [
  "Barbarian",
  "Fighter",
  "Paladin",
  "Bard",
  "Sorcerer",
  "Warlock",
  "Cleric",
  "Druid",
  "Monk",
  "Ranger",
  "Rogue",
  "Wizard"
];

describe("Professions", () => {
  it("Should return an element from the array", () => {
    const actual = pickProfession();
    expect(professions.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickProfession({
      professions
    });

    expect(professions.indexOf(actual) >= 0).toBeTruthy();
  });
});
