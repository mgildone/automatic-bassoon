import { pickGender } from "./gender";
import { pickRace } from "./race";

console.log("defaults", pickGender());
console.log(
  "genders default, extraGenders custom",
  pickGender({
    extraGenders: ["a", "b", "c", "D", "w"]
  })
);
console.log(
  "genders custom, extraGenders custom",
  pickGender({
    genders: ["Banana", "Mango"],
    extraGenders: ["a", "b", "c", "D", "w"]
  })
);
console.log(pickRace());
console.log(
  pickRace({
    races: ["a", "v", "s", "q", "g", "m", "n"]
  })
);
console.log(
  pickRace({
    ratios: [10, 20, 20, 20, 20, 10]
  })
);
