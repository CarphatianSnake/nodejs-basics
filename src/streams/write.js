import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
  const path = 'src/streams/files/fileToWrite.txt';
  const encoding = 'utf8';
  const stream = createWriteStream(path, { encoding });

  stdin.on('data', (chunk) => {
    stream.write(chunk);
  }) 
};

await write();