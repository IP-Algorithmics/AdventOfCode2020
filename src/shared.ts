export const readDataFromFile = async (path: string = './input.txt', encoding = 'utf8') => {
    const fs = require('fs');
    return await fs.promises.readFile(path, { encoding });
};
export const countOccurrences = (arr: number[], val: number) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
export const countCharacterOccurrencesInString = (str: string, search: string) =>
    (str.match(new RegExp(search, 'g')) || []).length;
