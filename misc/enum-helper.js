const fs = require("fs");

// values.txt:
// public static final nm a = a("ambient.cave");
// outputs enigma mappings (e.g. FIELD a AMBIEN_CAVE Lnm;)

const file = fs.readFileSync("values.txt", "utf8");
const lines = file.split("\n");

for (let i = 0; i < lines.length; i++) {
	const line = lines[i];
	const type = line.split(" ")[3];
	const obf = line.split(" ")[4];
	const bits = line.split("\"");
	const name = bits[bits.length - 2].replace(/\./g, "_").toUpperCase();
	console.log(`\t FIELD ${obf} ${name} L${type};`);
}