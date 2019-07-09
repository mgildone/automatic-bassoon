import { pickone } from "./utils/pickone";
import { toObj } from "./utils/toObj";
import { pipe } from "ramda";

const setGeneralTraits = ({
  generalTraits = [
    "average height",
    "average",
    "height",
    "short",
    "big",
    "large",
    "solid",
    "powerful",
    "toned",
    "muscular",
    "broad-shouldered",
    "strong",
    "tiny",
    "calloused",
    "grimy fingernails",
    "heavy",
    "fat",
    "overweight",
    "obese",
    "portly",
    "sloping shoulders",
    "tall",
    "lean",
    "fit",
    "athletic",
    "built",
    "square",
    "sturdy",
    "slender",
    "rough",
    "fit",
    "chiseled",
    "slender",
    "manicured",
    "trim",
    "slim",
    "thin",
    "skinny",
    "gaunt",
    "spare",
    "wiry",
    "strapping",
    "taut",
    "ripped",
    "smooth",
    "elegant",
    "long fingers",
    "ragged nails",
    "skeletal",
    "compact",
    "heavy-set",
    "morbidly obese",
    "flabby",
    "chunky",
    "chubby",
    "pudgy",
    "pot-bellied",
    "thick",
    "stout",
    "lush",
    "plush",
    "ample",
    "rounded",
    "generous",
    "plump",
    "leggy",
    "long-legged",
    "gangling",
    "lanky",
    "coltish",
    "lissome",
    "willowy",
    "lithe",
    "emaciated",
    "bony",
    "stocky",
    "rangy",
    "sinewy",
    "stringy",
    "ropy",
    "bowlegged",
    "delicate",
    "small",
    "stubby fingers",
    "ink-stained",
    "mousy"
  ]
} = {}) => {
  return generalTraits;
};

const pickGeneralTraits = pipe(
  setGeneralTraits,
  pickone
);
const pickGeneralTraitsToObj = toObj(pickGeneralTraits)("generalTraits");

export { pickGeneralTraits, pickGeneralTraitsToObj };
