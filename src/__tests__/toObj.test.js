import { toObj } from "../toObj";

describe("toObj", () => {
  it("Should return an object", () => {
    const mockFn = jest.fn(x => x);
    const expected = { key: "value" };
    const actual = toObj(mockFn)("key")("value");
    expect(actual).toEqual(expected);
  });
});
