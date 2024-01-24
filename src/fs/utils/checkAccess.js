import { access } from 'node:fs';

export const checkAccess = (path, onAccess, onError) => {
  access(path, (error) => {
    error ? onError() : onAccess();
  })
};
