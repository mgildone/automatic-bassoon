import { mergeAll, pipe } from "ramda";

import { pickGenderToObj, pickGenderToMergeObj } from "./gender";
import { pickRaceToObj, pickRaceToMergeObj } from "./race";
import { pickGeneralTraitsToObj } from "./general-traits";
import { pickClassToObj, pickClassToMergeObj } from "./class";

const template = ({ gender, race, generalTraits, klass } = {}) =>
  `Greetings [name],\nYou are a ${gender.toLowerCase()} ${race} ${klass} described as ${generalTraits}.`;

console.log(
  template(
    mergeAll([
      pickGenderToObj(),
      pickRaceToObj(),
      pickGeneralTraitsToObj(),
      pickClassToObj()
    ])
  )
);

console.log(
  pipe(
    pickGenderToMergeObj,
    pickRaceToMergeObj,
    pickClassToMergeObj
  )({})
);
