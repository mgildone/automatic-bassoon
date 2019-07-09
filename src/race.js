import { pickone } from "./utils/pickone";
import { createChancesArray } from "./utils/chances";
import { toObj, toMergedObj } from "./utils/toObj";
import { pipe } from "ramda";

const setRace = ({
  races = ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"],
  ratios = []
} = {}) => {
  if (ratios.length > 0 && ratios.length !== races.length) {
    throw new Error("'ratio' has to have the same length as 'races'");
  }
  return { list: races, ratios };
};

const pickRace = pipe(
  setRace,
  createChancesArray,
  pickone
);
const pickRaceToObj = toObj(pickRace)("race");
const pickRaceToMergeObj = toMergedObj(pickRaceToObj);

export { createChancesArray, pickRace, pickRaceToObj, pickRaceToMergeObj };
