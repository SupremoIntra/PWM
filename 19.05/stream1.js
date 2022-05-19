const fs = require('fs');
const readable = fs.createReadStream('file.txt', { highWaterMark: 27 });
readable.on('dat', (chunk) => {
    console.log(`Leggo ${chunk.length} bytes \n ${chunk.toString()}\n`);
});