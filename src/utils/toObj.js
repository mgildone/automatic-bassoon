import { mergeAll } from "ramda";

const toObj = fn => {
  return key => {
    return (...args) => {
      return { [key]: fn(...args) };
    };
  };
};

const toMergedObj = fn => {
  return obj => {
    return mergeAll([obj, fn(obj)]);
  };
};

export { toObj, toMergedObj };
