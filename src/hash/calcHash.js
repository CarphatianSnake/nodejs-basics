import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream('src/hash/files/fileToCalculateHashFor.txt');

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
