export const isStringEqual = (str1, str2) => {
  if (!str1 || !str2) {
    return false;
  }

  return str1.toLowerCase() === str2.toLowerCase();
};
