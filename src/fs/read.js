import { readFile } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';
import { join } from 'node:path';

const read = async () => {
  const path = join('src', 'fs', 'files', 'fileToRead.txt');
  const encoding = 'utf8';

  const callback = () => {
    readFile(path, encoding, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    })
  }

  checkAccess(path, callback, throwError);
};

await read();
