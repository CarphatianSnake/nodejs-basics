import { access, readFile } from 'node:fs';
import { throwError } from './throwError.js';

const read = async () => {
  const path = 'src/fs/files/fileToRead.txt';
  const encoding = 'utf8';

  access(path, (err) => {
    if (err) {
      throwError();
    } else {
      readFile(path, encoding, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
      })
    }
  })
};

await read();
