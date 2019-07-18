import { random } from "../random";

describe("Random", () => {
  it("Should return a number in the range", () => {
    const actual = random();
    expect(typeof actual === "number").toBeTruthy();
  });
  it("Should return a number in the range", () => {
    const actual = random({ min: 1, max: 5 });
    expect(actual >= 1 && actual <= 5).toBeTruthy();
  });
  it("Should throw an error if no values are passed", () => {
    expect(() => {
      random({ min: 5, max: 1 });
    }).toThrow();
  });
});
