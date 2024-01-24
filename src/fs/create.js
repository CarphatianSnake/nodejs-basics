import { writeFile } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js'

const create = async () => {
  const path = 'src/fs/files/fresh.txt';
  const content = 'I am fresh and young';

  const callback = () => {
    writeFile(path, content, (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log('File created successfully');
      }
    })
  };

  checkAccess(path, throwError, callback);  
};

await create();
