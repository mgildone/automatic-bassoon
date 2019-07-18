// load data
const careers = require("./data/careers.json");
const genders = require("./data/genders.json");
const races = require("./data/races.json");
const generalTraits = require("./data/generalTraits.json");
const classes = require("./data/classes.json");
const alignments = require("./data/alignments.json");
const bonds = require("./data/bonds.json");
const personalityTraits = require("./data/personalityTraits.json");
import { rollXd10 } from "./utils/rolls";

const defaults = {
  careers,
  genders,
  races,
  generalTraits,
  classes,
  alignments,
  ages: {
    human: () => 15 + rollXd10(1),
    dwarf: () => 15 + rollXd10(10),
    halfling: () => 15 + rollXd10(5),
    elf: () => 30 + rollXd10(10),
    gnome: () => 30 + rollXd10(10),
    goblin: () => 30 + rollXd10(5)
  },
  bonds,
  personalityTraits
};

export { defaults };
