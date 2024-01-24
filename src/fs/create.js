import { access, writeFile } from 'node:fs';
import { throwError } from './throwError.js'

const create = async () => {
  const path = 'src/fs/files/fresh.txt';
  const content = 'I am fresh and young';

  access(path, (err) => {
    if (err) {
      writeFile(path, content, (error) => {
        if (error) {
          console.error(error)
        } else {
          console.log('File created successfully');
        }
      })
    } else {
      throwError();
    }
  })
  
};

await create();
