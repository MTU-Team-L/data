const path = require('path');
const fs = require('fs');
const makeDir = require('make-dir')

const p = path.resolve(process.argv[2]);
const nFiles = parseInt(process.argv[3]);
const out = path.resolve(process.argv[4]);

const cards = require(p);

const batchSize = Math.round(cards.length / nFiles);

let batch = [];
let batchN = 0;

(async () => {
	
await makeDir(out);

for (let i = 0; i < cards.length; i += batchSize) {
	const batch = cards.slice(i, i + batchSize);

	fs.writeFileSync(path.join(out, `${batchN}.json`), JSON.stringify(batch));

	batchN ++;
}
})();

//console.log(p, nFiles)