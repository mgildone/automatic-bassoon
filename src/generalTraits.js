import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfGeneralTraits = ifElse(
  has("generalTraits"),
  identity,
  assoc("generalTraits", defaults.generalTraits)
);
const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));

const createGeneralTraitsChancesArray = ({ generalTraits, ratios }) =>
  createChancesArray({ list: generalTraits, ratios });

const validate = pipe(
  checkIfRatios,
  checkIfGeneralTraits
);

const pickGeneralTraits = pipe(
  validate,
  createGeneralTraitsChancesArray,
  pickone
);

export { pickGeneralTraits };
