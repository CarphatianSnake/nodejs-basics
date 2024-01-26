import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  stdin.pipe(
    new Transform({
      transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        callback(null, reversedChunk);
      }
    })
  )
  .pipe(stdout);
};

await transform();
