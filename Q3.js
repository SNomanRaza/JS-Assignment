let numbers = [2,5,8,10,15,20];

const first = numbers.map(numbers => numbers * numbers)

const second = numbers.filter(numbers => numbers > 20)

const third = numbers.reduce((num1,num2)=> num1 + num2 )

console.log(first);

console.log(second);

console.log(third);
