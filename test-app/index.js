import { Create } from "../packages/create-character/index";

console.log(Create.ancestry());

console.log(Create.ancestry({ ancestries: ["a", "b", "c", "d", "e"] }));
