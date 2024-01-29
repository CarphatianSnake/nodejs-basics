import { readdir } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';
import { join } from 'node:path';

const list = async () => {
  const path = join('src', 'fs', 'files');

  const callback = () => {
    readdir(path, (error, files) => {
      if (error) {
        console.error(error);
      } else {
        console.log(files.join(',\n'));
      }
    })
  };

  checkAccess(path, callback, throwError);
};

await list();
