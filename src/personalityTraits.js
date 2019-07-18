import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfPersonalityTraits = ifElse(
  has("personalityTraits"),
  identity,
  assoc("personalityTraits", defaults.personalityTraits)
);

const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRatios,
  checkIfPersonalityTraits
);
const createPersonalityTraitsChancesArray = ({ personalityTraits, ratios }) =>
  createChancesArray({ list: personalityTraits, ratios });

const pickPersonalityTraits = pipe(
  validate,
  createPersonalityTraitsChancesArray,
  pickone,
  checkIfObj
);

export { pickPersonalityTraits };
