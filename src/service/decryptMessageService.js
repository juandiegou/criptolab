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


	for (const property of Object.keys(dict_encrip)) {
		const caracter = searchCaracter(dict_encrip[property]);
		if (property === "r") console.log({ caracter, property });
		message = message.replaceAll(property, caracter);
		data("decryptedMessage", message);
	}
	return message;
};

function searchCaracter(porcent) {
	let temp = "";
	let por = "";
	for (const property of Object.keys(dic_pala)) {
		const dif = difAbs(property, porcent);
		por =property;
		if (dif < 0.5 && dif >= 0) {
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

const dict_encrip = {
	r: 16.064909,
	j: 12.758621,
	l: 9.087221,
	h: 7.910751,
	$: 6.389452,
	t: 6.288032,
	d: 5.780933,
	c: 5.395538,
	"!": 4.381339,
	"@": 3.853955,
	o: 3.6714,
	g: 3.651116,
	m: 3.46856,
	"#": 2.616633,
	f: 2.231237,
	i: 1.37931,
	q: 1.196755,
	")": 0.912779,
	k: 0.669371,
	"*": 0.608519,
	b: 0.547667,
	"%": 0.40568,
	p: 0.243408,
	a: 0.243408,
	n: 0.162272,
	"(": 0.040568,
	"^": 0.040568,
	s: 0.0,
};

const dic_pala = {
	0: 0.0,
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
	T: 4.122444,
	U: 4.088929,
	P: 2.860016,
	M: 2.38707,
	G: 1.340632,
	B: 1.299669,
	V: 1.012922,
	Q: 1.012922,
	Y: 0.774588,
	F: 0.744796,
	H: 0.703832,
	J: 0.506461,
	Z: 0.484117,
	"?": 0.189923, //TODO: mirar que caracter es
	X: 0.152683,
	K: 0.007448,
	W: 0.003724,
};
