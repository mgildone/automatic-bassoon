import { pickone } from "@automatic-bassoon/core";
import { pipe, ifElse, has, identity, isNil } from "ramda";
import { defaults } from "./defaults";

const checkIfAncestry = ifElse(
  has("ancestries"),
  ({ ancestries }) => ancestries,
  () => defaults.ancestries
);

const checkIfObject = ifElse(isNil, () => ({}), identity);

const validate = pipe(
  checkIfObject,
  checkIfAncestry
);

const pickAncestry = pipe(
  validate,
  pickone
);

export { pickAncestry };
