export const decryptMessageService = (message, data) => {
	/* this is an example for new snippet extension make by me xD */
	message = message.replaceAll("r", " ");
    message = message.replaceAll("o", "T");
	message = message.replaceAll("j", "E");
	message = message.replaceAll("$", "S");
    message = message.replaceAll("c", "I");
    message = message.replaceAll("f", "P");
    message = message.replaceAll("h", "O");
    message = message.replaceAll("!", "D");
    message = message.replaceAll("m", "C");
    message = message.replaceAll("h", "O");
    message = message.replaceAll("#", "M");
    message = message.replaceAll("l", "A");
    message = message.replaceAll("t", "N");
    message = message.replaceAll("d", "R");
    message = message.replaceAll("@", "L");
    message = message.replaceAll(")", "G");
    message = message.replaceAll("i", "Q");
    message = message.replaceAll("%", "F");
    message = message.replaceAll("a", "J");
    message = message.replaceAll("k", "V");
    message = message.replaceAll("b", "Y");
    message = message.replaceAll("p", "Z");
    message = message.replaceAll("^", "W");
    message = message.replaceAll("w", "U");


	for (const property of Object.keys(dict_encrip)) {
		const caracter = searchCaracter(dict_encrip[property]);
		message = message.replaceAll(property, caracter);
		data("decryptedMessage", message);
	}
	return message;
	
};


function contarCaracteresV2(str) {
	const caracteres = [...new Set(str.toLowerCase())];
	const info = [];
	const total = str.length;
	for (const caracter of caracteres) {
		const arreglo = [];
		str.split("").map((n) => {
			if (n.toLowerCase() === caracter) {
				arreglo.push(n);
			}
		});
		info.push(`${caracter}: ${((arreglo.length / total)*100).toFixed(6)} \n`);
	}
	return info;
}


function searchCaracter(porcent) {
	let temp = "";
	let por = "";
	for (const property of Object.keys(dic_pala)) {
		const dif = difAbs(property, porcent);
		por = property;
		if (dif < 0.4 && dif >= 0) {
			if (temp === "") {
				temp = property;
				continue;
			}
			if (dif < difAbs(temp, porcent) && dif >= 0) temp = property;
		}
	}
	return temp || por;
}

function difAbs(property, porcent) {
	return Math.abs(dic_pala[property] - porcent);
}

const dict_encrip ={
	r: 16.097561,
	l: 9.065041,
	j: 12.743902,
	h: 7.926829,
	$: 6.402439,
	t: 6.300813,
	c: 5.386179,
	d: 5.752033,
	o: 3.658537,
	g: 3.658537,
	"@": 3.861789,
	"!": 4.390244,
	m: 3.455285,
	"#": 2.601626,
	f: 2.235772,
	i: 1.382114,
	q: 1.199187,
	"*": 0.609756,
	k: 0.670732,
	b: 0.548780,
	")": 0.914634,
	a: 0.243902,
	p: 0.243902,
	"%": 0.406504,
	n: 0.162602,
	"^": 0.040650,
	"(": 0.040650
}


const dic_pala = {
	E: 13.279708,
	A: 12.426917,
	O: 9.455182,
	S: 7.250587,
	N: 7.083007,
	R: 6.978736,
	I: 6.695714,
	L: 6.010502,
	D: 4.971512,
	C: 4.345883,
	U: 4.088929,
	T: 4.122444,
	P: 2.860016,
	M: 2.387070,
	G: 1.340632,
	B: 1.299669,
	V: 1.012922,
	Q: 1.012922,
	Y: 0.774588,
	F: 0.744796,
	H: 0.703832,
	J: 0.506461,
	Z: 0.484117,
	"?": 0.189923,
	X: 0.152683,
	K: 0.007448,
	W: 0.003724,
}





