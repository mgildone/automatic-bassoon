import { pickone } from "./utils/pickone";
import { createChancesArray } from "./utils/chances";
import { toObj, toMergedObj } from "./utils/toObj";
import { pipe } from "ramda";

const setClass = ({
  classes = [
    "Barbarian",
    "Fighter",
    "Paladin",
    "Bard",
    "Sorcerer",
    "Warlock",
    "Cleric",
    "Druid",
    "Monk",
    "Ranger",
    "Rogue",
    "Wizard"
  ],
  ratios = []
} = {}) => {
  if (ratios.length > 0 && ratios.length !== classes.length) {
    throw new Error("'ratio' has to have the same length as 'classes'");
  }
  return { list: classes, ratios };
};

const pickClass = pipe(
  setClass,
  createChancesArray,
  pickone
);
const pickClassToObj = toObj(pickClass)("klass");
const pickClassToMergeObj = toMergedObj(pickClassToObj);
export { createChancesArray, pickClass, pickClassToObj, pickClassToMergeObj };
