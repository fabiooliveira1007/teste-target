import fs from "node:fs";

const data = fs.readFileSync("dados.json", "utf8");

const faturamentoJson = JSON.parse(data);

const calcularFaturamento = (dados) => {
	const faturamentoDiario = dados.filter((item) => item.valor > 0);
	const menorFaturamento = Math.min(
		...faturamentoDiario.map((item) => item.valor),
	);
	const maiorFaturamento = Math.max(
		...faturamentoDiario.map((item) => item.valor),
	);
	const somaFaturamento = faturamentoDiario.reduce(
		(acc, item) => acc + item.valor,
		0,
	);
	const mediaFaturamento = somaFaturamento / faturamentoDiario.length;
	const diasAcimaMedia = faturamentoDiario.filter(
		(item) => item.valor > mediaFaturamento,
	).length;

	return {
		menorFaturamento: menorFaturamento.toFixed(2),
		maiorFaturamento: maiorFaturamento.toFixed(2),
		mediaFaturamento: mediaFaturamento.toFixed(2),
		diasAcimaMedia,
	};
};

const { menorFaturamento, maiorFaturamento, mediaFaturamento, diasAcimaMedia } =
	calcularFaturamento(faturamentoJson);

console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
console.log(`Média de faturamento: R$ ${mediaFaturamento}`);
console.log(
	`Número de dias com faturamento superior à média: ${diasAcimaMedia}`,
);
