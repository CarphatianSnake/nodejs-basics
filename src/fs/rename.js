import { access, rename as renameFile } from 'node:fs';

const rename = async () => {
  const path = 'src/fs/files/';
  const oldFile = 'wrongFilename.txt';
  const newFile = 'properFilename.md';
  const oldFilePath = path + oldFile;
  const newFilePath = path + newFile;
  
  access(oldFilePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      access(newFilePath, (err) => {
        if (err) {
          renameFile(oldFilePath, newFilePath, (error) => {
            if (error) {
              console.log(error);
            } else {
              console.log('File was renamed');
            }
          })
        } else {
          throw new Error('FS operation failed');
        }
      })
    }
  })
};

await rename();
