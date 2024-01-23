import { access, readFile } from 'node:fs';

const read = async () => {
  const path = 'src/fs/files/fileToRead.txt';
  const encoding = 'utf8';

  access(path, (err) => {
    if (err) {
      throw new Error('FS operation failed');
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
