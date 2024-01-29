import { join } from 'node:path';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { checkAccess } from '../fs/utils/checkAccess.js';
import { throwError } from '../fs/utils/throwError.js';

const decompress = async () => {
  const filesDir = join('src', 'zip', 'files');
  const fileToDecompress = join(filesDir, 'archive.gz');
  const decompressedFile = join(filesDir, 'fileToCompress.txt');

  const callback = () => {
    const decompress = createUnzip();
    const input = createReadStream(fileToDecompress);
    const output = createWriteStream(decompressedFile);
  
    input.pipe(decompress).pipe(output);

    console.log('File decompressed successfully!');
  }

  checkAccess(decompressedFile, throwError, callback);
};

await decompress();
