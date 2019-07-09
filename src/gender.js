import { pickone } from "./utils/pickone";
import { pipe } from "ramda";
import { toObj, toMergedObj } from "./utils/toObj";

const setGenders = ({ genders = ["Male", "Female"], extraGenders = [] } = {}) =>
  genders.concat(extraGenders);

const pickGender = pipe(
  setGenders,
  pickone
);

const pickGenderToObj = toObj(pickGender)("gender");
const pickGenderToMergeObj = toMergedObj(pickGenderToObj);

export { pickGender, pickGenderToObj, pickGenderToMergeObj };
