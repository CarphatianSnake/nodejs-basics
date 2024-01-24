import { rename as renameFile } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';

const rename = async () => {
  const path = 'src/fs/files/';
  const oldFile = 'wrongFilename.txt';
  const newFile = 'properFilename.md';
  const oldFilePath = path + oldFile;
  const newFilePath = path + newFile;

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
