import { merge } from "ramda";

import { pickGenderToObj } from "./gender";
import { pickRaceToObj } from "./race";

console.log(JSON.stringify(merge(pickGenderToObj(), pickRaceToObj())));
