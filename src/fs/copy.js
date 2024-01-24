import { cp } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';

const copy = async () => {
  const path = 'src/fs/';
  const dir = path + 'files';
  const newDir = path + 'files_copy';

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
