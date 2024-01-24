import { access, readdir } from 'node:fs';
import { throwError } from './throwError.js';

const list = async () => {
  const path = 'src/fs/files/';

  access(path, (err) => {
    if (err) {
      throwError();
    } else {
      readdir(path, (error, files) => {
        if (error) {
          console.error(error);
        } else {
          console.log(files.join(',\n'));
        }
      })
    }
  })
};

await list();
