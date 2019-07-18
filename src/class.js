import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const missingRace = () => new Error("Race is missing");
const getClass = obj => prop([obj.races.toLowerCase()], defaults.classes);

const checkIfRace = ifElse(has("races"), getClass, missingRace);
const checkIfClasses = ifElse(
  has("classes"),
  identity,
  assoc("classes", defaults.classes)
);
const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRace,
  checkIfRatios,
  checkIfClasses
);

const createClassChancesArray = ({ classes, ratios }) =>
  createChancesArray({ list: classes, ratios });

const pickClass = pipe(
  validate,
  createClassChancesArray,
  pickone,
  checkIfObj
);

export { pickClass };
