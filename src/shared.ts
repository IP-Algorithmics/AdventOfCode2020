export const readDataFromFile = async (path: string = './input.txt', encoding = 'utf8') => {
    const fs = require('fs');
    return await fs.promises.readFile(path, { encoding });
};

export const inputDataToIntArray = (data: string, delimiter = '\n') => {
    return data.split(delimiter).map((x) => parseInt(x, 10));
};

export const inputDataPromiseToIntArray = async (data: Promise<string>, delimiter = '\n') => {
    return (await data).split(delimiter).map((x) => parseInt(x, 10));
};
