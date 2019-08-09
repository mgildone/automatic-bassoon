import { pickPersonalityTrait, pickGenericTrait } from "../index";
const generic = require("../data/generic.json");
const personality = require("../data/personality.json");

const genericTraits = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];
const personalityTraits = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];

describe("Generic traits", () => {
  it("Should return an element from the array", () => {
    const actual = pickGenericTrait();
    expect(generic.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickGenericTrait({
      genericTraits
    });

    expect(genericTraits.indexOf(actual) >= 0).toBeTruthy();
  });
});

describe("Personality traits", () => {
  it("Should return an element from the array", () => {
    const actual = pickPersonalityTrait();
    expect(personality.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickPersonalityTrait({
      personalityTraits
    });

    expect(personalityTraits.indexOf(actual) >= 0).toBeTruthy();
  });
});
