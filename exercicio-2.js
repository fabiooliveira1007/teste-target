const isFibonacci = (num) => {
	let [a, b] = [0, 1];
	while (b < num) {
		[a, b] = [b, a + b];
	}
	return b === num || num === 0;
};

const number = 21;
console.log(
	isFibonacci(number)
		? `${number} pertence à sequência de Fibonacci.`
		: `${number} não pertence à sequência de Fibonacci.`,
);
const generateFibonacciSequence = (num) => {
	let [a, b] = [0, 1];
	const sequence = [a];
	while (b <= num) {
		sequence.push(b);
		[a, b] = [b, a + b];
	}
	return sequence;
};

console.log(
	`Sequência de Fibonacci até ${number}: ${generateFibonacciSequence(number).join(", ")}`,
);
