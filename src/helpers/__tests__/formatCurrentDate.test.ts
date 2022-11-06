import { mockedDateHumanReadble, mockedDate } from "../../../testUtils";
import getCurrentDate from "../formatCurrentDate";

describe('getCurrentDate function', () => {
  it('should return the correct current date formatted', () => {
    const inputDate = mockedDate;
    const expectedResult = mockedDateHumanReadble;

    expect(getCurrentDate(inputDate)).toBe(expectedResult)
  });
});