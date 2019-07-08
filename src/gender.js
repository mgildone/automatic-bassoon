import { pickone } from "./pickone";
import { pipe } from "ramda";
import { toObj } from "./toObj";

const setGenders = ({ genders = ["Male", "Female"], extraGenders = [] } = {}) =>
  genders.concat(extraGenders);

const pickGender = pipe(
  setGenders,
  pickone
);

const pickGenderToObj = toObj(pickGender)("gender");

export { pickGender, pickGenderToObj };
