import { readdir, mkdir, copyFile } from 'node:fs';
import { checkAccess } from './utils/checkAccess.js';
import { throwError } from './utils/throwError.js';
import { join } from 'node:path';

const copy = async () => {
  const path = join('src', 'fs');
  const dir = join(path, 'files');
  const newDir = join(path, 'files_copy');

  const callback = () => {
    readdir(dir, (error, files) => {
      if (error) {
        console.error(error);
      } else {
        mkdir(newDir, { recursive: true }, (err, pathname) => {
          if (err) {
            console.error(err);
          } else {
            files.forEach((file) => {
              const source = join(dir, file);
              const destination = join(pathname, file);

              copyFile(source, destination, (e) => {
                if (e) {
                  console.error(e);
                }
              })
            })
          }
        });
      }
    })
  }

  const checkNewDir = () => {
    checkAccess(newDir, throwError, callback);
  }

  checkAccess(dir, checkNewDir, throwError);
};

await copy();
