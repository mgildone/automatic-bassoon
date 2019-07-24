import { Create } from "../packages/create-character/index";

console.log(Create.ancestry());
console.log(Create.ancestry().name);
console.log(Create.ancestry({ ancestries: ["a", "b", "c", "d", "e"] }));
console.log(
  Create.ancestry({
    ancestries: ["a", "b", "c", "d", "e"],
    ratios: [20, 10, 10, 10, 50]
  })
);
console.log(Create.ancestry({ ratios: [10, 10, 10, 10, 10, 50] }));
