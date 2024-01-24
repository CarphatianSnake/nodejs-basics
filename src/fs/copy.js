import { access, cp } from 'node:fs';
import { throwError } from './throwError.js';

const copy = async () => {
  const path = 'src/fs/';
  const dir = path + 'files';
  const newDir = path + 'files_copy';

  access(dir, (err) => {
    if (err) {
      throwError();
    } else {
      access(newDir, (err) => {
        if (err) {
          cp(dir, newDir, { recursive: true }, (error) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Folder copied successfully');
            }
          });
        } else {
          throwError();
        }
      })
    }
  })
};

await copy();
