import { inputDataToIntArray } from './../shared';
import { input1 } from './input';

const solution1 = (arr: number[]) => {
    for (let value of arr) {
        const valueToFind = 2020 - value;
        const foundValue = arr.find((x) => x === valueToFind);
        if (foundValue) {
            return value * foundValue;
        }
    }
};

console.log('solution1:', solution1(inputDataToIntArray(input1)));

const solution2 = (arr: number[]) => {
    arr = arr.sort();
    for (let value of arr) {
        for (let reverseValue of arr.reverse()) {
            const valueToFind = 2020 - value - reverseValue;
            const foundValue = arr.find((x) => x === valueToFind);
            if (foundValue) {
                return value * reverseValue * foundValue;
            }
        }
    }
};

console.log('solution2:', solution2(inputDataToIntArray(input1)));
