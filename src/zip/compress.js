import { join } from 'node:path';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
  const filesDir = join('src', 'zip', 'files');
  const fileToCompress = join(filesDir, 'fileToCompress.txt');
  const compressedFile = join(filesDir, 'archive.gz');
  const gzip = createGzip();
  const input = createReadStream(fileToCompress);
  const output = createWriteStream(compressedFile);

  input.pipe(gzip).pipe(output);
};

await compress();
