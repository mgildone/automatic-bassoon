import { pickone } from "../pickone";

describe("Pick", () => {
  it("Should throw an error if an empty array is passed", () => {
    expect(() => {
      pickone([]);
    }).toThrow();
  });
});
