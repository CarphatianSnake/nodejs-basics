import { unlink } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';

const remove = async () => {
  const path = 'src/fs/files/fileToRemove.txt';

  const callback = () => {
    unlink(path, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('File was deleted');
      }
    })
  };

  checkAccess(path, callback, throwError);
};

await remove();
