import { Create } from "../packages/create-character/index";
import chalk from "chalk";
const template = ({ ancestry, profession, bond } = {}) => chalk`
  Greetings,
  You are a {bold ${ancestry.name} ${profession}}.
  [past]
  My ideal is [ideal]. [inspirational quote]
  ${bond}
  [flaw]
  People that interact with me say that I [interaction trait].
  I've also been told that I'm [behaviour trait].
  [talent]
`;

console.log(Create.ancestry());
console.log(Create.ancestry().name);
console.log(Create.ancestry({ ancestries: ["a", "b", "c", "d", "e"] }));

console.log(Create.profession());
console.log(Create.profession({ professions: ["aa", "bb", "cc", "dd", "ee"] }));

console.log(Create.bond());
console.log(Create.bond({ bonds: ["aaa", "bbb", "ccc", "ddd", "eee"] }));

console.log();
console.log();
console.log();
console.log("+++++++++++++++++++++++++++++++++");
console.log(
  template({
    ancestry: Create.ancestry(),
    profession: Create.profession(),
    bond: Create.bond()
  })
);
console.log("+++++++++++++++++++++++++++++++++");
