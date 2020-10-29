/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import getScoreItemStatus from "./getScoreItemStatus";
import config from "../Config.json";

describe("test getScoreItemStatus function", () => {
  test("earned money item", () => {
    const index = config.prices.length - 5;
    const correctAnswers = 5;
    const length = config.prices.length;

    const expected = getScoreItemStatus(index, correctAnswers, length);
    expect(expected).toBe("earned");
  });

  test("active money item", () => {
    const index = config.prices.length - 2;
    const correctAnswers = 1;
    const length = config.prices.length;

    const expected = getScoreItemStatus(index, correctAnswers, length);
    expect(expected).toBe("active");
  });

  test("default money item", () => {
    const index = config.prices.length - 3;
    const correctAnswers = 1;
    const length = config.prices.length;

    const expected = getScoreItemStatus(index, correctAnswers, length);
    expect(expected).toBe("");
  });
});
