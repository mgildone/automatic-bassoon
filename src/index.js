import { pickGender } from "./gender";
import { pickRace } from "./race";
import { pickClass } from "./class";
import { pickGeneralTraits } from "./generalTraits";
import { pickAlignment } from "./alignments";
import { pickAge } from "./age";
import { pickBond } from "./bond";
import { pickPersonalityTraits } from "./personalityTraits";
import { pipe, tap } from "ramda";
import { toObj, toMergedObj } from "./utils/toObj";
import { template } from "./utils/template";

const trace = label => {
  return tap(x => console.log(`${label}:  ${JSON.stringify(x)}`));
};

const generateCharacter = pipe(
  toMergedObj(toObj(pickGender)("genders")),
  toMergedObj(toObj(pickRace)("races")),
  toMergedObj(toObj(pickClass)("klasses")),
  toMergedObj(toObj(pickGeneralTraits)("generalTraits")),
  toMergedObj(toObj(pickAlignment)("alignments")),
  toMergedObj(toObj(pickAge)("age")),
  toMergedObj(toObj(pickBond)("bonds")),
  toMergedObj(toObj(pickPersonalityTraits)("personalityTraits")),
  trace("after pickGeneralTraits")
);

const character = generateCharacter({});
console.log(template(character));
