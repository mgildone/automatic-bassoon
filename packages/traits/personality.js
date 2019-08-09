import { pickone } from "@automatic-bassoon/core";
import { pipe, ifElse, has, identity, isNil } from "ramda";
const personality = require("./data/personality.json");

const checkIfPersonalityTraits = ifElse(
  has("personalityTraits"),
  ({ personalityTraits }) => personalityTraits,
  () => personality
);

const checkIfObject = ifElse(isNil, () => ({}), identity);

const validate = pipe(
  checkIfObject,
  checkIfPersonalityTraits
);

const pickPersonalityTrait = pipe(
  validate,
  pickone
);

export { pickPersonalityTrait };
