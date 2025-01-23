const calcularSoma = (indice) => {
	let soma = 0;
	let k = 0;
	while (k < indice) {
		k = k + 1;
		soma = soma + k;
	}
	return soma;
};

const indice = 13;
console.log(`Soma até o índice ${indice}: ${calcularSoma(indice)}`);
