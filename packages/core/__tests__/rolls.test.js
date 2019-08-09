import { diceRoll } from "../rolls";

describe("Rolls", () => {
  it("Should throw an error if wrong param is passed", () => {
    expect(() => {
      diceRoll();
    }).toThrow();
  });
  it("Should return a value between 1 and 6", () => {
    const actual = diceRoll("1d6");
    expect(actual >= 1 && actual <= 6).toBeTruthy();
  });
});
