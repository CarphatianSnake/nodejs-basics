import { join } from 'node:path';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { checkAccess } from '../fs/utils/checkAccess.js';
import { throwError } from '../fs/utils/throwError.js';

const compress = async () => {
  const filesDir = join('src', 'zip', 'files');
  const fileToCompress = join(filesDir, 'fileToCompress.txt');
  const compressedFile = join(filesDir, 'archive.gz');

  const callback = () => {
    const gzip = createGzip();
    const input = createReadStream(fileToCompress);
    const output = createWriteStream(compressedFile);
  
    input.pipe(gzip).pipe(output);

    console.log('File compressed successfully!');
  }

  checkAccess(compressedFile, throwError, callback);
};

await compress();
