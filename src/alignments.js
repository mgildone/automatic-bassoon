import { pickone } from "./utils/pickone";
import { pipe, ifElse, has, assoc, identity, prop } from "ramda";
import { createChancesArray } from "./utils/chances";
import { defaults } from "./defaults";

const checkIfAlignments = ifElse(
  has("alignments"),
  identity,
  assoc("alignments", defaults.alignments)
);

const checkIfRatios = ifElse(has("ratios"), identity, assoc("ratios", []));
const checkIfObj = ifElse(has("name"), prop("name"), identity);
const validate = pipe(
  checkIfRatios,
  checkIfAlignments
);
const createAlignmentsChancesArray = ({ alignments, ratios }) =>
  createChancesArray({ list: alignments, ratios });

const pickAlignment = pipe(
  validate,
  createAlignmentsChancesArray,
  pickone,
  checkIfObj
);

export { pickAlignment };
