import { chances } from "../chances";

describe("Chances", () => {
  it("Should throw an error if an empty array is passed", () => {
    expect(() => {
      chances([]);
    }).toThrow();
  });
  it("Should be 10 genders in the list", () => {
    const obj = chances([
      {
        name: "A",
        pct: 5,
        id: "A"
      },
      {
        name: "B",
        pct: 5,
        id: "B"
      }
    ]);
    const expected = 10;
    const actual = obj.length;
    expect(actual).toEqual(expected);
  });

  const obj = chances([
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
  ]);
  obj.forEach(item => {
    it(`${item.name} should appear ${item.pct} in the matrix`, () => {
      const expected = item.pct;
      const actual = obj.filter(c => c.name === item.name).length;
      expect(actual).toEqual(expected);
    });
  });
});
