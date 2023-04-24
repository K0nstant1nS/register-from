export const checkValid = (string, reg) => {
  const matches = string.match(reg);
  if (matches && matches[0] === string && matches.length === 1) {
    return true;
  } else {
    return false;
  }
};
