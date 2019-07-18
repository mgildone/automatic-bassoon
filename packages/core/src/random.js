import { MIN_INT, MAX_INT } from "./constant";

const random = ({ min = MIN_INT, max = MAX_INT } = {}) => {
  if (min > max) {
    throw new Error("'min' cannot be bigger than 'max'");
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { random };
