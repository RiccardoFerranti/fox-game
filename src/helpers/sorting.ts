import { TDictionary } from "../commonTypes"

export const sortArrayNumericallyByKeyValue = <T extends TDictionary>(array: Array<T>, key: string, sorting: string = 'ASC') => (
  sorting === 'ASC'
    // sort by Number property ASCENDING (1 - 9)
    ? array.sort((a: TDictionary, b: TDictionary) => a[key] - b[key])
    // sort by Number property DESCENDING (9 - 1)
    : array.sort((a: TDictionary, b: TDictionary) => b[key] - a[key])
)