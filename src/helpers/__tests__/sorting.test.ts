import { sortArrayNumericallyByKeyValue } from "../sorting";

describe('sortArrayNumericallyByKeyValue function', () => {
  it('should return an array sorted in ascendent way when sorting is `ASC`', () => {
    const input = [ { id: 1 }, { id: 4 }, { id: 2 }, { id: 3 }];
    const expectedResult = [{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 }];

    expect(sortArrayNumericallyByKeyValue(input, 'id', 'ASC')).toMatchObject(expectedResult)
  });
  
  it('should return an array sorted in descendent way when sorting is `DESC`', () => {
    const input = [ { id: 1 }, { id: 4 }, { id: 2 }, { id: 3 }];
    const expectedResult = [{ id: 4 },{ id: 3 }, { id: 2 }, { id: 1 }];

    expect(sortArrayNumericallyByKeyValue(input, 'id', 'DESC')).toMatchObject(expectedResult)
  });
});