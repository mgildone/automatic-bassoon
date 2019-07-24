import { pickone, createChancesArray } from "@automatic-bassoon/core";
import { pipe, ifElse, has, assoc, identity, isNil } from "ramda";
import { defaults } from "./defaults";

const checkIfAncestry = ifElse(
  has("ancestries"),
  identity,
  assoc("ancestries", defaults.ancestries)
);

const checkIfObject = ifElse(isNil, () => ({}), identity);
const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const validate = pipe(
  checkIfObject,
  checkIfRatios,
  checkIfAncestry
);
const createAncestriesChancesArray = ({ ancestries, ratios }) => {
  return createChancesArray({ list: ancestries, ratios });
};

const pickAncestry = pipe(
  validate,
  createAncestriesChancesArray,
  pickone
);

export { pickAncestry };
