import { env } from 'node:process';

const parseEnv = () => {
  const prefix = 'RSS_';  
  const RSSVariables = Object.entries(env)
    .reduce((acc, [key, value]) =>
      key.startsWith(prefix) ? acc + `${key}=${value}; ` : acc, '');

  console.log(RSSVariables.slice(0, -2));
};

parseEnv();
