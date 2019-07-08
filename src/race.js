import { pickone } from "./pickone";
import { chances } from "./chances";
import { toObj } from "./toObj";
import { pipe } from "ramda";

const createChancesArray = ({ races, ratios }) => {
  if (ratios.length > 0) {
    const arr = ratios.map((ratio, index) => ({
      name: races[index],
      pct: ratio
    }));
    return chances(arr);
  }
  return races;
};

const setRace = ({
  races = ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"],
  ratios = []
} = {}) => {
  if (ratios.length > 0 && ratios.length !== races.length) {
    throw new Error("'ratio' has to have the same length as 'races'");
  }
  return { races, ratios };
};

const pickRace = pipe(
  setRace,
  createChancesArray,
  pickone
);
const pickRaceToObj = toObj(pickRace)("race");

export { createChancesArray, pickRace, pickRaceToObj };
