import { pickone, createChancesArray } from "@automatic-bassoon/core";
import { pipe, ifElse, has, assoc, identity, prop, isNil } from "ramda";
import { defaults } from "./defaults";

const checkIfAncestry = ifElse(
  has("ancestries"),
  identity,
  assoc("ancestries", defaults.ancestries)
);

const checkIfObject = ifElse(isNil, () => ({}), identity);
const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfObject,
  checkIfRatios,
  checkIfAncestry
);
const createAncestrysChancesArray = ({ ancestries, ratios }) => {
  return createChancesArray({ list: ancestries, ratios });
};

const pickAncestry = pipe(
  validate,
  createAncestrysChancesArray,
  pickone,
  checkIfObj
);

export { pickAncestry };
