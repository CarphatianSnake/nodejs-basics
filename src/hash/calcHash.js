import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const path = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
  const input = createReadStream(path);

  input.on('readable', () => {
    const chunk = input.read();

    if (chunk) {
      hash.update(chunk);
    } else {
      console.log(`File's hash: ${hash.digest('hex')}`);
    }
  })
};

await calculateHash();
