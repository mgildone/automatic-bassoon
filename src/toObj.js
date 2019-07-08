const toObj = fn => {
  return key => {
    return (...args) => {
      return { [key]: fn(...args) };
    };
  };
};

export { toObj };
