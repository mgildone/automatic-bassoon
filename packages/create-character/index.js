import { pickAncestry } from "@automatic-bassoon/ancestries";
import { pickProfession } from "@automatic-bassoon/professions";
import { pickBond } from "@automatic-bassoon/bonds";
import {
  pickPersonalityTrait,
  pickGenericTrait
} from "@automatic-bassoon/traits";

const Create = {
  ancestry: pickAncestry,
  profession: pickProfession,
  bond: pickBond,
  personalityTrait: pickPersonalityTrait,
  genericTrait: pickGenericTrait
};

export { Create };
