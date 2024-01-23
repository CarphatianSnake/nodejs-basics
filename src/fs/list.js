import { access, readdir } from 'node:fs';

const list = async () => {
  const path = 'src/fs/files/';

  access(path, (err) => {
    if (err) {
      throw new Error('FS operation failed');
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
