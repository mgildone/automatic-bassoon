import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfBond = ifElse(
  has("bonds"),
  identity,
  assoc("bonds", defaults.bonds)
);

const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRatios,
  checkIfBond
);
const createBondChancesArray = ({ bonds, ratios }) =>
  createChancesArray({ list: bonds, ratios });

const pickBond = pipe(
  validate,
  createBondChancesArray,
  pickone,
  checkIfObj
);

export { pickBond };
