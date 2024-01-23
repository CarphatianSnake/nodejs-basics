const parseEnv = () => {
  const prefix = 'RSS_';  
  const RSSVariables = Object.entries(process.env)
    .reduce((acc, [key, value]) =>
      key.startsWith(prefix) ? acc + `${key}=${value}; ` : acc, '');

  console.log(RSSVariables.slice(0, -2));
};

parseEnv();
