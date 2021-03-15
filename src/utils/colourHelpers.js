import { colourRatingRange } from "constants/numbers";

export const getRatingColour = (rating) => {
  const colourMap = { 0: "#f8b8b3", 1: "#f7fdaf", 2: "#aaf3a2" }; // red, yellow, green
  let colourIdx = 2;
  colourRatingRange.forEach((benchmark, idx) => {
    if (rating < benchmark) {
      colourIdx = idx - 1;
    }
  });

  return colourMap[colourIdx];
};
