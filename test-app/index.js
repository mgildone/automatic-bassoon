import { Create } from "../packages/create-character/index";

console.log(Create.ancestry());
console.log(Create.ancestry().name);
console.log(Create.ancestry({ ancestries: ["a", "b", "c", "d", "e"] }));

console.log(Create.profession());
console.log(Create.profession({ professions: ["aa", "bb", "cc", "dd", "ee"] }));
