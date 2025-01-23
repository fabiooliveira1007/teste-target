const inverterString = (str) => {
	let inverted = "";
	for (let i = str.length - 1; i >= 0; i--) {
		inverted += str[i];
	}
	return inverted;
};

const string = "Quero ser contratado";
console.log(`String invertida: ${inverterString(string)}`);
