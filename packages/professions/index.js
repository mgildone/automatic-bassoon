import { pickone } from "@automatic-bassoon/core";
import { pickAncestry } from "@automatic-bassoon/ancestries";
import { pipe, ifElse, has, identity, isNil } from "ramda";
import { defaults } from "./defaults";

const checkIfProfession = ifElse(
  has("professions"),
  ({ professions }) => professions,
  () => defaults.professions[pickAncestry().id].professions
);

const checkIfObject = ifElse(isNil, () => ({}), identity);

const validate = pipe(
  checkIfObject,
  checkIfProfession
);

const pickProfession = pipe(
  validate,
  pickone
);

export { pickProfession };
