import { rename as renameFile } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';
import { join } from 'node:path';

const rename = async () => {
  const path = join('src', 'fs', 'files');
  const oldFilePath = join(path, 'wrongFilename.txt');
  const newFilePath = join(path, 'properFilename.md');

  const callback = () => {
    renameFile(oldFilePath, newFilePath, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('File was renamed');
      }
    })
  };

  const checkNewFilePath = () => {
    checkAccess(newFilePath, throwError, callback);
  }

  checkAccess(oldFilePath, checkNewFilePath, throwError);
};

await rename();
