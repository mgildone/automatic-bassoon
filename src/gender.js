import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfGender = ifElse(
  has("genders"),
  identity,
  assoc("genders", defaults.genders)
);

const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRatios,
  checkIfGender
);
const createGendersChancesArray = ({ genders, ratios }) =>
  createChancesArray({ list: genders, ratios });

const pickGender = pipe(
  validate,
  createGendersChancesArray,
  pickone,
  checkIfObj
);

export { pickGender };
