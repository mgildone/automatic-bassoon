import Roll from "roll";

const diceRoll = dice => {
  const roll = new Roll();
  if (typeof dice !== "string") {
    throw new Error("Dice must be a string");
  }
  return roll.roll(dice).result;
};

export { diceRoll };
