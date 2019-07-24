const dwarf = require("./data/dwarf.json");
const elf = require("./data/elf.json");
const gnome = require("./data/gnome.json");
const goblin = require("./data/goblin.json");
const halfling = require("./data/halfling.json");
const human = require("./data/human.json");
const defaults = {
  ancestries: [dwarf, elf, gnome, goblin, halfling, human]
};

export { defaults };
