import { pickAncestry } from "../index";

const races = ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"];

describe("Race", () => {
  it("Should return an element from the array", () => {
    const actual = pickAncestry();
    expect(races.indexOf(actual.name) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickAncestry({
      ancestries: races
    });

    expect(races.indexOf(actual) >= 0).toBeTruthy();
  });
});
