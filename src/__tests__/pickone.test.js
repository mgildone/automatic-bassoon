import { pickone } from "../pickone";

describe("Pickone", () => {
  it("Should return an element from the array", () => {
    const arr = ["a", "v", "c", "m"];
    const actual = pickone(arr);

    expect(arr.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should throw an error if an empty array is passed", () => {
    expect(() => {
      pickone([]);
    }).toThrow();
  });
});
