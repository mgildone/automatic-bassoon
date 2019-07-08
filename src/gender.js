import { pickone } from "./pickone";
import { pipe } from "ramda";

const setGenders = ({ genders = ["Male", "Female"], extraGenders = [] } = {}) =>
  genders.concat(extraGenders);

const pickGender = pipe(
  setGenders,
  pickone
);

export { pickGender };
