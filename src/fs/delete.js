import { access, unlink } from 'node:fs';

const remove = async () => {
  const path = 'src/fs/files/fileToRemove.txt';

  access(path, (err) => {
    if (err) {
      throw new Error('FS operation failed');
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
