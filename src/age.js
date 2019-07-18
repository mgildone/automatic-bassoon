import { pipe, ifElse, has, assoc, identity } from "ramda";
import { defaults } from "./defaults";

const checkIfGender = ifElse(
  has("ages"),
  identity,
  assoc("ages", defaults.ages)
);

const pickAges = obj => {
  const id = obj.races.toLowerCase();
  return obj.ages[id]();
};

const pickAge = pipe(
  checkIfGender,
  pickAges
);

export { pickAge };
