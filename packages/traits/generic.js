import { pickone } from "@automatic-bassoon/core";
import { pipe, ifElse, has, identity, isNil } from "ramda";
const generic = require("./data/generic.json");

const checkIfGenericTraits = ifElse(
  has("genericTraits"),
  ({ genericTraits }) => genericTraits,
  () => generic
);

const checkIfObject = ifElse(isNil, () => ({}), identity);

const validate = pipe(
  checkIfObject,
  checkIfGenericTraits
);

const pickGenericTrait = pipe(
  validate,
  pickone
);

export { pickGenericTrait };
