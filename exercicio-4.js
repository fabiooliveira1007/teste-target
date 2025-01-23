const faturamentoEstados = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

const calcularPercentualEstados = (dados) => {
	const totalFaturamento = Object.values(dados).reduce(
		(acc, valor) => acc + valor,
		0,
	);
	return Object.keys(dados).map((estado) => ({
		estado,
		percentual: ((dados[estado] / totalFaturamento) * 100).toFixed(2),
	}));
};

const percentuais = calcularPercentualEstados(faturamentoEstados);

percentuais.forEach(({ estado, percentual }) => {
	console.log(`${estado}: ${percentual}%`);
});
