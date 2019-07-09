import { toObj, toMergedObj } from "../toObj";

describe("toObj", () => {
  it("Should return an object", () => {
    const mockFn = jest.fn(x => x);
    const expected = { key: "value" };
    const actual = toObj(mockFn)("key")("value");
    expect(actual).toEqual(expected);
  });
});

describe("toMergedObj", () => {
  it("Should merge a passed object and return a new object", () => {
    const mockFn = jest.fn(x => "value");
    const mockFnToObj = toObj(mockFn)("key2");
    const mockFnToMergeObj = toMergedObj(mockFnToObj);
    const expected = { key: "value", key2: "value" };
    const actual = mockFnToMergeObj({
      key: "value"
    });
    expect(actual).toEqual(expected);
  });
});
