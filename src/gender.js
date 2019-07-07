import { initOptions } from "./initOptions";
import { pickone } from "./pick";
const gender = settings => {
  const options = initOptions(
    { genders: ["Male", "Female"], extraGenders: [] },
    settings
  );
  return pickone(options.genders.concat(options.extraGenders));
};

export { gender };
