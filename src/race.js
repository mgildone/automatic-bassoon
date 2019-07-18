import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfRace = ifElse(
  has("races"),
  identity,
  assoc("races", defaults.races)
);

const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRatios,
  checkIfRace
);
const createRacesChancesArray = ({ races, ratios }) =>
  createChancesArray({ list: races, ratios });

const pickRace = pipe(
  validate,
  createRacesChancesArray,
  pickone,
  checkIfObj
);

export { pickRace };
