import { cp } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';
import { join } from 'node:path';

const copy = async () => {
  const path = join('src', 'fs');
  const dir = join(path, 'files');
  const newDir = join(path, 'files_copy');

  const callback = () => {
    cp(dir, newDir, { recursive: true }, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Folder copied successfully');
      }
    });
  }

  const checkNewDir = () => {
    checkAccess(newDir, throwError, callback);
  }

  checkAccess(dir, checkNewDir, throwError);
};

await copy();
