export function chances(arr) {
  if (arr.length === 0) {
    throw new Error("Cannot generateChances() from an empty array");
  }
  return [].concat(
    ...arr.map(val => {
      return Array(val.pct).fill(val);
    })
  );
}
