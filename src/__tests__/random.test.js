import { random } from "../random";

describe("Random", () => {
  it("Should throw an error if no values are passed", () => {
    expect(() => {
      random({ min: 5, max: 1 });
    }).toThrow();
  });
});
