import { chances } from "../chances";
const list = [
  {
    name: "A",
    pct: 50,
    id: "A"
  },
  {
    name: "B",
    pct: 50,
    id: "B"
  }
];
const chancesList = chances(list);
describe("Chances", () => {
  it("Should throw an error if an empty array is passed", () => {
    expect(() => {
      chances([]);
    }).toThrow();
  });
  it("Should be 100 items in the list", () => {
    const expected = 100;
    const actual = chancesList.length;
    expect(actual).toEqual(expected);
  });

  list.forEach(item => {
    it(`${item.name} should appear ${item.pct} in the matrix`, () => {
      const expected = item.pct;
      const actual = chancesList.filter(c => c.name === item.name).length;
      expect(actual).toEqual(expected);
    });
  });
});
