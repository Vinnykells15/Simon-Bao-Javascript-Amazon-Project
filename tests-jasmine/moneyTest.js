import { formatCurrency } from "../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
  //BASIC CASE
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  //EDGE CASE

  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  //EDGE CASE

  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});


// //EDGE CASE
// console.log("rounds down to the nearest cent");
// if (formatCurrency(2000.4) === "20.00") {
//   console.log("passed");
// } else {
//   console.log("failed");
// }
