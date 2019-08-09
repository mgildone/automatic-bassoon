const chances = arr => {
  if (arr.length === 0) {
    throw new Error("Cannot generateChances() from an empty array");
  }
  return [].concat(
    ...arr.map(val => {
      return Array(val.pct).fill(val.name);
    })
  );
};

const createChancesArray = ({ list, ratios }) => {
  if (ratios.length > 0 && list.length !== ratios.length) {
    throw new Error("'List' and 'Ratios' need to have the same length");
  }
  if (ratios.length > 0) {
    const arr = ratios.map((ratio, index) => ({
      name: list[index],
      pct: ratio
    }));
    return chances(arr);
  }
  return list;
};

export { chances, createChancesArray };
