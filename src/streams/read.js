import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
  const path = 'src/streams/files/fileToRead.txt';
  const encoding = 'utf8';
  const stream = createReadStream(path, { encoding });

  stream.on('data', (chunk) => {
    stdout.write(chunk);
  })
};

await read();
