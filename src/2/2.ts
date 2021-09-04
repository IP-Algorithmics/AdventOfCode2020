import { countCharacterOccurrencesInString } from '../shared';
import { input2 } from './input';

interface Data {
    text: string;
    letter: string;
    min: number;
    max: number;
}

const parseInputData = (data: string): Data[] => {
    return data
        .trim()
        .split('\n')
        .map((x) => x.replace(' ', '').split(':'))
        .map((y) => {
            const rule = y[0];
            const text = y[1];
            const interval = rule
                .slice(0, -1)
                .split('-')
                .map((x) => parseInt(x, 10));
            return {
                text,
                letter: rule.substr(-1),
                min: interval[0],
                max: interval[1]
            };
        });
};

const solution = (dataArr: Data[]) => {
    return dataArr.filter((x) => {
        const count = countCharacterOccurrencesInString(x.text, x.letter);
        return count >= x.min && count <= x.max;
    }).length;
};

console.log(solution(parseInputData(input2)));

const solution2 = (dataArr: Data[]) => {
    return dataArr.filter((x) => {
        const firstOccurrence = x.text[x.min - 1] === x.letter;
        const secondOccurrence = x.text[x.max - 1] === x.letter;

        return (firstOccurrence || secondOccurrence) && firstOccurrence !== secondOccurrence;
    }).length;
};

console.log(solution2(parseInputData(input2)));
