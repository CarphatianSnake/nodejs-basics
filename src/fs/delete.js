import { access, unlink } from 'node:fs';
import { throwError } from './throwError.js';

const remove = async () => {
  const path = 'src/fs/files/fileToRemove.txt';

  access(path, (err) => {
    if (err) {
      throwError();
    } else {
      unlink(path, (error) => {
        if (err) {
          console.error(error);
        } else {
          console.log('File was deleted');
        }
      })
    }
  })
};

await remove();
