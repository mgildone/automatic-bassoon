import { pickone } from "@automatic-bassoon/core";
import { pipe, ifElse, has, identity, isNil } from "ramda";
const defaults = require("./data/defaults.json");

const checkIfBonds = ifElse(has("bonds"), ({ bonds }) => bonds, () => defaults);

const checkIfObject = ifElse(isNil, () => ({}), identity);

const validate = pipe(
  checkIfObject,
  checkIfBonds
);

const pickBond = pipe(
  validate,
  pickone
);

export { pickBond };
