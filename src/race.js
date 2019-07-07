import { initOptions } from "./initOptions";
import { pickone } from "./pick";
const race = settings => {
  const options = initOptions(
    {
      races: ["Dwarf", "Elf", "Gnome", "Goblin", "Halfling", "Human"],
      ratio: []
    },
    settings
  );

  if (
    options.ratio.length > 0 &&
    options.ratio.length !== options.races.length
  ) {
    throw new Error("'ratio' has to have the ~same length as 'races'");
  }

  return pickone(options.races);
};

export { race };
