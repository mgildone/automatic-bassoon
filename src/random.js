import { MIN_INT, MAX_INT } from "./constant";
import { initOptions } from "./initOptions";

export function random(settings) {
  const options = initOptions({ min: MIN_INT, max: MAX_INT }, settings);
  if (options.min > options.max) {
    throw new Error("'min' cannot be bigger than 'max'");
  }
  return Math.floor(
    Math.random() * (options.max - options.min + 1) + options.min
  );
}
