import { pickRace, createChancesArray } from "../race";
const races = ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"];
const ratios = [5, 5, 5, 10, 15, 60];
const racesList = createChancesArray({
  list: races,
  ratios
});

describe("Race", () => {
  it("Should return an element from the array", () => {
    const actual = pickRace();

    expect(races.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickRace({
      races
    });

    expect(races.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should throw an error if ratios and races have different length", () => {
    expect(() => {
      pickRace({
        ratios: [20, 40]
      });
    }).toThrow();
  });
  it("Should be 100 elements in the list", () => {
    const expected = 100;
    const actual = createChancesArray({
      list: races,
      ratios
    }).length;
    expect(actual).toEqual(expected);
  });
  races.forEach((item, index) => {
    it(`${item} should appear ${ratios[index]} in the matrix`, () => {
      const expected = ratios[index];
      const actual = racesList.filter(c => c.name === item).length;
      expect(actual).toEqual(expected);
    });
  });
});
