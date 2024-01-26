import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import { join } from 'node:path';

const read = async () => {
  const path = join('src', 'streams', 'files', 'fileToRead.txt');
  const encoding = 'utf8';
  const stream = createReadStream(path, { encoding });

  stream.on('data', (chunk) => {
    stdout.write(chunk);
  })
};

await read();
