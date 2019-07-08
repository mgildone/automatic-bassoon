import { pickGender } from "../gender";

describe("Gender", () => {
  it("Should return an element from the array", () => {
    const actual = pickGender();

    expect(["Male", "Female"].indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const arr = ["Male", "Female", "a", "b", "c", "D", "w"];
    const actual = pickGender({
      extraGenders: ["a", "b", "c", "D", "w"]
    });

    expect(arr.indexOf(actual) >= 0).toBeTruthy();
  });
  it("Should return an element from the array", () => {
    const arr = ["Banana", "Mango", "a", "b", "c", "D", "w"];
    const actual = pickGender({
      genders: ["Banana", "Mango"],
      extraGenders: ["a", "b", "c", "D", "w"]
    });

    expect(arr.indexOf(actual) >= 0).toBeTruthy();
  });
});
