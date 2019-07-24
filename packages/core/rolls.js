import { roll } from "roll";
const diceRoll = dice => {
  if (typeof dice === "string") {
    return roll(dice).result;
  }
};

export { diceRoll };
