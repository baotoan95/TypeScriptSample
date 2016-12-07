let arr1: number[] = [3, 5, 6];
let arr2: string[] = ['Bao', 'Toan'];
let arr3: any[] = [1, 'Toan', true];

console.log(arr1);


// Tuples
let person : [string, number];
person = ['Bao Vi', 22];
person[0] = 'Bao Toan';
person[1] = 25;
person[2] = 'NLU';
// person[3] = true; wrong - just contains allowed types
console.log(person);