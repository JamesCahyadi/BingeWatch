import { COLOUR_RATING_RANGE } from "constants/numbers";

export const getRatingColour = (rating) => {
  const colourMap = { 0: "#f8b8b3", 1: "#f7fdaf", 2: "#aaf3a2" }; // red, yellow, green
  let colourIdx = 2;
  COLOUR_RATING_RANGE.some((benchmark, idx) => {
    if (rating < benchmark) {
      colourIdx = idx - 1;
      return true;
    }

    return false;
  });

  return colourMap[colourIdx];
};
