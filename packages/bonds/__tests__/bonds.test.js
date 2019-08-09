import { pickBond } from "../index";
const defaults = require("../data/defaults.json");

const bonds = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];

describe("Bonds", () => {
  it("Should return an element from the array", () => {
    const actual = pickBond();
    expect(defaults.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const actual = pickBond({
      bonds: bonds
    });

    expect(bonds.indexOf(actual) >= 0).toBeTruthy();
  });
});
