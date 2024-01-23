import { access, cp } from 'node:fs';

const copy = async () => {
  const path = 'src/fs/';
  const dir = path + 'files';
  const newDir = path + 'files_copy';

  access(dir, (err) => {
    if (err) {
      throw new Error('FS operation failed');
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
          throw new Error('FS operation failed');
        }
      })
    }
  })
};

await copy();
