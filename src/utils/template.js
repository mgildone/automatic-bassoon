import chalk from "chalk";
const template = ({
  genders,
  races,
  generalTraits,
  klasses,
  alignments,
  age,
  bonds,
  personalityTraits
} = {}) => chalk`
  Greetings, your name is [fullname] and I'm ${age} years old.
  You are a {bold ${generalTraits} ${genders.toLowerCase()} ${races} ${klasses}} and ${alignments}.
  [past]
  ${personalityTraits}
  My ideal is [ideal]. [inspirational quote]
  ${bonds}
  [flaw]
  People that interact with me say that I [interaction trait].
  I've also been told that I'm [behaviour trait].
  [talent]
`;

export { template };
